import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Button } from "@chakra-ui/react";
import { ArrowUpIcon } from "@chakra-ui/icons";
import ScrollToTopButton from "./ScrollToTopButton";
import { MyComponent } from "./MyComponent";
import products from "./products.json";
import CookieConsent from 'react-cookie-consent';
import { useSpring, animated } from 'react-spring';
import { WavyContainer, WavyLink } from "react-wavy-transitions";




import "./styles.css";
import { Link } from "react-router-dom";

export const Parallax = () => {
  const containerRef = useRef();

  
  useEffect(() => {
    const container = containerRef.current;

    const sections = gsap.utils.toArray(".panel");

    gsap.registerPlugin(ScrollTrigger);

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 0.1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + container.offsetWidth, // <-- Aquí estás usando container directamente
      },
    });

    let startTouchX;

    const handleTouchStart = (e) => {
      startTouchX = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
      const touchX = e.touches[0].clientX;
      const touchDeltaX = startTouchX - touchX;
      const scrollMultiplier = 20;
      container.scrollLeft += touchDeltaX * scrollMultiplier;
      startTouchX = touchX;
    };

    container.addEventListener("touchstart", handleTouchStart);
    container.addEventListener("touchmove", handleTouchMove);

    return () => {
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
    };
  }, [containerRef]);

  const [visible, setVisible] = useState(true);

  const props = useSpring({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0%)' : 'translateY(100%)',
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(false);
    }, 9000); // Ocultar después de 5 segundos

    return () => clearTimeout(timeout);
  }, []);

  const scrollToBottom = () => {
    const totalHeight = document.body.scrollHeight;
    window.scrollTo({
      top: totalHeight,
    });
  };




  return (
    <>
      <section className="banner">
        <div className="banner-content">
          <h2>Hola, <br />¡soy Carmen!👋</h2>
          <h3>🎨Artista creativa y curiosa👩🏻‍🎨</h3>
          <br />
          <WavyLink direction="up" to="/tienda" color="#45db52">
            <Button id="buttonIntro" colorScheme="white" variant="outline" >
              👉🏻Accede a mi Tienda👈🏻
            </Button>
          </WavyLink>
          <br />
          <div onClick={scrollToBottom}>
            <Button id="buttonIntro" colorScheme="white" variant="outline" >
              📲Contacta conmigo📲
            </Button>

          </div>


        </div>
      </section>
      <div ref={containerRef} className="container">
        {products.products.map((product) => (
          <section className="panel blue" key={product.id} id={product.id}>
            <MyComponent {...product} />
          </section>
        ))}
      </div>
      <CookieConsent
        location="bottom"
        buttonText="Aceptar"
        cookieName="miCookieConsent"
        style={{ background: "#2B373B" }}
        buttonStyle={{ backgroundColor: "#2c8b64", color: "#fff", fontSize: "13px" }}
        expires={365}
      >
        🍪Este sitio web utiliza cookies para mejorar la experiencia del usuario, no se utilizan para recoger información sensible de carácter personal🔐
      </CookieConsent>


      <ScrollToTopButton />

    </>
  );
};
