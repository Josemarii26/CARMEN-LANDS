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
];

// Define el rango de precios mínimo y máximo de tus productos
const precioMinimo = 0;
const precioMaximo = 20;

export const Tienda6Transfers30x30 = () => {
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
