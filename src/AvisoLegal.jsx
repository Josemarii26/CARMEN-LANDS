import React from 'react';
import './AvisoLegal.css'; // Asegúrate de tener un archivo CSS para estilar el componente
import { Navbar2 } from './navbar/Navbar2';
import ScrollToTopButton from './parallax/parallax-2/ScrollToTopButton';

export const AvisoLegal = () => {
    return (

        <><Navbar2 /><div className="aviso-legal-container">
            <h2>📝AVISO LEGAL📝</h2>

            <div className="seccion-aviso">
                <h3>1. Datos Identificativos del Titular de la Página Web</h3>
                <p>
                    En cumplimiento de lo dispuesto en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico, se informa que el titular de este sitio web es Carmen Lozano, con domicilio social en el municipio de San Roque, Cádiz.
                </p>
            </div>
            <hr></hr>
            <div className="seccion-aviso">
                <h3>2. Propiedad Intelectual y Derechos de Autor</h3>
                <p>
                    Los derechos de propiedad intelectual e industrial de este sitio web, así como de los elementos que lo componen (textos, imágenes, diseño gráfico, logotipos, códigos fuente, etc.), son titularidad exclusiva de CarmenLands o de terceros que han autorizado su uso. Queda expresamente prohibida la reproducción, distribución, comunicación pública, transformación o cualquier otra forma de explotación, total o parcial, de los contenidos de este sitio web sin la autorización previa y por escrito de Carmen Lozano.
                </p>
            </div>
            <hr></hr>
            <div className="seccion-aviso">
                <h3>3. Política de Privacidad y Protección de Datos</h3>
                <p>
                    El tratamiento de los datos personales recabados a través de este sitio web se realiza de conformidad con lo dispuesto en la normativa vigente en materia de protección de datos. En este sentido, se adoptan las medidas técnicas y organizativas necesarias para evitar la pérdida, mal uso, alteración, acceso no autorizado y robo de los datos personales facilitados, habida cuenta del estado de la tecnología, la naturaleza de los datos y los riesgos a los que están expuestos.
                </p>
            </div>
            <hr></hr>
            <div className="seccion-aviso">
                <h3>4. Enlaces Externos</h3>
                <p>
                    Este sitio web puede contener enlaces a sitios de terceros. CarmenLands no asume responsabilidad alguna por el contenido, informaciones o servicios que pudieran ofrecer dichos sitios, que tienen carácter meramente informativo y que en ningún caso implican relación alguna entre CarmenLands y las personas o entidades titulares de tales contenidos o titulares de los sitios donde se encuentren.
                </p>
            </div>
            <hr></hr>
            <div className="seccion-aviso">
                <h3>5. Responsabilidad</h3>
                <p>
                    CarmenLands no se responsabiliza de los daños y perjuicios que pudieran derivarse de interferencias, omisiones, interrupciones, virus informáticos, averías telefónicas o desconexiones en el funcionamiento operativo de este sistema electrónico, motivados por causas ajenas a CarmenLands.
                </p>
            </div>
            <hr></hr>
            <div className="seccion-aviso">
                <h3>6. Legislación Aplicable y Jurisdicción</h3>
                <p>
                    El presente Aviso Legal se rige por la legislación española. Para la resolución de cualquier controversia que pudiera surgir en relación con la interpretación o aplicación del presente Aviso Legal, las partes se someten a la jurisdicción de los tribunales de la provincia de Cádiz.
                </p>
            </div>
            <hr></hr>
            <div className="seccion-aviso">
                <h3>7. Modificaciones</h3>
                <p>
                    CarmenLands se reserva el derecho de modificar, en cualquier momento y sin previo aviso, la estructura y diseño de este sitio web, así como el presente Aviso Legal para adaptarlo a cambios legislativos o jurisprudenciales.
                </p>
            </div>
        </div>
        <ScrollToTopButton />
        </>
    );
};
