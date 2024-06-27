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
    id: 348,
    name: 'Barníz MATE 120ml.',
    price: '5.20',
    images: [
      'https://i.ibb.co/jgPtpKV/barniz-cadence-mate-250.jpg',
    ],
    label: '120 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA',
    selected: false,
  },
  {
    id: 349,
    name: 'Barníz MATE 250ml.',
    price: '9.40',
    images: [
      'https://i.ibb.co/jgPtpKV/barniz-cadence-mate-250.jpg',
    ],
    label: '250 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA',
    selected: false,
  },
  {
    id: 350,
    name: 'Barníz MATE 500ml.', 
    price: '16.40',
    images: [
      'https://i.ibb.co/m8j29ng/barniz-cadence-mate-500.jpg',
    ],
    label: '500 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA',
    selected: false,
  },
  {
    id: 351,
    name: 'Barníz SATINADO 120ml.',
    price: '5.20',
    images: [
      'https://i.ibb.co/nmRfCfJ/barniz-cadence-satinado-120.jpg',
    ],
    label: '120 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA',
    selected: false,
  },
  {
    id: 352,
    name: 'Barníz SATINADO 250ml.',
    price: '9.40',
    images: [
      'https://i.ibb.co/syMvyBP/barniz-cadence-satinado-250.jpg',
    ],
    label: '250 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA',
    selected: false,
  },
  {
    id: 353,
    name: 'Barníz SATINADO 500ml.', 
    price: '16.40',
    images: [
      'https://i.ibb.co/v1sZ2nF/barniz-cadence-500-ml-satin.jpg',
    ],
    label: '500 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA',
    selected: false,
  },
  {
    id: 354,
    name: 'Barníz BRILLO 120ml.',
    price: '5.20',
    images: [
      'https://i.ibb.co/Z8qj4CV/barniz-cadence-brillo-120.jpg',
    ],
    label: '120 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA',
    selected: false,
  },
  {
    id: 355,
    name: 'Barníz BRILLO 250ml.',
    price: '9.40',
    images: [
      'https://i.ibb.co/bFpwSjd/barniz-cadence-brillo-250.jpg',
    ],
    label: '250 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA',
    selected: false,
  },
  {
    id: 356,
    name: 'Barníz BRILLO 500ml.', 
    price: '16.40',
    images: [
      'https://i.ibb.co/7KxSbSc/barniz-cadence-brillo-500.jpg',
    ],
    label: '500 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA',
    selected: false,
  },
  {
    id: 357,
    name: 'Barníz CUERO 120ml.', 
    price: '8.40',
    images: [
      'https://i.ibb.co/x2ZCrkK/barniz-cadence-cuero-120.jpg',
    ],
    label: '120 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA',
    selected: false,
  },
  {
    id: 358,
    name: 'Barníz ULTIMATE GLAZE MATE 120ml.', 
    price: '5.85',
    images: [
      'https://i.ibb.co/wWm6SGL/barniz-ultimate-mate-120-ml.jpg',
    ],
    label: '120 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA',
    selected: false,
  },
  {
    id: 354,
    name: 'Barníz Aqua Stone MATE 120ml.',
    price: '8.40',
    images: [
      'https://i.ibb.co/sFWZ9xY/barniz-exterior-aqua-stone-mate-120-ml.jpg',
    ],
    label: '120 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA',
    selected: false,
  },
  {
    id: 355,
    name: 'Barníz Aqua Stone MATE 250ml.',
    price: '14.40',
    images: [
      'https://i.ibb.co/tQYgXTL/barniz-exterior-aqua-stone-mate-250-ml.jpg',
    ],
    label: '250 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA',
    selected: false,
  },
  {
    id: 356,
    name: 'Barníz Aqua Stone MATE 500ml.', 
    price: '20.95',
    images: [
      'https://i.ibb.co/thxvv9C/barniz-exterior-aqua-stone-mate-500-ml.jpg',
    ],
    label: '500 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA',
    selected: false,
  },
  {
    id: 354,
    name: 'Barníz Aqua Stone BRILLO 120ml.',
    price: '8.40',
    images: [
      'https://i.ibb.co/cy5GS72/barniz-cadence-aqua-stone-120ml.jpg',
    ],
    label: '120 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA',
    selected: false,
  },
  {
    id: 355,
    name: 'Barníz Aqua Stone BRILLO 250ml.',
    price: '14.40',
    images: [
      'https://i.ibb.co/dQKsDBH/barniz-cadence-aqua-stone-250ml.jpg',
    ],
    label: '250 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA',
    selected: false,
  },
  {
    id: 356,
    name: 'Barníz Aqua Stone BRILLO 500ml.', 
    price: '20.95',
    images: [
      'https://i.ibb.co/qjkYLQR/barniz-cadence-aqua-stone-500ml.jpg',
    ],
    label: '500 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA',
    selected: false,
  },
  {
    id: 357,
    name: 'Barníz Craquelador UN PASO Cadence ', 
    price: '3.25',
    images: [
      'https://i.ibb.co/6D1Hr0V/craquelador-de-1-paso-cadence.jpg',
    ],
    label: '500 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA',
    selected: false,
  },
  {
    id: 358,
    name: 'Barníz Craquelador DOS PASOS Cadence ', 
    price: '5.80',
    images: [
      'https://i.ibb.co/S7fYSTJ/craquelador-de-2-pasos-cadence.jpg',
    ],
    label: '500 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA',
    selected: false,
  },
  {
    id: 359,
    name: 'Decoupage Textil Cadence 120ml.', 
    price: '5.50',
    images: [
      'https://i.ibb.co/ZBpy1YX/decoupage-textil-cadence.jpg',
    ],
    label: '120 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA',
    selected: false,
  },
  {
    id: 360,
    name: 'Decoupage Plus MATT Cadence 250ml.', 
    price: '7.90',
    images: [
      'https://i.ibb.co/K7dhw0R/decoupage-plus-cadence.jpg',
    ],
    label: '250 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA',
    selected: false,
  },
  {
    id: 605,
    name: 'Spray Adhesivo Stencils CADENCE', 
    price: '6.40',
    images: [
      'https://www.artesaniasmontejo.com/13938-16822-large_default/spray-adhesivo-stencils-cadence.jpg',
    ],
    label: '150 ml.',
    description: 'Protege su adhesión en baja y alta temperatura, no se transere a la supercie utilizada, permite una limpieza fácil y el uso múltiple. Se despega y se pega otra vez, permanezca pegajoso por un largo tiempo, y el color no mancha y no se arruga.',
    selected: false,
  },
  {
    id: 606,
    name: 'ACRILEX Barniz Cristal 100ml', 
    price: '7.85',
    images: [
      'https://www.artesaniasmontejo.com/8563-9442-large_default/pelicula-de-transferencia-pebeo.jpg',
    ],
    label: '100 ml.',
    description: 'ACRILEX Barniz Cristal, 250ml Barniz efecto cristal de un solo componente. Aplicar a pincel o directamente del frasco si queremos cubrir una superficie grande.',
    selected: false,
  },



  





];

// Define el rango de precios mínimo y máximo de tus productos
const precioMinimo = 0;
const precioMaximo = 20;

export const Tienda3Barnices = () => {
  const [products, setProducts] = useState(initialProducts);
  const [priceRange, setPriceRange] = useState([precioMinimo, precioMaximo]);
  const [selectedClasses, setSelectedClasses] = useState([]);
  const [showNoProducts, setShowNoProducts] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [cart, setCart] = useState([]);
  const [showOverlay, setShowOverlay] = useState(false);
  const [filterButtonIcon, setFilterButtonIcon] = useState(<ViewOffIcon />);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(44); // Cambia el número según tus necesidades

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
          <h2>Barnices y Craqueladores Cadence🎨</h2>

          <h3>Amplia selección de barnices en spray o para brocha, con acabados mate, satinados, alto brillo de 2 componentes...  Además de craqueladores de 1 paso o 2 pasos de la marca CADENCE</h3>

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
