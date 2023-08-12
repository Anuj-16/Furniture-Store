import React from 'react';
import {
  Box,
  Stack,
  Heading,
  Container,
  Button,
} from '@chakra-ui/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  dots: false,
  arrows: false,
  fade: false,
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
  centerMode: false,
  cssEase: 'linear',
  variableWidth: false,
  slideWidth: `${100 / 4}%`, // Adjusted slide width with gap
  slideMargin: '1%', // Gap between the slides
};


export default function CaptionCarousel2() {
  const [slider, setSlider] = React.useState(null);

  const cards = [
    {
      title: 'Fancy Chair',
    
      image:
        'https://images.unsplash.com/photo-1606223226320-fc37669d0a4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
    },
    {
      title: 'Red Chair',
    
      image:
        'https://c4.wallpaperflare.com/wallpaper/999/860/38/tube-dog-chair-smokes-wallpaper-preview.jpg',
    },
    {
      title: 'Modern chair',
    
      image:
        'https://img-new.cgtrader.com/items/2436583/d54c9d440d/large/modern-chair-fancy-3d-model-max-obj-fbx-ma-hrc-cob.jpg',
    },
    {
        title: ' leather chair',
       
        image:
          'https://www.ikea.com/ext/ingkadam/m/1eec13735071d520/original/PH193656.jpg?f=xl',
      },
      {
        title: 'White Chair',
       
        image:
          'https://c1.wallpaperflare.com/preview/816/636/860/frog-chair-cozy-for-two.jpg',
      },
      {
        title: 'Wood Chair',
        
        image:
          'https://c4.wallpaperflare.com/wallpaper/485/248/854/anime-girls-long-hair-school-uniform-schoolgirls-sitting-chair-anime-wallpaper-preview.jpg',
      },
   
   
  ];


  return (
    <Box position="relative"  width="full" overflow="hidden" >
      <Slider {...settings} ref={setSlider} >
        {cards.map((card, index) => (
          <Box
            key={index}
            height="70vh"
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}
            boxShadow="0px 4px 8px rgba(0, 0, 0, 0.1)"
            borderRadius="8px"
            
          >
           
            <Container size="lg" height="400px" position="relative" maxWidth="1200px">
            <Stack
  spacing={6}
  w="full"
  maxW="lg"
  position="absolute"
  bottom="5"
  transform="translate(0, -50%)"
  textAlign="left"
  paddingLeft="40px"
  as='b'
>
  <Heading
    fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
    color="gray" /* Change to the desired gray color */
    transform="rotate(-90deg)"
    transformOrigin="left bottom"
    whiteSpace="nowrap"
    fontWeight="bold"
    fontStyle="italic"
    opacity="0.6" /* Change to the desired opacity */
  >
    {card.title}
  </Heading>
</Stack>

            </Container>
          </Box>
        ))}
      </Slider>
      {/* Adjust the positioning of the buttons */}
      <Box position="absolute" top='94%' transform="translateY(-50%)" right="1px" >
  <Button size="sm" onClick={() => slider?.slickPrev()}>Left</Button>
  --
  <Button size="sm" onClick={() => slider?.slickNext()}>Right</Button>
</Box>

    </Box>
  );
}
