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
    id: 348,
    name: 'Barníz MATE 120ml.',
    price: '5.20',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/7bs487brwuexa0t3xktjt/barniz-cadence-mate-250-1.jpg?rlkey=s304w1xksyoncqrog7q397mtg&st=wq9k5unp&dl=0',
    ],
    label: '120 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA',
    selected: false,
  },
  {
    id: 349,
    name: 'Barníz MATE 250ml.',
    price: '9.40',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/7bs487brwuexa0t3xktjt/barniz-cadence-mate-250-1.jpg?rlkey=s304w1xksyoncqrog7q397mtg&st=wq9k5unp&dl=0',
    ],
    label: '250 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA',
    selected: false,
  },
  {
    id: 350,
    name: 'Barníz MATE 500ml.', 
    price: '16.40',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/2crok09kkl00mo30xexe9/barniz-cadence-mate-500.jpg?rlkey=ufz7xu775p44s8wp7ddo9g1co&st=v01jpd5a&dl=0',
    ],
    label: '500 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA',
    selected: false,
  },
  {
    id: 351,
    name: 'Barníz SATINADO 120ml.',
    price: '5.20',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/53m23x38b1q6ec132fwtl/barniz-cadence-satinado-120.jpg?rlkey=yjukfpkb56c6wuemthemvtwsl&st=udr8xprt&dl=0',
    ],
    label: '120 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA',
    selected: false,
  },
  {
    id: 352,
    name: 'Barníz SATINADO 250ml.',
    price: '9.40',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/vn9nksubsw9e8pxfgd228/barniz-cadence-satinado-250.jpg?rlkey=be20cm0qqin6lghunbbn2mmw7&st=8qdo69nb&dl=0',
    ],
    label: '250 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA',
    selected: false,
  },
  {
    id: 353,
    name: 'Barníz SATINADO 500ml.', 
    price: '16.40',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/pij36laxww30of5hfefo5/barniz-cadence-500-ml-satin.jpg?rlkey=7xsge32xxz3jiwe2eywimq9ow&st=zypktafr&dl=0',
    ],
    label: '500 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA',
    selected: false,
  },
  {
    id: 354,
    name: 'Barníz BRILLO 120ml.',
    price: '5.20',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/q5a46vdldu56i8n1e82w4/barniz-cadence-brillo-120.jpg?rlkey=lr671mq1nfpmded86x9ejv005&st=nqn6n9l2&dl=0',
    ],
    label: '120 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA',
    selected: false,
  },
  {
    id: 355,
    name: 'Barníz BRILLO 250ml.',
    price: '9.40',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/f6duwwyr9sqgqgdtksdvb/barniz-cadence-brillo-250.jpg?rlkey=by2atsh71hbdfnxp8fc9yb9kl&st=itvr1kgu&dl=0',
    ],
    label: '250 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA',
    selected: false,
  },
  {
    id: 356,
    name: 'Barníz BRILLO 500ml.', 
    price: '16.40',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/ucy9x28cdnsg2vu6fjlge/barniz-cadence-brillo-500.jpg?rlkey=ej2etxrelwlnmwajs7qzyksdk&st=ze5vjd96&dl=0',
    ],
    label: '500 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA',
    selected: false,
  },
  {
    id: 357,
    name: 'Barníz CUERO 120ml.', 
    price: '8.40',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/hxi6bwkkxou20kvnwzfyo/barniz-cadence-cuero-120.jpg?rlkey=kxsejsrdnnvfwq1guotwy923g&st=tkftdp8g&dl=0',
    ],
    label: '120 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA',
    selected: false,
  },
  {
    id: 358,
    name: 'Barníz ULTIMATE GLAZE MATE 120ml.', 
    price: '5.85',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/s51i71fimuel1gxm8qm95/barniz-ultimate-mate-120-ml.jpg?rlkey=chpgcr3ryd3tcr0js76vo33oe&st=xddrwe4e&dl=0',
    ],
    label: '120 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA',
    selected: false,
  },
  {
    id: 3540,
    name: 'Barníz Aqua Stone MATE 120ml.',
    price: '8.40',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/6sg758qnqz4bb3qvncgyd/barniz-exterior-aqua-stone-mate-120-ml.jpg?rlkey=6cvevkay8krth93pxc70ya9en&st=v5ge6mc6&dl=0',
    ],
    label: '120 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA',
    selected: false,
  },
  {
    id: 3550,
    name: 'Barníz Aqua Stone MATE 250ml.',
    price: '14.40',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/tmhlcur7arulasd6fvngn/barniz-exterior-aqua-stone-mate-250-ml.jpg?rlkey=sdcvyixthuh0czw7291t8dn8u&st=frc22bck&dl=0',
    ],
    label: '250 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA',
    selected: false,
  },
  {
    id: 3560,
    name: 'Barníz Aqua Stone MATE 500ml.', 
    price: '20.95',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/g6c41hpmh9p6qr23r4x83/barniz-exterior-aqua-stone-mate-500-ml.jpg?rlkey=fn6cwyvjlug1on030fkgrwtxj&st=qf0dg3gw&dl=0',
    ],
    label: '500 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA',
    selected: false,
  },
  {
    id: 3570,
    name: 'Barníz Aqua Stone BRILLO 120ml.',
    price: '8.40',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/reb769yuw1zi9fawriqg0/barniz-cadence-aqua-stone-120ml.jpg?rlkey=b9fb1a0485wcm5cv3ca2rhmwr&st=s2t4o2vb&dl=0',
    ],
    label: '120 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA',
    selected: false,
  },
  {
    id: 3580,
    name: 'Barníz Aqua Stone BRILLO 250ml.',
    price: '14.40',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/cejswc75vi2y4q8vwjxhd/barniz-cadence-aqua-stone-250ml.jpg?rlkey=35v9g7mh4ejf2nxxtcg7rk8gt&st=0y7pj7wq&dl=0',
    ],
    label: '250 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA',
    selected: false,
  },
  {
    id: 3590,
    name: 'Barníz Aqua Stone BRILLO 500ml.', 
    price: '20.95',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/ucy9x28cdnsg2vu6fjlge/barniz-cadence-brillo-500.jpg?rlkey=ej2etxrelwlnmwajs7qzyksdk&st=kdswk2zx&dl=0',
    ],
    label: '500 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA',
    selected: false,
  },
  {
    id: 3591,
    name: 'Barníz Craquelador UN PASO Cadence ', 
    price: '3.25',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/lrbkodsku16nr76jnym9v/craquelador-de-1-paso-cadence.jpg?rlkey=8hhu869p4szkhdzcmhdtxukgg&st=zjcphi0n&dl=0',
    ],
    label: '500 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA',
    selected: false,
  },
  {
    id: 3592,
    name: 'Barníz Craquelador DOS PASOS Cadence ', 
    price: '5.80',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/1ye0krnf5qnumkyev0tpx/craquelador-de-2-pasos-cadence.jpg?rlkey=ywnsyh16eighsedxi6btgjujb&st=ytwjqwdd&dl=0',
    ],
    label: '500 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA',
    selected: false,
  },
  {
    id: 359,
    name: 'Decoupage Textil Cadence 120ml.', 
    price: '5.50',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/x3rvxavuapl82j45nxb6z/decoupage-textil-cadence.jpg?rlkey=mi33pto292idez6e7g85ibyo2&st=t3i6o5yz&dl=0',
    ],
    label: '120 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA',
    selected: false,
  },
  {
    id: 360,
    name: 'Decoupage Plus MATT Cadence 250ml.', 
    price: '7.90',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/x0sv6m90zyv48yvuca7if/decoupage-plus-cadence.jpg?rlkey=zns1vap1ac0v8nso3aav39klb&st=vd241jh2&dl=0',
    ],
    label: '250 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA',
    selected: false,
  },
  {
    id: 605,
    name: 'Spray Adhesivo Stencils CADENCE', 
    price: '6.40',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/5wh9s1pm1xy81kk6w8tpn/spray-adhesivo-stencils-cadence.jpg?rlkey=dqth23sr3ip6jrbvp4vrprgih&st=51os782h&dl=0',
    ],
    label: '150 ml.',
    description: 'Protege su adhesión en baja y alta temperatura, no se transere a la supercie utilizada, permite una limpieza fácil y el uso múltiple. Se despega y se pega otra vez, permanezca pegajoso por un largo tiempo, y el color no mancha y no se arruga.',
    selected: false,
  },
  {
    id: 606,
    name: 'ACRILEX Barniz Cristal 100ml', 
    price: '7.85',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/d8ep5ick6l9248abpdr6u/pelicula-de-transferencia-pebeo.jpg?rlkey=0bfdl0nmp4tmywl6h7diozbmf&st=nb9hx183&dl=0',
    ],
    label: '100 ml.',
    description: 'ACRILEX Barniz Cristal, 250ml Barniz efecto cristal de un solo componente. Aplicar a pincel o directamente del frasco si queremos cubrir una superficie grande.',
    selected: false,
  },
  {
    id: 582,
    name: 'Barniz PLUS+ para pan de oro 100ml.',
    price: '5.20',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/ik1fdluxmw5s3z74dh2zn/barniz-plus-para-pan-de-oro-cadence.jpg?rlkey=ufu2j00h4kp28ih0dq3xuz5qe&st=22nhglzd&dl=0',
    ],
    label: '100ml',
    description: 'Barniz Plus + de CADENCE puede ser usado de una manera sencilla sobre trabajos de imitación de metal, sobre en pan de oro o foil metalizado. Es un barniz listo para usar con pincel, muy brillante y que no se deslustra.',
    selected: false,
  },
  {
    id: 756,
    name: 'PURPLE Colour On VARNISH 90ml.',
    price: '4.60',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/dhq10sw5uq3g7i6f2w7j5/colour-on-varnish-purple-90ml.jpg?rlkey=wowazobtz60aft96wf1nm7xrf&st=har2dnvs&dl=0',
    ],
    label: '90ml',
    description: 'Barniz a base de agua de alta calidad, duro y duradero que se puede utilizar en todas las superficies duras y de madera de interior. Proporciona un aspecto cálido a cualquier madera y superficies duras de interior. Se debe aplicar con rodillo para superficies grandes, y con brocha para otras superficies. Dependiendo de la temperatura del aire, el tiempo de secado es de 6 a 12 horas. Debes esperar 24 horas para la segunda capa.',
    selected: false,
  },
  {
    id: 757,
    name: 'OAK Colour On VARNISH 90ml.',
    price: '4.60',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/b0juznzwqlurul42vbovs/colour-on-varnish-oak-90ml.jpg?rlkey=ss2vaiv4g8454o9p870zm6mzt&st=47e07sns&dl=0',
    ],
    label: '90ml',
    description: 'Barniz a base de agua de alta calidad, duro y duradero que se puede utilizar en todas las superficies duras y de madera de interior. Proporciona un aspecto cálido a cualquier madera y superficies duras de interior. Se debe aplicar con rodillo para superficies grandes, y con brocha para otras superficies. Dependiendo de la temperatura del aire, el tiempo de secado es de 6 a 12 horas. Debes esperar 24 horas para la segunda capa.',
    selected: false,
  },
  {
    id: 758,
    name: 'GREEN Colour On VARNISH 90ml.',
    price: '4.60',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/l8m8samyyqid667chqumq/colour-on-varnish-green-90ml.jpg?rlkey=edurb6coamvoosf4feve1uxzw&st=jy29e09n&dl=0',
    ],
    label: '90ml',
    description: 'Barniz a base de agua de alta calidad, duro y duradero que se puede utilizar en todas las superficies duras y de madera de interior. Proporciona un aspecto cálido a cualquier madera y superficies duras de interior. Se debe aplicar con rodillo para superficies grandes, y con brocha para otras superficies. Dependiendo de la temperatura del aire, el tiempo de secado es de 6 a 12 horas. Debes esperar 24 horas para la segunda capa.',
    selected: false,
  },
  {
    id: 759,
    name: 'BLUE Colour On VARNISH 90ml.',
    price: '4.60',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/ad015g8gnomkbnl1b4nbw/colour-on-varnish-blue-90ml.jpg?rlkey=mgkifetesxg6tl43vm6ba51wt&st=rcw46tn3&dl=0',
    ],
    label: '90ml',
    description: 'Barniz a base de agua de alta calidad, duro y duradero que se puede utilizar en todas las superficies duras y de madera de interior. Proporciona un aspecto cálido a cualquier madera y superficies duras de interior. Se debe aplicar con rodillo para superficies grandes, y con brocha para otras superficies. Dependiendo de la temperatura del aire, el tiempo de secado es de 6 a 12 horas. Debes esperar 24 horas para la segunda capa.',
    selected: false,
  },



  





];

// Define el rango de precios mínimo y máximo de tus productos
const precioMinimo = 0;
const precioMaximo = 20;

export const Tienda3Barnices = () => {
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

  const visibleProducts = products.slice().reverse().slice(startIndex, endIndex);







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
          <h2>Barnices y Craqueladores Cadence🎨</h2>

          <h3>Amplia selección de barnices en spray o para brocha, con acabados mate, satinados, alto brillo de 2 componentes...  Además de craqueladores de 1 paso o 2 pasos de la marca CADENCE</h3>

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
