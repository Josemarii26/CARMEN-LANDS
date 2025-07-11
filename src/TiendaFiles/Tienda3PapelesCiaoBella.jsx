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
    id: 651,
    name: 'Papel de Arroz A3 Around the World',
    price: '3.50',
    images: [
      'https://www.artesaniasmontejo.com/23095-30564-large_default/rice-paper-a4-around-the-world.jpg',
    ],
    label: 'A3',
    description: 'Es un papel excelente no solo para decoupage sino también para Mix Media, técnicas mixtas y manualidades',
    selected: false,
  },
  {
    id: 652,
    name: 'Papel de Arroz A4 Around the World',
    price: '2.50',
    images: [
      'https://www.artesaniasmontejo.com/23095-30564-large_default/rice-paper-a4-around-the-world.jpg',
    ],
    label: 'A4',
    description: 'Es un papel excelente no solo para decoupage sino también para Mix Media, técnicas mixtas y manualidades',
    selected: false,
  },
  {
    id: 653,
    name: 'Papel de Arroz A3 Rusty Lighthouse',
    price: '3.50',
    images: [
      'https://www.artesaniasmontejo.com/23093-30562-large_default/Rice-Paper-A4-Rusty-Lighthouse.jpg',
    ],
    label: 'A3',
    description: 'Es un papel excelente no solo para decoupage sino también para Mix Media, técnicas mixtas y manualidades',
    selected: false,
  },
  {
    id: 654,
    name: 'Papel de Arroz A4 Rusty Lighthouse',
    price: '2.50',
    images: [
      'https://www.artesaniasmontejo.com/23093-30562-large_default/Rice-Paper-A4-Rusty-Lighthouse.jpg',
    ],
    label: 'A4',
    description: 'Es un papel excelente no solo para decoupage sino también para Mix Media, técnicas mixtas y manualidades',
    selected: false,
  },
  {
    id: 655,
    name: 'Papel de Arroz A3 Coral Reef Cards',
    price: '3.50',
    images: [
      'https://www.artesaniasmontejo.com/23091-30560-large_default/Rice-Paper-A4-Coral-Reef-cards.jpg',
    ],
    label: 'A3',
    description: 'Es un papel excelente no solo para decoupage sino también para Mix Media, técnicas mixtas y manualidades',
    selected: false,
  },
  {
    id: 656,
    name: 'Papel de Arroz A4 Coral Reef Cards',
    price: '2.50',
    images: [
      'https://www.artesaniasmontejo.com/23091-30560-large_default/Rice-Paper-A4-Coral-Reef-cards.jpg',
    ],
    label: 'A4',
    description: 'Es un papel excelente no solo para decoupage sino también para Mix Media, técnicas mixtas y manualidades',
    selected: false,
  },
  {
    id: 657,
    name: 'Papel de Arroz A3 Sea Life Elements',
    price: '3.50',
    images: [
      'https://www.artesaniasmontejo.com/23087-30556-large_default/Rice-Paper-A4-Sea-Life-elements.jpg',
    ],
    label: 'A3',
    description: 'Es un papel excelente no solo para decoupage sino también para Mix Media, técnicas mixtas y manualidades',
    selected: false,
  },
  {
    id: 658,
    name: 'Papel de Arroz A4 Sea Life Elements',
    price: '2.50',
    images: [
      'https://www.artesaniasmontejo.com/23087-30556-large_default/Rice-Paper-A4-Sea-Life-elements.jpg',
    ],
    label: 'A4',
    description: 'Es un papel excelente no solo para decoupage sino también para Mix Media, técnicas mixtas y manualidades',
    selected: false,
  },
  {
    id: 659,
    name: 'Papel de Arroz A3 Coral Reef Mini Cards',
    price: '3.50',
    images: [
      'https://www.artesaniasmontejo.com/23084-30553-large_default/Rice-Paper-A4-Coral-Reef-mini-cards.jpg',
    ],
    label: 'A3',
    description: 'Es un papel excelente no solo para decoupage sino también para Mix Media, técnicas mixtas y manualidades',
    selected: false,
  },
  {
    id: 660,
    name: 'Papel de Arroz A4 Coral Reef Mini Cards',
    price: '2.50',
    images: [
      'https://www.artesaniasmontejo.com/23084-30553-large_default/Rice-Paper-A4-Coral-Reef-mini-cards.jpg',
    ],
    label: 'A4',
    description: 'Es un papel excelente no solo para decoupage sino también para Mix Media, técnicas mixtas y manualidades',
    selected: false,
  },
  {
    id: 661,
    name: 'Papel de Arroz A3 Mechanical Seahorse',
    price: '3.50',
    images: [
      'https://www.artesaniasmontejo.com/23083-30552-large_default/Rice-Paper-A4-Mechanical-Seahorse.jpg',
    ],
    label: 'A3',
    description: 'Es un papel excelente no solo para decoupage sino también para Mix Media, técnicas mixtas y manualidades',
    selected: false,
  },
  {
    id: 662,
    name: 'Papel de Arroz A4 Mechanical Seahorse',
    price: '2.50',
    images: [
      'https://www.artesaniasmontejo.com/23083-30552-large_default/Rice-Paper-A4-Mechanical-Seahorse.jpg',
    ],
    label: 'A4',
    description: 'Es un papel excelente no solo para decoupage sino también para Mix Media, técnicas mixtas y manualidades',
    selected: false,
  },
  {
    id: 663,
    name: 'Papel de Arroz A3 Spring Time Elements',
    price: '3.50',
    images: [
      'https://www.artesaniasmontejo.com/23080-30549-large_default/rice-paper-a4-spring-time-elements.jpg',
    ],
    label: 'A3',
    description: 'Es un papel excelente no solo para decoupage sino también para Mix Media, técnicas mixtas y manualidades',
    selected: false,
  },
  {
    id: 664,
    name: 'Papel de Arroz A4 Spring Time Elements',
    price: '2.50',
    images: [
      'https://www.artesaniasmontejo.com/23080-30549-large_default/rice-paper-a4-spring-time-elements.jpg',
    ],
    label: 'A4',
    description: 'Es un papel excelente no solo para decoupage sino también para Mix Media, técnicas mixtas y manualidades',
    selected: false,
  },
  {
    id: 665,
    name: 'Papel de Arroz A3 Euphoria',
    price: '3.50',
    images: [
      'https://www.artesaniasmontejo.com/23082-30551-large_default/rice-paper-a4-euphoria.jpg',
    ],
    label: 'A3',
    description: 'Es un papel excelente no solo para decoupage sino también para Mix Media, técnicas mixtas y manualidades',
    selected: false,
  },
  {
    id: 666,
    name: 'Papel de Arroz A4 Euphoria',
    price: '2.50',
    images: [
      'https://www.artesaniasmontejo.com/23082-30551-large_default/rice-paper-a4-euphoria.jpg',
    ],
    label: 'A4',
    description: 'Es un papel excelente no solo para decoupage sino también para Mix Media, técnicas mixtas y manualidades',
    selected: false,
  },
  {
    id: 667,
    name: 'Papel de Arroz A3 Flower Shop Cards',
    price: '3.50',
    images: [
      'https://www.artesaniasmontejo.com/23079-30548-large_default/Rice-Paper-A4-Flower-shop-cards.jpg',
    ],
    label: 'A3',
    description: 'Es un papel excelente no solo para decoupage sino también para Mix Media, técnicas mixtas y manualidades',
    selected: false,
  },
  {
    id: 668,
    name: 'Papel de Arroz A4 Flower Shop Cards',
    price: '2.50',
    images: [
      'https://www.artesaniasmontejo.com/23079-30548-large_default/Rice-Paper-A4-Flower-shop-cards.jpg',
    ],
    label: 'A4',
    description: 'Es un papel excelente no solo para decoupage sino también para Mix Media, técnicas mixtas y manualidades',
    selected: false,
  },
  {
    id: 669,
    name: 'Papel de Arroz A3 Little Flowers Shops',
    price: '3.50',
    images: [
      'https://www.artesaniasmontejo.com/23074-30543-large_default/rice-paper-a4-little-flowers-shops.jpg',
    ],
    label: 'A3',
    description: 'Es un papel excelente no solo para decoupage sino también para Mix Media, técnicas mixtas y manualidades',
    selected: false,
  },
  {
    id: 670,
    name: 'Papel de Arroz A4 Little Flowers Shops',
    price: '2.50',
    images: [
      'https://www.artesaniasmontejo.com/23074-30543-large_default/rice-paper-a4-little-flowers-shops.jpg',
    ],
    label: 'A4',
    description: 'Es un papel excelente no solo para decoupage sino también para Mix Media, técnicas mixtas y manualidades',
    selected: false,
  },
  {
    id: 671,
    name: 'Papel de Arroz A3 Imperial Landscape',
    price: '3.50',
    images: [
      'https://www.artesaniasmontejo.com/23071-30540-large_default/Rice-Paper-A4-Imperial-Landscape.jpg',
    ],
    label: 'A3',
    description: 'Es un papel excelente no solo para decoupage sino también para Mix Media, técnicas mixtas y manualidades',
    selected: false,
  },
  {
    id: 672,
    name: 'Papel de Arroz A4 Imperial Landscape',
    price: '2.50',
    images: [
      'https://www.artesaniasmontejo.com/23071-30540-large_default/Rice-Paper-A4-Imperial-Landscape.jpg',
    ],
    label: 'A4',
    description: 'Es un papel excelente no solo para decoupage sino también para Mix Media, técnicas mixtas y manualidades',
    selected: false,
  },
  {
    id: 673,
    name: 'Papel de Arroz A3 Oriental Enchantment',
    price: '3.50',
    images: [
      'https://www.artesaniasmontejo.com/23068-30537-large_default/Rice-Paper-A4-Oriental-Enchantment.jpg',
    ],
    label: 'A3',
    description: 'Es un papel excelente no solo para decoupage sino también para Mix Media, técnicas mixtas y manualidades',
    selected: false,
  },
  {
    id: 674,
    name: 'Papel de Arroz A4 Oriental Enchantment',
    price: '2.50',
    images: [
      'https://www.artesaniasmontejo.com/23068-30537-large_default/Rice-Paper-A4-Oriental-Enchantment.jpg',
    ],
    label: 'A4',
    description: 'Es un papel excelente no solo para decoupage sino también para Mix Media, técnicas mixtas y manualidades',
    selected: false,
  },
  {
    id: 675,
    name: 'Papel de Arroz A3 Japanese Tradition',
    price: '3.50',
    images: [
      'https://www.artesaniasmontejo.com/23064-30533-large_default/Rice-Paper-A4-Japanese-tradition.jpg',
    ],
    label: 'A3',
    description: 'Es un papel excelente no solo para decoupage sino también para Mix Media, técnicas mixtas y manualidades',
    selected: false,
  },
  {
    id: 676,
    name: 'Papel de Arroz A4 Japanese Tradition',
    price: '2.50',
    images: [
      'https://www.artesaniasmontejo.com/23064-30533-large_default/Rice-Paper-A4-Japanese-tradition.jpg',
    ],
    label: 'A4',
    description: 'Es un papel excelente no solo para decoupage sino también para Mix Media, técnicas mixtas y manualidades',
    selected: false,
  },
  {
    id: 677,
    name: 'Papel de Arroz A3 The Dragon',
    price: '3.50',
    images: [
      'https://www.artesaniasmontejo.com/23063-30532-large_default/Rice-Paper-A4-The-Dragon.jpg',
    ],
    label: 'A3',
    description: 'Es un papel excelente no solo para decoupage sino también para Mix Media, técnicas mixtas y manualidades',
    selected: false,
  },
  {
    id: 678,
    name: 'Papel de Arroz A4 The Dragon',
    price: '2.50',
    images: [
      'https://www.artesaniasmontejo.com/23063-30532-large_default/Rice-Paper-A4-The-Dragon.jpg',
    ],
    label: 'A4',
    description: 'Es un papel excelente no solo para decoupage sino también para Mix Media, técnicas mixtas y manualidades',
    selected: false,
  },
  {
    id: 679,
    name: 'Papel de Arroz A3 Piuma Provence',
    price: '3.50',
    images: [
      'https://www.artesaniasmontejo.com/22905-30330-large_default/rice-paper-a4-piuma-provence.jpg',
    ],
    label: 'A3',
    description: 'Es un papel excelente no solo para decoupage sino también para Mix Media, técnicas mixtas y manualidades',
    selected: false,
  },
  {
    id: 680,
    name: 'Papel de Arroz A4 Piuma Provence',
    price: '2.50',
    images: [
      'https://www.artesaniasmontejo.com/22905-30330-large_default/rice-paper-a4-piuma-provence.jpg',
    ],
    label: 'A4',
    description: 'Es un papel excelente no solo para decoupage sino también para Mix Media, técnicas mixtas y manualidades',
    selected: false,
  },
  {
    id: 681,
    name: 'Papel de Arroz A3 Piuma Wedding Elements',
    price: '3.50',
    images: [
      'https://www.artesaniasmontejo.com/22676-29944-large_default/rice-paper-a4-piuma-wedding-elements.jpg',
    ],
    label: 'A3',
    description: 'Es un papel excelente no solo para decoupage sino también para Mix Media, técnicas mixtas y manualidades',
    selected: false,
  },
  {
    id: 682,
    name: 'Papel de Arroz A4 Piuma Wedding Elements',
    price: '2.50',
    images: [
      'https://www.artesaniasmontejo.com/22676-29944-large_default/rice-paper-a4-piuma-wedding-elements.jpg',
    ],
    label: 'A4',
    description: 'Es un papel excelente no solo para decoupage sino también para Mix Media, técnicas mixtas y manualidades',
    selected: false,
  },
  {
    id: 683,
    name: 'Papel de Arroz A3 Piuma Floral Elegance',
    price: '3.50',
    images: [
      'https://www.artesaniasmontejo.com/22667-29935-large_default/rice-paper-a4-piuma-floral-elegance.jpg',
    ],
    label: 'A3',
    description: 'Es un papel excelente no solo para decoupage sino también para Mix Media, técnicas mixtas y manualidades',
    selected: false,
  },
  {
    id: 684,
    name: 'Papel de Arroz A4 Piuma Floral Elegance',
    price: '2.50',
    images: [
      'https://www.artesaniasmontejo.com/22667-29935-large_default/rice-paper-a4-piuma-floral-elegance.jpg',
    ],
    label: 'A4',
    description: 'Es un papel excelente no solo para decoupage sino también para Mix Media, técnicas mixtas y manualidades',
    selected: false,
  },




];

// Define el rango de precios mínimo y máximo de tus productos
const precioMinimo = 0;
const precioMaximo = 20;

export const Tienda3PapelesCiaoBella = () => {
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
          <h2>Papel de Arroz Ciao Bella🎨</h2>

          <h3>Es un papel excelente no solo para decoupage sino también para Mix Media, técnicas mixtas y manualidades.</h3>
          <p> El papel es muy ligero pero resistente y la técnica de impresión, fabricada íntegramente en Italia, lo convierte en un producto único por diseño y calidad. Hay un lado ligeramente liso y un lado suave al tacto.</p>

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
