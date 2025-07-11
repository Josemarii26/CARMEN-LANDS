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
    id: 631,
    name: 'Papel de Arroz Soft A3 (SPA5663)',
    price: '3.50',
    images: [
      'https://www.artesaniasmontejo.com/23178-30821-large_default/papel-de-arroz-soft-a3-30x41cm-spa5663.jpg',
    ],
    label: 'A3',
    description: 'Perfecto para usar en trabajos de decoupage y decoración.',
    selected: false,
  },
  {
    id: 632,
    name: 'Papel de Arroz Soft A3 (SPA5679)',
    price: '3.50',
    images: [
      'https://www.artesaniasmontejo.com/23179-30822-large_default/papel-de-arroz-soft-a3-30x41cm-spa5679.jpg',
    ],
    label: 'A3',
    description: 'Perfecto para usar en trabajos de decoupage y decoración.',
    selected: false,
  },
  {
    id: 633,
    name: 'Papel de Arroz Soft A3 (SPA5683)',
    price: '3.50',
    images: [
      'https://www.artesaniasmontejo.com/23180-30823-large_default/papel-de-arroz-soft-a3-30x41cm-spa5683.jpg',
    ],
    label: 'A3',
    description: 'Perfecto para usar en trabajos de decoupage y decoración.',
    selected: false,
  },
  {
    id: 634,
    name: 'Papel de Arroz Soft A3 (SPA5685)',
    price: '3.50',
    images: [
      'https://www.artesaniasmontejo.com/23181-30824-large_default/papel-de-arroz-soft-a3-30x41cm-spa5685.jpg',
    ],
    label: 'A3',
    description: 'Perfecto para usar en trabajos de decoupage y decoración.',
    selected: false,
  },
  {
    id: 635,
    name: 'Papel de Arroz Soft A3 (SPA5686)',
    price: '3.50',
    images: [
      'https://www.artesaniasmontejo.com/23182-30825-large_default/papel-de-arroz-soft-a3-30x41cm-spa5686.jpg',
    ],
    label: 'A3',
    description: 'Perfecto para usar en trabajos de decoupage y decoración.',
    selected: false,
  },
  {
    id: 636,
    name: 'Papel de Arroz Soft A3 (SPA5689)',
    price: '3.50',
    images: [
      'https://www.artesaniasmontejo.com/23184-30827-large_default/papel-de-arroz-soft-a3-30x41cm-spa5689.jpg',
    ],
    label: 'A3',
    description: 'Perfecto para usar en trabajos de decoupage y decoración.',
    selected: false,
  },
  {
    id: 637,
    name: 'Papel de Arroz Soft A3 (SPA5691)',
    price: '3.50',
    images: [
      'https://www.artesaniasmontejo.com/23185-30828-large_default/papel-de-arroz-soft-a3-30x41cm-spa5691.jpg',
    ],
    label: 'A3',
    description: 'Perfecto para usar en trabajos de decoupage y decoración.',
    selected: false,
  },
  {
    id: 638,
    name: 'Papel de Arroz Soft A3 (SPA5693)',
    price: '3.50',
    images: [
      'https://www.artesaniasmontejo.com/23186-30829-large_default/papel-de-arroz-soft-a3-30x41cm-spa5693.jpg',
    ],
    label: 'A3',
    description: 'Perfecto para usar en trabajos de decoupage y decoración.',
    selected: false,
  },
  {
    id: 639,
    name: 'Papel de Arroz Soft A3 (SPA5694)',
    price: '3.50',
    images: [
      'https://www.artesaniasmontejo.com/23187-30830-large_default/papel-de-arroz-soft-a3-30x41cm-spa5694.jpg',
    ],
    label: 'A3',
    description: 'Perfecto para usar en trabajos de decoupage y decoración.',
    selected: false,
  },
  {
    id: 640,
    name: 'Papel de Arroz Soft A3 (SPA5695)',
    price: '3.50',
    images: [
      'https://www.artesaniasmontejo.com/23188-30831-large_default/papel-de-arroz-soft-a3-30x41cm-spa5695.jpg',
    ],
    label: 'A3',
    description: 'Perfecto para usar en trabajos de decoupage y decoración.',
    selected: false,
  },
  {
    id: 641,
    name: 'Papel de Arroz Soft A3 (SPA5696)',
    price: '3.50',
    images: [
      'https://www.artesaniasmontejo.com/23189-30832-large_default/papel-de-arroz-soft-a3-30x41cm-spa5696.jpg',
    ],
    label: 'A3',
    description: 'Perfecto para usar en trabajos de decoupage y decoración.',
    selected: false,
  },
  {
    id: 642,
    name: 'Papel de Arroz Soft A3 (SPA5697)',
    price: '3.50',
    images: [
      'https://www.artesaniasmontejo.com/23190-30833-large_default/papel-de-arroz-soft-a3-30x41cm-spa5697.jpg',
    ],
    label: 'A3',
    description: 'Perfecto para usar en trabajos de decoupage y decoración.',
    selected: false,
  },
  {
    id: 643,
    name: 'Papel de Arroz Soft A3 (SPA5698)',
    price: '3.50',
    images: [
      'https://www.artesaniasmontejo.com/23191-30834-large_default/papel-de-arroz-soft-a3-30x41cm-spa5698.jpg',
    ],
    label: 'A3',
    description: 'Perfecto para usar en trabajos de decoupage y decoración.',
    selected: false,
  },
  {
    id: 644,
    name: 'Papel de Arroz Soft A3 (SPA0224)',
    price: '3.50',
    images: [
      'https://www.artesaniasmontejo.com/20711-26787-large_default/papel-de-arroz-japones-soft-a3.jpg',
    ],
    label: 'A3',
    description: 'Perfecto para usar en trabajos de decoupage y decoración.',
    selected: false,
  },
  {
    id: 645,
    name: 'Papel de Arroz Soft A3 (SPA0653)',
    price: '3.50',
    images: [
      'https://www.artesaniasmontejo.com/20967-27138-large_default/papel-de-arroz-soft-a3-30x41cm-spa0653.jpg',
    ],
    label: 'A3',
    description: 'Perfecto para usar en trabajos de decoupage y decoración.',
    selected: false,
  },
  {
    id: 646,
    name: 'Papel de Arroz Soft A3 (SPA5653)',
    price: '3.50',
    images: [
      'https://www.artesaniasmontejo.com/23048-30517-large_default/papel-de-arroz-soft-a3-30x41cm-spa5653.jpg',
    ],
    label: 'A3',
    description: 'Perfecto para usar en trabajos de decoupage y decoración.',
    selected: false,
  },
  {
    id: 647,
    name: 'Papel de Arroz Soft A3 (SPA5655)',
    price: '3.50',
    images: [
      'https://www.artesaniasmontejo.com/23050-30519-large_default/papel-de-arroz-soft-a3-30x41cm-spa5655.jpg',
    ],
    label: 'A3',
    description: 'Perfecto para usar en trabajos de decoupage y decoración.',
    selected: false,
  },
  {
    id: 648,
    name: 'Papel de Arroz Soft A3 (SPA5663)',
    price: '3.50',
    images: [
      'https://www.artesaniasmontejo.com/23178-30821-large_default/papel-de-arroz-soft-a3-30x41cm-spa5663.jpg',
    ],
    label: 'A3',
    description: 'Perfecto para usar en trabajos de decoupage y decoración.',
    selected: false,
  },
  {
    id: 649,
    name: 'Papel de Arroz Soft A3 (SPA5234)',
    price: '3.50',
    images: [
      'https://www.artesaniasmontejo.com/21566-27867-large_default/papel-de-arroz-soft-a3-30x41cm-spa5234.jpg',
    ],
    label: 'A3',
    description: 'Perfecto para usar en trabajos de decoupage y decoración.',
    selected: false,
  },
  {
    id: 650,
    name: 'Papel de Arroz Soft A3 (SPA5235)',
    price: '3.50',
    images: [
      'https://www.artesaniasmontejo.com/21567-27868-large_default/papel-de-arroz-soft-a3-30x41cm-spa5235.jpg',
    ],
    label: 'A3',
    description: 'Perfecto para usar en trabajos de decoupage y decoración.',
    selected: false,
  },





];

// Define el rango de precios mínimo y máximo de tus productos
const precioMinimo = 0;
const precioMaximo = 20;

export const Tienda3PapelesJapones = () => {
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
          <h2>Papel de Arroz Soft Japones🎨</h2>

          <h3>Exclusivo papel de arroz diseñado y fabricado en España con muchísimo cariño y esmero. Perfecto para usar en trabajos de decoupage y decoración.  </h3>
          <h3> Dar un fondo claro en la superficie a decorar y una vez seco, aplicar una mano de cola para decoupage y a continuación colocar el papel de arroz entero o en trozos, cortando los motivos decorativos y presionar con los dedos hasta que se quede bien adherido.</h3>

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
