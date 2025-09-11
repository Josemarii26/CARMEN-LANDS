import React, { useState, useEffect } from 'react';
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
import { ProductCard2 } from '../tienda/ProductCard2';
import { Navbar3 } from '../navbar/Navbar3';


const initialProducts = [
  {
    id: 377,
    name: 'Blanco AMBIANTE WATER RESIST 250ml. + CATALIZADOR',
    price: '13.25',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/9h15mwshp51ruk56lbd5p/ambiente-water-resist-white-250ml-cat.jpg?rlkey=ru4moi5wq1k3l3gk9u6esz8j6&st=7ryx8qy4&dl=0',
    ],
    label: '250 ml.',
    description: 'Pintura acrílica mate a base de agua con excelente adherencia a superficies en sitios húmedos o inorgánicas como vidrio, cerámica, porcelana, azulejos, metal, aluminio, etc. Larga duración, no amarillea ni se desvanece, resistente a las manchas, cobertura perfecta, sin marcas de pincel , producto de resistencia al impacto. Se recomiendan 10 gr de Catalizador para 250 ml de Pintura Acrílica Mate Resistente al Agua Ambiente.',
    selected: false,
  },
  {
    id: 378,
    name: 'Blanco Antiguo AMBIANTE WATER RESIST 250ml. + CATALIZADOR ',
    price: '13.25',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/emd93gau1w9fhe90eb3am/ambiente-water-resist-ancient-white-250ml-cat.jpg?rlkey=lsl3kwulo8eopekx0kulfw1vh&st=wjbqqk8e&dl=0',
    ],
    label: '250 ml.',
    description: 'Pintura acrílica mate a base de agua con excelente adherencia a superficies en sitios húmedos o inorgánicas como vidrio, cerámica, porcelana, azulejos, metal, aluminio, etc. Larga duración, no amarillea ni se desvanece, resistente a las manchas, cobertura perfecta, sin marcas de pincel , producto de resistencia al impacto. Se recomiendan 10 gr de Catalizador para 250 ml de Pintura Acrílica Mate Resistente al Agua Ambiente.',
    selected: false,
  },
  {
    id: 379,
    name: 'Piedra AMBIANTE WATER RESIST 250ml. + CATALIZADOR ',
    price: '13.25',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/d2wdhodnvlu6xt0f5pady/ambiente-water-resist-sandstone-250ml-cat.jpg?rlkey=92lxubnq77l4heq3c8qx428wf&st=pak22khs&dl=0',
    ],
    label: '250 ml.',
    description: 'Pintura acrílica mate a base de agua con excelente adherencia a superficies en sitios húmedos o inorgánicas como vidrio, cerámica, porcelana, azulejos, metal, aluminio, etc. Larga duración, no amarillea ni se desvanece, resistente a las manchas, cobertura perfecta, sin marcas de pincel , producto de resistencia al impacto. Se recomiendan 10 gr de Catalizador para 250 ml de Pintura Acrílica Mate Resistente al Agua Ambiente.',
    selected: false,
  },
  {
    id: 380,
    name: 'Marfil AMBIANTE WATER RESIST 250ml. + CATALIZADOR',
    price: '13.25',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/p7qc4sj91nrn5odvx1j8g/ambiente-water-resist-ivory-coast-250ml-cat.jpg?rlkey=bcuv5tjb7gqb1g55hd0d8dibc&st=abjxo2pm&dl=0',
    ],
    label: '250 ml.',
    description: 'Pintura acrílica mate a base de agua con excelente adherencia a superficies en sitios húmedos o inorgánicas como vidrio, cerámica, porcelana, azulejos, metal, aluminio, etc. Larga duración, no amarillea ni se desvanece, resistente a las manchas, cobertura perfecta, sin marcas de pincel , producto de resistencia al impacto. Se recomiendan 10 gr de Catalizador para 250 ml de Pintura Acrílica Mate Resistente al Agua Ambiente.',
    selected: false,
  },
  {
    id: 381,
    name: 'Cartón AMBIANTE WATER RESIST 250ml. + CATALIZADOR ',
    price: '13.25',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/c30h04ogir4egz7t2rtj2/ambiente-water-resist-cardboard-250ml-cat.jpg?rlkey=5twfykex0mi6ohv6t4miv98rp&st=wai346uy&dl=0',
    ],
    label: '250 ml.',
    description: 'Pintura acrílica mate a base de agua con excelente adherencia a superficies en sitios húmedos o inorgánicas como vidrio, cerámica, porcelana, azulejos, metal, aluminio, etc. Larga duración, no amarillea ni se desvanece, resistente a las manchas, cobertura perfecta, sin marcas de pincel , producto de resistencia al impacto. Se recomiendan 10 gr de Catalizador para 250 ml de Pintura Acrílica Mate Resistente al Agua Ambiente.',
    selected: false,
  },
  {
    id: 382,
    name: 'Verde Linden AMBIANTE WATER RESIST 250ml. + CATALIZADOR',
    price: '13.25',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/123bbnn7xxr419klgop0n/ambiente-water-resist-linden-green-250ml-cat.jpg?rlkey=vnos7sav55ne649bf7i1a4yt7&st=bkperaop&dl=0',
    ],
    label: '250 ml.',
    description: 'Pintura acrílica mate a base de agua con excelente adherencia a superficies en sitios húmedos o inorgánicas como vidrio, cerámica, porcelana, azulejos, metal, aluminio, etc. Larga duración, no amarillea ni se desvanece, resistente a las manchas, cobertura perfecta, sin marcas de pincel , producto de resistencia al impacto. Se recomiendan 10 gr de Catalizador para 250 ml de Pintura Acrílica Mate Resistente al Agua Ambiente.',
    selected: false,
  },
  {
    id: 383,
    name: 'Verde Esmeralda AMBIANTE WATER RESIST 250ml. + CATALIZADOR',
    price: '13.25',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/4zcnwr2smt5aukjywtoxr/ambiente-water-resist-emerald-green-250ml-cat.jpg?rlkey=y8umz0n80tomm7tlwjikalwn8&st=uf5480p3&dl=0',
    ],
    label: '250 ml.',
    description: 'Pintura acrílica mate a base de agua con excelente adherencia a superficies en sitios húmedos o inorgánicas como vidrio, cerámica, porcelana, azulejos, metal, aluminio, etc. Larga duración, no amarillea ni se desvanece, resistente a las manchas, cobertura perfecta, sin marcas de pincel , producto de resistencia al impacto. Se recomiendan 10 gr de Catalizador para 250 ml de Pintura Acrílica Mate Resistente al Agua Ambiente.',
    selected: false,
  },
  {
    id: 384,
    name: 'Nuez AMBIANTE WATER RESIST 250ml. + CATALIZADOR',
    price: '13.25',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/z8n3qv9bvbw7rl6fidm5c/ambiente-water-resist-walnut-250ml-cat.jpg?rlkey=1ldlmvej9zh8yu2n5g6ykvo7l&st=17b6h5ne&dl=0',
    ],
    label: '250 ml.',
    description: 'Pintura acrílica mate a base de agua con excelente adherencia a superficies en sitios húmedos o inorgánicas como vidrio, cerámica, porcelana, azulejos, metal, aluminio, etc. Larga duración, no amarillea ni se desvanece, resistente a las manchas, cobertura perfecta, sin marcas de pincel , producto de resistencia al impacto. Se recomiendan 10 gr de Catalizador para 250 ml de Pintura Acrílica Mate Resistente al Agua Ambiente.',
    selected: false,
  },
  {
    id: 385,
    name: 'Azul Océano AMBIANTE WATER RESIST 250ml. + CATALIZADOR',
    price: '13.25',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/pfykl01tnwxxe6pn2pfhq/ambiente-water-resist-ocean-250ml-cat.jpg?rlkey=5kro8qj1nhrg1nm0fzsu6eera&st=10ye0met&dl=0',
    ],
    label: '250 ml.',
    description: 'Pintura acrílica mate a base de agua con excelente adherencia a superficies en sitios húmedos o inorgánicas como vidrio, cerámica, porcelana, azulejos, metal, aluminio, etc. Larga duración, no amarillea ni se desvanece, resistente a las manchas, cobertura perfecta, sin marcas de pincel , producto de resistencia al impacto. Se recomiendan 10 gr de Catalizador para 250 ml de Pintura Acrílica Mate Resistente al Agua Ambiente.',
    selected: false,
  },
  {
    id: 386,
    name: 'Azul Fresco AMBIANTE WATER RESIST 250ml. + CATALIZADOR ',
    price: '13.25',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/ezer8folivz2sxyqr1ta6/ambiente-water-resist-fresco-250ml-cat.jpg?rlkey=5vx24hbsjl8it8ehrflhxevvj&st=un4uhsgb&dl=0',
    ],
    label: '250 ml.',
    description: 'Pintura acrílica mate a base de agua con excelente adherencia a superficies en sitios húmedos o inorgánicas como vidrio, cerámica, porcelana, azulejos, metal, aluminio, etc. Larga duración, no amarillea ni se desvanece, resistente a las manchas, cobertura perfecta, sin marcas de pincel , producto de resistencia al impacto. Se recomiendan 10 gr de Catalizador para 250 ml de Pintura Acrílica Mate Resistente al Agua Ambiente.',
    selected: false,
  },
  {
    id: 387,
    name: 'Azul Medianoche AMBIANTE WATER RESIST 250ml. + CATALIZADOR',
    price: '13.25',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/8wig775af6etncc3eastu/ambiente-water-resist-midnight-blue-250ml-cat.jpg?rlkey=vc9ow4fpvywkb67vo7nemjk7n&st=3jw8y9xw&dl=0',
    ],
    label: '250 ml.',
    description: 'Pintura acrílica mate a base de agua con excelente adherencia a superficies en sitios húmedos o inorgánicas como vidrio, cerámica, porcelana, azulejos, metal, aluminio, etc. Larga duración, no amarillea ni se desvanece, resistente a las manchas, cobertura perfecta, sin marcas de pincel , producto de resistencia al impacto. Se recomiendan 10 gr de Catalizador para 250 ml de Pintura Acrílica Mate Resistente al Agua Ambiente.',
    selected: false,
  },
  {
    id: 388,
    name: 'Gris Pizarra AMBIANTE WATER RESIST 250ml. + CATALIZADOR ',
    price: '13.25',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/o0mh1zhegjzzfii46pwk5/ambiente-water-resist-dark-slate-gray-250ml-cat.jpg?rlkey=3ahld7wfa1xshayt3ge9ygwi3&st=1gys1j9w&dl=0',
    ],
    label: '250 ml.',
    description: 'Pintura acrílica mate a base de agua con excelente adherencia a superficies en sitios húmedos o inorgánicas como vidrio, cerámica, porcelana, azulejos, metal, aluminio, etc. Larga duración, no amarillea ni se desvanece, resistente a las manchas, cobertura perfecta, sin marcas de pincel , producto de resistencia al impacto. Se recomiendan 10 gr de Catalizador para 250 ml de Pintura Acrílica Mate Resistente al Agua Ambiente.',
    selected: false,
  },
  {
    id: 389,
    name: 'Gris Oscuro AMBIANTE WATER RESIST 250ml. + CATALIZADOR',
    price: '13.25',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/v38vf7zhpbphutgm6bkz5/ambiente-water-resist-dark-gray-250ml-cat.jpg?rlkey=7jmc9h0i1w5df8kkmhst8uvcf&st=k0oz5ia1&dl=0',
    ],
    label: '250 ml.',
    description: 'Pintura acrílica mate a base de agua con excelente adherencia a superficies en sitios húmedos o inorgánicas como vidrio, cerámica, porcelana, azulejos, metal, aluminio, etc. Larga duración, no amarillea ni se desvanece, resistente a las manchas, cobertura perfecta, sin marcas de pincel , producto de resistencia al impacto. Se recomiendan 10 gr de Catalizador para 250 ml de Pintura Acrílica Mate Resistente al Agua Ambiente.',
    selected: false,
  },
  {
    id: 390,
    name: 'Gris Antracita AMBIANTE WATER RESIST 250ml. + CATALIZADOR',
    price: '13.25',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/i165qnft5vf45cv9akot3/ambiente-water-resist-anthracite-black-250ml-cat.jpg?rlkey=78iz19exfq5dzzeh3l1wy6kc9&st=0uy57c2w&dl=0',
    ],
    label: '250 ml.',
    description: 'Pintura acrílica mate a base de agua con excelente adherencia a superficies en sitios húmedos o inorgánicas como vidrio, cerámica, porcelana, azulejos, metal, aluminio, etc. Larga duración, no amarillea ni se desvanece, resistente a las manchas, cobertura perfecta, sin marcas de pincel , producto de resistencia al impacto. Se recomiendan 10 gr de Catalizador para 250 ml de Pintura Acrílica Mate Resistente al Agua Ambiente.',
    selected: false,
  },
  {
    id: 391,
    name: 'Gris Grafitti AMBIANTE WATER RESIST 250ml. + CATALIZADOR ',
    price: '13.25',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/v26wa4a60krarpkqu7jdb/ambiente-water-resist-grafitti-gray-250ml-cat.jpg?rlkey=6fs4prucaqgbghoa2jrwz40x6&st=fzh2fhy2&dl=0',
    ],
    label: '250 ml.',
    description: 'Pintura acrílica mate a base de agua con excelente adherencia a superficies en sitios húmedos o inorgánicas como vidrio, cerámica, porcelana, azulejos, metal, aluminio, etc. Larga duración, no amarillea ni se desvanece, resistente a las manchas, cobertura perfecta, sin marcas de pincel , producto de resistencia al impacto. Se recomiendan 10 gr de Catalizador para 250 ml de Pintura Acrílica Mate Resistente al Agua Ambiente.',
    selected: false,
  },
  {
    id: 392,
    name: 'Moka AMBIANTE WATER RESIST 250ml. + CATALIZADOR ',
    price: '13.25',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/kwl6s4bxs7bsxv46mvrqe/ambiente-water-resist-mink-250ml-cat.jpg?rlkey=idbb38mot1ewj8r4tu3ftc4r3&st=jgb065m2&dl=0',
    ],
    label: '250 ml.',
    description: 'Pintura acrílica mate a base de agua con excelente adherencia a superficies en sitios húmedos o inorgánicas como vidrio, cerámica, porcelana, azulejos, metal, aluminio, etc. Larga duración, no amarillea ni se desvanece, resistente a las manchas, cobertura perfecta, sin marcas de pincel , producto de resistencia al impacto. Se recomiendan 10 gr de Catalizador para 250 ml de Pintura Acrílica Mate Resistente al Agua Ambiente.',
    selected: false,
  },
  



  





];

