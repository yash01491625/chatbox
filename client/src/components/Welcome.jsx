import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Robot from "../assets/robot.gif";
export default function Welcome() {
  const [userName, setUserName] = useState("");
  useEffect(async () => {
    const check = async () => {
      const storedData = localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY);
      if (storedData) {
        try {
          const parsedData = JSON.parse(storedData);
          if (parsedData && parsedData.username) {
            setUserName(parsedData.username);
          } else {
            console.error('Username not found in localStorage data');
          }
        } catch (error) {
          console.error('Error parsing localStorage data', error);
        }
      } else {
        console.error('No data found in localStorage');
      }
    }
    check();
  }, []);
  return (
    <Container>
      <img src={Robot} alt="" />
      <h1>
        Welcome, <span>{userName}!</span>
      </h1>
      <h3>Please select a chat to Start messaging.</h3>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(135deg, #1f1f2e, #2e2e47);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #ffffff;
  gap: 1rem;
  text-align: center;
  padding: 2rem;

  img {
    height: 20rem;
    object-fit: contain;
    filter: drop-shadow(0 0 10px rgba(78, 14, 255, 0.3));
  }

  h1, p {
    margin: 0.5rem 0;
  }

  span {
    color: #a076f7;
    font-weight: bold;
    font-size: 1.1rem;
  }
`;

