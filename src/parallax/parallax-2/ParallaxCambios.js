import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Button } from "@chakra-ui/react";
import ScrollToTopButton from "./ScrollToTopButton";
import { MyComponent } from "./MyComponent";
import products from "./products.json";
import CookieConsent from "react-cookie-consent";
import { WavyLink } from "react-wavy-transitions";

import "./styles.css";

export const ParallaxCambios = () => {
  const containerRef = useRef();

  return (
    <>
      <section className="banner">
        <div className="banner-content">
          <h2>
            Hola, <br />
            ¡Estamos trabajando en la web! 🚧
          </h2>
        </div>
      </section>
    </>
  );
};
