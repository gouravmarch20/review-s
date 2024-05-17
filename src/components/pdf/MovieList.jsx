"use client";

import React, { useState } from "react";
import Axios from "axios";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { API_KEY, POSTER_PATH } from "./constants";
import { PdfDocument } from "./Movie";
import moment from "moment";

const years = [
  { value: "2010", text: "2010" },
  { value: "2011", text: "2011" },
  { value: "2012", text: "2012" },
  { value: "2013", text: "2013" },
  { value: "2014", text: "2014" },
  { value: "2015", text: "2015" },
  { value: "2016", text: "2016" },
  { value: "2017", text: "2017" },
  { value: "2018", text: "2018" },
  { value: "2019", text: "2019" },
  { value: "2020", text: "2020" },
  { value: "2021", text: "2021" },
  { value: "2022", text: "2022" },
  { value: "2023", text: "2023" },
];

export default function MovieList() {
  const [year, setYear] = useState("");
  const [movieDetails, setDetails] = useState([]);
  const [show, setShow] = useState(false);
  setTimeout(() => {
    setShow(true)
  }, 1000);

  const fetchMovie = async (e) => {
    const selectedYear = e.target.value;
    setYear(selectedYear);
    try {
      const res = await Axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&primary_release_year=${selectedYear}&sort_by=vote_average.desc`
      );
      setDetails(res.data.results);
      setShow(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h2>Best movies of the year</h2>
      <label htmlFor="movies">Select Year</label>
      <select id="movies" className="select" onChange={fetchMovie}>
        <option defaultValue="" disabled>
          Select your option
        </option>
        {years.map((year, index) => (
          <option key={index} value={year.value}>
            {year.text}
          </option>
        ))}
      </select>
      {show && (
        <PDFDownloadLink
          document={<PdfDocument data={movieDetails} />}
          fileName="movielist.pdf"
          style={{
            textDecoration: "none",
            padding: "10px",
            color: "#4a4a4a",
            backgroundColor: "#f2f2f2",
            border: "1px solid #4a4a4a",
            width: "40%",
          }}
        >
          {({ loading }) => (loading ? "Loading document..." : "Download Pdf1")}
        </PDFDownloadLink>
      )}
      {movieDetails.map((movie, index) => (
        <div className="card" key={index}>
          {/* <img
            src={
              movie.poster_path !== null
                ? `${POSTER_PATH}${movie.poster_path}`
                : "150.jpg"
            }
            alt="Avatar"
            style={{ width: "100%" }}
          /> */}
          <div className="card-container">
            <h4>
              <b>{movie.title}</b>
            </h4>
            <div className="card-subsection">
              <p>{movie.vote_count} votes</p>
              <p>
                <span className="votes">{movie.popularity}</span> Popularity{" "}
              </p>
            </div>
            <p>{movie.overview}</p>
            <div className="card-footer">
              <p>Language: {movie.original_language.toUpperCase()}</p>
              <p>Average Votes: {movie.vote_average}</p>
              <p>
                Release Date:{" "}
                {moment(movie.release_date, "YYYY-MM-DD").format("MMMM D YYYY")}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
