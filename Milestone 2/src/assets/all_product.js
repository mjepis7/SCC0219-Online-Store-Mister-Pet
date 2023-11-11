let all_product = [
  {
    id: 1,
    name: 'Ração Golden Special para Cães Adultos Sabor Frango e Carne - 15kg',
    category: 'dog',
    image: 'https://images.petz.com.br/fotos/1658429301983.jpg',
    stock: 10,
    sold: 5,
    new_price: 154.99,
    old_price: 160.35
  },
  {
    id: 2,
    name: 'Ração Golden Fórmula Mini Bits Para Cães Adultos de Porte Pequeno Sabor Carne e Arroz - 3kg',
    category: 'dog',
    image: 'https://images.petz.com.br/fotos/1658419340338.jpg',
    stock: 10,
    sold: 5,
    new_price: 22.99,
    old_price: 25.61
  },
  {
    id: 3,
    name: 'Ração Golden Fórmula Mini Bits para Cães Senior de Porte Pequeno Sabor Frango e Arroz - 3kg',
    category: 'dog',
    image: 'https://images.petz.com.br/fotos/1658429868506.jpg',
    stock: 10,
    sold: 5,
    new_price: 60.15,
    old_price: 100.55
  },
  {
    id: 4,
    name: 'Ração Golden Fórmula Mini Bits para Cães Adultos de Porte Pequeno Sabor Frango e Arroz - 1kg',
    category: 'dog',
    image: 'https://images.petz.com.br/fotos/1658419648043.jpg',
    stock: 10,
    sold: 5,
    new_price: 21.56,
    old_price: 25.99
  },
  {
    id: 5,
    name: 'Ração Golden Fórmula Mini Bits para Cães Filhotes de Porte Pequeno Sabor Carne e Arroz - 10kg',
    category: 'dog',
    image: 'https://images.petz.com.br/fotos/1658421670310.jpg',
    stock: 10,
    sold: 5,
    new_price: 138.99,
    old_price: 145.66
  },
  {
    id: 6,
    name: 'Ração Golden Duii Mini Bits para Cães Adultos de Porte Pequeno Sabor Frango e Seleção de Carnes - 3kg',
    category: 'dog',
    image: 'https://images.petz.com.br/fotos/1658414064370.jpg',
    stock: 10,
    sold: 5,
    new_price: 66.59,
    old_price: 71.22
  },
  {
    id: 7,
    name: 'Ração Premier Raças Específicas Golden Retriever para Cães Adultos - 12kg',
    category: 'dog',
    image: 'https://images.petz.com.br/fotos/1656092373037.jpg',
    stock: 10,
    sold: 5,
    new_price: 220.41,
    old_price: 241.22
  },
  {
    id: 8,
    name: 'Ração Premier Fórmula para Cães Adultos de Raças Médias Sabor Frango - 20kg',
    category: 'dog',
    image: 'https://images.petz.com.br/fotos/1656078449747.jpg',
    stock: 10,
    sold: 5,
    new_price: 85.05,
    old_price: 120.56
  },
  {
    id: 9,
    name: 'Ração Golden Seleção Natural para Cães Sênior de Porte Pequeno Sabor Frango e Arroz - 3kg',
    category: 'dog',
    image: 'https://images.petz.com.br/fotos/1669221431927.jpg',
    stock: 10,
    sold: 5,
    new_price: 58.49,
    old_price: 66.33
  },
  {
    id: 10,
    name: 'Ração Golden para Gatos Adultos Castrados Sabor Salmão - 1kg',
    category: 'cat',
    image: 'https://images.petz.com.br/fotos/1658414757689.jpg',
    stock: 10,
    sold: 5,
    new_price: 28.79,
    old_price: 31.45
  },
  {
    id: 11,
    name: 'Ração GranPlus para Gatos Adultos Castrados Sabor Salmão e Arroz - 3kg',
    category: 'cat',
    image: 'https://images.petz.com.br/fotos/1673969906259.jpg',
    stock: 10,
    sold: 5,
    new_price: 62.01,
    old_price: 70.59
  },
  {
    id: 12,
    name: 'Ração GranPlus Menu Para Gatos Sênior Castrados Sabor Frango e Arroz - 10,1kg',
    category: 'cat',
    image: 'https://images.petz.com.br/fotos/1692043119989.jpg',
    stock: 10,
    sold: 5,
    new_price: 161.09,
    old_price: 180.64
  },
  {
    id: 13,
    name: 'Ração Golden Seleção Natural para Gatos Adultos Sabor Frango e Arroz - 1kg',
    category: 'cat',
    image: 'https://images.petz.com.br/fotos/1658428956826.jpg',
    stock: 10,
    sold: 5,
    new_price: 24.21,
    old_price: 26.99
  },
  {
    id: 14,
    name: 'Ração Golden para Gatos Castrados Sabor Peixe - 3kg',
    category: 'cat',
    image: 'https://images.petz.com.br/fotos/1694610075770.jpg',
    stock: 10,
    sold: 5,
    new_price: 85.0,
    old_price: 120.5
  },
  {
    id: 15,
    name: 'Ração Golden para Gatos Adultos Sabor Carne - 1kg',
    category: 'cat',
    image: 'https://images.petz.com.br/fotos/1658415247029.jpg',
    stock: 10,
    sold: 5,
    new_price: 26.09,
    old_price: 27.15
  },
  {
    id: 16,
    name: 'Ração Royal Canin Veterinary Satiety para Gatos com Excesso de Peso - 1.5kg',
    category: 'cat',
    image: 'https://images.petz.com.br/fotos/1660154163201.jpg',
    stock: 10,
    sold: 5,
    new_price: 165.99,
    old_price: 183.78
  },
  {
    id: 17,
    name: 'Ração Royal Canin Veterinary Hypoallergenic para Gatos com Sensibilidades Alimentares - 4kg',
    category: 'cat',
    image: 'https://images.petz.com.br/fotos/1660146483967.jpg',
    stock: 10,
    sold: 5,
    new_price: 419.65,
    old_price: 423.32
  },
  {
    id: 18,
    name: 'Ração Royal Canin Premium Cat para Gatos Adultos Castrados - 1kg',
    category: 'cat',
    image: 'https://images.petz.com.br/fotos/1508264765505.jpg',
    stock: 10,
    sold: 5,
    new_price: 80.99,
    old_price: 89.89
  },
  {
    id: 19,
    name: 'Ração Nutrópica Farinhada com Mel e Ovos para Calopsita - 300g',
    category: 'bird',
    image: 'https://images.petz.com.br/fotos/1641990454562.jpg',
    stock: 10,
    sold: 5,
    new_price: 30.55,
    old_price: 34.23
  },
  {
    id: 20,
    name: 'Ração Nutrópica para Calopsita Sabor Frutas - 900g',
    category: 'bird',
    image: 'https://images.petz.com.br/fotos/1552671595227.jpg',
    stock: 10,
    sold: 5,
    new_price: 98.01,
    old_price: 99.54
  },
  {
    id: 21,
    name: 'Ração Nutrópica Gourmet para Calopsitas - 300g',
    category: 'bird',
    image: 'https://images.petz.com.br/fotos/1586966113731.jpg',
    stock: 10,
    sold: 5,
    new_price: 39.59,
    old_price: 43.56
  },
  {
    id: 22,
    name: 'Ração Sempre Vita Calopsitas e Agapornis - 500g',
    category: 'bird',
    image: 'https://images.petz.com.br/fotos/40013030000216-1.jpg',
    stock: 10,
    sold: 5,
    new_price: 7.01,
    old_price: 8.55
  },
  {
    id: 23,
    name: 'Ração Zootekna para Calopsitas Mistura de Sementes - 500g',
    category: 'bird',
    image: 'https://images.petz.com.br/fotos/1615571103677.jpg',
    stock: 10,
    sold: 5,
    new_price: 6.55,
    old_price: 7.45
  },
  {
    id: 24,
    name: 'Ração Nutrópica para Agapornis Sabor Frutas - 5kg',
    category: 'bird',
    image: 'https://images.petz.com.br/fotos/1552670695755.jpg',
    stock: 10,
    sold: 5,
    new_price: 316.71,
    old_price: 351.99
  },
  {
    id: 25,
    name: 'Ração Nutrópica Papa para Lóris - 500g',
    category: 'bird',
    image: 'https://images.petz.com.br/fotos/1618865095539.jpg',
    stock: 10,
    sold: 5,
    new_price: 71.85,
    old_price: 79.52
  },
  {
    id: 26,
    name: 'Ração Nutrópica Papinha Psitacídeos - 5kg',
    category: 'bird',
    image: 'https://images.petz.com.br/fotos/1604667038523.jpg',
    stock: 10,
    sold: 5,
    new_price: 437.99,
    old_price: 485.99
  },
  {
    id: 27,
    name: 'Ração Nutrópica Papinha para Arara - 500g',
    category: 'bird',
    image: 'https://images.petz.com.br/fotos/1443739079889.jpg',
    stock: 10,
    sold: 5,
    new_price: 63.9,
    old_price: 65.5
  },
  {
    id: 28,
    name: 'Alimento Alcon Acará Disco - 43g',
    category: 'fish',
    image: 'https://images.petz.com.br/fotos/1656697854686.jpg',
    stock: 10,
    sold: 5,
    new_price: 22.49,
    old_price: 24.99
  },
  {
    id: 29,
    name: 'Alimento para peixe Alcon Guppy - 20g',
    category: 'fish',
    image: 'https://images.petz.com.br/fotos/1572633695555.jpg',
    stock: 10,
    sold: 5,
    new_price: 20.99,
    old_price: 22.5
  },
  {
    id: 30,
    name: 'Alimento Alcon Koi - 150g',
    category: 'fish',
    image: 'https://images.petz.com.br/fotos/1656945520069.jpg',
    stock: 10,
    sold: 5,
    new_price: 66.59,
    old_price: 73.99
  },
  {
    id: 31,
    name: 'Alimento Poytara para Peixe Kinguio Bem Estar - 120g',
    category: 'fish',
    image: 'https://images.petz.com.br/fotos/1671042551874.jpg',
    stock: 10,
    sold: 5,
    new_price: 47.99,
    old_price: 52.99
  },
  {
    id: 32,
    name: 'Alimento Poytara Black Line Kinguios Floating - 400g',
    category: 'fish',
    image: 'https://images.petz.com.br/fotos/1670868626797.jpg',
    stock: 10,
    sold: 5,
    new_price: 133.19,
    old_price: 147.99
  },
  {
    id: 33,
    name: 'Ração Nutricon Goldfish Color para Peixes 20g',
    category: 'fish',
    image: 'https://images.petz.com.br/fotos/1629831301679.jpg',
    stock: 10,
    sold: 5,
    new_price: 7.19,
    old_price: 7.99
  },
  {
    id: 34,
    name: 'Alimento Alcon Shrimp Nano Sticks para Camarões Ornamentais - 36g',
    category: 'fish',
    image: 'https://images.petz.com.br/fotos/1656947269769.jpg',
    stock: 10,
    sold: 5,
    new_price: 17.09,
    old_price: 18.99
  },
  {
    id: 35,
    name: 'Alimento Poytara Black Line Garlic para Peixes - 35g',
    category: 'fish',
    image: 'https://images.petz.com.br/fotos/1671035500486.jpg',
    stock: 10,
    sold: 5,
    new_price: 32.99,
    old_price: 29.69
  },
  {
    id: 36,
    name: 'Ração Nutricon Bottom para Peixes - 110g',
    category: 'fish',
    image: 'https://images.petz.com.br/fotos/1632842639439.jpg',
    stock: 10,
    sold: 5,
    new_price: 27.89,
    old_price: 30.99
  }
]

export default all_product
