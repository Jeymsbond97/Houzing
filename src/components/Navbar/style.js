import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  
`;
export const Main = styled.div`
  display: flex;
  justify-content: center;
  background: var(--colorPrimary);
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  
  color: #ffff;
  padding: var(--padding);
  height: 64px;

  font-size: 16px;
  width: 100%;
  max-width: 1440px;
`;

export const Section = styled.div`
  display: flex;
  align-items: center;

  cursor: ${({logo} ) => logo && 'pointer'};

  .active{
    color: #b8ff06;
  }
`;

export const Logo = styled.img`
  width: 30px;
  margin-right: 12px;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: #ffff;
  padding: 0 32px;
`;
