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
    id: 320,
    name: 'Hybrid Metallic NUEZ 70ml.',
    price: '3.30',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/p9p0lw6p8j060i2pc6n21/hybrid-metallic-cadence-nuez.jpg?rlkey=6761jlhwd4ho8kswgkhwmlgt1&st=e00mkw73&dl=0',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA',
    selected: false,
  },
  {
    id: 321,
    name: 'Hybrid Metallic LILA 70ml.',
    price: '3.30',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/85exwovk0x4d0rh06omdi/hybrid-metallic-cadence-lila.jpg?rlkey=lg79bbi6sdjwruf4b2b7pvhd6&st=u1hmrpqo&dl=0',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA',
    selected: false,
  },
  {
    id: 322,
    name: 'Hybrid Metallic AZUL BEBÉ 70ml.',
    price: '3.30',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/1cvicd3gjjx5sphc67ocg/hybrid-metallic-cadence-azulbebe.jpg?rlkey=ygvra1yjkem7pcxgmevuj2ppf&st=gjhg72j6&dl=0',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA',
    selected: false,
  },
  {
    id: 323,
    name: 'Hybrid Metallic ROSA BEBÉ 70ml.',
    price: '3.30',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/sjjqiv7e912e3i6hzkk2f/hybrid-metallic-cadence-rosabebe.jpg?rlkey=aot7178x4so06jy33e28k8on4&st=r3u9g35x&dl=0',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA',
    selected: false,
  },
  {
    id: 324,
    name: 'Hybrid Metallic PLATINO 70ml.',
    price: '3.30',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/xw48sbi5aurz9okmdgxjc/hybrid-metallic-cadence-platino.jpg?rlkey=97mqbhtfyvjk3bwlq0pji9bfd&st=rgi4d166&dl=0',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA',
    selected: false,
  },
  {
    id: 325,
    name: 'Hybrid Metallic BRONCE 70ml.',
    price: '3.30',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/f4v093nkfskebyfh7n5g6/hybrid-metallic-cadence-bronce.jpg?rlkey=85biu824rz3mqbxmfovrddelk&st=a6y8pgi5&dl=0',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA',
    selected: false,
  },
  {
    id: 326,
    name: 'Hybrid Metallic PLATA 70ml.',
    price: '3.30',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/9dh7y1egdu77owh7cl6pb/hybrid-metallic-cadence-plata.jpg?rlkey=flc8b30m8626zyssbiinsqd2z&st=o6g9t8g6&dl=0',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA',
    selected: false,
  },
  {
    id: 327,
    name: 'Hybrid Metallic CHAMPÁN 70ml.',
    price: '3.30',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/mtrdbe2mfmixdolsi9yll/hybrid-metallic-cadence-champan-120.jpg?rlkey=g28n6w2djsn9nam3rflm5xy2p&st=qgkfoiaf&dl=0',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA',
    selected: false,
  },
  {
    id: 328,
    name: 'Hybrid Metallic PERLA 70ml.',
    price: '3.30',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/0x8l2ackq8oq89nwsefrj/hybrid-metallic-cadence-perla.jpg?rlkey=6hkyirf8ub7iv4ezlz80ra41t&st=y81gfmlm&dl=0',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA',
    selected: false,
  },
  {
    id: 329,
    name: 'Hybrid Metallic ORO VIEJO 70ml.',
    price: '3.30',
    images: [
      'https://i.ibb.co/JKB45bp/hybrid-metallic-cadence-oroviejo.jpg',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA',
    selected: false,
  },
  {
    id: 330,
    name: 'Hybrid Metallic ORO 70ml.',
    price: '3.30',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/6tgodn11cqst0ylb2hyhe/hybrid-metallic-cadence-oro.jpg?rlkey=8z6fraqx43jrsqy46cfk6md09&st=nornb28u&dl=0',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA',
    selected: false,
  },
  {
    id: 331,
    name: 'Hybrid Metallic TOPACIO 70ml.',
    price: '3.30',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/kn5e64mr5rx6w8ixadcyt/hybrid-metallic-cadence-topacio-70.jpg?rlkey=ejysmhb8g6vsrq9iq8a7lrzua&st=p01vjwt5&dl=0',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA',
    selected: false,
  },
  {
    id: 332,
    name: 'Hybrid Metallic COBRE ANTIGUO OSCURO 70ml.',
    price: '3.30',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/blul3jkdioa8sgaq6vh32/hybrid-metallic-cadence-cobreantiguo-70.jpg?rlkey=fh51oqkibhtngbr6uq395nzd7&st=o1rqajmu&dl=0',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA',
    selected: false,
  },
  {
    id: 333,
    name: 'Hybrid Metallic MORADO ANTIGUO 70ml.',
    price: '3.30',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/6ti3czpbfn7ati55xbeis/hybrid-metallic-cadence-moradoantiguo-70.jpg?rlkey=6hxe3fmh2hh6dhxxilrw05lov&st=z4va5p8b&dl=0',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA',
    selected: false,
  },
  {
    id: 334,
    name: 'Hybrid Metallic ROJO ANTIGUO 70ml.',
    price: '3.30',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/6k1i8ytd0ibmpflw52ovb/hybrid-metallic-cadence-rojoantiguo-70.jpg?rlkey=bylwag5u3ncrk400odhhen7sn&st=ijmy885u&dl=0',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA',
    selected: false,
  },
  {
    id: 335,
    name: 'Hybrid Metallic ANTRACITA ANTIGUA 70ml.',
    price: '3.30',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/0gbylqw7ku107cue92g3f/hybrid-metallic-cadence-antracitantigua-70.jpg?rlkey=7sk8etgaiprbqh6gmm4u9vt0t&st=1p5tywtn&dl=0',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA',
    selected: false,
  },
  {
    id: 336,
    name: 'Hybrid Metallic ORO OSCURO 70ml.',
    price: '3.30',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/mjzrlk1acat1kq1k60j4e/hybrid-metallic-cadence-oroscuro-70.jpg?rlkey=m2aog2szttoi0i9erqumx413v&st=v9va64b7&dl=0',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA',
    selected: false,
  },
  {
    id: 337,
    name: 'Hybrid Metallic NEGRO 70ml.',
    price: '3.30',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/w49nvg96brkpvz9kdi5hw/hybrid-metallic-cadence-negro-70.jpg?rlkey=eft8xy6ri0sv8dcf7pfdyy112&st=w651hqnn&dl=0',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA',
    selected: false,
  },
  {
    id: 338,
    name: 'Hybrid Metallic ZAFIRO 70ml.',
    price: '3.30',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/47mf62z0kp7uhn8i7562x/hybrid-metallic-cadence-zafiro-70.jpg?rlkey=6ppjkggfwuh4jl4c36fclh93o&st=swo9x1k4&dl=0',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA',
    selected: false,
  },
  {
    id: 339,
    name: 'Hybrid Metallic TURQUESA 70ml.',
    price: '3.30',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/ty8oys54dc76qmok3s6i2/hybrid-metallic-cadence-turquesa-70.jpg?rlkey=5v1bnwe7bgi3rmfm9qcssgboa&st=rx0s2rvr&dl=0',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA',
    selected: false,
  },
  {
    id: 340,
    name: 'Hybrid Metallic COBRE 70ml.',
    price: '3.30',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/rhb1w26ty411hpd13st6z/hybrid-metallic-cadence-cobre-70.jpg?rlkey=z642qn7lbiqtpy4r3hxmh836t&st=1cojlacu&dl=0',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA',
    selected: false,
  },
  {
    id: 341,
    name: 'Hybrid Metallic ORO OSCURO 120ml.',
    price: "5.30",
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/oy6qj2s2mcy0fp4115w9a/hybrid-metallic-cadence-oroscuro-120.jpg?rlkey=j0k1qfj1cfnnihgs5x0iq7zzo&st=n4ulzt4y&dl=0',
    ],
    label: '120 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA',
    selected: false,
  },
  {
    id: 342,
    name: 'Hybrid Metallic PLATINO 120ml.',
    price: "5.30",
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/x74qk63mqwdin6094cj7z/hybrid-metallic-cadence-platino-120.jpg?rlkey=a41bnrahg9ogm7kgxv9msj3mi&st=qsaqdwj7&dl=0',
    ],
    label: '120 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA',
    selected: false,
  },
  {
    id: 343,
    name: 'Hybrid Metallic PLATA 120ml.',
    price: "5.30",
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/msqmr4ubes5iyy5o3kcod/hybrid-metallic-cadence-plata-120.jpg?rlkey=ep4fdkwoaobnsms8gtm7m5ij6&st=i0fcne7d&dl=0',
    ],
    label: '120 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA',
    selected: false,
  },
  {
    id: 344,
    name: 'Hybrid Metallic CHAMPÁN 120ml.',
    price: "5.30",
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/mtrdbe2mfmixdolsi9yll/hybrid-metallic-cadence-champan-120.jpg?rlkey=g28n6w2djsn9nam3rflm5xy2p&st=60ppirja&dl=0',
    ],
    label: '120 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA',
    selected: false,
  },
  {
    id: 345,
    name: 'Hybrid Metallic PERLA 120ml.',
    price: "5.30",
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/6xwjtz8cxbnqa51qfkinx/hybrid-metallic-cadence-perla-120.jpg?rlkey=gy84zmktcotnbghd1skqajojg&st=60b8kemz&dl=0',
    ],
    label: '120 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA',
    selected: false,
  },
  {
    id: 346,
    name: 'Hybrid Metallic ORO VIEJO 120ml.',
    price: "5.30",
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/gxmzc1elkum3mrhlrg2ng/hybrid-metallic-cadence-orobiejo-120.jpg?rlkey=vgs4vxi2rs6dgu8q1siojswi2&st=k9qm9zcy&dl=0',
    ],
    label: '120 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA',
    selected: false,
  },
  {
    id: 347,
    name: 'Hybrid Metallic ORO 120ml.',
    price: "5.30",
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/h9fw8rnjnmyesma1t0aoq/hybrid-metallic-cadence-oro-120.jpg?rlkey=27j2lt6h5hwycbuzn2rua8h8f&st=rtfx4zwp&dl=0',
    ],
    label: '120 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA',
    selected: false,
  },
  





];

// Define el rango de precios mínimo y máximo de tus productos
const precioMinimo = 0;
const precioMaximo = 6;

export const Tienda3HybridMetallic = () => {
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
          <h2>Pinturas Acrílicas Hybrid Metallic Cadence🎨</h2>

          <h3>Pintura metalizada multisuperficie de CADENCE con una excelente adhesión sobre <br></br><span id='materiales'>madera, porex, piedra, ladrillo, cemento, terracota, metal, papel, porcelana, cristal, cuero, tela, poliuretano, plástico...</span> <br></br>Sin necesidad de imprimación previa.</h3>

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
