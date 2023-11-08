import React, { useState } from "react";
import { styled } from "styled-components";
import logo from "../Assets/hulu-logo.svg";
import plat from "../Assets/original.png";
import bckimg from "../Assets/a632c29c-4758-4b65-a501-b3e6bdadb701-1.jpg";
import { useParams } from "react-router-dom";
import detailed from ".././components/detailedData.json";
import { YouMayLike } from "./YouMayLike";
import { AboutMovie } from "./AboutMovie";

export const MainPage = () => {
  const params: any = useParams();
  const details = detailed[params.id - 1];
  const [show, setShow] = useState(true);
  const [show1, setShow1] = useState(false);
  const showItems = () => {
    setShow(true);
    setShow1(false);
  };
  const showItems1 = () => {
    setShow1(true);
    setShow(false);
  };
  return (
    <div>
      <Container>
        <Wrapper>
          <Head bck={details.bckImg}>
            <Top>
              <Wrap>
                <Logo>
                  <Img src={logo} />
                </Logo>
                <Log>
                  <Sign>START YOUR FREE TRIAL</Sign>
                  <Login>LOG IN</Login>
                </Log>
              </Wrap>
            </Top>
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
                <Plan>
                  Stream thousands of shows and movies, with plans starting at
                  $7.99/month.
                </Plan>
                <Button>START YOUR FREE TRIAL</Button>
                <Tiny>
                  Hulu free trial available for new and eligible returning Hulu
                  subscribers only. Cancel anytime. Additional terms apply.
                </Tiny>
              </Dwrap>
            </Details>
            <Foot>
              <Fwrap>
                <Left>
                  <Hold>
                    <Img src={plat} />
                  </Hold>
                  <Info>
                    <Disney>DISNEY BUNDLE TRIO BASIC</Disney>
                    <Hulu>
                      Get Hulu, Disney+, and ESPN+, all with ads, for
                      $12.99/mo.*
                    </Hulu>
                    <Price>
                      *Price will increase to $14.99/month on 10/12/2023.
                    </Price>
                  </Info>
                </Left>
                <Right>
                  <Button1>GET ALL THREE</Button1>
                  <Term>Terms apply</Term>
                </Right>
              </Fwrap>
            </Foot>

            <Color />
          </Head>
          <Body>
            <Btop>
              <Like
                onClick={showItems}
                style={{
                  borderBottom: show
                    ? "3px solid red"
                    : "3px solid transparent",
                  paddingBottom: "30px",
                  marginTop: "30px",
                  transition: "350ms ease",
                }}
              >
                YOU MAY ALSO LIKE
              </Like>
              <Detail
                onClick={showItems1}
                style={{
                  borderBottom: show1
                    ? "3px solid red"
                    : "3px solid transparent",
                  paddingBottom: "30px",
                  marginTop: "30px",
                  transition: "350ms ease-in-out",
                }}
              >
                DETAILS
              </Detail>
            </Btop>
            <Holder>
              <Chold>{show1 ? <AboutMovie /> : null}</Chold>
              {show ? <YouMayLike /> : null}
            </Holder>
          </Body>
        </Wrapper>
      </Container>
    </div>
  );
};

const Chold = styled.div`
  width: 100%;
`;
const Holder = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Detail = styled.div``;
const Like = styled.div`
  margin-left: 50px;
`;
const Btop = styled.div`
  width: 100%;
  height: 80px;
  border-bottom: 3px solid silver;
  display: flex;
  gap: 30px;
  /* align-items: center; */
  font-size: 18px;
  font-weight: bold;
`;
const Body = styled.div`
  width: 100%;
  height: 100vh;
  /* display: flex;
  flex-direction: column;
  align-items: center; */
`;

const Term = styled.div`
  font-size: 10px;
  text-decoration: underline;
  color: gray;
  text-align: center;
`;
const Button1 = styled.div`
  width: 150px;
  padding: 18px 10px;
  background-color: white;
  color: black;
  text-align: center;
  border-radius: 3px;
  font-size: 14px;
  font-weight: bold;
  margin: 15px 0 10px;
`;
const Right = styled.div``;
const Price = styled.div`
  font-size: 10px;
  color: white;
`;
const Hulu = styled.div`
  font-size: 25px;
  color: white;
`;
const Disney = styled.div`
  font-size: 14px;
  color: green;
  font-weight: bold;
`;
const Info = styled.div``;
const Hold = styled.div`
  width: 400px;
  height: 100px;
`;
const Left = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
`;
const Fwrap = styled.div`
  width: 85%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Foot = styled.div`
  width: 100%;
  height: 200px;
  background-color: #0000007d;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Tiny = styled.div`
  font-size: 10px;
  color: #867878;
`;
const Button = styled.div`
  width: 200px;
  padding: 8px 20px;
  background-color: white;
  color: black;
  text-align: center;
  border-radius: 3px;
  font-size: 14px;
  font-weight: bold;
  margin: 15px 0 10px;
`;
const Plan = styled.div`
  color: white;
  font-size: 14px;
`;
const Director = styled.div`
  color: white;
  font-size: 14px;
  span {
    font-weight: bold;
  }
  padding-bottom: 15px;
`;
const Staring = styled.div`
  color: white;
  font-size: 14px;
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
  font-size: 14px;
  color: white;
  padding-bottom: 10px;
`;
const MovieDesc = styled.div`
  font-size: 14px;
  width: 80%;
  padding-bottom: 14px;
  color: white;
`;
const Title = styled.div`
  font-size: 40px;
  font-weight: 600;
  color: white;
  width: 30%;
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
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Top = styled.div`
  width: 100%;
  height: 150px;
  align-items: center;
  justify-content: center;
  display: flex;
`;
const Wrap = styled.div`
  width: 95%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Login = styled.div`
  color: gray;
`;
const Sign = styled.div`
  color: white;
`;
const Log = styled.div`
  display: flex;
  gap: 20px;
  font-weight: bold;
`;
const Img = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`;
const Logo = styled.div`
  width: 100px;
  height: 100px;
`;

const Color = styled.div``;
const Head = styled.div<{ bck: any }>`
  width: 100%;
  height: 60vh;
  display: flex;
  justify-content: center;
  background-image: url(${(props) => props.bck});
  background-size: cover;
  background-position: center;
  flex-direction: column;
  position: relative;
`;
const Cover = styled.div`
  background: linear-gradient(to right, red, blue, transparent, transparent);
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
