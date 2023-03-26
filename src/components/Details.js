import { collection, doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components'
import { db } from '../firebase';

function Details(props) {
  const { id } = useParams()
  console.log(id);
  const [detailData, setDetailData] = useState({});
  console.log(detailData.titleImg);


  useEffect(() => {
    async function fetchMovieData() {
      try {
        const docRef = doc(db, "movies", id); 
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const movieData = docSnap.data(); 
          setDetailData(movieData);
          console.log("Document data:", detailData);
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching  data:", error);
      }
    }
    fetchMovieData();
  }, [id]);

  return (
    <Container>
      <Background>
        <img src={detailData.backgroundImg} />
      </Background>
      <ImageTitle>
      <img alt={detailData.title} src={detailData.titleImg} />      </ImageTitle>
      <Controls>
        <PlayButton>
            <img src="/images/play-icon-black.png" />
            <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
            <img src="/images/play-icon-white.png" />
            <span>Trailer</span>
        </TrailerButton>
        <AddButton>
            <span>+</span>
        </AddButton>
        <GroupWatchButton>
        <img src="/images/group-icon.png" />
        </GroupWatchButton>

      </Controls>
      <Subtile>
        {detailData.subTitle}
      </Subtile>
      <Description>
        {detailData.description}
      </Description>
    </Container>
  )
}

export default Details

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;    
    right: 0;
    bottom: 0;
    z-index: -1;
    opacity: 0.8;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const ImageTitle = styled.div`
    height: 30vh;
    min-height: 170px;
    width: 35vw;
    min-width: 200px;
    margin-top: 60px;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`

const Controls = styled.div`
    display: flex;
    align-items: center;
    
`

const PlayButton = styled.button`
    border-radius: 4px;
    font-size: 15px;
    padding: 0px 24px;
    margin-right: 22px;
    display: flex;
    align-items: center;
    height: 56px;
    background: rgb(0, 249, 249);
    border: none;
    letter-spacing: 1.8px;
    cursor: pointer;

    &:hover{
      background: rgb(198, 198, 198)

    }

`

const TrailerButton = styled(PlayButton)`
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
    text-transform: uppercase

`

const AddButton = styled.button`
margin-right: 16px;
    width: 44px;
    height: 44px;
    display: flex;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid white;
    background-color: rgba(0, 0, 0, 0.6);
    cursor: pointer;

    span{
      font-size: 30px;
      color: white
    }

`

const GroupWatchButton = styled(AddButton)`
    background: rgb(0, 0, 0)

`

const Subtile = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;
`

const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    max-width: 700px;
    color: rgb(249, 249, 249);

`