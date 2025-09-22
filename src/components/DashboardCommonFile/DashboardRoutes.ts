import {
  BedDouble,
  BookCheck,
  CalendarCheck,
  LayoutDashboard,
  Hotel ,
  Users,
} from "lucide-react";

export const dashboardRoutes = [
  {
    href: "/dashboard",
    icon: LayoutDashboard,
    label: "Dashboard",
  },
  {
    href: "/dashboard/reservations",
    icon: CalendarCheck,
    label: "Reservations",
  },
  {
    href: "/dashboard/hotels",
    icon: Hotel ,
    label: "Hotel",
  },
  {
    href: "/dashboard/customers",
    icon: Users,
    label: "Customers",
  },
];
