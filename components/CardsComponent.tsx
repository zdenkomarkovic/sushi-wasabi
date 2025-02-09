"use client";

import Image from "@/node_modules/next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import SingleImageEditor from "./SingleImageEditor";

interface Product {
  id: number;
  title: string;
  ingrediants?: string;
  price: number;
  image: string;
}

interface MenuBarProps {
  title: string;
  products: Product[];
}

const CardsComponent: React.FC<MenuBarProps> = ({ title, products }) => {
  const [showImage, setShowImage] = useState<string | null>(null);
  const [showProducts, setShowProducts] = useState(false);

  return (
    <div>
      <div
        id={title}
        className={`${
          showProducts ? "" : "flex border-b-2"
        } container px-4 pt-10 mx-auto space-y-10 `}
      >
        <motion.h1
          whileHover={showProducts ? {} : { scale: 1.05 }}
          onClick={() => setShowProducts(!showProducts)}
          className="text-4xl md:text-5xl cursor-pointer hover:text-primary "
        >
          {title}
        </motion.h1>
        <div
          className={`${
            showProducts
              ? "grid grid-cols-1 md:grid-cols-3  gap-x-4 gap-y-6"
              : "hidden"
          } `}
        >
          {products.map((item) => {
            return (
              <motion.div
                whileHover={{
                  y: -8,
                  boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                key={item.id}
                className="flex justify-between rounded-lg bg-white p-3"
              >
                <div className="flex flex-col justify-between">
                  <div>
                    {" "}
                    <h3 className="font-bold">{item.title}</h3>
                    {item.ingrediants ? <p>{item.ingrediants}</p> : ""}
                  </div>
                  <p className="text-primary">{item.price}.00 RSD</p>
                </div>

                <Image
                  src={item.image}
                  alt={item.title}
                  width={180}
                  height={100}
                  className="rounded-lg cursor-pointer"
                  onClick={() => setShowImage(item.image)}
                />
              </motion.div>
            );
          })}
        </div>
      </div>

      {showImage && (
        <SingleImageEditor
          imageUrl={showImage}
          onClose={() => setShowImage(null)}
        />
      )}
    </div>
  );
};

export default CardsComponent;
