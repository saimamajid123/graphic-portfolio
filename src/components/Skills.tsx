import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
      <div className='grid md:grid-cols-2 gap-20 items-center'>
        <div data-aos="zoom-out">
          <h2 className='text-4xl md:text-5xl'>Technologies I work With</h2>
          <p className='text-gray-500 pt-8'>
            I work with Adobe Illustrator for creating clean vector designs and logos. For image editing and creative compositions, I use Photoshop CS6. I also design with Canva for quick, modern visuals and social media content.
          </p>
        </div>
        <div>
          <div className='grid grid-cols-2 text-accent text-3xl '>
            <div className='space-y-2'>
              <h2 data-aos="zoom-out">Photoshop CS6</h2>
               <h2 data-aos="zoom-out">Adobe illustrator</h2>
              <h2 data-aos="zoom-out">canva</h2>
            <div className='space-y-2'></div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Skills
