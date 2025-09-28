import { baseApi } from "../baseApi";

const hotelApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    searchHotels: builder.query({
      query: ({ check_in_date, check_out_date, room_type, rooms_count }) =>
        `/hotels/search?check_in_date=${check_in_date}&check_out_date=${check_out_date}&room_type=${room_type}&rooms_count=${rooms_count}`,
      providesTags: ["Hotel"],
    }),

    // Public: Get hotel details by ID
    getHotelDetails: builder.query({
      query: ({ hotel_id, check_in_date, check_out_date }) =>
        `/get/hotels/details/${hotel_id}?check_in_date=${check_in_date}&check_out_date=${check_out_date}`,
    
    }),

    // Admin: Get all hotels
    getAllHotels: builder.query({
      query: () => "/admin/hotels",
      providesTags: ["Hotel"],
    }),

    getHotelBooking: builder.query({
      query: ({id,page}) => `/admin/get/bookings/lists?hotel_id=${id}?page=${page}`,
    
    }),



    getAllHotelsPublic: builder.query({
      query: () => "/hotels",
      
    }),

    // Admin: Get hotel by ID
    getHotelById: builder.query({
      query: (id) => `/admin/hotels/${id}`,
      providesTags: (_result, _error, id) => [{ type: "Hotel", id }],
    }),

    // Admin: Create hotel
    createHotel: builder.mutation({
      query: (hotel) => ({
        url: "/admin/hotels",
        method: "POST",
        body: hotel,
      }),
      invalidatesTags: ["Hotel"],
    }),

    // Admin: Add rooms to hotel
    addHotelRoom: builder.mutation({
      query: ({ hotelId, roomData }) => ({
        url: `/admin/hotels/${hotelId}/rooms`,
        method: "POST",
        body: roomData,
      }),
      invalidatesTags: ["Room"],
    }),

    // Admin: Create multiple rooms
    createRoom: builder.mutation({
      query: ({ rooms }) => ({
        url: `/hotel/create/rooms`,
        method: "POST",
        body: { rooms },
      }),
      invalidatesTags: ["Room"],
    }),

    // Admin: Get available rooms for a hotel
    getAvailableRooms: builder.query({
      query: (hotelId) => `/admin/hotels/${hotelId}/available-rooms`,
      providesTags: ["Room"],
    }),

    // Admin: Get all rooms
    getRooms: builder.query({
      query: () => `/hotel/get/rooms`,
      providesTags: ["Room"],
    }),
    myHotel: builder.query({
      query: () => `/auth/hotel/me`,
    }),

    bookingRoom: builder.mutation({
      query: ({ bookingData }) => ({
        url: `hotel/bookings`,
        method: "POST",
        body: bookingData ,
      }),
      invalidatesTags: ["Room"],
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
  useCreateRoomMutation,
  useGetRoomsQuery,
  useMyHotelQuery,
  useGetAllHotelsPublicQuery,
  useBookingRoomMutation,
  useGetHotelBookingQuery
} = hotelApi;
