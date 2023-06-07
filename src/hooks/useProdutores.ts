import {useEffect, useState} from 'react';
import {carregaProdutores} from '../servicos/carregaDados';
import ILista from '../types/Lista';
import produtor from '../types/Produtor';

export default function useProdutores() {
  const [titulo, setTitulo] = useState<string>('');
  const [lista, setLista] = useState<ILista[]>([]);

  useEffect(() => {
    const retorno: produtor = carregaProdutores();
    setTitulo(retorno.titulo);
    setLista(retorno.lista);
  }, []);

  return [titulo, lista];
}
