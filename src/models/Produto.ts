import Categoria from './Tema';

export default interface Produto {
  id: number;
  titulo: string;
  texto: string;
  data: string;
  categoria: Categoria | null;
}