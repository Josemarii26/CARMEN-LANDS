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
    id: 529,
    name: 'IKAROS ZEUGMA Pasta Relieve Efecto Piedra 150ml.',
    price: '4.25',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/31ush3sqt6ktstll5weyr/zeugma-pasta-relieve-efecto-piedra.jpg?rlkey=twzrvl735o3dnmas25vbrh69a&st=j2l227gk&dl=0',
    ],
    label: '150ml',
    description: 'Se puede aplicar tanto es superficies porosas como no porosas, usándose con pincel, espatula, plantilla y esponja... La superficie se puede lijar y alisar o dejar con una gruesa textura irregular. Se puede mezclar con otras pinturas y pastas cadence para crear diferentes efectos de color y estilos Mix Media. Mezcla 2 tonos diferentes de pasta ZEUGMA efecto piedra para conseguir un efecto super realista. El tempo de secado depende del grosor aplicado y de las condiciones atmosféricas. Una vez seco es impermeable y resistente a los impactos. Proteger del calor y de las heladas.',
    selected: false,
  },
  {
    id: 530,
    name: 'MINOS ZEUGMA Pasta Relieve Efecto Piedra 150ml.',
    price: '4.25',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/vq44gr5sqgi6z5ohwsvhx/zeugma-pasta-relieve-efecto-piedra-1.jpg?rlkey=78nmeufq2rge87dvj276vunpz&st=y0r19cez&dl=0',
    ],
    label: '150ml',
    description: 'Se puede aplicar tanto es superficies porosas como no porosas, usándose con pincel, espatula, plantilla y esponja... La superficie se puede lijar y alisar o dejar con una gruesa textura irregular. Se puede mezclar con otras pinturas y pastas cadence para crear diferentes efectos de color y estilos Mix Media. Mezcla 2 tonos diferentes de pasta ZEUGMA efecto piedra para conseguir un efecto super realista. El tempo de secado depende del grosor aplicado y de las condiciones atmosféricas. Una vez seco es impermeable y resistente a los impactos. Proteger del calor y de las heladas.',
    selected: false,
  },
  {
    id: 531,
    name: 'SILENOS ZEUGMA Pasta Relieve Efecto Piedra 150ml.',
    price: '4.25',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/zu0ds5179q5a5m1cl0f10/zeugma-pasta-relieve-efecto-piedra-2.jpg?rlkey=37p7nuktx4enkb3x7uhczjne2&st=etgig7y6&dl=0',
    ],
    label: '150ml',
    description: 'Se puede aplicar tanto es superficies porosas como no porosas, usándose con pincel, espatula, plantilla y esponja... La superficie se puede lijar y alisar o dejar con una gruesa textura irregular. Se puede mezclar con otras pinturas y pastas cadence para crear diferentes efectos de color y estilos Mix Media. Mezcla 2 tonos diferentes de pasta ZEUGMA efecto piedra para conseguir un efecto super realista. El tempo de secado depende del grosor aplicado y de las condiciones atmosféricas. Una vez seco es impermeable y resistente a los impactos. Proteger del calor y de las heladas.',
    selected: false,
  },
  {
    id: 532,
    name: 'TRITON ZEUGMA Pasta Relieve Efecto Piedra 150ml.',
    price: '4.25',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/i11gqjd36r7i08zsjspbn/zeugma-pasta-relieve-efecto-piedra-3.jpg?rlkey=18l9ueuy9jllf7wdcsoegd91f&st=wwnk0g8t&dl=0',
    ],
    label: '150ml',
    description: 'Se puede aplicar tanto es superficies porosas como no porosas, usándose con pincel, espatula, plantilla y esponja... La superficie se puede lijar y alisar o dejar con una gruesa textura irregular. Se puede mezclar con otras pinturas y pastas cadence para crear diferentes efectos de color y estilos Mix Media. Mezcla 2 tonos diferentes de pasta ZEUGMA efecto piedra para conseguir un efecto super realista. El tempo de secado depende del grosor aplicado y de las condiciones atmosféricas. Una vez seco es impermeable y resistente a los impactos. Proteger del calor y de las heladas.',
    selected: false,
  },
  {
    id: 533,
    name: 'ASIA ZEUGMA Pasta Relieve Efecto Piedra 150ml.',
    price: '4.25',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/kqvs7551ryk6fs9b4pfj2/zeugma-pasta-relieve-efecto-piedra-4.jpg?rlkey=d5l2szsagl7vopl3i3tgzykiy&st=0w9mtnnu&dl=0',
    ],
    label: '150ml',
    description: 'Se puede aplicar tanto es superficies porosas como no porosas, usándose con pincel, espatula, plantilla y esponja... La superficie se puede lijar y alisar o dejar con una gruesa textura irregular. Se puede mezclar con otras pinturas y pastas cadence para crear diferentes efectos de color y estilos Mix Media. Mezcla 2 tonos diferentes de pasta ZEUGMA efecto piedra para conseguir un efecto super realista. El tempo de secado depende del grosor aplicado y de las condiciones atmosféricas. Una vez seco es impermeable y resistente a los impactos. Proteger del calor y de las heladas.',
    selected: false,
  },
  {
    id: 534,
    name: 'ADONIS ZEUGMA Pasta Relieve Efecto Piedra 150ml.',
    price: '4.25',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/qcbvkbomxqbkfrtex4j2u/zeugma-pasta-relieve-efecto-piedra-5.jpg?rlkey=rdpj137w6zhinpyke1oqiuter&st=w0icjpfe&dl=0',
    ],
    label: '150ml',
    description: 'Se puede aplicar tanto es superficies porosas como no porosas, usándose con pincel, espatula, plantilla y esponja... La superficie se puede lijar y alisar o dejar con una gruesa textura irregular. Se puede mezclar con otras pinturas y pastas cadence para crear diferentes efectos de color y estilos Mix Media. Mezcla 2 tonos diferentes de pasta ZEUGMA efecto piedra para conseguir un efecto super realista. El tempo de secado depende del grosor aplicado y de las condiciones atmosféricas. Una vez seco es impermeable y resistente a los impactos. Proteger del calor y de las heladas.',
    selected: false,
  },

  


];

// Define el rango de precios mínimo y máximo de tus productos
const precioMinimo = 0;
const precioMaximo = 20;

export const Tienda3PastasZeugma = () => {
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
          <h2>Pastas Zeugma🎨</h2>

          <h3>Pastas de relieve CADENCE que imitan el efecto piedra (zeugma) en diferentes tonos de color. </h3>


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
