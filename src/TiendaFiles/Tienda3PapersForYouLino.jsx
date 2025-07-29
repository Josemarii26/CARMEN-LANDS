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
    "id": 1098,
    "name": "APPLE GREEN Lino Encuadernar 142x50cm",
    "price": "10.20",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/awco6g40i0z1jq4vw272p/tela-encua-lino-142x50-cm-apple-green.jpg?rlkey=5ee3xxwjmqz6rldomsof1wazr&st=wjlg7uxa&dl=0"],
    "label": "142x50cm",
    "description": "Tela especial para trabajos de encuadernación y trabajos manuales. Fácil de aplicar, se pega con cola blanca. Las telas están protegidas por una base de papel para evitar que se estropeen y manchen cuando se pegan. Todos se presentan en rollo presentados en caja.",
    "selected": false
  },
  {
    "id": 1099,
    "name": "COLD GREY Lino Encuadernar 142x50cm",
    "price": "10.20",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/gn9qv4n513cf3pgm1xh13/tela-encua-lino-142x50-cm-cold-grey.jpg?rlkey=5la5w0dw4loin6iq0tvuslano&st=8qggapq8&dl=0"],
    "label": "142x50cm",
    "description": "Tela especial para trabajos de encuadernación y trabajos manuales. Fácil de aplicar, se pega con cola blanca. Las telas están protegidas por una base de papel para evitar que se estropeen y manchen cuando se pegan. Todos se presentan en rollo presentados en caja.",
    "selected": false
  },
  {
    "id": 1100,
    "name": "INTENSE BLACK Lino Encuadernar 142x50cm",
    "price": "10.20",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/nscu86rgurpkxah4pt2d0/tela-encua-lino-142x50-cm-intense-black.jpg?rlkey=1phiz74m2wy7j6nis94i0lrxm&st=xukwe1nt&dl=0"],
    "label": "142x50cm",
    "description": "Tela especial para trabajos de encuadernación y trabajos manuales. Fácil de aplicar, se pega con cola blanca. Las telas están protegidas por una base de papel para evitar que se estropeen y manchen cuando se pegan. Todos se presentan en rollo presentados en caja.",
    "selected": false
  },
  {
    "id": 1101,
    "name": "JEANS Lino Encuadernar 142x50cm",
    "price": "10.20",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/uzrvo8lcczsndixqw2dhb/tela-encua-lino-142x50-cm-jeans.jpg?rlkey=kufobisxf49d2z08t2yw8f853&st=b30p6bzi&dl=0"],
    "label": "142x50cm",
    "description": "Tela especial para trabajos de encuadernación y trabajos manuales. Fácil de aplicar, se pega con cola blanca. Las telas están protegidas por una base de papel para evitar que se estropeen y manchen cuando se pegan. Todos se presentan en rollo presentados en caja.",
    "selected": false
  },
  {
    "id": 1102,
    "name": "MAUVE Lino Encuadernar 142x50cm",
    "price": "10.20",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/s7mg9gwfa95udgjt17w0c/tela-encua-lino-142x50-cm-mauve.jpg?rlkey=z7yqkqih9pxjz7w0s53jhb9xi&st=7tqcduek&dl=0"],
    "label": "142x50cm",
    "description": "Tela especial para trabajos de encuadernación y trabajos manuales. Fácil de aplicar, se pega con cola blanca. Las telas están protegidas por una base de papel para evitar que se estropeen y manchen cuando se pegan. Todos se presentan en rollo presentados en caja.",
    "selected": false
  },
  {
    "id": 1103,
    "name": "PINE GREEN Lino Encuadernar 142x50cm",
    "price": "10.20",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/tie36iupzytekfqaexz9z/tela-encua-lino-142x50-cm-pine-green.jpg?rlkey=qwi04ejgzaha6mjrdg5vvzszg&st=frxxrsvc&dl=0"],
    "label": "142x50cm",
    "description": "Tela especial para trabajos de encuadernación y trabajos manuales. Fácil de aplicar, se pega con cola blanca. Las telas están protegidas por una base de papel para evitar que se estropeen y manchen cuando se pegan. Todos se presentan en rollo presentados en caja.",
    "selected": false
  },
  {
    "id": 1104,
    "name": "ULTRAMARINE Lino Encuadernar 142x50cm",
    "price": "10.20",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/uatumqzzhv0h02uybg1jj/tela-encua-lino-142x50-cm-ultramarine.jpg?rlkey=9rfqahg4y3dudl0lof1c2ajn4&st=kgt02fv8&dl=0"],
    "label": "142x50cm",
    "description": "Tela especial para trabajos de encuadernación y trabajos manuales. Fácil de aplicar, se pega con cola blanca. Las telas están protegidas por una base de papel para evitar que se estropeen y manchen cuando se pegan. Todos se presentan en rollo presentados en caja.",
    "selected": false
  },
  {
    "id": 1105,
    "name": "LIGHT BEIGE Lino Encuadernar 142x50cm",
    "price": "10.20",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/5d87y4jpblusuxgf9fz60/tela-encualino-142x50-cm-light-beige.jpg?rlkey=2wrrdwip4wppwz16sj5suvjrn&st=85odijq6&dl=0"],
    "label": "142x50cm",
    "description": "Tela especial para trabajos de encuadernación y trabajos manuales. Fácil de aplicar, se pega con cola blanca. Las telas están protegidas por una base de papel para evitar que se estropeen y manchen cuando se pegan. Todos se presentan en rollo presentados en caja.",
    "selected": false
  }





];

// Define el rango de precios mínimo y máximo de tus productos
const precioMinimo = 0;
const precioMaximo = 20;

export const Tienda3PapersForYouLino = () => {
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
          <h2>Papeles para encuadernar de LINO - Paper For You Cadence🎨</h2>

          <h3>Lino especial para trabajos de encuadernación y trabajos manuales. Fácil de aplicar, se pega con cola blanca. Los linó están protegidos por una base de papel para evitar que se estropeen y manchen cuando se pegan. Todos se presentan en rollo presentados en caja.  </h3>

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
