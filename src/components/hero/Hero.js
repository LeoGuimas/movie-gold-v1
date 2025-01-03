import "./Hero.css";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";

function Hero({ movies }) {
    return (
      <div>
        <Carousel>
          {movies.map((movie) => (
            <Paper key={movie.id}>
              <div className="movie-card-container">
                <div className="movie-card">
                  <div className="movie-detail">
                    <div className="movie-poster">
                      <img src={movie.poster} alt={movie.title} />
                    </div>
                    <div className="movie-title">
                      <h4>{movie.title}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </Paper>
          ))}
        </Carousel>
      </div>
    );
  }
  
  Hero.propTypes = {
    movies: PropTypes.array.isRequired,
  };
  
  export default Hero;