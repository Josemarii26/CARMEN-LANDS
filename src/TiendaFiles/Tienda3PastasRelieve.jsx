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
    id: 497,
    name: 'Pasta de Relieve CRAQUELADOR Cadence 150ml.',
    price: '10.95',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/jddy3lhxw8ekubq7ultcs/relief-paste-cracle-150-ml.jpg?rlkey=8wwff6wt2h27s79ptwb14tmux&st=lzlv4tli&dl=0',
    ],
    label: '150ml',
    description: 'Esta es una Pasta de Relieve blanca con base de agua, dimensional y de un sólo componente que crea un efecto crackelado cuando se seca al aire. Ideal en superficies porosas. Necesita el Crackle Primer en superficies lisas. Se puede pintar y tintar con pinturas acrílicas Cadence. Para su uso de un sólo componente, la superficie debería de estar pintada. Acabado permanente. Puede ser secado con secador. La pasta se empezará a agrietas conforme se seca, la estructura del crackelado y el tamaño de sus grietas dependerá del grosor de la pasta aplicada. Para grietas más grandes aplique el Primer y una capa gruesa de pasta; y para grietas más finas aplique una capa más delgada.',
    selected: false,
  },
  {
    id: 498,
    name: 'Orquídea Oscuro DORA PASTE RELIEF 150ml.',
    price: '9.10',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/yenx53gv7jdmz3v6my6q5/dora-paste-relief-oro-antiguo.jpg?rlkey=7auinkt5t7d6a7loqjk0bz8cw&st=e7ajtth2&dl=0',
    ],
    label: '150ml',
    description: 'Pasta de relieve de alta calidad CADENCE, para crear texturas dimensionales con efectos metalizados. Con base de agua. Muy facil de usar con pincel o esponja y stencils. Limpieza con agua y jabón.',
    selected: false,
  },
  {
    id: 499,
    name: 'Plata DORA PASTE RELIEF 150ml.',
    price: '9.10',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/ea1lhy8jmw6sb8tcopwcw/dora-paste-relief-oro-antiguo-1.jpg?rlkey=irsgfmhptp304zlt62up6w77s&st=8wuba0qx&dl=0',
    ],
    label: '150ml',
    description: 'Pasta de relieve de alta calidad CADENCE, para crear texturas dimensionales con efectos metalizados. Con base de agua. Muy facil de usar con pincel o esponja y stencils. Limpieza con agua y jabón.',
    selected: false,
  },
  {
    id: 500,
    name: 'Antracita DORA PASTE RELIEF 150ml.',
    price: '9.10',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/hmlou73y7af1jtkhqjawc/dora-paste-relief-oro-antiguo-2.jpg?rlkey=zhusk0470db175yd93idq611i&st=44xywsxy&dl=0',
    ],
    label: '150ml',
    description: 'Pasta de relieve de alta calidad CADENCE, para crear texturas dimensionales con efectos metalizados. Con base de agua. Muy facil de usar con pincel o esponja y stencils. Limpieza con agua y jabón.',
    selected: false,
  },
  {
    id: 501,
    name: 'Platino DORA PASTE RELIEF 150ml.',
    price: '9.10',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/er8j6b0bg53kiq9rrd6ei/dora-paste-relief-oro-antiguo-3.jpg?rlkey=kj6s3lsjiyvjekecvc9u2aqoy&st=71ud226u&dl=0',
    ],
    label: '150ml',
    description: 'Pasta de relieve de alta calidad CADENCE, para crear texturas dimensionales con efectos metalizados. Con base de agua. Muy facil de usar con pincel o esponja y stencils. Limpieza con agua y jabón.',
    selected: false,
  },
  {
    id: 502,
    name: 'Naranja DORA PASTE RELIEF 150ml.',
    price: '9.10',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/nqo3osemxnu997c6gbd8v/dora-paste-relief-negro.jpg?rlkey=cwg191p1me0mfjk6pq09rlji2&st=frgixsba&dl=0',
    ],
    label: '150ml',
    description: 'Pasta de relieve de alta calidad CADENCE, para crear texturas dimensionales con efectos metalizados. Con base de agua. Muy facil de usar con pincel o esponja y stencils. Limpieza con agua y jabón.',
    selected: false,
  },
  {
    id: 503,
    name: 'Negro DORA PASTE RELIEF 150ml.',
    price: '9.10',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/nqo3osemxnu997c6gbd8v/dora-paste-relief-negro.jpg?rlkey=cwg191p1me0mfjk6pq09rlji2&st=frgixsba&dl=0',
    ],
    label: '150ml',
    description: 'Pasta de relieve de alta calidad CADENCE, para crear texturas dimensionales con efectos metalizados. Con base de agua. Muy facil de usar con pincel o esponja y stencils. Limpieza con agua y jabón.',
    selected: false,
  },
  {
    id: 504,
    name: 'Anquerita Oscuro DORA PASTE RELIEF 150ml.',
    price: '9.10',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/a2dw5pjlexdocmdf7n2u1/dora-paste-relief-oro.jpg?rlkey=x8bcaf2y6ix4hjoqeyim76gdc&st=2zbsvy40&dl=0',
    ],
    label: '150ml',
    description: 'Pasta de relieve de alta calidad CADENCE, para crear texturas dimensionales con efectos metalizados. Con base de agua. Muy facil de usar con pincel o esponja y stencils. Limpieza con agua y jabón.',
    selected: false,
  },
  {
    id: 505,
    name: 'Oro DORA PASTE RELIEF 150ml.',
    price: '9.10',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/rz2y9tsblzgg3fahxxtbl/dora-paste-relief-oro-1.jpg?rlkey=2995xav7onzwzmak4a65d9j3b&st=3k2l8i33&dl=0',
    ],
    label: '150ml',
    description: 'Pasta de relieve de alta calidad CADENCE, para crear texturas dimensionales con efectos metalizados. Con base de agua. Muy facil de usar con pincel o esponja y stencils. Limpieza con agua y jabón.',
    selected: false,
  },
  {
    id: 506,
    name: 'Diamante DORA PASTE RELIEF 150ml.',
    price: '9.10',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/hos016pzjgbk6mj86mzu1/dora-paste-relief-diamante.jpg?rlkey=iz7nedjjqz34nm88dytxmarlq&st=u70ctl2r&dl=0',
    ],
    label: '150ml',
    description: 'Pasta de relieve de alta calidad CADENCE, para crear texturas dimensionales con efectos metalizados. Con base de agua. Muy facil de usar con pincel o esponja y stencils. Limpieza con agua y jabón.',
    selected: false,
  },
  {
    id: 507,
    name: 'Petróleo DORA PASTE RELIEF 150ml.',
    price: '9.10',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/i5n0ipcj11g32sjtc9qqg/dora-paste-relief-petroleo.jpg?rlkey=starpixa4u5kbibq8rb9e3wd2&st=sfzp6d2r&dl=0',
    ],
    label: '150ml',
    description: 'Pasta de relieve de alta calidad CADENCE, para crear texturas dimensionales con efectos metalizados. Con base de agua. Muy facil de usar con pincel o esponja y stencils. Limpieza con agua y jabón.',
    selected: false,
  },
  {
    id: 508,
    name: 'Malaquita DORA PASTE RELIEF 150ml.',
    price: '9.10',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/o8v80hllgeqeyd7t86eds/dora-paste-relief-malaquita.jpg?rlkey=k0p39xklzhfrhplue1fqvry0g&st=o758lx08&dl=0',
    ],
    label: '150ml',
    description: 'Pasta de relieve de alta calidad CADENCE, para crear texturas dimensionales con efectos metalizados. Con base de agua. Muy facil de usar con pincel o esponja y stencils. Limpieza con agua y jabón.',
    selected: false,
  },
  {
    id: 509,
    name: 'Oro Antiguo DORA PASTE RELIEF 150ml.',
    price: '9.10',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/i9ziftiwb3v6o0pqcksz2/dora-paste-relief-oro-antiguo-4.jpg?rlkey=r6ko6809ouw5t6k9gnlwki492&st=m2mwsfwp&dl=0',
    ],
    label: '150ml',
    description: 'Pasta de relieve de alta calidad CADENCE, para crear texturas dimensionales con efectos metalizados. Con base de agua. Muy facil de usar con pincel o esponja y stencils. Limpieza con agua y jabón.',
    selected: false,
  },
  
  {
    id: 510,
    name: 'Pasta de Relieve CLÁSICA Cadence 150ml.',
    price: '4.50',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/mh9of6i3njj5pbax2g47z/pasta-de-relieve-clasica-lisa-250-cadence.jpg?rlkey=j25yl7bxp0rrzx0ekou9t6j6n&st=songdigb&dl=0',
    ],
    label: '150ml',
    description: 'Pasta LISA para crear efectos dimensionales sobre objetos. Formula acrílica con base de agua, el tiempo de secado puede cambiar de acuerdo con el espesor de la pasta. Puede ser aplicada con una espátula, pincel o esponja. Aplicar sobre en superficies duras. Apto para trabajar con stencil y con patrones libres. Limpie los materiales usados con agua. Proteger de las heladas.',
    selected: false,
  },
  {
    id: 511,
    name: 'Pasta de Relieve FLEXIBLE Cadence 150ml.',
    price: '6.50',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/nkobztsrr8h2beczx4osm/pasta-de-relieve-flexible-cadence.jpg?rlkey=cx9baj2eamcasalovbuwhcqev&st=2vzvidwg&dl=0',
    ],
    label: '150ml',
    description: 'Pasta de relieve Cadence FLEXIBLE, satinada y suave con base de agua. Se puede aplicar en moldes decorativos blandos y se puede usar facilmente sobre superficies curvas. Esta pasta puede colorearse.',
    selected: false,
  },
  {
    id: 512,
    name: 'Pasta de Relieve CRISTAL Granulada Cadence 150ml.',
    price: '6.50',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/28og2df9ee2sar9e7cicx/pasta-de-relieve-cristal-granulada-cadence.jpg?rlkey=1nyc58ho5ay3kagi46rsl6gjm&st=2uegsypb&dl=0',
    ],
    label: '150ml',
    description: 'Pasta TRANSPARENTE GRANULADA para crear efectos dimensionales sobre objetos. Formula acrílica con base de agua, el tiempo de secado puede cambiar de acuerdo con el espesor de la pasta. Puede ser aplicada con una espátula, pincel o esponja. Aplicar sobre en superficies duras. Apto para trabajar con stencil y con patrones libres. Limpie los materiales usados con agua. Proteger de las heladas.',
    selected: false,
  },


  
















];

// Define el rango de precios mínimo y máximo de tus productos
const precioMinimo = 0;
const precioMaximo = 20;

export const Tienda3PastasRelieve = () => {
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
          <h2>Pastas de Relieve🎨</h2>

          <h3>Diferentes pastas de relieve básicas con efectos, incluyendo su creespondiente craquelador.</h3>


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
