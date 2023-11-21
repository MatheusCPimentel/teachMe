"use client";

import { FC } from "react";
import { SidebarItem, SidebarItemProps } from "./SidebarItem";
import {
  Flag,
  GraduationCap,
  LayoutDashboard,
  MessageCircle,
  Settings,
  Users,
} from "lucide-react";
import Image from "next/image";
import avatarExample from "@/assets/avatar.jpeg";
import { useRouter, usePathname } from "next/navigation";

interface SidebarProps {}

export const Sidebar: FC<SidebarProps> = (props) => {
  const {} = props;

  const { push } = useRouter();
  const pathName = usePathname();

  const mySpaceSidebarItems: SidebarItemProps[] = [
    {
      Icon: LayoutDashboard,
      label: "Calendar",
      onClick: () => push("/calendar"),
      isActive: pathName === "/calendar",
      rightText: "3",
    },
    {
      Icon: Users,
      label: "Profile",
      onClick: () => push("/profile"),
      isActive: pathName === "/profile",
    },
    {
      Icon: Settings,
      label: "Settings",
      onClick: () => push("/settings"),
      isActive: pathName === "/settings",
    },
  ];

  const myStudentsSidebarItems: SidebarItemProps[] = [
    {
      Icon: GraduationCap,
      label: "Classes",
      onClick: () => push("/classes"),
      isActive: pathName === "/classes",
    },
    {
      Icon: MessageCircle,
      label: "Chats",
      onClick: () => push("/chats"),
      isActive: pathName === "/chats",
      rightText: "5",
    },
    {
      Icon: Flag,
      label: "Reports",
      onClick: () => push("/reports"),
      isActive: pathName === "/reports",
      rightText: "!",
    },
  ];

  return (
    <aside className="bg-blue-1 h-full w-64 px-4 py-6">
      <section className="mb-6 flex flex-col items-center gap-4">
        <Image
          className="rounded-full"
          src={avatarExample}
          alt="Avatar"
          width={100}
          height={100}
        />

        <div className="text-center">
          <p className="text-xl text-gray-6">Matheus Pimentel</p>
          <p className="mt-1 text-lg text-gray-5">Teacher</p>
        </div>
      </section>

      <section>
        <p className="mb-4">My Space</p>

        <div className="flex flex-col gap-4">
          {mySpaceSidebarItems.map((sidebarItem) => (
            <SidebarItem key={sidebarItem.label} {...sidebarItem} />
          ))}
        </div>
      </section>

      <section className="border-blue-3 mt-6 border-t-2 pt-4 ">
        <p className="mb-4">My Students</p>

        <div className="flex flex-col gap-4">
          {myStudentsSidebarItems.map((sidebarItem) => (
            <SidebarItem key={sidebarItem.label} {...sidebarItem} />
          ))}
        </div>
      </section>
    </aside>
  );
};
