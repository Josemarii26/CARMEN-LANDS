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


const initialProducts = [
  {
    id: 1273,
    name: "LEATHER VOGUE METALLIC Pearl 50ml",
    price: "4.70",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/y1la45c2zxvt46ccfgnu4/leather-vogue-metallic-lvm-01-pearl-50-ml.jpg?rlkey=24q85334i3jrmu73pgil890dn&st=6vt6oib8&dl=0",
    ],
    label: "50ml",
    description:
      "Pintura acrílica a base de agua especialmente formulada para cuero o similares al cuero, textiles sintéticos, bolsos, zapatos, cinturones… La película de pintura seca es elástica y resistente a la abrasión con un acabado satinado. Para una mejor adhesión de la pintura, la superficie debe estar limpia, sin polvo ni grasa.",
    selected: false,
  },
  {
    id: 1274,
    name: "LEATHER VOGUE METALLIC Antique Gold 50ml",
    price: "4.70",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/49223er1nd404ev3ez7nb/leather-vogue-metallic-lvm-03-antique-gold-50-ml.jpg?rlkey=itoy7wflqjxiocrku205h4pe9&st=uln4hb1o&dl=0",
    ],
    label: "50ml",
    description:
      "Pintura acrílica a base de agua especialmente formulada para cuero o similares al cuero, textiles sintéticos, bolsos, zapatos, cinturones… La película de pintura seca es elástica y resistente a la abrasión con un acabado satinado. Para una mejor adhesión de la pintura, la superficie debe estar limpia, sin polvo ni grasa.",
    selected: false,
  },
  {
    id: 1275,
    name: "LEATHER VOGUE METALLIC Gold 50ml",
    price: "4.70",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/jt5a0t9qzczggj6qh6k1x/leather-vogue-metallic-lvm-04-gold-50-ml.jpg?rlkey=67j0ho8uj2sx9pste1fc2jltt&st=xd0u2c5f&dl=0",
    ],
    label: "50ml",
    description:
      "Pintura acrílica a base de agua especialmente formulada para cuero o similares al cuero, textiles sintéticos, bolsos, zapatos, cinturones… La película de pintura seca es elástica y resistente a la abrasión con un acabado satinado. Para una mejor adhesión de la pintura, la superficie debe estar limpia, sin polvo ni grasa.",
    selected: false,
  },
  {
    id: 1276,
    name: "LEATHER VOGUE METALLIC Bronze 50ml",
    price: "4.70",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/0cldvw949eydyv7kyotp9/leather-vogue-metallic-lvm-05-bronze-50-ml.jpg?rlkey=724h9u1alckq1xgo7z6zkk0xw&st=51xpcvuz&dl=0",
    ],
    label: "50ml",
    description:
      "Pintura acrílica a base de agua especialmente formulada para cuero o similares al cuero, textiles sintéticos, bolsos, zapatos, cinturones… La película de pintura seca es elástica y resistente a la abrasión con un acabado satinado. Para una mejor adhesión de la pintura, la superficie debe estar limpia, sin polvo ni grasa.",
    selected: false,
  },
  {
    id: 1277,
    name: "LEATHER VOGUE METALLIC Dried Rose 50ml",
    price: "4.70",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/wxgzrp7eptqqtnjsaq6yz/leather-vogue-metallic-lvm-06-dried-rose-50-ml.jpg?rlkey=oxgmd5u3nmesa2h33xqbvzfo4&st=1jtwccjj&dl=0",
    ],
    label: "50ml",
    description:
      "Pintura acrílica a base de agua especialmente formulada para cuero o similares al cuero, textiles sintéticos, bolsos, zapatos, cinturones… La película de pintura seca es elástica y resistente a la abrasión con un acabado satinado. Para una mejor adhesión de la pintura, la superficie debe estar limpia, sin polvo ni grasa.",
    selected: false,
  },
  {
    id: 1279,
    name: "LEATHER VOGUE METALLIC Silver 50ml",
    price: "4.70",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/u31bdocwow22aicxiocd7/leather-vogue-metallic-lvm-07-silver-50-ml.jpg?rlkey=2720st19jv1p6ovcl53imzjbn&st=68ctiao3&dl=0",
    ],
    label: "50ml",
    description:
      "Pintura acrílica a base de agua especialmente formulada para cuero o similares al cuero, textiles sintéticos, bolsos, zapatos, cinturones… La película de pintura seca es elástica y resistente a la abrasión con un acabado satinado. Para una mejor adhesión de la pintura, la superficie debe estar limpia, sin polvo ni grasa.",
    selected: false,
  },
  {
    id: 1280,
    name: "LEATHER VOGUE METALLIC Anthracite 50ml",
    price: "4.70",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/336sqwr3ko6df1iw0ndzu/leather-vogue-metallic-lvm-08-anthracite-50-ml.jpg?rlkey=4eg5qz3tqn98dlut57sibot82&st=y4y3yn14&dl=0",
    ],
    label: "50ml",
    description:
      "Pintura acrílica a base de agua especialmente formulada para cuero o similares al cuero, textiles sintéticos, bolsos, zapatos, cinturones… La película de pintura seca es elástica y resistente a la abrasión con un acabado satinado. Para una mejor adhesión de la pintura, la superficie debe estar limpia, sin polvo ni grasa.",
    selected: false,
  },
  {
    id: 1281,
    name: "LEATHER VOGUE METALLIC Platinium 50ml",
    price: "4.70",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/pv3ax5rrolltgn8p0bx3z/leather-vogue-metallic-lvm-02-platinium-50-ml.jpg?rlkey=q7s4hh148ewub0edhgj4q740t&st=3pz7uifi&dl=0",
    ],
    label: "50ml",
    description:
      "Pintura acrílica a base de agua especialmente formulada para cuero o similares al cuero, textiles sintéticos, bolsos, zapatos, cinturones… La película de pintura seca es elástica y resistente a la abrasión con un acabado satinado. Para una mejor adhesión de la pintura, la superficie debe estar limpia, sin polvo ni grasa.",
    selected: false,
  },
  {
    id: 1282,
    name: "LEATHER VOGUE METALLIC Black 50ml",
    price: "4.70",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/rwu1lqbarqeoxr9s539qs/leather-vogue-metallic-lvm-09-black-50-ml.jpg?rlkey=8zwhcf0428aarphup09q3m5ms&st=k8l24nlw&dl=0",
    ],
    label: "50ml",
    description:
      "Pintura acrílica a base de agua especialmente formulada para cuero o similares al cuero, textiles sintéticos, bolsos, zapatos, cinturones… La película de pintura seca es elástica y resistente a la abrasión con un acabado satinado. Para una mejor adhesión de la pintura, la superficie debe estar limpia, sin polvo ni grasa.",
    selected: false,
  },

  

  

  

  


  





];

