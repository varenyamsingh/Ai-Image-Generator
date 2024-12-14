import React from 'react'
import './ImageGenerator.css'
import default_image from '../Assets/default_image.svg'
export const ImageGenerator = () => {
  return (
    <div clasName = 'ai-image-generator'>
        <div className="header">Ai image <span>generator</span></div>
        <div className="img-loading"></div>
        <div className="image"><img src={default_image} alt=""/></div>
    </div>
  )
}
