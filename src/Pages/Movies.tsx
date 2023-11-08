import React from "react";
import styled from "styled-components";
import img from "../Assets/original.jpeg";
import data from "../components/data.json";
import { Link } from "react-router-dom";
import { Cards } from "../components/Cards";
const Movies = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Header>Movies</Header>
          <Wrap2>
            <Wrap>
              <BigText>Movies</BigText>
              <Text>
                Stream box office hits, classic cinema, acclaimed indies,
                inspiring documentaries, and much more.
              </Text>
              <Head>Hulu Originals</Head>
              <Cardhold>
                {data.map((props) => (
                  <Link
                    to={`main/${props.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Cards
                      key={props.id}
                      img={props.img}
                      head={props.head}
                      title={props.title}
                      rated={props.rated}
                      gerne={props.gerne}
                      type={props.type}
                      movieYear={props.movieYear}
                    />
                  </Link>
                ))}
              </Cardhold>
              <Head>Hulu Originals</Head>
              <Cardhold>
                {data.map((props) => (
                  <Cards
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
              </Cardhold>
              <Head>Hulu Originals</Head>
              <Cardhold>
                {data.map((props) => (
                  <Cards
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
              </Cardhold>
            </Wrap>
          </Wrap2>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Movies;

const Head = styled.div`
  color: white;
  margin-top: 100px;
  /* background-color: red; */
  margin-bottom: 20px;
  font-size: 15px;
  font-weight: 500px;
`;

const Cardhold = styled.div`
  /* background-color: red; */
  display: flex;
  width: 845px;
  gap: 30px;
  margin-top: 10px;
  /* margin-top: 200px; */
`;

const Wrap2 = styled.div`
  width: 90%;
  height: 100%;
  /* padding: 10px; */
  /* padding-top: 20px; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrap = styled.div`
  width: 100%;
  color: white;

  margin-top: 160px;
  /* padding: 70%; */
`;
const BigText = styled.div`
  font-size: 40px;
  font-weight: 400;
`;
const Text = styled.div`
  width: 50%;
  font-size: 13px;
  margin-top: 10px;
`;

const Header = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  border-bottom: 1px solid white;
`;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: black;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 70%;
  height: 100%;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: contain;
`;
