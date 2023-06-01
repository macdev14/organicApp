/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */

/* eslint-disable comma-dangle */
import { Image } from 'react-native/types';
import salad from '../assets/produtores/salad.png';
import green from '../assets/produtores/green.png';
import jennyJack from '../assets/produtores/jenny-jack.png';
import grow from '../assets/produtores/grow.png';
import potager from '../assets/produtores/potager.png';
import produtor from '../types/Produtor';




const gerarNumeroAleatorio = (min : number, max: number)=>{
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const produtores: produtor = {
    titulo: "Produtores",
    lista: [
        {
           nome: "Green",
           imagem: green,
           distancia: `${gerarNumeroAleatorio(1,500)}m`,
           estrelas: gerarNumeroAleatorio(1,5)
        },
        {
            nome: "Salad",
            imagem: salad,
            distancia: `${gerarNumeroAleatorio(1,500)}m`,
            estrelas: gerarNumeroAleatorio(1,5)
         },
         {
            nome: "Jenny Jack Farm",
            imagem: jennyJack,
            distancia: `${gerarNumeroAleatorio(1,500)}m`,
            estrelas: gerarNumeroAleatorio(1,5)
         },
         {
            nome: "Grow",
            imagem: grow,
            distancia: `${gerarNumeroAleatorio(1,500)}m`,
            estrelas: gerarNumeroAleatorio(1,5)
         },
         {
            nome: "Potager",
            imagem: potager,
            distancia: `${gerarNumeroAleatorio(1,500)}m`,
            estrelas: gerarNumeroAleatorio(1,5)
         },
    ]
};

export default produtores;
