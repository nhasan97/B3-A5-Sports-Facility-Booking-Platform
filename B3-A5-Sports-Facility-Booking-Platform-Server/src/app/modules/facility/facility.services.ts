import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { TFacility } from './facility.interface';
import { facilityModel } from './facility.model';
import { bookingModel } from '../booking/booking.model';
import { getCurrentDate } from '../../utilities/dateFunctions';
import { getCurrentTime } from '../../utilities/timeFunctions';
import mongoose from 'mongoose';
/*

----------------service function for inserting facility data in DB----------------*/
const createFacilityIntoDB = async (facilityData: TFacility) => {
  const response = await facilityModel.create(facilityData);
  return response;
};
/*

----------------service function for updating facility data in DB----------------*/
const updateFacilityIntoDB = async (
  id: string,
  updatedFacilityData: Partial<TFacility>,
) => {
  //checking if the selected facility exists or not. If not throwing an error.
  const loadedFacility = await facilityModel.doesFacilityExist(id);
  if (!loadedFacility) {
    throw new AppError(httpStatus.NOT_FOUND, 'Facility not found');
  }

  //updating facility data in DB
  const response = await facilityModel.findByIdAndUpdate(
    id,
    updatedFacilityData,
    { new: true },
  );

  //returning response
  return response;
};
/*

----------------service function for deleting specific facility data from DB----------------*/
const deleteFacilityFromDB = async (id: string) => {
  //checking if the selected facility exists or not. If not throwing an error.
  const loadedFacility = await facilityModel.doesFacilityExist(id);
  if (!loadedFacility) {
    throw new AppError(httpStatus.NOT_FOUND, 'Facility not found');
  }

  //checking if the facility has any future booking or not
  const bookingExistsForThisFacility = await bookingModel.find({
    facility: id,
    $or: [
      {
        date: { $gt: getCurrentDate() },
      },
      {
        date: getCurrentDate(),
        startTime: { $gte: getCurrentTime() },
      },
    ],
  });

  //creating session
  const session = await mongoose.startSession();

  try {
    //starting transaction using session
    session.startTransaction();

    //transaction-1: deleting facility from db
    const facilityDeleted = await facilityModel.findByIdAndUpdate(
      id,
      { isDeleted: true },
      { new: true, session },
    );

    if (!facilityDeleted) {
      throw new AppError(
        httpStatus.INTERNAL_SERVER_ERROR,
        'Failed to delete facility',
      );
    }

    //transaction-2: changing booking status to canceled
    if (bookingExistsForThisFacility) {
      for (const booking of bookingExistsForThisFacility) {
        await bookingModel.findByIdAndUpdate(
          booking._id,
          { isBooked: 'canceled' },
          { new: true, session },
        );
      }
    }

    //committing transaction and ending session
    await session.commitTransaction();
    await session.endSession();

    return facilityDeleted;
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw new AppError(
      httpStatus.INTERNAL_SERVER_ERROR,
      'Failed to delete facility',
    );
  }
};
/*

----------------service function for fetching all facility data from DB----------------*/
const getAllFacilitiesFromDB = async (query: Record<string, unknown>) => {
  const queryObject = { ...query };

  const searchableFields = ['name', 'location'];
  let searchTerm = '';
  if (query?.searchTerm) {
    searchTerm = query?.searchTerm as string;
  }
  const searchQuery = facilityModel.find({
    $or: searchableFields.map((field) => ({
      [field]: { $regex: searchTerm, $options: 'i' },
    })),
  });

  const excludeFields = ['searchTerm', 'sort', 'limit', 'page'];

  excludeFields.forEach((el) => delete queryObject[el]);
  const filterQuery = searchQuery.find(queryObject);

  let sort = 'name';
  if (query?.sort) {
    sort = query?.sort as string;
  }
  const sortQuery = filterQuery.sort(sort);

  let limit = 1;
  let page = 1;
  let skip = 0;
  if (query?.limit) {
    limit = Number(query?.limit);
  }
  if (query?.page) {
    page = Number(query?.page);
    skip = page * limit;
  }

  const paginateQuery = sortQuery.skip(skip);

  const limitQuery = await paginateQuery.limit(limit);

  return limitQuery;
};
/*

----------------service function for fetching specific facility data from DB----------------*/
const getSingleFacilityFromDB = async (id: string) => {
  const response = await facilityModel.findById(id);
  if (!response) {
    throw new AppError(httpStatus.NOT_FOUND, 'Facility not found');
  }
  return response;
};
/*

----------------service function for getting total number of facility data from DB----------------*/
const getFacilityCountFromDB = async () => {
  const response = await facilityModel.countDocuments({
    isDeleted: { $ne: true },
  });
  return response;
};

//exporting all the service functions through facilityServices object
export const facilityServices = {
  createFacilityIntoDB,
  updateFacilityIntoDB,
  deleteFacilityFromDB,
  getAllFacilitiesFromDB,
  getSingleFacilityFromDB,
  getFacilityCountFromDB,
};
