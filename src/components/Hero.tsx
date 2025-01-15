// Hero.tsx
"use client";

import React from "react";
import { useTheme } from "./ThemeProvider"; 
import Image from "next/image";

const crypto_affiliates = [
  { name: "Luno", link: "https://www.luno.com/invite/8VG2B6", image: "/luno.jpg" },
  { name: "Hata", link: "https://hata.io/signup?ref=HCV3275", image: "/hata.jpg" },
  { name: "MX Global", link: "https://app.mx.exchange/sign-up?elink=kvo24286", image: "/mxglobal.jpg" },
];

const stock_affiliates = [
  {
    name: "MooMoo",
    link: "https://www.moomoo.com/my/promotion/referee?inviter=104206630&global_content=%7B%22promote_id%22%3A15066%2C%22sub_promote_id%22%3A3%7D",
    image: "/MooMoo.jpg",
  },
  {
    name: "APFM",
    link: "https://client.apfm.io/sign-up/MTEx",
    image: "/apfm.jpg",
  }
];

export default function Hero() {
  const { darkMode } = useTheme(); // Get the current theme state

  return (
    <main
      className={`p-4 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <div className="my-8"></div>
      <h2 className="text-3xl sm:text-5xl mb-4 font-bold text-center">
        Crypto & Stock Affiliates
      </h2>
      <div className="space-y-8">
        <div>
          {/* <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center sm:text-left">
            Crypto Affiliates
          </h3> */}
          <div className="flex flex-wrap justify-center space-x-0 sm:space-x-4">
            {/* Use flexbox, center items and add horizontal space between items */}
            {crypto_affiliates.map((crypto_affiliate) => (
              <div
                key={crypto_affiliate.name}
                className={`card p-4 rounded-lg shadow-md flex-1 min-w-[250px] max-w-[300px] mb-4 sm:mb-0 ${
                  darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
                }`}
              >
                <Image
                  src={crypto_affiliate.image}
                  alt={crypto_affiliate.name}
                  width={900}
                  height={900}
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <div className="p-4 text-center">
                  <h4 className="text-lg sm:text-xl font-semibold mb-4">
                    {crypto_affiliate.name}
                  </h4>{" "}
                  <a
                    href={crypto_affiliate.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
                  >
                    Visit {crypto_affiliate.name}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12">
          {" "}
          {/* Add margin-top to create space between sections */}
          {/* <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center sm:text-left">
            Stock Affiliates
          </h3> */}
          <div className="flex flex-wrap justify-center space-x-0 sm:space-x-4 mb-10">
            {" "}
            {/* Use flexbox, center items and add horizontal space between items */}
            {stock_affiliates.map((stock_affiliate) => (
              <div
                key={stock_affiliate.name}
                className={`card p-4 rounded-lg shadow-md flex-1 min-w-[250px] max-w-[300px] mb-4 sm:mb-0 ${
                  darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
                }`}
              >
                <Image
                  src={stock_affiliate.image}
                  alt={stock_affiliate.name}
                  width={900}
                  height={900}
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <div className="p-4 text-center">
                  <h4 className="text-lg sm:text-xl font-semibold mb-4">
                    {stock_affiliate.name}
                  </h4>{" "}
                  <a
                    href={stock_affiliate.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
                  >
                    Visit {stock_affiliate.name}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
