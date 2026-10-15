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
    id: 1260,
    name: "LEATHER VOGUE Black 50ml",
    price: "3.80",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/70x6b6a0cpo63hywsede4/leather-vogue-paint-lv-12-black-50-ml.jpg?rlkey=9cto0d1yt8tmm7ceq2bmj8xzr&st=ulkoympc&dl=0",
    ],
    label: "50ml",
    description:
      "Pintura acrílica a base de agua especialmente formulada para cuero o similares al cuero, textiles sintéticos, bolsos, zapatos, cinturones… La película de pintura seca es elástica y resistente a la abrasión con un acabado satinado. Para una mejor adhesión de la pintura, la superficie debe estar limpia, sin polvo ni grasa.",
    selected: false,
  },
  {
    id: 1261,
    name: "LEATHER VOGUE White 50ml",
    price: "3.80",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/u8nnxfw2bzgpt7kt2bz2j/leather-vogue-paint-lv-01-white-50-ml.jpg?rlkey=lmdpz44bi426hob8hj9bl4kd1&st=sipbv2jj&dl=0",
    ],
    label: "50ml",
    description:
      "Pintura acrílica a base de agua especialmente formulada para cuero o similares al cuero, textiles sintéticos, bolsos, zapatos, cinturones… La película de pintura seca es elástica y resistente a la abrasión con un acabado satinado. Para una mejor adhesión de la pintura, la superficie debe estar limpia, sin polvo ni grasa.",
    selected: false,
  },
  {
    id: 1262,
    name: "LEATHER VOGUE Yellow 50ml",
    price: "3.80",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/gebj1f7ocn9t5epm912ey/leather-vogue-paint-lv-02-yellow-50-ml.jpg?rlkey=ycrramiv2wam5ursm8pblvmgh&st=9fjx1mml&dl=0",
    ],
    label: "50ml",
    description:
      "Pintura acrílica a base de agua especialmente formulada para cuero o similares al cuero, textiles sintéticos, bolsos, zapatos, cinturones… La película de pintura seca es elástica y resistente a la abrasión con un acabado satinado. Para una mejor adhesión de la pintura, la superficie debe estar limpia, sin polvo ni grasa.",
    selected: false,
  },
  {
    id: 1263,
    name: "LEATHER VOGUE Orange 50ml",
    price: "3.80",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/h6fgspvivgqqedsncgqa8/leather-vogue-paint-lv-03-orange-50-ml.jpg?rlkey=ripbqt7mekp3u1e7vlbye85hz&st=3oti8bfp&dl=0",
    ],
    label: "50ml",
    description:
      "Pintura acrílica a base de agua especialmente formulada para cuero o similares al cuero, textiles sintéticos, bolsos, zapatos, cinturones… La película de pintura seca es elástica y resistente a la abrasión con un acabado satinado. Para una mejor adhesión de la pintura, la superficie debe estar limpia, sin polvo ni grasa.",
    selected: false,
  },
  {
    id: 1264,
    name: "LEATHER VOGUE Red 50ml",
    price: "3.80",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/ehr7gmgjcdcrzglaouheq/leather-vogue-paint-lv-04-red-50-ml.jpg?rlkey=7b13ppf8wmi2abiwmijhifo7p&st=qd79pmbb&dl=0",
    ],
    label: "50ml",
    description:
      "Pintura acrílica a base de agua especialmente formulada para cuero o similares al cuero, textiles sintéticos, bolsos, zapatos, cinturones… La película de pintura seca es elástica y resistente a la abrasión con un acabado satinado. Para una mejor adhesión de la pintura, la superficie debe estar limpia, sin polvo ni grasa.",
    selected: false,
  },
  {
    id: 1265,
    name: "LEATHER VOGUE Pink 50ml",
    price: "3.80",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/o3atkjsn9bumpbeml3aif/leather-vogue-paint-lv-05-pink-50-ml.jpg?rlkey=d2jhsar0nxvei8ej2ndmgplou&st=0ypsocd1&dl=0",
    ],
    label: "50ml",
    description:
      "Pintura acrílica a base de agua especialmente formulada para cuero o similares al cuero, textiles sintéticos, bolsos, zapatos, cinturones… La película de pintura seca es elástica y resistente a la abrasión con un acabado satinado. Para una mejor adhesión de la pintura, la superficie debe estar limpia, sin polvo ni grasa.",
    selected: false,
  },
  {
    id: 1266,
    name: "LEATHER VOGUE Fuchsia 50ml",
    price: "3.80",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/5grfmk21162q0cj34k3sb/leather-vogue-paint-lv-06-fuchsia-50-ml.jpg?rlkey=p15ia1n44tq3xuxprg1r5eah2&st=hi5wbnw8&dl=0",
    ],
    label: "50ml",
    description:
      "Pintura acrílica a base de agua especialmente formulada para cuero o similares al cuero, textiles sintéticos, bolsos, zapatos, cinturones… La película de pintura seca es elástica y resistente a la abrasión con un acabado satinado. Para una mejor adhesión de la pintura, la superficie debe estar limpia, sin polvo ni grasa.",
    selected: false,
  },
  {
    id: 1267,
    name: "LEATHER VOGUE Purple 50ml",
    price: "3.80",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/jpf1num4ozystvnbph3a6/leather-vogue-paint-lv-07-purple-50-ml.jpg?rlkey=tvid5bevlr6wwf7znkq51229e&st=1j4zspiy&dl=0",
    ],
    label: "50ml",
    description:
      "Pintura acrílica a base de agua especialmente formulada para cuero o similares al cuero, textiles sintéticos, bolsos, zapatos, cinturones… La película de pintura seca es elástica y resistente a la abrasión con un acabado satinado. Para una mejor adhesión de la pintura, la superficie debe estar limpia, sin polvo ni grasa.",
    selected: false,
  },
  {
    id: 1268,
    name: "LEATHER VOGUE Light Turquoise 50ml",
    price: "3.80",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/u4n704ngyi5ho698v93sc/leather-vogue-paint-lv-08-light-turquoise-50-ml.jpg?rlkey=zdlvn28slo91heldzjaa66qy4&st=m6qv65pv&dl=0",
    ],
    label: "50ml",
    description:
      "Pintura acrílica a base de agua especialmente formulada para cuero o similares al cuero, textiles sintéticos, bolsos, zapatos, cinturones… La película de pintura seca es elástica y resistente a la abrasión con un acabado satinado. Para una mejor adhesión de la pintura, la superficie debe estar limpia, sin polvo ni grasa.",
    selected: false,
  },
  {
    id: 1269,
    name: "LEATHER VOGUE Blue 50ml",
    price: "3.80",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/udo8zy0p70qzwydr5y4ca/leather-vogue-paint-lv-09-blue-50-ml.jpg?rlkey=2050ez5ldevcj3asw41x6o6c7&st=rpenghsq&dl=0",
    ],
    label: "50ml",
    description:
      "Pintura acrílica a base de agua especialmente formulada para cuero o similares al cuero, textiles sintéticos, bolsos, zapatos, cinturones… La película de pintura seca es elástica y resistente a la abrasión con un acabado satinado. Para una mejor adhesión de la pintura, la superficie debe estar limpia, sin polvo ni grasa.",
    selected: false,
  },
  {
    id: 1270,
    name: "LEATHER VOGUE Green 50ml",
    price: "3.80",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/co8wsl2iyhqfedhq061xq/leather-vogue-paint-lv-10-green-50-ml.jpg?rlkey=qp2b8yw1enr3863bisj7bv4g1&st=mkvindwo&dl=0",
    ],
    label: "50ml",
    description:
      "Pintura acrílica a base de agua especialmente formulada para cuero o similares al cuero, textiles sintéticos, bolsos, zapatos, cinturones… La película de pintura seca es elástica y resistente a la abrasión con un acabado satinado. Para una mejor adhesión de la pintura, la superficie debe estar limpia, sin polvo ni grasa.",
    selected: false,
  },
  {
    id: 1271,
    name: "LEATHER VOGUE Brown 50ml",
    price: "3.80",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/no027d0p9uxmlecmt6yqp/leather-vogue-paint-lv-11-brown-50-ml.jpg?rlkey=fu3zlg35gc47ybgdvzgskswg6&st=zotwyapx&dl=0",
    ],
    label: "50ml",
    description:
      "Pintura acrílica a base de agua especialmente formulada para cuero o similares al cuero, textiles sintéticos, bolsos, zapatos, cinturones… La película de pintura seca es elástica y resistente a la abrasión con un acabado satinado. Para una mejor adhesión de la pintura, la superficie debe estar limpia, sin polvo ni grasa.",
    selected: false,
  },
  {
    id: 1272,
    name: "LEATHER VOGUE Black 50ml",
    price: "3.80",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/70x6b6a0cpo63hywsede4/leather-vogue-paint-lv-12-black-50-ml.jpg?rlkey=9cto0d1yt8tmm7ceq2bmj8xzr&st=ul3bi1p9&dl=0",
    ],
    label: "50ml",
    description:
      "Pintura acrílica a base de agua especialmente formulada para cuero o similares al cuero, textiles sintéticos, bolsos, zapatos, cinturones… La película de pintura seca es elástica y resistente a la abrasión con un acabado satinado. Para una mejor adhesión de la pintura, la superficie debe estar limpia, sin polvo ni grasa.",
    selected: false,
  },

  

  

  

  


  





];

// Define el rango de precios mínimo y máximo de tus productos
const precioMinimo = 0;
const precioMaximo = 20;

export const Tienda3PinturasTextilesLeatherVogue = () => {
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
          <h2>LEATHER VOGUE Pintura Cuero para textil Cadence🎨</h2>

          <h3>Pintura acrílica a base de agua especialmente formulada para cuero o similares al cuero, textiles sintéticos, bolsos, zapatos, cinturones…</h3>

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
