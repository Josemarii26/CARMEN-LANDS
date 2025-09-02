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
    id: 1244,
    name: 'Transfer RUB-ON Silver 30x42cm HDS011',
    price: '4.90',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/q77sofo5xoe05pqa46lxg/Transfer-RUB-ON-Silver-30x42-cm-HDS011.jpg?rlkey=0tgtxu32ety01r3vndsgdmf7o&st=m4s7uf55&dl=0',
    ],
    label: '30x42cm',
    description: 'Transfers HOME DECOR metalizados de aplicación por presión, lista para usar para pintura decorativa, decoración del hogar y proyectos de manualidades y hobbies en general. Está disponible en gran tamaño que puedes recortar para usar sobre diferentes materiales, ofrece una amplia selección de patrones. Fácil de aplicar.',
    selected: false,
  },
  {
    id: 1245,
    name: 'Transfer RUB-ON Silver 30x42cm HDS010',
    price: '4.90',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/8e7hsfiympbl6gtxqt12r/Transfer-RUB-ON-Silver-30x42-cm-HDS010.jpg?rlkey=q07svg8qztjjs7svb5hq2mwh5&st=8bxfga8u&dl=0',
    ],
    label: '30x42cm',
    description: 'Transfers HOME DECOR metalizados de aplicación por presión, lista para usar para pintura decorativa, decoración del hogar y proyectos de manualidades y hobbies en general. Está disponible en gran tamaño que puedes recortar para usar sobre diferentes materiales, ofrece una amplia selección de patrones. Fácil de aplicar.',
    selected: false,
  },
  {
    id: 1246,
    name: 'Transfer RUB-ON Silver 30x42cm HDS009',
    price: '4.90',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/x9nupqlifqd2of2wtza6r/Transfer-RUB-ON-Silver-30x42-cm-HDS009.jpg?rlkey=y2o6n1lae13ztaupsg2zencsw&st=xr4czvdo&dl=0',
    ],
    label: '30x42cm',
    description: 'Transfers HOME DECOR metalizados de aplicación por presión, lista para usar para pintura decorativa, decoración del hogar y proyectos de manualidades y hobbies en general. Está disponible en gran tamaño que puedes recortar para usar sobre diferentes materiales, ofrece una amplia selección de patrones. Fácil de aplicar.',
    selected: false,
  },
  {
    id: 1247,
    name: 'Transfer RUB-ON Silver 30x42cm HDS008',
    price: '4.90',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/eb8weje1h5yy84x7i94tg/Transfer-RUB-ON-Silver-30x42-cm-HDS008.jpg?rlkey=dxqrr7ckaga3x4qvjflmk1q5z&st=snke3z4g&dl=0',
    ],
    label: '30x42cm',
    description: 'Transfers HOME DECOR metalizados de aplicación por presión, lista para usar para pintura decorativa, decoración del hogar y proyectos de manualidades y hobbies en general. Está disponible en gran tamaño que puedes recortar para usar sobre diferentes materiales, ofrece una amplia selección de patrones. Fácil de aplicar.',
    selected: false,
  },
  {
    id: 1248,
    name: 'Transfer RUB-ON Silver 30x42cm HDS007',
    price: '4.90',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/d24a1pcqwwc7y5iqbq2la/Transfer-RUB-ON-Silver-30x42-cm-HDS007.jpg?rlkey=5p8ftrt7mhf1j4wvy8bqe8wtk&st=6w4oo38u&dl=0',
    ],
    label: '30x42cm',
    description: 'Transfers HOME DECOR metalizados de aplicación por presión, lista para usar para pintura decorativa, decoración del hogar y proyectos de manualidades y hobbies en general. Está disponible en gran tamaño que puedes recortar para usar sobre diferentes materiales, ofrece una amplia selección de patrones. Fácil de aplicar.',
    selected: false,
  },
  {
    id: 1249,
    name: 'Transfer RUB-ON Silver 30x42cm HDS006',
    price: '4.90',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/xxqzgcwc1a5jevqqyx7vq/Transfer-RUB-ON-Silver-30x42-cm-HDS006.jpg?rlkey=wcfq4pa6m2nnpj755x30ab45e&st=5x8gwdgm&dl=0',
    ],
    label: '30x42cm',
    description: 'Transfers HOME DECOR metalizados de aplicación por presión, lista para usar para pintura decorativa, decoración del hogar y proyectos de manualidades y hobbies en general. Está disponible en gran tamaño que puedes recortar para usar sobre diferentes materiales, ofrece una amplia selección de patrones. Fácil de aplicar.',
    selected: false,
  },
  {
    id: 1250,
    name: 'Transfer RUB-ON Silver 30x42cm HDS005',
    price: '4.90',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/p7tt16ybs5rfrof0zblxw/Transfer-RUB-ON-Silver-30x42-cm-HDS005.jpg?rlkey=60gmgc6e5b61gfrznb3o3fvqm&st=zo3vl54p&dl=0',
    ],
    label: '30x42cm',
    description: 'Transfers HOME DECOR metalizados de aplicación por presión, lista para usar para pintura decorativa, decoración del hogar y proyectos de manualidades y hobbies en general. Está disponible en gran tamaño que puedes recortar para usar sobre diferentes materiales, ofrece una amplia selección de patrones. Fácil de aplicar.',
    selected: false,
  },
  {
    id: 1251,
    name: 'Transfer RUB-ON Gold 30x42cm HDG011',
    price: '4.90',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/dcsrupy4wgcavjzovth5f/Transfer-RUB-ON-Gold-30x42-cm-HDG011.jpg?rlkey=vh57aawgsp3m3gfuhvzeddla4&st=09ignes4&dl=0',
    ],
    label: '30x42cm',
    description: 'Transfers HOME DECOR metalizados de aplicación por presión, lista para usar para pintura decorativa, decoración del hogar y proyectos de manualidades y hobbies en general. Está disponible en gran tamaño que puedes recortar para usar sobre diferentes materiales, ofrece una amplia selección de patrones. Fácil de aplicar.',
    selected: false,
  },
  {
    id: 1252,
    name: 'Transfer RUB-ON Gold 30x42cm HDG010',
    price: '4.90',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/ml9i8og5z92d1ijm8ad9y/Transfer-RUB-ON-Gold-30x42-cm-HDG010.jpg?rlkey=49shne9o7jb2445a58t40gxll&st=tjujuplv&dl=0',
    ],
    label: '30x42cm',
    description: 'Transfers HOME DECOR metalizados de aplicación por presión, lista para usar para pintura decorativa, decoración del hogar y proyectos de manualidades y hobbies en general. Está disponible en gran tamaño que puedes recortar para usar sobre diferentes materiales, ofrece una amplia selección de patrones. Fácil de aplicar.',
    selected: false,
  },
  {
    id: 1253,
    name: 'Transfer RUB-ON Gold 30x42cm HDG009',
    price: '4.90',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/hh24ikmyjc4wpkutb2p8u/Transfer-RUB-ON-Gold-30x42-cm-HDG009.jpg?rlkey=nvpbrtp2civs265rzwfhkmv56&st=taplobjp&dl=0',
    ],
    label: '30x42cm',
    description: 'Transfers HOME DECOR metalizados de aplicación por presión, lista para usar para pintura decorativa, decoración del hogar y proyectos de manualidades y hobbies en general. Está disponible en gran tamaño que puedes recortar para usar sobre diferentes materiales, ofrece una amplia selección de patrones. Fácil de aplicar.',
    selected: false,
  },
  {
    id: 1254,
    name: 'Transfer RUB-ON Gold 30x42cm HDG008',
    price: '4.90',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/9c3jhmd2k2tbsmec4yqk1/Transfer-RUB-ON-Gold-30x42-cm-HDG008.jpg?rlkey=ns9ozuyitozbhjly2lppw5u51&st=p8i81quw&dl=0',
    ],
    label: '30x42cm',
    description: 'Transfers HOME DECOR metalizados de aplicación por presión, lista para usar para pintura decorativa, decoración del hogar y proyectos de manualidades y hobbies en general. Está disponible en gran tamaño que puedes recortar para usar sobre diferentes materiales, ofrece una amplia selección de patrones. Fácil de aplicar.',
    selected: false,
  },
  {
    id: 1255,
    name: 'Transfer RUB-ON Gold 30x42cm HDG007',
    price: '4.90',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/vy3md2xvgdmq1mdo5htva/Transfer-RUB-ON-Gold-30x42-cm-HDG007.jpg?rlkey=xijpajdg1vexaz4sbsp4mqt6r&st=plrb27qq&dl=0',
    ],
    label: '30x42cm',
    description: 'Transfers HOME DECOR metalizados de aplicación por presión, lista para usar para pintura decorativa, decoración del hogar y proyectos de manualidades y hobbies en general. Está disponible en gran tamaño que puedes recortar para usar sobre diferentes materiales, ofrece una amplia selección de patrones. Fácil de aplicar.',
    selected: false,
  },
  {
    id: 1256,
    name: 'Transfer RUB-ON Gold 30x42cm HDG006',
    price: '4.90',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/g0ocdq1szonbjr1camkq2/Transfer-RUB-ON-Gold-30x42-cm-HDG006.jpg?rlkey=mvnrsuts9u7uw2ceiaw4d727s&st=p33v7cou&dl=0',
    ],
    label: '30x42cm',
    description: 'Transfers HOME DECOR metalizados de aplicación por presión, lista para usar para pintura decorativa, decoración del hogar y proyectos de manualidades y hobbies en general. Está disponible en gran tamaño que puedes recortar para usar sobre diferentes materiales, ofrece una amplia selección de patrones. Fácil de aplicar.',
    selected: false,
  },
  {
    id: 1257,
    name: 'Transfer RUB-ON Gold 30x42cm HDG005',
    price: '4.90',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/myl8qk4q8qlo2bcc0t2mw/Transfer-RUB-ON-Gold-30x42-cm-HDG005.jpg?rlkey=so65nkb802nhjxg3646pbtdqv&st=jmoxoytd&dl=0',
    ],
    label: '30x42cm',
    description: 'Transfers HOME DECOR metalizados de aplicación por presión, lista para usar para pintura decorativa, decoración del hogar y proyectos de manualidades y hobbies en general. Está disponible en gran tamaño que puedes recortar para usar sobre diferentes materiales, ofrece una amplia selección de patrones. Fácil de aplicar.',
    selected: false,
  },

  















];

// Define el rango de precios mínimo y máximo de tus productos
const precioMinimo = 0;
const precioMaximo = 20;

export const Tienda3TransfersPlataOro = () => {
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
          <h2>Transfers Plata y Oro🎨</h2>

          <h3>Transfers HOME DECOR metalizados de aplicación por presión, lista para usar para pintura decorativa, decoración del hogar y proyectos de manualidades y hobbies en general. Está disponible en gran tamaño que puedes recortar para usar sobre diferentes materiales, ofrece una amplia selección de patrones. Fácil de aplicar.<br></br>
          
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
