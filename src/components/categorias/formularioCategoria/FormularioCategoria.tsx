import React, { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Categoria from '../../../models/Categoria'; // Importando o modelo de Categoria
import { atualizar, buscar, cadastrar } from '../../../services/Service';

function FormularioCategoria() { // Alterando o nome da função para refletir o novo componente
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria); // Alterando "Tema" para "Categoria" para refletir o novo estado

  let navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    await buscar(`/categorias/${id}`, {});
}


  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id)
    }
  }, [id])

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value
    })
  }

  async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    if (id !== undefined) {
        try {
            await atualizar(`/categorias`, categoria, setCategoria); // Removendo o último argumento
    
            alert('Categoria atualizada com sucesso')
            retornar()
    
        } catch (error: any) {
            alert('Erro ao atualizar a Categoria')
        }
    }
    

    retornar()
  }

  function retornar() {
    navigate("/categorias") // Alterando "temas" para "categorias" para refletir a nova rota de retorno
  }

  return (
    <div className="container flex flex-col items-center justify-center mx-auto">
      <h1 className="text-4xl text-center my-8">
        {id === undefined ? 'Cadastre uma nova categoria' : 'Editar categoria'} {/* Alterando "tema" para "categoria" */}
      </h1>

      <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
        <div className="flex flex-col gap-2">
          <label htmlFor="descricao">Descrição da categoria</label> {/* Alterando "tema" para "categoria" */}
          <input
            type="text"
            placeholder="Descrição"
            name='descricao'
            className="border-2 border-slate-700 rounded p-2"
            value={categoria.descricao}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <button
          className="rounded text-slate-100 bg-indigo-400 hover:bg-indigo-800 w-1/2 py-2 mx-auto block"
          type="submit"
        >
          {id === undefined ? 'Cadastrar' : 'Editar'}
        </button>
      </form>
    </div>
  );
}

export default FormularioCategoria;
