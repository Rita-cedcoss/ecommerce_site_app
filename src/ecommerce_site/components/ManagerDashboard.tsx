import React from 'react'
import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { state } from '../typeProps'
import AdminNav from './AdminNav'
import Footer from './Footer'

const ManagerDashboard = () => {
  let useSelectorApp:TypedUseSelectorHook<state>=useSelector;
  let state=useSelectorApp(state=>state);
  console.log(state);
  return (

    <>
    <AdminNav/>
    <div></div>
    <Footer/>
    </>
  )
}

export default ManagerDashboard