import React from "react"
import Image from "next/image"

function Hero() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-8 sm:pb-6 lg:max-w-7xl lg:px-8">
      <div className="mb-8 flex flex-wrap justify-between md:mb-16">
        <div className="mb-6 flex w-[full] flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-40">
          <h1 className="mb-4 text-4xl font-bold text-black sm:text-5xl md:mb-8 md:text-6xl">
            Elegant <span className="text-primaryColor">Furniture</span> for a
            top price!
          </h1>
          <p className="max-w-md leading-relaxed text-gray-500 xl:text-lg">
            We sell only the most exclusive and high quality furniture for your
            home elegance & simplicity.
          </p>
        </div>

        <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
          <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
            <Image
              src="/chair.jpg"
              alt="chair"
              className="h-[600px] w-[500px] object-cover object-center"
               width={400}
                          height={350}
                          priority
            />
          </div>

          <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
           <Image
              src="/lamp.jpg"
              alt="lamp"
                          className="h-[600px] w-[500px] object-cover object-center"
                          width={400}
                          height={350}
              priority
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-8 ad:flex-row">
        <div className="flex h-12 w-64 divide-x overflow-hidden rounded-lg border">
          <a
            routerLink="tables"
            className="flex w-1/3 cursor-pointer items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
          >
            Tables
          </a>

          <a
            routerLink="chairs"
            className="flex w-1/3 cursor-pointer items-center justify-center text-gray-500 transition duration-180 hover:bg-gray-100 active:bg-gray-200"
          >
            Chairs
          </a>

          <a
            routerLink="lights"
            className="flex w-1/3 cursor-pointer items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
          >
            Lights
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
