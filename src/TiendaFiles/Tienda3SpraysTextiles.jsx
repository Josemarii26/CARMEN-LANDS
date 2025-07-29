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
    "id": 971,
    "name": "Spray textil VERDE HOJA 100 ml.",
    "price": "4.60",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/84nb62sdc895f6cyu1af3/spray-textil-cadence-VERDE-HOJA.jpg?rlkey=4ugppvd17ytcir37yotyokdpa&st=oxi9s6d0&dl=0"],
    "label": "100 ml.",
    "description": "Pintura en spray textil perlada permanente a base de agua de alta calidad para crear su propia moda en tonos brillantes y brillantes.",
    "selected": false
  },
  {
    "id": 972,
    "name": "Spray textil TURQUESA 100 ml.",
    "price": "4.60",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/sq07wg94incr2ccc8jd1r/spray-textil-cadence-TURQUESA.jpg?rlkey=z1u1lbsmxgt7dcrk4j42setzw&st=uybpeb0u&dl=0"],
    "label": "100 ml.",
    "description": "Pintura en spray textil perlada permanente a base de agua de alta calidad para crear su propia moda en tonos brillantes y brillantes.",
    "selected": false
  },
  {
    "id": 973,
    "name": "Spray textil PETRÓLEO 100 ml.",
    "price": "4.60",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/0fwsl9ocb9elu672gfsud/spray-textil-cadence-PETROLEO.jpg?rlkey=6orypx1l5teut0txn0e9pgswq&st=mqbx0iwo&dl=0"],
    "label": "100 ml.",
    "description": "Pintura en spray textil perlada permanente a base de agua de alta calidad para crear su propia moda en tonos brillantes y brillantes.",
    "selected": false
  },
  {
    "id": 974,
    "name": "Spray textil NARANJA 100 ml.",
    "price": "4.60",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/0dpagyo6r7icujd8withl/spray-textil-cadence-NARANJA.jpg?rlkey=0859lq77kue4xmymz2zmwhppp&st=q64p2x86&dl=0"],
    "label": "100 ml.",
    "description": "Pintura en spray textil perlada permanente a base de agua de alta calidad para crear su propia moda en tonos brillantes y brillantes.",
    "selected": false
  },
  {
    "id": 975,
    "name": "Spray textil MORADO 100 ml.",
    "price": "4.60",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/1gzrvcx9yr9mehx2nf4dq/spray-textil-cadence-MORADO.jpg?rlkey=1n2188n3ukn1b4wtthgeh0y1j&st=3oz1euwp&dl=0"],
    "label": "100 ml.",
    "description": "Pintura en spray textil perlada permanente a base de agua de alta calidad para crear su propia moda en tonos brillantes y brillantes.",
    "selected": false
  },
  {
    "id": 976,
    "name": "Spray textil CARMÍN 100 ml.",
    "price": "4.60",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/ildbqqfv7yxkru4r3mhqb/spray-textil-cadence-CARMIN.jpg?rlkey=bgd2znp5jzqdnq0pyqqy7upzk&st=9rymc0ws&dl=0"],
    "label": "100 ml.",
    "description": "Pintura en spray textil perlada permanente a base de agua de alta calidad para crear su propia moda en tonos brillantes y brillantes.",
    "selected": false
  },
  {
    "id": 977,
    "name": "Spray textil BURDEOS 100 ml.",
    "price": "4.60",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/txpujytb3efvgmqjfwfna/spray-textil-cadence-BURDEOS.jpg?rlkey=rwhy4xupr8dsz3edhzjw6603p&st=ssgltyfa&dl=0"],
    "label": "100 ml.",
    "description": "Pintura en spray textil perlada permanente a base de agua de alta calidad para crear su propia moda en tonos brillantes y brillantes.",
    "selected": false
  },
  {
    "id": 978,
    "name": "Spray textil BLANCO 100 ml.",
    "price": "4.60",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/7n9bhvmwfupkky4s7hehs/spray-textil-cadence-BLANCO.jpg?rlkey=p5fa3rh8hsr6wwjmyc93c4iww&st=jvcpdlk0&dl=0"],
    "label": "100 ml.",
    "description": "Pintura en spray textil perlada permanente a base de agua de alta calidad para crear su propia moda en tonos brillantes y brillantes.",
    "selected": false
  },
  {
    "id": 979,
    "name": "Spray textil AZUL-MAR 100 ml.",
    "price": "4.60",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/zztnnoinp3nq367u65ydc/spray-textil-cadence-AZUL-MAR.jpg?rlkey=pbtrpno0tovqznt8gy6e4e0ps&st=w87lfoo1&dl=0"],
    "label": "100 ml.",
    "description": "Pintura en spray textil perlada permanente a base de agua de alta calidad para crear su propia moda en tonos brillantes y brillantes.",
    "selected": false
  },
  {
    "id": 980,
    "name": "Spray textil AMARILLO-ATARDECER 100 ml.",
    "price": "4.60",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/bt6x2nmpso9b02pifpwig/spray-textil-cadence-AMARILLO-ATARDECER.jpg?rlkey=9mvo1ovly92jap3g8ajku5ixq&st=qeisbng2&dl=0"],
    "label": "100 ml.",
    "description": "Pintura en spray textil perlada permanente a base de agua de alta calidad para crear su propia moda en tonos brillantes y brillantes.",
    "selected": false
  }



];

// Define el rango de precios mínimo y máximo de tus productos
const precioMinimo = 0;
const precioMaximo = 20;

export const Tienda3SpraysTextiles = () => {
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
          <h2>Sprays YOUR FASHION para textil Cadence🎨</h2>

          <h3>Pintura en spray textil perlada permanente a base de agua de alta calidad para crear su propia moda en tonos brillantes y brillantes. Planche y lave desde el reverso a 30 grados. Agitar bien antes de usar.</h3>

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
