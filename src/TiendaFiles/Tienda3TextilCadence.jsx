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
import { Navbar3 } from "../navbar/Navbar3";
import { WavyContainer, WavyLink } from "react-wavy-transitions";

export const Tienda3TextilCadence = () => {
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
      <Navbar3 />

      {showOverlay && <div className="overlay"></div>}
      <div className="tienda" id="tienda3">
        <br></br>

        <div className="menu">
          <h1>Textil - Cadence 📘</h1>

          <h3>
            Textiles de la marca Cadence, ideales para proyectos de
            decoración y manualidades. Explora nuestra amplia gama de textiles
            para dar vida a tus creaciones.
          </h3>
        </div>

        <div className="marcas2">
          <WavyLink direction="up" to="/tienda/cadence/transfers-textiles" color="#4593db">
            <div className="cadence-card">
                            <span className="badge-novedad">Novedades</span>

              <img src='https://i.ibb.co/C6s5fwX/transfers-para-tela-cadence.jpg' alt='cadence'></img>
              <br></br>
              <p>Transfers Textil Cadence</p>
            </div>
      
          </WavyLink>

          <WavyLink
            direction="up"
            to="/tienda/cadence/textil-cadence/pinturas-textiles"
            color="#4593db"
          >
            <div className="cadence-card">
                            <span className="badge-novedad">Novedades</span>

              <img
                src="https://dl.dropboxusercontent.com/scl/fi/edygy24jtxl1buk4asa2a/pintura-textil-style-matt-fabric-cadence.jpg?rlkey=d34637ji4onpsglu72407yjyg&st=gdiwu1eo&dl=0"
                alt="cadence"
              ></img>
              <br></br>
              <p>Pintura Textil Cadence</p>
            </div>
          </WavyLink>

          <WavyLink
            direction="up"
            to="/tienda/cadence/textil-cadence/sprays-textiles"
            color="#4593db"
          >
            <div className="cadence-card">
                            <span className="badge-novedad">Novedades</span>

              <img
                src="https://dl.dropboxusercontent.com/scl/fi/x93vb86dzp6ln0ijew9c2/your-fashion-spray-textil-cadence.jpg?rlkey=bgljdbd2t3bnh2ku7plfxttu7&st=rieutuew&dl=0"
                alt="cadence"
              ></img>
              <br></br>
              <p>Sprays Textiles Cadence</p>
            </div>
          </WavyLink>

          <WavyLink
            direction="up"
            to="/tienda/cadence/textil-cadence/pastas-textiles"
            color="#4593db"
          >
            <div className="cadence-card">
                            <span className="badge-novedad">Novedades</span>

              <img
                src="https://dl.dropboxusercontent.com/scl/fi/xvm2wlq0uvt6jh3fk66be/pasta-textil-fashion-cadence.jpg?rlkey=0ijqh8rcrou7hqmnqfk9p1mut&st=8noxkluo&dl=0"
                alt="cadence"
              ></img>
              <br></br>
              <p>Pastas Textiles Cadence</p>
            </div>
          </WavyLink>
          <WavyLink
            direction="up"
            to="/tienda/cadence/textil-cadence/mixtion-textil"
            color="#4593db"
          >
            <div className="cadence-card">
                            <span className="badge-novedad">Novedades</span>

              <img
                src="https://i.ibb.co/MVyFh7M/transfers-cadence.jpg"
                alt="cadence"
              ></img>
              <br></br>
              <p>Mixtion Textil Cadence</p>
            </div>
          </WavyLink>
          <WavyLink
            direction="up"
            to="/tienda/cadence/textil-cadence/foil"
            color="#4593db"
          >
            <div className="cadence-card">
                            <span className="badge-novedad">Novedades</span>

              <img
                src="https://dl.dropboxusercontent.com/scl/fi/rir75vxd82xwtwt0ahp1e/foil-y-pan-de-oro-cadence.jpg?rlkey=k3u9xdz6d534y48iax7euw6oo&st=mb9mpgqf&dl=0"
                alt="cadence"
              ></img>
              <br></br>
              <p>Foil Textil Cadence</p>
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
