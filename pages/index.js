import {useState} from "react"
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Navbar from "../components/navbar"
import Image from "next/image"
import Card from '../components/card'
import translations from "../translations/translations"
import MyModal from '../components/modal'

function Bio({ t, lang }) {
  const langClass = lang === "en" ? " phrase-en" : " phrase-ru"

  return (
    <div className="grid w-full grid-cols-5 max-w-7xl mx-auto items-center lg:pl-10 lg:pt-10 lg:pb-10 relative">
      <div className="lg:col-span-3 sm:col-span-5 sm:order-2 sm:px-8 sm:pb-8">
        <h1 className="text-7xl font-bold md:text-center lg:text-6xl nameText">{t('Анна Назолина')}</h1>
        <p className="md:mx-auto md:w-8/12 lg:w-9/12 aboutMe">{t('Репетитор по английскому/русскому языку для учеников начальных классов; подготовка к школе и помощь с домашними заданиями')}</p>
      </div>
      <div className="lg:col-span-2 sm:order-1 sm:col-span-5">
        <div className="relative w-300px h-300px mx-auto rounded-3xl overflow-hidden ring-4 ring-red-500 ring-offset-4 my-8 shadow-xl">
          <Image src="/images/profile.jpg" layout="fill" objectFit="cover" />
        </div>

      </div>
      <div className="col-span-5 order-3 py-12 sm:px-8">
        <p className={"md:mx-auto md:w-8/12 lg:w-9/12 text-gray-800" + langClass}>{t('"Даже самая длинная дорога начинается с одного первого шага"')}</p>
      </div>

    </div>
  )
}

function About({ t }) {
  return (
    <div className="col-span-3 border-b-2 border-gray-200 bg-white z-50">
      <div className="max-w-7xl mx-auto mt-10 mb-14 sm:px-8 xl:px-0">
        <h1 className="text-center font-bold text-4xl text-gray-800 ">{t("Обо мне")}</h1>
        <p className="textAbout sm:text-3xl xl:text-4xl">Закончила школу с красным аттестатом. Сдала английский и русский языки более, чем на 90%. Являюсь неоднократным победителем различных конкурсов по английскому языку, русскому языку, литературе, конкурсов чтецов. Целеустремленная и находчивая- я найду подход к Вашему ребёнку и сумею заинтересовать его обучением.</p>
      </div>
    </div>
  )
}

function AdvantagesSection({ t }) {
  return (
    <div className="col-span-3 py-20 border-t-2 border-gray-200 relative adv-wrapper sm:px-4 sm:py-12 bg-white z-10">
      <div className="h-full absolute top-0 w-screen left-0">
        <Image src="/images/bg-en.svg" layout="fill" objectFit="cover" className="bg-en" objectPosition="center bottom"/>
      </div>
      <div className="max-w-7xl mx-auto">
        <h1 className="font-bold text-4xl text-gray-800 font-sans sm:text-3xl sm:text-center md:text-4xl">{t('Мои преимущества')}</h1>

        <div className="flex flex-col w-full">
          <div className="flex flex-row flex-1 w-full py-10 items-center">
            <div className="w-40 text-center"><Image src="/images/idea.svg" width="50" height="50" /></div>
            <h3 className="flex-1">{t('Преимущество №1')}</h3>
          </div>
          <div className="flex flex-row flex-1 w-full py-10 items-center">
            <div className="w-40 text-center"><Image src="/images/speech.svg" width="50" height="50" /></div>
            <h3 className="flex-1">{t('Преимущество №2')}</h3>
          </div>
          <div className="flex flex-row flex-1 w-full py-10 items-center">
            <div className="w-40 text-center"><Image src="/images/teamwork.svg" width="50" height="50" /></div>
            <h3 className="flex-1">{t('Преимущество №3')}</h3>
          </div>

        </div>

      </div>
    </div>
  )
}

function ServicesGrid({ gigs, setIsOpen }) {
  return (
    <div className="col-span-3 py-20 relative cards-wrapper z-10 bg-white">
      <div className="w-full h-full absolute top-0">
        <Image src="/images/bg.jpg" layout="fill" objectFit="cover" className="opacity-20" />
      </div>
      <div className="grid max-w-7xl mx-auto xl:gap-12 md:gap-10 sm:gap-10 z-10 relative sm:grid-cols-1 sm:px-8 xl:grid-cols-2 2xl:grid-cols-3">
        {gigs.map((gig, index) => {
          return <Card text={gig} key={index} setIsOpen={setIsOpen}/>
        })}
      </div>
    </div>
  )
}

function Footer({ t }) {
  return (
    <>
      <div className="bg-red-500 w-full h-1" />
      <footer className="relative w-full bg-white h-16 sm:px-4">

        <div className="flex flex-row max-w-7xl mx-auto py-5 sm:flex-col sm:items-center lg:flex-row">
          <div className="w-40 sm:text-center">
            <h1>{t('Контакты и адрес')}</h1>
          </div>
          <div className="flex-1 text-center">
            <h1>Copyright</h1>
          </div>
          <div className="w-40"></div>
        </div>
      </footer>
    </>
  )
}

function BioSection({ t, lang }) {
  return (
    <div className="col-span-3 bg-gray-100 border-b-2 border-gray-200 relative">

      {/* Background image (beta) */}
      <div className="w-full h-full fixed top-0">
        <Image src="/images/bg-en.svg" layout="fill" objectFit="cover" className="bg-en" />
      </div>
      {/* Background image (beta) */}

      <Bio t={t} lang={lang} />
    </div>
  )
}

function NavHeader({ lang, setLang, t}) {
  return (
    <>
      <div className="bg-red-500 w-full h-3 col-span-3" />
      <div className="col-span-3 sticky top-0 nav-wrapper">
        <Navbar lang={lang} setLang={setLang} t={t} />
      </div>
    </>
  )
}

export default function Home(props) {

  let [isOpen, setIsOpen] = useState(false)

  const gigs = [
    t("Репетитор по Английскому для начинающих"),
    t("Репетитор по Русскому языку"),
    t("Помощь с домашними заданиями ученикам начальных классов"),
    t("Подготовка к школе")
  ]

  console.log(props.lang)

  function t(text) {

    if (props.lang === "en") {
      return translations[text]
    }
    return text
  }

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <MyModal isOpen={isOpen} setIsOpen={setIsOpen}/>
      <div className="grid grid-cols-3 w-full">

        <NavHeader t={t} lang={props.lang} setLang={props.setLang}/>

        <BioSection t={t} lang={props.lang} />

        <About t={t} />

        <ServicesGrid gigs={gigs} setIsOpen={setIsOpen}/>

        <AdvantagesSection t={t} />

      </div>

      <Footer t={t} />

    </>
  )
}