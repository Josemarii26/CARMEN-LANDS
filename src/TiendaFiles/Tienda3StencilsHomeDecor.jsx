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
    id: 393,
    name: 'Stencil HOME DECOR 45x45cm HD146',
    price: '13.10',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/5pzq0mi207z9p71n1sa0c/stencil-cadence-45x45cm.jpg?rlkey=q4fqb8fjm0fikud50wklnbxg2&st=a0v7cygv&dl=0',
    ],
    label: '45x45cm',
    description: 'Stencils CADENCE para home decor de gran formato 45x45cm. ideal para decoración de paredes, cuadros de gran formato, muebles como comodas, mesillas, butacas, cajas... ',
    selected: false,
  },
  {
    id: 394,
    name: 'Stencil HOME DECOR 45x45cm HD69',
    price: '13.10',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/hd6s9vgbjqvmexv3qr807/stencil-cadence-45x45cm-1.jpg?rlkey=lyllmen44daq52kswtx1wrxpt&st=a3rzhar0&dl=0',
    ],
    label: '45x45cm',
    description: 'Stencils CADENCE para home decor de gran formato 45x45cm. ideal para decoración de paredes, cuadros de gran formato, muebles como comodas, mesillas, butacas, cajas... ',
    selected: false,
  },
  {
    id: 395,
    name: 'Stencil HOME DECOR 45x45cm HD158',
    price: '13.10',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/d8slpytscip16uhoh3jpg/stencil-cadence-45x45cm-2.jpg?rlkey=qlgdrtu1unrhfb6364n7qvdh6&st=47ujy5ty&dl=0',
    ],
    label: '45x45cm',
    description: 'Stencils CADENCE para home decor de gran formato 45x45cm. ideal para decoración de paredes, cuadros de gran formato, muebles como comodas, mesillas, butacas, cajas... ',
    selected: false,
  },
  {
    id: 396,
    name: 'Stencil HOME DECOR 45x45cm HD156',
    price: '13.10',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/q1scp4q10urnicvj74ck6/stencil-cadence-45x45cm-3.jpg?rlkey=5ubz7s9exlarca07edlmnvtkh&st=yvrfv4la&dl=0',
    ],
    label: '45x45cm',
    description: 'Stencils CADENCE para home decor de gran formato 45x45cm. ideal para decoración de paredes, cuadros de gran formato, muebles como comodas, mesillas, butacas, cajas... ',
    selected: false,
  },
  {
    id: 397,
    name: 'Stencil HOME DECOR 45x45cm HD121',
    price: '13.10',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/k0yh7ixh9wuk8w67lv461/stencil-cadence-45x45cm-4.jpg?rlkey=rf1gyai4m69z6n6dvcq7dw07j&st=wqswqi7s&dl=0',
    ],
    label: '45x45cm',
    description: 'Stencils CADENCE para home decor de gran formato 45x45cm. ideal para decoración de paredes, cuadros de gran formato, muebles como comodas, mesillas, butacas, cajas... ',
    selected: false,
  },
  {
    id: 398,
    name: 'Stencil MANDALA 2 45x45cm',
    price: '13.10',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/iy4gwlpps6xd7234c375u/stencil-cadence-45x45cm-5.png?rlkey=rq7rmnwexhxmhfviim56oxbfl&st=paukr8rs&dl=0',
    ],
    label: '45x45cm',
    description: 'Stencils CADENCE para home decor de gran formato 45x45cm. ideal para decoración de paredes, cuadros de gran formato, muebles como comodas, mesillas, butacas, cajas... ',
    selected: false,
  },
  {
    id: 399,
    name: 'Stencil ART NOUVEAU 45x45cm',
    price: '13.10',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/rfm0gdgaqc12y00tfpipa/stencil-cadence-45x45cm-6.png?rlkey=vd478ax73khjpdrwk1fl4221n&st=qa2sgtjr&dl=0',
    ],
    label: '45x45cm',
    description: 'Stencils CADENCE para home decor de gran formato 45x45cm. ideal para decoración de paredes, cuadros de gran formato, muebles como comodas, mesillas, butacas, cajas... ',
    selected: false,
  },
  {
    id: 400,
    name: 'Stencil ADAMASCADO 2 45x45cm',
    price: '13.10',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/cznr4wozwkylqoy2wlgfe/stencil-cadence-45x45cm-7.png?rlkey=fj2lypn6lni1zzxzzfme9dedo&st=q5lid62d&dl=0',
    ],
    label: '45x45cm',
    description: 'Stencils CADENCE para home decor de gran formato 45x45cm. ideal para decoración de paredes, cuadros de gran formato, muebles como comodas, mesillas, butacas, cajas... ',
    selected: false,
  },
  {
    id: 401,
    name: 'Stencil ADAMASCADO 45x45cm',
    price: '13.10',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/q390dvs4yz0x0wapdqzw8/stencil-cadence-45x45cm-8.png?rlkey=d2n09hazrrd7uup1x1pghgo9o&st=agsc2g73&dl=0',
    ],
    label: '45x45cm',
    description: 'Stencils CADENCE para home decor de gran formato 45x45cm. ideal para decoración de paredes, cuadros de gran formato, muebles como comodas, mesillas, butacas, cajas... ',
    selected: false,
  },
  {
    id: 402,
    name: 'Stencil DECO5 45x45cm',
    price: '13.10',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/s1tgyrr5u1ee11bu4qojy/stencil-cadence-45x45cm-9.jpg?rlkey=dj4lyuw6r2v7in7nky2hnbvhs&st=yl1yo8um&dl=0',
    ],
    label: '45x45cm',
    description: 'Stencils CADENCE para home decor de gran formato 45x45cm. ideal para decoración de paredes, cuadros de gran formato, muebles como comodas, mesillas, butacas, cajas... ',
    selected: false,
  },
  {
    id: 403,
    name: 'Stencil MANDALA 3 45x45cm',
    price: '13.10',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/mm96ihouplgbec9yo0tzs/stencil-cadence-45x45cm-10.png?rlkey=w116zle220u7w4pqgx2rlc2re&st=otd23g6c&dl=0',
    ],
    label: '45x45cm',
    description: 'Stencils CADENCE para home decor de gran formato 45x45cm. ideal para decoración de paredes, cuadros de gran formato, muebles como comodas, mesillas, butacas, cajas... ',
    selected: false,
  },
  {
    id: 404,
    name: 'Stencil VEGETAL 2 45x45cm',
    price: '13.10',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/iiiy76iyabha8wcum6i1h/stencil-cadence-45x45cm-11.png?rlkey=vwo25yhl1uq92e6ob041pjy3d&st=qhrr003d&dl=0',
    ],
    label: '45x45cm',
    description: 'Stencils CADENCE para home decor de gran formato 45x45cm. ideal para decoración de paredes, cuadros de gran formato, muebles como comodas, mesillas, butacas, cajas... ',
    selected: false,
  },
  
  
  
  



  





];

// Define el rango de precios mínimo y máximo de tus productos
const precioMinimo = 0;
const precioMaximo = 20;

export const Tienda3StencilsHomeDecor = () => {
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
          <h2>Stencil Cadence Home Decor🎨</h2>

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
