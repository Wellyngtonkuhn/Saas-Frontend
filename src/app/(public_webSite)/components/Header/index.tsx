"use client";
import { useState } from "react";
import Link from "next/link";
import { Content, Header, MobileBurguer, Nav } from "./styled";
import { Container } from "../../../../../styles/Container";
import { FiMenu, FiX } from "react-icons/fi";

export default function HeaderWebSite() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu((prev) => !prev);
  };

  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  return (
    <Header>
      <Container>
        <Content>
          <Link href="/" onClick={() => handleCloseMenu()}>
            <h1>ConnectingPeople</h1>
          </Link>
          
          <Nav className={openMenu ? "open" : ""}>
            <ul>
              <li>
                <Link href="/" onClick={() => handleCloseMenu()}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="about" onClick={() => handleCloseMenu()}>
                  About
                </Link>
              </li>
              <li>
                <Link href="missionaries" onClick={() => handleCloseMenu()}>
                  Missionários
                </Link>
              </li>
              <li>
                <Link href="donation" onClick={() => handleCloseMenu()}>
                  Doar
                </Link>
              </li>
              <li>
                <Link href="login" onClick={() => handleCloseMenu()}>
                  Login
                </Link>
              </li>
            </ul>
          </Nav>

          <MobileBurguer onClick={() => handleOpenMenu()}>
            {openMenu ? <FiX /> : <FiMenu />}
          </MobileBurguer>
        </Content>
      </Container>
    </Header>
  );
}
