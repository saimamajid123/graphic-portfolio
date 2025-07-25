import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";

const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
        <div className='grid md:grid-cols-2 gap-10'>
            <div className='space-y-8'>
                <h2 className='text-5xl' data-aos="zoom-out">Get in touch</h2>
                <p className='text-gray-600 text-[18px] pt-2' data-aos="zoom-out">
                    Drop me line, give me a call, or send me a massage by submitting the form.
                </p>
                <div className='flex gap-3 items-center data-aos="zoom-out"'>
                    <AiOutlineMail size={30} /> saimamajid618@gmail.com
                </div>
                <div className='flex gap-3 items-center' data-aos="zoom-out">
                    <BsTelephone size={30} /> 03122175835
                </div>
            </div>
            <div className='space-y-8'></div>
            <div className='flex flex-col gap-1' data-aos="zoom-out">
                <label htmlFor="name">Name</label>
                <input type="text"
                className='h-[40px] bg-transparent border border-accent'
                id='name'/>
            </div> 
            <div className='flex flex-col gap-1' data-aos="zoom-out">
                <label htmlFor="email">Email</label>
                <input type="text"
                className='h-[40px] bg-transparent border border-accent'
                id='email'/>
            </div>
            <div className='flex flex-col gap-1' data-aos="zoom-out">
                <label htmlFor="msg">Message</label>
                <textarea
                className='bg-transparent border border-accent'
                id='msg' rows={8}>
                    </textarea>
            </div>
                
        </div>
        <div className='mt-8'>
                  <button className='bg-accent py-4 px-6' data-aos="zoom-out">Send</button>
        </div>
    </div>
  )
}

export default Contact
