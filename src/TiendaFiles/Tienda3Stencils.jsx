import React, { useState, useEffect } from 'react';
import { Navbar } from '../navbar/Navbar';
import { ProductCard } from '../tienda/ProductCard';
import { SearchBar } from '../tienda/SearchBar';
import { Cart } from '../tienda/Cart';
import { Slide } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import {
  Tag
} from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/react'


import Aos from 'aos';
import 'aos/dist/aos.css';
import ScrollToTopButton from '../parallax/parallax-2/ScrollToTopButton';
import { Navbar2 } from '../navbar/Navbar2';
import { ProductCard2 } from '../tienda/ProductCard2';
import { Navbar3 } from '../navbar/Navbar3';
import { WavyContainer, WavyLink } from "react-wavy-transitions";



export const Tienda3Stencils = () => {

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
    const data = window.localStorage.getItem('cart');
    if (data !== null) {
      setCart(JSON.parse(data));
    }
    setIsLoading(false); // <- Mueve esto aquí para indicar que la carga se ha completado
  }, []);

  useEffect(() => {
    // Guarda el carrito en localStorage cada vez que cambie
    window.localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  if (isLoading) {
    // You can render a loading indicator here if needed
    return <p>Loading...</p>;
  }


  return (
    <>
      <Navbar3 />

      {showOverlay && <div className="overlay"></div>}
      <div className="tienda" id='tienda3'>
        <br></br>

        <div className="menu">

          <h1>Stencils  - Cadence 📘</h1>

          <h3>Stencils y plantillas de diversos estilos de la marca CADENCE. Para mix media, home decor, manualidades...</h3>



        </div>

        <div className="marcas2">
          <WavyLink direction="up" to="/tienda/cadence/stencils/home-decor" color="#4593db">
            <div className="cadence-card">
              <img src='https://i.ibb.co/nrK7nm7/stencil-cadence-home-decor-45x45.jpg' alt='cadence'></img>
              <br></br>
              <p>Stencil Cadence Home Decor 45x45cm</p>
            </div>
      
          </WavyLink>

          <WavyLink direction="up" to="/tienda/cadence/stencils/home-decor-midi" color="#4593db">
            <div className="cadence-card">
              <img src='https://i.ibb.co/YPyv02X/stencil-cadence-home-decor-midi.jpg' alt='cadence'></img>
              <br></br>
              <p>Stencil Home Decor Midi 25x25cm</p>
            </div>
      
          </WavyLink>
          <WavyLink direction="up" to="/tienda/cadence/stencils/serie-bn" color="#4593db">
            <div className="cadence-card">
              <img src='https://i.ibb.co/9bRcLkL/stencil-cadence-serie-bn.jpg' alt='cadence'></img>
              <br></br>
              <p>Stencil Cadence Serie BN 25x36cm</p>
            </div>
      
          </WavyLink>

          <WavyLink direction="up" to="/tienda/cadence/stencils/private" color="#4593db">
            <div className="cadence-card">
              <img src='https://i.ibb.co/4fZpqPK/stencils-cadence-private.jpg' alt='cadence'></img>
              <br></br>
              <p>Stencil Cadence Private 25x35cm</p>
            </div>
      
          </WavyLink>

          <WavyLink direction="up" to="/tienda/cadence/stencils/miscellaneous" color="#4593db">
            <div className="cadence-card">
              <img src='https://i.ibb.co/Sc0P183/stencils-cadence-mix-media.jpg' alt='cadence'></img>
              <br></br>
              <p>Stencil Cadence Miscellaneous</p>
            </div>
      
          </WavyLink>
          <WavyLink direction="up" to="/tienda/cadence/stencils/cenefas" color="#4593db">
            <div className="cadence-card">
              <img src='https://i.ibb.co/MhHc49Q/stencil-cadence-cenefas.jpg' alt='cadence'></img>
              <br></br>
              <p>Stencil Cadence Cenefas</p>
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







        <Slide direction='bottom' in={isOpen} style={{ zIndex: 10 }}>
          <Box
            p='40px'
            color='white'
            mt='4'
            bg='teal.500'
            rounded='md'
            shadow='md'
          >
            <Cart cart={cart} setCart={setCart} removeFromCart={removeFromCart} handleCloseCart={handleCloseCart} />
          </Box>
        </Slide>

        <ScrollToTopButton />

      </div>

    </>
  );
};
