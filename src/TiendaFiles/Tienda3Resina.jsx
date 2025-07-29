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
    id: 722,
    name: 'Caballito de mar Nº1 24,5x13cm',
    price: '6.50',
    images: [
      'https://www.artesaniasmontejo.com/21893-28900-thickbox_default/caballito-de-mar-n1.jpg',
    ],
    label: '24,5x13',
    description: 'Resina de poliuretano blanco CADENCE para decorar con las pinturas y pastas Cadence.',
    selected: false,
  },
  {
    id: 723,
    name: 'Estrella de mar mediana 13,5x13,5cm',
    price: '6.20',
    images: [
      'https://www.artesaniasmontejo.com/21896-28903-large_default/estrella-de-mar-mediana.jpg',
    ],
    label: '13,5x13,5',
    description: 'Resina de poliuretano blanco CADENCE para decorar con las pinturas y pastas Cadence.',
    selected: false,
  },
  {
    id: 724,
    name: 'Tortuga de mar grande 15,5x12cm',
    price: '6.20',
    images: [
      'https://www.artesaniasmontejo.com/21898-28908-large_default/tortuga-de-mar-grande.jpg',
    ],
    label: '15,5x12',
    description: 'Resina de poliuretano blanco CADENCE para decorar con las pinturas y pastas Cadence.',
    selected: false,
  },
  {
    id: 792,
    name: 'Principe de Java',
    price: '28.60',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/wgftklyyr19sha2khsfyv/principe-de-java.jpg?rlkey=y0zwg1b3tkpyxeglx5ysxvxts&st=3gkxut3z&dl=0',
    ],
    label: '30x24x8',
    description: 'Resina de poliuretano blanco CADENCE para decorar con las pinturas y pastas Cadence.',
    selected: false,
  },
  {
    id: 793,
    name: 'Cabeza balinesa 43x27cm',
    price: '46.80',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/vshazsyt2t8gu6utsgcw1/cabeza-balinesa.jpg?rlkey=zlptly4gr4ayvdn9v0aunf17n&st=azu0hbfk&dl=0',
    ],
    label: '43x27',
    description: 'Resina de poliuretano blanco CADENCE para decorar con las pinturas y pastas Cadence.',
    selected: false,
  },
  {
    id: 794,
    name: 'Cabeza Buda 49x24cm',
    price: '28.20',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/lip7h7bny8j5s3m6wnjpr/buda-de-resina-de-poliuretano.jpg?rlkey=jz0wi0eusqjy1q6xwcq1yo67d&st=11oizasr&dl=0',
    ],
    label: '49x24',
    description: 'Resina de poliuretano blanco CADENCE para decorar con las pinturas y pastas Cadence.',
    selected: false,
  },
  {
  id: 795,
  name: 'Buda Sentado 33x25cm',
  price: '34.40',
  images: ['https://dl.dropboxusercontent.com/scl/fi/4psdwfdmfjxkz260l62q9/buda-sentado.jpg?rlkey=9bd9onz8iekjxtb5p4hehvjcz&st=cprx2yy7&dl=0'],
  label: '33x25',
  description: 'Resina de poliuretano blanco CADENCE para decorar con las pinturas y pastas Cadence.',
  selected: false,
},
{
  id: 796,
  name: 'Alas Grandes 75cm',
  price: '61.50',
  images: ['https://dl.dropboxusercontent.com/scl/fi/7vjzkzptnnltquei8bibb/resina-cadence-alas-grandes.jpg?rlkey=0h1wqjnn5firfe6kprlz1xumn&st=qmulaqwx&dl=0'],
  label: '75',
  description: 'Resina de poliuretano blanco CADENCE para decorar con las pinturas y pastas Cadence.',
  selected: false,
},
{
  id: 797,
  name: 'Cabeza Clásica Poseidón 25x17cm',
  price: '21.00',
  images: ['https://dl.dropboxusercontent.com/scl/fi/o7ud6nggxw0dr1i6mubzd/resina-cadence-cabeza-poseidon.jpg?rlkey=sq5rw8yjqitc5yzg0u97wutup&st=tri1akup&dl=0'],
  label: '25x17',
  description: 'Resina de poliuretano blanco CADENCE para decorar con las pinturas y pastas Cadence.',
  selected: false,
},
{
  id: 798,
  name: 'Cabeza Clásica Zeus 31x18cm',
  price: '21.00',
  images: ['https://dl.dropboxusercontent.com/scl/fi/s8v1ylg1kd6icbsho99om/resina-cadence-cabeza-zeus.jpg?rlkey=dy9h1ibqhb3tz0ryoda4drr8l&st=a3b077gn&dl=0'],
  label: '31x18',
  description: 'Resina de poliuretano blanco CADENCE para decorar con las pinturas y pastas Cadence.',
  selected: false,
},
{
  id: 799,
  name: 'Mandala 45cm diámetro',
  price: '32.60',
  images: ['https://dl.dropboxusercontent.com/scl/fi/kvsfb3olvji8r594occn1/resina-cadence-mandala-45.jpg?rlkey=1aomzuk9izw01tgwmnzoai2d4&st=faoche78&dl=0'],
  label: '45',
  description: 'Resina de poliuretano blanco CADENCE para decorar con las pinturas y pastas Cadence.',
  selected: false,
},
{
  id: 800,
  name: 'Mandala 2 39.5cm diámetro',
  price: '26.90',
  images: ['https://dl.dropboxusercontent.com/scl/fi/wfsvg8vauwi92m4qym66o/resina-cadence-mandala-2.jpg?rlkey=duah1ogs20r9ig1h4a3nj29tn&st=kni93u1f&dl=0'],
  label: '39.5',
  description: 'Resina de poliuretano blanco CADENCE para decorar con las pinturas y pastas Cadence.',
  selected: false,
},
{
  id: 801,
  name: 'Máscara Veneciana 31x19cm',
  price: '20.50',
  images: ['https://dl.dropboxusercontent.com/scl/fi/mk3imgm1dxqy1sgl4b2o6/resina-cadence-mascara-veneciana.jpg?rlkey=ll30fco5r6mbagv6wu1zulkjy&st=1mq4njfj&dl=0'],
  label: '31x19',
  description: 'Resina de poliuretano blanco CADENCE para decorar con las pinturas y pastas Cadence.',
  selected: false,
},
{
  id: 802,
  name: 'Máscara Veneciana Pavo 32x16cm',
  price: '20.50',
  images: ['https://dl.dropboxusercontent.com/scl/fi/z38mwktasgb9t90ndlpl3/resina-cadence-mascara-veneciana-pavo.jpg?rlkey=l2358b6upkl503dpe1s3h9g8j&st=mg54n42g&dl=0'],
  label: '32x16',
  description: 'Resina de poliuretano blanco CADENCE para decorar con las pinturas y pastas Cadence.',
  selected: false,
},
{
  id: 803,
  name: 'Máscara Acanto 10.5x8.5cm',
  price: '5.50',
  images: ['https://dl.dropboxusercontent.com/scl/fi/ohip20zyzzssyww1jsk4a/resina-cadence-mascara-acanto.jpg?rlkey=vj58eu8q1rre1umcvvim6ojkk&st=04koi658&dl=0'],
  label: '10.5x8.5',
  description: 'Resina de poliuretano blanco CADENCE para decorar con las pinturas y pastas Cadence.',
  selected: false,
},
{
  id: 804,
  name: 'Astronauta 36x46x9cm',
  price: '44.20',
  images: ['https://dl.dropboxusercontent.com/scl/fi/wt32baf96qsw6o8e4cwt8/Astronauta.jpg?rlkey=epmdbwcwrvk55z20wg67z2105&st=xl0pbw08&dl=0'],
  label: '36x46x9',
  description: 'Resina de poliuretano blanco CADENCE para decorar con las pinturas y pastas Cadence.',
  selected: false,
},
{
  id: 805,
  name: 'Marco Art Nouvel Ext 63x85cm Int 43.5cm',
  price: '51.10',
  images: ['https://dl.dropboxusercontent.com/scl/fi/t6tfxos2tm99a7gqppf3y/resina-cadence-art-noveau.jpg?rlkey=e1k39bml14m7m0gttgx7q9cts&st=pr0hvw9k&dl=0'],
  label: '63x85/43.5',
  description: 'Resina de poliuretano blanco CADENCE para decorar con las pinturas y pastas Cadence.',
  selected: false,
},
{
  id: 806,
  name: 'Marco Circular Barroco Ext 55x50cm Int 32.5cm',
  price: '24.60',
  images: ['https://dl.dropboxusercontent.com/scl/fi/vo0yef7nvrarl87xx9sde/resina-cadence-marco-circular-barroco.jpg?rlkey=llzi7yc4acbie4i352nt4r4m7&st=hkv09jzu&dl=0'],
  label: '55x50/32.5',
  description: 'Resina de poliuretano blanco CADENCE para decorar con las pinturas y pastas Cadence.',
  selected: false,
},
{
  id: 807,
  name: 'Placa Decorativa 60x60cm',
  price: '40.60',
  images: ['https://dl.dropboxusercontent.com/scl/fi/xaokjl90ehe5epjl8fzcc/resina-cadence-placa-decorativa-60x60.jpg?rlkey=o58fyak56fept4oz87t0vwq4m&st=ya6nu0f1&dl=0'],
  label: '60x60',
  description: 'Resina de poliuretano blanco CADENCE para decorar con las pinturas y pastas Cadence.',
  selected: false,
},
{
  id: 808,
  name: 'Placa Decorativa 57x57cm',
  price: '40.30',
  images: ['https://dl.dropboxusercontent.com/scl/fi/6hss1rdqpoltg5ncslr7l/resina-cadence-placa-decorativa-57x57.jpg?rlkey=x14mh08bh7cth3upb19co4s5v&st=2dob8gng&dl=0'],
  label: '57x57',
  description: 'Resina de poliuretano blanco CADENCE para decorar con las pinturas y pastas Cadence.',
  selected: false,
},
{
  id: 809,
  name: 'Marco Hojas y Frutos 23x18cm',
  price: '11.30',
  images: ['https://dl.dropboxusercontent.com/scl/fi/51viulueihvq1bcc59gjs/resina-cadence-marco-hojas-frutos.jpg?rlkey=waw9myx6eay382u1p0ka3kkhm&st=ayyixf6h&dl=0'],
  label: '23x18',
  description: 'Resina de poliuretano blanco CADENCE para decorar con las pinturas y pastas Cadence.',
  selected: false,
},
{
  id: 810,
  name: 'Marco Nenúfar 20.5x16cm',
  price: '10.80',
  images: ['https://dl.dropboxusercontent.com/scl/fi/wq8o4b2w4wqxbhhnpsozl/resina-cadence-marco-nenufar.jpg?rlkey=ium2lkj5iebbqpv67y7h20bc9&st=u2h43gyx&dl=0'],
  label: '20.5x16',
  description: 'Resina de poliuretano blanco CADENCE para decorar con las pinturas y pastas Cadence.',
  selected: false,
},
{
  id: 811,
  name: 'Hoja Nenúfar 25x25cm',
  price: '17.15',
  images: ['https://dl.dropboxusercontent.com/scl/fi/tp34o7yazc4isjqrytmj0/resina-cadence-hoja-nenufar.jpg?rlkey=y77xxrtrgpaxscfzmmgbyywza&st=q34a5ky6&dl=0'],
  label: '25x25',
  description: 'Resina de poliuretano blanco CADENCE para decorar con las pinturas y pastas Cadence.',
  selected: false,
},
{
  id: 812,
  name: 'Hoja Cadence 25x25cm',
  price: '17.15',
  images: ['https://dl.dropboxusercontent.com/scl/fi/8ilgwmffwmo69wwki8a9h/resina-cadence-hoja-cadence.jpg?rlkey=muohne9iu3k8cfx12g7rv1cyp&st=ktbpeit8&dl=0'],
  label: '25x25',
  description: 'Resina de poliuretano blanco CADENCE para decorar con las pinturas y pastas Cadence.',
  selected: false,
},
{
  id: 813,
  name: 'Peana + Cabeza Caballo',
  price: '23.00',
  images: ['https://dl.dropboxusercontent.com/scl/fi/rgf7pkdhh0rt7bmqptlb4/cabeza-caballo-peana.jpg?rlkey=yhzerv84qnxil4varfhuxk4wf&st=nw7y999b&dl=0'],
  label: '',
  description: 'Resina de poliuretano blanco CADENCE para decorar con las pinturas y pastas Cadence.',
  selected: false,
},


];

// Define el rango de precios mínimo y máximo de tus productos
const precioMinimo = 0;
const precioMaximo = 50;

export const Tienda3Resina = () => {
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
          <h2>Soportes de Resina🎨</h2>

          <h3>Soportes de resina ideales para tus proyectos artísticos.</h3>


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
