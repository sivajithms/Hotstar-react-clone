import React, { useEffect } from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Movies from "./Movies";
import { db } from "../firebase";
import Viewers from "./Viewers";
import {
  getFirestore,
  collection,
  query,
  doc,
  onSnapshot,
  where,
  getDocs,
  addDoc,
} from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { selectUserName } from "../features/users/userSlice";
import { setMovies } from "../features/movies/movieSlice";

function Home(props) {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommends = [];

  useEffect(() => {
    console.log("hello");
    getDocs(collection(db, "movies")).then((querySnapshot) => {
      querySnapshot.docs.map((doc) => {
        // console.log(recommends);
        recommends = [...recommends, { id: doc.id, ...doc.data() }];
        dispatch(
        setMovies({
          recommend: recommends
        })
      )
      })
      
    });
  },[userName]);

 


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
