
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Skill} from "./skill/Skill.tsx";
import styled from "styled-components";


export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>My Skills</SectionTitle>
           <FlexWrapper wrap={"wrap"} justify={"space-between"}>
            <Skill iconId={"html5"}
                   title={"html5"}
                   description ={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"} />
            <Skill iconId={"css3"}
                   title={"css3"}
                   description ={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"} />
            <Skill iconId={"react"}
                   title={"react"}
                   description ={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"} />
            <Skill iconId={"ts"}
                   title={"ts"}
                   description ={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"} />
            <Skill iconId={"styled"}
                   title={"styled components"}
                   description ={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"} />
            <Skill iconId={"figma"}
                   title={"web design"}
                   description ={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}  />
           </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
background-color:#fff5e4;
    min-height: 100vh;
`


