import React from 'react'

export default function HomePageComponent() {
    return (
        <div>
            <div className="text-right">
                <h1 className="inline-block justify-end text-center lg:text-end font-hiromisake text-8xl mt-20 lg:me-32">All for One</h1>
            </div>

            <div className="static hidden lg:block">
                <div className="absolute bottom-24 left-8">
                    <div className="grid grid-cols-7 justify-center mb-10 items-center">
                        <div className="col-span-1"></div>
                        <div className="col-span-1 mx-auto">
                            <a href="./pages/sayhello.html" className="inline-block bg-teal-800 rounded-lg border-2 border-black/70">
                                <p className="font-nova px-4 py-1 text-3xl text-white">
                                    Say Hello
                                </p>
                            </a>
                        </div>
                        <div className="col-span-1 mx-auto">
                            <a href="./pages/askingquestions.html" className="inline-block bg-teal-800 rounded-lg border-2 border-black/70">
                                <p className="font-nova px-4 py-1 text-3xl text-white">
                                    Questions
                                </p>
                            </a>
                        </div>
                        <div className="col-span-1 mx-auto">
                            <a href="./pages/madlib.html" className="inline-block bg-teal-800 rounded-lg border-2 border-black/70">
                                <p className="font-nova px-4 py-1 text-3xl text-white">
                                    MadLib
                                </p>
                            </a>
                        </div>
                        <div className="col-span-1 mx-auto">
                            <a href="./pages/reverseit1.html" className="inline-block bg-teal-800 rounded-lg border-2 border-black/70">
                                <p className="font-nova px-4 py-1 text-3xl text-white leading-8 text-center">
                                    Reverse It
                                    <br /><span className="text-xl">
                                        (alphanumeric)
                                    </span>
                                </p>
                            </a>
                        </div>
                        <div className="col-span-1 mx-auto">
                            <a href="./pages/magic8ball.html" className="inline-block bg-teal-800 rounded-lg border-2 border-black/70">
                                <p className="font-nova px-4 py-1 text-white" style={{ fontSize: '26px' }}>
                                    Magic 8 Ball
                                </p>
                            </a>
                        </div>
                        <div className="col-span-1"></div>
                    </div>

                    <div className="grid grid-cols-7 justify-center items-center">
                        <div className="col-span-1"></div>
                        <div className="col-span-1 mx-auto">
                            <a href="./pages/addingnumbers.html" className="inline-block bg-teal-800 rounded-lg border-2 border-black/70">
                                <p className="font-nova px-4 py-1 text-3xl text-white">
                                    Summation
                                </p>
                            </a>
                        </div>
                        <div className="col-span-1 mx-auto">
                            <a href="./pages/greaterorless.html" className="inline-block bg-teal-800 rounded-lg border-2 border-black/70">
                                <p className="font-nova px-4 py-1 text-white" style={{ fontSize: '23px' }}>
                                    Greater or Less
                                </p>
                            </a>
                        </div>
                        <div className="col-span-1 mx-auto">
                            <a href="./pages/oddoreven.html" className="inline-block bg-teal-800 rounded-lg border-2 border-black/70">
                                <p className="font-nova px-4 py-1 text-white" style={{ fontSize: '26px' }}>
                                </p>
                            </a>
                        </div>
                        <div className="col-span-1 mx-auto">
                            <a href="./pages/reverseit2.html" className="inline-block bg-teal-800 rounded-lg border-2 border-black/70">
                                <p className="font-nova px-4 py-1 text-3xl text-white leading-8 text-center">
                                    Reverse It
                                    <br /><span className="text-xl">
                                        (numeric)
                                    </span>
                                </p>
                            </a>
                        </div>
                        <div className="col-span-1 mx-auto">
                            <a href="./pages/restaurant.html" className="inline-block bg-teal-800 rounded-lg border-2 border-black/70">
                                <p className="font-nova px-4 py-1 text-3xl text-white">
                                    Restaurant
                                </p>
                            </a>
                        </div>
                        <div className="col-span-1"></div>
                    </div>
                </div>
            </div>

            <div className="sm:hidden">

            </div>

            {/* <!-- Responsiveness for Mobile: Page Buttons --> */}
            <div className="sm:hidden static">
                <div className="absolute bottom-44">
                    <div className="grid grid-cols-2 justify-center items-center">
                        <div className="col-span-1 mx-auto ms-5">
                            <a href="./pages/sayhello.html" className="inline-block bg-teal-800 rounded-lg border-2 border-black/70 w-44 my-3">
                                <p className="font-nova px-3 py-1 text-2xl text-white text-center">
                                    Say Hello
                                </p>

                            </a>
                            <a href="./pages/addingnumbers.html" className="inline-block bg-teal-800 rounded-lg border-2 border-black/70 w-44 my-3">
                                <p className="font-nova px-4 py-1 text-2xl text-white text-center">
                                    Summation
                                </p>
                            </a>
                            <a href="./pages/madlib.html" className="inline-block bg-teal-800 rounded-lg border-2 border-black/70 w-44 my-3">
                                <p className="font-nova px-4 py-1 text-2xl text-white text-center">
                                    MadLib
                                </p>
                            </a>
                            <a href="./pages/reverseit1.html" className="inline-block bg-teal-800 rounded-lg border-2 border-black/70 w-44 my-3">
                                <p className="font-nova px-4 py-1 text-2xl text-white text-center" style={{ lineHeight: '1.4rem' }}>
                                    Reverse It
                                    <br /><span style={{ fontSize: '18px' }}>
                                        (alphanumeric)
                                    </span>
                                </p>
                            </a>
                            <a href="./pages/magic8ball.html" className="inline-block bg-teal-800 rounded-lg border-2 border-black/70 w-44 my-3">
                                <p className="font-nova px-2 py-1 text-white text-2xl text-center">
                                    Magic 8 Ball
                                </p>
                            </a>
                        </div>
                        <div className="col-span-1 mx-auto">
                            <a href="./pages/askingquestions.html" className="inline-block bg-teal-800 rounded-lg border-2 border-black/70 w-44 my-3">
                                <p className="font-nova px-4 py-1 text-2xl text-white text-center">
                                    Questions
                                </p>
                            </a>
                            <a href="./pages/greaterorless.html" className="inline-block bg-teal-800 rounded-lg border-2 border-black/70 w-44 my-3">
                                <p className="font-nova px-2 pt-1 pb-2 text-white text-center" style={{ fontSize: '21px' }}>
                                    Greater or Less
                                </p>
                            </a>
                            <div className="col-span-1 mx-auto">
                                <a href="./pages/oddoreven.html" className="inline-block bg-teal-800 rounded-lg border-2 border-black/70">
                                    <p className="font-nova px-2 py-1 text-white text-2xl text-center" style={{ fontSize: '26px' }}>
                                        Odd or Even
                                    </p>
                                </a>
                            </div>


                            <a href="./pages/reverseit2.html" className="inline-block bg-teal-800 rounded-lg border-2 border-black/70 w-44 my-3">
                                <p className="font-nova px-4 py-1 text-2xl text-white text-center" style={{ lineHeight: '1.4rem' }}>
                                    Reverse It
                                    <br /><span style={{ fontSize: '18px' }}>
                                        (numeric)
                                    </span>
                                </p>
                            </a>
                            <a href="./pages/restaurant.html" className="inline-block bg-teal-800 rounded-lg border-2 border-black/70 w-44 my-3">
                                <p className="font-nova px-4 py-1 text-2xl text-white text-center">
                                    Restaurant
                                </p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
