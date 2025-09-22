"use client";

import { adminLogin } from "@/components/Authentication/adminLogin";
import { useAppDispatch } from "@/components/Redux/hooks";
import { setToken, setUserInfo } from "@/components/Redux/Slice/authSlice";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function AdminLoginPage() {
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const onSubmit = async (data: any) => {
    setLoading(true);
    setError(null);
    try {
      const res = await adminLogin(data);
      if (res?.data?.token) {
        dispatch(setToken({ accessToken: res?.data?.token }));
        // adminInfo.data?.admin?.email_verified
        dispatch(
          setUserInfo({
            email: res.data?.admin?.email,
            name: res.data?.admin?.name,
            email_verified: res.data?.admin?.email_verified,
          })
        );

        router.push("/dashboard");
      } else {
        setError(res?.Message || "Login failed");
      }
    } catch (error) {
      setError("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md space-y-6 rounded-lg bg-white p-8 shadow-md"
      >
        <h1 className="text-center text-2xl font-semibold">Admin Login</h1>

        {error && (
          <div className="rounded-md bg-red-100 p-3 text-red-700">{error}</div>
        )}

        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="admin@gmail.com"
            {...register("email", { required: true })}
            autoComplete="email"
          />
        </div>

        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="Your password"
            {...register("password", { required: true })}
            autoComplete="current-password"
          />
        </div>

        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </Button>
      </form>
    </div>
  );
}
