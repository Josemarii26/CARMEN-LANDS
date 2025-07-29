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
    "id": 918,
    "name": "Matt Fabric VISON 59ml.",
    "price": "3.00",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/jxss7rnyow3aaac16h0se/style-matt-fabric-VISON.jpg?rlkey=vief4tb1im0ehm0etautf66gm&st=96l7enzo&dl=0"],
    "label": "59 ml.",
    "description": "Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.",
    "selected": false
  },
  {
    "id": 919,
    "name": "Matt Fabric VIOLETA 59ml.",
    "price": "3.00",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/ydil0tsbqm794gnv79hzl/style-matt-fabric-VIOLETA.jpg?rlkey=ze4k2ncno8594wjain5akal2j&st=25zbdmgi&dl=0"],
    "label": "59 ml.",
    "description": "Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.",
    "selected": false
  },
  {
    "id": 920,
    "name": "Matt Fabric VERDE-PISTACHO 59ml.",
    "price": "3.00",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/ty1cifamv7mluoxcckn53/style-matt-fabric-VERDE-PISTACHO.jpg?rlkey=cyt7ub1ba1xrc7oimqmkv2ly0&st=1y7xub96&dl=0"],
    "label": "59 ml.",
    "description": "Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.",
    "selected": false
  },
  {
    "id": 921,
    "name": "Matt Fabric VERDE-OSCURO 59ml.",
    "price": "3.00",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/qy8quuezotql32332fsjx/style-matt-fabric-VERDE-OSCURO.jpg?rlkey=q5fr2tq7zimqywt0yo5zb603w&st=4aai8imd&dl=0"],
    "label": "59 ml.",
    "description": "Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.",
    "selected": false
  },
  {
    "id": 922,
    "name": "Matt Fabric VERDE-MENTA-CLARO 59ml.",
    "price": "3.00",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/pmb41as3xgs2yqclnoguj/style-matt-fabric-VERDE-MENTA-CLARO.jpg?rlkey=qa4chbx5a1nh7l9jj12y11y1q&st=3ub1kbl1&dl=0"],
    "label": "59 ml.",
    "description": "Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.",
    "selected": false
  },
  {
    "id": 923,
    "name": "Matt Fabric VERDE-MAR-CLARO 59ml.",
    "price": "3.00",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/0wu0sz2gsepp73srxofr8/style-matt-fabric-VERDE-MAR-CLARO.jpg?rlkey=6lzt7qjlb1xr1d3b8n4tkxk3z&st=6uzb98hn&dl=0"],
    "label": "59 ml.",
    "description": "Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.",
    "selected": false
  },
  {
    "id": 924,
    "name": "Matt Fabric VERDE-GRANJA 59ml.",
    "price": "3.00",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/y9cjhoesd0zb8gf1lf79i/style-matt-fabric-VERDE-GRANJA.jpg?rlkey=fwp08zmbxs6b0jeow9b0cyuay&st=dduifymi&dl=0"],
    "label": "59 ml.",
    "description": "Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.",
    "selected": false
  },
  {
    "id": 925,
    "name": "Matt Fabric VERDE-CAMUFLAJE 59ml.",
    "price": "3.00",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/uwesgvnco6ynqz3mylvku/style-matt-fabric-VERDE-CAMUFLAJE.jpg?rlkey=1s1edyxo4iece5fweb8jgo57l&st=1rxboffk&dl=0"],
    "label": "59 ml.",
    "description": "Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.",
    "selected": false
  },
  {
    "id": 926,
    "name": "Matt Fabric ULTRA-MARINO 59ml.",
    "price": "3.00",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/dqfsii4xd7or5g9kq4vma/style-matt-fabric-ULTRA-MARINO.jpg?rlkey=ougyfpn9lg4q10yzmif05g2lz&st=18lv4zgf&dl=0"],
    "label": "59 ml.",
    "description": "Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.",
    "selected": false
  },
  {
    "id": 927,
    "name": "Matt Fabric TURQUESA 59ml.",
    "price": "3.00",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/vyqkpccbcy640l6s617ws/style-matt-fabric-TURQUESA.jpg?rlkey=uvvxhx08tcsqzjeolo1nfb89i&st=z40ca0it&dl=0"],
    "label": "59 ml.",
    "description": "Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.",
    "selected": false
  },
  {
    "id": 928,
    "name": "Matt Fabric TILO 59ml.",
    "price": "3.00",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/fm442k82qg6mu65cg72sf/style-matt-fabric-TILO.jpg?rlkey=hh748ocr7inedw3b65g1g7gmx&st=luigfhab&dl=0"],
    "label": "59 ml.",
    "description": "Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.",
    "selected": false
  },
  {
    "id": 929,
    "name": "Matt Fabric TERRACOTA 59ml.",
    "price": "3.00",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/dmo9yg2l2f85k7zr7t1hc/style-matt-fabric-TERRACOTA.jpg?rlkey=imnb25lfhjfyuu07skiod77e6&st=36ywt9n0&dl=0"],
    "label": "59 ml.",
    "description": "Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.",
    "selected": false
  },
  {
    "id": 930,
    "name": "Matt Fabric SALVIA 59ml.",
    "price": "3.00",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/3g6d3ls4vj51wh9wy8gym/style-matt-fabric-SALVIA.jpg?rlkey=k334egei5c6mzk0nb922uyng1&st=5tes5b4a&dl=0"],
    "label": "59 ml.",
    "description": "Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.",
    "selected": false
  },
  {
    "id": 931,
    "name": "Matt Fabric ROSA-PASTEL 59ml.",
    "price": "3.00",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/3bcim7heid5db6iuqnnnq/style-matt-fabric-ROSA-PASTEL.jpg?rlkey=sqmt3zeyklsr2zdwo744ue54k&st=xlinh4c4&dl=0"],
    "label": "59 ml.",
    "description": "Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.",
    "selected": false
  },
  {
    "id": 932,
    "name": "Matt Fabric ROSA-CENIZA 59ml.",
    "price": "3.00",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/o75yqcrvrdpb7htj65z38/style-matt-fabric-ROSA-CENIZA.jpg?rlkey=29wni95l0pyralkxymd36k2o9&st=2wjocjaq&dl=0"],
    "label": "59 ml.",
    "description": "Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.",
    "selected": false
  },
  {
    "id": 933,
    "name": "Matt Fabric ROSA-BEIGE 59ml.",
    "price": "3.00",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/moey0g5uahkgz4a2g4r01/style-matt-fabric-ROSA-BEIGE.jpg?rlkey=zfewg6ri3lax6rmwh9j79hy1v&st=flti86uz&dl=0"],
    "label": "59 ml.",
    "description": "Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.",
    "selected": false
  },
  {
    "id": 934,
    "name": "Matt Fabric ROSA-BEBE 59ml.",
    "price": "3.00",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/u2mnhv0ll3ozvb6xq46b1/style-matt-fabric-ROSA-BEBE.jpg?rlkey=lf0wkawei3kozu157n203bo2z&st=15mf8y6b&dl=0"],
    "label": "59 ml.",
    "description": "Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.",
    "selected": false
  },
  {
    "id": 935,
    "name": "Matt Fabric ROJO-CORAL 59ml.",
    "price": "3.00",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/52ooc9vwn5q8j11hv0emx/style-matt-fabric-ROJO-CORAL.jpg?rlkey=1f1brvkdl98vzmhjv08267i9c&st=3x2eefvq&dl=0"],
    "label": "59 ml.",
    "description": "Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.",
    "selected": false
  },
  {
    "id": 936,
    "name": "Matt Fabric ROJO-CARMIN 59ml.",
    "price": "3.00",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/20ikhkm46vzb6q02il3uw/style-matt-fabric-ROJO-CARMIN.jpg?rlkey=ng0h7b65xigzvb5a64mo1xx0p&st=bci7tkrv&dl=0"],
    "label": "59 ml.",
    "description": "Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.",
    "selected": false
  },
  {
    "id": 937,
    "name": "Matt Fabric PURPURA-OSCURO 59ml.",
    "price": "3.00",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/bhzt9ie90iq5me02lmjb9/style-matt-fabric-PURPURA-OSCURO.jpg?rlkey=fwkneir8b62dbti1yokqy3q8b&st=am4fq269&dl=0"],
    "label": "59 ml.",
    "description": "Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.",
    "selected": false
  },
  {
    "id": 938,
    "name": "Matt Fabric PARLAMENTO 59ml.",
    "price": "3.00",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/n1d32otzlw0ur038h6nz9/style-matt-fabric-PARLAMENTO.jpg?rlkey=0d59zlit590f5tf75nb4uh8sk&st=ss328cc7&dl=0"],
    "label": "59 ml.",
    "description": "Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.",
    "selected": false
  },
  {
    "id": 939,
    "name": "Matt Fabric NEGRO 59ml.",
    "price": "3.00",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/ui6ua6p30rced2kcmgw3f/style-matt-fabric-NEGRO.jpg?rlkey=8liwohtjbrldqfckbkpwfuwq1&st=tn88fd9f&dl=0"],
    "label": "59 ml.",
    "description": "Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.",
    "selected": false
  },
  {
    "id": 940,
    "name": "Matt Fabric NARANJA 59ml.",
    "price": "3.00",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/cygb4yqcd3832ae4jjcea/style-matt-fabric-NARANJA.jpg?rlkey=awawbbjcwnrj4qb7clsvom4n4&st=yd5e1px9&dl=0"],
    "label": "59 ml.",
    "description": "Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.",
    "selected": false
  },
  {
    "id": 941,
    "name": "Matt Fabric MORADO 59ml.",
    "price": "3.00",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/uzwar2ywf40xwpji8wsrd/style-matt-fabric-MORADO.jpg?rlkey=p72i60h1s4ma36i9o0a2edvzl&st=z8fx4jpb&dl=0"],
    "label": "59 ml.",
    "description": "Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.",
    "selected": false
  },
  {
    "id": 942,
    "name": "Matt Fabric MORA 59ml.",
    "price": "3.00",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/n63np8siv40cmxb617305/style-matt-fabric-MORA.jpg?rlkey=e9iildt3yeb33mxbsgauep48c&st=gzq179fy&dl=0"],
    "label": "59 ml.",

  "description": "Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.",
    "selected": false
  },
  {
    "id": 943,
    "name": "Matt Fabric MARRON-OSCURO 59ml.",
    "price": "3.00",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/q2cf005y6q6emysoqshrz/style-matt-fabric-MARRON-OSCURO.jpg?rlkey=2yinwsqe0zuvqmvyyrl9lsmcg&st=73spfb55&dl=0"],
    "label": "59 ml.",
    "description": "Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.",
    "selected": false
  },
  {
    "id": 944,
    "name": "Matt Fabric LILA-PURPURA 59ml.",
    "price": "3.00",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/m5m73sigx8dztqegdx8zn/style-matt-fabric-LILA-PURPURA.jpg?rlkey=sfvvat5g7cztdffe8snrv4tvf&st=pt5mxxat&dl=0"],
    "label": "59 ml.",
    "description": "Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.",
    "selected": false
  },
  {
    "id": 945,
    "name": "Matt Fabric GRIS 59ml.",
    "price": "3.00",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/niv6cu2zqdf8amtcxjyvz/style-matt-fabric-GRIS.jpg?rlkey=ceqmtq4xgjt51bvyyr11c4ew3&st=dfw5zh2e&dl=0"],
    "label": "59 ml.",
    "description": "Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.",
    "selected": false
  },
  {
    "id": 946,
    "name": "Matt Fabric FUCSIA 59ml.",
    "price": "3.00",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/edq4pbjyfv6m40pf593nk/style-matt-fabric-FUCSIA.jpg?rlkey=19pt5mlbirbu698k0i64cwoh6&st=32640d8y&dl=0"],
    "label": "59 ml.",
    "description": "Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.",
    "selected": false
  },
  {
    "id": 947,
    "name": "Matt Fabric FRESA 59ml.",
    "price": "3.00",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/a1u8h6b8twz83i2kugyo1/style-matt-fabric-FRESA.jpg?rlkey=za6ucwbr9ccutio59rf836uzl&st=x0uc80qk&dl=0"],
    "label": "59 ml.",
    "description": "Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.",
    "selected": false
  },
  {
    "id": 948,
    "name": "Matt Fabric CORAL-CLARO 59ml.",
    "price": "3.00",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/2ikudv1e7iyocl5sdsbd9/style-matt-fabric-CORAL-CLARO.jpg?rlkey=5u1el050awrjns3dv1sac4r8h&st=17pa8dt8&dl=0"],
    "label": "59 ml.",
    "description": "Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.",
    "selected": false
  },
  {
    "id": 949,
    "name": "Matt Fabric CESPED 59ml.",
    "price": "3.00",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/hx67vmemzj6v6p464lolr/style-matt-fabric-CESPED.jpg?rlkey=ozxse22jdyynct8c367oedlrc&st=j2uik5gr&dl=0"],
    "label": "59 ml.",
    "description": "Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.",
    "selected": false
  },
  {
    "id": 950,
    "name": "Matt Fabric CARAMELO 59ml.",
    "price": "3.00",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/f0d4aqc1fdms44ftjtezr/style-matt-fabric-CARAMELO.jpg?rlkey=wyyl5c7q2p76n790j97wfm1nu&st=99ix58sa&dl=0"],
    "label": "59 ml.",
    "description": "Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.",
    "selected": false
  },
  {
    "id": 951,
    "name": "Matt Fabric CAPUCHINO 59ml.",
    "price": "3.00",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/fmwziv5qbsfa57e85fbmm/style-matt-fabric-CAPUCHINO.jpg?rlkey=7gl9wxq9kzozh6cileuojit35&st=q7amzu3i&dl=0"],
    "label": "59 ml.",
    "description": "Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.",
    "selected": false
  },
  {
    "id": 952,
    "name": "Matt Fabric CALABAZA 59ml.",
    "price": "3.00",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/q8gdf5ywrkx056z9k6ihv/style-matt-fabric-CALABAZA.jpg?rlkey=60s4rrhdbdixpbhtbw3jezjv7&st=0xemgb74&dl=0"],
    "label": "59 ml.",
    "description": "Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.",
    "selected": false
  },
  {
    "id": 953,
    "name": "Matt Fabric CACAO 59ml.",
    "price": "3.00",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/02t72m4u8r4ru0jked28d/style-matt-fabric-CACAO.jpg?rlkey=5e07mbbyxej5vvgmhf3e2zdrr&st=dd4yuh31&dl=0"],
    "label": "59 ml.",
    "description": "Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.",
    "selected": false
  },
  {
    "id": 954,
    "name": "Matt Fabric BURDEOS 59ml.",
    "price": "3.00",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/tqpckcyg7gp05l6nkyu5g/style-matt-fabric-BURDEOS.jpg?rlkey=jruljjpkshkzbf6kapnq8oayh&st=tc4t963i&dl=0"],
    "label": "59 ml.",
    "description": "Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.",
    "selected": false
  },
  {
    "id": 955,
    "name": "Matt Fabric BLANCO 59ml.",
    "price": "3.00",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/7fjp8nedu7q9mjoi992kp/style-matt-fabric-BLANCO.jpg?rlkey=4zjbu7tpzo9tm5doqltpzeqis&st=nb470v0p&dl=0"],
    "label": "59 ml.",
    "description": "Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.",
    "selected": false
  },
  {
    "id": 956,
    "name": "Matt Fabric AZUL-TUFIS 59ml.",
    "price": "3.00",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/04jeu2noxa89w30b5thc8/style-matt-fabric-AZUL-TUFIS.jpg?rlkey=9jvp2nqmm5ir1rv6by3g5aimg&st=hgqp8t9f&dl=0"],
    "label": "59 ml.",
    "description": "Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.",
    "selected": false
  },
  {
    "id": 957,
    "name": "Matt Fabric AZUL-ROYAL 59ml.",
    "price": "3.00",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/b0dwnkza76x9oqfhkswqm/style-matt-fabric-AZUL-ROYAL.jpg?rlkey=2imigrknudjs4qizf098t4b62&st=38zn9buu&dl=0"],
    "label": "59 ml.",
    "description": "Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.",
    "selected": false
  },
  {
    "id": 958,
    "name": "Matt Fabric AZUL-OSCURO 59ml.",
    "price": "3.00",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/1ftktque06t7jj6m3eo58/style-matt-fabric-AZUL-OSCURO.jpg?rlkey=5pdoblco2ohf2m9zlyfdyruid&st=2vmn1rm1&dl=0"],
    "label": "59 ml.",

    "description": "Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.",
    "selected": false
  },
  {
    "id": 959,
    "name": "Matt Fabric AZUL-LAVANDA 59ml.",
    "price": "3.00",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/n1gz77j1iji47qokyy5rf/style-matt-fabric-AZUL-LAVANDA.jpg?rlkey=f1yt8tcpz5g6okcygwqb34473&st=2k5ymb9j&dl=0"],
    "label": "59 ml.",

    "description": "Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.",
    "selected": false
  },
  {
    "id": 960,
    "name": "Matt Fabric AZUL-BEBE 59ml.",
    "price": "3.00",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/i32krz1r6ccf2h00hu1mo/style-matt-fabric-AZUL-BEBE.jpg?rlkey=3lhlgnwj6bt0e11sp6ka5t4se&st=6sx18yed&dl=0"],
    "label": "59 ml.",

    "description": "Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.",
    "selected": false
  },
  {
    "id": 961,
    "name": "Matt Fabric AZUCAR-ROSA 59ml.",
    "price": "3.00",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/hl8235gxl8dfew8rrdbmf/style-matt-fabric-AZUCAR-ROSA.jpg?rlkey=35eqypzfyx4blnialviru5hqm&st=7a18qhpw&dl=0"],
    "label": "59 ml.",

    "description": "Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.",
    "selected": false
  },
  {
    "id": 962,
    "name": "Matt Fabric ARENA-BEIGE 59ml.",
    "price": "3.00",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/bq1l6ct1qkh5qoeqo01nf/style-matt-fabric-ARENA-BEIGE.jpg?rlkey=ic8a1iog2lvj7wvtqy0kud807&st=w8mzvvos&dl=0"],
    "label": "59 ml.",

    "description": "Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.",
    "selected": false
  },
  {
    "id": 963,
    "name": "Matt Fabric AMBAR 59ml.",
    "price": "3.00",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/lq9ask7b44hjijmi4o93i/style-matt-fabric-AMBAR.jpg?rlkey=6xq8dzm0lsjgkm6zk4438g2eb&st=eq1qvrp6&dl=0"],
    "label": "59 ml.",

    "description": "Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.",
    "selected": false
  },
  {
    "id": 964,
    "name": "Matt Fabric AMARILLO 59ml.",
    "price": "3.00",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/f04isoie5ixzj5jhx35ys/style-matt-fabric-AMARILLO.jpg?rlkey=xvj1bkgp6hx5ks10r0qg3mf72&st=3g96dx99&dl=0"],
    "label": "59 ml.",

    "description": "Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.",
    "selected": false
  },
  {
    "id": 965,
    "name": "Matt Fabric AMARILLO-VAINILLA 59ml.",
    "price": "3.00",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/e4u1iknwoh19c7c129a4f/style-matt-fabric-AMARILLO-VAINILLA.jpg?rlkey=57ruq4xj0csuv644xjy6qqie4&st=c5jmbdhp&dl=0"],
    "label": "59 ml.",
    "description": "Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar_la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.",
    "selected": false
  },
  {
    "id": 966,
    "name": "Matt Fabric AMARILLO-LIMON 59ml.",
    "price": "3.00",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/mrk5it1v1l5o99ywu73ek/style-matt-fabric-AMARILLO-LIMON.jpg?rlkey=pz1llhpn8op66e4jf0ny4m241&st=ilagccc7&dl=0"],
    "label": "59 ml.",
    "description": "Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.",
    "selected": false
  },
  {
    "id": 967,
    "name": "Set 5 Pinturas TELA Vintage",
    "price": "14.95",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/c49comyxwweiiw7fo7tru/set-tela-vintage-5-pcs.jpg?rlkey=yjc6h2wg3pbmwbb9kjcpotxkc&st=7zkjonxe&dl=0"],
    "label": "5 pcs",
    "description": "SET 5 pinturas STYLE MATT FABRIC de CADENCE F634, F614, F618, F624 y F627",
    "selected": false
  },
  {
    "id": 968,
    "name": "Set 5 Pinturas TELA Basico",
    "price": "14.95",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/bik18f4jh8v6scfje5133/set-5-pinturas-basico-tela.jpg?rlkey=y9nhdcibpyabjqvz83z683dy7&st=kpxoijzh&dl=0"],
    "label": "5 pcs",
    "description": "SET 5 pinturas STYLE MATT FABRIC de CADENCE BLANCO, NEGRO, AZUL, ROJO y AMARILLO",
    "selected": false
  },
  {
    "id": 969,
    "name": "Set 5 Pinturas TELA Funny",
    "price": "14.95",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/1jkmrtsjygq3rzioqwyfl/set-tela-funny-5-pcs.jpg?rlkey=l2b9sezkqsg26glhqgfymn6xz&st=4krsuwws&dl=0"],
    "label": "5 pcs",
    "description": "SET 5 pinturas STYLE MATT FABRIC de CADENCE F605, F612, F616, F622 y F633",
    "selected": false
  },
  {
    "id": 970,
    "name": "Pintura HOLOGRAFICA para tela",
    "price": "4.20",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/p4isy2lmnxxo6mqrsspck/pintura-holografica-para-tela.jpg?rlkey=vfuepkxwr9ym0arl3o6lf1dnx&st=xyfr9iu7&dl=0"],
    "label": "50 ml.",

    "description": "Pintura con base al agua de acabado transparente con brillos holográficos especial apra usar sobre tela, Recuerda fijar la pintura a la tela con el calor de una plancha sin vapor.",
    "selected": false
  }
  





];

// Define el rango de precios mínimo y máximo de tus productos
const precioMinimo = 0;
const precioMaximo = 20;

export const Tienda3PinturasTextiles = () => {
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
          <h2>Pinturas MATT FABRIC para textil Cadence🎨</h2>

          <h3>Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.</h3>

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
