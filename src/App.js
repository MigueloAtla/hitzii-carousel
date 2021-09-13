import React from 'react'
import Carrusel from 'components/carrusel/index'
import Login from './assests/Register-min.jpg'
import Menu from './assests/Plugin_Store-min.jpg'
import Chat from './assests/Chat_chanel-min.jpg'
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
