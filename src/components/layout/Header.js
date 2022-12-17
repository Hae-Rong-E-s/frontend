import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Button from "../elem/Button";

const Container = styled.div`
  padding: 20px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
`;

const MainTitle = styled.div`
  color: #ffffff;
  font-size: 20px;
  font-weight: 900;
  cursor: pointer;
  display: flex;
  justify-content: center;
  div {
    margin-left: 10px;
  }
`;

const HIcon = styled.img`
  width: 30px;
`;

const Header = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <MainTitle
        onClick={() => {
          navigate("/");
        }}
      >
        <HIcon
          src={process.env.PUBLIC_URL + "/imgs/h-solid.svg"}
          alt="Hicon"
        ></HIcon>
        <div> Tom's Healog</div>
      </MainTitle>
      <Button>로그인</Button>
    </Container>
  );
};

export default Header;
