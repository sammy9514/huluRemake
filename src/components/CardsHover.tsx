import React from "react";
import { styled } from "styled-components";
import movie from "../Assets/19b9d405-40b2-483e-8e1f-e25fe10c7299.jpg";

interface iMovie {
  // id: number;
  img: string;
  head: string;
  title: string;
  rated: string;
  gerne: string;
  type: string;
  movieYear: string;
}

export const CardHover: React.FC<iMovie> = ({
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
          <Hover />
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
  font-size: 14px;
`;
const Title = styled.div`
  color: white;
  font-size: 19px;
  font-weight: 700;
  padding: 9px 0;
`;
const Img = styled.img`
  object-fit: cover;
  width: 100%;
  border-radius: 10px;
  height: 100%;
`;

const Hover = styled.div`
  width: 300px;
  height: 170px;
  position: absolute;

  &:hover {
    background-color: #a0101024;
  }
`;
const ImageHolder = styled.div`
  width: 300px;
  height: 170px;
  border-radius: 10px;
  border: 4px solid transparent;
  padding: 3px;
  &:hover {
    position: relative;
    border: 4px solid gray;
    border-radius: 10px;
  }
`;
const Container = styled.div`
  color: white;
  transition: 350ms ease-in-out;
`;
