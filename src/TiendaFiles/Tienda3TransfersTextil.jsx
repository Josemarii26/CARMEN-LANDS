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
    id: 482,
    name: 'Transfer TELA W&B 21x30cm KTS05',
    price: '5.20',
    images: [
      'https://i.ibb.co/PrxxhZw/transfer-tela-cadence.jpg',
    ],
    label: '21x30cm',
    description: 'Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.',
    selected: false,
  },
  {
    id: 483,
    name: 'Transfer TELA W&B 21x30cm KTS06',
    price: '5.20',
    images: [
      'https://i.ibb.co/Cb3CdZH/transfer-tela-cadence-1.jpg',
    ],
    label: '21x30cm',
    description: 'Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.',
    selected: false,
  },
  {
    id: 484,
    name: 'Transfer TELA Animal Portrait 25x35cm PAFT08',
    price: '5.20',
    images: [
      'https://i.ibb.co/hYKDLdQ/transfer-tela-cadence-2.jpg',
    ],
    label: '25x35cm',
    description: 'Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.',
    selected: false,
  },
  {
    id: 485,
    name: 'Transfer TELA Animal Portrait 25x35cm PAFT07',
    price: '5.20',
    images: [
      'https://i.ibb.co/vsRSpv8/transfer-tela-cadence-3.jpg',
    ],
    label: '25x35cm',
    description: 'Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.',
    selected: false,
  },
  {
    id: 486,
    name: 'Transfer TELA Animal Portrait 25x35cm PAFT06',
    price: '5.20',
    images: [
      'https://i.ibb.co/vk5JRn2/transfer-tela-cadence-4.jpg',
    ],
    label: '25x35cm',
    description: 'Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.',
    selected: false,
  },
  {
    id: 487,
    name: 'Transfer TELA Animal Portrait 25x35cm PAFT05',
    price: '5.20',
    images: [
      'https://i.ibb.co/BZc23m2/transfer-tela-cadence-5.jpg',
    ],
    label: '25x35cm',
    description: 'Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.',
    selected: false,
  },
  {
    id: 488,
    name: 'Transfer TELA Animal Portrait 25x35cm PAFT03',
    price: '5.20',
    images: [
      'https://i.ibb.co/zZVrVrt/transfer-tela-cadence-6.jpg',
    ],
    label: '25x35cm',
    description: 'Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.',
    selected: false,
  },
  {
    id: 489,
    name: 'Transfer TELA Siluetas 25x35cm FT069',
    price: '5.20',
    images: [
      'https://i.ibb.co/jrTN5QQ/transfer-tela-cadence-7.jpg',
    ],
    label: '25x35cm',
    description: 'Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.',
    selected: false,
  },
  {
    id: 490,
    name: 'Transfer TELA Siluetas 25x35cm FT068',
    price: '5.20',
    images: [
      'https://i.ibb.co/zfkRqmn/transfer-tela-cadence-8.jpg',
    ],
    label: '25x35cm',
    description: 'Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.',
    selected: false,
  },
  {
    id: 491,
    name: 'Transfer TELA Siluetas 25x35cm FT067',
    price: '5.20',
    images: [
      'https://i.ibb.co/xg5jsYF/transfer-tela-cadence-9.jpg',
    ],
    label: '25x35cm',
    description: 'Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.',
    selected: false,
  },
  {
    id: 492,
    name: 'Transfer TELA Siluetas 25x35cm FT064',
    price: '5.20',
    images: [
      'https://i.ibb.co/dMN0tsf/transfer-tela-cadence-10.jpg',
    ],
    label: '25x35cm',
    description: 'Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.',
    selected: false,
  },
  {
    id: 493,
    name: 'Transfer TELA Siluetas 25x35cm FT065',
    price: '5.20',
    images: [
      'https://i.ibb.co/L0zXdk5/transfer-tela-cadence-11.jpg',
    ],
    label: '25x35cm',
    description: 'Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.',
    selected: false,
  },
  {
    id: 494,
    name: 'Transfer TELA Siluetas 25x35cm FT063',
    price: '5.20',
    images: [
      'https://i.ibb.co/Vp8Bj96/transfer-tela-cadence-12.jpg',
    ],
    label: '25x35cm',
    description: 'Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.',
    selected: false,
  },
  {
    id: 495,
    name: 'Transfer TELA W&B 21x30cm KTS13',
    price: '5.20',
    images: [
      'https://i.ibb.co/wzTSDNm/transfer-tela-cadence-14.jpg',
    ],
    label: '21x30cm',
    description: 'Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.',
    selected: false,
  },
  {
    id: 496,
    name: 'Transfer TELA W&B 21x30cm KTS14',
    price: '5.20',
    images: [
      'https://i.ibb.co/Chzb73x/transfer-tela-cadence-13.jpg',
    ],
    label: '21x30cm',
    description: 'Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.',
    selected: false,
  },

  
















];

// Define el rango de precios mínimo y máximo de tus productos
const precioMinimo = 0;
const precioMaximo = 20;

export const Tienda3TransfersTextil = () => {
  const [products, setProducts] = useState(initialProducts);
  const [priceRange, setPriceRange] = useState([precioMinimo, precioMaximo]);
  const [selectedClasses, setSelectedClasses] = useState([]);
  const [showNoProducts, setShowNoProducts] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [cart, setCart] = useState([]);
  const [showOverlay, setShowOverlay] = useState(false);
  const [filterButtonIcon, setFilterButtonIcon] = useState(<ViewOffIcon />);

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
          <h2>Transfers para Tela🎨</h2>

          <h3>Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto. <br></br>
          <span id='materiales'>MODO DE EMPLEO</span> <br></br> Coloca el transfer sobre la tela, pasa una plancha caliente (sin vapor) durante unos 3 minutos para fijar el transfer a la tela, dejar que transfer y tela se enfrien antes de retirar el papel protector.
          </h3>

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
