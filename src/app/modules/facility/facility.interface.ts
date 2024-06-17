import { Model } from 'mongoose';

//declaring type for facility
export interface TFacility {
  name: string;
  description: string;
  pricePerHour: number;
  location: string;
  isDeleted?: boolean;
}

export interface FacilityModel extends Model<TFacility> {
  doesFacilityExist(id: string): Promise<TFacility>;
}
