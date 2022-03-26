import React, { useState } from 'react';
import {MainLayout, InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import portfolios from '../data/portfolios';
import Menu from '../Components/Menu';




function PortfoliosPage() {
    const [menuItem] = useState(portfolios);
   
    return (
        <MainLayout>
            <Title title={'My Projects'} span={'Projects'} />
            <InnerLayout>

              
                <Menu menuItem={menuItem} />
            </InnerLayout>
        </MainLayout>
    )
}

export default PortfoliosPage
