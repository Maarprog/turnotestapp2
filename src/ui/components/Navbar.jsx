import React, { useState } from 'react';
import { CiMenuBurger } from "react-icons/ci";
import grafikdesigner from '../../assets/grafikdesigner.png';
import { useNavigate } from 'react-router-dom';
//import reactLogo from './assets/react.svg'
//src/assets/grafikdesigner.png

const Navbar = () => {

  //Logica para abrir y cerrar boton menu en mobile
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  //Permite desconectarnos 
  //Permite navegar a una ruta
  const navigate = useNavigate();


  const onLogout = ( options ) => {


    //console.log(options)


    switch( options ) {

      case 0: {
        console.log('Home')
        navigate('/auth/start');
        break;
      }
      case 1: {
        console.log('Login')
        navigate('/auth/login');
        break;
      }
      case 2: {
        //console.log('chat')
        navigate('/auth/');
        break;
      }

      default:
        return;
    }


  }




  return (

    
    //nav: Estructura basica del Navbar
    <nav className="bg-gray-500">
      <div className="h-16 flex justify-between items-center">
        {/*Logo */}
        <div className="text-white text-2xl font-bold px-4">
            <img src={grafikdesigner} alt="" className="h-10" />
        </div>

        {/*Buttons Options*/}
        <div className='hidden sm:block'>
            <a href="" className='text-gray-100 text-lg px-4' onClick={ () => onLogout(0) }>Home</a>
            <a href="" className='text-gray-100 text-lg px-4' onClick={ () => onLogout(1) }>Log In</a>
        </div>
        {/*Buttons Menu Options Mobile*/}
        <button onClick={() => setIsOpen(!isOpen)} className='block sm:hidden px-4 text-3xl text-white'><CiMenuBurger /></button>
      </div>

      
      {/*Buttons Options Mobile*/}
      <div className={`${
            isOpen ? "block" : "hidden"
            } sm:hidden bg-gray-100 space-y-2 pb-3`}>

            <a href="" className='text-gray-600 text-lg px-4 block' onClick={ () => onLogout(0) }>Home</a>
            <a href="" className='text-gray-600 text-lg px-4 block' onClick={ () => onLogout(1) }>Log In</a>
      </div>
      
    </nav>
  );
};

export default Navbar;
