import React, { useState, useEffect } from "react";
import { Navbar } from "../navbar/Navbar";
import { ProductCard } from "../tienda/ProductCard";
import { SearchBar } from "../tienda/SearchBar";
import { Cart } from "../tienda/Cart";
import { Slide } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Tag } from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";

import Aos from "aos";
import "aos/dist/aos.css";
import ScrollToTopButton from "../parallax/parallax-2/ScrollToTopButton";
import { Navbar2 } from "../navbar/Navbar2";
import { ProductCard4 } from "../tienda/ProductCard4";
import { Navbar5 } from "../navbar/Navbar5";

const initialProducts = [
  {
    id: 1031,
    name: "MOCHILA INFANTIL ALGODÓN 23x21cm",
    price: "3.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/kt3cztqnrox0na6r5naw6/textil-cadence-mochila-infantil.jpg?rlkey=6l14hxupd5au4s9qsf6if2i0x&st=rbw9btl5&dl=0",
    ],
    label: "mochila",
    description: "Mochila de tamaño infantil confeccionada en algodón.",
    selected: false,
  },
  {
    id: 1032,
    name: "MOCHILA ALGODÓN 38x36cm",
    price: "6.70",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/bxy4kukkyrr1sw9ocghi9/textil-cadence-mochila.jpg?rlkey=8nbkdhb4jsz7utqafpi2cmdqk&st=t75riv31&dl=0",
    ],
    label: "mochila",
    description: "Mochila de tamaño infantil confeccionada en algodón.",
    selected: false,
  },
  {
    id: 1033,
    name: "BOLSA ALGODÓN 30x37cm",
    price: "6.30",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/ls0geuaz71qy0cathox7r/textil-cadence-bolsa.jpg?rlkey=9y66nccmfcdc5s9s4fpjf3b9s&st=k66byhqs&dl=0",
    ],
    label: "bolsa",
    description: "Bolsa de algodón de tamaño 30x37 cm.",
    selected: false,
  },
  {
    id: 1034,
    name: "BOLSA ALGODÓN PREDISEÑO KOALA 27x32cm",
    price: "2.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/uqnjw39i63inkzv0ejqat/textil-cadence-bolsa-algodon-koala.jpg?rlkey=14dd3hgxh1scgegp2b795socz&st=7k1i4grn&dl=0",
    ],
    label: "bolsa",
    description: "Bolsa de algodón con diseño prediseñado Koala.",
    selected: false,
  },
  {
    id: 1035,
    name: "BOLSA ALGODÓN PREDISEÑO DUENDES 27x32cm",
    price: "2.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/3qmyf7lr0np1qu1khyfj4/textil-cadence-bolsa-algodon-duendes.jpg?rlkey=itf1k9tk4auibi0yfphsd6ify&st=f0trrlpv&dl=0",
    ],
    label: "bolsa",
    description: "Bolsa de algodón con diseño prediseñado Duendes.",
    selected: false,
  },
  {
    id: 1036,
    name: "BOLSA ALGODÓN CON ASAS 55x39cm",
    price: "7.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/7v2q8i35im76mu4qsdan5/Bolsa-algodon-con-asas-55x39-cm.jpg?rlkey=wxnjdyp3nhu7klbj6i8n6lsq8&st=tnznwgs0&dl=0",
    ],
    label: "bolsa",
    description: "Bolsa de algodón con asas de 55x39 cm.",
    selected: false,
  },
  {
    id: 1037,
    name: "BOLSA ZIPPER FLECOS 36x46cm",
    price: "15.00",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/yz5j8hp4dp3ukr867qd5u/Bolsa-zipper-algodon-flecos-36x46cm.jpg?rlkey=0v6qai7titgt5u4sldyixq4zl&st=eg9cyk2m&dl=0",
    ],
    label: "bolsa",
    description: "Bolsa de algodón con cremallera y flecos de 36x46 cm.",
    selected: false,
  },
  {
    id: 1038,
    name: "BOLSA ALGODÓN RECICLADO 50x36cm",
    price: "4.80",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/osx8zsh4qnx038ry8s6v8/Bolsa-algodon-reciclado-50x36-cm.jpg?rlkey=961z67qidcfejfoas9v0zy2os&st=2z9tocjn&dl=0",
    ],
    label: "bolsa",
    description: "Bolsa de algodón reciclado de 50x36 cm.",
    selected: false,
  },
  {
    id: 1039,
    name: "BOLSA ALGODÓN 42x40cm",
    price: "5.70",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/0pfrsztiukgz0szfol5jr/Tote-algodon-42x40-cm.jpg?rlkey=6w9pgakvcotga7b60znvrcm2z&st=31uzgzkm&dl=0",
    ],
    label: "bolsa",
    description: "Bolsa de algodón de 42x40 cm.",
    selected: false,
  },
  {
    id: 1040,
    name: "COJÍN ALGODÓN 45x45cm",
    price: "7.80",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/q30lqeo8dstbzvgp8a5f9/COJIN-45X45.jpg?rlkey=gjeopz5be0czh6zenfob7cl91&st=05ekt02o&dl=0",
    ],
    label: "cojín",
    description: "Cojín de algodón de 45x45 cm.",
    selected: false,
  },
  {
    id: 1041,
    name: "PORTA DOCUMENTOS VIAJE 25x13.5cm",
    price: "5.50",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/dh9cy5blizm3qd7gaifmz/Portadocumentos-viaje-25x135-cm.jpg?rlkey=55nd4ie7n793raucbgwynyq08&st=dfttw2ck&dl=0",
    ],
    label: "porta documentos",
    description: "Portadocumentos de vinilo de 25x13.5 cm.",
    selected: false,
  },
  {
    id: 1042,
    name: "ROSA MARMOL Cinta seda reciclada 1m",
    price: "1.00",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/4gzk2k9uesfxzs4aw65i2/cinta-seda-reciclada-rosa-mrmol-100-gr.jpg?rlkey=ng3lwocx3goplclhgy8gld7a4&st=48yn1vor&dl=0",
    ],
    label: "cinta reciclada",
    description: "Cinta de seda reciclada de 1 metro.",
    selected: false,
  },
  {
    id: 1043,
    name: "PURPURA VIEJO Cinta seda reciclada 1m",
    price: "1.00",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/ii96ujm80zy9lyumvokmv/cinta-seda-reciclada-prpura-viejo-100-gr.jpg?rlkey=v98lwl1v6f1cpctv0ahgl0jl6&st=feuxsww7&dl=0",
    ],
    label: "cinta reciclada",
    description: "Cinta de seda reciclada de 1 metro.",
    selected: false,
  },
  {
    id: 1044,
    name: "OCRE Cinta seda reciclada 1m",
    price: "1.00",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/87l2f8uu21pr48besp1m8/cinta-seda-reciclada-ocre-100-gr.jpg?rlkey=dpak6ogwvtows1cqmcy6ba7d7&st=59k3lf7u&dl=0",
    ],
    label: "cinta reciclada",
    description: "Cinta de seda reciclada de 1 metro.",
    selected: false,
  },
  {
    id: 1045,
    name: "ARENA Cinta seda reciclada 1m",
    price: "1.00",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/9o1ov977il6ukfxuqkyz8/cinta-seda-reciclada-arena-100-gr.jpg?rlkey=evag23rwea4kag8cx0vz5rd2l&st=g6stx9ee&dl=0",
    ],
    label: "cinta reciclada",
    description: "Cinta de seda reciclada de 1 metro.",
    selected: false,
  },
  {
    id: 1046,
    name: "NILO Cinta seda reciclada 1m",
    price: "1.00",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/3g52go0oddnzk32t63dpy/cinta-seda-reciclada-nilo-100-gr.jpg?rlkey=r3hwwm9enro65okv492mtioiv&st=qd5fbhqs&dl=0",
    ],
    label: "cinta reciclada",
    description: "Cinta de seda reciclada de 1 metro.",
    selected: false,
  },
];

