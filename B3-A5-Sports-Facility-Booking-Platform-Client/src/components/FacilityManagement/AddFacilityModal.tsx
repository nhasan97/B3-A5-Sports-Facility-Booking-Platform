import { Button } from "../ui/button";
import { FaCirclePlus } from "react-icons/fa6";
import { IoIosSave } from "react-icons/io";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import useFacilityContext from "@/hooks/useFacilityContext";
import { TFacilityContext } from "@/types/facility.type";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

const AddFacilityModal = () => {
  const {
    setName,
    setDescription,
    setPricePerHour,
    setLocation,
    setImageUrl,
    handleAddFacility,
  } = useFacilityContext() as TFacilityContext;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-[#5D7E5F] text-lg font-semibold my-5 space-x-2 rounded-full">
          <FaCirclePlus /> <p>Facility</p>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-[#757575]">Add Facility</DialogTitle>
        </DialogHeader>
        <form
          className="grid gap-4 py-4"
          onSubmit={(e) => handleAddFacility(e)}
        >
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-left text-[#757575]">
              Name
            </Label>
            <Input
              id="name"
              className="col-span-3"
              required
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
              required
              onBlur={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="price" className="text-left text-[#757575]">
              Price / Hour
            </Label>
            <Input
              type="number"
              id="price"
              min={0}
              step={0.01}
              required
              className="col-span-3"
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
              required
              onBlur={(e) => setLocation(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="picture" className="text-left text-[#757575]">
              Picture
            </Label>
            <Input
              type="file"
              id="picture"
              className="col-span-3"
              onBlur={(e) => setImageUrl(e.target.files?.[0] as File)}
            />
          </div>

          <DialogFooter>
            <Button
              type="submit"
              className="w-full bg-[#5D7E5F] text-lg font-semibold space-x-2 rounded-full"
            >
              <IoIosSave /> <p>Save</p>
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddFacilityModal;
