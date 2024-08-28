import { baseApi } from "@/redux/api/baseApi";

const facilityApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    /*

    ------------------------endpoint for getting facilities from DB------------------------*/
    getFacilities: builder.query({
      query: ({
        searchTerm,
        categoryToLoad,
        sort,
        currentPage,
        itemsPerPage,
      }) => {
        console.log(
          searchTerm,
          categoryToLoad,
          sort,
          currentPage,
          itemsPerPage
        );

        const params = new URLSearchParams();
        if (searchTerm) {
          params.append("searchTerm", searchTerm);
        }
        if (categoryToLoad) {
          params.append("category", categoryToLoad);
        }
        if (sort) {
          params.append("sort", sort);
        }
        if (currentPage) {
          params.append("page", currentPage);
        }
        if (itemsPerPage) {
          params.append("limit", itemsPerPage);
        }
        return { url: "/facility", method: "GET", params: params };
      },
      providesTags: ["facility"],
    }),
    /*


    ------------------------endpoint for getting single facility from DB------------------------*/
    getSingleFacility: builder.query({
      query: (_id) => {
        return { url: `/facility/${_id}`, method: "GET" };
      },
      providesTags: ["facility"],
    }),
    /*


    ------------------------endpoint for getting total number of facilities from DB------------------------*/
    getFacilityCount: builder.query({
      query: () => {
        return { url: "/facility/count/prod", method: "GET" };
      },
      providesTags: ["facility"],
    }),

    /*
  
      ------------------------endpoint for adding facility in DB------------------------*/
    addFacility: builder.mutation({
      query: (facilityInfo) => {
        return {
          url: "/facility",
          method: "POST",
          body: facilityInfo,
        };
      },
      invalidatesTags: ["facility"],
    }),
    /*
  
      ------------------------endpoint for editing facility in DB------------------------*/
    editFacility: builder.mutation({
      query: (payload) => {
        return {
          url: `facility/${payload._id}`,
          method: "PUT",
          body: payload.facilityDetails,
        };
      },
      invalidatesTags: ["facility"],
    }),
    /*
  
      ------------------------endpoint for deleting facility from DB------------------------*/
    deleteFacility: builder.mutation({
      query: (id: string) => {
        return {
          url: `/facility/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["facility"],
    }),
  }),
});

export default facilityApi;
