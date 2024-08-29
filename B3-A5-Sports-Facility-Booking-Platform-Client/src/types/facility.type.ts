import { FormEvent } from "react";

export type TFacility = {
  _id?: string;
  imageUrl: string;
  name: string;
  description: string;
  pricePerHour: number;
  location: string;
};

export type TFacilityProp = {
  facility: TFacility;
};

export type TFacilityContext = {
  loadingFacilities: boolean;
  facilities: TFacility[];
  loadingNumberOfFacilities: boolean;
  numberOfFacilities: number;
  searchTerm: string;
  // categoryToLoad: string;
  sort: string;
  itemsPerPage: number;
  currentPage: number;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  // setCategoryToLoad: React.Dispatch<React.SetStateAction<string>>;
  setSort: React.Dispatch<React.SetStateAction<string>>;
  setItemsPerPage: React.Dispatch<React.SetStateAction<number>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  setPricePerHour: React.Dispatch<React.SetStateAction<number>>;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
  setImageUrl: React.Dispatch<React.SetStateAction<File | null>>;
  handleAddFacility: (e: FormEvent) => Promise<void>;
  handleEditFacility: (
    e: FormEvent,
    passedFacility: TFacility
  ) => Promise<void>;
  handleDeleteFacility: (_id: string) => void;
};

export type TFacilityManagementProp = {
  loadingFacilities: boolean;
  facilities: TFacility[];
  loadingNumberOfFacilities: boolean;
};
