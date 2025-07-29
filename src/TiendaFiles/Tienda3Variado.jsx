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
    id: 575,
    name: 'Ácido Magic Glass 70ml.',
    price: '5.80',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/mwy5bjy358xjkvy8l0r2u/acido-magic-glass-cadence.jpg?rlkey=w74m5k1anbokvupauqxpe2b42&st=hysvf9j9&dl=0',
    ],
    label: '70ml',
    description: 'Ácido en crema para esmerilar vidrio y sus derivados, espejos, ventanas, copas... Ideal para usar con cualquier tipo de Stencil o plantilla, ya que no las estropea. Modo de uso: Limpiar la superficie de vidrio, colocar una plantilla o stencil, aplicar una capa gruesa con un pincel o una espátula, dejar actuar unos 2 minutos y aclarar con agua.',
    selected: false,
  },
  {
    id: 576,
    name: 'Aqua Block Coat Repellent Oil 250ml.',
    price: '11.80',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/hrg6n29q6ll9xhlq25wfs/aqua-block-coat-repellent-oil-250-ml.jpg?rlkey=n15fhdaanhh0t18hhfxuk3nm3&st=4p83xs5k&dl=0',
    ],
    label: '250ml',
    description: 'Gel a base de agua que transforma el tejido en un tejido recubierto, impermeable y lavable a máquina. Cuando se seca, crea una sensación de hule, con una capa hidrofóbica y hace que la tela sea resistente al agua. Planchar en modo satén, sin vapor, por el lado interior. Una vez tratada, la tela se puede coser, cortar y limpiar. Posee una gran resistencia al desgaste y es lavable a máquina a 30ºC. Es ideal para manteles de mesa, sombrillas, carteras, delantales, manteles individuales y bolsos de mano. El recubrimiento de gel repele el agua, el barro y el aceite. ',
    selected: false,
  },
  {
    id: 577,
    name: 'Gel Enmascarador 100ml.',
    price: '3.20',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/31bfxitf80irdg5mo1vtp/gel-enmascarador-cadence.jpg?rlkey=dlqi7kalairism8f3ckdzxsx5&st=j0pwawus&dl=0',
    ],
    label: '100ml',
    description: 'Gel para proteger superficies de trabajo impidiendo que las pinturas penetren a través de él, por lo que la superficie enmascarada permanece intacta. Después de secar, se quita con un borrador normal o se enrolla con los dedos. Úsalo para proteger detalles en decoupage, scrap y mix media. Se limpia fácilmente con agua y jabón. ',
    selected: false,
  },
  {
    id: 578,
    name: 'Pan de Oro Cadence: Librito 25 Hojas',
    price: '5.85',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/vk92y0tmttesexn06l2r9/pan-de-oro-cadence.jpg?rlkey=2tgyuf9zyp5njyzwjia9pypeg&st=geluwj5d&dl=0',
    ],
    label: 'hojas',
    description: 'Blister con 4 librillos de 25 hojas de 16x16cm sobre papel encerado para un fácil manejo de la marca CADENCE. Para decoración, manualidades, scrap, mixmedia....',
    selected: false,
  },
  {
    id: 579,
    name: 'Foil Cobre 8cm x 1m (precio por metro)',
    price: '0.50',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/uxg3g9iazrtrz0c0hytu9/foil-cobre-cadence.jpg?rlkey=9871963riblrhbziic97mdxy4&st=rhoohz1r&dl=0',
    ],
    label: '120m',
    description: 'Rollo de 120 metros por 8cm de ancho de foil metálizado de la marca CADENCE. Para decoración, manualidades, scrap, mixmedia....',
    selected: false,
  },
  {
    id: 580,
    name: 'Foil Plata 8cm x 1m (precio por metro)',
    price: '0.50',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/2aggfnn1goi435gwzzw6b/foil-plata-cadence.jpg?rlkey=zj5o5wgj77rofq5j47h3m98y4&st=or2ai617&dl=0',
    ],
    label: '120m',
    description: 'Rollo de 120 metros por 8cm de ancho de foil metálizado de la marca CADENCE. Para decoración, manualidades, scrap, mixmedia....',
    selected: false,
  },
  {
    id: 581,
    name: 'Foil Oro 8cm x 1m (precio por metro)',
    price: '0.50',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/br3zac7aknolmfedydoh8/foil-oro-cadence.jpg?rlkey=c211jilh2ew7rt7o9vft6xog4&st=3o0n24iy&dl=0',
    ],
    label: '120m',
    description: 'Rollo de 120 metros por 8cm de ancho de foil metálizado de la marca CADENCE. Para decoración, manualidades, scrap, mixmedia....',
    selected: false,
  },
  {
    id: 607,
    name: 'Smarta - White 100g',
    price: '2.80',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/bhvlws5rxeekfhi2wybpp/smarta-white-100g.jpg?rlkey=rc32knqko5syysrgfjx16o8kr&st=byos65lg&dl=0',
    ],
    label: '100g',
    description: 'Smarta es una arcilla para modelar suave y flexible que se seca al aire. Suave y fácil de moldear, no requiere preparación y no se pega a las manos.',
    selected: false,
  },
  {
    id: 608,
    name: 'Smarta BOLD - White 500g',
    price: '3.30',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/1gd5ol0qk7vld9d26ysfy/smarta-bold-white-500g.jpg?rlkey=9yyqkzozroksl13t5mrsddhxw&st=ybtl1c8r&dl=0',
    ],
    label: '500g',
    description: 'La arcilla para modelar BOLD es una arcilla de modelado especial de secado al aire con una función similar a la arcilla cerámica, pero más cualificada que las arcillas naturales.Además de esculturas, maquetas y figuras, también se pueden diseñar decoraciones y joyas.',
    selected: false,
  },
  {
    id: 609,
    name: 'Cola BLOK 70g',
    price: '5.90',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/cp1ouuq30y2vbtyxr2zpd/cola-blok.jpg?rlkey=v8axzwporo0t33ck82msnfwa9&st=ov505tie&dl=0',
    ],
    label: '70g',
    description: 'Adhesivo universal BLOK de acetovinílico incoloro de rápido secado y transparente. La cola BLOK es ideal para tus trabajos de cartonaje, scrapbook, mix media, manualidades, proyectos home decor... por su gran variedad de usos y su agarre excepcional.',
    selected: false,
  },

  


];

// Define el rango de precios mínimo y máximo de tus productos
const precioMinimo = 0;
const precioMaximo = 50;

export const Tienda3Variado= () => {
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
          <h2>Materiales Variados Cadence🎨</h2>

          <h3> Una lista de materiales variados con los que poder decorar a tu gusto aquello que estés creando ahora mnismo. </h3>


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
