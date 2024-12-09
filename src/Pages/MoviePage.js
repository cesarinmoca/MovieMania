import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { makeStyles } from "@mui/styles";
import { Button, Typography } from "@mui/material";
import YouTube from "react-youtube";
import Rows from "../Components/Rows";
import axios from "axios";

const MoviePage = () => {
  const classes = useStyles();
  const { state: movie } = useLocation();
  const [trailer, setTrailer] = useState(null);
  const [playing, setPlaying] = useState(false);

  const API_URL = "https://api.themoviedb.org/3";
  const API_KEY = "4f5f43495afcc67e9553f6c684a82f84";

  const fetchMovie = async () => {
    const { data } = await axios.get(`${API_URL}/movie/${movie.id}`, {
      params: {
        api_key: API_KEY,
        append_to_response: "videos",
      },
    });

    if (data.videos && data.videos.results) {
      const trailer = data.videos.results.find(
        (vid) => vid.name === "Official Trailer"
      );
      setTrailer(trailer ? trailer : data.videos.results[0]);
    }
  };

  useEffect(() => {
    fetchMovie();
  }, [movie]);

  const truncate = (string, n) =>
    string?.length > n ? `${string.substr(0, n - 1)}...` : string;

  return (
    <>
      <div
        className={classes.banner}
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        }}
      >
        <div className={classes.overlay}></div>
        <div className={classes.content}>
          <Typography variant="h2" component="h1">
            {movie?.title || movie?.name || movie?.original_name}
          </Typography>
          <div className={classes.buttons}>
            {trailer && (
              <Button onClick={() => setPlaying(!playing)}>
                {playing ? "Stop playing" : "Show trailer"}
              </Button>
            )}
            <Button>My List</Button>
          </div>
          <Typography
            style={{ wordWrap: "break-word" }}
            variant="h6"
            className={classes.descripcion}
          >
            {truncate(movie?.overview, 160)}
          </Typography>
        </div>
      </div>

      <main>
        {movie && (
          <div
            className="viewtrailer"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {playing ? (
              <YouTube
                videoId={trailer.key}
                className="reproductor container"
                style={{
                  width: "100%",
                  height: "500px",
                }}
                opts={{
                  autoplay: 1,
                  controls: 0,
                  cc_load_policy: 0,
                  fs: 0,
                  iv_load_policy: 0,
                  modestbranding: 0,
                  rel: 0,
                  showinfo: 0,
                }}
              />
            ) : (
              <div>
                {trailer ? null : (
                  <h1 style={{ color: "white" }}>
                    "Trailer no disponinble"
                  </h1>
                )}
              </div>
            )}
          </div>
        )}
      </main>

      <div>
        <Rows
          title="Recommendations"
          fetchUrl={`https://api.themoviedb.org/3/movie/${movie.id}/recommendations?api_key=${API_KEY}`}
        />
      </div>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  banner: {
    height: "440px",
    position: "relative",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#ffffff",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0, 0, 0, 0.6)",
    zIndex: 1,
  },
  content: {
    position: "relative",
    zIndex: 2,
    marginLeft: theme.spacing(4),
    paddingTop: theme.spacing(16),
    paddingBottom: theme.spacing(3),
  },
  title: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3),
  },
  descripcion: {
    marginTop: theme.spacing(5),
    width: "45rem",
    lineHeight: "1.3",
    maxWidth: "380px",
    height: "80px",
  },
  buttons: {
    display: "flex",
    gap: "1rem",
    marginBottom: theme.spacing(3),
    "& button": {
      cursor: "pointer",
      color: "#fff",
      fontWeight: 700,
      borderRadius: "5px",
      padding: theme.spacing(1, 4),
      backgroundColor: "rgba(51,51,51,0.5)",
    },
    "& button:hover": {
      color: "#000",
      backgroundColor: "#e6e6e6",
    },
  },
}));

export default MoviePage;
