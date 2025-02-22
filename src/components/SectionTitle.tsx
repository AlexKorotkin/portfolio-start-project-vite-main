import styled from "styled-components";
import {theme} from "../styles/Theme.ts";
import {font} from "../styles/Common.ts";

export const SectionTitle = styled.h2`
    text-align: center;
    ${font({family: "'Josefin Sans', sans-serif",weight:600, Fmax:36, Fmin:30})}
    letter-spacing: 5px;
    position: relative;
    margin-bottom: 90px;
    
    &::before{
        content: "";
        display: inline-block;
        width: 50px;
        height: 1px;
        background-color: ${theme.colors.accent};
        position: absolute;
        left: 50%;
        bottom: -30px;
        transform: translateX(-50%);
        
        @media ${theme.media.mobile} {
            bottom: -24px;
        }
    }
    
`