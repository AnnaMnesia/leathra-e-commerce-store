import React, { useState } from 'react';
import video1 from '../../assets/video1.mp4';
import video2 from '../../assets/video2.mp4';
import video3 from '../../assets/video3.mp4';
import video4 from '../../assets/video4.mp4';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import './slider.scss';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    const newSlideIndex = currentSlide === 0 ? videosData.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlideIndex);
  };
  
  const nextSlide = () => {
    const newSlideIndex = currentSlide === videosData.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlideIndex);
  };

  const videosData = [
    {
      title: 'Video 1',
      description: 'Leather Jacket for Women',
      src: video1, 
    },
    {
      title: 'Video 2',
      description: 'Leather Jacket for Women',
      src: video2, 
    },
    {
      title: 'Video 3',
      description: 'Leather Jacket for Women',
      src: video3, 
    },
    {
      title: 'Video 4',
      description: 'Leather Jacket for Women',
      src: video4, 
    },
  ];

  return (
    <div className='slider'>
      <div className="container" style={{ transform: `translateX(-${currentSlide * 25}%)` }}>
        {videosData.map((video, index) => (
          <video key={index} src={video.src} autoPlay loop muted>
            Your browser does not support the video tag.
          </video>
        ))}
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <WestOutlinedIcon/>
        </div>
        <div className="icon" onClick={nextSlide}>
          <EastOutlinedIcon/>
        </div>
      </div>
    </div>
  );
};

export default Slider;
