"use server";
import { FieldValues } from "react-hook-form";
import { cookies } from "next/headers";
import { authKey } from "./authKey";

export const adminLogin = async (formData: FieldValues) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/admin/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }
  );

  const adminInfo = await res.json();
  if (adminInfo.data.token) {
    (await cookies()).set(authKey, adminInfo.data.token);
  }

  return adminInfo;
};
