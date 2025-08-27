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
];

// Define el rango de precios mínimo y máximo de tus productos
const precioMinimo = 0;
const precioMaximo = 20;

export const Tienda6Transfers20x30 = () => {
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
