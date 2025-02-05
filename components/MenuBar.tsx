"use client";

import Image from "@/node_modules/next/image";
import React from "react";
import { motion } from "framer-motion";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface MenuBarProps {
  title: string;
  products: Product[];
}

const MenuBar: React.FC<MenuBarProps> = ({ title, products }) => {
  return (
    <div>
      <div className="container px-4 py-10 mx-auto space-y-10">
        <h1 className="text-5xl">{title}</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-6">
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
                  <h3 className="">{item.title}</h3>
                  <p className="text-primary">{item.price}.00 RSD</p>
                </div>

                <Image
                  src={item.image}
                  alt={item.title}
                  width={180}
                  height={100}
                  className="rounded-lg"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
