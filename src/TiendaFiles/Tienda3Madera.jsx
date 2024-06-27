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
    id: 557,
    name: 'Caja DM Asa 14x12x20cm',
    price: '16.80',
    images: [
      'https://i.ibb.co/SK9dGrZ/caja-dm-asa-14x12x20-cms.jpg',
    ],
    label: '14x12x20',
    description: 'Caja DM con asa de cuerda y tapa con bisagras y cierre.',
    selected: false,
  },
  {
    id: 558,
    name: 'Jaula DM 45x27x20cm',
    price: '47.50',
    images: [
      'https://i.ibb.co/9TTQsww/jaula-dm.jpg',
    ],
    label: '45x27x20',
    description: 'Jaula de madera estilo vintage para decorar y pintar con productos CADENCE',
    selected: false,
  },
  {
    id: 559,
    name: 'Joyero 9 cajones 37.5x15.5x20cm',
    price: '39.90',
    images: [
      'https://i.ibb.co/71mhGrc/joyero-9-cajones-375x155x20-cm.jpg',
    ],
    label: '37.5x15.5x20',
    description: 'Joyero con 9 cajones fabricado en madera de DM',
    selected: false,
  },
  {
    id: 560,
    name: 'Caja con patas 28x18x21cm',
    price: '20.90',
    images: [
      'https://i.ibb.co/WV5QjCv/caja-patas-28x18x21-cm.jpg',
    ],
    label: '28x18x21',
    description: 'Caja con patas fabricada en madera de DM ',
    selected: false,
  },
  {
    id: 561,
    name: 'Mueble 3 cajones Silvia 34x15x28cm',
    price: '39.90',
    images: [
      'https://i.ibb.co/GxkxbWn/mueble-3-cajones-silvia.jpg',
    ],
    label: '28x18x21',
    description: 'Cajonera en madera de DM con 3 alturas y tiradores',
    selected: false,
  },
  {
    id: 562,
    name: 'Mueblecito Multifuncional 34x21x19cm',
    price: '39.90',
    images: [
      'https://i.ibb.co/zR3gPB5/mueblecito-multifuncional.jpg',
    ],
    label: '234x21x19',
    description: 'Mueblecito DM multifuncional con 2 cajones, huecos laterales y parte superior con minicompartimentos',
    selected: false,
  },
  {
    id: 563,
    name: 'Caja libro 21x17x5.3cm',
    price: '8.50',
    images: [
      'https://i.ibb.co/rFSmZxV/caja-libro-21x17x53-cms.jpg',
    ],
    label: '234x21x19',
    description: 'Caja con forma de libro, fabricada en madera de DM',
    selected: false,
  },
  {
    id: 564,
    name: 'Revistero 2 Espacios DM 38x41x18.5cm',
    price: '27.10',
    images: [
      'https://i.ibb.co/rFNY155/revistero-2-espacios-dm.jpg',
    ],
    label: '38x41x18.5',
    description: 'Revistero 2 espacios, realizado en madera de DM ',
    selected: false,
  },
  {
    id: 565,
    name: 'Huevera DM 12 unidades 25x13x34cm',
    price: '19.90',
    images: [
      'https://i.ibb.co/wzXRNvC/huevera-dm-12-unid.jpg',
    ],
    label: '25x13x34',
    description: 'Soporte fabricado en madera de DM  Listo para pintar o decorar con las pinturas y productos CADENCE.',
    selected: false,
  },
  {
    id: 566,
    name: 'Pongotodo III 19x15x18cm',
    price: '17.10',
    images: [
      'https://i.ibb.co/8cg2s9Y/Pongotodo-III.jpg',
    ],
    label: '19x15x18',
    description: 'Soporte fabricado en madera de DM  Listo para pintar o decorar con las pinturas y productos CADENCE.',
    selected: false,
  },
  {
    id: 567,
    name: 'Pongotodo II 21x17x20cm',
    price: '20.60',
    images: [
      'https://i.ibb.co/4gGsJD1/Pongotodo-2-divisiones.jpg',
    ],
    label: '21x17x20',
    description: 'Soporte fabricado en madera de DM  Listo para pintar o decorar con las pinturas y productos CADENCE.',
    selected: false,
  },
  {
    id: 568,
    name: 'Archivador Con Cajón 22x21x36cm',
    price: '29.50',
    images: [
      'https://i.ibb.co/xFNqStZ/Archivador-con-cajon.jpg',
    ],
    label: '22x21x36',
    description: 'Soporte fabricado en madera de DM  Listo para pintar o decorar con las pinturas y productos CADENCE.',
    selected: false,
  },
  {
    id: 569,
    name: 'Portacubos con Patas 13x23x13cm',
    price: '16.80',
    images: [
      'https://i.ibb.co/b5B9Hmg/portacubos-con-pastas.jpg',
    ],
    label: '13x23x13',
    description: 'Soporte fabricado en madera de DM  Listo para pintar o decorar con las pinturas y productos CADENCE.',
    selected: false,
  },
  {
    id: 570,
    name: 'Organizador Giratorio 22x26x22cm',
    price: '32.50',
    images: [
      'https://i.ibb.co/ZHwQbp5/madera-cadence-1.jpg',
    ],
    label: '22x26x22',
    description: 'Organizador giratorio fabricado en madera de DM ',
    selected: false,
  },
  {
    id: 571,
    name: 'Caja Combada 18x18x12cm',
    price: '17.10',
    images: [
      'https://i.ibb.co/p0fDdSX/madera-cadence-2.jpg',
    ],
    label: '18x18x12',
    description: 'Caja combada estilo bombonera, fabricada en madera de DM',
    selected: false,
  },
  {
    id: 572,
    name: 'Set Bandejas DM 45x34x5.5cm',
    price: '24.80',
    images: [
      'https://i.ibb.co/0C0scpC/madera-dm-cadence.jpg',
    ],
    label: '45x34x5.5',
    description: 'Set de 2 bandejas con los cantos redondeados.',
    selected: false,
  },
  {
    id: 573,
    name: 'Set 2 Bandejas DM 43x30x7cm 34x25x7cm',
    price: '15.00',
    images: [
      'https://i.ibb.co/vvzz30n/set-3-bandejas-dm-cadence.jpg',
    ],
    label: '43x30x7 34x25x7',
    description: 'Set de 2 bandejas con los cantos redondeados.',
    selected: false,
  },
  {
    id: 574,
    name: 'Set 3 Bandejas DM 30x40x3cm 25x35x2.5cm 20x30x2.5cm',
    price: '20.10',
    images: [
      'https://i.ibb.co/k4k9P5T/set-3-bandejas-dm-cadence-1.jpg',
    ],
    label: '30x40x3 25x35x2.5 20x30x2.5',
    description: 'Set de 3 bandejas, fabricada en madera de DM ',
    selected: false,
  },
  


];

// Define el rango de precios mínimo y máximo de tus productos
const precioMinimo = 0;
const precioMaximo = 50;

export const Tienda3Madera = () => {
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
          <h2>Soportes de Madera🎨</h2>

          <h3>Pintura CADENCE de gesso con base de agua, especialmente formulada con partículas de diferentes tamaños y colores en su interior para crear una superficie antigua vintage rota. </h3>


          <Button className="remove-button3" rightIcon={filterButtonIcon} onClick={handleToggleFilters} colorScheme='blue' variant='solid'>
            Filtrar Productos
          </Button>

          <SearchBar onSearch={handleSearch} />


          <button className="bn632-hover bn22b" onClick={handleToggleCart}>Carrito🛒</button>

        </div>

        {showFilters && (
          <div data-aos="fade-right"><div className="filter">

            

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
