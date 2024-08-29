import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { MdEditDocument } from "react-icons/md";
import { IoIosSave } from "react-icons/io";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { TFacilityContext, TFacilityProp } from "@/types/facility.type";
import useFacilityContext from "@/hooks/useFacilityContext";

const EditFacilityModal = ({ facility }: TFacilityProp) => {
  const {
    setName,
    setDescription,
    setPricePerHour,
    setLocation,
    setImageUrl,
    handleEditFacility,
  } = useFacilityContext() as TFacilityContext;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-transparent hover:bg-[#98b2992f] text-2xl sm:text-xl text-[#757575] hover:text-[#5D7E5F] rounded-full">
          <MdEditDocument />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-[#757575]">Edit Facility</DialogTitle>
        </DialogHeader>

        <form
          className="grid gap-4 py-4"
          onSubmit={(e) => handleEditFacility(e, facility)}
        >
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-left text-[#757575]">
              Name
            </Label>
            <Input
              id="name"
              className="col-span-3"
              defaultValue={facility?.name}
              onBlur={(e) => setName(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-left text-[#757575]">
              Description
            </Label>
            <Input
              id="description"
              className="col-span-3"
              defaultValue={facility?.description}
              onBlur={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="price" className="text-left text-[#757575]">
              Price
            </Label>
            <Input
              type="number"
              id="price"
              min={0}
              step={0.01}
              className="col-span-3"
              defaultValue={facility?.pricePerHour}
              onBlur={(e) => setPricePerHour(Number(e.target.value))}
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="location" className="text-left text-[#757575]">
              Location
            </Label>
            <Input
              id="location"
              className="col-span-3"
              defaultValue={facility?.location}
              onBlur={(e) => setLocation(e.target.value)}
            />
          </div>

          <div className="flex  justify-center items-center gap-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <img
                src={facility?.imageUrl}
                alt=""
                className="size-20 p-[2px] border-2 border-[#5D7E5F] rounded-full"
              />
              <Input
                type="file"
                id="picture"
                className="col-span-3"
                onBlur={(e) => setImageUrl(e.target.files?.[0] as File)}
              />
            </div>
          </div>

          <DialogFooter>
            <Button
              type="submit"
              className="w-full bg-[#5D7E5F] text-lg font-semibold mb-5 space-x-2 rounded-full"
            >
              <IoIosSave /> <p>Save</p>
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditFacilityModal;
