import { Navigate, Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import RecoverPage from '../pages/RecoverPage';
import StartPage from '../pages/StartPage';


//Rutas de autentificacion
const AuthRoutes = () => {
  return (
    <Routes>
        <Route path="login" element={ <LoginPage /> } />
        <Route path="recover" element={ <RecoverPage /> } />
        <Route path="register" element={ <RegisterPage /> } />
        <Route path="start" element={ <StartPage /> } />

        
        {/*En caso de que quieran entrar a otra ruta mandara al login */}
        <Route path="/*" element={ <Navigate to='/auth/start' /> } />

    </Routes>
  )
}

export default AuthRoutes