import { Text } from "@/components/Text";
import Image from "next/image";
import React from "react";

const fakeData = [
  {
    id: 1,
    title: "Popular Products",
    description:
      "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
    image:
      "/Apple_watch-series7_hero_09142021_big.jpg.slideshow-medium_2x-removebg-preview.png",
  },
  {
    id: 2,
    title: "Ipad Pro",
    description:
      "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
    image: "/ipadpro-removebg-preview.png",
  },
  {
    id: 3,
    title: "Samsung Galaxy ",
    description:
      "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
    image: "/Galaxy-A-Unpacked_press-release_main3-removebg-preview.png",
  },
  {
    id: 4,
    title: "MacBook Pro",
    description:
      "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
    image: "/mac-removebg-preview.png",
  },
];
export default function SecondBanner() {
  return (
    <div className="flex gap-9 no-scrollbar lg:grid lg:grid-cols-4 xl:grid xl:grid-cols-4 2xl:grid 2xl:grid-cols-5 lg:w-fit lg:mx-auto overflow-x-scroll justify-between pt-14 scroll-snap-type-x">
      {fakeData.map((item) => {
        return (
          <div className=" min-w-80 border" key={item.id}>
            <Image
              className="object-cover w-full h-72"
              width={1000}
              height={1000}
              src={item.image}
              alt={item.title}
            />

            <div className="mt-7 px-3">
              <Text variant={"caption"}>{item.title}</Text>
              <Text className="pt-5 text-gray-500" variant={"body"}>
                {item.description}
              </Text>
            </div>
          </div>
        );
      })}
    </div>
  );
}
