import styled from "styled-components";

type WorksPropsType = {
    title: string;
    text: string;
    src: string;
}

export const Work = (props:WorksPropsType) => {
    return (
        <StyledWork>
            <Image src={props.src} alt=""/>
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
            <Link href={"#"}>demo</Link>
            <Link href={"#"}>code</Link>
        </StyledWork>
    );
};

const StyledWork = styled.div`
    background-color: #ffe869;
    max-width: 600px;
    width: 100%;
    object-fit: cover;
`

const Image = styled.img`
    width: 100%;
    height: 260px;
    
`
const Link = styled.a`

`
const Title = styled.h3`

`
const Text = styled.p`

`
