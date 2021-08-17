/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import Switch from './toggle'



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar({ lang, setLang, t, currentSection, setCurrentSection }) {

  const navigation = [
    { name: t('Обо мне'), href: 'aboutMe-section', current: currentSection === "about" },
    { name: t('Услуги'), href: 'services-section', current: currentSection === "services" },
    { name: t('Методика'), href: '#', current: false },
    { name: t('Преимущества'), href: 'advantages-section', current: currentSection === "advantages" },
  ]

  const onLinkClick = (href, close) => {
    //document.getElementById(href)?.scrollIntoView({ behavior: 'smooth' })

    if (href === "aboutMe-section") {
      setCurrentSection("about")
    } else if (href === "services-section") {
      setCurrentSection("services")
    } else if (href === "aboutMe-section") {
      setCurrentSection("advantages-section")
    }

    const yOffset = -30;
    const element = document.getElementById(href);
    const y = element?.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });

    close()
  }
  return (
    <>

      <Disclosure as="nav" className="bg-white border-b-2 border-grey">
        {({ open, setOpen }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">{t("Открыть меню")}</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex-shrink-0 flex items-center">
                    <img
                      className="hidden lg:block h-8 w-auto sm:hidden"
                      src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                      alt="Workflow"
                    />
                  </div>
                  <div className="hidden lg:block sm:ml-6">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <span
                          key={item.name}
                          // href={item.href}
                          onClick={() => onLinkClick(item.href)}
                          className={classNames(
                            item.current ? 'bg-gray-900 text-white' : 'text-gray-900 hover:bg-gray-700 hover:text-white',
                            'px-3 py-2 rounded-md text-md font-bold cursor-pointer'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <Switch lang={lang} setLang={setLang} />
                  <button className="bg-gray-100 p-1 rounded-full text-gray-400 ring-gray-400 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span className="sr-only">{t("Посмотреть уведомления")}</span>
                    <BellIcon className="h-7 w-7" aria-hidden="true" />
                  </button>

                  {/* Profile dropdown */}
                  <Menu as="div" className="ml-3 relative">
                    <div>
                      <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <span className="sr-only">{t('Открыть меню пользователя')}</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              {t('Ваш профиль')}
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              {t('Настройки')}
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              {t('Выйти')}
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>

            <Disclosure.Panel className={classNames(
              open ? "mobileMenu-opened" : "mobileMenu-closed",
              "lg:hidden mobileMenu bg-white w-full"
            )}>
              {({ close }) => (
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {navigation.map((item) => (
                    <span
                      key={item.name}
                      href={item.href}
                      onClick={() => onLinkClick(item.href, close)}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-900 hover:bg-gray-700 hover:text-white',
                        'block px-3 py-2 rounded-md text-base font-medium cursor-pointer'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </span>
                  ))}
                </div>
              )}

            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  )
}
