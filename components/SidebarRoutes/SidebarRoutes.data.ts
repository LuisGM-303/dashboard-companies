import {
  BarChart4,
  Building2,
  Calendar,
  CircleHelpIcon,
  PanelsTopLeft,
  Settings,
  ShieldCheck,
} from "lucide-react";

export const dataGeneralSidebar = [
  {
    icon: PanelsTopLeft,
    label: "Dasboard",
    href: "/",
  },
  {
    icon: Building2,
    label: "Companies",
    href: "/companies",
  },
  {
    icon: Calendar,
    label: "Calendar",
    href: "/calendar",
  },
];

export const dataToolsSidebar = [
  {
    icon: CircleHelpIcon,
    label: "FAQS",
    href: "/faqs",
  },
  {
    icon: BarChart4,
    label: "Analytics",
    href: "/analytics",
  },
];

export const dataSupportSidebar = [
  {
    icon: Settings,
    label: "Settings",
    href: "/settings",
  },
  {
    icon: ShieldCheck,
    label: "Security",
    href: "/security",
  },
];
