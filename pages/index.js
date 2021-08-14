import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Navbar from "../components/navbar"
import Image from "next/image"
import Card from '../components/card'

function Bio() {
  return (
    <div className="grid w-full grid-cols-5 max-w-7xl mx-auto items-center">
      <div className="col-span-3">
        <h1 className="text-7xl font-bold">Anna Nazolina</h1>
        <p className="phrase">Даже самая длинная дорога <br />начинается с одного первого шага</p>
      </div>
      <div className="col-span-2">
        <div className="relative w-300px h-300px mx-auto rounded-3xl overflow-hidden ring-4 ring-red-500 ring-offset-4 my-8 shadow-xl">
          <Image src="/images/profile.jpg" layout="fill" objectFit="cover" />
        </div>

      </div>

    </div>
  )
}



export default function Home() {
  const gigs = [
    "Репетитор по Английскому для начинающих",
    "Репетитор по Русскому языку",
    "Помощь с домашними заданиями ученикам начальных классов"
  ]

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <div className="grid grid-cols-3 w-full">
        <div className="col-span-3">
          <div className="bg-red-500 w-full h-3" />
          <Navbar />
        </div>
        <div className="col-span-3 bg-gray-100 border-b-2 border-gray-200">
          <Bio />
        </div>
        <div className="col-span-3 py-20 relative cards-wrapper">
          <div className="w-full h-full absolute top-0 z-0">
            <Image src="/images/bg.jpg" layout="fill" objectFit="cover" className="opacity-20" />
          </div>
          <div className="grid grid-cols-3 max-w-7xl mx-auto gap-20 z-10 relative">
            {gigs.map((gig, index) => {
              return <Card text={gig} key={index} />
            })}
          </div>
        </div>

        <div className="col-span-3 py-20 bg-gray-100 border-t-2 border-gray-200 relative adv-wrapper">
          <div className="max-w-7xl mx-auto">
            <h1 className="font-bold text-4xl text-gray-800 font-sans">Мои преимущества</h1>

            <div className="flex flex-col w-full">
              <div className="flex flex-row flex-1 w-full py-10 items-center">
                <div className="w-40 text-center"><Image src="/images/idea.svg" width="50" height="50"/></div>
                <h3 className="flex-1">Преимущество №1</h3>
              </div>
              <div className="flex flex-row flex-1 w-full py-10 items-center">
                <div className="w-40 text-center"><Image src="/images/speech.svg" width="50" height="50"/></div>
                <h3 className="flex-1">Преимущество №2</h3>
              </div>
              <div className="flex flex-row flex-1 w-full py-10 items-center">
                <div className="w-40 text-center"><Image src="/images/teamwork.svg" width="50" height="50"/></div>
                <h3 className="flex-1">Преимущество №3</h3>
              </div>
              
            </div>

          </div>
        </div>

      </div>
      <div className="bg-red-500 w-full h-1" />
      <footer className="relative w-full bg-white h-16">

            <div className="flex flex-row max-w-7xl mx-auto py-5">
              <div className="w-40">
                <h1>Контакты и адрес</h1>
              </div>
              <div className="flex-1 text-center">
                <h1>Copyright</h1>
              </div>
              <div className="w-40">
                
              </div>
            </div>
      </footer>

    </>
  )
}