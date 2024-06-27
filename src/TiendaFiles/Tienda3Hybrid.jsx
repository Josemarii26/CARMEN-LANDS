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
    id: 186,
    name: 'Hybrid HAZERAN PURPLE 70ml.',
    price: '2.60',
    images: [
      'https://i.ibb.co/S3vpWDd/hybrid-hazeran-purple-70ml.jpg',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 187,
    name: 'Hybrid ENCAJE 70ml.',
    price: '2.60',
    images: [
      'https://i.ibb.co/6DVqG0X/hybrid-encaje-70ml.jpg',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 188,
    name: 'Hybrid BURDEOS 70ml.',
    price: '2.60',
    images: [
      'https://i.ibb.co/8245Lyv/hybrid-burdeos-70ml.jpg',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 189,
    name: 'Hybrid AZUL RÍO 70ml.',
    price: '2.60',
    images: [
      'https://i.ibb.co/SsJnqZr/hybrid-river-blue-70ml.jpg',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 190,
    name: 'Hybrid CEREZA 70ml.',
    price: '2.60',
    images: [
      'https://i.ibb.co/SfSL4kp/hybrid-cereza-70ml.jpg',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 191,
    name: 'Hybrid GRIS PIZARRA OSCURO 70ml.',
    price: '2.60',
    images: [
      'https://i.ibb.co/HKFLFh6/hybrid-gris-pizarra-oscuro-70ml.jpg',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 192,
    name: 'Hybrid VERDE FINO 70ml.',
    price: '2.60',
    images: [
      'https://i.ibb.co/p2kjnV6/hybrid-verde-fino-70ml.jpg',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 193,
    name: 'Hybrid VERDE MENTA 70ml.',
    price: '2.60',
    images: [
      'https://i.ibb.co/pLnzjSq/hybrid-cerde-menta-70ml.jpg',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 194,
    name: 'Hybrid AZUL NAPOLEÓN 70ml.',
    price: '2.60',
    images: [
      'https://i.ibb.co/WyLJTT9/hybrid-azul-napoleon-70ml.jpg',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 195,
    name: 'Hybrid Loft HUESO ANTIGUO 70ml.',
    price: '2.60',
    images: [
      'https://i.ibb.co/TR3wHKt/hybrid-hueso-antiguo-70ml.jpg',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 196,
    name: 'Hybrid CIRUELA 70ml.',
    price: '2.60',
    images: [
      'https://i.ibb.co/sHRJzkH/hybrid-ciruela-70ml.jpg',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 197,
    name: 'Hybrid AZUL MEDIANOCHE 70ml.',
    price: '2.60',
    images: [
      'https://i.ibb.co/V22npfK/hybrid-midnight-blue-70ml.jpg',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 198,
    name: 'Hybrid VERDE ESMERALDA 70ml.',
    price: '2.60',
    images: [
      'https://i.ibb.co/5rPYbqb/hybrid-emerald-green-70ml.jpg',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 199,
    name: 'Hybrid VERDE HOJA 70ml.',
    price: '2.60',
    images: [
      'https://i.ibb.co/m9v6Ldm/hybrid-verde-hoja-70ml.jpg',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 200,
    name: 'Hybrid APPLE CANDY 70ml.',
    price: '2.60',
    images: [
      'https://i.ibb.co/GdxQjHF/hybrid-apple-candy-70ml.jpg',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 201,
    name: 'Hybrid OCÉANO 70ml.',
    price: '2.60',
    images: [
      'https://i.ibb.co/84kgmXM/hybrid-oceano-70ml.jpg',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 202,
    name: 'Hybrid AMARILLO SOL 70ml.',
    price: '2.60',
    images: [
      'https://i.ibb.co/FgW3HxX/hybrid-sun-yellow-70ml.jpg',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 203,
    name: 'Hybrid NEGRO 70ml.',
    price: '2.60',
    images: [
      'https://i.ibb.co/ry2Tyw1/hybrid-negro-70ml.jpg',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 204,
    name: "Hybrid CORAL 70ml.",
    price: '2.60',
    images: [
      'https://i.ibb.co/0GpYZVD/hybrid-coral-70ml.jpg',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 205,
    name: 'Hybrid BLANCO 120ml.',
    price: 4.00,
    images: [
      'https://i.ibb.co/mC2RnRJ/hybrid-blanco-120-ml.jpg',
    ],
    label: '120 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 206,
    name: "Hybrid CENIZA 500 ml.",
    price: '15.70',
    images: [
      'https://i.ibb.co/PZn3j4Z/hybrid-ceniza-500ml.jpg',
    ],
    label: '500 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 207,
    name: 'Hybrid BLANCO ANTIGUO 500 ml.',
    price: '15.70',
    images: [
      'https://i.ibb.co/yhRX3Hc/hybrid-blanco-antiguo-500ml.jpg',
    ],
    label: '500 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 208,
    name: 'Hybrid BLANCO 500 ml.',
    price: '15.70',
    images: [
      'https://i.ibb.co/WFDmDC9/hybrid-blanco-500ml.jpg',
    ],
    label: '500 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 209,
    name: 'Hybrid VERDE MOHO 70ml.',
    price: '2.60',
    images: [
      'https://i.ibb.co/XtLg7J2/hybrid-verde-moho-70ml.jpg',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 210,
    name: 'Hybrid LILA 70ml.',
    price: '2.60',
    images: [
      
      'https://i.ibb.co/w4RYtr3/hybrid-light-violet-70ml.jpg',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 211,
    name: 'Hybrid SPRING 70ml.',
    price: '2.60',
    images: [
      'https://i.ibb.co/jZhDxFS/hybrid-spring-70ml.jpg',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 212,
    name: 'Hybrid WALNUT 70ml.',
    price: '2.60',
    images: [
      'https://i.ibb.co/kK5qVpV/hybrid-walnut-70ml.jpg',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 213,
    name: 'Hybrid CASHMERE 70ml.',
    price: '2.60',
    images: [
      'https://i.ibb.co/jTkSWNQ/hybrid-cashmere-70ml.jpg',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 214,
    name: 'Hybrid FLOR DE GRANADA 70ml.',
    price: '2.60',
    images: [
      'https://i.ibb.co/P9yTp34/hybrid-pomegranate-flower-70ml.jpg',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 215,
    name: 'Hybrid CALABAZA 70ml.',
    price: '2.60',
    images: [
      'https://i.ibb.co/8jx4NdM/hybrid-pumkin-70ml.jpg',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 216,
    name: 'Hybrid CHAMPAIGNE 70ml.',
    price: '2.60',
    images: [
      'https://i.ibb.co/DC5H7wV/hybrid-champaigne-70ml.jpg',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 217,
    name: 'Hybrid WIND 70ml.',
    price: '2.60',
    images: [
      'https://i.ibb.co/BrFpRy1/hybrid-wind-70ml.jpg',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 218,
    name: 'Hybrid ROBLE CLÁSICO 70ml.',
    price: '2.60',
    images: [
      'https://i.ibb.co/tbNs54v/hybrid-classic-oak-70ml.jpg',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 219,
    name: 'Hybrid EGEO 70ml.',
    price: '2.60',
    images: [
      'https://i.ibb.co/H4tdGF5/hybrid-egeo-70ml.jpg',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 220,
    name: 'Hybrid SALMÓN 70ml.',
    price: '2.60',
    images: [
      'https://i.ibb.co/HDsjfWF/hybrid-salmon-70ml.jpg',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 221,
    name: "Hybrid NEGRO ANTRACITA 70ml.",
    price: '2.60',
    images: [
      'https://i.ibb.co/tMz7GcZ/hybrid-negro-antracita-70ml.jpg',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 222,
    name: 'Hybrid SPRING 500ml.',
    price: '15.70',
    images: [
      'https://i.ibb.co/7YpmJy0/hybrid-spring-500ml.jpg',
    ],
    label: '500 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 223,
    name: 'Hybrid CHAMPAIGNE 500ml.',
    price: '15.70',
    images: [
      'https://i.ibb.co/T0yGxHX/hybrid-champaigne-500ml.jpg',
    ],
    label: '500 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 224,
    name: 'Hybrid OCÉANO 500ml.',
    price: '15.70',
    images: [
      'https://i.ibb.co/3cnTRnT/hybrid-oceano-500ml.jpg',
    ],
    label: '500 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 225,
    name: 'Hybrid NEGRO ANTRACITA 500ml.',
    price: '15.70',
    images: [
      'https://i.ibb.co/xCCZLxb/hybrid-negro-antracita-500ml.jpg',
    ],
    label: '500 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 226,
    name: 'Hybrid CENIZA 70ml.',
    price: '2.60',
    images: [
      'https://i.ibb.co/GHBd9H7/hybrid-ceniza-70ml.jpg',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 227,
    name: 'Hybrid SISAL 70ml.',
    price: '2.60',
    images: [
      'https://i.ibb.co/GJfm7wW/hybrid-sisal-70ml.jpg',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 228,
    name: 'Hybrid SOHO 70ml.',
    price: '2.60',
    images: [
      'https://i.ibb.co/wdXQGVT/hybrid-soho-70ml.jpg',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 229,
    name: 'Hybrid COSTA MARFIL 70ml.',
    price: '2.60',
    images: [
      'https://i.ibb.co/P9GQwm9/hybrid-costa-marfil-70ml.jpg',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 230,
    name: 'Hybrid VAHA 70ml.',
    price: '2.60',
    images: [
      'https://i.ibb.co/sjgzPf6/hybrid-vaha-70ml.jpg',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 231,
    name: 'Hybrid JARDÍN TIBETANO 70ml.',
    price: '2.60',
    images: [
      'https://i.ibb.co/hmbBzgL/hybrid-jardin-tibetano-70ml.jpg',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 232,
    name: 'Hybrid PALAMO 70ml.',
    price: '2.60',
    images: [
      'https://i.ibb.co/rcX05GL/hybrid-palamo-70ml.jpg',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 233,
    name: 'Hybrid PIEDRA 70ml.',
    price: '2.60',
    images: [
      'https://i.ibb.co/NtNsGkK/hybrid-piedra-70ml.jpg',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 234,
    name: 'Hybrid AZUL OSCURO 70ml.',
    price: '2.60',
    images: [
      'https://i.ibb.co/W2pDLnk/hybrid-azul-oscuro-70ml.jpg',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 235,
    name: 'Hybrid VERDE TREBOL 70ml.',
    price: '2.60',
    images: [
      'https://i.ibb.co/zsq8ZV8/hybrid-verde-trebol-70ml.jpg',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 236,
    name: 'Hybrid VISÓN 70ml.',
    price: '2.60',
    images: [
      'https://i.ibb.co/gwkFz3B/hybrid-vison-70ml.jpg',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 237,
    name: 'Hybrid ARDUVAZ GRIS 70ml.',
    price: '2.60',
    images: [
      'https://i.ibb.co/j3dHhKJ/hybrid-arduvaz-gris-70ml.jpg',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 238,
    name: 'Hybrid ROJO SANGRE 70ml.',
    price: '2.60',
    images: [
      'https://i.ibb.co/D76HcdB/hybrid-rojo-sangre-70ml.jpg',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 239,
    name: 'Hybrid ROJO CARMÍN 70ml.',
    price: '2.60',
    images: [
      'https://i.ibb.co/jJnHs6m/hybrid-rojo-carmin-70ml.jpg',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 240,
    name: 'Hybrid VERDE OXFORD 70ml.',
    price: '2.60',
    images: [
      'https://i.ibb.co/rdytYm6/hybrid-verde-oxford-70ml.jpg',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 241,
    name: "Hybrid VERDE MUSGO 70ml.",
    price: '2.60',
    images: [
      'https://i.ibb.co/bLxz3zS/hybrid-verde-musgo-70ml.jpg',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 242,
    name: 'Hybrid VERDE TILO 70ml.',
    price: 4.00,
    images: [
      'https://i.ibb.co/5kxQXwP/hybrid-verde-tilo-70ml.jpg',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 243,
    name: "Hybrid SALVIA CLARA 70ml.",
    price: '15.70',
    images: [
      'https://i.ibb.co/QKsq5hd/hybrid-salvia-clara-70ml.jpg',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 244,
    name: 'Hybrid VERDE PISTACHO 70ml.',
    price: '15.70',
    images: [
      'https://i.ibb.co/DfgVD6j/hybrid-verde-pistacho-70ml.jpg',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 245,
    name: 'Hybrid VERDE CLARO 70ml.',
    price: '15.70',
    images: [
      'https://i.ibb.co/ZTqypTj/hybrid-verde-claro-70ml.jpg',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 246,
    name: 'Hybrid TURQUESA 70ml.',
    price: '2.60',
    images: [
      'https://i.ibb.co/T2ykHYX/hybrid-turquesa-70ml.jpg',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 247,
    name: 'Hybrid JARDÍN TIBETANO 500ml.',
    price: '15.70',
    images: [
      'https://i.ibb.co/7RfS19f/hybrid-jardin-tibetano-500ml.jpg',
    ],
    label: '500 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 248,
    name: 'Hybrid PALAMO 500ml.',
    price: '15.70',
    images: [
      'https://i.ibb.co/CJWyDqB/hybrid-palamo-500ml.jpg',
    ],
    label: '500 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 249,
    name: 'Hybrid PIEDRA 500ml.',
    price: '15.70',
    images: [
      'https://i.ibb.co/5R9ZJyc/hybrid-piedra-500ml.jpg',
    ],
    label: '500 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 250,
    name: 'Hybrid AZUL OSCURO 500ml.',
    price: '15.70',
    images: [
      'https://i.ibb.co/W2pDLnk/hybrid-azul-oscuro-70ml.jpg',
    ],
    label: '500 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 251,
    name: 'Hybrid NEGRO 500ml.',
    price: '15.70',
    images: [
      'https://i.ibb.co/0nCPsSm/hybrid-negro-500ml.jpg',
    ],
    label: '500 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 252,
    name: 'Hybrid VISÓN 500ml.',
    price: '15.70',
    images: [
      'https://i.ibb.co/kyNf0mf/hybrid-vison-500ml.jpg',
    ],
    label: '500 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 253,
    name: 'Hybrid PIZARRA 500ml.',
    price: '15.70',
    images: [
      'https://i.ibb.co/SfqZkjR/hybrid-gris-pizarra-500ml.jpg',
    ],
    label: '500 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 254,
    name: 'Hybrid ARDUVAZ GRIS 500ml.',
    price: '15.70',
    images: [
      'https://i.ibb.co/N1j8f7b/hybrid-arduvaz-gris-500ml.jpg',
    ],
    label: '500 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 255,
    name: 'Hybrid VERDE HOJA 500ml.',
    price: '15.70',
    images: [
      'https://i.ibb.co/gMhcyDp/hybrid-verde-hoja-500ml.jpg',
    ],
    label: '500 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 256,
    name: 'Hybrid VERDE OXFORD 500ml.',
    price: '15.70',
    images: [
      'https://i.ibb.co/52PpvD4/hybrid-verde-oxford-500ml.jpg',
    ],
    label: '500 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 257,
    name: 'Hybrid VERDE MUSGO 500ml.',
    price: '15.70',
    images: [
      'https://i.ibb.co/bLNvmB2/hybrid-verde-musgo-500ml.jpg',
    ],
    label: '500 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 258,
    name: 'Hybrid VERDE TILO 500ml.',
    price: '15.70',
    images: [
      'https://i.ibb.co/30Wy3Pm/hybrid-verde-tilo-500ml.jpg',
    ],
    label: '500 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 259,
    name: 'Hybrid VERDE FINO 500ml.',
    price: '15.70',
    images: [
      'https://i.ibb.co/hL7tFNn/hybrid-verde-fino-500ml.jpg',
    ],
    label: '500 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 260,
    name: 'Hybrid SALVIA CLARA 500ml.',
    price: '15.70',
    images: [
      'https://i.ibb.co/LNQbdtx/hybrid-salvia-clara-500ml.jpg',
    ],
    label: '500 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 261,
    name: 'Hybrid VERDE MENTA 500ml.',
    price: '15.70',
    images: [
      'https://i.ibb.co/Pj99x5d/hybrid-verde-menta-500ml.jpg',
    ],
    label: '500 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 262,
    name: 'Hybrid VERDE CLARO 500ml.',
    price: '15.70',
    images: [
      'https://i.ibb.co/8gy4bY6/hybrid-verde-claro-500ml.jpg',
    ],
    label: '500 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 263,
    name: 'Hybrid AZUL NAPOLEÓN 500ml.',
    price: '15.70',
    images: [
      'https://i.ibb.co/VV65xvT/hybrid-azul-napoleon-500ml.jpg',
    ],
    label: '500 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 264,
    name: 'Hybrid NEGRO 120ml.',
    price: 4.00,
    images: [
      'https://i.ibb.co/TvDvZF9/hybrid-negro-120ml.jpg',
    ],
    label: '120 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 265,
    name: 'Hybrid AZUL LAGUNA 70ml.',
    price: '2.60',
    images: [
      'https://i.ibb.co/gtKzBXf/hybrid-azul-laguna-70ml.jpg',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 266,
    name: 'Hybrid AZUL ULTRAMARINO 70ml.',
    price: '2.60',
    images: [
      'https://i.ibb.co/C1M0gw8/hybrid-azul-ultramarino-70ml.jpg',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 267,
    name: 'Hybrid AZUL REAL 70ml.',
    price: '2.60',
    images: [
      'https://i.ibb.co/VLc5mWT/hybrid-azul-real-70ml.jpg',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 268,
    name: 'Hybrid AZUL BEBÉ 70ml.',
    price: '2.60',
    images: [
      'https://i.ibb.co/JmyksJm/hybrid-azul-bebe-70ml.jpg',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 269,
    name: 'Hybrid MORADO 70ml.',
    price: '2.60',
    images: [
      'https://i.ibb.co/vhhPnn6/hybrid-morado-70ml.jpg',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 270,
    name: 'Hybrid IRIS 70ml.',
    price: '2.60',
    images: [
      'https://i.ibb.co/s2yFvcY/hybrid-iris-70ml.jpg',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 271,
    name: 'Hybrid MALVA CLARO 70ml.',
    price: '2.60',
    images: [
      'https://i.ibb.co/VTDqBxR/hybrid-malva-claro-70ml.jpg',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 272,
    name: 'Hybrid LILA CLARO 70ml.',
    price: '2.60',
    images: [
      'https://i.ibb.co/Bg291Bz/hybrid-lila-70ml.jpg',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 273,
    name: 'Hybrid CAMELOT 70ml.',
    price: '2.60',
    images: [
      'https://i.ibb.co/N1hCw6x/hybrid-camelot-70ml.jpg',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 274,
    name: 'Hybrid ROSA VICTORIA 70ml.',
    price: '2.60',
    images: [
      'https://i.ibb.co/NLkr7NP/hybrid-rosa-victoria-70ml.jpg',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 275,
    name: 'Hybrid SEDONA 70ml.',
    price: '2.60',
    images: [
      'https://i.ibb.co/rx6BJ43/hybrid-sedona-70ml.jpg',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 276,
    name: 'Hybrid FLOR DE CACTUS 70ml.',
    price: '2.60',
    images: [
      'https://i.ibb.co/VN9fdH0/hybrid-flor-cactus-70ml.jpg',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 277,
    name: 'Hybrid FUCSIA 70ml.',
    price: '2.60',
    images: [
      'https://i.ibb.co/DGbwx2D/hybrid-fucsia-70ml.jpg',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 278,
    name: 'Hybrid ROSA BEBÉ 70ml.',
    price: '2.60',
    images: [
      'https://i.ibb.co/W5BYzVj/hybrid-rosa-bebe-70ml.jpg',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 279,
    name: "Hybrid ROSA PÁLIDO 70ml.",
    price: '2.60',
    images: [
      'https://i.ibb.co/mSvwjNB/hybrid-rosa-palido-70ml.jpg',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 280,
    name: 'Hybrid MARRÓN COLLIER 70ml.',
    price: 4.00,
    images: [
      'https://i.ibb.co/bPCbYxD/hybrid-marron-colier-70ml.jpg',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 281,
    name: "Hybrid AVELLANA CÁLIDO 70ml.",
    price: '15.70',
    images: [
      'https://i.ibb.co/6njZVHP/hybrid-avellana-calido-70ml.jpg',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 282,
    name: 'Hybrid CHOCOLATE OSCURO 70ml.',
    price: '15.70',
    images: [
      'https://i.ibb.co/Cnvw73Y/hybrid-chocolate-oscuro-70ml.jpg',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 283,
    name: 'Hybrid CHOCOLATE 70ml.',
    price: '15.70',
    images: [
      'https://i.ibb.co/PY5npqT/hybrid-chocolate-70ml.jpg',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 284,
    name: 'Hybrid MARRÓN CÁLIDO 70ml.',
    price: '2.60',
    images: [
      'https://i.ibb.co/j8KT0pW/hybrid-marron-calido-70ml.jpg',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 285,
    name: 'Hybrid ARAROT 70ml.',
    price: '2.60',
    images: [
      'https://i.ibb.co/T2bNdz6/hybrid-ararot-70ml.jpg',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 286,
    name: 'Hybrid ÁMBAR 70ml.',
    price: '2.60',
    images: [
      'https://i.ibb.co/L5yMyvR/hybrid-ambar-70ml.jpg',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 287,
    name: 'Hybrid NARANJA 70ml.',
    price: '2.60',
    images: [
      'https://i.ibb.co/C6QdTtW/hybrid-naranja-70ml.jpg',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 288,
    name: "Hybrid NARANJA CLARO 70ml.",
    price: '2.60',
    images: [
      'https://i.ibb.co/f092bvk/hybrid-naranja-claro-70ml.jpg',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 289,
    name: 'Hybrid AMARILLO 70ml.',
    price: '2.60',
    images: [
      'https://i.ibb.co/hBNFgnt/hybrid-amarillo-70ml.jpg',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 290,
    name: 'Hybrid CARAMELO 70ml.',
    price: '2.60',
    images: [
      'https://i.ibb.co/hgTn87W/hybrid-caramelo-70ml.jpg',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 291,
    name: 'Hybrid BLANCO ANTIGUO 70ml.',
    price: '2.60',
    images: [
      'https://i.ibb.co/pfQRb1Q/hybrid-blanco-antiguo-70ml.jpg',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 292,
    name: 'Hybrid BLANCO 70ml.',
    price: '2.60',
    images: [
      'https://i.ibb.co/6XG6bkq/hybrid-blanco-70ml.jpg',
    ],
    label: '70 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 293,
    name: 'Hybrid AZUL LAGUNA 500ml.',
    price: '15.70',
    images: [
      'https://i.ibb.co/vQPbcKw/hybrid-azul-laguna-500ml.jpg',
    ],
    label: '500 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 294,
    name: 'Hybrid AZUL ULTRAMARINO 500ml.',
    price: '15.70',
    images: [
      'https://i.ibb.co/T49yXs3/hybrid-azul-ultramarino-500ml.jpg',
    ],
    label: '500 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 295,
    name: 'Hybrid AZUL BEBÉ 500ml.',
    price: '15.70',
    images: [
      'https://i.ibb.co/Dp0rrmb/hybrid-azul-bebe-500ml.jpg',
    ],
    label: '500 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 296,
    name: 'Hybrid MALVA CLARO 500ml.',
    price: '15.70',
    images: [
      'https://i.ibb.co/y47F55J/hybrid-malva-claro-500ml.jpg',
    ],
    label: '500 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 297,
    name: 'Hybrid LILA CLARO 500ml.',
    price: '15.70',
    images: [
      'https://i.ibb.co/ThJWr31/hybrid-lila-claro-500ml.jpg',
    ],
    label: '500 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 298,
    name: 'Hybrid CAMELOT 500ml.',
    price: '15.70',
    images: [
      'https://i.ibb.co/mDMttxn/hybrid-camelot-500ml.jpg',
    ],
    label: '500 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 299,
    name: 'Hybrid ROSA VICTORIA 500ml.',
    price: '15.70',
    images: [
      'https://i.ibb.co/t3Vsxwt/hybrid-rosa-victoria-500ml.jpg',
    ],
    label: '500 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 300,
    name: 'Hybrid SEDONA 500ml.',
    price: '15.70',
    images: [
      'https://i.ibb.co/Krg1cL2/hybrid-sedona-500ml.jpg',
    ],
    label: '500 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 301,
    name: 'Hybrid FLOR DE CACTUS 500ml.',
    price: '15.70',
    images: [
      'https://i.ibb.co/qnyL8Wt/hybrid-flor-cactus-500ml.jpg',
    ],
    label: '500 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 302,
    name: 'Hybrid ROSA BEBÉ 500ml.',
    price: '15.70',
    images: [
      'https://i.ibb.co/82Jx18T/hybrid-rosa-bebe-500ml.jpg',
    ],
    label: '500 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 303,
    name: 'Hybrid ROSA PÁLIDO 500ml.',
    price: '15.70',
    images: [
      'https://i.ibb.co/TgFhsXP/hybrid-rosa-palido-500ml.jpg',
    ],
    label: '500 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 304,
    name: 'Hybrid MARRÓN COLLIER 500ml.',
    price: '15.70',
    images: [
      'https://i.ibb.co/F820RLX/hybrid-marron-colier-500ml.jpg',
    ],
    label: '500 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 305,
    name: 'Hybrid AVELLANA CÁLIDO 500ml.',
    price: '15.70',
    images: [
      'https://i.ibb.co/cczxKBR/hybrid-avellana-calido-500ml.jpg',
    ],
    label: '500 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 306,
    name: 'Hybrid CHOCOLATE OSCURO 500ml.',
    price: '15.70',
    images: [
      'https://i.ibb.co/bRLvfx1/hybrid-chocolate-oscuro-500ml.jpg',
    ],
    label: '500 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 307,
    name: 'Hybrid CHOCOLATE 500ml.',
    price: '15.70',
    images: [
      'https://i.ibb.co/TLBG6F7/hybrid-chocolate-500ml.jpg',
    ],
    label: '500 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 308,
    name: 'Hybrid MARRÓN CÁLIDO 500ml.',
    price: '15.70',
    images: [
      'https://i.ibb.co/TLBG6F7/hybrid-chocolate-500ml.jpg',
    ],
    label: '500 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 309,
    name: 'Hybrid ARAROT 500ml.',
    price: '15.70',
    images: [
      'https://i.ibb.co/Kh6CMzq/hybrid-ararot-500ml.jpg',
    ],
    label: '500 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 310,
    name: 'Hybrid ÁMBAR 500ml.',
    price: '15.70',
    images: [
      'https://i.ibb.co/MfJbRnP/hybrid-ambar-500ml.jpg',
    ],
    label: '500 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 311,
    name: 'Hybrid NARANJA 500ml.',
    price: '15.70',
    images: [
      'https://i.ibb.co/xfQPz3Y/hybrid-naranja-500ml.jpg',
    ],
    label: '500 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 312,
    name: 'Hybrid NARANJA CLARO 500ml.',
    price: '15.70',
    images: [
      'https://i.ibb.co/SXPddFP/hybrid-naranja-claro-500ml.jpg',
    ],
    label: '500 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 313,
    name: 'Hybrid AMARILLO 500ml.',
    price: '15.70',
    images: [
      'https://i.ibb.co/6NJyHzn/hybrid-amarillo-500ml.jpg',
    ],
    label: '500 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 314,
    name: 'Hybrid ENCAJE 500ml.',
    price: '15.70',
    images: [
      'https://i.ibb.co/H2vqz4p/hybrid-encaje-500ml.jpg',
    ],
    label: '500 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 315,
    name: 'Hybrid CARAMELO 500ml.',
    price: '15.70',
    images: [
      'https://i.ibb.co/1bhnK26/hybrid-caramelo-500ml.jpg',
    ],
    label: '500 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 316,
    name: 'Hybrid ENCAJE 120ml.',
    price: 4.00,
    images: [
      'https://i.ibb.co/DYHTqwT/hybrid-encaje-120ml.jpg',
    ],
    label: '120 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 317,
    name: 'Hybrid CARAMELO 120ml.',
    price: 4.00,
    images: [
      'https://i.ibb.co/ncfyrYH/hybrid-caramelo-120ml.jpg',
    ],
    label: '120 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 318,
    name: 'Hybrid BLANCO ANTIGUO 120ml.',
    price: 4.00,
    images: [
      'https://i.ibb.co/prWMQwN/hybrid-blanco-antiguo-120ml.jpg',
    ],
    label: '120 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  {
    id: 319,
    name: 'Hybrid GRIS PIZARRA OSCURO 500ml.',
    price: '15.70',
    images: [
      'https://i.ibb.co/SfqZkjR/hybrid-gris-pizarra-500ml.jpg',
    ],
    label: '500 ml.',
    description: 'Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ',
    selected: false,
  },
  
  
  





];

// Define el rango de precios mínimo y máximo de tus productos
const precioMinimo = 0;
const precioMaximo = 18;

export const Tienda3Hybrid = () => {
  const [products, setProducts] = useState(initialProducts);
  const [priceRange, setPriceRange] = useState([precioMinimo, precioMaximo]);
  const [selectedClasses, setSelectedClasses] = useState([]);
  const [showNoProducts, setShowNoProducts] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [cart, setCart] = useState([]);
  const [showOverlay, setShowOverlay] = useState(false);
  const [filterButtonIcon, setFilterButtonIcon] = useState(<ViewOffIcon />);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(44); // Cambia el número según tus necesidades

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

          <h2>Pinturas Acrílicas Hybrid Cadence🎨</h2>


          <h3>Pintura multisuperficie de CADENCE con una excelente adhesión sobre <br></br><span id='materiales'>madera, porex, piedra, ladrillo, cemento, terracota, metal, papel, porcelana, cristal, cuero, tela, poliuretano, plástico...</span> <br></br>Sin necesidad de imprimación previa.</h3>

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
              
          </div><div className="price-slider">

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
