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
  slideWidth: `${100 / 2}%`, // Adjusted slide width with gap
  slideMargin: '1%', // Gap between the slides
};

export default function CaptionCarousel() {
  const [slider, setSlider] = React.useState(null);

  const cards = [
    {
      title: 'Top Sale 30%',
    
      image:
        'https://thesleepcompany.in/cdn/shop/products/01.jpg?v=1660739372&width=1445'
    },
    {
      title: 'Top Sale 40%',
    
      image:
        'https://www.orangetreeeri.com/wp-content/uploads/2020/06/1-3-1.jpg',
    },
    {
      title: 'Top Sale 35%',
    
      image:
        'https://ii2.pepperfry.com/media/catalog/product/s/t/1100x1210/style-breathable-mesh-ergonomic-chair-in-black-colour-style-breathable-mesh-ergonomic-chair-in-black-rglulo.jpg',
    },
    {
        title: 'Top Sale 35%',
       
        image:
          'https://r4.wallpaperflare.com/wallpaper/577/981/311/orange-sofa-interior-pillow-wallpaper-06e896573d724ccaf834ba7dcc641c8b.jpg',
      },
      {
        title: 'Top Sale 35%',
       
        image:
          'https://r4.wallpaperflare.com/wallpaper/577/981/311/orange-sofa-interior-pillow-wallpaper-06e896573d724ccaf834ba7dcc641c8b.jpg',
      },
      {
        title: 'Top Sale 35%',
        
        image:
          'https://r4.wallpaperflare.com/wallpaper/577/981/311/orange-sofa-interior-pillow-wallpaper-06e896573d724ccaf834ba7dcc641c8b.jpg',
      },
   
  ];

  return (
    <Box position="relative" height="70vh" width="full" overflow="hidden">
      <Slider {...settings} ref={setSlider}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height="500px"
            gap="20px"
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
                bottom="-10px"
                transform="translate(0, -50%)"
                textAlign="left"
                paddingLeft="20px"
              >
                <Heading
                  fontSize={{ base: '2xl', md: '3xl', lg: '2xl' }}
                  color="#FFCC01"
                  transform="rotate(-90deg)"
                  transformOrigin="left bottom"
                  whiteSpace="nowrap"
                >
                  {card.title}
                </Heading>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
      <Box position="absolute" right="20px">
        <Button onClick={() => slider?.slickPrev()}>Previous</Button>
        <Button onClick={() => slider?.slickNext()}>Next</Button>
      </Box>
    </Box>
  );
}
