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
    id: 760,
    name: 'Sapphire MAT METALLIC PAINT 50ml.',
    price: '3.75',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/kcjwa1v5046he5ea9xu3r/MATT-METALLIC-PAINT-50-ml-SAPPHIRE.jpg?rlkey=8hb1eww5urkt23swntnmvf0t5&st=mavyc86i&dl=0',
    ],
    label: '50 ml.',
    description: 'Aplicación sencilla: Simplemente usa un pincel o una esponja para dar color a tus objetos. Asegúrate de que la superficie esté limpia, seca y libre de polvo y grasa antes de pintar. Puedes aplicar una capa base con pintura acrílica de un color similar al de la pintura. La pintura seca en 2-4 horas y cura completamente en 24 horas.',
    selected: false,
  },
  {
    id: 761,
    name: 'Platinum MAT METALLIC PAINT 50ml.',
    price: '3.75',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/hade1x28x4v0mk378dk04/MATT-METALLIC-PAINT-50-ml-PLATINIUM.jpg?rlkey=8lgw0vtd3vfh95xybw0iklb55&st=ytsz9lf0&dl=0',
    ],
    label: '50 ml.',
    description: 'Aplicación sencilla: Simplemente usa un pincel o una esponja para dar color a tus objetos. Asegúrate de que la superficie esté limpia, seca y libre de polvo y grasa antes de pintar. Puedes aplicar una capa base con pintura acrílica de un color similar al de la pintura. La pintura seca en 2-4 horas y cura completamente en 24 horas.',
    selected: false,
  },
  {
    id: 762,
    name: 'Pearl MAT METALLIC PAINT 50ml.',
    price: '3.75',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/kgvzlf7n7dp8syi2hefh4/MATT-METALLIC-PAINT-50-ml-PEARL.jpg?rlkey=d6nroctgj3mt993qbmhf3z7un&st=pj7ugrxz&dl=0',
    ],
    label: '50 ml.',
    description: 'Aplicación sencilla: Simplemente usa un pincel o una esponja para dar color a tus objetos. Asegúrate de que la superficie esté limpia, seca y libre de polvo y grasa antes de pintar. Puedes aplicar una capa base con pintura acrílica de un color similar al de la pintura. La pintura seca en 2-4 horas y cura completamente en 24 horas.',
    selected: false,
  },
  {
    id: 763,
    name: 'Navy MAT METALLIC PAINT 50ml.',
    price: '3.75',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/5ee6h2p5zdm6chl1nunsa/MATT-METALLIC-PAINT-50-ml-NAVY.jpg?rlkey=t4gypuk4yoo1wxgep4crx6rmc&st=3y49w95w&dl=0',
    ],
    label: '50 ml.',
    description: 'Aplicación sencilla: Simplemente usa un pincel o una esponja para dar color a tus objetos. Asegúrate de que la superficie esté limpia, seca y libre de polvo y grasa antes de pintar. Puedes aplicar una capa base con pintura acrílica de un color similar al de la pintura. La pintura seca en 2-4 horas y cura completamente en 24 horas.',
    selected: false,
  },
  {
    id: 764,
    name: 'Maroon MAT METALLIC PAINT 50ml.',
    price: '3.75',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/j6ijvhj3lbnuj8vje84ms/MATT-METALLIC-PAINT-50-ml-MAROON.jpg?rlkey=p7iyn5m0g82lpj0sfdgugjase&st=2zf8fkfg&dl=0',
    ],
    label: '50 ml.',
    description: 'Aplicación sencilla: Simplemente usa un pincel o una esponja para dar color a tus objetos. Asegúrate de que la superficie esté limpia, seca y libre de polvo y grasa antes de pintar. Puedes aplicar una capa base con pintura acrílica de un color similar al de la pintura. La pintura seca en 2-4 horas y cura completamente en 24 horas.',
    selected: false,
  },
  {
    id: 765,
    name: 'Emerald MAT METALLIC PAINT 50ml.',
    price: '3.75',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/6zrt4jeqxe829k4c9h6m7/MATT-METALLIC-PAINT-50-ml-EMERALD.jpg?rlkey=xukw4neflbqwjw9bs578fupu8&st=44le0ufe&dl=0',
    ],
    label: '50 ml.',
    description: 'Aplicación sencilla: Simplemente usa un pincel o una esponja para dar color a tus objetos. Asegúrate de que la superficie esté limpia, seca y libre de polvo y grasa antes de pintar. Puedes aplicar una capa base con pintura acrílica de un color similar al de la pintura. La pintura seca en 2-4 horas y cura completamente en 24 horas.',
    selected: false,
  },
  {
    id: 766,
    name: 'Copper MAT METALLIC PAINT 50ml.',
    price: '3.75',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/4uc98ha271qoltsskhbbn/MATT-METALLIC-PAINT-50-ml-COPPER.jpg?rlkey=5aqhox10ndy5vvyu5o7p5xku4&st=th51zo59&dl=0',
    ],
    label: '50 ml.',
    description: 'Aplicación sencilla: Simplemente usa un pincel o una esponja para dar color a tus objetos. Asegúrate de que la superficie esté limpia, seca y libre de polvo y grasa antes de pintar. Puedes aplicar una capa base con pintura acrílica de un color similar al de la pintura. La pintura seca en 2-4 horas y cura completamente en 24 horas.',
    selected: false,
  },
  {
    id: 767,
    name: 'Champagne MAT METALLIC PAINT 50ml.',
    price: '3.75',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/qedr0blz8az3yevh0w234/MATT-METALLIC-PAINT-50-ml-CHAMPAGNE.jpg?rlkey=bfnjsgem6wneucz1ksl2b404m&st=gyj9cpo6&dl=0',
    ],
    label: '50 ml.',
    description: 'Aplicación sencilla: Simplemente usa un pincel o una esponja para dar color a tus objetos. Asegúrate de que la superficie esté limpia, seca y libre de polvo y grasa antes de pintar. Puedes aplicar una capa base con pintura acrílica de un color similar al de la pintura. La pintura seca en 2-4 horas y cura completamente en 24 horas.',
    selected: false,
  },
  {
    id: 768,
    name: 'Brown Copper MAT METALLIC PAINT 50ml.',
    price: '3.75',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/5qnc6aoxbtr1rxsy8vkc5/MATT-METALLIC-PAINT-50-ml-BROWN-COPPER.jpg?rlkey=r4bg5ruvvn5t5455kz6q99og6&st=9g57xbqn&dl=0',
    ],
    label: '50 ml.',
    description: 'Aplicación sencilla: Simplemente usa un pincel o una esponja para dar color a tus objetos. Asegúrate de que la superficie esté limpia, seca y libre de polvo y grasa antes de pintar. Puedes aplicar una capa base con pintura acrílica de un color similar al de la pintura. La pintura seca en 2-4 horas y cura completamente en 24 horas.',
    selected: false,
  },
  {
    id: 769,
    name: 'Black MAT METALLIC PAINT 50ml.',
    price: '3.75',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/qt3p3iz1e4usgkn6oky80/MATT-METALLIC-PAINT-50-ml-BLACK.jpg?rlkey=t4ycqa8uu7pyqq1voquqhuzpo&st=p576gtvf&dl=0',
    ],
    label: '50 ml.',
    description: 'Aplicación sencilla: Simplemente usa un pincel o una esponja para dar color a tus objetos. Asegúrate de que la superficie esté limpia, seca y libre de polvo y grasa antes de pintar. Puedes aplicar una capa base con pintura acrílica de un color similar al de la pintura. La pintura seca en 2-4 horas y cura completamente en 24 horas.',
    selected: false,
  },
  {
    id: 770,
    name: 'Antique Silver MAT METALLIC PAINT 50ml.',
    price: '3.75',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/qttzsv49m7y9zaupblmko/MATT-METALLIC-PAINT-50-ml-ANTIQUE-SILVER.jpg?rlkey=vuf5jy4m17xn9dw8pq98g6kbn&st=29r4d8ck&dl=0',
    ],
    label: '50 ml.',
    description: 'Aplicación sencilla: Simplemente usa un pincel o una esponja para dar color a tus objetos. Asegúrate de que la superficie esté limpia, seca y libre de polvo y grasa antes de pintar. Puedes aplicar una capa base con pintura acrílica de un color similar al de la pintura. La pintura seca en 2-4 horas y cura completamente en 24 horas.',
    selected: false,
  },
  {
    id: 771,
    name: 'Antique Red MAT METALLIC PAINT 50ml.',
    price: '3.75',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/gck7o9kqpc1fkuw97vhue/MATT-METALLIC-PAINT-50-ml-ANTIQUE-RED.jpg?rlkey=6rf0h8xzloghabtiuv6076kcy&st=zarw8kfl&dl=0',
    ],
    label: '50 ml.',
    description: 'Aplicación sencilla: Simplemente usa un pincel o una esponja para dar color a tus objetos. Asegúrate de que la superficie esté limpia, seca y libre de polvo y grasa antes de pintar. Puedes aplicar una capa base con pintura acrílica de un color similar al de la pintura. La pintura seca en 2-4 horas y cura completamente en 24 horas.',
    selected: false,
  },
  {
    id: 772,
    name: 'Antique Purple MAT METALLIC PAINT 50ml.',
    price: '3.75',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/gp04ifzxqn1n9y10d3fq7/MATT-METALLIC-PAINT-50-ml-ANTIQUE-PURPLE.jpg?rlkey=8o7979ox6q3fugtn6xmn92zyy&st=9mxi6cly&dl=0',
    ],
    label: '50 ml.',
    description: 'Aplicación sencilla: Simplemente usa un pincel o una esponja para dar color a tus objetos. Asegúrate de que la superficie esté limpia, seca y libre de polvo y grasa antes de pintar. Puedes aplicar una capa base con pintura acrílica de un color similar al de la pintura. La pintura seca en 2-4 horas y cura completamente en 24 horas.',
    selected: false,
  },
  {
    id: 773,
    name: 'Antique Olive MAT METALLIC PAINT 50ml.',
    price: '3.75',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/epz1a76fvx6gj213or1pk/MATT-METALLIC-PAINT-50-ml-ANTIQUE-OLIVE.jpg?rlkey=dqbb3pvih8kvkw5jqfaymy03o&st=2krz4j4y&dl=0',
    ],
    label: '50 ml.',
    description: 'Aplicación sencilla: Simplemente usa un pincel o una esponja para dar color a tus objetos. Asegúrate de que la superficie esté limpia, seca y libre de polvo y grasa antes de pintar. Puedes aplicar una capa base con pintura acrílica de un color similar al de la pintura. La pintura seca en 2-4 horas y cura completamente en 24 horas.',
    selected: false,
  },
  {
    id: 774,
    name: 'Antique Green MAT METALLIC PAINT 50ml.',
    price: '3.75',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/nmf7ce8eob8amqnwaaqqs/MATT-METALLIC-PAINT-50-ml-ANTIQUE-GREEN.jpg?rlkey=hb2f1wqwqm0qz3asgcmu96nm7&st=tryldq1l&dl=0',
    ],
    label: '50 ml.',
    description: 'Aplicación sencilla: Simplemente usa un pincel o una esponja para dar color a tus objetos. Asegúrate de que la superficie esté limpia, seca y libre de polvo y grasa antes de pintar. Puedes aplicar una capa base con pintura acrílica de un color similar al de la pintura. La pintura seca en 2-4 horas y cura completamente en 24 horas.',
    selected: false,
  },
  {
    id: 775,
    name: 'Antique Gold MAT METALLIC PAINT 50ml.',
    price: '3.75',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/09f9ebvg88ikknksltt8e/MATT-METALLIC-PAINT-50-ml-ANTIQUE-GOLD.jpg?rlkey=8aw75ixa2xrj3qxt5zschiujn&st=6vd7ico5&dl=0',
    ],
    label: '50 ml.',
    description: 'Aplicación sencilla: Simplemente usa un pincel o una esponja para dar color a tus objetos. Asegúrate de que la superficie esté limpia, seca y libre de polvo y grasa antes de pintar. Puedes aplicar una capa base con pintura acrílica de un color similar al de la pintura. La pintura seca en 2-4 horas y cura completamente en 24 horas.',
    selected: false,
  },
  {
    id: 776,
    name: 'Antique Anthracite MAT METALLIC PAINT 50ml.',
    price: '3.75',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/wu6l5e58ys94fjkr6tpw5/MATT-METALLIC-PAINT-50-ml-ANTIQUE-ANTHRACITE.jpg?rlkey=5soolk5urlahgwbmrsofpagwp&st=p9h2p407&dl=0',
    ],
    label: '50 ml.',
    description: 'Aplicación sencilla: Simplemente usa un pincel o una esponja para dar color a tus objetos. Asegúrate de que la superficie esté limpia, seca y libre de polvo y grasa antes de pintar. Puedes aplicar una capa base con pintura acrílica de un color similar al de la pintura. La pintura seca en 2-4 horas y cura completamente en 24 horas.',
    selected: false,
  },
  {
    id: 776,
    name: 'Set pan de oro liquido CADENCE',
    price: '10.85',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/u7qg0uwfkp81v2aex80tx/set-pan-de-oro-liquido-cadence.jpg?rlkey=mimltwzqa0qvbyu8p1mi1xeqx&st=3jb8l7nj&dl=0',
    ],
    label: '30+30 ml.',
    description: 'Set de pan de oro líquido Cadence de fácil uso en todo tipo de trabajos de restauración y decoración. Extremadamente vívido, brillante y cubriente. Consta de 2 botes de 30 ml, un polvo y un líquido. El polvo y el líquido se mezclan y aplican a la superficie deseada con la ayuda de un pincel. ',
    selected: false,
  },
  
  
  
  





];

// Define el rango de precios mínimo y máximo de tus productos
const precioMinimo = 0;
const precioMaximo = 18;

export const Tienda3PinturaMattMetallic = () => {
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

          <h2>Pinturas Matt Metallic Cadence🎨</h2>


          <h3>La Pintura Metálica Mate CADENCE añade un sofisticado acabado mate con un impresionante brillo metálico a tu decoración. Perfecta para proyectos decorativos, se aplica fácilmente gracias a su fórmula ligeramente texturizada, dándole a tus creaciones un toque personal y artesanal.</h3>

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
              
          </div><div className="price-slider">

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
