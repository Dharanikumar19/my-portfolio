import React from 'react'
import styled from 'styled-components';
import img2 from '../img/img2.JPG';
import PrimaryButton from './PrimaryButton';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={img2} alt=""/>
            </div>
            <div className="right-content">
                <h4>I am <span>Dharani Kumar</span></h4>
                <p className="paragraph">
                I was always fascinated by how computer runs those softwares and websites 
                and how could I also build something like that so I decided to learn web development. 
                I have learnt various technologies, frameworks, and tools. I constantly challenge myself to develop 
                new ideas and applications. I am a guy with high confidence level and always
                focus on the upshot rather than the problem.
                    
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality </p>
                        <p>Languages </p>
                        <p>Location</p>
                       
                    </div>
                    <div className="info">
                        <p>: Dharani Kumar M</p>
                        <p>: 23</p>
                        <p>: Indian </p>
                        <p>: Tamil, English </p>
                        <p>: Tamil Nadu, India</p>
                        
                    </div>
                </div>
                {/*  eslint-disable-next-line */}
                <a href="https://drive.google.com/file/d/11ebac7Gv2Zow-lYqUBgRUhuR6eC2nPUb/view?usp=sharing" target="_blank"><PrimaryButton title={'My Cv'} /></a>
            </div>
        </ImageSectionStyled>
    )
}


const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;
        img{
            width: 95%;
            height:100%;
            object-fit: cover;
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;
export default ImageSection;
