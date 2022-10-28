import React from 'react'
import CVpdf from '../Images/my-cv.pdf';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import { BiDownload } from 'react-icons/bi'
const Pdf = () => {

    return (
        <div className="justify-center flex pt-10 dark:bg-slate-600">
            <div>
                <Document file={CVpdf}>
                    <Page pageNumber={1} height={700} className="shadow-lg"></Page>
                </Document>
            </div>
            <div>
                <button className="py-3 px-5 text-sm font-medium text-center  sm:w-fit  hover:text-blue-500 focus:ring-4 focus:outline-none   dark:hover:bg-primary-700 ">
                    <a href={CVpdf} download>
                        <BiDownload className="text-2xl hover:" />
                    </a>
                </button>
            </div>

        </div>)
}

export default Pdf;