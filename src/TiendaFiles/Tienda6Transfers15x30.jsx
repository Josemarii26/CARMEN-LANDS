import React, { useState, useEffect } from "react";
import { Navbar } from "../navbar/Navbar";
import { ProductCard } from "../tienda/ProductCard";
import { SearchBar } from "../tienda/SearchBar";
import { Cart } from "../tienda/Cart";
import { Slide } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Tag } from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";

import Aos from "aos";
import "aos/dist/aos.css";
import ScrollToTopButton from "../parallax/parallax-2/ScrollToTopButton";
import { Navbar2 } from "../navbar/Navbar2";
import { ProductCard5 } from "../tienda/ProductCard5";
import { Navbar3 } from "../navbar/Navbar3";
import { Navbar6 } from "../navbar/Navbar6";

const initialProducts = [
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
    id: 1249,
    name: "PFY-15243 Decorative Transfers (Ornamental) 15x30cm",
    price: "10.80",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/pkdkjnoh7px374ads6adc/PFY-15243_1.jpg?rlkey=74tfnu1m0149qli9y15jyhy93&st=g955c4z6&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/vx9h0gin51rboy9fiz8xm/PFY-15243_2.jpg?rlkey=tby204owq8ra3ahuld5jlrvy5&st=hqlkqoco&dl=0",
    ],
    label: "15x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS,  muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1250,
    name: "PFY-15239 Decorative Transfers (Christmas) 15x30cm",
    price: "10.80",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/yg0np8r89o5fzxrbq6bu7/PFY-15239_1.jpg?rlkey=hdgg07xnlnfsfh3jags578m75&st=4l8mo35a&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/ud38nzq3fvvtd1mh64dbg/PFY-15239_2.jpg?rlkey=xaecaej1k2ksof1980ihbgm6k&st=zqz3b1to&dl=0",
    ],
    label: "15x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS,  muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1251,
    name: "PFY-15236 Decorative Transfers (Baroque Borders) 15x30cm",
    price: "10.80",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/81nhh7a8wxx1tp1huek5b/PFY-15236_1.jpg?rlkey=kxmw2d54uooutbrzlq2s4tkpe&st=luciln8s&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/qvdxspx75f4j8mwc29jyj/PFY-15236_2.jpg?rlkey=6l7ioff8vk1aq0mom8fwh126h&st=p6nvgyqg&dl=0",
    ],
    label: "15x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS,  muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
  {
    id: 1252,
    name: "PFY-15233 Decorative Transfers (Abecedary) 15x30cm",
    price: "10.80",
    images: [
      "https://dl.dropboxusercontent.com/scl/fi/jr60pw97v80c1u4i4ta6g/PFY-15233_1.jpg?rlkey=gv8op5uluknrf54p2sbbdsi4u&st=irkix0pg&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/0cu1eneyg06iqdqjysh5y/PFY-15233_2.jpg?rlkey=d0enjjg9lr1mwmbs8aji3pwpb&st=9mslojn1&dl=0",
    ],
    label: "15x30cm",
    description:
      "Láminas adhesivas mates para muebles, pared, cristal, papel y madera, es decir, SUPERFICIES DURAS,  muy fáciles de aplicar y con un resultado de gran calidad. Todos los kits incluyen un palito de madera para facilitar su trabajo.",
    selected: false,
  },
];

// Define el rango de precios mínimo y máximo de tus productos
const precioMinimo = 0;
const precioMaximo = 20;

