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
    id: 517,
    name: 'Pasta SHABBY CHIC Salvia 150ml.',
    price: '6.15',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/rom5pndj9wybfn2r6nrz1/pasta-shabby-chic.jpg?rlkey=pus1aco5xpnly4zur3vmbvrcj&st=z32odbls&dl=0',
    ],
    label: '150ml',
    description: 'Pasta de relieve al agua CADENCE con acabado MATE para dar preciosos efectos de relieve o volumen a tus proyectos de estilo Shabby Chic. Aplicar sobre superficies rígidas usando stencils, espatula, pincel o esponja. Limpieza de utensilios con agua y jabón',
    selected: false,
  },
  {
    id: 518,
    name: 'Pasta SHABBY CHIC Menta Claro 150ml.',
    price: '6.15',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/zsck0rpqeox46ef8mey4v/pasta-shabby-chic-1.jpg?rlkey=o4e66dhnirawapsnfe2is6wxd&st=nevm4m8u&dl=0',
    ],
    label: '150ml',
    description: 'Pasta de relieve al agua CADENCE con acabado MATE para dar preciosos efectos de relieve o volumen a tus proyectos de estilo Shabby Chic. Aplicar sobre superficies rígidas usando stencils, espatula, pincel o esponja. Limpieza de utensilios con agua y jabón',
    selected: false,
  },
  {
    id: 519,
    name: 'Pasta SHABBY CHIC Azul Bebé 150ml.',
    price: '6.15',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/vpcp1fseoumbk1s97kwm4/pasta-shabby-chic-2.jpg?rlkey=gcpr94b5dkxyc3x3a4cbsrt3p&st=nuo6z3be&dl=0',
    ],
    label: '150ml',
    description: 'Pasta de relieve al agua CADENCE con acabado MATE para dar preciosos efectos de relieve o volumen a tus proyectos de estilo Shabby Chic. Aplicar sobre superficies rígidas usando stencils, espatula, pincel o esponja. Limpieza de utensilios con agua y jabón',
    selected: false,
  },
  {
    id: 520,
    name: 'Pasta SHABBY CHIC Lavanda 150ml.',
    price: '6.15',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/ck1u2u3cvigrx0kzh6j6z/pasta-shabby-chic-3.jpg?rlkey=kj74huyx0wot2ehjlmbx9xcgv&st=z2cqsoo6&dl=0',
    ],
    label: '150ml',
    description: 'Pasta de relieve al agua CADENCE con acabado MATE para dar preciosos efectos de relieve o volumen a tus proyectos de estilo Shabby Chic. Aplicar sobre superficies rígidas usando stencils, espatula, pincel o esponja. Limpieza de utensilios con agua y jabón',
    selected: false,
  },
  {
    id: 521,
    name: 'Pasta SHABBY CHIC Rosa Bebé 150ml.',
    price: '6.15',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/i44w64xtvjgjw0g48qeqe/pasta-shabby-chic-4.jpg?rlkey=3av1ti7iwo3pempldbvlcyn5g&st=6ijl7k54&dl=0',
    ],
    label: '150ml',
    description: 'Pasta de relieve al agua CADENCE con acabado MATE para dar preciosos efectos de relieve o volumen a tus proyectos de estilo Shabby Chic. Aplicar sobre superficies rígidas usando stencils, espatula, pincel o esponja. Limpieza de utensilios con agua y jabón',
    selected: false,
  },
  {
    id: 522,
    name: 'Pasta SHABBY CHIC Rosa Ceniza 150ml.',
    price: '6.15',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/i44w64xtvjgjw0g48qeqe/pasta-shabby-chic-4.jpg?rlkey=3av1ti7iwo3pempldbvlcyn5g&st=6ijl7k54&dl=0',
    ],
    label: '150ml',
    description: 'Pasta de relieve al agua CADENCE con acabado MATE para dar preciosos efectos de relieve o volumen a tus proyectos de estilo Shabby Chic. Aplicar sobre superficies rígidas usando stencils, espatula, pincel o esponja. Limpieza de utensilios con agua y jabón',
    selected: false,
  },
  {
    id: 523,
    name: 'Pasta SHABBY CHIC Coral Claro 150ml.',
    price: '6.15',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/xnrr3povyxsrxkqoanjj5/pasta-shabby-chic-6.jpg?rlkey=4za0lqr9ru4016pn1183xrksn&st=9bnio0k2&dl=0',
    ],
    label: '150ml',
    description: 'Pasta de relieve al agua CADENCE con acabado MATE para dar preciosos efectos de relieve o volumen a tus proyectos de estilo Shabby Chic. Aplicar sobre superficies rígidas usando stencils, espatula, pincel o esponja. Limpieza de utensilios con agua y jabón',
    selected: false,
  },
  {
    id: 524,
    name: 'Pasta SHABBY CHIC Chocolate 150ml.',
    price: '6.15',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/n4ffbc0mlg5lull4p15nl/pasta-shabby-chic-7.jpg?rlkey=xm6mm4vgwaxsfioyq7f72z4j4&st=tc6ls4ft&dl=0',
    ],
    label: '150ml',
    description: 'Pasta de relieve al agua CADENCE con acabado MATE para dar preciosos efectos de relieve o volumen a tus proyectos de estilo Shabby Chic. Aplicar sobre superficies rígidas usando stencils, espatula, pincel o esponja. Limpieza de utensilios con agua y jabón',
    selected: false,
  },
  {
    id: 525,
    name: 'Pasta SHABBY CHIC Beige Barroco 150ml.',
    price: '6.15',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/bki11vmk100ia3nlp8k1s/pasta-shabby-chic-8.jpg?rlkey=onzwarvekjj2un7tk2eo7s77f&st=vakctmnq&dl=0',
    ],
    label: '150ml',
    description: 'Pasta de relieve al agua CADENCE con acabado MATE para dar preciosos efectos de relieve o volumen a tus proyectos de estilo Shabby Chic. Aplicar sobre superficies rígidas usando stencils, espatula, pincel o esponja. Limpieza de utensilios con agua y jabón',
    selected: false,
  },
  {
    id: 526,
    name: 'Pasta SHABBY CHIC Lino 150ml.',
    price: '6.15',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/vfouj7gv7pqhqfsuletvy/pasta-shabby-chic-9.jpg?rlkey=a40ktupjzm8mvt1a0a8fo7854&st=luf7d8dr&dl=0',
    ],
    label: '150ml',
    description: 'Pasta de relieve al agua CADENCE con acabado MATE para dar preciosos efectos de relieve o volumen a tus proyectos de estilo Shabby Chic. Aplicar sobre superficies rígidas usando stencils, espatula, pincel o esponja. Limpieza de utensilios con agua y jabón',
    selected: false,
  },
  {
    id: 527,
    name: 'Pasta SHABBY CHIC Amarillo Claro 150ml.',
    price: '6.15',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/yuhnfg4iaebnm9ndfnnj3/pasta-shabby-chic-10.jpg?rlkey=n640k2wapx0xga5vshxyq7hgw&st=8fwf4t2x&dl=0',
    ],
    label: '150ml',
    description: 'Pasta de relieve al agua CADENCE con acabado MATE para dar preciosos efectos de relieve o volumen a tus proyectos de estilo Shabby Chic. Aplicar sobre superficies rígidas usando stencils, espatula, pincel o esponja. Limpieza de utensilios con agua y jabón',
    selected: false,
  },
  {
    id: 528,
    name: 'Pasta SHABBY CHIC Taffy 150ml.',
    price: '6.15',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/x5wonwte72kfl9yxeto4u/pasta-shabby-chic-11.jpg?rlkey=8dz4loa7lsql0cwmghdc7h46q&st=3eot3994&dl=0',
    ],
    label: '150ml',
    description: 'Pasta de relieve al agua CADENCE con acabado MATE para dar preciosos efectos de relieve o volumen a tus proyectos de estilo Shabby Chic. Aplicar sobre superficies rígidas usando stencils, espatula, pincel o esponja. Limpieza de utensilios con agua y jabón',
    selected: false,
  },

  


];

// Define el rango de precios mínimo y máximo de tus productos
const precioMinimo = 0;
const precioMaximo = 20;

export const Tienda3PastasShabby = () => {
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
          <h2>Pastas Shabby🎨</h2>

          <h3>Pasta de relieve al agua CADENCE con acabado MATE para dar efectos de relieve a tus proyectos de estilo Shabby Chic</h3>


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
