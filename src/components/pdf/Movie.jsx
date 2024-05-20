import React, { useEffect, useState } from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import moment from "moment";
import { POSTER_PATH } from "./constants";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#ffffff",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  movieContainer: {
    borderRadius: "5px",
    marginTop: "10px",
  },
  movieDetails: {
    display: "flex",
    marginLeft: 5,
  },
  movieTitle: {
    fontSize: 15,
    marginBottom: 10,
  },
  movieOverview: {
    fontSize: 10,
  },

  image: {
    height: 200,
    width: 150,
  },
  subtitle: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    width: 150,
    alignItems: "center",
    marginBottom: 12,
  },
  vote: {
    display: "flex",
    flexDirection: "row",
  },
  rating: {
    height: 10,
    width: 10,
  },
  vote_text: {
    fontSize: 10,
  },
  vote_pop: {
    fontSize: 10,
    padding: 2,
    backgroundColor: "#61C74F",
    color: "#fff",
  },
  vote_pop_text: {
    fontSize: 10,
    marginLeft: 4,
  },
  overviewContainer: {
    minHeight: 110,
  },
  detailsFooter: {
    display: "flex",
    flexDirection: "row",
  },
  lang: {
    fontSize: 8,
    fontWeight: 700,
  },
  vote_average: {
    fontSize: 8,
    marginLeft: 4,
    fontWeight: "bold",
  },
});

import myImage from "/public/assets/mappls.png";

import carBlack from "/public/assets/blackCar.png";
console.log(2222, carBlack.src);

export default function PdfDocument(props) {
  const [imageBase64, setImageBase64] = useState("");
  const [imageBase64_1, setImageBase64_1] = useState("");
  const [show, setShow] = useState(false);

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };
  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(myImage.src);
        const response1 = await fetch(carBlack.src);

        const blob = await response.blob();
        const blob1 = await response1.blob();

        const base64 = await convertToBase64(blob);
        const base64_1 = await convertToBase64(blob1);

        setImageBase64(base64);
        setImageBase64_1(base64_1);
        setShow(true);
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    fetchImage();
  }, []);

  return (
    <>
      {/* <h2>dd</h2> */}
      {show && (
        <Document>
          <Page style={styles.page}>
            <View style={styles.movieContainer}>
              <h2>ddd</h2>

              {console.log("g1", imageBase64)}
              {/* {console.log("g12", imageBase64_1)} */}
              {/* <img /> */}

              {imageBase64 && <Image style={styles.image} src={imageBase64} />}
              {imageBase64_1 && (
                <Image style={styles.image} src={imageBase64_1} />
              )}
            </View>
          </Page>
        </Document>
      )}
    </>
  );
}
