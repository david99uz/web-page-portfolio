


import React from 'react'
import Footer from '../Footer'
import './MainPage.css';
import MainImage from "../../Images/MainImage.jpg";

const MainPage = () => {


    return (

        <div className="dark:bg-gray-900">

            <div className="text-center p-10 ">

                <h1 className="py-2 text-transparent font-medium text-5xl bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-500">Davron Mamatkulov</h1>
                <h3 className="text-2xl font-burtons py-2 text-slate-700 dark:text-white">Web Developer <span className="text-xl">and</span> C.S student</h3>
            </div>
            <div className="flex flex-wrap justify-center mb-10">
                <div className="rounded-full  
                flex items-center justify-center overflow-hidden border-4 border-cyan-500 ">
                    <img src={MainImage} alt="ProfileImage" className="ProfileImage" />
                </div>

            </div>
            <div className="dark:text-white text-center text-xl leading-6">
                <p>I&apos;m a fronted developer and <span className="text-cyan-500 font-burtons">Software engineering</span>  student from Uzbekistan based in EU Latvia. I&apos;m a C.S student since 2020.</p>
                <p> After one year I decided to be a <span className="text-cyan-500 font-burtons">Web Developer</span>. I&apos;m still learning and studying for Bachelor&apos;s degree since that day.</p>
            </div>
            <div className="pt-5">
                <Footer />
            </div>



        </div>
    )
}

export default MainPage;