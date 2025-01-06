import { GlobalStyle } from './GlobalStyle';
import { Audio } from 'react-loader-spinner';
import { Navigate } from 'react-router-dom';

import { useDispatch } from "react-redux";
import { fetchvisits, addCount } from "../redux/operations";
import {useEffect } from 'react';

import { Route, Routes } from 'react-router-dom';

import SharedLayout from './SharedLayout/SharedLayout';
// import { useAuth } from 'hook/useAuth';
// import { refreshUser } from 'redux/auth/operations';
// import { RestrictedRoute } from './RestrictedRoute'; 
// import { PrivateRoute } from './PrivateRoute';

import { lazy, Suspense  } from 'react';

const Home = lazy(()=> import('Pages/Home/Home'));
const AboutUs=lazy(()=>import('Pages/AboutUs/AboutUS'));
const Schedule=lazy(()=>import('Pages/Schedule/Schedule'));
const VirtualTour=lazy(()=>import('Pages/VirtualTour/VirtualTour'));
const Prayer=lazy(()=>import('Pages/Prayer/Prayer'));
const Donation=lazy(()=>import('Pages/Donation/Donation'));
const OnlineServices=lazy(()=>import('Pages/OnlineServices/OnlineServices'));
const Choir=lazy(()=>import('Pages/Choir/Choir'));
const SundaySchool=lazy(()=>import('Pages/SundaySchool/SundaySchool'));
const Feedback=lazy(()=>import('Pages/Feedback/Feedback'));

// const RegisterPage= lazy(()=> import('Pages/RegisterPage/RegisterPage'));
// const LoginPage = lazy(()=> import ('Pages/LoginPage/LoginPage'));

const ErrorPage = lazy(()=> import ('Pages/ErrorPage/ErrorPage'));

    export const App =()=> {
      const dispatch= useDispatch();
 

      useEffect(()=>{
        dispatch(fetchvisits());
    
      },[dispatch])
    
    
      useEffect(()=>{
      
        dispatch(addCount())
    
      },[dispatch])


      // const { isRefreshing } = useAuth();
    
      // useEffect(() => {
      //   dispatch(refreshUser());
    
      // }, [dispatch]);
    
  //     return isRefreshing ? (
  //       <Audio
  //       height="80"
  //       width="80"
  //       radius="9"
  //       color="green"
  //       ariaLabel="loading"
  //       wrapperStyle
  //       wrapperClass
  //     />
  // ) : (
return (
<div>
<Suspense fallback={       
        <Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />}>
          <Routes>
             <Route path = "/" element = {<SharedLayout/>}>
             <Route index element={<Navigate to="/home" />} />
             <Route path="home" element={<Home/>}/>
             <Route path="about-us" element={<AboutUs/>} />
             <Route path="schedule" element={<Schedule/>}/>
             <Route path="virtual-tour" element={<VirtualTour/>}/>
             <Route path="prayer" element={<Prayer/>}/>
             <Route path="donation" element={<Donation/>}/>
             <Route path="online-services" element={<OnlineServices/>}/>
             <Route path='choir' element={<Choir/>}/>
             <Route path='sunday-school' element={<SundaySchool/>}/>
             <Route path='feedback' element={<Feedback/>}/>

             {/* <Route path='register' element={<RegisterPage/>}/> */}
             {/* <Route path = "login" element ={<RestrictedRoute redirectTo="/" component={<LoginPage/>} />}/> */}

             <Route path="*" element={<ErrorPage/>} />
            </Route>
          </Routes>
          </Suspense>

     <GlobalStyle/>
</div>
  )
    };