import React from 'react'
import AuthNavBar from '../../../components/nav/auths/navs/NavBar';
import LoginForm from '../../../components/nav/auths/forms/LoginForm';



export default function SignIn() {
  return <div className='h-100' >
  <AuthNavBar appName="Psychology" imgLink="https://t4.ftcdn.net/jpg/02/91/55/25/240_F_291552599_72t3F1o1wRKgelRwN2pSgKapXaTbZObX.jpg"></AuthNavBar>
  <LoginForm></LoginForm>
  </div>;
  
};

