import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { useStatStyles } from '@chakra-ui/react';
import AllProduct from './AllProduct';
import { Allcontext } from '../ContextAPI/ContextProvider';
export default function Axios() {
    const [data, setdata] = useState()
    const [isLoadding, setisLoadding] = useState(false);
    const [err, seterr] = useState(false)
    const { quary } = useContext(Allcontext)
    console.log(quary)

    const getData = async () => {
        setisLoadding(true)
        try {
            const res = await axios.get(`https://fakestoreapi.com/products?search=${quary}`)

            // const res = await axios({
            //     method: 'get',
            //     url:'https://fakestoreapi.com/products',
            //     params:{q:quary}
            // })
            setdata(res.data)
            setisLoadding(false)
        } catch (error) {
            console.log(error);
            setisLoadding(false)
            seterr(true)
        }
    }



    useEffect(() => {
        getData()

    }, [quary])
    return <AllProduct data={data} isLoadding={isLoadding} err={err} />
}
