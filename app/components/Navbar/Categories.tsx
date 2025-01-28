"use client";
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import Container from "../Container";
import {
  GiBarn,
  GiBoatFishing,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";
import CategoryBox from "./CategoryBox";
import { FaSkiing } from "react-icons/fa";
import { BsSnow } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import path from "path";

export const categories = [
  {
    label: "Beach",
    Icon: TbBeach,
    description: "This property is close to the beach!",
  },
  {
    label: "windwills",
    Icon: GiWindmill,
    description: "This property has windmills!",
  },
  {
    label: "Modern",
    Icon: MdOutlineVilla,
    description: "This property is modern!",
  },
  {
    label: "Countryside",
    Icon: TbMountain,
    description: "This property is in the countryside!",
  },
  {
    label: "Pools",
    Icon: TbPool,
    description: "This property has a pool!",
  },
  {
    label: "Islands",
    Icon: GiIsland,
    description: "This property is on a island",
  },
  {
    label: "Lake",
    Icon: GiBoatFishing,
    description: "This property is close to a lake",
  },
  {
    label: "Skiing",
    Icon: FaSkiing,
    description: "This property has skiing activities!",
  },
  {
    label: "Castle",
    Icon: GiCastle,
    description: "This property is in a castle!",
  },
  {
    label: "Camping",
    Icon: GiForestCamp,
    description: "This property has camping activities!",
  },
  {
    label: "Arctic",
    Icon: BsSnow,
    description: "This property has camping activities!",
  },
  {
    label: "Cave",
    Icon: GiCaveEntrance,
    description: "This property is in a cave!",
  },
  {
    label: "Desert",
    Icon: FaSkiing,
    description: "This property is in the desert!",
  },
  {
    label: "Barms",
    Icon: GiBarn,
    description: "This property is in the barn!",
  },
  {
    label: "Lux",
    Icon: IoDiamond,
    description: "This property is luxurious!",
  },
];

const Categories = () => {
  const pathname = usePathname();
  const params = useSearchParams();
  const category = params?.get("category");

  if (!(pathname === "/")) {
    return null;
  }
  return (
    <Container>
      <div className="pt-4 flex items-center justify-between overflow-x-auto">
        {categories.map((item) => {
          const { label, Icon, description } = item;
          return (
            <CategoryBox
              key={label}
              label={label}
              Icon={Icon}
              selected={category === label}
            />
          );
        })}
      </div>
    </Container>
  );
};

export default Categories;
