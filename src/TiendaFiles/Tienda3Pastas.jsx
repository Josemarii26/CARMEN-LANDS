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



export const Tienda3Pastas = () => {

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

          <h1>Pastas de Relieve  - Cadence 📘</h1>

          <h3>Pinturas Cadence de fabulosos efectos metalizados, chalky, marmoleados, espejo, granito, distress.. y productos para manualidades, home decor, mix media, Bellas Artes... </h3>



        </div>

        <div className="marcas2">
          <WavyLink direction="up" to="/tienda/cadence/pastas/relieve" color="#4593db">
            <div className="cadence-card">
              <img src='https://i.ibb.co/2vypH6b/pastas-de-relieve-y-gessos-cadence-1.jpg' alt='cadence'></img>
              <br></br>
              <p>Pastas de Relieve Cadence</p>
            </div>
      
          </WavyLink>

          <WavyLink direction="up" to="/tienda/cadence/pastas/mixtion" color="#4593db">
            <div className="cadence-card">
              <img src='https://i.ibb.co/MVyFh7M/transfers-cadence.jpg' alt='cadence'></img>
              <br></br>
              <p>MIXTION Adhesivo Cadence</p>
            </div>
      
          </WavyLink>
          <WavyLink direction="up" to="/tienda/cadence/pastas/patina-imprimacion" color="#4593db">
            <div className="cadence-card">
              <img src='https://i.ibb.co/Wcw4f9t/mediums-y-limpieza-cadence.jpg' alt='cadence'></img>
              <br></br>
              <p>Patina e imprimación Cadence</p>
            </div>
      
          </WavyLink>

          <WavyLink direction="up" to="/tienda/cadence/pastas/shabby" color="#4593db">
            <div className="cadence-card">
              <img src='https://i.ibb.co/cYjv81n/pasta-shabby-chic-cadence.jpg' alt='cadence'></img>
              <br></br>
              <p>Pasta SHABBY CHIC Cadence</p>
            </div>
      
          </WavyLink>

          <WavyLink direction="up" to="/tienda/cadence/pastas/zeugma" color="#4593db">
            <div className="cadence-card">
              <img src='https://i.ibb.co/dk9X25t/pasta-relieve-beton-zeugma-cadence.jpg' alt='cadence'></img>
              <br></br>
              <p>Pasta ZEUGMA Cadence</p>
            </div>
      
          </WavyLink>

          <WavyLink direction="up" to="/tienda/cadence/pastas/distress" color="#4593db">
            <div className="cadence-card">
              <img src='https://i.ibb.co/Yfnsj85/disstress-paste.jpg' alt='cadence'></img>
              <br></br>
              <p>Pasta DISSTRESS Cadence</p>
            </div>
      
          </WavyLink>

          <WavyLink direction="up" to="/tienda/cadence/pastas/flexible-metalica" color="#4593db">
            <div className="cadence-card">
              <img src='https://i.ibb.co/dGwPmdh/pasta-flexible-metalizada-cadence.jpg' alt='cadence'></img>
              <br></br>
              <p>Pasta Flexible Metálica Cadence</p>
            </div>
      
          </WavyLink>

          <WavyLink direction="up" to="/tienda/cadence/pastas/vintage-legend" color="#4593db">
            <div className="cadence-card">
              <img src='https://i.ibb.co/HFYg8wh/vintage-legend-cadence-12.jpg' alt='cadence'></img>
              <br></br>
              <p>Patina VINTAGE LEGEND Cadence</p>
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
