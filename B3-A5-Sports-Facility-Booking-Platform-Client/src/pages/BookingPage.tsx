import Container from "@/components/layouts/RootLayout/Container";
import Loading from "@/components/shared/Loading";
import NoData from "@/components/shared/NoData";
import Title from "@/components/shared/Title";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useCurrentDate from "@/hooks/useCurrentDate";
import bookingApi from "@/redux/features/booking/bookingApi";
import checkAvailabilityApi from "@/redux/features/checkAvailability/checkAvailabilityApi";
import facilityApi from "@/redux/features/facility/facilityApi";
import displayToast from "@/utils/displayToast";
import { useState } from "react";
import { useParams } from "react-router-dom";

const BookingPage = () => {
  const loadedId = useParams();
  const today = useCurrentDate();

  const [slotIndex, setSlotIndex] = useState(0);
  const facilityId = loadedId.id;
  const [date, setDate] = useState("2024-06-27");

  const { isLoading: loadingSingleFacility, data: loadedFacility } =
    facilityApi.useGetSingleFacilityQuery(loadedId.id);

  const { isLoading: loadingSlots, data: loadedSlots } =
    checkAvailabilityApi.useGetAvailableSlotsQuery({ date, facilityId });

  const [placeBooking] = bookingApi.usePlaceBookingMutation();

  const handleCheckAvailability = (e: any) => {
    e.preventDefault();
    console.log(e.target.date.value);
    setDate(e.target.date.value);
  };

  const handleBooking = async (e: any) => {
    e.preventDefault();

    const bookingInfo = {
      facility: facilityId,
      date,
      startTime: e.target.startTime.value,
      endTime: e.target.endTime.value,
    };

    try {
      const res = await placeBooking(bookingInfo).unwrap();
      if (res.success) {
        displayToast("success", res.message);
        window.location.href = res.data.payment_url;
      }
    } catch (err: any) {
      displayToast("error", err.data.message);
    }
  };

  return (
    <div className="w-full h-full bg-[url(../public/leaf2.png)] bg-no-repeat bg-right-top bg-contain bg-fixed">
      <Container>
        <div className="w-full min-h-[calc(100vh-80px)] flex flex-col items-center gap-10">
          <Title title={{ mainTitle: "Book Facility" }}></Title>

          {loadingSingleFacility || loadingSlots ? (
            <Loading />
          ) : (
            <div className="w-full space-y-16">
              <div className="w-full flex flex-col md:flex-row items-center gap-6 border border-[#303030] rounded-lg">
                <div className="w-full md:w-fit">
                  <img
                    src={loadedFacility?.data?.imageUrl}
                    alt=""
                    className="md:h-[200px] object-fill rounded-lg"
                  />
                </div>
                <div className="w-full md:w-1/2 text-left text-[#696969] text-sm md:text-base flex flex-col justify-center gap-4 p-4">
                  <h1 className="text-[rgba(255,255,255,.65)] text-lg md:text-2xl font-medium">
                    {loadedFacility?.data?.name}
                  </h1>
                  <p>{loadedFacility?.data?.description}</p>
                  <p>Location | {loadedFacility?.data?.location}</p>
                  <p>Price/Hour | {loadedFacility?.data?.pricePerHour}</p>
                  {/* <Link to={`/booking-page/${loadedId.id}`}>
                    <Button className="md:w-1/2 hover:bg-transparent bg-red-700 hover:text-red-700 text-[rgba(255,255,255,0.88)] text-base md:text-lg border hover:border-red-700 border-transparent space-x-2 rounded-lg">
                      Book Now <i className="fa-solid fa-arrow-right ml-2"></i>
                    </Button>
                  </Link> */}
                </div>
              </div>

              <div className="space-y-6">
                <h1 className="text-[rgba(255,255,255,.65)] text-lg md:text-2xl font-medium">
                  Select desired date and check available slots
                </h1>

                <form onSubmit={(e) => handleCheckAvailability(e)}>
                  <div className="flex gap-6">
                    <Input
                      type="date"
                      name="date"
                      min={today}
                      required
                      className="flex-2"
                      //   onBlur={(e) => setImageUrl(e.target.files?.[0] as File)}
                    />

                    <Button
                      type="submit"
                      className="flex-1 hover:bg-transparent bg-red-700 hover:text-red-700 text-[rgba(255,255,255,0.88)] text-base md:text-lg border hover:border-red-700 border-transparent space-x-2 rounded-lg"
                    >
                      Check
                    </Button>
                  </div>
                </form>
              </div>

              <div>
                {loadedSlots?.data?.length <= 0 ? (
                  <NoData text={"Sorry! No slots are available"}></NoData>
                ) : (
                  <div className="space-y-6">
                    <h1 className="text-[rgba(255,255,255,.65)] text-lg md:text-2xl font-medium">
                      Here are the Available Slots. Select Your desired one
                    </h1>

                    <div className="flex flex-wrap gap-6">
                      {loadedSlots?.data?.map(
                        (
                          slot: { startTime: string; endTime: string },
                          index: number
                        ) => (
                          <Button
                            key={index}
                            className="flex-1 bg-transparent hover:bg-red-700 text-red-700 hover:text-[rgba(255,255,255,0.88)] text-base md:text-lg border border-red-700 hover:border-transparent space-x-2 rounded-lg"
                            onClick={() => setSlotIndex(index)}
                          >
                            {slot.startTime} - {slot.endTime}
                          </Button>
                        )
                      )}
                    </div>
                  </div>
                )}
              </div>

              <div>
                <form onSubmit={(e) => handleBooking(e)}>
                  <div className="flex flex-wrap gap-6">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label
                        htmlFor="startTime"
                        className="text-left text-[#757575]"
                      >
                        Start Time
                      </Label>
                      <Input
                        id="startTime"
                        className="col-span-3"
                        required
                        readOnly
                        // value={"9:00"}
                        value={loadedSlots?.data?.[slotIndex].startTime}
                      />
                    </div>

                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label
                        htmlFor="endTime"
                        className="text-left text-[#757575]"
                      >
                        End Time
                      </Label>
                      <Input
                        id="endTime"
                        className="col-span-3"
                        required
                        readOnly
                        //value={"11:00"}
                        value={loadedSlots?.data?.[slotIndex].endTime}
                      />
                    </div>

                    <Button
                      type="submit"
                      className="flex-1 hover:bg-transparent bg-red-700 hover:text-red-700 text-[rgba(255,255,255,0.88)] text-base md:text-lg border hover:border-red-700 border-transparent space-x-2 rounded-lg"
                    >
                      Proceed to pay
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default BookingPage;
