import React from 'react'

const MainSection = ({title, tagline, image}) => {
  return (
    <>
        <div className="main relative text-center">
            <div className="left-container bg-color-heading-600 absolute top-0 left-0 w-full h-full
                flex flex-col items-center justify-center">
                <h1 className="title font-bold mb-2 text-3xl md:text-4xl text-white">
                    {title}
                </h1>
                <p className="tagline text-white">
                    {tagline}
                </p>
            </div>
          <div className="right-container ">
            <img 
            src={image} 
            alt="About Image"
            className="w-full h-96 object-cover object-center "
            />
          </div>
        </div>
    </>
  )
}

export default MainSection