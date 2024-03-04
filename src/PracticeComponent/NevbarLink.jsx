import { Box, UnorderedList, ListItem, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

import React from 'react';

const items = [
    'Smartphones',
    'Smartwatches',
    'Apple',
    'Samsung',
    'Fireboltt',
    'Noise',
    'Boat',
    'Accessories',
    'Tablet Accessories',
    'Mobile Accessories',
    'Mobile Grips & Stands',
    'Car Mobile Holders',
    'Memory Cards',
    'Cables & Cords',
    'Chargers & Adapter',
];

const additionalItems = [
    'Headphones & Headsets',
    'Tablets & eReaders',
    'Every Day use Tablets below 15000',
    'Premium Tablets, Above 15001',
    'Power Banks',
    'eSlates',
];


const Liststyle = {
    w: "20%",
    color: "while",
    styleType: "none"

}
function NevbarLinks() {
    return (
        <Box
            bg={"rgb(37, 47, 100)"}
            display={"flex"}
            pl={"20px"}
            w={"90%"}
            m={"auto"}
        >

            <UnorderedList {...Liststyle} >
                {items.map((item, index) => (
                    <ListItem key={index}
                        _hover={
                            { textDecoration: "underline" }
                        }
                    >
                        <Link color={"white"} fontSize={"13px"}>
                            <RouterLink to={`/${item}`} color='white'>
                                {item}
                            </RouterLink>
                        </Link>
                    </ListItem>
                ))}
            </UnorderedList>

            <UnorderedList {...Liststyle} >
                {additionalItems.map((item, index) => (
                    <ListItem key={index}
                        _hover={
                            { textDecoration: "underline" }
                        }
                    >
                        <Link color={"white"} fontSize={"13px"}>
                            <RouterLink to={`/${item}`} >
                                {item}
                            </RouterLink>
                        </Link>
                    </ListItem>
                ))}
            </UnorderedList>

            <UnorderedList {...Liststyle} >
                    <ListItem 
                        _hover={
                            { textDecoration: "underline" }
                        }
                    >
                        <Link color={"white"} fontSize={"13px"}>
                            <RouterLink to={`/AI-Learning-Robots`} color='white'>
                            AI Learning Robots
                            </RouterLink>
                        </Link>
                    </ListItem>
            </UnorderedList>
        </Box >
    );
}

export default NevbarLinks;
