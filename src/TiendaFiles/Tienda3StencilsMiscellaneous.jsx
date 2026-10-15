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
    id: 428,
    name: 'Stencil ZEPPELIN 21x30cm ',
    price: '4.35',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/c3z3ije6ijh3iz8cgm71r/stencil-cadence.jpg?rlkey=e79docwwce5foai5v1ephzcgd&st=wdtknzgx&dl=0',
    ],
    label: '21x30cm',
    description: 'Stencils CADENCE para decoración, manualidades, scrapbook, home decor...',
    selected: false,
  },
  {
    id: 429,
    name: 'Stencil GEOMÉTRICOS 21x30cm ',
    price: '4.35',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/lpor95b3835hx8eoroefx/stencil-cadence-1.jpg?rlkey=mnciqu94gwbvvx00dyclmahuj&st=425rhm36&dl=0',
    ],
    label: '21x30cm',
    description: 'Stencils CADENCE para decoración, manualidades, scrapbook, home decor...',
    selected: false,
  },
  {
    id: 430,
    name: 'Stencil FILIGRANAS GRANDE 21x30cm ',
    price: '4.35',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/dl5ylgelhjao1a32qdy2x/stencil-textura-floral.jpg?rlkey=f0gf2fnmgmnkc2dr9q1fcsidu&st=bifq5598&dl=0',
    ],
    label: '21x30cm',
    description: 'Stencils CADENCE para decoración, manualidades, scrapbook, home decor...',
    selected: false,
  },
  {
    id: 431,
    name: 'Stencil FONDOS FLORES 21x30cm ',
    price: '4.35',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/wmtfip8uwgi9190qcf3mc/stencil-textura-floral-2.jpg?rlkey=fgqgukvsq8vse9t1ubv6qqa10&st=9r032p3l&dl=0',
    ],
    label: '21x30cm',
    description: 'Stencils CADENCE para decoración, manualidades, scrapbook, home decor...',
    selected: false,
  },
  {
    id: 432,
    name: 'Stencil MARIPOSAS Y ESTRELLAS 21x30cm ',
    price: '4.35',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/silmoax16mll0473rv7uj/stencil-textura-floral-1.jpg?rlkey=y0pu5ez6q1jh9b4opc9k309gi&st=drladqs4&dl=0',
    ],
    label: '21x30cm',
    description: 'Stencils CADENCE para decoración, manualidades, scrapbook, home decor...',
    selected: false,
  },
  {
    id: 433,
    name: 'Stencil RELIEVE METÁLICO 21x30cm ',
    price: '4.35',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/235vdu3dld4fllb8613tj/stencil-textura-floral-6.jpg?rlkey=cn9ae72g8ujwa87hgaosmrwo4&st=e3xnxebu&dl=0',
    ],
    label: '21x30cm',
    description: 'Stencils CADENCE para decoración, manualidades, scrapbook, home decor...',
    selected: false,
  },
  {
    id: 434,
    name: 'Stencil MOTHER 21x30cm ',
    price: '4.35',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/c17e0n5tg7g1rt7lrwkn1/stencil-textura-floral-4.jpg?rlkey=xjolkmkro5okwzh96jqf845d5&st=g2mapsms&dl=0',
    ],
    label: '21x30cm',
    description: 'Stencils CADENCE para decoración, manualidades, scrapbook, home decor...',
    selected: false,
  },
  {
    id: 435,
    name: 'Stencil TIJERAS VINTAGE 21x30cm ',
    price: '4.35',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/adtq7xxloap7ss1rtutsz/stencil-textura-floral-5.jpg?rlkey=4f3fxu2zksfazv409n72irpoa&st=4f8e92c1&dl=0',
    ],
    label: '21x30cm',
    description: 'Stencils CADENCE para decoración, manualidades, scrapbook, home decor...',
    selected: false,
  },
  {
    id: 436,
    name: 'Stencil ROSA DE LOS VIENTOS 21x30cm ',
    price: '4.35',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/m7py9xxvxknugsp42p37m/stencil-lavande.jpg?rlkey=a8dpgcmk9jak41789lcrm13x5&st=f2xm5x63&dl=0',
    ],
    label: '21x30cm',
    description: 'Stencils CADENCE para decoración, manualidades, scrapbook, home decor...',
    selected: false,
  },
  {
    id: 437,
    name: 'Stencil FILIGRANA 21x30cm ',
    price: '4.35',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/m7py9xxvxknugsp42p37m/stencil-lavande.jpg?rlkey=a8dpgcmk9jak41789lcrm13x5&st=f2xm5x63&dl=0',
    ],
    label: '21x30cm',
    description: 'Stencils CADENCE para decoración, manualidades, scrapbook, home decor...',
    selected: false,
  },
  {
    id: 438,
    name: 'Stencil 3 ROSAS 21x30cm ',
    price: '4.35',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/3a97uyl6hi7qes1nccn8v/stencil-lavande-2.jpg?rlkey=0roovtsocaazeq9uvak3eh50v&st=fn6tlhdg&dl=0',
    ],
    label: '21x30cm',
    description: 'Stencils CADENCE para decoración, manualidades, scrapbook, home decor...',
    selected: false,
  },
  {
    id: 439,
    name: 'Stencil LÁMPARAS 21x30cm ',
    price: '4.35',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/6whhxb8cogef1brsl8d1z/stencil-lamparas.jpg?rlkey=w0zmwm0lcgmlnr19rbhbi9jrq&st=ue2ojr1f&dl=0',
    ],
    label: '21x30cm',
    description: 'Stencils CADENCE para decoración, manualidades, scrapbook, home decor...',
    selected: false,
  },
  
  
  
  
  
  
  



  





];

// Define el rango de precios mínimo y máximo de tus productos
const precioMinimo = 0;
const precioMaximo = 20;

export const Tienda3StencilsMiscellaneous = () => {
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
          <h2>Stencil Cadence Miscellaneous🎨</h2>

          <h3>Stencils o Plantillas CADENCE para decoración, manualidades, scrapbook, home decor...</h3>

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
