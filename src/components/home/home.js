import React,{useState} from 'react'
import Header from './../header/header'

const Home=(props)=>{
    return(
        <>
        <Header role={props.token.role} />
        </>
    )
}

export default Home;