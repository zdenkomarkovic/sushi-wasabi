"use client";

import Hero2 from "../public/hero2.jpg";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { PhoneIcon } from "lucide-react";

const BgImage = () => {
  return <div className="relative flex min-h-[100dvh]"></div>;
};

export default function Hero({ title = "Sushi  Wasabi" }: { title?: string }) {
  const words = title.split(" ");

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden ">
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src={Hero2}
          alt="Elegantna dnevna soba"
          className="w-full h-[100dvh] object-cover"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-8 tracking-tighter">
            {words.map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block mr-4 last:mr-0">
                {word.split("").map((letter, letterIndex) => (
                  <motion.span
                    key={`${wordIndex}-${letterIndex}`}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: wordIndex * 0.1 + letterIndex * 0.03,
                      type: "spring",
                      stiffness: 150,
                      damping: 25,
                    }}
                    className="inline-block text-primary bg-clip-text
                                        bg-gradient-to-r from-neutral-900 to-neutral-700/80"
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>

          <div
            className="inline-block group relative bg-gradient-to-b from-black/10 to-white/10
                        p-px rounded-2xl backdrop-blur-lg
                        overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <Link href="tel:+381603620051" target="_blank">
              <Button
                variant="ghost"
                className="rounded-[1.15rem] px-3 md:px-8 py-5 md:py-6 text-base md:text-lg font-semibold backdrop-blur-md
                            bg-primary hover:bg-white/100 
                            text-white  transition-all duration-300
                            group-hover:-translate-y-0.5 border border-primary 
                            hover:shadow-md "
              >
                <span className="opacity-90 group-hover:opacity-100 transition-opacity  flex gap-1 md:gap-3 items-center">
                  za dostavu pozovite
                  <PhoneIcon /> +38160 362 0051
                </span>
              </Button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="inline-block mt-10 group relative bg-bg-primary1
                        p-px rounded-2xl backdrop-blur-lg
                        overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <Link
            href={"https://wolt.com/sr/srb/belgrade/restaurant/sushi-wasabi11"}
            target="_blank"
          >
            <Button
              variant="ghost"
              className="rounded-[1.15rem] px-3 md:px-8 py-5 md:py-6 text-base md:text-lg font-semibold backdrop-blur-md
                            bg-primary hover:bg-white/100 
                            text-white  transition-all duration-300
                            group-hover:-translate-y-0.5 border border-primary 
                            hover:shadow-md "
            >
              <span className="opacity-90 group-hover:opacity-100 transition-opacity">
                Wolt dostava
              </span>
              <span
                className="ml-3 opacity-70 group-hover:opacity-100 group-hover:translate-x-1.5
                                transition-all duration-300"
              >
                {" "}
                →
              </span>
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
