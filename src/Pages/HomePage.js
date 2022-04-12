import React from 'react'
import styled from 'styled-components';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';
import CodeIcon from '@material-ui/icons/Code';
import Particle from '../Components/Particle';

function HomePage() {
    return (
        <HomePageStyled>
            <div className="particle-con">
                <Particle />
            </div>
            <div className="typography">
                <h1>Hi, I'm <span>Dharani Kumar</span></h1>
                <h2 className='sub'>Full Stack Web Developer</h2><br/>
                <p>
                I consider myself as a versatile developer, able to adapt all sorts of constraints, languages and technologies.
                 I build complete applications, from frontend to backend, and love doing it. Don't hesitate to get in touch !
                </p>
                <div className="icons">
                    <a href="https://www.linkedin.com/in/dharani-kumar-muthusamy-781a8118b/" rel="noreferrer" target='_blank' className="icon i-linkedIn">
                        <LinkedInIcon />
                    </a>
                    <a href="https://github.com/Dharanikumar19" target='_blank' rel="noreferrer" className="icon i-github">
                        <GithubIcon />
                    </a>
                    <a href="https://www.guvi.in/dharanikumarmuthusamy11" target='_blank' rel="noreferrer" className="icon i-email">
                        <CodeIcon />
                    </a>
                </div>
            </div>
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
   
    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;
       .sub{
           font-size:30px;
           color:  #057FFF;
       }
        .icons{
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
                svg{
                    margin: .5rem;
                }
            }

            .i-email{
                &:hover{
                    border: 2px solid #2ab86a;
                    color: #2ab86a;
                }
            }
            .i-github{
                &:hover{
                    border: 2px solid #5F4687;
                    color: #5F4687;
                }
            }
        }
      
    }
`;

export default HomePage;