// Define el rango de precios mínimo y máximo de tus productos
const precioMinimo = 0;
const precioMaximo = 20;

export const Tienda3PinturasTextilesLeatherVogueMetallic = () => {
  const [products, setProducts] = useState(initialProducts);
  const [priceRange, setPriceRange] = useState([precioMinimo, precioMaximo]);
  const [selectedClasses, setSelectedClasses] = useState([]);
  const [showNoProducts, setShowNoProducts] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [cart, setCart] = useState([]);
  const [showOverlay, setShowOverlay] = useState(false);
  const [filterButtonIcon, setFilterButtonIcon] = useState(<ViewOffIcon />);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12); // Cambia el número según tus necesidades

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

  const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };

  const handleSearch = (searchText) => {
    // No filtrar directamente por nombre al buscar
    // en su lugar, ajustar los productos existentes según los filtros
    applyFilters();

    if (searchText !== '') {
      const filteredProducts = products.filter((product) =>
        removeAccents(product.name).toLowerCase().includes(searchText.toLowerCase())
      );
      setProducts(filteredProducts);
      setShowNoProducts(filteredProducts.length === 0);
    }
  };

  const handlePriceChange = (event) => {
    setPriceRange([parseInt(event.target.value, 10), priceRange[1]]);
    applyFilters();
  };

  const handleMaxPriceChange = (event) => {
    setPriceRange([priceRange[0], parseInt(event.target.value, 10)]);
    applyFilters();
  };

  const toggleSelectedClass = (selectedClass) => {
    const updatedSelectedClasses = selectedClasses.includes(selectedClass)
      ? selectedClasses.filter((c) => c !== selectedClass)
      : [...selectedClasses, selectedClass];
    setSelectedClasses(updatedSelectedClasses);
    applyFilters();
  };


  const handleToggleFilters = () => {
    setShowFilters(!showFilters);

    // Cambia el icono del botón
    setFilterButtonIcon(showFilters ? <ViewOffIcon /> : <ViewIcon />);
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

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({
      top: 0
    });
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  const handleGoToFirstPage = () => {
    handlePageChange(1);
  };

  const handleGoToLastPage = () => {
    handlePageChange(totalPages);
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

          <h1>Tienda de productos para artistas - Cadence 📘</h1>
          <h2>LEATHER VOGUE Pintura Cuero para textil Cadence🎨</h2>

          <h3>Pintura acrílica a base de agua especialmente formulada para cuero o similares al cuero, textiles sintéticos, bolsos, zapatos, cinturones…</h3>

          <Button className="remove-button3" rightIcon={filterButtonIcon} onClick={handleToggleFilters} colorScheme='blue' variant='solid'>
            Filtrar Productos
          </Button>

          <SearchBar onSearch={handleSearch} />


          <button className="bn632-hover bn22b" onClick={handleToggleCart}>Carrito🛒</button>

        </div>

        {showFilters && (
          <div data-aos="fade-right"><div className="filter">
            
            {Array.from(new Set(initialProducts.map((product) => product.label)).values()).map(
              (selectedClass) => (
                <Tag size={'lg'} key={'lg'} variant='solid' colorScheme='blue' >
                  <label key={selectedClass} className="filter-item" id='checkbox'>
                    <input
                      type="checkbox"
                      checked={selectedClasses.includes(selectedClass)}
                      onChange={() => toggleSelectedClass(selectedClass)} />
                    {selectedClass}
                  </label>
                </Tag>
              )
            )}
                
          </div> <div className="price-slider">

              <input
                type="range"
                min={precioMinimo}
                max={precioMaximo}
                value={priceRange[0]}
                onChange={handlePriceChange} />
              <p>Precio Mínimo: {priceRange[0]}€</p>
              <input
                type="range"
                min={precioMinimo}
                max={precioMaximo}
                value={priceRange[1]}
                onChange={handleMaxPriceChange} />
              <p>Precio Máximo: {priceRange[1]}€</p>
            </div></div>
        )}


        <div className="product-list" >
          {showNoProducts ? (
            <p> <br></br> <br></br>No hay productos según su búsqueda.</p>
          ) : (
            visibleProducts.map((product) => (
              <ProductCard2
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

        <div className='pagination'>
          <button onClick={handleGoToFirstPage}>Inicio</button>
          <button onClick={handlePrevPage}>Anterior</button>
          <span>
            Página {currentPage} de {totalPages}
          </span>
          <button onClick={handleNextPage}>Siguiente</button>
          <button onClick={handleGoToLastPage}>Final</button>
        </div>

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
