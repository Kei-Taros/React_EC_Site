import React, { useState } from "react"
import Swiper from "react-id-swiper"
import NoImage from "../../assets/img/src/no_image.png"
import "swiper/css/swiper.css"

function ImageSwiper(props){
  const [params] = useState({
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
      dynamicBullets: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    loop: true
  })

  const images = props.images
  console.log("ImageSwiper")
  
  return (
    <Swiper {...params}>
      {images.length === 0 ? (
        <div className="p-media__thumb">
          <img src={NoImage} alt="no image" />
        </div>
      ) : (
          images.map(image => (
            /*mapメソッドを使う時はkeyを設定しないとエラーが発生する*/
            <div className="p-media__thumb" key={image.id}>
              <img src={image.path} alt="ProductImage"  />
            </div>
          ))
      )}
    </Swiper>
  )
  
}

export default ImageSwiper