// Define el rango de precios mínimo y máximo de tus productos
const precioMinimo = 0;
const precioMaximo = 20;

export const Tienda3Ambientes = () => {
  const [products, setProducts] = useState(initialProducts);
  const [priceRange, setPriceRange] = useState([precioMinimo, precioMaximo]);
  const [selectedClasses, setSelectedClasses] = useState([]);
  const [showNoProducts, setShowNoProducts] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [cart, setCart] = useState([]);
  const [showOverlay, setShowOverlay] = useState(false);
  const [filterButtonIcon, setFilterButtonIcon] = useState(<ViewOffIcon />);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12); // Cambia el número según tus necesidades

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const visibleProducts = products.slice(startIndex, endIndex);







  const applyFilters = React.useCallback(() => {
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
  }, [selectedClasses, priceRange]);

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
  }, [applyFilters]);

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
          <h2>Pinturas para ambientes húmedos Cadence🎨</h2>

          <h3>Fórmula avanzada con nanotecnología, pintura acrílica mate a base de agua con excelente adherencia a superficies en sitios húmedos o inorgánicas como <br></br><span id='materiales'>vidrio, cerámica, porcelana, azulejos, metal, aluminio, etc.</span> <br></br> VIENEN CON CATALIZADOR INCLUIDO <br></br> Larga duración, no amarillea ni se desvanece, resistente a las manchas, cobertura perfecta, sin marcas de pincel , producto de resistencia al impacto.
            <br></br>La resistencia al agua se puede aumentar agregando  Paint and Varnish Catalyst para superficies extra resbaladizas como vidrio y cerámica. <br></br>Se recomiendan 10 gr de Catalizador para 250 ml de Pintura Acrílica Mate Resistente al Agua Ambiente. <br></br>No tóxico. <br></br>

Certificado por la EN71 CE</h3>

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
