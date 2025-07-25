import React from 'react'
import Heading from './Heading'
import Card from './Card'

const data = [
    {
        id: 0,
        title:
        "",
        desc: "",
        img: "/p1.jpg",
        tags: [""],
    },
    {
        id: 1,
        title:
        "",
        desc: "",
        img: "/p2.jpg",
        tags: [""],

    },
    {
        id: 2,
        title:
        "",
        desc: "",
        img: "/p3.jpg",
        tags: [""],

    },
    {
        id: 3,
        title:
        "",
        desc: "",
        img: "/p4.jpg",
        tags: [""],

    },
    {
        id: 4,
        title:
        "",
        desc: "",
        img: "/p5.jpg",
        tags: [""],

    },
    {
        id: 5,
        title:
        "",
        desc: "",
        img: "/p6.jpg",
        tags: [""],

    },
    {
        id: 6,
        title:
        "",
        desc: "",
        img: "/p7.jpg",
        tags: [""],

    },

    
]

const Projects = () => {
  return (
    <div id=' projects'className='container pt-32'>
        <Heading title='My Projects'   />
        <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
            {data.map((el) => (<Card 
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags} 
            />))}
           
            
        </div>
      
    </div>
  )
}

export default Projects
