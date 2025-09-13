import { baseApi } from "../baseApi";

const placeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Place Categories
    createPlaceCategory: builder.mutation({
      query: (data: any) => ({
        url: "admin/tourist-place-categories",
        method: "POST",
        body: data,
      }),
    }),
    getAllPlaceCategories: builder.query({
      query: () => ({
        url: "admin/tourist-place-categories",
        method: "GET",
      }),
    }),
    getAllCategories: builder.query({
      query: () => ({
        url: "tourist-place-categories",
        method: "GET",
      }),
     
    }),
    updatePlaceCategory: builder.mutation({
      query: ({ id, data }) => ({
        url: `admin/tourist-place-categories/${id}`,
        method: "PUT",
        body: data,
      }),
   
    }),
    deletePlaceCategory: builder.mutation({
      query: (id) => ({
        url: `admin/tourist-place-categories/${id}`,
        method: "DELETE",
      }),
   
    }),

    // Tourist Places
    createTouristPlace: builder.mutation({
      query: (data: any) => ({
        url: "admin/tourist-places",
        method: "POST",
        body: data,
      }),
   
    }),
    getAllTouristPlaces: builder.query({
      query: () => ({
        url: "admin/tourist-places",
        method: "GET",
      }),
     
    }),
    getAllPlaces: builder.query({
      query: () => ({
        url: "/tourist-places",
        method: "GET",
      }),
     
    }),
    getAllPlacesByCategory: builder.query({
      query: (id) => ({
        url: `tourist-places?category_id=${id}`,
        method: "GET",
      }),
     
    }),
    getPlaceByName: builder.query({
      query: (name) => ({
        url: `tourist-places/name/${name}`,
        method: "GET",
      }),
     
    }),


    updateTouristPlace: builder.mutation({
      query: ({ id, data }) => ({
        url: `admin/tourist-places/${id}`,
        method: "Post",
        body: data,
      }),
   
    }),
    deleteTouristPlace: builder.mutation({
      query: (id) => ({
        url: `admin/tourist-places/${id}`,
        method: "DELETE",
      }),
   
    }),
    getPlaceById: builder.query({
      query: (id) => ({
        url: `/admin/tourist-places/${id}`,
      }),
    }),
    
  }),
});

export const {
  useCreatePlaceCategoryMutation,
  useGetAllPlaceCategoriesQuery,
  useUpdatePlaceCategoryMutation,
  useDeletePlaceCategoryMutation,
  useCreateTouristPlaceMutation,
  useGetAllTouristPlacesQuery,
  useUpdateTouristPlaceMutation,
  useDeleteTouristPlaceMutation,
  useGetAllPlacesQuery,
  useGetAllPlacesByCategoryQuery,
  useGetPlaceByNameQuery,
  useGetPlaceByIdQuery,
  useGetAllCategoriesQuery 
} = placeApi;
