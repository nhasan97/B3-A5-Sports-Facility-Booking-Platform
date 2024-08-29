import { Input } from "../ui/input";

const BookingBrowser = ({
  setSearchTerm,
}: {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <Input
      tabIndex={0}
      type="text"
      name="searchText"
      placeholder="Search ..."
      className="mb-6"
      onChange={(e) => {
        setSearchTerm(e.target.value);
      }}
    />
  );
};

export default BookingBrowser;
