import React, { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Categoria from '../../../models/Categoria';
import { atualizar, buscar, cadastrar } from '../../../services/Service';
import { toastAlerta } from '../../../utils/toastAlerta';
import ListaCategorias from '../listaCategorias/ListaCategorias';
import categoriasMock from '../../mocks/categoriasMock';

function FormularioCategoria() {
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
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
            await atualizar(`/categorias`, categoria, setCategoria);
    
            alert('Categoria atualizada com sucesso')
            retornar()
    
        } catch (error: any) {
          //alert('Erro ao atualizaro')
          toastAlerta('Não é possível editar no momento', 'erro')
        }
    }
    

    retornar()
  }

  function retornar() {
    navigate("/categorias")
  }

  return (
    <>
    <div className='border flex flex-col rounded-2xl overflow-hidden justify-between bg-slate-200'>

    <div className="container flex flex-col items-center justify-center mx-auto">
      <header className='py-2 px-6 text-black font-bold text-2xl'>
      <h1 className="text-4xl text-center my-8">
        {id === undefined ? 'Cadastre uma nova categoria' : 'Editar categoria'} 
      </h1></header>

      <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
        <div className="flex flex-col gap-2">
          <label htmlFor="descricao" className='font-semibold'>Descrição da categoria</label> 
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
          className="rounded text-slate-100 bg-gray-500 hover:bg-gray-800 w-1/2 py-2 mx-auto block"
          type="submit"
        >
          {id === undefined ? 'Cadastrar' : 'Editar'}
        </button>
      </form>
    </div>
    </div>
      <ListaCategorias categorias={categoriasMock} />
      </>
  );
}

export default FormularioCategoria;
