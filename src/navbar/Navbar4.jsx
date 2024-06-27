import "./styles.css";
import logo from "./CarmenLandsLogo.png";
import { useEffect, useRef, useState } from "react";

import { WavyContainer, WavyLink } from "react-wavy-transitions";

export const Navbar4 = () => {
  const lastScrollTop = useRef(0);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  useEffect(() => {
    let timeoutId; // Variable para almacenar el ID del timeout

    const handleScroll = () => {
      clearTimeout(timeoutId); // Limpiar el timeout anterior
      var { pageYOffset } = window;

      if (pageYOffset > lastScrollTop.current) {
        // downward scroll
        setIsNavbarVisible(false);
      } else if (pageYOffset < lastScrollTop.current) {
        // upward scroll
        setIsNavbarVisible(false);
      } // else was horizontal scroll

      lastScrollTop.current = pageYOffset <= 0 ? 0 : pageYOffset;

      // Comprobar si la barra de navegación ya está en su posición normal en la parte superior
      if (pageYOffset <= 0) {
        setIsNavbarVisible(true); // Mantener la barra visible
      } else {
        // Configurar un nuevo timeout para ocultar la barra de navegación después de 1500ms (1.5 segundos)
        timeoutId = setTimeout(() => {
          setIsNavbarVisible(false);
        }, 1500);
      }
    };



    window.addEventListener("scroll", handleScroll, { passive: true });

    // Limpieza del efecto
    return () => {
      clearTimeout(timeoutId); // Limpiar el timeout al desmontar el componente
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isNavbarVisible2, setIsNavbarVisible2] = useState(false);



  const toggleNavbar = () => {
    setIsNavbarVisible2(!isNavbarVisible2);
  };

  const handleHomeLinkClick = () => {
    if (window.location.pathname === "/") {
      setTimeout(() => {
        window.location.reload(); // Recarga la ventana después de 1 segundo
      }, 1800);
    }
  };

  const scrollToBottom = () => {
    setIsNavbarVisible2(!isNavbarVisible2);
    const totalHeight = document.body.scrollHeight;
    window.scrollTo({
      top: totalHeight,
    });
  };

  return (
    <nav id='nav4' className={`navbar ${isNavbarVisible ? 'visible' : ''}`}>
      <img src={logo} alt="Logo" />
      <button className="menu-toggle" onClick={toggleNavbar}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div className={`nav-items ${isNavbarVisible2 ? 'visible' : ''}`}>

        <ul>
          <li>
            <div >
              <button id="nav-contact" >
                <a href="/">
                  ¡Soy Carmen!
                </a>
              </button>
            </div>
          </li>
          <li>
            <WavyLink direction="up" to="/tienda" color="#45db52">
              Tienda
            </WavyLink>
          </li>

          <li>
            <WavyLink direction="up" to="/tienda/mint-by-michelle" color="#6aee75">
              Mint by Michelle
            </WavyLink>
          </li>
          <li>
            <WavyLink direction="up" to="/tienda/cadence" color="#4593db">
              Cadence
            </WavyLink>
          </li>
          <li>
            <WavyLink direction="up" to="/tienda/muebles-ornamentos" color="#db4545">
              Muebles y Ornamentos
            </WavyLink>
          </li>


        </ul>
      </div>
    </nav>
  );
}