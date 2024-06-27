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
import { Link } from 'react-router-dom';
import { Navbar2 } from '../navbar/Navbar2';
import { WavyContainer, WavyLink } from "react-wavy-transitions";



const initialProducts = [
  {
    id: 349,
    name: 'Butterflies - Mint Papel de seda',
    price: 21.95,
    images: [
      'https://i.ibb.co/q5R1fJZ/shutterstock-1807575772-2-5000x.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/b/u/butterflieschair_2048x.jpg',
    ],
    label: 'Papel de seda',
    description: 'Mint Tissue Papers ofrece elegancia y sofisticación con diseños sin interrupciones, tamaño generoso de 35x35 cm y calidad premium de 28gsm. Cada paquete incluye tres papeles, brindando un valor excepcional para proyectos creativos. A diferencia de Mint Decoupage Papers, son especializados y versátiles para envolver regalos y hacer tarjetas.',
    selected: false,
  },
  {
    id: 350,
    name: 'Distressed Tile - Mint Papel de seda ',
    price: 21.95,
    images: [
      'https://i.ibb.co/yfmjkHz/distressedtile-5000x.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/d/i/distressedtileoriginalsizeiii_5000x.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/d/i/distressedtileoriginalsizeiiii_5000x.jpg',
    ],
    label: 'Papel de seda',
    description: 'Mint Tissue Papers ofrece elegancia y sofisticación con diseños sin interrupciones, tamaño generoso de 35x35 cm y calidad premium de 28gsm. Cada paquete incluye tres papeles, brindando un valor excepcional para proyectos creativos. A diferencia de Mint Decoupage Papers, son especializados y versátiles para envolver regalos y hacer tarjetas.',
    selected: false,
  },
  {
    id: 351,
    name: 'Green Leaves - Mint Papel de seda',
    price: 21.95,
    images: [
      'https://i.ibb.co/5T7LcJy/untitleddesign-5000x-2.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/g/r/greenleaves1080x1080cropped2_2048x.jpg',
    ],
    label: 'Papel de seda',
    description: 'Mint Tissue Papers ofrece elegancia y sofisticación con diseños sin interrupciones, tamaño generoso de 35x35 cm y calidad premium de 28gsm. Cada paquete incluye tres papeles, brindando un valor excepcional para proyectos creativos. A diferencia de Mint Decoupage Papers, son especializados y versátiles para envolver regalos y hacer tarjetas.',
    selected: false,
  },
  {
    id: 352,
    name: 'Lace - Mint Papel de seda',
    price: 21.95,
    images: [
      'https://i.ibb.co/5RLt5VP/lace-2048x.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/l/a/laceoriginal1080x1080_2048x.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/l/a/laceoriginalsizeii_2048x.jpg',
    ],
    label: 'Papel de seda',
    description: 'Mint Tissue Papers ofrece elegancia y sofisticación con diseños sin interrupciones, tamaño generoso de 35x35 cm y calidad premium de 28gsm. Cada paquete incluye tres papeles, brindando un valor excepcional para proyectos creativos. A diferencia de Mint Decoupage Papers, son especializados y versátiles para envolver regalos y hacer tarjetas.',
    selected: false,
  },
  {
    id: 353,
    name: 'Lemons - Mint Papel de seda',
    price: 21.95,
    images: [
      'https://i.ibb.co/khSC1hF/lemons-5000x.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/l/e/lemons1080x1080ii_5000x.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/l/e/lemons1080x1080iii_5000x.jpg',
    ],
    label: 'Papel de seda',
    description: 'Mint Tissue Papers ofrece elegancia y sofisticación con diseños sin interrupciones, tamaño generoso de 35x35 cm y calidad premium de 28gsm. Cada paquete incluye tres papeles, brindando un valor excepcional para proyectos creativos. A diferencia de Mint Decoupage Papers, son especializados y versátiles para envolver regalos y hacer tarjetas.',
    selected: false,
  },
  {
    id: 354,
    name: 'Moroccan Tile - Mint Papel de seda',
    price: 21.95,
    images: [
      'https://i.ibb.co/G3dCCPT/untitleddesign-85-5000x.png',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/m/o/moroccantileoriginalsize_002_800x.jpg',
    ],
    label: 'Papel de seda',
    description: 'Mint Tissue Papers ofrece elegancia y sofisticación con diseños sin interrupciones, tamaño generoso de 35x35 cm y calidad premium de 28gsm. Cada paquete incluye tres papeles, brindando un valor excepcional para proyectos creativos. A diferencia de Mint Decoupage Papers, son especializados y versátiles para envolver regalos y hacer tarjetas.',
    selected: false,
  },
  {
    id: 355,
    name: 'Pastel Florals - Mint Papel de seda',
    price: 21.95,
    images: [
      'https://i.ibb.co/WBs1RN0/pastelflorals-2048x.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/p/a/pastelfloralsoriginalsizeii_2048x.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/p/a/pastelfloralsoriginalsizeiii_2048x.jpg',
    ],
    label: 'Papel de seda',
    description: 'Mint Tissue Papers ofrece elegancia y sofisticación con diseños sin interrupciones, tamaño generoso de 35x35 cm y calidad premium de 28gsm. Cada paquete incluye tres papeles, brindando un valor excepcional para proyectos creativos. A diferencia de Mint Decoupage Papers, son especializados y versátiles para envolver regalos y hacer tarjetas.',
    selected: false,
  },
  {
    id: 356,
    name: 'Pink Peacocks - Mint Papel de seda',
    price: 21.95,
    images: [
      'https://i.ibb.co/gjwf2Rm/pinkpeacocks-5000x.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/u/n/untitleddesign_82_5000x.png',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/p/i/pinkpeacocksoriginalsizei_800x.jpg',
    ],
    label: 'Papel de seda',
    description: 'Mint Tissue Papers ofrece elegancia y sofisticación con diseños sin interrupciones, tamaño generoso de 35x35 cm y calidad premium de 28gsm. Cada paquete incluye tres papeles, brindando un valor excepcional para proyectos creativos. A diferencia de Mint Decoupage Papers, son especializados y versátiles para envolver regalos y hacer tarjetas.',
    selected: false,
  },
  {
    id: 357,
    name: 'White Flower - Mint Papel de seda',
    price: 21.95,
    images: [
      'https://i.ibb.co/QK1Wgyh/untitleddesign-83-2048x.png',
    ],
    label: 'Papel de seda',
    description: 'Mint Tissue Papers ofrece elegancia y sofisticación con diseños sin interrupciones, tamaño generoso de 35x35 cm y calidad premium de 28gsm. Cada paquete incluye tres papeles, brindando un valor excepcional para proyectos creativos. A diferencia de Mint Decoupage Papers, son especializados y versátiles para envolver regalos y hacer tarjetas.',
    selected: false,
  },
  {
    id: 358,
    name: 'Yellow Chinoiserie - Mint Papel de seda',
    price: 21.95,
    images: [
      'https://i.ibb.co/Lkrkz6K/yellow-chinoiserie.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/y/e/yellow_chinoiserie_1080x1080.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/y/e/yellow_chinoiserie_1080x1080_002_ii.jpg',
    ],
    label: 'Papel de seda',
    description: 'Mint Tissue Papers ofrece elegancia y sofisticación con diseños sin interrupciones, tamaño generoso de 35x35 cm y calidad premium de 28gsm. Cada paquete incluye tres papeles, brindando un valor excepcional para proyectos creativos. A diferencia de Mint Decoupage Papers, son especializados y versátiles para envolver regalos y hacer tarjetas.',
    selected: false,
  },
  {
    id: 359,
    name: 'A peacock pair - Papel para decoupage - A1 (Nuevo Lanzamiento Noviembre)',
    price: 29.95,
    images: [
      'https://i.ibb.co/37W2BzK/img-7536-1-1.jpg',
    ],
    label: 'Nuevo Lanzamiento Noviembre',
    description: 'Lanzados el 10 de noviembre de 2023, los papeles de decoupage MINT están diseñados para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles buscan convertir tus proyectos en obras de arte. Se incluyen instrucciones detalladas, y se recomienda usar pegamento Decopatch decoupage.',
    selected: false,
  },
  {
    id: 360,
    name: 'A peacock pair - Papel para decoupage - A3 (Nuevo Lanzamiento Noviembre)',
    price: 19.95,
    images: [
      'https://i.ibb.co/37W2BzK/img-7536-1-1.jpg',
    ],
    label: 'Nuevo Lanzamiento Noviembre',
    description: 'Lanzados el 10 de noviembre de 2023, los papeles de decoupage MINT están diseñados para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles buscan convertir tus proyectos en obras de arte. Se incluyen instrucciones detalladas, y se recomienda usar pegamento Decopatch decoupage.',
    selected: false,
  },
  {
    id: 361,
    name: 'A Vintage Christmas - Papel para decoupage - A1 (Nuevo Lanzamiento Noviembre)',
    price: 29.95,
    images: [
      'https://i.ibb.co/frGsm6p/img-7533.jpg',
    ],
    label: 'Nuevo Lanzamiento Noviembre',
    description: 'Lanzados el 10 de noviembre de 2023, los papeles de decoupage MINT están diseñados para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles buscan convertir tus proyectos en obras de arte. Se incluyen instrucciones detalladas, y se recomienda usar pegamento Decopatch decoupage.',
    selected: false,
  },
  {
    id: 362,
    name: 'A Vintage Christmas - Papel para decoupage - A3 (Nuevo Lanzamiento Noviembre)',
    price: 19.95,
    images: [
      'https://i.ibb.co/frGsm6p/img-7533.jpg',
    ],
    label: 'Nuevo Lanzamiento Noviembre',
    description: 'Lanzados el 10 de noviembre de 2023, los papeles de decoupage MINT están diseñados para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles buscan convertir tus proyectos en obras de arte. Se incluyen instrucciones detalladas, y se recomienda usar pegamento Decopatch decoupage.',
    selected: false,
  },{
    id: 363,
    name: 'Hybrid VERDE ESMERALDA 70ml.',
    price: '2.60',
    images: [
      'https://i.ibb.co/5rPYbqb/hybrid-emerald-green-70ml.jpg',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 364,
    name: 'Hybrid VERDE HOJA 70ml.',
    price: '2.60',
    images: [
      'https://i.ibb.co/m9v6Ldm/hybrid-verde-hoja-70ml.jpg',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 365,
    name: 'Hybrid APPLE CANDY 70ml.',
    price: '2.60',
    images: [
      'https://i.ibb.co/GdxQjHF/hybrid-apple-candy-70ml.jpg',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 366,
    name: 'Hybrid OCÉANO 70ml.',
    price: '2.60',
    images: [
      'https://i.ibb.co/84kgmXM/hybrid-oceano-70ml.jpg',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 367,
    name: 'Hybrid AMARILLO SOL 70ml.',
    price: '2.60',
    images: [
      'https://i.ibb.co/FgW3HxX/hybrid-sun-yellow-70ml.jpg',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 368,
    name: 'Hybrid Metallic TURQUESA 70ml.',
    price: '3.30',
    images: [
      'https://i.ibb.co/C8s00wk/hybrid-metallic-cadence-turquesa-70.jpg',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA',
    selected: false,
  },
  {
    id: 369,
    name: 'Hybrid Metallic COBRE 70ml.',
    price: '3.30',
    images: [
      'https://i.ibb.co/ky006ZM/hybrid-metallic-cadence-cobre-70.jpg',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA',
    selected: false,
  },
  {
    id: 370,
    name: 'Hybrid Metallic ORO OSCURO 120ml.',
    price: "5.30",
    images: [
      'https://i.ibb.co/mqMZDVm/hybrid-metallic-cadence-oroscuro-120.jpg',
    ],
    label: '120 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA',
    selected: false,
  },
  {
    id: 371,
    name: 'Hybrid Metallic PLATINO 120ml.',
    price: "5.30",
    images: [
      'https://i.ibb.co/WvXS92F/hybrid-metallic-cadence-platino-120.jpg',
    ],
    label: '120 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA',
    selected: false,
  },





];

// Define el rango de precios mínimo y máximo de tus productos
const precioMinimo = 0;
const precioMaximo = 50;

export const Tienda = () => {
  const [products, setProducts] = useState(initialProducts);
  const [priceRange, setPriceRange] = useState([precioMinimo, precioMaximo]);
  const [selectedClasses, setSelectedClasses] = useState([]);
  const [showNoProducts, setShowNoProducts] = useState(false);
  const [cart, setCart] = useState([]);
  const [showOverlay, setShowOverlay] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(44); // Cambia el número según tus necesidades

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const visibleProducts = products.slice(startIndex, endIndex);




  const applyFilters = () => {
    const filteredProducts = initialProducts.filter((product) => {
      const price = product.price;
      return (
        (selectedClasses.length === 0 || selectedClasses.includes(product.label)) &&
        price >= priceRange[0] &&
        price <= priceRange[1]
      );
    });

    setProducts(filteredProducts);
    setShowNoProducts(filteredProducts.length === 0);
  };

  

  useEffect(() => {
    applyFilters();
  }, [selectedClasses, priceRange]);

  useEffect(() => {
    Aos.init();
  }, []);

  const addToCart = (product) => {
    const existingProductIndex = cart.findIndex((item) => item.id === product.id);

    if (existingProductIndex !== -1) {
      // El producto ya existe en el carrito, aumenta la cantidad
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity++;
      setCart(updatedCart);
    } else {
      // El producto no existe en el carrito, agrégalo
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  const { isOpen, onToggle, onClose } = useDisclosure();

  const handleToggleCart = () => {
    onToggle(); // Abre o cierra el carrito

    // Cambia el estado `showOverlay` cuando el carrito se abre
    setShowOverlay(!isOpen);
  };

  const handleCloseCart = () => {
    onClose(); // Cierra el carrito

    // También cambia el estado `showOverlay` cuando el carrito se cierra
    setShowOverlay(false);
  };

  

  

  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowText(false);
    }, 10000); // Cambia este valor para ajustar la duración de la aparición antes de la desaparición

    return () => clearTimeout(timeout);
  }, []);

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


  return (
    <>
      <Navbar2 />

      {showOverlay && <div className="overlay"></div>}
      <div className="tienda">
        <br></br>

        <div className="menu">

          <h1>Tienda de productos para artistas🎨</h1>

          <h3>Bienvenidos a la tienda de CarmenLands, aquí encontrareis una gran variedad de productos con los que yo personalmente trabajo y recomiendo. <br></br>Pulsa en <Link to="/tienda/mint-by-michelle"><span id='mint-text'>Mint by Michelle</span></Link>, en <Link to="/tienda/cadence"><span id='cadence-text'>Cadence</span></Link> o en <Link to="/tienda/muebles-ornamentos"><span id='muebles-text'>Muebles y Ornamentos </span></Link>para ver sus productos </h3>

          <div className="marcas">
          <WavyLink direction="up" to="/tienda/mint-by-michelle" color="#6aee75">
              <div className="mint">

              </div>
            </WavyLink>
            <WavyLink direction="up" to="/tienda/cadence" color="#4593db">
              <div className="cadence">
              </div>
            </WavyLink>
            <WavyLink direction="up" to="/tienda/muebles-ornamentos" color="#db4545">
              <div className="muebles">
              </div>
            </WavyLink>
          </div>

        </div>

        <div className="pp">
          <div className={`animated-text ${showText ? 'appear' : 'disappear'}`}>
            💡Productos recomendados que quizás te interesen o te sean inspiradores para tus proyectos😉
          </div>
        </div>
        <br></br>





        <div className="product-list" >
          {showNoProducts ? (
            <p> <br></br> <br></br>No hay productos según su búsqueda.</p>
          ) : (
            visibleProducts.sort(() => 0.5 - Math.random()).slice(0, 8).map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                addToCart={addToCart}
                onToggle={onToggle}
                handleToggleCart={handleToggleCart}
              />
            ))
          )}
        </div>
        <br></br><br></br>



        <br></br><br></br>







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
