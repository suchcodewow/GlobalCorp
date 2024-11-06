import { FullPage } from '@@/core/Layouts'
import { cookies } from 'next/headers'
import Image from 'next/image'
import {
  BoltIcon,
  HomeIcon,
  KeyIcon,
  UserGroupIcon,
  ClockIcon,
} from '@heroicons/react/24/outline'

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

const collecticareFeatures = [
  {
    name: 'Boutique Feel, Abyss-sized Resources',
    description:
      "Our core princicples derive from a single idea: LoveCrafted (TM).  We proudly insure your priceless items our competition is too shocked to even consider.  Our 'above and beyond' attitude is backed by virtually limitless resources.  You can rest easy!",
    icon: HomeIcon,
  },
  {
    name: 'Tested Experts',
    description:
      "Our appraisal experts will work tirelessly (where applicable labor laws don't interfere) to offer you the best possible rates. We routinely complete industory audits from agencies most people don't even know about- or are even remotely legal.",
    icon: UserGroupIcon,
  },
  {
    name: 'A Rich History of Commitment',
    description:
      "Hundreds of years ago, it took months of correspondence to insure even mundane items.  But from day one we've taken extreme care in our commitment to our customers.",
    icon: ClockIcon,
  },
  {
    name: 'Fast Responses',
    description:
      "We were made aware of the internet recently and found initial success with our 'Collecticare' facade.  Building on the success we're now offering nearly instant quotes in regions where the ley lines go undisturbed.",
    icon: BoltIcon,
  },
]

const taglines = [
  { text: "And we never call the Police.  Never even heard of 'em." },
  { text: "And we don't ask questions." },
  { text: "Even when it's super.... super.... weird." },
  { text: "Even when it's the skeletons in your closet." },
]
const tagline = taglines[Math.floor(Math.random() * taglines.length)]

export default function Insurance() {
  const enableCollecticare = process.env.enableCollecticare
  return (
    <FullPage>
      <div className="flex min-h-screen w-full flex-col">
        {/* Collecticare frame */}
        {enableCollecticare === 'on' ? (
          <div className="mx-auto max-w-7xl bg-gray-100 pt-6">
            {/* Announcements Block */}
            <div className="flex flex-col items-center">
              <p className="p-4 text-center text-2xl leading-8 tracking-tight text-gray-900">
                <span className="block bg-gradient-to-r from-sky-600 via-cyan-600 to-lime-600 bg-clip-text font-extrabold text-transparent xl:inline">
                  GlobalCorp
                </span>
                &nbsp;is proud to announce our merger with Collecticare!
              </p>
              <div className="relative h-64 w-64">
                <Image
                  src="/images/collecticare.svg"
                  alt="credicare logo"
                  fill
                  priority="true"
                />
              </div>
              <p>We care about whatever you collect-</p>
              <p>{tagline.text}</p>

              {/* Collecticare Features */}
              <div className="mt-10 px-4 sm:px-6 lg:px-8">
                <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-14 md:gap-y-10 md:space-y-0">
                  {collecticareFeatures.map((feature) => (
                    <div key={feature.name} className="relative">
                      <dt>
                        <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-slate-500 text-white">
                          <feature.icon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
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
              </div>
              <div className="">
                <div className="my-4 flex-row items-center space-x-4 md:flex">
                  <a
                    href="/customquote"
                    className="flex rounded-full bg-slate-500 px-8 py-2 text-xl text-white shadow-md hover:bg-slate-700"
                  >
                    Insure specialty item
                  </a>
                  <p className="flex text-lg">
                    Or continue to standard insurance...
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
        {/* Page Background */}
        <div className="mx-auto max-w-7xl bg-white pt-4">
          <div className="bg-[url('/images/vehicle.svg')] bg-[length:500px] bg-top bg-no-repeat pt-48"></div>
          <div className="bg-white lg:text-center">
            <p className="pt-4 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
              Insurance that fits like a glove
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Protecting what matters to you shouldn&apos;t be a hassle. Find
              the coverage you need and get the peace of mind you deserve.
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
            <div className="my-12 flex h-48 justify-center md:py-12">
              {/* image */}
              <div className="relative md:w-64">
                <Image
                  src="/images/neighborhood.svg"
                  fill
                  alt="neighborhood"
                  className="object-scale-down"
                />
              </div>
              {/* CTA */}
              <div className="ml-6 text-lg">
                <p>You&apos;re minutes away from coverage!</p>
                <div className="">
                  <div className="my-4 flex space-x-4">
                    <a
                      href="/quote"
                      className="rounded-full bg-sky-800 px-8 py-2 text-xl text-white shadow-md hover:bg-sky-700"
                    >
                      Let&apos;s go!
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-azure-500 bg-gray-100 py-8 text-center text-2xl md:px-4 md:text-6xl">
            Personalized Coverage
            <div className="mt-8 flex w-full justify-center text-left text-xl text-gray-900 md:gap-14">
              <div className="md:w-96">
                <ul>
                  <li className="font-bold">
                    Required Coverages
                    <p className="mb-7 mt-4 text-base font-normal">
                      Policies pay for damages or injuries when you are at fault
                      and is required by law.
                    </p>
                  </li>
                  <li className="font-bold">
                    Additional Options
                    <p className="mb-7 mt-4 text-base font-normal">
                      Although not always required these provide you with an
                      extra layer of protection.
                    </p>
                  </li>
                  <li className="font-bold">
                    We can help!
                    <p className="mb-7 mt-4 text-base font-normal">
                      Getting the insurance you need can be daunting. We&apos;re
                      here to help!
                    </p>
                  </li>
                </ul>
                <div className="flex md:my-4 md:space-x-4">
                  <a
                    href="/quote"
                    className="rounded-full bg-sky-800 px-8 py-2 text-xl text-white shadow-md hover:bg-sky-700"
                  >
                    Get covered
                  </a>
                </div>
              </div>
              <div>
                <div className="relative mx-auto md:h-64 md:w-64">
                  <Image src="/images/choices.svg" alt="choices" fill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FullPage>
  )
}
