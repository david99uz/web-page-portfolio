import React from 'react'

import { AiFillHtml5, } from 'react-icons/ai';
import { TbBrandTailwind } from 'react-icons/tb'
import { DiBootstrap, DiGithubBadge, DiJsBadge, DiNodejs, DiReact } from "react-icons/di";
import Footer from '../Footer'
const Skills = () => {
    return (

        <>

            <section class="md:h-full flex items-center text-gray-60 dark:bg-gray-900">
                <div class="container px-5 py-24 mx-auto">
                    <div class="text-center mb-12">
                        <h5 class="text-base md:text-5xl text-indigo-700 mb-1 uppercase">Skills</h5>

                    </div>
                    <div class="flex flex-wrap -m-4">
                        <div class="p-4 sm:w-1/2 lg:w-1/3">
                            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <DiGithubBadge class="lg:h-72 md:h-48 w-full object-cover fill-purple-500  object-center"
                                    alt="blog" />
                                <div class="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
                                    <h1 class="text-2xl font-semibold mb-3">GitHub</h1>
                                    <p class="leading-relaxed mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Aperiam modi, expedita quos doloremque autem ipsum itaque incidunt ipsam reprehenderit
                                        fuga! Dolores quisquam eius cum accusamus?</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 sm:w-1/2 lg:w-1/3">
                            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <TbBrandTailwind class="lg:h-72 md:h-48 w-full fill-sky-500 object-cover object-center"
                                    alt="blog" />
                                <div class="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
                                    <h1 class="text-2xl font-semibold mb-3">Tailwind</h1>
                                    <p class="leading-relaxed mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Aperiam modi, expedita quos doloremque autem ipsum itaque incidunt ipsam reprehenderit
                                        fuga! Dolores quisquam eius cum accusamus?</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 sm:w-1/2 lg:w-1/3">
                            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <DiBootstrap class="lg:h-72 md:h-48 w-full  fill-sky-500  object-cover object-center"
                                    alt="blog" />
                                <div class="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
                                    <h1 class="text-2xl font-semibold mb-3">Bootstrap</h1>
                                    <p class="leading-relaxed mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Aperiam modi, expedita quos doloremque autem ipsum itaque incidunt ipsam reprehenderit
                                        fuga! Dolores quisquam eius cum accusamus?</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 sm:w-1/2 lg:w-1/3">
                            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <AiFillHtml5 class="lg:h-72 md:h-48 w-full fill-orange-400 object-cover object-center"
                                    alt="blog" />
                                <div class="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
                                    <h1 class="text-2xl font-semibold mb-3">HTML</h1>
                                    <p class="leading-relaxed mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Aperiam modi, expedita quos doloremque autem ipsum itaque incidunt ipsam reprehenderit
                                        fuga! Dolores quisquam eius cum accusamus?</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 sm:w-1/2 lg:w-1/3">
                            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <DiJsBadge class="lg:h-72 md:h-48 w-full fill-orange-500 object-cover object-center"
                                    alt="blog" />
                                <div class="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
                                    <h1 class="text-2xl font-semibold mb-3">JavaScript</h1>
                                    <p class="leading-relaxed mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Aperiam modi, expedita quos doloremque autem ipsum itaque incidunt ipsam reprehenderit
                                        fuga! Dolores quisquam eius cum accusamus?</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 sm:w-1/2 lg:w-1/3">
                            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <DiNodejs class="lg:h-72 md:h-48 w-full fill-green-500 object-cover object-center"
                                    alt="blog" />
                                <div class="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
                                    <h1 class="text-2xl font-semibold mb-3">NodeJS</h1>
                                    <p class="leading-relaxed mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Aperiam modi, expedita quos doloremque autem ipsum itaque incidunt ipsam reprehenderit
                                        fuga! Dolores quisquam eius cum accusamus?</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 sm:w-1/2 lg:w-1/3">
                            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <DiReact class="lg:h-72 md:h-48 w-full fill-sky-500 object-cover object-center"
                                    alt="blog" />
                                <div class="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
                                    <h1 class="text-2xl font-semibold mb-3">ReactJs</h1>
                                    <p class="leading-relaxed mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Aperiam modi, expedita quos doloremque autem ipsum itaque incidunt ipsam reprehenderit
                                        fuga! Dolores quisquam eius cum accusamus?</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </section>

            <Footer />
        </>


    )
}

export default Skills;

