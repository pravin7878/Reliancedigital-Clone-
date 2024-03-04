import { Box } from '@chakra-ui/react'
import React from 'react'
import Nevbar from '../Component/Nevbar/Nevbar'
import Home from '../Component/Home-page/Home'
import MobileCart from '../Component/Section-1/MobileCart'
import Axios from '../Allpages/Axios'
import ElectronicsProduct from '../Component/Section-2/ElectronicsProduct'
import PromotionalPage from '../Component/Section-3/PromotionalPage'
import Footer from '../Component/Footer/Footer'

export default function AllSecComponent() {
    return (
        <Box >
            <Home />
            <MobileCart />
            <Axios />
            <PromotionalPage />
            <Footer />
        </Box>
    )
}
