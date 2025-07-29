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
    "id": 1009,
    "name": "Textile Foil Leaf Cadence Silver 17cm x 5m",
    "price": "7.00",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/yzs0kx23bizo60pucyqc8/textile-foil-leaf-cadence-silver-17cm-x-5m.jpg?rlkey=rx6onrqwjrfgs3o0q6r0zkevy&st=6gziy1ng&dl=0"],
    "label": "17cm x 5m.",
    "description": "Foil para usar con el medium textil Heat Transfer Medium.",
    "selected": false
  },
  {
    "id": 1010,
    "name": "Textile Foil Leaf Cadence Silver 17cm x 1m",
    "price": "2.00",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/yzs0kx23bizo60pucyqc8/textile-foil-leaf-cadence-silver-17cm-x-5m.jpg?rlkey=rx6onrqwjrfgs3o0q6r0zkevy&st=6gziy1ng&dl=0"],
    "label": "17cm x 1m.",
    "description": "Foil para usar con el medium textil Heat Transfer Medium.",
    "selected": false
  },
  {
    "id": 1011,
    "name": "Textile Foil Leaf Cadence Rainbow HolgSilver 17cm x 5m",
    "price": "7.00",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/srae3js1wnyn7jstc56i7/textile-foil-leaf-cadence-rainbow-holgsilver-17x5.jpg?rlkey=pmvd1np8ki9rly3k0ov7x9qst&st=4vmt4xuq&dl=0"],
    "label": "17cm x 5m.",
    "description": "Foil para usar con el medium textil Heat Transfer Medium.",
    "selected": false
  },
  {
    "id": 1012,
    "name": "Textile Foil Leaf Cadence Rainbow HolgSilver 17cm x 1m",
    "price": "2.00",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/srae3js1wnyn7jstc56i7/textile-foil-leaf-cadence-rainbow-holgsilver-17x5.jpg?rlkey=pmvd1np8ki9rly3k0ov7x9qst&st=4vmt4xuq&dl=0"],
    "label": "17cm x 1m.",
    "description": "Foil para usar con el medium textil Heat Transfer Medium.",
    "selected": false
  },
  {
    "id": 1013,
    "name": "Textile Foil Leaf Cadence Rainbow HolgGold 17cm x 5m",
    "price": "7.00",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/mq85i99ttooirvipcc3nh/textile-foil-leaf-cadence-rainbow-holggold-17x5m.jpg?rlkey=x2p5bq4uf9ubtn1c07bojy7u3&st=xjo4ir0k&dl=0"],
    "label": "17cm x 5m.",
    "description": "Foil para usar con el medium textil Heat Transfer Medium.",
    "selected": false
  },
  {
    "id": 1014,
    "name": "Textile Foil Leaf Cadence Rainbow HolgGold 17cm x 1m",
    "price": "2.00",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/mq85i99ttooirvipcc3nh/textile-foil-leaf-cadence-rainbow-holggold-17x5m.jpg?rlkey=x2p5bq4uf9ubtn1c07bojy7u3&st=xjo4ir0k&dl=0"],
    "label": "17cm x 1m.",
    "description": "Foil para usar con el medium textil Heat Transfer Medium.",
    "selected": false
  },
  {
    "id": 1015,
    "name": "Textile Foil Leaf Cadence Rainbow HolgCooper 17cm x 5m",
    "price": "7.00",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/9mf37siybnc8660kgq90j/textile-foil-leaf-cadence-rainbow-holgcooper-17x5.jpg?rlkey=i0rdr2ms8gn0g04rs3iq1qya0&st=hh511aq4&dl=0"],
    "label": "17cm x 5m.",
    "description": "Foil para usar con el medium textil Heat Transfer Medium.",
    "selected": false
  },
  {
    "id": 1016,
    "name": "Textile Foil Leaf Cadence Rainbow HolgCooper 17cm x 1m",
    "price": "2.00",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/9mf37siybnc8660kgq90j/textile-foil-leaf-cadence-rainbow-holgcooper-17x5.jpg?rlkey=i0rdr2ms8gn0g04rs3iq1qya0&st=hh511aq4&dl=0"],
    "label": "17cm x 1m.",
    "description": "Foil para usar con el medium textil Heat Transfer Medium.",
    "selected": false
  },
  {
    "id": 1017,
    "name": "Textile Foil Leaf Cadence Leopar 17cm x 5m",
    "price": "7.00",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/rbj3byok0frguv97x1dbz/textile-foil-leaf-cadence-leopar-17cm-x-5m.jpg?rlkey=1rrha27ycsaq8txvj1ysbs7ud&st=gve8a3xp&dl=0"],
    "label": "17cm x 5m.",
    "description": "Foil para usar con el medium textil Heat Transfer Medium.",
    "selected": false
  },
  {
    "id": 1018,
    "name": "Textile Foil Leaf Cadence Leopar 17cm x 1m",
    "price": "2.00",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/rbj3byok0frguv97x1dbz/textile-foil-leaf-cadence-leopar-17cm-x-5m.jpg?rlkey=1rrha27ycsaq8txvj1ysbs7ud&st=gve8a3xp&dl=0"],
    "label": "17cm x 1m.",
    "description": "Foil para usar con el medium textil Heat Transfer Medium.",
    "selected": false
  },
  {
    "id": 1019,
    "name": "Textile Foil Leaf Cadence HolgMulticolor 17cm x 5m",
    "price": "7.00",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/wt6a73z7km1ffdzxldhqz/textile-foil-leaf-cadence-holgmulticolor-17cm-x5m.jpg?rlkey=8rs9x3mclcklony4xdethwymx&st=kh9gyy6b&dl=0"],
    "label": "17cm x 5m.",
    "description": "Foil para usar con el medium textil Heat Transfer Medium.",
    "selected": false
  },
  {
    "id": 1020,
    "name": "Textile Foil Leaf Cadence HolgMulticolor 17cm x 1m",
    "price": "2.00",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/wt6a73z7km1ffdzxldhqz/textile-foil-leaf-cadence-holgmulticolor-17cm-x5m.jpg?rlkey=8rs9x3mclcklony4xdethwymx&st=kh9gyy6b&dl=0"],
    "label": "17cm x 1m.",
    "description": "Foil para usar con el medium textil Heat Transfer Medium.",
    "selected": false
  },
  {
    "id": 1021,
    "name": "Textile Foil Leaf Cadence Gold 17cm x 5m",
    "price": "7.00",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/h2g6b9p0bjopq3kj2otse/textile-foil-leaf-cadence-gold-17cm-x-5m.jpg?rlkey=4alojlgpd2p9l265b407x861s&st=ocjglknv&dl=0"],
    "label": "17cm x 5m.",
    "description": "Foil para usar con el medium textil Heat Transfer Medium.",
    "selected": false
  },
  {
    "id": 1022,
    "name": "Textile Foil Leaf Cadence Gold 17cm x 1m",
    "price": "2.00",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/h2g6b9p0bjopq3kj2otse/textile-foil-leaf-cadence-gold-17cm-x-5m.jpg?rlkey=4alojlgpd2p9l265b407x861s&st=ocjglknv&dl=0"],
    "label": "17cm x 1m.",
    "description": "Foil para usar con el medium textil Heat Transfer Medium.",
    "selected": false
  },
  {
    "id": 1023,
    "name": "Textile Foil Leaf Cadence Dotted HolgSilver 17cm x 5m",
    "price": "7.00",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/5vng6xb1zpsaxklqd7tag/textile-foil-leaf-cadence-dotted-holgsilver-17x5m.jpg?rlkey=356b9xddhwj4te8n6liky0ifb&st=j846h1a9&dl=0"],
    "label": "17cm x 5m.",
    "description": "Foil para usar con el medium textil Heat Transfer Medium.",
    "selected": false
  },
  {
    "id": 1024,
    "name": "Textile Foil Leaf Cadence Dotted HolgSilver 17cm x 1m",
    "price": "2.00",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/5vng6xb1zpsaxklqd7tag/textile-foil-leaf-cadence-dotted-holgsilver-17x5m.jpg?rlkey=356b9xddhwj4te8n6liky0ifb&st=j846h1a9&dl=0"],
    "label": "17cm x 1m.",
    "description": "Foil para usar con el medium textil Heat Transfer Medium.",
    "selected": false
  },
  {
    "id": 1025,
    "name": "Textile Foil Leaf Cadence Diamond HolgSilver 17cm x 5m",
    "price": "7.00",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/oyc9ukpzae711qb2xksru/textile-foil-leaf-cadence-diamond-holgsilver-17x5.jpg?rlkey=myas8acf54uotbzxazwa0r5mh&st=86e2f1j9&dl=0"],
    "label": "17cm x 5m.",
    "description": "Foil para usar con el medium textil Heat Transfer Medium.",
    "selected": false
  },
  {
    "id": 1026,
    "name": "Textile Foil Leaf Cadence Diamond HolgSilver 17cm x 1m",
    "price": "2.00",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/oyc9ukpzae711qb2xksru/textile-foil-leaf-cadence-diamond-holgsilver-17x5.jpg?rlkey=myas8acf54uotbzxazwa0r5mh&st=86e2f1j9&dl=0"],
    "label": "17cm x 1m.",
    "description": "Foil para usar con el medium textil Heat Transfer Medium.",
    "selected": false
  },
  {
    "id": 1027,
    "name": "Textile Foil Leaf Cadence Diamond HolgGold 17cm x 5m",
    "price": "7.00",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/rtjqocab9zdeu6xg26yay/textile-foil-leaf-cadence-diamond-holggold-17x5m.jpg?rlkey=qifjm2wgzdbtalmdky0tbv82r&st=pt0cl9th&dl=0"],
    "label": "17cm x 5m.",
    "description": "Foil para usar con el medium textil Heat Transfer Medium.",
    "selected": false
  },
  {
    "id": 1028,
    "name": "Textile Foil Leaf Cadence Diamond HolgGold 17cm x 1m",
    "price": "2.00",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/rtjqocab9zdeu6xg26yay/textile-foil-leaf-cadence-diamond-holggold-17x5m.jpg?rlkey=qifjm2wgzdbtalmdky0tbv82r&st=pt0cl9th&dl=0"],
    "label": "17cm x 1m.",
    "description": "Foil para usar con el medium textil Heat Transfer Medium.",
    "selected": false
  },
  {
    "id": 1029,
    "name": "Textile Foil Leaf Cadence Brillant HolgSilver 17cm x 5m",
    "price": "7.00",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/s5lhrwd2h8n3uni0iryos/textile-foil-leaf-cadence-brillant-holgsilver.jpg?rlkey=m6ym2byq71xtytb8m96pwx9qn&st=axu2tdrv&dl=0"],
    "label": "17cm x 5m.",
    "description": "Foil para usar con el medium textil Heat Transfer Medium.",
    "selected": false
  },
  {
    "id": 1030,
    "name": "Textile Foil Leaf Cadence Brillant HolgSilver 17cm x 1m",
    "price": "2.00",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/s5lhrwd2h8n3uni0iryos/textile-foil-leaf-cadence-brillant-holgsilver.jpg?rlkey=m6ym2byq71xtytb8m96pwx9qn&st=axu2tdrv&dl=0"],
    "label": "17cm x 1m.",
    "description": "Foil para usar con el medium textil Heat Transfer Medium.",
    "selected": false
  }







];

// Define el rango de precios mínimo y máximo de tus productos
const precioMinimo = 0;
const precioMaximo = 20;

export const Tienda3FoilTextil = () => {
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
          <h2>FOIL Textil Cadence🎨</h2>

          <h3>Foil para usar con el medium textil Heat Transfer Medium

Preparar la superficie textil y aplicar el medium.
Espera a que se seque.
Colocar las láminas y plancharlas.
Después de enfriar, retire el papel film de foil.</h3>

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
