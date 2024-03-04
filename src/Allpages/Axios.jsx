import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useStatStyles } from '@chakra-ui/react';
import AllProduct from './AllProduct';
export default function Axios() {
    const [data,setdata] = useState()
const [isLoadding, setisLoadding] = useState(false);
const [err, seterr] = useState(false)


    const getData =async ()=>{
        setisLoadding(true)
        try {
        const res = await axios.get(`https://fakestoreapi.com/products`)
        setdata(res.data)
        setisLoadding(false)
        } catch (error) {
            console.log(error);
            setisLoadding(false)
            seterr(true)
        }
    }



    useEffect(()=>{
       getData()
       
    },[])
  return <AllProduct data={data} isLoadding={isLoadding} err={err}/>
}
