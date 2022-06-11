import React from 'react'
import { Header, Blog, Features, Footer, Whatgpt3, Possibility } from './container'
import {Cta, Navbar, Brand} from './components'
import './App.css'


const app = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <Whatgpt3/>
      <Features/>
      <Possibility/>
      <Cta/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default app