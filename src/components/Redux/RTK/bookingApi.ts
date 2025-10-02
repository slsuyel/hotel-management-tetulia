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
    allBookingRoomAdmin: builder.query({
      query: ({ page = 1, limit = 10 }) => ({
        url: `admin/get/bookings/lists?page=${page}&limit=${limit}`,
        method: "get",
      }),
    }),
    
  }),
});

export const {
  useGetHotelBookingQuery,
  useBookingRoomMutation,
  useAllBookingRoomAdminQuery
} = bookingApi;
