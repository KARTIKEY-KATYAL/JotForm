import React from 'react'

const Hero = () => {
  return (
    <div>
      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r from-slate-300 via-blue-500 to-white bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              Create Your Form
              <span className="sm:block"> In Seconds not Hours </span>
            </h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione expedita a provident magnam dolor sint, debitis ad atque eos quo!
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                href="#"
              >
                Get Started
              </a>

              <a
                className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero
