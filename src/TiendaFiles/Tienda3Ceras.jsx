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
    id: 535,
    name: 'TURQUESA Finger Wax Cadence ',
    price: '4.50',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/xqarbo9gj4sv9ou6ut0mn/finger-wax-cadence-turquesa.jpg?rlkey=omwgwi4gueg0p4p42zx8qf72x&st=b1zi6w0r&dl=0',
    ],
    label: '20ml',
    description: 'Cremas metalizadas o FINGER WAX de Cadence con base de agua, no tóxicas. Úsalas sobre cualquier superficie, aplica con los dedos, esponja, trapo, pincel... y consigue un brillo único.',
    selected: false,
  },
  {
    id: 535,
    name: 'ROSA Finger Wax Cadence ',
    price: '4.50',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/scvu179wmibt220e2r17z/finger-wax-cadence-rosa.jpg?rlkey=c02fptp76rys5tb1waaqhb6kb&st=zdybneeh&dl=0',
    ],
    label: '20ml',
    description: 'Cremas metalizadas o FINGER WAX de Cadence con base de agua, no tóxicas. Úsalas sobre cualquier superficie, aplica con los dedos, esponja, trapo, pincel... y consigue un brillo único.',
    selected: false,
  },
  {
    id: 535,
    name: 'PLATA Finger Wax Cadence ',
    price: '4.50',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/wtncenxjb4k3hcjvfs7nr/finger-wax-cadence-plata.jpg?rlkey=vnrokuhqeoiujznro7pcne8zp&st=8fqxjjvm&dl=0',
    ],
    label: '20ml',
    description: 'Cremas metalizadas o FINGER WAX de Cadence con base de agua, no tóxicas. Úsalas sobre cualquier superficie, aplica con los dedos, esponja, trapo, pincel... y consigue un brillo único.',
    selected: false,
  },
  {
    id: 535,
    name: 'ORO INCA Finger Wax Cadence ',
    price: '4.50',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/ufzdnpyym18jv80yrpc2z/finger-wax-cadence-oro-inca.jpg?rlkey=4ugos0ey4ioejqzokwm0fug8g&st=7e35n2w5&dl=0',
    ],
    label: '20ml',
    description: 'Cremas metalizadas o FINGER WAX de Cadence con base de agua, no tóxicas. Úsalas sobre cualquier superficie, aplica con los dedos, esponja, trapo, pincel... y consigue un brillo único.',
    selected: false,
  },
  {
    id: 535,
    name: 'ORO AZTECA Finger Wax Cadence ',
    price: '4.50',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/2vuumszp59wrhbgsj06fh/finger-wax-cadence-oro-azteca.jpg?rlkey=ku3to4xa1o8i9hbioksruh3zc&st=mxp49s9w&dl=0',
    ],
    label: '20ml',
    description: 'Cremas metalizadas o FINGER WAX de Cadence con base de agua, no tóxicas. Úsalas sobre cualquier superficie, aplica con los dedos, esponja, trapo, pincel... y consigue un brillo único.',
    selected: false,
  },
  {
    id: 535,
    name: 'ORO ANTIGUO Finger Wax Cadence ',
    price: '4.50',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/t5js2o4wnqymwtw2rve1z/finger-wax-cadence-oro-antiguo.jpg?rlkey=k8l2xnkgxndmkdvlnaonuefs8&st=nbnw7kj1&dl=0',
    ],
    label: '20ml',
    description: 'Cremas metalizadas o FINGER WAX de Cadence con base de agua, no tóxicas. Úsalas sobre cualquier superficie, aplica con los dedos, esponja, trapo, pincel... y consigue un brillo único.',
    selected: false,
  },
  {
    id: 535,
    name: 'COBRE Finger Wax Cadence ',
    price: '4.50',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/f6d1zdy713cy5i61i9jz6/finger-wax-cadence-cobre.jpg?rlkey=9jx2jwp87iptb4ll0h8c03u5h&st=o7u8xt2g&dl=0',
    ],
    label: '20ml',
    description: 'Cremas metalizadas o FINGER WAX de Cadence con base de agua, no tóxicas. Úsalas sobre cualquier superficie, aplica con los dedos, esponja, trapo, pincel... y consigue un brillo único.',
    selected: false,
  },
  {
    id: 535,
    name: 'COBALTO Finger Wax Cadence ',
    price: '4.50',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/zhkbqac1d9cwzt9xp624t/finger-wax-cadence-cobalto.jpg?rlkey=p5c7j2b6pi9s2pkx2vic1n6bn&st=0a1cc8ht&dl=0',
    ],
    label: '20ml',
    description: 'Cremas metalizadas o FINGER WAX de Cadence con base de agua, no tóxicas. Úsalas sobre cualquier superficie, aplica con los dedos, esponja, trapo, pincel... y consigue un brillo único.',
    selected: false,
  },
  {
    id: 535,
    name: 'BRONCE Finger Wax Cadence ',
    price: '4.50',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/z58vy59h3d4iw4dtxm6vm/finger-wax-cadence-bronce.jpg?rlkey=rak6161obamzhasp0osdse6p3&st=zwn2wpth&dl=0',
    ],
    label: '20ml',
    description: 'Cremas metalizadas o FINGER WAX de Cadence con base de agua, no tóxicas. Úsalas sobre cualquier superficie, aplica con los dedos, esponja, trapo, pincel... y consigue un brillo único.',
    selected: false,
  },
  {
    id: 535,
    name: 'Cera Líquida Espresso Cadence ',
    price: '6.65',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/xtjvhaqhxltr8p0s6d8te/cera-liquida-espresso.jpg?rlkey=dn1ta1c3q1ltw3jehq252j02o&st=6pqjfttz&dl=0',
    ],
    label: '90ml',
    description: 'Cera a base de agua de consistencia líquida para una aplicación suave. Proporciona una capa protectora súper fuerte y un aspecto hermoso. Aplicar con brocha o paño. Secado rápido y de olor agradable.',
    selected: false,
  },






];

// Define el rango de precios mínimo y máximo de tus productos
const precioMinimo = 0;
const precioMaximo = 20;

export const Tienda3Ceras = () => {
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
          <h2>Ceras 🎨</h2>

          <h3>Ceras de alta calidad CADENCE, para crear texturas con efectos. </h3>


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
