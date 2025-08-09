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
import { Link } from "react-router-dom";
import { Navbar2 } from "../navbar/Navbar2";
import { WavyContainer, WavyLink } from "react-wavy-transitions";

const initialProducts = [
  {
    id: 349,
    name: "Butterflies - Mint Papel de seda",
    price: 21.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/ti3qxixf9s455yb4l36y2/shutterstock-1807575772-2-5000x.jpg?rlkey=210elbbm1xthnsp9z5wly5s3x&st=qgas6vrg&dl=0",
    ],
    label: "Papel de seda",
    description:
      "Mint Tissue Papers ofrece elegancia y sofisticación con diseños sin interrupciones, tamaño generoso de 35x35 cm y calidad premium de 28gsm. Cada paquete incluye tres papeles, brindando un valor excepcional para proyectos creativos. A diferencia de Mint Decoupage Papers, son especializados y versátiles para envolver regalos y hacer tarjetas.",
    selected: false,
  },
  {
    id: 350,
    name: "Distressed Tile - Mint Papel de seda ",
    price: 21.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/5i42kvf36lmveel84u67s/distressedtile-5000x.jpg?rlkey=q0pzv7t358lyuicd2itckwt10&st=ww94ppcl&dl=0",
    ],
    label: "Papel de seda",
    description:
      "Mint Tissue Papers ofrece elegancia y sofisticación con diseños sin interrupciones, tamaño generoso de 35x35 cm y calidad premium de 28gsm. Cada paquete incluye tres papeles, brindando un valor excepcional para proyectos creativos. A diferencia de Mint Decoupage Papers, son especializados y versátiles para envolver regalos y hacer tarjetas.",
    selected: false,
  },
  {
    id: 351,
    name: "Green Leaves - Mint Papel de seda",
    price: 21.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/3lojupyg9ulejevnh10qb/untitleddesign-5000x-2.jpg?rlkey=wj8cyv3dfdxnxsilxvtbb0hlv&st=bf4ibr8z&dl=0",
    ],
    label: "Papel de seda",
    description:
      "Mint Tissue Papers ofrece elegancia y sofisticación con diseños sin interrupciones, tamaño generoso de 35x35 cm y calidad premium de 28gsm. Cada paquete incluye tres papeles, brindando un valor excepcional para proyectos creativos. A diferencia de Mint Decoupage Papers, son especializados y versátiles para envolver regalos y hacer tarjetas.",
    selected: false,
  },
  {
    id: 352,
    name: "Lace - Mint Papel de seda",
    price: 21.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/rjbgrg6gzui3s43brelbq/lace-2048x.jpg?rlkey=usl068uc4b3vcv3qf9qweqxnr&st=pr8yn4zg&dl=0",
    ],
    label: "Papel de seda",
    description:
      "Mint Tissue Papers ofrece elegancia y sofisticación con diseños sin interrupciones, tamaño generoso de 35x35 cm y calidad premium de 28gsm. Cada paquete incluye tres papeles, brindando un valor excepcional para proyectos creativos. A diferencia de Mint Decoupage Papers, son especializados y versátiles para envolver regalos y hacer tarjetas.",
    selected: false,
  },
  {
    id: 353,
    name: "Lemons - Mint Papel de seda",
    price: 21.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/dcxjmniqq8hzcxa1a11o9/lemons-5000x.jpg?rlkey=5p75yz17g54ciniew2qn6fsj3&st=296v4eyk&dl=0",
    ],
    label: "Papel de seda",
    description:
      "Mint Tissue Papers ofrece elegancia y sofisticación con diseños sin interrupciones, tamaño generoso de 35x35 cm y calidad premium de 28gsm. Cada paquete incluye tres papeles, brindando un valor excepcional para proyectos creativos. A diferencia de Mint Decoupage Papers, son especializados y versátiles para envolver regalos y hacer tarjetas.",
    selected: false,
  },
  {
    id: 354,
    name: "Moroccan Tile - Mint Papel de seda",
    price: 21.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/wjj4v8fvir0b65hkpzo16/untitleddesign-85-5000x.png?rlkey=c53918h1lksjj9qjnv7l0cv0r&st=me3zadai&dl=0",
    ],
    label: "Papel de seda",
    description:
      "Mint Tissue Papers ofrece elegancia y sofisticación con diseños sin interrupciones, tamaño generoso de 35x35 cm y calidad premium de 28gsm. Cada paquete incluye tres papeles, brindando un valor excepcional para proyectos creativos. A diferencia de Mint Decoupage Papers, son especializados y versátiles para envolver regalos y hacer tarjetas.",
    selected: false,
  },
  {
    id: 355,
    name: "Pastel Florals - Mint Papel de seda",
    price: 21.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/tpami207h9fs68h1ewt4m/pastelflorals-2048x.jpg?rlkey=ci22rrjovg6ub7o99aiy9b7xe&st=u5bhxh1u&dl=0",
    ],
    label: "Papel de seda",
    description:
      "Mint Tissue Papers ofrece elegancia y sofisticación con diseños sin interrupciones, tamaño generoso de 35x35 cm y calidad premium de 28gsm. Cada paquete incluye tres papeles, brindando un valor excepcional para proyectos creativos. A diferencia de Mint Decoupage Papers, son especializados y versátiles para envolver regalos y hacer tarjetas.",
    selected: false,
  },
  {
    id: 356,
    name: "Pink Peacocks - Mint Papel de seda",
    price: 21.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/xe8on47oj0b8sig25d8ed/pinkpeacocks-5000x.jpg?rlkey=qfjp3vyf0biqvkq0ljs1yyh3j&st=nq13gv5u&dl=0",
    ],
    label: "Papel de seda",
    description:
      "Mint Tissue Papers ofrece elegancia y sofisticación con diseños sin interrupciones, tamaño generoso de 35x35 cm y calidad premium de 28gsm. Cada paquete incluye tres papeles, brindando un valor excepcional para proyectos creativos. A diferencia de Mint Decoupage Papers, son especializados y versátiles para envolver regalos y hacer tarjetas.",
    selected: false,
  },
  {
    id: 357,
    name: "White Flower - Mint Papel de seda",
    price: 21.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/bciv1ehbbum0r11fpmpag/untitleddesign-83-2048x.png?rlkey=5fv1n72oaqdjd1mzbqdhyqaq7&st=9k9zm5i7&dl=0",
    ],
    label: "Papel de seda",
    description:
      "Mint Tissue Papers ofrece elegancia y sofisticación con diseños sin interrupciones, tamaño generoso de 35x35 cm y calidad premium de 28gsm. Cada paquete incluye tres papeles, brindando un valor excepcional para proyectos creativos. A diferencia de Mint Decoupage Papers, son especializados y versátiles para envolver regalos y hacer tarjetas.",
    selected: false,
  },
  {
    id: 358,
    name: "Yellow Chinoiserie - Mint Papel de seda",
    price: 21.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/sl93t7x889s6lu5yiuwss/yellow-chinoiserie.jpg?rlkey=yb90r4ys0ft941ev785igrlan&st=9nw004xe&dl=0",
    ],
    label: "Papel de seda",
    description:
      "Mint Tissue Papers ofrece elegancia y sofisticación con diseños sin interrupciones, tamaño generoso de 35x35 cm y calidad premium de 28gsm. Cada paquete incluye tres papeles, brindando un valor excepcional para proyectos creativos. A diferencia de Mint Decoupage Papers, son especializados y versátiles para envolver regalos y hacer tarjetas.",
    selected: false,
  },
  {
    id: 359,
    name: "A peacock pair - Papel para decoupage - A1 ",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/yavr024he2xjvpbhxjmso/img-7536-1-1.jpg?rlkey=j6olengiku2keoa7j8xgilmjg&st=783ics4y&dl=0",
    ],
    label: "A1",
    description:
      "Lanzados el 10 de noviembre de 2023, los papeles de decoupage MINT están diseñados para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles buscan convertir tus proyectos en obras de arte. Se incluyen instrucciones detalladas, y se recomienda usar pegamento Decopatch decoupage.",
    selected: false,
  },
  {
    id: 360,
    name: "A peacock pair - Papel para decoupage - A3 ",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/yavr024he2xjvpbhxjmso/img-7536-1-1.jpg?rlkey=j6olengiku2keoa7j8xgilmjg&st=783ics4y&dl=0",
    ],
    label: "A3",
    description:
      "Lanzados el 10 de noviembre de 2023, los papeles de decoupage MINT están diseñados para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles buscan convertir tus proyectos en obras de arte. Se incluyen instrucciones detalladas, y se recomienda usar pegamento Decopatch decoupage.",
    selected: false,
  },
  {
    id: 361,
    name: "A Vintage Christmas - Papel para decoupage - A1 ",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/eisxmalv83qeosf7gwkcm/img-7533.jpg?rlkey=fbp8wo1c3iku9omaqw8o1g613&st=u07k0gpi&dl=0",
    ],
    label: "A1",
    description:
      "Lanzados el 10 de noviembre de 2023, los papeles de decoupage MINT están diseñados para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles buscan convertir tus proyectos en obras de arte. Se incluyen instrucciones detalladas, y se recomienda usar pegamento Decopatch decoupage.",
    selected: false,
  },
  {
    id: 362,
    name: "A Vintage Christmas - Papel para decoupage - A3 ",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/eisxmalv83qeosf7gwkcm/img-7533.jpg?rlkey=fbp8wo1c3iku9omaqw8o1g613&st=u07k0gpi&dl=0",
    ],
    label: "A3",
    description:
      "Lanzados el 10 de noviembre de 2023, los papeles de decoupage MINT están diseñados para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles buscan convertir tus proyectos en obras de arte. Se incluyen instrucciones detalladas, y se recomienda usar pegamento Decopatch decoupage.",
    selected: false,
  },
  {
    id: 363,
    name: "Hybrid VERDE ESMERALDA 70ml.",
    price: "2.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/q4dibnw79jzvcfeymmb8m/hybrid-emerald-green-70ml.jpg?rlkey=1t6kp6xbn2tpf8lwyc1s5ve3y&st=k6zpz84h&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 364,
    name: "Hybrid VERDE HOJA 70ml.",
    price: "2.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/nynkpubwsgcg34uie5p3f/hybrid-verde-hoja-70ml.jpg?rlkey=z64be1uzqggh3iaqzrsk6siqt&st=yeg88bm3&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 365,
    name: "Hybrid APPLE CANDY 70ml.",
    price: "2.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/v1nbsl5w6b6ca1xe450gv/hybrid-apple-candy-70ml.jpg?rlkey=0b7gp9zvd93dejfbvzv4qhx6k&st=s91du5ev&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 366,
    name: "Hybrid OCÉANO 70ml.",
    price: "2.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/cny4ybopkuzjytvsff251/hybrid-oceano-70ml.jpg?rlkey=5aqd25xdf5006mkxplagmy9eh&st=egoiuw9f&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 367,
    name: "Hybrid AMARILLO SOL 70ml.",
    price: "2.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/rkdgr35hvnkzfs7usntto/hybrid-sun-yellow-70ml.jpg?rlkey=tm6qf82qj8nj4wpfhw6d0u2bq&st=splqybtg&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 368,
    name: "Hybrid Metallic TURQUESA 70ml.",
    price: "3.30",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/ty8oys54dc76qmok3s6i2/hybrid-metallic-cadence-turquesa-70.jpg?rlkey=5v1bnwe7bgi3rmfm9qcssgboa&st=zsizrrsw&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA",
    selected: false,
  },
  {
    id: 369,
    name: "Hybrid Metallic COBRE 70ml.",
    price: "3.30",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/rhb1w26ty411hpd13st6z/hybrid-metallic-cadence-cobre-70.jpg?rlkey=z642qn7lbiqtpy4r3hxmh836t&st=m27ommuo&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA",
    selected: false,
  },
  {
    id: 370,
    name: "Hybrid Metallic ORO OSCURO 120ml.",
    price: "5.30",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/oy6qj2s2mcy0fp4115w9a/hybrid-metallic-cadence-oroscuro-120.jpg?rlkey=j0k1qfj1cfnnihgs5x0iq7zzo&st=utrpvtk9&dl=0",
    ],
    label: "120 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA",
    selected: false,
  },
  {
    id: 371,
    name: "Hybrid Metallic PLATINO 120ml.",
    price: "5.30",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/x74qk63mqwdin6094cj7z/hybrid-metallic-cadence-platino-120.jpg?rlkey=a41bnrahg9ogm7kgxv9msj3mi&st=1mkcu3x3&dl=0",
    ],
    label: "120 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA",
    selected: false,
  },
];

