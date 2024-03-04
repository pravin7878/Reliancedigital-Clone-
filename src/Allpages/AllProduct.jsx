import React from 'react'
import Product from './Product';
import Loadding from './Loadding';
import ErrorHendeler from './Error';
import { Box, SimpleGrid } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import ElectronicsProduct from '../Component/Section-2/ElectronicsProduct';

export default function AllProduct({ data, isLoadding, err }) {
    if (isLoadding) {
        return <Loadding />
    }
    if (err) {
        return <ErrorHendeler />
    }
    return (<Box>

    <SimpleGrid columns={[1,2,3,4,5]} spacing={5} w={"90%"} m={"auto"}>
        {data?.map((item) => {
            return <RouterLink to={`/product_detail/${item.id}`}key={item.id}><Product item={item}  /></RouterLink> 
        })}
        </SimpleGrid>

        <ElectronicsProduct data={data}/>
       
    </Box>
        
        )
}
