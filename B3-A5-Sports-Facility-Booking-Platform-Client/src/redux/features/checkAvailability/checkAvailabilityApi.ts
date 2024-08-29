import { baseApi } from "@/redux/api/baseApi";

const checkAvailabilityApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    /*
  
    ------------------------endpoint for checking availability slots from DB------------------------*/
    getAvailableSlots: builder.query({
      query: ({ date, facilityId }) => {
        const params = new URLSearchParams();
        if (date) {
          params.append("date", date);
        }
        if (facilityId) {
          params.append("facility", facilityId);
        }
        return { url: "/check-availability", method: "GET", params: params };
      },
      providesTags: ["slots"],
    }),
  }),
});

export default checkAvailabilityApi;
