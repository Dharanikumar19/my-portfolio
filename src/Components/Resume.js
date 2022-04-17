import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';
// import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from '../Components/ResumeItem';

function Resume() {
    // const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
            <Title title={'Resume'} span={'resume'} />
            <InnerLayout>
                <div className="small-title">
                <SmallTitle icon={school} title={'Educational Qualifications'} />
                </div>
                <div className="resume-content">
                    <ResumeItem 
                        year={'2022 - Present'} 
                        title={'Completed Full Stack Development course in GUVI'}
                        subTitle={'GUVI Network'}
                        text={'I have completed FullStack Web Development course in Guvi Geek Networks, IITM Research Park, Chennai.'}
                        link={`Certification Link : ${`https://www.guvi.in/certificate?id=w12100TV19OY4567g1`}`}
                    />
                    <ResumeItem 
                        year={'Sep - 2021'} 
                        title={'Completed Full Stack Development course in Udemy '}
                        subTitle={'Udemy'}
                        text={'I have completed Fullstack Web development course in Udemy with Certification, which has covered all topics, tools and technologies with a total of 70 Hours.'}
                        link={`Certification Link : ${`https://www.udemy.com/certificate/UC-39642c54-faa1-4368-9836-ec4c7b2a479e`}`} 
                    />
                    <ResumeItem 
                        year={'2015 - 2019'} 
                        title={'Bachelor of Engineering'}
                        subTitle={'B.E'}
                        text={'I am Graduated at Velalar College of Engineering and Technology in the year 2019 which is located in Erode, with a CGPA of 7.2 '} 
                    />
                </div>
            </InnerLayout>
        </ResumeStyled>    
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }

    .resume-content{
        border-left: 2px solid var(--border-color);
        text-align : center;
    }
`;
export default Resume
