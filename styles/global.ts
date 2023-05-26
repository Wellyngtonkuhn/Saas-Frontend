'use client'
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        font-size: 16px;
    }
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    a{
        text-decoration: none;
    }

    li{
        list-style: none;
    }
`;
