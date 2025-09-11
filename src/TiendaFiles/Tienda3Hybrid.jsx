import React, { useState, useEffect } from 'react';
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
import { ProductCard2 } from '../tienda/ProductCard2';
import { Navbar3 } from '../navbar/Navbar3';


const initialProducts = [
  {
    id: 186,
    name: 'Hybrid HAZERAN PURPLE 70ml.',
    price: '2.60',
    images: [
      'https://dl.dropboxusercontent.com/scl/fi/gkcqu8y6pbssvj1vie2sq/hybrid-hazeran-purple-70ml.jpg?rlkey=5yezigfbitq8tpa6auw9okbgr&st=8vv8mieu&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/yse8ockkechppwo1400dy/hybrid-encaje-70ml.jpg?rlkey=y88dp3nb8c92c3y1lx03lg93l&st=yynj9nuu&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/ichw7w4t54tn9tr860vkf/hybrid-burdeos-70ml.jpg?rlkey=an6rj8mkmqn8peg1g991miu77&st=zeyzooeq&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/x07kshe6119r99rtiz3wi/hybrid-river-blue-70ml.jpg?rlkey=f4gtiu6kp98jv3ibt1szhbn00&st=s7gp4lb7&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/35l9s00sdf64fv2ptxw1c/hybrid-cereza-70ml.jpg?rlkey=5caw2nmcooi1sxwuhtp2ra49o&st=e9c4hpw5&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/ccao0u6uzux55xgpxwacx/hybrid-gris-pizarra-oscuro-70ml.jpg?rlkey=gdyy2jcouv6hy0pkaefh1nim3&st=k4glymbi&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/ciiqi8ydfzac4pj2mlhre/hybrid-verde-fino-70ml.jpg?rlkey=raemnnhakyk2enuipu55y85yv&st=szpjahh0&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/559th4xsbaihie1clh225/hybrid-cerde-menta-70ml.jpg?rlkey=td56yv39ogmah336uhn0a5b4h&st=1igao8ti&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/yawxevmkyuu4ub7xyirfb/hybrid-azul-napoleon-70ml.jpg?rlkey=4atx3ki5fvsb9xnjdf5t1vhfv&st=bqo3wv5r&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/uq2pqsxqgedjcajux2xam/hybrid-hueso-antiguo-70ml.jpg?rlkey=nvv9pha3bo30gecjha8adbrun&st=au5vvrl1&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/punr0hkm81pcm1fnvv8bq/hybrid-ciruela-70ml.jpg?rlkey=xk819f9xu9y41uicr6101nkqj&st=c5p7osmk&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/7y4pcp322kzxwq8u0k5uf/hybrid-midnight-blue-70ml.jpg?rlkey=yi1zsbg7km4cc22fn1kma4ik9&st=h5j7b143&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/q4dibnw79jzvcfeymmb8m/hybrid-emerald-green-70ml.jpg?rlkey=1t6kp6xbn2tpf8lwyc1s5ve3y&st=d1yugb5c&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/nynkpubwsgcg34uie5p3f/hybrid-verde-hoja-70ml.jpg?rlkey=z64be1uzqggh3iaqzrsk6siqt&st=84sdlapm&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/v1nbsl5w6b6ca1xe450gv/hybrid-apple-candy-70ml.jpg?rlkey=0b7gp9zvd93dejfbvzv4qhx6k&st=hpzy6rcr&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/cny4ybopkuzjytvsff251/hybrid-oceano-70ml.jpg?rlkey=5aqd25xdf5006mkxplagmy9eh&st=3ep8cfv0&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/rkdgr35hvnkzfs7usntto/hybrid-sun-yellow-70ml.jpg?rlkey=tm6qf82qj8nj4wpfhw6d0u2bq&st=fzowvuwm&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/be83ec5kilp34xnoijwf9/hybrid-negro-70ml.jpg?rlkey=j1pilaifuz34kv2q5sedux6os&st=kae4mnbp&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/wpv8d4wxrhqn9o54dau77/hybrid-coral-70ml.jpg?rlkey=tmttzpbqwqx1r88pf2au8nqdo&st=iyot9cbc&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/6jwtuqnbytvyhxmzd0f10/hybrid-blanco-120-ml.jpg?rlkey=qk6thgwxtmicqjt8artocsqyt&st=41t5oqm9&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/ncrpeo5fo56ob80khf7zq/hybrid-ceniza-500ml.jpg?rlkey=c5obzhykxppisebtggkv1ht5o&st=4tljrpdj&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/l5jjrrsadguex4gf1dmak/hybrid-blanco-antiguo-500ml.jpg?rlkey=yjya0nvjsi8d8wbm5660tahzf&st=o5cwioyv&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/vs8z8op083gt0m5xwskxu/hybrid-blanco-500ml.jpg?rlkey=344n8183b5tz40c4jqb3gt3dy&st=r5s3bpuk&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/ymjk9p3ymbtxkha6jv2x6/hybrid-verde-moho-70ml.jpg?rlkey=dlk1combpzk5hqlrobblp43cn&st=dxmhauvz&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/1ue6qq6hlqvwnnlnt9p4n/hybrid-lila-70ml.jpg?rlkey=27fpzq35ovj8bes4dprgg6pf0&st=ryizi36e&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/c0wc9f1lz4tk5rjrdo5le/hybrid-spring-70ml.jpg?rlkey=whvm79c71tu8yzxfr4mps03co&st=ivnqtevb&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/iynlb5qk2jvsuqp9eanuw/hybrid-walnut-70ml.jpg?rlkey=wtxroce6yz8gw1l5mz26rp23v&st=tfycdr9l&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/yulpr2vr6mik6qdt4nlwg/hybrid-cashmere-70ml.jpg?rlkey=1v3twhdtsdqz6xrdllnzbibuu&st=ez4kt28g&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/tidub46u3fu4hg2iieenf/hybrid-pomegranate-flower-70ml.jpg?rlkey=gpb6oga8mkkhct6imcu4zhfqk&st=mo4rn4kc&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/82m477xzksgrqg0ub3vgo/hybrid-pumkin-70ml.jpg?rlkey=8e05sazng0fxqv04b6dny82gm&st=2fe9pibf&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/4n20jewht93qshw8wdy3b/hybrid-champaigne-70ml.jpg?rlkey=s1uk2q6rrc38u9zi2ur0ctqly&st=lsye5g1n&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/91anf81hb5qf9ggxqo0zt/hybrid-wind-70ml.jpg?rlkey=umkisvupiagz4gnxj6ve2r3eg&st=fych6jw0&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/53jcfmry6n50dmcgoxfns/hybrid-classic-oak-70ml.jpg?rlkey=pyht3bs1s9iwjjia78dyrbofd&st=acjpg3nn&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/8l62gwqay3ig1ho03658o/hybrid-egeo-70ml.jpg?rlkey=31qmg00vxybgvaprbxiz3o3pe&st=q19ete7d&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/p2qkoypgx3yix7trb9n6w/hybrid-salmon-70ml.jpg?rlkey=rf0weppjie8vvdu3tnwkksbw8&st=nr71vn5t&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/3e0dggs0r43y4x3gyup08/hybrid-negro-antracita-70ml.jpg?rlkey=oxzxjxcisim75l135jz7yk9aa&st=6hvg7nr8&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/flewe25oj73tcrynqz1kj/hybrid-spring-500ml.jpg?rlkey=9nkxtljpg1yrbxdkowvj4m6em&st=y2t69sw7&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/ewnrexp1ln1goshw1hfgn/hybrid-champaigne-500ml.jpg?rlkey=ipbmm758zp671ovmnbngudctg&st=awt5rs3s&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/wiyuipm8uidjwhbi44ocl/hybrid-oceano-500ml.jpg?rlkey=by8636q5o46teghxq6ihu46fj&st=hp5posjt&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/cny4ybopkuzjytvsff251/hybrid-oceano-70ml.jpg?rlkey=5aqd25xdf5006mkxplagmy9eh&st=3ep8cfv0&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/hvwq7lssknoq5n1cr8ptm/hybrid-ceniza-70ml.jpg?rlkey=xtn1rhnnmx1858lr01a0myea5&st=n9o5rsi2&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/08ap8eknjff6dy3bc094n/hybrid-sisal-70ml.jpg?rlkey=sir0e1of0o6loduzolozgm1a8&st=hcdune94&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/w4di22nwx2a9whqyaqei3/hybrid-soho-70ml.jpg?rlkey=tze3f4mx8eop88zulexzfnhvs&st=vd3k0wmd&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/xwidkvupilxz9xhpzgro8/hybrid-costa-marfil-70ml.jpg?rlkey=p6cyh18n7y8qtiyarfp8ti5xb&st=xad3iilu&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/pkl6kkzhd2llf10z3aw8v/hybrid-vaha-70ml.jpg?rlkey=6x2d82oqcj4sg3uealnpg6p2d&st=zrsldcnj&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/ebetjw8sm5s3or5gviwnq/hybrid-jardin-tibetano-70ml.jpg?rlkey=f30j5244lg3hus7pmz7fc9uiz&st=4daxwjaw&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/re7alqmv1ah3077k9wj1e/hybrid-palamo-70ml.jpg?rlkey=c76jj5pzzv4l50t1dgg8ug6b0&st=c9ysexis&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/hf8bvrj7a9fxl94deqrd2/hybrid-piedra-70ml.jpg?rlkey=47w2ai3gyj62fz2n1sfx4jf74&st=k8kk2b3x&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/o5603cygukpob8w3ygg5k/hybrid-azul-oscuro-70ml.jpg?rlkey=q5nb4lz2uwrcuamk6dhll8rqc&st=0xkrbqx6&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/dds9f3pavy6x6tkexitma/hybrid-verde-trebol-70ml.jpg?rlkey=wi68cc90l6al6rynb9bbvck7f&st=93sg5dt0&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/1aanf3oh1pxtuqkzpi9dw/hybrid-vison-70ml.jpg?rlkey=1a8uwzn9ihpsiyzhmtac2s22c&st=aecehu8l&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/jfkf7n8vsr422nqj3xcl8/hybrid-arduvaz-gris-70ml.jpg?rlkey=wgwazyn2o3mjz5efqthdvo6d9&st=b91czthi&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/yjgi04m1ca1et1oygynjw/hybrid-rojo-sangre-70ml.jpg?rlkey=s35cqyqnd1a2xcrcj5qhbmo7l&st=k0f6nu97&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/n661srzsbxh9cknx6scg6/hybrid-rojo-carmin-70ml.jpg?rlkey=vgl3d9inae93bsox50dctfvoq&st=hhkuawwg&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/2g0eteozgibjx0lco1xhp/hybrid-verde-oxford-70ml.jpg?rlkey=scu99i3oo1bjs7mx93mvi7dea&st=6ehckw86&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/0szonwqrcmany813kb4ob/hybrid-verde-musgo-70ml.jpg?rlkey=23p8fxraqymg88memb54qo80b&st=neh7kf1u&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/ni77eueofjyvhpkr9b47t/hybrid-verde-tilo-70ml.jpg?rlkey=1iwt4j8by2goqhgs5rlm57ue0&st=6i7ga5tf&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/i9rrl5b9vl2pqm4ctxgx1/hybrid-salvia-clara-70ml.jpg?rlkey=ogqqdubegnbxxbuzp5oy4xw1z&st=wubie8k9&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/n7992rd1rjic04o63s95z/hybrid-verde-pistacho-70ml.jpg?rlkey=mwtakblgrmogapqwmutd1rh9c&st=fsx9186v&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/f6uv93eyma2v5ny8gxe44/hybrid-verde-claro-70ml.jpg?rlkey=gvaqo2k2i9pq8e894eja7sxsm&st=c63vxjx3&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/ff4bqtxc2k7lddnhz14of/hybrid-turquesa-70ml.jpg?rlkey=mxso7igsewm4wy1ctg6j0z7j8&st=lnw93c90&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/ms3ok23x9o9qv2a85bzwg/hybrid-jardin-tibetano-500ml.jpg?rlkey=degsq6294w36fvn5gtpxnbcxh&st=v5cfniqn&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/f9hfbexbux9c5xfjjvsyt/hybrid-palamo-500ml.jpg?rlkey=lmq2ahgfv7jteumqykuyr4p3s&st=8c86u4lf&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/rxnl66rwmakprxbmni8x6/hybrid-piedra-500ml.jpg?rlkey=y6a96wcfyqq5vrzbim3ejn90w&st=w0q3gxsl&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/o5603cygukpob8w3ygg5k/hybrid-azul-oscuro-70ml.jpg?rlkey=q5nb4lz2uwrcuamk6dhll8rqc&st=g7cqlf46&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/jikiuoy47tm6op07r8gil/hybrid-negro-500ml.jpg?rlkey=s1s17cwmh8gsl9xren203sgbk&st=mb32f95a&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/fvqq77468beefrft0mz6p/hybrid-vison-500ml.jpg?rlkey=orlb9eysvxk8qe5lwnrjg1m36&st=8gfe3ykw&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/w7vntpbrea18a3th1lbs4/hybrid-gris-pizarra-500ml.jpg?rlkey=puouro3fxtowqdpy6f8u6btbt&st=2wlmc3yi&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/g8poz2caweww3d38fjece/hybrid-arduvaz-gris-500ml.jpg?rlkey=a0g824e9erhsl862kk7koq5pn&st=92fcbcjp&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/ouqrx2fiakhu6ty3bhtw6/hybrid-verde-hoja-500ml.jpg?rlkey=pcdp87154zru511elm9ecs6z2&st=fk4yv88w&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/kjvqc1leh48viabuse68z/hybrid-verde-oxford-500ml.jpg?rlkey=v25q9i0fiydtb64hpkkupocmu&st=0ubwl9bx&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/x6k9zdwn6wyoxyi1yyr40/hybrid-cadence-musgo-500ml.jpg?rlkey=a7gk04n7ct57ap16rcvh6bmip&st=zepcfe9e&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/2at51h40l8uqa3soqzmoo/hybrid-verde-tilo-500ml.jpg?rlkey=3lefr4dsdqmojs5czh4oqv6jr&st=lpg06yxl&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/zl0ypfc9iq52eunzinsr6/hybrid-verde-fino-500ml.jpg?rlkey=uu5kesd1tfjc8uje1c90ywx7r&st=8ay3k11a&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/zolbru4jx0dedkxhz23hs/hybrid-salvia-clara-500ml.jpg?rlkey=vsp4bw4keidf57xmxjb3kn7t5&st=gyedfmn0&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/tflxhr0sceunuqr5lteac/hybrid-verde-menta-500ml.jpg?rlkey=80maq7y7paapyup11k8evy6hr&st=in07hpf7&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/d1yd5in1qg1gcil8chigh/hybrid-verde-claro-500ml.jpg?rlkey=op3m4besnkslf3r5up1y00xmx&st=pmb4k46s&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/qj6bjp3jyaa42c48zrull/hybrid-azul-napoleon-500ml.jpg?rlkey=bapic92vbzhm82bla8pxzphze&st=7h15f1zm&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/huvatyz12acgghs88fstq/hybrid-negro-120ml.jpg?rlkey=ntgmvyhvtws8h4d2zqmlmnl2u&st=q2t4p5h6&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/7ox35vry7ttn6r48xijdu/hybrid-azul-laguna-70ml.jpg?rlkey=d6j6qmxxmeffr15074g9ludtw&st=pny1iznh&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/7tdc96nb40vwfjwquaut7/hybrid-azul-ultramarino-70ml.jpg?rlkey=k70uspt0c159udlz2fmrwv22n&st=tbtmeagb&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/i6wa5xs72a2bmounvl8vk/hybrid-azul-real-70ml.jpg?rlkey=40tyuw5kfxqyo99k7r8p8lh0m&st=4i9h346z&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/ii7ctvzsboi5p8rah5d4j/hybrid-azul-bebe-70ml.jpg?rlkey=v661dltjgt83hpu3vxhjgtnev&st=sa934pki&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/6zuy9n8sq3ciwqlre7b8g/hybrid-morado-70ml.jpg?rlkey=qn9qhxuo8ila2p6iiv29crn11&st=t3cpsp0w&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/sptqglp13sk8aqzp6n47m/hybrid-iris-70ml.jpg?rlkey=dlxhd4jkaykikqlk8awr2kr32&st=pfd9xfuj&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/m26cdvdbwq5mlk6wsf2cy/hybrid-malva-claro-70ml.jpg?rlkey=g0q0htwsl2e2p1cct8itb4j27&st=xz7q1sr2&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/1ue6qq6hlqvwnnlnt9p4n/hybrid-lila-70ml.jpg?rlkey=27fpzq35ovj8bes4dprgg6pf0&st=cuxfqwht&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/ao2lfm2dqan20qu324hlk/hybrid-camelot-70ml.jpg?rlkey=2w1ef0ke2svzdzhwkzwgmryo8&st=po8xgg95&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/m2yrmhchups9yl64z5icm/hybrid-rosa-victoria-70ml.jpg?rlkey=lze13babe2f4tdlm0w6ae16x9&st=oyslrtqz&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/sisiajxqxmjk8xi1qzoa5/hybrid-sedona-70ml.jpg?rlkey=q11057a2a0wjc2x6affuz53c3&st=q47i0rrf&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/8ahruvx12v2ro4rji5dvz/hybrid-flor-cactus-70ml.jpg?rlkey=a265a6hgcr4t8rpokjgfdrcvp&st=onzrxl1q&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/dgvq4m2r7ujec78ntypqr/hybrid-fucsia-70ml.jpg?rlkey=t2bz5as7z7t7kcfu58zan81zg&st=hzgp1w5k&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/6adif7nyw0pgy8lo6yk39/hybrid-rosa-bebe-70ml.jpg?rlkey=5wqdo87d7p93y2o20ptx2ns9q&st=4o0do77h&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/hnnn8v1uxkiy6n2jrsp3e/hybrid-rosa-palido-70ml.jpg?rlkey=anwewepur2h4r49r6boj5tj1t&st=85cl2oda&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/75lf6fsrc1s4bauktsaul/hybrid-marron-colier-70ml.jpg?rlkey=kpsgssltcsuzabzxgli5qzd6w&st=ksl386b8&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/cxx6wap1tnizh1pafhjpa/hybrid-avellana-calido-70ml.jpg?rlkey=y6viiw5gg7xx6zvoffp3lm17q&st=ygtgvod8&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/a6k55jyk99rjg9f49tunl/hybrid-chocolate-oscuro-70ml.jpg?rlkey=cvb9s69kky90n317n5oht07x3&st=z6kos8t9&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/l1g2osatsmqan8negiyql/hybrid-chocolate-70ml.jpg?rlkey=ubefhs8nrhszneaiu92184t3w&st=et1bgaex&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/xitkum07zrfdiuyelaqrw/hybrid-marron-calido-70ml.jpg?rlkey=jaz5njwwboa6qr79cp0n6m8lp&st=a7hz5h7z&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/jf3wmm1v0wkx9dllp1xqc/hybrid-ararot-70ml.jpg?rlkey=i8ell371vt0uf7k374odtfwek&st=0c4l81rn&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/ptyzbdq1cslxqd4x32mka/hybrid-ambar-70ml.jpg?rlkey=m0lquyy0u2nu83ce15q66ftpy&st=emxekoag&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/fzc8qo1qv1k7c36l5jmg7/hybrid-naranja-70ml.jpg?rlkey=6cssfcxy4chwr5d9zrax0sfnh&st=ktwt8jyz&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/0wzz00ypnss70d9yawe4c/hybrid-naranja-claro-70ml.jpg?rlkey=0mmsgosltt1z7slgjhihqmht0&st=8iwct7de&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/7b57g59pee3hbaww44wzb/hybrid-amarillo-70ml.jpg?rlkey=vedshvdbe19535kixoopo6t2n&st=ci3xaana&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/5vvja1c5tffq4lcor5iyd/hybrid-caramelo-70ml.jpg?rlkey=0yocdycvjzewflgxjaydz4cav&st=gxzq60sv&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/39je79wde9qsi7utzpj08/hybrid-blanco-antiguo-70ml.jpg?rlkey=v2hc6qnmouao84d9jaja0e8y2&st=vguevlim&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/ltzqszt95sao4wtb5rzm3/hybrid-blanco-70ml.jpg?rlkey=lc9l9oup827aadkb9i0p92unk&st=8ri3y549&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/1w2d0osyltzth8akgwb46/hybrid-azul-laguna-500ml.jpg?rlkey=0bz6cyejvle2jal3ooguah9pr&st=gmpcbi50&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/yj25ag2hevw19zm9h33oa/hybrid-azul-ultramarino-500ml.jpg?rlkey=7g3vr9r62u02katrrmzhqo13j&st=pxdn9rxc&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/m4xquh3yqtfig7xzjb9rt/hybrid-azul-bebe-500ml.jpg?rlkey=f76hjq2s0tbb236d2nuss99xz&st=ifw633bh&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/7qcq45ozn0nhaw1ztgfu8/hybrid-malva-claro-500ml.jpg?rlkey=5r11fek10te68ggr4fpeurupr&st=2v7q7ncs&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/uvlwbqux4eszm7x9xi0fe/hybrid-lila-claro-500ml.jpg?rlkey=8dg44bx124tjg0mewvt8gi9pn&st=bs92audh&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/4or3kglaggvn2ffjm2bx0/hybrid-camelot-500ml.jpg?rlkey=cdkwua7dqbsfigx7dlsioaao2&st=d5fuzpat&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/5m1a9yhgqtqkkz5r8p9n1/hybrid-rosa-victoria-500ml.jpg?rlkey=ruby4vho3pfvq367grzoclsq8&st=jqmmodv3&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/gisusog2exub4ajkbkhfp/hybrid-sedona-500ml.jpg?rlkey=voqrjm5h0zekjo5myhdalz5w8&st=rexyi805&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/9e0549j90kmcha8bfauvf/hybrid-flor-cactus-500ml.jpg?rlkey=6gag6s6fz9z3de029i0gjwryz&st=9w2emluz&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/rb470k3e97uryv79bg97b/hybrid-rosa-bebe-500ml.jpg?rlkey=mk9wyu4jiqwq4cglkdzkozimk&st=ocmjlstw&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/qe3gy71qd0geagwg0jmwd/hybrid-rosa-palido-500ml.jpg?rlkey=9nhcfue9o9z64119pzflvliup&st=c1mycki9&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/gyq3o2764v3py5an4w7f0/hybrid-marron-colier-500ml.jpg?rlkey=1gtu7jkq896xn0natbbordnq6&st=whnn1yhc&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/o1qbbxub68q5g18ltvlnj/hybrid-avellana-calido-500ml.jpg?rlkey=39pujxgjjnbm9dn943qestz4w&st=i4hyl8qw&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/zijf5ifiz4p1ntdobd9l6/hybrid-chocolate-oscuro-500ml.jpg?rlkey=qyfuwsfrbhw5k2s95e8j4umqk&st=lofz2aj7&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/k2ala72b0py0p2srqe0s9/hybrid-chocolate-500ml.jpg?rlkey=wa7ermd63va4gn3diulrlgy0k&st=751b1x68&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/l1g2osatsmqan8negiyql/hybrid-chocolate-70ml.jpg?rlkey=ubefhs8nrhszneaiu92184t3w&st=0fq2u7jp&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/dih5scb65cko8tykv80dd/hybrid-ararot-500ml.jpg?rlkey=x26v7lfmr1vrawxidyb5m7gud&st=r7t8kx1j&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/ghfhwkyf4uif7a5ke2ppi/hybrid-ambar-500ml.jpg?rlkey=knyz4nu6bk2pkivfid2fgjbmp&st=b5jahyee&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/4wd5g7ylxh0r1o6z9nik0/hybrid-naranja-500ml.jpg?rlkey=yqusmy9wl2qq3k5qkc90lsq02&st=wfdjodpg&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/7t84mq0oynbzrjd89rt3o/hybrid-naranja-claro-500ml.jpg?rlkey=bx6skvcl8x8jstdg5v5vky6dl&st=9l9jziav&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/ua8uw6ys40be7b3udjwxm/hybrid-amarillo-500ml.jpg?rlkey=krxm7h1tpldgd7xsewtq560xc&st=al7cnlmd&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/da8b25kwsgz6u6d1w175r/hybrid-encaje-500ml.jpg?rlkey=vsurv4w50iyi7zcj7elmjqbbv&st=fs5cdxqf&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/nsqeyveab0viazd6tw3fc/hybrid-caramelo-500ml.jpg?rlkey=3g9kw1sw3p5wvx5fw1w8oyan8&st=ck9l19m1&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/ot64hlq0qbxt3dvhfpo00/hybrid-encaje-120ml.jpg?rlkey=4kjsdbaxc3wvbzj48a5bm8eui&st=745vg90l&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/hjjknqic2m488qh4g556m/hybrid-caramelo-120ml.jpg?rlkey=3vam07a0kbsswmkuthokoo4tb&st=t032ssdr&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/ev6izui6h3sl2c5vbs8si/hybrid-blanco-antiguo-120ml.jpg?rlkey=a1tj2z7rw46gzymquqzm5pgqk&st=vesjd2nt&dl=0',
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
      'https://dl.dropboxusercontent.com/scl/fi/w7vntpbrea18a3th1lbs4/hybrid-gris-pizarra-500ml.jpg?rlkey=puouro3fxtowqdpy6f8u6btbt&st=chn40fxe&dl=0',
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
  const [itemsPerPage] = useState(12); // Cambia el número según tus necesidades

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const visibleProducts = products.slice(startIndex, endIndex);







  const applyFilters = React.useCallback(() => {
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
  }, [selectedClasses, priceRange]);

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
  }, [applyFilters]);

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
