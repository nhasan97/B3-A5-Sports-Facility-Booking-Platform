import facilityApi from "@/redux/features/facility/facilityApi";
import { TFacility, TFacilityContext } from "@/types/facility.type";
import { TChildren } from "@/types/global.type";
import { uploadImage } from "@/utils/imageUploader";
import { createContext, FormEvent, useState } from "react";
import { toast } from "sonner";

export const FacilityContext = createContext<TFacilityContext | undefined>(
  undefined
);

const FacilityProvider = ({ children }: TChildren) => {
  //States for browsing
  const [searchTerm, setSearchTerm] = useState("");
  // const [categoryToLoad, setCategoryToLoad] = useState("");
  const [sort, setSort] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(0);

  //States for DB operations
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [pricePerHour, setPricePerHour] = useState(0);
  const [location, setLocation] = useState("");
  const [photoUrl, setImageUrl] = useState<File | null>(null);

  //loading facilities
  const { isLoading: loadingFacilities, data: loadedFacilities } =
    facilityApi.useGetFacilitiesQuery({
      searchTerm,
      // categoryToLoad,
      sort,
      currentPage,
      itemsPerPage,
    });

  //loading number of total product
  const {
    isLoading: loadingNumberOfFacilities,
    data: loadedNumberOfFacilities,
  } = facilityApi.useGetFacilityCountQuery(undefined);

  //destructuring DB operation functions from hooks
  const [addFacility] = facilityApi.useAddFacilityMutation();
  const [editFacility] = facilityApi.useEditFacilityMutation();
  const [deleteFacility] = facilityApi.useDeleteFacilityMutation();

  //handling addition
  const handleAddFacility = async (e: FormEvent) => {
    e.preventDefault();

    let imageUrl = "";
    if (photoUrl) {
      imageUrl = await uploadImage(photoUrl as File);
    } else {
      imageUrl = import.meta.env.VITE_NO_IMAGE_AVAILABLE;
    }

    const facilityDetails: TFacility = {
      name,
      description,
      pricePerHour,
      location,
      imageUrl,
    };
    try {
      const res = await addFacility(facilityDetails).unwrap();
      console.log(res);
      // displaySuccessToast(res);
    } catch (err) {
      // toast.error(err.data.message);
    }
  };

  //handling edit
  const handleEditFacility = async (
    e: FormEvent,
    passedFacility: TFacility
  ) => {
    e.preventDefault();

    let editedImage;
    if (photoUrl) {
      editedImage = await uploadImage(photoUrl as File);
    } else {
      editedImage = passedFacility?.imageUrl;
    }

    const payload = {
      _id: passedFacility?._id,
      facilityDetails: {
        name: name,
        description: description,
        pricePerHour: pricePerHour,
        location: location,
        imageUrl: editedImage,
      },
    };
    try {
      // const res = await editFacility(payload).unwrap();
      await editFacility(payload).unwrap();
      resetValues();
      // displaySuccessToast(res);
    } catch (err) {
      // toast.error(err.data.message);
    }
  };

  //handling delete
  const handleDeleteFacility = (_id: string) => {
    toast.warning("Are you sure? You won't be able to revert this!", {
      action: {
        label: "Yes, delete it",
        onClick: async () => {
          try {
            // const res =
            await deleteFacility(_id).unwrap(); // displaySuccessToast(res);
          } catch (err) {
            // toast.error(err.data.message, { duration: 2000 });
          }
        },
      },
      cancel: {
        label: "Cancel",
        onClick: () => toast.info("Cancelled!", { duration: 2000 }),
      },
    });
  };

  const resetValues = () => {
    setName("");
    setDescription("");
    setPricePerHour(0);
    setLocation("");
    setImageUrl(null);
  };

  const facilityInfo: TFacilityContext = {
    loadingFacilities,
    facilities: loadedFacilities?.data,
    loadingNumberOfFacilities,
    numberOfFacilities: loadedNumberOfFacilities?.data,
    searchTerm,
    // categoryToLoad,
    sort,
    itemsPerPage,
    currentPage,
    setSearchTerm,
    // setCategoryToLoad,
    setSort,
    setItemsPerPage,
    setCurrentPage,
    setName,
    setDescription,
    setPricePerHour,
    setLocation,
    setImageUrl,
    handleAddFacility,
    handleEditFacility,
    handleDeleteFacility,
  };

  return (
    <FacilityContext.Provider value={facilityInfo}>
      {children}
    </FacilityContext.Provider>
  );
};

export default FacilityProvider;
