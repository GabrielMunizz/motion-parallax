"use client";
import Image from "next/image";
import photos from "@/utils/photos";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import React from "react";

export default function Home() {
  const mainContainer = useRef(null);
  const { scrollYProgress } = useScroll({
    target: mainContainer,
    offset: ["start start", "end end"],
  });
  const scale0 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale1 = useTransform(scrollYProgress, [0, 1], [1, 3]);
  const scale2 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale3 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 9]);
  const scales = [scale0, scale1, scale2, scale3, scale4, scale5];
  const getScale = (index: number) => {
    if (index === 0) {
      return scale0;
    }
    return scales[Math.floor(Math.random() * 5) + 1];
  };
  return (
    <main ref={mainContainer} className="relative h-[300vh]">
      <div className="sticky top-0 h-[100vh] w-full bg-purple-600">
        {photos.map((photo, i) => {
          return (
            <div
              key={i}
              className="flex justify-center flex-wrap gap-5 items-center absolute top-0 w-[100%] h-[100%] px-[5rem]"
            >
              <motion.div
                style={{
                  scale: getScale(i),
                  width: photo.width,
                  height: photo.height,
                  zIndex: i === 0 ? "10" : "",
                  top: photo.top,
                  left: photo.left,
                }}
                className="relative"
              >
                <Image
                  style={{ objectFit: "cover", borderRadius: "7px" }}
                  src={photo.url}
                  alt="photo"
                  fill
                  placeholder="blur"
                />
              </motion.div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
