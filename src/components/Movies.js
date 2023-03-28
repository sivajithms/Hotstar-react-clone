import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { selectRecommend } from '../features/movies/movieSlice'
import New from './movies/New'
import Original from './movies/Original'
import Recommends from './movies/Recommends'
import Trending from './movies/Trending'

function Movies(props) {
  const data = useSelector(selectRecommend)
  console.log(data.type);
  return (
  <Container>
    <Recommends/>
    <New/>
    <Trending/>
    <Original/>  
       
  </Container>
  
  )
}

export default Movies

const Container = styled.div`
  padding: 0 0 26px;
`;
