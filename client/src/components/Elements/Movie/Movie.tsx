import React, { useState } from "react";
import Template from "../Template";
import styled from "@emotion/styled";
import axios from "axios";
import notFound from "../../../assets/No-Image-Available.jpg";
import Genre from "../../UI/Genre";
import { randomNumber, genres } from "../../../utils/index";

const Poster = styled.img`
  height: 278px;
  width: 185px;
`;

const PosterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 185px;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  height: 100%;
  margin: 0 20px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 283px;
  justify-content: flex-start;
`;

const Title = styled.h3`
  margin: 0;
  margin: 5px 0;
`;

const GenreContainer = styled.div`
  margin: 5px 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Overview = styled.p`
  margin: 0;
  font-size: 12px;
  margin: 5px 0;
`;

const MovieDate = styled.span`
  margin: 0;
  margin-left: 5px;
  font-size: 18px;
  font-weight: 400;
`;

const Movie: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [movie, setMovie] = useState<{
    title: string;
    poster: string;
    genres: Array<any>;
    overview: string;
    date: string;
  } | null>(null);

  const handleClick = async () => {
    setLoading(true);

    const currentYear = new Date().getFullYear();
    const randomYear = randomNumber(1920, currentYear);

    const getPageNumbers = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${
        process.env.REACT_APP_MOVIE_API_KEY
      }&primary_release_year=${randomYear}&`
    );

    const randomPage = randomNumber(1, getPageNumbers.data.total_pages);

    const movies = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${
        process.env.REACT_APP_MOVIE_API_KEY
      }&primary_release_year=${randomYear}&page=${randomPage}`
    );

    const randomMovie = movies.data.results[randomNumber(1, movies.data.results.length)];

    console.log(randomMovie);

    let getGenreNames = null;

    if (randomMovie.genre_ids.length > 0) {
      getGenreNames = randomMovie.genre_ids.map((el: any) => {
        return genres[el];
      });
    }
    console.log(randomMovie);
    setMovie({
      title: randomMovie.title,
      overview: randomMovie.overview,
      poster: "http://image.tmdb.org/t/p/w185_and_h278_bestv2" + randomMovie.poster_path,
      genres: getGenreNames,
      date: randomMovie.release_date.substring(0, 4)
    });
    setLoading(false);
  };

  const result = movie ? (
    <Container>
      <PosterContainer>
        <Poster
          src={movie.poster}
          onError={(e: any) => {
            e.target.onerror = null;
            e.target.src = notFound;
          }}
        />
      </PosterContainer>
      <InfoContainer>
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
          <Title>
            {movie.title} <MovieDate>{movie.date}</MovieDate>
          </Title>
        </div>
        {movie.genres && (
          <GenreContainer>
            {movie.genres.map((el, index) => {
              return <Genre key={index}>{el}</Genre>;
            })}
          </GenreContainer>
        )}
        <Overview>{movie.overview}</Overview>
      </InfoContainer>
    </Container>
  ) : (
    <p>Waiting for roll</p>
  );

  const settings = null;

  return <Template result={result} settings={settings} onClick={handleClick} loading={loading} />;
};

export default Movie;
