import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'



function Navbar() {
  let navigate = useNavigate()
  

  return (
    <>
     <div className='w-full bg-indigo-900 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
          <Link to='/home' className='text-2xl font-bold uppercase'>Farmácia</Link>

            <div className='flex gap-4'>
            <div className='hover:underline'>Produtos</div>
            <Link to='/categorias' className='hover:underline'>Categorias</Link>
            <Link to='/cadastroCategoria' className='hover:underline'>Cadastrar Categoria</Link>
              <div className='hover:underline'>Perfil</div>
              <Link to='/home/' className='hover:underline'>Sair</Link>
             
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar