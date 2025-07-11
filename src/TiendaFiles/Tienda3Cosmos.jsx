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
    id: 361,
    name: 'Negro COSMOS MATT CERAMIC EFFECT 150ml.',
    price: '8.10',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/y1a651a0vf7ed2a6h7b3l/cosmos-matt-ceramic-effect-black-150-ml.jpg?rlkey=1sr9w119b5qgdcff72di814gf&st=dgu8cxrp&dl=0',
    ],
    label: '150 ml.',
    description: 'Pintura con base de agua, muy cubriente, que crea un efecto cerámico mate natural al aplicar en una superficie. Listo para su uso, sin disolventes. Fácil de aplicar con un pincel o esponja.',
    selected: false,
  },
  {
    id: 362,
    name: 'Marrón COSMOS MATT CERAMIC EFFECT 150ml.',
    price: '8.10',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/kb4rahmh9chq74vnxrvei/cosmos-matt-ceramic-effect-brown-150-ml.jpg?rlkey=xksxpzid4ohk3za5ovi9pwcys&st=b3wdvwnj&dl=0',
    ],
    label: '150 ml.',
    description: 'Pintura con base de agua, muy cubriente, que crea un efecto cerámico mate natural al aplicar en una superficie. Listo para su uso, sin disolventes. Fácil de aplicar con un pincel o esponja.',
    selected: false,
  },
  {
    id: 363,
    name: 'Marrón Oxidado COSMOS MATT CERAMIC EFFECT 150ml.', 
    price: '8.10',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/ti9qwnfbjryq0sxlo58j2/cosmos-matt-ceramic-effect-rusty-brown-150-ml.jpg?rlkey=eszmdbmn3ej5nxbit0kftd1ud&st=7dfyjosu&dl=0',
    ],
    label: '150 ml.',
    description: 'Pintura con base de agua, muy cubriente, que crea un efecto cerámico mate natural al aplicar en una superficie. Listo para su uso, sin disolventes. Fácil de aplicar con un pincel o esponja.',
    selected: false,
  },
  {
    id: 364,
    name: 'Cashmere COSMOS MATT CERAMIC EFFECT 150ml.',
    price: '8.10',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/lz1d4ranh8wvtbzshr597/cosmos-matt-ceramic-effect-cashmere-150-ml.jpg?rlkey=80tcs0xr7wfwkk9xeybjd19cv&st=sjsz1w3m&dl=0',
    ],
    label: '150 ml.',
    description: 'Pintura con base de agua, muy cubriente, que crea un efecto cerámico mate natural al aplicar en una superficie. Listo para su uso, sin disolventes. Fácil de aplicar con un pincel o esponja.',
    selected: false,
  },
  {
    id: 365,
    name: 'Verde Esmeralda COSMOS MATT CERAMIC EFFECT 150ml.',
    price: '8.10',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/nbxv4ksh3n77j1zpf3xdc/cosmos-matt-ceramic-effect-emerald-green-150-ml.jpg?rlkey=gnhnj2ec875gjw49gp4qodrhn&st=maxo4dq4&dl=0',
    ],
    label: '150 ml.',
    description: 'Pintura con base de agua, muy cubriente, que crea un efecto cerámico mate natural al aplicar en una superficie. Listo para su uso, sin disolventes. Fácil de aplicar con un pincel o esponja.',
    selected: false,
  },
  {
    id: 366,
    name: 'Gris Humo COSMOS MATT CERAMIC EFFECT 150ml.', 
    price: '8.10',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/0qkf9thmb73uegkt6zaq5/cosmos-matt-ceramic-effect-smoke-gray-150-ml.jpg?rlkey=7beb5vqaqzs6gvsesncynxldc&st=zkwa478a&dl=0',
    ],
    label: '150 ml.',
    description: 'Pintura con base de agua, muy cubriente, que crea un efecto cerámico mate natural al aplicar en una superficie. Listo para su uso, sin disolventes. Fácil de aplicar con un pincel o esponja.',
    selected: false,
  },
  {
    id: 367,
    name: 'Molde Verde COSMOS MATT CERAMIC EFFECT 150ml.',
    price: '8.10',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/rgjda0pbtv3n4gz79zcgz/cosmos-matt-ceramic-effect-mould-green-150-ml.jpg?rlkey=zjudgbzhpfw6azlyobql6tp2o&st=lc9mhyz1&dl=0',
    ],
    label: '150 ml.',
    description: 'Pintura con base de agua, muy cubriente, que crea un efecto cerámico mate natural al aplicar en una superficie. Listo para su uso, sin disolventes. Fácil de aplicar con un pincel o esponja.',
    selected: false,
  },
  {
    id: 368,
    name: 'Verde Menta COSMOS MATT CERAMIC EFFECT 150ml.',
    price: '8.10',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/lxjk2cuvx85bm6rraddl4/cosmos-matt-ceramic-effect-mint-green-150-ml.jpg?rlkey=6tz4tykx1r3uvqufimfb3akgb&st=sjejh244&dl=0',
    ],
    label: '150 ml.',
    description: 'Pintura con base de agua, muy cubriente, que crea un efecto cerámico mate natural al aplicar en una superficie. Listo para su uso, sin disolventes. Fácil de aplicar con un pincel o esponja.',
    selected: false,
  },
  {
    id: 369,
    name: 'Azul Claro COSMOS MATT CERAMIC EFFECT 150ml.', 
    price: '8.10',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/tegksauravry2h95pslxs/cosmos-matt-ceramic-effect-light-blue-150-ml.jpg?rlkey=42dl2n7ativq3gnxui5ue9c51&st=qznksjj9&dl=0',
    ],
    label: '150 ml.',
    description: 'Pintura con base de agua, muy cubriente, que crea un efecto cerámico mate natural al aplicar en una superficie. Listo para su uso, sin disolventes. Fácil de aplicar con un pincel o esponja.',
    selected: false,
  },
  {
    id: 370,
    name: 'Azul Ultramarino COSMOS MATT CERAMIC EFFECT 150ml.', 
    price: '8.10',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/jmgr0q7p6u65wspb8ypjj/cosmos-matt-ceramic-effect-ultramarine-blue-150-ml.jpg?rlkey=zw9gvvibfxpvdvs7zdnw1vsjm&st=o93hh6fu&dl=0',
    ],
    label: '150 ml.',
    description: 'Pintura con base de agua, muy cubriente, que crea un efecto cerámico mate natural al aplicar en una superficie. Listo para su uso, sin disolventes. Fácil de aplicar con un pincel o esponja.',
    selected: false,
  },
  {
    id: 371,
    name: 'Azul Real COSMOS MATT CERAMIC EFFECT 150ml.', 
    price: '8.10',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/7ye57wdrv8evzvbuxm7v9/cosmos-matt-ceramic-effect-royal-blue-150-ml.jpg?rlkey=otcd2xuteu1fobxtsdrix3b90&st=j0xh29ig&dl=0',
    ],
    label: '150 ml.',
    description: 'Pintura con base de agua, muy cubriente, que crea un efecto cerámico mate natural al aplicar en una superficie. Listo para su uso, sin disolventes. Fácil de aplicar con un pincel o esponja.',
    selected: false,
  },
  {
    id: 372,
    name: 'Manzana Caramelizada COSMOS MATT CERAMIC EFFECT  150ml.',
    price: '8.10',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/wkq9dv6b44v1lxxde7ed0/cosmos-matt-ceramic-effect-candy-apple-150-ml.jpg?rlkey=5mbnvhm5xmcw19546hgltag5a&st=bc85dmop&dl=0',
    ],
    label: '150 ml.',
    description: 'Pintura con base de agua, muy cubriente, que crea un efecto cerámico mate natural al aplicar en una superficie. Listo para su uso, sin disolventes. Fácil de aplicar con un pincel o esponja.',
    selected: false,
  },
  {
    id: 373,
    name: 'Naranja COSMOS MATT CERAMIC EFFECT 150ml.',
    price: '8.10',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/qjc2m479k91n9a5nzcod8/cosmos-matt-ceramic-effect-orange-150-ml.jpg?rlkey=bqt48lc2ku59g76zxxo8p6hvm&st=8z768z9t&dl=0',
    ],
    label: '150 ml.',
    description: 'Pintura con base de agua, muy cubriente, que crea un efecto cerámico mate natural al aplicar en una superficie. Listo para su uso, sin disolventes. Fácil de aplicar con un pincel o esponja.',
    selected: false,
  },
  {
    id: 374,
    name: 'Amarillo COSMOS MATT CERAMIC EFFECT 150ml.', 
    price: '8.10',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/c174md81ejvlloehgyp7d/cosmos-matt-ceramic-effect-yellow-150-ml.jpg?rlkey=ckctca66bw7ek4to3jj4cxrv2&st=4sv6gmlv&dl=0',
    ],
    label: '150 ml.',
    description: 'Pintura con base de agua, muy cubriente, que crea un efecto cerámico mate natural al aplicar en una superficie. Listo para su uso, sin disolventes. Fácil de aplicar con un pincel o esponja.',
    selected: false,
  },
  {
    id: 375,
    name: 'Ecru COSMOS MATT CERAMIC EFFECT 150ml.',
    price: '8.10',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/ozf90c24b4ltfbatr1fy6/cosmos-matt-ceramic-effect-ecru-150-ml.jpg?rlkey=ru07wq8ik78amn6isvm42uh9g&st=v9zpfk14&dl=0',
    ],
    label: '150 ml.',
    description: 'Pintura con base de agua, muy cubriente, que crea un efecto cerámico mate natural al aplicar en una superficie. Listo para su uso, sin disolventes. Fácil de aplicar con un pincel o esponja.',
    selected: false,
  },
  {
    id: 376,
    name: 'Blanco COSMOS MATT CERAMIC EFFECT 150ml.',
    price: '8.10',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/3c6x6tk074rhchyoiqmah/cosmos-matt-ceramic-effect-white-150-ml.jpg?rlkey=324s7kx2b866uved6t1x1v1uo&st=cqn8a00r&dl=0',
    ],
    label: '150 ml.',
    description: 'Pintura con base de agua, muy cubriente, que crea un efecto cerámico mate natural al aplicar en una superficie. Listo para su uso, sin disolventes. Fácil de aplicar con un pincel o esponja.',
    selected: false,
  },
  



  





];

// Define el rango de precios mínimo y máximo de tus productos
const precioMinimo = 0;
const precioMaximo = 20;

export const Tienda3Cosmos = () => {
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
          <h2>Pinturas COSMOS Cadence🎨</h2>

          <h3>Pintura con base de agua, muy cubriente, que crea un efecto cerámico mate natural al aplicar en una superficie. Listo para su uso, sin disolventes.
            <br></br>Fácil de aplicar con un pincel o esponja. <br></br>No tóxico. <br></br>

Certificado por la EN71 CE</h3>

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
