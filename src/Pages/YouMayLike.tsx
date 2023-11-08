import React from "react";
import { styled } from "styled-components";
import { CardHover } from "../components/CardsHover";
import main from "../components/main.json";

export const YouMayLike = () => {
  return (
    <div>
      <Container>
        <Bwrap>
          <CardsHold>
            {main.map((props) => (
              <CardHover
                key={props.id}
                img={props.img}
                head={props.head}
                title={props.title}
                rated={props.rated}
                gerne={props.gerne}
                type={props.type}
                movieYear={props.movieYear}
              />
            ))}
          </CardsHold>
          <CardsHold>
            {main.map((props) => (
              <CardHover
                key={props.id}
                img={props.img}
                head={props.head}
                title={props.title}
                rated={props.rated}
                gerne={props.gerne}
                type={props.type}
                movieYear={props.movieYear}
              />
            ))}
          </CardsHold>
        </Bwrap>
      </Container>
    </div>
  );
};

const Bwrap = styled.div`
  width: 85%;
`;
const CardsHold = styled.div`
  display: flex;
  gap: 20px;
  margin: 70px 0;
`;
const Container = styled.div``;
