import React from "react";
import { useNavigate } from "react-router-dom";
import { BiPowerOff } from "react-icons/bi";
import styled from "styled-components";
import axios from "axios";
import { logoutRoute } from "../utils/APIRoutes";
export default function Logout() {
  const navigate = useNavigate();
  const handleClick = async () => {
    const id = await JSON.parse(
      localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
    )._id;
    const data = await axios.get(`${logoutRoute}/${id}`);
    if (data.status === 200) {
      localStorage.clear();
      navigate("/login");
    }
  };
  return (
    <Button onClick={handleClick}>
      <BiPowerOff />
    </Button>
  );
}

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.7rem 1rem;
  border-radius: 0.6rem;
  background: rgba(154, 134, 243, 0.15);
  border: 1px solid #9a86f3;
  backdrop-filter: blur(10px);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 4px 12px rgba(154, 134, 243, 0.2);

  svg {
    font-size: 1.3rem;
    color: #ebe7ff;
    transition: transform 0.2s ease-in-out;
  }

  &:hover {
    background: rgba(154, 134, 243, 0.3);
    box-shadow: 0 6px 16px rgba(154, 134, 243, 0.4);

    svg {
      transform: scale(1.2);
    }
  }
`;

