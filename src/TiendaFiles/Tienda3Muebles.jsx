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
import { ProductCard3 } from '../tienda/ProductCard3';
import { Navbar4 } from '../navbar/Navbar4';


const initialProducts = [
  {
    id: 348,
    name: 'MESITA ABRIL 🌸',
    price: 190,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/ykbfwseeupluzke03ng6e/Whats-App-Image-2023-11-19-at-20-28-52-2.jpg?rlkey=lu6w9cgv3tlwudhvdqytiyq3q&st=whdbqcpd&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/tmhlpuxni4n560sl35rwb/Whats-App-Image-2023-11-19-at-20-27-28-1.jpg?rlkey=pyjtyiujv6maeuqqnaym4paor&st=k4h9u7dk&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/umsaw9vyiwxv3qc5uwzd6/Whats-App-Image-2023-11-19-at-20-27-29.jpg?rlkey=p2y7pmgzw6eq5m7phipf0luhy&st=ylqm2t2r&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/2yizyez79j8tkl0voylpv/Whats-App-Image-2023-11-19-at-20-27-28.jpg?rlkey=dnulb0wvo5e32m11neno0fc2c&st=ew6ead6q&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/09taf1taoafw57fphet95/Whats-App-Image-2023-11-19-at-20-28-52.jpg?rlkey=tbiaaiyhd6c1a9ecm34u6g3b7&st=ydec7oln&dl=0"
    ],
    label: 'Mesas',
    description: 'Cuando gané el concurso de CasaTalentos 2021, tuve que crear un mueble original en directo, ¡en tan solo día y medio! En la grabación del programa, con cámaras, luces y cinco personas en mi pequeño taller, se impusieron el color rosa y las flores de acuarela, con pequeñas texturas de perlas.',
    selected: false,
  },
  {
    id: 627,
    name: 'MESA LUZ ✨ ',
    price: 190,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/wsqg9v18ydfl0nre4aa2b/mesaLuz1.jpg?rlkey=k9pjo5eun2l39iio8rst8olqf&st=s8lp96ey&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/wxsbmg6eoa36xjoaymfgu/mesaLuz2.jpg?rlkey=488tlth1l2ntmitiroal42qu2&st=hxn0idf7&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/4203o56gvuw9gv0rkyko0/mesaLuz3.jpg?rlkey=x3ky1huf6r2f0ot26m64753zd&st=boacgugx&dl=0"
      
    ],
    label: 'Mesas',
    description: 'Es la necesidad de atrapar las sensaciones de las vetas de una piedra marmoleada en la madera, con el tacto en relieve de  delicadas flores de muguet doradas y preciosos tiradores de libélulas.',
    selected: false,
  },
  {
    id: 627,
    name: 'CUADRO SILLA ISABELINA SERIE 1 75x50 🪑⭐ ',
    price: 125,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/iwb679hq5lfbdylmq1yvt/cuadro-Silla-Isabelina-Serie1.jpg?rlkey=2sf7qf5x8ecerzuw2pre694iq&st=jd74jo42&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/7wvu8v3fkgt2dm06eva37/cuadro-Silla-Isabelina-Serie2-2.jpg?rlkey=y23bdtyy6gfthgnvrd68z9hd9&st=zzfi07y3&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/y5esgqbsjjbbr3kfo8wic/cuadro-Silla-Isabelina-Serie1-3.jpg?rlkey=zthx7qizkozrgpl8illwkvqgs&st=863eqk4h&dl=0"
      
    ],
    label: 'Cuadros',
    description: 'Puros relieves. Craquelados en oro. Tiempos pasados reconvertidos, en colores de naturaleza. ¡Azules, turquesas, verdes!',
    selected: false,
  },
  {
    id: 628,
    name: 'CUADRO SILLA ISABELINA SERIE 2 75x50 🪑🌑 ',
    price: 125,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/ehc7lutb3dz9okr4sntcb/cuadro-Silla-Isabelina-Serie2.jpg?rlkey=avoca7uzvgkm47ja95d3lldzx&st=enqjnkt7&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/fdlusod2bm848ipflb3ez/cuadro-Silla-Isabelina-Serie2-3.jpg?rlkey=26nnp2y4jwo42c1hb8obhw2nf&st=x8ugptov&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/7wvu8v3fkgt2dm06eva37/cuadro-Silla-Isabelina-Serie2-2.jpg?rlkey=y23bdtyy6gfthgnvrd68z9hd9&st=kyfk58k5&dl=0"
      
    ],
    label: 'Cuadros',
    description: 'La calidez y la nobleza de puro terciopelo negro en un cuadro, utilizando un clásico y actualizándolo con un radical aspecto ¡La idea melliza del contrario!',
    selected: false,
  },
  {
    id: 630,
    name: 'BALINESA SERIE 1 🗝️ ',
    price: 65,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/nxf538v4kvky9acdd3lr8/Balinesa-Serie1.jpg?rlkey=jfv8bv8dtvxmgl97st2xuari3&st=4oy57zge&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/nc81ynvuzgpa2ziwekbdt/Balinesa-Serie1-3.jpg?rlkey=zltf6a4r7q67xaqm5hiz4h93t&st=2dh78084&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/cd1tdtttawcmit4b2xrno/Balinesa-Serie1-2.jpg?rlkey=s2rixhozn51mo5992g4edk32z&st=bx7191zg&dl=0"
      
    ],
    label: 'Cuadros',
    description: 'El deseo de encontrar una pieza en el fondo de mar hace de esta pequeña escultura, una pieza seudoarqueologica. La textura y el relieve recrean incrustaciones marinas y la oxidación de metal.',
    selected: false,
  },
  






];

// Define el rango de precios mínimo y máximo de tus productos
const precioMinimo = 0;
const precioMaximo = 300;

export const Tienda3Muebles = () => {
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

  const handleSearch = (searchText) => {
    // No filtrar directamente por nombre al buscar
    // en su lugar, ajustar los productos existentes según los filtros
    applyFilters();

    if (searchText !== '') {
      const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchText.toLowerCase())
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
      <Navbar4 />

      {showOverlay && <div className="overlay"></div>}
      <div className="tienda" id='tienda4'>
        <br></br>

        <div className="menu">

          <h1>Tienda de productos para artistas - Muebles y Ornamentos 🎀</h1>

          <h2>Muebles y Ornamentos ⚖️</h2>


          <h3>Aquí se encuentran los productos más exclusivos de toda la tienda, todos echos a mano por mí, siendo piezas únicas.</h3>

          <Button className="remove-button3" rightIcon={filterButtonIcon} onClick={handleToggleFilters} colorScheme='red' variant='solid' bg='red.700'>
            Filtrar Productos
          </Button>

          <SearchBar onSearch={handleSearch} />


          <button className="bn632-hover bn22c" onClick={handleToggleCart}>Carrito🛒</button>

        </div>

        {showFilters && (
          <div data-aos="fade-right"><div className="filter">

            {Array.from(new Set(initialProducts.map((product) => product.label)).values()).map(
              (selectedClass) => (
                <Tag size={'lg'} key={'lg'} variant='solid' colorScheme='red' bg='red.700'>
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
              <ProductCard3
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
