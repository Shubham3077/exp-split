import {
  HomeIcon,
  ChartBarIcon,
  BanknotesIcon,
} from "@heroicons/react/24/outline";
import type { ComponentType, SVGProps } from "react";
import Home from "../components/Home/Home";
import SmartSplit from "../components/Cashflow";
import DetailedCharts from "../components/NetWorth";

type NavItem = {
  id: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  component: ComponentType
};

export const navItems: NavItem[] = [
  {
    id: "home",
    icon: HomeIcon,
    title: "Home",
    component: Home
  },
  {
    id: "smart-split",
    icon: BanknotesIcon,
    title: "Smart Split",
    component: SmartSplit
  },
  {
    id: "detailed-charts",
    icon: ChartBarIcon,
    title: "Detailed Charts",
    component: DetailedCharts
  },
];
