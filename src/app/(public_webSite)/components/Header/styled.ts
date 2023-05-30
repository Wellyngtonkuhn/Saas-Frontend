import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  background-color: red;
  position: fixed;
  top: 0;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;

  .open {
    left: 0;
    opacity: 1;
  }
`;

export const Nav = styled.nav`
  width: 100%;
  position: absolute;
  top: 4.1rem;
  left: -100%;
  background-color: red;
  padding: 1rem 0;
  transition: all ease 0.4s;
  opacity: 0;

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    @media screen and (min-width: 1024px) {
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
    }
  }

  @media screen and (min-width: 1024px) {
    position: relative;

    top: unset;
    left: unset;
    opacity: unset;
  }
`;

export const MobileBurguer = styled.button`
  font-size: 1.5rem;
  background-color: transparent;
  border: none;

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;
