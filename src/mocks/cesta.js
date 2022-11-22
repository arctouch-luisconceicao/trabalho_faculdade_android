import logo from '../../assets/logo.png';

import vinho from '../../assets/produtos/vinho.png';
import panetone from '../../assets/produtos/panetone.png';
import chocolates from '../../assets/produtos/chocolates.png';
import conservas from '../../assets/produtos/conservas.png';
import cocacola from '../../assets/produtos/cocacola.png';

const cesta = {
  topo: {
    titulo: "Feliz Natal",
  },
  detalhes: {
    nome: "Cesta de Natal",
    logoFazenda: logo,
    nomeFazenda: "Angeloni",
    descricao: "Uma cesta com produtos selecionados para sua cesta de natal",
    preco: "R$ 149,90",
    botao: "Comprar",
  },
  itens: {
    titulo: "Itens da cesta",
    lista: [
      {
        nome: "Vinho - San Severo",
        imagem: vinho,
      },
      {
        nome: "Panetone - Bauducco",
        imagem: panetone,
      },
      {
        nome: "Chocolates",
        imagem: chocolates,
      },
      {
        nome: "Conservas",
        imagem: conservas,
      },
      {
        nome: "Refrigerante - Coca Cola",
        imagem: cocacola,
      }
    ]
  }
}

export default cesta;