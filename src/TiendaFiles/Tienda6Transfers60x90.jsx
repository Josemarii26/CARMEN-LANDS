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
import { ProductCard5 } from "../tienda/ProductCard5";
import { Navbar3 } from "../navbar/Navbar3";
import { Navbar6 } from "../navbar/Navbar6";

const initialProducts = [
  {
    id: 1205,
    name: "PFY-14838 Decorative Transfers (Sweet Baby Boy) 60x90cm",
    price: "20.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/bg90vca5kjl38xdgrcfaz/PFY-14838_1.jpg?rlkey=bwonlc23ikjt1snvhbbwuq17y&st=qb58oufv&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/ofdc83qvfytmldlfy0f1q/PFY-14838_2.jpg?rlkey=qvm9bnvtksqjrycbhvu1eky6j&st=qd9hr1kv&dl=0",
    ],
    label: "60x90cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS, muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1206,
    name: "PFY-14837 Decorative Transfers (Sweet Baby Girl) 60x90cm",
    price: "20.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/qhmzk99or92mqhh3ox8h0/PFY-14837_1.jpg?rlkey=gc9nbc5jup6gi8jqh4o2mwwhy&st=th8jei8a&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/9das9fox9mt7r0jwizxv0/PFY-14837_2.jpg?rlkey=n0xqc027keyfrddphwsf4hwsf&st=chzi9xiv&dl=0",
    ],
    label: "60x90cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS, muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1207,
    name: "PFY-14836 Decorative Transfers (Abstract Art) 60x90cm",
    price: "20.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/zp4fuhfn0j2cwwwrcyhru/PFY-14836_1.jpg?rlkey=t7sr2vn4sepd4b7bpzjslgwk4&st=4lva36vh&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/mjozyql8pxpatdchcgsrz/PFY-14836_2.jpg?rlkey=3hd3i64kn3gvnne617zcwwyv3&st=jf8bftwb&dl=0",
    ],
    label: "60x90cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS, muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1208,
    name: "PFY-14835 Decorative Transfers (Bikes) 60x90cm",
    price: "20.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/s6uewlcvh6n8roravpgoi/PFY-14835_1.jpg?rlkey=vsvku8vgh05h6a1qim5g8zyoe&st=ie9i655k&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/p2udstjdssmnvz5rrw8q0/PFY-14835_2.jpg?rlkey=q0ekd8ig4ru5m1u30nz6bavjf&st=kq4bhdjv&dl=0",
    ],
    label: "60x90cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS, muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1209,
    name: "PFY-14834 Decorative Transfers (Grapes) 60x90cm",
    price: "20.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/elmwodqel36trd4jg69er/PFY-14834_1.jpg?rlkey=z4i8dit4wo7jd26a5et6oq9pt&st=9bjbvpws&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/3ejbg5zx0x1073n0mokj5/PFY-14834_2.jpg?rlkey=hcxc8yro7bi4qraedwtzyr0rw&st=plyhwyus&dl=0",
    ],
    label: "60x90cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS, muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1210,
    name: "PFY-14833 Decorative Transfers (Lemon) 60x90cm",
    price: "20.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/9jehsmmn51peml293r8a6/PFY-14833_1.jpg?rlkey=kt7ecpai9n44ldik1g03k3m6q&st=3ntqvm4o&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/ebqptzfreymxbh4fk6iwa/PFY-14833_2.jpg?rlkey=xdyc4ks6ak7jkvujc4tzsylq3&st=fwc96v4b&dl=0",
    ],
    label: "60x90cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS, muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1211,
    name: "PFY-14832 Decorative Transfers (Sunflowers) 60x90cm",
    price: "20.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/whapi70mqwze2lk02shnn/PFY-14832_1.jpg?rlkey=s6rhj6wci0ripi1cg0kosdgsn&st=6v2nipbk&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/lubcvtjvfaqygd71f48rg/PFY-14832_2.jpg?rlkey=puusanh41lrz8p1mbvwaoe22z&st=gwtgyyr5&dl=0",
    ],
    label: "60x90cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS, muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1212,
    name: "PFY-14831 Decorative Transfers (Tulips) 60x90cm",
    price: "20.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/exo0xdt70gbxdggz31kzm/PFY-14831_1.jpg?rlkey=vnwq26abay524upuv1b0vbmfm&st=nyx69ezm&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/l9sd1ik8s7lyjtirzvmgt/PFY-14831_2.jpg?rlkey=2jnr4n0v2naedoy97qvl0h02w&st=8jfwsqob&dl=0",
    ],
    label: "60x90cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS, muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1213,
    name: "PFY-14829 Decorative Transfers (Lilacs) 60x90cm",
    price: "20.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/gp8sqtta113uahqmw8d8s/PFY-14829_1.jpg?rlkey=o2533ohlg2mts204g2c2yl8m8&st=0g2uhoi3&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/j9orbd1cnu93pc2atu4qf/PFY-14829_2.jpg?rlkey=fgj3t1a3izh8iwbdnpjolmigd&st=m5bsp6r0&dl=0",
    ],
    label: "60x90cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS, muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1214,
    name: "PFY-14828 Decorative Transfers (Rosé) 60x90cm",
    price: "20.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/y5lsxaenpejkm1whtrwic/PFY-14828_1.jpg?rlkey=28cjjgffzlybi3d28dq146ocz&st=r5bhyow8&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/j6nx7yx4nl39eu4s2619f/PFY-14828_2.jpg?rlkey=6qw7ndgkzw76ygkdzl5mvdn7o&st=v91ppscn&dl=0",
    ],
    label: "60x90cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS, muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1215,
    name: "PFY-14827 Decorative Transfers (Calla Lily) 60x90cm",
    price: "20.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/1qb675ih5u6u84i9aqooa/PFY-14827_1.jpg?rlkey=fqc67cthnc9qboi3afgsk28h9&st=sb590ah7&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/3on18obb9m8cm9sl7caap/PFY-14827_2.jpg?rlkey=myjgia99ohzt4r7al9tcg9fre&st=htawrye2&dl=0",
    ],
    label: "60x90cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS, muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1216,
    name: "PFY-14826 Decorative Transfers (Dahlias) 60x90cm",
    price: "20.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/p2azwqji49gtch3bipnuk/PFY-14826_1.jpg?rlkey=pd153rjwgezdvt153svdevupq&st=04gadehu&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/vqwajznagmpuz83rvfg40/PFY-14826_2.jpg?rlkey=p6zadm5moq7y9tgkajgzdfxo5&st=ylhbla5g&dl=0",
    ],
    label: "60x90cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS, muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1217,
    name: "PFY-14825 Decorative Transfers (Daisies) 60x90cm",
    price: "20.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/ip9vu4opttgt6crxg9re4/PFY-14825_1.jpg?rlkey=jhh8b8kfhw5mfkbgpc5skgwui&st=8wztmleo&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/anne5a1nsgeqdj2529euu/PFY-14825_2.jpg?rlkey=ebalzfvzbps0l3yjlyzmya9g2&st=upv5kjzn&dl=0",
    ],
    label: "60x90cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS, muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1218,
    name: "PFY-14824 Decorative Transfers (Hydrangeas) 60x90cm",
    price: "20.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/yc9wb47dn7a10mxscgarc/PFY-14824_1.jpg?rlkey=e0n84rdtj509qy2533xl7on00&st=jig1e5ft&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/e5mv05ehddi9hkp4o14u4/PFY-14824_2.jpg?rlkey=c8dalgbwjmgl7t33gzy3clayy&st=4qo1z3ss&dl=0",
    ],
    label: "60x90cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS, muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1219,
    name: "PFY-14823 Decorative Transfers (Peonies) 60x90cm",
    price: "20.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/xv0ps3yiygx5glxx2xgux/PFY-14823_1.jpg?rlkey=88a7hejo2srhvkinnc6djpnx3&st=81orhml9&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/c22qmlw2kz3f2scysrl96/PFY-14823_2.jpg?rlkey=n9xpbn87g0o5ftqoc92cnq01r&st=gawcq83c&dl=0",
    ],
    label: "60x90cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS, muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1220,
    name: "PFY-14822 Decorative Transfers (Roses) 60x90cm",
    price: "20.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/h9chwkobesvdaunf8s7ng/PFY-14822_1.jpg?rlkey=8stmpo2v81aizpvxnnx9bx59g&st=0oa4kjni&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/fr2cup2ql5has8h5j70nx/PFY-14822_2.jpg?rlkey=cl32v9odh4ez4s5ocji4zp9m1&st=8yd01jke&dl=0",
    ],
    label: "60x90cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS, muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1221,
    name: "PFY-14821 Decorative Transfers (Magnolias) 60x90cm",
    price: "20.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/kkkmhzsrn0bjf0j17d2ly/PFY-14821_1.jpg?rlkey=eu9vla7b05kpkwyqygrxw5y2w&st=ihboig1k&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/bk3nog5fnk0d3it4afapc/PFY-14821_2.jpg?rlkey=rpaoujt9za7m384wyatxiejs6&st=wo2mn6om&dl=0",
    ],
    label: "60x90cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS, muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
];

