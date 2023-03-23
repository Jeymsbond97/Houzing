import React from 'react'
import { Input } from '../Generics/Input';
import { Container } from './style'

export const Home =()=>{
    return(
        <Container>
            <h3>Home</h3>
            <Input width={200} placeholder={'test'}/>

        </Container>
    )
}

export default Home;