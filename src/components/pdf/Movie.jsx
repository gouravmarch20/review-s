import React from "react";
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
    borderRadius: 5,
    marginTop: 20,
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
    height: 150,
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

export function PdfDocument({ data }) {
  return (
    <Document>
      <Page style={styles.page}>
        <Text style={styles.movieTitle}> hello pdf test </Text>
        <Text style={styles.movieTitle}> hello pdf test </Text>
        <Text style={styles.movieTitle}> hello pdf test </Text>
        <Text style={styles.movieTitle}> hello pdf test </Text>
        <Text style={styles.movieTitle}> hello pdf test </Text>
        <Text style={styles.movieTitle}> hello pdf test </Text>

        {/* {data.map((movie, index) => (
          <View key={index} style={styles.movieContainer}>
            <View style={styles.movieDetails}>
              <Text style={styles.movieTitle}>{movie.title}</Text>
              <View style={styles.subtitle}>
                <View style={styles.vote}>
                  <Image source="star.png" style={styles.rating} />
                  <Text style={styles.vote_text}>{movie.vote_count} votes</Text>
                </View>
                <View style={styles.vote}>
                  <Text style={styles.vote_pop}>{movie.popularity}</Text>
                  <Text style={styles.vote_pop_text}>Popularity</Text>
                </View>
              </View>
              <View style={styles.overviewContainer}>
                <Text style={styles.movieOverview}>{movie.overview}</Text>
              </View>
              <View style={styles.detailsFooter}>
                <Text style={styles.lang}>
                  Language: {movie.original_language.toUpperCase()}
                </Text>
                <Text style={styles.vote_average}>
                  Average Votes: {movie.vote_average}
                </Text>
                <Text style={styles.vote_average}>
                  Release Date:{" "}
                  {moment(movie.release_date, "YYYY-MM-DD").format(
                    "MMMM D YYYY"
                  )}
                </Text>
              </View>
            </View>
          </View>
        ))} */}
      </Page>
    </Document>
  );
}
