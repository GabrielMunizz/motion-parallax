"use client";
import Image from "next/image";
import photos from "@/utils/photos";
import { useRef } from "react";

import {
  useScroll,
  useTransform,
  motion,
  AnimatePresence,
} from "framer-motion";
import React from "react";

export default function MotionParallax() {
  const mainContainer = useRef(null);
  const { scrollYProgress } = useScroll({
    target: mainContainer,
    offset: ["start start", "end end"],
  });
  const scale0 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale1 = useTransform(scrollYProgress, [0, 1], [1, 7]);
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
    <div ref={mainContainer} className="relative h-[300vh]">
      <div className="sticky overflow-hidden top-0 h-[100vh] w-full">
        {photos.map((photo, i) => {
          return (
            <motion.div
              style={{ scale: getScale(i), zIndex: i === 0 ? "10" : "" }}
              key={i}
              className="flex justify-center flex-wrap gap-5 items-center absolute top-0 w-[100%] h-[100%] px-[5rem]"
            >
              <AnimatePresence>
                <motion.div
                  style={{
                    width: photo.width,
                    height: photo.height,
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
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
