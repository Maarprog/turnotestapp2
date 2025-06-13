import React, { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import AuthRoutes from '../auth/routes/AuthRoutes';
//import TakorsendRoutes from '../startcomponents/routes/TakorsendRoutes';
import { useDispatch, useSelector } from 'react-redux';





const AppRouter = () => {

  //Nos permite ver el estatus de la app
  //const { status } = useSelector( state => state.auth );



  //Nos permite usar funciones del thuks.js y el dispatch de cada funcion
  //const dispatch = useDispatch();



    //console.log(status)
  return (
    <Routes>

      {/*Permite que existan las rutas de autenticado solo si el usuario esta autenticando, lo que protege las rutas 
      {
        ( status === 'authenticated' ) 
        ? <Route path="/*" element={ <TakorsendRoutes /> }/>
        : <Route path="/auth/*" element={ <AuthRoutes /> }/>
      }
        */}
        {
            false
            ? <Route path="/*" element={ <AuthRoutes /> }/>
            : <Route path="/auth/*" element={ <AuthRoutes /> }/>
        }
        

        {/*Login y Registro, cualquier path que comience con auth nos mandara a las rutas de AuthRoutes */}
        {/* <Route path="/auth/*" element={ <AuthRoutes /> }/>


        {/*takorsend, cualquier otra ruta que no empiece por Auth nos mandara a las rutas de JournalRoutes 
        <Route path="/*" element={ <TakorsendRoutes /> }/> */}
        {/*En caso de problemas manda al login */}
  


    </Routes>
  )
}

export default AppRouter