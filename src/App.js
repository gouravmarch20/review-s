import React, { useEffect, useState } from "react";

import Subscribe from "./components/suscribe/Subscribe";
import Slider from "./components/slider/Slider";
import Footer from "./components/footer/Footer";
import FooterSection from "./components/footer/FooterSection";
import SwipperWithThumbnail from "./components/SwipperWithThumbnail";

import { LIGHT, DARK , THEME_MODE } from "./constants/themeConstant";
console.log(`LIGHT`, LIGHT);

const App = () => {
  const [data, setData] = useState([]);
  const fetchReview = async () => {
    const apiUrl = `https://admin.tomedes.com/api/v1/get-reviews?page=${1}`;
    const res = await fetch(apiUrl)
      .then((response) => {
        return response.json();
      })
      .catch((error) => {});
    setData(res?.data);
  };
  useEffect(() => {
    fetchReview();
  }, []);
  const setDarkMode = async () => {
    document.querySelector("body").setAttribute(THEME_MODE, DARK);
    localStorage.setItem(THEME_MODE, DARK);
  };
  const setLightMode = async () => {
    document.querySelector("body").setAttribute(THEME_MODE, LIGHT);
    localStorage.setItem(THEME_MODE, LIGHT);
  };

  const selectTheme = localStorage.getItem(THEME_MODE);
  const [theme, setTheme] = useState(selectTheme);

  useEffect(() => {
    if (theme === LIGHT) {
      setLightMode();
    } else {
      setDarkMode();
    }
  }, [theme]);

  const handleThemeChange = () => {
    if (theme === LIGHT) {
      setDarkMode();
    } else {
      setLightMode();
    }
    setTheme(theme === LIGHT ? DARK : LIGHT);
  };

  return (
    <div className="review p-2 pt-6 body">
      <Footer handleThemeChange={handleThemeChange} theme={theme} />

      <SwipperWithThumbnail />

      <Slider data={data} />

      <Subscribe />
      <FooterSection />
    </div>
  );
};

export default App;
