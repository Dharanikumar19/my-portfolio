import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ServiceCard from '../Components/ServiceCard';
import design from '../img/design.svg';


function ServicesSection() {
    return (
        <InnerLayout>
            <ServicesSectionStyled>
                <Title title={'Services'} span={'services'} />
                <div className="services">
                    <ServiceCard 
                        image={design} 
                        title={'Frontend Development.'} 
                        paragraph={'Programming which focuses on the visual elements of a website or app that a user will interact with (the client side).'}
                    />
                    <div className="mid-card">
                        <ServiceCard 
                            image={design} 
                            title={' BackEnd Development.'} 
                            paragraph={"It is everything that the users don't see and contains behind-the-scenes activities that occur when performing any action on a website."}
                        />
                    </div>
                    <ServiceCard 
                        image={design} 
                        title={'Database Integration'} 
                        paragraph={'A database is an organized collection of information, or data, typically stored in a computer system. The data can then be easily accessed, managed, modified, updated, controlled, and organized.'}
                    />
                </div>
            </ServicesSectionStyled>
        </InnerLayout>
    )
}

const ServicesSectionStyled = styled.section`
    .services{
        margin-top: 5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;
        @media screen and (max-width:1000px){
            flex-direction: column;
        }
        @media screen and (max-width:950px){
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
        }
       
    }
`;

export default ServicesSection;
