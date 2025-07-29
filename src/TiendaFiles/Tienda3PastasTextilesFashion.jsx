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
    "id": 981,
    "name": "VERDE PISTACHO Pasta textil FASHION Cadence",
    "price": "4.30",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/59d9knt3bd0ot0c7m1xnx/pasta-textil-fashion-cadence-VERDE-PISTACHO.jpg?rlkey=bxejhf5vfbmutleou0ljl06xp&st=nx181zuk&dl=0"],
    "label": "50 ml.",
    "description": "Pasta Textil FASHION de CADENCE. Con base de agua y colores muy vivos para crear efectos dimensionales sobre tejidos. Para su fijación en la tela es necesario planchar la prenda del revés 24h tras su secado. El tiempo de secado puede variar en función a la capa aplicada.",
    "selected": false
  },
  {
    "id": 982,
    "name": "ROJO CARMESÍ Pasta textil FASHION Cadence",
    "price": "4.30",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/nkq6dc3cglk4gaccr60yy/pasta-textil-fashion-cadence-ROJO-CARMESI.jpg?rlkey=i12egbq7fh0buth65r5cbukzk&st=t736edih&dl=0"],
    "label": "50 ml.",
    "description": "Pasta Textil FASHION de CADENCE. Con base de agua y colores muy vivos para crear efectos dimensionales sobre tejidos. Para su fijación en la tela es necesario planchar la prenda del revés 24h tras su secado. El tiempo de secado puede variar en función a la capa aplicada.",
    "selected": false
  },
  {
    "id": 983,
    "name": "NEGRO Pasta textil FASHION Cadence",
    "price": "4.30",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/s1qt2qdaagltjpgu9j6er/pasta-textil-fashion-cadence-NEGRO.jpg?rlkey=xfqhmqel5vdhwditir8102z3p&st=dw5j36ya&dl=0"],
    "label": "50 ml.",
    "description": "Pasta Textil FASHION de CADENCE. Con base de agua y colores muy vivos para crear efectos dimensionales sobre tejidos. Para su fijación en la tela es necesario planchar la prenda del revés 24h tras su secado. El tiempo de secado puede variar en función a la capa aplicada.",
    "selected": false
  },
  {
    "id": 984,
    "name": "NARANJA Pasta textil FASHION Cadence",
    "price": "4.30",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/io7l6ile8jy9hscc0qlfo/pasta-textil-fashion-cadence-NARANJA.jpg?rlkey=rt08omh4wz4o5ah84mi48r0ir&st=7wjjkvkw&dl=0"],
    "label": "50 ml.",
    "description": "Pasta Textil FASHION de CADENCE. Con base de agua y colores muy vivos para crear efectos dimensionales sobre tejidos. Para su fijación en la tela es necesario planchar la prenda del revés 24h tras su secado. El tiempo de secado puede variar en función a la capa aplicada.",
    "selected": false
  },
  {
    "id": 985,
    "name": "FUCSIA Pasta textil FASHION Cadence",
    "price": "4.30",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/i7vyv9wsfeu4k6jixuvaj/pasta-textil-fashion-cadence-FUCSIA.jpg?rlkey=hcpy6jtnki3jyca9jyz9e6kuo&st=kjekldk3&dl=0"],
    "label": "50 ml.",
    "description": "Pasta Textil FASHION de CADENCE. Con base de agua y colores muy vivos para crear efectos dimensionales sobre tejidos. Para su fijación en la tela es necesario planchar la prenda del revés 24h tras su secado. El tiempo de secado puede variar en función a la capa aplicada.",
    "selected": false
  },
  {
    "id": 986,
    "name": "BLANCO Pasta textil FASHION Cadence",
    "price": "4.30",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/uqejrz4ogo4n61am9b7un/pasta-textil-fashion-cadence-BLANCO.jpg?rlkey=7kppxkf9zohyhaudjr2cev4kr&st=bi2wl76e&dl=0"],
    "label": "50 ml.",
    "description": "Pasta Textil FASHION de CADENCE. Con base de agua y colores muy vivos para crear efectos dimensionales sobre tejidos. Para su fijación en la tela es necesario planchar la prenda del revés 24h tras su secado. El tiempo de secado puede variar en función a la capa aplicada.",
    "selected": false
  },
  {
    "id": 987,
    "name": "BERENJENA Pasta textil FASHION Cadence",
    "price": "4.30",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/cumayuo1pnqpxmu885gfc/pasta-textil-fashion-cadence-BERENJENA.jpg?rlkey=jqwlvbknc46m4dtc5zi7926r0&st=jsdzjmvi&dl=0"],
    "label": "50 ml.",
    "description": "Pasta Textil FASHION de CADENCE. Con base de agua y colores muy vivos para crear efectos dimensionales sobre tejidos. Para su fijación en la tela es necesario planchar la prenda del revés 24h tras su secado. El tiempo de secado puede variar en función a la capa aplicada.",
    "selected": false
  },
  {
    "id": 988,
    "name": "AZUL REAL Pasta textil FASHION Cadence",
    "price": "4.30",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/xyra9jvwjp1lysliwdzf4/pasta-textil-fashion-cadence-AZUL-REAL.jpg?rlkey=isq3r5a2daw3ud0t2f6yjl6hf&st=yjzryz29&dl=0"],
    "label": "50 ml.",
    "description": "Pasta Textil FASHION de CADENCE. Con base de agua y colores muy vivos para crear efectos dimensionales sobre tejidos. Para su fijación en la tela es necesario planchar la prenda del revés 24h tras su secado. El tiempo de secado puede variar en función a la capa aplicada.",
    "selected": false
  },
  {
    "id": 989,
    "name": "AMARILLO LIMÓN Pasta textil FASHION Cadence",
    "price": "4.30",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/pmf660bzmzhxut1xgm0z8/pasta-textil-fashion-cadence-AMARILLO-LIMON.jpg?rlkey=p444wx2alyy105y0xkak4z1r7&st=1w251b9x&dl=0"],
    "label": "50 ml.",
    "description": "Pasta Textil FASHION de CADENCE. Con base de agua y colores muy vivos para crear efectos dimensionales sobre tejidos. Para su fijación en la tela es necesario planchar la prenda del revés 24h tras su secado. El tiempo de secado puede variar en función a la capa aplicada.",
    "selected": false
  }



];

// Define el rango de precios mínimo y máximo de tus productos
const precioMinimo = 0;
const precioMaximo = 20;

export const Tienda3PastasTextilesFashion = () => {
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
          <h2>Pasta Textil FASHION para textil Cadence🎨</h2>

          <h3>Pasta Textil FASHION de CADENCE. Con base de agua y colores muy vivos para crear efectos dimensionales sobre tejidos. Para su fijación en la tela es necesario planchar la prenda del revés 24h tras su secado. El tiempo de secado puede variar en función a la capa aplicada.</h3>

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
