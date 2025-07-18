import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/scss";
import "swiper/scss/effect-fade";
import "react-toastify/dist/ReactToastify.css";
import "../../public/assets/fontawesome/all.min.css";
import "../../public/assets/fontawesome/sharp-solid.min.css";
import "../../public/assets/fontawesome/sharp-regular.min.css";
import "../../public/assets/scss/style.scss";
import "../../public/assets/scss/fix-mobile-blur.css";
import "../../public/assets/scss/fix-dropdown.css";
import "../../public/assets/scss/fix-homepage-alignment.css";
import "../styles/submenu-fix.css";
import "../styles/loader.css";
import "../styles/button-fix.css";
import "../styles/service-buttons.css";
import "../styles/mobile-menu-fix.css";
import "../styles/header-fix.css";
import "../styles/menu-arrow-fix.css";
import "../styles/mobile-nav-fix.css";
import "../styles/navbar-color-update.css";
import "../styles/submenu-auto-open-fix.css";
import "../styles/menu-spacing-fix.css";
import {
  inter,
  mulish,
  newsreader,
  oldenburg,
  philosopher,
  sahitya,
} from "./font";
import { ToastContainer } from "react-toastify";
import { Providers } from "@/redux/provider";
import { LanguageProvider } from "@/context/LanguageContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${mulish.variable} ${newsreader.variable} ${sahitya.variable} ${philosopher.variable} ${oldenburg.variable}`}
      >
        <Providers>
          <LanguageProvider>
            {children}
            <ToastContainer />
          </LanguageProvider>
        </Providers>
      </body>
    </html>
  );
}
