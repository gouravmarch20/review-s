"use client";
import React, { useEffect, useState } from "react";

export const Event = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [cryptoCurrencies, setCryptoCurrencies] = useState([]);
  const [status, setStatus] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (status) return;
      console.log("status " , status);

      setStatus("loading");
      try {
        console.log("scroot:scroll", pageNumber , );
        const cryptoCurrenciesLength = cryptoCurrencies?.length;

        // Simulating data fetching using setTimeout
        setTimeout(() => {
          let myArray = [];

          for (let i = 0; i < 5; i++) {
            let randomValue = Math.floor(Math.random() * 100); // Generate a random number between 0 and 99
            let obj = {
              title: `Object ${i + 1 + cryptoCurrenciesLength}`,
              value: randomValue,
            };
            myArray.push(obj);
          }
          setCryptoCurrencies((prev) => [...prev, ...myArray]);
          setStatus(false);
        }, 1000); // Simulated delay for fetching data
      } catch (error) {
        setStatus(false);
        console.error(error.message);
      }
    };
    fetchData();
  }, [pageNumber]); // Fetch data when pageNumber changes

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setPageNumber((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div id="content">
        {cryptoCurrencies &&
          cryptoCurrencies.length !== 0 &&
          cryptoCurrencies.map((currency, index) => (
            <div key={index} className="h-[30vh] bg-red-400 my-2">
              <h3>{currency?.title} </h3>
            </div>
          ))}
      </div>
      {status === "loading" && <div>Loading...</div>}
      {status === "error" && <div>Error fetching data.</div>}
    </>
  );
};
