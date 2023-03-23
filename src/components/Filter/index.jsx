import React from 'react'
import { Input, Button} from '../Generics'
import { Container } from './style'
import { SearchOutlined } from  '@ant-design/icons';


export const Filter =()=>{
    return(
        <Container>
            <Input placeholder='Enter an address, neighborhood, city, or ZIP code' />
             <Button type={'light'}>Advanced</Button>
             <Button>Search</Button>
             <SearchOutlined/>
             
        </Container>
    )
}

export default Filter;