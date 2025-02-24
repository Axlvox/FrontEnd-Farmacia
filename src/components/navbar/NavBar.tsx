import React from 'react';

function Navbar() {
  return (
    <>
      <div className='w-full bg-yellow-400 text-black flex justify-center py-4'>
        <div className="container flex justify-between text-lg ml-4 mr-4">
          <div className='text-2xl font-bold uppercase'>Farmácia</div>
          <div className='flex gap-4'>
            <div className='hover:underline'>Postagens</div>
            <div className='hover:underline'>Temas</div>
            <div className='hover:underline'>Cadastrar tema</div>
            <div className='hover:underline'>Perfil</div>
            <div className='hover:underline'>Sair</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
