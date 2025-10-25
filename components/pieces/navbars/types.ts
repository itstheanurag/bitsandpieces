
import React from "react";

export interface NavItem {
  label: string;
  href: string;
}

export interface NavbarProps {
  logo?: React.ReactNode;
  navItems?: NavItem[];
  buttons?: React.ReactNode;
  children?: React.ReactNode;
}
