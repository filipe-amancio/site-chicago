/* Conteúdo do cardápio extraído do index.html original.
   Preços e descrições preservados exatamente (regra 11.C). */

export type MenuItem = {
  name: string;
  price: string;
  description: string;
};

export type MenuCategory = {
  id: string;
  label: string;
  items: MenuItem[];
};

export const MENU: MenuCategory[] = [
  {
    id: "burgers",
    label: "Burgers",
    items: [
      {
        name: "Chicago Burger",
        price: "R$ 33",
        description:
          "Pão brioche, blend de 180g, queijo muçarela, presunto, ovo, bacon, alface americana, tomate e maionese especial.",
      },
      {
        name: "Vegas Burger",
        price: "R$ 30",
        description:
          "Pão australiano, blend de 180g, queijo cheddar, bacon, cebola caramelizada e maionese especial.",
      },
      {
        name: "Smash Duplo Burger",
        price: "R$ 28",
        description:
          "Pão brioche, dois blends de 80g cada, queijo cheddar, bacon e maionese especial.",
      },
      {
        name: "Dallas Burger",
        price: "R$ 30",
        description:
          "Pão artesanal, hambúrguer artesanal de picanha 200g, grelhado no char-broil, recheado com queijo muçarela.",
      },
    ],
  },
  {
    id: "combos",
    label: "Combos",
    items: [
      {
        name: "Chicago Burger + Batata + Bebida",
        price: "R$ 46",
        description: "Chicago Burger + batata frita + refrigerante lata.",
      },
      {
        name: "Vegas Burger + Batata + Bebida",
        price: "R$ 43",
        description: "Vegas Burger + batata + bebida.",
      },
      {
        name: "Smash Duplo Burger + Batata + Bebida",
        price: "R$ 41",
        description:
          "Nosso queridinho smash duplo, pronto pra ir pra sua casa, com batata e refrigerante lata.",
      },
      {
        name: "Combo Casal",
        price: "R$ 82",
        description:
          "2 burgers + 2 batatas P + 2 refrigerantes lata. Você escolhe os burgers e as bebidas.",
      },
    ],
  },
  {
    id: "acompanhamentos",
    label: "Acompanhamentos",
    items: [
      {
        name: "Batata Frita Média",
        price: "R$ 12",
        description: "Porção média de batata frita crocante.",
      },
      {
        name: "Batata Frita Grande + Molho",
        price: "R$ 16",
        description: "Porção grande de batata frita acompanhada de molho.",
      },
      {
        name: "Batata Frita Especial",
        price: "R$ 20",
        description:
          "Batata frita grande com queijo cheddar e bacon + maionese caseira.",
      },
    ],
  },
  {
    id: "bebidas",
    label: "Bebidas",
    items: [
      {
        name: "Refrigerante Lata",
        price: "R$ 7",
        description:
          "Guaraná Antarctica, Fanta Laranja ou Sprite Limão, 310ml.",
      },
      {
        name: "Suco Integral Only",
        price: "R$ 7",
        description: "Laranja e maçã, ou uva e maçã, 300ml.",
      },
      {
        name: "Soda Italiana Frutas Vermelhas",
        price: "R$ 10",
        description: "Soda italiana gelada com frutas vermelhas.",
      },
      {
        name: "Cerveja Heineken",
        price: "R$ 12",
        description: "Heineken 330ml gelada.",
      },
    ],
  },
  {
    id: "sobremesas",
    label: "Sobremesas",
    items: [
      {
        name: "Milk Shake Morango",
        price: "R$ 20",
        description: "Delicioso milk shake de creme americano.",
      },
      {
        name: "Milk Shake de Ovomaltine",
        price: "R$ 20",
        description: "Delicioso milk shake de creme americano.",
      },
      {
        name: "Milk Shake Nutella",
        price: "R$ 22",
        description: "Delicioso milk shake de creme americano.",
      },
      {
        name: "Pudim",
        price: "R$ 15",
        description: "Pudim de leite ninho com calda de caramelo.",
      },
    ],
  },
];

/* Links externos reais da marca, preservados do original. */
export const LINKS = {
  whatsapp: "https://wa.me/5561981047360",
  whatsappLabel: "(61) 98104-7360",
  instagram: "https://www.instagram.com/chicagoburger_/",
  instagramLabel: "@chicagoburger_",
  pedido: "http://pedido.anota.ai/loja/chicago-burger-2?referer=gbp_anota",
  maps: "https://www.google.com/maps/dir/?api=1&destination=-15.8014952,-48.0171220",
  mapsEmbed:
    "https://www.google.com/maps?q=Chicago+Burger,+St.+Hab.+Vicente+Pires+loja+3,+Vicente+Pires,+Bras%C3%ADlia+-+DF&z=16&output=embed",
  endereco:
    "St. Hab. Vicente Pires, loja 3 - Vicente Pires, Brasília, DF, 72006-100",
} as const;

/* Navegação: labels e âncoras preservadas (regra 11.F - nunca mudar
   silenciosamente labels de nav nem slugs). */
export const NAV_LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#cardapio", label: "Cardápio" },
  { href: "#vitrine", label: "Vitrine" },
  { href: "#localizacao", label: "Localização" },
] as const;
