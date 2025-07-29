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
  /*
  {
    id: 695,
    name: 'Transfer COLOR Ani Arts 20x30cm (CTE079)',
    price: '6.95',
    images: [
      'https://www.artesaniasmontejo.com/23031-30498-thickbox_default/color-transfer-ani-arts-20x30cm.jpg',
    ],
    label: '20x30cm',
    description: 'Hermosos diseños transferibles y súper fáciles de usar! Se pueden adherir a cualquier superficie como tela, madera, vidrio, plástico metal, papel, cartón, entre otros.',
    selected: false,
  },
  {
    id: 696,
    name: 'Transfer COLOR Ani Arts 20x30cm (CTE076)',
    price: '6.95',
    images: [
      'https://www.artesaniasmontejo.com/23029-30496-large_default/color-transfer-ani-arts-20x30cm.jpg',
    ],
    label: '20x30cm',
    description: 'Hermosos diseños transferibles y súper fáciles de usar! Se pueden adherir a cualquier superficie como tela, madera, vidrio, plástico metal, papel, cartón, entre otros.',
    selected: false,
  },
  {
    id: 697,
    name: 'Transfer COLOR Ani Arts 20x30cm (CTE072)',
    price: '6.95',
    images: [
      'https://www.artesaniasmontejo.com/23028-30495-large_default/color-transfer-ani-arts-20x30cm.jpg',
    ],
    label: '20x30cm',
    description: 'Hermosos diseños transferibles y súper fáciles de usar! Se pueden adherir a cualquier superficie como tela, madera, vidrio, plástico metal, papel, cartón, entre otros.',
    selected: false,
  },
  {
    id: 698,
    name: 'Transfer COLOR Ani Arts 20x30cm (CTE071)',
    price: '6.95',
    images: [
      'https://www.artesaniasmontejo.com/23027-30494-large_default/color-transfer-ani-arts-20x30cm.jpg',
    ],
    label: '20x30cm',
    description: 'Hermosos diseños transferibles y súper fáciles de usar! Se pueden adherir a cualquier superficie como tela, madera, vidrio, plástico metal, papel, cartón, entre otros.',
    selected: false,
  },
  {
    id: 699,
    name: 'Transfer COLOR Ani Arts 20x30cm (CTE068)',
    price: '6.95',
    images: [
      'https://www.artesaniasmontejo.com/23026-30493-large_default/color-transfer-ani-arts-20x30cm.jpg',
    ],
    label: '20x30cm',
    description: 'Hermosos diseños transferibles y súper fáciles de usar! Se pueden adherir a cualquier superficie como tela, madera, vidrio, plástico metal, papel, cartón, entre otros.',
    selected: false,
  },
  {
    id: 700,
    name: 'Transfer COLOR Ani Arts 20x30cm (CTE063)',
    price: '6.95',
    images: [
      'https://www.artesaniasmontejo.com/23022-30489-large_default/color-transfer-ani-arts-20x30cm.jpg',
    ],
    label: '20x30cm',
    description: 'Hermosos diseños transferibles y súper fáciles de usar! Se pueden adherir a cualquier superficie como tela, madera, vidrio, plástico metal, papel, cartón, entre otros.',
    selected: false,
  },
  {
    id: 701,
    name: 'Transfer COLOR Ani Arts 20x30cm (CTE056)',
    price: '6.95',
    images: [
      'https://www.artesaniasmontejo.com/23021-30488-large_default/color-transfer-ani-arts-20x30cm.jpg',
    ],
    label: '20x30cm',
    description: 'Hermosos diseños transferibles y súper fáciles de usar! Se pueden adherir a cualquier superficie como tela, madera, vidrio, plástico metal, papel, cartón, entre otros.',
    selected: false,
  },
  {
    id: 702,
    name: 'Transfer COLOR Ani Arts 20x30cm (CTE054)',
    price: '6.95',
    images: [
      'https://www.artesaniasmontejo.com/23020-30487-large_default/color-transfer-ani-arts-20x30cm.jpg',
    ],
    label: '20x30cm',
    description: 'Hermosos diseños transferibles y súper fáciles de usar! Se pueden adherir a cualquier superficie como tela, madera, vidrio, plástico metal, papel, cartón, entre otros.',
    selected: false,
  },
  {
    id: 703,
    name: 'Transfer COLOR Ani Arts 20x30cm (CTE050)' ,
    price: '6.95',
    images: [
      'https://www.artesaniasmontejo.com/23019-30485-large_default/color-transfer-ani-arts-20x30cm.jpg',
    ],
    label: '20x30cm',
    description: 'Hermosos diseños transferibles y súper fáciles de usar! Se pueden adherir a cualquier superficie como tela, madera, vidrio, plástico metal, papel, cartón, entre otros.',
    selected: false,
  },
  {
    id: 704,
    name: 'Transfer COLOR Ani Arts 20x30cm (CTE048)',
    price: '6.95',
    images: [
      'https://www.artesaniasmontejo.com/23018-30484-large_default/color-transfer-ani-arts-20x30cm.jpg',
    ],
    label: '20x30cm',
    description: 'Hermosos diseños transferibles y súper fáciles de usar! Se pueden adherir a cualquier superficie como tela, madera, vidrio, plástico metal, papel, cartón, entre otros.',
    selected: false,
  },
  {
    id: 705,
    name: 'Transfer COLOR Ani Arts 20x30cm (CTE044)',
    price: '6.95',
    images: [
      'https://www.artesaniasmontejo.com/23015-30481-large_default/color-transfer-ani-arts-20x30cm.jpg',
    ],
    label: '20x30cm',
    description: 'Hermosos diseños transferibles y súper fáciles de usar! Se pueden adherir a cualquier superficie como tela, madera, vidrio, plástico metal, papel, cartón, entre otros.',
    selected: false,
  },
  
  {
    id: 706,
    name: 'Transfer COLOR Ani Arts 20x30cm (CTE042)',
    price: '6.95',
    images: [
      'https://www.artesaniasmontejo.com/23014-30480-large_default/color-transfer-ani-arts-20x30cm.jpg',
    ],
    label: '20x30cm',
    description: 'Hermosos diseños transferibles y súper fáciles de usar! Se pueden adherir a cualquier superficie como tela, madera, vidrio, plástico metal, papel, cartón, entre otros.',
    selected: false,
  },
  {
    id: 707,
    name: 'Transfer COLOR Ani Arts 20x30cm (CTE1002)',
    price: '6.95',
    images: [
      'https://www.artesaniasmontejo.com/22964-30373-large_default/color-transfer-ani-arts-20x30cm.jpg',
    ],
    label: '20x30cm',
    description: 'Hermosos diseños transferibles y súper fáciles de usar! Se pueden adherir a cualquier superficie como tela, madera, vidrio, plástico metal, papel, cartón, entre otros.',
    selected: false,
  },
  {
    id: 708,
    name: 'Transfer COLOR Ani Arts 20x30cm (CTE032)',
    price: '6.95',
    images: [
      'https://www.artesaniasmontejo.com/22832-30157-large_default/color-transfer-ani-arts-20x30cm.jpg',
    ],
    label: '20x30cm',
    description: 'Hermosos diseños transferibles y súper fáciles de usar! Se pueden adherir a cualquier superficie como tela, madera, vidrio, plástico metal, papel, cartón, entre otros.',
    selected: false,
  },
  {
    id: 709,
    name: 'Transfer COLOR Ani Arts 20x30cm (CTE024)',
    price: '6.95',
    images: [
      'https://www.artesaniasmontejo.com/22826-30151-large_default/color-transfer-ani-arts-20x30cm.jpg',
    ],
    label: '20x30cm',
    description: 'Hermosos diseños transferibles y súper fáciles de usar! Se pueden adherir a cualquier superficie como tela, madera, vidrio, plástico metal, papel, cartón, entre otros.',
    selected: false,
  },
  {
    id: 710,
    name: 'Transfer COLOR Ani Arts 20x30cm (CTE023)',
    price: '6.95',
    images: [
      'https://www.artesaniasmontejo.com/22825-30150-large_default/color-transfer-ani-arts-20x30cm.jpg',
    ],
    label: '20x30cm',
    description: 'Hermosos diseños transferibles y súper fáciles de usar! Se pueden adherir a cualquier superficie como tela, madera, vidrio, plástico metal, papel, cartón, entre otros.',
    selected: false,
  },
  {
    id: 711,
    name: 'Transfer COLOR Ani Arts 20x30cm (CTE022)',
    price: '6.95',
    images: [
      'https://www.artesaniasmontejo.com/22824-30149-large_default/color-transfer-ani-arts-20x30cm.jpg',
    ],
    label: '20x30cm',
    description: 'Hermosos diseños transferibles y súper fáciles de usar! Se pueden adherir a cualquier superficie como tela, madera, vidrio, plástico metal, papel, cartón, entre otros.',
    selected: false,
  },
  {
    id: 712,
    name: 'Transfer COLOR Ani Arts 20x30cm (CTE018)',
    price: '6.95',
    images: [
      'https://www.artesaniasmontejo.com/22820-30145-large_default/color-transfer-ani-arts-20x30cm.jpg',
    ],
    label: '20x30cm',
    description: 'Hermosos diseños transferibles y súper fáciles de usar! Se pueden adherir a cualquier superficie como tela, madera, vidrio, plástico metal, papel, cartón, entre otros.',
    selected: false,
  },
  {
    id: 713,
    name: 'Transfer COLOR Ani Arts 20x30cm (CTE017)',
    price: '6.95',
    images: [
      'https://www.artesaniasmontejo.com/22819-30144-large_default/color-transfer-ani-arts-20x30cm.jpg',
    ],
    label: '20x30cm',
    description: 'Hermosos diseños transferibles y súper fáciles de usar! Se pueden adherir a cualquier superficie como tela, madera, vidrio, plástico metal, papel, cartón, entre otros.',
    selected: false,
  },
  {
    id: 714,
    name: 'Transfer COLOR Ani Arts 20x30cm (CTE014)',
    price: '6.95',
    images: [
      'https://www.artesaniasmontejo.com/22817-30142-large_default/color-transfer-ani-arts-20x30cm.jpg',
    ],
    label: '20x30cm',
    description: 'Hermosos diseños transferibles y súper fáciles de usar! Se pueden adherir a cualquier superficie como tela, madera, vidrio, plástico metal, papel, cartón, entre otros.',
    selected: false,
  },
  {
    id: 715,
    name: 'Transfer COLOR Ani Arts 20x30cm (CTE012)',
    price: '6.95',
    images: [
      'https://www.artesaniasmontejo.com/22815-30140-large_default/color-transfer-ani-arts-20x30cm.jpg',
    ],
    label: '20x30cm',
    description: 'Hermosos diseños transferibles y súper fáciles de usar! Se pueden adherir a cualquier superficie como tela, madera, vidrio, plástico metal, papel, cartón, entre otros.',
    selected: false,
  },
  {
    id: 716,
    name: 'Transfer COLOR Ani Arts 20x30cm (CTE011)',
    price: '6.95',
    images: [
      'https://www.artesaniasmontejo.com/22814-30139-large_default/color-transfer-ani-arts-20x30cm.jpg',
    ],
    label: '20x30cm',
    description: 'Hermosos diseños transferibles y súper fáciles de usar! Se pueden adherir a cualquier superficie como tela, madera, vidrio, plástico metal, papel, cartón, entre otros.',
    selected: false,
  },
  {
    id: 717,
    name: 'Transfer COLOR Ani Arts 20x30cm (CTE010)',
    price: '6.95',
    images: [
      'https://www.artesaniasmontejo.com/22813-30138-large_default/color-transfer-ani-arts-20x30cm.jpg',
    ],
    label: '20x30cm',
    description: 'Hermosos diseños transferibles y súper fáciles de usar! Se pueden adherir a cualquier superficie como tela, madera, vidrio, plástico metal, papel, cartón, entre otros.',
    selected: false,
  },
  {
    id: 718,
    name: 'Transfer COLOR Ani Arts 20x30cm (CTE009)',
    price: '6.95',
    images: [
      'https://www.artesaniasmontejo.com/22812-30137-large_default/color-transfer-ani-arts-20x30cm.jpg',
    ],
    label: '20x30cm',
    description: 'Hermosos diseños transferibles y súper fáciles de usar! Se pueden adherir a cualquier superficie como tela, madera, vidrio, plástico metal, papel, cartón, entre otros.',
    selected: false,
  },
  {
    id: 719,
    name: 'Transfer COLOR Ani Arts 20x30cm (CTE028)',
    price: '6.95',
    images: [
      'https://www.artesaniasmontejo.com/22830-30155-large_default/color-transfer-ani-arts-20x30cm.jpg',
    ],
    label: '20x30cm',
    description: 'Hermosos diseños transferibles y súper fáciles de usar! Se pueden adherir a cualquier superficie como tela, madera, vidrio, plástico metal, papel, cartón, entre otros.',
    selected: false,
  },
  {
    id: 720,
    name: 'Transfer COLOR Ani Arts 20x30cm (CTE027)',
    price: '6.95',
    images: [
      'https://www.artesaniasmontejo.com/22829-30154-large_default/color-transfer-ani-arts-20x30cm.jpg',
    ],
    label: '20x30cm',
    description: 'Hermosos diseños transferibles y súper fáciles de usar! Se pueden adherir a cualquier superficie como tela, madera, vidrio, plástico metal, papel, cartón, entre otros.',
    selected: false,
  },
  {
    id: 721,
    name: 'Transfer COLOR Ani Arts 20x30cm (CTE026)',
    price: '6.95',
    images: [
      'https://www.artesaniasmontejo.com/22828-30153-large_default/color-transfer-ani-arts-20x30cm.jpg',
    ],
    label: '20x30cm',
    description: 'Hermosos diseños transferibles y súper fáciles de usar! Se pueden adherir a cualquier superficie como tela, madera, vidrio, plástico metal, papel, cartón, entre otros.',
    selected: false,
  },

  
*/















];

// Define el rango de precios mínimo y máximo de tus productos
const precioMinimo = 0;
const precioMaximo = 20;

export const Tienda3TransfersColors = () => {
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
          <h2>Transfers Colors🎨</h2>

          <h3>Hermosos diseños transferibles y súper fáciles de usar! Se pueden adherir a cualquier superficie como tela, madera, vidrio, plástico metal, papel, cartón, entre otros <br></br>
          <span id='materiales'>MODO DE EMPLEO</span> <br></br> -Recortar y aplicar con plancha caliente sin vapor. Presionar con una herramienta roma para que termine de traspasar. Retirar el film protector una vez que se enfríe
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
