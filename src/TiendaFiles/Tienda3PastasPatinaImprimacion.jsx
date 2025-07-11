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
    id: 515,
    name: 'Patina ASFALTO 100ml.',
    price: '3.40',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/5p0usxnnhxum3auyrmrtw/patina-asfalto-cadence.jpg?rlkey=sahb7wpdp389hvgtaej4o9l1f&st=n9mbxjyy&dl=0',
    ],
    label: '100ml',
    description: 'Medium o pátina de asfalto de la marca CADENCE usada para técnicas de envejecido sobre pan de oro o plata. Tambien se usa para oscurecer pinturas y como pátina de envejecido.',
    selected: false,
  },
  {
    id: 516,
    name: 'Imprimación Multiadherente MONTEJO 750ml.',
    price: '19.50',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/5di9qasebp5b8x1cxksgb/imprimacion-multiadherente-montejo-750ml.jpg?rlkey=2r6yzuzb71z2kkp97lxeosxvx&st=evmlctp8&dl=0',
    ],
    label: '750ml',
    description: 'Imprimación antioxidante que actúa como preparación y/o selladora para pintar todo tipo de superficies. Permite el posterior esmaltado o barnizado, con productos al agua, de metales tales como hierro, zinc, chapa galvanizada, etc. Pintura de fondo para aplicar sobre PVC rígido y materiales plásticos. Fondo sobre azulejo, cerámica y vidrio. Sellado de superficies porosas de yeso, cemento, cartón yeso, superficies pintadas, etc. Revolver bien el contenido del envase. Superficies nuevas: Lijado previo (lija de grano fino) para conseguir cierta rugosidad y abrir poro. Eliminar restos de polvo, grasa, óxido o suciedad en general. Superficies viejas pintadas: Eliminar cualquier resto de pintura en mal estado. Limpiar la superficie de cualquier tipo de polvo, grasa o suciedad que pueda afectar al anclaje. Lijar (grano fino). Recomendado aplicar dos manos finas de IMPRIMACIÓN MULTIUSOS, respetando siempre los intervalos de repintado. Dureza total tras 3-5 días, dependiendo de la temperatura y del espesor de capa, por tanto se debe evitar el contacto con agua u otros elementos que pudieran remover la película antes de su endurecimiento. Dilución: con agua. Diluir entre 10-15% según aplicación.',
    selected: false,
  },
  {
    id: 616,
    name: 'RUSTY PATINA Verde',
    price: '8.20',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/ot74m92shxifyxbwp2lr6/rusty-patina-verde.jpg?rlkey=xz3x2yj4wagbqcl09n6apzthe&st=pfbcpgjn&dl=0',
    ],
    label: '150ml',
    description: 'Pasta de relieve de alta calidad CADENCE, para crear texturas con efectos de patinas rústicas u oxidadas. Con base de agua y lista para su uso sobre multiples superficies. ',
    selected: false,
  },
  {
    id: 617,
    name: 'RUSTY PATINA Gris',
    price: '8.20',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/0u94jfwwk5bz55vb8lh5z/rusty-patina-gris.jpg?rlkey=tby4boi51yilfv3d8v3ye10uk&st=sgbhdsn6&dl=0',
    ],
    label: '150ml',
    description: 'Pasta de relieve de alta calidad CADENCE, para crear texturas con efectos de patinas rústicas u oxidadas. Con base de agua y lista para su uso sobre multiples superficies. ',
    selected: false,
  },
  {
    id: 619,
    name: 'RUSTY PATINA Crudo',
    price: '8.20',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/cs2idnmj7ito08c64x6li/rusty-patina-crudo.jpg?rlkey=6dsipjmsu6iw1q8a1oy0nq6cz&st=zfkxv3lf&dl=0',
    ],
    label: '150ml',
    description: 'Pasta de relieve de alta calidad CADENCE, para crear texturas con efectos de patinas rústicas u oxidadas. Con base de agua y lista para su uso sobre multiples superficies. ',
    selected: false,
  },
  {
    id: 620,
    name: 'RUSTY PATINA Óxido Amarillo',
    price: '8.20',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/sy9diza13fvugaltjl8ik/rusty-patina-oxido-amarillo.jpg?rlkey=8nd2dwm04de0kjeic03hbnyz0&st=h28kxnyz&dl=0',
    ],
    label: '150ml',
    description: 'Pasta de relieve de alta calidad CADENCE, para crear texturas con efectos de patinas rústicas u oxidadas. Con base de agua y lista para su uso sobre multiples superficies. ',
    selected: false,
  },
  {
    id: 621,
    name: 'RUSTY PATINA Verde Moho',
    price: '8.20',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/sy9diza13fvugaltjl8ik/rusty-patina-oxido-amarillo.jpg?rlkey=8nd2dwm04de0kjeic03hbnyz0&st=h28kxnyz&dl=0',
    ],
    label: '150ml',
    description: 'Pasta de relieve de alta calidad CADENCE, para crear texturas con efectos de patinas rústicas u oxidadas. Con base de agua y lista para su uso sobre multiples superficies. ',
    selected: false,
  },
  {
    id: 622,
    name: 'RUSTY PATINA Marrón',
    price: '8.20',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/puyxup3fwaziwszw10cp7/rusty-patina-marron.jpg?rlkey=4fu95yqtfw1p75rpohff1qkpk&st=bjoitvaa&dl=0',
    ],
    label: '150ml',
    description: 'Pasta de relieve de alta calidad CADENCE, para crear texturas con efectos de patinas rústicas u oxidadas. Con base de agua y lista para su uso sobre multiples superficies. ',
    selected: false,
  },
  {
    id: 623,
    name: 'RUSTY PATINA Azul Lapislázuli',
    price: '8.20',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/a0x7jeup0wb3fv5hk9k6w/rusty-patina-azul-lapislazuli.jpg?rlkey=kvs5r7wmuo13zxnmo1cundmk5&st=an6moyvo&dl=0',
    ],
    label: '150ml',
    description: 'Pasta de relieve de alta calidad CADENCE, para crear texturas con efectos de patinas rústicas u oxidadas. Con base de agua y lista para su uso sobre multiples superficies. ',
    selected: false,
  },
  {
    id: 624,
    name: 'RUSTY PATINA Naranja',
    price: '8.20',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/cvvmviqw3pu1qnohr3oal/rusty-patina-naranja.jpg?rlkey=mmnjyp03waf2uzpwjihml6q5g&st=hl28tovx&dl=0',
    ],
    label: '150ml',
    description: 'Pasta de relieve de alta calidad CADENCE, para crear texturas con efectos de patinas rústicas u oxidadas. Con base de agua y lista para su uso sobre multiples superficies. ',
    selected: false,
  },
  {
    id: 625,
    name: 'RUSTY PATINA Gris Antracita',
    price: '8.20',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/w851dlxuv2a8cy395kgyn/rusty-patina-gris-antracita.jpg?rlkey=ewu2opek1qnvgsty308h22k6r&st=j5ruamkq&dl=0',
    ],
    label: '150ml',
    description: 'Pasta de relieve de alta calidad CADENCE, para crear texturas con efectos de patinas rústicas u oxidadas. Con base de agua y lista para su uso sobre multiples superficies. ',
    selected: false,
  },
  {
    id: 626,
    name: 'RUSTY PATINA Blanco',
    price: '8.20',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/df18yirzv0meykruk45fr/rusty-patina-blanco.jpg?rlkey=ipebhohoavfc82nnrvyai8u6w&st=y7228ryt&dl=0',
    ],
    label: '150ml',
    description: 'Pasta de relieve de alta calidad CADENCE, para crear texturas con efectos de patinas rústicas u oxidadas. Con base de agua y lista para su uso sobre multiples superficies. ',
    selected: false,
  },

  


];

// Define el rango de precios mínimo y máximo de tus productos
const precioMinimo = 0;
const precioMaximo = 20;

export const Tienda3PastasPatinaImprimacion = () => {
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
          <h2>Patina e imprimación🎨</h2>

          <h3>Selección de diferentes productos para limpieza y productos auxiliares. </h3>


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
