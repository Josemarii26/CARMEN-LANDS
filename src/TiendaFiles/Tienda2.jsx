import React, { useState, useEffect } from 'react';
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


const initialProducts = [
  {
    id: 1,
    name: 'Butterflies - Mint Papel de seda',
    price: 21.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/ti3qxixf9s455yb4l36y2/shutterstock-1807575772-2-5000x.jpg?rlkey=210elbbm1xthnsp9z5wly5s3x&st=90kezmug&dl=0',
    ],
    label: 'Papel de seda',
    description: 'Mint Tissue Papers ofrece elegancia y sofisticación con diseños sin interrupciones, tamaño generoso de 35x35 cm y calidad premium de 28gsm. Cada paquete incluye tres papeles, brindando un valor excepcional para proyectos creativos. A diferencia de Mint Decoupage Papers, son especializados y versátiles para envolver regalos y hacer tarjetas.',
    selected: false,
  },
  {
    id: 2,
    name: 'Distressed Tile - Mint Papel de seda ',
    price: 21.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/5i42kvf36lmveel84u67s/distressedtile-5000x.jpg?rlkey=q0pzv7t358lyuicd2itckwt10&st=4l0r5fe3&dl=0',
      ],
    label: 'Papel de seda',
    description: 'Mint Tissue Papers ofrece elegancia y sofisticación con diseños sin interrupciones, tamaño generoso de 35x35 cm y calidad premium de 28gsm. Cada paquete incluye tres papeles, brindando un valor excepcional para proyectos creativos. A diferencia de Mint Decoupage Papers, son especializados y versátiles para envolver regalos y hacer tarjetas.',
    selected: false,
  },
  {
    id: 3,
    name: 'Green Leaves - Mint Papel de seda',
    price: 21.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/3lojupyg9ulejevnh10qb/untitleddesign-5000x-2.jpg?rlkey=wj8cyv3dfdxnxsilxvtbb0hlv&st=kk4ckyie&dl=0',
    ],
    label: 'Papel de seda',
    description: 'Mint Tissue Papers ofrece elegancia y sofisticación con diseños sin interrupciones, tamaño generoso de 35x35 cm y calidad premium de 28gsm. Cada paquete incluye tres papeles, brindando un valor excepcional para proyectos creativos. A diferencia de Mint Decoupage Papers, son especializados y versátiles para envolver regalos y hacer tarjetas.',
    selected: false,
  },
  {
    id: 4,
    name: 'Lace - Mint Papel de seda',
    price: 21.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/rjbgrg6gzui3s43brelbq/lace-2048x.jpg?rlkey=usl068uc4b3vcv3qf9qweqxnr&st=lyw379bd&dl=0',
    ],
    label: 'Papel de seda',
    description: 'Mint Tissue Papers ofrece elegancia y sofisticación con diseños sin interrupciones, tamaño generoso de 35x35 cm y calidad premium de 28gsm. Cada paquete incluye tres papeles, brindando un valor excepcional para proyectos creativos. A diferencia de Mint Decoupage Papers, son especializados y versátiles para envolver regalos y hacer tarjetas.',
    selected: false,
  },
  {
    id: 5,
    name: 'Lemons - Mint Papel de seda',
    price: 21.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/dcxjmniqq8hzcxa1a11o9/lemons-5000x.jpg?rlkey=5p75yz17g54ciniew2qn6fsj3&st=ahfuxch7&dl=0',
    ],
    label: 'Papel de seda',
    description: 'Mint Tissue Papers ofrece elegancia y sofisticación con diseños sin interrupciones, tamaño generoso de 35x35 cm y calidad premium de 28gsm. Cada paquete incluye tres papeles, brindando un valor excepcional para proyectos creativos. A diferencia de Mint Decoupage Papers, son especializados y versátiles para envolver regalos y hacer tarjetas.',
    selected: false,
  },
  {
    id: 6,
    name: 'Moroccan Tile - Mint Papel de seda',
    price: 21.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/wjj4v8fvir0b65hkpzo16/untitleddesign-85-5000x.png?rlkey=c53918h1lksjj9qjnv7l0cv0r&st=dq2vwvfc&dl=0',
    ],
    label: 'Papel de seda',
    description: 'Mint Tissue Papers ofrece elegancia y sofisticación con diseños sin interrupciones, tamaño generoso de 35x35 cm y calidad premium de 28gsm. Cada paquete incluye tres papeles, brindando un valor excepcional para proyectos creativos. A diferencia de Mint Decoupage Papers, son especializados y versátiles para envolver regalos y hacer tarjetas.',
    selected: false,
  },
  {
    id: 7,
    name: 'Pastel Florals - Mint Papel de seda',
    price: 21.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/tpami207h9fs68h1ewt4m/pastelflorals-2048x.jpg?rlkey=ci22rrjovg6ub7o99aiy9b7xe&st=gs9frtv6&dl=0',
    ],
    label: 'Papel de seda',
    description: 'Mint Tissue Papers ofrece elegancia y sofisticación con diseños sin interrupciones, tamaño generoso de 35x35 cm y calidad premium de 28gsm. Cada paquete incluye tres papeles, brindando un valor excepcional para proyectos creativos. A diferencia de Mint Decoupage Papers, son especializados y versátiles para envolver regalos y hacer tarjetas.',
    selected: false,
  },
  {
    id: 8,
    name: 'Pink Peacocks - Mint Papel de seda',
    price: 21.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/xe8on47oj0b8sig25d8ed/pinkpeacocks-5000x.jpg?rlkey=qfjp3vyf0biqvkq0ljs1yyh3j&st=x9lqsrca&dl=0',
    ],
    label: 'Papel de seda',
    description: 'Mint Tissue Papers ofrece elegancia y sofisticación con diseños sin interrupciones, tamaño generoso de 35x35 cm y calidad premium de 28gsm. Cada paquete incluye tres papeles, brindando un valor excepcional para proyectos creativos. A diferencia de Mint Decoupage Papers, son especializados y versátiles para envolver regalos y hacer tarjetas.',
    selected: false,
  },
  {
    id: 9,
    name: 'White Flower - Mint Papel de seda',
    price: 21.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/bciv1ehbbum0r11fpmpag/untitleddesign-83-2048x.png?rlkey=5fv1n72oaqdjd1mzbqdhyqaq7&st=4j9bi8x7&dl=0',
    ],
    label: 'Papel de seda',
    description: 'Mint Tissue Papers ofrece elegancia y sofisticación con diseños sin interrupciones, tamaño generoso de 35x35 cm y calidad premium de 28gsm. Cada paquete incluye tres papeles, brindando un valor excepcional para proyectos creativos. A diferencia de Mint Decoupage Papers, son especializados y versátiles para envolver regalos y hacer tarjetas.',
    selected: false,
  },
  {
    id: 10,
    name: 'Yellow Chinoiserie - Mint Papel de seda',
    price: 21.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/sl93t7x889s6lu5yiuwss/yellow-chinoiserie.jpg?rlkey=yb90r4ys0ft941ev785igrlan&st=okpjp7f6&dl=0',
    ],
    label: 'Papel de seda',
    description: 'Mint Tissue Papers ofrece elegancia y sofisticación con diseños sin interrupciones, tamaño generoso de 35x35 cm y calidad premium de 28gsm. Cada paquete incluye tres papeles, brindando un valor excepcional para proyectos creativos. A diferencia de Mint Decoupage Papers, son especializados y versátiles para envolver regalos y hacer tarjetas.',
    selected: false,
  },
  {
    id: 11,
    name: 'A peacock pair - Papel para decoupage - A1 ',
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/yavr024he2xjvpbhxjmso/img-7536-1-1.jpg?rlkey=j6olengiku2keoa7j8xgilmjg&st=rllordkq&dl=0',
    ],
    label: 'A1',
    description: 'Lanzados el 10 de noviembre de 2023, los papeles de decoupage MINT están diseñados para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles buscan convertir tus proyectos en obras de arte. Se incluyen instrucciones detalladas, y se recomienda usar pegamento Decopatch decoupage.',
    selected: false,
  },
  {
    id: 12,
    name: 'A peacock pair - Papel para decoupage - A3 ',
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/yavr024he2xjvpbhxjmso/img-7536-1-1.jpg?rlkey=j6olengiku2keoa7j8xgilmjg&st=rllordkq&dl=0',
    ],
    label: 'A3',
    description: 'Lanzados el 10 de noviembre de 2023, los papeles de decoupage MINT están diseñados para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles buscan convertir tus proyectos en obras de arte. Se incluyen instrucciones detalladas, y se recomienda usar pegamento Decopatch decoupage.',
    selected: false,
  },
  {
    id: 13,
    name: 'A Vintage Christmas - Papel para decoupage - A1 ',
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/eisxmalv83qeosf7gwkcm/img-7533.jpg?rlkey=fbp8wo1c3iku9omaqw8o1g613&st=rrkakpzl&dl=0',
    ],
    label: 'A1',
    description: 'Lanzados el 10 de noviembre de 2023, los papeles de decoupage MINT están diseñados para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles buscan convertir tus proyectos en obras de arte. Se incluyen instrucciones detalladas, y se recomienda usar pegamento Decopatch decoupage.',
    selected: false,
  },
  {
    id: 14,
    name: 'A Vintage Christmas - Papel para decoupage - A3 ',
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/eisxmalv83qeosf7gwkcm/img-7533.jpg?rlkey=fbp8wo1c3iku9omaqw8o1g613&st=rrkakpzl&dl=0',
    ],
    label: 'A3',
    description: 'Lanzados el 10 de noviembre de 2023, los papeles de decoupage MINT están diseñados para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles buscan convertir tus proyectos en obras de arte. Se incluyen instrucciones detalladas, y se recomienda usar pegamento Decopatch decoupage.',
    selected: false,
  },
  {
    id: 15,
    name: 'Octopus - Papel para decoupage - A1 ',
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/04o1pai08fjid4o4jj00z/img-7532.jpg?rlkey=i7lq5sk7eapvzoov7lidkxe7c&st=3ysjb7e8&dl=0',
    ],
    label: 'A1',
    description: 'Lanzados el 10 de noviembre de 2023, los papeles de decoupage MINT están diseñados para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles buscan convertir tus proyectos en obras de arte. Se incluyen instrucciones detalladas, y se recomienda usar pegamento Decopatch decoupage.',
    selected: false,
  },
  {
    id: 16,
    name: 'Octopus - Papel para decoupage - A3 ',
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/04o1pai08fjid4o4jj00z/img-7532.jpg?rlkey=i7lq5sk7eapvzoov7lidkxe7c&st=3ysjb7e8&dl=0',
    ],
    label: 'A3',
    description: 'Lanzados el 10 de noviembre de 2023, los papeles de decoupage MINT están diseñados para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles buscan convertir tus proyectos en obras de arte. Se incluyen instrucciones detalladas, y se recomienda usar pegamento Decopatch decoupage.',
    selected: false,
  },
  {
    id: 17,
    name: 'Romantic Roses - Papel para decoupage - A1 ',
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/5kbniy3jh1s6mvjlbsjgv/img-7537-1.jpg?rlkey=gx6s9wy84voamznzqgxedzmjh&st=usyvwj2u&dl=0',
    ],
    label: 'A1',
    description: 'Lanzados el 10 de noviembre de 2023, los papeles de decoupage MINT están diseñados para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles buscan convertir tus proyectos en obras de arte. Se incluyen instrucciones detalladas, y se recomienda usar pegamento Decopatch decoupage.',
    selected: false,
  },
  {
    id: 18,
    name: 'Romantic Roses - Papel para decoupage - A3 ',
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/5kbniy3jh1s6mvjlbsjgv/img-7537-1.jpg?rlkey=gx6s9wy84voamznzqgxedzmjh&st=usyvwj2u&dl=0',
    ],
    label: 'A3',
    description: 'Lanzados el 10 de noviembre de 2023, los papeles de decoupage MINT están diseñados para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles buscan convertir tus proyectos en obras de arte. Se incluyen instrucciones detalladas, y se recomienda usar pegamento Decopatch decoupage.',
    selected: false,
  },
  {
    id: 19,
    name: 'Santa Claus - Papel para decoupage - A1 ',
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/62qjgh8nmk5lf30u053fm/img-7534-1.jpg?rlkey=ma3i0usrl3lu14u6quzvxjypz&st=pjt3huhn&dl=0',
    ],
    label: 'A1',
    description: 'Lanzados el 10 de noviembre de 2023, los papeles de decoupage MINT están diseñados para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles buscan convertir tus proyectos en obras de arte. Se incluyen instrucciones detalladas, y se recomienda usar pegamento Decopatch decoupage.',
    selected: false,
  },
  {
    id: 20,
    name: 'Santa Claus - Papel para decoupage - A3 ',
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/62qjgh8nmk5lf30u053fm/img-7534-1.jpg?rlkey=ma3i0usrl3lu14u6quzvxjypz&st=pjt3huhn&dl=0',
    ],
    label: 'A3',
    description: 'Lanzados el 10 de noviembre de 2023, los papeles de decoupage MINT están diseñados para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles buscan convertir tus proyectos en obras de arte. Se incluyen instrucciones detalladas, y se recomienda usar pegamento Decopatch decoupage.',
    selected: false,
  },
  {
    id: 21,
    name: "Santa's Sleigh - Papel para decoupage - A1 ",
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/o7dv675p0asjpi3aaxudy/img-7535-1.jpg?rlkey=ejwf92lggdl27glumal7pib8e&st=lmjd56sh&dl=0',
    ],
    label: 'A1',
    description: 'Lanzados el 10 de noviembre de 2023, los papeles de decoupage MINT están diseñados para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles buscan convertir tus proyectos en obras de arte. Se incluyen instrucciones detalladas, y se recomienda usar pegamento Decopatch decoupage.',
    selected: false,
  },
  {
    id: 22,
    name: "Santa's Sleigh - Papel para decoupage - A3 ",
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/o7dv675p0asjpi3aaxudy/img-7535-1.jpg?rlkey=ejwf92lggdl27glumal7pib8e&st=lmjd56sh&dl=0',
    ],
    label: 'A3',
    description: 'Lanzados el 10 de noviembre de 2023, los papeles de decoupage MINT están diseñados para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles buscan convertir tus proyectos en obras de arte. Se incluyen instrucciones detalladas, y se recomienda usar pegamento Decopatch decoupage.',
    selected: false,
  },
  {
    id: 23,
    name: 'Still Life - Papel para decoupage - A1 ',
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/7nubchkp57v3qwlcdlbxp/img-7538-1.jpg?rlkey=qwcherdigu5qvyeq6k1t5kcmv&st=a0ahigft&dl=0',
    ],
    label: 'A1',
    description: 'Lanzados el 10 de noviembre de 2023, los papeles de decoupage MINT están diseñados para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles buscan convertir tus proyectos en obras de arte. Se incluyen instrucciones detalladas, y se recomienda usar pegamento Decopatch decoupage.',
    selected: false,
  },
  {
    id: 24,
    name: 'Still Life - Papel para decoupage - A3 ',
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/7nubchkp57v3qwlcdlbxp/img-7538-1.jpg?rlkey=qwcherdigu5qvyeq6k1t5kcmv&st=a0ahigft&dl=0',
    ],
    label: 'A3',
    description: 'Lanzados el 10 de noviembre de 2023, los papeles de decoupage MINT están diseñados para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles buscan convertir tus proyectos en obras de arte. Se incluyen instrucciones detalladas, y se recomienda usar pegamento Decopatch decoupage.',
    selected: false,
  },
  {
    id: 25,
    name: 'Air Ballons - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/a2ppd5iktd6wv1epq9glx/balloons-edited-edcd6b5f-3617-4498-8172-3dfa630e66cd-2048x.jpg?rlkey=vrkhhmoi57t6fnmqnw27hapyu&st=u19z54m8&dl=0',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 26,
    name: 'Air Ballons - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/a2ppd5iktd6wv1epq9glx/balloons-edited-edcd6b5f-3617-4498-8172-3dfa630e66cd-2048x.jpg?rlkey=vrkhhmoi57t6fnmqnw27hapyu&st=u19z54m8&dl=0',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 27,
    name: 'Angel - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/z9wnueqmwro8psqu89msu/angelmin-edited-2048x.jpg?rlkey=o4kgr08fgmnpfaih2er2qukps&st=k024o49s&dl=0',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 28,
    name: 'Angel - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/z9wnueqmwro8psqu89msu/angelmin-edited-2048x.jpg?rlkey=o4kgr08fgmnpfaih2er2qukps&st=k024o49s&dl=0',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 29,
    name: 'Autumn - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/ldhwl4ojyhv1rhgfrpfzn/autumn-edited-5000x.jpg?rlkey=iohvq72z7wvibzcd5u7qgrwos&st=62zr59y4&dl=0',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 30,
    name: 'Autumn - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/ldhwl4ojyhv1rhgfrpfzn/autumn-edited-5000x.jpg?rlkey=iohvq72z7wvibzcd5u7qgrwos&st=62zr59y4&dl=0',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 31,
    name: 'Baroque Flowers - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/03qyzg7q3r2kxvgu9ayjn/366049144-661542616010101-6498324224375578659-n-2.jpg?rlkey=54vdmzfr0awwqahtface7bf2n&st=icrwtcvh&dl=0',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 32,
    name: 'Baroque Flowers - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/03qyzg7q3r2kxvgu9ayjn/366049144-661542616010101-6498324224375578659-n-2.jpg?rlkey=54vdmzfr0awwqahtface7bf2n&st=icrwtcvh&dl=0',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 33,
    name: 'Beautiful Woman in Gold - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/vy4hszr5v5raeret4eo8t/beautifulwomaningold-edited-5000x.jpg?rlkey=dzejgw0j7weynil9c9ow0h8os&st=cl04wepm&dl=0',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 34,
    name: 'Beautiful Woman in Gold - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/vy4hszr5v5raeret4eo8t/beautifulwomaningold-edited-5000x.jpg?rlkey=dzejgw0j7weynil9c9ow0h8os&st=cl04wepm&dl=0',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 35,
    name: 'Black Widow - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/yae54wpe91gjmphnwn9ir/366056021-661542639343432-450530031615092027-n.jpg?rlkey=epjhtnjfrpry76aqco4567j2u&st=byprhxh5&dl=0',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 36,
    name: 'Black Widow - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/yae54wpe91gjmphnwn9ir/366056021-661542639343432-450530031615092027-n.jpg?rlkey=epjhtnjfrpry76aqco4567j2u&st=byprhxh5&dl=0',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 37,
    name: 'Blue Fish - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/fjyyjbulyxnxto6ky7y7g/bluefish-edited-2048x-1.jpg?rlkey=mmcezee8wj28bk078xcjy1fzv&st=52rfo0tl&dl=0',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 38,
    name: 'Blue Fish - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/fjyyjbulyxnxto6ky7y7g/bluefish-edited-2048x-1.jpg?rlkey=mmcezee8wj28bk078xcjy1fzv&st=52rfo0tl&dl=0',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 39,
    name: 'Coastal Blue - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/u179b2iyxdblzt1h23078/coastalbluemint-edited-2048x.jpg?rlkey=e2q71y8vamf31tz013vawapwc&st=xhr9mfgl&dl=0',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 40,
    name: 'Coastal Blue - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/u179b2iyxdblzt1h23078/coastalbluemint-edited-2048x.jpg?rlkey=e2q71y8vamf31tz013vawapwc&st=xhr9mfgl&dl=0',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  /*
  {
    id: 41,
    name: 'Colour me bright - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://i.ibb.co/WDNMZsx/colourmebright-5000x-1.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/c/o/colourmebright-mintbymichelle_4_5000x.jpeg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/f/0/f00309ab-9c58-44e6-8059-85b071a393a3.jpeg',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 42,
    name: 'Colour me bright - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://i.ibb.co/WDNMZsx/colourmebright-5000x-1.jpg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/c/o/colourmebright-mintbymichelle_4_5000x.jpeg',
      'https://mintbymichelle.eu/pub/media/catalog/product/cache/fac465f6786493349529901840f5f3e4/f/0/f00309ab-9c58-44e6-8059-85b071a393a3.jpeg',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  */
  {
    id: 43,
    name: 'David - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/w3m5eo05e39flwn3cmm6f/david-0c84143d-8ede-4e1a-8f94-addf9ef90943-2048x.jpg?rlkey=ahi2yuytgcbvo80jmk7k9i0hq&st=2iqobb8l&dl=0',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 44,
    name: 'David - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/w3m5eo05e39flwn3cmm6f/david-0c84143d-8ede-4e1a-8f94-addf9ef90943-2048x.jpg?rlkey=ahi2yuytgcbvo80jmk7k9i0hq&st=2iqobb8l&dl=0',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 45,
    name: 'Fairy Princess - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/2qwusmgsn0p2yzaci4htl/366055935-661542689343427-1532617201355742453-n-1.jpg?rlkey=ytw4lnicexawsu37jco012a1v&st=nu32shea&dl=0',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 46,
    name: 'Fairy Princess - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/2qwusmgsn0p2yzaci4htl/366055935-661542689343427-1532617201355742453-n-1.jpg?rlkey=ytw4lnicexawsu37jco012a1v&st=nu32shea&dl=0',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 47,
    name: 'Fairy Queen - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/h9bx8xkz3kapfvfb69ixp/fairyqueen-5000x-1.jpg?rlkey=5ol0r1qmxdlk7nalb17hblf74&st=63k8f2l0&dl=0',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 48,
    name: 'Fairy Queen - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/h9bx8xkz3kapfvfb69ixp/fairyqueen-5000x-1.jpg?rlkey=5ol0r1qmxdlk7nalb17hblf74&st=63k8f2l0&dl=0',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 49,
    name: 'Ferris Wheel - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/0tztoiaxt8ghybz4t3h7h/ferriswheel-5000x-1.jpg?rlkey=xwc8q89qd54lg3k9p37ct5q1v&st=pjjofnm8&dl=0',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 50,
    name: 'Ferris Wheel - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/0tztoiaxt8ghybz4t3h7h/ferriswheel-5000x-1.jpg?rlkey=xwc8q89qd54lg3k9p37ct5q1v&st=pjjofnm8&dl=0',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 51,
    name: 'Field of Mauve - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/we0rqs859sz4ct8s9wbrh/366014537-661542776010085-3766395476317488490-n-1.jpg?rlkey=mr1dsgt87v5mvu5kc0i75z8y0&st=0t7819f8&dl=0',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 52,
    name: 'Field of Mauve - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/we0rqs859sz4ct8s9wbrh/366014537-661542776010085-3766395476317488490-n-1.jpg?rlkey=mr1dsgt87v5mvu5kc0i75z8y0&st=0t7819f8&dl=0',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 53,
    name: 'Fishing for ideas - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/3hib3v5m4e453ad8ms7zw/fishingforideas-3c2819d0-60ec-4844-98dd-7cc187af39b3-5000x-1.jpg?rlkey=e49wmujhlpzpmjzvfveutl92x&st=eu70sybt&dl=0',
      
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 54,
    name: 'Fishing for ideas - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/3hib3v5m4e453ad8ms7zw/fishingforideas-3c2819d0-60ec-4844-98dd-7cc187af39b3-5000x-1.jpg?rlkey=e49wmujhlpzpmjzvfveutl92x&st=eu70sybt&dl=0',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 55,
    name: 'Flamingo - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/isudpy1whntt911kqfhxu/flamingomintdecoupagepaper-2048x-1.jpg?rlkey=yl1ruw0944f2xg1eh16occz7o&st=0p68xhgn&dl=0',
      ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 56,
    name: 'Flamingo - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/isudpy1whntt911kqfhxu/flamingomintdecoupagepaper-2048x-1.jpg?rlkey=yl1ruw0944f2xg1eh16occz7o&st=0p68xhgn&dl=0',
      ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 57,
    name: 'Flying birds - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/ci5znx3ykhk908x9b7nyn/flyingbirds-5000x.jpg?rlkey=rlp6fntaoonn1zwx3dgexwkj2&st=9cw86uga&dl=0',
      ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 58,
    name: 'Flying birds - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/ci5znx3ykhk908x9b7nyn/flyingbirds-5000x.jpg?rlkey=rlp6fntaoonn1zwx3dgexwkj2&st=9cw86uga&dl=0',
      ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 59,
    name: 'Foil Bird - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/86qn92fyjxbqkq3an7jx2/foilbird-700ae20b-dd38-4919-8768-fea3427bc5ea-5000x-1.jpg?rlkey=ul6j9sjg28foxg1sya62pxnj3&st=uq56u11j&dl=0',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 60,
    name: 'Foil Bird - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/86qn92fyjxbqkq3an7jx2/foilbird-700ae20b-dd38-4919-8768-fea3427bc5ea-5000x-1.jpg?rlkey=ul6j9sjg28foxg1sya62pxnj3&st=uq56u11j&dl=0',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 61,
    name: 'Forrest Fantasy - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/cwpu2bangx2n8xvziud1g/fantasyforest-2048x-1.jpg?rlkey=o6fkq0g2qkqm3ipkqq18q5tci&st=vsdp9gfg&dl=0',

    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 62,
    name: 'Forrest Fantasy - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/cwpu2bangx2n8xvziud1g/fantasyforest-2048x-1.jpg?rlkey=o6fkq0g2qkqm3ipkqq18q5tci&st=vsdp9gfg&dl=0',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 63,
    name: 'Frida - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/rrt05qb2id7sp70o5ync2/frida-2048x-1.jpg?rlkey=2bbpc8ifqpqh8gkdqlxqus87v&st=n8eo15fj&dl=0',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 64,
    name: 'Frida - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/rrt05qb2id7sp70o5ync2/frida-2048x-1.jpg?rlkey=2bbpc8ifqpqh8gkdqlxqus87v&st=n8eo15fj&dl=0',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 65,
    name: 'Future Fox - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/epkjhmmaq8z7a08ic62pf/f0d09cd9-41e4-48f8-b183-31429678db59-1-1.jpg?rlkey=507bavxoiuss2gyh6fib71fpg&st=8brwawu3&dl=0',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 66,
    name: 'Future Fox - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/epkjhmmaq8z7a08ic62pf/f0d09cd9-41e4-48f8-b183-31429678db59-1-1.jpg?rlkey=507bavxoiuss2gyh6fib71fpg&st=8brwawu3&dl=0',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 67,
    name: 'Geisha - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/d0rjtiklzgryo0iopnuq1/geishamint-5000x.jpg?rlkey=iv0696acs381ehsbheefv7h85&st=oyxk1ovu&dl=0',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 68,
    name: 'Geisha - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/d0rjtiklzgryo0iopnuq1/geishamint-5000x.jpg?rlkey=iv0696acs381ehsbheefv7h85&st=oyxk1ovu&dl=0',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  // segunda pagina
  {
    id: 69,
    name: 'Ginger jars - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/6joypbt3o3pq1hwf2xvnl/gingerjars-2048x-1.jpg?rlkey=346ylkv9k8y7dprm6zy5dzcr6&st=vw5eptab&dl=0',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 70,
    name: 'Ginger jars - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/6joypbt3o3pq1hwf2xvnl/gingerjars-2048x-1.jpg?rlkey=346ylkv9k8y7dprm6zy5dzcr6&st=vw5eptab&dl=0',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 71,
    name: 'Girl on a Swing - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/rg5x3cu2kq7ro1ftdt1kt/girlonaswing-600x.jpg?rlkey=nbtx6yvj24iczhzar0pls0bcl&st=oa7cjhji&dl=0',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 72,
    name: 'Girl on a Swing - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/rg5x3cu2kq7ro1ftdt1kt/girlonaswing-600x.jpg?rlkey=nbtx6yvj24iczhzar0pls0bcl&st=oa7cjhji&dl=0',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 73,
    name: 'Girl with a Lute - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/g6kmsy56f4mvqt9nr0c1m/girlwithalute-2048x-1.jpg?rlkey=4og1gzwguadkwdeqfkl17gkww&st=jx9tq03l&dl=0',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 74,
    name: 'Girl with a Lute - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/g6kmsy56f4mvqt9nr0c1m/girlwithalute-2048x-1.jpg?rlkey=4og1gzwguadkwdeqfkl17gkww&st=jx9tq03l&dl=0',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 75,
    name: 'Golden Bloom 1 - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/mxt4mdxajxha04xxppasu/366058725-661542446010118-8595553839926230971-n-1.jpg?rlkey=3j8q05t1nvnqb31lwkgaixs2a&st=f2o4ei2w&dl=0',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 76,
    name: 'Golden Bloom 1 - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/mxt4mdxajxha04xxppasu/366058725-661542446010118-8595553839926230971-n-1.jpg?rlkey=3j8q05t1nvnqb31lwkgaixs2a&st=f2o4ei2w&dl=0',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 77,
    name: 'Golden Bloom 2 - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/5p2yj8fq31wdl8d3jszbb/366072301-661542366010126-1622565532908994108-n-1.jpg?rlkey=3geqhwsfyknrpimvsttlc9uvd&st=nzsb63t7&dl=0',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 78,
    name: 'Golden Bloom 2 - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/5p2yj8fq31wdl8d3jszbb/366072301-661542366010126-1622565532908994108-n-1.jpg?rlkey=3geqhwsfyknrpimvsttlc9uvd&st=nzsb63t7&dl=0',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 79,
    name: 'Gumnuts - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/vjca2fw8g3vyh0xmc1qq8/gumnuts-2048x-1.jpg?rlkey=czrfwmhyh86oli2sg2joysub4&st=boy648x8&dl=0',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 80,
    name: 'Gumnuts - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/vjca2fw8g3vyh0xmc1qq8/gumnuts-2048x-1.jpg?rlkey=czrfwmhyh86oli2sg2joysub4&st=boy648x8&dl=0',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 81,
    name: 'Haunted House - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/cqvut438022t8rqpooakq/366056924-661542512676778-1741246542987175155-n-1.jpg?rlkey=sw2tzlstfsx86o4ttlo9bg9s5&st=n8d9bm74&dl=0',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 82,
    name: 'Haunted House - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/cqvut438022t8rqpooakq/366056924-661542512676778-1741246542987175155-n-1.jpg?rlkey=sw2tzlstfsx86o4ttlo9bg9s5&st=n8d9bm74&dl=0',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 83,
    name: 'Haunted House 2 - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/29oxqhvywop6k6w3slch5/366024500-661542432676786-7609682456286831096-n-1.jpg?rlkey=puexv0nthh9t3j2blcnchi1iw&st=j8ewg1yl&dl=0',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 84,
    name: 'Haunted House 2 - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/29oxqhvywop6k6w3slch5/366024500-661542432676786-7609682456286831096-n-1.jpg?rlkey=puexv0nthh9t3j2blcnchi1iw&st=j8ewg1yl&dl=0',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 85,
    name: 'Herd of Horses - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/3zg8eyhvil91ubfnmn88c/herdofhorses-2048x-1.jpg?rlkey=cvdqlvodtbt1p9plovcku9fpd&st=ho3rwlgi&dl=0',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 86,
    name: 'Herd of Horses - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/3zg8eyhvil91ubfnmn88c/herdofhorses-2048x-1.jpg?rlkey=cvdqlvodtbt1p9plovcku9fpd&st=ho3rwlgi&dl=0',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 87,
    name: 'High Wire - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/7kqajhn6jokqj38q3y2an/highwire-5000x.jpg?rlkey=v4r4bd6lemhx87zl9cv9d6g6b&st=nljacurt&dl=0',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 88,
    name: 'High Wire - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/7kqajhn6jokqj38q3y2an/highwire-5000x.jpg?rlkey=v4r4bd6lemhx87zl9cv9d6g6b&st=nljacurt&dl=0',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 89,
    name: 'Ice Skating - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/jf54mxqa3g829fbfpd2me/iceskating-a94dc5cb-b4fd-486a-b45f-6a05047bb755-2048x-1.jpg?rlkey=2v3jjj2do74zb8big1zsv8gwj&st=tb8a71ym&dl=0',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 90,
    name: 'Ice Skating - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/jf54mxqa3g829fbfpd2me/iceskating-a94dc5cb-b4fd-486a-b45f-6a05047bb755-2048x-1.jpg?rlkey=2v3jjj2do74zb8big1zsv8gwj&st=tb8a71ym&dl=0',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 91,
    name: 'Istanbul - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/0a9r1loz7mw18v30i2mn3/ista1-1.jpg?rlkey=dmxy1mommzcxjgc6ab713tzrz&st=h09d8rl8&dl=0',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 92,
    name: 'Istanbul - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/0a9r1loz7mw18v30i2mn3/ista1-1.jpg?rlkey=dmxy1mommzcxjgc6ab713tzrz&st=h09d8rl8&dl=0',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 93,
    name: 'Jersey - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/7ubmzyr5p2n2upr8aqq20/jersey-91dd793e-8dda-4d0b-8987-ce201aeae11b-5000x.jpg?rlkey=67xlygxzmpz2zfetjlumh5093&st=jp6nl8pc&dl=0',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 94,
    name: 'Jersey - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/7ubmzyr5p2n2upr8aqq20/jersey-91dd793e-8dda-4d0b-8987-ce201aeae11b-5000x.jpg?rlkey=67xlygxzmpz2zfetjlumh5093&st=jp6nl8pc&dl=0',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 95,
    name: "Karen's Technicolour Bouquet - Papel para decoupage - A1",
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/u1xle9lnadv9ld0lzn6lp/karen-stechnicolourbouquet-89863ae0-db0a-4bcc-873c-d742cc6ca.jpg?rlkey=drz7hzxaf8v1cbmjcgn8x5a9v&st=my0wgz4y&dl=0',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 96,
    name: "Karen's Technicolour Bouquet - Papel para decoupage - A3",
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/u1xle9lnadv9ld0lzn6lp/karen-stechnicolourbouquet-89863ae0-db0a-4bcc-873c-d742cc6ca.jpg?rlkey=drz7hzxaf8v1cbmjcgn8x5a9v&st=my0wgz4y&dl=0',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 97,
    name: 'Lady and the red Car - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/9d7whzq4ian9yxheccdlm/ladyandtheredcar-2048x.jpg?rlkey=y5rgdeus19bcicmtiyjwdzxqt&st=e1bet742&dl=0',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 98,
    name: 'Lady and the red Car - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/9d7whzq4ian9yxheccdlm/ladyandtheredcar-2048x.jpg?rlkey=y5rgdeus19bcicmtiyjwdzxqt&st=e1bet742&dl=0',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 99,
    name: 'Lady with a Parasol - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/vgo1itj3fe578tg6wtoog/ladywithaparasol-5000x-1.jpg?rlkey=e0rupvgohc7ciw8bim4my8au1&st=8hmqyd1b&dl=0',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 100,
    name: 'Lady with a Parasol - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/vgo1itj3fe578tg6wtoog/ladywithaparasol-5000x-1.jpg?rlkey=e0rupvgohc7ciw8bim4my8au1&st=8hmqyd1b&dl=0',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 101,
    name: "Leonardo's Lady - Papel para decoupage - A1",
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/65597um0131yqvvscw7w8/leonardo-slady-600x-1.jpg?rlkey=gfmn7lucznw64o6xnkelo4wr1&st=ydcq04vc&dl=0',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 102,
    name: "Leonardo's Lady - Papel para decoupage - A3",
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/65597um0131yqvvscw7w8/leonardo-slady-600x-1.jpg?rlkey=gfmn7lucznw64o6xnkelo4wr1&st=ydcq04vc&dl=0',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 103,
    name: 'Madame Le Fevre - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/rypf0utjx6zu9ma6cgfsb/madamelefevre-2048x-1.jpg?rlkey=kgq8bsolhpib8hcugnq39worz&st=m04szfru&dl=0',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 104,
    name: 'Madame Le Fevre - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/rypf0utjx6zu9ma6cgfsb/madamelefevre-2048x-1.jpg?rlkey=kgq8bsolhpib8hcugnq39worz&st=m04szfru&dl=0',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 105,
    name: 'Majestic Horses - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/o2m7lfivulrmrc9h9i9ec/366217108-661542319343464-3394953917293780457-n-1.jpg?rlkey=3n10odxkhm3pbwhvzi4s4oznn&st=l4d2st4h&dl=0',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 106,
    name: 'Majestic Horses - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/o2m7lfivulrmrc9h9i9ec/366217108-661542319343464-3394953917293780457-n-1.jpg?rlkey=3n10odxkhm3pbwhvzi4s4oznn&st=l4d2st4h&dl=0',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 107,
    name: 'Milkmaid - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/r5lk650zbcf1sdxy3hpso/milkmaid-600x-1.jpg?rlkey=5hjd9y029menmnyawrb2rp6vz&st=hss66450&dl=0',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 108,
    name: 'Milkmaid - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/r5lk650zbcf1sdxy3hpso/milkmaid-600x-1.jpg?rlkey=5hjd9y029menmnyawrb2rp6vz&st=hss66450&dl=0',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 109,
    name: 'Moody Florals - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/3zr4435838fgjtn43dnpv/moodyflorals-f72f3f0d-4427-4921-aaa9-ab4f086f6f39-5000x-1.jpg?rlkey=ouboehrldmhrnlpsfulj7xtqf&st=2td6ji9x&dl=0',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 110,
    name: 'Moody Florals - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/3zr4435838fgjtn43dnpv/moodyflorals-f72f3f0d-4427-4921-aaa9-ab4f086f6f39-5000x-1.jpg?rlkey=ouboehrldmhrnlpsfulj7xtqf&st=2td6ji9x&dl=0',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 111,
    name: 'Moody Florals II - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/qdhpkg434xjo4x6rq14n2/moodyflorals2-2048x.jpg?rlkey=uey0mfc4r9kb13i5ne7qf5jhb&st=ks45lhrd&dl=0',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 112,
    name: 'Moody Florals II - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/qdhpkg434xjo4x6rq14n2/moodyflorals2-2048x.jpg?rlkey=uey0mfc4r9kb13i5ne7qf5jhb&st=ks45lhrd&dl=0',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 113,
    name: "Nanas's Pearls - Papel para decoupage - A1",
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/f2oc25io90cead98li6kl/nannaspearls-5000x-1.jpg?rlkey=vxdzp7h6exwxlqbh7pmoccu6c&st=q0a5e80s&dl=0',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 114,
    name: "Nanas's Pearls - Papel para decoupage - A3",
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/f2oc25io90cead98li6kl/nannaspearls-5000x-1.jpg?rlkey=vxdzp7h6exwxlqbh7pmoccu6c&st=q0a5e80s&dl=0',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 115,
    name: 'New York - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/xbzavh7kfhccrn7pum2s4/newyork-newyork-5000x-1.jpg?rlkey=1xe8no7f1xzkoy4asys2w9ws2&st=eoaf45zu&dl=0',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 116,
    name: 'New York - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/xbzavh7kfhccrn7pum2s4/newyork-newyork-5000x-1.jpg?rlkey=1xe8no7f1xzkoy4asys2w9ws2&st=eoaf45zu&dl=0',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 117,
    name: 'Owl - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/t8akwmncnvxibwu1xjnph/owl-5000x-1.jpg?rlkey=76e3y27dyisznxycg0sodt8d4&st=lhym17jm&dl=0',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 118,
    name: 'Owl - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/t8akwmncnvxibwu1xjnph/owl-5000x-1.jpg?rlkey=76e3y27dyisznxycg0sodt8d4&st=lhym17jm&dl=0',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 119,
    name: 'Palm Trees - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/9nvegyeect8ziyfgnq8xv/palmtrees-5000x-1.jpg?rlkey=vzbl9t9q5uf42neg04ezllm05&st=vuagfnaq&dl=0',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 120,
    name: 'Palm Trees - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/9nvegyeect8ziyfgnq8xv/palmtrees-5000x-1.jpg?rlkey=vzbl9t9q5uf42neg04ezllm05&st=vuagfnaq&dl=0',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 121,
    name: 'Parrot - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/sxecnh8ep9djv1i421dl6/parrot-5000x-1.jpg?rlkey=l237zh318vog8a6se6ia52cvt&st=4zqkaipw&dl=0',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 122,
    name: 'Parrot - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/sxecnh8ep9djv1i421dl6/parrot-5000x-1.jpg?rlkey=l237zh318vog8a6se6ia52cvt&st=4zqkaipw&dl=0',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 123,
    name: 'Peacok - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/98i6km1nry42427q2bqol/peacock-5000x-3.jpg?rlkey=dezg9dy5ck163ctofhz46sre8&st=z11icwlx&dl=0',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 124,
    name: 'Peacok - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/98i6km1nry42427q2bqol/peacock-5000x-3.jpg?rlkey=dezg9dy5ck163ctofhz46sre8&st=z11icwlx&dl=0',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 125,
    name: 'Pensive Girl - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/2m6wutzw2yntvk6frq3jo/pensivegirl-5000x.jpg?rlkey=way40mzw7dqrswmpf0oguclv6&st=mwwzrbpq&dl=0',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 126,
    name: 'Pensive Girl - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/2m6wutzw2yntvk6frq3jo/pensivegirl-5000x.jpg?rlkey=way40mzw7dqrswmpf0oguclv6&st=mwwzrbpq&dl=0',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 127,
    name: 'Pheasant - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/co63dfpegst62tozjq8u7/pheasant-5000x-1.jpg?rlkey=wawpydx09vk4y2xbmkwb4c6u2&st=n6499ba2&dl=0',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 128,
    name: 'Pheasant - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/co63dfpegst62tozjq8u7/pheasant-5000x-1.jpg?rlkey=wawpydx09vk4y2xbmkwb4c6u2&st=n6499ba2&dl=0',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 129,
    name: 'Poppies - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/k9a3vocgtog73tnyrfb4f/poppies-43ee5dc8-0b06-4eab-904b-0092c6d9997d-5000x-1.jpg?rlkey=jqygibepwm6sambpzcgipz4l8&st=53j6vv41&dl=0',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 130,
    name: 'Poppies - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/k9a3vocgtog73tnyrfb4f/poppies-43ee5dc8-0b06-4eab-904b-0092c6d9997d-5000x-1.jpg?rlkey=jqygibepwm6sambpzcgipz4l8&st=53j6vv41&dl=0',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 131,
    name: 'Renaissance Flowers - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/j2c9ehaehe7y3ts5dn8qp/renaissanceflowers-600x-1.jpg?rlkey=uqcieen9387yp4fbwxb8xz183&st=m0va1m7m&dl=0',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 132,
    name: 'Renaissance Flowers - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/j2c9ehaehe7y3ts5dn8qp/renaissanceflowers-600x-1.jpg?rlkey=uqcieen9387yp4fbwxb8xz183&st=m0va1m7m&dl=0',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 133,
    name: 'Rita - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/0flzjav6qaku01ad1xe10/rita-600x-2.jpg?rlkey=q7vipul1g4n3edt4xswmwf0np&st=w69uzxpo&dl=0',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 134,
    name: 'Rita - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/0flzjav6qaku01ad1xe10/rita-600x-2.jpg?rlkey=q7vipul1g4n3edt4xswmwf0np&st=w69uzxpo&dl=0',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 135,
    name: 'Road to Louveciennes - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/nxfu45d1ktrn4skl6sjdo/roadtolouveciennes-67acc40c-db4d-4b8d-b3aa-076b9ac6c52c-5000.jpg?rlkey=uw0jeokcou75pembtv2fnn4kz&st=64w94f7o&dl=0',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 136,
    name: 'Road to Louveciennes - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/nxfu45d1ktrn4skl6sjdo/roadtolouveciennes-67acc40c-db4d-4b8d-b3aa-076b9ac6c52c-5000.jpg?rlkey=uw0jeokcou75pembtv2fnn4kz&st=64w94f7o&dl=0',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 137,
    name: 'Sail Away - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/gojn2hj0wqndpfngqyifv/sailaway-5000x-3.jpg?rlkey=uuy70qvitvulr1w0k4pqa83ss&st=c9a9rgsu&dl=0',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 138,
    name: 'Sail Away - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/gojn2hj0wqndpfngqyifv/sailaway-5000x-3.jpg?rlkey=uuy70qvitvulr1w0k4pqa83ss&st=c9a9rgsu&dl=0',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 139,
    name: 'Sepia Horses - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/64sgep4hy20lrk6n58dmu/sepiahorses-600x-2.jpg?rlkey=pvi7qg7ygmgzggvijwfsl7qzo&st=fa5hdpvs&dl=0',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 140,
    name: 'Sepia Horses - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/64sgep4hy20lrk6n58dmu/sepiahorses-600x-2.jpg?rlkey=pvi7qg7ygmgzggvijwfsl7qzo&st=fa5hdpvs&dl=0',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 141,
    name: 'Sepia Tree - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/feh0jsaoecxuhshhzwsw9/sepiatree-600x-3.jpg?rlkey=s43xkgh0nbm8es9b8y55w7kpb&st=kb7s155l&dl=0',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 142,
    name: 'Sepia Tree - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/feh0jsaoecxuhshhzwsw9/sepiatree-600x-3.jpg?rlkey=s43xkgh0nbm8es9b8y55w7kpb&st=kb7s155l&dl=0',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 143,
    name: 'Siren - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/ncgoj7cwsbyc6ijclg8ou/366004092-661542329343463-7330765569290257936-n.jpg?rlkey=t1cacvsp6zkj6dwhffe2vmgc8&st=e7d4zm85&dl=0',
      
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 144,
    name: 'Siren - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/ncgoj7cwsbyc6ijclg8ou/366004092-661542329343463-7330765569290257936-n.jpg?rlkey=t1cacvsp6zkj6dwhffe2vmgc8&st=e7d4zm85&dl=0',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 145,
    name: 'Stars & Stripes - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/40xyhegxw6uzr1jzkau1g/stars-stripes-5000x-1.jpg?rlkey=037qg4z89u1ddxapsu8s5cndm&st=3ea4beqy&dl=0',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 146,
    name: 'Stars & Stripes - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/40xyhegxw6uzr1jzkau1g/stars-stripes-5000x-1.jpg?rlkey=037qg4z89u1ddxapsu8s5cndm&st=3ea4beqy&dl=0',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 147,
    name: 'Study in Black & Green - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/avzz1kem26f8tbap19iss/studyinblack-green-600x-3.jpg?rlkey=5kw4ixxgd9hcy7f3z35qtpi0h&st=nr3f13rd&dl=0',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 148,
    name: 'Study in Black & Green - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/avzz1kem26f8tbap19iss/studyinblack-green-600x-3.jpg?rlkey=5kw4ixxgd9hcy7f3z35qtpi0h&st=nr3f13rd&dl=0',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 149,
    name: 'Sunflower - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/liu1e6n6c5selltb5dwka/sunflower-5000x.jpg?rlkey=li70wk3yjdcvcql161hi1naga&st=ib922rx0&dl=0',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 150,
    name: 'Sunflower - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/liu1e6n6c5selltb5dwka/sunflower-5000x.jpg?rlkey=li70wk3yjdcvcql161hi1naga&st=ib922rx0&dl=0',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 151,
    name: 'Tahitian Women - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/8omfbpyvcdv6matvkbj8t/tahitianwomen-600x-2.jpg?rlkey=ffz2woadta41x28ghbl5zvbyb&st=7pbunxie&dl=0',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 152,
    name: 'Tahitian Women - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/8omfbpyvcdv6matvkbj8t/tahitianwomen-600x-2.jpg?rlkey=ffz2woadta41x28ghbl5zvbyb&st=7pbunxie&dl=0',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 153,
    name: 'Texas Longhorn - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/42435e9ln73poop4xr2ly/texaslonghorn-ef71ed90-b4a2-486b-9623-78e1f90a85f8-5000x-1.jpg?rlkey=zau62dds2ged0iyo08nziouja&st=qv8706z2&dl=0',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 154,
    name: 'Texas Longhorn - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/42435e9ln73poop4xr2ly/texaslonghorn-ef71ed90-b4a2-486b-9623-78e1f90a85f8-5000x-1.jpg?rlkey=zau62dds2ged0iyo08nziouja&st=qv8706z2&dl=0',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 155,
    name: 'The Tropics - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/8qitzndn9rkgi1vw3lrxi/thetropics-5000x-2.jpg?rlkey=2qlxxweaw0nsba0rj685oe7qm&st=xoji714x&dl=0',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 156,
    name: 'The Tropics - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/8qitzndn9rkgi1vw3lrxi/thetropics-5000x-2.jpg?rlkey=2qlxxweaw0nsba0rj685oe7qm&st=xoji714x&dl=0',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 157,
    name: 'To the Market - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/un89o9bmik32f6dy2ykyf/tomarket-5000x-1.jpg?rlkey=89ikq317s74n7o4tyzx743tyy&st=to9duhdb&dl=0',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 158,
    name: 'To the Market - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/un89o9bmik32f6dy2ykyf/tomarket-5000x-1.jpg?rlkey=89ikq317s74n7o4tyzx743tyy&st=to9duhdb&dl=0',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 159,
    name: 'Toucan - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/qf4h8b10q6hdarqlra991/toucan-5000x-1.jpg?rlkey=z59xx8v2l7s12o4yni8sgstin&st=bhyq7ixj&dl=0',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 160,
    name: 'Toucan - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/qf4h8b10q6hdarqlra991/toucan-5000x-1.jpg?rlkey=z59xx8v2l7s12o4yni8sgstin&st=bhyq7ixj&dl=0',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 161,
    name: 'Turtles Swimming - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/bmrvc68ecuqqpii2p7tlz/turtlesswimming-5000x-1.jpg?rlkey=pnlmsrj7ajw7au9blu09wbkfc&st=omofwg0d&dl=0',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 162,
    name: 'Turtles Swimming - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/bmrvc68ecuqqpii2p7tlz/turtlesswimming-5000x-1.jpg?rlkey=pnlmsrj7ajw7au9blu09wbkfc&st=omofwg0d&dl=0',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 163,
    name: 'Venice - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/exxijlgy2915kxzpm52hx/venice-5000x.jpg?rlkey=va5rbnxs6g906ncr7ezylof17&st=rt5uu0nk&dl=0',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 164,
    name: 'Venice - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/exxijlgy2915kxzpm52hx/venice-5000x.jpg?rlkey=va5rbnxs6g906ncr7ezylof17&st=rt5uu0nk&dl=0',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 165,
    name: 'Vintage Red Car - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/0w8u3s903ukyzjov85c87/vintagecar-5000x-1.jpg?rlkey=rqxiu5yp081qxyijerldi4l5v&st=2uzl092o&dl=0',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 166,
    name: 'Vintage Red Car - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/0w8u3s903ukyzjov85c87/vintagecar-5000x-1.jpg?rlkey=rqxiu5yp081qxyijerldi4l5v&st=2uzl092o&dl=0',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 167,
    name: 'Walking - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/anbjb0s0ox187hoclzqy1/walking-5000x-1.jpg?rlkey=mzc1flgw9yy5ud4bv7opo3ioc&st=v1qq3yt8&dl=0',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 168,
    name: 'Walking - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/anbjb0s0ox187hoclzqy1/walking-5000x-1.jpg?rlkey=mzc1flgw9yy5ud4bv7opo3ioc&st=v1qq3yt8&dl=0',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 169,
    name: 'Water Lilly - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/iaknpc71qzpm823jgmg4t/366044999-661542572676772-729058036453694559-n.jpg?rlkey=n3x82c3pps3enu8ktb7sm0v7c&st=m755iheh&dl=0',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 170,
    name: 'Water Lilly - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/iaknpc71qzpm823jgmg4t/366044999-661542572676772-729058036453694559-n.jpg?rlkey=n3x82c3pps3enu8ktb7sm0v7c&st=m755iheh&dl=0',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 171,
    name: 'Waterplay - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/7yfw2vzdah3p40yszxi0h/waterplay-9e3032cd-cde2-4fa8-823f-11ca0776a9b1-600x-1.jpg?rlkey=ewosg3uf4haqqnt1bwqu53xy8&st=kopl72uh&dl=0',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 172,
    name: 'Waterplay - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/7yfw2vzdah3p40yszxi0h/waterplay-9e3032cd-cde2-4fa8-823f-11ca0776a9b1-600x-1.jpg?rlkey=ewosg3uf4haqqnt1bwqu53xy8&st=kopl72uh&dl=0',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },

  //Ultima Pagina

  {
    id: 173,
    name: 'Wave of Florals - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/b6m1910kbs1nb2xaez24x/366175442-661542739343422-4190398524880257686-n.jpg?rlkey=sgo121x8frv7frfc0roxv7hqm&st=2tkpsqvz&dl=0',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 174,
    name: 'Wave of Florals - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/b6m1910kbs1nb2xaez24x/366175442-661542739343422-4190398524880257686-n.jpg?rlkey=sgo121x8frv7frfc0roxv7hqm&st=2tkpsqvz&dl=0',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 175,
    name: 'Wheatfields & Cypresses - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/2iveegch8yc0q9r7bdznd/wheatfields-cypresses-600x.jpg?rlkey=aj2bh9by6wtdiu32otq70b883&st=5myvp163&dl=0',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 176,
    name: 'Wheatfields & Cypresses - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/2iveegch8yc0q9r7bdznd/wheatfields-cypresses-600x.jpg?rlkey=aj2bh9by6wtdiu32otq70b883&st=5myvp163&dl=0',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 177,
    name: 'White Swan - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/d5oojfads9bi3einqx9r9/whiteswan-600x-1.jpg?rlkey=n0mzyk5rpn3iqd1ziqu314a1h&st=oi1pz7d0&dl=0',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 178,
    name: 'White Swan - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/d5oojfads9bi3einqx9r9/whiteswan-600x-1.jpg?rlkey=n0mzyk5rpn3iqd1ziqu314a1h&st=oi1pz7d0&dl=0',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  /*
  {
    id: 179,
    name: 'Woman in a Green Top - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://i.ibb.co/XtRq5Hn/womaninagreentop-600x.jpg',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 180,
    name: 'Woman in a Green Top - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://i.ibb.co/XtRq5Hn/womaninagreentop-600x.jpg',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  */
  {
    id: 181,
    name: 'Yes Deer - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/3mdnlo122jn229iidaeeo/yes-deer-395cd874-d9b1-4883-9212-eef1e2c45528-600x-2.jpg?rlkey=52esbsrx4l7netxmken5s03cq&st=l64avca8&dl=0',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 182,
    name: 'Yes Deer - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/3mdnlo122jn229iidaeeo/yes-deer-395cd874-d9b1-4883-9212-eef1e2c45528-600x-2.jpg?rlkey=52esbsrx4l7netxmken5s03cq&st=l64avca8&dl=0',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 183,
    name: 'Young Girl Reading - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/ovi2klld2i2g9kn2i09w5/younggirlreading-600x.jpg?rlkey=k3492hdb2wpgtq8v6m4ui3a0n&st=hm4josbz&dl=0',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 184,
    name: 'Young Girl Reading - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/ovi2klld2i2g9kn2i09w5/younggirlreading-600x.jpg?rlkey=k3492hdb2wpgtq8v6m4ui3a0n&st=hm4josbz&dl=0',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 185,
    name: 'Zz Christmas - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/8oxmad7tk9lwhzcw7174f/211647297-1460655024266054-6538681064226336656-n-1.jpg?rlkey=w9dbss3qbij25wza2mu1xvze0&st=omot57ac&dl=0',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 584,
    name: 'Oliver Owl - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/nhb5965fmg8b18q6gnfop/Untitleddesign_53_5000x.webp?rlkey=x52cecb18dg821u7l46zwkoqk&st=it4y65hi&dl=0',
      
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 585,
    name: 'Oliver Owl - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/nhb5965fmg8b18q6gnfop/Untitleddesign_53_5000x.webp?rlkey=x52cecb18dg821u7l46zwkoqk&st=it4y65hi&dl=0',
      
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 586,
    name: 'Leonardo Lion - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/8u8us73iwc3uk4q470owr/Untitleddesign_50_5000x.webp?rlkey=3zpgrq00q0zqwidxpctx2qh9u&st=lpqfqo1t&dl=0',
      'https://mintbymichelle.com/cdn/shop/files/eZyWatermark_17-02-2024_11-09-58-1620pm_5000x.jpg?v=1710811901',
      'https://mintbymichelle.com/cdn/shop/files/eZyWatermark_17-02-2024_11-02-19-8120pm_5000x.jpg?v=1710811901',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 587,
    name: 'Leonardo Lion - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/8u8us73iwc3uk4q470owr/Untitleddesign_50_5000x.webp?rlkey=3zpgrq00q0zqwidxpctx2qh9u&st=lpqfqo1t&dl=0',
      'https://mintbymichelle.com/cdn/shop/files/eZyWatermark_17-02-2024_11-09-58-1620pm_5000x.jpg?v=1710811901',
      'https://mintbymichelle.com/cdn/shop/files/eZyWatermark_17-02-2024_11-02-19-8120pm_5000x.jpg?v=1710811901',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 588,
    name: 'Shaun Sheep - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/xdadjvdfkc8i465lb3t0w/Untitleddesign_52_2000x.webp?rlkey=d798vrellf7dqjsfnp6ilb72c&st=3lasbay6&dl=0',
      'https://mintbymichelle.com/cdn/shop/files/eZyWatermark_13-02-2024_09-22-23-6400pm_600x.jpg?v=1708342073',
      'https://mintbymichelle.com/cdn/shop/files/PHSZ1912_600x.jpg?v=1708342073',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 589,
    name: 'Shaun Sheep - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/xdadjvdfkc8i465lb3t0w/Untitleddesign_52_2000x.webp?rlkey=d798vrellf7dqjsfnp6ilb72c&st=3lasbay6&dl=0',
      'https://mintbymichelle.com/cdn/shop/files/eZyWatermark_13-02-2024_09-22-23-6400pm_600x.jpg?v=1708342073',
      'https://mintbymichelle.com/cdn/shop/files/PHSZ1912_600x.jpg?v=1708342073',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 590,
    name: 'Peach Oasis - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/qvcdekca7mutl78nucelt/Untitleddesign_64_2000x.webp?rlkey=v57uxgxcylssjanbrl0ue8rrl&st=rob6pwtm&dl=0',
      'https://mintbymichelle.com/cdn/shop/files/eZy-Watermark_02-04-2024_09-08-29-1890pm_5000x.jpg?v=1712492202',
      'https://mintbymichelle.com/cdn/shop/files/eZy-Watermark_02-04-2024_09-19-05-4540pm_600x.jpg?v=1712492202',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 591,
    name: 'Peach Oasis - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/qvcdekca7mutl78nucelt/Untitleddesign_64_2000x.webp?rlkey=v57uxgxcylssjanbrl0ue8rrl&st=rob6pwtm&dl=0',
      'https://mintbymichelle.com/cdn/shop/files/eZy-Watermark_02-04-2024_09-08-29-1890pm_5000x.jpg?v=1712492202',
      'https://mintbymichelle.com/cdn/shop/files/eZy-Watermark_02-04-2024_09-19-05-4540pm_600x.jpg?v=1712492202',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 591,
    name: 'Diego Dog - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/tlblhg4sdw5d4vgs1an13/Untitleddesign_54_400x.png?rlkey=q3prqrx3nly3c6nywozn9v4u9&st=o4u0bxjx&dl=0',
      'https://mintbymichelle.com/cdn/shop/files/441024207_885058610301360_5846334835452587743_n_5000x.jpg?v=1715030686',
      'https://mintbymichelle.com/cdn/shop/files/eZyWatermark_17-02-2024_06-09-14-5620pm_5000x.jpg?v=1715030686',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 592,
    name: 'Diego Dog - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/tlblhg4sdw5d4vgs1an13/Untitleddesign_54_400x.png?rlkey=q3prqrx3nly3c6nywozn9v4u9&st=o4u0bxjx&dl=0',
      'https://mintbymichelle.com/cdn/shop/files/441024207_885058610301360_5846334835452587743_n_5000x.jpg?v=1715030686',
      'https://mintbymichelle.com/cdn/shop/files/eZyWatermark_17-02-2024_06-09-14-5620pm_5000x.jpg?v=1715030686',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 593,
    name: 'Botanical in black and white - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/uchgk5kann45x5vbu6w9p/Untitleddesign_70_400x.png?rlkey=gzstpg1dpoy3yemrovfdffwnv&st=la9hp0je&dl=0',
      'https://mintbymichelle.com/cdn/shop/files/eZy-Watermark_05-04-2024_08-48-15-5210pm_5000x.jpg?v=1712491660',
      'https://mintbymichelle.com/cdn/shop/files/eZy-Watermark_05-04-2024_08-43-01-5450pm_5000x.jpg?v=1712491659',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 594,
    name: 'Botanical in black and white - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/uchgk5kann45x5vbu6w9p/Untitleddesign_70_400x.png?rlkey=gzstpg1dpoy3yemrovfdffwnv&st=la9hp0je&dl=0',
      'https://mintbymichelle.com/cdn/shop/files/eZy-Watermark_05-04-2024_08-48-15-5210pm_5000x.jpg?v=1712491660',
      'https://mintbymichelle.com/cdn/shop/files/eZy-Watermark_05-04-2024_08-43-01-5450pm_5000x.jpg?v=1712491659',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 595,
    name: 'Carlito Camel - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/0zjishvnai6vw4icb5nch/Untitleddesign_55_5000x.webp?rlkey=6chnum1b1xeuewm1yyqk96iqf&st=8x3jzi4h&dl=0',
      'https://mintbymichelle.com/cdn/shop/files/IMG_20240216_164211_235_2048x.jpg?v=1708217833',
      'https://mintbymichelle.com/cdn/shop/files/IMG_20240216_164233_383_2048x.jpg?v=1708217833',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 596,
    name: 'Carlito Camel - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/0zjishvnai6vw4icb5nch/Untitleddesign_55_5000x.webp?rlkey=6chnum1b1xeuewm1yyqk96iqf&st=8x3jzi4h&dl=0',
      'https://mintbymichelle.com/cdn/shop/files/IMG_20240216_164211_235_2048x.jpg?v=1708217833',
      'https://mintbymichelle.com/cdn/shop/files/IMG_20240216_164233_383_2048x.jpg?v=1708217833',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 597,
    name: 'Ulysses unicorn - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/ss6hpwsrjhdczqjmjug4u/Untitleddesign_49_2000x.webp?rlkey=ezgk5q691f45dcedsfby8xoxm&st=yv3phvvq&dl=0',
      'https://mintbymichelle.com/cdn/shop/files/IMG_20240219_071018_566_5000x.jpg?v=1708305455',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 598,
    name: 'Ulysses unicorn - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/ss6hpwsrjhdczqjmjug4u/Untitleddesign_49_2000x.webp?rlkey=ezgk5q691f45dcedsfby8xoxm&st=yv3phvvq&dl=0',
      'https://mintbymichelle.com/cdn/shop/files/IMG_20240219_071018_566_5000x.jpg?v=1708305455',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 599,
    name: 'Pet Panda - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/grrejj3maqxt0vwwfsw58/Untitleddesign_56_2000x.webp?rlkey=s2z27y6jynyhea4xir3z36pks&st=u69wgqsc&dl=0',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 600,
    name: 'Pet Panda - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/grrejj3maqxt0vwwfsw58/Untitleddesign_56_2000x.webp?rlkey=s2z27y6jynyhea4xir3z36pks&st=u69wgqsc&dl=0',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 601,
    name: 'Hector Horse - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/z6ur9yug4mk6oyaqdrq8d/Untitleddesign_51_400x.png?rlkey=oeyhkh6m486jimjv2ep7hbh5p&st=v4u2pcvz&dl=0',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 602,
    name: 'Hector Horse - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/z6ur9yug4mk6oyaqdrq8d/Untitleddesign_51_400x.png?rlkey=oeyhkh6m486jimjv2ep7hbh5p&st=v4u2pcvz&dl=0',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 603,
    name: 'Baroque Flowers - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/36gw7aapj7p2oj4cjeb4j/Untitleddesign_27_400x.png?rlkey=ccsew21m94zzn9wqkpgf88qva&st=ywa466iw&dl=0',
      'https://mintbymichelle.com/cdn/shop/files/378386913_685236820307347_4768965505168600387_n_5000x.jpg?v=1698778399',
      'https://mintbymichelle.com/cdn/shop/files/367754425_330872019279466_8376513760702592964_n_5000x.jpg?v=1698778399',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 604,
    name: 'Baroque Flowers - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/36gw7aapj7p2oj4cjeb4j/Untitleddesign_27_400x.png?rlkey=ccsew21m94zzn9wqkpgf88qva&st=ywa466iw&dl=0',
      'https://mintbymichelle.com/cdn/shop/files/378386913_685236820307347_4768965505168600387_n_5000x.jpg?v=1698778399',
      'https://mintbymichelle.com/cdn/shop/files/367754425_330872019279466_8376513760702592964_n_5000x.jpg?v=1698778399',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 685,
    name: 'Draped - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/zf84fsndaeo1gjf53dl60/DrapedSquare_371c3af5-0d7f-4900-947c-bac1480726b6_600x.webp?rlkey=0bxv0v1gvb9u40jmv96f8jqee&st=h9k5kig8&dl=0',
      'https://mintbymichelle.com/cdn/shop/files/FB_IMG_1720041841714_5000x.jpg?v=1720074019',
      'https://mintbymichelle.com/cdn/shop/files/449191971_487749657097233_6493866640206393109_n_5000x.jpg?v=1720074097',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 686,
    name: 'Draped - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/zf84fsndaeo1gjf53dl60/DrapedSquare_371c3af5-0d7f-4900-947c-bac1480726b6_600x.webp?rlkey=0bxv0v1gvb9u40jmv96f8jqee&st=h9k5kig8&dl=0',
      'https://mintbymichelle.com/cdn/shop/files/FB_IMG_1720041841714_5000x.jpg?v=1720074019',
      'https://mintbymichelle.com/cdn/shop/files/449191971_487749657097233_6493866640206393109_n_5000x.jpg?v=1720074097',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 687,
    name: 'Skin - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/r879bhfy7ww053bkj15vv/Skin-Square_200x.png?rlkey=0sfhy4f050kl5t8w8ldv96mmm&st=yaretqpn&dl=0',
      'https://mintbymichelle.com/cdn/shop/files/FB_IMG_1719869732114_5000x.jpg?v=1720073991',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 688,
    name: 'Skin - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/r879bhfy7ww053bkj15vv/Skin-Square_200x.png?rlkey=0sfhy4f050kl5t8w8ldv96mmm&st=yaretqpn&dl=0',
      'https://mintbymichelle.com/cdn/shop/files/FB_IMG_1719869732114_5000x.jpg?v=1720073991',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 689,
    name: 'Debbys Mermaid - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/krr2elv4q5i7u3150ayqn/Debby_sMermaid-square_200x.png?rlkey=dic5gcrmcntjpdlkbpglzptny&st=l9tdhq0l&dl=0',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 690,
    name: 'Debbys Mermaid - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/krr2elv4q5i7u3150ayqn/Debby_sMermaid-square_200x.png?rlkey=dic5gcrmcntjpdlkbpglzptny&st=l9tdhq0l&dl=0',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 691,
    name: 'Golden Brown - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/xxrsp17ryuc43uv1t0v8a/GoldenBrown-Square_200x.png?rlkey=1c416ypzwe0n2fh0f1xhd378r&st=qc66f4gp&dl=0',
      'https://mintbymichelle.com/cdn/shop/files/12c07c46-27df-4c2c-a294-9a84c45966fa_5000x.jpg?v=1719193341',
      'https://mintbymichelle.com/cdn/shop/files/58e971e5-432a-4703-a61c-a28b02c66875_5000x.jpg?v=1719193342',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 692,
    name: 'Golden Brown - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/xxrsp17ryuc43uv1t0v8a/GoldenBrown-Square_200x.png?rlkey=1c416ypzwe0n2fh0f1xhd378r&st=qc66f4gp&dl=0',
      'https://mintbymichelle.com/cdn/shop/files/12c07c46-27df-4c2c-a294-9a84c45966fa_5000x.jpg?v=1719193341',
      'https://mintbymichelle.com/cdn/shop/files/58e971e5-432a-4703-a61c-a28b02c66875_5000x.jpg?v=1719193342',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 693,
    name: 'Bathed in Gold - Papel para decoupage - A1',
    price: 29.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/npqtgpfb0yvuxkxyc679d/BatrhedinGold-Square_138fafb9-8d50-4b90-b73d-e241df710b57_5000x.webp?rlkey=yrcrihp3wzn4mstrdfro1worc&st=tw3u4mbw&dl=0',
      'https://mintbymichelle.com/cdn/shop/files/BathedInGold_2_5000x.jpg?v=1719193769',
      'https://mintbymichelle.com/cdn/shop/files/BathedInGold_5000x.jpg?v=1719193769',
    ],
    label: 'A1',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  },
  {
    id: 694,
    name: 'Bathed in Gold  - Papel para decoupage - A3',
    price: 19.95,
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/npqtgpfb0yvuxkxyc679d/BatrhedinGold-Square_138fafb9-8d50-4b90-b73d-e241df710b57_5000x.webp?rlkey=yrcrihp3wzn4mstrdfro1worc&st=tw3u4mbw&dl=0',
      'https://mintbymichelle.com/cdn/shop/files/BathedInGold_2_5000x.jpg?v=1719193769',
      'https://mintbymichelle.com/cdn/shop/files/BathedInGold_5000x.jpg?v=1719193769',
    ],
    label: 'A3',
    description: 'Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.',
    selected: false,
  }
  





];

