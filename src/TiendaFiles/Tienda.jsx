import React, { useState, useEffect, useMemo, useDeferredValue } from "react";
import { ProductCard } from "../tienda/ProductCard";
import { SearchBar } from "../tienda/SearchBar";
import { Cart } from "../tienda/Cart";
import { Slide } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Tag } from "@chakra-ui/react";


import Aos from "aos";
import "aos/dist/aos.css";
import ScrollToTopButton from "../parallax/parallax-2/ScrollToTopButton";
import { Link } from "react-router-dom";
import { Navbar2 } from "../navbar/Navbar2";
import { WavyLink } from "react-wavy-transitions";

const initialProducts = [
  {
    id: 1,
    name: "Butterflies - Mint Papel de seda",
    price: 21.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/ti3qxixf9s455yb4l36y2/shutterstock-1807575772-2-5000x.jpg?rlkey=210elbbm1xthnsp9z5wly5s3x&st=90kezmug&dl=0",
    ],
    label: "Papel de seda",
    description:
      "Mint Tissue Papers ofrece elegancia y sofisticación con diseños sin interrupciones, tamaño generoso de 35x35 cm y calidad premium de 28gsm. Cada paquete incluye tres papeles, brindando un valor excepcional para proyectos creativos. A diferencia de Mint Decoupage Papers, son especializados y versátiles para envolver regalos y hacer tarjetas.",
    selected: false,
  },
  {
    id: 2,
    name: "Distressed Tile - Mint Papel de seda ",
    price: 21.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/5i42kvf36lmveel84u67s/distressedtile-5000x.jpg?rlkey=q0pzv7t358lyuicd2itckwt10&st=4l0r5fe3&dl=0",
    ],
    label: "Papel de seda",
    description:
      "Mint Tissue Papers ofrece elegancia y sofisticación con diseños sin interrupciones, tamaño generoso de 35x35 cm y calidad premium de 28gsm. Cada paquete incluye tres papeles, brindando un valor excepcional para proyectos creativos. A diferencia de Mint Decoupage Papers, son especializados y versátiles para envolver regalos y hacer tarjetas.",
    selected: false,
  },
  {
    id: 3,
    name: "Green Leaves - Mint Papel de seda",
    price: 21.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/3lojupyg9ulejevnh10qb/untitleddesign-5000x-2.jpg?rlkey=wj8cyv3dfdxnxsilxvtbb0hlv&st=kk4ckyie&dl=0",
    ],
    label: "Papel de seda",
    description:
      "Mint Tissue Papers ofrece elegancia y sofisticación con diseños sin interrupciones, tamaño generoso de 35x35 cm y calidad premium de 28gsm. Cada paquete incluye tres papeles, brindando un valor excepcional para proyectos creativos. A diferencia de Mint Decoupage Papers, son especializados y versátiles para envolver regalos y hacer tarjetas.",
    selected: false,
  },
  {
    id: 4,
    name: "Lace - Mint Papel de seda",
    price: 21.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/rjbgrg6gzui3s43brelbq/lace-2048x.jpg?rlkey=usl068uc4b3vcv3qf9qweqxnr&st=lyw379bd&dl=0",
    ],
    label: "Papel de seda",
    description:
      "Mint Tissue Papers ofrece elegancia y sofisticación con diseños sin interrupciones, tamaño generoso de 35x35 cm y calidad premium de 28gsm. Cada paquete incluye tres papeles, brindando un valor excepcional para proyectos creativos. A diferencia de Mint Decoupage Papers, son especializados y versátiles para envolver regalos y hacer tarjetas.",
    selected: false,
  },
  {
    id: 5,
    name: "Lemons - Mint Papel de seda",
    price: 21.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/dcxjmniqq8hzcxa1a11o9/lemons-5000x.jpg?rlkey=5p75yz17g54ciniew2qn6fsj3&st=ahfuxch7&dl=0",
    ],
    label: "Papel de seda",
    description:
      "Mint Tissue Papers ofrece elegancia y sofisticación con diseños sin interrupciones, tamaño generoso de 35x35 cm y calidad premium de 28gsm. Cada paquete incluye tres papeles, brindando un valor excepcional para proyectos creativos. A diferencia de Mint Decoupage Papers, son especializados y versátiles para envolver regalos y hacer tarjetas.",
    selected: false,
  },
  {
    id: 6,
    name: "Moroccan Tile - Mint Papel de seda",
    price: 21.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/wjj4v8fvir0b65hkpzo16/untitleddesign-85-5000x.png?rlkey=c53918h1lksjj9qjnv7l0cv0r&st=dq2vwvfc&dl=0",
    ],
    label: "Papel de seda",
    description:
      "Mint Tissue Papers ofrece elegancia y sofisticación con diseños sin interrupciones, tamaño generoso de 35x35 cm y calidad premium de 28gsm. Cada paquete incluye tres papeles, brindando un valor excepcional para proyectos creativos. A diferencia de Mint Decoupage Papers, son especializados y versátiles para envolver regalos y hacer tarjetas.",
    selected: false,
  },
  {
    id: 7,
    name: "Pastel Florals - Mint Papel de seda",
    price: 21.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/tpami207h9fs68h1ewt4m/pastelflorals-2048x.jpg?rlkey=ci22rrjovg6ub7o99aiy9b7xe&st=gs9frtv6&dl=0",
    ],
    label: "Papel de seda",
    description:
      "Mint Tissue Papers ofrece elegancia y sofisticación con diseños sin interrupciones, tamaño generoso de 35x35 cm y calidad premium de 28gsm. Cada paquete incluye tres papeles, brindando un valor excepcional para proyectos creativos. A diferencia de Mint Decoupage Papers, son especializados y versátiles para envolver regalos y hacer tarjetas.",
    selected: false,
  },
  {
    id: 8,
    name: "Pink Peacocks - Mint Papel de seda",
    price: 21.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/xe8on47oj0b8sig25d8ed/pinkpeacocks-5000x.jpg?rlkey=qfjp3vyf0biqvkq0ljs1yyh3j&st=x9lqsrca&dl=0",
    ],
    label: "Papel de seda",
    description:
      "Mint Tissue Papers ofrece elegancia y sofisticación con diseños sin interrupciones, tamaño generoso de 35x35 cm y calidad premium de 28gsm. Cada paquete incluye tres papeles, brindando un valor excepcional para proyectos creativos. A diferencia de Mint Decoupage Papers, son especializados y versátiles para envolver regalos y hacer tarjetas.",
    selected: false,
  },
  {
    id: 9,
    name: "White Flower - Mint Papel de seda",
    price: 21.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/bciv1ehbbum0r11fpmpag/untitleddesign-83-2048x.png?rlkey=5fv1n72oaqdjd1mzbqdhyqaq7&st=4j9bi8x7&dl=0",
    ],
    label: "Papel de seda",
    description:
      "Mint Tissue Papers ofrece elegancia y sofisticación con diseños sin interrupciones, tamaño generoso de 35x35 cm y calidad premium de 28gsm. Cada paquete incluye tres papeles, brindando un valor excepcional para proyectos creativos. A diferencia de Mint Decoupage Papers, son especializados y versátiles para envolver regalos y hacer tarjetas.",
    selected: false,
  },
  {
    id: 10,
    name: "Yellow Chinoiserie - Mint Papel de seda",
    price: 21.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/sl93t7x889s6lu5yiuwss/yellow-chinoiserie.jpg?rlkey=yb90r4ys0ft941ev785igrlan&st=okpjp7f6&dl=0",
    ],
    label: "Papel de seda",
    description:
      "Mint Tissue Papers ofrece elegancia y sofisticación con diseños sin interrupciones, tamaño generoso de 35x35 cm y calidad premium de 28gsm. Cada paquete incluye tres papeles, brindando un valor excepcional para proyectos creativos. A diferencia de Mint Decoupage Papers, son especializados y versátiles para envolver regalos y hacer tarjetas.",
    selected: false,
  },
  {
    id: 11,
    name: "A peacock pair - Papel para decoupage - A1 ",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/yavr024he2xjvpbhxjmso/img-7536-1-1.jpg?rlkey=j6olengiku2keoa7j8xgilmjg&st=rllordkq&dl=0",
    ],
    label: "A1",
    description:
      "Lanzados el 10 de noviembre de 2023, los papeles de decoupage MINT están diseñados para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles buscan convertir tus proyectos en obras de arte. Se incluyen instrucciones detalladas, y se recomienda usar pegamento Decopatch decoupage.",
    selected: false,
  },
  {
    id: 12,
    name: "A peacock pair - Papel para decoupage - A3 ",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/yavr024he2xjvpbhxjmso/img-7536-1-1.jpg?rlkey=j6olengiku2keoa7j8xgilmjg&st=rllordkq&dl=0",
    ],
    label: "A3",
    description:
      "Lanzados el 10 de noviembre de 2023, los papeles de decoupage MINT están diseñados para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles buscan convertir tus proyectos en obras de arte. Se incluyen instrucciones detalladas, y se recomienda usar pegamento Decopatch decoupage.",
    selected: false,
  },
  {
    id: 13,
    name: "A Vintage Christmas - Papel para decoupage - A1 ",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/eisxmalv83qeosf7gwkcm/img-7533.jpg?rlkey=fbp8wo1c3iku9omaqw8o1g613&st=rrkakpzl&dl=0",
    ],
    label: "A1",
    description:
      "Lanzados el 10 de noviembre de 2023, los papeles de decoupage MINT están diseñados para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles buscan convertir tus proyectos en obras de arte. Se incluyen instrucciones detalladas, y se recomienda usar pegamento Decopatch decoupage.",
    selected: false,
  },
  {
    id: 14,
    name: "A Vintage Christmas - Papel para decoupage - A3 ",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/eisxmalv83qeosf7gwkcm/img-7533.jpg?rlkey=fbp8wo1c3iku9omaqw8o1g613&st=rrkakpzl&dl=0",
    ],
    label: "A3",
    description:
      "Lanzados el 10 de noviembre de 2023, los papeles de decoupage MINT están diseñados para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles buscan convertir tus proyectos en obras de arte. Se incluyen instrucciones detalladas, y se recomienda usar pegamento Decopatch decoupage.",
    selected: false,
  },
  {
    id: 15,
    name: "Octopus - Papel para decoupage - A1 ",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/04o1pai08fjid4o4jj00z/img-7532.jpg?rlkey=i7lq5sk7eapvzoov7lidkxe7c&st=3ysjb7e8&dl=0",
    ],
    label: "A1",
    description:
      "Lanzados el 10 de noviembre de 2023, los papeles de decoupage MINT están diseñados para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles buscan convertir tus proyectos en obras de arte. Se incluyen instrucciones detalladas, y se recomienda usar pegamento Decopatch decoupage.",
    selected: false,
  },
  {
    id: 16,
    name: "Octopus - Papel para decoupage - A3 ",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/04o1pai08fjid4o4jj00z/img-7532.jpg?rlkey=i7lq5sk7eapvzoov7lidkxe7c&st=3ysjb7e8&dl=0",
    ],
    label: "A3",
    description:
      "Lanzados el 10 de noviembre de 2023, los papeles de decoupage MINT están diseñados para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles buscan convertir tus proyectos en obras de arte. Se incluyen instrucciones detalladas, y se recomienda usar pegamento Decopatch decoupage.",
    selected: false,
  },
  {
    id: 17,
    name: "Romantic Roses - Papel para decoupage - A1 ",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/5kbniy3jh1s6mvjlbsjgv/img-7537-1.jpg?rlkey=gx6s9wy84voamznzqgxedzmjh&st=usyvwj2u&dl=0",
    ],
    label: "A1",
    description:
      "Lanzados el 10 de noviembre de 2023, los papeles de decoupage MINT están diseñados para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles buscan convertir tus proyectos en obras de arte. Se incluyen instrucciones detalladas, y se recomienda usar pegamento Decopatch decoupage.",
    selected: false,
  },
  {
    id: 18,
    name: "Romantic Roses - Papel para decoupage - A3 ",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/5kbniy3jh1s6mvjlbsjgv/img-7537-1.jpg?rlkey=gx6s9wy84voamznzqgxedzmjh&st=usyvwj2u&dl=0",
    ],
    label: "A3",
    description:
      "Lanzados el 10 de noviembre de 2023, los papeles de decoupage MINT están diseñados para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles buscan convertir tus proyectos en obras de arte. Se incluyen instrucciones detalladas, y se recomienda usar pegamento Decopatch decoupage.",
    selected: false,
  },
  {
    id: 19,
    name: "Santa Claus - Papel para decoupage - A1 ",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/62qjgh8nmk5lf30u053fm/img-7534-1.jpg?rlkey=ma3i0usrl3lu14u6quzvxjypz&st=pjt3huhn&dl=0",
    ],
    label: "A1",
    description:
      "Lanzados el 10 de noviembre de 2023, los papeles de decoupage MINT están diseñados para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles buscan convertir tus proyectos en obras de arte. Se incluyen instrucciones detalladas, y se recomienda usar pegamento Decopatch decoupage.",
    selected: false,
  },
  {
    id: 20,
    name: "Santa Claus - Papel para decoupage - A3 ",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/62qjgh8nmk5lf30u053fm/img-7534-1.jpg?rlkey=ma3i0usrl3lu14u6quzvxjypz&st=pjt3huhn&dl=0",
    ],
    label: "A3",
    description:
      "Lanzados el 10 de noviembre de 2023, los papeles de decoupage MINT están diseñados para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles buscan convertir tus proyectos en obras de arte. Se incluyen instrucciones detalladas, y se recomienda usar pegamento Decopatch decoupage.",
    selected: false,
  },
  {
    id: 21,
    name: "Santa's Sleigh - Papel para decoupage - A1 ",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/o7dv675p0asjpi3aaxudy/img-7535-1.jpg?rlkey=ejwf92lggdl27glumal7pib8e&st=lmjd56sh&dl=0",
    ],
    label: "A1",
    description:
      "Lanzados el 10 de noviembre de 2023, los papeles de decoupage MINT están diseñados para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles buscan convertir tus proyectos en obras de arte. Se incluyen instrucciones detalladas, y se recomienda usar pegamento Decopatch decoupage.",
    selected: false,
  },
  {
    id: 22,
    name: "Santa's Sleigh - Papel para decoupage - A3 ",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/o7dv675p0asjpi3aaxudy/img-7535-1.jpg?rlkey=ejwf92lggdl27glumal7pib8e&st=lmjd56sh&dl=0",
    ],
    label: "A3",
    description:
      "Lanzados el 10 de noviembre de 2023, los papeles de decoupage MINT están diseñados para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles buscan convertir tus proyectos en obras de arte. Se incluyen instrucciones detalladas, y se recomienda usar pegamento Decopatch decoupage.",
    selected: false,
  },
  {
    id: 23,
    name: "Still Life - Papel para decoupage - A1 ",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/7nubchkp57v3qwlcdlbxp/img-7538-1.jpg?rlkey=qwcherdigu5qvyeq6k1t5kcmv&st=a0ahigft&dl=0",
    ],
    label: "A1",
    description:
      "Lanzados el 10 de noviembre de 2023, los papeles de decoupage MINT están diseñados para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles buscan convertir tus proyectos en obras de arte. Se incluyen instrucciones detalladas, y se recomienda usar pegamento Decopatch decoupage.",
    selected: false,
  },
  {
    id: 24,
    name: "Still Life - Papel para decoupage - A3 ",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/7nubchkp57v3qwlcdlbxp/img-7538-1.jpg?rlkey=qwcherdigu5qvyeq6k1t5kcmv&st=a0ahigft&dl=0",
    ],
    label: "A3",
    description:
      "Lanzados el 10 de noviembre de 2023, los papeles de decoupage MINT están diseñados para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles buscan convertir tus proyectos en obras de arte. Se incluyen instrucciones detalladas, y se recomienda usar pegamento Decopatch decoupage.",
    selected: false,
  },
  {
    id: 25,
    name: "Air Ballons - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/a2ppd5iktd6wv1epq9glx/balloons-edited-edcd6b5f-3617-4498-8172-3dfa630e66cd-2048x.jpg?rlkey=vrkhhmoi57t6fnmqnw27hapyu&st=u19z54m8&dl=0",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 26,
    name: "Air Ballons - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/a2ppd5iktd6wv1epq9glx/balloons-edited-edcd6b5f-3617-4498-8172-3dfa630e66cd-2048x.jpg?rlkey=vrkhhmoi57t6fnmqnw27hapyu&st=u19z54m8&dl=0",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 27,
    name: "Angel - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/z9wnueqmwro8psqu89msu/angelmin-edited-2048x.jpg?rlkey=o4kgr08fgmnpfaih2er2qukps&st=k024o49s&dl=0",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 28,
    name: "Angel - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/z9wnueqmwro8psqu89msu/angelmin-edited-2048x.jpg?rlkey=o4kgr08fgmnpfaih2er2qukps&st=k024o49s&dl=0",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 29,
    name: "Autumn - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/ldhwl4ojyhv1rhgfrpfzn/autumn-edited-5000x.jpg?rlkey=iohvq72z7wvibzcd5u7qgrwos&st=62zr59y4&dl=0",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 30,
    name: "Autumn - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/ldhwl4ojyhv1rhgfrpfzn/autumn-edited-5000x.jpg?rlkey=iohvq72z7wvibzcd5u7qgrwos&st=62zr59y4&dl=0",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 31,
    name: "Baroque Flowers - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/03qyzg7q3r2kxvgu9ayjn/366049144-661542616010101-6498324224375578659-n-2.jpg?rlkey=54vdmzfr0awwqahtface7bf2n&st=icrwtcvh&dl=0",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 32,
    name: "Baroque Flowers - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/03qyzg7q3r2kxvgu9ayjn/366049144-661542616010101-6498324224375578659-n-2.jpg?rlkey=54vdmzfr0awwqahtface7bf2n&st=icrwtcvh&dl=0",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 33,
    name: "Beautiful Woman in Gold - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/vy4hszr5v5raeret4eo8t/beautifulwomaningold-edited-5000x.jpg?rlkey=dzejgw0j7weynil9c9ow0h8os&st=cl04wepm&dl=0",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 34,
    name: "Beautiful Woman in Gold - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/vy4hszr5v5raeret4eo8t/beautifulwomaningold-edited-5000x.jpg?rlkey=dzejgw0j7weynil9c9ow0h8os&st=cl04wepm&dl=0",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 35,
    name: "Black Widow - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/yae54wpe91gjmphnwn9ir/366056021-661542639343432-450530031615092027-n.jpg?rlkey=epjhtnjfrpry76aqco4567j2u&st=byprhxh5&dl=0",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 36,
    name: "Black Widow - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/yae54wpe91gjmphnwn9ir/366056021-661542639343432-450530031615092027-n.jpg?rlkey=epjhtnjfrpry76aqco4567j2u&st=byprhxh5&dl=0",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 37,
    name: "Blue Fish - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/fjyyjbulyxnxto6ky7y7g/bluefish-edited-2048x-1.jpg?rlkey=mmcezee8wj28bk078xcjy1fzv&st=52rfo0tl&dl=0",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 38,
    name: "Blue Fish - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/fjyyjbulyxnxto6ky7y7g/bluefish-edited-2048x-1.jpg?rlkey=mmcezee8wj28bk078xcjy1fzv&st=52rfo0tl&dl=0",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 39,
    name: "Coastal Blue - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/u179b2iyxdblzt1h23078/coastalbluemint-edited-2048x.jpg?rlkey=e2q71y8vamf31tz013vawapwc&st=xhr9mfgl&dl=0",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 40,
    name: "Coastal Blue - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/u179b2iyxdblzt1h23078/coastalbluemint-edited-2048x.jpg?rlkey=e2q71y8vamf31tz013vawapwc&st=xhr9mfgl&dl=0",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
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
    name: "David - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/w3m5eo05e39flwn3cmm6f/david-0c84143d-8ede-4e1a-8f94-addf9ef90943-2048x.jpg?rlkey=ahi2yuytgcbvo80jmk7k9i0hq&st=2iqobb8l&dl=0",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 44,
    name: "David - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/w3m5eo05e39flwn3cmm6f/david-0c84143d-8ede-4e1a-8f94-addf9ef90943-2048x.jpg?rlkey=ahi2yuytgcbvo80jmk7k9i0hq&st=2iqobb8l&dl=0",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 45,
    name: "Fairy Princess - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/2qwusmgsn0p2yzaci4htl/366055935-661542689343427-1532617201355742453-n-1.jpg?rlkey=ytw4lnicexawsu37jco012a1v&st=nu32shea&dl=0",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 46,
    name: "Fairy Princess - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/2qwusmgsn0p2yzaci4htl/366055935-661542689343427-1532617201355742453-n-1.jpg?rlkey=ytw4lnicexawsu37jco012a1v&st=nu32shea&dl=0",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 47,
    name: "Fairy Queen - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/h9bx8xkz3kapfvfb69ixp/fairyqueen-5000x-1.jpg?rlkey=5ol0r1qmxdlk7nalb17hblf74&st=63k8f2l0&dl=0",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 48,
    name: "Fairy Queen - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/h9bx8xkz3kapfvfb69ixp/fairyqueen-5000x-1.jpg?rlkey=5ol0r1qmxdlk7nalb17hblf74&st=63k8f2l0&dl=0",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 49,
    name: "Ferris Wheel - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/0tztoiaxt8ghybz4t3h7h/ferriswheel-5000x-1.jpg?rlkey=xwc8q89qd54lg3k9p37ct5q1v&st=pjjofnm8&dl=0",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 50,
    name: "Ferris Wheel - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/0tztoiaxt8ghybz4t3h7h/ferriswheel-5000x-1.jpg?rlkey=xwc8q89qd54lg3k9p37ct5q1v&st=pjjofnm8&dl=0",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 51,
    name: "Field of Mauve - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/we0rqs859sz4ct8s9wbrh/366014537-661542776010085-3766395476317488490-n-1.jpg?rlkey=mr1dsgt87v5mvu5kc0i75z8y0&st=0t7819f8&dl=0",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 52,
    name: "Field of Mauve - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/we0rqs859sz4ct8s9wbrh/366014537-661542776010085-3766395476317488490-n-1.jpg?rlkey=mr1dsgt87v5mvu5kc0i75z8y0&st=0t7819f8&dl=0",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 53,
    name: "Fishing for ideas - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/3hib3v5m4e453ad8ms7zw/fishingforideas-3c2819d0-60ec-4844-98dd-7cc187af39b3-5000x-1.jpg?rlkey=e49wmujhlpzpmjzvfveutl92x&st=eu70sybt&dl=0",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 54,
    name: "Fishing for ideas - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/3hib3v5m4e453ad8ms7zw/fishingforideas-3c2819d0-60ec-4844-98dd-7cc187af39b3-5000x-1.jpg?rlkey=e49wmujhlpzpmjzvfveutl92x&st=eu70sybt&dl=0",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 55,
    name: "Flamingo - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/isudpy1whntt911kqfhxu/flamingomintdecoupagepaper-2048x-1.jpg?rlkey=yl1ruw0944f2xg1eh16occz7o&st=0p68xhgn&dl=0",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 56,
    name: "Flamingo - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/isudpy1whntt911kqfhxu/flamingomintdecoupagepaper-2048x-1.jpg?rlkey=yl1ruw0944f2xg1eh16occz7o&st=0p68xhgn&dl=0",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 57,
    name: "Flying birds - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/ci5znx3ykhk908x9b7nyn/flyingbirds-5000x.jpg?rlkey=rlp6fntaoonn1zwx3dgexwkj2&st=9cw86uga&dl=0",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 58,
    name: "Flying birds - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/ci5znx3ykhk908x9b7nyn/flyingbirds-5000x.jpg?rlkey=rlp6fntaoonn1zwx3dgexwkj2&st=9cw86uga&dl=0",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 59,
    name: "Foil Bird - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/86qn92fyjxbqkq3an7jx2/foilbird-700ae20b-dd38-4919-8768-fea3427bc5ea-5000x-1.jpg?rlkey=ul6j9sjg28foxg1sya62pxnj3&st=uq56u11j&dl=0",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 60,
    name: "Foil Bird - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/86qn92fyjxbqkq3an7jx2/foilbird-700ae20b-dd38-4919-8768-fea3427bc5ea-5000x-1.jpg?rlkey=ul6j9sjg28foxg1sya62pxnj3&st=uq56u11j&dl=0",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 61,
    name: "Forrest Fantasy - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/cwpu2bangx2n8xvziud1g/fantasyforest-2048x-1.jpg?rlkey=o6fkq0g2qkqm3ipkqq18q5tci&st=vsdp9gfg&dl=0",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 62,
    name: "Forrest Fantasy - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/cwpu2bangx2n8xvziud1g/fantasyforest-2048x-1.jpg?rlkey=o6fkq0g2qkqm3ipkqq18q5tci&st=vsdp9gfg&dl=0",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 63,
    name: "Frida - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/rrt05qb2id7sp70o5ync2/frida-2048x-1.jpg?rlkey=2bbpc8ifqpqh8gkdqlxqus87v&st=n8eo15fj&dl=0",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 64,
    name: "Frida - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/rrt05qb2id7sp70o5ync2/frida-2048x-1.jpg?rlkey=2bbpc8ifqpqh8gkdqlxqus87v&st=n8eo15fj&dl=0",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 65,
    name: "Future Fox - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/epkjhmmaq8z7a08ic62pf/f0d09cd9-41e4-48f8-b183-31429678db59-1-1.jpg?rlkey=507bavxoiuss2gyh6fib71fpg&st=8brwawu3&dl=0",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 66,
    name: "Future Fox - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/epkjhmmaq8z7a08ic62pf/f0d09cd9-41e4-48f8-b183-31429678db59-1-1.jpg?rlkey=507bavxoiuss2gyh6fib71fpg&st=8brwawu3&dl=0",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 67,
    name: "Geisha - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/d0rjtiklzgryo0iopnuq1/geishamint-5000x.jpg?rlkey=iv0696acs381ehsbheefv7h85&st=oyxk1ovu&dl=0",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 68,
    name: "Geisha - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/d0rjtiklzgryo0iopnuq1/geishamint-5000x.jpg?rlkey=iv0696acs381ehsbheefv7h85&st=oyxk1ovu&dl=0",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  // segunda pagina
  {
    id: 69,
    name: "Ginger jars - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/6joypbt3o3pq1hwf2xvnl/gingerjars-2048x-1.jpg?rlkey=346ylkv9k8y7dprm6zy5dzcr6&st=vw5eptab&dl=0",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 70,
    name: "Ginger jars - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/6joypbt3o3pq1hwf2xvnl/gingerjars-2048x-1.jpg?rlkey=346ylkv9k8y7dprm6zy5dzcr6&st=vw5eptab&dl=0",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 71,
    name: "Girl on a Swing - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/rg5x3cu2kq7ro1ftdt1kt/girlonaswing-600x.jpg?rlkey=nbtx6yvj24iczhzar0pls0bcl&st=oa7cjhji&dl=0",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 72,
    name: "Girl on a Swing - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/rg5x3cu2kq7ro1ftdt1kt/girlonaswing-600x.jpg?rlkey=nbtx6yvj24iczhzar0pls0bcl&st=oa7cjhji&dl=0",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 73,
    name: "Girl with a Lute - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/g6kmsy56f4mvqt9nr0c1m/girlwithalute-2048x-1.jpg?rlkey=4og1gzwguadkwdeqfkl17gkww&st=jx9tq03l&dl=0",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 74,
    name: "Girl with a Lute - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/g6kmsy56f4mvqt9nr0c1m/girlwithalute-2048x-1.jpg?rlkey=4og1gzwguadkwdeqfkl17gkww&st=jx9tq03l&dl=0",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 75,
    name: "Golden Bloom 1 - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/mxt4mdxajxha04xxppasu/366058725-661542446010118-8595553839926230971-n-1.jpg?rlkey=3j8q05t1nvnqb31lwkgaixs2a&st=f2o4ei2w&dl=0",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 76,
    name: "Golden Bloom 1 - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/mxt4mdxajxha04xxppasu/366058725-661542446010118-8595553839926230971-n-1.jpg?rlkey=3j8q05t1nvnqb31lwkgaixs2a&st=f2o4ei2w&dl=0",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 77,
    name: "Golden Bloom 2 - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/5p2yj8fq31wdl8d3jszbb/366072301-661542366010126-1622565532908994108-n-1.jpg?rlkey=3geqhwsfyknrpimvsttlc9uvd&st=nzsb63t7&dl=0",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 78,
    name: "Golden Bloom 2 - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/5p2yj8fq31wdl8d3jszbb/366072301-661542366010126-1622565532908994108-n-1.jpg?rlkey=3geqhwsfyknrpimvsttlc9uvd&st=nzsb63t7&dl=0",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 79,
    name: "Gumnuts - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/vjca2fw8g3vyh0xmc1qq8/gumnuts-2048x-1.jpg?rlkey=czrfwmhyh86oli2sg2joysub4&st=boy648x8&dl=0",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 80,
    name: "Gumnuts - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/vjca2fw8g3vyh0xmc1qq8/gumnuts-2048x-1.jpg?rlkey=czrfwmhyh86oli2sg2joysub4&st=boy648x8&dl=0",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 81,
    name: "Haunted House - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/cqvut438022t8rqpooakq/366056924-661542512676778-1741246542987175155-n-1.jpg?rlkey=sw2tzlstfsx86o4ttlo9bg9s5&st=n8d9bm74&dl=0",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 82,
    name: "Haunted House - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/cqvut438022t8rqpooakq/366056924-661542512676778-1741246542987175155-n-1.jpg?rlkey=sw2tzlstfsx86o4ttlo9bg9s5&st=n8d9bm74&dl=0",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 83,
    name: "Haunted House 2 - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/29oxqhvywop6k6w3slch5/366024500-661542432676786-7609682456286831096-n-1.jpg?rlkey=puexv0nthh9t3j2blcnchi1iw&st=j8ewg1yl&dl=0",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 84,
    name: "Haunted House 2 - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/29oxqhvywop6k6w3slch5/366024500-661542432676786-7609682456286831096-n-1.jpg?rlkey=puexv0nthh9t3j2blcnchi1iw&st=j8ewg1yl&dl=0",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 85,
    name: "Herd of Horses - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/3zg8eyhvil91ubfnmn88c/herdofhorses-2048x-1.jpg?rlkey=cvdqlvodtbt1p9plovcku9fpd&st=ho3rwlgi&dl=0",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 86,
    name: "Herd of Horses - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/3zg8eyhvil91ubfnmn88c/herdofhorses-2048x-1.jpg?rlkey=cvdqlvodtbt1p9plovcku9fpd&st=ho3rwlgi&dl=0",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 87,
    name: "High Wire - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/7kqajhn6jokqj38q3y2an/highwire-5000x.jpg?rlkey=v4r4bd6lemhx87zl9cv9d6g6b&st=nljacurt&dl=0",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 88,
    name: "High Wire - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/7kqajhn6jokqj38q3y2an/highwire-5000x.jpg?rlkey=v4r4bd6lemhx87zl9cv9d6g6b&st=nljacurt&dl=0",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 89,
    name: "Ice Skating - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/jf54mxqa3g829fbfpd2me/iceskating-a94dc5cb-b4fd-486a-b45f-6a05047bb755-2048x-1.jpg?rlkey=2v3jjj2do74zb8big1zsv8gwj&st=tb8a71ym&dl=0",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 90,
    name: "Ice Skating - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/jf54mxqa3g829fbfpd2me/iceskating-a94dc5cb-b4fd-486a-b45f-6a05047bb755-2048x-1.jpg?rlkey=2v3jjj2do74zb8big1zsv8gwj&st=tb8a71ym&dl=0",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 91,
    name: "Istanbul - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/0a9r1loz7mw18v30i2mn3/ista1-1.jpg?rlkey=dmxy1mommzcxjgc6ab713tzrz&st=h09d8rl8&dl=0",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 92,
    name: "Istanbul - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/0a9r1loz7mw18v30i2mn3/ista1-1.jpg?rlkey=dmxy1mommzcxjgc6ab713tzrz&st=h09d8rl8&dl=0",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 93,
    name: "Jersey - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/7ubmzyr5p2n2upr8aqq20/jersey-91dd793e-8dda-4d0b-8987-ce201aeae11b-5000x.jpg?rlkey=67xlygxzmpz2zfetjlumh5093&st=jp6nl8pc&dl=0",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 94,
    name: "Jersey - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/7ubmzyr5p2n2upr8aqq20/jersey-91dd793e-8dda-4d0b-8987-ce201aeae11b-5000x.jpg?rlkey=67xlygxzmpz2zfetjlumh5093&st=jp6nl8pc&dl=0",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 95,
    name: "Karen's Technicolour Bouquet - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/u1xle9lnadv9ld0lzn6lp/karen-stechnicolourbouquet-89863ae0-db0a-4bcc-873c-d742cc6ca.jpg?rlkey=drz7hzxaf8v1cbmjcgn8x5a9v&st=my0wgz4y&dl=0",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 96,
    name: "Karen's Technicolour Bouquet - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/u1xle9lnadv9ld0lzn6lp/karen-stechnicolourbouquet-89863ae0-db0a-4bcc-873c-d742cc6ca.jpg?rlkey=drz7hzxaf8v1cbmjcgn8x5a9v&st=my0wgz4y&dl=0",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 97,
    name: "Lady and the red Car - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/9d7whzq4ian9yxheccdlm/ladyandtheredcar-2048x.jpg?rlkey=y5rgdeus19bcicmtiyjwdzxqt&st=e1bet742&dl=0",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 98,
    name: "Lady and the red Car - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/9d7whzq4ian9yxheccdlm/ladyandtheredcar-2048x.jpg?rlkey=y5rgdeus19bcicmtiyjwdzxqt&st=e1bet742&dl=0",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 99,
    name: "Lady with a Parasol - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/vgo1itj3fe578tg6wtoog/ladywithaparasol-5000x-1.jpg?rlkey=e0rupvgohc7ciw8bim4my8au1&st=8hmqyd1b&dl=0",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 100,
    name: "Lady with a Parasol - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/vgo1itj3fe578tg6wtoog/ladywithaparasol-5000x-1.jpg?rlkey=e0rupvgohc7ciw8bim4my8au1&st=8hmqyd1b&dl=0",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 101,
    name: "Leonardo's Lady - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/65597um0131yqvvscw7w8/leonardo-slady-600x-1.jpg?rlkey=gfmn7lucznw64o6xnkelo4wr1&st=ydcq04vc&dl=0",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 102,
    name: "Leonardo's Lady - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/65597um0131yqvvscw7w8/leonardo-slady-600x-1.jpg?rlkey=gfmn7lucznw64o6xnkelo4wr1&st=ydcq04vc&dl=0",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 103,
    name: "Madame Le Fevre - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/rypf0utjx6zu9ma6cgfsb/madamelefevre-2048x-1.jpg?rlkey=kgq8bsolhpib8hcugnq39worz&st=m04szfru&dl=0",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 104,
    name: "Madame Le Fevre - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/rypf0utjx6zu9ma6cgfsb/madamelefevre-2048x-1.jpg?rlkey=kgq8bsolhpib8hcugnq39worz&st=m04szfru&dl=0",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 105,
    name: "Majestic Horses - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/o2m7lfivulrmrc9h9i9ec/366217108-661542319343464-3394953917293780457-n-1.jpg?rlkey=3n10odxkhm3pbwhvzi4s4oznn&st=l4d2st4h&dl=0",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 106,
    name: "Majestic Horses - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/o2m7lfivulrmrc9h9i9ec/366217108-661542319343464-3394953917293780457-n-1.jpg?rlkey=3n10odxkhm3pbwhvzi4s4oznn&st=l4d2st4h&dl=0",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 107,
    name: "Milkmaid - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/r5lk650zbcf1sdxy3hpso/milkmaid-600x-1.jpg?rlkey=5hjd9y029menmnyawrb2rp6vz&st=hss66450&dl=0",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 108,
    name: "Milkmaid - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/r5lk650zbcf1sdxy3hpso/milkmaid-600x-1.jpg?rlkey=5hjd9y029menmnyawrb2rp6vz&st=hss66450&dl=0",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 109,
    name: "Moody Florals - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/3zr4435838fgjtn43dnpv/moodyflorals-f72f3f0d-4427-4921-aaa9-ab4f086f6f39-5000x-1.jpg?rlkey=ouboehrldmhrnlpsfulj7xtqf&st=2td6ji9x&dl=0",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 110,
    name: "Moody Florals - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/3zr4435838fgjtn43dnpv/moodyflorals-f72f3f0d-4427-4921-aaa9-ab4f086f6f39-5000x-1.jpg?rlkey=ouboehrldmhrnlpsfulj7xtqf&st=2td6ji9x&dl=0",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 111,
    name: "Moody Florals II - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/qdhpkg434xjo4x6rq14n2/moodyflorals2-2048x.jpg?rlkey=uey0mfc4r9kb13i5ne7qf5jhb&st=ks45lhrd&dl=0",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 112,
    name: "Moody Florals II - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/qdhpkg434xjo4x6rq14n2/moodyflorals2-2048x.jpg?rlkey=uey0mfc4r9kb13i5ne7qf5jhb&st=ks45lhrd&dl=0",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 113,
    name: "Nanas's Pearls - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/f2oc25io90cead98li6kl/nannaspearls-5000x-1.jpg?rlkey=vxdzp7h6exwxlqbh7pmoccu6c&st=q0a5e80s&dl=0",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 114,
    name: "Nanas's Pearls - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/f2oc25io90cead98li6kl/nannaspearls-5000x-1.jpg?rlkey=vxdzp7h6exwxlqbh7pmoccu6c&st=q0a5e80s&dl=0",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 115,
    name: "New York - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/xbzavh7kfhccrn7pum2s4/newyork-newyork-5000x-1.jpg?rlkey=1xe8no7f1xzkoy4asys2w9ws2&st=eoaf45zu&dl=0",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 116,
    name: "New York - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/xbzavh7kfhccrn7pum2s4/newyork-newyork-5000x-1.jpg?rlkey=1xe8no7f1xzkoy4asys2w9ws2&st=eoaf45zu&dl=0",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 117,
    name: "Owl - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/t8akwmncnvxibwu1xjnph/owl-5000x-1.jpg?rlkey=76e3y27dyisznxycg0sodt8d4&st=lhym17jm&dl=0",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 118,
    name: "Owl - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/t8akwmncnvxibwu1xjnph/owl-5000x-1.jpg?rlkey=76e3y27dyisznxycg0sodt8d4&st=lhym17jm&dl=0",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 119,
    name: "Palm Trees - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/9nvegyeect8ziyfgnq8xv/palmtrees-5000x-1.jpg?rlkey=vzbl9t9q5uf42neg04ezllm05&st=vuagfnaq&dl=0",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 120,
    name: "Palm Trees - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/9nvegyeect8ziyfgnq8xv/palmtrees-5000x-1.jpg?rlkey=vzbl9t9q5uf42neg04ezllm05&st=vuagfnaq&dl=0",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 121,
    name: "Parrot - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/sxecnh8ep9djv1i421dl6/parrot-5000x-1.jpg?rlkey=l237zh318vog8a6se6ia52cvt&st=4zqkaipw&dl=0",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 122,
    name: "Parrot - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/sxecnh8ep9djv1i421dl6/parrot-5000x-1.jpg?rlkey=l237zh318vog8a6se6ia52cvt&st=4zqkaipw&dl=0",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 123,
    name: "Peacok - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/98i6km1nry42427q2bqol/peacock-5000x-3.jpg?rlkey=dezg9dy5ck163ctofhz46sre8&st=z11icwlx&dl=0",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 124,
    name: "Peacok - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/98i6km1nry42427q2bqol/peacock-5000x-3.jpg?rlkey=dezg9dy5ck163ctofhz46sre8&st=z11icwlx&dl=0",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 125,
    name: "Pensive Girl - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/2m6wutzw2yntvk6frq3jo/pensivegirl-5000x.jpg?rlkey=way40mzw7dqrswmpf0oguclv6&st=mwwzrbpq&dl=0",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 126,
    name: "Pensive Girl - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/2m6wutzw2yntvk6frq3jo/pensivegirl-5000x.jpg?rlkey=way40mzw7dqrswmpf0oguclv6&st=mwwzrbpq&dl=0",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 127,
    name: "Pheasant - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/co63dfpegst62tozjq8u7/pheasant-5000x-1.jpg?rlkey=wawpydx09vk4y2xbmkwb4c6u2&st=n6499ba2&dl=0",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 128,
    name: "Pheasant - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/co63dfpegst62tozjq8u7/pheasant-5000x-1.jpg?rlkey=wawpydx09vk4y2xbmkwb4c6u2&st=n6499ba2&dl=0",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 129,
    name: "Poppies - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/k9a3vocgtog73tnyrfb4f/poppies-43ee5dc8-0b06-4eab-904b-0092c6d9997d-5000x-1.jpg?rlkey=jqygibepwm6sambpzcgipz4l8&st=53j6vv41&dl=0",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 130,
    name: "Poppies - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/k9a3vocgtog73tnyrfb4f/poppies-43ee5dc8-0b06-4eab-904b-0092c6d9997d-5000x-1.jpg?rlkey=jqygibepwm6sambpzcgipz4l8&st=53j6vv41&dl=0",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 131,
    name: "Renaissance Flowers - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/j2c9ehaehe7y3ts5dn8qp/renaissanceflowers-600x-1.jpg?rlkey=uqcieen9387yp4fbwxb8xz183&st=m0va1m7m&dl=0",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 132,
    name: "Renaissance Flowers - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/j2c9ehaehe7y3ts5dn8qp/renaissanceflowers-600x-1.jpg?rlkey=uqcieen9387yp4fbwxb8xz183&st=m0va1m7m&dl=0",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 133,
    name: "Rita - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/0flzjav6qaku01ad1xe10/rita-600x-2.jpg?rlkey=q7vipul1g4n3edt4xswmwf0np&st=w69uzxpo&dl=0",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 134,
    name: "Rita - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/0flzjav6qaku01ad1xe10/rita-600x-2.jpg?rlkey=q7vipul1g4n3edt4xswmwf0np&st=w69uzxpo&dl=0",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 135,
    name: "Road to Louveciennes - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/nxfu45d1ktrn4skl6sjdo/roadtolouveciennes-67acc40c-db4d-4b8d-b3aa-076b9ac6c52c-5000.jpg?rlkey=uw0jeokcou75pembtv2fnn4kz&st=64w94f7o&dl=0",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 136,
    name: "Road to Louveciennes - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/nxfu45d1ktrn4skl6sjdo/roadtolouveciennes-67acc40c-db4d-4b8d-b3aa-076b9ac6c52c-5000.jpg?rlkey=uw0jeokcou75pembtv2fnn4kz&st=64w94f7o&dl=0",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 137,
    name: "Sail Away - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/gojn2hj0wqndpfngqyifv/sailaway-5000x-3.jpg?rlkey=uuy70qvitvulr1w0k4pqa83ss&st=c9a9rgsu&dl=0",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 138,
    name: "Sail Away - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/gojn2hj0wqndpfngqyifv/sailaway-5000x-3.jpg?rlkey=uuy70qvitvulr1w0k4pqa83ss&st=c9a9rgsu&dl=0",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 139,
    name: "Sepia Horses - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/64sgep4hy20lrk6n58dmu/sepiahorses-600x-2.jpg?rlkey=pvi7qg7ygmgzggvijwfsl7qzo&st=fa5hdpvs&dl=0",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 140,
    name: "Sepia Horses - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/64sgep4hy20lrk6n58dmu/sepiahorses-600x-2.jpg?rlkey=pvi7qg7ygmgzggvijwfsl7qzo&st=fa5hdpvs&dl=0",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 141,
    name: "Sepia Tree - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/feh0jsaoecxuhshhzwsw9/sepiatree-600x-3.jpg?rlkey=s43xkgh0nbm8es9b8y55w7kpb&st=kb7s155l&dl=0",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 142,
    name: "Sepia Tree - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/feh0jsaoecxuhshhzwsw9/sepiatree-600x-3.jpg?rlkey=s43xkgh0nbm8es9b8y55w7kpb&st=kb7s155l&dl=0",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 143,
    name: "Siren - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/ncgoj7cwsbyc6ijclg8ou/366004092-661542329343463-7330765569290257936-n.jpg?rlkey=t1cacvsp6zkj6dwhffe2vmgc8&st=e7d4zm85&dl=0",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 144,
    name: "Siren - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/ncgoj7cwsbyc6ijclg8ou/366004092-661542329343463-7330765569290257936-n.jpg?rlkey=t1cacvsp6zkj6dwhffe2vmgc8&st=e7d4zm85&dl=0",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 145,
    name: "Stars & Stripes - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/40xyhegxw6uzr1jzkau1g/stars-stripes-5000x-1.jpg?rlkey=037qg4z89u1ddxapsu8s5cndm&st=3ea4beqy&dl=0",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 146,
    name: "Stars & Stripes - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/40xyhegxw6uzr1jzkau1g/stars-stripes-5000x-1.jpg?rlkey=037qg4z89u1ddxapsu8s5cndm&st=3ea4beqy&dl=0",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 147,
    name: "Study in Black & Green - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/avzz1kem26f8tbap19iss/studyinblack-green-600x-3.jpg?rlkey=5kw4ixxgd9hcy7f3z35qtpi0h&st=nr3f13rd&dl=0",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 148,
    name: "Study in Black & Green - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/avzz1kem26f8tbap19iss/studyinblack-green-600x-3.jpg?rlkey=5kw4ixxgd9hcy7f3z35qtpi0h&st=nr3f13rd&dl=0",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 149,
    name: "Sunflower - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/liu1e6n6c5selltb5dwka/sunflower-5000x.jpg?rlkey=li70wk3yjdcvcql161hi1naga&st=ib922rx0&dl=0",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 150,
    name: "Sunflower - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/liu1e6n6c5selltb5dwka/sunflower-5000x.jpg?rlkey=li70wk3yjdcvcql161hi1naga&st=ib922rx0&dl=0",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 151,
    name: "Tahitian Women - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/8omfbpyvcdv6matvkbj8t/tahitianwomen-600x-2.jpg?rlkey=ffz2woadta41x28ghbl5zvbyb&st=7pbunxie&dl=0",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 152,
    name: "Tahitian Women - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/8omfbpyvcdv6matvkbj8t/tahitianwomen-600x-2.jpg?rlkey=ffz2woadta41x28ghbl5zvbyb&st=7pbunxie&dl=0",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 153,
    name: "Texas Longhorn - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/42435e9ln73poop4xr2ly/texaslonghorn-ef71ed90-b4a2-486b-9623-78e1f90a85f8-5000x-1.jpg?rlkey=zau62dds2ged0iyo08nziouja&st=qv8706z2&dl=0",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 154,
    name: "Texas Longhorn - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/42435e9ln73poop4xr2ly/texaslonghorn-ef71ed90-b4a2-486b-9623-78e1f90a85f8-5000x-1.jpg?rlkey=zau62dds2ged0iyo08nziouja&st=qv8706z2&dl=0",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 155,
    name: "The Tropics - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/8qitzndn9rkgi1vw3lrxi/thetropics-5000x-2.jpg?rlkey=2qlxxweaw0nsba0rj685oe7qm&st=xoji714x&dl=0",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 156,
    name: "The Tropics - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/8qitzndn9rkgi1vw3lrxi/thetropics-5000x-2.jpg?rlkey=2qlxxweaw0nsba0rj685oe7qm&st=xoji714x&dl=0",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 157,
    name: "To the Market - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/un89o9bmik32f6dy2ykyf/tomarket-5000x-1.jpg?rlkey=89ikq317s74n7o4tyzx743tyy&st=to9duhdb&dl=0",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 158,
    name: "To the Market - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/un89o9bmik32f6dy2ykyf/tomarket-5000x-1.jpg?rlkey=89ikq317s74n7o4tyzx743tyy&st=to9duhdb&dl=0",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 159,
    name: "Toucan - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/qf4h8b10q6hdarqlra991/toucan-5000x-1.jpg?rlkey=z59xx8v2l7s12o4yni8sgstin&st=bhyq7ixj&dl=0",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 160,
    name: "Toucan - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/qf4h8b10q6hdarqlra991/toucan-5000x-1.jpg?rlkey=z59xx8v2l7s12o4yni8sgstin&st=bhyq7ixj&dl=0",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 161,
    name: "Turtles Swimming - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/bmrvc68ecuqqpii2p7tlz/turtlesswimming-5000x-1.jpg?rlkey=pnlmsrj7ajw7au9blu09wbkfc&st=omofwg0d&dl=0",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 162,
    name: "Turtles Swimming - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/bmrvc68ecuqqpii2p7tlz/turtlesswimming-5000x-1.jpg?rlkey=pnlmsrj7ajw7au9blu09wbkfc&st=omofwg0d&dl=0",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 163,
    name: "Venice - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/exxijlgy2915kxzpm52hx/venice-5000x.jpg?rlkey=va5rbnxs6g906ncr7ezylof17&st=rt5uu0nk&dl=0",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 164,
    name: "Venice - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/exxijlgy2915kxzpm52hx/venice-5000x.jpg?rlkey=va5rbnxs6g906ncr7ezylof17&st=rt5uu0nk&dl=0",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 165,
    name: "Vintage Red Car - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/0w8u3s903ukyzjov85c87/vintagecar-5000x-1.jpg?rlkey=rqxiu5yp081qxyijerldi4l5v&st=2uzl092o&dl=0",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 166,
    name: "Vintage Red Car - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/0w8u3s903ukyzjov85c87/vintagecar-5000x-1.jpg?rlkey=rqxiu5yp081qxyijerldi4l5v&st=2uzl092o&dl=0",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 167,
    name: "Walking - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/anbjb0s0ox187hoclzqy1/walking-5000x-1.jpg?rlkey=mzc1flgw9yy5ud4bv7opo3ioc&st=v1qq3yt8&dl=0",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 168,
    name: "Walking - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/anbjb0s0ox187hoclzqy1/walking-5000x-1.jpg?rlkey=mzc1flgw9yy5ud4bv7opo3ioc&st=v1qq3yt8&dl=0",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 169,
    name: "Water Lilly - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/iaknpc71qzpm823jgmg4t/366044999-661542572676772-729058036453694559-n.jpg?rlkey=n3x82c3pps3enu8ktb7sm0v7c&st=m755iheh&dl=0",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 170,
    name: "Water Lilly - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/iaknpc71qzpm823jgmg4t/366044999-661542572676772-729058036453694559-n.jpg?rlkey=n3x82c3pps3enu8ktb7sm0v7c&st=m755iheh&dl=0",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 171,
    name: "Waterplay - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/7yfw2vzdah3p40yszxi0h/waterplay-9e3032cd-cde2-4fa8-823f-11ca0776a9b1-600x-1.jpg?rlkey=ewosg3uf4haqqnt1bwqu53xy8&st=kopl72uh&dl=0",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 172,
    name: "Waterplay - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/7yfw2vzdah3p40yszxi0h/waterplay-9e3032cd-cde2-4fa8-823f-11ca0776a9b1-600x-1.jpg?rlkey=ewosg3uf4haqqnt1bwqu53xy8&st=kopl72uh&dl=0",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },

  //Ultima Pagina

  {
    id: 173,
    name: "Wave of Florals - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/b6m1910kbs1nb2xaez24x/366175442-661542739343422-4190398524880257686-n.jpg?rlkey=sgo121x8frv7frfc0roxv7hqm&st=2tkpsqvz&dl=0",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 174,
    name: "Wave of Florals - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/b6m1910kbs1nb2xaez24x/366175442-661542739343422-4190398524880257686-n.jpg?rlkey=sgo121x8frv7frfc0roxv7hqm&st=2tkpsqvz&dl=0",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 175,
    name: "Wheatfields & Cypresses - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/2iveegch8yc0q9r7bdznd/wheatfields-cypresses-600x.jpg?rlkey=aj2bh9by6wtdiu32otq70b883&st=5myvp163&dl=0",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 176,
    name: "Wheatfields & Cypresses - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/2iveegch8yc0q9r7bdznd/wheatfields-cypresses-600x.jpg?rlkey=aj2bh9by6wtdiu32otq70b883&st=5myvp163&dl=0",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 177,
    name: "White Swan - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/d5oojfads9bi3einqx9r9/whiteswan-600x-1.jpg?rlkey=n0mzyk5rpn3iqd1ziqu314a1h&st=oi1pz7d0&dl=0",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 178,
    name: "White Swan - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/d5oojfads9bi3einqx9r9/whiteswan-600x-1.jpg?rlkey=n0mzyk5rpn3iqd1ziqu314a1h&st=oi1pz7d0&dl=0",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
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
    name: "Yes Deer - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/3mdnlo122jn229iidaeeo/yes-deer-395cd874-d9b1-4883-9212-eef1e2c45528-600x-2.jpg?rlkey=52esbsrx4l7netxmken5s03cq&st=l64avca8&dl=0",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 182,
    name: "Yes Deer - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/3mdnlo122jn229iidaeeo/yes-deer-395cd874-d9b1-4883-9212-eef1e2c45528-600x-2.jpg?rlkey=52esbsrx4l7netxmken5s03cq&st=l64avca8&dl=0",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 183,
    name: "Young Girl Reading - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/ovi2klld2i2g9kn2i09w5/younggirlreading-600x.jpg?rlkey=k3492hdb2wpgtq8v6m4ui3a0n&st=hm4josbz&dl=0",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 184,
    name: "Young Girl Reading - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/ovi2klld2i2g9kn2i09w5/younggirlreading-600x.jpg?rlkey=k3492hdb2wpgtq8v6m4ui3a0n&st=hm4josbz&dl=0",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 185,
    name: "Zz Christmas - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/8oxmad7tk9lwhzcw7174f/211647297-1460655024266054-6538681064226336656-n-1.jpg?rlkey=w9dbss3qbij25wza2mu1xvze0&st=omot57ac&dl=0",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 584,
    name: "Oliver Owl - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/nhb5965fmg8b18q6gnfop/Untitleddesign_53_5000x.webp?rlkey=x52cecb18dg821u7l46zwkoqk&st=it4y65hi&dl=0",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 585,
    name: "Oliver Owl - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/nhb5965fmg8b18q6gnfop/Untitleddesign_53_5000x.webp?rlkey=x52cecb18dg821u7l46zwkoqk&st=it4y65hi&dl=0",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 586,
    name: "Leonardo Lion - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/8u8us73iwc3uk4q470owr/Untitleddesign_50_5000x.webp?rlkey=3zpgrq00q0zqwidxpctx2qh9u&st=lpqfqo1t&dl=0",
      "https://mintbymichelle.com/cdn/shop/files/eZyWatermark_17-02-2024_11-09-58-1620pm_5000x.jpg?v=1710811901",
      "https://mintbymichelle.com/cdn/shop/files/eZyWatermark_17-02-2024_11-02-19-8120pm_5000x.jpg?v=1710811901",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 587,
    name: "Leonardo Lion - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/8u8us73iwc3uk4q470owr/Untitleddesign_50_5000x.webp?rlkey=3zpgrq00q0zqwidxpctx2qh9u&st=lpqfqo1t&dl=0",
      "https://mintbymichelle.com/cdn/shop/files/eZyWatermark_17-02-2024_11-09-58-1620pm_5000x.jpg?v=1710811901",
      "https://mintbymichelle.com/cdn/shop/files/eZyWatermark_17-02-2024_11-02-19-8120pm_5000x.jpg?v=1710811901",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 588,
    name: "Shaun Sheep - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/xdadjvdfkc8i465lb3t0w/Untitleddesign_52_2000x.webp?rlkey=d798vrellf7dqjsfnp6ilb72c&st=3lasbay6&dl=0",
      "https://mintbymichelle.com/cdn/shop/files/eZyWatermark_13-02-2024_09-22-23-6400pm_600x.jpg?v=1708342073",
      "https://mintbymichelle.com/cdn/shop/files/PHSZ1912_600x.jpg?v=1708342073",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 589,
    name: "Shaun Sheep - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/xdadjvdfkc8i465lb3t0w/Untitleddesign_52_2000x.webp?rlkey=d798vrellf7dqjsfnp6ilb72c&st=3lasbay6&dl=0",
      "https://mintbymichelle.com/cdn/shop/files/eZyWatermark_13-02-2024_09-22-23-6400pm_600x.jpg?v=1708342073",
      "https://mintbymichelle.com/cdn/shop/files/PHSZ1912_600x.jpg?v=1708342073",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 590,
    name: "Peach Oasis - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/qvcdekca7mutl78nucelt/Untitleddesign_64_2000x.webp?rlkey=v57uxgxcylssjanbrl0ue8rrl&st=rob6pwtm&dl=0",
      "https://mintbymichelle.com/cdn/shop/files/eZy-Watermark_02-04-2024_09-08-29-1890pm_5000x.jpg?v=1712492202",
      "https://mintbymichelle.com/cdn/shop/files/eZy-Watermark_02-04-2024_09-19-05-4540pm_600x.jpg?v=1712492202",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 591,
    name: "Peach Oasis - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/qvcdekca7mutl78nucelt/Untitleddesign_64_2000x.webp?rlkey=v57uxgxcylssjanbrl0ue8rrl&st=rob6pwtm&dl=0",
      "https://mintbymichelle.com/cdn/shop/files/eZy-Watermark_02-04-2024_09-08-29-1890pm_5000x.jpg?v=1712492202",
      "https://mintbymichelle.com/cdn/shop/files/eZy-Watermark_02-04-2024_09-19-05-4540pm_600x.jpg?v=1712492202",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 591,
    name: "Diego Dog - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/tlblhg4sdw5d4vgs1an13/Untitleddesign_54_400x.png?rlkey=q3prqrx3nly3c6nywozn9v4u9&st=o4u0bxjx&dl=0",
      "https://mintbymichelle.com/cdn/shop/files/441024207_885058610301360_5846334835452587743_n_5000x.jpg?v=1715030686",
      "https://mintbymichelle.com/cdn/shop/files/eZyWatermark_17-02-2024_06-09-14-5620pm_5000x.jpg?v=1715030686",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 592,
    name: "Diego Dog - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/tlblhg4sdw5d4vgs1an13/Untitleddesign_54_400x.png?rlkey=q3prqrx3nly3c6nywozn9v4u9&st=o4u0bxjx&dl=0",
      "https://mintbymichelle.com/cdn/shop/files/441024207_885058610301360_5846334835452587743_n_5000x.jpg?v=1715030686",
      "https://mintbymichelle.com/cdn/shop/files/eZyWatermark_17-02-2024_06-09-14-5620pm_5000x.jpg?v=1715030686",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 593,
    name: "Botanical in black and white - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/uchgk5kann45x5vbu6w9p/Untitleddesign_70_400x.png?rlkey=gzstpg1dpoy3yemrovfdffwnv&st=la9hp0je&dl=0",
      "https://mintbymichelle.com/cdn/shop/files/eZy-Watermark_05-04-2024_08-48-15-5210pm_5000x.jpg?v=1712491660",
      "https://mintbymichelle.com/cdn/shop/files/eZy-Watermark_05-04-2024_08-43-01-5450pm_5000x.jpg?v=1712491659",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 594,
    name: "Botanical in black and white - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/uchgk5kann45x5vbu6w9p/Untitleddesign_70_400x.png?rlkey=gzstpg1dpoy3yemrovfdffwnv&st=la9hp0je&dl=0",
      "https://mintbymichelle.com/cdn/shop/files/eZy-Watermark_05-04-2024_08-48-15-5210pm_5000x.jpg?v=1712491660",
      "https://mintbymichelle.com/cdn/shop/files/eZy-Watermark_05-04-2024_08-43-01-5450pm_5000x.jpg?v=1712491659",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 595,
    name: "Carlito Camel - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/0zjishvnai6vw4icb5nch/Untitleddesign_55_5000x.webp?rlkey=6chnum1b1xeuewm1yyqk96iqf&st=8x3jzi4h&dl=0",
      "https://mintbymichelle.com/cdn/shop/files/IMG_20240216_164211_235_2048x.jpg?v=1708217833",
      "https://mintbymichelle.com/cdn/shop/files/IMG_20240216_164233_383_2048x.jpg?v=1708217833",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 596,
    name: "Carlito Camel - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/0zjishvnai6vw4icb5nch/Untitleddesign_55_5000x.webp?rlkey=6chnum1b1xeuewm1yyqk96iqf&st=8x3jzi4h&dl=0",
      "https://mintbymichelle.com/cdn/shop/files/IMG_20240216_164211_235_2048x.jpg?v=1708217833",
      "https://mintbymichelle.com/cdn/shop/files/IMG_20240216_164233_383_2048x.jpg?v=1708217833",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 597,
    name: "Ulysses unicorn - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/ss6hpwsrjhdczqjmjug4u/Untitleddesign_49_2000x.webp?rlkey=ezgk5q691f45dcedsfby8xoxm&st=yv3phvvq&dl=0",
      "https://mintbymichelle.com/cdn/shop/files/IMG_20240219_071018_566_5000x.jpg?v=1708305455",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 598,
    name: "Ulysses unicorn - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/ss6hpwsrjhdczqjmjug4u/Untitleddesign_49_2000x.webp?rlkey=ezgk5q691f45dcedsfby8xoxm&st=yv3phvvq&dl=0",
      "https://mintbymichelle.com/cdn/shop/files/IMG_20240219_071018_566_5000x.jpg?v=1708305455",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 599,
    name: "Pet Panda - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/grrejj3maqxt0vwwfsw58/Untitleddesign_56_2000x.webp?rlkey=s2z27y6jynyhea4xir3z36pks&st=u69wgqsc&dl=0",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 600,
    name: "Pet Panda - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/grrejj3maqxt0vwwfsw58/Untitleddesign_56_2000x.webp?rlkey=s2z27y6jynyhea4xir3z36pks&st=u69wgqsc&dl=0",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 601,
    name: "Hector Horse - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/z6ur9yug4mk6oyaqdrq8d/Untitleddesign_51_400x.png?rlkey=oeyhkh6m486jimjv2ep7hbh5p&st=v4u2pcvz&dl=0",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 602,
    name: "Hector Horse - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/z6ur9yug4mk6oyaqdrq8d/Untitleddesign_51_400x.png?rlkey=oeyhkh6m486jimjv2ep7hbh5p&st=v4u2pcvz&dl=0",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 603,
    name: "Baroque Flowers - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/36gw7aapj7p2oj4cjeb4j/Untitleddesign_27_400x.png?rlkey=ccsew21m94zzn9wqkpgf88qva&st=ywa466iw&dl=0",
      "https://mintbymichelle.com/cdn/shop/files/378386913_685236820307347_4768965505168600387_n_5000x.jpg?v=1698778399",
      "https://mintbymichelle.com/cdn/shop/files/367754425_330872019279466_8376513760702592964_n_5000x.jpg?v=1698778399",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 604,
    name: "Baroque Flowers - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/36gw7aapj7p2oj4cjeb4j/Untitleddesign_27_400x.png?rlkey=ccsew21m94zzn9wqkpgf88qva&st=ywa466iw&dl=0",
      "https://mintbymichelle.com/cdn/shop/files/378386913_685236820307347_4768965505168600387_n_5000x.jpg?v=1698778399",
      "https://mintbymichelle.com/cdn/shop/files/367754425_330872019279466_8376513760702592964_n_5000x.jpg?v=1698778399",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 685,
    name: "Draped - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/zf84fsndaeo1gjf53dl60/DrapedSquare_371c3af5-0d7f-4900-947c-bac1480726b6_600x.webp?rlkey=0bxv0v1gvb9u40jmv96f8jqee&st=h9k5kig8&dl=0",
      "https://mintbymichelle.com/cdn/shop/files/FB_IMG_1720041841714_5000x.jpg?v=1720074019",
      "https://mintbymichelle.com/cdn/shop/files/449191971_487749657097233_6493866640206393109_n_5000x.jpg?v=1720074097",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 686,
    name: "Draped - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/zf84fsndaeo1gjf53dl60/DrapedSquare_371c3af5-0d7f-4900-947c-bac1480726b6_600x.webp?rlkey=0bxv0v1gvb9u40jmv96f8jqee&st=h9k5kig8&dl=0",
      "https://mintbymichelle.com/cdn/shop/files/FB_IMG_1720041841714_5000x.jpg?v=1720074019",
      "https://mintbymichelle.com/cdn/shop/files/449191971_487749657097233_6493866640206393109_n_5000x.jpg?v=1720074097",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 687,
    name: "Skin - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/r879bhfy7ww053bkj15vv/Skin-Square_200x.png?rlkey=0sfhy4f050kl5t8w8ldv96mmm&st=yaretqpn&dl=0",
      "https://mintbymichelle.com/cdn/shop/files/FB_IMG_1719869732114_5000x.jpg?v=1720073991",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 688,
    name: "Skin - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/r879bhfy7ww053bkj15vv/Skin-Square_200x.png?rlkey=0sfhy4f050kl5t8w8ldv96mmm&st=yaretqpn&dl=0",
      "https://mintbymichelle.com/cdn/shop/files/FB_IMG_1719869732114_5000x.jpg?v=1720073991",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 689,
    name: "Debbys Mermaid - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/krr2elv4q5i7u3150ayqn/Debby_sMermaid-square_200x.png?rlkey=dic5gcrmcntjpdlkbpglzptny&st=l9tdhq0l&dl=0",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 690,
    name: "Debbys Mermaid - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/krr2elv4q5i7u3150ayqn/Debby_sMermaid-square_200x.png?rlkey=dic5gcrmcntjpdlkbpglzptny&st=l9tdhq0l&dl=0",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 691,
    name: "Golden Brown - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/xxrsp17ryuc43uv1t0v8a/GoldenBrown-Square_200x.png?rlkey=1c416ypzwe0n2fh0f1xhd378r&st=qc66f4gp&dl=0",
      "https://mintbymichelle.com/cdn/shop/files/12c07c46-27df-4c2c-a294-9a84c45966fa_5000x.jpg?v=1719193341",
      "https://mintbymichelle.com/cdn/shop/files/58e971e5-432a-4703-a61c-a28b02c66875_5000x.jpg?v=1719193342",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 692,
    name: "Golden Brown - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/xxrsp17ryuc43uv1t0v8a/GoldenBrown-Square_200x.png?rlkey=1c416ypzwe0n2fh0f1xhd378r&st=qc66f4gp&dl=0",
      "https://mintbymichelle.com/cdn/shop/files/12c07c46-27df-4c2c-a294-9a84c45966fa_5000x.jpg?v=1719193341",
      "https://mintbymichelle.com/cdn/shop/files/58e971e5-432a-4703-a61c-a28b02c66875_5000x.jpg?v=1719193342",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 693,
    name: "Bathed in Gold - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/npqtgpfb0yvuxkxyc679d/BatrhedinGold-Square_138fafb9-8d50-4b90-b73d-e241df710b57_5000x.webp?rlkey=yrcrihp3wzn4mstrdfro1worc&st=tw3u4mbw&dl=0",
      "https://mintbymichelle.com/cdn/shop/files/BathedInGold_2_5000x.jpg?v=1719193769",
      "https://mintbymichelle.com/cdn/shop/files/BathedInGold_5000x.jpg?v=1719193769",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 694,
    name: "Bathed in Gold  - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/npqtgpfb0yvuxkxyc679d/BatrhedinGold-Square_138fafb9-8d50-4b90-b73d-e241df710b57_5000x.webp?rlkey=yrcrihp3wzn4mstrdfro1worc&st=tw3u4mbw&dl=0",
      "https://mintbymichelle.com/cdn/shop/files/BathedInGold_2_5000x.jpg?v=1719193769",
      "https://mintbymichelle.com/cdn/shop/files/BathedInGold_5000x.jpg?v=1719193769",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 377,
    name: "Blanco AMBIANTE WATER RESIST 250ml. + CATALIZADOR",
    price: "13.25",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/9h15mwshp51ruk56lbd5p/ambiente-water-resist-white-250ml-cat.jpg?rlkey=ru4moi5wq1k3l3gk9u6esz8j6&st=7ryx8qy4&dl=0",
    ],
    label: "250 ml.",
    description:
      "Pintura acrílica mate a base de agua con excelente adherencia a superficies en sitios húmedos o inorgánicas como vidrio, cerámica, porcelana, azulejos, metal, aluminio, etc. Larga duración, no amarillea ni se desvanece, resistente a las manchas, cobertura perfecta, sin marcas de pincel , producto de resistencia al impacto. Se recomiendan 10 gr de Catalizador para 250 ml de Pintura Acrílica Mate Resistente al Agua Ambiente.",
    selected: false,
  },
  {
    id: 378,
    name: "Blanco Antiguo AMBIANTE WATER RESIST 250ml. + CATALIZADOR ",
    price: "13.25",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/emd93gau1w9fhe90eb3am/ambiente-water-resist-ancient-white-250ml-cat.jpg?rlkey=lsl3kwulo8eopekx0kulfw1vh&st=wjbqqk8e&dl=0",
    ],
    label: "250 ml.",
    description:
      "Pintura acrílica mate a base de agua con excelente adherencia a superficies en sitios húmedos o inorgánicas como vidrio, cerámica, porcelana, azulejos, metal, aluminio, etc. Larga duración, no amarillea ni se desvanece, resistente a las manchas, cobertura perfecta, sin marcas de pincel , producto de resistencia al impacto. Se recomiendan 10 gr de Catalizador para 250 ml de Pintura Acrílica Mate Resistente al Agua Ambiente.",
    selected: false,
  },
  {
    id: 379,
    name: "Piedra AMBIANTE WATER RESIST 250ml. + CATALIZADOR ",
    price: "13.25",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/d2wdhodnvlu6xt0f5pady/ambiente-water-resist-sandstone-250ml-cat.jpg?rlkey=92lxubnq77l4heq3c8qx428wf&st=pak22khs&dl=0",
    ],
    label: "250 ml.",
    description:
      "Pintura acrílica mate a base de agua con excelente adherencia a superficies en sitios húmedos o inorgánicas como vidrio, cerámica, porcelana, azulejos, metal, aluminio, etc. Larga duración, no amarillea ni se desvanece, resistente a las manchas, cobertura perfecta, sin marcas de pincel , producto de resistencia al impacto. Se recomiendan 10 gr de Catalizador para 250 ml de Pintura Acrílica Mate Resistente al Agua Ambiente.",
    selected: false,
  },
  {
    id: 380,
    name: "Marfil AMBIANTE WATER RESIST 250ml. + CATALIZADOR",
    price: "13.25",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/p7qc4sj91nrn5odvx1j8g/ambiente-water-resist-ivory-coast-250ml-cat.jpg?rlkey=bcuv5tjb7gqb1g55hd0d8dibc&st=abjxo2pm&dl=0",
    ],
    label: "250 ml.",
    description:
      "Pintura acrílica mate a base de agua con excelente adherencia a superficies en sitios húmedos o inorgánicas como vidrio, cerámica, porcelana, azulejos, metal, aluminio, etc. Larga duración, no amarillea ni se desvanece, resistente a las manchas, cobertura perfecta, sin marcas de pincel , producto de resistencia al impacto. Se recomiendan 10 gr de Catalizador para 250 ml de Pintura Acrílica Mate Resistente al Agua Ambiente.",
    selected: false,
  },
  {
    id: 381,
    name: "Cartón AMBIANTE WATER RESIST 250ml. + CATALIZADOR ",
    price: "13.25",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/c30h04ogir4egz7t2rtj2/ambiente-water-resist-cardboard-250ml-cat.jpg?rlkey=5twfykex0mi6ohv6t4miv98rp&st=wai346uy&dl=0",
    ],
    label: "250 ml.",
    description:
      "Pintura acrílica mate a base de agua con excelente adherencia a superficies en sitios húmedos o inorgánicas como vidrio, cerámica, porcelana, azulejos, metal, aluminio, etc. Larga duración, no amarillea ni se desvanece, resistente a las manchas, cobertura perfecta, sin marcas de pincel , producto de resistencia al impacto. Se recomiendan 10 gr de Catalizador para 250 ml de Pintura Acrílica Mate Resistente al Agua Ambiente.",
    selected: false,
  },
  {
    id: 382,
    name: "Verde Linden AMBIANTE WATER RESIST 250ml. + CATALIZADOR",
    price: "13.25",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/123bbnn7xxr419klgop0n/ambiente-water-resist-linden-green-250ml-cat.jpg?rlkey=vnos7sav55ne649bf7i1a4yt7&st=bkperaop&dl=0",
    ],
    label: "250 ml.",
    description:
      "Pintura acrílica mate a base de agua con excelente adherencia a superficies en sitios húmedos o inorgánicas como vidrio, cerámica, porcelana, azulejos, metal, aluminio, etc. Larga duración, no amarillea ni se desvanece, resistente a las manchas, cobertura perfecta, sin marcas de pincel , producto de resistencia al impacto. Se recomiendan 10 gr de Catalizador para 250 ml de Pintura Acrílica Mate Resistente al Agua Ambiente.",
    selected: false,
  },
  {
    id: 383,
    name: "Verde Esmeralda AMBIANTE WATER RESIST 250ml. + CATALIZADOR",
    price: "13.25",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/4zcnwr2smt5aukjywtoxr/ambiente-water-resist-emerald-green-250ml-cat.jpg?rlkey=y8umz0n80tomm7tlwjikalwn8&st=uf5480p3&dl=0",
    ],
    label: "250 ml.",
    description:
      "Pintura acrílica mate a base de agua con excelente adherencia a superficies en sitios húmedos o inorgánicas como vidrio, cerámica, porcelana, azulejos, metal, aluminio, etc. Larga duración, no amarillea ni se desvanece, resistente a las manchas, cobertura perfecta, sin marcas de pincel , producto de resistencia al impacto. Se recomiendan 10 gr de Catalizador para 250 ml de Pintura Acrílica Mate Resistente al Agua Ambiente.",
    selected: false,
  },
  {
    id: 384,
    name: "Nuez AMBIANTE WATER RESIST 250ml. + CATALIZADOR",
    price: "13.25",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/z8n3qv9bvbw7rl6fidm5c/ambiente-water-resist-walnut-250ml-cat.jpg?rlkey=1ldlmvej9zh8yu2n5g6ykvo7l&st=17b6h5ne&dl=0",
    ],
    label: "250 ml.",
    description:
      "Pintura acrílica mate a base de agua con excelente adherencia a superficies en sitios húmedos o inorgánicas como vidrio, cerámica, porcelana, azulejos, metal, aluminio, etc. Larga duración, no amarillea ni se desvanece, resistente a las manchas, cobertura perfecta, sin marcas de pincel , producto de resistencia al impacto. Se recomiendan 10 gr de Catalizador para 250 ml de Pintura Acrílica Mate Resistente al Agua Ambiente.",
    selected: false,
  },
  {
    id: 385,
    name: "Azul Océano AMBIANTE WATER RESIST 250ml. + CATALIZADOR",
    price: "13.25",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/pfykl01tnwxxe6pn2pfhq/ambiente-water-resist-ocean-250ml-cat.jpg?rlkey=5kro8qj1nhrg1nm0fzsu6eera&st=10ye0met&dl=0",
    ],
    label: "250 ml.",
    description:
      "Pintura acrílica mate a base de agua con excelente adherencia a superficies en sitios húmedos o inorgánicas como vidrio, cerámica, porcelana, azulejos, metal, aluminio, etc. Larga duración, no amarillea ni se desvanece, resistente a las manchas, cobertura perfecta, sin marcas de pincel , producto de resistencia al impacto. Se recomiendan 10 gr de Catalizador para 250 ml de Pintura Acrílica Mate Resistente al Agua Ambiente.",
    selected: false,
  },
  {
    id: 386,
    name: "Azul Fresco AMBIANTE WATER RESIST 250ml. + CATALIZADOR ",
    price: "13.25",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/ezer8folivz2sxyqr1ta6/ambiente-water-resist-fresco-250ml-cat.jpg?rlkey=5vx24hbsjl8it8ehrflhxevvj&st=un4uhsgb&dl=0",
    ],
    label: "250 ml.",
    description:
      "Pintura acrílica mate a base de agua con excelente adherencia a superficies en sitios húmedos o inorgánicas como vidrio, cerámica, porcelana, azulejos, metal, aluminio, etc. Larga duración, no amarillea ni se desvanece, resistente a las manchas, cobertura perfecta, sin marcas de pincel , producto de resistencia al impacto. Se recomiendan 10 gr de Catalizador para 250 ml de Pintura Acrílica Mate Resistente al Agua Ambiente.",
    selected: false,
  },
  {
    id: 387,
    name: "Azul Medianoche AMBIANTE WATER RESIST 250ml. + CATALIZADOR",
    price: "13.25",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/8wig775af6etncc3eastu/ambiente-water-resist-midnight-blue-250ml-cat.jpg?rlkey=vc9ow4fpvywkb67vo7nemjk7n&st=3jw8y9xw&dl=0",
    ],
    label: "250 ml.",
    description:
      "Pintura acrílica mate a base de agua con excelente adherencia a superficies en sitios húmedos o inorgánicas como vidrio, cerámica, porcelana, azulejos, metal, aluminio, etc. Larga duración, no amarillea ni se desvanece, resistente a las manchas, cobertura perfecta, sin marcas de pincel , producto de resistencia al impacto. Se recomiendan 10 gr de Catalizador para 250 ml de Pintura Acrílica Mate Resistente al Agua Ambiente.",
    selected: false,
  },
  {
    id: 388,
    name: "Gris Pizarra AMBIANTE WATER RESIST 250ml. + CATALIZADOR ",
    price: "13.25",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/o0mh1zhegjzzfii46pwk5/ambiente-water-resist-dark-slate-gray-250ml-cat.jpg?rlkey=3ahld7wfa1xshayt3ge9ygwi3&st=1gys1j9w&dl=0",
    ],
    label: "250 ml.",
    description:
      "Pintura acrílica mate a base de agua con excelente adherencia a superficies en sitios húmedos o inorgánicas como vidrio, cerámica, porcelana, azulejos, metal, aluminio, etc. Larga duración, no amarillea ni se desvanece, resistente a las manchas, cobertura perfecta, sin marcas de pincel , producto de resistencia al impacto. Se recomiendan 10 gr de Catalizador para 250 ml de Pintura Acrílica Mate Resistente al Agua Ambiente.",
    selected: false,
  },
  {
    id: 389,
    name: "Gris Oscuro AMBIANTE WATER RESIST 250ml. + CATALIZADOR",
    price: "13.25",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/v38vf7zhpbphutgm6bkz5/ambiente-water-resist-dark-gray-250ml-cat.jpg?rlkey=7jmc9h0i1w5df8kkmhst8uvcf&st=k0oz5ia1&dl=0",
    ],
    label: "250 ml.",
    description:
      "Pintura acrílica mate a base de agua con excelente adherencia a superficies en sitios húmedos o inorgánicas como vidrio, cerámica, porcelana, azulejos, metal, aluminio, etc. Larga duración, no amarillea ni se desvanece, resistente a las manchas, cobertura perfecta, sin marcas de pincel , producto de resistencia al impacto. Se recomiendan 10 gr de Catalizador para 250 ml de Pintura Acrílica Mate Resistente al Agua Ambiente.",
    selected: false,
  },
  {
    id: 390,
    name: "Gris Antracita AMBIANTE WATER RESIST 250ml. + CATALIZADOR",
    price: "13.25",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/i165qnft5vf45cv9akot3/ambiente-water-resist-anthracite-black-250ml-cat.jpg?rlkey=78iz19exfq5dzzeh3l1wy6kc9&st=0uy57c2w&dl=0",
    ],
    label: "250 ml.",
    description:
      "Pintura acrílica mate a base de agua con excelente adherencia a superficies en sitios húmedos o inorgánicas como vidrio, cerámica, porcelana, azulejos, metal, aluminio, etc. Larga duración, no amarillea ni se desvanece, resistente a las manchas, cobertura perfecta, sin marcas de pincel , producto de resistencia al impacto. Se recomiendan 10 gr de Catalizador para 250 ml de Pintura Acrílica Mate Resistente al Agua Ambiente.",
    selected: false,
  },
  {
    id: 391,
    name: "Gris Grafitti AMBIANTE WATER RESIST 250ml. + CATALIZADOR ",
    price: "13.25",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/v26wa4a60krarpkqu7jdb/ambiente-water-resist-grafitti-gray-250ml-cat.jpg?rlkey=6fs4prucaqgbghoa2jrwz40x6&st=fzh2fhy2&dl=0",
    ],
    label: "250 ml.",
    description:
      "Pintura acrílica mate a base de agua con excelente adherencia a superficies en sitios húmedos o inorgánicas como vidrio, cerámica, porcelana, azulejos, metal, aluminio, etc. Larga duración, no amarillea ni se desvanece, resistente a las manchas, cobertura perfecta, sin marcas de pincel , producto de resistencia al impacto. Se recomiendan 10 gr de Catalizador para 250 ml de Pintura Acrílica Mate Resistente al Agua Ambiente.",
    selected: false,
  },
  {
    id: 392,
    name: "Moka AMBIANTE WATER RESIST 250ml. + CATALIZADOR ",
    price: "13.25",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/kwl6s4bxs7bsxv46mvrqe/ambiente-water-resist-mink-250ml-cat.jpg?rlkey=idbb38mot1ewj8r4tu3ftc4r3&st=jgb065m2&dl=0",
    ],
    label: "250 ml.",
    description:
      "Pintura acrílica mate a base de agua con excelente adherencia a superficies en sitios húmedos o inorgánicas como vidrio, cerámica, porcelana, azulejos, metal, aluminio, etc. Larga duración, no amarillea ni se desvanece, resistente a las manchas, cobertura perfecta, sin marcas de pincel , producto de resistencia al impacto. Se recomiendan 10 gr de Catalizador para 250 ml de Pintura Acrílica Mate Resistente al Agua Ambiente.",
    selected: false,
  },
  {
    id: 348,
    name: "Barníz MATE 120ml.",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/7bs487brwuexa0t3xktjt/barniz-cadence-mate-250-1.jpg?rlkey=s304w1xksyoncqrog7q397mtg&st=wq9k5unp&dl=0",
    ],
    label: "120 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA",
    selected: false,
  },
  {
    id: 349,
    name: "Barníz MATE 250ml.",
    price: "9.40",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/7bs487brwuexa0t3xktjt/barniz-cadence-mate-250-1.jpg?rlkey=s304w1xksyoncqrog7q397mtg&st=wq9k5unp&dl=0",
    ],
    label: "250 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA",
    selected: false,
  },
  {
    id: 350,
    name: "Barníz MATE 500ml.",
    price: "16.40",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/2crok09kkl00mo30xexe9/barniz-cadence-mate-500.jpg?rlkey=ufz7xu775p44s8wp7ddo9g1co&st=v01jpd5a&dl=0",
    ],
    label: "500 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA",
    selected: false,
  },
  {
    id: 351,
    name: "Barníz SATINADO 120ml.",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/53m23x38b1q6ec132fwtl/barniz-cadence-satinado-120.jpg?rlkey=yjukfpkb56c6wuemthemvtwsl&st=udr8xprt&dl=0",
    ],
    label: "120 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA",
    selected: false,
  },
  {
    id: 352,
    name: "Barníz SATINADO 250ml.",
    price: "9.40",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/vn9nksubsw9e8pxfgd228/barniz-cadence-satinado-250.jpg?rlkey=be20cm0qqin6lghunbbn2mmw7&st=8qdo69nb&dl=0",
    ],
    label: "250 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA",
    selected: false,
  },
  {
    id: 353,
    name: "Barníz SATINADO 500ml.",
    price: "16.40",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/pij36laxww30of5hfefo5/barniz-cadence-500-ml-satin.jpg?rlkey=7xsge32xxz3jiwe2eywimq9ow&st=zypktafr&dl=0",
    ],
    label: "500 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA",
    selected: false,
  },
  {
    id: 354,
    name: "Barníz BRILLO 120ml.",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/q5a46vdldu56i8n1e82w4/barniz-cadence-brillo-120.jpg?rlkey=lr671mq1nfpmded86x9ejv005&st=nqn6n9l2&dl=0",
    ],
    label: "120 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA",
    selected: false,
  },
  {
    id: 355,
    name: "Barníz BRILLO 250ml.",
    price: "9.40",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/f6duwwyr9sqgqgdtksdvb/barniz-cadence-brillo-250.jpg?rlkey=by2atsh71hbdfnxp8fc9yb9kl&st=itvr1kgu&dl=0",
    ],
    label: "250 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA",
    selected: false,
  },
  {
    id: 356,
    name: "Barníz BRILLO 500ml.",
    price: "16.40",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/ucy9x28cdnsg2vu6fjlge/barniz-cadence-brillo-500.jpg?rlkey=ej2etxrelwlnmwajs7qzyksdk&st=ze5vjd96&dl=0",
    ],
    label: "500 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA",
    selected: false,
  },
  {
    id: 357,
    name: "Barníz CUERO 120ml.",
    price: "8.40",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/hxi6bwkkxou20kvnwzfyo/barniz-cadence-cuero-120.jpg?rlkey=kxsejsrdnnvfwq1guotwy923g&st=tkftdp8g&dl=0",
    ],
    label: "120 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA",
    selected: false,
  },
  {
    id: 358,
    name: "Barníz ULTIMATE GLAZE MATE 120ml.",
    price: "5.85",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/s51i71fimuel1gxm8qm95/barniz-ultimate-mate-120-ml.jpg?rlkey=chpgcr3ryd3tcr0js76vo33oe&st=xddrwe4e&dl=0",
    ],
    label: "120 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA",
    selected: false,
  },
  {
    id: 3540,
    name: "Barníz Aqua Stone MATE 120ml.",
    price: "8.40",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/6sg758qnqz4bb3qvncgyd/barniz-exterior-aqua-stone-mate-120-ml.jpg?rlkey=6cvevkay8krth93pxc70ya9en&st=v5ge6mc6&dl=0",
    ],
    label: "120 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA",
    selected: false,
  },
  {
    id: 3550,
    name: "Barníz Aqua Stone MATE 250ml.",
    price: "14.40",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/tmhlcur7arulasd6fvngn/barniz-exterior-aqua-stone-mate-250-ml.jpg?rlkey=sdcvyixthuh0czw7291t8dn8u&st=frc22bck&dl=0",
    ],
    label: "250 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA",
    selected: false,
  },
  {
    id: 3560,
    name: "Barníz Aqua Stone MATE 500ml.",
    price: "20.95",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/g6c41hpmh9p6qr23r4x83/barniz-exterior-aqua-stone-mate-500-ml.jpg?rlkey=fn6cwyvjlug1on030fkgrwtxj&st=qf0dg3gw&dl=0",
    ],
    label: "500 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA",
    selected: false,
  },
  {
    id: 3570,
    name: "Barníz Aqua Stone BRILLO 120ml.",
    price: "8.40",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/reb769yuw1zi9fawriqg0/barniz-cadence-aqua-stone-120ml.jpg?rlkey=b9fb1a0485wcm5cv3ca2rhmwr&st=s2t4o2vb&dl=0",
    ],
    label: "120 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA",
    selected: false,
  },
  {
    id: 3580,
    name: "Barníz Aqua Stone BRILLO 250ml.",
    price: "14.40",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/cejswc75vi2y4q8vwjxhd/barniz-cadence-aqua-stone-250ml.jpg?rlkey=35v9g7mh4ejf2nxxtcg7rk8gt&st=0y7pj7wq&dl=0",
    ],
    label: "250 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA",
    selected: false,
  },
  {
    id: 3590,
    name: "Barníz Aqua Stone BRILLO 500ml.",
    price: "20.95",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/ucy9x28cdnsg2vu6fjlge/barniz-cadence-brillo-500.jpg?rlkey=ej2etxrelwlnmwajs7qzyksdk&st=kdswk2zx&dl=0",
    ],
    label: "500 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA",
    selected: false,
  },
  {
    id: 3591,
    name: "Barníz Craquelador UN PASO Cadence ",
    price: "3.25",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/lrbkodsku16nr76jnym9v/craquelador-de-1-paso-cadence.jpg?rlkey=8hhu869p4szkhdzcmhdtxukgg&st=zjcphi0n&dl=0",
    ],
    label: "500 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA",
    selected: false,
  },
  {
    id: 3592,
    name: "Barníz Craquelador DOS PASOS Cadence ",
    price: "5.80",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/1ye0krnf5qnumkyev0tpx/craquelador-de-2-pasos-cadence.jpg?rlkey=ywnsyh16eighsedxi6btgjujb&st=ytwjqwdd&dl=0",
    ],
    label: "500 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA",
    selected: false,
  },
  {
    id: 359,
    name: "Decoupage Textil Cadence 120ml.",
    price: "5.50",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/x3rvxavuapl82j45nxb6z/decoupage-textil-cadence.jpg?rlkey=mi33pto292idez6e7g85ibyo2&st=t3i6o5yz&dl=0",
    ],
    label: "120 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA",
    selected: false,
  },
  {
    id: 360,
    name: "Decoupage Plus MATT Cadence 250ml.",
    price: "7.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/x0sv6m90zyv48yvuca7if/decoupage-plus-cadence.jpg?rlkey=zns1vap1ac0v8nso3aav39klb&st=vd241jh2&dl=0",
    ],
    label: "250 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA",
    selected: false,
  },
  {
    id: 605,
    name: "Spray Adhesivo Stencils CADENCE",
    price: "6.40",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/5wh9s1pm1xy81kk6w8tpn/spray-adhesivo-stencils-cadence.jpg?rlkey=dqth23sr3ip6jrbvp4vrprgih&st=51os782h&dl=0",
    ],
    label: "150 ml.",
    description:
      "Protege su adhesión en baja y alta temperatura, no se transere a la supercie utilizada, permite una limpieza fácil y el uso múltiple. Se despega y se pega otra vez, permanezca pegajoso por un largo tiempo, y el color no mancha y no se arruga.",
    selected: false,
  },
  {
    id: 606,
    name: "ACRILEX Barniz Cristal 100ml",
    price: "7.85",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/d8ep5ick6l9248abpdr6u/pelicula-de-transferencia-pebeo.jpg?rlkey=0bfdl0nmp4tmywl6h7diozbmf&st=nb9hx183&dl=0",
    ],
    label: "100 ml.",
    description:
      "ACRILEX Barniz Cristal, 250ml Barniz efecto cristal de un solo componente. Aplicar a pincel o directamente del frasco si queremos cubrir una superficie grande.",
    selected: false,
  },
  {
    id: 582,
    name: "Barniz PLUS+ para pan de oro 100ml.",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/ik1fdluxmw5s3z74dh2zn/barniz-plus-para-pan-de-oro-cadence.jpg?rlkey=ufu2j00h4kp28ih0dq3xuz5qe&st=22nhglzd&dl=0",
    ],
    label: "100ml",
    description:
      "Barniz Plus + de CADENCE puede ser usado de una manera sencilla sobre trabajos de imitación de metal, sobre en pan de oro o foil metalizado. Es un barniz listo para usar con pincel, muy brillante y que no se deslustra.",
    selected: false,
  },
  {
    id: 756,
    name: "PURPLE Colour On VARNISH 90ml.",
    price: "4.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/dhq10sw5uq3g7i6f2w7j5/colour-on-varnish-purple-90ml.jpg?rlkey=wowazobtz60aft96wf1nm7xrf&st=har2dnvs&dl=0",
    ],
    label: "90ml",
    description:
      "Barniz a base de agua de alta calidad, duro y duradero que se puede utilizar en todas las superficies duras y de madera de interior. Proporciona un aspecto cálido a cualquier madera y superficies duras de interior. Se debe aplicar con rodillo para superficies grandes, y con brocha para otras superficies. Dependiendo de la temperatura del aire, el tiempo de secado es de 6 a 12 horas. Debes esperar 24 horas para la segunda capa.",
    selected: false,
  },
  {
    id: 757,
    name: "OAK Colour On VARNISH 90ml.",
    price: "4.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/b0juznzwqlurul42vbovs/colour-on-varnish-oak-90ml.jpg?rlkey=ss2vaiv4g8454o9p870zm6mzt&st=47e07sns&dl=0",
    ],
    label: "90ml",
    description:
      "Barniz a base de agua de alta calidad, duro y duradero que se puede utilizar en todas las superficies duras y de madera de interior. Proporciona un aspecto cálido a cualquier madera y superficies duras de interior. Se debe aplicar con rodillo para superficies grandes, y con brocha para otras superficies. Dependiendo de la temperatura del aire, el tiempo de secado es de 6 a 12 horas. Debes esperar 24 horas para la segunda capa.",
    selected: false,
  },
  {
    id: 758,
    name: "GREEN Colour On VARNISH 90ml.",
    price: "4.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/l8m8samyyqid667chqumq/colour-on-varnish-green-90ml.jpg?rlkey=edurb6coamvoosf4feve1uxzw&st=jy29e09n&dl=0",
    ],
    label: "90ml",
    description:
      "Barniz a base de agua de alta calidad, duro y duradero que se puede utilizar en todas las superficies duras y de madera de interior. Proporciona un aspecto cálido a cualquier madera y superficies duras de interior. Se debe aplicar con rodillo para superficies grandes, y con brocha para otras superficies. Dependiendo de la temperatura del aire, el tiempo de secado es de 6 a 12 horas. Debes esperar 24 horas para la segunda capa.",
    selected: false,
  },
  {
    id: 759,
    name: "BLUE Colour On VARNISH 90ml.",
    price: "4.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/ad015g8gnomkbnl1b4nbw/colour-on-varnish-blue-90ml.jpg?rlkey=mgkifetesxg6tl43vm6ba51wt&st=rcw46tn3&dl=0",
    ],
    label: "90ml",
    description:
      "Barniz a base de agua de alta calidad, duro y duradero que se puede utilizar en todas las superficies duras y de madera de interior. Proporciona un aspecto cálido a cualquier madera y superficies duras de interior. Se debe aplicar con rodillo para superficies grandes, y con brocha para otras superficies. Dependiendo de la temperatura del aire, el tiempo de secado es de 6 a 12 horas. Debes esperar 24 horas para la segunda capa.",
    selected: false,
  },
  {
    id: 535,
    name: "TURQUESA Finger Wax Cadence ",
    price: "4.50",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/xqarbo9gj4sv9ou6ut0mn/finger-wax-cadence-turquesa.jpg?rlkey=omwgwi4gueg0p4p42zx8qf72x&st=b1zi6w0r&dl=0",
    ],
    label: "20ml",
    description:
      "Cremas metalizadas o FINGER WAX de Cadence con base de agua, no tóxicas. Úsalas sobre cualquier superficie, aplica con los dedos, esponja, trapo, pincel... y consigue un brillo único.",
    selected: false,
  },
  {
    id: 535,
    name: "ROSA Finger Wax Cadence ",
    price: "4.50",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/scvu179wmibt220e2r17z/finger-wax-cadence-rosa.jpg?rlkey=c02fptp76rys5tb1waaqhb6kb&st=zdybneeh&dl=0",
    ],
    label: "20ml",
    description:
      "Cremas metalizadas o FINGER WAX de Cadence con base de agua, no tóxicas. Úsalas sobre cualquier superficie, aplica con los dedos, esponja, trapo, pincel... y consigue un brillo único.",
    selected: false,
  },
  {
    id: 535,
    name: "PLATA Finger Wax Cadence ",
    price: "4.50",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/wtncenxjb4k3hcjvfs7nr/finger-wax-cadence-plata.jpg?rlkey=vnrokuhqeoiujznro7pcne8zp&st=8fqxjjvm&dl=0",
    ],
    label: "20ml",
    description:
      "Cremas metalizadas o FINGER WAX de Cadence con base de agua, no tóxicas. Úsalas sobre cualquier superficie, aplica con los dedos, esponja, trapo, pincel... y consigue un brillo único.",
    selected: false,
  },
  {
    id: 535,
    name: "ORO INCA Finger Wax Cadence ",
    price: "4.50",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/ufzdnpyym18jv80yrpc2z/finger-wax-cadence-oro-inca.jpg?rlkey=4ugos0ey4ioejqzokwm0fug8g&st=7e35n2w5&dl=0",
    ],
    label: "20ml",
    description:
      "Cremas metalizadas o FINGER WAX de Cadence con base de agua, no tóxicas. Úsalas sobre cualquier superficie, aplica con los dedos, esponja, trapo, pincel... y consigue un brillo único.",
    selected: false,
  },
  {
    id: 535,
    name: "ORO AZTECA Finger Wax Cadence ",
    price: "4.50",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/2vuumszp59wrhbgsj06fh/finger-wax-cadence-oro-azteca.jpg?rlkey=ku3to4xa1o8i9hbioksruh3zc&st=mxp49s9w&dl=0",
    ],
    label: "20ml",
    description:
      "Cremas metalizadas o FINGER WAX de Cadence con base de agua, no tóxicas. Úsalas sobre cualquier superficie, aplica con los dedos, esponja, trapo, pincel... y consigue un brillo único.",
    selected: false,
  },
  {
    id: 535,
    name: "ORO ANTIGUO Finger Wax Cadence ",
    price: "4.50",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/t5js2o4wnqymwtw2rve1z/finger-wax-cadence-oro-antiguo.jpg?rlkey=k8l2xnkgxndmkdvlnaonuefs8&st=nbnw7kj1&dl=0",
    ],
    label: "20ml",
    description:
      "Cremas metalizadas o FINGER WAX de Cadence con base de agua, no tóxicas. Úsalas sobre cualquier superficie, aplica con los dedos, esponja, trapo, pincel... y consigue un brillo único.",
    selected: false,
  },
  {
    id: 535,
    name: "COBRE Finger Wax Cadence ",
    price: "4.50",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/f6d1zdy713cy5i61i9jz6/finger-wax-cadence-cobre.jpg?rlkey=9jx2jwp87iptb4ll0h8c03u5h&st=o7u8xt2g&dl=0",
    ],
    label: "20ml",
    description:
      "Cremas metalizadas o FINGER WAX de Cadence con base de agua, no tóxicas. Úsalas sobre cualquier superficie, aplica con los dedos, esponja, trapo, pincel... y consigue un brillo único.",
    selected: false,
  },
  {
    id: 535,
    name: "COBALTO Finger Wax Cadence ",
    price: "4.50",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/zhkbqac1d9cwzt9xp624t/finger-wax-cadence-cobalto.jpg?rlkey=p5c7j2b6pi9s2pkx2vic1n6bn&st=0a1cc8ht&dl=0",
    ],
    label: "20ml",
    description:
      "Cremas metalizadas o FINGER WAX de Cadence con base de agua, no tóxicas. Úsalas sobre cualquier superficie, aplica con los dedos, esponja, trapo, pincel... y consigue un brillo único.",
    selected: false,
  },
  {
    id: 535,
    name: "BRONCE Finger Wax Cadence ",
    price: "4.50",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/z58vy59h3d4iw4dtxm6vm/finger-wax-cadence-bronce.jpg?rlkey=rak6161obamzhasp0osdse6p3&st=zwn2wpth&dl=0",
    ],
    label: "20ml",
    description:
      "Cremas metalizadas o FINGER WAX de Cadence con base de agua, no tóxicas. Úsalas sobre cualquier superficie, aplica con los dedos, esponja, trapo, pincel... y consigue un brillo único.",
    selected: false,
  },
  {
    id: 535,
    name: "Cera Líquida Espresso Cadence ",
    price: "6.65",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/xtjvhaqhxltr8p0s6d8te/cera-liquida-espresso.jpg?rlkey=dn1ta1c3q1ltw3jehq252j02o&st=6pqjfttz&dl=0",
    ],
    label: "90ml",
    description:
      "Cera a base de agua de consistencia líquida para una aplicación suave. Proporciona una capa protectora súper fuerte y un aspecto hermoso. Aplicar con brocha o paño. Secado rápido y de olor agradable.",
    selected: false,
  },
  {
    id: 361,
    name: "Negro COSMOS MATT CERAMIC EFFECT 150ml.",
    price: "8.10",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/y1a651a0vf7ed2a6h7b3l/cosmos-matt-ceramic-effect-black-150-ml.jpg?rlkey=1sr9w119b5qgdcff72di814gf&st=dgu8cxrp&dl=0",
    ],
    label: "150 ml.",
    description:
      "Pintura con base de agua, muy cubriente, que crea un efecto cerámico mate natural al aplicar en una superficie. Listo para su uso, sin disolventes. Fácil de aplicar con un pincel o esponja.",
    selected: false,
  },
  {
    id: 362,
    name: "Marrón COSMOS MATT CERAMIC EFFECT 150ml.",
    price: "8.10",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/kb4rahmh9chq74vnxrvei/cosmos-matt-ceramic-effect-brown-150-ml.jpg?rlkey=xksxpzid4ohk3za5ovi9pwcys&st=b3wdvwnj&dl=0",
    ],
    label: "150 ml.",
    description:
      "Pintura con base de agua, muy cubriente, que crea un efecto cerámico mate natural al aplicar en una superficie. Listo para su uso, sin disolventes. Fácil de aplicar con un pincel o esponja.",
    selected: false,
  },
  {
    id: 363,
    name: "Marrón Oxidado COSMOS MATT CERAMIC EFFECT 150ml.",
    price: "8.10",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/ti9qwnfbjryq0sxlo58j2/cosmos-matt-ceramic-effect-rusty-brown-150-ml.jpg?rlkey=eszmdbmn3ej5nxbit0kftd1ud&st=7dfyjosu&dl=0",
    ],
    label: "150 ml.",
    description:
      "Pintura con base de agua, muy cubriente, que crea un efecto cerámico mate natural al aplicar en una superficie. Listo para su uso, sin disolventes. Fácil de aplicar con un pincel o esponja.",
    selected: false,
  },
  {
    id: 364,
    name: "Cashmere COSMOS MATT CERAMIC EFFECT 150ml.",
    price: "8.10",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/lz1d4ranh8wvtbzshr597/cosmos-matt-ceramic-effect-cashmere-150-ml.jpg?rlkey=80tcs0xr7wfwkk9xeybjd19cv&st=sjsz1w3m&dl=0",
    ],
    label: "150 ml.",
    description:
      "Pintura con base de agua, muy cubriente, que crea un efecto cerámico mate natural al aplicar en una superficie. Listo para su uso, sin disolventes. Fácil de aplicar con un pincel o esponja.",
    selected: false,
  },
  {
    id: 365,
    name: "Verde Esmeralda COSMOS MATT CERAMIC EFFECT 150ml.",
    price: "8.10",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/nbxv4ksh3n77j1zpf3xdc/cosmos-matt-ceramic-effect-emerald-green-150-ml.jpg?rlkey=gnhnj2ec875gjw49gp4qodrhn&st=maxo4dq4&dl=0",
    ],
    label: "150 ml.",
    description:
      "Pintura con base de agua, muy cubriente, que crea un efecto cerámico mate natural al aplicar en una superficie. Listo para su uso, sin disolventes. Fácil de aplicar con un pincel o esponja.",
    selected: false,
  },
  {
    id: 366,
    name: "Gris Humo COSMOS MATT CERAMIC EFFECT 150ml.",
    price: "8.10",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/0qkf9thmb73uegkt6zaq5/cosmos-matt-ceramic-effect-smoke-gray-150-ml.jpg?rlkey=7beb5vqaqzs6gvsesncynxldc&st=zkwa478a&dl=0",
    ],
    label: "150 ml.",
    description:
      "Pintura con base de agua, muy cubriente, que crea un efecto cerámico mate natural al aplicar en una superficie. Listo para su uso, sin disolventes. Fácil de aplicar con un pincel o esponja.",
    selected: false,
  },
  {
    id: 367,
    name: "Molde Verde COSMOS MATT CERAMIC EFFECT 150ml.",
    price: "8.10",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/rgjda0pbtv3n4gz79zcgz/cosmos-matt-ceramic-effect-mould-green-150-ml.jpg?rlkey=zjudgbzhpfw6azlyobql6tp2o&st=lc9mhyz1&dl=0",
    ],
    label: "150 ml.",
    description:
      "Pintura con base de agua, muy cubriente, que crea un efecto cerámico mate natural al aplicar en una superficie. Listo para su uso, sin disolventes. Fácil de aplicar con un pincel o esponja.",
    selected: false,
  },
  {
    id: 368,
    name: "Verde Menta COSMOS MATT CERAMIC EFFECT 150ml.",
    price: "8.10",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/lxjk2cuvx85bm6rraddl4/cosmos-matt-ceramic-effect-mint-green-150-ml.jpg?rlkey=6tz4tykx1r3uvqufimfb3akgb&st=sjejh244&dl=0",
    ],
    label: "150 ml.",
    description:
      "Pintura con base de agua, muy cubriente, que crea un efecto cerámico mate natural al aplicar en una superficie. Listo para su uso, sin disolventes. Fácil de aplicar con un pincel o esponja.",
    selected: false,
  },
  {
    id: 369,
    name: "Azul Claro COSMOS MATT CERAMIC EFFECT 150ml.",
    price: "8.10",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/tegksauravry2h95pslxs/cosmos-matt-ceramic-effect-light-blue-150-ml.jpg?rlkey=42dl2n7ativq3gnxui5ue9c51&st=qznksjj9&dl=0",
    ],
    label: "150 ml.",
    description:
      "Pintura con base de agua, muy cubriente, que crea un efecto cerámico mate natural al aplicar en una superficie. Listo para su uso, sin disolventes. Fácil de aplicar con un pincel o esponja.",
    selected: false,
  },
  {
    id: 370,
    name: "Azul Ultramarino COSMOS MATT CERAMIC EFFECT 150ml.",
    price: "8.10",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/jmgr0q7p6u65wspb8ypjj/cosmos-matt-ceramic-effect-ultramarine-blue-150-ml.jpg?rlkey=zw9gvvibfxpvdvs7zdnw1vsjm&st=o93hh6fu&dl=0",
    ],
    label: "150 ml.",
    description:
      "Pintura con base de agua, muy cubriente, que crea un efecto cerámico mate natural al aplicar en una superficie. Listo para su uso, sin disolventes. Fácil de aplicar con un pincel o esponja.",
    selected: false,
  },
  {
    id: 371,
    name: "Azul Real COSMOS MATT CERAMIC EFFECT 150ml.",
    price: "8.10",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/7ye57wdrv8evzvbuxm7v9/cosmos-matt-ceramic-effect-royal-blue-150-ml.jpg?rlkey=otcd2xuteu1fobxtsdrix3b90&st=j0xh29ig&dl=0",
    ],
    label: "150 ml.",
    description:
      "Pintura con base de agua, muy cubriente, que crea un efecto cerámico mate natural al aplicar en una superficie. Listo para su uso, sin disolventes. Fácil de aplicar con un pincel o esponja.",
    selected: false,
  },
  {
    id: 372,
    name: "Manzana Caramelizada COSMOS MATT CERAMIC EFFECT  150ml.",
    price: "8.10",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/wkq9dv6b44v1lxxde7ed0/cosmos-matt-ceramic-effect-candy-apple-150-ml.jpg?rlkey=5mbnvhm5xmcw19546hgltag5a&st=bc85dmop&dl=0",
    ],
    label: "150 ml.",
    description:
      "Pintura con base de agua, muy cubriente, que crea un efecto cerámico mate natural al aplicar en una superficie. Listo para su uso, sin disolventes. Fácil de aplicar con un pincel o esponja.",
    selected: false,
  },
  {
    id: 373,
    name: "Naranja COSMOS MATT CERAMIC EFFECT 150ml.",
    price: "8.10",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/qjc2m479k91n9a5nzcod8/cosmos-matt-ceramic-effect-orange-150-ml.jpg?rlkey=bqt48lc2ku59g76zxxo8p6hvm&st=8z768z9t&dl=0",
    ],
    label: "150 ml.",
    description:
      "Pintura con base de agua, muy cubriente, que crea un efecto cerámico mate natural al aplicar en una superficie. Listo para su uso, sin disolventes. Fácil de aplicar con un pincel o esponja.",
    selected: false,
  },
  {
    id: 374,
    name: "Amarillo COSMOS MATT CERAMIC EFFECT 150ml.",
    price: "8.10",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/c174md81ejvlloehgyp7d/cosmos-matt-ceramic-effect-yellow-150-ml.jpg?rlkey=ckctca66bw7ek4to3jj4cxrv2&st=4sv6gmlv&dl=0",
    ],
    label: "150 ml.",
    description:
      "Pintura con base de agua, muy cubriente, que crea un efecto cerámico mate natural al aplicar en una superficie. Listo para su uso, sin disolventes. Fácil de aplicar con un pincel o esponja.",
    selected: false,
  },
  {
    id: 375,
    name: "Ecru COSMOS MATT CERAMIC EFFECT 150ml.",
    price: "8.10",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/ozf90c24b4ltfbatr1fy6/cosmos-matt-ceramic-effect-ecru-150-ml.jpg?rlkey=ru07wq8ik78amn6isvm42uh9g&st=v9zpfk14&dl=0",
    ],
    label: "150 ml.",
    description:
      "Pintura con base de agua, muy cubriente, que crea un efecto cerámico mate natural al aplicar en una superficie. Listo para su uso, sin disolventes. Fácil de aplicar con un pincel o esponja.",
    selected: false,
  },
  {
    id: 376,
    name: "Blanco COSMOS MATT CERAMIC EFFECT 150ml.",
    price: "8.10",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/3c6x6tk074rhchyoiqmah/cosmos-matt-ceramic-effect-white-150-ml.jpg?rlkey=324s7kx2b866uved6t1x1v1uo&st=cqn8a00r&dl=0",
    ],
    label: "150 ml.",
    description:
      "Pintura con base de agua, muy cubriente, que crea un efecto cerámico mate natural al aplicar en una superficie. Listo para su uso, sin disolventes. Fácil de aplicar con un pincel o esponja.",
    selected: false,
  },
  {
    id: 1009,
    name: "Textile Foil Leaf Cadence Silver 17cm x 5m",
    price: "7.00",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/yzs0kx23bizo60pucyqc8/textile-foil-leaf-cadence-silver-17cm-x-5m.jpg?rlkey=rx6onrqwjrfgs3o0q6r0zkevy&st=6gziy1ng&dl=0",
    ],
    label: "17cm x 5m.",
    description: "Foil para usar con el medium textil Heat Transfer Medium.",
    selected: false,
  },
  {
    id: 1010,
    name: "Textile Foil Leaf Cadence Silver 17cm x 1m",
    price: "2.00",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/yzs0kx23bizo60pucyqc8/textile-foil-leaf-cadence-silver-17cm-x-5m.jpg?rlkey=rx6onrqwjrfgs3o0q6r0zkevy&st=6gziy1ng&dl=0",
    ],
    label: "17cm x 1m.",
    description: "Foil para usar con el medium textil Heat Transfer Medium.",
    selected: false,
  },
  {
    id: 1011,
    name: "Textile Foil Leaf Cadence Rainbow HolgSilver 17cm x 5m",
    price: "7.00",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/srae3js1wnyn7jstc56i7/textile-foil-leaf-cadence-rainbow-holgsilver-17x5.jpg?rlkey=pmvd1np8ki9rly3k0ov7x9qst&st=4vmt4xuq&dl=0",
    ],
    label: "17cm x 5m.",
    description: "Foil para usar con el medium textil Heat Transfer Medium.",
    selected: false,
  },
  {
    id: 1012,
    name: "Textile Foil Leaf Cadence Rainbow HolgSilver 17cm x 1m",
    price: "2.00",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/srae3js1wnyn7jstc56i7/textile-foil-leaf-cadence-rainbow-holgsilver-17x5.jpg?rlkey=pmvd1np8ki9rly3k0ov7x9qst&st=4vmt4xuq&dl=0",
    ],
    label: "17cm x 1m.",
    description: "Foil para usar con el medium textil Heat Transfer Medium.",
    selected: false,
  },
  {
    id: 1013,
    name: "Textile Foil Leaf Cadence Rainbow HolgGold 17cm x 5m",
    price: "7.00",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/mq85i99ttooirvipcc3nh/textile-foil-leaf-cadence-rainbow-holggold-17x5m.jpg?rlkey=x2p5bq4uf9ubtn1c07bojy7u3&st=xjo4ir0k&dl=0",
    ],
    label: "17cm x 5m.",
    description: "Foil para usar con el medium textil Heat Transfer Medium.",
    selected: false,
  },
  {
    id: 1014,
    name: "Textile Foil Leaf Cadence Rainbow HolgGold 17cm x 1m",
    price: "2.00",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/mq85i99ttooirvipcc3nh/textile-foil-leaf-cadence-rainbow-holggold-17x5m.jpg?rlkey=x2p5bq4uf9ubtn1c07bojy7u3&st=xjo4ir0k&dl=0",
    ],
    label: "17cm x 1m.",
    description: "Foil para usar con el medium textil Heat Transfer Medium.",
    selected: false,
  },
  {
    id: 1015,
    name: "Textile Foil Leaf Cadence Rainbow HolgCooper 17cm x 5m",
    price: "7.00",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/9mf37siybnc8660kgq90j/textile-foil-leaf-cadence-rainbow-holgcooper-17x5.jpg?rlkey=i0rdr2ms8gn0g04rs3iq1qya0&st=hh511aq4&dl=0",
    ],
    label: "17cm x 5m.",
    description: "Foil para usar con el medium textil Heat Transfer Medium.",
    selected: false,
  },
  {
    id: 1016,
    name: "Textile Foil Leaf Cadence Rainbow HolgCooper 17cm x 1m",
    price: "2.00",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/9mf37siybnc8660kgq90j/textile-foil-leaf-cadence-rainbow-holgcooper-17x5.jpg?rlkey=i0rdr2ms8gn0g04rs3iq1qya0&st=hh511aq4&dl=0",
    ],
    label: "17cm x 1m.",
    description: "Foil para usar con el medium textil Heat Transfer Medium.",
    selected: false,
  },
  {
    id: 1017,
    name: "Textile Foil Leaf Cadence Leopar 17cm x 5m",
    price: "7.00",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/rbj3byok0frguv97x1dbz/textile-foil-leaf-cadence-leopar-17cm-x-5m.jpg?rlkey=1rrha27ycsaq8txvj1ysbs7ud&st=gve8a3xp&dl=0",
    ],
    label: "17cm x 5m.",
    description: "Foil para usar con el medium textil Heat Transfer Medium.",
    selected: false,
  },
  {
    id: 1018,
    name: "Textile Foil Leaf Cadence Leopar 17cm x 1m",
    price: "2.00",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/rbj3byok0frguv97x1dbz/textile-foil-leaf-cadence-leopar-17cm-x-5m.jpg?rlkey=1rrha27ycsaq8txvj1ysbs7ud&st=gve8a3xp&dl=0",
    ],
    label: "17cm x 1m.",
    description: "Foil para usar con el medium textil Heat Transfer Medium.",
    selected: false,
  },
  {
    id: 1019,
    name: "Textile Foil Leaf Cadence HolgMulticolor 17cm x 5m",
    price: "7.00",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/wt6a73z7km1ffdzxldhqz/textile-foil-leaf-cadence-holgmulticolor-17cm-x5m.jpg?rlkey=8rs9x3mclcklony4xdethwymx&st=kh9gyy6b&dl=0",
    ],
    label: "17cm x 5m.",
    description: "Foil para usar con el medium textil Heat Transfer Medium.",
    selected: false,
  },
  {
    id: 1020,
    name: "Textile Foil Leaf Cadence HolgMulticolor 17cm x 1m",
    price: "2.00",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/wt6a73z7km1ffdzxldhqz/textile-foil-leaf-cadence-holgmulticolor-17cm-x5m.jpg?rlkey=8rs9x3mclcklony4xdethwymx&st=kh9gyy6b&dl=0",
    ],
    label: "17cm x 1m.",
    description: "Foil para usar con el medium textil Heat Transfer Medium.",
    selected: false,
  },
  {
    id: 1021,
    name: "Textile Foil Leaf Cadence Gold 17cm x 5m",
    price: "7.00",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/h2g6b9p0bjopq3kj2otse/textile-foil-leaf-cadence-gold-17cm-x-5m.jpg?rlkey=4alojlgpd2p9l265b407x861s&st=ocjglknv&dl=0",
    ],
    label: "17cm x 5m.",
    description: "Foil para usar con el medium textil Heat Transfer Medium.",
    selected: false,
  },
  {
    id: 1022,
    name: "Textile Foil Leaf Cadence Gold 17cm x 1m",
    price: "2.00",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/h2g6b9p0bjopq3kj2otse/textile-foil-leaf-cadence-gold-17cm-x-5m.jpg?rlkey=4alojlgpd2p9l265b407x861s&st=ocjglknv&dl=0",
    ],
    label: "17cm x 1m.",
    description: "Foil para usar con el medium textil Heat Transfer Medium.",
    selected: false,
  },
  {
    id: 1023,
    name: "Textile Foil Leaf Cadence Dotted HolgSilver 17cm x 5m",
    price: "7.00",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/5vng6xb1zpsaxklqd7tag/textile-foil-leaf-cadence-dotted-holgsilver-17x5m.jpg?rlkey=356b9xddhwj4te8n6liky0ifb&st=j846h1a9&dl=0",
    ],
    label: "17cm x 5m.",
    description: "Foil para usar con el medium textil Heat Transfer Medium.",
    selected: false,
  },
  {
    id: 1024,
    name: "Textile Foil Leaf Cadence Dotted HolgSilver 17cm x 1m",
    price: "2.00",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/5vng6xb1zpsaxklqd7tag/textile-foil-leaf-cadence-dotted-holgsilver-17x5m.jpg?rlkey=356b9xddhwj4te8n6liky0ifb&st=j846h1a9&dl=0",
    ],
    label: "17cm x 1m.",
    description: "Foil para usar con el medium textil Heat Transfer Medium.",
    selected: false,
  },
  {
    id: 1025,
    name: "Textile Foil Leaf Cadence Diamond HolgSilver 17cm x 5m",
    price: "7.00",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/oyc9ukpzae711qb2xksru/textile-foil-leaf-cadence-diamond-holgsilver-17x5.jpg?rlkey=myas8acf54uotbzxazwa0r5mh&st=86e2f1j9&dl=0",
    ],
    label: "17cm x 5m.",
    description: "Foil para usar con el medium textil Heat Transfer Medium.",
    selected: false,
  },
  {
    id: 1026,
    name: "Textile Foil Leaf Cadence Diamond HolgSilver 17cm x 1m",
    price: "2.00",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/oyc9ukpzae711qb2xksru/textile-foil-leaf-cadence-diamond-holgsilver-17x5.jpg?rlkey=myas8acf54uotbzxazwa0r5mh&st=86e2f1j9&dl=0",
    ],
    label: "17cm x 1m.",
    description: "Foil para usar con el medium textil Heat Transfer Medium.",
    selected: false,
  },
  {
    id: 1027,
    name: "Textile Foil Leaf Cadence Diamond HolgGold 17cm x 5m",
    price: "7.00",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/rtjqocab9zdeu6xg26yay/textile-foil-leaf-cadence-diamond-holggold-17x5m.jpg?rlkey=qifjm2wgzdbtalmdky0tbv82r&st=pt0cl9th&dl=0",
    ],
    label: "17cm x 5m.",
    description: "Foil para usar con el medium textil Heat Transfer Medium.",
    selected: false,
  },
  {
    id: 1028,
    name: "Textile Foil Leaf Cadence Diamond HolgGold 17cm x 1m",
    price: "2.00",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/rtjqocab9zdeu6xg26yay/textile-foil-leaf-cadence-diamond-holggold-17x5m.jpg?rlkey=qifjm2wgzdbtalmdky0tbv82r&st=pt0cl9th&dl=0",
    ],
    label: "17cm x 1m.",
    description: "Foil para usar con el medium textil Heat Transfer Medium.",
    selected: false,
  },
  {
    id: 1029,
    name: "Textile Foil Leaf Cadence Brillant HolgSilver 17cm x 5m",
    price: "7.00",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/s5lhrwd2h8n3uni0iryos/textile-foil-leaf-cadence-brillant-holgsilver.jpg?rlkey=m6ym2byq71xtytb8m96pwx9qn&st=axu2tdrv&dl=0",
    ],
    label: "17cm x 5m.",
    description: "Foil para usar con el medium textil Heat Transfer Medium.",
    selected: false,
  },
  {
    id: 1030,
    name: "Textile Foil Leaf Cadence Brillant HolgSilver 17cm x 1m",
    price: "2.00",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/s5lhrwd2h8n3uni0iryos/textile-foil-leaf-cadence-brillant-holgsilver.jpg?rlkey=m6ym2byq71xtytb8m96pwx9qn&st=axu2tdrv&dl=0",
    ],
    label: "17cm x 1m.",
    description: "Foil para usar con el medium textil Heat Transfer Medium.",
    selected: false,
  },
  {
    id: 186,
    name: "Hybrid HAZERAN PURPLE 70ml.",
    price: "2.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/gkcqu8y6pbssvj1vie2sq/hybrid-hazeran-purple-70ml.jpg?rlkey=5yezigfbitq8tpa6auw9okbgr&st=8vv8mieu&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 187,
    name: "Hybrid ENCAJE 70ml.",
    price: "2.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/yse8ockkechppwo1400dy/hybrid-encaje-70ml.jpg?rlkey=y88dp3nb8c92c3y1lx03lg93l&st=yynj9nuu&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 188,
    name: "Hybrid BURDEOS 70ml.",
    price: "2.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/ichw7w4t54tn9tr860vkf/hybrid-burdeos-70ml.jpg?rlkey=an6rj8mkmqn8peg1g991miu77&st=zeyzooeq&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 189,
    name: "Hybrid AZUL RÍO 70ml.",
    price: "2.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/x07kshe6119r99rtiz3wi/hybrid-river-blue-70ml.jpg?rlkey=f4gtiu6kp98jv3ibt1szhbn00&st=s7gp4lb7&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 190,
    name: "Hybrid CEREZA 70ml.",
    price: "2.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/35l9s00sdf64fv2ptxw1c/hybrid-cereza-70ml.jpg?rlkey=5caw2nmcooi1sxwuhtp2ra49o&st=e9c4hpw5&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 191,
    name: "Hybrid GRIS PIZARRA OSCURO 70ml.",
    price: "2.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/ccao0u6uzux55xgpxwacx/hybrid-gris-pizarra-oscuro-70ml.jpg?rlkey=gdyy2jcouv6hy0pkaefh1nim3&st=k4glymbi&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 192,
    name: "Hybrid VERDE FINO 70ml.",
    price: "2.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/ciiqi8ydfzac4pj2mlhre/hybrid-verde-fino-70ml.jpg?rlkey=raemnnhakyk2enuipu55y85yv&st=szpjahh0&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 193,
    name: "Hybrid VERDE MENTA 70ml.",
    price: "2.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/559th4xsbaihie1clh225/hybrid-cerde-menta-70ml.jpg?rlkey=td56yv39ogmah336uhn0a5b4h&st=1igao8ti&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 194,
    name: "Hybrid AZUL NAPOLEÓN 70ml.",
    price: "2.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/yawxevmkyuu4ub7xyirfb/hybrid-azul-napoleon-70ml.jpg?rlkey=4atx3ki5fvsb9xnjdf5t1vhfv&st=bqo3wv5r&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 195,
    name: "Hybrid Loft HUESO ANTIGUO 70ml.",
    price: "2.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/uq2pqsxqgedjcajux2xam/hybrid-hueso-antiguo-70ml.jpg?rlkey=nvv9pha3bo30gecjha8adbrun&st=au5vvrl1&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 196,
    name: "Hybrid CIRUELA 70ml.",
    price: "2.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/punr0hkm81pcm1fnvv8bq/hybrid-ciruela-70ml.jpg?rlkey=xk819f9xu9y41uicr6101nkqj&st=c5p7osmk&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 197,
    name: "Hybrid AZUL MEDIANOCHE 70ml.",
    price: "2.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/7y4pcp322kzxwq8u0k5uf/hybrid-midnight-blue-70ml.jpg?rlkey=yi1zsbg7km4cc22fn1kma4ik9&st=h5j7b143&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 198,
    name: "Hybrid VERDE ESMERALDA 70ml.",
    price: "2.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/q4dibnw79jzvcfeymmb8m/hybrid-emerald-green-70ml.jpg?rlkey=1t6kp6xbn2tpf8lwyc1s5ve3y&st=d1yugb5c&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 199,
    name: "Hybrid VERDE HOJA 70ml.",
    price: "2.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/nynkpubwsgcg34uie5p3f/hybrid-verde-hoja-70ml.jpg?rlkey=z64be1uzqggh3iaqzrsk6siqt&st=84sdlapm&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 200,
    name: "Hybrid APPLE CANDY 70ml.",
    price: "2.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/v1nbsl5w6b6ca1xe450gv/hybrid-apple-candy-70ml.jpg?rlkey=0b7gp9zvd93dejfbvzv4qhx6k&st=hpzy6rcr&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 201,
    name: "Hybrid OCÉANO 70ml.",
    price: "2.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/cny4ybopkuzjytvsff251/hybrid-oceano-70ml.jpg?rlkey=5aqd25xdf5006mkxplagmy9eh&st=3ep8cfv0&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 202,
    name: "Hybrid AMARILLO SOL 70ml.",
    price: "2.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/rkdgr35hvnkzfs7usntto/hybrid-sun-yellow-70ml.jpg?rlkey=tm6qf82qj8nj4wpfhw6d0u2bq&st=fzowvuwm&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 203,
    name: "Hybrid NEGRO 70ml.",
    price: "2.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/be83ec5kilp34xnoijwf9/hybrid-negro-70ml.jpg?rlkey=j1pilaifuz34kv2q5sedux6os&st=kae4mnbp&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 204,
    name: "Hybrid CORAL 70ml.",
    price: "2.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/wpv8d4wxrhqn9o54dau77/hybrid-coral-70ml.jpg?rlkey=tmttzpbqwqx1r88pf2au8nqdo&st=iyot9cbc&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 205,
    name: "Hybrid BLANCO 120ml.",
    price: 4.0,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/6jwtuqnbytvyhxmzd0f10/hybrid-blanco-120-ml.jpg?rlkey=qk6thgwxtmicqjt8artocsqyt&st=41t5oqm9&dl=0",
    ],
    label: "120 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 206,
    name: "Hybrid CENIZA 500 ml.",
    price: "15.70",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/ncrpeo5fo56ob80khf7zq/hybrid-ceniza-500ml.jpg?rlkey=c5obzhykxppisebtggkv1ht5o&st=4tljrpdj&dl=0",
    ],
    label: "500 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 207,
    name: "Hybrid BLANCO ANTIGUO 500 ml.",
    price: "15.70",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/l5jjrrsadguex4gf1dmak/hybrid-blanco-antiguo-500ml.jpg?rlkey=yjya0nvjsi8d8wbm5660tahzf&st=o5cwioyv&dl=0",
    ],
    label: "500 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 208,
    name: "Hybrid BLANCO 500 ml.",
    price: "15.70",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/vs8z8op083gt0m5xwskxu/hybrid-blanco-500ml.jpg?rlkey=344n8183b5tz40c4jqb3gt3dy&st=r5s3bpuk&dl=0",
    ],
    label: "500 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 209,
    name: "Hybrid VERDE MOHO 70ml.",
    price: "2.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/ymjk9p3ymbtxkha6jv2x6/hybrid-verde-moho-70ml.jpg?rlkey=dlk1combpzk5hqlrobblp43cn&st=dxmhauvz&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 210,
    name: "Hybrid LILA 70ml.",
    price: "2.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/1ue6qq6hlqvwnnlnt9p4n/hybrid-lila-70ml.jpg?rlkey=27fpzq35ovj8bes4dprgg6pf0&st=ryizi36e&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 211,
    name: "Hybrid SPRING 70ml.",
    price: "2.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/c0wc9f1lz4tk5rjrdo5le/hybrid-spring-70ml.jpg?rlkey=whvm79c71tu8yzxfr4mps03co&st=ivnqtevb&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 212,
    name: "Hybrid WALNUT 70ml.",
    price: "2.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/iynlb5qk2jvsuqp9eanuw/hybrid-walnut-70ml.jpg?rlkey=wtxroce6yz8gw1l5mz26rp23v&st=tfycdr9l&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 213,
    name: "Hybrid CASHMERE 70ml.",
    price: "2.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/yulpr2vr6mik6qdt4nlwg/hybrid-cashmere-70ml.jpg?rlkey=1v3twhdtsdqz6xrdllnzbibuu&st=ez4kt28g&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 214,
    name: "Hybrid FLOR DE GRANADA 70ml.",
    price: "2.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/tidub46u3fu4hg2iieenf/hybrid-pomegranate-flower-70ml.jpg?rlkey=gpb6oga8mkkhct6imcu4zhfqk&st=mo4rn4kc&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 215,
    name: "Hybrid CALABAZA 70ml.",
    price: "2.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/82m477xzksgrqg0ub3vgo/hybrid-pumkin-70ml.jpg?rlkey=8e05sazng0fxqv04b6dny82gm&st=2fe9pibf&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 216,
    name: "Hybrid CHAMPAIGNE 70ml.",
    price: "2.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/4n20jewht93qshw8wdy3b/hybrid-champaigne-70ml.jpg?rlkey=s1uk2q6rrc38u9zi2ur0ctqly&st=lsye5g1n&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 217,
    name: "Hybrid WIND 70ml.",
    price: "2.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/91anf81hb5qf9ggxqo0zt/hybrid-wind-70ml.jpg?rlkey=umkisvupiagz4gnxj6ve2r3eg&st=fych6jw0&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 218,
    name: "Hybrid ROBLE CLÁSICO 70ml.",
    price: "2.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/53jcfmry6n50dmcgoxfns/hybrid-classic-oak-70ml.jpg?rlkey=pyht3bs1s9iwjjia78dyrbofd&st=acjpg3nn&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 219,
    name: "Hybrid EGEO 70ml.",
    price: "2.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/8l62gwqay3ig1ho03658o/hybrid-egeo-70ml.jpg?rlkey=31qmg00vxybgvaprbxiz3o3pe&st=q19ete7d&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 220,
    name: "Hybrid SALMÓN 70ml.",
    price: "2.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/p2qkoypgx3yix7trb9n6w/hybrid-salmon-70ml.jpg?rlkey=rf0weppjie8vvdu3tnwkksbw8&st=nr71vn5t&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 221,
    name: "Hybrid NEGRO ANTRACITA 70ml.",
    price: "2.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/3e0dggs0r43y4x3gyup08/hybrid-negro-antracita-70ml.jpg?rlkey=oxzxjxcisim75l135jz7yk9aa&st=6hvg7nr8&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 222,
    name: "Hybrid SPRING 500ml.",
    price: "15.70",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/flewe25oj73tcrynqz1kj/hybrid-spring-500ml.jpg?rlkey=9nkxtljpg1yrbxdkowvj4m6em&st=y2t69sw7&dl=0",
    ],
    label: "500 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 223,
    name: "Hybrid CHAMPAIGNE 500ml.",
    price: "15.70",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/ewnrexp1ln1goshw1hfgn/hybrid-champaigne-500ml.jpg?rlkey=ipbmm758zp671ovmnbngudctg&st=awt5rs3s&dl=0",
    ],
    label: "500 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 224,
    name: "Hybrid OCÉANO 500ml.",
    price: "15.70",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/wiyuipm8uidjwhbi44ocl/hybrid-oceano-500ml.jpg?rlkey=by8636q5o46teghxq6ihu46fj&st=hp5posjt&dl=0",
    ],
    label: "500 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 225,
    name: "Hybrid NEGRO ANTRACITA 500ml.",
    price: "15.70",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/cny4ybopkuzjytvsff251/hybrid-oceano-70ml.jpg?rlkey=5aqd25xdf5006mkxplagmy9eh&st=3ep8cfv0&dl=0",
    ],
    label: "500 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 226,
    name: "Hybrid CENIZA 70ml.",
    price: "2.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/hvwq7lssknoq5n1cr8ptm/hybrid-ceniza-70ml.jpg?rlkey=xtn1rhnnmx1858lr01a0myea5&st=n9o5rsi2&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 227,
    name: "Hybrid SISAL 70ml.",
    price: "2.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/08ap8eknjff6dy3bc094n/hybrid-sisal-70ml.jpg?rlkey=sir0e1of0o6loduzolozgm1a8&st=hcdune94&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 228,
    name: "Hybrid SOHO 70ml.",
    price: "2.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/w4di22nwx2a9whqyaqei3/hybrid-soho-70ml.jpg?rlkey=tze3f4mx8eop88zulexzfnhvs&st=vd3k0wmd&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 229,
    name: "Hybrid COSTA MARFIL 70ml.",
    price: "2.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/xwidkvupilxz9xhpzgro8/hybrid-costa-marfil-70ml.jpg?rlkey=p6cyh18n7y8qtiyarfp8ti5xb&st=xad3iilu&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 230,
    name: "Hybrid VAHA 70ml.",
    price: "2.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/pkl6kkzhd2llf10z3aw8v/hybrid-vaha-70ml.jpg?rlkey=6x2d82oqcj4sg3uealnpg6p2d&st=zrsldcnj&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 231,
    name: "Hybrid JARDÍN TIBETANO 70ml.",
    price: "2.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/ebetjw8sm5s3or5gviwnq/hybrid-jardin-tibetano-70ml.jpg?rlkey=f30j5244lg3hus7pmz7fc9uiz&st=4daxwjaw&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 232,
    name: "Hybrid PALAMO 70ml.",
    price: "2.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/re7alqmv1ah3077k9wj1e/hybrid-palamo-70ml.jpg?rlkey=c76jj5pzzv4l50t1dgg8ug6b0&st=c9ysexis&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 233,
    name: "Hybrid PIEDRA 70ml.",
    price: "2.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/hf8bvrj7a9fxl94deqrd2/hybrid-piedra-70ml.jpg?rlkey=47w2ai3gyj62fz2n1sfx4jf74&st=k8kk2b3x&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 234,
    name: "Hybrid AZUL OSCURO 70ml.",
    price: "2.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/o5603cygukpob8w3ygg5k/hybrid-azul-oscuro-70ml.jpg?rlkey=q5nb4lz2uwrcuamk6dhll8rqc&st=0xkrbqx6&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 235,
    name: "Hybrid VERDE TREBOL 70ml.",
    price: "2.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/dds9f3pavy6x6tkexitma/hybrid-verde-trebol-70ml.jpg?rlkey=wi68cc90l6al6rynb9bbvck7f&st=93sg5dt0&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 236,
    name: "Hybrid VISÓN 70ml.",
    price: "2.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/1aanf3oh1pxtuqkzpi9dw/hybrid-vison-70ml.jpg?rlkey=1a8uwzn9ihpsiyzhmtac2s22c&st=aecehu8l&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 237,
    name: "Hybrid ARDUVAZ GRIS 70ml.",
    price: "2.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/jfkf7n8vsr422nqj3xcl8/hybrid-arduvaz-gris-70ml.jpg?rlkey=wgwazyn2o3mjz5efqthdvo6d9&st=b91czthi&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 238,
    name: "Hybrid ROJO SANGRE 70ml.",
    price: "2.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/yjgi04m1ca1et1oygynjw/hybrid-rojo-sangre-70ml.jpg?rlkey=s35cqyqnd1a2xcrcj5qhbmo7l&st=k0f6nu97&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 239,
    name: "Hybrid ROJO CARMÍN 70ml.",
    price: "2.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/n661srzsbxh9cknx6scg6/hybrid-rojo-carmin-70ml.jpg?rlkey=vgl3d9inae93bsox50dctfvoq&st=hhkuawwg&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 240,
    name: "Hybrid VERDE OXFORD 70ml.",
    price: "2.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/2g0eteozgibjx0lco1xhp/hybrid-verde-oxford-70ml.jpg?rlkey=scu99i3oo1bjs7mx93mvi7dea&st=6ehckw86&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 241,
    name: "Hybrid VERDE MUSGO 70ml.",
    price: "2.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/0szonwqrcmany813kb4ob/hybrid-verde-musgo-70ml.jpg?rlkey=23p8fxraqymg88memb54qo80b&st=neh7kf1u&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 242,
    name: "Hybrid VERDE TILO 70ml.",
    price: 4.0,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/ni77eueofjyvhpkr9b47t/hybrid-verde-tilo-70ml.jpg?rlkey=1iwt4j8by2goqhgs5rlm57ue0&st=6i7ga5tf&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 243,
    name: "Hybrid SALVIA CLARA 70ml.",
    price: "15.70",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/i9rrl5b9vl2pqm4ctxgx1/hybrid-salvia-clara-70ml.jpg?rlkey=ogqqdubegnbxxbuzp5oy4xw1z&st=wubie8k9&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 244,
    name: "Hybrid VERDE PISTACHO 70ml.",
    price: "15.70",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/n7992rd1rjic04o63s95z/hybrid-verde-pistacho-70ml.jpg?rlkey=mwtakblgrmogapqwmutd1rh9c&st=fsx9186v&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 245,
    name: "Hybrid VERDE CLARO 70ml.",
    price: "15.70",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/f6uv93eyma2v5ny8gxe44/hybrid-verde-claro-70ml.jpg?rlkey=gvaqo2k2i9pq8e894eja7sxsm&st=c63vxjx3&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 246,
    name: "Hybrid TURQUESA 70ml.",
    price: "2.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/ff4bqtxc2k7lddnhz14of/hybrid-turquesa-70ml.jpg?rlkey=mxso7igsewm4wy1ctg6j0z7j8&st=lnw93c90&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 247,
    name: "Hybrid JARDÍN TIBETANO 500ml.",
    price: "15.70",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/ms3ok23x9o9qv2a85bzwg/hybrid-jardin-tibetano-500ml.jpg?rlkey=degsq6294w36fvn5gtpxnbcxh&st=v5cfniqn&dl=0",
    ],
    label: "500 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 248,
    name: "Hybrid PALAMO 500ml.",
    price: "15.70",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/f9hfbexbux9c5xfjjvsyt/hybrid-palamo-500ml.jpg?rlkey=lmq2ahgfv7jteumqykuyr4p3s&st=8c86u4lf&dl=0",
    ],
    label: "500 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 249,
    name: "Hybrid PIEDRA 500ml.",
    price: "15.70",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/rxnl66rwmakprxbmni8x6/hybrid-piedra-500ml.jpg?rlkey=y6a96wcfyqq5vrzbim3ejn90w&st=w0q3gxsl&dl=0",
    ],
    label: "500 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 250,
    name: "Hybrid AZUL OSCURO 500ml.",
    price: "15.70",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/o5603cygukpob8w3ygg5k/hybrid-azul-oscuro-70ml.jpg?rlkey=q5nb4lz2uwrcuamk6dhll8rqc&st=g7cqlf46&dl=0",
    ],
    label: "500 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 251,
    name: "Hybrid NEGRO 500ml.",
    price: "15.70",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/jikiuoy47tm6op07r8gil/hybrid-negro-500ml.jpg?rlkey=s1s17cwmh8gsl9xren203sgbk&st=mb32f95a&dl=0",
    ],
    label: "500 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 252,
    name: "Hybrid VISÓN 500ml.",
    price: "15.70",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/fvqq77468beefrft0mz6p/hybrid-vison-500ml.jpg?rlkey=orlb9eysvxk8qe5lwnrjg1m36&st=8gfe3ykw&dl=0",
    ],
    label: "500 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 253,
    name: "Hybrid PIZARRA 500ml.",
    price: "15.70",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/w7vntpbrea18a3th1lbs4/hybrid-gris-pizarra-500ml.jpg?rlkey=puouro3fxtowqdpy6f8u6btbt&st=2wlmc3yi&dl=0",
    ],
    label: "500 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 254,
    name: "Hybrid ARDUVAZ GRIS 500ml.",
    price: "15.70",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/g8poz2caweww3d38fjece/hybrid-arduvaz-gris-500ml.jpg?rlkey=a0g824e9erhsl862kk7koq5pn&st=92fcbcjp&dl=0",
    ],
    label: "500 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 255,
    name: "Hybrid VERDE HOJA 500ml.",
    price: "15.70",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/ouqrx2fiakhu6ty3bhtw6/hybrid-verde-hoja-500ml.jpg?rlkey=pcdp87154zru511elm9ecs6z2&st=fk4yv88w&dl=0",
    ],
    label: "500 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 256,
    name: "Hybrid VERDE OXFORD 500ml.",
    price: "15.70",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/kjvqc1leh48viabuse68z/hybrid-verde-oxford-500ml.jpg?rlkey=v25q9i0fiydtb64hpkkupocmu&st=0ubwl9bx&dl=0",
    ],
    label: "500 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 257,
    name: "Hybrid VERDE MUSGO 500ml.",
    price: "15.70",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/x6k9zdwn6wyoxyi1yyr40/hybrid-cadence-musgo-500ml.jpg?rlkey=a7gk04n7ct57ap16rcvh6bmip&st=zepcfe9e&dl=0",
    ],
    label: "500 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 258,
    name: "Hybrid VERDE TILO 500ml.",
    price: "15.70",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/2at51h40l8uqa3soqzmoo/hybrid-verde-tilo-500ml.jpg?rlkey=3lefr4dsdqmojs5czh4oqv6jr&st=lpg06yxl&dl=0",
    ],
    label: "500 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 259,
    name: "Hybrid VERDE FINO 500ml.",
    price: "15.70",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/zl0ypfc9iq52eunzinsr6/hybrid-verde-fino-500ml.jpg?rlkey=uu5kesd1tfjc8uje1c90ywx7r&st=8ay3k11a&dl=0",
    ],
    label: "500 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 260,
    name: "Hybrid SALVIA CLARA 500ml.",
    price: "15.70",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/zolbru4jx0dedkxhz23hs/hybrid-salvia-clara-500ml.jpg?rlkey=vsp4bw4keidf57xmxjb3kn7t5&st=gyedfmn0&dl=0",
    ],
    label: "500 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 261,
    name: "Hybrid VERDE MENTA 500ml.",
    price: "15.70",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/tflxhr0sceunuqr5lteac/hybrid-verde-menta-500ml.jpg?rlkey=80maq7y7paapyup11k8evy6hr&st=in07hpf7&dl=0",
    ],
    label: "500 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 262,
    name: "Hybrid VERDE CLARO 500ml.",
    price: "15.70",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/d1yd5in1qg1gcil8chigh/hybrid-verde-claro-500ml.jpg?rlkey=op3m4besnkslf3r5up1y00xmx&st=pmb4k46s&dl=0",
    ],
    label: "500 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 263,
    name: "Hybrid AZUL NAPOLEÓN 500ml.",
    price: "15.70",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/qj6bjp3jyaa42c48zrull/hybrid-azul-napoleon-500ml.jpg?rlkey=bapic92vbzhm82bla8pxzphze&st=7h15f1zm&dl=0",
    ],
    label: "500 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 264,
    name: "Hybrid NEGRO 120ml.",
    price: 4.0,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/huvatyz12acgghs88fstq/hybrid-negro-120ml.jpg?rlkey=ntgmvyhvtws8h4d2zqmlmnl2u&st=q2t4p5h6&dl=0",
    ],
    label: "120 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 265,
    name: "Hybrid AZUL LAGUNA 70ml.",
    price: "2.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/7ox35vry7ttn6r48xijdu/hybrid-azul-laguna-70ml.jpg?rlkey=d6j6qmxxmeffr15074g9ludtw&st=pny1iznh&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 266,
    name: "Hybrid AZUL ULTRAMARINO 70ml.",
    price: "2.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/7tdc96nb40vwfjwquaut7/hybrid-azul-ultramarino-70ml.jpg?rlkey=k70uspt0c159udlz2fmrwv22n&st=tbtmeagb&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 267,
    name: "Hybrid AZUL REAL 70ml.",
    price: "2.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/i6wa5xs72a2bmounvl8vk/hybrid-azul-real-70ml.jpg?rlkey=40tyuw5kfxqyo99k7r8p8lh0m&st=4i9h346z&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 268,
    name: "Hybrid AZUL BEBÉ 70ml.",
    price: "2.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/ii7ctvzsboi5p8rah5d4j/hybrid-azul-bebe-70ml.jpg?rlkey=v661dltjgt83hpu3vxhjgtnev&st=sa934pki&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 269,
    name: "Hybrid MORADO 70ml.",
    price: "2.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/6zuy9n8sq3ciwqlre7b8g/hybrid-morado-70ml.jpg?rlkey=qn9qhxuo8ila2p6iiv29crn11&st=t3cpsp0w&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 270,
    name: "Hybrid IRIS 70ml.",
    price: "2.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/sptqglp13sk8aqzp6n47m/hybrid-iris-70ml.jpg?rlkey=dlxhd4jkaykikqlk8awr2kr32&st=pfd9xfuj&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 271,
    name: "Hybrid MALVA CLARO 70ml.",
    price: "2.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/m26cdvdbwq5mlk6wsf2cy/hybrid-malva-claro-70ml.jpg?rlkey=g0q0htwsl2e2p1cct8itb4j27&st=xz7q1sr2&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 272,
    name: "Hybrid LILA CLARO 70ml.",
    price: "2.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/1ue6qq6hlqvwnnlnt9p4n/hybrid-lila-70ml.jpg?rlkey=27fpzq35ovj8bes4dprgg6pf0&st=cuxfqwht&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 273,
    name: "Hybrid CAMELOT 70ml.",
    price: "2.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/ao2lfm2dqan20qu324hlk/hybrid-camelot-70ml.jpg?rlkey=2w1ef0ke2svzdzhwkzwgmryo8&st=po8xgg95&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 274,
    name: "Hybrid ROSA VICTORIA 70ml.",
    price: "2.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/m2yrmhchups9yl64z5icm/hybrid-rosa-victoria-70ml.jpg?rlkey=lze13babe2f4tdlm0w6ae16x9&st=oyslrtqz&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 275,
    name: "Hybrid SEDONA 70ml.",
    price: "2.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/sisiajxqxmjk8xi1qzoa5/hybrid-sedona-70ml.jpg?rlkey=q11057a2a0wjc2x6affuz53c3&st=q47i0rrf&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 276,
    name: "Hybrid FLOR DE CACTUS 70ml.",
    price: "2.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/8ahruvx12v2ro4rji5dvz/hybrid-flor-cactus-70ml.jpg?rlkey=a265a6hgcr4t8rpokjgfdrcvp&st=onzrxl1q&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 277,
    name: "Hybrid FUCSIA 70ml.",
    price: "2.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/dgvq4m2r7ujec78ntypqr/hybrid-fucsia-70ml.jpg?rlkey=t2bz5as7z7t7kcfu58zan81zg&st=hzgp1w5k&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 278,
    name: "Hybrid ROSA BEBÉ 70ml.",
    price: "2.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/6adif7nyw0pgy8lo6yk39/hybrid-rosa-bebe-70ml.jpg?rlkey=5wqdo87d7p93y2o20ptx2ns9q&st=4o0do77h&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 279,
    name: "Hybrid ROSA PÁLIDO 70ml.",
    price: "2.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/hnnn8v1uxkiy6n2jrsp3e/hybrid-rosa-palido-70ml.jpg?rlkey=anwewepur2h4r49r6boj5tj1t&st=85cl2oda&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 280,
    name: "Hybrid MARRÓN COLLIER 70ml.",
    price: 4.0,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/75lf6fsrc1s4bauktsaul/hybrid-marron-colier-70ml.jpg?rlkey=kpsgssltcsuzabzxgli5qzd6w&st=ksl386b8&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 281,
    name: "Hybrid AVELLANA CÁLIDO 70ml.",
    price: "15.70",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/cxx6wap1tnizh1pafhjpa/hybrid-avellana-calido-70ml.jpg?rlkey=y6viiw5gg7xx6zvoffp3lm17q&st=ygtgvod8&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 282,
    name: "Hybrid CHOCOLATE OSCURO 70ml.",
    price: "15.70",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/a6k55jyk99rjg9f49tunl/hybrid-chocolate-oscuro-70ml.jpg?rlkey=cvb9s69kky90n317n5oht07x3&st=z6kos8t9&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 283,
    name: "Hybrid CHOCOLATE 70ml.",
    price: "15.70",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/l1g2osatsmqan8negiyql/hybrid-chocolate-70ml.jpg?rlkey=ubefhs8nrhszneaiu92184t3w&st=et1bgaex&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 284,
    name: "Hybrid MARRÓN CÁLIDO 70ml.",
    price: "2.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/xitkum07zrfdiuyelaqrw/hybrid-marron-calido-70ml.jpg?rlkey=jaz5njwwboa6qr79cp0n6m8lp&st=a7hz5h7z&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 285,
    name: "Hybrid ARAROT 70ml.",
    price: "2.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/jf3wmm1v0wkx9dllp1xqc/hybrid-ararot-70ml.jpg?rlkey=i8ell371vt0uf7k374odtfwek&st=0c4l81rn&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 286,
    name: "Hybrid ÁMBAR 70ml.",
    price: "2.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/ptyzbdq1cslxqd4x32mka/hybrid-ambar-70ml.jpg?rlkey=m0lquyy0u2nu83ce15q66ftpy&st=emxekoag&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 287,
    name: "Hybrid NARANJA 70ml.",
    price: "2.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/fzc8qo1qv1k7c36l5jmg7/hybrid-naranja-70ml.jpg?rlkey=6cssfcxy4chwr5d9zrax0sfnh&st=ktwt8jyz&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 288,
    name: "Hybrid NARANJA CLARO 70ml.",
    price: "2.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/0wzz00ypnss70d9yawe4c/hybrid-naranja-claro-70ml.jpg?rlkey=0mmsgosltt1z7slgjhihqmht0&st=8iwct7de&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 289,
    name: "Hybrid AMARILLO 70ml.",
    price: "2.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/7b57g59pee3hbaww44wzb/hybrid-amarillo-70ml.jpg?rlkey=vedshvdbe19535kixoopo6t2n&st=ci3xaana&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 290,
    name: "Hybrid CARAMELO 70ml.",
    price: "2.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/5vvja1c5tffq4lcor5iyd/hybrid-caramelo-70ml.jpg?rlkey=0yocdycvjzewflgxjaydz4cav&st=gxzq60sv&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 291,
    name: "Hybrid BLANCO ANTIGUO 70ml.",
    price: "2.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/39je79wde9qsi7utzpj08/hybrid-blanco-antiguo-70ml.jpg?rlkey=v2hc6qnmouao84d9jaja0e8y2&st=vguevlim&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 292,
    name: "Hybrid BLANCO 70ml.",
    price: "2.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/ltzqszt95sao4wtb5rzm3/hybrid-blanco-70ml.jpg?rlkey=lc9l9oup827aadkb9i0p92unk&st=8ri3y549&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 293,
    name: "Hybrid AZUL LAGUNA 500ml.",
    price: "15.70",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/1w2d0osyltzth8akgwb46/hybrid-azul-laguna-500ml.jpg?rlkey=0bz6cyejvle2jal3ooguah9pr&st=gmpcbi50&dl=0",
    ],
    label: "500 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 294,
    name: "Hybrid AZUL ULTRAMARINO 500ml.",
    price: "15.70",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/yj25ag2hevw19zm9h33oa/hybrid-azul-ultramarino-500ml.jpg?rlkey=7g3vr9r62u02katrrmzhqo13j&st=pxdn9rxc&dl=0",
    ],
    label: "500 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 295,
    name: "Hybrid AZUL BEBÉ 500ml.",
    price: "15.70",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/m4xquh3yqtfig7xzjb9rt/hybrid-azul-bebe-500ml.jpg?rlkey=f76hjq2s0tbb236d2nuss99xz&st=ifw633bh&dl=0",
    ],
    label: "500 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 296,
    name: "Hybrid MALVA CLARO 500ml.",
    price: "15.70",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/7qcq45ozn0nhaw1ztgfu8/hybrid-malva-claro-500ml.jpg?rlkey=5r11fek10te68ggr4fpeurupr&st=2v7q7ncs&dl=0",
    ],
    label: "500 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 297,
    name: "Hybrid LILA CLARO 500ml.",
    price: "15.70",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/uvlwbqux4eszm7x9xi0fe/hybrid-lila-claro-500ml.jpg?rlkey=8dg44bx124tjg0mewvt8gi9pn&st=bs92audh&dl=0",
    ],
    label: "500 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 298,
    name: "Hybrid CAMELOT 500ml.",
    price: "15.70",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/4or3kglaggvn2ffjm2bx0/hybrid-camelot-500ml.jpg?rlkey=cdkwua7dqbsfigx7dlsioaao2&st=d5fuzpat&dl=0",
    ],
    label: "500 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 299,
    name: "Hybrid ROSA VICTORIA 500ml.",
    price: "15.70",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/5m1a9yhgqtqkkz5r8p9n1/hybrid-rosa-victoria-500ml.jpg?rlkey=ruby4vho3pfvq367grzoclsq8&st=jqmmodv3&dl=0",
    ],
    label: "500 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 300,
    name: "Hybrid SEDONA 500ml.",
    price: "15.70",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/gisusog2exub4ajkbkhfp/hybrid-sedona-500ml.jpg?rlkey=voqrjm5h0zekjo5myhdalz5w8&st=rexyi805&dl=0",
    ],
    label: "500 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 301,
    name: "Hybrid FLOR DE CACTUS 500ml.",
    price: "15.70",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/9e0549j90kmcha8bfauvf/hybrid-flor-cactus-500ml.jpg?rlkey=6gag6s6fz9z3de029i0gjwryz&st=9w2emluz&dl=0",
    ],
    label: "500 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 302,
    name: "Hybrid ROSA BEBÉ 500ml.",
    price: "15.70",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/rb470k3e97uryv79bg97b/hybrid-rosa-bebe-500ml.jpg?rlkey=mk9wyu4jiqwq4cglkdzkozimk&st=ocmjlstw&dl=0",
    ],
    label: "500 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 303,
    name: "Hybrid ROSA PÁLIDO 500ml.",
    price: "15.70",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/qe3gy71qd0geagwg0jmwd/hybrid-rosa-palido-500ml.jpg?rlkey=9nhcfue9o9z64119pzflvliup&st=c1mycki9&dl=0",
    ],
    label: "500 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 304,
    name: "Hybrid MARRÓN COLLIER 500ml.",
    price: "15.70",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/gyq3o2764v3py5an4w7f0/hybrid-marron-colier-500ml.jpg?rlkey=1gtu7jkq896xn0natbbordnq6&st=whnn1yhc&dl=0",
    ],
    label: "500 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 305,
    name: "Hybrid AVELLANA CÁLIDO 500ml.",
    price: "15.70",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/o1qbbxub68q5g18ltvlnj/hybrid-avellana-calido-500ml.jpg?rlkey=39pujxgjjnbm9dn943qestz4w&st=i4hyl8qw&dl=0",
    ],
    label: "500 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 306,
    name: "Hybrid CHOCOLATE OSCURO 500ml.",
    price: "15.70",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/zijf5ifiz4p1ntdobd9l6/hybrid-chocolate-oscuro-500ml.jpg?rlkey=qyfuwsfrbhw5k2s95e8j4umqk&st=lofz2aj7&dl=0",
    ],
    label: "500 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 307,
    name: "Hybrid CHOCOLATE 500ml.",
    price: "15.70",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/k2ala72b0py0p2srqe0s9/hybrid-chocolate-500ml.jpg?rlkey=wa7ermd63va4gn3diulrlgy0k&st=751b1x68&dl=0",
    ],
    label: "500 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 308,
    name: "Hybrid MARRÓN CÁLIDO 500ml.",
    price: "15.70",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/l1g2osatsmqan8negiyql/hybrid-chocolate-70ml.jpg?rlkey=ubefhs8nrhszneaiu92184t3w&st=0fq2u7jp&dl=0",
    ],
    label: "500 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 309,
    name: "Hybrid ARAROT 500ml.",
    price: "15.70",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/dih5scb65cko8tykv80dd/hybrid-ararot-500ml.jpg?rlkey=x26v7lfmr1vrawxidyb5m7gud&st=r7t8kx1j&dl=0",
    ],
    label: "500 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 310,
    name: "Hybrid ÁMBAR 500ml.",
    price: "15.70",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/ghfhwkyf4uif7a5ke2ppi/hybrid-ambar-500ml.jpg?rlkey=knyz4nu6bk2pkivfid2fgjbmp&st=b5jahyee&dl=0",
    ],
    label: "500 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 311,
    name: "Hybrid NARANJA 500ml.",
    price: "15.70",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/4wd5g7ylxh0r1o6z9nik0/hybrid-naranja-500ml.jpg?rlkey=yqusmy9wl2qq3k5qkc90lsq02&st=wfdjodpg&dl=0",
    ],
    label: "500 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 312,
    name: "Hybrid NARANJA CLARO 500ml.",
    price: "15.70",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/7t84mq0oynbzrjd89rt3o/hybrid-naranja-claro-500ml.jpg?rlkey=bx6skvcl8x8jstdg5v5vky6dl&st=9l9jziav&dl=0",
    ],
    label: "500 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 313,
    name: "Hybrid AMARILLO 500ml.",
    price: "15.70",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/ua8uw6ys40be7b3udjwxm/hybrid-amarillo-500ml.jpg?rlkey=krxm7h1tpldgd7xsewtq560xc&st=al7cnlmd&dl=0",
    ],
    label: "500 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 314,
    name: "Hybrid ENCAJE 500ml.",
    price: "15.70",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/da8b25kwsgz6u6d1w175r/hybrid-encaje-500ml.jpg?rlkey=vsurv4w50iyi7zcj7elmjqbbv&st=fs5cdxqf&dl=0",
    ],
    label: "500 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 315,
    name: "Hybrid CARAMELO 500ml.",
    price: "15.70",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/nsqeyveab0viazd6tw3fc/hybrid-caramelo-500ml.jpg?rlkey=3g9kw1sw3p5wvx5fw1w8oyan8&st=ck9l19m1&dl=0",
    ],
    label: "500 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 316,
    name: "Hybrid ENCAJE 120ml.",
    price: 4.0,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/ot64hlq0qbxt3dvhfpo00/hybrid-encaje-120ml.jpg?rlkey=4kjsdbaxc3wvbzj48a5bm8eui&st=745vg90l&dl=0",
    ],
    label: "120 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 317,
    name: "Hybrid CARAMELO 120ml.",
    price: 4.0,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/hjjknqic2m488qh4g556m/hybrid-caramelo-120ml.jpg?rlkey=3vam07a0kbsswmkuthokoo4tb&st=t032ssdr&dl=0",
    ],
    label: "120 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 318,
    name: "Hybrid BLANCO ANTIGUO 120ml.",
    price: 4.0,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/ev6izui6h3sl2c5vbs8si/hybrid-blanco-antiguo-120ml.jpg?rlkey=a1tj2z7rw46gzymquqzm5pgqk&st=vesjd2nt&dl=0",
    ],
    label: "120 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 319,
    name: "Hybrid GRIS PIZARRA OSCURO 500ml.",
    price: "15.70",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/w7vntpbrea18a3th1lbs4/hybrid-gris-pizarra-500ml.jpg?rlkey=puouro3fxtowqdpy6f8u6btbt&st=chn40fxe&dl=0",
    ],
    label: "500 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. ",
    selected: false,
  },
  {
    id: 320,
    name: "Hybrid Metallic NUEZ 70ml.",
    price: "3.30",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/p9p0lw6p8j060i2pc6n21/hybrid-metallic-cadence-nuez.jpg?rlkey=6761jlhwd4ho8kswgkhwmlgt1&st=e00mkw73&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA",
    selected: false,
  },
  {
    id: 321,
    name: "Hybrid Metallic LILA 70ml.",
    price: "3.30",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/85exwovk0x4d0rh06omdi/hybrid-metallic-cadence-lila.jpg?rlkey=lg79bbi6sdjwruf4b2b7pvhd6&st=u1hmrpqo&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA",
    selected: false,
  },
  {
    id: 322,
    name: "Hybrid Metallic AZUL BEBÉ 70ml.",
    price: "3.30",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/1cvicd3gjjx5sphc67ocg/hybrid-metallic-cadence-azulbebe.jpg?rlkey=ygvra1yjkem7pcxgmevuj2ppf&st=gjhg72j6&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA",
    selected: false,
  },
  {
    id: 323,
    name: "Hybrid Metallic ROSA BEBÉ 70ml.",
    price: "3.30",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/sjjqiv7e912e3i6hzkk2f/hybrid-metallic-cadence-rosabebe.jpg?rlkey=aot7178x4so06jy33e28k8on4&st=r3u9g35x&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA",
    selected: false,
  },
  {
    id: 324,
    name: "Hybrid Metallic PLATINO 70ml.",
    price: "3.30",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/xw48sbi5aurz9okmdgxjc/hybrid-metallic-cadence-platino.jpg?rlkey=97mqbhtfyvjk3bwlq0pji9bfd&st=rgi4d166&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA",
    selected: false,
  },
  {
    id: 325,
    name: "Hybrid Metallic BRONCE 70ml.",
    price: "3.30",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/f4v093nkfskebyfh7n5g6/hybrid-metallic-cadence-bronce.jpg?rlkey=85biu824rz3mqbxmfovrddelk&st=a6y8pgi5&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA",
    selected: false,
  },
  {
    id: 326,
    name: "Hybrid Metallic PLATA 70ml.",
    price: "3.30",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/9dh7y1egdu77owh7cl6pb/hybrid-metallic-cadence-plata.jpg?rlkey=flc8b30m8626zyssbiinsqd2z&st=o6g9t8g6&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA",
    selected: false,
  },
  {
    id: 327,
    name: "Hybrid Metallic CHAMPÁN 70ml.",
    price: "3.30",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/mtrdbe2mfmixdolsi9yll/hybrid-metallic-cadence-champan-120.jpg?rlkey=g28n6w2djsn9nam3rflm5xy2p&st=qgkfoiaf&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA",
    selected: false,
  },
  {
    id: 328,
    name: "Hybrid Metallic PERLA 70ml.",
    price: "3.30",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/0x8l2ackq8oq89nwsefrj/hybrid-metallic-cadence-perla.jpg?rlkey=6hkyirf8ub7iv4ezlz80ra41t&st=y81gfmlm&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA",
    selected: false,
  },
  {
    id: 329,
    name: "Hybrid Metallic ORO VIEJO 70ml.",
    price: "3.30",
    images: ["https://i.ibb.co/JKB45bp/hybrid-metallic-cadence-oroviejo.jpg"],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA",
    selected: false,
  },
  {
    id: 330,
    name: "Hybrid Metallic ORO 70ml.",
    price: "3.30",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/6tgodn11cqst0ylb2hyhe/hybrid-metallic-cadence-oro.jpg?rlkey=8z6fraqx43jrsqy46cfk6md09&st=nornb28u&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA",
    selected: false,
  },
  {
    id: 331,
    name: "Hybrid Metallic TOPACIO 70ml.",
    price: "3.30",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/kn5e64mr5rx6w8ixadcyt/hybrid-metallic-cadence-topacio-70.jpg?rlkey=ejysmhb8g6vsrq9iq8a7lrzua&st=p01vjwt5&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA",
    selected: false,
  },
  {
    id: 332,
    name: "Hybrid Metallic COBRE ANTIGUO OSCURO 70ml.",
    price: "3.30",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/blul3jkdioa8sgaq6vh32/hybrid-metallic-cadence-cobreantiguo-70.jpg?rlkey=fh51oqkibhtngbr6uq395nzd7&st=o1rqajmu&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA",
    selected: false,
  },
  {
    id: 333,
    name: "Hybrid Metallic MORADO ANTIGUO 70ml.",
    price: "3.30",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/6ti3czpbfn7ati55xbeis/hybrid-metallic-cadence-moradoantiguo-70.jpg?rlkey=6hxe3fmh2hh6dhxxilrw05lov&st=z4va5p8b&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA",
    selected: false,
  },
  {
    id: 334,
    name: "Hybrid Metallic ROJO ANTIGUO 70ml.",
    price: "3.30",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/6k1i8ytd0ibmpflw52ovb/hybrid-metallic-cadence-rojoantiguo-70.jpg?rlkey=bylwag5u3ncrk400odhhen7sn&st=ijmy885u&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA",
    selected: false,
  },
  {
    id: 335,
    name: "Hybrid Metallic ANTRACITA ANTIGUA 70ml.",
    price: "3.30",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/0gbylqw7ku107cue92g3f/hybrid-metallic-cadence-antracitantigua-70.jpg?rlkey=7sk8etgaiprbqh6gmm4u9vt0t&st=1p5tywtn&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA",
    selected: false,
  },
  {
    id: 336,
    name: "Hybrid Metallic ORO OSCURO 70ml.",
    price: "3.30",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/mjzrlk1acat1kq1k60j4e/hybrid-metallic-cadence-oroscuro-70.jpg?rlkey=m2aog2szttoi0i9erqumx413v&st=v9va64b7&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA",
    selected: false,
  },
  {
    id: 337,
    name: "Hybrid Metallic NEGRO 70ml.",
    price: "3.30",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/w49nvg96brkpvz9kdi5hw/hybrid-metallic-cadence-negro-70.jpg?rlkey=eft8xy6ri0sv8dcf7pfdyy112&st=w651hqnn&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA",
    selected: false,
  },
  {
    id: 338,
    name: "Hybrid Metallic ZAFIRO 70ml.",
    price: "3.30",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/47mf62z0kp7uhn8i7562x/hybrid-metallic-cadence-zafiro-70.jpg?rlkey=6ppjkggfwuh4jl4c36fclh93o&st=swo9x1k4&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA",
    selected: false,
  },
  {
    id: 339,
    name: "Hybrid Metallic TURQUESA 70ml.",
    price: "3.30",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/ty8oys54dc76qmok3s6i2/hybrid-metallic-cadence-turquesa-70.jpg?rlkey=5v1bnwe7bgi3rmfm9qcssgboa&st=rx0s2rvr&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA",
    selected: false,
  },
  {
    id: 340,
    name: "Hybrid Metallic COBRE 70ml.",
    price: "3.30",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/rhb1w26ty411hpd13st6z/hybrid-metallic-cadence-cobre-70.jpg?rlkey=z642qn7lbiqtpy4r3hxmh836t&st=1cojlacu&dl=0",
    ],
    label: "70 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA",
    selected: false,
  },
  {
    id: 341,
    name: "Hybrid Metallic ORO OSCURO 120ml.",
    price: "5.30",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/oy6qj2s2mcy0fp4115w9a/hybrid-metallic-cadence-oroscuro-120.jpg?rlkey=j0k1qfj1cfnnihgs5x0iq7zzo&st=n4ulzt4y&dl=0",
    ],
    label: "120 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA",
    selected: false,
  },
  {
    id: 342,
    name: "Hybrid Metallic PLATINO 120ml.",
    price: "5.30",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/x74qk63mqwdin6094cj7z/hybrid-metallic-cadence-platino-120.jpg?rlkey=a41bnrahg9ogm7kgxv9msj3mi&st=qsaqdwj7&dl=0",
    ],
    label: "120 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA",
    selected: false,
  },
  {
    id: 343,
    name: "Hybrid Metallic PLATA 120ml.",
    price: "5.30",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/msqmr4ubes5iyy5o3kcod/hybrid-metallic-cadence-plata-120.jpg?rlkey=ep4fdkwoaobnsms8gtm7m5ij6&st=i0fcne7d&dl=0",
    ],
    label: "120 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA",
    selected: false,
  },
  {
    id: 344,
    name: "Hybrid Metallic CHAMPÁN 120ml.",
    price: "5.30",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/mtrdbe2mfmixdolsi9yll/hybrid-metallic-cadence-champan-120.jpg?rlkey=g28n6w2djsn9nam3rflm5xy2p&st=60ppirja&dl=0",
    ],
    label: "120 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA",
    selected: false,
  },
  {
    id: 345,
    name: "Hybrid Metallic PERLA 120ml.",
    price: "5.30",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/6xwjtz8cxbnqa51qfkinx/hybrid-metallic-cadence-perla-120.jpg?rlkey=gy84zmktcotnbghd1skqajojg&st=60b8kemz&dl=0",
    ],
    label: "120 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA",
    selected: false,
  },
  {
    id: 346,
    name: "Hybrid Metallic ORO VIEJO 120ml.",
    price: "5.30",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/gxmzc1elkum3mrhlrg2ng/hybrid-metallic-cadence-orobiejo-120.jpg?rlkey=vgs4vxi2rs6dgu8q1siojswi2&st=k9qm9zcy&dl=0",
    ],
    label: "120 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA",
    selected: false,
  },
  {
    id: 347,
    name: "Hybrid Metallic ORO 120ml.",
    price: "5.30",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/h9fw8rnjnmyesma1t0aoq/hybrid-metallic-cadence-oro-120.jpg?rlkey=27j2lt6h5hwycbuzn2rua8h8f&st=rtfx4zwp&dl=0",
    ],
    label: "120 ml.",
    description:
      "Pintura acrílica Multisuperficie a base de agua con una formula de última generación de la marca CADENCE. METALIZADA",
    selected: false,
  },
  {
    id: 557,
    name: "Caja DM Asa 14x12x20cm",
    price: "16.80",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/dql0knxgfq4lqo9hafeqt/caja-dm-asa-14x12x20-cms.jpg?rlkey=igdqk946gcurjsnts5f35rysi&st=kxxpnysa&dl=0",
    ],
    label: "14x12x20",
    description: "Caja DM con asa de cuerda y tapa con bisagras y cierre.",
    selected: false,
  },
  /*
  {
    id: 558,
    name: 'Jaula DM 45x27x20cm',
    price: '47.50',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/m9kmmnt48u3fj8dyg87m0/jaula-dm.jpg?rlkey=1g96p1er4c025tscskfozer82&st=dgbbw3td&dl=0',
    ],
    label: '45x27x20',
    description: 'Jaula de madera estilo vintage para decorar y pintar con productos CADENCE',
    selected: false,
  },
  */
  {
    id: 559,
    name: "Joyero 9 cajones 37.5x15.5x20cm",
    price: "39.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/3g9c3mggp9o2r0wtcznjo/joyero-9-cajones-375x155x20-cm.jpg?rlkey=hze4axfipkpqniehr3wiap1ix&st=emt778l2&dl=0",
    ],
    label: "37.5x15.5x20",
    description: "Joyero con 9 cajones fabricado en madera de DM",
    selected: false,
  },
  {
    id: 560,
    name: "Caja con patas 28x18x21cm",
    price: "20.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/6e5ukpgw1dxki0rit7f5f/caja-patas-28x18x21-cm.jpg?rlkey=jnipfpsatknmo9h7gocgucw26&st=v78ca6ol&dl=0",
    ],
    label: "28x18x21",
    description: "Caja con patas fabricada en madera de DM ",
    selected: false,
  },
  {
    id: 561,
    name: "Mueble 3 cajones Silvia 34x15x28cm",
    price: "39.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/tlc9r694qppi7lrqcite5/mueble-3-cajones-silvia.jpg?rlkey=9ntk9a81nqmrarqr25i2q9p80&st=vnr4xmww&dl=0",
    ],
    label: "28x18x21",
    description: "Cajonera en madera de DM con 3 alturas y tiradores",
    selected: false,
  },
  {
    id: 562,
    name: "Mueblecito Multifuncional 34x21x19cm",
    price: "39.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/r5kymhplgnxe9w968vqm9/mueblecito-multifuncional.jpg?rlkey=auh877wuq954lgryd8upxazjm&st=699sx62f&dl=0",
    ],
    label: "234x21x19",
    description:
      "Mueblecito DM multifuncional con 2 cajones, huecos laterales y parte superior con minicompartimentos",
    selected: false,
  },
  {
    id: 563,
    name: "Caja libro 21x17x5.3cm",
    price: "8.50",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/u2nvxwz9rbdc890da1srl/caja-libro-21x17x53-cms.jpg?rlkey=gpxewex3h97tf0hnm3zw2l9uc&st=18reidpc&dl=0",
    ],
    label: "21x17x5.3",
    description: "Caja con forma de libro, fabricada en madera de DM",
    selected: false,
  },
  {
    id: 564,
    name: "Revistero 2 Espacios DM 38x41x18.5cm",
    price: "27.10",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/xskfe5q28qotdwpau2ux1/revistero-2-espacios-dm.jpg?rlkey=pqdch94t69jx5fgjh7bnyfmep&st=eykvdmnw&dl=0",
    ],
    label: "38x41x18.5",
    description: "Revistero 2 espacios, realizado en madera de DM ",
    selected: false,
  },
  {
    id: 565,
    name: "Huevera DM 12 unidades 25x13x34cm",
    price: "19.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/44b3d3qedyw8hcjmoxjop/huevera-dm-12-unid.jpg?rlkey=gsyx8tz6v3gbl08kj7zi14kq4&st=qwurermy&dl=0",
    ],
    label: "25x13x34",
    description:
      "Soporte fabricado en madera de DM  Listo para pintar o decorar con las pinturas y productos CADENCE.",
    selected: false,
  },
  {
    id: 566,
    name: "Pongotodo III 19x15x18cm",
    price: "17.10",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/str794y5t1ywjq0y55y8p/Pongotodo-III.jpg?rlkey=t5viokrdbxgmklzx2oa8x2i93&st=zphrajwh&dl=0",
    ],
    label: "19x15x18",
    description:
      "Soporte fabricado en madera de DM  Listo para pintar o decorar con las pinturas y productos CADENCE.",
    selected: false,
  },
  {
    id: 567,
    name: "Pongotodo II 21x17x20cm",
    price: "20.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/2eoze8pax7wrz7z905lx3/Pongotodo-2-divisiones.jpg?rlkey=lv203nlks9hvbh0p1ylym029u&st=806k1i92&dl=0",
    ],
    label: "21x17x20",
    description:
      "Soporte fabricado en madera de DM  Listo para pintar o decorar con las pinturas y productos CADENCE.",
    selected: false,
  },
  {
    id: 568,
    name: "Archivador Con Cajón 22x21x36cm",
    price: "29.50",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/1rlqx8fqujsw0k3a1sqks/Archivador-con-cajon.jpg?rlkey=m91ssrbrp74idugb3gypnkfw6&st=f211gv4e&dl=0",
    ],
    label: "22x21x36",
    description:
      "Soporte fabricado en madera de DM  Listo para pintar o decorar con las pinturas y productos CADENCE.",
    selected: false,
  },
  {
    id: 569,
    name: "Portacubos con Patas 13x23x13cm",
    price: "16.80",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/pgw5dn8mx7yo2hglvqt5t/portacubos-con-pastas.jpg?rlkey=71mlx1nazfsbflrzbs8jinl30&st=jb0v6ion&dl=0",
    ],
    label: "13x23x13",
    description:
      "Soporte fabricado en madera de DM  Listo para pintar o decorar con las pinturas y productos CADENCE.",
    selected: false,
  },
  {
    id: 570,
    name: "Organizador Giratorio 22x26x22cm",
    price: "32.50",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/487axgfcfdy9yq911o70i/madera-cadence-1.jpg?rlkey=vnst9bxmz8im9dze35vlkuv3n&st=eolb2xul&dl=0",
    ],
    label: "22x26x22",
    description: "Organizador giratorio fabricado en madera de DM ",
    selected: false,
  },
  {
    id: 571,
    name: "Caja Combada 18x18x12cm",
    price: "17.10",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/e5d5y3du3th5jgl3vraye/madera-cadence-2.jpg?rlkey=1jd4y33zreso4ulcmu8nwk8b1&st=8adn3iub&dl=0",
    ],
    label: "18x18x12",
    description: "Caja combada estilo bombonera, fabricada en madera de DM",
    selected: false,
  },
  {
    id: 572,
    name: "Set Bandejas DM 45x34x5.5cm",
    price: "24.80",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/aazbu8m9zy414imeklxun/madera-dm-cadence.jpg?rlkey=xwu25qott5jfmc5mw7016isyq&st=qc8xm2gm&dl=0",
    ],
    label: "45x34x5.5",
    description: "Set de 2 bandejas con los cantos redondeados.",
    selected: false,
  },
  {
    id: 573,
    name: "Set 2 Bandejas DM 43x30x7cm 34x25x7cm",
    price: "15.00",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/pueum9iuwd9eb44365nkj/set-3-bandejas-dm-cadence.jpg?rlkey=2mg06dfevqmknxyu4pqmr7s6z&st=4e38zp4c&dl=0",
    ],
    label: "43x30x7 34x25x7",
    description: "Set de 2 bandejas con los cantos redondeados.",
    selected: false,
  },
  {
    id: 574,
    name: "Set 3 Bandejas DM 30x40x3cm 25x35x2.5cm 20x30x2.5cm",
    price: "20.10",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/oso16pz44m2jpcs6yp4gz/set-3-bandejas-dm-cadence-1.jpg?rlkey=6la7z32tmjpdim7xodql3xbmw&st=4yq3s7wn&dl=0",
    ],
    label: "30x40x3 25x35x2.5 20x30x2.5",
    description: "Set de 3 bandejas, fabricada en madera de DM ",
    selected: false,
  },
  {
    id: 610,
    name: "Paletina Nº05",
    price: "3.00",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/i0iv0d4ggyu9kisgx5d0n/paletina-montejo.jpg?rlkey=d9gd96vfumq8y44yk0gixfdef&st=lej1jffu&dl=0",
    ],
    label: "paletina",
    description:
      "Paletinas de alta calidad Montejo, serie 4101 de pelo sintético. Ideales para hacer veladuras, pintar grandes superficies en tus trabajos de Home Decor y para la aplicación de barnices e imprimaciones.",
    selected: false,
  },
  {
    id: 611,
    name: "Paletina Nº10",
    price: "4.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/2x7w3wwehm40uh8puk7j0/paletina-montejo-1.jpg?rlkey=vi4dyd9wnz1nu75uftj2xuq2m&st=i1f92fue&dl=0",
    ],
    label: "paletina",
    description:
      "Paletinas de alta calidad Montejo, serie 4101 de pelo sintético. Ideales para hacer veladuras, pintar grandes superficies en tus trabajos de Home Decor y para la aplicación de barnices e imprimaciones.",
    selected: false,
  },
  {
    id: 612,
    name: "Pincel Estarcir VERY CHALKY Nº2",
    price: "2.80",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/ndry6c1nozg1egdknxm70/pincel-estarcir-very-chalky-n2.jpg?rlkey=1cm0eqnhos618g4zvxnox2ohy&st=3iwjjd61&dl=0",
    ],
    label: "pincel",
    description:
      "Pincel para estarcido de mango de madera corto lacado en rosa y pelo de cerda con corte recto. De alta calidad MONTEJO ideal para usar con plantillas o stencil por su corte recto y para la aplicación de las pinturas DORA de Cadence.",
    selected: false,
  },
  {
    id: 613,
    name: "Pincel Estarcir VERY CHALKY nº10",
    price: "4.70",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/largrk4z1basngb6xnbue/pincel-estarcir-very-chalky.jpg?rlkey=k50u0cbjm5r0rofq8vhvg5q8d&st=py2rlj45&dl=0",
    ],
    label: "pincel",
    description:
      "Pincel para estarcido de mango de madera corto lacado en rosa y pelo de cerda con corte recto. De alta calidad MONTEJO ideal para usar con plantillas o stencil por su corte recto y para la aplicación de las pinturas DORA de Cadence.",
    selected: false,
  },
  {
    id: 614,
    name: "Pincel Abanico 464 Nº8",
    price: "4.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/nu5phx8hr7cqoydxavy1x/pincel-abanico-464-n1.jpg?rlkey=ssbfs41agywu34m16unqn8n6s&st=q6j957u5&dl=0",
    ],
    label: "pincel",
    description:
      "Pinceles de alta calidad Montejo, serie 464 para técnicas de: Óleo, Acrílico, Acuarela, Témpera   ",
    selected: false,
  },
  {
    id: 615,
    name: "Espátula metálica 102mm",
    price: "4.35",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/l99kcu9fwq33sdye2qhxe/espatula-metalica-102mm.jpg?rlkey=m6er5t3oddaxzze2uavycib4p&st=mnp5pun1&dl=0",
    ],
    label: "espátula",
    description:
      "Las espátulas ofrecen texturas diferentes a las creadas por el pincel y un contacto más directo con el lienzo.",
    selected: false,
  },
  {
    id: 781,
    name: "Paleta desechable 36 hojas",
    price: "4.50",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/budq77723tjb9dmcc7kh7/paleta-desechable-36-hojas.jpg?rlkey=i3uzk1r4jl8lcjh80ds1djuht&st=d8nscm3z&dl=0",
    ],
    label: "paleta",
    description:
      "Paleta de pintor compuesta por 36 hojas desechables de 22,5x30cm. ",
    selected: false,
  },
  {
    id: 782,
    name: "Pincel redondo serie 460 LINER",
    price: "1.80",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/x2w6wohpv3361x8yfc9h7/pincel-redondo-460-liner.jpg?rlkey=jqhnocmewuf1dt16cokn5tf17&st=f1hq9dic&dl=0",
    ],
    label: "pincel",
    description:
      "Pincel redondo de la serie 460 LINER, ideal para detalles y acabados precisos.",
    selected: false,
  },
  {
    id: 783,
    name: "Pincel redondo serie 460 Nº 0/3",
    price: "1.40",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/55gc63xu19znwi9l0i1vl/pincel-redondo-460-03.jpg?rlkey=5vw6i8ojf78nx5rpouhyc0914&st=bzer2c4t&dl=0",
    ],
    label: "pincel",
    description:
      "Pinceles de alta calidad Montejo, serie 460 para técnicas de: Óleo, Acrílico, Acuarela, Témpera",
    selected: false,
  },
  {
    id: 784,
    name: "Pincel redondo serie 460 Nº 0/5",
    price: "1.30",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/9qacjn46fq4qd2nh4ievn/pincel-redondo-460-05.jpg?rlkey=zfdk677ari6mr1sgucj8s86lv&st=e69lax4l&dl=0",
    ],
    label: "pincel",
    description:
      "Pinceles de alta calidad Montejo, serie 460 para técnicas de: Óleo, Acrílico, Acuarela, Témpera  ",
    selected: false,
  },
  {
    id: 785,
    name: "Pincel redondo serie 460 Nº 0",
    price: "1.55",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/jgj5vwmay9uzxpsdzfzjo/pincel-redondo-460-0.jpg?rlkey=2z3ch6nmazcq6axyuhkxvmr1c&st=dtib8ecy&dl=0",
    ],
    label: "pincel",
    description:
      "Pinceles de alta calidad Montejo, serie 460 para técnicas de: Óleo, Acrílico, Acuarela, Témpera  ",
    selected: false,
  },
  {
    id: 786,
    name: "Pincel plano serie 561 Nº 2",
    price: "1.50",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/8ouhc26bdhrfhvy6r522z/pincel-plano-home-decor-561-2.jpg?rlkey=p7qxxopix9lvvi3a1wdyuai6e&st=vxbw9tgg&dl=0",
    ],
    label: "pincel",
    description:
      "Pinceles de alta calidad Montejo, serie 561 HOME DECOR para técnicas de: Óleo, Acrílico, Acuarela, Témpera",
    selected: false,
  },
  {
    id: 787,
    name: "Pincel plano serie 561 Nº 4",
    price: "1.70",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/f7c674yz35qkh5hzeagr3/pincel-plano-home-decor-561-4.jpg?rlkey=2mvh0i5pqk5jeoxbmez27yycm&st=tdjhnxm8&dl=0",
    ],
    label: "pincel",
    description:
      "Pinceles de alta calidad Montejo, serie 561 HOME DECOR para técnicas de: Óleo, Acrílico, Acuarela, Témpera ",
    selected: false,
  },
  {
    id: 788,
    name: "Pincel plano serie 561 Nº 6",
    price: "1.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/xqd174af307ldkqbk71z8/pincel-plano-home-decor-561-6.jpg?rlkey=asnbr4opzqs0bryekdvcjpnir&st=bfxyehex&dl=0",
    ],
    label: "pincel",
    description:
      "Pinceles de alta calidad Montejo, serie 561 HOME DECOR para técnicas de: Óleo, Acrílico, Acuarela, Témpera ",
    selected: false,
  },
  {
    id: 789,
    name: "Pincel lengua de gato 562 Nº 2",
    price: "1.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/92q735xncor77wx5au13q/pincel-lengua-de-gato-home-decor-562-2.jpg?rlkey=qqy053jjvd03a8vbghv0t7to3&st=pxb13fy5&dl=0",
    ],
    label: "pincel",
    description:
      "Pinceles de alta calidad Montejo, serie 462 para técnicas de: Óleo, Acrílico, Acuarela, Témpera  ",
    selected: false,
  },
  {
    id: 790,
    name: "Pincel lengua de gato 562 Nº 4",
    price: "1.70",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/h6z0hkuaqmx654kmen07g/pincel-lengua-de-gato-home-decor-562-4.jpg?rlkey=r9n9cau4u9x8mffg67bfewzc5&st=zqn1ircm&dl=0",
    ],
    label: "pincel",
    description:
      "Pinceles de alta calidad Montejo, serie 562 HOME DECOR para técnicas de: Óleo, Acrílico, Acuarela, Témpera",
    selected: false,
  },
  {
    id: 791,
    name: "Pincel lengua de gato 562 Nº 6",
    price: "2.00",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/7wy5bzes473ypxflld9ez/pincel-lengua-de-gato-home-decor-562-6.jpg?rlkey=ptvvtbm0bk1qon2kyb6a1decj&st=88t3h2hm&dl=0",
    ],
    label: "pincel",
    description:
      "Pinceles de alta calidad Montejo, serie 562 HOME DECOR para técnicas de: Óleo, Acrílico, Acuarela, Témpera ",
    selected: false,
  },
  {
    id: 792,
    name: "Pincel lengua de gato 562 Nº 8",
    price: "2.40",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/oopfj0rjr86k9o9ztcldk/pincel-lengua-de-gato-home-decor-562-8.jpg?rlkey=97ogr3y96aa6k1z2twdvq43g2&st=s7estugk&dl=0",
    ],
    label: "pincel",
    description:
      "Pinceles de alta calidad Montejo, serie 562 HOME DECOR para técnicas de: Óleo, Acrílico, Acuarela, Témpera ",
    selected: false,
  },
  {
    id: 1007,
    name: "HEAT TRANSFER MEDIUM 90 ml.",
    price: "5.70",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/uhj5p9fgf1g3zr33nxfj4/heat-transfer-medium-90ml.jpg?rlkey=8o0gobu90npwgup6cgdfzdco6&st=orjlar9e&dl=0",
    ],
    label: "90 ml.",
    description:
      "Medium adecuado para aplicar con pincel o espátula a la superficie textil donde se desea trabajar con foil. Después de la aplicación del medium se espera a que seque y después del secado se coloca una lámina de foil. Coloca un paño fino o papel sobre la lámina foil y se plancha con una plancha sin vapor. (Máximo 1 minuto con plancha a 140C) Después de enfriar, se retira la lámina de foil.",
    selected: false,
  },
  {
    id: 1008,
    name: "MIXTION RELIEVE FOIL 70 ml.",
    price: "3.25",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/l5l8tg8mvnt2jf03btk7v/mixtion-foil-cadence.jpg?rlkey=9u77md8kp8qidqxmftw1bfyen&st=thsbq89a&dl=0",
    ],
    label: "70 ml.",
    description:
      "Mixtión adhesivo al agua para crear efectos dimensionales con foil o pan de oro. El bote dispone de una fina cánula con la que crear tus diseños sobre los que aplicar el foil o el pan de oro. Uso: aplicar, esperar a que quede mordiente (pasa de color blanquecino a transparente) y aplicar el foil.",
    selected: false,
  },
  {
    id: 1047,
    name: "CRT164 Papeles ROSSI 70x100cm, 2 uds.",
    price: "10.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/c9kei1pz1kzuhy0kmll76/papeles-rossi-70x100-cm-2-uds-CRT164.jpg?rlkey=ol7smd7buen8wiq65mb0dyldn&st=3wdmua2w&dl=0",
    ],
    label: "70x100cm",
    description:
      "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    selected: false,
  },
  {
    id: 1048,
    name: "CRT169 Papeles ROSSI 70x100cm, 2 uds.",
    price: "10.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/uruwrbu2s26zsj9dh8nkh/papeles-rossi-70x100-cm-2-uds-CRT169.jpg?rlkey=o3rh8oznqs7qzrnm49cqwvh0w&st=x1sevqpg&dl=0",
    ],
    label: "70x100cm",
    description:
      "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    selected: false,
  },
  {
    id: 1049,
    name: "CRT186 Papeles ROSSI 70x100cm, 2 uds.",
    price: "10.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/sc2hqocn1ryp5jy80pjqb/Papeles-ROSSI-70x100-cm-2-uds-CRT186.jpg?rlkey=lb0rkquaquckh648js4rcq1xx&st=be1dl056&dl=0",
    ],
    label: "70x100cm",
    description:
      "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    selected: false,
  },
  {
    id: 1050,
    name: "CRT206 Papeles ROSSI 70x100cm, 2 uds.",
    price: "10.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/k8by0bx4p0hwxw9lmqj2z/papeles-rossi-70x100-cm-2-uds-CRT206.jpg?rlkey=1o3c61gzch64fic268br3uj84&st=3ejm94c9&dl=0",
    ],
    label: "70x100cm",
    description:
      "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    selected: false,
  },
  {
    id: 1051,
    name: "CRT213 Papeles ROSSI 70x100cm, 2 uds.",
    price: "10.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/ac028z50dyt04rk01081j/papeles-rossi-70x100-cm-2-uds-CRT213.jpg?rlkey=bk8mwtkvh0p81rbmzd85lqun2&st=cuogc8nl&dl=0",
    ],
    label: "70x100cm",
    description:
      "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    selected: false,
  },
  {
    id: 1052,
    name: "TSC055-1 Papeles ROSSI 50x70cm, 2 uds.",
    price: "5.30",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/t88lr0yypi95auh3qiui3/papeles-rossi-50x70cm-2-uds-TSC055-1.jpg?rlkey=yn53ogdg23m0vwe4jx5rwrxmf&st=mysiz2s0&dl=0",
    ],
    label: "50x70cm",
    description:
      "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    selected: false,
    note: "Revisar código",
  },
  {
    id: 1053,
    name: "LTP061 Papeles ROSSI 50x70cm, 2 uds.",
    price: "9.25",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/juplzq0v4tmqyykmhwzqc/papeles-rossi-50-x70-cm-2-uds-LTP061.jpg?rlkey=ktarpkxe3tfx3i297qy0tz8ax&st=252x81uj&dl=0",
    ],
    label: "50x70cm",
    description:
      "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    selected: false,
  },
  {
    id: 1054,
    name: "TSC057 Papeles ROSSI 50x70cm, 2 uds.",
    price: "5.30",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/rk5vgv6csrtmso17pe0zv/papeles-rossi-50x70-cm-2-uds-TSC057.jpg?rlkey=y91ncn1x5m2u9u4l4dkhc0rzg&st=noddpnm1&dl=0",
    ],
    label: "50x70cm",
    description:
      "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    selected: false,
    note: "Revisar código",
  },
  {
    id: 1055,
    name: "LTP075 Papeles ROSSI 50x70cm, 2 uds.",
    price: "10.50",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/3hsby4l25wsqt14fwxzfm/papeles-rossi-50-x70-cm-2-uds-LTP075.jpg?rlkey=g4qcnwcwhpdg7pdyjwdxac377&st=3u0to1ld&dl=0",
    ],
    label: "50x70cm",
    description:
      "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    selected: false,
  },
  {
    id: 1056,
    name: "CRT678 Papeles ROSSI 50x70cm, 2 uds.",
    price: "5.30",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/3ohbc0gax0c3hylx3gwuv/papeles-rossi-50x70-cm-2-uds-CRT678.jpg?rlkey=4zleg8v10co0iwst5vivvnttd&st=a6o1znbh&dl=0",
    ],
    label: "50x70cm",
    description:
      "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    selected: false,
  },
  {
    id: 1057,
    name: "CRT201 Papeles ROSSI 50x70cm, 2 uds.",
    price: "5.75",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/1r1pem0eerwou45jveyzf/papeles-rossi-50x70-cm-2-uds-CRT201.jpg?rlkey=sdbp8u1vzlkzk3j5xq4xo2l6d&st=n6bzfuqe&dl=0",
    ],
    label: "50x70cm",
    description:
      "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    selected: false,
  },
  {
    id: 1058,
    name: "CRT150 Papeles ROSSI 50x70cm, 2 uds.",
    price: "5.75",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/zxlyi7fweb6i9nkpu5ay4/papeles-rossi-50x70-cm-2-uds-CRT150.jpg?rlkey=2y03jkosbni3d2o615efb5k7u&st=ff7aog2g&dl=0",
    ],
    label: "50x70cm",
    description:
      "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    selected: false,
  },
  {
    id: 1059,
    name: "LTP113 Papeles ROSSI 50x70cm, 2 uds.",
    price: "11.55",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/m583qjrmzrzgjwsyub3fd/papeles-rossi-50-x70-cm-2-uds-LTP113.jpg?rlkey=2c9dc3kezkioulqlv4bbd0ju6&st=3n46wm2v&dl=0",
    ],
    label: "50x70cm",
    description:
      "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    selected: false,
  },
  {
    id: 1060,
    name: "CRT675 Papeles ROSSI 50x70cm, 2 uds.",
    price: "5.30",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/4swqmwthsn2htr0t7cqpn/papeles-rossi-50x70-cm-2-uds-CRT675.jpg?rlkey=1884r7t2srttex9oyas9z73t1&st=r3tzf0qj&dl=0",
    ],
    label: "50x70cm",
    description:
      "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    selected: false,
  },
  {
    id: 1061,
    name: "CRT089 Papeles ROSSI 50x70cm, 2 uds.",
    price: "5.75",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/2z2w2nilyih1ifk29masz/papeles-rossi-50x70-cm-2-uds-CRT089.jpg?rlkey=nd9u54kr6ycz5hc5drsp67t7d&st=b6chc5ss&dl=0",
    ],
    label: "50x70cm",
    description:
      "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    selected: false,
  },
  {
    id: 1062,
    name: "TSC049 Papeles ROSSI 70x100cm, 2 uds.",
    price: "9.25",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/zf52dxdmwjd8r3p0pblqv/PAPELES-ROSSI-70x100-cm-2-uds-TSC049.jpg?rlkey=aws3bj83se0i0g72mfobkicoi&st=azje75r3&dl=0",
    ],
    label: "70x100cm",
    description:
      "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    selected: false,
  },
  {
    id: 1063,
    name: "TSC001 Papeles ROSSI 70x100cm, 2 uds.",
    price: "9.25",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/xm15lri40mpub2g3pwlrs/PAPELES-ROSSI-70x100-cm-2-uds-TSC001.jpg?rlkey=c8q915jvj20665yrram815w32&st=dymnwxnz&dl=0",
    ],
    label: "70x100cm",
    description:
      "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    selected: false,
    note: "Revisar código",
  },
  {
    id: 1064,
    name: "CRT684 Papeles ROSSI 50x70cm, 2 uds.",
    price: "5.30",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/mjvcbereocpnsgbk63ims/papeles-rossi-70x100-cm-2-uds-CRT684.jpg?rlkey=tg5tsg4meqrkzxonkl066hno4&st=6g0ygrtc&dl=0",
    ],
    label: "50x70cm",
    description:
      "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    selected: false,
  },
  {
    id: 1065,
    name: "CRT078 Papeles ROSSI 50x70cm, 2 uds.",
    price: "5.75",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/9qtojhg1udzxxnwz94xz7/papeles-rossi-50x70-cm-2-uds-CRT078.jpg?rlkey=79dj7wdo1dnun8yhyubfs6xzh&st=7kvf0i53&dl=0",
    ],
    label: "50x70cm",
    description:
      "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    selected: false,
  },
  {
    id: 1066,
    name: "CRT187 Papeles ROSSI 70x100cm, 2 uds.",
    price: "10.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/h5hwilfiaawfl45ey8532/rollo-2-papeles-rossi-CRT187.jpg?rlkey=us17puinb3sfskg3kmbfm5vni&st=bj58u6pj&dl=0",
    ],
    label: "70x100cm",
    description:
      "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    selected: false,
  },
  {
    id: 1067,
    name: "LTP033 Papeles ROSSI 50x70cm, 2 uds.",
    price: "11.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/29096ti4dtijdhlmnownu/rollo-2-papeles-rossi-LTP033.jpg?rlkey=28inco469a4bqkxdjrjrsgiru&st=2ac0adqf&dl=0",
    ],
    label: "50x70cm",
    description:
      "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    selected: false,
  },
  {
    id: 1068,
    name: "CRT687 Papeles ROSSI 50x70cm, 2 uds.",
    price: "5.30",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/jh2z07nbjw2jq73920gny/rollo-2-papeles-rossi-CRT687.jpg?rlkey=8afuqiluyjfb8ulikau3esfrb&st=nnhxvtdh&dl=0",
    ],
    label: "50x70cm",
    description:
      "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    selected: false,
  },
  {
    id: 1069,
    name: "TSC019 Papeles ROSSI 50x70cm, 2 uds.",
    price: "5.30",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/r2mtejjfhk97r0jtc5kkf/rollo-2-papeles-rossi-TSC019.jpg?rlkey=xatetvm8vtmd3k64lmvc8juw3&st=erhak7n4&dl=0",
    ],
    label: "50x70cm",
    description:
      "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    selected: false,
    note: "Revisar código",
  },
  {
    id: 1070,
    name: "TSC037 Papeles ROSSI 50x70cm, 2 uds.",
    price: "5.30",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/qhd3vohrlnr2sxg2dx54i/rollo-2-papeles-rossi-TSC037.jpg?rlkey=73jytbf3bx5crvq12rkq9v2og&st=o03pilxe&dl=0",
    ],
    label: "50x70cm",
    description:
      "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    selected: false,
    note: "Revisar código",
  },
  {
    id: 1071,
    name: "TSC042 Papeles ROSSI 50x70cm, 2 uds.",
    price: "5.30",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/nblotuvs8lhx27whc05wa/rollo-2-papeles-rossi-TSC042.jpg?rlkey=msa5z543r5zllquzrtqe55ycj&st=8hshd9ad&dl=0",
    ],
    label: "50x70cm",
    description:
      "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    selected: false,
  },
  {
    id: 1072,
    name: "CRT178 Papeles ROSSI 50x70cm, 2 uds.",
    price: "5.75",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/7nui7y3t21zp2wii6xo5f/rollo-2-papeles-rossi-CRT178.jpg?rlkey=h0ye0cz8x9bdsi4aq4j12etm1&st=utkv23g6&dl=0",
    ],
    label: "50x70cm",
    description:
      "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    selected: false,
  },
  {
    id: 1073,
    name: "CRT517 Papeles ROSSI 50x70cm, 2 uds.",
    price: "5.30",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/zzqp0blrh7427sr27xf4v/rollo-2-papeles-rossi-CRT517.jpg?rlkey=8zdlpggjhz8ic0k2brb1cdlgk&st=d62t2u0e&dl=0",
    ],
    label: "50x70cm",
    description:
      "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    selected: false,
  },
  {
    id: 1074,
    name: "CRT670 Papeles ROSSI 50x70cm, 2 uds.",
    price: "5.30",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/vlcgol5womh88pv4ft021/rollo-2-papeles-rossi-CRT670.jpg?rlkey=asjkjf0b0euv2btnp7w0yeaxm&st=n9zau6x4&dl=0",
    ],
    label: "50x70cm",
    description:
      "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    selected: false,
  },
  {
    id: 1075,
    name: "CRT679 Papeles ROSSI 50x70cm, 2 uds.",
    price: "5.30",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/lfiu0ejxgije62kldmhfh/rollo-2-papeles-rossi-CRT679.jpg?rlkey=i72tv7ltcye1fbb0hszj8j0fk&st=5za1rws2&dl=0",
    ],
    label: "50x70cm",
    description:
      "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    selected: false,
  },
  {
    id: 1076,
    name: "CRT133 Papeles ROSSI 70x100cm, 2 uds.",
    price: "10.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/j7tb9dnhiskd1pvqhu0z7/rollo-2-papeles-rossi-CRT133.jpg?rlkey=ydl3djfd7xj6uqikbrfp44ier&st=id9ti8jj&dl=0",
    ],
    label: "70x100cm",
    description:
      "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    selected: false,
  },
  {
    id: 1077,
    name: "CRT140 Papeles ROSSI 70x100cm, 2 uds.",
    price: "10.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/ouw3lzlg25ulnzyf2z5m1/rollo-2-papeles-rossi-CRT140.jpg?rlkey=aeu5864bvnkm9jvw8qfwrxlg5&st=uampl2zf&dl=0",
    ],
    label: "70x100cm",
    description:
      "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    selected: false,
  },
  {
    id: 1078,
    name: "CRT135 Papeles ROSSI 70x100cm, 2 uds.",
    price: "10.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/aikqbjlceiwu2w3z21v1g/rollo-2-papeles-rossi-CRT135.jpg?rlkey=0qrpmzi1q7ramswzvj3d9wlr2&st=1clbhsom&dl=0",
    ],
    label: "70x100cm",
    description:
      "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    selected: false,
  },
  {
    id: 1079,
    name: "CRT101 Papeles ROSSI 70x100cm, 2 uds.",
    price: "10.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/kethqf2zo40qtlvhfu7tv/rollo-2-papeles-rossi-CRT101.jpg?rlkey=sxldkrv3egmwlfaaalhb471hi&st=qecxxtf5&dl=0",
    ],
    label: "70x100cm",
    description:
      "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    selected: false,
  },
  {
    id: 1080,
    name: "CRT094 Papeles ROSSI 70x50cm, 2 uds.",
    price: "5.75",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/npm9j1b2js2g93bjgpfx9/rollo-2-papeles-rossi-CRT094.jpg?rlkey=a91alevb47g2x4o7mgxxybu6c&st=mc99wv95&dl=0",
    ],
    label: "70x50cm",
    description:
      "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    selected: false,
  },
  {
    id: 1081,
    name: "TSC059 Papeles ROSSI 70x100cm, 2 uds.",
    price: "9.25",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/2wyhoqzuet6w17ap8kk49/rollo-2-papeles-rossi-TSC059.jpg?rlkey=zicu1dux60ivjtbzy74zeo51z&st=11kbxwuo&dl=0",
    ],
    label: "70x100cm",
    description:
      "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    selected: false,
    note: "Revisar código",
  },
  {
    id: 1082,
    name: "CRT583 Papeles ROSSI 70x100cm, 2 uds.",
    price: "9.25",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/zgcarv6wotjkslz8zq6hb/rollo-2-papeles-rossi-CRT583.jpg?rlkey=id5qhjjc6nzvgsjxvsxlwnrws&st=7jvzuptx&dl=0",
    ],
    label: "70x100cm",
    description:
      "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    selected: false,
  },
  {
    id: 1083,
    name: "LTP037 Papeles ROSSI 50x70cm, 2 uds.",
    price: "6.25",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/m1cvok31qbvopnytej67i/rollo-2-papeles-rossi-LTP037.jpg?rlkey=uy91p6r2qr597fxswkm3503p2&st=2ai7j6f0&dl=0",
    ],
    label: "50x70cm",
    description:
      "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    selected: false,
  },
  {
    id: 1084,
    name: "TSC029 Papeles ROSSI 70x100cm, 2 uds.",
    price: "9.25",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/bhzsd1ctycmls4crulyhf/rollo-2-papeles-rossi-TSC029.jpg?rlkey=9hrwhlthbfnvq6ybxj930m3cp&st=adcoo524&dl=0",
    ],
    label: "70x100cm",
    description:
      "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    selected: false,
  },
  {
    id: 1085,
    name: "CRT519 Papeles ROSSI 50x70cm, 2 uds.",
    price: "5.30",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/98sb4pc78amz7qcc666qm/rollo-2-papeles-rossi-CRT519.jpg?rlkey=shgmuw8nwv2dmb85pcot2s9do&st=yr77mwd5&dl=0",
    ],
    label: "50x70cm",
    description:
      "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    selected: false,
  },
  {
    id: 1086,
    name: "CRT685 Papeles ROSSI 50x70cm, 2 uds.",
    price: "5.30",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/pn0vtr6b95xqbp6nc22ou/rollo-2-papeles-rossi-CRT685.jpg?rlkey=1e7bdgom4hdhoufa4aeek5hzk&st=673ybnr2&dl=0",
    ],
    label: "50x70cm",
    description:
      "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    selected: false,
  },
  {
    id: 651,
    name: "Papel de Arroz A3 Around the World",
    price: "3.50",
    images: [
      "https://www.artesaniasmontejo.com/23095-30564-large_default/rice-paper-a4-around-the-world.jpg",
    ],
    label: "A3",
    description:
      "Es un papel excelente no solo para decoupage sino también para Mix Media, técnicas mixtas y manualidades",
    selected: false,
  },
  {
    id: 652,
    name: "Papel de Arroz A4 Around the World",
    price: "2.50",
    images: [
      "https://www.artesaniasmontejo.com/23095-30564-large_default/rice-paper-a4-around-the-world.jpg",
    ],
    label: "A4",
    description:
      "Es un papel excelente no solo para decoupage sino también para Mix Media, técnicas mixtas y manualidades",
    selected: false,
  },
  {
    id: 653,
    name: "Papel de Arroz A3 Rusty Lighthouse",
    price: "3.50",
    images: [
      "https://www.artesaniasmontejo.com/23093-30562-large_default/Rice-Paper-A4-Rusty-Lighthouse.jpg",
    ],
    label: "A3",
    description:
      "Es un papel excelente no solo para decoupage sino también para Mix Media, técnicas mixtas y manualidades",
    selected: false,
  },
  {
    id: 654,
    name: "Papel de Arroz A4 Rusty Lighthouse",
    price: "2.50",
    images: [
      "https://www.artesaniasmontejo.com/23093-30562-large_default/Rice-Paper-A4-Rusty-Lighthouse.jpg",
    ],
    label: "A4",
    description:
      "Es un papel excelente no solo para decoupage sino también para Mix Media, técnicas mixtas y manualidades",
    selected: false,
  },
  {
    id: 655,
    name: "Papel de Arroz A3 Coral Reef Cards",
    price: "3.50",
    images: [
      "https://www.artesaniasmontejo.com/23091-30560-large_default/Rice-Paper-A4-Coral-Reef-cards.jpg",
    ],
    label: "A3",
    description:
      "Es un papel excelente no solo para decoupage sino también para Mix Media, técnicas mixtas y manualidades",
    selected: false,
  },
  {
    id: 656,
    name: "Papel de Arroz A4 Coral Reef Cards",
    price: "2.50",
    images: [
      "https://www.artesaniasmontejo.com/23091-30560-large_default/Rice-Paper-A4-Coral-Reef-cards.jpg",
    ],
    label: "A4",
    description:
      "Es un papel excelente no solo para decoupage sino también para Mix Media, técnicas mixtas y manualidades",
    selected: false,
  },
  {
    id: 657,
    name: "Papel de Arroz A3 Sea Life Elements",
    price: "3.50",
    images: [
      "https://www.artesaniasmontejo.com/23087-30556-large_default/Rice-Paper-A4-Sea-Life-elements.jpg",
    ],
    label: "A3",
    description:
      "Es un papel excelente no solo para decoupage sino también para Mix Media, técnicas mixtas y manualidades",
    selected: false,
  },
  {
    id: 658,
    name: "Papel de Arroz A4 Sea Life Elements",
    price: "2.50",
    images: [
      "https://www.artesaniasmontejo.com/23087-30556-large_default/Rice-Paper-A4-Sea-Life-elements.jpg",
    ],
    label: "A4",
    description:
      "Es un papel excelente no solo para decoupage sino también para Mix Media, técnicas mixtas y manualidades",
    selected: false,
  },
  {
    id: 659,
    name: "Papel de Arroz A3 Coral Reef Mini Cards",
    price: "3.50",
    images: [
      "https://www.artesaniasmontejo.com/23084-30553-large_default/Rice-Paper-A4-Coral-Reef-mini-cards.jpg",
    ],
    label: "A3",
    description:
      "Es un papel excelente no solo para decoupage sino también para Mix Media, técnicas mixtas y manualidades",
    selected: false,
  },
  {
    id: 660,
    name: "Papel de Arroz A4 Coral Reef Mini Cards",
    price: "2.50",
    images: [
      "https://www.artesaniasmontejo.com/23084-30553-large_default/Rice-Paper-A4-Coral-Reef-mini-cards.jpg",
    ],
    label: "A4",
    description:
      "Es un papel excelente no solo para decoupage sino también para Mix Media, técnicas mixtas y manualidades",
    selected: false,
  },
  {
    id: 661,
    name: "Papel de Arroz A3 Mechanical Seahorse",
    price: "3.50",
    images: [
      "https://www.artesaniasmontejo.com/23083-30552-large_default/Rice-Paper-A4-Mechanical-Seahorse.jpg",
    ],
    label: "A3",
    description:
      "Es un papel excelente no solo para decoupage sino también para Mix Media, técnicas mixtas y manualidades",
    selected: false,
  },
  {
    id: 662,
    name: "Papel de Arroz A4 Mechanical Seahorse",
    price: "2.50",
    images: [
      "https://www.artesaniasmontejo.com/23083-30552-large_default/Rice-Paper-A4-Mechanical-Seahorse.jpg",
    ],
    label: "A4",
    description:
      "Es un papel excelente no solo para decoupage sino también para Mix Media, técnicas mixtas y manualidades",
    selected: false,
  },
  {
    id: 663,
    name: "Papel de Arroz A3 Spring Time Elements",
    price: "3.50",
    images: [
      "https://www.artesaniasmontejo.com/23080-30549-large_default/rice-paper-a4-spring-time-elements.jpg",
    ],
    label: "A3",
    description:
      "Es un papel excelente no solo para decoupage sino también para Mix Media, técnicas mixtas y manualidades",
    selected: false,
  },
  {
    id: 664,
    name: "Papel de Arroz A4 Spring Time Elements",
    price: "2.50",
    images: [
      "https://www.artesaniasmontejo.com/23080-30549-large_default/rice-paper-a4-spring-time-elements.jpg",
    ],
    label: "A4",
    description:
      "Es un papel excelente no solo para decoupage sino también para Mix Media, técnicas mixtas y manualidades",
    selected: false,
  },
  {
    id: 665,
    name: "Papel de Arroz A3 Euphoria",
    price: "3.50",
    images: [
      "https://www.artesaniasmontejo.com/23082-30551-large_default/rice-paper-a4-euphoria.jpg",
    ],
    label: "A3",
    description:
      "Es un papel excelente no solo para decoupage sino también para Mix Media, técnicas mixtas y manualidades",
    selected: false,
  },
  {
    id: 666,
    name: "Papel de Arroz A4 Euphoria",
    price: "2.50",
    images: [
      "https://www.artesaniasmontejo.com/23082-30551-large_default/rice-paper-a4-euphoria.jpg",
    ],
    label: "A4",
    description:
      "Es un papel excelente no solo para decoupage sino también para Mix Media, técnicas mixtas y manualidades",
    selected: false,
  },
  {
    id: 667,
    name: "Papel de Arroz A3 Flower Shop Cards",
    price: "3.50",
    images: [
      "https://www.artesaniasmontejo.com/23079-30548-large_default/Rice-Paper-A4-Flower-shop-cards.jpg",
    ],
    label: "A3",
    description:
      "Es un papel excelente no solo para decoupage sino también para Mix Media, técnicas mixtas y manualidades",
    selected: false,
  },
  {
    id: 668,
    name: "Papel de Arroz A4 Flower Shop Cards",
    price: "2.50",
    images: [
      "https://www.artesaniasmontejo.com/23079-30548-large_default/Rice-Paper-A4-Flower-shop-cards.jpg",
    ],
    label: "A4",
    description:
      "Es un papel excelente no solo para decoupage sino también para Mix Media, técnicas mixtas y manualidades",
    selected: false,
  },
  {
    id: 669,
    name: "Papel de Arroz A3 Little Flowers Shops",
    price: "3.50",
    images: [
      "https://www.artesaniasmontejo.com/23074-30543-large_default/rice-paper-a4-little-flowers-shops.jpg",
    ],
    label: "A3",
    description:
      "Es un papel excelente no solo para decoupage sino también para Mix Media, técnicas mixtas y manualidades",
    selected: false,
  },
  {
    id: 670,
    name: "Papel de Arroz A4 Little Flowers Shops",
    price: "2.50",
    images: [
      "https://www.artesaniasmontejo.com/23074-30543-large_default/rice-paper-a4-little-flowers-shops.jpg",
    ],
    label: "A4",
    description:
      "Es un papel excelente no solo para decoupage sino también para Mix Media, técnicas mixtas y manualidades",
    selected: false,
  },
  {
    id: 671,
    name: "Papel de Arroz A3 Imperial Landscape",
    price: "3.50",
    images: [
      "https://www.artesaniasmontejo.com/23071-30540-large_default/Rice-Paper-A4-Imperial-Landscape.jpg",
    ],
    label: "A3",
    description:
      "Es un papel excelente no solo para decoupage sino también para Mix Media, técnicas mixtas y manualidades",
    selected: false,
  },
  {
    id: 672,
    name: "Papel de Arroz A4 Imperial Landscape",
    price: "2.50",
    images: [
      "https://www.artesaniasmontejo.com/23071-30540-large_default/Rice-Paper-A4-Imperial-Landscape.jpg",
    ],
    label: "A4",
    description:
      "Es un papel excelente no solo para decoupage sino también para Mix Media, técnicas mixtas y manualidades",
    selected: false,
  },
  {
    id: 673,
    name: "Papel de Arroz A3 Oriental Enchantment",
    price: "3.50",
    images: [
      "https://www.artesaniasmontejo.com/23068-30537-large_default/Rice-Paper-A4-Oriental-Enchantment.jpg",
    ],
    label: "A3",
    description:
      "Es un papel excelente no solo para decoupage sino también para Mix Media, técnicas mixtas y manualidades",
    selected: false,
  },
  {
    id: 674,
    name: "Papel de Arroz A4 Oriental Enchantment",
    price: "2.50",
    images: [
      "https://www.artesaniasmontejo.com/23068-30537-large_default/Rice-Paper-A4-Oriental-Enchantment.jpg",
    ],
    label: "A4",
    description:
      "Es un papel excelente no solo para decoupage sino también para Mix Media, técnicas mixtas y manualidades",
    selected: false,
  },
  {
    id: 675,
    name: "Papel de Arroz A3 Japanese Tradition",
    price: "3.50",
    images: [
      "https://www.artesaniasmontejo.com/23064-30533-large_default/Rice-Paper-A4-Japanese-tradition.jpg",
    ],
    label: "A3",
    description:
      "Es un papel excelente no solo para decoupage sino también para Mix Media, técnicas mixtas y manualidades",
    selected: false,
  },
  {
    id: 676,
    name: "Papel de Arroz A4 Japanese Tradition",
    price: "2.50",
    images: [
      "https://www.artesaniasmontejo.com/23064-30533-large_default/Rice-Paper-A4-Japanese-tradition.jpg",
    ],
    label: "A4",
    description:
      "Es un papel excelente no solo para decoupage sino también para Mix Media, técnicas mixtas y manualidades",
    selected: false,
  },
  {
    id: 677,
    name: "Papel de Arroz A3 The Dragon",
    price: "3.50",
    images: [
      "https://www.artesaniasmontejo.com/23063-30532-large_default/Rice-Paper-A4-The-Dragon.jpg",
    ],
    label: "A3",
    description:
      "Es un papel excelente no solo para decoupage sino también para Mix Media, técnicas mixtas y manualidades",
    selected: false,
  },
  {
    id: 678,
    name: "Papel de Arroz A4 The Dragon",
    price: "2.50",
    images: [
      "https://www.artesaniasmontejo.com/23063-30532-large_default/Rice-Paper-A4-The-Dragon.jpg",
    ],
    label: "A4",
    description:
      "Es un papel excelente no solo para decoupage sino también para Mix Media, técnicas mixtas y manualidades",
    selected: false,
  },
  {
    id: 679,
    name: "Papel de Arroz A3 Piuma Provence",
    price: "3.50",
    images: [
      "https://www.artesaniasmontejo.com/22905-30330-large_default/rice-paper-a4-piuma-provence.jpg",
    ],
    label: "A3",
    description:
      "Es un papel excelente no solo para decoupage sino también para Mix Media, técnicas mixtas y manualidades",
    selected: false,
  },
  {
    id: 680,
    name: "Papel de Arroz A4 Piuma Provence",
    price: "2.50",
    images: [
      "https://www.artesaniasmontejo.com/22905-30330-large_default/rice-paper-a4-piuma-provence.jpg",
    ],
    label: "A4",
    description:
      "Es un papel excelente no solo para decoupage sino también para Mix Media, técnicas mixtas y manualidades",
    selected: false,
  },
  {
    id: 681,
    name: "Papel de Arroz A3 Piuma Wedding Elements",
    price: "3.50",
    images: [
      "https://www.artesaniasmontejo.com/22676-29944-large_default/rice-paper-a4-piuma-wedding-elements.jpg",
    ],
    label: "A3",
    description:
      "Es un papel excelente no solo para decoupage sino también para Mix Media, técnicas mixtas y manualidades",
    selected: false,
  },
  {
    id: 682,
    name: "Papel de Arroz A4 Piuma Wedding Elements",
    price: "2.50",
    images: [
      "https://www.artesaniasmontejo.com/22676-29944-large_default/rice-paper-a4-piuma-wedding-elements.jpg",
    ],
    label: "A4",
    description:
      "Es un papel excelente no solo para decoupage sino también para Mix Media, técnicas mixtas y manualidades",
    selected: false,
  },
  {
    id: 683,
    name: "Papel de Arroz A3 Piuma Floral Elegance",
    price: "3.50",
    images: [
      "https://www.artesaniasmontejo.com/22667-29935-large_default/rice-paper-a4-piuma-floral-elegance.jpg",
    ],
    label: "A3",
    description:
      "Es un papel excelente no solo para decoupage sino también para Mix Media, técnicas mixtas y manualidades",
    selected: false,
  },
  {
    id: 684,
    name: "Papel de Arroz A4 Piuma Floral Elegance",
    price: "2.50",
    images: [
      "https://www.artesaniasmontejo.com/22667-29935-large_default/rice-paper-a4-piuma-floral-elegance.jpg",
    ],
    label: "A4",
    description:
      "Es un papel excelente no solo para decoupage sino también para Mix Media, técnicas mixtas y manualidades",
    selected: false,
  },
  {
    id: 631,
    name: "Papel de Arroz Soft A3 (SPA5663)",
    price: "3.50",
    images: [
      "https://www.artesaniasmontejo.com/23178-30821-large_default/papel-de-arroz-soft-a3-30x41cm-spa5663.jpg",
    ],
    label: "A3",
    description: "Perfecto para usar en trabajos de decoupage y decoración.",
    selected: false,
  },
  {
    id: 632,
    name: "Papel de Arroz Soft A3 (SPA5679)",
    price: "3.50",
    images: [
      "https://www.artesaniasmontejo.com/23179-30822-large_default/papel-de-arroz-soft-a3-30x41cm-spa5679.jpg",
    ],
    label: "A3",
    description: "Perfecto para usar en trabajos de decoupage y decoración.",
    selected: false,
  },
  {
    id: 633,
    name: "Papel de Arroz Soft A3 (SPA5683)",
    price: "3.50",
    images: [
      "https://www.artesaniasmontejo.com/23180-30823-large_default/papel-de-arroz-soft-a3-30x41cm-spa5683.jpg",
    ],
    label: "A3",
    description: "Perfecto para usar en trabajos de decoupage y decoración.",
    selected: false,
  },
  {
    id: 634,
    name: "Papel de Arroz Soft A3 (SPA5685)",
    price: "3.50",
    images: [
      "https://www.artesaniasmontejo.com/23181-30824-large_default/papel-de-arroz-soft-a3-30x41cm-spa5685.jpg",
    ],
    label: "A3",
    description: "Perfecto para usar en trabajos de decoupage y decoración.",
    selected: false,
  },
  {
    id: 635,
    name: "Papel de Arroz Soft A3 (SPA5686)",
    price: "3.50",
    images: [
      "https://www.artesaniasmontejo.com/23182-30825-large_default/papel-de-arroz-soft-a3-30x41cm-spa5686.jpg",
    ],
    label: "A3",
    description: "Perfecto para usar en trabajos de decoupage y decoración.",
    selected: false,
  },
  {
    id: 636,
    name: "Papel de Arroz Soft A3 (SPA5689)",
    price: "3.50",
    images: [
      "https://www.artesaniasmontejo.com/23184-30827-large_default/papel-de-arroz-soft-a3-30x41cm-spa5689.jpg",
    ],
    label: "A3",
    description: "Perfecto para usar en trabajos de decoupage y decoración.",
    selected: false,
  },
  {
    id: 637,
    name: "Papel de Arroz Soft A3 (SPA5691)",
    price: "3.50",
    images: [
      "https://www.artesaniasmontejo.com/23185-30828-large_default/papel-de-arroz-soft-a3-30x41cm-spa5691.jpg",
    ],
    label: "A3",
    description: "Perfecto para usar en trabajos de decoupage y decoración.",
    selected: false,
  },
  {
    id: 638,
    name: "Papel de Arroz Soft A3 (SPA5693)",
    price: "3.50",
    images: [
      "https://www.artesaniasmontejo.com/23186-30829-large_default/papel-de-arroz-soft-a3-30x41cm-spa5693.jpg",
    ],
    label: "A3",
    description: "Perfecto para usar en trabajos de decoupage y decoración.",
    selected: false,
  },
  {
    id: 639,
    name: "Papel de Arroz Soft A3 (SPA5694)",
    price: "3.50",
    images: [
      "https://www.artesaniasmontejo.com/23187-30830-large_default/papel-de-arroz-soft-a3-30x41cm-spa5694.jpg",
    ],
    label: "A3",
    description: "Perfecto para usar en trabajos de decoupage y decoración.",
    selected: false,
  },
  {
    id: 640,
    name: "Papel de Arroz Soft A3 (SPA5695)",
    price: "3.50",
    images: [
      "https://www.artesaniasmontejo.com/23188-30831-large_default/papel-de-arroz-soft-a3-30x41cm-spa5695.jpg",
    ],
    label: "A3",
    description: "Perfecto para usar en trabajos de decoupage y decoración.",
    selected: false,
  },
  {
    id: 641,
    name: "Papel de Arroz Soft A3 (SPA5696)",
    price: "3.50",
    images: [
      "https://www.artesaniasmontejo.com/23189-30832-large_default/papel-de-arroz-soft-a3-30x41cm-spa5696.jpg",
    ],
    label: "A3",
    description: "Perfecto para usar en trabajos de decoupage y decoración.",
    selected: false,
  },
  {
    id: 642,
    name: "Papel de Arroz Soft A3 (SPA5697)",
    price: "3.50",
    images: [
      "https://www.artesaniasmontejo.com/23190-30833-large_default/papel-de-arroz-soft-a3-30x41cm-spa5697.jpg",
    ],
    label: "A3",
    description: "Perfecto para usar en trabajos de decoupage y decoración.",
    selected: false,
  },
  {
    id: 643,
    name: "Papel de Arroz Soft A3 (SPA5698)",
    price: "3.50",
    images: [
      "https://www.artesaniasmontejo.com/23191-30834-large_default/papel-de-arroz-soft-a3-30x41cm-spa5698.jpg",
    ],
    label: "A3",
    description: "Perfecto para usar en trabajos de decoupage y decoración.",
    selected: false,
  },
  {
    id: 644,
    name: "Papel de Arroz Soft A3 (SPA0224)",
    price: "3.50",
    images: [
      "https://www.artesaniasmontejo.com/20711-26787-large_default/papel-de-arroz-japones-soft-a3.jpg",
    ],
    label: "A3",
    description: "Perfecto para usar en trabajos de decoupage y decoración.",
    selected: false,
  },
  {
    id: 645,
    name: "Papel de Arroz Soft A3 (SPA0653)",
    price: "3.50",
    images: [
      "https://www.artesaniasmontejo.com/20967-27138-large_default/papel-de-arroz-soft-a3-30x41cm-spa0653.jpg",
    ],
    label: "A3",
    description: "Perfecto para usar en trabajos de decoupage y decoración.",
    selected: false,
  },
  {
    id: 646,
    name: "Papel de Arroz Soft A3 (SPA5653)",
    price: "3.50",
    images: [
      "https://www.artesaniasmontejo.com/23048-30517-large_default/papel-de-arroz-soft-a3-30x41cm-spa5653.jpg",
    ],
    label: "A3",
    description: "Perfecto para usar en trabajos de decoupage y decoración.",
    selected: false,
  },
  {
    id: 647,
    name: "Papel de Arroz Soft A3 (SPA5655)",
    price: "3.50",
    images: [
      "https://www.artesaniasmontejo.com/23050-30519-large_default/papel-de-arroz-soft-a3-30x41cm-spa5655.jpg",
    ],
    label: "A3",
    description: "Perfecto para usar en trabajos de decoupage y decoración.",
    selected: false,
  },
  {
    id: 648,
    name: "Papel de Arroz Soft A3 (SPA5663)",
    price: "3.50",
    images: [
      "https://www.artesaniasmontejo.com/23178-30821-large_default/papel-de-arroz-soft-a3-30x41cm-spa5663.jpg",
    ],
    label: "A3",
    description: "Perfecto para usar en trabajos de decoupage y decoración.",
    selected: false,
  },
  {
    id: 649,
    name: "Papel de Arroz Soft A3 (SPA5234)",
    price: "3.50",
    images: [
      "https://www.artesaniasmontejo.com/21566-27867-large_default/papel-de-arroz-soft-a3-30x41cm-spa5234.jpg",
    ],
    label: "A3",
    description: "Perfecto para usar en trabajos de decoupage y decoración.",
    selected: false,
  },
  {
    id: 650,
    name: "Papel de Arroz Soft A3 (SPA5235)",
    price: "3.50",
    images: [
      "https://www.artesaniasmontejo.com/21567-27868-large_default/papel-de-arroz-soft-a3-30x41cm-spa5235.jpg",
    ],
    label: "A3",
    description: "Perfecto para usar en trabajos de decoupage y decoración.",
    selected: false,
  },
  {
    id: 535,
    name: "Marrón DISTRESS PASTE 150ml.",
    price: "5.85",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/5nt9gfx4ec3gelm2dmn9x/distress-paste-negro-hollin.jpg?rlkey=g1h2a2bv4h1spvxlpqodhneue&st=j4nwf5l0&dl=0",
    ],
    label: "150ml",
    description:
      "Pasta de relieve de alta calidad CADENCE, para crear texturas con efectos de patinas vintage, distress, envejecido... Con base de agua y lista para hacer efectos envejecidos sobre papel, fotos, madera, fibras decorativas... Muy facil de usar con pincel o esponja y stencils. Limpieza con agua y jabón",
    selected: false,
  },
  {
    id: 536,
    name: "Negro Hollín DISTRESS PASTE 150ml.",
    price: "5.85",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/clbwhrntouv48o4fedtvl/distress-paste-negro-hollin-1.jpg?rlkey=rul61n5r23c1dc46jdlaf7rgj&st=fa7s4o1p&dl=0",
    ],
    label: "150ml",
    description:
      "Pasta de relieve de alta calidad CADENCE, para crear texturas con efectos de patinas vintage, distress, envejecido... Con base de agua y lista para hacer efectos envejecidos sobre papel, fotos, madera, fibras decorativas... Muy facil de usar con pincel o esponja y stencils. Limpieza con agua y jabón",
    selected: false,
  },
  {
    id: 537,
    name: "Burdeos Antiguo DISTRESS PASTE 150ml.",
    price: "5.85",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/jk6slpcdfzz02vvqfsgzq/distress-paste-burdeos-antiguo.jpg?rlkey=b3o6sde6g1d0j8j4nai849tsv&st=1blysjjq&dl=0",
    ],
    label: "150ml",
    description:
      "Pasta de relieve de alta calidad CADENCE, para crear texturas con efectos de patinas vintage, distress, envejecido... Con base de agua y lista para hacer efectos envejecidos sobre papel, fotos, madera, fibras decorativas... Muy facil de usar con pincel o esponja y stencils. Limpieza con agua y jabón",
    selected: false,
  },
  {
    id: 538,
    name: "Verde Pino DISTRESS PASTE 150ml.",
    price: "5.85",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/p93jwe87y3m0k6341elhp/distress-paste-verde-pino-1.jpg?rlkey=0i6md2hphovr9vpjy9opgp32s&st=q9a6gzv5&dl=0",
    ],
    label: "150ml",
    description:
      "Pasta de relieve de alta calidad CADENCE, para crear texturas con efectos de patinas vintage, distress, envejecido... Con base de agua y lista para hacer efectos envejecidos sobre papel, fotos, madera, fibras decorativas... Muy facil de usar con pincel o esponja y stencils. Limpieza con agua y jabón",
    selected: false,
  },
  {
    id: 539,
    name: "Café Espresso DISTRESS PASTE 150ml.",
    price: "5.85",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/e9wqmxyt3t6l9fm8ck4tm/distress-paste-verde-pino.jpg?rlkey=3pixnywmh6zowo5u0f7d7dx5k&st=pw8j1s3e&dl=0g",
    ],
    label: "150ml",
    description:
      "Pasta de relieve de alta calidad CADENCE, para crear texturas con efectos de patinas vintage, distress, envejecido... Con base de agua y lista para hacer efectos envejecidos sobre papel, fotos, madera, fibras decorativas... Muy facil de usar con pincel o esponja y stencils. Limpieza con agua y jabón",
    selected: false,
  },
  {
    id: 540,
    name: "PEARL Pasta Flexible Metálica 150ml.",
    price: "5.70",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/yb483sh1p1wqrhst80ut0/pasta-flexible-metalica-150ml-cadence.jpg?rlkey=32eijphtgkgj5aqeosi0og23q&st=ydil6owj&dl=0",
    ],
    label: "150ml",
    description:
      "Pasta de relieve Cadence metalizada FLEXIBLE y ligera a base de agua. Se puede trabajar en moldes blandos decorativos y se puede aplicar fácilmente sobre superficies curvas. Colores mezclables entre si.",
    selected: false,
  },
  {
    id: 541,
    name: "SILVER Pasta Flexible Metálica 150ml.",
    price: "5.70",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/yb483sh1p1wqrhst80ut0/pasta-flexible-metalica-150ml-cadence.jpg?rlkey=32eijphtgkgj5aqeosi0og23q&st=ydil6owj&dl=0",
    ],
    label: "150ml",
    description:
      "Pasta de relieve Cadence metalizada FLEXIBLE y ligera a base de agua. Se puede trabajar en moldes blandos decorativos y se puede aplicar fácilmente sobre superficies curvas. Colores mezclables entre si.",
    selected: false,
  },
  {
    id: 542,
    name: "CHAMPAGNE Pasta Flexible Metálica 150ml.",
    price: "5.70",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/lykcecoe1fy53eq93nwis/pasta-flexible-metalica-150ml-cadence-2.jpg?rlkey=fxrez88x8vybmbcxb56919y6q&st=iusmpn3x&dl=0",
    ],
    label: "150ml",
    description:
      "Pasta de relieve Cadence metalizada FLEXIBLE y ligera a base de agua. Se puede trabajar en moldes blandos decorativos y se puede aplicar fácilmente sobre superficies curvas. Colores mezclables entre si.",
    selected: false,
  },
  {
    id: 543,
    name: "ROSE GOLD Pasta Flexible Metálica 150ml.",
    price: "5.70",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/iuf9vdq366kz5qxq17l1e/pasta-flexible-metalica-150ml-cadence-3.jpg?rlkey=mfycxyal17ro7srtog1frkjgh&st=c5udgg15&dl=0",
    ],
    label: "150ml",
    description:
      "Pasta de relieve Cadence metalizada FLEXIBLE y ligera a base de agua. Se puede trabajar en moldes blandos decorativos y se puede aplicar fácilmente sobre superficies curvas. Colores mezclables entre si.",
    selected: false,
  },
  {
    id: 544,
    name: "GOLD Pasta Flexible Metálica 150ml.",
    price: "5.70",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/w3ak0teumn0msrju2awze/pasta-flexible-metalica-150ml-cadence-4.jpg?rlkey=1ym8gr5woxt7vzg5q5fcyow8y&st=m8l5d64e&dl=0",
    ],
    label: "150ml",
    description:
      "Pasta de relieve Cadence metalizada FLEXIBLE y ligera a base de agua. Se puede trabajar en moldes blandos decorativos y se puede aplicar fácilmente sobre superficies curvas. Colores mezclables entre si.",
    selected: false,
  },
  {
    id: 513,
    name: "Mixtion CREAM FOIL BOLD 150ml",
    price: "5.25",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/l5l8tg8mvnt2jf03btk7v/mixtion-foil-cadence.jpg?rlkey=9u77md8kp8qidqxmftw1bfyen&st=gsv5y8fl&dl=0",
    ],
    label: "150ml",
    description:
      "Mixtión adhesivo al agua, estilo pasta de relieve para crear efectos dimensionales con foil o pan de oro, con ayuda de stencils o con técnica libre.",
    selected: false,
  },
  {
    id: 514,
    name: "Mixtion PAN DE ORO 70ml",
    price: "3.25",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/0i35xqky6d8x30nuemtno/mixtion-foil-cadence-1.jpg?rlkey=cmzu6mdnu854mugzevhvdalvo&st=vzj04go3&dl=0",
    ],
    label: "70ml",
    description:
      "Mixtión adhesivo al agua de CADENCE para pegar  pan de oro. Uso: aplicar, esperar a que quede mordiente (pasa de color blanquecino a transparente) y aplicar el pan de oro o plata.    ",
    selected: false,
  },
  {
    id: 515,
    name: "Patina ASFALTO 100ml.",
    price: "3.40",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/5p0usxnnhxum3auyrmrtw/patina-asfalto-cadence.jpg?rlkey=sahb7wpdp389hvgtaej4o9l1f&st=n9mbxjyy&dl=0",
    ],
    label: "100ml",
    description:
      "Medium o pátina de asfalto de la marca CADENCE usada para técnicas de envejecido sobre pan de oro o plata. Tambien se usa para oscurecer pinturas y como pátina de envejecido.",
    selected: false,
  },
  {
    id: 516,
    name: "Imprimación Multiadherente MONTEJO 750ml.",
    price: "19.50",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/5di9qasebp5b8x1cxksgb/imprimacion-multiadherente-montejo-750ml.jpg?rlkey=2r6yzuzb71z2kkp97lxeosxvx&st=evmlctp8&dl=0",
    ],
    label: "750ml",
    description:
      "Imprimación antioxidante que actúa como preparación y/o selladora para pintar todo tipo de superficies. Permite el posterior esmaltado o barnizado, con productos al agua, de metales tales como hierro, zinc, chapa galvanizada, etc. Pintura de fondo para aplicar sobre PVC rígido y materiales plásticos. Fondo sobre azulejo, cerámica y vidrio. Sellado de superficies porosas de yeso, cemento, cartón yeso, superficies pintadas, etc. Revolver bien el contenido del envase. Superficies nuevas: Lijado previo (lija de grano fino) para conseguir cierta rugosidad y abrir poro. Eliminar restos de polvo, grasa, óxido o suciedad en general. Superficies viejas pintadas: Eliminar cualquier resto de pintura en mal estado. Limpiar la superficie de cualquier tipo de polvo, grasa o suciedad que pueda afectar al anclaje. Lijar (grano fino). Recomendado aplicar dos manos finas de IMPRIMACIÓN MULTIUSOS, respetando siempre los intervalos de repintado. Dureza total tras 3-5 días, dependiendo de la temperatura y del espesor de capa, por tanto se debe evitar el contacto con agua u otros elementos que pudieran remover la película antes de su endurecimiento. Dilución: con agua. Diluir entre 10-15% según aplicación.",
    selected: false,
  },
  {
    id: 616,
    name: "RUSTY PATINA Verde",
    price: "8.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/ot74m92shxifyxbwp2lr6/rusty-patina-verde.jpg?rlkey=xz3x2yj4wagbqcl09n6apzthe&st=pfbcpgjn&dl=0",
    ],
    label: "150ml",
    description:
      "Pasta de relieve de alta calidad CADENCE, para crear texturas con efectos de patinas rústicas u oxidadas. Con base de agua y lista para su uso sobre multiples superficies. ",
    selected: false,
  },
  {
    id: 617,
    name: "RUSTY PATINA Gris",
    price: "8.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/0u94jfwwk5bz55vb8lh5z/rusty-patina-gris.jpg?rlkey=tby4boi51yilfv3d8v3ye10uk&st=sgbhdsn6&dl=0",
    ],
    label: "150ml",
    description:
      "Pasta de relieve de alta calidad CADENCE, para crear texturas con efectos de patinas rústicas u oxidadas. Con base de agua y lista para su uso sobre multiples superficies. ",
    selected: false,
  },
  {
    id: 619,
    name: "RUSTY PATINA Crudo",
    price: "8.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/cs2idnmj7ito08c64x6li/rusty-patina-crudo.jpg?rlkey=6dsipjmsu6iw1q8a1oy0nq6cz&st=zfkxv3lf&dl=0",
    ],
    label: "150ml",
    description:
      "Pasta de relieve de alta calidad CADENCE, para crear texturas con efectos de patinas rústicas u oxidadas. Con base de agua y lista para su uso sobre multiples superficies. ",
    selected: false,
  },
  {
    id: 620,
    name: "RUSTY PATINA Óxido Amarillo",
    price: "8.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/sy9diza13fvugaltjl8ik/rusty-patina-oxido-amarillo.jpg?rlkey=8nd2dwm04de0kjeic03hbnyz0&st=h28kxnyz&dl=0",
    ],
    label: "150ml",
    description:
      "Pasta de relieve de alta calidad CADENCE, para crear texturas con efectos de patinas rústicas u oxidadas. Con base de agua y lista para su uso sobre multiples superficies. ",
    selected: false,
  },
  {
    id: 621,
    name: "RUSTY PATINA Verde Moho",
    price: "8.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/sy9diza13fvugaltjl8ik/rusty-patina-oxido-amarillo.jpg?rlkey=8nd2dwm04de0kjeic03hbnyz0&st=h28kxnyz&dl=0",
    ],
    label: "150ml",
    description:
      "Pasta de relieve de alta calidad CADENCE, para crear texturas con efectos de patinas rústicas u oxidadas. Con base de agua y lista para su uso sobre multiples superficies. ",
    selected: false,
  },
  {
    id: 622,
    name: "RUSTY PATINA Marrón",
    price: "8.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/puyxup3fwaziwszw10cp7/rusty-patina-marron.jpg?rlkey=4fu95yqtfw1p75rpohff1qkpk&st=bjoitvaa&dl=0",
    ],
    label: "150ml",
    description:
      "Pasta de relieve de alta calidad CADENCE, para crear texturas con efectos de patinas rústicas u oxidadas. Con base de agua y lista para su uso sobre multiples superficies. ",
    selected: false,
  },
  {
    id: 623,
    name: "RUSTY PATINA Azul Lapislázuli",
    price: "8.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/a0x7jeup0wb3fv5hk9k6w/rusty-patina-azul-lapislazuli.jpg?rlkey=kvs5r7wmuo13zxnmo1cundmk5&st=an6moyvo&dl=0",
    ],
    label: "150ml",
    description:
      "Pasta de relieve de alta calidad CADENCE, para crear texturas con efectos de patinas rústicas u oxidadas. Con base de agua y lista para su uso sobre multiples superficies. ",
    selected: false,
  },
  {
    id: 624,
    name: "RUSTY PATINA Naranja",
    price: "8.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/cvvmviqw3pu1qnohr3oal/rusty-patina-naranja.jpg?rlkey=mmnjyp03waf2uzpwjihml6q5g&st=hl28tovx&dl=0",
    ],
    label: "150ml",
    description:
      "Pasta de relieve de alta calidad CADENCE, para crear texturas con efectos de patinas rústicas u oxidadas. Con base de agua y lista para su uso sobre multiples superficies. ",
    selected: false,
  },
  {
    id: 625,
    name: "RUSTY PATINA Gris Antracita",
    price: "8.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/w851dlxuv2a8cy395kgyn/rusty-patina-gris-antracita.jpg?rlkey=ewu2opek1qnvgsty308h22k6r&st=j5ruamkq&dl=0",
    ],
    label: "150ml",
    description:
      "Pasta de relieve de alta calidad CADENCE, para crear texturas con efectos de patinas rústicas u oxidadas. Con base de agua y lista para su uso sobre multiples superficies. ",
    selected: false,
  },
  {
    id: 626,
    name: "RUSTY PATINA Blanco",
    price: "8.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/df18yirzv0meykruk45fr/rusty-patina-blanco.jpg?rlkey=ipebhohoavfc82nnrvyai8u6w&st=y7228ryt&dl=0",
    ],
    label: "150ml",
    description:
      "Pasta de relieve de alta calidad CADENCE, para crear texturas con efectos de patinas rústicas u oxidadas. Con base de agua y lista para su uso sobre multiples superficies. ",
    selected: false,
  },
  {
    id: 777,
    name: "Light Green PATINA SPRAY 50+50 ml.",
    price: "8.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/yplad4k1rp69ar4dpd6cg/patina-spray-50ml50ml-light-green.jpg?rlkey=dh5e2q1m8sllv54130wa0k3sg&st=rr3cawjq&dl=0",
    ],
    label: "50+50 ml.",
    description:
      "Agitar bien antes de usar. Rocíe la Pintura Patina sobre una superficie pintada o con láminas metálicas y aplique el activador mientras la pintura aún esté húmeda. Deje secar. El tiempo de secado varía entre 2 y 6 horas, dependiendo de la cantidad aplicada. A las 24 horas se verá el resultado final.",
    selected: false,
  },
  {
    id: 778,
    name: "Light Green PATINA SPRAY 50+50 ml.",
    price: "8.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/v6o5zjmhzlpmghh8bse8i/patina-spray-50ml50ml-rust.jpg?rlkey=xh9wxzwcxkf43u51jgyd5uyvc&st=t6idzab7&dl=0",
    ],
    label: "50+50 ml.",
    description:
      "Agitar bien antes de usar. Rocíe la Pintura Patina sobre una superficie pintada o con láminas metálicas y aplique el activador mientras la pintura aún esté húmeda. Deje secar. El tiempo de secado varía entre 2 y 6 horas, dependiendo de la cantidad aplicada. A las 24 horas se verá el resultado final.",
    selected: false,
  },
  {
    id: 779,
    name: "Light Green PATINA SPRAY 50+50 ml.",
    price: "8.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/8irkr19hjh3hag1di52n7/patina-spray-50ml50ml-dark-green.jpg?rlkey=6ef7ud7i302s8smcwxrwjj66s&st=ezg6kef9&dl=0",
    ],
    label: "50+50 ml.",
    description:
      "Agitar bien antes de usar. Rocíe la Pintura Patina sobre una superficie pintada o con láminas metálicas y aplique el activador mientras la pintura aún esté húmeda. Deje secar. El tiempo de secado varía entre 2 y 6 horas, dependiendo de la cantidad aplicada. A las 24 horas se verá el resultado final.",
    selected: false,
  },
  {
    id: 780,
    name: "Light Green PATINA SPRAY 50+50 ml.",
    price: "8.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/7nyfawkvek36usdg52k1m/patina-spray-50ml50ml-blue.jpg?rlkey=s5k79n6ikr7lgof72lnmknvbw&st=xp5douby&dl=0",
    ],
    label: "50+50 ml.",
    description:
      "Agitar bien antes de usar. Rocíe la Pintura Patina sobre una superficie pintada o con láminas metálicas y aplique el activador mientras la pintura aún esté húmeda. Deje secar. El tiempo de secado varía entre 2 y 6 horas, dependiendo de la cantidad aplicada. A las 24 horas se verá el resultado final.",
    selected: false,
  },
  {
    id: 497,
    name: "Pasta de Relieve CRAQUELADOR Cadence 150ml.",
    price: "10.95",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/jddy3lhxw8ekubq7ultcs/relief-paste-cracle-150-ml.jpg?rlkey=8wwff6wt2h27s79ptwb14tmux&st=lzlv4tli&dl=0",
    ],
    label: "150ml",
    description:
      "Esta es una Pasta de Relieve blanca con base de agua, dimensional y de un sólo componente que crea un efecto crackelado cuando se seca al aire. Ideal en superficies porosas. Necesita el Crackle Primer en superficies lisas. Se puede pintar y tintar con pinturas acrílicas Cadence. Para su uso de un sólo componente, la superficie debería de estar pintada. Acabado permanente. Puede ser secado con secador. La pasta se empezará a agrietas conforme se seca, la estructura del crackelado y el tamaño de sus grietas dependerá del grosor de la pasta aplicada. Para grietas más grandes aplique el Primer y una capa gruesa de pasta; y para grietas más finas aplique una capa más delgada.",
    selected: false,
  },
  {
    id: 498,
    name: "Orquídea Oscuro DORA PASTE RELIEF 150ml.",
    price: "9.10",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/yenx53gv7jdmz3v6my6q5/dora-paste-relief-oro-antiguo.jpg?rlkey=7auinkt5t7d6a7loqjk0bz8cw&st=e7ajtth2&dl=0",
    ],
    label: "150ml",
    description:
      "Pasta de relieve de alta calidad CADENCE, para crear texturas dimensionales con efectos metalizados. Con base de agua. Muy facil de usar con pincel o esponja y stencils. Limpieza con agua y jabón.",
    selected: false,
  },
  {
    id: 499,
    name: "Plata DORA PASTE RELIEF 150ml.",
    price: "9.10",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/ea1lhy8jmw6sb8tcopwcw/dora-paste-relief-oro-antiguo-1.jpg?rlkey=irsgfmhptp304zlt62up6w77s&st=8wuba0qx&dl=0",
    ],
    label: "150ml",
    description:
      "Pasta de relieve de alta calidad CADENCE, para crear texturas dimensionales con efectos metalizados. Con base de agua. Muy facil de usar con pincel o esponja y stencils. Limpieza con agua y jabón.",
    selected: false,
  },
  {
    id: 500,
    name: "Antracita DORA PASTE RELIEF 150ml.",
    price: "9.10",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/hmlou73y7af1jtkhqjawc/dora-paste-relief-oro-antiguo-2.jpg?rlkey=zhusk0470db175yd93idq611i&st=44xywsxy&dl=0",
    ],
    label: "150ml",
    description:
      "Pasta de relieve de alta calidad CADENCE, para crear texturas dimensionales con efectos metalizados. Con base de agua. Muy facil de usar con pincel o esponja y stencils. Limpieza con agua y jabón.",
    selected: false,
  },
  {
    id: 501,
    name: "Platino DORA PASTE RELIEF 150ml.",
    price: "9.10",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/er8j6b0bg53kiq9rrd6ei/dora-paste-relief-oro-antiguo-3.jpg?rlkey=kj6s3lsjiyvjekecvc9u2aqoy&st=71ud226u&dl=0",
    ],
    label: "150ml",
    description:
      "Pasta de relieve de alta calidad CADENCE, para crear texturas dimensionales con efectos metalizados. Con base de agua. Muy facil de usar con pincel o esponja y stencils. Limpieza con agua y jabón.",
    selected: false,
  },
  {
    id: 502,
    name: "Naranja DORA PASTE RELIEF 150ml.",
    price: "9.10",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/nqo3osemxnu997c6gbd8v/dora-paste-relief-negro.jpg?rlkey=cwg191p1me0mfjk6pq09rlji2&st=frgixsba&dl=0",
    ],
    label: "150ml",
    description:
      "Pasta de relieve de alta calidad CADENCE, para crear texturas dimensionales con efectos metalizados. Con base de agua. Muy facil de usar con pincel o esponja y stencils. Limpieza con agua y jabón.",
    selected: false,
  },
  {
    id: 503,
    name: "Negro DORA PASTE RELIEF 150ml.",
    price: "9.10",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/nqo3osemxnu997c6gbd8v/dora-paste-relief-negro.jpg?rlkey=cwg191p1me0mfjk6pq09rlji2&st=frgixsba&dl=0",
    ],
    label: "150ml",
    description:
      "Pasta de relieve de alta calidad CADENCE, para crear texturas dimensionales con efectos metalizados. Con base de agua. Muy facil de usar con pincel o esponja y stencils. Limpieza con agua y jabón.",
    selected: false,
  },
  {
    id: 504,
    name: "Anquerita Oscuro DORA PASTE RELIEF 150ml.",
    price: "9.10",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/a2dw5pjlexdocmdf7n2u1/dora-paste-relief-oro.jpg?rlkey=x8bcaf2y6ix4hjoqeyim76gdc&st=2zbsvy40&dl=0",
    ],
    label: "150ml",
    description:
      "Pasta de relieve de alta calidad CADENCE, para crear texturas dimensionales con efectos metalizados. Con base de agua. Muy facil de usar con pincel o esponja y stencils. Limpieza con agua y jabón.",
    selected: false,
  },
  {
    id: 505,
    name: "Oro DORA PASTE RELIEF 150ml.",
    price: "9.10",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/rz2y9tsblzgg3fahxxtbl/dora-paste-relief-oro-1.jpg?rlkey=2995xav7onzwzmak4a65d9j3b&st=3k2l8i33&dl=0",
    ],
    label: "150ml",
    description:
      "Pasta de relieve de alta calidad CADENCE, para crear texturas dimensionales con efectos metalizados. Con base de agua. Muy facil de usar con pincel o esponja y stencils. Limpieza con agua y jabón.",
    selected: false,
  },
  {
    id: 506,
    name: "Diamante DORA PASTE RELIEF 150ml.",
    price: "9.10",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/hos016pzjgbk6mj86mzu1/dora-paste-relief-diamante.jpg?rlkey=iz7nedjjqz34nm88dytxmarlq&st=u70ctl2r&dl=0",
    ],
    label: "150ml",
    description:
      "Pasta de relieve de alta calidad CADENCE, para crear texturas dimensionales con efectos metalizados. Con base de agua. Muy facil de usar con pincel o esponja y stencils. Limpieza con agua y jabón.",
    selected: false,
  },
  {
    id: 507,
    name: "Petróleo DORA PASTE RELIEF 150ml.",
    price: "9.10",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/i5n0ipcj11g32sjtc9qqg/dora-paste-relief-petroleo.jpg?rlkey=starpixa4u5kbibq8rb9e3wd2&st=sfzp6d2r&dl=0",
    ],
    label: "150ml",
    description:
      "Pasta de relieve de alta calidad CADENCE, para crear texturas dimensionales con efectos metalizados. Con base de agua. Muy facil de usar con pincel o esponja y stencils. Limpieza con agua y jabón.",
    selected: false,
  },
  {
    id: 508,
    name: "Malaquita DORA PASTE RELIEF 150ml.",
    price: "9.10",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/o8v80hllgeqeyd7t86eds/dora-paste-relief-malaquita.jpg?rlkey=k0p39xklzhfrhplue1fqvry0g&st=o758lx08&dl=0",
    ],
    label: "150ml",
    description:
      "Pasta de relieve de alta calidad CADENCE, para crear texturas dimensionales con efectos metalizados. Con base de agua. Muy facil de usar con pincel o esponja y stencils. Limpieza con agua y jabón.",
    selected: false,
  },
  {
    id: 509,
    name: "Oro Antiguo DORA PASTE RELIEF 150ml.",
    price: "9.10",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/i9ziftiwb3v6o0pqcksz2/dora-paste-relief-oro-antiguo-4.jpg?rlkey=r6ko6809ouw5t6k9gnlwki492&st=m2mwsfwp&dl=0",
    ],
    label: "150ml",
    description:
      "Pasta de relieve de alta calidad CADENCE, para crear texturas dimensionales con efectos metalizados. Con base de agua. Muy facil de usar con pincel o esponja y stencils. Limpieza con agua y jabón.",
    selected: false,
  },

  {
    id: 510,
    name: "Pasta de Relieve CLÁSICA Cadence 150ml.",
    price: "4.50",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/mh9of6i3njj5pbax2g47z/pasta-de-relieve-clasica-lisa-250-cadence.jpg?rlkey=j25yl7bxp0rrzx0ekou9t6j6n&st=songdigb&dl=0",
    ],
    label: "150ml",
    description:
      "Pasta LISA para crear efectos dimensionales sobre objetos. Formula acrílica con base de agua, el tiempo de secado puede cambiar de acuerdo con el espesor de la pasta. Puede ser aplicada con una espátula, pincel o esponja. Aplicar sobre en superficies duras. Apto para trabajar con stencil y con patrones libres. Limpie los materiales usados con agua. Proteger de las heladas.",
    selected: false,
  },
  {
    id: 511,
    name: "Pasta de Relieve FLEXIBLE Cadence 150ml.",
    price: "6.50",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/nkobztsrr8h2beczx4osm/pasta-de-relieve-flexible-cadence.jpg?rlkey=cx9baj2eamcasalovbuwhcqev&st=2vzvidwg&dl=0",
    ],
    label: "150ml",
    description:
      "Pasta de relieve Cadence FLEXIBLE, satinada y suave con base de agua. Se puede aplicar en moldes decorativos blandos y se puede usar facilmente sobre superficies curvas. Esta pasta puede colorearse.",
    selected: false,
  },
  {
    id: 512,
    name: "Pasta de Relieve CRISTAL Granulada Cadence 150ml.",
    price: "6.50",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/28og2df9ee2sar9e7cicx/pasta-de-relieve-cristal-granulada-cadence.jpg?rlkey=1nyc58ho5ay3kagi46rsl6gjm&st=2uegsypb&dl=0",
    ],
    label: "150ml",
    description:
      "Pasta TRANSPARENTE GRANULADA para crear efectos dimensionales sobre objetos. Formula acrílica con base de agua, el tiempo de secado puede cambiar de acuerdo con el espesor de la pasta. Puede ser aplicada con una espátula, pincel o esponja. Aplicar sobre en superficies duras. Apto para trabajar con stencil y con patrones libres. Limpie los materiales usados con agua. Proteger de las heladas.",
    selected: false,
  },
  {
    id: 517,
    name: "Pasta SHABBY CHIC Salvia 150ml.",
    price: "6.15",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/rom5pndj9wybfn2r6nrz1/pasta-shabby-chic.jpg?rlkey=pus1aco5xpnly4zur3vmbvrcj&st=z32odbls&dl=0",
    ],
    label: "150ml",
    description:
      "Pasta de relieve al agua CADENCE con acabado MATE para dar preciosos efectos de relieve o volumen a tus proyectos de estilo Shabby Chic. Aplicar sobre superficies rígidas usando stencils, espatula, pincel o esponja. Limpieza de utensilios con agua y jabón",
    selected: false,
  },
  {
    id: 518,
    name: "Pasta SHABBY CHIC Menta Claro 150ml.",
    price: "6.15",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/zsck0rpqeox46ef8mey4v/pasta-shabby-chic-1.jpg?rlkey=o4e66dhnirawapsnfe2is6wxd&st=nevm4m8u&dl=0",
    ],
    label: "150ml",
    description:
      "Pasta de relieve al agua CADENCE con acabado MATE para dar preciosos efectos de relieve o volumen a tus proyectos de estilo Shabby Chic. Aplicar sobre superficies rígidas usando stencils, espatula, pincel o esponja. Limpieza de utensilios con agua y jabón",
    selected: false,
  },
  {
    id: 519,
    name: "Pasta SHABBY CHIC Azul Bebé 150ml.",
    price: "6.15",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/vpcp1fseoumbk1s97kwm4/pasta-shabby-chic-2.jpg?rlkey=gcpr94b5dkxyc3x3a4cbsrt3p&st=nuo6z3be&dl=0",
    ],
    label: "150ml",
    description:
      "Pasta de relieve al agua CADENCE con acabado MATE para dar preciosos efectos de relieve o volumen a tus proyectos de estilo Shabby Chic. Aplicar sobre superficies rígidas usando stencils, espatula, pincel o esponja. Limpieza de utensilios con agua y jabón",
    selected: false,
  },
  {
    id: 520,
    name: "Pasta SHABBY CHIC Lavanda 150ml.",
    price: "6.15",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/ck1u2u3cvigrx0kzh6j6z/pasta-shabby-chic-3.jpg?rlkey=kj74huyx0wot2ehjlmbx9xcgv&st=z2cqsoo6&dl=0",
    ],
    label: "150ml",
    description:
      "Pasta de relieve al agua CADENCE con acabado MATE para dar preciosos efectos de relieve o volumen a tus proyectos de estilo Shabby Chic. Aplicar sobre superficies rígidas usando stencils, espatula, pincel o esponja. Limpieza de utensilios con agua y jabón",
    selected: false,
  },
  {
    id: 521,
    name: "Pasta SHABBY CHIC Rosa Bebé 150ml.",
    price: "6.15",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/i44w64xtvjgjw0g48qeqe/pasta-shabby-chic-4.jpg?rlkey=3av1ti7iwo3pempldbvlcyn5g&st=6ijl7k54&dl=0",
    ],
    label: "150ml",
    description:
      "Pasta de relieve al agua CADENCE con acabado MATE para dar preciosos efectos de relieve o volumen a tus proyectos de estilo Shabby Chic. Aplicar sobre superficies rígidas usando stencils, espatula, pincel o esponja. Limpieza de utensilios con agua y jabón",
    selected: false,
  },
  {
    id: 522,
    name: "Pasta SHABBY CHIC Rosa Ceniza 150ml.",
    price: "6.15",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/i44w64xtvjgjw0g48qeqe/pasta-shabby-chic-4.jpg?rlkey=3av1ti7iwo3pempldbvlcyn5g&st=6ijl7k54&dl=0",
    ],
    label: "150ml",
    description:
      "Pasta de relieve al agua CADENCE con acabado MATE para dar preciosos efectos de relieve o volumen a tus proyectos de estilo Shabby Chic. Aplicar sobre superficies rígidas usando stencils, espatula, pincel o esponja. Limpieza de utensilios con agua y jabón",
    selected: false,
  },
  {
    id: 523,
    name: "Pasta SHABBY CHIC Coral Claro 150ml.",
    price: "6.15",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/xnrr3povyxsrxkqoanjj5/pasta-shabby-chic-6.jpg?rlkey=4za0lqr9ru4016pn1183xrksn&st=9bnio0k2&dl=0",
    ],
    label: "150ml",
    description:
      "Pasta de relieve al agua CADENCE con acabado MATE para dar preciosos efectos de relieve o volumen a tus proyectos de estilo Shabby Chic. Aplicar sobre superficies rígidas usando stencils, espatula, pincel o esponja. Limpieza de utensilios con agua y jabón",
    selected: false,
  },
  {
    id: 524,
    name: "Pasta SHABBY CHIC Chocolate 150ml.",
    price: "6.15",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/n4ffbc0mlg5lull4p15nl/pasta-shabby-chic-7.jpg?rlkey=xm6mm4vgwaxsfioyq7f72z4j4&st=tc6ls4ft&dl=0",
    ],
    label: "150ml",
    description:
      "Pasta de relieve al agua CADENCE con acabado MATE para dar preciosos efectos de relieve o volumen a tus proyectos de estilo Shabby Chic. Aplicar sobre superficies rígidas usando stencils, espatula, pincel o esponja. Limpieza de utensilios con agua y jabón",
    selected: false,
  },
  {
    id: 525,
    name: "Pasta SHABBY CHIC Beige Barroco 150ml.",
    price: "6.15",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/bki11vmk100ia3nlp8k1s/pasta-shabby-chic-8.jpg?rlkey=onzwarvekjj2un7tk2eo7s77f&st=vakctmnq&dl=0",
    ],
    label: "150ml",
    description:
      "Pasta de relieve al agua CADENCE con acabado MATE para dar preciosos efectos de relieve o volumen a tus proyectos de estilo Shabby Chic. Aplicar sobre superficies rígidas usando stencils, espatula, pincel o esponja. Limpieza de utensilios con agua y jabón",
    selected: false,
  },
  {
    id: 526,
    name: "Pasta SHABBY CHIC Lino 150ml.",
    price: "6.15",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/vfouj7gv7pqhqfsuletvy/pasta-shabby-chic-9.jpg?rlkey=a40ktupjzm8mvt1a0a8fo7854&st=luf7d8dr&dl=0",
    ],
    label: "150ml",
    description:
      "Pasta de relieve al agua CADENCE con acabado MATE para dar preciosos efectos de relieve o volumen a tus proyectos de estilo Shabby Chic. Aplicar sobre superficies rígidas usando stencils, espatula, pincel o esponja. Limpieza de utensilios con agua y jabón",
    selected: false,
  },
  {
    id: 527,
    name: "Pasta SHABBY CHIC Amarillo Claro 150ml.",
    price: "6.15",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/yuhnfg4iaebnm9ndfnnj3/pasta-shabby-chic-10.jpg?rlkey=n640k2wapx0xga5vshxyq7hgw&st=8fwf4t2x&dl=0",
    ],
    label: "150ml",
    description:
      "Pasta de relieve al agua CADENCE con acabado MATE para dar preciosos efectos de relieve o volumen a tus proyectos de estilo Shabby Chic. Aplicar sobre superficies rígidas usando stencils, espatula, pincel o esponja. Limpieza de utensilios con agua y jabón",
    selected: false,
  },
  {
    id: 528,
    name: "Pasta SHABBY CHIC Taffy 150ml.",
    price: "6.15",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/x5wonwte72kfl9yxeto4u/pasta-shabby-chic-11.jpg?rlkey=8dz4loa7lsql0cwmghdc7h46q&st=3eot3994&dl=0",
    ],
    label: "150ml",
    description:
      "Pasta de relieve al agua CADENCE con acabado MATE para dar preciosos efectos de relieve o volumen a tus proyectos de estilo Shabby Chic. Aplicar sobre superficies rígidas usando stencils, espatula, pincel o esponja. Limpieza de utensilios con agua y jabón",
    selected: false,
  },
  {
    id: 981,
    name: "VERDE PISTACHO Pasta textil FASHION Cadence",
    price: "4.30",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/59d9knt3bd0ot0c7m1xnx/pasta-textil-fashion-cadence-VERDE-PISTACHO.jpg?rlkey=bxejhf5vfbmutleou0ljl06xp&st=nx181zuk&dl=0",
    ],
    label: "50 ml.",
    description:
      "Pasta Textil FASHION de CADENCE. Con base de agua y colores muy vivos para crear efectos dimensionales sobre tejidos. Para su fijación en la tela es necesario planchar la prenda del revés 24h tras su secado. El tiempo de secado puede variar en función a la capa aplicada.",
    selected: false,
  },
  {
    id: 982,
    name: "ROJO CARMESÍ Pasta textil FASHION Cadence",
    price: "4.30",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/nkq6dc3cglk4gaccr60yy/pasta-textil-fashion-cadence-ROJO-CARMESI.jpg?rlkey=i12egbq7fh0buth65r5cbukzk&st=t736edih&dl=0",
    ],
    label: "50 ml.",
    description:
      "Pasta Textil FASHION de CADENCE. Con base de agua y colores muy vivos para crear efectos dimensionales sobre tejidos. Para su fijación en la tela es necesario planchar la prenda del revés 24h tras su secado. El tiempo de secado puede variar en función a la capa aplicada.",
    selected: false,
  },
  {
    id: 983,
    name: "NEGRO Pasta textil FASHION Cadence",
    price: "4.30",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/s1qt2qdaagltjpgu9j6er/pasta-textil-fashion-cadence-NEGRO.jpg?rlkey=xfqhmqel5vdhwditir8102z3p&st=dw5j36ya&dl=0",
    ],
    label: "50 ml.",
    description:
      "Pasta Textil FASHION de CADENCE. Con base de agua y colores muy vivos para crear efectos dimensionales sobre tejidos. Para su fijación en la tela es necesario planchar la prenda del revés 24h tras su secado. El tiempo de secado puede variar en función a la capa aplicada.",
    selected: false,
  },
  {
    id: 984,
    name: "NARANJA Pasta textil FASHION Cadence",
    price: "4.30",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/io7l6ile8jy9hscc0qlfo/pasta-textil-fashion-cadence-NARANJA.jpg?rlkey=rt08omh4wz4o5ah84mi48r0ir&st=7wjjkvkw&dl=0",
    ],
    label: "50 ml.",
    description:
      "Pasta Textil FASHION de CADENCE. Con base de agua y colores muy vivos para crear efectos dimensionales sobre tejidos. Para su fijación en la tela es necesario planchar la prenda del revés 24h tras su secado. El tiempo de secado puede variar en función a la capa aplicada.",
    selected: false,
  },
  {
    id: 985,
    name: "FUCSIA Pasta textil FASHION Cadence",
    price: "4.30",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/i7vyv9wsfeu4k6jixuvaj/pasta-textil-fashion-cadence-FUCSIA.jpg?rlkey=hcpy6jtnki3jyca9jyz9e6kuo&st=kjekldk3&dl=0",
    ],
    label: "50 ml.",
    description:
      "Pasta Textil FASHION de CADENCE. Con base de agua y colores muy vivos para crear efectos dimensionales sobre tejidos. Para su fijación en la tela es necesario planchar la prenda del revés 24h tras su secado. El tiempo de secado puede variar en función a la capa aplicada.",
    selected: false,
  },
  {
    id: 986,
    name: "BLANCO Pasta textil FASHION Cadence",
    price: "4.30",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/uqejrz4ogo4n61am9b7un/pasta-textil-fashion-cadence-BLANCO.jpg?rlkey=7kppxkf9zohyhaudjr2cev4kr&st=bi2wl76e&dl=0",
    ],
    label: "50 ml.",
    description:
      "Pasta Textil FASHION de CADENCE. Con base de agua y colores muy vivos para crear efectos dimensionales sobre tejidos. Para su fijación en la tela es necesario planchar la prenda del revés 24h tras su secado. El tiempo de secado puede variar en función a la capa aplicada.",
    selected: false,
  },
  {
    id: 987,
    name: "BERENJENA Pasta textil FASHION Cadence",
    price: "4.30",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/cumayuo1pnqpxmu885gfc/pasta-textil-fashion-cadence-BERENJENA.jpg?rlkey=jqwlvbknc46m4dtc5zi7926r0&st=jsdzjmvi&dl=0",
    ],
    label: "50 ml.",
    description:
      "Pasta Textil FASHION de CADENCE. Con base de agua y colores muy vivos para crear efectos dimensionales sobre tejidos. Para su fijación en la tela es necesario planchar la prenda del revés 24h tras su secado. El tiempo de secado puede variar en función a la capa aplicada.",
    selected: false,
  },
  {
    id: 988,
    name: "AZUL REAL Pasta textil FASHION Cadence",
    price: "4.30",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/xyra9jvwjp1lysliwdzf4/pasta-textil-fashion-cadence-AZUL-REAL.jpg?rlkey=isq3r5a2daw3ud0t2f6yjl6hf&st=yjzryz29&dl=0",
    ],
    label: "50 ml.",
    description:
      "Pasta Textil FASHION de CADENCE. Con base de agua y colores muy vivos para crear efectos dimensionales sobre tejidos. Para su fijación en la tela es necesario planchar la prenda del revés 24h tras su secado. El tiempo de secado puede variar en función a la capa aplicada.",
    selected: false,
  },
  {
    id: 989,
    name: "AMARILLO LIMÓN Pasta textil FASHION Cadence",
    price: "4.30",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/pmf660bzmzhxut1xgm0z8/pasta-textil-fashion-cadence-AMARILLO-LIMON.jpg?rlkey=p444wx2alyy105y0xkak4z1r7&st=1w251b9x&dl=0",
    ],
    label: "50 ml.",
    description:
      "Pasta Textil FASHION de CADENCE. Con base de agua y colores muy vivos para crear efectos dimensionales sobre tejidos. Para su fijación en la tela es necesario planchar la prenda del revés 24h tras su secado. El tiempo de secado puede variar en función a la capa aplicada.",
    selected: false,
  },
  {
    id: 990,
    name: "VIOLETA Pasta textil FASHION METALLIC Cadence",
    price: "5.50",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/bxdjqpo41chimd0jxqhmw/pasta-textil-fashion-metallic-cadence-VIOLETA.jpg?rlkey=rzlsd0m8o8nzab8xdr3mqd1mb&st=jjq5q7pp&dl=0",
    ],
    label: "50 ml.",
    description:
      "Pasta Textil FASHION de CADENCE. Con base de agua y colores metalizados para crear efectos dimensionales sobre tejidos. Para su fijación en la tela es necesario planchar la prenda del revés 24h tras su secado. El tiempo de secado puede variar en función a la capa aplicada.",
    selected: false,
  },
  {
    id: 991,
    name: "VERDE Pasta textil FASHION METALLIC Cadence",
    price: "5.50",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/8wmki0ktqi5zxcvtgc3pe/pasta-textil-fashion-metallic-cadence-VERDE.jpg?rlkey=vt86a2taojq2n46a99hg9kab8&st=5upn0pxr&dl=0",
    ],
    label: "50 ml.",
    description:
      "Pasta Textil FASHION de CADENCE. Con base de agua y colores metalizados para crear efectos dimensionales sobre tejidos. Para su fijación en la tela es necesario planchar la prenda del revés 24h tras su secado. El tiempo de secado puede variar en función a la capa aplicada.",
    selected: false,
  },
  {
    id: 992,
    name: "ROJO Pasta textil FASHION METALLIC Cadence",
    price: "5.50",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/750yumzbx6pq5w1653y9a/pasta-textil-fashion-metallic-cadence-ROJO.jpg?rlkey=36cmpdv23klvs8xt74u0pxmlf&st=reti4qc1&dl=0",
    ],
    label: "50 ml.",
    description:
      "Pasta Textil FASHION de CADENCE. Con base de agua y colores metalizados para crear efectos dimensionales sobre tejidos. Para su fijación en la tela es necesario planchar la prenda del revés 24h tras su secado. El tiempo de secado puede variar en función a la capa aplicada.",
    selected: false,
  },
  {
    id: 993,
    name: "PLATA Pasta textil FASHION METALLIC Cadence",
    price: "5.50",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/cvp887icynrk5rwwg6bf1/pasta-textil-fashion-metallic-cadence-PLATA.jpg?rlkey=alhbq0wvbxs5a48lqn8xxxcc2&st=2a970wjl&dl=0",
    ],
    label: "50 ml.",
    description:
      "Pasta Textil FASHION de CADENCE. Con base de agua y colores metalizados para crear efectos dimensionales sobre tejidos. Para su fijación en la tela es necesario planchar la prenda del revés 24h tras su secado. El tiempo de secado puede variar en función a la capa aplicada.",
    selected: false,
  },
  {
    id: 994,
    name: "ORO Pasta textil FASHION METALLIC Cadence",
    price: "5.50",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/3gnlg0upokn6npaohm3k0/pasta-textil-fashion-metallic-cadence-ORO.jpg?rlkey=k5rbr2l9mqd73ij8h1v1doqdd&st=uyq73jzf&dl=0",
    ],
    label: "50 ml.",
    description:
      "Pasta Textil FASHION de CADENCE. Con base de agua y colores metalizados para crear efectos dimensionales sobre tejidos. Para su fijación en la tela es necesario planchar la prenda del revés 24h tras su secado. El tiempo de secado puede variar en función a la capa aplicada.",
    selected: false,
  },
  {
    id: 995,
    name: "ORO-ANTIGUO Pasta textil FASHION METALLIC Cadence",
    price: "5.50",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/q3wspefb5yirvqt2l3gip/pasta-textil-fashion-metallic-cadence-ORO-ANTIGUO.jpg?rlkey=9pk068r0itq3gtxm1m9vac4xb&st=m4s9oy23&dl=0",
    ],
    label: "50 ml.",
    description:
      "Pasta Textil FASHION de CADENCE. Con base de agua y colores metalizados para crear efectos dimensionales sobre tejidos. Para su fijación en la tela es necesario planchar la prenda del revés 24h tras su secado. El tiempo de secado puede variar en función a la capa aplicada.",
    selected: false,
  },
  {
    id: 996,
    name: "NEGRO Pasta textil FASHION METALLIC Cadence",
    price: "5.50",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/ezs0lek1e98tmn064oazr/pasta-textil-fashion-metallic-cadence-NEGRO.jpg?rlkey=na5zz12jpiur28kecvwyg24mh&st=vfac44ku&dl=0",
    ],
    label: "50 ml.",
    description:
      "Pasta Textil FASHION de CADENCE. Con base de agua y colores metalizados para crear efectos dimensionales sobre tejidos. Para su fijación en la tela es necesario planchar la prenda del revés 24h tras su secado. El tiempo de secado puede variar en función a la capa aplicada.",
    selected: false,
  },
  {
    id: 997,
    name: "COBRE Pasta textil FASHION METALLIC Cadence",
    price: "5.50",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/rwand8o58m9f9qliofqve/pasta-textil-fashion-metallic-cadence-COBRE.jpg?rlkey=pz1kri07oqgnimnb033147jet&st=715zq0i0&dl=0",
    ],
    label: "50 ml.",
    description:
      "Pasta Textil FASHION de CADENCE. Con base de agua y colores metalizados para crear efectos dimensionales sobre tejidos. Para su fijación en la tela es necesario planchar la prenda del revés 24h tras su secado. El tiempo de secado puede variar en función a la capa aplicada.",
    selected: false,
  },
  {
    id: 998,
    name: "AZUL SAX Pasta textil FASHION METALLIC Cadence",
    price: "5.50",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/12vrgdr8qnc13nbzwmmdr/pasta-textil-fashion-metallic-cadence-AZUL-SAX.jpg?rlkey=3i22kk6xy52tmm4lckwrcg6ge&st=p0pak7za&dl=0",
    ],
    label: "50 ml.",
    description:
      "Pasta Textil FASHION de CADENCE. Con base de agua y colores metalizados para crear efectos dimensionales sobre tejidos. Para su fijación en la tela es necesario planchar la prenda del revés 24h tras su secado. El tiempo de secado puede variar en función a la capa aplicada.",
    selected: false,
  },
  {
    id: 999,
    name: "VERDE Pasta de relieve textil HI-LITE Cadence",
    price: "6.50",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/8lb9wxt7pkag354td9ir5/pasta-relieve-textil-hi-lite-VERDE.jpg?rlkey=t9htr9jtl84bz0v8m6fp58zsl&st=9p2vfb8e&dl=0",
    ],
    label: "150 ml.",
    description:
      "Aplíca esta pasta para conseguir efectos dimensionales sobre tejidos y prendas. Sobre telas claras Hi-Lite es practicamente transparente, aportanto un poco de brillo. Todo su potencial se ve al aplicar esta pasta sobre tejidos y telas oscuras, resaltando así sus brillos irisados. Ideal para usar con stencils o libremente con espátula.",
    selected: false,
  },
  {
    id: 1000,
    name: "ORO Pasta de relieve textil HI-LITE Cadence",
    price: "6.50",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/kbc60iaou18zwiod02sis/pasta-relieve-textil-hi-lite-ORO.jpg?rlkey=8k64qoddbqx7xbdsbn8o9hojn&st=rhd3f0d9&dl=0",
    ],
    label: "150 ml.",
    description:
      "Aplíca esta pasta para conseguir efectos dimensionales sobre tejidos y prendas. Sobre telas claras Hi-Lite es practicamente transparente, aportanto un poco de brillo. Todo su potencial se ve al aplicar esta pasta sobre tejidos y telas oscuras, resaltando así sus brillos irisados. Ideal para usar con stencils o libremente con espátula.",
    selected: false,
  },
  {
    id: 1001,
    name: "AZUL Pasta de relieve textil HI-LITE Cadence",
    price: "6.50",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/se2aqschhtmnii27akxov/pasta-relieve-textil-hi-lite-AZUL.jpg?rlkey=negib4go3lsn0gf8kniyc7nqd&st=wuosjgrv&dl=0",
    ],
    label: "150 ml.",
    description:
      "Aplíca esta pasta para conseguir efectos dimensionales sobre tejidos y prendas. Sobre telas claras Hi-Lite es practicamente transparente, aportanto un poco de brillo. Todo su potencial se ve al aplicar esta pasta sobre tejidos y telas oscuras, resaltando así sus brillos irisados. Ideal para usar con stencils o libremente con espátula.",
    selected: false,
  },
  {
    id: 1002,
    name: "PLATA Pasta de Relieve METTALIC Cadence",
    price: "6.50",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/35bri88fwicgy5xs5plh8/pasta-de-relieve-textil-metallic-PLATA.jpg?rlkey=6qenbv2mi9bn9m2vzg0p1kc91&st=6nauxwyr&dl=0",
    ],
    label: "150 ml.",
    description:
      "Aplíca esta pasta acrílica para conseguir efectos dimensionales sobre tejidos y prendas. Ideal para usar con stencils o libremente con espátula.",
    selected: false,
  },
  {
    id: 1003,
    name: "PERLA Pasta de Relieve METTALIC Cadence",
    price: "6.50",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/gpfrhuzraeunfasnkdqqk/pasta-de-relieve-textil-metallic-PERLA.jpg?rlkey=om8qwqhjaeesdl1wof02u364s&st=a8xxx1mj&dl=0",
    ],
    label: "150 ml.",
    description:
      "Aplíca esta pasta acrílica para conseguir efectos dimensionales sobre tejidos y prendas. Ideal para usar con stencils o libremente con espátula.",
    selected: false,
  },
  {
    id: 1004,
    name: "ORO Pasta de Relieve METTALIC Cadence",
    price: "6.50",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/2j717ktd5l3l396obo5zj/pasta-de-relieve-textil-metallic-ORO.jpg?rlkey=lq1vaublu9fi1ubdnctx88fum&st=orlnp01a&dl=0",
    ],
    label: "150 ml.",
    description:
      "Aplíca esta pasta acrílica para conseguir efectos dimensionales sobre tejidos y prendas. Ideal para usar con stencils o libremente con espátula.",
    selected: false,
  },
  {
    id: 1005,
    name: "COBRE Pasta de Relieve METTALIC Cadence",
    price: "6.50",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/6l150sm464999veu3ol6o/pasta-de-relieve-textil-metallic-COBRE.jpg?rlkey=3usber946p7qjeafgoho7ab8x&st=n7xyh71x&dl=0",
    ],
    label: "150 ml.",
    description:
      "Aplíca esta pasta acrílica para conseguir efectos dimensionales sobre tejidos y prendas. Ideal para usar con stencils o libremente con espátula.",
    selected: false,
  },
  {
    id: 1006,
    name: "CHAMPAN Pasta de Relieve METTALIC Cadence",
    price: "6.50",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/svku6pw7drh1mmsgsqj6a/pasta-de-relieve-textil-metallic-CHAMPAN.jpg?rlkey=3zrtszwrei2pkuuljl43jh15b&st=tmli13rm&dl=0",
    ],
    label: "150 ml.",
    description:
      "Aplíca esta pasta acrílica para conseguir efectos dimensionales sobre tejidos y prendas. Ideal para usar con stencils o libremente con espátula.",
    selected: false,
  },
  {
    id: 545,
    name: "Negro Vintage Legend 150ml.",
    price: "4.50",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/oot6j3rgzlumj6t4n879l/vintage-legend-cadence.jpg?rlkey=ve9aa6wn5f7ylh1yb7dxcl49q&st=lqomp89k&dl=0",
    ],
    label: "150ml",
    description:
      "Pintura de gesso con base de agua, especialmente formulada con partículas de diferentes tamaños y colores en su interior para crear una superficie antigua vintage rota. Todos los tipos de pinturas acrílicas de Cadence se pueden usar como primera capa. Para superficies metálicas y de vidrio, se recomienda usar la pintura multisuperficies Hybrid como primera capa. Aplicar Vintage Legend sobre la primera capa. Para la última capa se recomienda Very Chalky. Espere un mínimo de 12 horas antes de raspar fuertemente. La cera Cadence Home Decor Wax se usa entre capas para facilitar el raspado y para protección final. Las ceras de colores, marrón o negra, se usan para aportar profundidad a los colores.",
    selected: false,
  },
  {
    id: 546,
    name: "Marrón Vintage Legend 150ml.",
    price: "4.50",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/88p965qdfojya1rti0p6y/vintage-legend-cadence-1.jpg?rlkey=b7pu4hl93dgzjyn1oiocsgvtv&st=g3zv96q2&dl=0",
    ],
    label: "150ml",
    description:
      "Pintura de gesso con base de agua, especialmente formulada con partículas de diferentes tamaños y colores en su interior para crear una superficie antigua vintage rota. Todos los tipos de pinturas acrílicas de Cadence se pueden usar como primera capa. Para superficies metálicas y de vidrio, se recomienda usar la pintura multisuperficies Hybrid como primera capa. Aplicar Vintage Legend sobre la primera capa. Para la última capa se recomienda Very Chalky. Espere un mínimo de 12 horas antes de raspar fuertemente. La cera Cadence Home Decor Wax se usa entre capas para facilitar el raspado y para protección final. Las ceras de colores, marrón o negra, se usan para aportar profundidad a los colores.",
    selected: false,
  },
  {
    id: 547,
    name: "Visón Vintage Legend 150ml.",
    price: "4.50",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/ilbysu3xtz7h5nhvkjcx2/vintage-legend-cadence-2.jpg?rlkey=dglp460f7zjvheuechh43yv8d&st=v23skwa2&dl=0",
    ],
    label: "150ml",
    description:
      "Pintura de gesso con base de agua, especialmente formulada con partículas de diferentes tamaños y colores en su interior para crear una superficie antigua vintage rota. Todos los tipos de pinturas acrílicas de Cadence se pueden usar como primera capa. Para superficies metálicas y de vidrio, se recomienda usar la pintura multisuperficies Hybrid como primera capa. Aplicar Vintage Legend sobre la primera capa. Para la última capa se recomienda Very Chalky. Espere un mínimo de 12 horas antes de raspar fuertemente. La cera Cadence Home Decor Wax se usa entre capas para facilitar el raspado y para protección final. Las ceras de colores, marrón o negra, se usan para aportar profundidad a los colores.",
    selected: false,
  },
  {
    id: 548,
    name: "Gris Pizarra Vintage Legend 150ml.",
    price: "4.50",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/hmpcs89znu7byh9nbfnp0/vintage-legend-cadence-3.jpg?rlkey=kcopsmubwenm77fxmnityqlcq&st=awz984he&dl=0",
    ],
    label: "150ml",
    description:
      "Pintura de gesso con base de agua, especialmente formulada con partículas de diferentes tamaños y colores en su interior para crear una superficie antigua vintage rota. Todos los tipos de pinturas acrílicas de Cadence se pueden usar como primera capa. Para superficies metálicas y de vidrio, se recomienda usar la pintura multisuperficies Hybrid como primera capa. Aplicar Vintage Legend sobre la primera capa. Para la última capa se recomienda Very Chalky. Espere un mínimo de 12 horas antes de raspar fuertemente. La cera Cadence Home Decor Wax se usa entre capas para facilitar el raspado y para protección final. Las ceras de colores, marrón o negra, se usan para aportar profundidad a los colores.",
    selected: false,
  },
  {
    id: 549,
    name: "Gris Vintage Legend 150ml.",
    price: "4.50",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/d9ankqcum8jg5qo9njdv9/vintage-legend-cadence-4.jpg?rlkey=to3fifiswk40urw4iz1dux9pq&st=kxly3pi8&dl=0",
    ],
    label: "150ml",
    description:
      "Pintura de gesso con base de agua, especialmente formulada con partículas de diferentes tamaños y colores en su interior para crear una superficie antigua vintage rota. Todos los tipos de pinturas acrílicas de Cadence se pueden usar como primera capa. Para superficies metálicas y de vidrio, se recomienda usar la pintura multisuperficies Hybrid como primera capa. Aplicar Vintage Legend sobre la primera capa. Para la última capa se recomienda Very Chalky. Espere un mínimo de 12 horas antes de raspar fuertemente. La cera Cadence Home Decor Wax se usa entre capas para facilitar el raspado y para protección final. Las ceras de colores, marrón o negra, se usan para aportar profundidad a los colores.",
    selected: false,
  },
  {
    id: 550,
    name: "Fresco Vintage Legend 150ml.",
    price: "4.50",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/tqzcsw1qbq5k6gjumcocz/vintage-legend-cadence-5.jpg?rlkey=bzj2rtg9clisx6wp0zr3ubb6i&st=tfqi14dk&dl=0",
    ],
    label: "150ml",
    description:
      "Pintura de gesso con base de agua, especialmente formulada con partículas de diferentes tamaños y colores en su interior para crear una superficie antigua vintage rota. Todos los tipos de pinturas acrílicas de Cadence se pueden usar como primera capa. Para superficies metálicas y de vidrio, se recomienda usar la pintura multisuperficies Hybrid como primera capa. Aplicar Vintage Legend sobre la primera capa. Para la última capa se recomienda Very Chalky. Espere un mínimo de 12 horas antes de raspar fuertemente. La cera Cadence Home Decor Wax se usa entre capas para facilitar el raspado y para protección final. Las ceras de colores, marrón o negra, se usan para aportar profundidad a los colores.",
    selected: false,
  },
  {
    id: 551,
    name: "Verde Hoja Vintage Legend 150ml.",
    price: "4.50",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/ybyyn40lghguhq10cq5da/vintage-legend-cadence-6.jpg?rlkey=eumkm73b2x6qjd0b10xif1b02&st=80joh841&dl=0",
    ],
    label: "150ml",
    description:
      "Pintura de gesso con base de agua, especialmente formulada con partículas de diferentes tamaños y colores en su interior para crear una superficie antigua vintage rota. Todos los tipos de pinturas acrílicas de Cadence se pueden usar como primera capa. Para superficies metálicas y de vidrio, se recomienda usar la pintura multisuperficies Hybrid como primera capa. Aplicar Vintage Legend sobre la primera capa. Para la última capa se recomienda Very Chalky. Espere un mínimo de 12 horas antes de raspar fuertemente. La cera Cadence Home Decor Wax se usa entre capas para facilitar el raspado y para protección final. Las ceras de colores, marrón o negra, se usan para aportar profundidad a los colores.",
    selected: false,
  },
  {
    id: 552,
    name: "Verde Moho Vintage Legend 150ml.",
    price: "4.50",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/x4gie032hhxtvru9zpip2/vintage-legend-cadence-7.jpg?rlkey=0fhjyoqju0fptkiudwrt70cbf&st=yhstzyr2&dl=0",
    ],
    label: "150ml",
    description:
      "Pintura de gesso con base de agua, especialmente formulada con partículas de diferentes tamaños y colores en su interior para crear una superficie antigua vintage rota. Todos los tipos de pinturas acrílicas de Cadence se pueden usar como primera capa. Para superficies metálicas y de vidrio, se recomienda usar la pintura multisuperficies Hybrid como primera capa. Aplicar Vintage Legend sobre la primera capa. Para la última capa se recomienda Very Chalky. Espere un mínimo de 12 horas antes de raspar fuertemente. La cera Cadence Home Decor Wax se usa entre capas para facilitar el raspado y para protección final. Las ceras de colores, marrón o negra, se usan para aportar profundidad a los colores.",
    selected: false,
  },
  {
    id: 553,
    name: "Nurdeos Vintage Legend 150ml.",
    price: "4.50",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/vpzk4dftfxxddj39gxep2/vintage-legend-cadence-8.jpg?rlkey=ekrj6dm406j17aux5dnymqo9q&st=yxrfmi1w&dl=0",
    ],
    label: "150ml",
    description:
      "Pintura de gesso con base de agua, especialmente formulada con partículas de diferentes tamaños y colores en su interior para crear una superficie antigua vintage rota. Todos los tipos de pinturas acrílicas de Cadence se pueden usar como primera capa. Para superficies metálicas y de vidrio, se recomienda usar la pintura multisuperficies Hybrid como primera capa. Aplicar Vintage Legend sobre la primera capa. Para la última capa se recomienda Very Chalky. Espere un mínimo de 12 horas antes de raspar fuertemente. La cera Cadence Home Decor Wax se usa entre capas para facilitar el raspado y para protección final. Las ceras de colores, marrón o negra, se usan para aportar profundidad a los colores.",
    selected: false,
  },
  {
    id: 554,
    name: "Amarillo Óxido Vintage Legend 150ml.",
    price: "4.50",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/bgmaqmi8gjqs2h90i8f92/vintage-legend-cadence-9.jpg?rlkey=x32tsfh4r1rzr7iu35an4m5fm&st=j1npj9gi&dl=0",
    ],
    label: "150ml",
    description:
      "Pintura de gesso con base de agua, especialmente formulada con partículas de diferentes tamaños y colores en su interior para crear una superficie antigua vintage rota. Todos los tipos de pinturas acrílicas de Cadence se pueden usar como primera capa. Para superficies metálicas y de vidrio, se recomienda usar la pintura multisuperficies Hybrid como primera capa. Aplicar Vintage Legend sobre la primera capa. Para la última capa se recomienda Very Chalky. Espere un mínimo de 12 horas antes de raspar fuertemente. La cera Cadence Home Decor Wax se usa entre capas para facilitar el raspado y para protección final. Las ceras de colores, marrón o negra, se usan para aportar profundidad a los colores.",
    selected: false,
  },
  {
    id: 555,
    name: "Crudo Vintage Legend 150ml.",
    price: "4.50",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/axxw44nu158t8gjvatwta/vintage-legend-cadence-10.jpg?rlkey=rpj7s9gbrhm8t5br84260cmpi&st=5e6qxmma&dl=0",
    ],
    label: "150ml",
    description:
      "Pintura de gesso con base de agua, especialmente formulada con partículas de diferentes tamaños y colores en su interior para crear una superficie antigua vintage rota. Todos los tipos de pinturas acrílicas de Cadence se pueden usar como primera capa. Para superficies metálicas y de vidrio, se recomienda usar la pintura multisuperficies Hybrid como primera capa. Aplicar Vintage Legend sobre la primera capa. Para la última capa se recomienda Very Chalky. Espere un mínimo de 12 horas antes de raspar fuertemente. La cera Cadence Home Decor Wax se usa entre capas para facilitar el raspado y para protección final. Las ceras de colores, marrón o negra, se usan para aportar profundidad a los colores.",
    selected: false,
  },
  {
    id: 556,
    name: "Blanco Vintage Legend 150ml.",
    price: "4.50",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/vsdv49t7u9d0dsgjxctsa/vintage-legend-cadence-11.jpg?rlkey=k4hd31zsqk96j72h5ji4iu3f7&st=4fqwd4r9&dl=0",
    ],
    label: "150ml",
    description:
      "Pintura de gesso con base de agua, especialmente formulada con partículas de diferentes tamaños y colores en su interior para crear una superficie antigua vintage rota. Todos los tipos de pinturas acrílicas de Cadence se pueden usar como primera capa. Para superficies metálicas y de vidrio, se recomienda usar la pintura multisuperficies Hybrid como primera capa. Aplicar Vintage Legend sobre la primera capa. Para la última capa se recomienda Very Chalky. Espere un mínimo de 12 horas antes de raspar fuertemente. La cera Cadence Home Decor Wax se usa entre capas para facilitar el raspado y para protección final. Las ceras de colores, marrón o negra, se usan para aportar profundidad a los colores.",
    selected: false,
  },
  {
    id: 529,
    name: "IKAROS ZEUGMA Pasta Relieve Efecto Piedra 150ml.",
    price: "4.25",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/31ush3sqt6ktstll5weyr/zeugma-pasta-relieve-efecto-piedra.jpg?rlkey=twzrvl735o3dnmas25vbrh69a&st=j2l227gk&dl=0",
    ],
    label: "150ml",
    description:
      "Se puede aplicar tanto es superficies porosas como no porosas, usándose con pincel, espatula, plantilla y esponja... La superficie se puede lijar y alisar o dejar con una gruesa textura irregular. Se puede mezclar con otras pinturas y pastas cadence para crear diferentes efectos de color y estilos Mix Media. Mezcla 2 tonos diferentes de pasta ZEUGMA efecto piedra para conseguir un efecto super realista. El tempo de secado depende del grosor aplicado y de las condiciones atmosféricas. Una vez seco es impermeable y resistente a los impactos. Proteger del calor y de las heladas.",
    selected: false,
  },
  {
    id: 530,
    name: "MINOS ZEUGMA Pasta Relieve Efecto Piedra 150ml.",
    price: "4.25",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/vq44gr5sqgi6z5ohwsvhx/zeugma-pasta-relieve-efecto-piedra-1.jpg?rlkey=78nmeufq2rge87dvj276vunpz&st=y0r19cez&dl=0",
    ],
    label: "150ml",
    description:
      "Se puede aplicar tanto es superficies porosas como no porosas, usándose con pincel, espatula, plantilla y esponja... La superficie se puede lijar y alisar o dejar con una gruesa textura irregular. Se puede mezclar con otras pinturas y pastas cadence para crear diferentes efectos de color y estilos Mix Media. Mezcla 2 tonos diferentes de pasta ZEUGMA efecto piedra para conseguir un efecto super realista. El tempo de secado depende del grosor aplicado y de las condiciones atmosféricas. Una vez seco es impermeable y resistente a los impactos. Proteger del calor y de las heladas.",
    selected: false,
  },
  {
    id: 531,
    name: "SILENOS ZEUGMA Pasta Relieve Efecto Piedra 150ml.",
    price: "4.25",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/zu0ds5179q5a5m1cl0f10/zeugma-pasta-relieve-efecto-piedra-2.jpg?rlkey=37p7nuktx4enkb3x7uhczjne2&st=etgig7y6&dl=0",
    ],
    label: "150ml",
    description:
      "Se puede aplicar tanto es superficies porosas como no porosas, usándose con pincel, espatula, plantilla y esponja... La superficie se puede lijar y alisar o dejar con una gruesa textura irregular. Se puede mezclar con otras pinturas y pastas cadence para crear diferentes efectos de color y estilos Mix Media. Mezcla 2 tonos diferentes de pasta ZEUGMA efecto piedra para conseguir un efecto super realista. El tempo de secado depende del grosor aplicado y de las condiciones atmosféricas. Una vez seco es impermeable y resistente a los impactos. Proteger del calor y de las heladas.",
    selected: false,
  },
  {
    id: 532,
    name: "TRITON ZEUGMA Pasta Relieve Efecto Piedra 150ml.",
    price: "4.25",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/i11gqjd36r7i08zsjspbn/zeugma-pasta-relieve-efecto-piedra-3.jpg?rlkey=18l9ueuy9jllf7wdcsoegd91f&st=wwnk0g8t&dl=0",
    ],
    label: "150ml",
    description:
      "Se puede aplicar tanto es superficies porosas como no porosas, usándose con pincel, espatula, plantilla y esponja... La superficie se puede lijar y alisar o dejar con una gruesa textura irregular. Se puede mezclar con otras pinturas y pastas cadence para crear diferentes efectos de color y estilos Mix Media. Mezcla 2 tonos diferentes de pasta ZEUGMA efecto piedra para conseguir un efecto super realista. El tempo de secado depende del grosor aplicado y de las condiciones atmosféricas. Una vez seco es impermeable y resistente a los impactos. Proteger del calor y de las heladas.",
    selected: false,
  },
  {
    id: 533,
    name: "ASIA ZEUGMA Pasta Relieve Efecto Piedra 150ml.",
    price: "4.25",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/kqvs7551ryk6fs9b4pfj2/zeugma-pasta-relieve-efecto-piedra-4.jpg?rlkey=d5l2szsagl7vopl3i3tgzykiy&st=0w9mtnnu&dl=0",
    ],
    label: "150ml",
    description:
      "Se puede aplicar tanto es superficies porosas como no porosas, usándose con pincel, espatula, plantilla y esponja... La superficie se puede lijar y alisar o dejar con una gruesa textura irregular. Se puede mezclar con otras pinturas y pastas cadence para crear diferentes efectos de color y estilos Mix Media. Mezcla 2 tonos diferentes de pasta ZEUGMA efecto piedra para conseguir un efecto super realista. El tempo de secado depende del grosor aplicado y de las condiciones atmosféricas. Una vez seco es impermeable y resistente a los impactos. Proteger del calor y de las heladas.",
    selected: false,
  },
  {
    id: 534,
    name: "ADONIS ZEUGMA Pasta Relieve Efecto Piedra 150ml.",
    price: "4.25",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/qcbvkbomxqbkfrtex4j2u/zeugma-pasta-relieve-efecto-piedra-5.jpg?rlkey=rdpj137w6zhinpyke1oqiuter&st=w0icjpfe&dl=0",
    ],
    label: "150ml",
    description:
      "Se puede aplicar tanto es superficies porosas como no porosas, usándose con pincel, espatula, plantilla y esponja... La superficie se puede lijar y alisar o dejar con una gruesa textura irregular. Se puede mezclar con otras pinturas y pastas cadence para crear diferentes efectos de color y estilos Mix Media. Mezcla 2 tonos diferentes de pasta ZEUGMA efecto piedra para conseguir un efecto super realista. El tempo de secado depende del grosor aplicado y de las condiciones atmosféricas. Una vez seco es impermeable y resistente a los impactos. Proteger del calor y de las heladas.",
    selected: false,
  },
  {
    id: 760,
    name: "Sapphire MAT METALLIC PAINT 50ml.",
    price: "3.75",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/kcjwa1v5046he5ea9xu3r/MATT-METALLIC-PAINT-50-ml-SAPPHIRE.jpg?rlkey=8hb1eww5urkt23swntnmvf0t5&st=mavyc86i&dl=0",
    ],
    label: "50 ml.",
    description:
      "Aplicación sencilla: Simplemente usa un pincel o una esponja para dar color a tus objetos. Asegúrate de que la superficie esté limpia, seca y libre de polvo y grasa antes de pintar. Puedes aplicar una capa base con pintura acrílica de un color similar al de la pintura. La pintura seca en 2-4 horas y cura completamente en 24 horas.",
    selected: false,
  },
  {
    id: 761,
    name: "Platinum MAT METALLIC PAINT 50ml.",
    price: "3.75",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/hade1x28x4v0mk378dk04/MATT-METALLIC-PAINT-50-ml-PLATINIUM.jpg?rlkey=8lgw0vtd3vfh95xybw0iklb55&st=ytsz9lf0&dl=0",
    ],
    label: "50 ml.",
    description:
      "Aplicación sencilla: Simplemente usa un pincel o una esponja para dar color a tus objetos. Asegúrate de que la superficie esté limpia, seca y libre de polvo y grasa antes de pintar. Puedes aplicar una capa base con pintura acrílica de un color similar al de la pintura. La pintura seca en 2-4 horas y cura completamente en 24 horas.",
    selected: false,
  },
  {
    id: 762,
    name: "Pearl MAT METALLIC PAINT 50ml.",
    price: "3.75",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/kgvzlf7n7dp8syi2hefh4/MATT-METALLIC-PAINT-50-ml-PEARL.jpg?rlkey=d6nroctgj3mt993qbmhf3z7un&st=pj7ugrxz&dl=0",
    ],
    label: "50 ml.",
    description:
      "Aplicación sencilla: Simplemente usa un pincel o una esponja para dar color a tus objetos. Asegúrate de que la superficie esté limpia, seca y libre de polvo y grasa antes de pintar. Puedes aplicar una capa base con pintura acrílica de un color similar al de la pintura. La pintura seca en 2-4 horas y cura completamente en 24 horas.",
    selected: false,
  },
  {
    id: 763,
    name: "Navy MAT METALLIC PAINT 50ml.",
    price: "3.75",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/5ee6h2p5zdm6chl1nunsa/MATT-METALLIC-PAINT-50-ml-NAVY.jpg?rlkey=t4gypuk4yoo1wxgep4crx6rmc&st=3y49w95w&dl=0",
    ],
    label: "50 ml.",
    description:
      "Aplicación sencilla: Simplemente usa un pincel o una esponja para dar color a tus objetos. Asegúrate de que la superficie esté limpia, seca y libre de polvo y grasa antes de pintar. Puedes aplicar una capa base con pintura acrílica de un color similar al de la pintura. La pintura seca en 2-4 horas y cura completamente en 24 horas.",
    selected: false,
  },
  {
    id: 764,
    name: "Maroon MAT METALLIC PAINT 50ml.",
    price: "3.75",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/j6ijvhj3lbnuj8vje84ms/MATT-METALLIC-PAINT-50-ml-MAROON.jpg?rlkey=p7iyn5m0g82lpj0sfdgugjase&st=2zf8fkfg&dl=0",
    ],
    label: "50 ml.",
    description:
      "Aplicación sencilla: Simplemente usa un pincel o una esponja para dar color a tus objetos. Asegúrate de que la superficie esté limpia, seca y libre de polvo y grasa antes de pintar. Puedes aplicar una capa base con pintura acrílica de un color similar al de la pintura. La pintura seca en 2-4 horas y cura completamente en 24 horas.",
    selected: false,
  },
  {
    id: 765,
    name: "Emerald MAT METALLIC PAINT 50ml.",
    price: "3.75",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/6zrt4jeqxe829k4c9h6m7/MATT-METALLIC-PAINT-50-ml-EMERALD.jpg?rlkey=xukw4neflbqwjw9bs578fupu8&st=44le0ufe&dl=0",
    ],
    label: "50 ml.",
    description:
      "Aplicación sencilla: Simplemente usa un pincel o una esponja para dar color a tus objetos. Asegúrate de que la superficie esté limpia, seca y libre de polvo y grasa antes de pintar. Puedes aplicar una capa base con pintura acrílica de un color similar al de la pintura. La pintura seca en 2-4 horas y cura completamente en 24 horas.",
    selected: false,
  },
  {
    id: 766,
    name: "Copper MAT METALLIC PAINT 50ml.",
    price: "3.75",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/4uc98ha271qoltsskhbbn/MATT-METALLIC-PAINT-50-ml-COPPER.jpg?rlkey=5aqhox10ndy5vvyu5o7p5xku4&st=th51zo59&dl=0",
    ],
    label: "50 ml.",
    description:
      "Aplicación sencilla: Simplemente usa un pincel o una esponja para dar color a tus objetos. Asegúrate de que la superficie esté limpia, seca y libre de polvo y grasa antes de pintar. Puedes aplicar una capa base con pintura acrílica de un color similar al de la pintura. La pintura seca en 2-4 horas y cura completamente en 24 horas.",
    selected: false,
  },
  {
    id: 767,
    name: "Champagne MAT METALLIC PAINT 50ml.",
    price: "3.75",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/qedr0blz8az3yevh0w234/MATT-METALLIC-PAINT-50-ml-CHAMPAGNE.jpg?rlkey=bfnjsgem6wneucz1ksl2b404m&st=gyj9cpo6&dl=0",
    ],
    label: "50 ml.",
    description:
      "Aplicación sencilla: Simplemente usa un pincel o una esponja para dar color a tus objetos. Asegúrate de que la superficie esté limpia, seca y libre de polvo y grasa antes de pintar. Puedes aplicar una capa base con pintura acrílica de un color similar al de la pintura. La pintura seca en 2-4 horas y cura completamente en 24 horas.",
    selected: false,
  },
  {
    id: 768,
    name: "Brown Copper MAT METALLIC PAINT 50ml.",
    price: "3.75",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/5qnc6aoxbtr1rxsy8vkc5/MATT-METALLIC-PAINT-50-ml-BROWN-COPPER.jpg?rlkey=r4bg5ruvvn5t5455kz6q99og6&st=9g57xbqn&dl=0",
    ],
    label: "50 ml.",
    description:
      "Aplicación sencilla: Simplemente usa un pincel o una esponja para dar color a tus objetos. Asegúrate de que la superficie esté limpia, seca y libre de polvo y grasa antes de pintar. Puedes aplicar una capa base con pintura acrílica de un color similar al de la pintura. La pintura seca en 2-4 horas y cura completamente en 24 horas.",
    selected: false,
  },
  {
    id: 769,
    name: "Black MAT METALLIC PAINT 50ml.",
    price: "3.75",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/qt3p3iz1e4usgkn6oky80/MATT-METALLIC-PAINT-50-ml-BLACK.jpg?rlkey=t4ycqa8uu7pyqq1voquqhuzpo&st=p576gtvf&dl=0",
    ],
    label: "50 ml.",
    description:
      "Aplicación sencilla: Simplemente usa un pincel o una esponja para dar color a tus objetos. Asegúrate de que la superficie esté limpia, seca y libre de polvo y grasa antes de pintar. Puedes aplicar una capa base con pintura acrílica de un color similar al de la pintura. La pintura seca en 2-4 horas y cura completamente en 24 horas.",
    selected: false,
  },
  {
    id: 770,
    name: "Antique Silver MAT METALLIC PAINT 50ml.",
    price: "3.75",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/qttzsv49m7y9zaupblmko/MATT-METALLIC-PAINT-50-ml-ANTIQUE-SILVER.jpg?rlkey=vuf5jy4m17xn9dw8pq98g6kbn&st=29r4d8ck&dl=0",
    ],
    label: "50 ml.",
    description:
      "Aplicación sencilla: Simplemente usa un pincel o una esponja para dar color a tus objetos. Asegúrate de que la superficie esté limpia, seca y libre de polvo y grasa antes de pintar. Puedes aplicar una capa base con pintura acrílica de un color similar al de la pintura. La pintura seca en 2-4 horas y cura completamente en 24 horas.",
    selected: false,
  },
  {
    id: 771,
    name: "Antique Red MAT METALLIC PAINT 50ml.",
    price: "3.75",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/gck7o9kqpc1fkuw97vhue/MATT-METALLIC-PAINT-50-ml-ANTIQUE-RED.jpg?rlkey=6rf0h8xzloghabtiuv6076kcy&st=zarw8kfl&dl=0",
    ],
    label: "50 ml.",
    description:
      "Aplicación sencilla: Simplemente usa un pincel o una esponja para dar color a tus objetos. Asegúrate de que la superficie esté limpia, seca y libre de polvo y grasa antes de pintar. Puedes aplicar una capa base con pintura acrílica de un color similar al de la pintura. La pintura seca en 2-4 horas y cura completamente en 24 horas.",
    selected: false,
  },
  {
    id: 772,
    name: "Antique Purple MAT METALLIC PAINT 50ml.",
    price: "3.75",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/gp04ifzxqn1n9y10d3fq7/MATT-METALLIC-PAINT-50-ml-ANTIQUE-PURPLE.jpg?rlkey=8o7979ox6q3fugtn6xmn92zyy&st=9mxi6cly&dl=0",
    ],
    label: "50 ml.",
    description:
      "Aplicación sencilla: Simplemente usa un pincel o una esponja para dar color a tus objetos. Asegúrate de que la superficie esté limpia, seca y libre de polvo y grasa antes de pintar. Puedes aplicar una capa base con pintura acrílica de un color similar al de la pintura. La pintura seca en 2-4 horas y cura completamente en 24 horas.",
    selected: false,
  },
  {
    id: 773,
    name: "Antique Olive MAT METALLIC PAINT 50ml.",
    price: "3.75",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/epz1a76fvx6gj213or1pk/MATT-METALLIC-PAINT-50-ml-ANTIQUE-OLIVE.jpg?rlkey=dqbb3pvih8kvkw5jqfaymy03o&st=2krz4j4y&dl=0",
    ],
    label: "50 ml.",
    description:
      "Aplicación sencilla: Simplemente usa un pincel o una esponja para dar color a tus objetos. Asegúrate de que la superficie esté limpia, seca y libre de polvo y grasa antes de pintar. Puedes aplicar una capa base con pintura acrílica de un color similar al de la pintura. La pintura seca en 2-4 horas y cura completamente en 24 horas.",
    selected: false,
  },
  {
    id: 774,
    name: "Antique Green MAT METALLIC PAINT 50ml.",
    price: "3.75",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/nmf7ce8eob8amqnwaaqqs/MATT-METALLIC-PAINT-50-ml-ANTIQUE-GREEN.jpg?rlkey=hb2f1wqwqm0qz3asgcmu96nm7&st=tryldq1l&dl=0",
    ],
    label: "50 ml.",
    description:
      "Aplicación sencilla: Simplemente usa un pincel o una esponja para dar color a tus objetos. Asegúrate de que la superficie esté limpia, seca y libre de polvo y grasa antes de pintar. Puedes aplicar una capa base con pintura acrílica de un color similar al de la pintura. La pintura seca en 2-4 horas y cura completamente en 24 horas.",
    selected: false,
  },
  {
    id: 775,
    name: "Antique Gold MAT METALLIC PAINT 50ml.",
    price: "3.75",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/09f9ebvg88ikknksltt8e/MATT-METALLIC-PAINT-50-ml-ANTIQUE-GOLD.jpg?rlkey=8aw75ixa2xrj3qxt5zschiujn&st=6vd7ico5&dl=0",
    ],
    label: "50 ml.",
    description:
      "Aplicación sencilla: Simplemente usa un pincel o una esponja para dar color a tus objetos. Asegúrate de que la superficie esté limpia, seca y libre de polvo y grasa antes de pintar. Puedes aplicar una capa base con pintura acrílica de un color similar al de la pintura. La pintura seca en 2-4 horas y cura completamente en 24 horas.",
    selected: false,
  },
  {
    id: 776,
    name: "Antique Anthracite MAT METALLIC PAINT 50ml.",
    price: "3.75",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/wu6l5e58ys94fjkr6tpw5/MATT-METALLIC-PAINT-50-ml-ANTIQUE-ANTHRACITE.jpg?rlkey=5soolk5urlahgwbmrsofpagwp&st=p9h2p407&dl=0",
    ],
    label: "50 ml.",
    description:
      "Aplicación sencilla: Simplemente usa un pincel o una esponja para dar color a tus objetos. Asegúrate de que la superficie esté limpia, seca y libre de polvo y grasa antes de pintar. Puedes aplicar una capa base con pintura acrílica de un color similar al de la pintura. La pintura seca en 2-4 horas y cura completamente en 24 horas.",
    selected: false,
  },
  {
    id: 776,
    name: "Set pan de oro liquido CADENCE",
    price: "10.85",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/u7qg0uwfkp81v2aex80tx/set-pan-de-oro-liquido-cadence.jpg?rlkey=mimltwzqa0qvbyu8p1mi1xeqx&st=3jb8l7nj&dl=0",
    ],
    label: "30+30 ml.",
    description:
      "Set de pan de oro líquido Cadence de fácil uso en todo tipo de trabajos de restauración y decoración. Extremadamente vívido, brillante y cubriente. Consta de 2 botes de 30 ml, un polvo y un líquido. El polvo y el líquido se mezclan y aplican a la superficie deseada con la ayuda de un pincel. ",
    selected: false,
  },
  {
    id: 918,
    name: "Matt Fabric VISON 59ml.",
    price: "3.00",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/jxss7rnyow3aaac16h0se/style-matt-fabric-VISON.jpg?rlkey=vief4tb1im0ehm0etautf66gm&st=96l7enzo&dl=0",
    ],
    label: "59 ml.",
    description:
      "Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.",
    selected: false,
  },
  {
    id: 919,
    name: "Matt Fabric VIOLETA 59ml.",
    price: "3.00",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/ydil0tsbqm794gnv79hzl/style-matt-fabric-VIOLETA.jpg?rlkey=ze4k2ncno8594wjain5akal2j&st=25zbdmgi&dl=0",
    ],
    label: "59 ml.",
    description:
      "Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.",
    selected: false,
  },
  {
    id: 920,
    name: "Matt Fabric VERDE-PISTACHO 59ml.",
    price: "3.00",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/ty1cifamv7mluoxcckn53/style-matt-fabric-VERDE-PISTACHO.jpg?rlkey=cyt7ub1ba1xrc7oimqmkv2ly0&st=1y7xub96&dl=0",
    ],
    label: "59 ml.",
    description:
      "Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.",
    selected: false,
  },
  {
    id: 921,
    name: "Matt Fabric VERDE-OSCURO 59ml.",
    price: "3.00",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/qy8quuezotql32332fsjx/style-matt-fabric-VERDE-OSCURO.jpg?rlkey=q5fr2tq7zimqywt0yo5zb603w&st=4aai8imd&dl=0",
    ],
    label: "59 ml.",
    description:
      "Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.",
    selected: false,
  },
  {
    id: 922,
    name: "Matt Fabric VERDE-MENTA-CLARO 59ml.",
    price: "3.00",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/pmb41as3xgs2yqclnoguj/style-matt-fabric-VERDE-MENTA-CLARO.jpg?rlkey=qa4chbx5a1nh7l9jj12y11y1q&st=3ub1kbl1&dl=0",
    ],
    label: "59 ml.",
    description:
      "Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.",
    selected: false,
  },
  {
    id: 923,
    name: "Matt Fabric VERDE-MAR-CLARO 59ml.",
    price: "3.00",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/0wu0sz2gsepp73srxofr8/style-matt-fabric-VERDE-MAR-CLARO.jpg?rlkey=6lzt7qjlb1xr1d3b8n4tkxk3z&st=6uzb98hn&dl=0",
    ],
    label: "59 ml.",
    description:
      "Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.",
    selected: false,
  },
  {
    id: 924,
    name: "Matt Fabric VERDE-GRANJA 59ml.",
    price: "3.00",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/y9cjhoesd0zb8gf1lf79i/style-matt-fabric-VERDE-GRANJA.jpg?rlkey=fwp08zmbxs6b0jeow9b0cyuay&st=dduifymi&dl=0",
    ],
    label: "59 ml.",
    description:
      "Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.",
    selected: false,
  },
  {
    id: 925,
    name: "Matt Fabric VERDE-CAMUFLAJE 59ml.",
    price: "3.00",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/uwesgvnco6ynqz3mylvku/style-matt-fabric-VERDE-CAMUFLAJE.jpg?rlkey=1s1edyxo4iece5fweb8jgo57l&st=1rxboffk&dl=0",
    ],
    label: "59 ml.",
    description:
      "Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.",
    selected: false,
  },
  {
    id: 926,
    name: "Matt Fabric ULTRA-MARINO 59ml.",
    price: "3.00",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/dqfsii4xd7or5g9kq4vma/style-matt-fabric-ULTRA-MARINO.jpg?rlkey=ougyfpn9lg4q10yzmif05g2lz&st=18lv4zgf&dl=0",
    ],
    label: "59 ml.",
    description:
      "Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.",
    selected: false,
  },
  {
    id: 927,
    name: "Matt Fabric TURQUESA 59ml.",
    price: "3.00",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/vyqkpccbcy640l6s617ws/style-matt-fabric-TURQUESA.jpg?rlkey=uvvxhx08tcsqzjeolo1nfb89i&st=z40ca0it&dl=0",
    ],
    label: "59 ml.",
    description:
      "Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.",
    selected: false,
  },
  {
    id: 928,
    name: "Matt Fabric TILO 59ml.",
    price: "3.00",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/fm442k82qg6mu65cg72sf/style-matt-fabric-TILO.jpg?rlkey=hh748ocr7inedw3b65g1g7gmx&st=luigfhab&dl=0",
    ],
    label: "59 ml.",
    description:
      "Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.",
    selected: false,
  },
  {
    id: 929,
    name: "Matt Fabric TERRACOTA 59ml.",
    price: "3.00",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/dmo9yg2l2f85k7zr7t1hc/style-matt-fabric-TERRACOTA.jpg?rlkey=imnb25lfhjfyuu07skiod77e6&st=36ywt9n0&dl=0",
    ],
    label: "59 ml.",
    description:
      "Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.",
    selected: false,
  },
  {
    id: 930,
    name: "Matt Fabric SALVIA 59ml.",
    price: "3.00",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/3g6d3ls4vj51wh9wy8gym/style-matt-fabric-SALVIA.jpg?rlkey=k334egei5c6mzk0nb922uyng1&st=5tes5b4a&dl=0",
    ],
    label: "59 ml.",
    description:
      "Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.",
    selected: false,
  },
  {
    id: 931,
    name: "Matt Fabric ROSA-PASTEL 59ml.",
    price: "3.00",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/3bcim7heid5db6iuqnnnq/style-matt-fabric-ROSA-PASTEL.jpg?rlkey=sqmt3zeyklsr2zdwo744ue54k&st=xlinh4c4&dl=0",
    ],
    label: "59 ml.",
    description:
      "Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.",
    selected: false,
  },
  {
    id: 932,
    name: "Matt Fabric ROSA-CENIZA 59ml.",
    price: "3.00",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/o75yqcrvrdpb7htj65z38/style-matt-fabric-ROSA-CENIZA.jpg?rlkey=29wni95l0pyralkxymd36k2o9&st=2wjocjaq&dl=0",
    ],
    label: "59 ml.",
    description:
      "Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.",
    selected: false,
  },
  {
    id: 933,
    name: "Matt Fabric ROSA-BEIGE 59ml.",
    price: "3.00",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/moey0g5uahkgz4a2g4r01/style-matt-fabric-ROSA-BEIGE.jpg?rlkey=zfewg6ri3lax6rmwh9j79hy1v&st=flti86uz&dl=0",
    ],
    label: "59 ml.",
    description:
      "Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.",
    selected: false,
  },
  {
    id: 934,
    name: "Matt Fabric ROSA-BEBE 59ml.",
    price: "3.00",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/u2mnhv0ll3ozvb6xq46b1/style-matt-fabric-ROSA-BEBE.jpg?rlkey=lf0wkawei3kozu157n203bo2z&st=15mf8y6b&dl=0",
    ],
    label: "59 ml.",
    description:
      "Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.",
    selected: false,
  },
  {
    id: 935,
    name: "Matt Fabric ROJO-CORAL 59ml.",
    price: "3.00",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/52ooc9vwn5q8j11hv0emx/style-matt-fabric-ROJO-CORAL.jpg?rlkey=1f1brvkdl98vzmhjv08267i9c&st=3x2eefvq&dl=0",
    ],
    label: "59 ml.",
    description:
      "Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.",
    selected: false,
  },
  {
    id: 936,
    name: "Matt Fabric ROJO-CARMIN 59ml.",
    price: "3.00",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/20ikhkm46vzb6q02il3uw/style-matt-fabric-ROJO-CARMIN.jpg?rlkey=ng0h7b65xigzvb5a64mo1xx0p&st=bci7tkrv&dl=0",
    ],
    label: "59 ml.",
    description:
      "Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.",
    selected: false,
  },
  {
    id: 937,
    name: "Matt Fabric PURPURA-OSCURO 59ml.",
    price: "3.00",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/bhzt9ie90iq5me02lmjb9/style-matt-fabric-PURPURA-OSCURO.jpg?rlkey=fwkneir8b62dbti1yokqy3q8b&st=am4fq269&dl=0",
    ],
    label: "59 ml.",
    description:
      "Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.",
    selected: false,
  },
  {
    id: 938,
    name: "Matt Fabric PARLAMENTO 59ml.",
    price: "3.00",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/n1d32otzlw0ur038h6nz9/style-matt-fabric-PARLAMENTO.jpg?rlkey=0d59zlit590f5tf75nb4uh8sk&st=ss328cc7&dl=0",
    ],
    label: "59 ml.",
    description:
      "Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.",
    selected: false,
  },
  {
    id: 939,
    name: "Matt Fabric NEGRO 59ml.",
    price: "3.00",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/ui6ua6p30rced2kcmgw3f/style-matt-fabric-NEGRO.jpg?rlkey=8liwohtjbrldqfckbkpwfuwq1&st=tn88fd9f&dl=0",
    ],
    label: "59 ml.",
    description:
      "Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.",
    selected: false,
  },
  {
    id: 940,
    name: "Matt Fabric NARANJA 59ml.",
    price: "3.00",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/cygb4yqcd3832ae4jjcea/style-matt-fabric-NARANJA.jpg?rlkey=awawbbjcwnrj4qb7clsvom4n4&st=yd5e1px9&dl=0",
    ],
    label: "59 ml.",
    description:
      "Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.",
    selected: false,
  },
  {
    id: 941,
    name: "Matt Fabric MORADO 59ml.",
    price: "3.00",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/uzwar2ywf40xwpji8wsrd/style-matt-fabric-MORADO.jpg?rlkey=p72i60h1s4ma36i9o0a2edvzl&st=z8fx4jpb&dl=0",
    ],
    label: "59 ml.",
    description:
      "Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.",
    selected: false,
  },
  {
    id: 942,
    name: "Matt Fabric MORA 59ml.",
    price: "3.00",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/n63np8siv40cmxb617305/style-matt-fabric-MORA.jpg?rlkey=e9iildt3yeb33mxbsgauep48c&st=gzq179fy&dl=0",
    ],
    label: "59 ml.",

    description:
      "Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.",
    selected: false,
  },
  {
    id: 943,
    name: "Matt Fabric MARRON-OSCURO 59ml.",
    price: "3.00",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/q2cf005y6q6emysoqshrz/style-matt-fabric-MARRON-OSCURO.jpg?rlkey=2yinwsqe0zuvqmvyyrl9lsmcg&st=73spfb55&dl=0",
    ],
    label: "59 ml.",
    description:
      "Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.",
    selected: false,
  },
  {
    id: 944,
    name: "Matt Fabric LILA-PURPURA 59ml.",
    price: "3.00",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/m5m73sigx8dztqegdx8zn/style-matt-fabric-LILA-PURPURA.jpg?rlkey=sfvvat5g7cztdffe8snrv4tvf&st=pt5mxxat&dl=0",
    ],
    label: "59 ml.",
    description:
      "Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.",
    selected: false,
  },
  {
    id: 945,
    name: "Matt Fabric GRIS 59ml.",
    price: "3.00",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/niv6cu2zqdf8amtcxjyvz/style-matt-fabric-GRIS.jpg?rlkey=ceqmtq4xgjt51bvyyr11c4ew3&st=dfw5zh2e&dl=0",
    ],
    label: "59 ml.",
    description:
      "Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.",
    selected: false,
  },
  {
    id: 946,
    name: "Matt Fabric FUCSIA 59ml.",
    price: "3.00",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/edq4pbjyfv6m40pf593nk/style-matt-fabric-FUCSIA.jpg?rlkey=19pt5mlbirbu698k0i64cwoh6&st=32640d8y&dl=0",
    ],
    label: "59 ml.",
    description:
      "Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.",
    selected: false,
  },
  {
    id: 947,
    name: "Matt Fabric FRESA 59ml.",
    price: "3.00",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/a1u8h6b8twz83i2kugyo1/style-matt-fabric-FRESA.jpg?rlkey=za6ucwbr9ccutio59rf836uzl&st=x0uc80qk&dl=0",
    ],
    label: "59 ml.",
    description:
      "Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.",
    selected: false,
  },
  {
    id: 948,
    name: "Matt Fabric CORAL-CLARO 59ml.",
    price: "3.00",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/2ikudv1e7iyocl5sdsbd9/style-matt-fabric-CORAL-CLARO.jpg?rlkey=5u1el050awrjns3dv1sac4r8h&st=17pa8dt8&dl=0",
    ],
    label: "59 ml.",
    description:
      "Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.",
    selected: false,
  },
  {
    id: 949,
    name: "Matt Fabric CESPED 59ml.",
    price: "3.00",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/hx67vmemzj6v6p464lolr/style-matt-fabric-CESPED.jpg?rlkey=ozxse22jdyynct8c367oedlrc&st=j2uik5gr&dl=0",
    ],
    label: "59 ml.",
    description:
      "Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.",
    selected: false,
  },
  {
    id: 950,
    name: "Matt Fabric CARAMELO 59ml.",
    price: "3.00",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/f0d4aqc1fdms44ftjtezr/style-matt-fabric-CARAMELO.jpg?rlkey=wyyl5c7q2p76n790j97wfm1nu&st=99ix58sa&dl=0",
    ],
    label: "59 ml.",
    description:
      "Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.",
    selected: false,
  },
  {
    id: 951,
    name: "Matt Fabric CAPUCHINO 59ml.",
    price: "3.00",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/fmwziv5qbsfa57e85fbmm/style-matt-fabric-CAPUCHINO.jpg?rlkey=7gl9wxq9kzozh6cileuojit35&st=q7amzu3i&dl=0",
    ],
    label: "59 ml.",
    description:
      "Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.",
    selected: false,
  },
  {
    id: 952,
    name: "Matt Fabric CALABAZA 59ml.",
    price: "3.00",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/q8gdf5ywrkx056z9k6ihv/style-matt-fabric-CALABAZA.jpg?rlkey=60s4rrhdbdixpbhtbw3jezjv7&st=0xemgb74&dl=0",
    ],
    label: "59 ml.",
    description:
      "Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.",
    selected: false,
  },
  {
    id: 953,
    name: "Matt Fabric CACAO 59ml.",
    price: "3.00",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/02t72m4u8r4ru0jked28d/style-matt-fabric-CACAO.jpg?rlkey=5e07mbbyxej5vvgmhf3e2zdrr&st=dd4yuh31&dl=0",
    ],
    label: "59 ml.",
    description:
      "Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.",
    selected: false,
  },
  {
    id: 954,
    name: "Matt Fabric BURDEOS 59ml.",
    price: "3.00",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/tqpckcyg7gp05l6nkyu5g/style-matt-fabric-BURDEOS.jpg?rlkey=jruljjpkshkzbf6kapnq8oayh&st=tc4t963i&dl=0",
    ],
    label: "59 ml.",
    description:
      "Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.",
    selected: false,
  },
  {
    id: 955,
    name: "Matt Fabric BLANCO 59ml.",
    price: "3.00",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/7fjp8nedu7q9mjoi992kp/style-matt-fabric-BLANCO.jpg?rlkey=4zjbu7tpzo9tm5doqltpzeqis&st=nb470v0p&dl=0",
    ],
    label: "59 ml.",
    description:
      "Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.",
    selected: false,
  },
  {
    id: 956,
    name: "Matt Fabric AZUL-TUFIS 59ml.",
    price: "3.00",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/04jeu2noxa89w30b5thc8/style-matt-fabric-AZUL-TUFIS.jpg?rlkey=9jvp2nqmm5ir1rv6by3g5aimg&st=hgqp8t9f&dl=0",
    ],
    label: "59 ml.",
    description:
      "Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.",
    selected: false,
  },
  {
    id: 957,
    name: "Matt Fabric AZUL-ROYAL 59ml.",
    price: "3.00",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/b0dwnkza76x9oqfhkswqm/style-matt-fabric-AZUL-ROYAL.jpg?rlkey=2imigrknudjs4qizf098t4b62&st=38zn9buu&dl=0",
    ],
    label: "59 ml.",
    description:
      "Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.",
    selected: false,
  },
  {
    id: 958,
    name: "Matt Fabric AZUL-OSCURO 59ml.",
    price: "3.00",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/1ftktque06t7jj6m3eo58/style-matt-fabric-AZUL-OSCURO.jpg?rlkey=5pdoblco2ohf2m9zlyfdyruid&st=2vmn1rm1&dl=0",
    ],
    label: "59 ml.",

    description:
      "Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.",
    selected: false,
  },
  {
    id: 959,
    name: "Matt Fabric AZUL-LAVANDA 59ml.",
    price: "3.00",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/n1gz77j1iji47qokyy5rf/style-matt-fabric-AZUL-LAVANDA.jpg?rlkey=f1yt8tcpz5g6okcygwqb34473&st=2k5ymb9j&dl=0",
    ],
    label: "59 ml.",

    description:
      "Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.",
    selected: false,
  },
  {
    id: 960,
    name: "Matt Fabric AZUL-BEBE 59ml.",
    price: "3.00",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/i32krz1r6ccf2h00hu1mo/style-matt-fabric-AZUL-BEBE.jpg?rlkey=3lhlgnwj6bt0e11sp6ka5t4se&st=6sx18yed&dl=0",
    ],
    label: "59 ml.",

    description:
      "Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.",
    selected: false,
  },
  {
    id: 961,
    name: "Matt Fabric AZUCAR-ROSA 59ml.",
    price: "3.00",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/hl8235gxl8dfew8rrdbmf/style-matt-fabric-AZUCAR-ROSA.jpg?rlkey=35eqypzfyx4blnialviru5hqm&st=7a18qhpw&dl=0",
    ],
    label: "59 ml.",

    description:
      "Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.",
    selected: false,
  },
  {
    id: 962,
    name: "Matt Fabric ARENA-BEIGE 59ml.",
    price: "3.00",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/bq1l6ct1qkh5qoeqo01nf/style-matt-fabric-ARENA-BEIGE.jpg?rlkey=ic8a1iog2lvj7wvtqy0kud807&st=w8mzvvos&dl=0",
    ],
    label: "59 ml.",

    description:
      "Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.",
    selected: false,
  },
  {
    id: 963,
    name: "Matt Fabric AMBAR 59ml.",
    price: "3.00",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/lq9ask7b44hjijmi4o93i/style-matt-fabric-AMBAR.jpg?rlkey=6xq8dzm0lsjgkm6zk4438g2eb&st=eq1qvrp6&dl=0",
    ],
    label: "59 ml.",

    description:
      "Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.",
    selected: false,
  },
  {
    id: 964,
    name: "Matt Fabric AMARILLO 59ml.",
    price: "3.00",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/f04isoie5ixzj5jhx35ys/style-matt-fabric-AMARILLO.jpg?rlkey=xvj1bkgp6hx5ks10r0qg3mf72&st=3g96dx99&dl=0",
    ],
    label: "59 ml.",

    description:
      "Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.",
    selected: false,
  },
  {
    id: 965,
    name: "Matt Fabric AMARILLO-VAINILLA 59ml.",
    price: "3.00",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/e4u1iknwoh19c7c129a4f/style-matt-fabric-AMARILLO-VAINILLA.jpg?rlkey=57ruq4xj0csuv644xjy6qqie4&st=c5jmbdhp&dl=0",
    ],
    label: "59 ml.",
    description:
      "Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar_la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.",
    selected: false,
  },
  {
    id: 966,
    name: "Matt Fabric AMARILLO-LIMON 59ml.",
    price: "3.00",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/mrk5it1v1l5o99ywu73ek/style-matt-fabric-AMARILLO-LIMON.jpg?rlkey=pz1llhpn8op66e4jf0ny4m241&st=ilagccc7&dl=0",
    ],
    label: "59 ml.",
    description:
      "Pintura decorativa mate con base al agua de alta calidad para pintar tela. Estas pinturas de tela pueden usarse en casi cualquier tipo de fibra. Agitar bien antes de usar. Lavar y se seca las prendas antes de trabajar sobre ellas. Dejar secar la pintura 1 día y después planchar la tela unos 5 minutos del revés para fijar la pintura.",
    selected: false,
  },
  {
    id: 967,
    name: "Set 5 Pinturas TELA Vintage",
    price: "14.95",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/c49comyxwweiiw7fo7tru/set-tela-vintage-5-pcs.jpg?rlkey=yjc6h2wg3pbmwbb9kjcpotxkc&st=7zkjonxe&dl=0",
    ],
    label: "5 pcs",
    description:
      "SET 5 pinturas STYLE MATT FABRIC de CADENCE F634, F614, F618, F624 y F627",
    selected: false,
  },
  {
    id: 968,
    name: "Set 5 Pinturas TELA Basico",
    price: "14.95",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/bik18f4jh8v6scfje5133/set-5-pinturas-basico-tela.jpg?rlkey=y9nhdcibpyabjqvz83z683dy7&st=kpxoijzh&dl=0",
    ],
    label: "5 pcs",
    description:
      "SET 5 pinturas STYLE MATT FABRIC de CADENCE BLANCO, NEGRO, AZUL, ROJO y AMARILLO",
    selected: false,
  },
  {
    id: 969,
    name: "Set 5 Pinturas TELA Funny",
    price: "14.95",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/1jkmrtsjygq3rzioqwyfl/set-tela-funny-5-pcs.jpg?rlkey=l2b9sezkqsg26glhqgfymn6xz&st=4krsuwws&dl=0",
    ],
    label: "5 pcs",
    description:
      "SET 5 pinturas STYLE MATT FABRIC de CADENCE F605, F612, F616, F622 y F633",
    selected: false,
  },
  {
    id: 970,
    name: "Pintura HOLOGRAFICA para tela",
    price: "4.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/p4isy2lmnxxo6mqrsspck/pintura-holografica-para-tela.jpg?rlkey=vfuepkxwr9ym0arl3o6lf1dnx&st=xyfr9iu7&dl=0",
    ],
    label: "50 ml.",

    description:
      "Pintura con base al agua de acabado transparente con brillos holográficos especial apra usar sobre tela, Recuerda fijar la pintura a la tela con el calor de una plancha sin vapor.",
    selected: false,
  },
  {
    id: 722,
    name: "Caballito de mar Nº1 24,5x13cm",
    price: "6.50",
    images: [
      "https://www.artesaniasmontejo.com/21893-28900-thickbox_default/caballito-de-mar-n1.jpg",
    ],
    label: "24,5x13",
    description:
      "Resina de poliuretano blanco CADENCE para decorar con las pinturas y pastas Cadence.",
    selected: false,
  },
  {
    id: 723,
    name: "Estrella de mar mediana 13,5x13,5cm",
    price: "6.20",
    images: [
      "https://www.artesaniasmontejo.com/21896-28903-large_default/estrella-de-mar-mediana.jpg",
    ],
    label: "13,5x13,5",
    description:
      "Resina de poliuretano blanco CADENCE para decorar con las pinturas y pastas Cadence.",
    selected: false,
  },
  {
    id: 724,
    name: "Tortuga de mar grande 15,5x12cm",
    price: "6.20",
    images: [
      "https://www.artesaniasmontejo.com/21898-28908-large_default/tortuga-de-mar-grande.jpg",
    ],
    label: "15,5x12",
    description:
      "Resina de poliuretano blanco CADENCE para decorar con las pinturas y pastas Cadence.",
    selected: false,
  },
  {
    id: 792,
    name: "Principe de Java",
    price: "28.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/wgftklyyr19sha2khsfyv/principe-de-java.jpg?rlkey=y0zwg1b3tkpyxeglx5ysxvxts&st=3gkxut3z&dl=0",
    ],
    label: "30x24x8",
    description:
      "Resina de poliuretano blanco CADENCE para decorar con las pinturas y pastas Cadence.",
    selected: false,
  },
  {
    id: 793,
    name: "Cabeza balinesa 43x27cm",
    price: "46.80",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/vshazsyt2t8gu6utsgcw1/cabeza-balinesa.jpg?rlkey=zlptly4gr4ayvdn9v0aunf17n&st=azu0hbfk&dl=0",
    ],
    label: "43x27",
    description:
      "Resina de poliuretano blanco CADENCE para decorar con las pinturas y pastas Cadence.",
    selected: false,
  },
  {
    id: 794,
    name: "Cabeza Buda 49x24cm",
    price: "28.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/lip7h7bny8j5s3m6wnjpr/buda-de-resina-de-poliuretano.jpg?rlkey=jz0wi0eusqjy1q6xwcq1yo67d&st=11oizasr&dl=0",
    ],
    label: "49x24",
    description:
      "Resina de poliuretano blanco CADENCE para decorar con las pinturas y pastas Cadence.",
    selected: false,
  },
  {
    id: 795,
    name: "Buda Sentado 33x25cm",
    price: "34.40",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/4psdwfdmfjxkz260l62q9/buda-sentado.jpg?rlkey=9bd9onz8iekjxtb5p4hehvjcz&st=cprx2yy7&dl=0",
    ],
    label: "33x25",
    description:
      "Resina de poliuretano blanco CADENCE para decorar con las pinturas y pastas Cadence.",
    selected: false,
  },
  {
    id: 796,
    name: "Alas Grandes 75cm",
    price: "61.50",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/7vjzkzptnnltquei8bibb/resina-cadence-alas-grandes.jpg?rlkey=0h1wqjnn5firfe6kprlz1xumn&st=qmulaqwx&dl=0",
    ],
    label: "75",
    description:
      "Resina de poliuretano blanco CADENCE para decorar con las pinturas y pastas Cadence.",
    selected: false,
  },
  {
    id: 797,
    name: "Cabeza Clásica Poseidón 25x17cm",
    price: "21.00",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/o7ud6nggxw0dr1i6mubzd/resina-cadence-cabeza-poseidon.jpg?rlkey=sq5rw8yjqitc5yzg0u97wutup&st=tri1akup&dl=0",
    ],
    label: "25x17",
    description:
      "Resina de poliuretano blanco CADENCE para decorar con las pinturas y pastas Cadence.",
    selected: false,
  },
  {
    id: 798,
    name: "Cabeza Clásica Zeus 31x18cm",
    price: "21.00",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/s8v1ylg1kd6icbsho99om/resina-cadence-cabeza-zeus.jpg?rlkey=dy9h1ibqhb3tz0ryoda4drr8l&st=a3b077gn&dl=0",
    ],
    label: "31x18",
    description:
      "Resina de poliuretano blanco CADENCE para decorar con las pinturas y pastas Cadence.",
    selected: false,
  },
  {
    id: 799,
    name: "Mandala 45cm diámetro",
    price: "32.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/kvsfb3olvji8r594occn1/resina-cadence-mandala-45.jpg?rlkey=1aomzuk9izw01tgwmnzoai2d4&st=faoche78&dl=0",
    ],
    label: "45",
    description:
      "Resina de poliuretano blanco CADENCE para decorar con las pinturas y pastas Cadence.",
    selected: false,
  },
  {
    id: 800,
    name: "Mandala 2 39.5cm diámetro",
    price: "26.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/wfsvg8vauwi92m4qym66o/resina-cadence-mandala-2.jpg?rlkey=duah1ogs20r9ig1h4a3nj29tn&st=kni93u1f&dl=0",
    ],
    label: "39.5",
    description:
      "Resina de poliuretano blanco CADENCE para decorar con las pinturas y pastas Cadence.",
    selected: false,
  },
  {
    id: 801,
    name: "Máscara Veneciana 31x19cm",
    price: "20.50",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/mk3imgm1dxqy1sgl4b2o6/resina-cadence-mascara-veneciana.jpg?rlkey=ll30fco5r6mbagv6wu1zulkjy&st=1mq4njfj&dl=0",
    ],
    label: "31x19",
    description:
      "Resina de poliuretano blanco CADENCE para decorar con las pinturas y pastas Cadence.",
    selected: false,
  },
  {
    id: 802,
    name: "Máscara Veneciana Pavo 32x16cm",
    price: "20.50",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/z38mwktasgb9t90ndlpl3/resina-cadence-mascara-veneciana-pavo.jpg?rlkey=l2358b6upkl503dpe1s3h9g8j&st=mg54n42g&dl=0",
    ],
    label: "32x16",
    description:
      "Resina de poliuretano blanco CADENCE para decorar con las pinturas y pastas Cadence.",
    selected: false,
  },
  {
    id: 803,
    name: "Máscara Acanto 10.5x8.5cm",
    price: "5.50",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/ohip20zyzzssyww1jsk4a/resina-cadence-mascara-acanto.jpg?rlkey=vj58eu8q1rre1umcvvim6ojkk&st=04koi658&dl=0",
    ],
    label: "10.5x8.5",
    description:
      "Resina de poliuretano blanco CADENCE para decorar con las pinturas y pastas Cadence.",
    selected: false,
  },
  {
    id: 804,
    name: "Astronauta 36x46x9cm",
    price: "44.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/wt32baf96qsw6o8e4cwt8/Astronauta.jpg?rlkey=epmdbwcwrvk55z20wg67z2105&st=xl0pbw08&dl=0",
    ],
    label: "36x46x9",
    description:
      "Resina de poliuretano blanco CADENCE para decorar con las pinturas y pastas Cadence.",
    selected: false,
  },
  {
    id: 805,
    name: "Marco Art Nouvel Ext 63x85cm Int 43.5cm",
    price: "51.10",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/t6tfxos2tm99a7gqppf3y/resina-cadence-art-noveau.jpg?rlkey=e1k39bml14m7m0gttgx7q9cts&st=pr0hvw9k&dl=0",
    ],
    label: "63x85/43.5",
    description:
      "Resina de poliuretano blanco CADENCE para decorar con las pinturas y pastas Cadence.",
    selected: false,
  },
  {
    id: 806,
    name: "Marco Circular Barroco Ext 55x50cm Int 32.5cm",
    price: "24.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/vo0yef7nvrarl87xx9sde/resina-cadence-marco-circular-barroco.jpg?rlkey=llzi7yc4acbie4i352nt4r4m7&st=hkv09jzu&dl=0",
    ],
    label: "55x50/32.5",
    description:
      "Resina de poliuretano blanco CADENCE para decorar con las pinturas y pastas Cadence.",
    selected: false,
  },
  {
    id: 807,
    name: "Placa Decorativa 60x60cm",
    price: "40.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/xaokjl90ehe5epjl8fzcc/resina-cadence-placa-decorativa-60x60.jpg?rlkey=o58fyak56fept4oz87t0vwq4m&st=ya6nu0f1&dl=0",
    ],
    label: "60x60",
    description:
      "Resina de poliuretano blanco CADENCE para decorar con las pinturas y pastas Cadence.",
    selected: false,
  },
  {
    id: 808,
    name: "Placa Decorativa 57x57cm",
    price: "40.30",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/6hss1rdqpoltg5ncslr7l/resina-cadence-placa-decorativa-57x57.jpg?rlkey=x14mh08bh7cth3upb19co4s5v&st=2dob8gng&dl=0",
    ],
    label: "57x57",
    description:
      "Resina de poliuretano blanco CADENCE para decorar con las pinturas y pastas Cadence.",
    selected: false,
  },
  {
    id: 809,
    name: "Marco Hojas y Frutos 23x18cm",
    price: "11.30",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/51viulueihvq1bcc59gjs/resina-cadence-marco-hojas-frutos.jpg?rlkey=waw9myx6eay382u1p0ka3kkhm&st=ayyixf6h&dl=0",
    ],
    label: "23x18",
    description:
      "Resina de poliuretano blanco CADENCE para decorar con las pinturas y pastas Cadence.",
    selected: false,
  },
  {
    id: 810,
    name: "Marco Nenúfar 20.5x16cm",
    price: "10.80",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/wq8o4b2w4wqxbhhnpsozl/resina-cadence-marco-nenufar.jpg?rlkey=ium2lkj5iebbqpv67y7h20bc9&st=u2h43gyx&dl=0",
    ],
    label: "20.5x16",
    description:
      "Resina de poliuretano blanco CADENCE para decorar con las pinturas y pastas Cadence.",
    selected: false,
  },
  {
    id: 811,
    name: "Hoja Nenúfar 25x25cm",
    price: "17.15",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/tp34o7yazc4isjqrytmj0/resina-cadence-hoja-nenufar.jpg?rlkey=y77xxrtrgpaxscfzmmgbyywza&st=q34a5ky6&dl=0",
    ],
    label: "25x25",
    description:
      "Resina de poliuretano blanco CADENCE para decorar con las pinturas y pastas Cadence.",
    selected: false,
  },
  {
    id: 812,
    name: "Hoja Cadence 25x25cm",
    price: "17.15",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/8ilgwmffwmo69wwki8a9h/resina-cadence-hoja-cadence.jpg?rlkey=muohne9iu3k8cfx12g7rv1cyp&st=ktbpeit8&dl=0",
    ],
    label: "25x25",
    description:
      "Resina de poliuretano blanco CADENCE para decorar con las pinturas y pastas Cadence.",
    selected: false,
  },
  {
    id: 813,
    name: "Peana + Cabeza Caballo",
    price: "23.00",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/rgf7pkdhh0rt7bmqptlb4/cabeza-caballo-peana.jpg?rlkey=yhzerv84qnxil4varfhuxk4wf&st=nw7y999b&dl=0",
    ],
    label: "",
    description:
      "Resina de poliuretano blanco CADENCE para decorar con las pinturas y pastas Cadence.",
    selected: false,
  },
  {
    id: 971,
    name: "Spray textil VERDE HOJA 100 ml.",
    price: "4.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/84nb62sdc895f6cyu1af3/spray-textil-cadence-VERDE-HOJA.jpg?rlkey=4ugppvd17ytcir37yotyokdpa&st=oxi9s6d0&dl=0",
    ],
    label: "100 ml.",
    description:
      "Pintura en spray textil perlada permanente a base de agua de alta calidad para crear su propia moda en tonos brillantes y brillantes.",
    selected: false,
  },
  {
    id: 972,
    name: "Spray textil TURQUESA 100 ml.",
    price: "4.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/sq07wg94incr2ccc8jd1r/spray-textil-cadence-TURQUESA.jpg?rlkey=z1u1lbsmxgt7dcrk4j42setzw&st=uybpeb0u&dl=0",
    ],
    label: "100 ml.",
    description:
      "Pintura en spray textil perlada permanente a base de agua de alta calidad para crear su propia moda en tonos brillantes y brillantes.",
    selected: false,
  },
  {
    id: 973,
    name: "Spray textil PETRÓLEO 100 ml.",
    price: "4.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/0fwsl9ocb9elu672gfsud/spray-textil-cadence-PETROLEO.jpg?rlkey=6orypx1l5teut0txn0e9pgswq&st=mqbx0iwo&dl=0",
    ],
    label: "100 ml.",
    description:
      "Pintura en spray textil perlada permanente a base de agua de alta calidad para crear su propia moda en tonos brillantes y brillantes.",
    selected: false,
  },
  {
    id: 974,
    name: "Spray textil NARANJA 100 ml.",
    price: "4.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/0dpagyo6r7icujd8withl/spray-textil-cadence-NARANJA.jpg?rlkey=0859lq77kue4xmymz2zmwhppp&st=q64p2x86&dl=0",
    ],
    label: "100 ml.",
    description:
      "Pintura en spray textil perlada permanente a base de agua de alta calidad para crear su propia moda en tonos brillantes y brillantes.",
    selected: false,
  },
  {
    id: 975,
    name: "Spray textil MORADO 100 ml.",
    price: "4.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/1gzrvcx9yr9mehx2nf4dq/spray-textil-cadence-MORADO.jpg?rlkey=1n2188n3ukn1b4wtthgeh0y1j&st=3oz1euwp&dl=0",
    ],
    label: "100 ml.",
    description:
      "Pintura en spray textil perlada permanente a base de agua de alta calidad para crear su propia moda en tonos brillantes y brillantes.",
    selected: false,
  },
  {
    id: 976,
    name: "Spray textil CARMÍN 100 ml.",
    price: "4.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/ildbqqfv7yxkru4r3mhqb/spray-textil-cadence-CARMIN.jpg?rlkey=bgd2znp5jzqdnq0pyqqy7upzk&st=9rymc0ws&dl=0",
    ],
    label: "100 ml.",
    description:
      "Pintura en spray textil perlada permanente a base de agua de alta calidad para crear su propia moda en tonos brillantes y brillantes.",
    selected: false,
  },
  {
    id: 977,
    name: "Spray textil BURDEOS 100 ml.",
    price: "4.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/txpujytb3efvgmqjfwfna/spray-textil-cadence-BURDEOS.jpg?rlkey=rwhy4xupr8dsz3edhzjw6603p&st=ssgltyfa&dl=0",
    ],
    label: "100 ml.",
    description:
      "Pintura en spray textil perlada permanente a base de agua de alta calidad para crear su propia moda en tonos brillantes y brillantes.",
    selected: false,
  },
  {
    id: 978,
    name: "Spray textil BLANCO 100 ml.",
    price: "4.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/7n9bhvmwfupkky4s7hehs/spray-textil-cadence-BLANCO.jpg?rlkey=p5fa3rh8hsr6wwjmyc93c4iww&st=jvcpdlk0&dl=0",
    ],
    label: "100 ml.",
    description:
      "Pintura en spray textil perlada permanente a base de agua de alta calidad para crear su propia moda en tonos brillantes y brillantes.",
    selected: false,
  },
  {
    id: 979,
    name: "Spray textil AZUL-MAR 100 ml.",
    price: "4.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/zztnnoinp3nq367u65ydc/spray-textil-cadence-AZUL-MAR.jpg?rlkey=pbtrpno0tovqznt8gy6e4e0ps&st=w87lfoo1&dl=0",
    ],
    label: "100 ml.",
    description:
      "Pintura en spray textil perlada permanente a base de agua de alta calidad para crear su propia moda en tonos brillantes y brillantes.",
    selected: false,
  },
  {
    id: 980,
    name: "Spray textil AMARILLO-ATARDECER 100 ml.",
    price: "4.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/bt6x2nmpso9b02pifpwig/spray-textil-cadence-AMARILLO-ATARDECER.jpg?rlkey=9mvo1ovly92jap3g8ajku5ixq&st=qeisbng2&dl=0",
    ],
    label: "100 ml.",
    description:
      "Pintura en spray textil perlada permanente a base de agua de alta calidad para crear su propia moda en tonos brillantes y brillantes.",
    selected: false,
  },
  {
    id: 440,
    name: "Stencil CADENCE cenefa 10x25cm UA36",
    price: "2.30",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/r5tk1lzgdx5z201c7w4s3/stencil-cadence-ua36-10x25cm.jpg?rlkey=oowwf8fody1gbntprjmmg3b6p&st=9tnou0mx&dl=0",
    ],
    label: "10x25cm",
    description:
      "Stencils o Plantillas CADENCE con diseños de cenefas y filigranas para usar en proyectos de decoración, manualidades, scrapbook, home decor...",
    selected: false,
  },
  {
    id: 441,
    name: "Stencil CADENCE cenefa 10x25cm UA29",
    price: "2.30",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/m0o1fj2ivc57jislb6obd/stencil-cadence-ua29-10x25cm.jpg?rlkey=sou3k62jzqtbtk9hcazi1rh7i&st=2iuwnloy&dl=0",
    ],
    label: "10x25cm",
    description:
      "Stencils o Plantillas CADENCE con diseños de cenefas y filigranas para usar en proyectos de decoración, manualidades, scrapbook, home decor...",
    selected: false,
  },
  {
    id: 442,
    name: "Stencil CADENCE cenefa 6x20cm K165",
    price: "1.80",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/jbs0x5q8rl6a3lx80gdb3/stencil-cadence-k165-6x20cm.jpg?rlkey=zr4noksoukni8ax1f6m06v50u&st=l5lkbwg2&dl=0",
    ],
    label: "6x20cm",
    description:
      "Stencils o Plantillas CADENCE con diseños de cenefas y filigranas para usar en proyectos de decoración, manualidades, scrapbook, home decor...",
    selected: false,
  },

  {
    id: 443,
    name: "Stencil CADENCE cenefa 6x20cm K163",
    price: "1.80",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/0cbde8olzf6cwcztafje1/Stencil-CADENCE-K163-6x20cm.jpg?rlkey=4jgq2hjr9fcvtsro5w7od8lip&st=3g6u1f44&dl=0",
    ],
    label: "6x20cm",
    description:
      "Stencils o Plantillas CADENCE con diseños de cenefas y filigranas para usar en proyectos de decoración, manualidades, scrapbook, home decor...",
    selected: false,
  },

  {
    id: 444,
    name: "Stencil CADENCE cenefa 6x20cm K120",
    price: "1.80",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/e4sipa0wsgjvre3n9128w/stencil-cadence-k120-6x20cm.jpg?rlkey=3tpdxtfomp3hahifqac4hkoos&st=20y057il&dl=0",
    ],
    label: "6x20cm",
    description:
      "Stencils o Plantillas CADENCE con diseños de cenefas y filigranas para usar en proyectos de decoración, manualidades, scrapbook, home decor...",
    selected: false,
  },
  {
    id: 393,
    name: "Stencil HOME DECOR 45x45cm HD146",
    price: "13.10",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/5pzq0mi207z9p71n1sa0c/stencil-cadence-45x45cm.jpg?rlkey=q4fqb8fjm0fikud50wklnbxg2&st=a0v7cygv&dl=0",
    ],
    label: "45x45cm",
    description:
      "Stencils CADENCE para home decor de gran formato 45x45cm. ideal para decoración de paredes, cuadros de gran formato, muebles como comodas, mesillas, butacas, cajas... ",
    selected: false,
  },
  {
    id: 394,
    name: "Stencil HOME DECOR 45x45cm HD69",
    price: "13.10",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/hd6s9vgbjqvmexv3qr807/stencil-cadence-45x45cm-1.jpg?rlkey=lyllmen44daq52kswtx1wrxpt&st=a3rzhar0&dl=0",
    ],
    label: "45x45cm",
    description:
      "Stencils CADENCE para home decor de gran formato 45x45cm. ideal para decoración de paredes, cuadros de gran formato, muebles como comodas, mesillas, butacas, cajas... ",
    selected: false,
  },
  {
    id: 395,
    name: "Stencil HOME DECOR 45x45cm HD158",
    price: "13.10",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/d8slpytscip16uhoh3jpg/stencil-cadence-45x45cm-2.jpg?rlkey=qlgdrtu1unrhfb6364n7qvdh6&st=47ujy5ty&dl=0",
    ],
    label: "45x45cm",
    description:
      "Stencils CADENCE para home decor de gran formato 45x45cm. ideal para decoración de paredes, cuadros de gran formato, muebles como comodas, mesillas, butacas, cajas... ",
    selected: false,
  },
  {
    id: 396,
    name: "Stencil HOME DECOR 45x45cm HD156",
    price: "13.10",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/q1scp4q10urnicvj74ck6/stencil-cadence-45x45cm-3.jpg?rlkey=5ubz7s9exlarca07edlmnvtkh&st=yvrfv4la&dl=0",
    ],
    label: "45x45cm",
    description:
      "Stencils CADENCE para home decor de gran formato 45x45cm. ideal para decoración de paredes, cuadros de gran formato, muebles como comodas, mesillas, butacas, cajas... ",
    selected: false,
  },
  {
    id: 397,
    name: "Stencil HOME DECOR 45x45cm HD121",
    price: "13.10",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/k0yh7ixh9wuk8w67lv461/stencil-cadence-45x45cm-4.jpg?rlkey=rf1gyai4m69z6n6dvcq7dw07j&st=wqswqi7s&dl=0",
    ],
    label: "45x45cm",
    description:
      "Stencils CADENCE para home decor de gran formato 45x45cm. ideal para decoración de paredes, cuadros de gran formato, muebles como comodas, mesillas, butacas, cajas... ",
    selected: false,
  },
  {
    id: 398,
    name: "Stencil MANDALA 2 45x45cm",
    price: "13.10",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/iy4gwlpps6xd7234c375u/stencil-cadence-45x45cm-5.png?rlkey=rq7rmnwexhxmhfviim56oxbfl&st=paukr8rs&dl=0",
    ],
    label: "45x45cm",
    description:
      "Stencils CADENCE para home decor de gran formato 45x45cm. ideal para decoración de paredes, cuadros de gran formato, muebles como comodas, mesillas, butacas, cajas... ",
    selected: false,
  },
  {
    id: 399,
    name: "Stencil ART NOUVEAU 45x45cm",
    price: "13.10",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/rfm0gdgaqc12y00tfpipa/stencil-cadence-45x45cm-6.png?rlkey=vd478ax73khjpdrwk1fl4221n&st=qa2sgtjr&dl=0",
    ],
    label: "45x45cm",
    description:
      "Stencils CADENCE para home decor de gran formato 45x45cm. ideal para decoración de paredes, cuadros de gran formato, muebles como comodas, mesillas, butacas, cajas... ",
    selected: false,
  },
  {
    id: 400,
    name: "Stencil ADAMASCADO 2 45x45cm",
    price: "13.10",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/cznr4wozwkylqoy2wlgfe/stencil-cadence-45x45cm-7.png?rlkey=fj2lypn6lni1zzxzzfme9dedo&st=q5lid62d&dl=0",
    ],
    label: "45x45cm",
    description:
      "Stencils CADENCE para home decor de gran formato 45x45cm. ideal para decoración de paredes, cuadros de gran formato, muebles como comodas, mesillas, butacas, cajas... ",
    selected: false,
  },
  {
    id: 401,
    name: "Stencil ADAMASCADO 45x45cm",
    price: "13.10",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/q390dvs4yz0x0wapdqzw8/stencil-cadence-45x45cm-8.png?rlkey=d2n09hazrrd7uup1x1pghgo9o&st=agsc2g73&dl=0",
    ],
    label: "45x45cm",
    description:
      "Stencils CADENCE para home decor de gran formato 45x45cm. ideal para decoración de paredes, cuadros de gran formato, muebles como comodas, mesillas, butacas, cajas... ",
    selected: false,
  },
  {
    id: 402,
    name: "Stencil DECO5 45x45cm",
    price: "13.10",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/s1tgyrr5u1ee11bu4qojy/stencil-cadence-45x45cm-9.jpg?rlkey=dj4lyuw6r2v7in7nky2hnbvhs&st=yl1yo8um&dl=0",
    ],
    label: "45x45cm",
    description:
      "Stencils CADENCE para home decor de gran formato 45x45cm. ideal para decoración de paredes, cuadros de gran formato, muebles como comodas, mesillas, butacas, cajas... ",
    selected: false,
  },
  {
    id: 403,
    name: "Stencil MANDALA 3 45x45cm",
    price: "13.10",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/mm96ihouplgbec9yo0tzs/stencil-cadence-45x45cm-10.png?rlkey=w116zle220u7w4pqgx2rlc2re&st=otd23g6c&dl=0",
    ],
    label: "45x45cm",
    description:
      "Stencils CADENCE para home decor de gran formato 45x45cm. ideal para decoración de paredes, cuadros de gran formato, muebles como comodas, mesillas, butacas, cajas... ",
    selected: false,
  },
  {
    id: 404,
    name: "Stencil VEGETAL 2 45x45cm",
    price: "13.10",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/iiiy76iyabha8wcum6i1h/stencil-cadence-45x45cm-11.png?rlkey=vwo25yhl1uq92e6ob041pjy3d&st=qhrr003d&dl=0",
    ],
    label: "45x45cm",
    description:
      "Stencils CADENCE para home decor de gran formato 45x45cm. ideal para decoración de paredes, cuadros de gran formato, muebles como comodas, mesillas, butacas, cajas... ",
    selected: false,
  },
  {
    id: 405,
    name: "Stencil HOME DECOR MIDI 25x25cm HDM73",
    price: "7.10",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/0nw06tbkrocpxk6zvveeg/stencil-cadence-25x25-cm.jpg?rlkey=wx55crh8ad3dsxvpeq5893327&st=2fx5fcmy&dl=0",
    ],
    label: "25x25cm",
    description:
      "Stencils o Plantillas CADENCE home decor MIDI de formato MEDIANO 25x25cm con diseños de cenefas y filigranas para usar en proyectos de decoración, manualidades, scrapbook, home decor...",
    selected: false,
  },
  {
    id: 406,
    name: "Stencil HOME DECOR MIDI 25x25cm HDM67",
    price: "7.10",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/23nbcmqcsaqusjoo3e0m5/stencil-cadence-25x25cm.jpg?rlkey=1ctf4h2p63qtubwkj7xrwsoq8&st=78usel00&dl=0",
    ],
    label: "25x25cm",
    description:
      "Stencils o Plantillas CADENCE home decor MIDI de formato MEDIANO 25x25cm con diseños de cenefas y filigranas para usar en proyectos de decoración, manualidades, scrapbook, home decor...",
    selected: false,
  },
  {
    id: 407,
    name: "Stencil FONDO CIRCULOS 25x25cm",
    price: "7.10",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/8krbqcjev7drrgtpt41w0/stencil-cadence-25x25cm-1.jpg?rlkey=0guoh500z9wjj3tmv1qmxa9y6&st=0f0qzygw&dl=0",
    ],
    label: "25x25cm",
    description:
      "Stencils o Plantillas CADENCE home decor MIDI de formato MEDIANO 25x25cm con diseños de cenefas y filigranas para usar en proyectos de decoración, manualidades, scrapbook, home decor...",
    selected: false,
  },
  {
    id: 408,
    name: "Stencil FONDO 2 TAMAÑOS 25x25cm",
    price: "7.10",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/eaet4pacfwz7s5ov08b0o/stencil-cadence-25x25cm-2.jpg?rlkey=048xp08knzx4b03nju7m8t1rm&st=xq6w4e38&dl=0",
    ],
    label: "25x25cm",
    description:
      "Stencils o Plantillas CADENCE home decor MIDI de formato MEDIANO 25x25cm con diseños de cenefas y filigranas para usar en proyectos de decoración, manualidades, scrapbook, home decor...",
    selected: false,
  },
  {
    id: 409,
    name: "Stencil HOME MIDI 25x25cm HDM70",
    price: "7.10",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/v5cn9d2vhp2f822qjc4vs/stencil-cadence-25x25cm-3.jpg?rlkey=w058r4xf1k6zjqhykdzhabvy4&st=1usz7qc7&dl=0",
    ],
    label: "25x25cm",
    description:
      "Stencils o Plantillas CADENCE home decor MIDI de formato MEDIANO 25x25cm con diseños de cenefas y filigranas para usar en proyectos de decoración, manualidades, scrapbook, home decor...",
    selected: false,
  },
  {
    id: 410,

    name: "Stencil FONDO PUNTITOS 25x25cm",
    price: "7.10",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/xsref8tvpt0i6sbpqw8z6/stencil-cadence-25x25cm-4.jpg?rlkey=2ij7gqbbbd1chkte7170hf8nz&st=obc8ttmm&dl=0",
    ],
    label: "25x25cm",
    description:
      "Stencils o Plantillas CADENCE home decor MIDI de formato MEDIANO 25x25cm con diseños de cenefas y filigranas para usar en proyectos de decoración, manualidades, scrapbook, home decor...",
    selected: false,
  },
  {
    id: 411,
    name: "Stencil SELLOS POSTALES 25x25cm",
    price: "7.10",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/sz7d5ajwgi37pbqnmalv3/stencil-cadence-25x25cm-5.jpg?rlkey=g23zlrp3cyaa2lrlnmuwwlypg&st=g5t9rt42&dl=0",
    ],
    label: "25x25cm",
    description:
      "Stencils o Plantillas CADENCE home decor MIDI de formato MEDIANO 25x25cm con diseños de cenefas y filigranas para usar en proyectos de decoración, manualidades, scrapbook, home decor...",
    selected: false,
  },
  {
    id: 412,
    name: "Stencil DAMERO 25x25cm",
    price: "7.10",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/de3gui24oaa665a9kdk2w/stencil-cadence-25x25cm-6.jpg?rlkey=w1lq05z5fyz2p3uyziv1t6yn3&st=yil98vf5&dl=0",
    ],
    label: "25x25cm",
    description:
      "Stencils o Plantillas CADENCE home decor MIDI de formato MEDIANO 25x25cm con diseños de cenefas y filigranas para usar en proyectos de decoración, manualidades, scrapbook, home decor...",
    selected: false,
  },
  {
    id: 413,
    name: "Stencil FLEURA 25x25cm",
    price: "7.10",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/znkdd5tzuc3dgyjckxhqu/stencil-cadence-25x25cm-7.jpg?rlkey=m6lqtym3bd621yni8gkdjskd4&st=er4ybv9n&dl=0",
    ],
    label: "25x25cm",
    description:
      "Stencils o Plantillas CADENCE home decor MIDI de formato MEDIANO 25x25cm con diseños de cenefas y filigranas para usar en proyectos de decoración, manualidades, scrapbook, home decor...",
    selected: false,
  },
  {
    id: 414,
    name: "Stencil BALDOSAS 25x25cm",
    price: "7.10",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/2dl2h81v1a1ow7jkrkcak/stencil-cadence-25x25cm-8.jpg?rlkey=i5i3c2tvwonr0rlcmsxcflt68&st=fwxqfuxd&dl=0",
    ],
    label: "25x25cm",
    description:
      "Stencils o Plantillas CADENCE home decor MIDI de formato MEDIANO 25x25cm con diseños de cenefas y filigranas para usar en proyectos de decoración, manualidades, scrapbook, home decor...",
    selected: false,
  },
  {
    id: 415,
    name: "Stencil BALDOSA GRANDE 25x25cm",
    price: "7.10",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/h6m9tfcz7901tyonrabvh/stencil-cadence-25x25cm-9.jpg?rlkey=pgwmcxvvnbpk5df2dw5sml3su&st=e97vldqr&dl=0",
    ],
    label: "25x25cm",
    description:
      "Stencils o Plantillas CADENCE home decor MIDI de formato MEDIANO 25x25cm con diseños de cenefas y filigranas para usar en proyectos de decoración, manualidades, scrapbook, home decor...",
    selected: false,
  },
  {
    id: 416,
    name: "Stencil ADAMASCO 25x25cm",
    price: "7.10",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/4a8p4o9o4tfmy54dxps23/stencil-cadence-25x25cm-10.jpg?rlkey=czzjzylauyjhy0mq3dsx05ylc&st=lsghgr9c&dl=0",
    ],
    label: "25x25cm",
    description:
      "Stencils o Plantillas CADENCE home decor MIDI de formato MEDIANO 25x25cm con diseños de cenefas y filigranas para usar en proyectos de decoración, manualidades, scrapbook, home decor...",
    selected: false,
  },
  {
    id: 417,
    name: "Stencil NÚMEROS 25x25cm",
    price: "7.10",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/jtsbos1v7teh4x6dnxk6y/stencil-cadence-25x25cm-11.jpg?rlkey=za801in6sjdtxl5w5p0kue7fv&st=nu2h5vyq&dl=0",
    ],
    label: "25x25cm",
    description:
      "Stencils o Plantillas CADENCE home decor MIDI de formato MEDIANO 25x25cm con diseños de cenefas y filigranas para usar en proyectos de decoración, manualidades, scrapbook, home decor...",
    selected: false,
  },
  {
    id: 418,
    name: "Stencil CADENCE 25x25cm HDM197",
    price: "7.10",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/bmo6e4niwkqlhh54yydje/stencil-cadence-25x25-cm-hdm197.png?rlkey=jxp2vzq3l9orn74kc3awqv2kn&st=3wc8fdkp&dl=0",
    ],
    label: "25x25cm",
    description:
      "Stencils o Plantillas CADENCE home decor MIDI de formato MEDIANO 25x25cm con diseños de cenefas y filigranas para usar en proyectos de decoración, manualidades, scrapbook, home decor...",
    selected: false,
  },
  {
    id: 419,
    name: "Stencil CADENCE 25x25cm HDM196",
    price: "7.10",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/uuh4vcyqh73to6f569ypb/stencil-cadence-25x25-cm-hdm196.png?rlkey=o0t6hnzpz9by2onw37fokzna1&st=c1fdqwgb&dl=0",
    ],
    label: "25x25cm",
    description:
      "Stencils o Plantillas CADENCE home decor MIDI de formato MEDIANO 25x25cm con diseños de cenefas y filigranas para usar en proyectos de decoración, manualidades, scrapbook, home decor...",
    selected: false,
  },
  {
    id: 428,
    name: "Stencil ZEPPELIN 21x30cm ",
    price: "4.15",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/c3z3ije6ijh3iz8cgm71r/stencil-cadence.jpg?rlkey=e79docwwce5foai5v1ephzcgd&st=wdtknzgx&dl=0",
    ],
    label: "21x30cm",
    description:
      "Stencils CADENCE para decoración, manualidades, scrapbook, home decor...",
    selected: false,
  },
  {
    id: 429,
    name: "Stencil GEOMÉTRICOS 21x30cm ",
    price: "4.15",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/lpor95b3835hx8eoroefx/stencil-cadence-1.jpg?rlkey=mnciqu94gwbvvx00dyclmahuj&st=425rhm36&dl=0",
    ],
    label: "21x30cm",
    description:
      "Stencils CADENCE para decoración, manualidades, scrapbook, home decor...",
    selected: false,
  },
  {
    id: 430,
    name: "Stencil FILIGRANAS GRANDE 21x30cm ",
    price: "4.15",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/dl5ylgelhjao1a32qdy2x/stencil-textura-floral.jpg?rlkey=f0gf2fnmgmnkc2dr9q1fcsidu&st=bifq5598&dl=0",
    ],
    label: "21x30cm",
    description:
      "Stencils CADENCE para decoración, manualidades, scrapbook, home decor...",
    selected: false,
  },
  {
    id: 431,
    name: "Stencil FONDOS FLORES 21x30cm ",
    price: "4.15",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/wmtfip8uwgi9190qcf3mc/stencil-textura-floral-2.jpg?rlkey=fgqgukvsq8vse9t1ubv6qqa10&st=9r032p3l&dl=0",
    ],
    label: "21x30cm",
    description:
      "Stencils CADENCE para decoración, manualidades, scrapbook, home decor...",
    selected: false,
  },
  {
    id: 432,
    name: "Stencil MARIPOSAS Y ESTRELLAS 21x30cm ",
    price: "4.15",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/silmoax16mll0473rv7uj/stencil-textura-floral-1.jpg?rlkey=y0pu5ez6q1jh9b4opc9k309gi&st=drladqs4&dl=0",
    ],
    label: "21x30cm",
    description:
      "Stencils CADENCE para decoración, manualidades, scrapbook, home decor...",
    selected: false,
  },
  {
    id: 433,
    name: "Stencil RELIEVE METÁLICO 21x30cm ",
    price: "4.15",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/235vdu3dld4fllb8613tj/stencil-textura-floral-6.jpg?rlkey=cn9ae72g8ujwa87hgaosmrwo4&st=e3xnxebu&dl=0",
    ],
    label: "21x30cm",
    description:
      "Stencils CADENCE para decoración, manualidades, scrapbook, home decor...",
    selected: false,
  },
  {
    id: 434,
    name: "Stencil MOTHER 21x30cm ",
    price: "4.15",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/c17e0n5tg7g1rt7lrwkn1/stencil-textura-floral-4.jpg?rlkey=xjolkmkro5okwzh96jqf845d5&st=g2mapsms&dl=0",
    ],
    label: "21x30cm",
    description:
      "Stencils CADENCE para decoración, manualidades, scrapbook, home decor...",
    selected: false,
  },
  {
    id: 435,
    name: "Stencil TIJERAS VINTAGE 21x30cm ",
    price: "4.15",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/adtq7xxloap7ss1rtutsz/stencil-textura-floral-5.jpg?rlkey=4f3fxu2zksfazv409n72irpoa&st=4f8e92c1&dl=0",
    ],
    label: "21x30cm",
    description:
      "Stencils CADENCE para decoración, manualidades, scrapbook, home decor...",
    selected: false,
  },
  {
    id: 436,
    name: "Stencil ROSA DE LOS VIENTOS 21x30cm ",
    price: "4.15",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/m7py9xxvxknugsp42p37m/stencil-lavande.jpg?rlkey=a8dpgcmk9jak41789lcrm13x5&st=f2xm5x63&dl=0",
    ],
    label: "21x30cm",
    description:
      "Stencils CADENCE para decoración, manualidades, scrapbook, home decor...",
    selected: false,
  },
  {
    id: 437,
    name: "Stencil FILIGRANA 21x30cm ",
    price: "4.15",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/m7py9xxvxknugsp42p37m/stencil-lavande.jpg?rlkey=a8dpgcmk9jak41789lcrm13x5&st=f2xm5x63&dl=0",
    ],
    label: "21x30cm",
    description:
      "Stencils CADENCE para decoración, manualidades, scrapbook, home decor...",
    selected: false,
  },
  {
    id: 438,
    name: "Stencil 3 ROSAS 21x30cm ",
    price: "4.15",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/3a97uyl6hi7qes1nccn8v/stencil-lavande-2.jpg?rlkey=0roovtsocaazeq9uvak3eh50v&st=fn6tlhdg&dl=0",
    ],
    label: "21x30cm",
    description:
      "Stencils CADENCE para decoración, manualidades, scrapbook, home decor...",
    selected: false,
  },
  {
    id: 439,
    name: "Stencil LÁMPARAS 21x30cm ",
    price: "4.15",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/6whhxb8cogef1brsl8d1z/stencil-lamparas.jpg?rlkey=w0zmwm0lcgmlnr19rbhbi9jrq&st=ue2ojr1f&dl=0",
    ],
    label: "21x30cm",
    description:
      "Stencils CADENCE para decoración, manualidades, scrapbook, home decor...",
    selected: false,
  },
  {
    id: 425,
    name: "Stencil PRIVATE 25x35cm OS45",
    price: "6.35",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/8xfkkodjmhsgbniq49cmf/private-stencils-cadence-25x35cm-0s45.jpg?rlkey=zj1buxeec2fgjcl7f9e9fwc8k&st=qj7292jw&dl=0",
    ],
    label: "25x35cm",
    description:
      "Stencils CADENCE para home decor de formato MEDIANO 25x35cm; ideal para decoración de paredes, cuadros de gran formato, muebles como comodas, mesillas, butacas, cajas... ",
    selected: false,
  },
  {
    id: 426,
    name: "Stencil PRIVATE 25x35cm OS43",
    price: "6.35",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/tdn8g1zgrxtsygixw8vhl/private-stencils-cadence-25x35cm-0s43.jpg?rlkey=cs6yqh6kq51w1ionk2pinnlr8&st=fzbsapke&dl=0",
    ],
    label: "25x35cm",
    description:
      "Stencils CADENCE para home decor de formato MEDIANO 25x35cm; ideal para decoración de paredes, cuadros de gran formato, muebles como comodas, mesillas, butacas, cajas... ",
    selected: false,
  },
  {
    id: 427,
    name: "Stencil PRIVATE 25x35cm OS54",
    price: "6.35",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/o2r7k7xvct0pofe7vkzyh/private-stencils-cadence-25x35cm-0s54.jpg?rlkey=0ybxeez48fk6dnpv80ysv6ad3&st=2ychkdu2&dl=0",
    ],
    label: "25x35cm",
    description:
      "Stencils CADENCE para home decor de formato MEDIANO 25x35cm; ideal para decoración de paredes, cuadros de gran formato, muebles como comodas, mesillas, butacas, cajas... ",
    selected: false,
  },
  {
    id: 420,
    name: "Stencil DETALLE Cadence BN98",
    price: "5.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/eym70gobraugs2kcg3whf/stencils-cadence-25x36cm-bn098.jpg?rlkey=splkewpq60ursy8ilomy7fhxc&st=95ih8wih&dl=0",
    ],
    label: "25x36cm",
    description:
      "Stencils o Plantillas CADENCE para decoración, manualidades, scrapbook, home decor... con motivos vegetales.",
    selected: false,
  },
  {
    id: 421,
    name: "Stencil DETALLE Cadence BN88",
    price: "5.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/k0rbvvw7im08nqa6xcd7t/stencils-cadence-25x36cm-bn088.jpg?rlkey=kq9przg19y96njsky92g72bjy&st=gn7pznxw&dl=0",
    ],
    label: "25x36cm",
    description:
      "Stencils o Plantillas CADENCE para decoración, manualidades, scrapbook, home decor... con motivos vegetales.",
    selected: false,
  },

  {
    id: 422,
    name: "Stencil VEGETAL Cadence BN175",
    price: "5.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/fwln44cpka35uvzflgvyu/stencil-vegetal-cadence.jpg?rlkey=8reshma78wxok7umgmqa3wjsf&st=riokw6hf&dl=0",
    ],
    label: "25x36cm",
    description:
      "Stencils o Plantillas CADENCE para decoración, manualidades, scrapbook, home decor... con motivos vegetales.",
    selected: false,
  },

  {
    id: 423,
    name: "Stencil FONDO Cadence",
    price: "5.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/p7gpzdxw8hv0ecvr9y73c/stencil-vegetal-cadence-1.jpg?rlkey=1o41gna3c4v8vhduyi95xi8zn&st=0q2g4i8o&dl=0",
    ],
    label: "25x36cm",
    description:
      "Stencils o Plantillas CADENCE para decoración, manualidades, scrapbook, home decor... con motivos vegetales.",
    selected: false,
  },

  {
    id: 424,
    name: "Stencil VEGETAL Cadence BN160",
    price: "5.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/7jb5hbrx8oee69zkobe65/stencil-vegetal-cadence-2.jpg?rlkey=av123tlnees2tabha0v9h7dvx&st=4szop2o1&dl=0",
    ],
    label: "25x36cm",
    description:
      "Stencils o Plantillas CADENCE para decoración, manualidades, scrapbook, home decor... con motivos vegetales.",
    selected: false,
  },
  {
    id: 462,
    name: "Universal Transfer CADENCE 25x35cm UTC020",
    price: "5.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/e1hpq165eo6vjj2l7ave1/universal-transfer-cadence-25x35cm-utc020.jpg?rlkey=ryay5paui84n9mbg8pcykmxxq&st=1tg69l10&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.",
    selected: false,
  },
  {
    id: 463,
    name: "Universal Transfer CADENCE 25x35cm UTC016",
    price: "5.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/eq0xicjcojnr9loos70v0/universal-transfer-cadence-25x35cm-utc016.jpg?rlkey=704uc2qce059h0ng6zd50rzob&st=6m2ivicx&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.",
    selected: false,
  },
  {
    id: 464,
    name: "Universal Transfer CADENCE 25x35cm UTC013",
    price: "5.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/32amkflcrnpy2udmij6px/universal-transfer-cadence-25x35cm-utc013.jpg?rlkey=xhe0zlebythnmk9w43q6ag21w&st=sque2848&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.",
    selected: false,
  },
  {
    id: 465,
    name: "Universal Transfer CADENCE 25x35cm UTC008",
    price: "5.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/hrhzy5y2z5ocr0obdwhah/universal-transfer-cadence-25x35cm-utc008.jpg?rlkey=hqk32lwdonlq0udu0n9k7dryc&st=sjadytfi&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.",
    selected: false,
  },
  {
    id: 466,
    name: "Universal Transfer CADENCE 25x35cm UTC003",
    price: "5.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/i5fw9ir2ye3k3x2hf4qyl/universal-transfer-cadence-25x35cm-utc003.jpg?rlkey=zy5pb0kipge6o59rphg6z64xj&st=emo86ve6&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.",
    selected: false,
  },
  {
    id: 467,
    name: "Universal Transfer CADENCE 25x35cm UTC001",
    price: "5.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/293olmammm6rrgg59l6is/universal-transfer-cadence-25x35cm-utc001.jpg?rlkey=bnwo99s6pkkhkptd07m8soss8&st=ttg5ym00&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.",
    selected: false,
  },
  {
    id: 468,
    name: "Cubiertos Transfers HOME DECOR",
    price: "5.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/tghz2z8vbn0bio6tz54zd/transfers-home-decor-cadence.jpg?rlkey=oespjx6gth5778h85pd32j5e2&st=gx7hg9jz&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.",
    selected: false,
  },
  {
    id: 469,
    name: "Tea Room Transfers HOME DECOR",
    price: "5.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/xgg1opv4cc2luppldkg7x/transfers-home-decor-cadence-1.jpg?rlkey=cls4sc69i1uvlpbyqcfum4zwj&st=9fy1o9pc&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.",
    selected: false,
  },
  {
    id: 470,
    name: "Eau de Cologne Transfers HOME DECOR",
    price: "5.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/j2vtv3vidrukgmk3z14wj/transfers-home-decor-cadence-2.jpg?rlkey=kiwk6a4muhieztllgynjzbgwi&st=nav40491&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.",
    selected: false,
  },
  {
    id: 471,
    name: "Founderie Transfers HOME DECOR",
    price: "5.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/43xam7hz9r7z02icq31f4/transfers-home-decor-cadence-3.jpg?rlkey=xyswwdro49h08a947r5yad4q4&st=ohzf8ak7&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.",
    selected: false,
  },
  {
    id: 472,
    name: "Bienvenue Transfers HOME DECOR",
    price: "5.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/i1qbop0zczqrw5pp2gkmm/transfers-home-decor-cadence-4.jpg?rlkey=h2ajf8nbrylcyybqmj273j216&st=dz4yie44&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.",
    selected: false,
  },
  {
    id: 473,
    name: "La Libellule Transfers HOME DECOR",
    price: "5.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/i8ggo9iljjyr05rhti2o2/transfers-home-decor-cadence-5.jpg?rlkey=wmuqo1n402q6jykxmrnlfjoqg&st=tb7oqsr7&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.",
    selected: false,
  },
  {
    id: 474,
    name: "Tea Time Transfers HOME DECOR",
    price: "5.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/br1771x4jnt63nwzzb70b/transfers-home-decor-cadence-6.jpg?rlkey=6wo3dghf0r53fwnxdoaf8b4yy&st=1dq4rz7q&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.",
    selected: false,
  },
  {
    id: 475,
    name: "Le Petite Marmite Transfers HOME DECOR",
    price: "5.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/bto7kpr246ky9hvbbyieu/transfers-home-decor-cadence-7.jpg?rlkey=a0cdtpl4raxnp5lfmyzcxnskq&st=yrrc3d2u&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.",
    selected: false,
  },
  {
    id: 476,
    name: "Le Poulet Transfers HOME DECOR",
    price: "5.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/xh8s4s0wzcycxfy9xw9i4/transfers-home-decor-cadence-8.jpg?rlkey=04ko7kyxjn4az0q5edpk9ziir&st=sxxuf30a&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.",
    selected: false,
  },
  {
    id: 477,
    name: "Tea Transfers HOME DECOR",
    price: "5.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/14eyfe7buwhdpw1i3bems/transfers-home-decor-cadence-9.jpg?rlkey=380y7nos2pzgqgnex607l337o&st=m4b2oabp&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.",
    selected: false,
  },
  {
    id: 478,
    name: "Lingerier Corsets Transfers HOME DECOR",
    price: "5.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/y3peaf2hs3beao6qeram2/transfers-home-decor-cadence-10.jpg?rlkey=9olb37da8ofsfn67redixup6n&st=zyzhpitn&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.",
    selected: false,
  },
  {
    id: 479,
    name: "Salle de Bain Transfers HOME DECOR",
    price: "5.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/kn2pbwpekeca3pniyno4t/transfers-home-decor-cadence-11.jpg?rlkey=kjlr86tyoa69cblrs1k3wey5e&st=4npojal9&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.",
    selected: false,
  },
  {
    id: 480,
    name: "Coutellerie Transfers HOME DECOR",
    price: "5.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/6334mvr8gqk530l3smvu0/transfers-home-decor-cadence-12.jpg?rlkey=2shvm1nqxmzeqhx8b24wyqhg2&st=nsagmdnn&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.",
    selected: false,
  },
  {
    id: 481,
    name: "Mademoiselle Transfers HOME DECOR",
    price: "5.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/2iybdrabusp64k9qx73c9/transfers-home-decor-cadence-13.jpg?rlkey=b69y8cup8qwrgfbdr6jtealmn&st=dd8qzs4v&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.",
    selected: false,
  },
  {
    id: 725,
    name: "Universal Transfer CADENCE 25x35cm UTC020",
    price: "5.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/d25l50e2v59awvup356on/universal-transfer-cadence-25x35cm-utc019.jpg?rlkey=fmpmfqmvoc3jqo5qj0kx1g0mo&st=mmfsr147&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.",
    selected: false,
  },
  {
    id: 726,
    name: "Universal Transfer CADENCE 25x35cm UTC014",
    price: "5.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/7771ytquh4oo2ug0yui64/universal-transfer-cadence-25x35cm-utc014.jpg?rlkey=gdkh03214gg4wl46kl7j2m4pf&st=rjwaqp4z&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.",
    selected: false,
  },
  {
    id: 727,
    name: "Universal Transfer CADENCE 25x35cm UTC009",
    price: "5.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/wwu5ohl8hteajgaojbusu/universal-transfer-cadence-25x35cm-utc009.jpg?rlkey=oxfw08bxmb085aipcj183hh4b&st=n8w8xyio&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.",
    selected: false,
  },
  {
    id: 728,
    name: "Vintage Flowers Transfers HOME DECOR",
    price: "5.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/qoekl8kybwdp1k7e1z6hx/transfers-home-decor-cadence-vintage-flowers.jpg?rlkey=uhiyb4ytf441qfnbt1xkj2ri1&st=p8xu8qry&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.",
    selected: false,
  },
  {
    id: 729,
    name: "Plomberie Transfers HOME DECOR",
    price: "5.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/u84u1211n4b4v9a0em9l9/transfers-home-decor-cadence-plomberie.jpg?rlkey=2wfwk6op497v4xv95ew2r9yhz&st=tznff2k9&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.",
    selected: false,
  },
  {
    id: 730,
    name: "Sweet Cadence Transfers HOME DECOR",
    price: "5.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/p8e48bulo7xoa2w9p2zb0/transfers-home-decor-cadence-sweet-cadence.jpg?rlkey=vkowutvyrq6y36v0u1yr9g5yv&st=2taq6xsa&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.",
    selected: false,
  },
  {
    id: 731,
    name: "Sweet Bird Transfers HOME DECOR",
    price: "5.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/rmii5jmgvq96oidrm8p2z/transfers-home-decor-cadence-sweet-bird.jpg?rlkey=dbt7g48al3yahtxk513iibhc6&st=4vg3t1l7&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.",
    selected: false,
  },
  {
    id: 732,
    name: "Sewing Machine Transfers HOME DECOR",
    price: "5.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/3fmxwvzfi2l6eppp7rrin/transfers-home-decor-cadence-sewing-machine.jpg?rlkey=rhe844omivuhz187koveybd52&st=a97i6q1j&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.",
    selected: false,
  },
  {
    id: 733,
    name: "Rosa Transfers HOME DECOR",
    price: "5.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/b6obtlepgvtk3bz02hqgf/transfers-home-decor-cadence-rosa.jpg?rlkey=sqopxaff8pp0frzxdvzmljq2c&st=8dms4qj4&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.",
    selected: false,
  },
  {
    id: 734,
    name: "Perfume Transfers HOME DECOR",
    price: "5.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/7g1saxj6ox5mg2i1trgzu/transfers-home-decor-cadence-perfume.jpg?rlkey=y50bamfmy3ka7a7mfwbh1gizb&st=jkcm5chk&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.",
    selected: false,
  },
  {
    id: 735,
    name: "Paris Transfers HOME DECOR",
    price: "5.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/k05zbb9ntiq0k6jakf871/transfers-home-decor-cadence-paris.jpg?rlkey=ilnhkkgn8lat4aqnc7g9gtwrb&st=fwrc99s6&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.",
    selected: false,
  },
  {
    id: 736,
    name: "Paris 2 Transfers HOME DECOR",
    price: "5.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/g6t3zfm3jj0crf0xmwblq/transfers-home-decor-cadence-paris2.jpg?rlkey=wmhq1x9eftlv5hpdi9qeqeekj&st=g56knvsi&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.",
    selected: false,
  },
  {
    id: 737,
    name: "Opera Transfers HOME DECOR",
    price: "5.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/8uh2v7dcki23lcnjfcig4/transfers-home-decor-cadence-opera.jpg?rlkey=qzl3glmnb7mqpo8quohdybaei&st=y9mepwmz&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.",
    selected: false,
  },
  {
    id: 738,
    name: "Mon Atelier Transfers HOME DECOR",
    price: "5.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/c84qq7591g134btxuqjwa/transfers-home-decor-cadence-mon-atelier.jpg?rlkey=diurld7zd1ulhj1lpumfdur0v&st=jmpdsq5y&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.",
    selected: false,
  },
  {
    id: 739,
    name: "Lombart Transfers HOME DECOR",
    price: "5.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/29tawzh52li5du8bzxj12/transfers-home-decor-cadence-lombart.jpg?rlkey=sfmnbxjd2c7zvdhj7ljngadej&st=0x49r54g&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.",
    selected: false,
  },
  {
    id: 740,
    name: "Lingerie Transfers HOME DECOR",
    price: "5.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/phm56acml79jeyl28sa8f/transfers-home-decor-cadence-lingerie.jpg?rlkey=g60oqx5iglfgo9hd0g13snjvv&st=3hq4wyh6&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.",
    selected: false,
  },
  {
    id: 741,
    name: "Letoile Royale Transfers HOME DECOR",
    price: "5.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/6xaqjl6qqmkddtvxdnvgt/transfers-home-decor-cadence-letoile-royale.jpg?rlkey=oe6r6s1yfw3azjagnrcc28maj&st=k7qt7yc5&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.",
    selected: false,
  },

  {
    id: 742,
    name: "Les Roses Transfers HOME DECOR",
    price: "5.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/p408ma512o86u67fac55b/transfers-home-decor-cadence-les-roses.jpg?rlkey=58h1t7rb5ri0ucbfoijfudh6k&st=liugsfu6&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.",
    selected: false,
  },
  {
    id: 743,
    name: "Hotel Del Royales Transfers HOME DECOR",
    price: "5.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/u300ojhfdva50jlwlilij/transfers-home-decor-cadence-hotel-del-royales.jpg?rlkey=f7pblq59063tr9n8xq7ur1927&st=mv5wat2x&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.",
    selected: false,
  },
  {
    id: 744,
    name: "Home Sweet Home Transfers HOME DECOR",
    price: "5.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/ldvi1illdxmuovlbjc69w/transfers-home-decor-cadence-home-sweet-home.jpg?rlkey=5618sfd286v6f6h8hz6my4wsl&st=3t2wxy1m&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.",
    selected: false,
  },
  {
    id: 745,
    name: "Grane Bros Transfers HOME DECOR",
    price: "5.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/cdlof45ynqlqtw6taz8tw/transfers-home-decor-cadence-grane-bros.jpg?rlkey=vnaa8weudjlcl2d5rqel2lbz4&st=pjwmjvoj&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.",
    selected: false,
  },
  {
    id: 746,
    name: "Grand Bazar Transfers HOME DECOR",
    price: "5.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/oeybau3vv3khrwzwxblf2/transfers-home-decor-cadence-grand-bazar.jpg?rlkey=oynjkftbahsojmq6pt90pothi&st=ko4jdb83&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.",
    selected: false,
  },
  {
    id: 747,
    name: "Giraud Fils Transfers HOME DECOR",
    price: "5.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/zo8jlbmlkzlo4lani1uua/transfers-home-decor-cadence-giraud-fils.jpg?rlkey=hprc4vy57die1818g4f11btkx&st=1bqj8zbk&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.",
    selected: false,
  },
  {
    id: 748,
    name: "Fleura Transfers HOME DECOR",
    price: "5.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/payqo7lqm9lcbiu8t1tqw/transfers-home-decor-cadence-fleura.jpg?rlkey=sp2qv7ytxi93hqsbbg7o9dqo7&st=6reiid22&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.",
    selected: false,
  },
  {
    id: 749,
    name: "Carpe Diem Transfers HOME DECOR",
    price: "5.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/19acja9kp61yvudr1yw0e/transfers-home-decor-cadence-carpe-diem.jpg?rlkey=3k93i9vleavw31jtx4ry0n2na&st=44zgp9tp&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.",
    selected: false,
  },
  {
    id: 750,
    name: "Cacao Payraud Transfers HOME DECOR",
    price: "5.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/89waz91t28w8mt0gyyfwl/transfers-home-decor-cadence-cacao-payraud.jpg?rlkey=puq5538s9uob0u7rlljrtklrp&st=rjc3v5vz&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.",
    selected: false,
  },
  {
    id: 751,
    name: "Butaca Le Fleur Transfers HOME DECOR",
    price: "5.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/30a0fbcsmmbkmsesyucji/transfers-home-decor-cadence-butaca-le-fleur.jpg?rlkey=mxbp9osqs3xz0l65zfxf060dh&st=vvfh33gs&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.",
    selected: false,
  },
  {
    id: 752,
    name: "Bouquet des Roses Transfers HOME DECOR",
    price: "5.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/thezvt4uzbekte6yuo3d8/transfers-home-decor-cadence-bouquet-des-roses.jpg?rlkey=an4q4zamcsapqzouj3inj9xgv&st=3vh4ulrn&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.",
    selected: false,
  },
  {
    id: 753,
    name: "Abeilla Royale Transfers HOME DECOR",
    price: "5.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/w7312cfr3zg8vor84i57k/transfers-home-decor-cadence-abeilla-royale.jpg?rlkey=4q9enafm7wrwfkuko2ipandlu&st=uxmmzywn&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.",
    selected: false,
  },
  {
    id: 754,
    name: "HOME DECOR HDT044 Transfers HOME DECOR",
    price: "5.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/qmbfixs1od4q2a915atgd/transfer-cadence-home-decor.jpg?rlkey=nctygxpeaaljulovoe7vcq6mv&st=i8twtp9l&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.",
    selected: false,
  },
  {
    id: 755,
    name: "HOME DECOR HDT022 Transfers HOME DECOR",
    price: "5.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/5fb1qbc16fbgh0y0irvub/transfer-cadence-home-decor-1.jpg?rlkey=gawo6zg9188co57rr0v9vnnkb&st=odbyk88u&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers de gran tamaño 25x35cm CADENCE para aplicar sobre bandejas, lienzos, cajas de madera, pequeños muebles... Sus diseños vintage son ideales para decoración. Aplicación: Colocar boca abajo sobre la superficie a transferir y presionar el papel trasero con una esponja húmeda. Cuando el papel está completamente humedecido, quitarlo deslizando poco a poco.",
    selected: false,
  },
  {
    id: 482,
    name: "Transfer TELA W&B 21x30cm KTS05",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/r8ol51srtcjbz8hvvdlqp/transfer-tela-cadence.jpg?rlkey=t17wjx8yqslgcqvsu5ffumzas&st=4z60dxwb&dl=0",
    ],
    label: "21x30cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 483,
    name: "Transfer TELA W&B 21x30cm KTS06",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/1orl92mgnzqiiys0rujiq/transfer-tela-cadence-1.jpg?rlkey=onom93xa4ibo81h8kezi6eafz&st=cpv4fm0h&dl=0",
    ],
    label: "21x30cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 484,
    name: "Transfer TELA Animal Portrait 25x35cm PAFT08",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/3ztgfgueye41foskcng0p/transfer-tela-cadence-2.jpg?rlkey=816rv1zu774x0vxmh4q3fmkcr&st=bim3259e&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 485,
    name: "Transfer TELA Animal Portrait 25x35cm PAFT07",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/ox8rrcad3hxzc6gel6htl/transfer-tela-cadence-3.jpg?rlkey=6o6i0sl7e63tftvarfv3dssj8&st=7nvwix3z&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 486,
    name: "Transfer TELA Animal Portrait 25x35cm PAFT06",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/m555xfpjidt82dq5cr8u2/transfer-tela-cadence-4.jpg?rlkey=k17quqkz122uy90p7agj7x2nn&st=qptgkpdx&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 487,
    name: "Transfer TELA Animal Portrait 25x35cm PAFT05",
    price: "5.20",
    images: ["https://i.ibb.co/BZc23m2/transfer-tela-cadence-5.jpg"],
    label: "25x35cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 488,
    name: "Transfer TELA Animal Portrait 25x35cm PAFT03",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/b9h406cniqgi10hwg15ol/transfer-tela-cadence-6.jpg?rlkey=8yv0l939dyujgesl4b850sclp&st=enbbe9ud&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 489,
    name: "Transfer TELA Siluetas 25x35cm FT069",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/wovntoqyp1130h303hhu9/transfer-tela-cadence-7.jpg?rlkey=kli80dhm4srtg1cw45b8iw8oc&st=9qt6cp1z&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 490,
    name: "Transfer TELA Siluetas 25x35cm FT068",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/ttf6gg2618l2rl8q9s3yf/transfer-tela-cadence-8.jpg?rlkey=xd4ealsveh1dtxlklil4pbuiz&st=baa8jxek&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 491,
    name: "Transfer TELA Siluetas 25x35cm FT067",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/fgdxzjz5dup0fiksrvzya/transfer-tela-cadence-9.jpg?rlkey=46o8mf1n2cb6sfmldkgnck1w9&st=c4mla4fo&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 492,
    name: "Transfer TELA Siluetas 25x35cm FT064",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/2tqm59fysvuiptopbisxw/transfer-tela-cadence-10.jpg?rlkey=kr3ig52tngodp3wbq3rlnucjt&st=ti08cays&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 493,
    name: "Transfer TELA Siluetas 25x35cm FT065",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/gb38ofuvmjlu7q7kjqpjr/transfer-tela-cadence-11.jpg?rlkey=2440gb83ls58xvp97yr3vqsmu&st=gw5r53a6&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 494,
    name: "Transfer TELA Siluetas 25x35cm FT063",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/csmdwq64fs6i7shml6p08/transfer-tela-cadence-12.jpg?rlkey=8g3aqwetlldj7iwbdii8o4ym6&st=bmmwciqg&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 495,
    name: "Transfer TELA W&B 21x30cm KTS13",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/ek3cudyrvvezezhgge22y/transfer-tela-cadence-14.jpg?rlkey=4pof1h1ozvbdftzfolswbbrh1&st=uindi5iq&dl=0",
    ],
    label: "21x30cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 496,
    name: "Transfer TELA W&B 21x30cm KTS14",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/4qzkaw9bsxm3t0jacoses/transfer-tela-cadence-13.jpg?rlkey=zkcot4y4w92w2zxr0hemb8lz3&st=mdaj27rf&dl=0",
    ],
    label: "21x30cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 814,
    name: "Transfer TELA Joy of Life 21x30cm JLFT20",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/yfe1uoh7f3f0sxszso7z8/transfer-textil-joy-of-life-21x30cm-JLFT20.jpg?rlkey=jcea8c1h7qdly5uxbfgo8e5nm&st=wyda5pat&dl=0",
    ],
    label: "21x30cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 815,
    name: "Transfer TELA Joy-of-life-21x30cm JLFT19",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/81l65o96v75qpwc8b2vjj/transfer-textil-joy-of-life-21x30cm-JLFT19.jpg?rlkey=df1wq3ti1jgijl103vpln2isn&st=pl0cxrme&dl=0",
    ],
    label: "21x30cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 816,
    name: "Transfer TELA Joy-of-life-21x30cm JLFT18",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/7152l9uccvqngh330dup3/transfer-textil-joy-of-life-21x30cm-JLFT18.jpg?rlkey=8nwj7q68b5ysd1pssnu5939az&st=5e6sixtx&dl=0",
    ],
    label: "21x30cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 817,
    name: "Transfer TELA Joy-of-life-21x30cm JLFT17",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/52mco4k6ik2yiiqqn89o0/transfer-textil-joy-of-life-21x30cm-JLFT17.jpg?rlkey=o8wmsscmysvfuxan3aozefphe&st=ed7r0185&dl=0",
    ],
    label: "21x30cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 818,
    name: "Transfer TELA Joy-of-life-21x30cm JLFT16",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/ybvmrh913avsqe0twsz5o/transfer-textil-joy-of-life-21x30cm-JLFT16.jpg?rlkey=7goo7urtq411w4ogrfoagmjme&st=vc3rgp57&dl=0",
    ],
    label: "21x30cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 819,
    name: "Transfer TELA Joy-of-life-21x30cm JLFT15",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/26m2so5783qft1hjxbhbw/transfer-textil-joy-of-life-21x30cm-JLFT15.jpg?rlkey=hnbf2pnfldznfwdcorihxvvf1&st=f4jonhc9&dl=0",
    ],
    label: "21x30cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 820,
    name: "Transfer TELA Joy-of-life-21x30cm JLFT14",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/h1xacgtrj9nyj8vdhfw44/transfer-textil-joy-of-life-21x30cm-JLFT14.jpg?rlkey=s3e0wmotl4tlfne79sbq32vvd&st=gax198q0&dl=0",
    ],
    label: "21x30cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 821,
    name: "Transfer TELA Joy-of-life-21x30cm JLFT13",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/5gd7x8g8f9rqooaaoohh3/transfer-textil-joy-of-life-21x30cm-JLFT13.jpg?rlkey=ri7yefbtf1s31bo2ew1yvomg5&st=b7tbr5aq&dl=0",
    ],
    label: "21x30cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 822,
    name: "Transfer TELA Joy-of-life-21x30cm JLFT12",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/y1imx85yu038vnnf3cesp/transfer-textil-joy-of-life-21x30cm-JLFT12.jpg?rlkey=0ucod1offdo52l18jbdwqgfhm&st=k8vo69ao&dl=0",
    ],
    label: "21x30cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 823,
    name: "Transfer TELA Joy-of-life-21x30cm JLFT11",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/2on0vooi75j56459ytk74/Transfer-TEXTIL-Joy-of-Life-21x30cm-JLFT11.jpg?rlkey=flpcx4pgfylg6hqiapyfpnx0d&st=ongnjz27&dl=0",
    ],
    label: "21x30cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 824,
    name: "Transfer TELA Joy-of-life-21x30cm JLFT10",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/8uulnr0t8e5opo1ic2ufn/transfer-textil-joy-of-life-21x30cm-JLFT10.jpg?rlkey=v8y233anwcr8of2vv3ks86aul&st=flu67p6o&dl=0",
    ],
    label: "21x30cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 825,
    name: "Transfer TELA Joy-of-life-21x30cm JLFT09",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/c422twdg36rlhmu879dxf/transfer-textil-joy-of-life-21x30cm-JLFT09.jpg?rlkey=79gxeqykzrzcb9u74m7hro8ba&st=pw5fxc35&dl=0",
    ],
    label: "21x30cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 826,
    name: "Transfer TELA Joy-of-life-21x30cm JLFT08",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/j04m0j8vnf2u0rgze81nm/transfer-textil-joy-of-life-21x30cm-JLFT08.jpg?rlkey=bozkygyk9vn7ex0jlt2zll4x4&st=2st5c4ky&dl=0",
    ],
    label: "21x30cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 827,
    name: "Transfer TELA Joy-of-life-21x30cm JLFT07",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/d3378lfumrzz9khy6hulm/transfer-textil-joy-of-life-21x30cm-JLFT07.jpg?rlkey=i5vmv5ft5m9rbmu0du2to3dkv&st=jyebvhz6&dl=0",
    ],
    label: "21x30cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 828,
    name: "Transfer TELA Joy-of-life-21x30cm JLFT06",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/nymqu91fq1x2z6y8mqf2r/transfer-textil-joy-of-life-21x30cm-JLFT06.jpg?rlkey=iltd8qtpa3iyn2cfgfjdyk1mo&st=f7mms27m&dl=0",
    ],
    label: "21x30cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 829,
    name: "Transfer TELA Joy-of-life-21x30cm JLFT05",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/ymvz2yeb7ho5f2imeuozf/transfer-textil-joy-of-life-21x30cm-JLFT05.jpg?rlkey=vwz58p5itmut1bgawfnc33243&st=vgjgjujo&dl=0",
    ],
    label: "21x30cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 830,
    name: "Transfer TELA Joy-of-life-21x30cm JLFT04",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/jh6zpcivdb3142ft4hq8y/transfer-textil-joy-of-life-21x30cm-JLFT04.jpg?rlkey=tm20lk5u97pwgn62vj8xthb37&st=7wps7vz9&dl=0",
    ],
    label: "21x30cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 831,
    name: "Transfer TELA Joy-of-life-21x30cm JLFT03",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/ec6ugo6nl6xqvy6iz0eug/transfer-textil-joy-of-life-21x30cm-JLFT03.jpg?rlkey=9m1ovju4m5sx7yigrxmfkx3qj&st=i6dnb94v&dl=0",
    ],
    label: "21x30cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 832,
    name: "Transfer TELA Joy-of-life-21x30cm JLFT02",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/ly7k9o4llva3riyzy7wa3/transfer-textil-joy-of-life-21x30cm-JLFT02.jpg?rlkey=vii6v1sllb10qpdjdiigr0ydw&st=wwz4yse7&dl=0",
    ],
    label: "21x30cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 833,
    name: "Transfer TELA Joy-of-life-21x30cm JLFT01",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/99yi9s1clf0ghzceh0nxk/transfer-textil-joy-of-life-21x30cm-JLFT01.jpg?rlkey=blhjlsm31keg2t4tfitz4kzdv&st=tdjxg1kw&dl=0",
    ],
    label: "21x30cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 834,
    name: "Transfer TELA Coutout-25x35cm C0008",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/ndbtda46xre7269onp1p7/transfer-textil-coutout-25x35cm-CO008.jpg?rlkey=33v03iahc7i43nk9gvn8auk26&st=hukn2b8z&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 835,
    name: "Transfer TELA Coutout-25x35cm C0007",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/1723eu1niwt5qaupyep3w/transfer-textil-coutout-25x35cm-CO007.jpg?rlkey=zoz2ssgitfyvwbwnul542i9u3&st=tx9eps23&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 836,
    name: "Transfer TELA Coutout-25x35cm C0002",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/1t6fgxw8rycsk2l7q1uyy/transfer-textil-coutout-25x35cm-CO002.jpg?rlkey=o8hxsyo306cl8u540vhuudxzs&st=cy9qmeni&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 837,
    name: "Transfer TELA Coutout-25x35cm C0001",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/wabnmp8ayq19t3npqotqd/transfer-textil-coutout-25x35cm-CO001.jpg?rlkey=axbhjsc4b0l7463ltwmgprvbu&st=1yj8aumf&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 838,
    name: "Transfer TELA Wb-21x30cm KTS21",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/1egvf7hrsihhmzit5v98x/transfer-tela-wb-21x30cm-KTS21.jpg?rlkey=ozw6iqa6dzur6u9rszizs8nhv&st=60bnv5oz&dl=0",
    ],
    label: "21x30cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 839,
    name: "Transfer TELA Wb-21x30cm KTS19",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/dczzg981man6v168448ie/transfer-tela-wb-21x30cm-KTS19.jpg?rlkey=rb5ndi7m2bc14v4x91nsta3b5&st=pi5erq0k&dl=0",
    ],
    label: "21x30cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 840,
    name: "Transfer TELA Wb-21x30cm KTS18",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/bxidd318n36d654v8fiye/transfer-tela-wb-21x30cm-KTS18.jpg?rlkey=n2i53nchaow7is7q7xjdz7k0f&st=oyijkywt&dl=0",
    ],
    label: "21x30cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 841,
    name: "Transfer TELA Wb-21x30cm KTS08",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/ndi2sk2kmvxwdwtyio8g1/transfer-tela-wb-21x30cm-KTS08.jpg?rlkey=xu83051ks7b40ghrgd0padtff&st=pimrrmsz&dl=0",
    ],
    label: "21x30cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 842,
    name: "Transfer TELA Cadence WFFTC007",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/grjldsn550ouof5tgfqrv/transfer-tela-cadence-WFFTC007.jpg?rlkey=1ktffjpcsb9bwwjbit12gggp7&st=osp4ihlv&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 843,
    name: "Transfer TELA Cadence WFFTC006",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/qgf75umg8asr4wxbylzo1/transfer-tela-cadence-WFFTC006.jpg?rlkey=0k18t933pt75pczvzdkdif2p2&st=tvbm6mod&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 844,
    name: "Transfer TELA Cadence WFFTC005",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/dggzuv8czmdwmgbzbs0gv/transfer-tela-cadence-WFFTC005.jpg?rlkey=98la8xgvhbqtxumvn2szx3q0u&st=6bocumz9&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 845,
    name: "Transfer TELA Cadence WFFTC004",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/64v0ob090yqwyk8iz33ak/transfer-tela-cadence-WFFTC004.jpg?rlkey=kgmts45m4vcmxosmguk3g5r4b&st=0jtnp4fw&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 846,
    name: "Transfer TELA Cadence WFFTC003",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/sxj7unptw4edxfe9h2mi8/transfer-tela-cadence-WFFTC003.jpg?rlkey=9m1u1hvh1insqb59u38ohrnxa&st=mb3810hb&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 847,
    name: "Transfer TELA Cadence WFFTC002",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/owoovdtcqa1hufljpz54s/transfer-tela-cadence-WFFTC002.jpg?rlkey=layoikf1dy8jzny4d7r1yx92o&st=9ckmqyca&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 848,
    name: "Transfer TELA Cadence WFFTC001",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/vc0kscvv4s2wi87vzs7ey/transfer-tela-cadence-WFFTC001.jpg?rlkey=d3v4uepqp02aujhvpv7ro1k2l&st=cvjr4lql&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 849,
    name: "Transfer TELA Cadence PAFT04",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/0wrsga31toiixaz0dv8zf/transfer-tela-cadence-PAFT04.jpg?rlkey=taujclrizj55c096d11nhrbva&st=q9uj3n09&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 850,
    name: "Transfer TELA Cadence PAFT02",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/du3dh2l045ap8w9lwiaoj/transfer-tela-cadence-PAFT02.jpg?rlkey=pd096bu4m30kllb2608ilx8se&st=exxi9cqx&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 851,
    name: "Transfer TELA Cadence PAFT01",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/of1v8ga5gnib10by39k5u/transfer-tela-cadence-PAFT01.jpg?rlkey=ehzgedqbd4jfen7s9am0yzhnf&st=0ohfzxow&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 852,
    name: "Transfer TELA Cadence KTSB015",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/o7h3mhj9mf17qvtra947b/transfer-tela-cadence-KTSB015.jpg?rlkey=rjv3loaq1nvyrfqnu3dacu48e&st=2245bymi&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 853,
    name: "Transfer TELA Cadence KTSB014",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/exgqtv7kt57lofs2dmvma/transfer-tela-cadence-KTSB014.jpg?rlkey=uiab95cldycaefb0f3mvsafjg&st=9pzcb2d0&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 854,
    name: "Transfer TELA Cadence KTSB013",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/2lh7wp0x8htogfm89txqc/transfer-tela-cadence-KTSB013.jpg?rlkey=jb74p99z2zssawxaevjnulstm&st=gnk3kmrl&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 855,
    name: "Transfer TELA Cadence KTSB012",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/ibg5ktd5n6kyhrlv8byvf/transfer-tela-cadence-KTSB012.jpg?rlkey=baltnvr3o6s4gu69aa3gflgeo&st=3e0s0vkl&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 856,
    name: "Transfer TELA Cadence KTSB011",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/amf6udzbvu69wg1ktnicg/transfer-tela-cadence-KTSB011.jpg?rlkey=c9fnd7j5wjpzfkwxiiyb60awh&st=pqc9par1&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 857,
    name: "Transfer TELA Cadence KTSB010",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/zduwfv2nx46qmi0nfwi55/transfer-tela-cadence-KTSB010.jpg?rlkey=5nfxio45ikb24prqeumckdqac&st=7m1mde47&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 858,
    name: "Transfer TELA Cadence KTSB009",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/w3jhm1ny8arxs5qtlja7i/transfer-tela-cadence-KTSB009.jpg?rlkey=1t6da8qrh3do8l0c6byochx4w&st=u79mz1f7&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 859,
    name: "Transfer TELA Cadence KTSB008",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/tpehzojpyphadzzubmnwm/transfer-tela-cadence-KTSB008.jpg?rlkey=l9kuxqekxpjezy8weiw8gkk8i&st=u7ox2x80&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 860,
    name: "Transfer TELA Cadence KTSB007",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/6io7q5e90vq3y8o4ddm4r/transfer-tela-cadence-KTSB007.jpg?rlkey=y2of0jbq0bmezzyg7ropg9nds&st=2ei6fxsx&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 861,
    name: "Transfer TELA Cadence KTSB006",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/aklhmatx6o0cqcpp6osrt/transfer-tela-cadence-KTSB006.jpg?rlkey=378civkqbjmmi2erwez6ww3q5&st=u9qekwfr&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 862,
    name: "Transfer TELA Cadence KTSB005",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/wl4p5ws60q756b2bsxvxt/transfer-tela-cadence-KTSB005.jpg?rlkey=i7mjst2kgn8ovrvuky4w45jha&st=xtme9e6s&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 864,
    name: "Transfer TELA Cadence KTSB003",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/w7g8ummj7eumonjvgk8cv/transfer-tela-cadence-KTSB003.jpg?rlkey=zn63mczx4xfkusdeg3rlpf7if&st=ksxoznkz&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 865,
    name: "Transfer TELA Cadence KTSB002",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/1e5k66w900jofmc7y95b5/transfer-tela-cadence-KTSB002.jpg?rlkey=lscvmc21mlmamn62cbjp2gefl&st=oeujhwtf&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseño actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 866,
    name: "Transfer TELA Cadence KTSB001",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/n861lz7m08zxi32nhcioj/transfer-tela-cadence-KTSB001.jpg?rlkey=diaeyg9m7b9l7kox93w2e9oue&st=0lv9ajc4&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 867,
    name: "Transfer TELA Cadence KTS20",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/h70dlnaonlthhe72hltx4/transfer-tela-cadence-KTS20.jpg?rlkey=miqnixl22gl251sdp8iqfjje8&st=eg2hdbol&dl=0",
    ],
    label: "21x30cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 868,
    name: "Transfer TELA Cadence KTS17",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/ajlyi90uxkuph5ut81ppb/transfer-tela-cadence-KTS17.jpg?rlkey=1jvwp6btky70i5jx6j5n0yzx5&st=w6ut8clc&dl=0",
    ],
    label: "21x30cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 869,
    name: "Transfer TELA Cadence KTS12",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/xz70sa2ndr8365k9h6eia/transfer-tela-cadence-KTS12.jpg?rlkey=1oax7i5wc1fstjmv7vqm5i0cf&st=wqnkt4m2&dl=0",
    ],
    label: "21x30cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 870,
    name: "Transfer TELA Cadence KTS10",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/uxkt6qe74th475qo7s44v/transfer-tela-cadence-KTS10.jpg?rlkey=ot2tcd0du675s42a2rld3tynq&st=u01je9s9&dl=0",
    ],
    label: "21x30cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 871,
    name: "Transfer TELA Cadence KTS09",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/69wg9xeebe5o0qb2s5g1r/transfer-tela-cadence-KTS09.jpg?rlkey=puwzkxj3whoi8jarqpqij6g9p&st=w8tcg15l&dl=0",
    ],
    label: "21x30cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 872,
    name: "Transfer TELA Cadence KTS06",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/c3n62baq2p8xq7d6237ce/transfer-tela-cadence-KTS06.jpg?rlkey=vyxwsl7n8aw87skx4jzz0s3nz&st=zsux8nm5&dl=0",
    ],
    label: "21x30cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 873,
    name: "Transfer TELA Cadence KTS05",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/qodicyxkr4t9eykzl6iw1/transfer-tela-cadence-KTS05.jpg?rlkey=ovjupn7br96m6ka3p113ims89&st=88scvoxk&dl=0",
    ],
    label: "21x30cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 874,
    name: "Transfer TELA Cadence KTS04",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/2q7fof26e7q3hifkc2qkv/transfer-tela-cadence-KTS04.jpg?rlkey=hqukk4pscxlvicke1siivggv4&st=7h05sary&dl=0",
    ],
    label: "21x30cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 875,
    name: "Transfer TELA Cadence KTS02",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/w80ys3lfrqb4qgief8ef5/transfer-tela-cadence-KTS02.jpg?rlkey=ozp0slxr2qt5j50qxb7e634nu&st=ijpqjue3&dl=0",
    ],
    label: "21x30cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 876,
    name: "Transfer TELA Cadence KTS01",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/8rnt52u8y14yw81xjvk6w/transfer-tela-cadence-KTS01.jpg?rlkey=60g8it3ptgh1emhfxqhnnvng0&st=5gtz1m1l&dl=0",
    ],
    label: "21x30cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 877,
    name: "Transfer TELA Cadence-gold-VT024-21x30 cm",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/m966ps4c8os6tvq2kkdrh/transfer-tela-cadence-gold-vt024-21x30-cm.jpg?rlkey=n72h2skve612tsorht0ld1s80&st=pqzevb5q&dl=0",
    ],
    label: "21x30cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 878,
    name: "Transfer TELA Cadence FT207",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/tjv1hcbp2hhgns2gyutpq/transfer-tela-cadence-FT207.jpg?rlkey=lqwcvwxg1vs2f3msteuiqy36d&st=5fb22yhk&dl=0",
    ],
    label: "17x25cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 879,
    name: "Transfer TELA Cadence FT070",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/m7jokuk6mj2bntg9wc6dp/transfer-tela-cadence-FT070.jpg?rlkey=f5wzn6a21gu85yvlkbot2xnk6&st=uu4xiqk5&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 880,
    name: "Transfer TELA Cadence FT066",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/xkdxf2kq46brbdncs5hjw/transfer-tela-cadence-FT066.jpg?rlkey=dxdfv0mmxea5q6k04l2s7wj3a&st=1xos35fi&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 881,
    name: "Transfer TELA Cadence FT062",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/whgiwgcvg9saaq2pj807m/transfer-tela-cadence-FT062.jpg?rlkey=x0405q4u4150v37fcgcqgw8qc&st=mgm6v0sq&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 882,
    name: "Transfer TELA Cadence FT051",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/xal52c4fvaagp0zdo3p5z/transfer-tela-cadence-FT051.jpg?rlkey=mt41ify0cqbq8uqulv9ogfk79&st=1iljcg5f&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 883,
    name: "Transfer TELA Cadence FT050",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/k83bf2p9u5bzq8b0fhuaq/transfer-tela-cadence-FT050.jpg?rlkey=0jnfvnqe4lj3qp2p3l0yjk0fn&st=pyhuziye&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 884,
    name: "Transfer TELA Cadence FT049",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/4nhycp79yizvanzve1ao5/transfer-tela-cadence-FT049.jpg?rlkey=gsdbc919a65ysc6rkodtougqu&st=bfl74yoy&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 885,
    name: "Transfer TELA Cadence FT046",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/rjto3uoss2qrmobbtmlc2/transfer-tela-cadence-FT046.jpg?rlkey=ay86qms6p5brlk8npmhd1y3aj&st=z483ypty&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 886,
    name: "Transfer TELA Cadence FT043",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/4cfprgbhe65vyxj0mzuen/transfer-tela-cadence-FT043.jpg?rlkey=jhcxdbtv33kxulok3vyjbf9xy&st=afxbciis&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 887,
    name: "Transfer TELA Cadence FT042",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/0uvzj8x5c9pul99ymqf4p/transfer-tela-cadence-FT042.jpg?rlkey=l4f222fk45iw3lgen0bf5mr7j&st=dmd18n3m&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 888,
    name: "Transfer TELA Cadence FT041",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/qgp2p6ob05bvu1uu6kn4v/transfer-tela-cadence-FT041.jpg?rlkey=eg6qw8wuikvzcrgqr0kzv6ylq&st=wai66roj&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 889,
    name: "Transfer TELA Cadence FT040",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/557cfruf5bvjpq0bnvprv/transfer-tela-cadence-FT040.jpg?rlkey=n6j6ewgt66x1sk4jnjkwzk5qd&st=zybd0cql&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 890,
    name: "Transfer TELA Cadence FT039",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/6zvbf54m81wwsl0mq1hzy/transfer-tela-cadence-FT039.jpg?rlkey=5a5h485jqrtns0cpjlaowrmym&st=mtbnblkl&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 891,
    name: "Transfer TELA Cadence FT038",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/14nikrk4fwk70c03wdfem/transfer-tela-cadence-FT038.jpg?rlkey=9pvh404zfrqql1wtflpn6y36f&st=7vwkf4zh&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 892,
    name: "Transfer TELA Cadence FT037",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/zr1l7krrphrq56fzfj33j/transfer-tela-cadence-FT037.jpg?rlkey=ay6gchgiaxmsgw1so7mk815bq&st=7no9mpud&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 893,
    name: "Transfer TELA Cadence FT036",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/mk7a1dwy7y05fran3rdps/transfer-tela-cadence-FT036.jpg?rlkey=v5j3kipj1cy8sng3tlnnma6lj&st=miev0u38&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 894,
    name: "Transfer TELA Cadence FT035",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/hxieglnvt7398iq5gzg2r/transfer-tela-cadence-FT035.jpg?rlkey=4srebahho75c5gyzf6dmdhjne&st=pk6d59ky&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 895,
    name: "Transfer TELA Cadence FT029",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/bct5w2hl7reym74zwy5zt/transfer-tela-cadence-FT029.jpg?rlkey=fcsbp72itth59f8hmazkdmpp7&st=pqgu8jic&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 896,
    name: "Transfer TELA Cadence FT026",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/2rmos4ymwstz15oaqbcaq/transfer-tela-cadence-FT026.jpg?rlkey=eqem4ovmx7vnavsw2ji64bl0h&st=qr2xwiwf&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 897,
    name: "Transfer TELA Cadence FT024",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/5wran3uu1h6jw04vm2g5h/transfer-tela-cadence-FT024.jpg?rlkey=i5381cww2cs7iibwr2grpk0rc&st=3ftftfno&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 898,
    name: "Transfer TELA Cadence FT023",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/h544pkoyrudyt4foipw6v/transfer-tela-cadence-FT023.jpg?rlkey=e9hd1obu7pjqfkgnh4igua5jx&st=kkag6cm6&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 899,
    name: "Transfer TELA Cadence FT021",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/92hesceqfbhgd301ay4rv/transfer-tela-cadence-FT021.jpg?rlkey=784iyzewv6qv54ize5ekhx8n3&st=xzs0owu1&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 900,
    name: "Transfer TELA Cadence FT020",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/ow8liostmddhz0r4i7cun/transfer-tela-cadence-FT020.jpg?rlkey=7a6hrzl93qywlr47233s1k6iq&st=0m5uj5n4&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 901,
    name: "Transfer TELA Cadence FT019",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/0db3kcrz0x5wkcruodhby/transfer-tela-cadence-FT019.jpg?rlkey=l3odc2pbldwm8lyy68ky532m9&st=u7sngfeg&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 902,
    name: "Transfer TELA Cadence FT017",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/97bpjpq669gbkcss06cm1/transfer-tela-cadence-FT017.jpg?rlkey=1xbc6hfsfg9xtawchacaih72x&st=u5oeirc0&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 903,
    name: "Transfer TELA Cadence FT016",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/uted7u2lw4bmeltnm30l6/transfer-tela-cadence-FT016.jpg?rlkey=i5qqk4xpst6ru5w7nx744zwiw&st=c9j7serj&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 904,
    name: "Transfer TELA Cadence FT015",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/nntj4yufep5t74hup0qm4/transfer-tela-cadence-FT015.jpg?rlkey=gllgp38rakn89wwilf8ou2qhg&st=w0knhau4&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 905,
    name: "Transfer TELA Cadence FT014",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/lqpiy8n1synj2rvmhj1rh/transfer-tela-cadence-FT014.jpg?rlkey=z3fss8om6klnf2pzbka02468u&st=sy9ggqr0&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 906,
    name: "Transfer TELA Cadence FT013",
    price: "5.20",
    images: [""],
    label: "25x35cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 907,
    name: "Transfer TELA Cadence FT012",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/y9uxy24rhy46z00uy99kh/transfer-tela-cadence-FT012.jpg?rlkey=cf42den1alv0v1suokbc14ag1&st=jtfq5tzb&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 908,
    name: "Transfer TELA Cadence FT010",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/gzcik0dq3r0mx7apxbpc3/transfer-tela-cadence-FT010.jpg?rlkey=a6jgbc4aphj0zjg8s5mujskqg&st=90wxos12&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 909,
    name: "Transfer TELA Cadence FT009",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/if5mukx7oghipw5n3tjzo/transfer-tela-cadence-FT009.jpg?rlkey=g3dacrpj2koof7lvof4s336gh&st=vj6jfr16&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 910,
    name: "Transfer TELA Cadence FT007",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/2wzfkkyz429s7qqmorjuy/transfer-tela-cadence-FT007.jpg?rlkey=24b1pjrc4mg1lru0nsbw1p5cx&st=bap9bjy3&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 911,
    name: "Transfer TELA Cadence FT006",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/66dxxobm79jlwl0tpkzvx/transfer-tela-cadence-FT006.jpg?rlkey=snm1wybcv8yw5zzzxccbqnpyc&st=rudemf35&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 912,
    name: "Transfer TELA Cadence FT005",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/cdkhjs9xh55pr3y6atrox/transfer-tela-cadence-FT005.jpg?rlkey=hyotrgp6a2cqmjcyvdjn6ryp0&st=8o9qiv4m&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 913,
    name: "Transfer TELA Cadence FT004",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/qfv3uzt7msfv9hudld8sl/transfer-tela-cadence-FT004.jpg?rlkey=hb0ot871gqkjj26sqn8jlni7g&st=anarn6y6&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 914,
    name: "Transfer TELA Cadence FT003",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/b72vd0f74s2sjex5shv4w/transfer-tela-cadence-FT003.jpg?rlkey=wm24gi2sca24w32htpxrouwgx&st=ouhieonx&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 915,
    name: "Transfer TELA Cadence FT002",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/75ma2z7a0b2gyxcccq8ec/transfer-tela-cadence-FT002.jpg?rlkey=vcsjsxl1kyccku6fsw19t868x&st=nl1xp4zw&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 916,
    name: "Transfer TELA Cadence FT001",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/2biyr1teboapobrixyswk/transfer-tela-cadence-FT001.jpg?rlkey=ft5n9xhj4l8emrfwg7tctyl0h&st=17pxbz2z&dl=0",
    ],
    label: "25x35cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 917,
    name: "Transfer TELA Cadence-crunge plata",
    price: "5.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/3ayj8imkjv2dge54p6qv4/transfer-tela-cadence-crunge-plata.jpg?rlkey=x9wdi5ws85s2rmknvqqcpeh4f&st=05cu8lfv&dl=0",
    ],
    label: "21x30cm",
    description:
      "Transfers CADENCE para aplicar sobre telas de algodón. Diseños actuales con multitud de pequeños detalles. Acabado de alta calidad y flexible al tacto.",
    selected: false,
  },
  {
    id: 575,
    name: "Ácido Magic Glass 70ml.",
    price: "5.80",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/mwy5bjy358xjkvy8l0r2u/acido-magic-glass-cadence.jpg?rlkey=w74m5k1anbokvupauqxpe2b42&st=hysvf9j9&dl=0",
    ],
    label: "70ml",
    description:
      "Ácido en crema para esmerilar vidrio y sus derivados, espejos, ventanas, copas... Ideal para usar con cualquier tipo de Stencil o plantilla, ya que no las estropea. Modo de uso: Limpiar la superficie de vidrio, colocar una plantilla o stencil, aplicar una capa gruesa con un pincel o una espátula, dejar actuar unos 2 minutos y aclarar con agua.",
    selected: false,
  },
  {
    id: 576,
    name: "Aqua Block Coat Repellent Oil 250ml.",
    price: "11.80",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/hrg6n29q6ll9xhlq25wfs/aqua-block-coat-repellent-oil-250-ml.jpg?rlkey=n15fhdaanhh0t18hhfxuk3nm3&st=4p83xs5k&dl=0",
    ],
    label: "250ml",
    description:
      "Gel a base de agua que transforma el tejido en un tejido recubierto, impermeable y lavable a máquina. Cuando se seca, crea una sensación de hule, con una capa hidrofóbica y hace que la tela sea resistente al agua. Planchar en modo satén, sin vapor, por el lado interior. Una vez tratada, la tela se puede coser, cortar y limpiar. Posee una gran resistencia al desgaste y es lavable a máquina a 30ºC. Es ideal para manteles de mesa, sombrillas, carteras, delantales, manteles individuales y bolsos de mano. El recubrimiento de gel repele el agua, el barro y el aceite. ",
    selected: false,
  },
  {
    id: 577,
    name: "Gel Enmascarador 100ml.",
    price: "3.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/31bfxitf80irdg5mo1vtp/gel-enmascarador-cadence.jpg?rlkey=dlqi7kalairism8f3ckdzxsx5&st=j0pwawus&dl=0",
    ],
    label: "100ml",
    description:
      "Gel para proteger superficies de trabajo impidiendo que las pinturas penetren a través de él, por lo que la superficie enmascarada permanece intacta. Después de secar, se quita con un borrador normal o se enrolla con los dedos. Úsalo para proteger detalles en decoupage, scrap y mix media. Se limpia fácilmente con agua y jabón. ",
    selected: false,
  },
  {
    id: 578,
    name: "Pan de Oro Cadence: Librito 25 Hojas",
    price: "5.85",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/vk92y0tmttesexn06l2r9/pan-de-oro-cadence.jpg?rlkey=2tgyuf9zyp5njyzwjia9pypeg&st=geluwj5d&dl=0",
    ],
    label: "hojas",
    description:
      "Blister con 4 librillos de 25 hojas de 16x16cm sobre papel encerado para un fácil manejo de la marca CADENCE. Para decoración, manualidades, scrap, mixmedia....",
    selected: false,
  },
  {
    id: 579,
    name: "Foil Cobre 8cm x 1m (precio por metro)",
    price: "0.50",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/uxg3g9iazrtrz0c0hytu9/foil-cobre-cadence.jpg?rlkey=9871963riblrhbziic97mdxy4&st=rhoohz1r&dl=0",
    ],
    label: "120m",
    description:
      "Rollo de 120 metros por 8cm de ancho de foil metálizado de la marca CADENCE. Para decoración, manualidades, scrap, mixmedia....",
    selected: false,
  },
  {
    id: 580,
    name: "Foil Plata 8cm x 1m (precio por metro)",
    price: "0.50",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/2aggfnn1goi435gwzzw6b/foil-plata-cadence.jpg?rlkey=zj5o5wgj77rofq5j47h3m98y4&st=or2ai617&dl=0",
    ],
    label: "120m",
    description:
      "Rollo de 120 metros por 8cm de ancho de foil metálizado de la marca CADENCE. Para decoración, manualidades, scrap, mixmedia....",
    selected: false,
  },
  {
    id: 581,
    name: "Foil Oro 8cm x 1m (precio por metro)",
    price: "0.50",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/br3zac7aknolmfedydoh8/foil-oro-cadence.jpg?rlkey=c211jilh2ew7rt7o9vft6xog4&st=3o0n24iy&dl=0",
    ],
    label: "120m",
    description:
      "Rollo de 120 metros por 8cm de ancho de foil metálizado de la marca CADENCE. Para decoración, manualidades, scrap, mixmedia....",
    selected: false,
  },
  {
    id: 607,
    name: "Smarta - White 100g",
    price: "2.80",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/bhvlws5rxeekfhi2wybpp/smarta-white-100g.jpg?rlkey=rc32knqko5syysrgfjx16o8kr&st=byos65lg&dl=0",
    ],
    label: "100g",
    description:
      "Smarta es una arcilla para modelar suave y flexible que se seca al aire. Suave y fácil de moldear, no requiere preparación y no se pega a las manos.",
    selected: false,
  },
  {
    id: 608,
    name: "Smarta BOLD - White 500g",
    price: "3.30",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/1gd5ol0qk7vld9d26ysfy/smarta-bold-white-500g.jpg?rlkey=9yyqkzozroksl13t5mrsddhxw&st=ybtl1c8r&dl=0",
    ],
    label: "500g",
    description:
      "La arcilla para modelar BOLD es una arcilla de modelado especial de secado al aire con una función similar a la arcilla cerámica, pero más cualificada que las arcillas naturales.Además de esculturas, maquetas y figuras, también se pueden diseñar decoraciones y joyas.",
    selected: false,
  },
  {
    id: 609,
    name: "Cola BLOK 70g",
    price: "5.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/cp1ouuq30y2vbtyxr2zpd/cola-blok.jpg?rlkey=v8axzwporo0t33ck82msnfwa9&st=ov505tie&dl=0",
    ],
    label: "70g",
    description:
      "Adhesivo universal BLOK de acetovinílico incoloro de rápido secado y transparente. La cola BLOK es ideal para tus trabajos de cartonaje, scrapbook, mix media, manualidades, proyectos home decor... por su gran variedad de usos y su agarre excepcional.",
    selected: false,
  },
  {
    id: 348,
    name: "MESITA ABRIL 🌸",
    price: 190,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/ykbfwseeupluzke03ng6e/Whats-App-Image-2023-11-19-at-20-28-52-2.jpg?rlkey=lu6w9cgv3tlwudhvdqytiyq3q&st=whdbqcpd&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/tmhlpuxni4n560sl35rwb/Whats-App-Image-2023-11-19-at-20-27-28-1.jpg?rlkey=pyjtyiujv6maeuqqnaym4paor&st=k4h9u7dk&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/umsaw9vyiwxv3qc5uwzd6/Whats-App-Image-2023-11-19-at-20-27-29.jpg?rlkey=p2y7pmgzw6eq5m7phipf0luhy&st=ylqm2t2r&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/2yizyez79j8tkl0voylpv/Whats-App-Image-2023-11-19-at-20-27-28.jpg?rlkey=dnulb0wvo5e32m11neno0fc2c&st=ew6ead6q&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/09taf1taoafw57fphet95/Whats-App-Image-2023-11-19-at-20-28-52.jpg?rlkey=tbiaaiyhd6c1a9ecm34u6g3b7&st=ydec7oln&dl=0",
    ],
    label: "Mesas",
    description:
      "Cuando gané el concurso de CasaTalentos 2021, tuve que crear un mueble original en directo, ¡en tan solo día y medio! En la grabación del programa, con cámaras, luces y cinco personas en mi pequeño taller, se impusieron el color rosa y las flores de acuarela, con pequeñas texturas de perlas.",
    selected: false,
  },
  /*
  {
    id: 627,
    name: 'MESA LUZ ✨ ',
    price: 190,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/wsqg9v18ydfl0nre4aa2b/mesaLuz1.jpg?rlkey=k9pjo5eun2l39iio8rst8olqf&st=s8lp96ey&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/wxsbmg6eoa36xjoaymfgu/mesaLuz2.jpg?rlkey=488tlth1l2ntmitiroal42qu2&st=hxn0idf7&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/4203o56gvuw9gv0rkyko0/mesaLuz3.jpg?rlkey=x3ky1huf6r2f0ot26m64753zd&st=boacgugx&dl=0"
      
    ],
    label: 'Mesas',
    description: 'Es la necesidad de atrapar las sensaciones de las vetas de una piedra marmoleada en la madera, con el tacto en relieve de  delicadas flores de muguet doradas y preciosos tiradores de libélulas.',
    selected: false,
  },
  */
  {
    id: 627,
    name: "CUADRO SILLA ISABELINA SERIE 1 75x50 🪑⭐ ",
    price: 125,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/iwb679hq5lfbdylmq1yvt/cuadro-Silla-Isabelina-Serie1.jpg?rlkey=2sf7qf5x8ecerzuw2pre694iq&st=jd74jo42&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/7wvu8v3fkgt2dm06eva37/cuadro-Silla-Isabelina-Serie2-2.jpg?rlkey=y23bdtyy6gfthgnvrd68z9hd9&st=zzfi07y3&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/y5esgqbsjjbbr3kfo8wic/cuadro-Silla-Isabelina-Serie1-3.jpg?rlkey=zthx7qizkozrgpl8illwkvqgs&st=863eqk4h&dl=0",
    ],
    label: "Cuadros",
    description:
      "Puros relieves. Craquelados en oro. Tiempos pasados reconvertidos, en colores de naturaleza. ¡Azules, turquesas, verdes!",
    selected: false,
  },
  {
    id: 628,
    name: "CUADRO SILLA ISABELINA SERIE 2 75x50 🪑🌑 ",
    price: 125,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/ehc7lutb3dz9okr4sntcb/cuadro-Silla-Isabelina-Serie2.jpg?rlkey=avoca7uzvgkm47ja95d3lldzx&st=enqjnkt7&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/fdlusod2bm848ipflb3ez/cuadro-Silla-Isabelina-Serie2-3.jpg?rlkey=26nnp2y4jwo42c1hb8obhw2nf&st=x8ugptov&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/7wvu8v3fkgt2dm06eva37/cuadro-Silla-Isabelina-Serie2-2.jpg?rlkey=y23bdtyy6gfthgnvrd68z9hd9&st=kyfk58k5&dl=0",
    ],
    label: "Cuadros",
    description:
      "La calidez y la nobleza de puro terciopelo negro en un cuadro, utilizando un clásico y actualizándolo con un radical aspecto ¡La idea melliza del contrario!",
    selected: false,
  },
  {
    id: 630,
    name: "BALINESA SERIE 1 🗝️ ",
    price: 65,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/nxf538v4kvky9acdd3lr8/Balinesa-Serie1.jpg?rlkey=jfv8bv8dtvxmgl97st2xuari3&st=4oy57zge&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/nc81ynvuzgpa2ziwekbdt/Balinesa-Serie1-3.jpg?rlkey=zltf6a4r7q67xaqm5hiz4h93t&st=2dh78084&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/cd1tdtttawcmit4b2xrno/Balinesa-Serie1-2.jpg?rlkey=s2rixhozn51mo5992g4edk32z&st=bx7191zg&dl=0",
    ],
    label: "Cuadros",
    description:
      "El deseo de encontrar una pieza en el fondo de mar hace de esta pequeña escultura, una pieza seudoarqueologica. La textura y el relieve recrean incrustaciones marinas y la oxidación de metal.",
    selected: false,
  },
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
  {
    id: 1098,
    name: "APPLE GREEN Lino Encuadernar 142x50cm",
    price: "10.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/awco6g40i0z1jq4vw272p/tela-encua-lino-142x50-cm-apple-green.jpg?rlkey=5ee3xxwjmqz6rldomsof1wazr&st=wjlg7uxa&dl=0",
    ],
    label: "142x50cm",
    description:
      "Tela especial para trabajos de encuadernación y trabajos manuales. Fácil de aplicar, se pega con cola blanca. Las telas están protegidas por una base de papel para evitar que se estropeen y manchen cuando se pegan. Todos se presentan en rollo presentados en caja.",
    selected: false,
  },
  {
    id: 1099,
    name: "COLD GREY Lino Encuadernar 142x50cm",
    price: "10.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/gn9qv4n513cf3pgm1xh13/tela-encua-lino-142x50-cm-cold-grey.jpg?rlkey=5la5w0dw4loin6iq0tvuslano&st=8qggapq8&dl=0",
    ],
    label: "142x50cm",
    description:
      "Tela especial para trabajos de encuadernación y trabajos manuales. Fácil de aplicar, se pega con cola blanca. Las telas están protegidas por una base de papel para evitar que se estropeen y manchen cuando se pegan. Todos se presentan en rollo presentados en caja.",
    selected: false,
  },
  {
    id: 1100,
    name: "INTENSE BLACK Lino Encuadernar 142x50cm",
    price: "10.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/nscu86rgurpkxah4pt2d0/tela-encua-lino-142x50-cm-intense-black.jpg?rlkey=1phiz74m2wy7j6nis94i0lrxm&st=xukwe1nt&dl=0",
    ],
    label: "142x50cm",
    description:
      "Tela especial para trabajos de encuadernación y trabajos manuales. Fácil de aplicar, se pega con cola blanca. Las telas están protegidas por una base de papel para evitar que se estropeen y manchen cuando se pegan. Todos se presentan en rollo presentados en caja.",
    selected: false,
  },
  {
    id: 1101,
    name: "JEANS Lino Encuadernar 142x50cm",
    price: "10.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/uzrvo8lcczsndixqw2dhb/tela-encua-lino-142x50-cm-jeans.jpg?rlkey=kufobisxf49d2z08t2yw8f853&st=b30p6bzi&dl=0",
    ],
    label: "142x50cm",
    description:
      "Tela especial para trabajos de encuadernación y trabajos manuales. Fácil de aplicar, se pega con cola blanca. Las telas están protegidas por una base de papel para evitar que se estropeen y manchen cuando se pegan. Todos se presentan en rollo presentados en caja.",
    selected: false,
  },
  {
    id: 1102,
    name: "MAUVE Lino Encuadernar 142x50cm",
    price: "10.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/s7mg9gwfa95udgjt17w0c/tela-encua-lino-142x50-cm-mauve.jpg?rlkey=z7yqkqih9pxjz7w0s53jhb9xi&st=7tqcduek&dl=0",
    ],
    label: "142x50cm",
    description:
      "Tela especial para trabajos de encuadernación y trabajos manuales. Fácil de aplicar, se pega con cola blanca. Las telas están protegidas por una base de papel para evitar que se estropeen y manchen cuando se pegan. Todos se presentan en rollo presentados en caja.",
    selected: false,
  },
  {
    id: 1103,
    name: "PINE GREEN Lino Encuadernar 142x50cm",
    price: "10.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/tie36iupzytekfqaexz9z/tela-encua-lino-142x50-cm-pine-green.jpg?rlkey=qwi04ejgzaha6mjrdg5vvzszg&st=frxxrsvc&dl=0",
    ],
    label: "142x50cm",
    description:
      "Tela especial para trabajos de encuadernación y trabajos manuales. Fácil de aplicar, se pega con cola blanca. Las telas están protegidas por una base de papel para evitar que se estropeen y manchen cuando se pegan. Todos se presentan en rollo presentados en caja.",
    selected: false,
  },
  {
    id: 1104,
    name: "ULTRAMARINE Lino Encuadernar 142x50cm",
    price: "10.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/uatumqzzhv0h02uybg1jj/tela-encua-lino-142x50-cm-ultramarine.jpg?rlkey=9rfqahg4y3dudl0lof1c2ajn4&st=kgt02fv8&dl=0",
    ],
    label: "142x50cm",
    description:
      "Tela especial para trabajos de encuadernación y trabajos manuales. Fácil de aplicar, se pega con cola blanca. Las telas están protegidas por una base de papel para evitar que se estropeen y manchen cuando se pegan. Todos se presentan en rollo presentados en caja.",
    selected: false,
  },
  {
    id: 1105,
    name: "LIGHT BEIGE Lino Encuadernar 142x50cm",
    price: "10.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/5d87y4jpblusuxgf9fz60/tela-encualino-142x50-cm-light-beige.jpg?rlkey=2wrrdwip4wppwz16sj5suvjrn&st=85odijq6&dl=0",
    ],
    label: "142x50cm",
    description:
      "Tela especial para trabajos de encuadernación y trabajos manuales. Fácil de aplicar, se pega con cola blanca. Las telas están protegidas por una base de papel para evitar que se estropeen y manchen cuando se pegan. Todos se presentan en rollo presentados en caja.",
    selected: false,
  },
  {
    id: 1087,
    name: "BLACK IS BLACK Tela Encuadernar 142x50cm ",
    price: "9.15",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/b2qbpwlrryglqde8hdyz4/pfy-rollo-tela-encuadernar-142x50cm-BLACK-IS-BLACK.jpg?rlkey=ykdyzzpm7caag9ijubllunwxk&st=3o4z7d0j&dl=0",
    ],
    label: "142x50cm",
    description:
      "Tela  especial para trabajos de encuadernación y trabajos manuales.Fácil de aplicar, se pega con cola blanca.Las telas están protegidas por una base de papel para evitar que se estropeen y manchen cuando se pegan. Todos se presentan en rollo presentados en caja.",
    selected: false,
  },
  {
    id: 1088,
    name: "BURGUNDY Tela Encuadernar 142x50cm",
    price: "9.15",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/ejjr5lum3q1y2h3b9bzhr/pfy-rollo-tela-encuadernar-142x50cm-BURGUNDY.jpg?rlkey=4e4eg7lx3lopbcy174a1fw1en&st=wvif5e2l&dl=0",
    ],
    label: "142x50cm",
    description:
      "Tela especial para trabajos de encuadernación y trabajos manuales. Fácil de aplicar, se pega con cola blanca. Las telas están protegidas por una base de papel para evitar que se estropeen y manchen cuando se pegan. Todos se presentan en rollo presentados en caja.",
    selected: false,
  },
  {
    id: 1089,
    name: "CHOCOLATTA Tela Encuadernar 142x50cm",
    price: "9.15",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/vcy101atueh7yyt6r3z7e/pfy-rollo-tela-encuadernar-142x50cm-CHOCOLATTA.jpg?rlkey=5efdp9x9w6n88a6m72rf2b8u2&st=55u27ozp&dl=0",
    ],
    label: "142x50cm",
    description:
      "Tela especial para trabajos de encuadernación y trabajos manuales. Fácil de aplicar, se pega con cola blanca. Las telas están protegidas por una base de papel para evitar que se estropeen y manchen cuando se pegan. Todos se presentan en rollo presentados en caja.",
    selected: false,
  },
  {
    id: 1090,
    name: "DARK-NIGHT Tela Encuadernar 142x50cm",
    price: "9.15",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/i1ixmb2t51yjiiyjzxg7i/pfy-rollo-tela-encuadernar-142x50cm-DARK-NIGHT.jpg?rlkey=vsc820qxg7ohcp037kimy32y8&st=mpbr2tcy&dl=0",
    ],
    label: "142x50cm",
    description:
      "Tela especial para trabajos de encuadernación y trabajos manuales. Fácil de aplicar, se pega con cola blanca. Las telas están protegidas por una base de papel para evitar que se estropeen y manchen cuando se pegan. Todos se presentan en rollo presentados en caja.",
    selected: false,
  },
  {
    id: 1091,
    name: "ELEGANT-CREAM Tela Encuadernar 142x50cm",
    price: "9.15",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/o8q1ezp0fz28e5ldjlquz/pfy-rollo-tela-encuadernar-142x50cm-ELEGANT-CREAM.jpg?rlkey=3t122zhxv1ckslss04sdq1zim&st=noy8rths&dl=0",
    ],
    label: "142x50cm",
    description:
      "Tela especial para trabajos de encuadernación y trabajos manuales. Fácil de aplicar, se pega con cola blanca. Las telas están protegidas por una base de papel para evitar que se estropeen y manchen cuando se pegan. Todos se presentan en rollo presentados en caja.",
    selected: false,
  },
  {
    id: 1092,
    name: "ENVY-ME Tela Encuadernar 142x50cm",
    price: "9.15",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/ewxr217jnvt8jzgxuj6hw/pfy-rollo-tela-encuadernar-142x50cm-ENVY-ME.jpg?rlkey=7a4q0kl8zii3h87rasumiqgcj&st=5v90dcnz&dl=0",
    ],
    label: "142x50cm",
    description:
      "Tela especial para trabajos de encuadernación y trabajos manuales. Fácil de aplicar, se pega con cola blanca. Las telas están protegidas por una base de papel para evitar que se estropeen y manchen cuando se pegan. Todos se presentan en rollo presentados en caja.",
    selected: false,
  },
  {
    id: 1093,
    name: "MINTY-CANDY Tela Encuadernar 142x50cm",
    price: "9.15",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/n69hyps2w1lcq6siddh96/pfy-rollo-tela-encuadernar-142x50cm-MINTY-CANDY.jpg?rlkey=v9qw7urnmrdze580aze36g18u&st=e0d0tni7&dl=0",
    ],
    label: "142x50cm",
    description:
      "Tela especial para trabajos de encuadernación y trabajos manuales. Fácil de aplicar, se pega con cola blanca. Las telas están protegidas por una base de papel para evitar que se estropeen y manchen cuando se pegan. Todos se presentan en rollo presentados en caja.",
    selected: false,
  },
  {
    id: 1094,
    name: "RUSTIC-LINEN Tela Encuadernar 142x50cm",
    price: "13.70",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/baa3shlqxyfscb5mth50a/pfy-rollo-tela-encuadernar-142x50cm-RUSTIC-LINEN.jpg?rlkey=th6rtjk5g27d8mpb4iam4d7yh&st=rsh2t5do&dl=0",
    ],
    label: "142x50cm",
    description:
      "Tela especial para trabajos de encuadernación y trabajos manuales. Fácil de aplicar, se pega con cola blanca. Las telas están protegidas por una base de papel para evitar que se estropeen y manchen cuando se pegan. Todos se presentan en rollo presentados en caja.",
    selected: false,
  },
  {
    id: 1095,
    name: "SNOW Tela Encuadernar 142x50cm",
    price: "9.15",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/i1ku3a2wr90a1z9oa7v60/pfy-rollo-tela-encuadernar-142x50cm-SNOW.jpg?rlkey=anqvwlbqerq8hg0iyjdk56sf0&st=9cpfx1wk&dl=0",
    ],
    label: "142x50cm",
    description:
      "Tela especial para trabajos de encuadernación y trabajos manuales. Fácil de aplicar, se pega con cola blanca. Las telas están protegidas por una base de papel para evitar que se estropeen y manchen cuando se pegan. Todos se presentan en rollo presentados en caja.",
    selected: false,
  },
  {
    id: 1096,
    name: "BABY-BLUE Tela Encuadernar 142x50cm",
    price: "9.15",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/lh4rcptx9irerw7x4uobf/pfy-rollo-tela-encuadernar-142x50cm-BABY-BLUE.jpg?rlkey=s5wfur5r19bpjimj2cjgzmrsh&st=24t99o0p&dl=0",
    ],
    label: "142x50cm",
    description:
      "Tela especial para trabajos de encuadernación y trabajos manuales. Fácil de aplicar, se pega con cola blanca. Las telas están protegidas por una base de papel para evitar que se estropeen y manchen cuando se pegan. Todos se presentan en rollo presentados en caja.",
    selected: false,
  },
  {
    id: 1097,
    name: "BABY-PINK Tela Encuadernar 142x50cm",
    price: "9.15",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/ghle99f1h0gv34h4o49h5/pfy-rollo-tela-encuadernar-142x50cm-BABY-PINK.jpg?rlkey=thq357rjxlvf9q559o8w6k91t&st=7u0piqa5&dl=0",
    ],
    label: "142x50cm",
    description:
      "Tela especial para trabajos de encuadernación y trabajos manuales. Fácil de aplicar, se pega con cola blanca. Las telas están protegidas por una base de papel para evitar que se estropeen y manchen cuando se pegan. Todos se presentan en rollo presentados en caja.",
    selected: false,
  },
  {
    id: 1047,
    name: "CRT164 Papeles ROSSI 70x100cm, 2 uds.",
    price: "10.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/c9kei1pz1kzuhy0kmll76/papeles-rossi-70x100-cm-2-uds-CRT164.jpg?rlkey=ol7smd7buen8wiq65mb0dyldn&st=3wdmua2w&dl=0",
    ],
    label: "70x100cm",
    description:
      "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    selected: false,
  },
  {
    id: 1048,
    name: "CRT169 Papeles ROSSI 70x100cm, 2 uds.",
    price: "10.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/uruwrbu2s26zsj9dh8nkh/papeles-rossi-70x100-cm-2-uds-CRT169.jpg?rlkey=o3rh8oznqs7qzrnm49cqwvh0w&st=x1sevqpg&dl=0",
    ],
    label: "70x100cm",
    description:
      "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    selected: false,
  },
  {
    id: 1049,
    name: "CRT186 Papeles ROSSI 70x100cm, 2 uds.",
    price: "10.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/sc2hqocn1ryp5jy80pjqb/Papeles-ROSSI-70x100-cm-2-uds-CRT186.jpg?rlkey=lb0rkquaquckh648js4rcq1xx&st=be1dl056&dl=0",
    ],
    label: "70x100cm",
    description:
      "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    selected: false,
  },
  {
    id: 1050,
    name: "CRT206 Papeles ROSSI 70x100cm, 2 uds.",
    price: "10.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/k8by0bx4p0hwxw9lmqj2z/papeles-rossi-70x100-cm-2-uds-CRT206.jpg?rlkey=1o3c61gzch64fic268br3uj84&st=3ejm94c9&dl=0",
    ],
    label: "70x100cm",
    description:
      "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    selected: false,
  },
  {
    id: 1051,
    name: "CRT213 Papeles ROSSI 70x100cm, 2 uds.",
    price: "10.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/ac028z50dyt04rk01081j/papeles-rossi-70x100-cm-2-uds-CRT213.jpg?rlkey=bk8mwtkvh0p81rbmzd85lqun2&st=cuogc8nl&dl=0",
    ],
    label: "70x100cm",
    description:
      "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    selected: false,
  },
  {
    id: 1052,
    name: "TSC055-1 Papeles ROSSI 50x70cm, 2 uds.",
    price: "5.30",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/t88lr0yypi95auh3qiui3/papeles-rossi-50x70cm-2-uds-TSC055-1.jpg?rlkey=yn53ogdg23m0vwe4jx5rwrxmf&st=mysiz2s0&dl=0",
    ],
    label: "50x70cm",
    description:
      "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    selected: false,
    note: "Revisar código",
  },
  {
    id: 1053,
    name: "LTP061 Papeles ROSSI 50x70cm, 2 uds.",
    price: "9.25",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/juplzq0v4tmqyykmhwzqc/papeles-rossi-50-x70-cm-2-uds-LTP061.jpg?rlkey=ktarpkxe3tfx3i297qy0tz8ax&st=252x81uj&dl=0",
    ],
    label: "50x70cm",
    description:
      "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    selected: false,
  },
  {
    id: 1054,
    name: "TSC057 Papeles ROSSI 50x70cm, 2 uds.",
    price: "5.30",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/rk5vgv6csrtmso17pe0zv/papeles-rossi-50x70-cm-2-uds-TSC057.jpg?rlkey=y91ncn1x5m2u9u4l4dkhc0rzg&st=noddpnm1&dl=0",
    ],
    label: "50x70cm",
    description:
      "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    selected: false,
    note: "Revisar código",
  },
  {
    id: 1055,
    name: "LTP075 Papeles ROSSI 50x70cm, 2 uds.",
    price: "10.50",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/3hsby4l25wsqt14fwxzfm/papeles-rossi-50-x70-cm-2-uds-LTP075.jpg?rlkey=g4qcnwcwhpdg7pdyjwdxac377&st=3u0to1ld&dl=0",
    ],
    label: "50x70cm",
    description:
      "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    selected: false,
  },
  {
    id: 1056,
    name: "CRT678 Papeles ROSSI 50x70cm, 2 uds.",
    price: "5.30",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/3ohbc0gax0c3hylx3gwuv/papeles-rossi-50x70-cm-2-uds-CRT678.jpg?rlkey=4zleg8v10co0iwst5vivvnttd&st=a6o1znbh&dl=0",
    ],
    label: "50x70cm",
    description:
      "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    selected: false,
  },
  {
    id: 1057,
    name: "CRT201 Papeles ROSSI 50x70cm, 2 uds.",
    price: "5.75",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/1r1pem0eerwou45jveyzf/papeles-rossi-50x70-cm-2-uds-CRT201.jpg?rlkey=sdbp8u1vzlkzk3j5xq4xo2l6d&st=n6bzfuqe&dl=0",
    ],
    label: "50x70cm",
    description:
      "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    selected: false,
  },
  {
    id: 1058,
    name: "CRT150 Papeles ROSSI 50x70cm, 2 uds.",
    price: "5.75",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/zxlyi7fweb6i9nkpu5ay4/papeles-rossi-50x70-cm-2-uds-CRT150.jpg?rlkey=2y03jkosbni3d2o615efb5k7u&st=ff7aog2g&dl=0",
    ],
    label: "50x70cm",
    description:
      "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    selected: false,
  },
  {
    id: 1059,
    name: "LTP113 Papeles ROSSI 50x70cm, 2 uds.",
    price: "11.55",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/m583qjrmzrzgjwsyub3fd/papeles-rossi-50-x70-cm-2-uds-LTP113.jpg?rlkey=2c9dc3kezkioulqlv4bbd0ju6&st=3n46wm2v&dl=0",
    ],
    label: "50x70cm",
    description:
      "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    selected: false,
  },
  {
    id: 1060,
    name: "CRT675 Papeles ROSSI 50x70cm, 2 uds.",
    price: "5.30",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/4swqmwthsn2htr0t7cqpn/papeles-rossi-50x70-cm-2-uds-CRT675.jpg?rlkey=1884r7t2srttex9oyas9z73t1&st=r3tzf0qj&dl=0",
    ],
    label: "50x70cm",
    description:
      "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    selected: false,
  },
  {
    id: 1061,
    name: "CRT089 Papeles ROSSI 50x70cm, 2 uds.",
    price: "5.75",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/2z2w2nilyih1ifk29masz/papeles-rossi-50x70-cm-2-uds-CRT089.jpg?rlkey=nd9u54kr6ycz5hc5drsp67t7d&st=b6chc5ss&dl=0",
    ],
    label: "50x70cm",
    description:
      "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    selected: false,
  },
  {
    id: 1062,
    name: "TSC049 Papeles ROSSI 70x100cm, 2 uds.",
    price: "9.25",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/zf52dxdmwjd8r3p0pblqv/PAPELES-ROSSI-70x100-cm-2-uds-TSC049.jpg?rlkey=aws3bj83se0i0g72mfobkicoi&st=azje75r3&dl=0",
    ],
    label: "70x100cm",
    description:
      "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    selected: false,
  },
  {
    id: 1063,
    name: "TSC001 Papeles ROSSI 70x100cm, 2 uds.",
    price: "9.25",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/xm15lri40mpub2g3pwlrs/PAPELES-ROSSI-70x100-cm-2-uds-TSC001.jpg?rlkey=c8q915jvj20665yrram815w32&st=dymnwxnz&dl=0",
    ],
    label: "70x100cm",
    description:
      "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    selected: false,
    note: "Revisar código",
  },
  {
    id: 1064,
    name: "CRT684 Papeles ROSSI 50x70cm, 2 uds.",
    price: "5.30",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/mjvcbereocpnsgbk63ims/papeles-rossi-70x100-cm-2-uds-CRT684.jpg?rlkey=tg5tsg4meqrkzxonkl066hno4&st=6g0ygrtc&dl=0",
    ],
    label: "50x70cm",
    description:
      "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    selected: false,
  },
  {
    id: 1065,
    name: "CRT078 Papeles ROSSI 50x70cm, 2 uds.",
    price: "5.75",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/9qtojhg1udzxxnwz94xz7/papeles-rossi-50x70-cm-2-uds-CRT078.jpg?rlkey=79dj7wdo1dnun8yhyubfs6xzh&st=7kvf0i53&dl=0",
    ],
    label: "50x70cm",
    description:
      "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    selected: false,
  },
  {
    id: 1066,
    name: "CRT187 Papeles ROSSI 70x100cm, 2 uds.",
    price: "10.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/h5hwilfiaawfl45ey8532/rollo-2-papeles-rossi-CRT187.jpg?rlkey=us17puinb3sfskg3kmbfm5vni&st=bj58u6pj&dl=0",
    ],
    label: "70x100cm",
    description:
      "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    selected: false,
  },
  {
    id: 1067,
    name: "LTP033 Papeles ROSSI 50x70cm, 2 uds.",
    price: "11.60",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/29096ti4dtijdhlmnownu/rollo-2-papeles-rossi-LTP033.jpg?rlkey=28inco469a4bqkxdjrjrsgiru&st=2ac0adqf&dl=0",
    ],
    label: "50x70cm",
    description:
      "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    selected: false,
  },
  {
    id: 1068,
    name: "CRT687 Papeles ROSSI 50x70cm, 2 uds.",
    price: "5.30",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/jh2z07nbjw2jq73920gny/rollo-2-papeles-rossi-CRT687.jpg?rlkey=8afuqiluyjfb8ulikau3esfrb&st=nnhxvtdh&dl=0",
    ],
    label: "50x70cm",
    description:
      "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    selected: false,
  },
  {
    id: 1069,
    name: "TSC019 Papeles ROSSI 50x70cm, 2 uds.",
    price: "5.30",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/r2mtejjfhk97r0jtc5kkf/rollo-2-papeles-rossi-TSC019.jpg?rlkey=xatetvm8vtmd3k64lmvc8juw3&st=erhak7n4&dl=0",
    ],
    label: "50x70cm",
    description:
      "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    selected: false,
    note: "Revisar código",
  },
  {
    id: 1070,
    name: "TSC037 Papeles ROSSI 50x70cm, 2 uds.",
    price: "5.30",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/qhd3vohrlnr2sxg2dx54i/rollo-2-papeles-rossi-TSC037.jpg?rlkey=73jytbf3bx5crvq12rkq9v2og&st=o03pilxe&dl=0",
    ],
    label: "50x70cm",
    description:
      "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    selected: false,
    note: "Revisar código",
  },
  {
    id: 1071,
    name: "TSC042 Papeles ROSSI 50x70cm, 2 uds.",
    price: "5.30",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/nblotuvs8lhx27whc05wa/rollo-2-papeles-rossi-TSC042.jpg?rlkey=msa5z543r5zllquzrtqe55ycj&st=8hshd9ad&dl=0",
    ],
    label: "50x70cm",
    description:
      "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    selected: false,
  },
  {
    id: 1072,
    name: "CRT178 Papeles ROSSI 50x70cm, 2 uds.",
    price: "5.75",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/7nui7y3t21zp2wii6xo5f/rollo-2-papeles-rossi-CRT178.jpg?rlkey=h0ye0cz8x9bdsi4aq4j12etm1&st=utkv23g6&dl=0",
    ],
    label: "50x70cm",
    description:
      "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    selected: false,
  },
  {
    id: 1073,
    name: "CRT517 Papeles ROSSI 50x70cm, 2 uds.",
    price: "5.30",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/zzqp0blrh7427sr27xf4v/rollo-2-papeles-rossi-CRT517.jpg?rlkey=8zdlpggjhz8ic0k2brb1cdlgk&st=d62t2u0e&dl=0",
    ],
    label: "50x70cm",
    description:
      "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    selected: false,
  },
  {
    id: 1074,
    name: "CRT670 Papeles ROSSI 50x70cm, 2 uds.",
    price: "5.30",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/vlcgol5womh88pv4ft021/rollo-2-papeles-rossi-CRT670.jpg?rlkey=asjkjf0b0euv2btnp7w0yeaxm&st=n9zau6x4&dl=0",
    ],
    label: "50x70cm",
    description:
      "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    selected: false,
  },
  {
    id: 1075,
    name: "CRT679 Papeles ROSSI 50x70cm, 2 uds.",
    price: "5.30",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/lfiu0ejxgije62kldmhfh/rollo-2-papeles-rossi-CRT679.jpg?rlkey=i72tv7ltcye1fbb0hszj8j0fk&st=5za1rws2&dl=0",
    ],
    label: "50x70cm",
    description:
      "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    selected: false,
  },
  {
    id: 1076,
    name: "CRT133 Papeles ROSSI 70x100cm, 2 uds.",
    price: "10.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/j7tb9dnhiskd1pvqhu0z7/rollo-2-papeles-rossi-CRT133.jpg?rlkey=ydl3djfd7xj6uqikbrfp44ier&st=id9ti8jj&dl=0",
    ],
    label: "70x100cm",
    description:
      "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    selected: false,
  },
  {
    id: 1077,
    name: "CRT140 Papeles ROSSI 70x100cm, 2 uds.",
    price: "10.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/ouw3lzlg25ulnzyf2z5m1/rollo-2-papeles-rossi-CRT140.jpg?rlkey=aeu5864bvnkm9jvw8qfwrxlg5&st=uampl2zf&dl=0",
    ],
    label: "70x100cm",
    description:
      "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    selected: false,
  },
  {
    id: 1078,
    name: "CRT135 Papeles ROSSI 70x100cm, 2 uds.",
    price: "10.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/aikqbjlceiwu2w3z21v1g/rollo-2-papeles-rossi-CRT135.jpg?rlkey=0qrpmzi1q7ramswzvj3d9wlr2&st=1clbhsom&dl=0",
    ],
    label: "70x100cm",
    description:
      "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    selected: false,
  },
  {
    id: 1079,
    name: "CRT101 Papeles ROSSI 70x100cm, 2 uds.",
    price: "10.20",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/kethqf2zo40qtlvhfu7tv/rollo-2-papeles-rossi-CRT101.jpg?rlkey=sxldkrv3egmwlfaaalhb471hi&st=qecxxtf5&dl=0",
    ],
    label: "70x100cm",
    description:
      "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    selected: false,
  },
  {
    id: 1080,
    name: "CRT094 Papeles ROSSI 70x50cm, 2 uds.",
    price: "5.75",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/npm9j1b2js2g93bjgpfx9/rollo-2-papeles-rossi-CRT094.jpg?rlkey=a91alevb47g2x4o7mgxxybu6c&st=mc99wv95&dl=0",
    ],
    label: "70x50cm",
    description:
      "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    selected: false,
  },
  {
    id: 1081,
    name: "TSC059 Papeles ROSSI 70x100cm, 2 uds.",
    price: "9.25",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/2wyhoqzuet6w17ap8kk49/rollo-2-papeles-rossi-TSC059.jpg?rlkey=zicu1dux60ivjtbzy74zeo51z&st=11kbxwuo&dl=0",
    ],
    label: "70x100cm",
    description:
      "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    selected: false,
    note: "Revisar código",
  },
  {
    id: 1082,
    name: "CRT583 Papeles ROSSI 70x100cm, 2 uds.",
    price: "9.25",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/zgcarv6wotjkslz8zq6hb/rollo-2-papeles-rossi-CRT583.jpg?rlkey=id5qhjjc6nzvgsjxvsxlwnrws&st=7jvzuptx&dl=0",
    ],
    label: "70x100cm",
    description:
      "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    selected: false,
  },
  {
    id: 1083,
    name: "LTP037 Papeles ROSSI 50x70cm, 2 uds.",
    price: "6.25",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/m1cvok31qbvopnytej67i/rollo-2-papeles-rossi-LTP037.jpg?rlkey=uy91p6r2qr597fxswkm3503p2&st=2ai7j6f0&dl=0",
    ],
    label: "50x70cm",
    description:
      "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    selected: false,
  },
  {
    id: 1084,
    name: "TSC029 Papeles ROSSI 70x100cm, 2 uds.",
    price: "9.25",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/bhzsd1ctycmls4crulyhf/rollo-2-papeles-rossi-TSC029.jpg?rlkey=9hrwhlthbfnvq6ybxj930m3cp&st=adcoo524&dl=0",
    ],
    label: "70x100cm",
    description:
      "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    selected: false,
  },
  {
    id: 1085,
    name: "CRT519 Papeles ROSSI 50x70cm, 2 uds.",
    price: "5.30",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/98sb4pc78amz7qcc666qm/rollo-2-papeles-rossi-CRT519.jpg?rlkey=shgmuw8nwv2dmb85pcot2s9do&st=yr77mwd5&dl=0",
    ],
    label: "50x70cm",
    description:
      "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    selected: false,
  },
  {
    id: 1086,
    name: "CRT685 Papeles ROSSI 50x70cm, 2 uds.",
    price: "5.30",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/pn0vtr6b95xqbp6nc22ou/rollo-2-papeles-rossi-CRT685.jpg?rlkey=1e7bdgom4hdhoufa4aeek5hzk&st=673ybnr2&dl=0",
    ],
    label: "50x70cm",
    description:
      "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    selected: false,
  },
  {
    id: 1106,
    name: "PFY-15431 Decorative Transfers (Santa & Friends) 15x30cm",
    price: "10.80",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/mun2dbo3yc2zmc3di4evr/PFY-15431_1.jpg?rlkey=u7nd9jaup2nfm6mfo003itlet&st=5bsorkpm&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/4l0bsbsxsvo0pj9bubkj9/PFY-15431_2.jpg?rlkey=y6jzd6fidbohwm4kcay17rp7t&st=xw3kpfh4&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/b7fuw25jkxus8cn2q7otk/PFY-15431_3.jpg?rlkey=oykt9w5xrj0oh8jnd1s0nrgtu&st=4089x039&dl=0",
    ],
    label: "15x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS,  muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1107,
    name: "PFY-15364 Decorative Transfers (Sweet December) 15x30cm",
    price: "10.80",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/xvydr4ziocmdvoesad3ed/PFY-15364_1.jpg?rlkey=q5f385w3sj3ym31t2i84us3mt&st=ne2lh1wf&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/u3fjmxg4lq1gl2xcfo972/PFY-15364_2.jpg?rlkey=9gs8zawogb9rh5a1pxrpq246j&st=jpu1id4a&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/zir5sjbkedd9uqmpc8dtb/PFY-15364_3.jpg?rlkey=33zfv0i6x9b44kb5uv9ofwr0b&st=x23m3d39&dl=0",
    ],
    label: "15x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS,  muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1108,
    name: "PFY-15197 Decorative Transfers (Santa’s Workshop) 15x30cm",
    price: "10.80",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/9av3hxrbpwckni7udga8e/PFY-15197_1.jpg?rlkey=djhhkw76u1m30ugk2nydckuuc&st=71t3wbzl&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/v4wi3dys2xg8fmsb3codf/PFY-15197_2.jpg?rlkey=p7yyaxoe6q1ntb5xi9i92jkm5&st=q813tirf&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/c8p6rvvk30wtkw71209y2/PFY-15197_3.jpg?rlkey=ka8ffvtx8ko5bjnucsdnd1bk0&st=j9hmzs4d&dl=0",
    ],
    label: "15x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS,  muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1109,
    name: "PFY-14631 Decorative Transfers (Scooter II) 15x30cm",
    price: "10.80",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/5gfj7ny492vtdu8ayoxae/PFY-14631_1.jpg?rlkey=ejtjf9k6lvafngyyhyoyiroc1&st=pk6y8g59&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/j808pcizbvmcnk0f45pi7/PFY-14631_2.jpg?rlkey=55yjtptnyhb5qt4d09ofhsw5a&st=kk6brtj4&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/9tfyhfh9gk0aw0ol60ali/PFY-14631_3.jpg?rlkey=2pjz5a4jr2hrbkx25w91ze0q7&st=cpxhleqc&dl=0",
    ],
    label: "15x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS,  muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1110,
    name: "PFY-14629 Decorative Transfers (Scooter) 15x30cm",
    price: "10.80",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/wadie5rw5oolhvd1jxun4/PFY-14629_1.jpg?rlkey=t4r4k84tjzrolipkn0ks5sc54&st=ktnlf5ka&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/plz2kzwc5h3q0ye0vr6mr/PFY-14629_2.jpg?rlkey=kyvwzbbnf9ho1tbx20mff28tr&st=l7dj1uxt&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/qjd7wbvfziy4zlsmu85be/PFY-14629_3.jpg?rlkey=dufid3krykoohyspl1yo67847&st=eewehspb&dl=0",
    ],
    label: "15x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS,  muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1111,
    name: "PFY-14628 Decorative Transfers (Tea) 15x30cm",
    price: "10.80",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/puz72kz09en87f4m8qeox/PFY-14628_1.jpg?rlkey=tb9ls4bp4gpo9m7eywqrd91us&st=90qh0ypz&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/0nkog3zk6b7ebkzj9hl72/PFY-14628_2.jpg?rlkey=dxzfihoxfsiyxutld1eh0e94t&st=p2092mfo&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/523kojuwolqycdaxcqe50/PFY-14628_3.jpg?rlkey=b3x3p0mij0bfuymx57agmfmet&st=igof4k9u&dl=0",
    ],
    label: "15x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS,  muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1112,
    name: "PFY-14627 Decorative Transfers (Blushrooms) 15x30cm",
    price: "10.80",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/vozhnca7s74b2hxu1cmzm/PFY-14627_1.jpg?rlkey=1kghs8os7fohft3dqejl762cr&st=16pjdutu&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/u95mepx14wpugw5pfxdhn/PFY-14627_2.jpg?rlkey=g0zzxsrf81x2gv1d8tyfyd4dg&st=fb7wuac7&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/juoitcdiqll6pc3dtr46h/PFY-14627_3.jpg?rlkey=r6wyfiw5ffqlk2cgkq3yf55di&st=nv7grquk&dl=0",
    ],
    label: "15x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS,  muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1113,
    name: "PFY-14626 Decorative Transfers (Pinky Roses) 15x30cm",
    price: "10.80",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/2b3zt2yg5jakzow7btmxa/PFY-14626_1.jpg?rlkey=ze48fbpliv7dmr7y48hqwq2h8&st=7o1smwub&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/qv583zyg2j6q5ypyrs8n5/PFY-14626_2.jpg?rlkey=h6ad2tyvbxnrvfp635aim9k3p&st=21osfxxt&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/plna4tm131shcjdpxb5cf/PFY-14626_3.jpg?rlkey=cyfvys7dngr5vjtotkcfl078c&st=i4m8lvy8&dl=0",
    ],
    label: "15x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS,  muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1114,
    name: "PFY-14625 Decorative Transfers (Pink Orchid) 15x30cm",
    price: "10.80",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/x5d762v59g8z27e7tkj3q/PFY-14625_1.jpg?rlkey=q7xzffl8g8k65qlmm81jl5cdk&st=bux1epj0&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/dppxkneoom3w7cwmp8hho/PFY-14625_2.jpg?rlkey=aoggesdwb37vcylntrk2l9327&st=vdd4cpav&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/42qxj5tit37v01jzun9cw/PFY-14625_3.jpg?rlkey=ocjfdppdmt1v9jh19ecnbj22f&st=nrmpjyir&dl=0",
    ],
    label: "15x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS,  muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1115,
    name: "PFY-14624 Decorative Transfers (White Orchid) 15x30cm",
    price: "10.80",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/d6txcjbcfst3i08og637j/PFY-14624_1.jpg?rlkey=r8id57tawyunkr1lvfe8bpe7v&st=1c8rsbgy&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/erq8sqwgnuemt7q5qnhm3/PFY-14624_2.jpg?rlkey=n2lf6k4bnnn6inwusfr1b7jmm&st=zrzt9rgl&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/0ejxus2op5pm2yyrfy36i/PFY-14624_3.jpg?rlkey=3qahii2p6uudg9up25g13gz1t&st=hx7m9234&dl=0",
    ],
    label: "15x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS,  muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1116,
    name: "PFY-14623 Decorative Transfers (Maritim) 15x30cm",
    price: "10.80",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/75c88ubaanxzdu1m22jfb/PFY-14623_1.jpg?rlkey=k6t68e8ksnmcuimounmsqxiji&st=a8aaos1l&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/tzz34jrif0v0nnc2ntm1c/PFY-14623_2.jpg?rlkey=k3ui2zgw26mm2geh1kg4ncmr7&st=a5r9vh55&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/zwl4zdh7331lpebasuith/PFY-14623_3.jpg?rlkey=92x8hlzct8xbll1crpt6lsbkt&st=myurgfwd&dl=0",
    ],
    label: "15x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS,  muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1117,
    name: "PFY-14622 Decorative Transfers (Bugs) 15x30cm",
    price: "10.80",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/x4s0wb3b6bwbnlqjyc7hv/PFY-14622_1.jpg?rlkey=u09u4rg44r0mumez1lye89l9z&st=voxp6v7e&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/ic6xvmrohaye4cqim9yvs/PFY-14622_2.jpg?rlkey=mus4o04nzwsw2vgux2wz4sf75&st=wn083pbu&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/lfv71610w5ueenlb3th4k/PFY-14622_3.jpg?rlkey=0lt5ptq4u1ltq5l1645odx2bm&st=b0vukp47&dl=0",
    ],
    label: "15x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS,  muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1118,
    name: "PFY-14621 Decorative Transfers (Sewing) 15x30cm",
    price: "10.80",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/wenngqaekpr3mpnldownu/PFY-14621_1.jpg?rlkey=ov1dkm0b13swbkixxc9elqybc&st=c3hpp7d2&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/ag76gihahodtaf2cyy75l/PFY-14621_2.jpg?rlkey=bexxr5faidiv9zo1ewcs8xdy3&st=nwu5aerk&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/b0zu3c1ddc0hqto1zx2yn/PFY-14621_3.jpg?rlkey=35ifhne64vb9zihtydbwnoxih&st=av4n0zyx&dl=0",
    ],
    label: "15x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS,  muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1119,
    name: "PFY-14619 Decorative Transfers (Borders) 15x30cm",
    price: "10.80",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/0uphuqininn7hdlrbjf9y/PFY-14619_1.jpg?rlkey=ezxpq1b49m51q7zqltu0hu1rj&st=ibdafh0p&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/wc1zvjsgh49s0pzwu5znl/PFY-14619_2.jpg?rlkey=b9t9qxb3fhly0wg6b9aqgiioc&st=w5q5zz62&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/jq3i7ikkwp6cwj5p5jfps/PFY-14619_3.jpg?rlkey=ydlo4dba5wwyrx4psuiooi58v&st=hex0lqa9&dl=0",
    ],
    label: "15x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS,  muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1120,
    name: "PFY-14618 Decorative Transfers (Coffee) 15x30cm",
    price: "10.80",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/e5eonmvn2jjp4k7xab6ah/PFY-14618_1.jpg?rlkey=j58755ofm664bgrvz01mcknbd&st=txsf6obu&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/iihq24d2i84s0mfa2ggnj/PFY-14618_2.jpg?rlkey=xn045ayuwqxilkbkzopcr6p05&st=211m20qt&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/c73kxrmmtwkxb466mejbv/PFY-14618_3.jpg?rlkey=ofkq53m11u60nadejdb77jesj&st=bg1d2mhf&dl=0",
    ],
    label: "15x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS,  muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1121,
    name: "PFY-14617 Decorative Transfers (Poppy) 15x30cm",
    price: "10.80",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/skcz9udea9m7n6e2v07nm/PFY-14617_1.jpg?rlkey=qz84et93w8q6jkevmdrg21l3h&st=mbd52ztx&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/jfmqkajinbt0r94rav4t3/PFY-14617_2.jpg?rlkey=kwed4xw0l7mgeirznju32g25y&st=gjpk9ra2&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/3eekhcc4qml69l1ksqyf2/PFY-14617_3.jpg?rlkey=ypmuzvycyq843n8wzhmdw54g4&st=gtj68pxn&dl=0",
    ],
    label: "15x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS,  muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1122,
    name: "PFY-14782 Decorative Transfers (Sweet Baby Boy) 15x30cm",
    price: "10.80",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/9dqpsd1rskuaoxxo5y14d/PFY-14782_1.jpg?rlkey=gdx8svfhh3h8ewjyoakt15mbt&st=6pjacg3p&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/p3qqvvqizvd81uktcc4cv/PFY-14782_2.jpg?rlkey=h3u3idvvnfjpweqkpiohvnyoo&st=12gtv94q&dl=0",
    ],
    label: "15x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS,  muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1123,
    name: "PFY-14781 Decorative Transfers (Sweet Baby Girl) 15x30cm",
    price: "10.80",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/l9hkc2f0rjzr74gl2ahwu/PFY-14781_1.jpg?rlkey=fa9x262i5hkf0fg22h75ck6p4&st=a581dve2&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/cf0q52466hc9zorjmo4pc/PFY-14781_2.jpg?rlkey=klie89uyckfvc6tsdykhi3vh1&st=efz3bwc9&dl=0",
    ],
    label: "15x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS,  muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1124,
    name: "PFY-14779 Decorative Transfers (Abstract Art) 15x30cm",
    price: "10.80",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/mg51dovt1zhvlekf0gc94/PFY-14779_1.jpg?rlkey=g5fc1mvwztqbgu3wbgp4ne5z2&st=gqm5n0jb&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/82g70peqntwck1wpqwm9n/PFY-14779_2.jpg?rlkey=qd3ba8xlro4qjxif2dqkeu98l&st=994kspua&dl=0",
    ],
    label: "15x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS,  muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1125,
    name: "PFY-14778 Decorative Transfers (Bikes) 15x30cm",
    price: "10.80",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/j4xn9pmkd8fofsmoj84cv/PFY-14778_1.jpg?rlkey=mxuo13dnxb50osqk8obaaefwi&st=y2t1gggx&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/ishtof9vgbgrarqgl1p43/PFY-14778_2.jpg?rlkey=uw7nfezl0zmpofff8potlnjc9&st=bbb5zvw0&dl=0",
    ],
    label: "15x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS,  muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1126,
    name: "PFY-14777 Decorative Transfers (Grapes) 15x30cm",
    price: "10.80",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/gxcm17b3qxbhi7x4px09k/PFY-14777_1.jpg?rlkey=0sdqf063wsiwv5mi2v64o4koz&st=ez4d0xp9&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/qg6mb8f5j2dned893q00w/PFY-14777_2.jpg?rlkey=eqb4soce0qqlhj8ly6m152ixk&st=ifmdrnfd&dl=0",
    ],
    label: "15x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS,  muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1127,
    name: "PFY-14776 Decorative Transfers (Lemon) 15x30cm",
    price: "10.80",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/7da8ckrzlf9hz23qrzhiq/PFY-14776_1.jpg?rlkey=0tmqhjxbu5yr7cj4ntucha6np&st=eelhtjrw&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/zpqhs0ymkcsugqlkr413m/PFY-14776_2.jpg?rlkey=276onibt8wacpyfztk97pynv5&st=16kl03o6&dl=0",
    ],
    label: "15x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS,  muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1128,
    name: "PFY-14775 Decorative Transfers (Sunflowers) 15x30cm",
    price: "10.80",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/zvae1nh12qemo5ma7i4xl/PFY-14775_1.jpg?rlkey=5xuhn5da1a8m0ikhi3yjmkgja&st=1u0nug9l&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/qpcl99fc3ug2ljiv8sxhl/PFY-14775_2.jpg?rlkey=jmn5px30k0grfl0l5yoooq65q&st=ggpc85uf&dl=0",
    ],
    label: "15x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS,  muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1129,
    name: "PFY-14774 Decorative Transfers (Tulips) 15x30cm",
    price: "10.80",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/yj5lk57nivx742aa0u0s1/PFY-14774_1.jpg?rlkey=0ikw68ppknd5e2y2ejse5eg3q&st=vff4qexf&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/74xn8cxrgshbi2n3sig1r/PFY-14774_2.jpg?rlkey=l9au864qhwfbldhdiuhhd6rnn&st=5l7n3hmi&dl=0",
    ],
    label: "15x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS,  muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1130,
    name: "PFY-14773 Decorative Transfers (Lilacs) 15x30cm",
    price: "10.80",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/qx9i43usxzdi8awzwpecc/PFY-14773_1.jpg?rlkey=gmxpcglzyufpi9ndwu9wx2h9b&st=feptsrq9&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/xe0mz74x028fixwi2xs12/PFY-14773_2.jpg?rlkey=h6q9wxd9bmsucx08qsmz2viki&st=t63bvjup&dl=0",
    ],
    label: "15x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS,  muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1131,
    name: "PFY-14772 Decorative Transfers (Rosé) 15x30cm",
    price: "10.80",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/o6anlrtsfoyoxv29egxlb/PFY-14772_1.jpg?rlkey=vv5uaycxfymh9ubzj7v9n8qtc&st=hnz0uc8a&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/l2nddddhp6jwnz0sn0dkd/PFY-14772_2.jpg?rlkey=g9jt85ejrpykkl65jtfzy0ki9&st=ejqkl39c&dl=0",
    ],
    label: "15x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS,  muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1132,
    name: "PFY-14771 Decorative Transfers (Calla Lily) 15x30cm",
    price: "10.80",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/li0qhj4jdllwm4to2uj6s/PFY-14771_1.jpg?rlkey=whx77q1afp674qexrr8ouff0e&st=8hiyxwgu&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/tffmbsl6b68g83nvomzta/PFY-14771_2.jpg?rlkey=pc46zog9pylk7bh2p7m5d5n2m&st=dtwulz1e&dl=0",
    ],
    label: "15x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS,  muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1133,
    name: "PFY-14769 Decorative Transfers (Dahlias) 15x30cm",
    price: "10.80",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/glqmqu26cncxjhs5rxsxa/PFY-14769_1.jpg?rlkey=m9szvjxi2t8s901mc7u99etmc&st=7v4dvvpk&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/ia14q1o32l1lprczoeq0j/PFY-14769_2.jpg?rlkey=i6y2qyhtn1qff1yb28wfc625l&st=hjqb8ejz&dl=0",
    ],
    label: "15x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS,  muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1134,
    name: "PFY-14768 Decorative Transfers (Daisies) 15x30cm",
    price: "10.80",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/7a8uaclewjo2ixwhay3hq/PFY-14768_1.jpg?rlkey=pe738jr0robl6669ptginhlup&st=j2a1r51g&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/6dsbbnol1sdtlg61u2173/PFY-14768_2.jpg?rlkey=9o36zybyyfq2xblblmsl9k7hz&st=zmsjgsug&dl=0",
    ],
    label: "15x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS,  muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1135,
    name: "PFY-14767 Decorative Transfers (Hydrangeas) 15x30cm",
    price: "10.80",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/izh0sco0d0hhnvh8q4rpm/PFY-14767_1.jpg?rlkey=ti8xfde9hv1odue0zj839lrzh&st=rppoxgak&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/hizy4nmyao6tru4uyqxfd/PFY-14767_2.jpg?rlkey=2sivpgp2zlc0ozs3pn52vjpby&st=mib36ip0&dl=0",
    ],
    label: "15x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS,  muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1136,
    name: "PFY-14766 Decorative Transfers (Peonies) 15x30cm",
    price: "10.80",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/qosls6h8is6urm6ydwdbi/PFY-14766_1.jpg?rlkey=8s8zhvk6hez5g6tf3ga2twwl7&st=er7jljzj&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/v45ap3u8vpk6lzk14oakh/PFY-14766_2.jpg?rlkey=hawh8f3x85n7kxp1uul6pgf66&st=tl7ojfht&dl=0",
    ],
    label: "15x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS,  muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1137,
    name: "PFY-14765 Decorative Transfers (Roses) 15x30cm",
    price: "10.80",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/klau8kdl2nhm3nsqdth7q/PFY-14765_1.jpg?rlkey=pgniputjwklicf5aljtw7258c&st=l3fu7f1w&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/yiwzc4hqsgnztgumsneie/PFY-14765_2.jpg?rlkey=p8cyljmted0atafrleoipm49b&st=t5lhalj5&dl=0",
    ],
    label: "15x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS,  muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1138,
    name: "PFY-14764 Decorative Transfers (Magnolias) 15x30cm",
    price: "10.80",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/xts7h2x95qdlsx2s38a34/PFY-14764_1.jpg?rlkey=m1h0aaii5pw3c12v3t3dqkco9&st=gldk5tj2&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/9195l2i3snrce9mna8zgz/PFY-14764_2.jpg?rlkey=uolsvkdlr1s7ip9a3ubfm88xf&st=99xdm42d&dl=0",
    ],
    label: "15x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS,  muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1139,
    name: "PFY-15432 Decorative Transfers (Santa & Friends) 20x30cm",
    price: "10.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/8zl28ck83ufl681zjoj9x/PFY-15432_1.jpg?rlkey=tghkvan4epumyaxgxqagqqxjg&st=fpczjtix&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/bzqqkoa0dxui1mu2mowvy/PFY-15432_2.jpg?rlkey=qkz2he26t1fhmh9zbc1uyx9w7&st=0kp0bgrv&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/6hbf1c4ngbrzs5kfzspyg/PFY-15432_3.jpg?rlkey=itd0vwg486hyfijj98m1u9yj3&st=36p4d0e6&dl=0",
    ],
    label: "20x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS,  muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1140,
    name: "PFY-15365 Decorative Transfers (Sweet December) 20x30cm",
    price: "10.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/5a9ctpa49zt1a19w9crkv/PFY-15365_1.jpg?rlkey=pnvcp96r0x8pj1ai33s74rqe3&st=llublyxg&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/wcanw8y6mbr4eaxt1tkxe/PFY-15365_2.jpg?rlkey=w4u119yrly22qipwetvm79yma&st=tusyhk32&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/84dwetv47bgyw7gy8gpcq/PFY-15365_3.jpg?rlkey=t59u7lv7jhalm8kmgd8rgkaxk&st=fhi0gzc3&dl=0",
    ],
    label: "20x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS,  muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1141,
    name: "PFY-15198 Decorative Transfers (Santa's Workshop) 20x30cm",
    price: "10.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/9epuixx2pw6vhe79mty57/PFY-15198_1.jpg?rlkey=mvuksp7p7gjcwx3qnes5mdrsz&st=6v6au0wg&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/ud5n7nvb0b78dtlrq0hn6/PFY-15198_2.jpg?rlkey=slbwdcshokbks9uah6upq6w1f&st=uwr624g3&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/yvthr59ybg4y5vds7zn1e/PFY-15198_3.jpg?rlkey=otb2e77znhztm1drxl39vd2xg&st=yghincql&dl=0",
    ],
    label: "20x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS,  muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1142,
    name: "PFY-14645 Decorative Transfers (Scooter II) 20x30cm",
    price: "10.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/anpkm2vyzrc4o9j7zo9nw/PFY-14645_1.jpg?rlkey=s7ocbjq9koul3tb2omplr5bzy&st=t1hh30xi&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/1ksciakzjexaj1rqau1nx/PFY-14645_2.jpg?rlkey=0fo4c8g7147bwykicdkjtj5ch&st=gdjzud0i&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/ub4phee6cycgclzy958xk/PFY-14645_3.jpg?rlkey=2u8mao1hweianh80qaoqf5e0y&st=ntlss3le&dl=0",
    ],
    label: "20x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS,  muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1143,
    name: "PFY-14644 Decorative Transfers (Scooter) 20x30cm",
    price: "10.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/qvx5mp2ybjjgtbtbwnw3f/PFY-14644_1.jpg?rlkey=vs0aocdqslfhieqg1y7m9jbim&st=un3i18na&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/pdjocgoosaeeq5693foq8/PFY-14644_2.jpg?rlkey=7z0ah0yfase7k6gcvrqpqhphi&st=hcgsaj20&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/5vutfe4tbmjq4c6zmus55/PFY-14644_3.jpg?rlkey=ybhi7qhmi9iwtet38m4h90clf&st=863q2ce6&dl=0",
    ],
    label: "20x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS,  muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1144,
    name: "PFY-14643 Decorative Transfers (Tea) 20x30cm",
    price: "10.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/l8wfkjxmw1zxjio6pm8ib/PFY-14643_1.jpg?rlkey=1pe9rlbp5iauzxpnbkb2s3uak&st=h1r5k8mv&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/os8o8h34q7evc0n9o2jbx/PFY-14643_2.jpg?rlkey=rltpqxi3pmjecvcgkn6xb0d8u&st=lhs3r1f9&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/jr4jrux4ozrbnafujslrb/PFY-14643_3.jpg?rlkey=haybwzp6aixct2eyszddvfn58&st=hrtgjxe6&dl=0",
    ],
    label: "20x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS,  muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1145,
    name: "PFY-14642 Decorative Transfers (Blushrooms) 20x30cm",
    price: "10.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/a8zpebpgeu0r8cs8cmi22/PFY-14642_1.jpg?rlkey=7731yo83nw5o2247w4fh80zm6&st=dkm5icym&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/2f7haf00sfb828znwd7ek/PFY-14642_2.jpg?rlkey=cl5h0dc7l33tx89m51zkrr6lx&st=o4ei1yku&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/1b8uykapz5i02io68dkfg/PFY-14642_3.jpg?rlkey=nrbkt8rl30lqfz51l6dzgbtm1&st=yz54092e&dl=0",
    ],
    label: "20x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS,  muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1146,
    name: "PFY-14641 Decorative Transfers (Pinky Roses) 20x30cm",
    price: "10.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/g1xhxocd6pt802y7jnzqu/PFY-14641_1.jpg?rlkey=efevzo7f5wdopok1i05j3bsvi&st=xw1bcxc1&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/2t321bzbr5c7t9npub63s/PFY-14641_2.jpg?rlkey=3hbxze5ndygicy0oj0639wxav&st=kkv8lujr&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/fgfbtwwdl7bwagajnbdhj/PFY-14641_3.jpg?rlkey=wh1b50vkzjta4wbqb0kxiebwh&st=8s8sg2h0&dl=0",
    ],
    label: "20x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS,  muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1147,
    name: "PFY-14639 Decorative Transfers (Pink Orchid) 20x30cm",
    price: "10.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/f1ouiyxdertpv1tg75fs8/PFY-14639_1.jpg?rlkey=gs8e1yu0s5insp9xniajw2od8&st=bc468kaw&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/8m991ikss6qt92gqepefb/PFY-14639_2.jpg?rlkey=qskzjwv67rjrq6ezfibg0hjoz&st=4ss7ha7u&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/dn2oo4kh49f85izomgsw7/PFY-14639_3.jpg?rlkey=tt8mnpjppaozv2xhp4xldhb9r&st=we5yjzna&dl=0",
    ],
    label: "20x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS,  muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1148,
    name: "PFY-14638 Decorative Transfers (White Orchid) 20x30cm",
    price: "10.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/hfeoefm8enhunnmp7jnjg/PFY-14638_1.jpg?rlkey=e32j32vw5o4o4tkypyg7699re&st=rvymmhju&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/qj5rm69y6e5kpv0uhjdox/PFY-14638_2.jpg?rlkey=mpuqz04n2r131aodgp0aayukz&st=cjcuf2as&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/iuakfc3mdkcv6q88sz7d6/PFY-14638_3.jpg?rlkey=opvgzaga1z335y8qqqejh7nav&st=emmjs5yx&dl=0",
    ],
    label: "20x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS,  muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1149,
    name: "PFY-14637 Decorative Transfers (Maritim) 20x30cm",
    price: "10.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/49lsuf45bsjyic11l53y6/PFY-14637_1.jpg?rlkey=y7giyco26so1qaebmirj50ndo&st=9sqicent&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/ipqc95a2arch3afc7z02h/PFY-14637_2.jpg?rlkey=2ekdikgpcki3dzc27bvt6f8x7&st=siqv96hg&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/d66m5in0xta85e2bsgtm3/PFY-14637_3.jpg?rlkey=c550cq6r0p0asl4d9uzie6n27&st=ywg3yi92&dl=0",
    ],
    label: "20x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS,  muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1150,
    name: "PFY-14636 Decorative Transfers (Bugs) 20x30cm",
    price: "10.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/qv37bfemz1dwjsv6itkfa/PFY-14636_1.jpg?rlkey=cxc0mikshxojfpv1vvm4i4rpo&st=57iluzac&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/f8dh0cbttjqcibzfs44kd/PFY-14636_2.jpg?rlkey=k95d3qtp8ck35bx7hx4ns95s0&st=f22yhhq4&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/46aw6dyf7ycprkz2tfc32/PFY-14636_3.jpg?rlkey=o2rxqsmujmh8zm3w66kic31gm&st=4g1hpcxe&dl=0",
    ],
    label: "20x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS,  muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1151,
    name: "PFY-14635 Decorative Transfers (Sewing) 20x30cm",
    price: "10.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/p6abfc9w9otfddajvta1w/PFY-14635_1.jpg?rlkey=21gidq5rz1e884ru74nuzwm9d&st=gm7s2dae&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/b0vt7787y62cwdo380vit/PFY-14635_2.jpg?rlkey=xcf7un8f9q85868ayphwu9knb&st=1ehgaa62&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/6k7p5219owgj5o13yttjj/PFY-14635_3.jpg?rlkey=qkwmb8jv6e4a1n8hn1doqmcqk&st=4a6ddhl2&dl=0",
    ],
    label: "20x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS,  muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1152,
    name: "PFY-14634 Decorative Transfers (Borders) 20x30cm",
    price: "10.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/qqa1enqank3ordgvalifh/PFY-14634_1.jpg?rlkey=eb228evsrvvnter7yl74ehl4m&st=5axv9tih&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/2qzy0ele655snkt3djn0a/PFY-14634_2.jpg?rlkey=e1bfc4pkyzb08m5v6vb9hy05n&st=83l4mi0q&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/qq17254q50137d7rp2r79/PFY-14634_3.jpg?rlkey=aetbncjg5xdqfuogcy0mp06yc&st=zmfh0aq2&dl=0",
    ],
    label: "20x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS,  muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1153,
    name: "PFY-14633 Decorative Transfers (Coffee) 20x30cm",
    price: "10.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/tjaw30wlpgkbv45xcfqou/PFY-14633_1.jpg?rlkey=ow4zyee1b6s19c709pe7v2qgj&st=x1o1y7kl&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/h8fwvy34c8b1jsqij9yac/PFY-14633_2.jpg?rlkey=v0ul5p1w3evpa0rs6cqe055ao&st=g4ra2197&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/u67rxa9xa2eqn7k9ovmhb/PFY-14633_3.jpg?rlkey=a1p3oop2jtrbq24f7bpg832jn&st=4koxblyp&dl=0",
    ],
    label: "20x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS,  muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1154,
    name: "PFY-14632 Decorative Transfers (Poppy) 20x30cm",
    price: "10.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/5gcqz4e5f017hooe3du6t/PFY-14632_1.jpg?rlkey=c3506qqoit2v3eomwu1u1hemu&st=m4psuu36&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/gyrguzj47lc5jil6neher/PFY-14632_2.jpg?rlkey=c8jqjrlspaa31ey436f3tnrw9&st=20qo067w&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/brqj00gkfzelzd9sx46x0/PFY-14632_3.jpg?rlkey=tzi9oum2q2drbx4ikzq6tyure&st=4ithflkd&dl=0",
    ],
    label: "20x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS,  muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1155,
    name: "PFY-14819 Decorative Transfers (Sweet Baby Boy) 20x30cm",
    price: "10.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/g4ymu5v3c12ax9xsc7fm3/PFY-14819_1.jpg?rlkey=h94ppb7zalcok6vm9aypbuo1r&st=cad4w6a0&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/g4ymu5v3c12ax9xsc7fm3/PFY-14819_1.jpg?rlkey=h94ppb7zalcok6vm9aypbuo1r&st=cad4w6a0&dl=0",
    ],
    label: "20x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS,  muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1156,
    name: "PFY-14818 Decorative Transfers (Sweet Baby Girl) 20x30cm",
    price: "10.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/xx4wza1yfjdxgfzunjc9p/PFY-14818_1.jpg?rlkey=z4hhal8f6l1u8hw182ghmfwbr&st=4xp6c7i3&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/8q8k5gfdi9r5j0x9fyfks/PFY-14818_2.jpg?rlkey=kqtanmm6tilyx045818vt5914&st=84wwp9ga&dl=0",
    ],
    label: "20x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS,  muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1157,
    name: "PFY-14817 Decorative Transfers (Abstract Art) 20x30cm",
    price: "10.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/lyndb55gdse5hhg3oimmr/PFY-14817_1.jpg?rlkey=ko1he0smrdaqi2n0gwxf84h01&st=sz6loxlz&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/wy8znnoufauaew2tjrand/PFY-14817_2.jpg?rlkey=hmhvg712hk2expvknsefpbmo4&st=zpzsxqvr&dl=0",
    ],
    label: "20x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS,  muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1158,
    name: "PFY-14816 Decorative Transfers (Bikes) 20x30cm",
    price: "10.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/hg3xx98bhn4qvs7vmbnzz/PFY-14816_1.jpg?rlkey=0zu4dl8oqoiaq5l38ehsh3p3c&st=td9ptzz0&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/u1xrmz639sejwoomwihjy/PFY-14816_2.jpg?rlkey=wbmyff6ska6s80ea3n0u2a5ka&st=vuivhucx&dl=0",
    ],
    label: "20x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS,  muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1159,
    name: "PFY-14815 Decorative Transfers (Grapes) 20x30cm",
    price: "10.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/sshycgg4xz1k7zn4al3k4/PFY-14815_1.jpg?rlkey=z8726jqbvgoqxueeyujdb5edv&st=yc3zufe0&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/oysodw6hq1cfqiml0k35m/PFY-14815_2.jpg?rlkey=wdwv596w76m449g56mm2e8nsv&st=oaazn8yi&dl=0",
    ],
    label: "20x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS,  muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1160,
    name: "PFY-14814 Decorative Transfers (Lemon) 20x30cm",
    price: "10.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/2qgxthhh2xq7n88nn6tuh/PFY-14814_1.jpg?rlkey=xct4kz33wb8npqbttbbv5om3u&st=3kuhjwhb&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/etfmdv0f5aiqyncj424oa/PFY-14814_2.jpg?rlkey=hyaiojmd8jtazt1eu7g7z4ln2&st=vnatyldz&dl=0",
    ],
    label: "20x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS,  muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1161,
    name: "PFY-14813 Decorative Transfers (Sunflowers) 20x30cm",
    price: "10.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/n55th1urq0u9tl4io71lk/PFY-14813_1.jpg?rlkey=skushsh8gua94138s5a3kqcs5&st=p665eib3&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/hunh6la9co424qvrg0sat/PFY-14813_2.jpg?rlkey=6gpc6lw99vefyzxi3jtgb16ex&st=bpggiy39&dl=0",
    ],
    label: "20x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS,  muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1162,
    name: "PFY-14812 Decorative Transfers (Tulips) 20x30cm",
    price: "10.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/w79e88foqqv01mmgi9382/PFY-14812_1.jpg?rlkey=h9d9j9x0jfus5ckywnfvemdbl&st=lai8v14r&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/735jlpf6pn8ikbsivh1rd/PFY-14812_2.jpg?rlkey=bkearav4xotm2ycirsxsywi0l&st=rajkvyht&dl=0",
    ],
    label: "20x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS,  muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1163,
    name: "PFY-14811 Decorative Transfers (Lilacs) 20x30cm",
    price: "10.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/eivvjl1xdn58hzj93mde8/PFY-14811_1.jpg?rlkey=lhr0n50lt4jafg0yv4vn3mmk8&st=jui5fth1&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/wdw9biifbjt196x1yq9xk/PFY-14811_2.jpg?rlkey=wyffxmtcvqx5qf5m3q12f8smo&st=svamgb01&dl=0",
    ],
    label: "20x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS,  muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1164,
    name: "PFY-14809 Decorative Transfers (Rosé) 20x30cm",
    price: "10.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/zfb1vt3zk50y4o39zevzq/PFY-14809_1.jpg?rlkey=alapj4vl9ytq1bjoktts4az7f&st=y5fgh0q8&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/w2l211m9zg5swnbe6n5s4/PFY-14809_2.jpg?rlkey=wmpn0o49s9ohpg5rah5v35bua&st=utwi24vo&dl=0",
    ],
    label: "20x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS,  muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1165,
    name: "PFY-14808 Decorative Transfers (Calla Lily) 20x30cm",
    price: "10.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/e586oqp3w3kpnht3pg6ny/PFY-14808_1.jpg?rlkey=wb1k54m194zg2dw6xcy22do9a&st=sbt3wr0j&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/85bewfm0uvk4t3p892ecb/PFY-14808_2.jpg?rlkey=ne9ekzpw0y312nvovk1gbi5f8&st=k8akdzci&dl=0",
    ],
    label: "20x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS,  muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1166,
    name: "PFY-14807 Decorative Transfers (Dahlias) 20x30cm",
    price: "10.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/elfkqbpq751s7xyp5wgoy/PFY-14807_1.jpg?rlkey=332o94ut7qsw9ijn0qn3q5q84&st=g7emym6m&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/h4mvxquj7flru6ajddgzi/PFY-14807_2.jpg?rlkey=55uhntakuipsxex84vc5rennh&st=gdxx1aco&dl=0",
    ],
    label: "20x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS,  muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1167,
    name: "PFY-14806 Decorative Transfers (Daisies) 20x30cm",
    price: "10.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/f369n0bjkqthyjdr3qpb2/PFY-14806_1.jpg?rlkey=75u30fejzqee5lxydkbaywmus&st=qkhzkfdg&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/hpn08w3v5wknvsx06tk99/PFY-14806_2.jpg?rlkey=db7wch6ce3kvl8t812wfiia0j&st=ef57hvc1&dl=0",
    ],
    label: "20x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS,  muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1168,
    name: "PFY-14805 Decorative Transfers (Hydrangeas) 20x30cm",
    price: "10.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/6rako46v3erikrqxrc5a9/PFY-14805_1.jpg?rlkey=ihrpuuykh3sty0h5ruiua7z1o&st=9aiememh&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/1g7wcy8rzc89kpgi1y27m/PFY-14805_2.jpg?rlkey=wt1a2je2j6p6ut6dv25u3afxl&st=talh2m5t&dl=0",
    ],
    label: "20x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS,  muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1169,
    name: "PFY-14804 Decorative Transfers (Peonies) 20x30cm",
    price: "10.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/f4g6nj7thnszj3t3z51nb/PFY-14804_1.jpg?rlkey=qff1njx0suvd0vpy7km789dxy&st=gyafzx2f&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/6xzam4ehma6jlyjzvy377/PFY-14804_2.jpg?rlkey=0se24v2sldofz6vlkh365voub&st=50uczjr2&dl=0",
    ],
    label: "20x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS,  muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1170,
    name: "PFY-14803 Decorative Transfers (Roses) 20x30cm",
    price: "10.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/69qt85j91ycl3iks9pwut/PFY-14803_1.jpg?rlkey=6y7rdyjhlo76s31gg14cb3c6x&st=x1m87wdu&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/hwpjjsm786ib09q24mjcg/PFY-14803_2.jpg?rlkey=opdjt5u48g7xmk2tm7sv7fyn6&st=m7fd0njo&dl=0",
    ],
    label: "20x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS,  muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1171,
    name: "PFY-14802 Decorative Transfers (Magnolias) 20x30cm",
    price: "10.90",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/xs4n7cwu2v7u4u6xl3y8w/PFY-14802_1.jpg?rlkey=revw609o4ar1ovyudcxdnnjv7&st=tvhpnu7w&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/xs4n7cwu2v7u4u6xl3y8w/PFY-14802_1.jpg?rlkey=revw609o4ar1ovyudcxdnnjv7&st=aic6pv0j&dl=0",
    ],
    label: "20x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS,  muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1172,
    name: "PFY-15433 Decorative Transfers (Santa & Friends) 30x30cm",
    price: "11.40",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/z9z0aidyu2twprlu1ekcd/PFY-15433_1.jpg?rlkey=qpoe5n90x7k2dlebtab1e235p&st=j9iszl41&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/p9zrtrc5ddwaqz7nnb7md/PFY-15433_2.jpg?rlkey=u0j79h41ttvbfoawzmsw4hfig&st=x23bunr2&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/cktuvhwrzkegw1bc54t6y/PFY-15433_3.jpg?rlkey=t05yfftad5c393mulw3diur3r&st=s7hzrwgk&dl=0",
    ],
    label: "30x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS,  muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },

  {
    id: 1173,
    name: "PFY-15366 Decorative Transfers (Sweet December) 30x30cm",
    price: "11.40",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/u8xp4ote8sjyb5lrxl2xx/PFY-15366_1.jpg?rlkey=r8qgq0c6zygac5g36drtn1i18&st=gcb6yltb&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/j5p0ln0fx36p2m8rqiuk0/PFY-15366_2.jpg?rlkey=z868j3z4uen71jn1cm1t6d2hw&st=k7qlknxp&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/6hy9mzi8o5n0y8t3gxge4/PFY-15366_3.jpg?rlkey=kxhevknsz1h2zgx9pqx5xuxup&st=hf33kch7&dl=0",
    ],
    label: "30x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS, muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1174,
    name: "PFY-15199 Decorative Transfers (Santa's Workshop) 30x30cm",
    price: "11.40",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/py6b989ye24qhnqnl0utt/PFY-15199_1.jpg?rlkey=nor1sq889dh1in92374am1z5e&st=lq0x8ndd&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/3huwu7rauxdxc7tz0alj3/PFY-15199_2.jpg?rlkey=yazze1wz2xy4lmw1w7jq2sbf3&st=vyiy2sog&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/w2dr3z09kk9i8m5h52tlz/PFY-15199_3.jpg?rlkey=vtkug69zvanyqahmdbaa4nrxz&st=seflr0n3&dl=0",
    ],
    label: "30x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS, muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1175,
    name: "PFY-14659 Decorative Transfers (Scooter II) 30x30cm",
    price: "11.40",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/ftz8jkfcdy2h26y4zs324/PFY-14659_1.jpg?rlkey=hkaokf47xxa5lyaj7ptla0r1a&st=e83lbsvq&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/qs32fg93nnc4wle8llmyj/PFY-14659_2.jpg?rlkey=rm4tstqka2cne31fqp5hyhzaz&st=ppoh1chj&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/0trpe9igqh26df8etn9hd/PFY-14659_3.jpg?rlkey=t4a2zl43h9y12btq3vw9s45y8&st=v3laxn81&dl=0",
    ],
    label: "30x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS, muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1176,
    name: "PFY-14658 Decorative Transfers (Scooter) 30x30cm",
    price: "11.40",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/y1om02szgbiznpqyen6mm/PFY-14658_1.jpg?rlkey=d4ckh471ymmxnctyih0sjyczy&st=d2k7hq27&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/w1xr8nch6sy8m1lif2w0r/PFY-14658_2.jpg?rlkey=dwjpynrjlk40jh081a6da3jwn&st=luzi0ah8&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/p6iaqgq99xis8z4ingzmi/PFY-14658_3.jpg?rlkey=5u6587j03fatlmw3k2yjhwjdr&st=mzln28i8&dl=0",
    ],
    label: "30x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS, muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1177,
    name: "PFY-14657 Decorative Transfers (Tea) 30x30cm",
    price: "11.40",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/rfjr4wg1vooz18z09om7n/PFY-14657_1.jpg?rlkey=1wc2ej5ow5gtkpcjs3m505u7j&st=7ews4276&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/gsua1hkh32afapqjswzn7/PFY-14657_2.jpg?rlkey=flak05qxlhgagkkt2h1e2i94z&st=9zc2f7u9&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/r3pxvnrobntivjvui6vwh/PFY-14657_3.jpg?rlkey=1dzm5bv0ujfdal18k2t4588e0&st=sow5eba2&dl=0",
    ],
    label: "30x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS, muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1178,
    name: "PFY-14656 Decorative Transfers (Blushrooms) 30x30cm",
    price: "11.40",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/xajqnfnsd4nhyeesgw33i/PFY-14656_1.jpg?rlkey=e79yela6dfwvth2at63anfiex&st=1d16t34a&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/aan9yeq9giotagnff92vf/PFY-14656_2.jpg?rlkey=x757zh5zekjwxxcue1npvyri1&st=il2eo3q7&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/heyz0r6qn7dk9e201z359/PFY-14656_3.jpg?rlkey=uvoex2zcc2qu6aumekoiisdla&st=3xus3hly&dl=0",
    ],
    label: "30x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS, muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1179,
    name: "PFY-14655 Decorative Transfers (Pinky Roses) 30x30cm",
    price: "11.40",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/hqcl4uj6y0l2bgzaswt0v/PFY-14655_1.jpg?rlkey=dmms15tz1gqn5il98087sb4v9&st=7l2sochn&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/7f9or698mbzfa7cp7hycb/PFY-14655_2.jpg?rlkey=pfdgbhfdczg3hznadd6a9pcl6&st=trcajji0&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/a1csay2p9603w0hb5yjtw/PFY-14655_3.jpg?rlkey=q3cos53cbg0xkdqcw5m58gbnh&st=79p7hdvl&dl=0",
    ],
    label: "30x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS, muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1180,
    name: "PFY-14654 Decorative Transfers (Pink Orchid) 30x30cm",
    price: "11.40",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/jni4q7m8dh7ncxhlg2zge/PFY-14654_1.jpg?rlkey=ry7isemvc18zaw7tmq1pxsqt6&st=ufwvfk0w&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/cclf7ieie8t2zgm0zeiqe/PFY-14654_2.jpg?rlkey=7jor65w0ofroa3bz349hx3xhv&st=2ebip3a4&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/z8c483o112xmolj4xfp8p/PFY-14654_3.jpg?rlkey=2c199mn6c3oc5nn3if7f7vw06&st=n3m3k24o&dl=0",
    ],
    label: "30x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS, muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1181,
    name: "PFY-14653 Decorative Transfers (White Orchid) 30x30cm",
    price: "11.40",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/c7skn135l58clj1e88j5f/PFY-14653_1.jpg?rlkey=xmfgpzxqcsvh5a9mtuk3x6gim&st=41hlz628&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/a5kei9dzzkz7a787fojz9/PFY-14653_2.jpg?rlkey=0blh9wbx56ao4kdwkvxn7pmxp&st=d7cjyudd&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/ck4tzv01d3fvsj6uh45qk/PFY-14653_3.jpg?rlkey=81qzz7iurg6p0hhdqyed383p7&st=e9rfgkcm&dl=0",
    ],
    label: "30x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS, muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1182,
    name: "PFY-14652 Decorative Transfers (Maritim) 30x30cm",
    price: "11.40",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/5xw1ynf4nuf779fenofj2/PFY-14652_1.jpg?rlkey=h8t81t3mwyly7ggdnwny3hnr7&st=nq47hl6l&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/9ittbu6ommgom2yl1t3wp/PFY-14652_2.jpg?rlkey=kje8vbn0agqvugdl9k97cuc83&st=sgqq1szi&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/wz9sv3od8x5atxqey29sy/PFY-14652_3.jpg?rlkey=vc11uldrx0i4uiypcjbgrqakn&st=b0jvgp03&dl=0",
    ],
    label: "30x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS, muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1183,
    name: "PFY-14651 Decorative Transfers (Bugs) 30x30cm",
    price: "11.40",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/lhz3xp4v8d2sigk3isg1r/PFY-14651_1.jpg?rlkey=ai5o1f3wsm23naddkmtbdcvah&st=a6zg1j9g&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/5pyr3t59axwen1f3d4txp/PFY-14651_2.jpg?rlkey=n6qm5mh0riiqjn2h87xz5kp0x&st=jfuswpbx&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/d05oicmcnuum4qzhyq1uf/PFY-14651_3.jpg?rlkey=efujkmxv8e3daspjpfnm31kk2&st=097w8wex&dl=0",
    ],
    label: "30x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS, muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1184,
    name: "PFY-14649 Decorative Transfers (Sewing) 30x30cm",
    price: "11.40",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/4c7nq7xjs3be91695rm4x/PFY-14649_1.jpg?rlkey=12jlrfisqykqdp5bvucjgi2zo&st=9mep5gpv&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/cjq2amubg8nqfpdpdg9es/PFY-14649_2.jpg?rlkey=o2l2j9lbz8t8a9gjwdfh5am7d&st=kss8zmjy&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/eqprdokyal9idizohb38u/PFY-14649_3.jpg?rlkey=pljagxwfcyosb0ts8a7i2l681&st=8606s3o8&dl=0",
    ],
    label: "30x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS, muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1185,
    name: "PFY-14648 Decorative Transfers (Borders) 30x30cm",
    price: "11.40",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/jahjtty1owl5yyns53ao3/PFY-14648_1.jpg?rlkey=dma62tcwblha6q7u23xgi56k9&st=6zoe2ew7&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/z988h4b5o1ctf0g98v4u8/PFY-14648_2.jpg?rlkey=cmqs6dyj2kct7mq9mp7oos86i&st=4i42dnyq&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/3ja9ge7bg4dt1t5up1asl/PFY-14648_3.jpg?rlkey=kb44k0n3k1c05va3vky5jwmbx&st=h490w9fw&dl=0",
    ],
    label: "30x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS, muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1186,
    name: "PFY-14647 Decorative Transfers (Coffee) 30x30cm",
    price: "11.40",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/p5duxt740btc18way9xsl/PFY-14647_1.jpg?rlkey=gnfkk4cyoimpx2zwzjksbs6cf&st=ib736oue&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/bs726ll627c6mdlcapfnk/PFY-14647_2.jpg?rlkey=gj9dolmgwqanm9ecyto6d099c&st=nhuqmkhc&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/7m4hn270og6kuyjejwoix/PFY-14647_3.jpg?rlkey=tuog3ocg8iiainzqhgixhl4hf&st=r9znuo1h&dl=0",
    ],
    label: "30x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS, muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1187,
    name: "PFY-14646 Decorative Transfers (Poppy) 30x30cm",
    price: "11.40",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/709cgtwj6389cqtg6ro0p/PFY-14646_1.jpg?rlkey=m5hj3m5hol2k4kr6o566j9wn9&st=gku7monm&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/d78hxxo662f7zofiq8mvh/PFY-14646_2.jpg?rlkey=j2v7enshzcoo80lfjjazlisbg&st=9ujieism&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/xtf2ls7rc6pyg9uq01tc1/PFY-14646_3.jpg?rlkey=3v6igy3olwh72nzetahr5yzta&st=9e0bv8ue&dl=0",
    ],
    label: "30x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS, muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1188,
    name: "PFY-14801 Decorative Transfers (Sweet Baby Boy) 30x30cm",
    price: "11.40",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/msw3otyvmn5e42yqd8w03/PFY-14801_1.jpg?rlkey=y5nepolhm1wzn5iicq1qt7fk9&st=6vgfo3dq&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/a64hwrx9xaurswyhgfai4/PFY-14801_2.jpg?rlkey=xwsgp0n1j4yb3a7x59bfjtfuv&st=wn90y7bk&dl=0",
    ],
    label: "30x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS, muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1189,
    name: "PFY-14799 Decorative Transfers (Sweet Baby Girl) 30x30cm",
    price: "11.40",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/vm6x5dtm7lsw2xhlk3rgh/PFY-14799_1.jpg?rlkey=dkyyx9xqu29azrrcrvzou1x1i&st=asaw9uw7&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/2zosgrqyhgcaninqc0ye9/PFY-14799_2.jpg?rlkey=w50d3n1sc0nqwh9n7b8iewpnu&st=xjiek56b&dl=0",
    ],
    label: "30x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS, muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1190,
    name: "PFY-14798 Decorative Transfers (Abstract Art) 30x30cm",
    price: "11.40",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/tryflrk0on8l1fc40qdgx/PFY-14798_1.jpg?rlkey=4g5drsva5hgpnhfjix7lqwso4&st=dx7p3fvj&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/ac4rql75d69tk0z14xnee/PFY-14798_2.jpg?rlkey=6j1fry45mtkoyv0ic17rsgfi9&st=kijju8kl&dl=0",
    ],
    label: "30x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS, muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1191,
    name: "PFY-14797 Decorative Transfers (Bikes) 30x30cm",
    price: "11.40",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/9zbx9h9ppiod22gdv7qfl/PFY-14797_1.jpg?rlkey=6tdmfu17v9e50wujk29par44e&st=u4c1yqe9&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/n8yeu4olao32ztsxieq6p/PFY-14797_2.jpg?rlkey=iez4vw8vrw9z2kpbmyx8zg49a&st=zm797tjs&dl=0",
    ],
    label: "30x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS, muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1192,
    name: "PFY-14796 Decorative Transfers (Grapes) 30x30cm",
    price: "11.40",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/j5fi54lhyl8rkx50ao4b2/PFY-14796_1.jpg?rlkey=45vudjja9uy30xtxa6ir8q03c&st=ju5knxmq&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/y7uqby0vcncaana02cg9b/PFY-14796_2.jpg?rlkey=vh67hh9xek2dycqg3ls06kyvz&st=ytwo0pp1&dl=0",
    ],
    label: "30x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS, muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1193,
    name: "PFY-14795 Decorative Transfers (Lemon) 30x30cm",
    price: "11.40",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/bcqvpflk9em95rj3adlxp/PFY-14795_1.jpg?rlkey=3hbcioc9fd7twmbjpfq201n8o&st=zezumynv&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/nxrfl9t5rq4lpijxptob7/PFY-14795_2.jpg?rlkey=iwf94rx2wvwey5lkq90sgjk6d&st=8425zcd5&dl=0",
    ],
    label: "30x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS, muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1194,
    name: "PFY-14794 Decorative Transfers (Sunflowers) 30x30cm",
    price: "11.40",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/qlk5d8sxc7irne6g90mrc/PFY-14794_1.jpg?rlkey=q5grp39jldmhq72yyxytryo3w&st=991koupo&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/jdut9j4rpu375igf3vdg2/PFY-14794_2.jpg?rlkey=ovn73gsei9euegjc2gbrt95ew&st=giszs817&dl=0",
    ],
    label: "30x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS, muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1195,
    name: "PFY-14793 Decorative Transfers (Tulips) 30x30cm",
    price: "11.40",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/pjglxygzsrbgpgqbrhyja/PFY-14793_1.jpg?rlkey=zqpqvv9awbd509rr17urywv65&st=3ap7dsyr&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/abfn2xpfx7s1hafc1paos/PFY-14793_2.jpg?rlkey=12j4a655x7s0dumzljargl4u9&st=t9lum4xe&dl=0",
    ],
    label: "30x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS, muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1196,
    name: "PFY-14792 Decorative Transfers (Lilacs) 30x30cm",
    price: "11.40",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/o403cyhy74b5ef4rtvicc/PFY-14792_1.jpg?rlkey=9eepolb52evklzfm3474cmazg&st=g88zsv69&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/liupyfrmwxa85eg7w072p/PFY-14792_2.jpg?rlkey=eput9iypbsdxupuu8ri392vku&st=4ye88mas&dl=0",
    ],
    label: "30x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS, muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1197,
    name: "PFY-14791 Decorative Transfers (Rosé) 30x30cm",
    price: "11.40",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/owhcpk9bbslq851gu5gtf/PFY-14791_1.jpg?rlkey=prlosh6cl2jhp3ibv06852fsb&st=rdo1ihon&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/loc97045nvz3kj1ymxjo7/PFY-14791_2.jpg?rlkey=qtbal41q11v4oq0cn9bet2a6v&st=qaipcy70&dl=0",
    ],
    label: "30x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS, muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1198,
    name: "PFY-14789 Decorative Transfers (Calla Lily) 30x30cm",
    price: "11.40",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/53b4m6w6sxlp0mie29krl/PFY-14789_1.jpg?rlkey=jibdnqsz9v0skipmmbgg581e0&st=p3370j72&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/cq93p18uyhx4x3ohpur3r/PFY-14789_2.jpg?rlkey=7ft8lwj7hqmdse1ou95reyhj0&st=fke07n94&dl=0",
    ],
    label: "30x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS, muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1199,
    name: "PFY-14788 Decorative Transfers (Dahlias) 30x30cm",
    price: "11.40",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/eiw9ltpfuwfy56hy7nzj0/PFY-14788_1.jpg?rlkey=j5zvip12j21koyrff25fkmbjv&st=0u04ks8e&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/r8yv8hu6casnq867vsjcg/PFY-14788_2.jpg?rlkey=eh12y9mk8udfa04pmakyk0cot&st=pagdbp71&dl=0",
    ],
    label: "30x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS, muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1200,
    name: "PFY-14787 Decorative Transfers (Daisies) 30x30cm",
    price: "11.40",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/h194p000vwmn1wvdp98v7/PFY-14787_1.jpg?rlkey=i2wv9emh9hudfc7eb6ai7vppr&st=05z97qu5&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/rtzqqmmyzsw1j1uz9x168/PFY-14787_2.jpg?rlkey=miivjfyvcy23j2cqdk3tz15ik&st=od9kxaqk&dl=0",
    ],
    label: "30x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS, muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1201,
    name: "PFY-14786 Decorative Transfers (Hydrangeas) 30x30cm",
    price: "11.40",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/cw9r2wha4w8odoko0g95s/PFY-14786_1.jpg?rlkey=2x0zs4oox231tvo2fpyq29xy4&st=wsx1h5xx&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/aq6wq4od1uq9xeex0qhll/PFY-14786_2.jpg?rlkey=krdyb0koo99ewzdqsc1ubq8rq&st=crqrm1ab&dl=0",
    ],
    label: "30x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS, muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1202,
    name: "PFY-14785 Decorative Transfers (Peonies) 30x30cm",
    price: "11.40",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/3hisjiap7b259p68w5qm8/PFY-14785_1.jpg?rlkey=64qdz6ky1nkk46b8dbo17nyzn&st=st5a4ye3&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/r42rcurajpg6fc4mbrm98/PFY-14785_2.jpg?rlkey=p9sxxp2uvgyaq2sfyo0ammkko&st=903yvfsz&dl=0",
    ],
    label: "30x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS, muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1203,
    name: "PFY-14784 Decorative Transfers (Roses) 30x30cm",
    price: "11.40",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/i6ju8x89pdrdj0m7o87bv/PFY-14784_1.jpg?rlkey=7ghq0k3vy9lefvx5xaebbejmw&st=porshh2i&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/dc6dl3d0mr04zioffoyye/PFY-14784_2.jpg?rlkey=6h8fwa00sk6g90nofmxpf9b62&st=sgy2szk6&dl=0",
    ],
    label: "30x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS, muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1204,
    name: "PFY-14783 Decorative Transfers (Magnolias) 30x30cm",
    price: "11.40",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/cb6q0pg5ew36ecp4hk2ww/PFY-14783_1.jpg?rlkey=irfqyzt2x4i9pm1sf4ragt9hk&st=pft4q39l&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/dexwp1853u2ufss10w4d0/PFY-14783_2.jpg?rlkey=qwclgw1rq3tdgnlbhr12h0zob&st=b9p2tnwy&dl=0",
    ],
    label: "30x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS, muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
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
  {
    id: 1222,
    name: "Sprite - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/gazx98irzyy8kee6m94nh/Untitleddesign-2024-12-18T144417.774_300x.webp?rlkey=v05mnapisdm1w0s0ij95i5d7b&st=igqofv8e&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/44h9h5lcmynpux4nuz8o2/Spritecabinet_300x.avif?rlkey=fm17t9sadzvhdumbpoxslsnsm&st=m7l9aqri&dl=0",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 1223,
    name: "Sprite - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/gazx98irzyy8kee6m94nh/Untitleddesign-2024-12-18T144417.774_300x.webp?rlkey=v05mnapisdm1w0s0ij95i5d7b&st=igqofv8e&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/44h9h5lcmynpux4nuz8o2/Spritecabinet_300x.avif?rlkey=fm17t9sadzvhdumbpoxslsnsm&st=m7l9aqri&dl=0",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 1224,
    name: "Green Grace - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/euf16xyeip2ytv5tncpp3/Untitleddesign-2024-12-18T144431.425_300x.avif?rlkey=sfxvjqgblcmh24zfx9c97e4lw&st=pe2s8w5q&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/hmhvbqsmkdy85tokno6m3/green_grace_relove_restore_2_5000x.webp?rlkey=9l4cj1da69thzz13xsecvhdqn&st=ig1s7tx1&dl=0",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 1225,
    name: "Green Grace - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/euf16xyeip2ytv5tncpp3/Untitleddesign-2024-12-18T144431.425_300x.avif?rlkey=sfxvjqgblcmh24zfx9c97e4lw&st=pe2s8w5q&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/hmhvbqsmkdy85tokno6m3/green_grace_relove_restore_2_5000x.webp?rlkey=9l4cj1da69thzz13xsecvhdqn&st=ig1s7tx1&dl=0",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 1226,
    name: "Stained Glass Blossoms - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/ehglhneg6jeh74t75730r/stainedglassblossomssquare_300x.avif?rlkey=emva6hgweo0vqs8ivmgbtlk4r&st=3zhe206a&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/eiaxays2ubd8mtp4csnet/rn-image_picker_lib_temp_ab7f4ef3-dcf0-40d4-a08f-d85e7e987262_300x.jpg?rlkey=ogwsjqjqfdyk6gf2kkkr2of49&st=i18gygia&dl=0",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 1227,
    name: "Stained Glass Blossoms - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/ehglhneg6jeh74t75730r/stainedglassblossomssquare_300x.avif?rlkey=emva6hgweo0vqs8ivmgbtlk4r&st=3zhe206a&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/eiaxays2ubd8mtp4csnet/rn-image_picker_lib_temp_ab7f4ef3-dcf0-40d4-a08f-d85e7e987262_300x.jpg?rlkey=ogwsjqjqfdyk6gf2kkkr2of49&st=i18gygia&dl=0",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 1228,
    name: "Carnival Queen - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/bfnnsl50y9v2wmbaqzfux/CARNIVALQUEENS_300x.avif?rlkey=1i0v6kliodqgcs00v3m8xd7f9&st=w8tvpqyx&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/m9b2azcikvps7qmjy7ic1/rn-image_picker_lib_temp_35ef0ac0-6bcc-4a3a-bf4b-cd5d8b02ff66_300x.webp?rlkey=oj6gsgc2gv3x0k8x556k6whu7&st=hw50aa7h&dl=0",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 1229,
    name: "Carnival Queen - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/bfnnsl50y9v2wmbaqzfux/CARNIVALQUEENS_300x.avif?rlkey=1i0v6kliodqgcs00v3m8xd7f9&st=w8tvpqyx&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/m9b2azcikvps7qmjy7ic1/rn-image_picker_lib_temp_35ef0ac0-6bcc-4a3a-bf4b-cd5d8b02ff66_300x.webp?rlkey=oj6gsgc2gv3x0k8x556k6whu7&st=hw50aa7h&dl=0",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 1230,
    name: "Flamenco Sunrise - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/xi5vihqgervy4kc8sejpe/FLAMENCOSUNRISES_300x.avif?rlkey=g2nykf0udffmfcic297xpfb8j&st=el3ox887&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/20av665plmxbk4od9gq2o/rn-image_picker_lib_temp_9ada713e-f5c8-4a46-83a7-76bdcf182411_300x.webp?rlkey=yx91fqqnlesugm59qa0qctpwn&st=ajaev51p&dl=0",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 1231,
    name: "Flamenco Sunrise - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/xi5vihqgervy4kc8sejpe/FLAMENCOSUNRISES_300x.avif?rlkey=g2nykf0udffmfcic297xpfb8j&st=el3ox887&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/20av665plmxbk4od9gq2o/rn-image_picker_lib_temp_9ada713e-f5c8-4a46-83a7-76bdcf182411_300x.webp?rlkey=yx91fqqnlesugm59qa0qctpwn&st=ajaev51p&dl=0",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 1232,
    name: "Song of the Water Spirits - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/1gnwsco70pzvfbzonfoh1/SONGOFTHEWATERSPIRITSS_300x.webp?rlkey=ufr3x4oiyvy66olonbdgpzjk1&st=agk66li1&dl=0",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 1233,
    name: "Song of the Water Spirits - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/1gnwsco70pzvfbzonfoh1/SONGOFTHEWATERSPIRITSS_300x.webp?rlkey=ufr3x4oiyvy66olonbdgpzjk1&st=agk66li1&dl=0",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 1234,
    name: "Silver Silhouette - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/gumbpippxtjni6k9wfm7e/SILVERSILHOUETTES_300x.avif?rlkey=5n2u17mnwxzlunyh2dt72yjxs&st=x2e6wgrw&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/ct6xibw3zjnmx6f9gg55s/silver_silhouette_mishique_5000x.webp?rlkey=wiqxclyedtgs0o2zbivm7apbp&st=kjx6til6&dl=0",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 1235,
    name: "Silver Silhouette - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/gumbpippxtjni6k9wfm7e/SILVERSILHOUETTES_300x.avif?rlkey=5n2u17mnwxzlunyh2dt72yjxs&st=x2e6wgrw&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/ct6xibw3zjnmx6f9gg55s/silver_silhouette_mishique_5000x.webp?rlkey=wiqxclyedtgs0o2zbivm7apbp&st=kjx6til6&dl=0",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 1236,
    name: "Black Cockatoo - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/ysu4lk851bsjvc072tyjf/BlackCockatooDecoupage_300x.avif?rlkey=0o7q3irv6b3j606imz8egreco&st=guc536ja&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/1qpumekd133g2sye3ijx5/blackcockatoopiece_300x.webp?rlkey=69z2dqkup1xpfmqvxoemj1ks1&st=0vf1vnha&dl=0",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 1237,
    name: "Black Cockatoo - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/ysu4lk851bsjvc072tyjf/BlackCockatooDecoupage_300x.avif?rlkey=0o7q3irv6b3j606imz8egreco&st=guc536ja&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/1qpumekd133g2sye3ijx5/blackcockatoopiece_300x.webp?rlkey=69z2dqkup1xpfmqvxoemj1ks1&st=0vf1vnha&dl=0",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 1238,
    name: "Major Mitchell - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/kijv8p8ja76cmiuokqc2p/MajorMitchellDecoupage_300x.avif?rlkey=26akmn3pcv32lnywsgprzjyvq&st=oatubwhm&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/5h2ry8sqibvaf92nv8fcg/MajorMitchell_300x.webp?rlkey=g0a3g7ke17uiy49vs1uhbi2v3&st=vgl7czqa&dl=0",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 1239,
    name: "Major Mitchell - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/kijv8p8ja76cmiuokqc2p/MajorMitchellDecoupage_300x.avif?rlkey=26akmn3pcv32lnywsgprzjyvq&st=oatubwhm&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/5h2ry8sqibvaf92nv8fcg/MajorMitchell_300x.webp?rlkey=g0a3g7ke17uiy49vs1uhbi2v3&st=vgl7czqa&dl=0",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 1240,
    name: "Black Sheep - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/9i3573vz9yd48i2yy03an/BlackSheepInFieldDecoupage_9c827988-5928-4b44-b8bd-030db14305ef_300x.avif?rlkey=m8isxzqiqevm1ijuwq0ovt1jn&st=ocyj3v1p&dl=0",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 1241,
    name: "Black Sheep - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/9i3573vz9yd48i2yy03an/BlackSheepInFieldDecoupage_9c827988-5928-4b44-b8bd-030db14305ef_300x.avif?rlkey=m8isxzqiqevm1ijuwq0ovt1jn&st=ocyj3v1p&dl=0",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 1242,
    name: "White Sheep - Papel para decoupage - A1",
    price: 29.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/oxmhha666hm9sq0zg06eh/WhiteSheepInFieldDecoupage_300x.avif?rlkey=cb0dznvd32elx0o0bnac41s12&st=6u2prfao&dl=0",
    ],
    label: "A1",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 1243,
    name: "White Sheep - Papel para decoupage - A3",
    price: 19.95,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/oxmhha666hm9sq0zg06eh/WhiteSheepInFieldDecoupage_300x.avif?rlkey=cb0dznvd32elx0o0bnac41s12&st=6u2prfao&dl=0",
    ],
    label: "A3",
    description:
      "Estos papeles de decoupage han sido creados especialmente para el arte y la renovación de muebles, disponibles en tamaños A1 (594mm x 841mm) y A3 (297mm x 420mm). Impresos en papel seleccionado específicamente para decoupage, estos papeles están diseñados meticulosamente para asegurar que tus proyectos se conviertan en obras de arte al completarse. Incluyen instrucciones detalladas.",
    selected: false,
  },
  {
    id: 1244,
    name: "Stucco Cadence GRIS FINO 250ml",
    price: 5.20,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/qtft6bsgrzfwxqwdjtlur/stucco-cadence-gris-fino-250-ml.jpg?rlkey=fob9mcg1ai5x1mwjk82fmisjh&st=qwbq96np&dl=0",
    ],
    label: "250ml",
    description:
      "Concrete Stucco es un revoque con base acrílica listo para usar, es un producto decorativo con apariencia de cemento bruto, que se puede aplicar con llana en superficies interiores y exteriores. ",
    selected: false,
  },
  {
    id: 1245,
    name: "Stucco Cadence BLANCO FINO 250ml",
    price: 5.20,
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/2agx663nngoie90cnruyp/stucco-cadence-blanco-fino-250-ml.jpg?rlkey=m37wm6s8ipqh3dpgwrn51rl3s&st=wqvziacp&dl=0",
    ],
    label: "250ml",
    description:
      "Concrete Stucco es un revoque con base acrílica listo para usar, es un producto decorativo con apariencia de cemento bruto, que se puede aplicar con llana en superficies interiores y exteriores. ",
    selected: false,
  },




];

/* =========================================================
   Buscador: config + utilidades
   ========================================================= */
const MIN_CHARS = 3; // mínimo de letras para empezar a mostrar resultados
const MAX_RESULTS = 18; // máximo de productos a mostrar

const clean = (s) =>
  String(s ?? "")
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "") // quita acentos
    .toLowerCase()
    .trim();

// Une “500 ml” -> “500ml”; “0,5 l”/“0.5 l” -> “500ml”
const normalizeUnits = (s) => {
  const str = clean(s).replace(/\s+/g, " ");
  // litros a ml
  const lMatch = str.match(/(\d+(?:[.,]\d+)?)\s*(l|litro|litros)\b/);
  let out = s;
  if (lMatch) {
    const n = parseFloat(lMatch[1].replace(",", "."));
    out = out.replace(lMatch[0], `${Math.round(n * 1000)}ml`);
  }
  // números + ml con o sin espacio
  return clean(out).replace(/(\d+)\s*ml/g, "$1ml");
};

const tokenize = (s) => clean(s).split(/\s+/).filter(Boolean);
const unique = (arr) => Array.from(new Set(arr));

/** Distancia de edición (Damerau-Levenshtein ligera) con corte temprano */
const editDistance = (a, b, max = 2) => {
  if (Math.abs(a.length - b.length) > max) return max + 1;
  const dp = Array.from({ length: a.length + 1 }, (_, i) => [i]);
  for (let j = 1; j <= b.length; j++) dp[0][j] = j;

  for (let i = 1; i <= a.length; i++) {
    let rowMin = Infinity;
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      const del = dp[i - 1][j] + 1;
      const ins = dp[i][j - 1] + 1;
      const sub = dp[i - 1][j - 1] + cost;
      let val = Math.min(del, ins, sub);
      if (
        i > 1 &&
        j > 1 &&
        a[i - 1] === b[j - 2] &&
        a[i - 2] === b[j - 1]
      ) {
        val = Math.min(val, dp[i - 2][j - 2] + 1); // transposición
      }
      dp[i][j] = val;
      if (val < rowMin) rowMin = val;
    }
    if (rowMin > max) return max + 1; // corte temprano
  }
  return dp[a.length][b.length];
};

/** Indexación previa para no recalcular normalizaciones en cada pulsación */
const useProductIndex = (products) =>
  useMemo(
    () =>
      products.map((p) => {
        const name = normalizeUnits(p.name);
        const label = normalizeUnits(p.label);
        const description = normalizeUnits(p.description);
        const tokens = unique([
          ...tokenize(name),
          ...tokenize(label),
          ...tokenize(description),
        ]);
        return {
          ...p,
          _name: name,
          _label: label,
          _desc: description,
          _tokens: tokens,
        };
      }),
    [products]
  );

/** Scoring con frase exacta, inicio/contiene, bonus por cercanía y fuzzy */
const scoreIndexedProduct = (prod, query) => {
  const fullQ = normalizeUnits(query);
  const terms = tokenize(fullQ);
  if (!terms.length) return 0;

  let score = 0;

  // 1) Frase exacta
  if (prod._name.includes(fullQ)) score += 200;
  else if (prod._label.includes(fullQ)) score += 80;

  // 2) Por término
  for (const t of terms) {
    // nombre
    if (prod._name.startsWith(t)) score += 120;
    else if (prod._name.includes(t)) score += 80;

    // etiqueta
    if (prod._label.startsWith(t)) score += 45;
    else if (prod._label.includes(t)) score += 30;

    // descripción
    if (prod._desc.includes(t)) score += 12;

    // 3) Bonus por proximidad: tokens contiguos del nombre
    const nameWords = prod._name.split(/\s+/);
    const idx = nameWords.findIndex((w) => w.startsWith(t));
    if (idx !== -1 && idx < nameWords.length - 1) {
      const next = terms[terms.indexOf(t) + 1];
      if (next && nameWords[idx + 1]?.startsWith(next)) score += 20;
    }

    // 4) Fuzzy sobre nombre/etiqueta (para typos). Solo si no hubo match.
    const hadMatch =
      prod._name.includes(t) ||
      prod._label.includes(t) ||
      prod._desc.includes(t);
    if (!hadMatch && t.length >= 4) {
      const candidates = prod._tokens.slice(0, 12); // pequeño límite
      let best = Infinity;
      for (const c of candidates) {
        const d = editDistance(t, c, 2);
        if (d < best) best = d;
        if (best === 0) break;
      }
      if (best <= 2) score += 55 - best * 15; // 55, 40, 25
    }
  }

  // 5) Preferir nombres más cortos cuando el score empata (más exactos)
  score += Math.max(0, 20 - Math.min(prod._name.length / 5, 20));

  return score;
};

/* ---------- Resaltado de coincidencias (opcional) ---------- */
const escapeRegExp = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const makeTermsRegex = (q) => {
  const rawTerms = String(q).split(/\s+/).filter(Boolean);
  if (!rawTerms.length) return null;
  return new RegExp(`(${rawTerms.map(escapeRegExp).join("|")})`, "gi");
};
const highlightHTML = (text, termsRegex) => {
  if (!termsRegex || !text) return text ?? "";
  return String(text).replace(termsRegex, "<mark>$1</mark>");
};

/* =========================================================
   Componente principal
   ========================================================= */
export const Tienda = () => {
  /* ---- búsqueda ---- */
  const [input, setInput] = useState(""); // lo que escribe el usuario
  const [query, setQuery] = useState(""); // consulta efectiva (debounced)
  const deferredQuery = useDeferredValue(query); // suaviza render

  // Debounce 250ms
  useEffect(() => {
    const id = setTimeout(() => setQuery(input), 250);
    return () => clearTimeout(id);
  }, [input]);

  // índice de productos
  const indexed = useProductIndex(initialProducts);

  const results = useMemo(() => {
    const q = clean(deferredQuery);
    if (q.length < MIN_CHARS) return [];
    return indexed
      .map((p) => ({ ...p, _score: scoreIndexedProduct(p, q) }))
      .filter((p) => p._score > 0)
      .sort((a, b) => b._score - a._score)
      .slice(0, MAX_RESULTS);
  }, [deferredQuery, indexed]);

  const termsRegex = useMemo(
    () => makeTermsRegex(query),
    [query]
  );

  /* ---- carrito y UI persistencia ---- */
  const [cart, setCart] = useState([]);
  const [showOverlay, setShowOverlay] = useState(false);
  const { isOpen, onToggle, onClose } = useDisclosure();
  const [showText, setShowText] = useState(true);
  const [, setIsLoading] = useState(true);

  useEffect(() => {
    Aos.init();
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => setShowText(false), 10000);
    return () => clearTimeout(timeout);
  }, []);

  // persistencia carrito
  useEffect(() => {
    const data = window.localStorage.getItem("cart");
    if (data !== null) setCart(JSON.parse(data));
    setIsLoading(false);
  }, []);
  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    const idx = cart.findIndex((item) => item.id === product.id);
    if (idx !== -1) {
      const updated = [...cart];
      updated[idx].quantity++;
      setCart(updated);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };
  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const handleToggleCart = () => {
    onToggle();
    setShowOverlay(!isOpen);
  };
  const handleCloseCart = () => {
    onClose();
    setShowOverlay(false);
  };

  return (
    <>
      <Navbar2 />

      {showOverlay && <div className="overlay"></div>}

      <div className="tienda">
        <br />

        <div className="menu">
          <h1>Tienda de productos para artistas🎨</h1>

          <h3>
            Bienvenidos a la tienda de CarmenLands, aquí encontrareis una gran
            variedad de productos con los que yo personalmente trabajo y
            recomiendo. <br />
            Pulsa en{" "}
            <Link to="/tienda/mint-by-michelle">
              <span id="mint-text">Mint by Michelle</span>
            </Link>
            , en{" "}
            <Link to="/tienda/cadence">
              <span id="cadence-text">Cadence</span>
            </Link>{" "}
            , en{" "}
            <Link to="/tienda/muebles-ornamentos">
              <span id="muebles-text">Muebles y Ornamentos </span>
            </Link>
            , en{" "}
            <Link to="/tienda/montejo">
              <span id="montejo-text">Montejo </span>
            </Link>
            , en{" "}
            <Link to="/tienda/papers-for-you">
              <span id="papers-for-you-text">Papers for You </span>
            </Link>
            o en{" "}
            <Link to="/tienda/rossi">
              <span id="rossi-text">Rossi </span>
            </Link>
            para ver sus productos{" "}
          </h3>

          <div className="marcas">
            <WavyLink direction="up" to="/tienda/mint-by-michelle" color="#6aee75">
              <div className="mint"></div>
            </WavyLink>
            <WavyLink direction="up" to="/tienda/cadence" color="#4593db">
              <div className="cadence"></div>
            </WavyLink>
            <WavyLink direction="up" to="/tienda/montejo" color="#dbac45ff">
              <div className="montejo"></div>
            </WavyLink>
            <WavyLink direction="up" to="/tienda/muebles-ornamentos" color="#db4545">
              <div className="muebles"></div>
            </WavyLink>
            <WavyLink direction="up" to="/tienda/papers-for-you" color="#e268b4ff">
              <div className="papers-for-you"></div>
            </WavyLink>
            <WavyLink direction="up" to="/tienda/rossi" color="#915829ff">
              <div className="rossi"></div>
            </WavyLink>
          </div>
        </div>

        <div className="pp">
          <div className={`animated-text ${showText ? "appear" : "disappear"}`}>
            💡Empieza a escribir en el buscador y te mostraremos hasta {MAX_RESULTS} coincidencias 😉
          </div>
        </div>

        <br />

        {/* --- BUSCADOR --- */}
        <SearchBar
          value={input}
          onChange={(e) => setInput(e?.target ? e.target.value : e)}
          onSearch={(term) => setInput(term)}
          placeholder={`Buscar productos (mín. ${MIN_CHARS} letras)…`}
        />
        <div style={{ marginTop: 8 }}>
          {clean(query).length >= MIN_CHARS ? (
            <Tag variant="subtle">Coincidencias: {results.length}</Tag>
          ) : (
            <Tag variant="subtle">Escribe al menos {MIN_CHARS} letras</Tag>
          )}
        </div>

        {/* --- RESULTADOS (máx. 12) --- */}
        <div className="product-list" style={{ gap: 16 }}>
          {clean(query).length < MIN_CHARS ? (
            <p style={{ padding: "24px 0", opacity: 0.8 }}>
              Empieza a escribir para ver los mejores resultados.
            </p>
          ) : results.length === 0 ? (
            <p style={{ padding: "24px 0" }}>No hay productos según tu búsqueda.</p>
          ) : (
            results.map((product) => {
              // Resaltado opcional (debajo de la tarjeta)
              const nameHTML = highlightHTML(product.name, termsRegex);
              const labelHTML = highlightHTML(product.label ?? "", termsRegex);
              const labelMatched = labelHTML !== (product.label ?? "");

              return (
                <div key={product.id} className="product-result" style={{ display: "flex", flexDirection: "column" }}>
                  <ProductCard
                    product={product}
                    addToCart={addToCart}
                    onToggle={onToggle}
                    handleToggleCart={handleToggleCart}
                  />
                  {/* Línea de coincidencias opcional (no modifica ProductCard) */}
                  <div
                    style={{
                      marginTop: 6,
                      fontSize: 12,
                      lineHeight: 1.2,
                      opacity: 0.85,
                    }}
                  >
                    <span
                      dangerouslySetInnerHTML={{
                        __html: `Coincidencias: ${nameHTML}`,
                      }}
                    />
                    {labelMatched && (
                      <>
                        {" "}
                        ·{" "}
                        <span
                          dangerouslySetInnerHTML={{
                            __html: labelHTML,
                          }}
                        />
                      </>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <Slide direction="bottom" in={isOpen} style={{ zIndex: 10 }}>
          <Box p="40px" color="white" mt="4" bg="teal.500" rounded="md" shadow="md">
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