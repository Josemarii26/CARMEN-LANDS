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
    id: 462,
    name: 'Universal Transfer CADENCE 25x35cm UTC020',
    price: '5.90',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/e1hpq165eo6vjj2l7ave1/universal-transfer-cadence-25x35cm-utc020.jpg?rlkey=ryay5paui84n9mbg8pcykmxxq&st=1tg69l10&dl=0',
    ],
    label: '25x35cm',
    description: 'Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.',
    selected: false,
  },
  {
    id: 463,
    name: 'Universal Transfer CADENCE 25x35cm UTC016',
    price: '5.90',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/eq0xicjcojnr9loos70v0/universal-transfer-cadence-25x35cm-utc016.jpg?rlkey=704uc2qce059h0ng6zd50rzob&st=6m2ivicx&dl=0',
    ],
    label: '25x35cm',
    description: 'Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.',
    selected: false,
  },
  {
    id: 464,
    name: 'Universal Transfer CADENCE 25x35cm UTC013',
    price: '5.90',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/32amkflcrnpy2udmij6px/universal-transfer-cadence-25x35cm-utc013.jpg?rlkey=xhe0zlebythnmk9w43q6ag21w&st=sque2848&dl=0',
    ],
    label: '25x35cm',
    description: 'Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.',
    selected: false,
  },
  {
    id: 465,
    name: 'Universal Transfer CADENCE 25x35cm UTC008',
    price: '5.90',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/hrhzy5y2z5ocr0obdwhah/universal-transfer-cadence-25x35cm-utc008.jpg?rlkey=hqk32lwdonlq0udu0n9k7dryc&st=sjadytfi&dl=0',
    ],
    label: '25x35cm',
    description: 'Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.',
    selected: false,
  },
  {
    id: 466,
    name: 'Universal Transfer CADENCE 25x35cm UTC003',
    price: '5.90',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/i5fw9ir2ye3k3x2hf4qyl/universal-transfer-cadence-25x35cm-utc003.jpg?rlkey=zy5pb0kipge6o59rphg6z64xj&st=emo86ve6&dl=0',
    ],
    label: '25x35cm',
    description: 'Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.',
    selected: false,
  },
  {
    id: 467,
    name: 'Universal Transfer CADENCE 25x35cm UTC001',
    price: '5.90',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/293olmammm6rrgg59l6is/universal-transfer-cadence-25x35cm-utc001.jpg?rlkey=bnwo99s6pkkhkptd07m8soss8&st=ttg5ym00&dl=0',
    ],
    label: '25x35cm',
    description: 'Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.',
    selected: false,
  },
  {
    id: 468,
    name: 'Cubiertos Transfers HOME DECOR',
    price: '5.90',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/tghz2z8vbn0bio6tz54zd/transfers-home-decor-cadence.jpg?rlkey=oespjx6gth5778h85pd32j5e2&st=gx7hg9jz&dl=0',
    ],
    label: '25x35cm',
    description: 'Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.',
    selected: false,
  }, 
  {
    id: 469,
    name: 'Tea Room Transfers HOME DECOR',
    price: '5.90',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/xgg1opv4cc2luppldkg7x/transfers-home-decor-cadence-1.jpg?rlkey=cls4sc69i1uvlpbyqcfum4zwj&st=9fy1o9pc&dl=0',
    ],
    label: '25x35cm',
    description: 'Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.',
    selected: false,
  },
  {
    id: 470,
    name: 'Eau de Cologne Transfers HOME DECOR',
    price: '5.90',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/j2vtv3vidrukgmk3z14wj/transfers-home-decor-cadence-2.jpg?rlkey=kiwk6a4muhieztllgynjzbgwi&st=nav40491&dl=0',
    ],
    label: '25x35cm',
    description: 'Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.',
    selected: false,
  },
  {
    id: 471,
    name: 'Founderie Transfers HOME DECOR',
    price: '5.90',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/43xam7hz9r7z02icq31f4/transfers-home-decor-cadence-3.jpg?rlkey=xyswwdro49h08a947r5yad4q4&st=ohzf8ak7&dl=0',
    ],
    label: '25x35cm',
    description: 'Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.',
    selected: false,
  },
  {
    id: 472,
    name: 'Bienvenue Transfers HOME DECOR',
    price: '5.90',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/i1qbop0zczqrw5pp2gkmm/transfers-home-decor-cadence-4.jpg?rlkey=h2ajf8nbrylcyybqmj273j216&st=dz4yie44&dl=0',
    ],
    label: '25x35cm',
    description: 'Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.',
    selected: false,
  },
  {
    id: 473,
    name: 'La Libellule Transfers HOME DECOR',
    price: '5.90',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/i8ggo9iljjyr05rhti2o2/transfers-home-decor-cadence-5.jpg?rlkey=wmuqo1n402q6jykxmrnlfjoqg&st=tb7oqsr7&dl=0',
    ],
    label: '25x35cm',
    description: 'Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.',
    selected: false,
  },
  {
    id: 474,
    name: 'Tea Time Transfers HOME DECOR',
    price: '5.90',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/br1771x4jnt63nwzzb70b/transfers-home-decor-cadence-6.jpg?rlkey=6wo3dghf0r53fwnxdoaf8b4yy&st=1dq4rz7q&dl=0',
    ],
    label: '25x35cm',
    description: 'Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.',
    selected: false,
  },
  {
    id: 475,
    name: 'Le Petite Marmite Transfers HOME DECOR',
    price: '5.90',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/bto7kpr246ky9hvbbyieu/transfers-home-decor-cadence-7.jpg?rlkey=a0cdtpl4raxnp5lfmyzcxnskq&st=yrrc3d2u&dl=0',
    ],
    label: '25x35cm',
    description: 'Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.',
    selected: false,
  },
  {
    id: 476,
    name: 'Le Poulet Transfers HOME DECOR',
    price: '5.90',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/xh8s4s0wzcycxfy9xw9i4/transfers-home-decor-cadence-8.jpg?rlkey=04ko7kyxjn4az0q5edpk9ziir&st=sxxuf30a&dl=0',
    ],
    label: '25x35cm',
    description: 'Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.',
    selected: false,
  },
  {
    id: 477,
    name: 'Tea Transfers HOME DECOR',
    price: '5.90',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/14eyfe7buwhdpw1i3bems/transfers-home-decor-cadence-9.jpg?rlkey=380y7nos2pzgqgnex607l337o&st=m4b2oabp&dl=0',
    ],
    label: '25x35cm',
    description: 'Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.',
    selected: false,
  },
  {
    id: 478,
    name: 'Lingerier Corsets Transfers HOME DECOR',
    price: '5.90',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/y3peaf2hs3beao6qeram2/transfers-home-decor-cadence-10.jpg?rlkey=9olb37da8ofsfn67redixup6n&st=zyzhpitn&dl=0',
    ],
    label: '25x35cm',
    description: 'Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.',
    selected: false,
  },
  {
    id: 479,
    name: 'Salle de Bain Transfers HOME DECOR',
    price: '5.90',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/kn2pbwpekeca3pniyno4t/transfers-home-decor-cadence-11.jpg?rlkey=kjlr86tyoa69cblrs1k3wey5e&st=4npojal9&dl=0',
    ],
    label: '25x35cm',
    description: 'Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.',
    selected: false,
  },
  {
    id: 480,
    name: 'Coutellerie Transfers HOME DECOR',
    price: '5.90',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/6334mvr8gqk530l3smvu0/transfers-home-decor-cadence-12.jpg?rlkey=2shvm1nqxmzeqhx8b24wyqhg2&st=nsagmdnn&dl=0',
    ],
    label: '25x35cm',
    description: 'Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.',
    selected: false,
  },
  {
    id: 481,
    name: 'Mademoiselle Transfers HOME DECOR',
    price: '5.90',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/2iybdrabusp64k9qx73c9/transfers-home-decor-cadence-13.jpg?rlkey=b69y8cup8qwrgfbdr6jtealmn&st=dd8qzs4v&dl=0',
    ],
    label: '25x35cm',
    description: 'Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.',
    selected: false,
  },
  {
    id: 725,
    name: 'Universal Transfer CADENCE 25x35cm UTC020',
    price: '5.90',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/d25l50e2v59awvup356on/universal-transfer-cadence-25x35cm-utc019.jpg?rlkey=fmpmfqmvoc3jqo5qj0kx1g0mo&st=mmfsr147&dl=0',
    ],
    label: '25x35cm',
    description: 'Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.',
    selected: false,
  },
  {
    id: 726,
    name: 'Universal Transfer CADENCE 25x35cm UTC014',
    price: '5.90',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/7771ytquh4oo2ug0yui64/universal-transfer-cadence-25x35cm-utc014.jpg?rlkey=gdkh03214gg4wl46kl7j2m4pf&st=rjwaqp4z&dl=0',
    ],
    label: '25x35cm',
    description: 'Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.',
    selected: false,
  },
  {
    id: 727,
    name: 'Universal Transfer CADENCE 25x35cm UTC009',
    price: '5.90',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/wwu5ohl8hteajgaojbusu/universal-transfer-cadence-25x35cm-utc009.jpg?rlkey=oxfw08bxmb085aipcj183hh4b&st=n8w8xyio&dl=0',
    ],
    label: '25x35cm',
    description: 'Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.',
    selected: false,
  },
  {
    id: 728,
    name: 'Vintage Flowers Transfers HOME DECOR',
    price: '5.90',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/qoekl8kybwdp1k7e1z6hx/transfers-home-decor-cadence-vintage-flowers.jpg?rlkey=uhiyb4ytf441qfnbt1xkj2ri1&st=p8xu8qry&dl=0',
    ],
    label: '25x35cm',
    description: 'Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.',
    selected: false,
  },
  {
    id: 729,
    name: 'Plomberie Transfers HOME DECOR',
    price: '5.90',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/u84u1211n4b4v9a0em9l9/transfers-home-decor-cadence-plomberie.jpg?rlkey=2wfwk6op497v4xv95ew2r9yhz&st=tznff2k9&dl=0',
    ],
    label: '25x35cm',
    description: 'Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.',
    selected: false,
  },
  {
    id: 730,
    name: 'Sweet Cadence Transfers HOME DECOR',
    price: '5.90',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/p8e48bulo7xoa2w9p2zb0/transfers-home-decor-cadence-sweet-cadence.jpg?rlkey=vkowutvyrq6y36v0u1yr9g5yv&st=2taq6xsa&dl=0',
    ],
    label: '25x35cm',
    description: 'Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.',
    selected: false,
  },
  {
    id: 731,
    name: 'Sweet Bird Transfers HOME DECOR',
    price: '5.90',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/rmii5jmgvq96oidrm8p2z/transfers-home-decor-cadence-sweet-bird.jpg?rlkey=dbt7g48al3yahtxk513iibhc6&st=4vg3t1l7&dl=0',
    ],
    label: '25x35cm',
    description: 'Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.',
    selected: false,
  },
  {
    id: 732,
    name: 'Sewing Machine Transfers HOME DECOR',
    price: '5.90',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/3fmxwvzfi2l6eppp7rrin/transfers-home-decor-cadence-sewing-machine.jpg?rlkey=rhe844omivuhz187koveybd52&st=a97i6q1j&dl=0',
    ],
    label: '25x35cm',
    description: 'Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.',
    selected: false,
  },
  {
    id: 733,
    name: 'Rosa Transfers HOME DECOR',
    price: '5.90',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/b6obtlepgvtk3bz02hqgf/transfers-home-decor-cadence-rosa.jpg?rlkey=sqopxaff8pp0frzxdvzmljq2c&st=8dms4qj4&dl=0',
    ],
    label: '25x35cm',
    description: 'Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.',
    selected: false,
  },
  {
    id: 734,
    name: 'Perfume Transfers HOME DECOR',
    price: '5.90',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/7g1saxj6ox5mg2i1trgzu/transfers-home-decor-cadence-perfume.jpg?rlkey=y50bamfmy3ka7a7mfwbh1gizb&st=jkcm5chk&dl=0',
    ],
    label: '25x35cm',
    description: 'Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.',
    selected: false,
  },
  {
    id: 735,
    name: 'Paris Transfers HOME DECOR',
    price: '5.90',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/k05zbb9ntiq0k6jakf871/transfers-home-decor-cadence-paris.jpg?rlkey=ilnhkkgn8lat4aqnc7g9gtwrb&st=fwrc99s6&dl=0',
    ],
    label: '25x35cm',
    description: 'Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.',
    selected: false,
  },
  {
    id: 736,
    name: 'Paris 2 Transfers HOME DECOR',
    price: '5.90',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/g6t3zfm3jj0crf0xmwblq/transfers-home-decor-cadence-paris2.jpg?rlkey=wmhq1x9eftlv5hpdi9qeqeekj&st=g56knvsi&dl=0',
    ],
    label: '25x35cm',
    description: 'Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.',
    selected: false,
  },
  {
    id: 737,
    name: 'Opera Transfers HOME DECOR',
    price: '5.90',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/8uh2v7dcki23lcnjfcig4/transfers-home-decor-cadence-opera.jpg?rlkey=qzl3glmnb7mqpo8quohdybaei&st=y9mepwmz&dl=0',
    ],
    label: '25x35cm',
    description: 'Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.',
    selected: false,
  },
  {
    id: 738,
    name: 'Mon Atelier Transfers HOME DECOR',
    price: '5.90',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/c84qq7591g134btxuqjwa/transfers-home-decor-cadence-mon-atelier.jpg?rlkey=diurld7zd1ulhj1lpumfdur0v&st=jmpdsq5y&dl=0',
    ],
    label: '25x35cm',
    description: 'Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.',
    selected: false,
  },
  {
    id: 739,
    name: 'Lombart Transfers HOME DECOR',
    price: '5.90',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/29tawzh52li5du8bzxj12/transfers-home-decor-cadence-lombart.jpg?rlkey=sfmnbxjd2c7zvdhj7ljngadej&st=0x49r54g&dl=0',
    ],
    label: '25x35cm',
    description: 'Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.',
    selected: false,
  },
  {
    id: 740,
    name: 'Lingerie Transfers HOME DECOR',
    price: '5.90',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/phm56acml79jeyl28sa8f/transfers-home-decor-cadence-lingerie.jpg?rlkey=g60oqx5iglfgo9hd0g13snjvv&st=3hq4wyh6&dl=0',
    ],
    label: '25x35cm',
    description: 'Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.',
    selected: false,
  },
  {
    id: 741,
    name: 'Letoile Royale Transfers HOME DECOR',
    price: '5.90',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/6xaqjl6qqmkddtvxdnvgt/transfers-home-decor-cadence-letoile-royale.jpg?rlkey=oe6r6s1yfw3azjagnrcc28maj&st=k7qt7yc5&dl=0',
    ],
    label: '25x35cm',
    description: 'Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.',
    selected: false,
  },
  
  {
    id: 742,
    name: 'Les Roses Transfers HOME DECOR',
    price: '5.90',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/p408ma512o86u67fac55b/transfers-home-decor-cadence-les-roses.jpg?rlkey=58h1t7rb5ri0ucbfoijfudh6k&st=liugsfu6&dl=0',
    ],
    label: '25x35cm',
    description: 'Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.',
    selected: false,
  },
  {
    id: 743,
    name: 'Hotel Del Royales Transfers HOME DECOR',
    price: '5.90',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/u300ojhfdva50jlwlilij/transfers-home-decor-cadence-hotel-del-royales.jpg?rlkey=f7pblq59063tr9n8xq7ur1927&st=mv5wat2x&dl=0',
    ],
    label: '25x35cm',
    description: 'Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.',
    selected: false,
  },
  {
    id: 744,
    name: 'Home Sweet Home Transfers HOME DECOR',
    price: '5.90',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/ldvi1illdxmuovlbjc69w/transfers-home-decor-cadence-home-sweet-home.jpg?rlkey=5618sfd286v6f6h8hz6my4wsl&st=3t2wxy1m&dl=0',
    ],
    label: '25x35cm',
    description: 'Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.',
    selected: false,
  },
  {
    id: 745,
    name: 'Grane Bros Transfers HOME DECOR',
    price: '5.90',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/cdlof45ynqlqtw6taz8tw/transfers-home-decor-cadence-grane-bros.jpg?rlkey=vnaa8weudjlcl2d5rqel2lbz4&st=pjwmjvoj&dl=0',
    ],
    label: '25x35cm',
    description: 'Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.',
    selected: false,
  },
  {
    id: 746,
    name: 'Grand Bazar Transfers HOME DECOR',
    price: '5.90',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/oeybau3vv3khrwzwxblf2/transfers-home-decor-cadence-grand-bazar.jpg?rlkey=oynjkftbahsojmq6pt90pothi&st=ko4jdb83&dl=0',
    ],
    label: '25x35cm',
    description: 'Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.',
    selected: false,
  },
  {
    id: 747,
    name: 'Giraud Fils Transfers HOME DECOR',
    price: '5.90',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/zo8jlbmlkzlo4lani1uua/transfers-home-decor-cadence-giraud-fils.jpg?rlkey=hprc4vy57die1818g4f11btkx&st=1bqj8zbk&dl=0',
    ],
    label: '25x35cm',
    description: 'Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.',
    selected: false,
  },
  {
    id: 748,
    name: 'Fleura Transfers HOME DECOR',
    price: '5.90',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/payqo7lqm9lcbiu8t1tqw/transfers-home-decor-cadence-fleura.jpg?rlkey=sp2qv7ytxi93hqsbbg7o9dqo7&st=6reiid22&dl=0',
    ],
    label: '25x35cm',
    description: 'Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.',
    selected: false,
  },
  {
    id: 749,
    name: 'Carpe Diem Transfers HOME DECOR',
    price: '5.90',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/19acja9kp61yvudr1yw0e/transfers-home-decor-cadence-carpe-diem.jpg?rlkey=3k93i9vleavw31jtx4ry0n2na&st=44zgp9tp&dl=0',
    ],
    label: '25x35cm',
    description: 'Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.',
    selected: false,
  },
  {
    id: 750,
    name: 'Cacao Payraud Transfers HOME DECOR',
    price: '5.90',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/89waz91t28w8mt0gyyfwl/transfers-home-decor-cadence-cacao-payraud.jpg?rlkey=puq5538s9uob0u7rlljrtklrp&st=rjc3v5vz&dl=0',
    ],
    label: '25x35cm',
    description: 'Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.',
    selected: false,
  },
  {
    id: 751,
    name: 'Butaca Le Fleur Transfers HOME DECOR',
    price: '5.90',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/30a0fbcsmmbkmsesyucji/transfers-home-decor-cadence-butaca-le-fleur.jpg?rlkey=mxbp9osqs3xz0l65zfxf060dh&st=vvfh33gs&dl=0',
    ],
    label: '25x35cm',
    description: 'Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.',
    selected: false,
  },
  {
    id: 752,
    name: 'Bouquet des Roses Transfers HOME DECOR',
    price: '5.90',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/thezvt4uzbekte6yuo3d8/transfers-home-decor-cadence-bouquet-des-roses.jpg?rlkey=an4q4zamcsapqzouj3inj9xgv&st=3vh4ulrn&dl=0',
    ],
    label: '25x35cm',
    description: 'Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.',
    selected: false,
  },
  {
    id: 753,
    name: 'Abeilla Royale Transfers HOME DECOR',
    price: '5.90',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/w7312cfr3zg8vor84i57k/transfers-home-decor-cadence-abeilla-royale.jpg?rlkey=4q9enafm7wrwfkuko2ipandlu&st=uxmmzywn&dl=0',
    ],
    label: '25x35cm',
    description: 'Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.',
    selected: false,
  },
  {
    id: 754,
    name: 'HOME DECOR HDT044 Transfers HOME DECOR',
    price: '5.90',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/qmbfixs1od4q2a915atgd/transfer-cadence-home-decor.jpg?rlkey=nctygxpeaaljulovoe7vcq6mv&st=i8twtp9l&dl=0',
    ],
    label: '25x35cm',
    description: 'Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.',
    selected: false,
  },
  {
    id: 755,
    name: 'HOME DECOR HDT022 Transfers HOME DECOR',
    price: '5.90',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/5fb1qbc16fbgh0y0irvub/transfer-cadence-home-decor-1.jpg?rlkey=gawo6zg9188co57rr0v9vnnkb&st=odbyk88u&dl=0',
    ],
    label: '25x35cm',
    description: 'Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.',
    selected: false,
  },

  


  
  
  
  
  
  



  





];

// Define el rango de precios mínimo y máximo de tus productos
const precioMinimo = 0;
const precioMaximo = 20;

export const Tienda3TransfersHomeDecor = () => {
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
          <h2>Transfers Home Decor🎨</h2>

          <h3>Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración.
            <br></br> <span id='materiales'>MODO DE EMPLEO</span> <br></br> Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.
          </h3>

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
