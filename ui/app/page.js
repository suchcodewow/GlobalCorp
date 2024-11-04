import hero from '@@/img/hero.jpg'
import Image from 'next/image'
import Link from 'next/link'
import { BoltIcon, HomeIcon, KeyIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Comprehensive Home Coverage',
    description:
      'Homeowners insurance protects you from fires, lightning, wind, thefts and vandalism.',
    icon: HomeIcon,
  },
  {
    name: '"No-surprise guarantee"',
    description:
      "You'll pay nothing beyond your agreed on deductible if your vehicle is involved in an accident- guaranteed.",
    icon: KeyIcon,
  },
  {
    name: 'Fast Claim Response',
    description:
      "You'll be whole again fast with the fastest claim service on the planet.  ",
    icon: BoltIcon,
  },
]

export default function Home() {
  return (
    <>
      <div className="relative drop-shadow">
        <div>
          {/* max-x-? value below controls size of hero text & image */}
          <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-3xl lg:pb-28 xl:pb-32">
            <svg
              className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <main className="px-4 sm:px-6 lg:max-w-2xl lg:px-8 lg:pt-10">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-5xl">
                  <span className="bg-gradient-to-r from-sky-600 via-cyan-600 to-lime-600 bg-clip-text font-extrabold text-transparent">
                    Your one stop shop for non-stop shopping!
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                  Everything you need with one convenient account! Enjoy our
                  full-featured catalog, pay bills or transfer funds, and
                  quickly find the right insurance that perfectly fits{' '}
                  <span className="bg-gradient-to-r from-sky-600 via-cyan-600 to-lime-600 bg-clip-text font-extrabold text-transparent">
                    YOUR
                  </span>{' '}
                  unique needs.
                </p>
                <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                  I want to start...
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link
                      href="/store"
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-sky-800 px-8 py-3 text-base font-medium text-white md:px-10 md:py-4 md:text-lg"
                    >
                      Shopping
                    </Link>
                  </div>
                  <div className="mt-3 sm:ml-3 sm:mt-0">
                    <a
                      href="/banking"
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-sky-800 px-8 py-3 text-base font-medium text-white md:px-10 md:py-4 md:text-lg"
                    >
                      Banking
                    </a>
                  </div>
                  <div className="mt-3 sm:ml-3 sm:mt-0">
                    <a
                      href="/insurance"
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-sky-800 px-8 py-3 text-base font-medium text-white md:px-10 md:py-4 md:text-lg"
                    >
                      A quote
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-2/3">
          <Image
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
            src={hero}
            alt=""
          />
        </div>
      </div>
      <div className="my-1" />
      <div className="mx-auto bg-white bg-[url('/images/vehicle.svg')] bg-[length:500px] bg-top bg-no-repeat pt-48 text-center">
        <div className="bg-white">
          <p className="pt-4 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
            Insurance that fits like a glove
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-500">
            Protecting what matters to you shouldn&apos;t be a hassle. Find the
            coverage you need and get the peace of mind you deserve.
          </p>
        </div>
        <div className="mt-10 px-4 sm:px-6 lg:px-8">
          <dl className="space-y-10 md:grid md:grid-cols-3 md:gap-x-14 md:gap-y-10 md:space-y-0">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="ml-16 mt-2 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
          <div className="my-12 flex h-48 justify-center py-12">
            {/* image */}
            <div className="relative w-64">
              <Image
                src="/images/neighborhood.svg"
                alt="neighboorhood"
                width="500"
                height="100"
                className="object-scale-down"
              />
            </div>
            {/* CTA */}
            <div className="ml-6 text-lg">
              <p>You&apos;re minutes away from coverage!</p>
              <div className="">
                <div className="my-4 flex space-x-4">
                  <Link
                    href="/insurance"
                    className="rounded-full bg-sky-700 px-8 py-2 text-xl text-white shadow-md hover:bg-sky-800"
                  >
                    Let&apos;s go!
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
