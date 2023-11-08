import React, { useState } from "react";
import { styled } from "styled-components";
import detailed from ".././components/detailedData.json";
import { useParams } from "react-router-dom";

export const AboutMovie = () => {
  const params: any = useParams();
  const details = detailed[params.id - 1];

  return (
    <div>
      {/* <Container>
        <Wrapper> */}
      <Details>
        <Dwrap>
          <Title>{details.title}</Title>
          <MovieDesc>{details.desc}</MovieDesc>
          <Staring>
            <span>Starring: </span>
            {details.staring}
          </Staring>
          <Director>
            <span>Director:</span> {details.director}
          </Director>
          <Desc>
            <Rated>R</Rated>
            <Gerne>• Thriller, Horror </Gerne>
            <Type> • Movie</Type>
            <MovieYear>2019</MovieYear>
          </Desc>
        </Dwrap>
      </Details>
      {/* </Wrapper>
      </Container> */}
    </div>
  );
};

const Director = styled.div`
  color: black;
  font-size: 17px;
  span {
    font-weight: bold;
  }
  padding-bottom: 15px;
`;
const Staring = styled.div`
  color: black;
  font-size: 17px;
  padding-bottom: 5px;
  span {
    font-weight: bold;
  }
`;
const MovieYear = styled.div``;
const Type = styled.div``;
const Gerne = styled.div``;
const Rated = styled.div``;
const Desc = styled.div`
  display: flex;
  gap: 10px;
  font-size: 17px;
  color: black;
  padding-bottom: 10px;
`;
const MovieDesc = styled.div`
  font-size: 17px;
  width: 80%;
  padding-bottom: 17px;
  color: black;
`;
const Title = styled.div`
  font-size: 45px;
  font-weight: 600;
  color: black;
  width: 50%;
  padding-bottom: 15px;
  /* line-height: 35px; */
`;
const Dwrap = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const Details = styled.div`
  width: 50%;
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div``;
const Container = styled.div`
  background-color: yellow;
  display: flex;
  flex-direction: column;
  justify-content: start;
`;
