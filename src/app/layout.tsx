import type { Metadata } from "next";
import "./globals.css";
import Provider from "@/components/Provider/MainProvider";

export const metadata: Metadata = {
  title: "হোটেল ম্যানেজমেন্ট সিস্টেম",
  description: "হোটেল ব্যবস্থাপনা সিস্টেম,পঞ্চগড়, বাংলাদেশের ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn">
      <body className={`antialiased`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
