import React from 'react'
import Navbar from '../Components/Navbar'

const Index = () => {
    return (
        <>
            <Navbar />
            <section className="relative overflow-hidden md:mt-32 mt-12">
                <div className="container px-4 mx-auto mt-12">
                    <div className="flex flex-wrap items-center -mx-4">
                        <div className="w-full px-4 lg:w-2/5">
                            <div className=" lg:max-w-xl">
                                <h1 className="mb-6 text-4xl font-bold dark:text-gray-300 lg:text-6xl">
                                    <span>Welcome To</span>
                                    <span className="text-blue-600 dark:text-blue-400">Simana</span>
                                    <span>Sandesh</span>
                                </h1>
                                <p className="mb-6 leading-8 text-gray-500 dark:text-gray-400">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.sit amet, consectetur adipiscing elit, sed do Ut
                                    enim ad minim veniam
                                </p>
                                <a className="inline-block w-full px-6 py-4 mb-2 text-lg font-medium leading-6 text-center text-white transition duration-200 bg-blue-600 rounded shadow dark:bg-blue-500 dark:hover:bg-blue-700 md:w-auto md:mb-0 md:mr-4 hover:bg-blue-700"
                                    href="as">
                                    Request a demo
                                </a>
                            </div>
                        </div>
                        <div className="w-full px-4 mt-20 lg:w-2/5 lg:mt-0">
                            <div className="flex justify-center lg:justify-end">
                                <div className="mr-4 lg:mr-8">
                                    <img className="block object-cover w-full h-32 mx-auto mb-8 rounded-md sm:h-64"
                                        src="https://i.postimg.cc/PqrSRxDN/pexels-fauxels-3184357.jpg " alt="" />
                                    <img className="block object-cover w-full h-32 mx-auto mb-8 rounded-md sm:h-64"
                                        src="https://i.postimg.cc/90fhB5Hb/pexels-pixabay-38271.jpg" alt="" />
                                </div>
                                <div>
                                    <img className="block object-cover w-full h-32 mx-auto mb-8 rounded-md sm:h-64"
                                        src="https://i.postimg.cc/qM9PNCqj/pexels-vlada-karpovich-4050291.jpg" alt="" />
                                    <img className="block object-cover w-full h-32 mx-auto mb-8 rounded-md sm:h-64"
                                        src="https://i.postimg.cc/qRMYPsDM/pexels-christina-morillo-1181605.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Index