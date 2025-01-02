"use client";
import { defaultConfig } from "next/dist/server/config-shared";
import Image from "next/image";

const Avatar = () => {
  return (
    <Image
      alt="Logo"
      height="33"
      width="33"
      className="rounded-full"
      src="/images/avatar.png"
    />
  );
};

export default Avatar;
