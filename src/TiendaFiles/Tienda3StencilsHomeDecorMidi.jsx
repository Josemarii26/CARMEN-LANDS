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
    id: 405,
    name: 'Stencil HOME DECOR MIDI 25x25cm HDM73',
    price: '7.10',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/0nw06tbkrocpxk6zvveeg/stencil-cadence-25x25-cm.jpg?rlkey=wx55crh8ad3dsxvpeq5893327&st=2fx5fcmy&dl=0',
    ],
    label: '25x25cm',
    description: 'Stencils o Plantillas CADENCE home decor MIDI de formato MEDIANO 25x25cm con diseños de cenefas y filigranas para usar en proyectos de decoración, manualidades, scrapbook, home decor...',
    selected: false,
  },
  {
    id: 406,
    name: 'Stencil HOME DECOR MIDI 25x25cm HDM67',
    price: '7.10',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/23nbcmqcsaqusjoo3e0m5/stencil-cadence-25x25cm.jpg?rlkey=1ctf4h2p63qtubwkj7xrwsoq8&st=78usel00&dl=0',
    ],
    label: '25x25cm',
    description: 'Stencils o Plantillas CADENCE home decor MIDI de formato MEDIANO 25x25cm con diseños de cenefas y filigranas para usar en proyectos de decoración, manualidades, scrapbook, home decor...',
    selected: false,
  },
  {
    id: 407,
    name: 'Stencil FONDO CIRCULOS 25x25cm',
    price: '7.10',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/8krbqcjev7drrgtpt41w0/stencil-cadence-25x25cm-1.jpg?rlkey=0guoh500z9wjj3tmv1qmxa9y6&st=0f0qzygw&dl=0',
    ],
    label: '25x25cm',
    description: 'Stencils o Plantillas CADENCE home decor MIDI de formato MEDIANO 25x25cm con diseños de cenefas y filigranas para usar en proyectos de decoración, manualidades, scrapbook, home decor...',
    selected: false,
  },
  {
    id: 408,
    name: 'Stencil FONDO 2 TAMAÑOS 25x25cm',
    price: '7.10',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/eaet4pacfwz7s5ov08b0o/stencil-cadence-25x25cm-2.jpg?rlkey=048xp08knzx4b03nju7m8t1rm&st=xq6w4e38&dl=0',
    ],
    label: '25x25cm',
    description: 'Stencils o Plantillas CADENCE home decor MIDI de formato MEDIANO 25x25cm con diseños de cenefas y filigranas para usar en proyectos de decoración, manualidades, scrapbook, home decor...',
    selected: false,
  },
  {
    id: 409,
    name: 'Stencil HOME MIDI 25x25cm HDM70',
    price: '7.10',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/v5cn9d2vhp2f822qjc4vs/stencil-cadence-25x25cm-3.jpg?rlkey=w058r4xf1k6zjqhykdzhabvy4&st=1usz7qc7&dl=0',
    ],
    label: '25x25cm',
    description: 'Stencils o Plantillas CADENCE home decor MIDI de formato MEDIANO 25x25cm con diseños de cenefas y filigranas para usar en proyectos de decoración, manualidades, scrapbook, home decor...',
    selected: false,
  },
  {
    id: 410,
    
    name: 'Stencil FONDO PUNTITOS 25x25cm',
    price: '7.10',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/xsref8tvpt0i6sbpqw8z6/stencil-cadence-25x25cm-4.jpg?rlkey=2ij7gqbbbd1chkte7170hf8nz&st=obc8ttmm&dl=0',
    ],
    label: '25x25cm',
    description: 'Stencils o Plantillas CADENCE home decor MIDI de formato MEDIANO 25x25cm con diseños de cenefas y filigranas para usar en proyectos de decoración, manualidades, scrapbook, home decor...',
    selected: false,
  },
  {
    id: 411,
    name: 'Stencil SELLOS POSTALES 25x25cm',
    price: '7.10',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/sz7d5ajwgi37pbqnmalv3/stencil-cadence-25x25cm-5.jpg?rlkey=g23zlrp3cyaa2lrlnmuwwlypg&st=g5t9rt42&dl=0',
    ],
    label: '25x25cm',
    description: 'Stencils o Plantillas CADENCE home decor MIDI de formato MEDIANO 25x25cm con diseños de cenefas y filigranas para usar en proyectos de decoración, manualidades, scrapbook, home decor...',
    selected: false,
  },
  {
    id: 412,
    name: 'Stencil DAMERO 25x25cm',
    price: '7.10',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/de3gui24oaa665a9kdk2w/stencil-cadence-25x25cm-6.jpg?rlkey=w1lq05z5fyz2p3uyziv1t6yn3&st=yil98vf5&dl=0',
    ],
    label: '25x25cm',
    description: 'Stencils o Plantillas CADENCE home decor MIDI de formato MEDIANO 25x25cm con diseños de cenefas y filigranas para usar en proyectos de decoración, manualidades, scrapbook, home decor...',
    selected: false,
  },
  {
    id: 413,
    name: 'Stencil FLEURA 25x25cm',
    price: '7.10',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/znkdd5tzuc3dgyjckxhqu/stencil-cadence-25x25cm-7.jpg?rlkey=m6lqtym3bd621yni8gkdjskd4&st=er4ybv9n&dl=0',
    ],
    label: '25x25cm',
    description: 'Stencils o Plantillas CADENCE home decor MIDI de formato MEDIANO 25x25cm con diseños de cenefas y filigranas para usar en proyectos de decoración, manualidades, scrapbook, home decor...',
    selected: false,
  },
  {
    id: 414,
    name: 'Stencil BALDOSAS 25x25cm',
    price: '7.10',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/2dl2h81v1a1ow7jkrkcak/stencil-cadence-25x25cm-8.jpg?rlkey=i5i3c2tvwonr0rlcmsxcflt68&st=fwxqfuxd&dl=0',
    ],
    label: '25x25cm',
    description: 'Stencils o Plantillas CADENCE home decor MIDI de formato MEDIANO 25x25cm con diseños de cenefas y filigranas para usar en proyectos de decoración, manualidades, scrapbook, home decor...',
    selected: false,
  },
  {
    id: 415,
    name: 'Stencil BALDOSA GRANDE 25x25cm',
    price: '7.10',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/h6m9tfcz7901tyonrabvh/stencil-cadence-25x25cm-9.jpg?rlkey=pgwmcxvvnbpk5df2dw5sml3su&st=e97vldqr&dl=0',
    ],
    label: '25x25cm',
    description: 'Stencils o Plantillas CADENCE home decor MIDI de formato MEDIANO 25x25cm con diseños de cenefas y filigranas para usar en proyectos de decoración, manualidades, scrapbook, home decor...',
    selected: false,
  },
  {
    id: 416,
    name: 'Stencil ADAMASCO 25x25cm',
    price: '7.10',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/4a8p4o9o4tfmy54dxps23/stencil-cadence-25x25cm-10.jpg?rlkey=czzjzylauyjhy0mq3dsx05ylc&st=lsghgr9c&dl=0',
    ],
    label: '25x25cm',
    description: 'Stencils o Plantillas CADENCE home decor MIDI de formato MEDIANO 25x25cm con diseños de cenefas y filigranas para usar en proyectos de decoración, manualidades, scrapbook, home decor...',
    selected: false,
  },
  {
    id: 417,
    name: 'Stencil NÚMEROS 25x25cm',
    price: '7.10',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/jtsbos1v7teh4x6dnxk6y/stencil-cadence-25x25cm-11.jpg?rlkey=za801in6sjdtxl5w5p0kue7fv&st=nu2h5vyq&dl=0',
    ],
    label: '25x25cm',
    description: 'Stencils o Plantillas CADENCE home decor MIDI de formato MEDIANO 25x25cm con diseños de cenefas y filigranas para usar en proyectos de decoración, manualidades, scrapbook, home decor...',
    selected: false,
  },
  {
    id: 418,
    name: 'Stencil CADENCE 25x25cm HDM197',
    price: '7.10',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/bmo6e4niwkqlhh54yydje/stencil-cadence-25x25-cm-hdm197.png?rlkey=jxp2vzq3l9orn74kc3awqv2kn&st=3wc8fdkp&dl=0',
    ],
    label: '25x25cm',
    description: 'Stencils o Plantillas CADENCE home decor MIDI de formato MEDIANO 25x25cm con diseños de cenefas y filigranas para usar en proyectos de decoración, manualidades, scrapbook, home decor...',
    selected: false,
  },
  {
    id: 419,
    name: 'Stencil CADENCE 25x25cm HDM196',
    price: '7.10',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/uuh4vcyqh73to6f569ypb/stencil-cadence-25x25-cm-hdm196.png?rlkey=o0t6hnzpz9by2onw37fokzna1&st=c1fdqwgb&dl=0',
    ],
    label: '25x25cm',
    description: 'Stencils o Plantillas CADENCE home decor MIDI de formato MEDIANO 25x25cm con diseños de cenefas y filigranas para usar en proyectos de decoración, manualidades, scrapbook, home decor...',
    selected: false,
  },
  



];

// Define el rango de precios mínimo y máximo de tus productos
const precioMinimo = 0;
const precioMaximo = 20;

export const Tienda3StencilsHomeDecorMidi = () => {
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
          <h2>Stencil Cadence Home Decor Midi🎨</h2>

          <h3>Plantillas de gran formato CADENCE de 45x45cm ideales para decoración. Úsalas sobre muebles, cajas, paredes...</h3>

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
