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
    id: 462,
    name: 'Universal Transfer CADENCE 25x35cm UTC020',
    price: '5.90',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/e1hpq165eo6vjj2l7ave1/universal-transfer-cadence-25x35cm-utc020.jpg?rlkey=ryay5paui84n9mbg8pcykmxxq&st=1tg69l10&dl=0',
    ],
    label: '25x35cm',
    description: 'Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.',
    selected: false,
  },
  {
    id: 463,
    name: 'Universal Transfer CADENCE 25x35cm UTC016',
    price: '5.90',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/eq0xicjcojnr9loos70v0/universal-transfer-cadence-25x35cm-utc016.jpg?rlkey=704uc2qce059h0ng6zd50rzob&st=6m2ivicx&dl=0',
    ],
    label: '25x35cm',
    description: 'Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.',
    selected: false,
  },
  {
    id: 464,
    name: 'Universal Transfer CADENCE 25x35cm UTC013',
    price: '5.90',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/32amkflcrnpy2udmij6px/universal-transfer-cadence-25x35cm-utc013.jpg?rlkey=xhe0zlebythnmk9w43q6ag21w&st=sque2848&dl=0',
    ],
    label: '25x35cm',
    description: 'Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.',
    selected: false,
  },
  {
    id: 465,
    name: 'Universal Transfer CADENCE 25x35cm UTC008',
    price: '5.90',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/hrhzy5y2z5ocr0obdwhah/universal-transfer-cadence-25x35cm-utc008.jpg?rlkey=hqk32lwdonlq0udu0n9k7dryc&st=sjadytfi&dl=0',
    ],
    label: '25x35cm',
    description: 'Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.',
    selected: false,
  },
  {
    id: 466,
    name: 'Universal Transfer CADENCE 25x35cm UTC003',
    price: '5.90',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/i5fw9ir2ye3k3x2hf4qyl/universal-transfer-cadence-25x35cm-utc003.jpg?rlkey=zy5pb0kipge6o59rphg6z64xj&st=emo86ve6&dl=0',
    ],
    label: '25x35cm',
    description: 'Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.',
    selected: false,
  },
  {
    id: 467,
    name: 'Universal Transfer CADENCE 25x35cm UTC001',
    price: '5.90',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/293olmammm6rrgg59l6is/universal-transfer-cadence-25x35cm-utc001.jpg?rlkey=bnwo99s6pkkhkptd07m8soss8&st=ttg5ym00&dl=0',
    ],
    label: '25x35cm',
    description: 'Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.',
    selected: false,
  },
  {
    id: 468,
    name: 'Cubiertos Transfers HOME DECOR',
    price: '5.90',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/tghz2z8vbn0bio6tz54zd/transfers-home-decor-cadence.jpg?rlkey=oespjx6gth5778h85pd32j5e2&st=gx7hg9jz&dl=0',
    ],
    label: '25x35cm',
    description: 'Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.',
    selected: false,
  }, 
  {
    id: 469,
    name: 'Tea Room Transfers HOME DECOR',
    price: '5.90',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/xgg1opv4cc2luppldkg7x/transfers-home-decor-cadence-1.jpg?rlkey=cls4sc69i1uvlpbyqcfum4zwj&st=9fy1o9pc&dl=0',
    ],
    label: '25x35cm',
    description: 'Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.',
    selected: false,
  },
  {
    id: 470,
    name: 'Eau de Cologne Transfers HOME DECOR',
    price: '5.90',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/j2vtv3vidrukgmk3z14wj/transfers-home-decor-cadence-2.jpg?rlkey=kiwk6a4muhieztllgynjzbgwi&st=nav40491&dl=0',
    ],
    label: '25x35cm',
    description: 'Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.',
    selected: false,
  },
  {
    id: 471,
    name: 'Founderie Transfers HOME DECOR',
    price: '5.90',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/43xam7hz9r7z02icq31f4/transfers-home-decor-cadence-3.jpg?rlkey=xyswwdro49h08a947r5yad4q4&st=ohzf8ak7&dl=0',
    ],
    label: '25x35cm',
    description: 'Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.',
    selected: false,
  },
  {
    id: 472,
    name: 'Bienvenue Transfers HOME DECOR',
    price: '5.90',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/i1qbop0zczqrw5pp2gkmm/transfers-home-decor-cadence-4.jpg?rlkey=h2ajf8nbrylcyybqmj273j216&st=dz4yie44&dl=0',
    ],
    label: '25x35cm',
    description: 'Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.',
    selected: false,
  },
  {
    id: 473,
    name: 'La Libellule Transfers HOME DECOR',
    price: '5.90',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/i8ggo9iljjyr05rhti2o2/transfers-home-decor-cadence-5.jpg?rlkey=wmuqo1n402q6jykxmrnlfjoqg&st=tb7oqsr7&dl=0',
    ],
    label: '25x35cm',
    description: 'Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.',
    selected: false,
  },
  {
    id: 474,
    name: 'Tea Time Transfers HOME DECOR',
    price: '5.90',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/br1771x4jnt63nwzzb70b/transfers-home-decor-cadence-6.jpg?rlkey=6wo3dghf0r53fwnxdoaf8b4yy&st=1dq4rz7q&dl=0',
    ],
    label: '25x35cm',
    description: 'Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.',
    selected: false,
  },
  {
    id: 475,
    name: 'Le Petite Marmite Transfers HOME DECOR',
    price: '5.90',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/bto7kpr246ky9hvbbyieu/transfers-home-decor-cadence-7.jpg?rlkey=a0cdtpl4raxnp5lfmyzcxnskq&st=yrrc3d2u&dl=0',
    ],
    label: '25x35cm',
    description: 'Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.',
    selected: false,
  },
  {
    id: 476,
    name: 'Le Poulet Transfers HOME DECOR',
    price: '5.90',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/xh8s4s0wzcycxfy9xw9i4/transfers-home-decor-cadence-8.jpg?rlkey=04ko7kyxjn4az0q5edpk9ziir&st=sxxuf30a&dl=0',
    ],
    label: '25x35cm',
    description: 'Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.',
    selected: false,
  },
  {
    id: 477,
    name: 'Tea Transfers HOME DECOR',
    price: '5.90',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/14eyfe7buwhdpw1i3bems/transfers-home-decor-cadence-9.jpg?rlkey=380y7nos2pzgqgnex607l337o&st=m4b2oabp&dl=0',
    ],
    label: '25x35cm',
    description: 'Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.',
    selected: false,
  },
  {
    id: 478,
    name: 'Lingerier Corsets Transfers HOME DECOR',
    price: '5.90',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/y3peaf2hs3beao6qeram2/transfers-home-decor-cadence-10.jpg?rlkey=9olb37da8ofsfn67redixup6n&st=zyzhpitn&dl=0',
    ],
    label: '25x35cm',
    description: 'Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.',
    selected: false,
  },
  {
    id: 479,
    name: 'Salle de Bain Transfers HOME DECOR',
    price: '5.90',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/kn2pbwpekeca3pniyno4t/transfers-home-decor-cadence-11.jpg?rlkey=kjlr86tyoa69cblrs1k3wey5e&st=4npojal9&dl=0',
    ],
    label: '25x35cm',
    description: 'Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.',
    selected: false,
  },
  {
    id: 480,
    name: 'Coutellerie Transfers HOME DECOR',
    price: '5.90',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/6334mvr8gqk530l3smvu0/transfers-home-decor-cadence-12.jpg?rlkey=2shvm1nqxmzeqhx8b24wyqhg2&st=nsagmdnn&dl=0',
    ],
    label: '25x35cm',
    description: 'Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.',
    selected: false,
  },
  {
    id: 481,
    name: 'Mademoiselle Transfers HOME DECOR',
    price: '5.90',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/2iybdrabusp64k9qx73c9/transfers-home-decor-cadence-13.jpg?rlkey=b69y8cup8qwrgfbdr6jtealmn&st=dd8qzs4v&dl=0',
    ],
    label: '25x35cm',
    description: 'Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.',
    selected: false,
  },
  
  
  
  
  
  



  





];

// Define el rango de precios mínimo y máximo de tus productos
const precioMinimo = 0;
const precioMaximo = 20;

export const Tienda3TransfersHomeDecor = () => {
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
          <h2>Transfers Home Decor🎨</h2>

          <h3>Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración.
            <br></br> <span id='materiales'>MODO DE EMPLEO</span> <br></br> Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.
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
