import { AiOutlineCheck } from 'react-icons/ai';

const includedFeatures = [
    'Only ৳75 per meal.',
    'Priority Delivery',
    'FREE Dessert every week.',
    'Official member thermal flask',
]

export default function Pricing() {
    return (
        <div className="py-8 bg-white sm:py-12" id='pricing'>
            <div className="px-6 mx-auto max-w-7xl lg:px-8">
                <div className="max-w-2xl mx-auto sm:text-center">
                    <h2 className="text-3xl tracking-tight text-center text-gray-900 sm:text-4xl">👨🏻‍🎓👩🏼‍🎓 Student Friendly Pricing</h2>
                    <p className="mt-6 text-sm text-center text-gray-700">
                        Our home-cooked meals are made with love and fit a student{"'"}s budget. Skip the fast food and enjoy nutritious, mouth-watering meals that won{"'"}t break the bank.
                    </p>
                </div>
                <div className="items-center max-w-2xl mx-auto mt-8 rounded-3xl ring-1 ring-gray-200 sm:mt-14 lg:mx-0 lg:flex lg:flex-row-reverse lg:max-w-none">
                    <div className="p-2 -mt-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                        <div className="py-10 text-center rounded-2xl bg-gray-50 ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                            <div className="max-w-xs px-8 mx-auto">
                                <p className="text-base font-semibold text-gray-800">Food tastes like home</p>
                                <p className="flex items-baseline justify-center mt-6 gap-x-2">
                                    <span className="text-5xl font-bold tracking-tight text-gray-900">৳4749</span>
                                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-800">BDT</span>
                                </p>
                                <a
                                    href="#"
                                    className="block w-full px-3 py-2 mt-10 text-sm font-semibold text-center text-white bg-[#f91944] rounded-md shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f91944]"
                                >
                                    Order Your Meal
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="p-8 sm:p-10 lg:flex-auto">
                        <h3 className="text-2xl tracking-tight text-center text-gray-900">Monthly Membership</h3>
                        <p className="mt-6 text-sm text-center text-gray-700">
                            Members enjoy exclusive perks: swap out meals, priority delivery, and a FREE dessert every week. Say goodbye to cooking and grocery shopping, and hello to more free time.
                        </p>
                        <div className="flex items-center mt-10 gap-x-4">
                            <h4 className="flex-none text-sm font-semibold leading-6 text-[#f91944]">What’s included</h4>
                            <div className="flex-auto h-px bg-gray-100" />
                        </div>
                        <ul
                            role="list"
                            className="grid grid-cols-1 gap-4 mt-8 text-sm leading-6 text-gray-800 sm:grid-cols-2 sm:gap-6"
                        >
                            {includedFeatures.map((feature) => (
                                <li key={feature} className="flex gap-x-3">
                                    <AiOutlineCheck className="flex-none w-5 h-6 text-[#f91944]" aria-hidden="true" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
