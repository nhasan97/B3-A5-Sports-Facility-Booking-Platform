import { Input } from "../ui/input";
import "../cssStyles/Browser.css";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";

import { BiReset } from "react-icons/bi";
import { GrPrevious, GrNext } from "react-icons/gr";
import useFacilityContext from "@/hooks/useFacilityContext";
import { TFacilityContext } from "@/types/facility.type";

const Browser = ({ pagination }: { pagination: boolean }) => {
  const {
    loadingNumberOfFacilities,
    numberOfFacilities,
    itemsPerPage,
    currentPage,
    searchTerm,
    // categoryToLoad,
    sort,
    setSearchTerm,
    // setCategoryToLoad,
    setSort,
    setItemsPerPage,
    setCurrentPage,
  } = useFacilityContext() as TFacilityContext;

  let numberOfPages = 0;

  if (!loadingNumberOfFacilities) {
    numberOfPages = Math.ceil(numberOfFacilities / itemsPerPage);
  }

  const pages = [...Array(numberOfPages).keys()];

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNextPage = () => {
    if (currentPage < pages?.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const reset = () => {
    setSearchTerm("");
    // setCategoryToLoad("");
    setSort("");
  };

  return (
    <div className="w-full flex flex-wrap items-center gap-2 md:gap-3">
      {/* search */}
      <div className="flex-1 flex items-center gap-4">
        {/* <Label htmlFor="search" className="text-left text-[#757575]">
            Search
          </Label> */}
        <Input
          type="text"
          id="search"
          placeholder="Search by name, location"
          className="col-span-3"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        ></Input>
      </div>

      {/* filter */}
      {/* <Select
        value={categoryToLoad}
        onValueChange={(value) => setCategoryToLoad(value as string)}
      >
        <SelectTrigger className="flex-1">
          <SelectValue placeholder="Filter by category" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {loadingCategories ? (
              <Loading></Loading>
            ) : categories?.length <= 0 ? (
              <NoData text={"No Categories found"}></NoData>
            ) : (
              categories?.map((category: TCategory) => (
                <SelectItem key={category._id} value={category.category}>
                  {category.category}
                </SelectItem>
              ))
            )}
          </SelectGroup>
        </SelectContent>
      </Select> */}

      {/* sort */}
      <Select value={sort} onValueChange={(value) => setSort(value as string)}>
        <SelectTrigger className="flex-1">
          <SelectValue placeholder="Select sort option" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="name">Facility Name (A to Z)</SelectItem>
            <SelectItem value="-name">Facility Name (Z to A)</SelectItem>
            <SelectItem value="pricePerHour">
              Facility Price (Low to High)
            </SelectItem>
            <SelectItem value="-pricePerHour">
              Facility Price (High to Low)
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      {/* reset */}
      <Button
        className="bg-transparent hover:bg-red-700 text-red-700 hover:text-[rgba(255,255,255,0.88)] text-lg rounded-lg border border-red-700 hover:border-transparent"
        onClick={reset}
      >
        <BiReset></BiReset>
      </Button>

      {pagination === true && (
        <div className="flex justify-center items-center md:pl-2 md:border-l">
          {/* page */}

          <Button
            className="bg-transparent hover:bg-red-700 text-red-700 hover:text-[rgba(255,255,255,0.88)] rounded-lg border-none"
            onClick={handlePrevPage}
          >
            <GrPrevious />
          </Button>
          {pages?.map((page) => (
            <Button
              key={page}
              className={`bg-transparent hover:bg-red-700 text-red-700 hover:text-[rgba(255,255,255,0.88)] border-none  ${
                currentPage === page ? "selectedPage" : ""
              }`}
              onClick={() => {
                setCurrentPage(page);
              }}
            >
              {page}
            </Button>
          ))}
          <Button
            className="bg-transparent hover:bg-red-700 text-red-700 hover:text-[rgba(255,255,255,0.88)] rounded-lg border-none"
            onClick={handleNextPage}
          >
            <GrNext />
          </Button>

          {/* limit */}
          <Select
            onValueChange={(value) => {
              setItemsPerPage(Number(value));
              setCurrentPage(0);
            }}
          >
            <SelectTrigger className="flex-1 ml-1 md:ml-3">
              {/* <SelectValue placeholder="Select number of data to show" /> */}
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value={`${5}`}>5</SelectItem>
                <SelectItem value={`${10}`}>10</SelectItem>
                <SelectItem value={`${20}`}>20</SelectItem>
                <SelectItem value={`${50}`}>50</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      )}
    </div>
  );
};

export default Browser;
