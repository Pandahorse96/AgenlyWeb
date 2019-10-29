import React from "react"

const TextSection = ({img, title , text, modifier}) => {
  return (
    <section className={`TextSection ${modifier}`}>
      <div className='TextSection__textContainer'>
        <h3 className='TextSection__title'>{title}</h3>
        <span className='TextSection__text'>{text}</span>
      </div>
      <img className='TextSection__img' src={img} alt='Section Extra'/>
    </section>
  )
}

export default TextSection
