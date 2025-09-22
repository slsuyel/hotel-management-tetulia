"use server";
import { FieldValues } from "react-hook-form";
import { cookies } from "next/headers";
import { authKey } from "./authKey";

export const hotelLogin = async (formData: FieldValues) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/hotel/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }
  );

  const hotelInfo = await res.json();
  // console.log(hotelInfo)
  if (hotelInfo.data.token) {
    (await cookies()).set(authKey, hotelInfo.data.token);
  }

  return hotelInfo;
};
