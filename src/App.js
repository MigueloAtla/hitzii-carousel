import React from 'react'
import Carrusel from 'components/carrusel/index'
import Login from 'assests/Hitzii-login.jpeg'
import Menu from 'assests/Hitzii-menu.jpeg'
import Chat from 'assests/Hitzii-chat.jpeg'
import Logo from './assests/hitzii-logo'

function App () {
  return (
    <>
      <Logo />
      <Carrusel>
        <div>
          <img src={Login} alt='Login de Hitzii' />
        </div>
        <div>
          <img src={Menu} alt='Menu de Hitzii' />
        </div>
        <div>
          <img src={Chat} alt='Chat de Hitzii' />
        </div>
      </Carrusel>
    </>
  )
}

export default App
