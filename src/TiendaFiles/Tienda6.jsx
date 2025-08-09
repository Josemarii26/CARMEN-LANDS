import React, { useState, useEffect } from "react";
import { Navbar } from "../navbar/Navbar";
import { ProductCard } from "../tienda/ProductCard";
import { SearchBar } from "../tienda/SearchBar";
import { Cart } from "../tienda/Cart";
import { Slide } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Tag } from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";

import Aos from "aos";
import "aos/dist/aos.css";
import ScrollToTopButton from "../parallax/parallax-2/ScrollToTopButton";
import { Navbar2 } from "../navbar/Navbar2";
import { ProductCard2 } from "../tienda/ProductCard2";
import { Navbar6 } from "../navbar/Navbar6";
import { WavyContainer, WavyLink } from "react-wavy-transitions";

export const Tienda6 = () => {
  const [cart, setCart] = useState([]);
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    Aos.init();
  }, []);

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  const { isOpen, onToggle, onClose } = useDisclosure();

  const handleCloseCart = () => {
    onClose(); // Cierra el carrito

    // También cambia el estado `showOverlay` cuando el carrito se cierra
    setShowOverlay(false);
  };

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Recupera el carrito desde localStorage al cargar la página
    const data = window.localStorage.getItem("cart");
    if (data !== null) {
      setCart(JSON.parse(data));
    }
    setIsLoading(false); // <- Mueve esto aquí para indicar que la carga se ha completado
  }, []);

  useEffect(() => {
    // Guarda el carrito en localStorage cada vez que cambie
    window.localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  if (isLoading) {
    // You can render a loading indicator here if needed
    return <p>Loading...</p>;
  }

  return (
    <>
      <Navbar6 />

      {showOverlay && <div className="overlay"></div>}
      <div className="tienda" id="tienda6">
        <br></br>

        <div className="menu">
          <h1>Tienda de productos - Papers For You 🌸</h1>

          <h3>
            Papers For You es una empresa distribuidora de productos como el
            papel de scrapbook, el papel de cartonaje y diverso material de
            encuadernación como estos rollos de tela. Todos se presentan en
            rollo presentados en caja.
          </h3>
        </div>

        <div className="marcas2">
          <WavyLink
            direction="up"
            to="/tienda/papers-for-you/tela"
            color="#de95e7ff"
          >
            <div className="cadence-card">
              <span className="badge-novedad">Novedades</span>

              <img
                src="https://dl.dropboxusercontent.com/scl/fi/bv747bbzzzm1zldrqxdn4/pyf-rollos-tela-encuadernar.jpg?rlkey=sq1uupdqdwrpjyjjmav3qbjsb&st=f9s942sl&dl=0"
                alt="cadence"
              ></img>
              <br></br>
              <p>Rollos Tela Papers For You</p>
            </div>
          </WavyLink>

          <WavyLink
            direction="up"
            to="/tienda/papers-for-you/lino"
            color="#de95e7ff"
          >
            <div className="cadence-card">
              <span className="badge-novedad">Novedades</span>

              <img
                src="https://dl.dropboxusercontent.com/scl/fi/bv747bbzzzm1zldrqxdn4/pyf-rollos-tela-encuadernar.jpg?rlkey=sq1uupdqdwrpjyjjmav3qbjsb&st=f9s942sl&dl=0"
                alt="cadence"
              ></img>
              <br></br>
              <p>Rollos Lino Papers For You</p>
            </div>
          </WavyLink>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <br></br>

        <br></br>
        <br></br>
        <br></br>

        <Slide direction="bottom" in={isOpen} style={{ zIndex: 10 }}>
          <Box
            p="40px"
            color="white"
            mt="4"
            bg="teal.500"
            rounded="md"
            shadow="md"
          >
            <Cart
              cart={cart}
              setCart={setCart}
              removeFromCart={removeFromCart}
              handleCloseCart={handleCloseCart}
            />
          </Box>
        </Slide>

        <ScrollToTopButton />
      </div>
    </>
  );
};
