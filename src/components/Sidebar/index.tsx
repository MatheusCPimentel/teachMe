"use client";

import { FC, useState } from "react";
import { SidebarItem, SidebarItemProps } from "./SidebarItem";
import {
  ChevronsLeft,
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

  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

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
    <aside
      className={`${
        isSidebarExpanded ? "w-64" : "w-20"
      } bg-blue-1 transition-width relative h-full px-4 py-6 duration-500 ease-in-out`}
    >
      <div
        className={`${
          isSidebarExpanded ? "right-3" : "right-1/2 translate-x-1/2 rotate-180"
        } hover:bg-blue-3 absolute top-3 cursor-pointer rounded-full p-1 text-gray-6 transition-colors hover:text-gray-7`}
      >
        <ChevronsLeft
          size={22}
          onClick={() => setIsSidebarExpanded(!isSidebarExpanded)}
        />
      </div>

      <section
        className={`${
          !isSidebarExpanded ? "pt-8" : ""
        } mb-6 flex flex-col items-center gap-4 duration-200 ease-in-out`}
      >
        <Image
          className="rounded-full"
          src={avatarExample}
          alt="Avatar"
          width={100}
          height={100}
        />

        <div
          className={`${
            isSidebarExpanded
              ? ""
              : "invisible h-0 opacity-0 delay-0 duration-150"
          } text-center transition-opacity delay-300 duration-500`}
        >
          <p className="text-xl text-gray-6">Matheus Pimentel</p>
          <p className="mt-1 text-lg text-gray-5">Teacher</p>
        </div>
      </section>

      <section>
        {isSidebarExpanded && <p className="mb-4">My Space</p>}

        <div className="flex flex-col gap-4">
          {mySpaceSidebarItems.map((sidebarItem) => (
            <SidebarItem
              key={sidebarItem.label}
              {...sidebarItem}
              iconOnly={!isSidebarExpanded}
            />
          ))}
        </div>
      </section>

      <section className="border-blue-3 mt-6 border-t-2 pt-4">
        {isSidebarExpanded && <p className="mb-4">My Students</p>}

        <div className="flex flex-col gap-4">
          {myStudentsSidebarItems.map((sidebarItem) => (
            <SidebarItem
              key={sidebarItem.label}
              {...sidebarItem}
              iconOnly={!isSidebarExpanded}
            />
          ))}
        </div>
      </section>
    </aside>
  );
};
