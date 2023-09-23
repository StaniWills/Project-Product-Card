import React from 'react'
import s from './index.module.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Product({ title, description, price, images }) {

  function SampleNextArrow(props) {
		const { className, style, onClick } = props;
		return (
			<div
				className={className}
				style={{
					...style,
					display: 'block',
					background: 'black',
					borderRadius: '20%',
				}}
				onClick={onClick}
			/>
		);
	}

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={[className, s.prev_btn].join(' ')}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className={s.product_card}>
      {/* <img src={images} alt='pic' className={s.product_picture} /> */}

      <div className={s.slider_block}>
        <Slider {...settings} className={s.slider}>
          <div>
            <img src={images[0]} alt='img1' />
          </div>
          <div>
            <img src={images[1]} alt='img2' />
          </div>
          <div>
            <img src={images[2]} alt='img3' />
          </div>
        </Slider>
      </div>

      <p>Title: { title }</p>
      <p>Description: { description }</p>
      <p>Price: { price }</p>
    </div>
  )
}