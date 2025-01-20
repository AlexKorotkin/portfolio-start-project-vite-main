import photo from "../../../assets/images/photo.jpg"
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Container} from "../../../components/Container.ts";
import {theme} from "../../../styles/Theme.ts";

export const Main = () => {
    return (
        <StyledMain>
           <Container>
               <FlexWrapper align={'center'} justify={"space-between"} >
                   <div>
                       <SmallText>Hi There</SmallText>
                       <Name>I am <span>Aliaksandr Karotkin</span></Name>
                       <MainTitle>A Web Developer.</MainTitle>
                   </div>
                   <PhotoWrapper>
                       <Photo src={photo} alt=""/>
                   </PhotoWrapper>
               </FlexWrapper>
           </Container>
        </StyledMain>
    );
};
const StyledMain = styled.section`
    min-height: 100vh;
    background-color: #fff5e7;
    display: flex;
    
`
const PhotoWrapper = styled.div`
    position: relative;
    z-index: 0;
    &::before {
        content: '';
        width: 350px;
        height: 455px;
        border: 5px solid ${theme.colors.accent};
        position: absolute;
        top: -14px;
        left: 14px;
        z-index: -1;
        
    }
`

const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
`

const MainTitle = styled.h1`
    font-weight: 400;
    font-size: 27px;
`

const Name = styled.h2`
    font-family: Josefin Sans , sans-serif;
    font-weight: 700;
    font-size: 50px;
    letter-spacing: 0.05em;
    margin: 10px 0;
    span {
        position: relative;
        z-index: 1;
        &::before {
            content: "";
            display: inline-block;
            width: 100%;
            height: 20px;
            background-color: ${theme.colors.accent};
            position: absolute;
            bottom: 0;
            z-index: -1;
        }
    }
`


const SmallText = styled.h2`
    font-weight: 400;
    font-size: 14px;
`