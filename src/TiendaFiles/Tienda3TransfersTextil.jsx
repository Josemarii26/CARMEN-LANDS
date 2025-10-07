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
    id: 482,
    name: 'Transfer TELA W&B 21x30cm KTS05',
    price: '5.30',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/r8ol51srtcjbz8hvvdlqp/transfer-tela-cadence.jpg?rlkey=t17wjx8yqslgcqvsu5ffumzas&st=4z60dxwb&dl=0',
    ],
    label: '21x30cm',
    description: 'Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.',
    selected: false,
  },
  {
    id: 483,
    name: 'Transfer TELA W&B 21x30cm KTS06',
    price: '5.30',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/1orl92mgnzqiiys0rujiq/transfer-tela-cadence-1.jpg?rlkey=onom93xa4ibo81h8kezi6eafz&st=cpv4fm0h&dl=0',
    ],
    label: '21x30cm',
    description: 'Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.',
    selected: false,
  },
  {
    id: 484,
    name: 'Transfer TELA Animal Portrait 25x35cm PAFT08',
    price: '5.30',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/3ztgfgueye41foskcng0p/transfer-tela-cadence-2.jpg?rlkey=816rv1zu774x0vxmh4q3fmkcr&st=bim3259e&dl=0',
    ],
    label: '25x35cm',
    description: 'Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.',
    selected: false,
  },
  {
    id: 485,
    name: 'Transfer TELA Animal Portrait 25x35cm PAFT07',
    price: '5.30',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/ox8rrcad3hxzc6gel6htl/transfer-tela-cadence-3.jpg?rlkey=6o6i0sl7e63tftvarfv3dssj8&st=7nvwix3z&dl=0',
    ],
    label: '25x35cm',
    description: 'Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.',
    selected: false,
  },
  {
    id: 486,
    name: 'Transfer TELA Animal Portrait 25x35cm PAFT06',
    price: '5.30',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/m555xfpjidt82dq5cr8u2/transfer-tela-cadence-4.jpg?rlkey=k17quqkz122uy90p7agj7x2nn&st=qptgkpdx&dl=0',
    ],
    label: '25x35cm',
    description: 'Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.',
    selected: false,
  },
  {
    id: 487,
    name: 'Transfer TELA Animal Portrait 25x35cm PAFT05',
    price: '5.30',
    images: [
      'https://i.ibb.co/BZc23m2/transfer-tela-cadence-5.jpg',
    ],
    label: '25x35cm',
    description: 'Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.',
    selected: false,
  },
  {
    id: 488,
    name: 'Transfer TELA Animal Portrait 25x35cm PAFT03',
    price: '5.30',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/b9h406cniqgi10hwg15ol/transfer-tela-cadence-6.jpg?rlkey=8yv0l939dyujgesl4b850sclp&st=enbbe9ud&dl=0',
    ],
    label: '25x35cm',
    description: 'Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.',
    selected: false,
  },
  {
    id: 489,
    name: 'Transfer TELA Siluetas 25x35cm FT069',
    price: '5.30',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/wovntoqyp1130h303hhu9/transfer-tela-cadence-7.jpg?rlkey=kli80dhm4srtg1cw45b8iw8oc&st=9qt6cp1z&dl=0',
    ],
    label: '25x35cm',
    description: 'Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.',
    selected: false,
  },
  {
    id: 490,
    name: 'Transfer TELA Siluetas 25x35cm FT068',
    price: '5.30',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/ttf6gg2618l2rl8q9s3yf/transfer-tela-cadence-8.jpg?rlkey=xd4ealsveh1dtxlklil4pbuiz&st=baa8jxek&dl=0',
    ],
    label: '25x35cm',
    description: 'Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.',
    selected: false,
  },
  {
    id: 491,
    name: 'Transfer TELA Siluetas 25x35cm FT067',
    price: '5.30',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/fgdxzjz5dup0fiksrvzya/transfer-tela-cadence-9.jpg?rlkey=46o8mf1n2cb6sfmldkgnck1w9&st=c4mla4fo&dl=0',
    ],
    label: '25x35cm',
    description: 'Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.',
    selected: false,
  },
  {
    id: 492,
    name: 'Transfer TELA Siluetas 25x35cm FT064',
    price: '5.30',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/2tqm59fysvuiptopbisxw/transfer-tela-cadence-10.jpg?rlkey=kr3ig52tngodp3wbq3rlnucjt&st=ti08cays&dl=0',
    ],
    label: '25x35cm',
    description: 'Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.',
    selected: false,
  },
  {
    id: 493,
    name: 'Transfer TELA Siluetas 25x35cm FT065',
    price: '5.30',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/gb38ofuvmjlu7q7kjqpjr/transfer-tela-cadence-11.jpg?rlkey=2440gb83ls58xvp97yr3vqsmu&st=gw5r53a6&dl=0',
    ],
    label: '25x35cm',
    description: 'Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.',
    selected: false,
  },
  {
    id: 494,
    name: 'Transfer TELA Siluetas 25x35cm FT063',
    price: '5.30',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/csmdwq64fs6i7shml6p08/transfer-tela-cadence-12.jpg?rlkey=8g3aqwetlldj7iwbdii8o4ym6&st=bmmwciqg&dl=0',
    ],
    label: '25x35cm',
    description: 'Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.',
    selected: false,
  },
  {
    id: 495,
    name: 'Transfer TELA W&B 21x30cm KTS13',
    price: '5.30',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/ek3cudyrvvezezhgge22y/transfer-tela-cadence-14.jpg?rlkey=4pof1h1ozvbdftzfolswbbrh1&st=uindi5iq&dl=0',
    ],
    label: '21x30cm',
    description: 'Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.',
    selected: false,
  },
  {
    id: 496,
    name: 'Transfer TELA W&B 21x30cm KTS14',
    price: '5.30',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/4qzkaw9bsxm3t0jacoses/transfer-tela-cadence-13.jpg?rlkey=zkcot4y4w92w2zxr0hemb8lz3&st=mdaj27rf&dl=0',
    ],
    label: '21x30cm',
    description: 'Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.',
    selected: false,
  },
  {
    id: 814,
    name: 'Transfer TELA Joy of Life 21x30cm JLFT20',
    price: '5.30',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/yfe1uoh7f3f0sxszso7z8/transfer-textil-joy-of-life-21x30cm-JLFT20.jpg?rlkey=jcea8c1h7qdly5uxbfgo8e5nm&st=wyda5pat&dl=0',
    ],
    label: '21x30cm',
    description: 'Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.',
    selected: false,
  },
  {
    "id": 815,
    "name": "Transfer TELA Joy-of-life-21x30cm JLFT19",
    "price": "5.30",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/81l65o96v75qpwc8b2vjj/transfer-textil-joy-of-life-21x30cm-JLFT19.jpg?rlkey=df1wq3ti1jgijl103vpln2isn&st=pl0cxrme&dl=0"],
    "label": "21x30cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 816,
    "name": "Transfer TELA Joy-of-life-21x30cm JLFT18",
    "price": "5.30",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/7152l9uccvqngh330dup3/transfer-textil-joy-of-life-21x30cm-JLFT18.jpg?rlkey=8nwj7q68b5ysd1pssnu5939az&st=5e6sixtx&dl=0"],
    "label": "21x30cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 817,
    "name": "Transfer TELA Joy-of-life-21x30cm JLFT17",
    "price": "5.30",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/52mco4k6ik2yiiqqn89o0/transfer-textil-joy-of-life-21x30cm-JLFT17.jpg?rlkey=o8wmsscmysvfuxan3aozefphe&st=ed7r0185&dl=0"],
    "label": "21x30cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 818,
    "name": "Transfer TELA Joy-of-life-21x30cm JLFT16",
    "price": "5.30",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/ybvmrh913avsqe0twsz5o/transfer-textil-joy-of-life-21x30cm-JLFT16.jpg?rlkey=7goo7urtq411w4ogrfoagmjme&st=vc3rgp57&dl=0"],
    "label": "21x30cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 819,
    "name": "Transfer TELA Joy-of-life-21x30cm JLFT15",
    "price": "5.30",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/26m2so5783qft1hjxbhbw/transfer-textil-joy-of-life-21x30cm-JLFT15.jpg?rlkey=hnbf2pnfldznfwdcorihxvvf1&st=f4jonhc9&dl=0"],
    "label": "21x30cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 820,
    "name": "Transfer TELA Joy-of-life-21x30cm JLFT14",
    "price": "5.30",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/h1xacgtrj9nyj8vdhfw44/transfer-textil-joy-of-life-21x30cm-JLFT14.jpg?rlkey=s3e0wmotl4tlfne79sbq32vvd&st=gax198q0&dl=0"],
    "label": "21x30cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 821,
    "name": "Transfer TELA Joy-of-life-21x30cm JLFT13",
    "price": "5.30",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/5gd7x8g8f9rqooaaoohh3/transfer-textil-joy-of-life-21x30cm-JLFT13.jpg?rlkey=ri7yefbtf1s31bo2ew1yvomg5&st=b7tbr5aq&dl=0"],
    "label": "21x30cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 822,
    "name": "Transfer TELA Joy-of-life-21x30cm JLFT12",
    "price": "5.30",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/y1imx85yu038vnnf3cesp/transfer-textil-joy-of-life-21x30cm-JLFT12.jpg?rlkey=0ucod1offdo52l18jbdwqgfhm&st=k8vo69ao&dl=0"],
    "label": "21x30cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 823,
    "name": "Transfer TELA Joy-of-life-21x30cm JLFT11",
    "price": "5.30",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/2on0vooi75j56459ytk74/Transfer-TEXTIL-Joy-of-Life-21x30cm-JLFT11.jpg?rlkey=flpcx4pgfylg6hqiapyfpnx0d&st=ongnjz27&dl=0"],
    "label": "21x30cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 824,
    "name": "Transfer TELA Joy-of-life-21x30cm JLFT10",
    "price": "5.30",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/8uulnr0t8e5opo1ic2ufn/transfer-textil-joy-of-life-21x30cm-JLFT10.jpg?rlkey=v8y233anwcr8of2vv3ks86aul&st=flu67p6o&dl=0"],
    "label": "21x30cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 825,
    "name": "Transfer TELA Joy-of-life-21x30cm JLFT09",
    "price": "5.30",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/c422twdg36rlhmu879dxf/transfer-textil-joy-of-life-21x30cm-JLFT09.jpg?rlkey=79gxeqykzrzcb9u74m7hro8ba&st=pw5fxc35&dl=0"],
    "label": "21x30cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 826,
    "name": "Transfer TELA Joy-of-life-21x30cm JLFT08",
    "price": "5.30",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/j04m0j8vnf2u0rgze81nm/transfer-textil-joy-of-life-21x30cm-JLFT08.jpg?rlkey=bozkygyk9vn7ex0jlt2zll4x4&st=2st5c4ky&dl=0"],
    "label": "21x30cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 827,
    "name": "Transfer TELA Joy-of-life-21x30cm JLFT07",
    "price": "5.30",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/d3378lfumrzz9khy6hulm/transfer-textil-joy-of-life-21x30cm-JLFT07.jpg?rlkey=i5vmv5ft5m9rbmu0du2to3dkv&st=jyebvhz6&dl=0"],
    "label": "21x30cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 828,
    "name": "Transfer TELA Joy-of-life-21x30cm JLFT06",
    "price": "5.30",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/nymqu91fq1x2z6y8mqf2r/transfer-textil-joy-of-life-21x30cm-JLFT06.jpg?rlkey=iltd8qtpa3iyn2cfgfjdyk1mo&st=f7mms27m&dl=0"],
    "label": "21x30cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 829,
    "name": "Transfer TELA Joy-of-life-21x30cm JLFT05",
    "price": "5.30",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/ymvz2yeb7ho5f2imeuozf/transfer-textil-joy-of-life-21x30cm-JLFT05.jpg?rlkey=vwz58p5itmut1bgawfnc33243&st=vgjgjujo&dl=0"],
    "label": "21x30cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 830,
    "name": "Transfer TELA Joy-of-life-21x30cm JLFT04",
    "price": "5.30",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/jh6zpcivdb3142ft4hq8y/transfer-textil-joy-of-life-21x30cm-JLFT04.jpg?rlkey=tm20lk5u97pwgn62vj8xthb37&st=7wps7vz9&dl=0"],
    "label": "21x30cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 831,
    "name": "Transfer TELA Joy-of-life-21x30cm JLFT03",
    "price": "5.30",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/ec6ugo6nl6xqvy6iz0eug/transfer-textil-joy-of-life-21x30cm-JLFT03.jpg?rlkey=9m1ovju4m5sx7yigrxmfkx3qj&st=i6dnb94v&dl=0"],
    "label": "21x30cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 832,
    "name": "Transfer TELA Joy-of-life-21x30cm JLFT02",
    "price": "5.30",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/ly7k9o4llva3riyzy7wa3/transfer-textil-joy-of-life-21x30cm-JLFT02.jpg?rlkey=vii6v1sllb10qpdjdiigr0ydw&st=wwz4yse7&dl=0"],
    "label": "21x30cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 833,
    "name": "Transfer TELA Joy-of-life-21x30cm JLFT01",
    "price": "5.30",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/99yi9s1clf0ghzceh0nxk/transfer-textil-joy-of-life-21x30cm-JLFT01.jpg?rlkey=blhjlsm31keg2t4tfitz4kzdv&st=tdjxg1kw&dl=0"],
    "label": "21x30cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 834,
    "name": "Transfer TELA Coutout-25x35cm C0008",
    "price": "5.30",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/ndbtda46xre7269onp1p7/transfer-textil-coutout-25x35cm-CO008.jpg?rlkey=33v03iahc7i43nk9gvn8auk26&st=hukn2b8z&dl=0"],
    "label": "25x35cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 835,
    "name": "Transfer TELA Coutout-25x35cm C0007",
    "price": "5.30",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/1723eu1niwt5qaupyep3w/transfer-textil-coutout-25x35cm-CO007.jpg?rlkey=zoz2ssgitfyvwbwnul542i9u3&st=tx9eps23&dl=0"],
    "label": "25x35cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 836,
    "name": "Transfer TELA Coutout-25x35cm C0002",
    "price": "5.30",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/1t6fgxw8rycsk2l7q1uyy/transfer-textil-coutout-25x35cm-CO002.jpg?rlkey=o8hxsyo306cl8u540vhuudxzs&st=cy9qmeni&dl=0"],
    "label": "25x35cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 837,
    "name": "Transfer TELA Coutout-25x35cm C0001",
    "price": "5.30",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/wabnmp8ayq19t3npqotqd/transfer-textil-coutout-25x35cm-CO001.jpg?rlkey=axbhjsc4b0l7463ltwmgprvbu&st=1yj8aumf&dl=0"],
    "label": "25x35cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 838,
    "name": "Transfer TELA Wb-21x30cm KTS21",
    "price": "5.30",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/1egvf7hrsihhmzit5v98x/transfer-tela-wb-21x30cm-KTS21.jpg?rlkey=ozw6iqa6dzur6u9rszizs8nhv&st=60bnv5oz&dl=0"],
    "label": "21x30cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 839,
    "name": "Transfer TELA Wb-21x30cm KTS19",
    "price": "5.30",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/dczzg981man6v168448ie/transfer-tela-wb-21x30cm-KTS19.jpg?rlkey=rb5ndi7m2bc14v4x91nsta3b5&st=pi5erq0k&dl=0"],
    "label": "21x30cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 840,
    "name": "Transfer TELA Wb-21x30cm KTS18",
    "price": "5.30",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/bxidd318n36d654v8fiye/transfer-tela-wb-21x30cm-KTS18.jpg?rlkey=n2i53nchaow7is7q7xjdz7k0f&st=oyijkywt&dl=0"],
    "label": "21x30cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 841,
    "name": "Transfer TELA Wb-21x30cm KTS08",
    "price": "5.30",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/ndi2sk2kmvxwdwtyio8g1/transfer-tela-wb-21x30cm-KTS08.jpg?rlkey=xu83051ks7b40ghrgd0padtff&st=pimrrmsz&dl=0"],
    "label": "21x30cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 842,
    "name": "Transfer TELA Cadence WFFTC007",
    "price": "5.30",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/grjldsn550ouof5tgfqrv/transfer-tela-cadence-WFFTC007.jpg?rlkey=1ktffjpcsb9bwwjbit12gggp7&st=osp4ihlv&dl=0"],
    "label": "25x35cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 843,
    "name": "Transfer TELA Cadence WFFTC006",
    "price": "5.30",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/qgf75umg8asr4wxbylzo1/transfer-tela-cadence-WFFTC006.jpg?rlkey=0k18t933pt75pczvzdkdif2p2&st=tvbm6mod&dl=0"],
    "label": "25x35cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 844,
    "name": "Transfer TELA Cadence WFFTC005",
    "price": "5.30",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/dggzuv8czmdwmgbzbs0gv/transfer-tela-cadence-WFFTC005.jpg?rlkey=98la8xgvhbqtxumvn2szx3q0u&st=6bocumz9&dl=0"],
    "label": "25x35cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 845,
    "name": "Transfer TELA Cadence WFFTC004",
    "price": "5.30",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/64v0ob090yqwyk8iz33ak/transfer-tela-cadence-WFFTC004.jpg?rlkey=kgmts45m4vcmxosmguk3g5r4b&st=0jtnp4fw&dl=0"],
    "label": "25x35cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 846,
    "name": "Transfer TELA Cadence WFFTC003",
    "price": "5.30",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/sxj7unptw4edxfe9h2mi8/transfer-tela-cadence-WFFTC003.jpg?rlkey=9m1u1hvh1insqb59u38ohrnxa&st=mb3810hb&dl=0"],
    "label": "25x35cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 847,
    "name": "Transfer TELA Cadence WFFTC002",
    "price": "5.30",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/owoovdtcqa1hufljpz54s/transfer-tela-cadence-WFFTC002.jpg?rlkey=layoikf1dy8jzny4d7r1yx92o&st=9ckmqyca&dl=0"],
    "label": "25x35cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 848,
    "name": "Transfer TELA Cadence WFFTC001",
    "price": "5.30",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/vc0kscvv4s2wi87vzs7ey/transfer-tela-cadence-WFFTC001.jpg?rlkey=d3v4uepqp02aujhvpv7ro1k2l&st=cvjr4lql&dl=0"],
    "label": "25x35cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 849,
    "name": "Transfer TELA Cadence PAFT04",
    "price": "5.30",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/0wrsga31toiixaz0dv8zf/transfer-tela-cadence-PAFT04.jpg?rlkey=taujclrizj55c096d11nhrbva&st=q9uj3n09&dl=0"],
    "label": "25x35cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 850,
    "name": "Transfer TELA Cadence PAFT02",
    "price": "5.30",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/du3dh2l045ap8w9lwiaoj/transfer-tela-cadence-PAFT02.jpg?rlkey=pd096bu4m30kllb2608ilx8se&st=exxi9cqx&dl=0"],
    "label": "25x35cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 851,
    "name": "Transfer TELA Cadence PAFT01",
    "price": "5.30",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/of1v8ga5gnib10by39k5u/transfer-tela-cadence-PAFT01.jpg?rlkey=ehzgedqbd4jfen7s9am0yzhnf&st=0ohfzxow&dl=0"],
    "label": "25x35cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 852,
    "name": "Transfer TELA Cadence KTSB015",
    "price": "5.30",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/o7h3mhj9mf17qvtra947b/transfer-tela-cadence-KTSB015.jpg?rlkey=rjv3loaq1nvyrfqnu3dacu48e&st=2245bymi&dl=0"],
    "label": "25x35cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 853,
    "name": "Transfer TELA Cadence KTSB014",
    "price": "5.30",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/exgqtv7kt57lofs2dmvma/transfer-tela-cadence-KTSB014.jpg?rlkey=uiab95cldycaefb0f3mvsafjg&st=9pzcb2d0&dl=0"],
    "label": "25x35cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 854,
    "name": "Transfer TELA Cadence KTSB013",
    "price": "5.30",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/2lh7wp0x8htogfm89txqc/transfer-tela-cadence-KTSB013.jpg?rlkey=jb74p99z2zssawxaevjnulstm&st=gnk3kmrl&dl=0"],
    "label": "25x35cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 855,
    "name": "Transfer TELA Cadence KTSB012",
    "price": "5.30",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/ibg5ktd5n6kyhrlv8byvf/transfer-tela-cadence-KTSB012.jpg?rlkey=baltnvr3o6s4gu69aa3gflgeo&st=3e0s0vkl&dl=0"],
    "label": "25x35cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 856,
    "name": "Transfer TELA Cadence KTSB011",
    "price": "5.30",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/amf6udzbvu69wg1ktnicg/transfer-tela-cadence-KTSB011.jpg?rlkey=c9fnd7j5wjpzfkwxiiyb60awh&st=pqc9par1&dl=0"],
    "label": "25x35cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 857,
    "name": "Transfer TELA Cadence KTSB010",
    "price": "5.30",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/zduwfv2nx46qmi0nfwi55/transfer-tela-cadence-KTSB010.jpg?rlkey=5nfxio45ikb24prqeumckdqac&st=7m1mde47&dl=0"],
    "label": "25x35cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 858,
    "name": "Transfer TELA Cadence KTSB009",
    "price": "5.30",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/w3jhm1ny8arxs5qtlja7i/transfer-tela-cadence-KTSB009.jpg?rlkey=1t6da8qrh3do8l0c6byochx4w&st=u79mz1f7&dl=0"],
    "label": "25x35cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 859,
    "name": "Transfer TELA Cadence KTSB008",
    "price": "5.30",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/tpehzojpyphadzzubmnwm/transfer-tela-cadence-KTSB008.jpg?rlkey=l9kuxqekxpjezy8weiw8gkk8i&st=u7ox2x80&dl=0"],
    "label": "25x35cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 860,
    "name": "Transfer TELA Cadence KTSB007",
    "price": "5.30",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/6io7q5e90vq3y8o4ddm4r/transfer-tela-cadence-KTSB007.jpg?rlkey=y2of0jbq0bmezzyg7ropg9nds&st=2ei6fxsx&dl=0"],
    "label": "25x35cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 861,
    "name": "Transfer TELA Cadence KTSB006",
    "price": "5.30",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/aklhmatx6o0cqcpp6osrt/transfer-tela-cadence-KTSB006.jpg?rlkey=378civkqbjmmi2erwez6ww3q5&st=u9qekwfr&dl=0"],
    "label": "25x35cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 862,
    "name": "Transfer TELA Cadence KTSB005",
    "price": "5.30",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/wl4p5ws60q756b2bsxvxt/transfer-tela-cadence-KTSB005.jpg?rlkey=i7mjst2kgn8ovrvuky4w45jha&st=xtme9e6s&dl=0"],
    "label": "25x35cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 864,
    "name": "Transfer TELA Cadence KTSB003",
    "price": "5.30",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/w7g8ummj7eumonjvgk8cv/transfer-tela-cadence-KTSB003.jpg?rlkey=zn63mczx4xfkusdeg3rlpf7if&st=ksxoznkz&dl=0"],
    "label": "25x35cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 865,
    "name": "Transfer TELA Cadence KTSB002",
    "price": "5.30",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/1e5k66w900jofmc7y95b5/transfer-tela-cadence-KTSB002.jpg?rlkey=lscvmc21mlmamn62cbjp2gefl&st=oeujhwtf&dl=0"],
    "label": "25x35cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseño actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 866,
    "name": "Transfer TELA Cadence KTSB001",
    "price": "5.30",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/n861lz7m08zxi32nhcioj/transfer-tela-cadence-KTSB001.jpg?rlkey=diaeyg9m7b9l7kox93w2e9oue&st=0lv9ajc4&dl=0"],
    "label": "25x35cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 867,
    "name": "Transfer TELA Cadence KTS20",
    "price": "5.30",
    "images": [
      "https://dl.dropboxusercontent.com/scl/fi/h70dlnaonlthhe72hltx4/transfer-tela-cadence-KTS20.jpg?rlkey=miqnixl22gl251sdp8iqfjje8&st=eg2hdbol&dl=0"
    ],
    "label": "21x30cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 868,
    "name": "Transfer TELA Cadence KTS17",
    "price": "5.30",
    "images": [
      "https://dl.dropboxusercontent.com/scl/fi/ajlyi90uxkuph5ut81ppb/transfer-tela-cadence-KTS17.jpg?rlkey=1jvwp6btky70i5jx6j5n0yzx5&st=w6ut8clc&dl=0"
    ],
    "label": "21x30cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 869,
    "name": "Transfer TELA Cadence KTS12",
    "price": "5.30",
    "images": [
      "https://dl.dropboxusercontent.com/scl/fi/xz70sa2ndr8365k9h6eia/transfer-tela-cadence-KTS12.jpg?rlkey=1oax7i5wc1fstjmv7vqm5i0cf&st=wqnkt4m2&dl=0"
    ],
    "label": "21x30cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 870,
    "name": "Transfer TELA Cadence KTS10",
    "price": "5.30",
    "images": [
      "https://dl.dropboxusercontent.com/scl/fi/uxkt6qe74th475qo7s44v/transfer-tela-cadence-KTS10.jpg?rlkey=ot2tcd0du675s42a2rld3tynq&st=u01je9s9&dl=0"
    ],
    "label": "21x30cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 871,
    "name": "Transfer TELA Cadence KTS09",
    "price": "5.30",
    "images": [
      "https://dl.dropboxusercontent.com/scl/fi/69wg9xeebe5o0qb2s5g1r/transfer-tela-cadence-KTS09.jpg?rlkey=puwzkxj3whoi8jarqpqij6g9p&st=w8tcg15l&dl=0"
    ],
    "label": "21x30cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 872,
    "name": "Transfer TELA Cadence KTS06",
    "price": "5.30",
    "images": [
      "https://dl.dropboxusercontent.com/scl/fi/c3n62baq2p8xq7d6237ce/transfer-tela-cadence-KTS06.jpg?rlkey=vyxwsl7n8aw87skx4jzz0s3nz&st=zsux8nm5&dl=0"
    ],
    "label": "21x30cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 873,
    "name": "Transfer TELA Cadence KTS05",
    "price": "5.30",
    "images": [
      "https://dl.dropboxusercontent.com/scl/fi/qodicyxkr4t9eykzl6iw1/transfer-tela-cadence-KTS05.jpg?rlkey=ovjupn7br96m6ka3p113ims89&st=88scvoxk&dl=0"
    ],
    "label": "21x30cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 874,
    "name": "Transfer TELA Cadence KTS04",
    "price": "5.30",
    "images": [
      "https://dl.dropboxusercontent.com/scl/fi/2q7fof26e7q3hifkc2qkv/transfer-tela-cadence-KTS04.jpg?rlkey=hqukk4pscxlvicke1siivggv4&st=7h05sary&dl=0"
    ],
    "label": "21x30cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 875,
    "name": "Transfer TELA Cadence KTS02",
    "price": "5.30",
    "images": [
      "https://dl.dropboxusercontent.com/scl/fi/w80ys3lfrqb4qgief8ef5/transfer-tela-cadence-KTS02.jpg?rlkey=ozp0slxr2qt5j50qxb7e634nu&st=ijpqjue3&dl=0"
    ],
    "label": "21x30cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 876,
    "name": "Transfer TELA Cadence KTS01",
    "price": "5.30",
    "images": [
      "https://dl.dropboxusercontent.com/scl/fi/8rnt52u8y14yw81xjvk6w/transfer-tela-cadence-KTS01.jpg?rlkey=60g8it3ptgh1emhfxqhnnvng0&st=5gtz1m1l&dl=0"
    ],
    "label": "21x30cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 877,
    "name": "Transfer TELA Cadence-gold-VT024-21x30 cm",
    "price": "5.30",
    "images": [
      "https://dl.dropboxusercontent.com/scl/fi/m966ps4c8os6tvq2kkdrh/transfer-tela-cadence-gold-vt024-21x30-cm.jpg?rlkey=n72h2skve612tsorht0ld1s80&st=pqzevb5q&dl=0"
    ],
    "label": "21x30cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 878,
    "name": "Transfer TELA Cadence FT207",
    "price": "5.30",
    "images": [
      "https://dl.dropboxusercontent.com/scl/fi/tjv1hcbp2hhgns2gyutpq/transfer-tela-cadence-FT207.jpg?rlkey=lqwcvwxg1vs2f3msteuiqy36d&st=5fb22yhk&dl=0"
    ],
    "label": "17x25cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 879,
    "name": "Transfer TELA Cadence FT070",
    "price": "5.30",
    "images": [
      "https://dl.dropboxusercontent.com/scl/fi/m7jokuk6mj2bntg9wc6dp/transfer-tela-cadence-FT070.jpg?rlkey=f5wzn6a21gu85yvlkbot2xnk6&st=uu4xiqk5&dl=0"
    ],
    "label": "25x35cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 880,
    "name": "Transfer TELA Cadence FT066",
    "price": "5.30",
    "images": [
      "https://dl.dropboxusercontent.com/scl/fi/xkdxf2kq46brbdncs5hjw/transfer-tela-cadence-FT066.jpg?rlkey=dxdfv0mmxea5q6k04l2s7wj3a&st=1xos35fi&dl=0"
    ],
    "label": "25x35cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 881,
    "name": "Transfer TELA Cadence FT062",
    "price": "5.30",
    "images": [
      "https://dl.dropboxusercontent.com/scl/fi/whgiwgcvg9saaq2pj807m/transfer-tela-cadence-FT062.jpg?rlkey=x0405q4u4150v37fcgcqgw8qc&st=mgm6v0sq&dl=0"
    ],
    "label": "25x35cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 882,
    "name": "Transfer TELA Cadence FT051",
    "price": "5.30",
    "images": [
      "https://dl.dropboxusercontent.com/scl/fi/xal52c4fvaagp0zdo3p5z/transfer-tela-cadence-FT051.jpg?rlkey=mt41ify0cqbq8uqulv9ogfk79&st=1iljcg5f&dl=0"
    ],
    "label": "25x35cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 883,
    "name": "Transfer TELA Cadence FT050",
    "price": "5.30",
    "images": [
      "https://dl.dropboxusercontent.com/scl/fi/k83bf2p9u5bzq8b0fhuaq/transfer-tela-cadence-FT050.jpg?rlkey=0jnfvnqe4lj3qp2p3l0yjk0fn&st=pyhuziye&dl=0"
    ],
    "label": "25x35cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 884,
    "name": "Transfer TELA Cadence FT049",
    "price": "5.30",
    "images": [
      "https://dl.dropboxusercontent.com/scl/fi/4nhycp79yizvanzve1ao5/transfer-tela-cadence-FT049.jpg?rlkey=gsdbc919a65ysc6rkodtougqu&st=bfl74yoy&dl=0"
    ],
    "label": "25x35cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 885,
    "name": "Transfer TELA Cadence FT046",
    "price": "5.30",
    "images": [
      "https://dl.dropboxusercontent.com/scl/fi/rjto3uoss2qrmobbtmlc2/transfer-tela-cadence-FT046.jpg?rlkey=ay86qms6p5brlk8npmhd1y3aj&st=z483ypty&dl=0"
    ],
    "label": "25x35cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 886,
    "name": "Transfer TELA Cadence FT043",
    "price": "5.30",
    "images": [
      "https://dl.dropboxusercontent.com/scl/fi/4cfprgbhe65vyxj0mzuen/transfer-tela-cadence-FT043.jpg?rlkey=jhcxdbtv33kxulok3vyjbf9xy&st=afxbciis&dl=0"
    ],
    "label": "25x35cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 887,
    "name": "Transfer TELA Cadence FT042",
    "price": "5.30",
    "images": [
      "https://dl.dropboxusercontent.com/scl/fi/0uvzj8x5c9pul99ymqf4p/transfer-tela-cadence-FT042.jpg?rlkey=l4f222fk45iw3lgen0bf5mr7j&st=dmd18n3m&dl=0"
    ],
    "label": "25x35cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 888,
    "name": "Transfer TELA Cadence FT041",
    "price": "5.30",
    "images": [
      "https://dl.dropboxusercontent.com/scl/fi/qgp2p6ob05bvu1uu6kn4v/transfer-tela-cadence-FT041.jpg?rlkey=eg6qw8wuikvzcrgqr0kzv6ylq&st=wai66roj&dl=0"
    ],
    "label": "25x35cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 889,
    "name": "Transfer TELA Cadence FT040",
    "price": "5.30",
    "images": [
      "https://dl.dropboxusercontent.com/scl/fi/557cfruf5bvjpq0bnvprv/transfer-tela-cadence-FT040.jpg?rlkey=n6j6ewgt66x1sk4jnjkwzk5qd&st=zybd0cql&dl=0"
    ],
    "label": "25x35cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 890,
    "name": "Transfer TELA Cadence FT039",
    "price": "5.30",
    "images": [
      "https://dl.dropboxusercontent.com/scl/fi/6zvbf54m81wwsl0mq1hzy/transfer-tela-cadence-FT039.jpg?rlkey=5a5h485jqrtns0cpjlaowrmym&st=mtbnblkl&dl=0"
    ],
    "label": "25x35cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 891,
    "name": "Transfer TELA Cadence FT038",
    "price": "5.30",
    "images": [
      "https://dl.dropboxusercontent.com/scl/fi/14nikrk4fwk70c03wdfem/transfer-tela-cadence-FT038.jpg?rlkey=9pvh404zfrqql1wtflpn6y36f&st=7vwkf4zh&dl=0"
    ],
    "label": "25x35cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 892,
    "name": "Transfer TELA Cadence FT037",
    "price": "5.30",
    "images": [
      "https://dl.dropboxusercontent.com/scl/fi/zr1l7krrphrq56fzfj33j/transfer-tela-cadence-FT037.jpg?rlkey=ay6gchgiaxmsgw1so7mk815bq&st=7no9mpud&dl=0"
    ],
    "label": "25x35cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 893,
    "name": "Transfer TELA Cadence FT036",
    "price": "5.30",
    "images": [
      "https://dl.dropboxusercontent.com/scl/fi/mk7a1dwy7y05fran3rdps/transfer-tela-cadence-FT036.jpg?rlkey=v5j3kipj1cy8sng3tlnnma6lj&st=miev0u38&dl=0"
    ],
    "label": "25x35cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 894,
    "name": "Transfer TELA Cadence FT035",
    "price": "5.30",
    "images": [
      "https://dl.dropboxusercontent.com/scl/fi/hxieglnvt7398iq5gzg2r/transfer-tela-cadence-FT035.jpg?rlkey=4srebahho75c5gyzf6dmdhjne&st=pk6d59ky&dl=0"
    ],
    "label": "25x35cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 895,
    "name": "Transfer TELA Cadence FT029",
    "price": "5.30",
    "images": [
      "https://dl.dropboxusercontent.com/scl/fi/bct5w2hl7reym74zwy5zt/transfer-tela-cadence-FT029.jpg?rlkey=fcsbp72itth59f8hmazkdmpp7&st=pqgu8jic&dl=0"
    ],
    "label": "25x35cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 896,
    "name": "Transfer TELA Cadence FT026",
    "price": "5.30",
    "images": [
      "https://dl.dropboxusercontent.com/scl/fi/2rmos4ymwstz15oaqbcaq/transfer-tela-cadence-FT026.jpg?rlkey=eqem4ovmx7vnavsw2ji64bl0h&st=qr2xwiwf&dl=0"
    ],
    "label": "25x35cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 897,
    "name": "Transfer TELA Cadence FT024",
    "price": "5.30",
    "images": [
      "https://dl.dropboxusercontent.com/scl/fi/5wran3uu1h6jw04vm2g5h/transfer-tela-cadence-FT024.jpg?rlkey=i5381cww2cs7iibwr2grpk0rc&st=3ftftfno&dl=0"
    ],
    "label": "25x35cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 898,
    "name": "Transfer TELA Cadence FT023",
    "price": "5.30",
    "images": [
      "https://dl.dropboxusercontent.com/scl/fi/h544pkoyrudyt4foipw6v/transfer-tela-cadence-FT023.jpg?rlkey=e9hd1obu7pjqfkgnh4igua5jx&st=kkag6cm6&dl=0"
    ],
    "label": "25x35cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 899,
    "name": "Transfer TELA Cadence FT021",
    "price": "5.30",
    "images": [
      "https://dl.dropboxusercontent.com/scl/fi/92hesceqfbhgd301ay4rv/transfer-tela-cadence-FT021.jpg?rlkey=784iyzewv6qv54ize5ekhx8n3&st=xzs0owu1&dl=0"
    ],
    "label": "25x35cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 900,
    "name": "Transfer TELA Cadence FT020",
    "price": "5.30",
    "images": [
      "https://dl.dropboxusercontent.com/scl/fi/ow8liostmddhz0r4i7cun/transfer-tela-cadence-FT020.jpg?rlkey=7a6hrzl93qywlr47233s1k6iq&st=0m5uj5n4&dl=0"
    ],
    "label": "25x35cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 901,
    "name": "Transfer TELA Cadence FT019",
    "price": "5.30",
    "images": [
      "https://dl.dropboxusercontent.com/scl/fi/0db3kcrz0x5wkcruodhby/transfer-tela-cadence-FT019.jpg?rlkey=l3odc2pbldwm8lyy68ky532m9&st=u7sngfeg&dl=0"
    ],
    "label": "25x35cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 902,
    "name": "Transfer TELA Cadence FT017",
    "price": "5.30",
    "images": [
      "https://dl.dropboxusercontent.com/scl/fi/97bpjpq669gbkcss06cm1/transfer-tela-cadence-FT017.jpg?rlkey=1xbc6hfsfg9xtawchacaih72x&st=u5oeirc0&dl=0"
    ],
    "label": "25x35cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 903,
    "name": "Transfer TELA Cadence FT016",
    "price": "5.30",
    "images": [
      "https://dl.dropboxusercontent.com/scl/fi/uted7u2lw4bmeltnm30l6/transfer-tela-cadence-FT016.jpg?rlkey=i5qqk4xpst6ru5w7nx744zwiw&st=c9j7serj&dl=0"
    ],
    "label": "25x35cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 904,
    "name": "Transfer TELA Cadence FT015",
    "price": "5.30",
    "images": [
      "https://dl.dropboxusercontent.com/scl/fi/nntj4yufep5t74hup0qm4/transfer-tela-cadence-FT015.jpg?rlkey=gllgp38rakn89wwilf8ou2qhg&st=w0knhau4&dl=0"
    ],
    "label": "25x35cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 905,
    "name": "Transfer TELA Cadence FT014",
    "price": "5.30",
    "images": [
      "https://dl.dropboxusercontent.com/scl/fi/lqpiy8n1synj2rvmhj1rh/transfer-tela-cadence-FT014.jpg?rlkey=z3fss8om6klnf2pzbka02468u&st=sy9ggqr0&dl=0"
    ],
    "label": "25x35cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 906,
    "name": "Transfer TELA Cadence FT013",
    "price": "5.30",
    "images": [
      ""
    ],
    "label": "25x35cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 907,
    "name": "Transfer TELA Cadence FT012",
    "price": "5.30",
    "images": [
      "https://dl.dropboxusercontent.com/scl/fi/y9uxy24rhy46z00uy99kh/transfer-tela-cadence-FT012.jpg?rlkey=cf42den1alv0v1suokbc14ag1&st=jtfq5tzb&dl=0"
    ],
    "label": "25x35cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 908,
    "name": "Transfer TELA Cadence FT010",
    "price": "5.30",
    "images": [
      "https://dl.dropboxusercontent.com/scl/fi/gzcik0dq3r0mx7apxbpc3/transfer-tela-cadence-FT010.jpg?rlkey=a6jgbc4aphj0zjg8s5mujskqg&st=90wxos12&dl=0"
    ],
    "label": "25x35cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 909,
    "name": "Transfer TELA Cadence FT009",
    "price": "5.30",
    "images": [
      "https://dl.dropboxusercontent.com/scl/fi/if5mukx7oghipw5n3tjzo/transfer-tela-cadence-FT009.jpg?rlkey=g3dacrpj2koof7lvof4s336gh&st=vj6jfr16&dl=0"
    ],
    "label": "25x35cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 910,
    "name": "Transfer TELA Cadence FT007",
    "price": "5.30",
    "images": [
      "https://dl.dropboxusercontent.com/scl/fi/2wzfkkyz429s7qqmorjuy/transfer-tela-cadence-FT007.jpg?rlkey=24b1pjrc4mg1lru0nsbw1p5cx&st=bap9bjy3&dl=0"
    ],
    "label": "25x35cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 911,
    "name": "Transfer TELA Cadence FT006",
    "price": "5.30",
    "images": [
      "https://dl.dropboxusercontent.com/scl/fi/66dxxobm79jlwl0tpkzvx/transfer-tela-cadence-FT006.jpg?rlkey=snm1wybcv8yw5zzzxccbqnpyc&st=rudemf35&dl=0"
    ],
    "label": "25x35cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 912,
    "name": "Transfer TELA Cadence FT005",
    "price": "5.30",
    "images": [
      "https://dl.dropboxusercontent.com/scl/fi/cdkhjs9xh55pr3y6atrox/transfer-tela-cadence-FT005.jpg?rlkey=hyotrgp6a2cqmjcyvdjn6ryp0&st=8o9qiv4m&dl=0"
    ],
    "label": "25x35cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 913,
    "name": "Transfer TELA Cadence FT004",
    "price": "5.30",
    "images": [
      "https://dl.dropboxusercontent.com/scl/fi/qfv3uzt7msfv9hudld8sl/transfer-tela-cadence-FT004.jpg?rlkey=hb0ot871gqkjj26sqn8jlni7g&st=anarn6y6&dl=0"
    ],
    "label": "25x35cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 914,
    "name": "Transfer TELA Cadence FT003",
    "price": "5.30",
    "images": [
      "https://dl.dropboxusercontent.com/scl/fi/b72vd0f74s2sjex5shv4w/transfer-tela-cadence-FT003.jpg?rlkey=wm24gi2sca24w32htpxrouwgx&st=ouhieonx&dl=0"
    ],
    "label": "25x35cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 915,
    "name": "Transfer TELA Cadence FT002",
    "price": "5.30",
    "images": [
      "https://dl.dropboxusercontent.com/scl/fi/75ma2z7a0b2gyxcccq8ec/transfer-tela-cadence-FT002.jpg?rlkey=vcsjsxl1kyccku6fsw19t868x&st=nl1xp4zw&dl=0"
    ],
    "label": "25x35cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 916,
    "name": "Transfer TELA Cadence FT001",
    "price": "5.30",
    "images": [
      "https://dl.dropboxusercontent.com/scl/fi/2biyr1teboapobrixyswk/transfer-tela-cadence-FT001.jpg?rlkey=ft5n9xhj4l8emrfwg7tctyl0h&st=17pxbz2z&dl=0"
    ],
    "label": "25x35cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  },
  {
    "id": 917,
    "name": "Transfer TELA Cadence-crunge plata",
    "price": "5.30",
    "images": [
      "https://dl.dropboxusercontent.com/scl/fi/3ayj8imkjv2dge54p6qv4/transfer-tela-cadence-crunge-plata.jpg?rlkey=x9wdi5ws85s2rmknvqqcpeh4f&st=05cu8lfv&dl=0"
    ],
    "label": "21x30cm",
    "description": "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    "selected": false
  }

  
















];

// Define el rango de precios mínimo y máximo de tus productos
const precioMinimo = 0;
const precioMaximo = 20;

export const Tienda3TransfersTextil = () => {
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
          <h2>Transfers para Tela🎨</h2>

          <h3>Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto. <br></br>
          <span id='materiales'>MODO DE EMPLEO</span> <br></br> Coloca el transfer sobre la tela, pasa una plancha caliente (sin vapor) durante unos 3 minutos para fijar el transfer a la tela, dejar que transfer y tela se enfrien antes de retirar el papel protector.
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
