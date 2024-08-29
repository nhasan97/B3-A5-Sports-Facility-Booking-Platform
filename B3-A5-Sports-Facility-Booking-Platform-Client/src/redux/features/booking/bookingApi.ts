import { baseApi } from "@/redux/api/baseApi";

const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    /*

    ------------------------endpoint for getting bookings from DB------------------------*/
    getBookings: builder.query({
      query: () => {
        return { url: "/bookings", method: "GET" };
      },
      providesTags: ["booking"],
    }),
    /*

    ------------------------endpoint for getting User Specific bookings from DB------------------------*/
    getUserSpecificBookings: builder.query({
      query: () => {
        return { url: "/bookings/user", method: "GET" };
      },
      providesTags: ["booking"],
    }),
    /*


    ------------------------endpoint for getting single facility from DB------------------------*/
    // getSingleFacility: builder.query({
    //   query: (_id) => {
    //     return { url: `/facility/${_id}`, method: "GET" };
    //   },
    //   providesTags: ["facility"],
    // }),
    /*


    ------------------------endpoint for getting total number of facilities from DB------------------------*/
    // getFacilityCount: builder.query({
    //   query: () => {
    //     return { url: "/facility/count/prod", method: "GET" };
    //   },
    //   providesTags: ["facility"],
    // }),

    /*
  
      ------------------------endpoint for adding booking in DB------------------------*/
    placeBooking: builder.mutation({
      query: (bookingInfo) => {
        return {
          url: "/bookings",
          method: "POST",
          body: bookingInfo,
        };
      },
      invalidatesTags: ["booking"],
    }),
    /*
  
    ------------------------endpoint for cancelling a booking------------------------*/
    cancelBooking: builder.mutation({
      query: (id: string) => {
        return {
          url: `/bookings/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["facility"],
    }),
  }),
});

export default bookingApi;
