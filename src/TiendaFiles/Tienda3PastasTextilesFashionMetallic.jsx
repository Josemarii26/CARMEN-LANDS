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
    "id": 990,
    "name": "VIOLETA Pasta textil FASHION METALLIC Cadence",
    "price": "5.50",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/bxdjqpo41chimd0jxqhmw/pasta-textil-fashion-metallic-cadence-VIOLETA.jpg?rlkey=rzlsd0m8o8nzab8xdr3mqd1mb&st=jjq5q7pp&dl=0"],
    "label": "50 ml.",
    "description": "Pasta Textil FASHION de CADENCE. Con base de agua y colores metalizados para crear efectos dimensionales sobre tejidos. Para su fijación en la tela es necesario planchar la prenda del revés 24h tras su secado. El tiempo de secado puede variar en función a la capa aplicada.",
    "selected": false
  },
  {
    "id": 991,
    "name": "VERDE Pasta textil FASHION METALLIC Cadence",
    "price": "5.50",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/8wmki0ktqi5zxcvtgc3pe/pasta-textil-fashion-metallic-cadence-VERDE.jpg?rlkey=vt86a2taojq2n46a99hg9kab8&st=5upn0pxr&dl=0"],
    "label": "50 ml.",
    "description": "Pasta Textil FASHION de CADENCE. Con base de agua y colores metalizados para crear efectos dimensionales sobre tejidos. Para su fijación en la tela es necesario planchar la prenda del revés 24h tras su secado. El tiempo de secado puede variar en función a la capa aplicada.",
    "selected": false
  },
  {
    "id": 992,
    "name": "ROJO Pasta textil FASHION METALLIC Cadence",
    "price": "5.50",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/750yumzbx6pq5w1653y9a/pasta-textil-fashion-metallic-cadence-ROJO.jpg?rlkey=36cmpdv23klvs8xt74u0pxmlf&st=reti4qc1&dl=0"],
    "label": "50 ml.",
    "description": "Pasta Textil FASHION de CADENCE. Con base de agua y colores metalizados para crear efectos dimensionales sobre tejidos. Para su fijación en la tela es necesario planchar la prenda del revés 24h tras su secado. El tiempo de secado puede variar en función a la capa aplicada.",
    "selected": false
  },
  {
    "id": 993,
    "name": "PLATA Pasta textil FASHION METALLIC Cadence",
    "price": "5.50",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/cvp887icynrk5rwwg6bf1/pasta-textil-fashion-metallic-cadence-PLATA.jpg?rlkey=alhbq0wvbxs5a48lqn8xxxcc2&st=2a970wjl&dl=0"],
    "label": "50 ml.",
    "description": "Pasta Textil FASHION de CADENCE. Con base de agua y colores metalizados para crear efectos dimensionales sobre tejidos. Para su fijación en la tela es necesario planchar la prenda del revés 24h tras su secado. El tiempo de secado puede variar en función a la capa aplicada.",
    "selected": false
  },
  {
    "id": 994,
    "name": "ORO Pasta textil FASHION METALLIC Cadence",
    "price": "5.50",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/3gnlg0upokn6npaohm3k0/pasta-textil-fashion-metallic-cadence-ORO.jpg?rlkey=k5rbr2l9mqd73ij8h1v1doqdd&st=uyq73jzf&dl=0"],
    "label": "50 ml.",
    "description": "Pasta Textil FASHION de CADENCE. Con base de agua y colores metalizados para crear efectos dimensionales sobre tejidos. Para su fijación en la tela es necesario planchar la prenda del revés 24h tras su secado. El tiempo de secado puede variar en función a la capa aplicada.",
    "selected": false
  },
  {
    "id": 995,
    "name": "ORO-ANTIGUO Pasta textil FASHION METALLIC Cadence",
    "price": "5.50",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/q3wspefb5yirvqt2l3gip/pasta-textil-fashion-metallic-cadence-ORO-ANTIGUO.jpg?rlkey=9pk068r0itq3gtxm1m9vac4xb&st=m4s9oy23&dl=0"],
    "label": "50 ml.",
    "description": "Pasta Textil FASHION de CADENCE. Con base de agua y colores metalizados para crear efectos dimensionales sobre tejidos. Para su fijación en la tela es necesario planchar la prenda del revés 24h tras su secado. El tiempo de secado puede variar en función a la capa aplicada.",
    "selected": false
  },
  {
    "id": 996,
    "name": "NEGRO Pasta textil FASHION METALLIC Cadence",
    "price": "5.50",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/ezs0lek1e98tmn064oazr/pasta-textil-fashion-metallic-cadence-NEGRO.jpg?rlkey=na5zz12jpiur28kecvwyg24mh&st=vfac44ku&dl=0"],
    "label": "50 ml.",
    "description": "Pasta Textil FASHION de CADENCE. Con base de agua y colores metalizados para crear efectos dimensionales sobre tejidos. Para su fijación en la tela es necesario planchar la prenda del revés 24h tras su secado. El tiempo de secado puede variar en función a la capa aplicada.",
    "selected": false
  },
  {
    "id": 997,
    "name": "COBRE Pasta textil FASHION METALLIC Cadence",
    "price": "5.50",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/rwand8o58m9f9qliofqve/pasta-textil-fashion-metallic-cadence-COBRE.jpg?rlkey=pz1kri07oqgnimnb033147jet&st=715zq0i0&dl=0"],
    "label": "50 ml.",
    "description": "Pasta Textil FASHION de CADENCE. Con base de agua y colores metalizados para crear efectos dimensionales sobre tejidos. Para su fijación en la tela es necesario planchar la prenda del revés 24h tras su secado. El tiempo de secado puede variar en función a la capa aplicada.",
    "selected": false
  },
  {
    "id": 998,
    "name": "AZUL SAX Pasta textil FASHION METALLIC Cadence",
    "price": "5.50",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/12vrgdr8qnc13nbzwmmdr/pasta-textil-fashion-metallic-cadence-AZUL-SAX.jpg?rlkey=3i22kk6xy52tmm4lckwrcg6ge&st=p0pak7za&dl=0"],
    "label": "50 ml.",
    "description": "Pasta Textil FASHION de CADENCE. Con base de agua y colores metalizados para crear efectos dimensionales sobre tejidos. Para su fijación en la tela es necesario planchar la prenda del revés 24h tras su secado. El tiempo de secado puede variar en función a la capa aplicada.",
    "selected": false
  }





];

// Define el rango de precios mínimo y máximo de tus productos
const precioMinimo = 0;
const precioMaximo = 20;

export const Tienda3PastasTextilesFashionMetallic = () => {
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
          <h2>Pasta Textil FASHION METALLIC para textil Cadence🎨</h2>

          <h3>Pasta Textil FASHION METALLIC de CADENCE. Con base de agua y colores muy vivos para crear efectos dimensionales sobre tejidos. Para su fijación en la tela es necesario planchar la prenda del revés 24h tras su secado. El tiempo de secado puede variar en función a la capa aplicada.</h3>

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
