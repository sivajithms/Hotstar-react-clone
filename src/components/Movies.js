import React from 'react'
import styled from 'styled-components'
import New from './movies/New'
import Original from './movies/Original'
import Recommends from './movies/Recommends'
import Trending from './movies/Trending'

function Movies(props) {
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
