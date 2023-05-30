import StyledComponentsRegistry from "@/lib/StyledComponentsRegistry";
import { GlobalStyle } from "styles/global";
import HeaderWebSite from "./components/Header";
import FooterWebSite from "./components/footer";

export const metadata = {
  title: "Saas Product",
  description: "A new webApp is comming soon",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <StyledComponentsRegistry>
          <HeaderWebSite />
          {children}
          <FooterWebSite />
          <GlobalStyle />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