// Define el rango de precios mínimo y máximo de tus productos
const precioMinimo = 0;
const precioMaximo = 50;

export const Tienda2 = () => {
  const [products, setProducts] = useState(initialProducts.reverse()); //initialProducts.reverse()
  const [priceRange, setPriceRange] = useState([precioMinimo, precioMaximo]);
  const [selectedClasses, setSelectedClasses] = useState([]);
  const [showNoProducts, setShowNoProducts] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [cart, setCart] = useState([]);
  const [showOverlay, setShowOverlay] = useState(false);
  const [filterButtonIcon, setFilterButtonIcon] = useState(<ViewOffIcon />);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12); // Cambia el número según tus necesidades 44

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


  console.log(cart);
  return (
    <>
      <Navbar2 />

      {showOverlay && <div className="overlay"></div>}
      <div className="tienda">
        <br></br>

        <div className="menu">

          <h1>Tienda de productos para artistas - Mint by Michelle🌿</h1>

          <h3>En esta sección de la tienda encontrareis multitud de productos especializados en papel para decoupage de diferentes tamaños de Mint by Michelle.</h3>

          <Button className="remove-button3" rightIcon={filterButtonIcon} onClick={handleToggleFilters} colorScheme='green' variant='solid'>
            Filtrar Productos
          </Button>

          <SearchBar onSearch={handleSearch} />


          <button className="bn632-hover bn22" onClick={handleToggleCart}>Carrito🛒</button>

        </div>

        {showFilters && (
          <div data-aos="fade-right"><div className="filter">

            {Array.from(new Set(initialProducts.map((product) => product.label)).values()).map(
              (selectedClass) => (
                <Tag  key={'lg'} variant='solid' colorScheme='green' >
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
