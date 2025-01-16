import styled from "styled-components";
import {Icon} from "../../components/icon/Icon.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";


export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={"column"} align={"center"} >
                <Name>Aliaksandr Karotkin</Name>
                <SocialList>
                    <SocialItem>
                        <SocialLink>
                            <Icon width={"21px"} height={"21px"} viewBox={"0 0 21px 21px"}  iconId={"instagram"}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon width={"21px"} height={"21px"} viewBox={"0 0 21px 21px"} iconId={"telegram"}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon width={"21px"} height={"21px"} viewBox={"0 0 21px 21px"} iconId={"vk"}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon width={"21px"} height={"21px"} viewBox={"0 0 21px 21px"} iconId={"linkedIn"}/>
                        </SocialLink>
                    </SocialItem>
                </SocialList>
                <Copyright>© 2025 Aliaksandr Karotkin, All Rights Reserved.</Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};


const StyledFooter = styled.footer`
background-color: #ffd8a5;
    min-height: 20vh;
`

const Name = styled.span``

const SocialList = styled.ul`
display: flex;
    gap: 30px
`

const SocialItem = styled.li``

const SocialLink = styled.a``

const Copyright = styled.small``