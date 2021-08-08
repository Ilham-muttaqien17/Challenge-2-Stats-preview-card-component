import Head from 'next/head'
import LeftSide from '../components/LeftSide'
import RightSide from '../components/RightSide'

export default function Home() {
  return (
    <div className="flex items-center min-h-screen py-16 px-5 bg-primary-very-dark-blue">
      <Head>
        <title>Challenge Start Preview Card Component</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="flex flex-col-reverse md:flex-row mx-auto w-full md:w-10/12">
        <LeftSide />
        <RightSide />
      </div>
        
      
      
    </div>
  )
}
