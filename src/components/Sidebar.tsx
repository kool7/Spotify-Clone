"use client";

import { Lib } from "@/types/library";
import { Navigation } from "@/types/navigation";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import Box from "./Box";
import Library from "./Library";
import SidebarItem from "./SidebarItem";

interface SidebarProps {
  children: React.ReactNode;
  navigation: Navigation;
  library: Lib;
}

const Sidebar: React.FC<SidebarProps> = ({ children, navigation, library }) => {
  const pathname = usePathname();
  const routes = useMemo(
    () => [
      { label: navigation.home, active: pathname !== "/home", href: "/", icon: HiHome },
      {
        label: navigation.search,
        active: pathname !== "/search",
        href: "/search",
        icon: BiSearch,
      },
    ],
    [pathname, navigation]
  );

  return (
    <div className="flex h-full">
      <div className="hidden md:flex flex-col gap-y-2 bg-black h-full w-[300px] p-2">
        <Box>
          <div className="flex flex-col gap-y-4 px-5 py-4">
            {routes.map((item) => (
              <SidebarItem key={item.label} {...item} />
            ))}
          </div>
        </Box>
        <Box className="overflow-y-auto h-full">
          <Library library={library}/>
        </Box>
      </div>
      <main className="h-full flex-1 overflow-y-auto py-2">{children}</main>
    </div>
  );
};

export default Sidebar;
