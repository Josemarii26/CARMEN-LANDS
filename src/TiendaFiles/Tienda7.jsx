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
import { ProductCard5 } from '../tienda/ProductCard5';
import { Navbar3 } from '../navbar/Navbar3';
import { Navbar7 } from '../navbar/Navbar7';
import { ProductCard6 } from '../tienda/ProductCard6';


const initialProducts = [
  

  {
    "id": 1047,
    "name": "CRT164 Papeles ROSSI 70x100cm, 2 uds.",
    "price": "10.20",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/c9kei1pz1kzuhy0kmll76/papeles-rossi-70x100-cm-2-uds-CRT164.jpg?rlkey=ol7smd7buen8wiq65mb0dyldn&st=3wdmua2w&dl=0"],
    "label": "70x100cm",
    "description": "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    "selected": false
  },
  {
    "id": 1048,
    "name": "CRT169 Papeles ROSSI 70x100cm, 2 uds.",
    "price": "10.20",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/uruwrbu2s26zsj9dh8nkh/papeles-rossi-70x100-cm-2-uds-CRT169.jpg?rlkey=o3rh8oznqs7qzrnm49cqwvh0w&st=x1sevqpg&dl=0"],
    "label": "70x100cm",
    "description": "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    "selected": false
  },
  {
    "id": 1049,
    "name": "CRT186 Papeles ROSSI 70x100cm, 2 uds.",
    "price": "10.20",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/sc2hqocn1ryp5jy80pjqb/Papeles-ROSSI-70x100-cm-2-uds-CRT186.jpg?rlkey=lb0rkquaquckh648js4rcq1xx&st=be1dl056&dl=0"],
    "label": "70x100cm",
    "description": "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    "selected": false
  },
  {
    "id": 1050,
    "name": "CRT206 Papeles ROSSI 70x100cm, 2 uds.",
    "price": "10.20",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/k8by0bx4p0hwxw9lmqj2z/papeles-rossi-70x100-cm-2-uds-CRT206.jpg?rlkey=1o3c61gzch64fic268br3uj84&st=3ejm94c9&dl=0"],
    "label": "70x100cm",
    "description": "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    "selected": false
  },
  {
    "id": 1051,
    "name": "CRT213 Papeles ROSSI 70x100cm, 2 uds.",
    "price": "10.20",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/ac028z50dyt04rk01081j/papeles-rossi-70x100-cm-2-uds-CRT213.jpg?rlkey=bk8mwtkvh0p81rbmzd85lqun2&st=cuogc8nl&dl=0"],
    "label": "70x100cm",
    "description": "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    "selected": false
  },
  {
    "id": 1052,
    "name": "TSC055-1 Papeles ROSSI 50x70cm, 2 uds.",
    "price": "5.30",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/t88lr0yypi95auh3qiui3/papeles-rossi-50x70cm-2-uds-TSC055-1.jpg?rlkey=yn53ogdg23m0vwe4jx5rwrxmf&st=mysiz2s0&dl=0"],
    "label": "50x70cm",
    "description": "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    "selected": false,
    "note": "Revisar código"
  },
  {
    "id": 1053,
    "name": "LTP061 Papeles ROSSI 50x70cm, 2 uds.",
    "price": "9.25",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/juplzq0v4tmqyykmhwzqc/papeles-rossi-50-x70-cm-2-uds-LTP061.jpg?rlkey=ktarpkxe3tfx3i297qy0tz8ax&st=252x81uj&dl=0"],
    "label": "50x70cm",
    "description": "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    "selected": false
  },
  {
    "id": 1054,
    "name": "TSC057 Papeles ROSSI 50x70cm, 2 uds.",
    "price": "5.30",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/rk5vgv6csrtmso17pe0zv/papeles-rossi-50x70-cm-2-uds-TSC057.jpg?rlkey=y91ncn1x5m2u9u4l4dkhc0rzg&st=noddpnm1&dl=0"],
    "label": "50x70cm",
    "description": "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    "selected": false,
    "note": "Revisar código"
  },
  {
    "id": 1055,
    "name": "LTP075 Papeles ROSSI 50x70cm, 2 uds.",
    "price": "10.50",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/3hsby4l25wsqt14fwxzfm/papeles-rossi-50-x70-cm-2-uds-LTP075.jpg?rlkey=g4qcnwcwhpdg7pdyjwdxac377&st=3u0to1ld&dl=0"],
    "label": "50x70cm",
    "description": "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    "selected": false
  },
  {
    "id": 1056,
    "name": "CRT678 Papeles ROSSI 50x70cm, 2 uds.",
    "price": "5.30",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/3ohbc0gax0c3hylx3gwuv/papeles-rossi-50x70-cm-2-uds-CRT678.jpg?rlkey=4zleg8v10co0iwst5vivvnttd&st=a6o1znbh&dl=0"],
    "label": "50x70cm",
    "description": "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    "selected": false
  },
  {
    "id": 1057,
    "name": "CRT201 Papeles ROSSI 50x70cm, 2 uds.",
    "price": "5.75",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/1r1pem0eerwou45jveyzf/papeles-rossi-50x70-cm-2-uds-CRT201.jpg?rlkey=sdbp8u1vzlkzk3j5xq4xo2l6d&st=n6bzfuqe&dl=0"],
    "label": "50x70cm",
    "description": "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    "selected": false
  },
  {
    "id": 1058,
    "name": "CRT150 Papeles ROSSI 50x70cm, 2 uds.",
    "price": "5.75",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/zxlyi7fweb6i9nkpu5ay4/papeles-rossi-50x70-cm-2-uds-CRT150.jpg?rlkey=2y03jkosbni3d2o615efb5k7u&st=ff7aog2g&dl=0"],
    "label": "50x70cm",
    "description": "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    "selected": false
  },
  {
    "id": 1059,
    "name": "LTP113 Papeles ROSSI 50x70cm, 2 uds.",
    "price": "11.55",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/m583qjrmzrzgjwsyub3fd/papeles-rossi-50-x70-cm-2-uds-LTP113.jpg?rlkey=2c9dc3kezkioulqlv4bbd0ju6&st=3n46wm2v&dl=0"],
    "label": "50x70cm",
    "description": "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    "selected": false
  },
  {
    "id": 1060,
    "name": "CRT675 Papeles ROSSI 50x70cm, 2 uds.",
    "price": "5.30",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/4swqmwthsn2htr0t7cqpn/papeles-rossi-50x70-cm-2-uds-CRT675.jpg?rlkey=1884r7t2srttex9oyas9z73t1&st=r3tzf0qj&dl=0"],
    "label": "50x70cm",
    "description": "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    "selected": false
  },
  {
    "id": 1061,
    "name": "CRT089 Papeles ROSSI 50x70cm, 2 uds.",
    "price": "5.75",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/2z2w2nilyih1ifk29masz/papeles-rossi-50x70-cm-2-uds-CRT089.jpg?rlkey=nd9u54kr6ycz5hc5drsp67t7d&st=b6chc5ss&dl=0"],
    "label": "50x70cm",
    "description": "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    "selected": false
  },
  {
    "id": 1062,
    "name": "TSC049 Papeles ROSSI 70x100cm, 2 uds.",
    "price": "9.25",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/zf52dxdmwjd8r3p0pblqv/PAPELES-ROSSI-70x100-cm-2-uds-TSC049.jpg?rlkey=aws3bj83se0i0g72mfobkicoi&st=azje75r3&dl=0"],
    "label": "70x100cm",
    "description": "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    "selected": false
  },
  {
    "id": 1063,
    "name": "TSC001 Papeles ROSSI 70x100cm, 2 uds.",
    "price": "9.25",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/xm15lri40mpub2g3pwlrs/PAPELES-ROSSI-70x100-cm-2-uds-TSC001.jpg?rlkey=c8q915jvj20665yrram815w32&st=dymnwxnz&dl=0"],
    "label": "70x100cm",
    "description": "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    "selected": false,
    "note": "Revisar código"
  },
  {
    "id": 1064,
    "name": "CRT684 Papeles ROSSI 50x70cm, 2 uds.",
    "price": "5.30",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/mjvcbereocpnsgbk63ims/papeles-rossi-70x100-cm-2-uds-CRT684.jpg?rlkey=tg5tsg4meqrkzxonkl066hno4&st=6g0ygrtc&dl=0"],
    "label": "50x70cm",
    "description": "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    "selected": false
  },
  {
    "id": 1065,
    "name": "CRT078 Papeles ROSSI 50x70cm, 2 uds.",
    "price": "5.75",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/9qtojhg1udzxxnwz94xz7/papeles-rossi-50x70-cm-2-uds-CRT078.jpg?rlkey=79dj7wdo1dnun8yhyubfs6xzh&st=7kvf0i53&dl=0"],
    "label": "50x70cm",
    "description": "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    "selected": false
  },
  {
    "id": 1066,
    "name": "CRT187 Papeles ROSSI 70x100cm, 2 uds.",
    "price": "10.20",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/h5hwilfiaawfl45ey8532/rollo-2-papeles-rossi-CRT187.jpg?rlkey=us17puinb3sfskg3kmbfm5vni&st=bj58u6pj&dl=0"],
    "label": "70x100cm",
    "description": "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    "selected": false
  },
  {
    "id": 1067,
    "name": "LTP033 Papeles ROSSI 50x70cm, 2 uds.",
    "price": "11.60",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/29096ti4dtijdhlmnownu/rollo-2-papeles-rossi-LTP033.jpg?rlkey=28inco469a4bqkxdjrjrsgiru&st=2ac0adqf&dl=0"],
    "label": "50x70cm",
    "description": "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    "selected": false
  },
  {
    "id": 1068,
    "name": "CRT687 Papeles ROSSI 50x70cm, 2 uds.",
    "price": "5.30",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/jh2z07nbjw2jq73920gny/rollo-2-papeles-rossi-CRT687.jpg?rlkey=8afuqiluyjfb8ulikau3esfrb&st=nnhxvtdh&dl=0"],
    "label": "50x70cm",
    "description": "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    "selected": false
  },
  {
    "id": 1069,
    "name": "TSC019 Papeles ROSSI 50x70cm, 2 uds.",
    "price": "5.30",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/r2mtejjfhk97r0jtc5kkf/rollo-2-papeles-rossi-TSC019.jpg?rlkey=xatetvm8vtmd3k64lmvc8juw3&st=erhak7n4&dl=0"],
    "label": "50x70cm",
    "description": "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    "selected": false,
    "note": "Revisar código"
  },
  {
    "id": 1070,
    "name": "TSC037 Papeles ROSSI 50x70cm, 2 uds.",
    "price": "5.30",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/qhd3vohrlnr2sxg2dx54i/rollo-2-papeles-rossi-TSC037.jpg?rlkey=73jytbf3bx5crvq12rkq9v2og&st=o03pilxe&dl=0"],
    "label": "50x70cm",
    "description": "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    "selected": false,
    "note": "Revisar código"
  },
  {
    "id": 1071,
    "name": "TSC042 Papeles ROSSI 50x70cm, 2 uds.",
    "price": "5.30",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/nblotuvs8lhx27whc05wa/rollo-2-papeles-rossi-TSC042.jpg?rlkey=msa5z543r5zllquzrtqe55ycj&st=8hshd9ad&dl=0"],
    "label": "50x70cm",
    "description": "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    "selected": false
  },
  {
    "id": 1072,
    "name": "CRT178 Papeles ROSSI 50x70cm, 2 uds.",
    "price": "5.75",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/7nui7y3t21zp2wii6xo5f/rollo-2-papeles-rossi-CRT178.jpg?rlkey=h0ye0cz8x9bdsi4aq4j12etm1&st=utkv23g6&dl=0"],
    "label": "50x70cm",
    "description": "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    "selected": false
  },
  {
    "id": 1073,
    "name": "CRT517 Papeles ROSSI 50x70cm, 2 uds.",
    "price": "5.30",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/zzqp0blrh7427sr27xf4v/rollo-2-papeles-rossi-CRT517.jpg?rlkey=8zdlpggjhz8ic0k2brb1cdlgk&st=d62t2u0e&dl=0"],
    "label": "50x70cm",
    "description": "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    "selected": false
  },
  {
    "id": 1074,
    "name": "CRT670 Papeles ROSSI 50x70cm, 2 uds.",
    "price": "5.30",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/vlcgol5womh88pv4ft021/rollo-2-papeles-rossi-CRT670.jpg?rlkey=asjkjf0b0euv2btnp7w0yeaxm&st=n9zau6x4&dl=0"],
    "label": "50x70cm",
    "description": "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    "selected": false
  },
  {
    "id": 1075,
    "name": "CRT679 Papeles ROSSI 50x70cm, 2 uds.",
    "price": "5.30",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/lfiu0ejxgije62kldmhfh/rollo-2-papeles-rossi-CRT679.jpg?rlkey=i72tv7ltcye1fbb0hszj8j0fk&st=5za1rws2&dl=0"],
    "label": "50x70cm",
    "description": "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    "selected": false
  },
  {
    "id": 1076,
    "name": "CRT133 Papeles ROSSI 70x100cm, 2 uds.",
    "price": "10.20",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/j7tb9dnhiskd1pvqhu0z7/rollo-2-papeles-rossi-CRT133.jpg?rlkey=ydl3djfd7xj6uqikbrfp44ier&st=id9ti8jj&dl=0"],
    "label": "70x100cm",
    "description": "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    "selected": false
  },
  {
    "id": 1077,
    "name": "CRT140 Papeles ROSSI 70x100cm, 2 uds.",
    "price": "10.20",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/ouw3lzlg25ulnzyf2z5m1/rollo-2-papeles-rossi-CRT140.jpg?rlkey=aeu5864bvnkm9jvw8qfwrxlg5&st=uampl2zf&dl=0"],
    "label": "70x100cm",
    "description": "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    "selected": false
  },
  {
    "id": 1078,
    "name": "CRT135 Papeles ROSSI 70x100cm, 2 uds.",
    "price": "10.20",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/aikqbjlceiwu2w3z21v1g/rollo-2-papeles-rossi-CRT135.jpg?rlkey=0qrpmzi1q7ramswzvj3d9wlr2&st=1clbhsom&dl=0"],
    "label": "70x100cm",
    "description": "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    "selected": false
  },
  {
    "id": 1079,
    "name": "CRT101 Papeles ROSSI 70x100cm, 2 uds.",
    "price": "10.20",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/kethqf2zo40qtlvhfu7tv/rollo-2-papeles-rossi-CRT101.jpg?rlkey=sxldkrv3egmwlfaaalhb471hi&st=qecxxtf5&dl=0"],
    "label": "70x100cm",
    "description": "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    "selected": false
  },
  {
    "id": 1080,
    "name": "CRT094 Papeles ROSSI 70x50cm, 2 uds.",
    "price": "5.75",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/npm9j1b2js2g93bjgpfx9/rollo-2-papeles-rossi-CRT094.jpg?rlkey=a91alevb47g2x4o7mgxxybu6c&st=mc99wv95&dl=0"],
    "label": "70x50cm",
    "description": "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    "selected": false
  },
  {
    "id": 1081,
    "name": "TSC059 Papeles ROSSI 70x100cm, 2 uds.",
    "price": "9.25",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/2wyhoqzuet6w17ap8kk49/rollo-2-papeles-rossi-TSC059.jpg?rlkey=zicu1dux60ivjtbzy74zeo51z&st=11kbxwuo&dl=0"],
    "label": "70x100cm",
    "description": "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    "selected": false,
    "note": "Revisar código"
  },
  {
    "id": 1082,
    "name": "CRT583 Papeles ROSSI 70x100cm, 2 uds.",
    "price": "9.25",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/zgcarv6wotjkslz8zq6hb/rollo-2-papeles-rossi-CRT583.jpg?rlkey=id5qhjjc6nzvgsjxvsxlwnrws&st=7jvzuptx&dl=0"],
    "label": "70x100cm",
    "description": "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    "selected": false
  },
  {
    "id": 1083,
    "name": "LTP037 Papeles ROSSI 50x70cm, 2 uds.",
    "price": "6.25",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/m1cvok31qbvopnytej67i/rollo-2-papeles-rossi-LTP037.jpg?rlkey=uy91p6r2qr597fxswkm3503p2&st=2ai7j6f0&dl=0"],
    "label": "50x70cm",
    "description": "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    "selected": false
  },
  {
    "id": 1084,
    "name": "TSC029 Papeles ROSSI 70x100cm, 2 uds.",
    "price": "9.25",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/bhzsd1ctycmls4crulyhf/rollo-2-papeles-rossi-TSC029.jpg?rlkey=9hrwhlthbfnvq6ybxj930m3cp&st=adcoo524&dl=0"],
    "label": "70x100cm",
    "description": "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    "selected": false
  },
  {
    "id": 1085,
    "name": "CRT519 Papeles ROSSI 50x70cm, 2 uds.",
    "price": "5.30",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/98sb4pc78amz7qcc666qm/rollo-2-papeles-rossi-CRT519.jpg?rlkey=shgmuw8nwv2dmb85pcot2s9do&st=yr77mwd5&dl=0"],
    "label": "50x70cm",
    "description": "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    "selected": false
  },
  {
    "id": 1086,
    "name": "CRT685 Papeles ROSSI 50x70cm, 2 uds.",
    "price": "5.30",
    "images": ["https://dl.dropboxusercontent.com/scl/fi/pn0vtr6b95xqbp6nc22ou/rollo-2-papeles-rossi-CRT685.jpg?rlkey=1e7bdgom4hdhoufa4aeek5hzk&st=673ybnr2&dl=0"],
    "label": "50x70cm",
    "description": "Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado papel Firenze y papel Varese. De alta calidad en todos los componentes y productos en sí mismos, gran cuidado en el estudio, creación, producción y empaque.",
    "selected": false
  }





];

