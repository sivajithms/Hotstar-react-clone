import React, { useEffect } from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Movies from "./Movies";
// import { db } from "../firebase";
import Viewers from "./Viewers";
import { useDispatch, useSelector } from "react-redux";
import { selectUserName } from "../features/users/userSlice";
import { setMovies } from "../features/movies/movieSlice";
import moviesData from "../disneyPlusMoviesData";

function Home(props) {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  useEffect(() => {
    const newRecommends = [];
    moviesData.forEach((doc) => {
      newRecommends.push({ ...doc });
    });

    dispatch(
      setMovies({
        recommend: newRecommends,
      })
    );
  }, [userName, dispatch]);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Movies />
    </Container>
  );
}

export default Home;
const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;
