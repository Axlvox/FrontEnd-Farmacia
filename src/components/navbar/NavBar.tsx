import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'



function Navbar() {
  let navigate = useNavigate()
  

  return (
    <>
        <div className='w-full bg-yellow-400 text-black flex justify-center py-4'>
        <div className="container flex justify-between text-lg ml-4 mr-4">
          <Link to='/home' className='text-2xl font-bold uppercase'>Farmácia</Link>

            <div className='flex gap-4'>
            <Link to='/produtos' className='hover:underline'>Produtos</Link>
            <Link to='/categorias' className='hover:underline'>Categorias</Link>
            <Link to='/cadastroCategoria' className='hover:underline'>Cadastrar Categoria</Link>
              <Link to='/home/' className='hover:underline'>Sair</Link>
             
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar