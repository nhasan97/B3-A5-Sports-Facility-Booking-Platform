import { Schema, model } from 'mongoose';
import { TFacility } from './facility.interface';

//creating mongoose schema as the first layer of validation for facility data
const facilitySchema = new Schema<TFacility>({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  pricePerHour: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
    trim: true,
  },
  isDeleted: {
    type: Boolean,
    required: false,
    default: false,
  },
});

//using document middleware for checking if the document already exists or not
facilitySchema.pre('save', async function (next) {
  const doesExist = await facilityModel.findOne({
    name: this.name,
    description: this.description,
    pricePerHour: this.pricePerHour,
    location: this.location,
  });
  if (doesExist) {
    throw new Error('facility already exists');
  }
  next();
});

//creating and exporting model for facility
export const facilityModel = model<TFacility>('Facilities', facilitySchema);