export const Tienda6Transfers15x30 = () => {
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
        (selectedClasses.length === 0 ||
          selectedClasses.includes(product.label)) &&
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

    if (searchText !== "") {
      const filteredProducts = products.filter((product) =>
        removeAccents(product.name)
          .toLowerCase()
          .includes(searchText.toLowerCase())
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
    const existingProductIndex = cart.findIndex(
      (item) => item.id === product.id
    );

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
      top: 0,
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
    const data = window.localStorage.getItem("cart");
    if (data !== null) {
      setCart(JSON.parse(data));
    }
    setIsLoading(false); // <- Mueve esto aquí para indicar que la carga se ha completado
  }, []);

  useEffect(() => {
    // Guarda el carrito en localStorage cada vez que cambie
    window.localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  if (isLoading) {
    // You can render a loading indicator here if needed
    return <p>Loading...</p>;
  }

  return (
    <>
      <Navbar6 />

      {showOverlay && <div className="overlay"></div>}
      <div className="tienda" id="tienda6">
        <br></br>

        <div className="menu">
          <h1>Tienda de productos para artistas - Papers For You 🌸</h1>
          <h2>Decorative Transfers - Papers For You 🎨</h2>

          <h3>
            Láminas adhesivas mates para muebles, pared, cristal, papel y
            madera, es decir, SUPERFICIES DURAS, muy fáciles de aplicar y con un
            resultado de gran calidad. Todos los kits incluyen un palito de
            madera para facilitar su trabajo.{" "}
            <br></br><span id='materiales'>CONTIENE 4 LÁMINAS</span>
          </h3>

          <Button
            className="remove-button3"
            rightIcon={filterButtonIcon}
            onClick={handleToggleFilters}
            colorScheme="pink"
            variant="solid"
            bg="pink.500"
          >
            Filtrar Productos
          </Button>

          <SearchBar onSearch={handleSearch} />

          <button className="bn632-hover bn22e" onClick={handleToggleCart}>
            Carrito🛒
          </button>
        </div>

        {showFilters && (
          <div data-aos="fade-right">
            <div className="filter">
              {Array.from(
                new Set(
                  initialProducts.map((product) => product.label)
                ).values()
              ).map((selectedClass) => (
                <Tag
                  size={"lg"}
                  key={"lg"}
                  variant="solid"
                  colorScheme="pink"
                  bg="pink.500"
                >
                  <label
                    key={selectedClass}
                    className="filter-item"
                    id="checkbox"
                  >
                    <input
                      type="checkbox"
                      checked={selectedClasses.includes(selectedClass)}
                      onChange={() => toggleSelectedClass(selectedClass)}
                    />
                    {selectedClass}
                  </label>
                </Tag>
              ))}
            </div>{" "}
            <div className="price-slider">
              <input
                type="range"
                min={precioMinimo}
                max={precioMaximo}
                value={priceRange[0]}
                onChange={handlePriceChange}
              />
              <p>Precio Mínimo: {priceRange[0]}€</p>
              <input
                type="range"
                min={precioMinimo}
                max={precioMaximo}
                value={priceRange[1]}
                onChange={handleMaxPriceChange}
              />
              <p>Precio Máximo: {priceRange[1]}€</p>
            </div>
          </div>
        )}

        <div className="product-list">
          {showNoProducts ? (
            <p>
              {" "}
              <br></br> <br></br>No hay productos según su búsqueda.
            </p>
          ) : (
            visibleProducts.map((product) => (
              <ProductCard5
                key={product.id}
                product={product}
                addToCart={addToCart}
                onToggle={onToggle}
                handleToggleCart={handleToggleCart}
              />
            ))
          )}
        </div>
        <br></br>
        <br></br>

        <div className="pagination">
          <button onClick={handleGoToFirstPage}>Inicio</button>
          <button onClick={handlePrevPage}>Anterior</button>
          <span>
            Página {currentPage} de {totalPages}
          </span>
          <button onClick={handleNextPage}>Siguiente</button>
          <button onClick={handleGoToLastPage}>Final</button>
        </div>

        <br></br>
        <br></br>

        <Slide direction="bottom" in={isOpen} style={{ zIndex: 10 }}>
          <Box
            p="40px"
            color="white"
            mt="4"
            bg="teal.500"
            rounded="md"
            shadow="md"
          >
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
