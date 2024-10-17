"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu"; // Verify path here
import { cn } from "@/utils/cn"; // Check this path as well
import Link from "next/link";

export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed h-[45rem] top-10 inset-x-0 sm:max-w-2xl max-w-[28rem] mx-auto z-50 ", className)}
    >
      <Menu setActive={setActive}>
        <Link href="/">
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>

        <MenuItem setActive={setActive} active={active} item="Our Courses">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/Courses">All Courses</HoveredLink>
            <HoveredLink href="/Courses">Basic Music theory</HoveredLink>
            <HoveredLink href="/Courses">Advance Comption</HoveredLink>
            <HoveredLink href="/Courses">Songswriting</HoveredLink>
            <HoveredLink href="/Courses">Musics Production</HoveredLink>
          </div>
        </MenuItem>
        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Contact"
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
}
