import React from 'react';
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native';

import Texto from '../../../componentes/Texto';

export default function Detalhes({ nome, logoLoja, nomeLoja, descricao, preco, botao }) {
  return <>
    <Texto style={estilos.nome}>{ nome }</Texto>
    <View style={estilos.loja}>
      <Image source={logoLoja} style={estilos.imagemLoja} />
      <Texto style={estilos.nomeLoja}>{ nomeLoja }</Texto>
    </View>
    <Texto style={estilos.descricao}>{ descricao }</Texto>
    <Texto style={estilos.preco}>{ preco }</Texto>

    <TouchableOpacity style={estilos.botao} onPress={() => {}}>
      <Texto style={estilos.textoBotao}>{ botao }</Texto>
    </TouchableOpacity>
  </>
}

const estilos = StyleSheet.create({
  nome: {
    color: "#464646",
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
  },
  loja: {
    flexDirection: "row",
    paddingVertical: 12,
  },
  imagemLoja: {
    width: 32,
    height: 32,
  },
  nomeLoja: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
  },
  descricao: {
    color: "#A9A9A9",
    fontSize: 16,
    lineHeight: 22,
  },
  preco: {
    color: "green",
    fontWeight: "bold",
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  },
  botao: {
    marginTop: 16,
    backgroundColor: "#FF6347",
    paddingVertical: 16,
    borderRadius: 6,
  },
  textoBotao: {
    textAlign: "center",
    color: "#ffffff",
    fontSize: 16,
    lineHeight: 26,
    fontWeight: "bold",
  },
})
