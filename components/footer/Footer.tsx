"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <motion.footer
      className="bg-gray-900 py-8  shadow-[0px_-2px_5px_rgba(0,0,0,0.1)] text-muted"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="text-center md:text-left md:grid md:grid-cols-3 gap-8 mx-auto">
          <div>
            <ul className="pb-5 flex justify-around items-center md:pb-0 md:block md:space-y-2">
              <li>
                <Link href="/" className=" hover:text-primary">
                  Početna
                </Link>
              </li>

              <li>
                <Link href="/kontakt" className="hover:text-primary">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3 pb-5 md:pb-0">
            <div>
              {" "}
              <a href="tel:+381603620051">
                <p className="hover:text-primary">Telefon: +38160 362 0051</p>
              </a>
              <a href="tel:+381638443989">
                <p className="hover:text-primary">Telefon: +38163 844 3989</p>
              </a>
            </div>
            <div>
              <a href="mailto:zvonkowasabi@gmail.com">
                <p className=" text-wrap hover:text-primary">
                  Email: zvonkowasabi@gmail.com
                </p>
              </a>
            </div>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a href="#" className="hover:text-primary">
                <Facebook />
              </a>
              <a href="#" className="hover:text-primary">
                <Instagram />
              </a>
            </div>
          </div>
          <div className="md:col-span-1 col-span-2 text-center text-primary">
            <h3 className="text-lg font-semibold mb-2 md:mb-4">Sushi Wasabi</h3>

            <p className=" font-bold ">Otkrijte čari Azijske kuhinje</p>
          </div>
        </div>
        <div className="mt-5 pt-5 md:mt-8 md:pt-8 border-t border-muted-foreground/20 text-center">
          <a href="https://www.manikamwebsolutions.com/" target="_blank">
            <p>
              &copy; 2025{" "}
              <span className="font-bold text-primary">
                ManikamWebSolutions
              </span>
              . Sva prava zadržana.
            </p>
          </a>{" "}
        </div>
      </div>
    </motion.footer>
  );
}
