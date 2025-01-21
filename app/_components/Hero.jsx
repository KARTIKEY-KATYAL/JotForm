import { AtomIcon, Edit, Share2 } from 'lucide-react'
import React from 'react'

function Hero() {
  return (
    // bg-[url('/grid.svg')]
    <section className=" h-[500px] bg-[url('/grid.svg')] bg-blue-50 ">
      <div className="mx-auto max-w-screen-xl z-30 px-4 pt-32 lg:flex">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Create your Form
            <strong className="font-extrabold text-green-600 sm:block">
              {" "}
              In Seconds Not in Hours{" "}
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed text-gray-500">
            Generate, publish and share your form right away with AI. Dive into
            insightful results, charts and analytics.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full font-bold  bg-red-600 rounded-full px-12 py-3 text-sm  text-white shadow hover:bg-blue-700 transition-all duration-300 hover:scale-125 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
              href="/dashboard"
            >
              Create AI Form
            </a>
          </div>
        </div>
      </div>
      {/* <img src='/grid.svg' className=' absolute w-full h-[400px] '/> */}
      <section className="text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-56 ">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              How it Works
            </h2>

            <p className="mt-4 text-gray-300">
              Create powerful, customized forms in seconds with Jotform AI.
              Simply describe your needs, and our AI generates ready-to-use
              forms tailored to your goals—no coding required. Save time and
              build smarter today!
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <a
              className="block rounded-xl border p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
              href="#"
            >
              <AtomIcon className="h-8 w-8" />
              <h2 className="mt-4 text-xl font-bold">Write Your Form Prompt</h2>
              <p className="mt-1 text-sm">
                Quickly describe your form needs, and let AI do the rest.
              </p>
            </a>

            <a
              className="block rounded-xl border p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
              href="#"
            >
              <Edit className="h-8 w-8" />
              <h2 className="mt-4 text-xl font-bold">Edit Your Form</h2>
              <p className="mt-1 text-sm">
                Fine-tune fields and design to match your vision effortlessly.
              </p>
            </a>

            <a
              className="block rounded-xl border p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
              href="#"
            >
              <Share2 className="h-8 w-8" />
              <h2 className="mt-4 text-xl font-bold">
                Share & Collect Responses
              </h2>
              <p className="mt-1 text-sm">
                Share your form instantly and start gathering responses
                seamlessly.
              </p>
            </a>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Hero