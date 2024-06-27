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
    id: 444,
    name: 'Lámina FOLEX ORO 20x30cm FSE001',
    price: '5.20',
    images: [
      'https://i.ibb.co/WtrmcGs/lamina-folex-oro-20x30cm.jpg',
    ],
    label: '20x30cm',
    description: 'Láminas decorativas FOLEX o también llamadas Folia, con hermosos diseños disponibles en color Oro o Peltre, con motivos naturales, fondos, motivos navideños, vintage, carteles y textos... Listos para tus TRANSFERENCIAS SOBRE CUALQUIER SUPERFICIE: Madera, vidrio, latón, tejidos...',
    selected: false,
  },
  {
    id: 445,
    name: 'Lámina FOLEX PELTRE 20x30cm FSE001',
    price: '5.20',
    images: [
      'https://i.ibb.co/ZWk8shT/lamina-folex-peltre-20x30cm.jpg',
    ],
    label: '20x30cm',
    description: 'Láminas decorativas FOLEX o también llamadas Folia, con hermosos diseños disponibles en color Oro o Peltre, con motivos naturales, fondos, motivos navideños, vintage, carteles y textos... Listos para tus TRANSFERENCIAS SOBRE CUALQUIER SUPERFICIE: Madera, vidrio, latón, tejidos...',
    selected: false,
  },
  {
    id: 446,
    name: 'Lámina FOLEX ORO 20x30cm FSE002',
    price: '5.20',
    images: [
      'https://i.ibb.co/ThwRghS/lamina-folex-oro-20x30cm-1.jpg',
    ],
    label: '20x30cm',
    description: 'Láminas decorativas FOLEX o también llamadas Folia, con hermosos diseños disponibles en color Oro o Peltre, con motivos naturales, fondos, motivos navideños, vintage, carteles y textos... Listos para tus TRANSFERENCIAS SOBRE CUALQUIER SUPERFICIE: Madera, vidrio, latón, tejidos...',
    selected: false,
  },
  {
    id: 447,
    name: 'Lámina FOLEX PELTRE 20x30cm FSE002',
    price: '5.20',
    images: [
      'https://i.ibb.co/vPkS7qk/lamina-folex-peltre-20x30cm-1.jpg',
    ],
    label: '20x30cm',
    description: 'Láminas decorativas FOLEX o también llamadas Folia, con hermosos diseños disponibles en color Oro o Peltre, con motivos naturales, fondos, motivos navideños, vintage, carteles y textos... Listos para tus TRANSFERENCIAS SOBRE CUALQUIER SUPERFICIE: Madera, vidrio, latón, tejidos...',
    selected: false,
  },
  {
    id: 448,
    name: 'Lámina FOLEX ORO 20x30cm FSE004',
    price: '5.20',
    images: [
      'https://i.ibb.co/YkFj3Bq/lamina-folex-oro-20x30cm-2.jpg',
    ],
    label: '20x30cm',
    description: 'Láminas decorativas FOLEX o también llamadas Folia, con hermosos diseños disponibles en color Oro o Peltre, con motivos naturales, fondos, motivos navideños, vintage, carteles y textos... Listos para tus TRANSFERENCIAS SOBRE CUALQUIER SUPERFICIE: Madera, vidrio, latón, tejidos...',
    selected: false,
  },
  {
    id: 449,
    name: 'Lámina FOLEX PELTRE 20x30cm FSE004',
    price: '5.20',
    images: [
      'https://i.ibb.co/6DKjR6M/lamina-folex-peltre-20x30cm-2.jpg',
    ],
    label: '20x30cm',
    description: 'Láminas decorativas FOLEX o también llamadas Folia, con hermosos diseños disponibles en color Oro o Peltre, con motivos naturales, fondos, motivos navideños, vintage, carteles y textos... Listos para tus TRANSFERENCIAS SOBRE CUALQUIER SUPERFICIE: Madera, vidrio, latón, tejidos...',
    selected: false,
  },
  {
    id: 450,
    name: 'Lámina FOLEX ORO 20x30cm FSE005',
    price: '5.20',
    images: [
      'https://i.ibb.co/wMBM1Ff/lamina-folex-oro-20x30cm-3.jpg',
    ],
    label: '20x30cm',
    description: 'Láminas decorativas FOLEX o también llamadas Folia, con hermosos diseños disponibles en color Oro o Peltre, con motivos naturales, fondos, motivos navideños, vintage, carteles y textos... Listos para tus TRANSFERENCIAS SOBRE CUALQUIER SUPERFICIE: Madera, vidrio, latón, tejidos...',
    selected: false,
  },
  {
    id: 451,
    name: 'Lámina FOLEX PELTRE 20x30cm FSE005',
    price: '5.20',
    images: [
      'https://i.ibb.co/Fshftmv/lamina-folex-peltre-20x30cm-3.jpg',
    ],
    label: '20x30cm',
    description: 'Láminas decorativas FOLEX o también llamadas Folia, con hermosos diseños disponibles en color Oro o Peltre, con motivos naturales, fondos, motivos navideños, vintage, carteles y textos... Listos para tus TRANSFERENCIAS SOBRE CUALQUIER SUPERFICIE: Madera, vidrio, latón, tejidos...',
    selected: false,
  },
  {
    id: 452,
    name: 'Lámina FOLEX ORO 20x30cm FSE009',
    price: '5.20',
    images: [
      'https://i.ibb.co/CQs18y3/lamina-folex-oro-20x30cm-4.jpg',
    ],
    label: '20x30cm',
    description: 'Láminas decorativas FOLEX o también llamadas Folia, con hermosos diseños disponibles en color Oro o Peltre, con motivos naturales, fondos, motivos navideños, vintage, carteles y textos... Listos para tus TRANSFERENCIAS SOBRE CUALQUIER SUPERFICIE: Madera, vidrio, latón, tejidos...',
    selected: false,
  },
  {
    id: 453,
    name: 'Lámina FOLEX PELTRE 20x30cm FSE009',
    price: '5.20',
    images: [
      'https://i.ibb.co/xFHYNc4/lamina-folex-peltre-20x30cm-4.jpg',
    ],
    label: '20x30cm',
    description: 'Láminas decorativas FOLEX o también llamadas Folia, con hermosos diseños disponibles en color Oro o Peltre, con motivos naturales, fondos, motivos navideños, vintage, carteles y textos... Listos para tus TRANSFERENCIAS SOBRE CUALQUIER SUPERFICIE: Madera, vidrio, latón, tejidos...',
    selected: false,
  },
  {
    id: 454,
    name: 'Lámina FOLEX ORO 20x30cm FSE012',
    price: '5.20',
    images: [
      'https://i.ibb.co/JnYJKbW/lamina-folex-oro-20x30cm-5.jpg',
    ],
    label: '20x30cm',
    description: 'Láminas decorativas FOLEX o también llamadas Folia, con hermosos diseños disponibles en color Oro o Peltre, con motivos naturales, fondos, motivos navideños, vintage, carteles y textos... Listos para tus TRANSFERENCIAS SOBRE CUALQUIER SUPERFICIE: Madera, vidrio, latón, tejidos...',
    selected: false,
  },
  {
    id: 455,
    name: 'Lámina FOLEX PELTRE 20x30cm FSE012',
    price: '5.20',
    images: [
      'https://i.ibb.co/YNd8Wkp/lamina-folex-peltre-20x30cm-5.jpg',
    ],
    label: '20x30cm',
    description: 'Láminas decorativas FOLEX o también llamadas Folia, con hermosos diseños disponibles en color Oro o Peltre, con motivos naturales, fondos, motivos navideños, vintage, carteles y textos... Listos para tus TRANSFERENCIAS SOBRE CUALQUIER SUPERFICIE: Madera, vidrio, latón, tejidos...',
    selected: false,
  },
  {
    id: 456,
    name: 'Lámina FOLEX ORO 20x30cm FSE020',
    price: '5.20',
    images: [
      'https://i.ibb.co/N6WCTHt/lamina-folex-oro-20x30cm-6.jpg',
    ],
    label: '20x30cm',
    description: 'Láminas decorativas FOLEX o también llamadas Folia, con hermosos diseños disponibles en color Oro o Peltre, con motivos naturales, fondos, motivos navideños, vintage, carteles y textos... Listos para tus TRANSFERENCIAS SOBRE CUALQUIER SUPERFICIE: Madera, vidrio, latón, tejidos...',
    selected: false,
  },
  {
    id: 457,
    name: 'Lámina FOLEX PELTRE 20x30cm FSE020',
    price: '5.20',
    images: [
      'https://i.ibb.co/gDvHgQX/lamina-folex-peltre-20x30cm-6.jpg',
    ],
    label: '20x30cm',
    description: 'Láminas decorativas FOLEX o también llamadas Folia, con hermosos diseños disponibles en color Oro o Peltre, con motivos naturales, fondos, motivos navideños, vintage, carteles y textos... Listos para tus TRANSFERENCIAS SOBRE CUALQUIER SUPERFICIE: Madera, vidrio, latón, tejidos...',
    selected: false,
  },
  {
    id: 458,
    name: 'Lámina FOLEX ORO 20x30cm FSE028',
    price: '5.20',
    images: [
      'https://i.ibb.co/gm4dHtd/lamina-folex-oro-20x30cm-7.jpg',
    ],
    label: '20x30cm',
    description: 'Láminas decorativas FOLEX o también llamadas Folia, con hermosos diseños disponibles en color Oro o Peltre, con motivos naturales, fondos, motivos navideños, vintage, carteles y textos... Listos para tus TRANSFERENCIAS SOBRE CUALQUIER SUPERFICIE: Madera, vidrio, latón, tejidos...',
    selected: false,
  },
  {
    id: 459,
    name: 'Lámina FOLEX PELTRE 20x30cm FSE028',
    price: '5.20',
    images: [
      'https://i.ibb.co/bsCYsbf/lamina-folex-peltre-20x30cm-7.jpg',
    ],
    label: '20x30cm',
    description: 'Láminas decorativas FOLEX o también llamadas Folia, con hermosos diseños disponibles en color Oro o Peltre, con motivos naturales, fondos, motivos navideños, vintage, carteles y textos... Listos para tus TRANSFERENCIAS SOBRE CUALQUIER SUPERFICIE: Madera, vidrio, latón, tejidos...',
    selected: false,
  },
  {
    id: 460,
    name: 'Lámina FOLEX ORO 20x30cm FSE030',
    price: '5.20',
    images: [
      'https://i.ibb.co/3SPNhdW/lamina-folex-oro-20x30cm-8.jpg',
    ],
    label: '20x30cm',
    description: 'Láminas decorativas FOLEX o también llamadas Folia, con hermosos diseños disponibles en color Oro o Peltre, con motivos naturales, fondos, motivos navideños, vintage, carteles y textos... Listos para tus TRANSFERENCIAS SOBRE CUALQUIER SUPERFICIE: Madera, vidrio, latón, tejidos...',
    selected: false,
  },
  {
    id: 461,
    name: 'Lámina FOLEX PELTRE 20x30cm FSE030',
    price: '5.20',
    images: [
      'https://i.ibb.co/XbYHDry/lamina-folex-peltre-20x30cm-8.jpg',
    ],
    label: '20x30cm',
    description: 'Láminas decorativas FOLEX o también llamadas Folia, con hermosos diseños disponibles en color Oro o Peltre, con motivos naturales, fondos, motivos navideños, vintage, carteles y textos... Listos para tus TRANSFERENCIAS SOBRE CUALQUIER SUPERFICIE: Madera, vidrio, latón, tejidos...',
    selected: false,
  },
  
  
  
  
  
  
  



  





];

// Define el rango de precios mínimo y máximo de tus productos
const precioMinimo = 0;
const precioMaximo = 20;

export const Tienda3TransfersFolex = () => {
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
          <h2>Transfers Folex🎨</h2>

          <h3>Láminas decorativas FOLEX o también llamadas Folia, con hermosos diseños disponibles en color Oro o Peltre, con motivos naturales, fondos, motivos navideños, vintage, carteles y textos... Listos para tus TRANSFERENCIAS SOBRE CUALQUIER SUPERFICIE: Madera, vidrio, latón, tejidos...
            <br></br> <span id='materiales'>MODO DE EMPLEO</span> <br></br> Corta la sección o el trozo de la lámina Folex que quieres usar en tu proyecto (o usa la lámina entera).  <br></br>Con un pincel plano, suave y limpio aplica una capa finita de adhesivo Mixtión Cadence ref: 889008 sobre el trozo impreso de la lámina, o directamente sobre la superficie que quieres decorar (ambas opciones son válidas)

<br></br>Deja que oree unos 30 minutos aproximadamente hasta que la capa de adhesivo mixtión quede mordiente (lo notarás transparente y pegajoso)  al tacto)

<br></br>Coloca la lámina de Folex.  IMPORTANTE tener en cuenta el derecho y el revés de la lámina de Folex (la parte más brillante tiene que quedar hacia arriba, en el caso de diseños con letras será más fácil ver cuál es la parte que tiene que estar en contacto con la mezcla).

<br></br>Traspasar el diseño del Folex ejerciendo presión con una herramienta roma puede ser tipo plegadera, la parte de atrás de una tijera, la parte convexa de una cuchara... hasta que el diseño se traspase.

<br></br>Retire la lámina de película con cuidado.

<br></br>Puede proteger el diseño con una capa de barniz apta para la superficie tratada.
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
