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
    id: 610,
    name: 'Paletina Nº05',
    price: '3.00',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/i0iv0d4ggyu9kisgx5d0n/paletina-montejo.jpg?rlkey=d9gd96vfumq8y44yk0gixfdef&st=lej1jffu&dl=0',
    ],
    label: 'paletina',
    description: 'Paletinas de alta calidad Montejo, serie 4101 de pelo sintético. Ideales para hacer veladuras, pintar grandes superficies en tus trabajos de Home Decor y para la aplicación de barnices e imprimaciones.',
    selected: false,
  },
  {
    id: 611,
    name: 'Paletina Nº10',
    price: '4.20',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/2x7w3wwehm40uh8puk7j0/paletina-montejo-1.jpg?rlkey=vi4dyd9wnz1nu75uftj2xuq2m&st=i1f92fue&dl=0',
    ],
    label: 'paletina',
    description: 'Paletinas de alta calidad Montejo, serie 4101 de pelo sintético. Ideales para hacer veladuras, pintar grandes superficies en tus trabajos de Home Decor y para la aplicación de barnices e imprimaciones.',
    selected: false,
  },
  {
    id: 612,
    name: 'Pincel Estarcir VERY CHALKY Nº2',
    price: '2.80',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/ndry6c1nozg1egdknxm70/pincel-estarcir-very-chalky-n2.jpg?rlkey=1cm0eqnhos618g4zvxnox2ohy&st=3iwjjd61&dl=0',
    ],
    label: 'pincel',
    description: 'Pincel para estarcido de mango de madera corto lacado en rosa y pelo de cerda con corte recto. De alta calidad MONTEJO ideal para usar con plantillas o stencil por su corte recto y para la aplicación de las pinturas DORA de Cadence.',
    selected: false,
  },
  {
    id: 613,
    name: 'Pincel Estarcir VERY CHALKY nº10',
    price: '4.70',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/largrk4z1basngb6xnbue/pincel-estarcir-very-chalky.jpg?rlkey=k50u0cbjm5r0rofq8vhvg5q8d&st=py2rlj45&dl=0',
    ],
    label: 'pincel',
    description: 'Pincel para estarcido de mango de madera corto lacado en rosa y pelo de cerda con corte recto. De alta calidad MONTEJO ideal para usar con plantillas o stencil por su corte recto y para la aplicación de las pinturas DORA de Cadence.',
    selected: false,
  },
  {
    id: 614,
    name: 'Pincel Abanico 464 Nº8',
    price: '4.20',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/nu5phx8hr7cqoydxavy1x/pincel-abanico-464-n1.jpg?rlkey=ssbfs41agywu34m16unqn8n6s&st=q6j957u5&dl=0',
    ],
    label: 'pincel',
    description: 'Pinceles de alta calidad Montejo, serie 464 para técnicas de: Óleo, Acrílico, Acuarela, Témpera   ',
    selected: false,
  },
  {
    id: 615,
    name: 'Espátula metálica 102mm',
    price: '4.35',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/l99kcu9fwq33sdye2qhxe/espatula-metalica-102mm.jpg?rlkey=m6er5t3oddaxzze2uavycib4p&st=mnp5pun1&dl=0',
    ],
    label: 'espátula',
    description: 'Las espátulas ofrecen texturas diferentes a las creadas por el pincel y un contacto más directo con el lienzo.',
    selected: false,
  },
  {
    id: 781,
    name: 'Paleta desechable 36 hojas',
    price: '4.50',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/l99kcu9fwq33sdye2qhxe/espatula-metalica-102mm.jpg?rlkey=m6er5t3oddaxzze2uavycib4p&st=mnp5pun1&dl=0',
    ],
    label: 'paleta',
    description: 'Paleta de pintor compuesta por 36 hojas desechables de 22,5x30cm. ',
    selected: false,
  },
  {
    id: 782,
    name: 'Pincel redondo serie 460 LINER',
    price: '1.80',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/x2w6wohpv3361x8yfc9h7/pincel-redondo-460-liner.jpg?rlkey=jqhnocmewuf1dt16cokn5tf17&st=f1hq9dic&dl=0',
    ],
    label: 'pincel',
    description: 'Pincel redondo de la serie 460 LINER, ideal para detalles y acabados precisos.',
    selected: false,
  },
  {
    id: 783,
    name: 'Pincel redondo serie 460 Nº 0/3',
    price: '1.40',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/55gc63xu19znwi9l0i1vl/pincel-redondo-460-03.jpg?rlkey=5vw6i8ojf78nx5rpouhyc0914&st=bzer2c4t&dl=0',
    ],
    label: 'pincel',
    description: 'Pinceles de alta calidad Montejo, serie 460 para técnicas de: Óleo, Acrílico, Acuarela, Témpera',
    selected: false,
  },
  {
    id: 784,
    name: 'Pincel redondo serie 460 Nº 0/5',
    price: '1.30',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/9qacjn46fq4qd2nh4ievn/pincel-redondo-460-05.jpg?rlkey=zfdk677ari6mr1sgucj8s86lv&st=e69lax4l&dl=0',
    ],
    label: 'pincel',
    description: 'Pinceles de alta calidad Montejo, serie 460 para técnicas de: Óleo, Acrílico, Acuarela, Témpera  ',
    selected: false,
  },
  {
    id: 785,
    name: 'Pincel redondo serie 460 Nº 0',
    price: '1.55',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/jgj5vwmay9uzxpsdzfzjo/pincel-redondo-460-0.jpg?rlkey=2z3ch6nmazcq6axyuhkxvmr1c&st=dtib8ecy&dl=0',
    ],
    label: 'pincel',
    description: 'Pinceles de alta calidad Montejo, serie 460 para técnicas de: Óleo, Acrílico, Acuarela, Témpera  ',
    selected: false,
  },
  {
    id: 786,
    name: 'Pincel plano serie 561 Nº 2',
    price: '1.50',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/8ouhc26bdhrfhvy6r522z/pincel-plano-home-decor-561-2.jpg?rlkey=p7qxxopix9lvvi3a1wdyuai6e&st=vxbw9tgg&dl=0',
    ],
    label: 'pincel',
    description: 'Pinceles de alta calidad Montejo, serie 561 HOME DECOR para técnicas de: Óleo, Acrílico, Acuarela, Témpera',
    selected: false,
  },
  {
    id: 787,
    name: 'Pincel plano serie 561 Nº 4',
    price: '1.70',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/f7c674yz35qkh5hzeagr3/pincel-plano-home-decor-561-4.jpg?rlkey=2mvh0i5pqk5jeoxbmez27yycm&st=tdjhnxm8&dl=0',
    ],
    label: 'pincel',
    description: 'Pinceles de alta calidad Montejo, serie 561 HOME DECOR para técnicas de: Óleo, Acrílico, Acuarela, Témpera ',
    selected: false,
  },
  {
    id: 788,
    name: 'Pincel plano serie 561 Nº 6',
    price: '1.90',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/xqd174af307ldkqbk71z8/pincel-plano-home-decor-561-6.jpg?rlkey=asnbr4opzqs0bryekdvcjpnir&st=bfxyehex&dl=0',
    ],
    label: 'pincel',
    description: 'Pinceles de alta calidad Montejo, serie 561 HOME DECOR para técnicas de: Óleo, Acrílico, Acuarela, Témpera ',
    selected: false,
  },
  {
    id: 789,
    name: 'Pincel lengua de gato 562 Nº 2',
    price: '1.60',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/92q735xncor77wx5au13q/pincel-lengua-de-gato-home-decor-562-2.jpg?rlkey=qqy053jjvd03a8vbghv0t7to3&st=pxb13fy5&dl=0',
    ],
    label: 'pincel',
    description: 'Pinceles de alta calidad Montejo, serie 462 para técnicas de: Óleo, Acrílico, Acuarela, Témpera  ',
    selected: false,
  },
  {
    id: 790,
    name: 'Pincel lengua de gato 562 Nº 4',
    price: '1.70',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/h6z0hkuaqmx654kmen07g/pincel-lengua-de-gato-home-decor-562-4.jpg?rlkey=r9n9cau4u9x8mffg67bfewzc5&st=zqn1ircm&dl=0',
    ],
    label: 'pincel',
    description: 'Pinceles de alta calidad Montejo, serie 562 HOME DECOR para técnicas de: Óleo, Acrílico, Acuarela, Témpera',
    selected: false,
  },
  {
    id: 791,
    name: 'Pincel lengua de gato 562 Nº 6',
    price: '2.00',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/7wy5bzes473ypxflld9ez/pincel-lengua-de-gato-home-decor-562-6.jpg?rlkey=ptvvtbm0bk1qon2kyb6a1decj&st=88t3h2hm&dl=0',
    ],
    label: 'pincel',
    description: 'Pinceles de alta calidad Montejo, serie 562 HOME DECOR para técnicas de: Óleo, Acrílico, Acuarela, Témpera ',
    selected: false,
  },
  {
    id: 792,
    name: 'Pincel lengua de gato 562 Nº 8',
    price: '2.40',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/oopfj0rjr86k9o9ztcldk/pincel-lengua-de-gato-home-decor-562-8.jpg?rlkey=97ogr3y96aa6k1z2twdvq43g2&st=s7estugk&dl=0',
    ],
    label: 'pincel',
    description: 'Pinceles de alta calidad Montejo, serie 562 HOME DECOR para técnicas de: Óleo, Acrílico, Acuarela, Témpera ',
    selected: false,
  },


  


];

// Define el rango de precios mínimo y máximo de tus productos
const precioMinimo = 0;
const precioMaximo = 50;

export const Tienda3MaterialesTrabajo= () => {
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

  const visibleProducts = products.slice().reverse().slice(startIndex, endIndex);







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
          <h2>Materiales de Trabajo Cadence🎨</h2>

          <h3> Una lista de materiales de trabajo como paletillas y pinceles que puedes utilizar en tus proyectos artísticos.</h3>


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
