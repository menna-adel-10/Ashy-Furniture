import React from 'react'

function Header() {
  return (
           <header className="bg-white p-2 border-b border-solid">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <h1 className="sm:text-2xl font-bold">
              Ashy<span className="text-primaryColor">Furniture</span>
            </h1>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                 <li>
              <a className="text-gray-500 text-[18px] font-medium transition hover:text-primaryColor" href="/"> Chairs </a>
            </li>

            <li>
              <a className="text-gray-500 text-[18px] font-medium transition hover:text-primaryColor" href="/"> Tables </a>
            </li>

            <li>
              <a className="text-gray-500 text-[18px] font-medium transition hover:text-primaryColor" href="/"> Lights </a>
            </li>

            <li>
              <a className="text-gray-500 text-[18px] font-medium transition hover:text-primaryColor" href="/"> All Products </a>
            </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <a
                className="rounded-md bg-primaryColor px-5 py-2.5 text-sm font-medium text-white shadow"
                href=""
              >
                <i className="fa-solid fa-cart-plus text-xl hover:opacity-[0.9]"></i>
              </a>

              <div className="hidden sm:flex">
                <a
                  className="rounded-md bg-gray-100 hover:bg-gray-200 px-5 py-2.5 text-sm font-medium text-primaryColor"
                  href=""
                >
                  Register
                </a>
              </div>
            </div>

            <div className="block md:hidden">
              <button
                className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
               
              >
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
      </div>
    </header>
    
  )
}

export default Header