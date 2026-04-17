"use client";

import { Library, MenuIcon, PlusIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from "../ui/sidebar";
import Link from "next/link";

const menus = [
  {
    name: "New",
    link: "/",
    icon: PlusIcon
  },
  {
    name: "Library",
    link: "/library",
    icon: Library
  }
]

export function MainSidebar() {
  const { toggleSidebar } = useSidebar()
  
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <Button onClick={() => { toggleSidebar(); }} size="icon-lg" variant="ghost">
          <MenuIcon />
        </Button>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {menus.map((menu) => (
              <SidebarMenuItem key={menu.name}>
                <SidebarMenuButton render={<Link href={menu.link} />}>
                  <menu.icon size={24} />
                  <span className="text-sm">{menu.name}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}