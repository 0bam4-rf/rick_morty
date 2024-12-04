import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Card } from '../../componets/card/Card'
export const Home = () => {
    const [data, setdata] = useState([])
    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character')
    .then(function (response) {
    
    console.log(response.data.results);
    setdata(response.data.results);
    })
    }, [])
    
  return (
    <div>{data.map((item,index )=>(
        <Card item={item}></Card>
    ))}</div>
  )
}

//https://rickandmortyapi.com/api/character/?name=rick&status=alive
