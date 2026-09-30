import {
  HomeIcon,
  ChartBarIcon,
  BanknotesIcon,
} from "@heroicons/react/24/outline";
import type { ComponentType, SVGProps } from "react";
import Home from "../components/Home/Home";
import Cashflow from "../components/Cashflow";
import NetWorth from "../components/NetWorth";

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
    id: "cashflow",
    icon: BanknotesIcon,
    title: "Cashflow",
    component: Cashflow
  },
  {
    id: "net-worth",
    icon: ChartBarIcon,
    title: "Net Worth",
    component: NetWorth
  },
];
