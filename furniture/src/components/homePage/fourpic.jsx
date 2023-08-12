import React, { useState, useEffect } from 'react';
import './FourPicCarousel.css'; // You'll need to create this CSS file for styling

function FourPicCarousel() {
    const cards = [
        {
          title: 'its all about?',
         
         
          image:
            'https://images.unsplash.com/photo-1606223226320-fc37669d0a4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
        },
        {
          title: 'why i choose?',
         
         
          image:
            'https://c4.wallpaperflare.com/wallpaper/999/860/38/tube-dog-chair-smokes-wallpaper-preview.jpg'
        },
        {
          title: 'my best purchase',
          
          
          image:
            'https://img-new.cgtrader.com/items/2436583/d54c9d440d/large/modern-chair-fancy-3d-model-max-obj-fbx-ma-hrc-cob.jpg'
        },
        {
          title: 'ye hui na baat',
          
         
          image:
            'https://www.ikea.com/ext/ingkadam/m/1eec13735071d520/original/PH193656.jpg?f=xl'
        }
      ];

  const cardItems = [...cards, ...cards, ...cards]; // Duplicating cards for seamless loop

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cardItems.length);
    }, 3000); // Adjust the interval time (in milliseconds) as needed

    return () => {
      clearInterval(interval);
    };
  }, [cardItems.length]);

  return (
    <div className="carousel-container">
      <div className="carousel">
        {cardItems.map((card, index) => (
          <div key={index} className="card">
            <img src={card.image} alt={card.title} />
            <div className="card-details">
              <p className="title">{card.title}</p>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FourPicCarousel;
