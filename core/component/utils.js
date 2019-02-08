import styled, { css } from 'styled-components'


export const SFButton = styled.button`
  
  ${props => props.primary && css`
     background: #0747A6; 
     border : 2px solid #0747A6;
     color: white;`
  }
  
  ${props => props.warning && css`
     background: #FFAB00; 
     border : 2px solid #FFAB00;
     color: black;`
  }
  
  font-size: 1em;
  margin-bottom: 1em;
  margin-top: 1em;
  padding: 0.25em 0.75em;
  border-radius: 3px;
  
  &:hover {
      cursor : pointer;
  }
`;