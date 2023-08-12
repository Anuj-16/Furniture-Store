import React from 'react';
import {
  Box,
  Stack,
  Heading,
  Text,
  Container,
} from '@chakra-ui/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true, // Enable automatic sliding
  autoplaySpeed: 1500, // Set the interval between each slide (in milliseconds)
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function CaptionCarousel1() {
  const cards = [
    {
      title: 'Top Sale 30%',
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image: 'https://r4.wallpaperflare.com/wallpaper/488/747/592/design-sofa-interior-pillow-living-room-hd-wallpaper-ca55f017f3cfefbcd3b62ab971524250.jpg',
    },
    {
      title: 'Top Sale 40%',
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image: 'https://r4.wallpaperflare.com/wallpaper/358/102/370/star-wars-lego-star-wars-stormtrooper-couch-wallpaper-e251e260fd560e3b5ab85265d0e83912.jpg',
    },
    {
      title: 'Top Sale 35%',
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image: 'https://r4.wallpaperflare.com/wallpaper/577/981/311/orange-sofa-interior-pillow-wallpaper-06e896573d724ccaf834ba7dcc641c8b.jpg',
    },
    {
      title: 'Top Sale 35%',
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image: 'https://c1.wallpaperflare.com/path/675/259/577/chair-clean-desk-interior-1543a84710f39edeac2bc7c5f49756cb.jpg',
    },
    {
      title: 'Top Sale 35%',
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image: 'https://c1.wallpaperflare.com/path/325/617/134/computer-keyboard-apple-electronics-5f6c98e13ee8d6f4043792b53338fef9.jpg',
    },
    {
      title: 'Top Sale 35%',
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image: 'https://r4.wallpaperflare.com/wallpaper/577/981/311/orange-sofa-interior-pillow-wallpaper-06e896573d724ccaf834ba7dcc641c8b.jpg',
    },
  ];

  return (
    <Box position="relative" height="600px" width="full" overflow="hidden">
      <Slider {...settings}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height="500px"
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}
           borderRadius="10px"
          >
            <Container size="lg" height="600px" position="relative">
              <Stack
                spacing={6}
                w="full"
                maxW="lg"
                position="absolute"
                top="50%"
                transform="translate(0, -50%)"
                p="2rem" // Adding padding to create space for the shadow
                bg="rgba(0, 0, 0, 0.5)" // Semi-transparent black background
                boxShadow="0 0 20px rgba(0, 0, 0, 0.5)" // Black shadow
              >
                <Heading fontSize={{ base: '3xl', md: '4xl', lg: '6xl' }} color="#FFCC01">
                  {card.title}
                </Heading>
                <Text fontSize={{ base: 'md', lg: 'lg' }} color="#FFCC01">
                  {card.text}
                </Text>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
