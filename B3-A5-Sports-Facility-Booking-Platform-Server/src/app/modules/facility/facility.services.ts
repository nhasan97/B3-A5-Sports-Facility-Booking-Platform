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
const getAllFacilitiesFromDB = async () => {
  const response = await facilityModel.find();
  return response;
};

//exporting all the service functions through facilityServices object
export const facilityServices = {
  createFacilityIntoDB,
  updateFacilityIntoDB,
  deleteFacilityFromDB,
  getAllFacilitiesFromDB,
};
