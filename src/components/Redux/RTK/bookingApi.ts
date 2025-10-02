import { baseApi } from "../baseApi";

const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getHotelBooking: builder.query({
      query: ({ id, page }) =>
        `/admin/get/bookings/lists?hotel_id=${id}&page=${page}`,
    }),

    bookingRoom: builder.mutation({
      query: ({ bookingData }) => ({
        url: `hotel/bookings`,
        method: "POST",
        body: bookingData,
      }),
      invalidatesTags: ["Room"],
    }),
    allBookingRoom: builder.query({
      query: ({ page = 1, limit = 10, isAdmin = false }) => {
        // Decide URL conditionally
        const url = isAdmin
          ? `admin/get/bookings/lists?page=${page}&limit=${limit}`
          : `hotel/get/bookings/lists?page=${page}&limit=${limit}`;
        return {
          url,
          method: "get",
        };
      },
    }),
    
  }),
});

export const {
  useGetHotelBookingQuery,
  useBookingRoomMutation,
  useAllBookingRoomQuery
} = bookingApi;
