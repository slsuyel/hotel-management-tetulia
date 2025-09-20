import { baseApi } from "../baseApi";

const hotelApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    // Public: Search hotels
    searchHotels: builder.query({
      query: ({ check_in_date, check_out_date, room_type, rooms_count }) =>
        `/hotels/search?check_in_date=${check_in_date}&check_out_date=${check_out_date}&room_type=${""}&rooms_count=${rooms_count}`,
    }),

    // Public: Get hotel details by ID
    getHotelDetails: builder.query({
      query: (id) => `get/hotels/details/${id}`,
    }),

    // Admin: Get all hotels
    getAllHotels: builder.query({
      query: () => "/admin/hotels",
    }),

    // Admin: Get hotel by ID
    getHotelById: builder.query({
      query: (id) => `/admin/hotels/${id}`,
    }),

    // Admin: Create hotel
    createHotel: builder.mutation({
      query: (hotel) => ({
        url: "/admin/hotels",
        method: "POST",
        body: hotel,
      }),
    }),

    // Admin: Add rooms to hotel
    addHotelRoom: builder.mutation({
      query: ({ hotelId, roomData }) => ({
        url: `/admin/hotels/${hotelId}/rooms`,
        method: "POST",
        body: roomData,
      }),
    }),

    // Admin: Get available rooms for a hotel
    getAvailableRooms: builder.query({
      query: (hotelId) => `/admin/hotels/${hotelId}/available-rooms`,
    }),
  }),
});

export const {
  useSearchHotelsQuery,
  useGetHotelDetailsQuery,
  useGetAllHotelsQuery,
  useGetHotelByIdQuery,
  useCreateHotelMutation,
  useAddHotelRoomMutation,
  useGetAvailableRoomsQuery,
} = hotelApi;
