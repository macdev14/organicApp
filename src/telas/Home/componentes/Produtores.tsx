import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';
import {carregaProdutores} from '../../../servicos/carregaDados';
import produtor from '../../../types/Produtor';
import Topo from './Topo';
import Produtor from './Produtor';

const TopoLista = (propsin: {titulo: string | undefined}) => (
  <>
    <Topo />
    <Text style={estilos.titulo}>{propsin?.titulo}</Text>
  </>
);
export default function Produtores() {
  // const [titulo, setTitulo] = useState<String>();
  // const [lista, setLista] = useState<Lista[]>();
  const [produtores, setProdutores] = useState<produtor>();
  useEffect(() => {
    const retorno = carregaProdutores();
    // setTitulo(retorno.titulo);
    // setLista(retorno.lista);
    setProdutores(retorno);
  }, []);

  return (
    <FlatList
      data={produtores?.lista}
      renderItem={({item}) => <Produtor {...item} />}
      keyExtractor={({nome}) => nome}
      ListHeaderComponent={<TopoLista titulo={produtores?.titulo} />}
    />
  );
}

const estilos = StyleSheet.create({
  titulo: {
    fontSize: 20,
    lineHeight: 32,
    marginHorizontal: 16,
    marginTop: 16,
    fontWeight: 'bold',
    color: '#464646',
  },
});
