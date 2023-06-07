import React from 'react';

import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {IEstrela} from '../types/Estrela';
import estrela from '../assets/estrela.png';
import estrelaCinza from '../assets/estrelaCinza.png';
export default function Estrela({
  onPress,
  desabilitada = true,
  preenchida,
  grande = false,
}: IEstrela) {
  const estilos = estilosFuncao(grande);

  const getImagem = () => {
    if (preenchida) {
      return estrela;
    }
    return estrelaCinza;
  };

  return (
    <TouchableOpacity onPress={onPress} disabled={desabilitada}>
      <Image source={getImagem()} style={estilos.estrela} />
    </TouchableOpacity>
  );
}

const estilosFuncao = (grande: boolean | undefined) =>
  StyleSheet.create({
    estrela: {
      width: grande ? 36 : 12,
      height: grande ? 36 : 12,
      marginRight: 2,
    },
  });
