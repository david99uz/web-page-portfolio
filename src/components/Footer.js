
import {
    AiFillInstagram,
    AiFillLinkedin,
    AiFillGithub,
    AiOutlineMail
} from 'react-icons/ai';

const Footer = () => {
    const getCurrentYear = () => {

        return new Date().getFullYear()
    }
    return (
        <div className=" text-center  bg-slate-400 dark:bg-gray-900">

            <div className="  pt-3">
                <p className="text-2xl text-slate-700 pb-1 dark:text-cyan-500 font-burtons">Davron Mamatkuov</p>
                <p className="text-s text-slate-700 dark:text-cyan-500 font-burtons">
                    {getCurrentYear()}<span className="">&copy;</span>
                    <span className=" text-slate-700 pt-2 dark:text-cyan-500 font-burtons">
                        All Rights Reserved
                    </span>

                </p>

            </div>

            <div className="flex justify-center text-3xl gap-16 py-3">
                <a cursor="pointer" href="
                https://www.linkedin.com/in/davron-mamatkulov-1139441aa/">
                    <AiFillLinkedin className="fill-white hover:fill-sky-700" />
                </a>
                <a cursor="pointer" href="https://github.com/david99uz">
                    <AiFillGithub className="fill-white hover:fill-sky-700" />
                </a>
                <a cursor="pointer" href="https://www.instagram.com/daviduz99/">
                    <AiFillInstagram className="fill-white hover:fill-sky-700" />
                </a>
                <a href="mailto:davronjon_mamatkulov@mail.ru">
                    <AiOutlineMail className="fill-white hover:fill-sky-700" />
                </a>
            </div>

        </div>
    )

}
export default Footer;