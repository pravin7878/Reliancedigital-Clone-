import { Box, Text, SimpleGrid, Image } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import React from 'react'
import MySlider from './Myslider';

export default function ElectronicsProduct({ data }) {
    return <MySlider data = {data}/>

}
