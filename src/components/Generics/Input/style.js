import styled from "styled-components";


const getType = ({type}) =>{
   switch(type){
    case 'dark': 
     return {
        background: 'transparent',
        color: 'white',
        border: '1px solid #ffffff'
      }
    case 'light': 
     return {
        background: '#ffffff',
        color: '#0d263b',
        border: '1px solid #e6e9ec'
      }
    case 'primary': 
      return {
        background: '#0061df',
        color: 'white',
        border: 'none'
      }
    default: 
      return {
        background: '#0061df',
        color: 'white',
        border: 'none'
      }
   }
}

export const Container = styled.input`
   display: flex;
   justify-content: center;
   align-items: center;
   border-radius: 2px;
   min-width: 120px;
   font-size: 14px;
   padding-left: ${({icon})=> (icon ? '50px' : '20px')};

   outline: none;
   border: 1px solid #e3e9ec;
   height: ${({height})=>(height ? `${height}px` : '44px')};
   width: ${({width})=>(width ? `${width}px` : '100%')};
   font-size: ${({fontSize})=>(fontSize ? `${fontSize}px` : '14px')};
   
   /* ${getType} */
`;