import { Box, Flex, Link, SimpleGrid, Text, Image, HStack, Button, Container } from '@chakra-ui/react'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
// import { FaFacebook, FaTwitter } from 'react-icons/fa';

let FooterLinksList1 = [
    "Smartphones", 'Laptops', 'DSLR Cameras', 'Televisions', 'Air Conditioners', 'Refrigerators', 'Kitchen Appliances', 'Accessories', 'Personal Care & Grooming'
]

let FooterLinksList2 = [
    'About Reliance Digital', 'resQ Services', 'Site Map', 'Gift Cards', 'Corporate Enquires', 'Contact Us'
]

let FooterLinksList3 = [
    'Product Reviews', 'Buying Guides', 'How Tos', 'Featured Stories', 'Events & Happenings', 'Nearest Store'
]

let FooterLinksList4 = [
    'FAQs', 'Terms of Use', 'Cancellation and Return Policy', 'Pricing and Payments Policy', 'Shipping and Delivery Policy', 'Privacy Policy', 'E-waste Recycling Policy', 'EMI and Additional Cashback T&C', 'RelianceOne Loyalty Program T&C', 'Caution Notice'
]
export default function Footer() {
    return (<>
        <Box bg={'rgb(0, 51, 128)'} display={{base:'none',md:'block'}}>
            <SimpleGrid columns={4} spacing={20} w={'90%'} m={'auto'} color={'white'} p={5} >
                <Box>
                    <Text fontSize={'md'}>PRODUCT CATEGORIES</Text>
                    <Flex flexDirection={'column'} fontSize={'13px'} gap={3} mt={3}>
                        {FooterLinksList1.map((links, ind) => <Link _hover={{ color: 'rgba(255, 255, 255, 0.7)' }} key={ind}> <RouterLink to={`/${links}`}>{links}</RouterLink></Link>)}
                    </Flex>
                </Box>

                <Box>
                    <Text fontSize={'md'}>SITE INFO</Text>
                    <Flex flexDirection={'column'} fontSize={'13px'} gap={3} mt={3}>
                        {FooterLinksList2.map((links, ind) => <Link _hover={{ color: 'rgba(255, 255, 255, 0.7)' }} key={ind}> <RouterLink to={`/${links}`}>{links}</RouterLink></Link>)}
                    </Flex>
                </Box>

                <Box>
                    <Text fontSize={'md'}>RESOURCE CENTRE</Text>
                    <Flex flexDirection={'column'} fontSize={'13px'} gap={3} mt={3}>
                        {FooterLinksList3.map((links, ind) => <Link _hover={{ color: 'rgba(255, 255, 255, 0.7)' }} key={ind}> <RouterLink to={`/${links}`}>{links}</RouterLink></Link>)}
                    </Flex>
                </Box>

                <Box>
                    <Text fontSize={'md'}>POLICIES</Text>
                    <Flex flexDirection={'column'} fontSize={'13px'} gap={3} mt={3} >
                        {FooterLinksList4.map((links, ind) => <Link _hover={{ color: 'rgba(255, 255, 255, 0.7)' }} key={ind}> <RouterLink to={`/${links}`}>{links}</RouterLink></Link>)}
                    </Flex>
                </Box>
            </SimpleGrid>
        </Box>


        <Box bg={'rgb(10, 36, 74)'} textAlign={'center'} color={'white'} >
            <Text p={5}>Disclaimer</Text>
            <Container maxW={'81%'} borderBottom={'solid 1px white'} fontSize={'11px'} pb={5} display={{base:'none' ,md:'block'}}>
            Product prices, offers and availability are subject to change from time to time. All prices are inclusive of taxes. Product colours & images are only for illustration and they may not exactly match with the actual product. Product specs are subject to change & may vary from actual product. While every care is taken to avoid inaccuracies in content, these are provided as is, without warranty of any kind.
            </Container>
            <Text p={5}> © 2024 Reliance Digital. All Rights Reserved.</Text>
        </Box>
        </>
    )
}
