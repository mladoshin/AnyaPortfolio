import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Navbar from "../components/navbar"
import Image from "next/image"
import Card from '../components/card'
import translations from "../translations/translations"

function Bio({ t }) {
  return (
    <div className="grid w-full grid-cols-5 max-w-7xl mx-auto items-center lg:pl-10 lg:pt-10 lg:pb-10">
      <div className="lg:col-span-3 sm:col-span-5 sm:order-2 sm:px-8 sm:pb-8">
        <h1 className="text-7xl font-bold md:text-center lg:text-6xl">{t('Анна Назолина')}</h1>
        <p className="phrase md:mx-auto md:w-8/12 lg:w-9/12">{t('Даже самая длинная дорога начинается с одного первого шага')}</p>
      </div>
      <div className="lg:col-span-2 sm:order-1 sm:col-span-5">
        <div className="relative w-300px h-300px mx-auto rounded-3xl overflow-hidden ring-4 ring-red-500 ring-offset-4 my-8 shadow-xl">
          <Image src="/images/profile.jpg" layout="fill" objectFit="cover" />
        </div>

      </div>

    </div>
  )
}



export default function Home(props) {
  const gigs = [
    t("Репетитор по Английскому для начинающих"),
    t("Репетитор по Русскому языку"),
    t("Помощь с домашними заданиями ученикам начальных классов")
  ]

  console.log(props.locale)

  function t(text){
    const lang = props.locale.split("-")[0]
    
    if(lang==="en"){
      return translations[text]
    }
    return text
  }

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <div className="grid grid-cols-3 w-full">
        <div className="bg-red-500 w-full h-3 col-span-3" />
        <div className="col-span-3 sticky top-0 nav-wrapper">
          <Navbar locale={props.locale} setLocale={props.setLocale} t={t}/>
        </div>
        <div className="col-span-3 bg-gray-100 border-b-2 border-gray-200">
          <Bio t={t}/>
        </div>
        <div className="col-span-3 py-20 relative cards-wrapper">
          <div className="w-full h-full absolute top-0 z-0">
            <Image src="/images/bg.jpg" layout="fill" objectFit="cover" className="opacity-20" />
          </div>
          <div className="grid max-w-7xl mx-auto xl:gap-12 md:gap-10 sm:gap-10 z-10 relative sm:grid-cols-1 sm:px-8 xl:grid-cols-2 2xl:grid-cols-3">
            {gigs.map((gig, index) => {
              return <Card text={gig} key={index} />
            })}
          </div>
        </div>

        <div className="col-span-3 py-20 bg-gray-100 border-t-2 border-gray-200 relative adv-wrapper sm:px-4 sm:py-12">
          <div className="max-w-7xl mx-auto">
            <h1 className="font-bold text-4xl text-gray-800 font-sans sm:text-3xl sm:text-center md:text-4xl">{t('Мои преимущества')}</h1>

            <div className="flex flex-col w-full">
              <div className="flex flex-row flex-1 w-full py-10 items-center">
                <div className="w-40 text-center"><Image src="/images/idea.svg" width="50" height="50"/></div>
                <h3 className="flex-1">{t('Преимущество №1')}</h3>
              </div>
              <div className="flex flex-row flex-1 w-full py-10 items-center">
                <div className="w-40 text-center"><Image src="/images/speech.svg" width="50" height="50"/></div>
                <h3 className="flex-1">{t('Преимущество №2')}</h3>
              </div>
              <div className="flex flex-row flex-1 w-full py-10 items-center">
                <div className="w-40 text-center"><Image src="/images/teamwork.svg" width="50" height="50"/></div>
                <h3 className="flex-1">{t('Преимущество №3')}</h3>
              </div>
              
            </div>

          </div>
        </div>

      </div>
      <div className="bg-red-500 w-full h-1" />
      <footer className="relative w-full bg-white h-16 sm:px-4">

            <div className="flex flex-row max-w-7xl mx-auto py-5 sm:flex-col sm:items-center lg:flex-row">
              <div className="w-40 sm:text-center">
                <h1>{t('Контакты и адрес')}</h1>
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