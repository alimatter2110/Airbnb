"use client";
import { User } from "@prisma/client";
import { defaultConfig } from "next/dist/server/config-shared";
import Image from "next/image";

interface AvatarProps {
  src?: string | null | undefined;
}

const Avatar: React.FC<AvatarProps> = ({ src }) => {
  return (
    <Image
      alt="Logo"
      height="33"
      width="33"
      className="rounded-full"
      src={src || "/images/avatar.png"}
    />
  );
};

export default Avatar;
