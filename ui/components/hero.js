import Image from 'next/image'
import hero1 from '@@/img/hero1.jpg'
import hero2 from '@@/img/hero2.jpg'
import hero3 from '@@/img/hero3.jpg'
import logo from '@/public/images/logo.png'

const offerings = [
  {
    name: 'Banking',
    role: 'Epic Personal Banking',
    imageUrl: hero1,
  },
  {
    name: 'Insurance',
    role: 'Built for you',
    imageUrl: hero2,
  },
  {
    name: 'Online Store',
    role: 'From boutique to bulk shipped directly to you',
    imageUrl: hero3,
  },
]

export default function Hero() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl pt-4 lg:mx-0">
          <h2 className="text-sm font-bold tracking-tight text-green-400 sm:text-4xl">
            What we offer
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We are a broad reaching organization with solutions for everything
            you need!
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {offerings.map((offering) => (
            <li key={offering.name}>
              <Image
                priority
                className="aspect-[3/2] w-full rounded-2xl object-cover"
                src={offering.imageUrl}
                alt=""
              />
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                {offering.name}
              </h3>
              <p className="text-base leading-7 text-gray-600">
                {offering.role}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
