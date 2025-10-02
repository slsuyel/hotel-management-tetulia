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
  }),
});

export const {
  useGetHotelBookingQuery,
  useBookingRoomMutation,
} = bookingApi;
