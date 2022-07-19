import React from 'react'

export const FooterHome = (props) => {
    return (
        <section className='flex justify-between items-center pb-10 px-44  pt-16 h-full  relative -z-[5] '>
            <div className="absolute bg-stone-100 w-[1200px] h-[114px]   -bottom-0  -right-0 -z-10"></div>
            <div className="flex">
                <div className="bg-facebook-icon w-[18px] h-[18px] mt-1 mx-1"></div>
                <p className="text-sm px-2 mt-1 font-normal tracking-[0.1em]">Call us: +84 908 02 02 58</p>
                <div className="bg-facebook-icon w-[18px] h-[18px] mt-1 ml-7 mr-1"></div>
                <p className="text-sm px-2 mt-1 font-normal tracking-[0.1em]">Email: chucinog@gmail.com</p>
            </div>
            <div className="flex ">
                <p className='text-sm px-2 mt-1 font-normal tracking-[0.1em]'>Follow us</p>
                <p className="h-[1px] w-[40px] bg-black items-center mt-[13px] mx-2"></p>
                <div className="bg-facebook-icon w-[18px] h-[18px] mt-1 mx-1"></div>
                <div className="bg-instagram-icon w-[18px] h-[18px] mt-1 mx-1"></div>
            </div>
        </section>
    )
}
