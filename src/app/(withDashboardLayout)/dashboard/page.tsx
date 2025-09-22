"use client";
import { useAppSelector } from "@/components/Redux/hooks";
import { useCurrentUserInfo } from "@/components/Redux/Slice/authSlice";

const page = () => {
  const user = useAppSelector(useCurrentUserInfo);
  // console.log(user);
  return (
    <div>
      <p>Dashboard {user?.name}</p>
      <p> {user?.email}</p>
      <p> {user?.role}</p>
    </div>
  );
};

export default page;
