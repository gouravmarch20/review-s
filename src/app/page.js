"use client";
import Image from "next/image";
import SwipperWithThumbnail from "@/components/home/SwipperWithThumbnail";
import Footer from "@/components/home/footer/Footer";
import FooterSection from "@/components/home/footer/FooterSection";
import Subscribe from "@/components/home/suscribe/Subscribe";
import Slider from "@/components/home/slider/Slider";
import React, { useEffect, useState } from "react";
import { LIGHT, DARK, THEME_MODE } from "@/constants/themeConstant";

import { SessionProvider } from "next-auth/react";
import Auth from "./Auth";

export default function Home() {
  const [data, setData] = useState([]);


  // const selectTheme = localStorage.getItem(THEME_MODE);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    fetchReview();
  }, []);

  const fetchReview = async () => {
    try {
      const apiUrl = `https://admin.tomedes.com/api/v1/get-reviews?page=${1}`;
      const res = await fetch(apiUrl);
      const data = await res.json();
      setData(data?.data);
    } catch (error) {
      console.error("Error fetching review:", error);
    }
  };

  const setDarkMode = () => {
    document.querySelector("body").setAttribute(THEME_MODE, DARK);
    localStorage.setItem(THEME_MODE, DARK);
    setTheme(DARK);
  };

  const setLightMode = () => {
    document.querySelector("body").setAttribute(THEME_MODE, LIGHT);
    localStorage.setItem(THEME_MODE, LIGHT);
    setTheme(LIGHT);
  };

  const handleThemeChange = () => {
    if (theme === LIGHT) {
      setDarkMode();
    } else {
      setLightMode();
    }
  };

  return (
    <div className=" body">
      <SessionProvider>
        <h2>dd</h2>
        <Auth/>
        {/* <div className="review p-2 pt-6">
        <Footer handleThemeChange={handleThemeChange} theme={theme} />

        <SwipperWithThumbnail />

        <Slider data={data} />

        <Subscribe />
        <FooterSection />
      </div> */}
      </SessionProvider>
    </div>
  );
}