// Define el rango de precios mínimo y máximo de tus productos
const precioMinimo = 0;
const precioMaximo = 20;

export const Tienda5MontejoTextil = () => {
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
        (selectedClasses.length === 0 ||
          selectedClasses.includes(product.label)) &&
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

    if (searchText !== "") {
      const filteredProducts = products.filter((product) =>
        removeAccents(product.name)
          .toLowerCase()
          .includes(searchText.toLowerCase())
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
    const existingProductIndex = cart.findIndex(
      (item) => item.id === product.id
    );

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
      top: 0,
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
    const data = window.localStorage.getItem("cart");
    if (data !== null) {
      setCart(JSON.parse(data));
    }
    setIsLoading(false); // <- Mueve esto aquí para indicar que la carga se ha completado
  }, []);

  useEffect(() => {
    // Guarda el carrito en localStorage cada vez que cambie
    window.localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  if (isLoading) {
    // You can render a loading indicator here if needed
    return <p>Loading...</p>;
  }

  return (
    <>
      <Navbar5 />

      {showOverlay && <div className="overlay"></div>}
      <div className="tienda" id="tienda5">
        <br></br>

        <div className="menu">
          <h1>Tienda de productos - Montejo 🎗️</h1>
          <h2>Textil Algodón Montejo🎨</h2>

          <h3>
            Soportes textiles de algodón en color crudo o negro utilizados para decorar con los transfers, pinturas y pastas textiles.
          </h3>

          <Button
            className="remove-button3"
            rightIcon={filterButtonIcon}
            onClick={handleToggleFilters}
            colorScheme="orange"
            bg='orange.600'
            variant="solid"
          >
            Filtrar Productos
          </Button>

          <SearchBar onSearch={handleSearch} />

          <button className="bn632-hover bn22d" onClick={handleToggleCart}>
            Carrito🛒
          </button>
        </div>

        {showFilters && (
          <div data-aos="fade-right">
            <div className="filter">
              {Array.from(
                new Set(
                  initialProducts.map((product) => product.label)
                ).values()
              ).map((selectedClass) => (
                <Tag
                  size={"lg"}
                  key={"lg"}
                  variant="solid"
                  colorScheme="orange"
                  bg="orange.600"
                >
                  <label
                    key={selectedClass}
                    className="filter-item"
                    id="checkbox"
                  >
                    <input
                      type="checkbox"
                      checked={selectedClasses.includes(selectedClass)}
                      onChange={() => toggleSelectedClass(selectedClass)}
                    />
                    {selectedClass}
                  </label>
                </Tag>
              ))}
            </div>{" "}
            <div className="price-slider">
              <input
                type="range"
                min={precioMinimo}
                max={precioMaximo}
                value={priceRange[0]}
                onChange={handlePriceChange}
              />
              <p>Precio Mínimo: {priceRange[0]}€</p>
              <input
                type="range"
                min={precioMinimo}
                max={precioMaximo}
                value={priceRange[1]}
                onChange={handleMaxPriceChange}
              />
              <p>Precio Máximo: {priceRange[1]}€</p>
            </div>
          </div>
        )}

        <div className="product-list">
          {showNoProducts ? (
            <p>
              {" "}
              <br></br> <br></br>No hay productos según su búsqueda.
            </p>
          ) : (
            visibleProducts.map((product) => (
              <ProductCard4
                key={product.id}
                product={product}
                addToCart={addToCart}
                onToggle={onToggle}
                handleToggleCart={handleToggleCart}
              />
            ))
          )}
        </div>
        <br></br>
        <br></br>

        <div className="pagination">
          <button onClick={handleGoToFirstPage}>Inicio</button>
          <button onClick={handlePrevPage}>Anterior</button>
          <span>
            Página {currentPage} de {totalPages}
          </span>
          <button onClick={handleNextPage}>Siguiente</button>
          <button onClick={handleGoToLastPage}>Final</button>
        </div>

        <br></br>
        <br></br>

        <Slide direction="bottom" in={isOpen} style={{ zIndex: 10 }}>
          <Box
            p="40px"
            color="white"
            mt="4"
            bg="teal.500"
            rounded="md"
            shadow="md"
          >
            <Cart
              cart={cart}
              setCart={setCart}
              removeFromCart={removeFromCart}
              handleCloseCart={handleCloseCart}
            />
          </Box>
        </Slide>

        <ScrollToTopButton />
      </div>
    </>
  );
};