// Define el rango de precios mínimo y máximo de tus productos
const precioMinimo = 0;
const precioMaximo = 30;

export const Tienda6Transfers60x90 = () => {
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
      <Navbar6 />

      {showOverlay && <div className="overlay"></div>}
      <div className="tienda" id="tienda6">
        <br></br>

        <div className="menu">
          <h1>Tienda de productos para artistas - Papers For You 🌸</h1>
          <h2>Decorative Transfers - Papers For You 🎨</h2>

          <h3>
            Láminas adhesivas mates para muebles, pared, cristal, papel y
            madera, es decir, SUPERFICIES DURAS, muy fáciles de aplicar y con un
            resultado de gran calidad. Todos los kits incluyen un palito de
            madera para facilitar su trabajo.{" "}
                        <br></br><span id='materiales'>CONTIENE 4 LÁMINAS</span>

          </h3>

          <Button
            className="remove-button3"
            rightIcon={filterButtonIcon}
            onClick={handleToggleFilters}
            colorScheme="pink"
            variant="solid"
            bg="pink.500"
          >
            Filtrar Productos
          </Button>

          <SearchBar onSearch={handleSearch} />

          <button className="bn632-hover bn22e" onClick={handleToggleCart}>
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
                  colorScheme="pink"
                  bg="pink.500"
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
              <ProductCard5
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
