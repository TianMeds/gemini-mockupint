import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const LandingHeader = () => {
  return (
  <header className="bg-gray-900">
    <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
      <a className="block text-teal-600 dark:text-teal-300" href="#">
        <span className="sr-only">Home</span>
        <Image src={'/ThirdLogo.svg'} width={160} height={100} alt='logo'></Image>
      </a>

      <div className="flex flex-1 items-center justify-end md:justify-between">
        <nav aria-label="Global" className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm">
            <li>
              <a
                className="text-white transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                href="#about"
              >
                About
              </a>
            </li>

            <li>
              <a
                className="text-white transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                href="#feature"
              >
                Features
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <div className="sm:flex sm:gap-4">
            <a
              className="block w-full rounded border border-blue-600 bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
              href={process.env.NEXT_PUBLIC_REDIRECT}
            >
              Login
            </a>

            <a
              className="block w-full rounded border border-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-600  active:bg-blue-500 sm:w-auto"
              href={process.env.NEXT_PUBLIC_REDIRECT}
            >
              Register
            </a>
          </div>

          <button
            className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
          >
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </header>
  )
}

export default LandingHeader