// Define el rango de precios mínimo y máximo de tus productos
const precioMinimo = 0;
const precioMaximo = 50;

export const Tienda = () => {
  const [products, setProducts] = useState(initialProducts);
  const [priceRange, setPriceRange] = useState([precioMinimo, precioMaximo]);
  const [selectedClasses, setSelectedClasses] = useState([]);
  const [showNoProducts, setShowNoProducts] = useState(false);
  const [cart, setCart] = useState([]);
  const [showOverlay, setShowOverlay] = useState(false);

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

  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowText(false);
    }, 10000); // Cambia este valor para ajustar la duración de la aparición antes de la desaparición

    return () => clearTimeout(timeout);
  }, []);

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

  return (
    <>
      <Navbar2 />

      {showOverlay && <div className="overlay"></div>}
      <div className="tienda">
        <br></br>

        <div className="menu">
          <h1>Tienda de productos para artistas🎨</h1>

          <h3>
            Bienvenidos a la tienda de CarmenLands, aquí encontrareis una gran
            variedad de productos con los que yo personalmente trabajo y
            recomiendo. <br></br>Pulsa en{" "}
            <Link to="/tienda/mint-by-michelle">
              <span id="mint-text">Mint by Michelle</span>
            </Link>
            , en{" "}
            <Link to="/tienda/cadence">
              <span id="cadence-text">Cadence</span>
            </Link>{" "}
            ,en{" "}
            <Link to="/tienda/muebles-ornamentos">
              <span id="muebles-text">Muebles y Ornamentos </span>
            </Link>
             o en{" "}
            <Link to="/tienda/montejo">
              <span id="montejo-text">Montejo </span>
            </Link>
             para ver sus productos{" "}
          </h3>

          <div className="marcas">
            <WavyLink
              direction="up"
              to="/tienda/mint-by-michelle"
              color="#6aee75"
            >
              <div className="mint"></div>
            </WavyLink>
            <WavyLink direction="up" to="/tienda/cadence" color="#4593db">
              <div className="cadence"></div>
            </WavyLink>
            <WavyLink direction="up" to="/tienda/montejo" color="#dbac45ff">
              <div className="montejo"></div>
            </WavyLink>
            <WavyLink
              direction="up"
              to="/tienda/muebles-ornamentos"
              color="#db4545"
            >
              <div className="muebles"></div>
            </WavyLink>
            <WavyLink
              direction="up"
              to="/tienda/papers-for-you"
              color="#e268b4ff"
            >
              <div className="papers-for-you"></div>
            </WavyLink>

            <WavyLink
              direction="up"
              to="/tienda/rossi"
              color="#915829ff"
            >
              <div className="rossi"></div>
            </WavyLink>
            
          </div>
        </div>

        <div className="pp">
          <div className={`animated-text ${showText ? "appear" : "disappear"}`}>
            💡Productos recomendados que quizás te interesen o te sean
            inspiradores para tus proyectos😉
          </div>
        </div>
        <br></br>

        <div className="product-list">
          {showNoProducts ? (
            <p>
              {" "}
              <br></br> <br></br>No hay productos según su búsqueda.
            </p>
          ) : (
            visibleProducts
              .sort(() => 0.5 - Math.random())
              .slice(0, 8)
              .map((product) => (
                <ProductCard
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
