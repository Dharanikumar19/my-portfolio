import React from 'react'
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ProgressBar from './ProgressBar';

function Skills() {
    return (
        <SkillsStyled>
            
                <Title title={'My Skills'} span={'my skills'} />
                <InnerLayout>
                    <div className="skills">
                        <ProgressBar 
                            title={'HTML5'}
                            width={'80%'}
                            text={'80%'}
                        />
                        <ProgressBar 
                            title={'CSS3'}
                            width={'80%'}
                            text={'80%'}
                        />
                           <ProgressBar 
                            title={'BOOTSTRAP'}
                            width={'75%'}
                            text={'75%'}
                        />
                        <ProgressBar 
                            title={'JAVASCRIPT'}
                            width={'75%'}
                            text={'75%'}
                        />
                        <ProgressBar 
                            title={'REACT JS'}
                            width={'80%'}
                            text={'80%'}
                        />
                        <ProgressBar 
                            title={'NODE JS'}
                            width={'80%'}
                            text={'80%'}
                        />
                         <ProgressBar 
                            title={'EXPRESS JS'}
                            width={'80%'}
                            text={'80%'}
                        />
                        <ProgressBar 
                            title={'MONGO DB'}
                            width={'75%'}
                            text={'75%'}
                        />
                        <ProgressBar 
                            title={'MY-SQL'}
                            width={'75%'}
                            text={'75%'}
                        />
                         <ProgressBar 
                            title={'GIT'}
                            width={'75%'}
                            text={'75%'}
                        />
                    </div>
                </InnerLayout>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`
    .skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;
        @media screen and (max-width: 700px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default Skills;