// Define el rango de precios mínimo y máximo de tus productos
const precioMinimo = 0;
const precioMaximo = 20;

export const Tienda7 = () => {
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
      <Navbar7 />

      {showOverlay && <div className="overlay"></div>}
      <div className="tienda" id='tienda7'>
        <br></br>

        <div className="menu">

          <h1>Tienda de productos para artistas - Rossi 🍂</h1>
          <h2>Papeles de cartonaje - Rossi 🎨</h2>

          <h3>Preciosos papeles decorativos italianos, principalmente papel florentino o también llamado "papel Firenze" y papel Varese. De alta calidad e todos los componentes y productos en sí mismos, el gran cuidado tomado en el estudio y la creación, producción y empaque.  </h3>

          <Button className="remove-button3" rightIcon={filterButtonIcon} onClick={handleToggleFilters} colorScheme='orange' variant='solid' bg='orange.800'>
            Filtrar Productos
          </Button>

          <SearchBar onSearch={handleSearch} />


          <button className="bn632-hover bn22f" onClick={handleToggleCart}>Carrito🛒</button>

        </div>

        {showFilters && (
          <div data-aos="fade-right"><div className="filter">
            
            {Array.from(new Set(initialProducts.map((product) => product.label)).values()).map(
              (selectedClass) => (
                <Tag size={'lg'} key={'lg'} variant='solid' colorScheme='orange' bg='orange.800'>
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
              <ProductCard6
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
