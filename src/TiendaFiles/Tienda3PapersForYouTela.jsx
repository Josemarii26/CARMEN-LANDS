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
    "id": 1087,
    "name": "BLACK IS BLACK Tela Encuadernar 142x50cm ",
    "price": "9.15",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/b2qbpwlrryglqde8hdyz4/pfy-rollo-tela-encuadernar-142x50cm-BLACK-IS-BLACK.jpg?rlkey=ykdyzzpm7caag9ijubllunwxk&st=3o4z7d0j&dl=0"],
    "label": "142x50cm",
    "description": "Tela  especial para trabajos de encuadernación y trabajos manuales.Fácil de aplicar, se pega con cola blanca.Las telas están protegidas por una base de papel para evitar que se estropeen y manchen cuando se pegan. Todos se presentan en rollo presentados en caja.",
    "selected": false
  },
  {
    "id": 1088,
    "name": "BURGUNDY Tela Encuadernar 142x50cm",
    "price": "9.15",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/ejjr5lum3q1y2h3b9bzhr/pfy-rollo-tela-encuadernar-142x50cm-BURGUNDY.jpg?rlkey=4e4eg7lx3lopbcy174a1fw1en&st=wvif5e2l&dl=0"],
    "label": "142x50cm",
    "description": "Tela especial para trabajos de encuadernación y trabajos manuales. Fácil de aplicar, se pega con cola blanca. Las telas están protegidas por una base de papel para evitar que se estropeen y manchen cuando se pegan. Todos se presentan en rollo presentados en caja.",
    "selected": false
  },
  {
    "id": 1089,
    "name": "CHOCOLATTA Tela Encuadernar 142x50cm",
    "price": "9.15",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/vcy101atueh7yyt6r3z7e/pfy-rollo-tela-encuadernar-142x50cm-CHOCOLATTA.jpg?rlkey=5efdp9x9w6n88a6m72rf2b8u2&st=55u27ozp&dl=0"],
    "label": "142x50cm",
    "description": "Tela especial para trabajos de encuadernación y trabajos manuales. Fácil de aplicar, se pega con cola blanca. Las telas están protegidas por una base de papel para evitar que se estropeen y manchen cuando se pegan. Todos se presentan en rollo presentados en caja.",
    "selected": false
  },
  {
    "id": 1090,
    "name": "DARK-NIGHT Tela Encuadernar 142x50cm",
    "price": "9.15",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/i1ixmb2t51yjiiyjzxg7i/pfy-rollo-tela-encuadernar-142x50cm-DARK-NIGHT.jpg?rlkey=vsc820qxg7ohcp037kimy32y8&st=mpbr2tcy&dl=0"],
    "label": "142x50cm",
    "description": "Tela especial para trabajos de encuadernación y trabajos manuales. Fácil de aplicar, se pega con cola blanca. Las telas están protegidas por una base de papel para evitar que se estropeen y manchen cuando se pegan. Todos se presentan en rollo presentados en caja.",
    "selected": false
  },
  {
    "id": 1091,
    "name": "ELEGANT-CREAM Tela Encuadernar 142x50cm",
    "price": "9.15",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/o8q1ezp0fz28e5ldjlquz/pfy-rollo-tela-encuadernar-142x50cm-ELEGANT-CREAM.jpg?rlkey=3t122zhxv1ckslss04sdq1zim&st=noy8rths&dl=0"],
    "label": "142x50cm",
    "description": "Tela especial para trabajos de encuadernación y trabajos manuales. Fácil de aplicar, se pega con cola blanca. Las telas están protegidas por una base de papel para evitar que se estropeen y manchen cuando se pegan. Todos se presentan en rollo presentados en caja.",
    "selected": false
  },
  {
    "id": 1092,
    "name": "ENVY-ME Tela Encuadernar 142x50cm",
    "price": "9.15",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/ewxr217jnvt8jzgxuj6hw/pfy-rollo-tela-encuadernar-142x50cm-ENVY-ME.jpg?rlkey=7a4q0kl8zii3h87rasumiqgcj&st=5v90dcnz&dl=0"],
    "label": "142x50cm",
    "description": "Tela especial para trabajos de encuadernación y trabajos manuales. Fácil de aplicar, se pega con cola blanca. Las telas están protegidas por una base de papel para evitar que se estropeen y manchen cuando se pegan. Todos se presentan en rollo presentados en caja.",
    "selected": false
  },
  {
    "id": 1093,
    "name": "MINTY-CANDY Tela Encuadernar 142x50cm",
    "price": "9.15",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/n69hyps2w1lcq6siddh96/pfy-rollo-tela-encuadernar-142x50cm-MINTY-CANDY.jpg?rlkey=v9qw7urnmrdze580aze36g18u&st=e0d0tni7&dl=0"],
    "label": "142x50cm",
    "description": "Tela especial para trabajos de encuadernación y trabajos manuales. Fácil de aplicar, se pega con cola blanca. Las telas están protegidas por una base de papel para evitar que se estropeen y manchen cuando se pegan. Todos se presentan en rollo presentados en caja.",
    "selected": false
  },
  {
    "id": 1094,
    "name": "RUSTIC-LINEN Tela Encuadernar 142x50cm",
    "price": "13.70",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/baa3shlqxyfscb5mth50a/pfy-rollo-tela-encuadernar-142x50cm-RUSTIC-LINEN.jpg?rlkey=th6rtjk5g27d8mpb4iam4d7yh&st=rsh2t5do&dl=0"],
    "label": "142x50cm",
    "description": "Tela especial para trabajos de encuadernación y trabajos manuales. Fácil de aplicar, se pega con cola blanca. Las telas están protegidas por una base de papel para evitar que se estropeen y manchen cuando se pegan. Todos se presentan en rollo presentados en caja.",
    "selected": false
  },
  {
    "id": 1095,
    "name": "SNOW Tela Encuadernar 142x50cm",
    "price": "9.15",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/i1ku3a2wr90a1z9oa7v60/pfy-rollo-tela-encuadernar-142x50cm-SNOW.jpg?rlkey=anqvwlbqerq8hg0iyjdk56sf0&st=9cpfx1wk&dl=0"],
    "label": "142x50cm",
    "description": "Tela especial para trabajos de encuadernación y trabajos manuales. Fácil de aplicar, se pega con cola blanca. Las telas están protegidas por una base de papel para evitar que se estropeen y manchen cuando se pegan. Todos se presentan en rollo presentados en caja.",
    "selected": false
  },
  {
    "id": 1096,
    "name": "BABY-BLUE Tela Encuadernar 142x50cm",
    "price": "9.15",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/lh4rcptx9irerw7x4uobf/pfy-rollo-tela-encuadernar-142x50cm-BABY-BLUE.jpg?rlkey=s5wfur5r19bpjimj2cjgzmrsh&st=24t99o0p&dl=0"],
    "label": "142x50cm",
    "description": "Tela especial para trabajos de encuadernación y trabajos manuales. Fácil de aplicar, se pega con cola blanca. Las telas están protegidas por una base de papel para evitar que se estropeen y manchen cuando se pegan. Todos se presentan en rollo presentados en caja.",
    "selected": false
  },
  {
    "id": 1097,
    "name": "BABY-PINK Tela Encuadernar 142x50cm",
    "price": "9.15",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/ghle99f1h0gv34h4o49h5/pfy-rollo-tela-encuadernar-142x50cm-BABY-PINK.jpg?rlkey=thq357rjxlvf9q559o8w6k91t&st=7u0piqa5&dl=0"],
    "label": "142x50cm",
    "description": "Tela especial para trabajos de encuadernación y trabajos manuales. Fácil de aplicar, se pega con cola blanca. Las telas están protegidas por una base de papel para evitar que se estropeen y manchen cuando se pegan. Todos se presentan en rollo presentados en caja.",
    "selected": false
  }



];

// Define el rango de precios mínimo y máximo de tus productos
const precioMinimo = 0;
const precioMaximo = 20;

export const Tienda3PapersForYouTela = () => {
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
          <h2>Papeles para encuadernar de TELA - Paper For You Cadence🎨</h2>

          <h3>Tela especial para trabajos de encuadernación y trabajos manuales. Fácil de aplicar, se pega con cola blanca. Las telas están protegidas por una base de papel para evitar que se estropeen y manchen cuando se pegan. Todos se presentan en rollo presentados en caja.  </h3>

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
