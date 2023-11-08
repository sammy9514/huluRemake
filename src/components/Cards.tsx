import React from "react";
import { styled } from "styled-components";
import movie from "../Assets/it.jpg";

interface iMovie {
  // id: number;
  img: string;
  head: string;
  title: string;
  rated: string;
  gerne: string;
  type: string;
  movieYear: string;
  desc?: string;
  staring?: string;
  director?: string;
  bckImg?: string;
}

export const Cards: React.FC<iMovie> = ({
  // id,
  img,
  head,
  title,
  rated,
  gerne,
  type,
  movieYear,
}) => {
  return (
    <div>
      <Container>
        <ImageHolder>
          <Img src={img} />
        </ImageHolder>
        <Title>{title}</Title>
        <Desc>
          <Rated>{rated}</Rated>
          <Gerne>{gerne}</Gerne>
          <Type>{type} </Type>
          <MovieYear>{movieYear}</MovieYear>
        </Desc>
      </Container>
    </div>
  );
};

const MovieYear = styled.div`
  color: white;
`;
const Type = styled.div`
  color: white;
`;
const Gerne = styled.div`
  color: white;
`;
const Rated = styled.div`
  color: white;
`;
const Desc = styled.div`
  color: white;
  display: flex;
  gap: 3px;
  font-size: 11px;
  width: 100%;
`;
const Title = styled.div`
  color: white;
  font-size: 14.2px;
  font-weight: 700;
  padding: 9px 0;
`;
const Img = styled.img`
  object-fit: cover;
  width: 100%;
  border-radius: 10px;
  height: 100%;
`;
const ImageHolder = styled.div`
  width: 220px;
  height: 110px;
  border-radius: 10px;
`;
const Container = styled.div`
  color: white;
`;
