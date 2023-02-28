import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import JustDropped from '../components/JustDropped'
import PCTier from '../components/PCTier'

export default function Home() {
  return (
    <div className=''>
      <Header />
      <Banner />
      <JustDropped />
      <PCTier />
    </div> 
  )
}