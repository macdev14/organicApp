import React, {ReactNode, useState} from 'react';
import {StyleSheet, View} from 'react-native';

import {IEstrela} from '../types/Estrelas';
import Estrela from './Estrela';

export default function Estrelas({
  quantidade,
  editavel = false,
  grande = false,
}: IEstrela) {
  const [quantidadeNova, setQuantidade] = useState<number>(quantidade);

  const RenderEstrelas = () => {
    const listaEstrelas = [];
    for (let i = 0; i < 5; i++) {
      listaEstrelas.push(
        <Estrela
          key={i}
          onPress={() => setQuantidade(i + 1)}
          desabilitada={!editavel}
          preenchida={i < quantidadeNova}
          grande={grande}
        />,
      );
    }
    return listaEstrelas;
  };

  return (
    <View style={estilos.estrelas}>
      <RenderEstrelas />
    </View>
  );
}

const estilos = StyleSheet.create({
  estrelas: {
    flexDirection: 'row',
  },
});
