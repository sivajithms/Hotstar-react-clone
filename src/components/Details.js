import React from 'react'
import styled from 'styled-components'

function Details() {
  return (
    <Container>
      <Background>
        <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg" />
      </Background>
      <ImageTitle>
        <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78" />
      </ImageTitle>
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
        2009 . 7m . family, fantasy, kids, animation
      </Subtile>
      <Description>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, cupiditate? Maiores necessitatibus labore nisi alias magni quaerat reiciendis quia quisquam doloremque quidem explicabo distinctio temporibus corrupti error saepe, porro iure.

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
    min-heigth: 170px;
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
    marigin-top: 16px;
    max-width: 700px;
    color: rgb(249, 249, 249);

`