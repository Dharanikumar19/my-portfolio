import React from 'react'
import styled from 'styled-components';
import GitHub from '@material-ui/icons/GitHub';
import LiveTv from '@material-ui/icons/LiveTv';

function Menu({menuItem}) { 
    return (
        <MenuItemStyled >
            {
                menuItem.map((item)=>{
                    return <div className="grid-item" key={item.id}>
                        <div className="portfolio-content">
                            <div className="portfolio-image">
                                <img src={item.image} alt=""/>
                                <ul>
                                    <li>
                                   {/*  eslint-disable-next-line */}
                                        <a href={item.link1} target="_blank">
                                            <GitHub />
                                        </a>
                                       
                                    </li>
                                    Frontend
                                    <li>
                                        {/*  eslint-disable-next-line */}
                                        <a href={item.link2} target="_blank">
                                            <GitHub />
                                        </a>
                                    </li>
                                    Backend
                                    <li>
                                        {/*  eslint-disable-next-line */}
                                        <a href={item.link3} target="_blank">
                                            <LiveTv />
                                        </a>
                                    </li>
                                   Watch Live 
                                </ul>
                            </div>
                            <h6>{item.title}</h6>
                            <p className="projectText">{item.text}</p>
                        </div>
                    </div>
                })
            }
        </MenuItemStyled>
    )
}

const MenuItemStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 3rem;
    @media screen and (max-width:920px){
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width:670px){
        grid-template-columns: repeat(1, 1fr);
    }
    .grid-item{
        .portfolio-content{
            display: block;
            position: relative;
            overflow: hidden;
            h6{
                font-size: 1.5rem;
            }
            img{
                width: 100%;
                height: 43vh;
                object-fit: cover;
            }
            ul{
                transform: translateY(-600px);
                transition: all .4s ease-in-out;
                position: absolute;
                left: 50%;
                top: 40%;
                opacity: 0;
                li{
                        background-color: var(--border-color);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        padding: 1rem;
                        border-radius: 50%;
                        width: 2.5rem;
                        height: 2.5rem;
                        margin: 0 .5rem;
                        transition: all .4s ease-in-out;
                        &:hover{
                            background-color: var(--primary-color);
                        }
                        a{
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            transition: all .4s ease-in-out;
                        }
                    }
            }

            .portfolio-image{
                &::before{
                    content: "";
                    position: absolute;
                    left: 2%;
                    top: 4%;
                    height: 0;
                    width: 0;
                    transition: all .4s ease-in-out;
                }
            }
            .portfolio-image:hover{
                ul{
                    transform: translateY(0);
                    transform: translate(-35%, -65%);
                   
                  
                    transition: all .4s ease-in-out;
                    opacity: 1;
                    li{
                        transition: all .4s ease-in-out;
                        &:hover{
                            background-color: var(--primary-color);
                        }
                        a{
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            transition: all .4s ease-in-out;
                        }
                    }

                    li:hover{
                        svg{
                            color: var(--white-color);
                        }
                    }
                    svg{
                        font-size: 2rem;
                    }
                }
                &::before{
                    height: 15.6rem ;
                    width: 100%;
                    background-color: white;
                    opacity: 0.9;
                    transform-origin: left;
                    
                    transition: all .4s ease-in-out;
                }
            }
        }
    }
    .projectText{
        text-align: justify;
        text-justify: inter-word;
    }
`;

export default Menu;
