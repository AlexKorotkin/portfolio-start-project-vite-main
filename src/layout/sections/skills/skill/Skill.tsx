import {Icon} from "../../../../components/icon/Icon.tsx";
import styled from "styled-components";


type SkillpropType = {
    iconId: string,
    title: string,
    description: string
}

export const Skill = (props:SkillpropType) => {
    return (
        <StyledSkill>
            <Icon iconId = {props.iconId}  />
            <SkillTitle>{props.title}</SkillTitle>
            <SkillText>{props.description}</SkillText>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    background-color: #ffffff8e;
    width: 30%;
    margin: 10px;
 `
const SkillTitle = styled.h3``
const SkillText = styled.p``

