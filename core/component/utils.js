import styled, {css} from 'styled-components'
import Button from "@atlaskit/button";
import {
    Item
} from '@atlaskit/navigation-next';
export const NormalButton = styled(Button)`  
      font-family: 'Work Sans', sans-serif !important;
      background : #cccccc;  
      border : 2px solid #cccccc; 
      color: black;
      font-size: 1em !important;
      padding: -0.75em 0.75em !important;
      border-radius: 3px !important;
      
      &:hover {
          cursor : pointer;
      }
`;


export const WarningButton = styled(NormalButton)`
     background: #FFAB00 !important; 
     border : 2px solid #FFAB00 !important;
     color: black !important;
`;

export const PrimaryButtonOutline = styled(NormalButton)`
     background: #FFFFFF !important; 
     border : 2px solid #FFAB00 !important;
     color: #FFAB00 !important;
`;

export const PrimaryButton = styled(NormalButton)`
     background: #0747A6 !important; 
     border : 2px solid #0747A6 !important;
     color: white !important;
`;


export const WarningButtonOutline = styled(NormalButton)`
     background: #FFFFFF !important; 
     border : 2px solid #0747A6 !important;
     color: #0747A6 !important;
`;


export const DangerButton = styled(NormalButton)`
     background: #EA4335 !important; 
     border : 2px solid #EA4335 !important;
     color: white !important;
`;


export const DangerButtonOutline = styled(NormalButton)`
     background: #FFFFFF !important; 
     border : 2px solid #EA4335 !important;
     color: #EA4335 !important;
`;


export const CustomItem = styled(Item)`
    background : white !important;
`;