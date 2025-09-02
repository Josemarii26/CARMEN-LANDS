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

export const Tienda3 = () => {
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
          <h1>Tienda de productos para artistas - Cadence 📘</h1>

          <h3>
            En esta sección de la tienda encontrareis multitud de productos
            especializados para artistas de la marca Cadence.
          </h3>
        </div>

        <div className="marcas2">
          <WavyLink
            direction="up"
            to="/tienda/cadence/pinturas"
            color="#4593db"
          >
            <div className="cadence-card">
              <span className="badge-novedad">Novedades</span>
              <img
                src="https://dl.dropboxusercontent.com/scl/fi/5xjxqivgcbqirf6wx173g/hybrid-metallic-cadence.jpg?rlkey=25w6u366cwbggixel7jz8c0eg&st=jz89np2r&dl=0"
                alt="cadence"
              />
              <br></br>
              <p>Pinturas marca Cadence</p>
            </div>
          </WavyLink>

          <WavyLink
            direction="up"
            to="/tienda/cadence/barnices-craqueladores"
            color="#4593db"
          >
            <div className="cadence-card">
              <span className="badge-novedad">Novedades</span>

              <img
                src="https://i.ibb.co/fkd334b/craqueladores-barnices-y-foil.jpg"
                alt="cadence"
              ></img>
              <br></br>
              <p>Barnices y Craqueladores</p>
            </div>
          </WavyLink>

          <WavyLink
            direction="up"
            to="/tienda/cadence/stencils"
            color="#4593db"
          >
            <div className="cadence-card">
              
              <img
                src="https://i.ibb.co/Hx7QkKS/cadence-stencils.jpg"
                alt="cadence"
              ></img>
              <br></br>
              <p>Stencil´s (plantillas) Cadence</p>
            </div>
          </WavyLink>

          <WavyLink
            direction="up"
            to="/tienda/cadence/transfers"
            color="#4593db"
          >
            <div className="cadence-card">
              <span className="badge-novedad">Novedades</span>

              <img
                src="https://i.ibb.co/MVyFh7M/transfers-cadence.jpg"
                alt="cadence"
              ></img>
              <br></br>
              <p>Transferencias Cadence</p>
            </div>
          </WavyLink>

          <WavyLink direction="up" to="/tienda/cadence/pastas" color="#4593db">
            <div className="cadence-card">
              <img
                src="https://i.ibb.co/JsP2Hp9/pastas-de-relieve-y-gessos-cadence.jpg"
                alt="cadence"
              ></img>
              <br></br>
              <p>Pastas marca Cadence</p>
            </div>
          </WavyLink>

          <WavyLink
            direction="up"
            to="/tienda/cadence/soportes-madera"
            color="#4593db"
          >
            <div className="cadence-card">
              <img
                src="https://i.ibb.co/ckD3p7q/madera-cadence.jpg"
                alt="cadence"
              ></img>
              <br></br>
              <p>Soportes de Madera Cadence</p>
            </div>
          </WavyLink>

          <WavyLink
            direction="up"
            to="/tienda/cadence/variados"
            color="#4593db"
          >
            <div className="cadence-card">
              <img
                src="https://i.ibb.co/JjfT1Zr/foil-y-pan-de-oro-cadence.jpg"
                alt="cadence"
              ></img>
              <br></br>
              <p>Materiales Variados Cadence</p>
            </div>
          </WavyLink>

          <WavyLink
            direction="up"
            to="/tienda/cadence/materiales-trabajo"
            color="#4593db"
          >
            <div className="cadence-card">
              <span className="badge-novedad">Novedades</span>

              <img
                src="https://dl.dropboxusercontent.com/scl/fi/rgqv8q2qttmxw6ekvm7zf/pinceles-para-manualidades.jpg?rlkey=cjifyexsmqxt9v33av59lea4p&st=0bvbl83h&dl=0"
                alt="cadence"
              ></img>
              <br></br>
              <p>Materiales de Trabajo Cadence</p>
            </div>
          </WavyLink>

          <WavyLink direction="up" to="/tienda/cadence/papeles" color="#4593db">
            <div className="cadence-card">

              <img
                src="https://www.artesaniasmontejo.com/c/807-pos_category/papel-de-arroz-cadence-.jpg"
                alt="cadence"
              ></img>
              <br></br>
              <p>Papeles de Arroz Cadence</p>
            </div>
          </WavyLink>

          <WavyLink
            direction="up"
            to="/tienda/cadence/soportes-resina"
            color="#4593db"
          >
            <div className="cadence-card">
              <span className="badge-novedad">Novedades</span>

              <img
                src="https://www.artesaniasmontejo.com/c/909-pos_category/resina-cadence.jpg"
                alt="cadence"
              ></img>
              <br></br>
              <p>Soportes de Resina Cadence</p>
            </div>
          </WavyLink>

          <WavyLink direction="up" to="/tienda/cadence/ceras" color="#4593db">
            <div className="cadence-card">
              <span className="badge-novedad">Novedades</span>

              <img
                src="https://dl.dropboxusercontent.com/scl/fi/4mmu2z607xhbv2f4jy5ee/oro-en-crema-cadence.jpg?rlkey=17hpe8z1gh59fyv5c03mkjy0h&st=zenbmkoi&dl=0"
                alt="cadence"
              ></img>
              <br></br>
              <p>Ceras de marca Cadence</p>
            </div>
          </WavyLink>

          <WavyLink
            direction="up"
            to="/tienda/cadence/textil-cadence"
            color="#4593db"
          >
            <div className="cadence-card">
              <span className="badge-novedad">Novedades</span>

              <img
                src="https://i.ibb.co/MVyFh7M/transfers-cadence.jpg"
                alt="cadence"
              ></img>
              <br></br>
              <p>Textil de marca Cadence</p>
            </div>
          </WavyLink>

          

          <WavyLink direction="up" to="/tienda/cadence" color="#4593db">
            <div className="cadence-card">
              <img
                src="https://i.ibb.co/51krssD/Proximamente.png"
                alt="proximamente"
              ></img>
              <br></br>
              <br></br>
              <p>Proximamente...</p>
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
