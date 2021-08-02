import TabsStyles from './TabsStyles'
import React, { useState } from 'react';
import styled from 'styled-components';


interface TabProps {
  tabActive?: boolean
}


const Tab = styled.button<TabProps>`
  width: 150px;
  background-color: ${({ theme }) => (theme.primary)};
  border: none;
  border-radius:  ${({ theme }) => (theme.baseSpace * 1.5 + 'px ' + theme.baseSpace * 1.5 + 'px 0 0')};
  color: white;
  padding: ${({ theme }) => (theme.baseSpace  + 'px')} ;
  box-shadow: ${({ theme }) => (theme.boxShadow)};
  cursor: pointer;
  ${({ tabActive}) =>
    tabActive && 

    `background-color: #dce6eb;
    color: #3b6b76;
    box-shadow: none;
    cursor: unset;
  `}
`;


interface ContentProps {
  tabActive?: boolean
}


const TabContent = styled.div<ContentProps>`
  position: absolute;
  left: 10px; /* change as needed */
  top: 10px; /* change as needed */
  opacity: 0;
  ${({ tabActive }) =>
    tabActive &&
    `
    opacity: 1;
    position: relative;
    top: 0;
    left: 0;
  `}
`;



type TabsProps = {
    tabkeys: string[],
    tabnames: string[],
    contents: any[]
}

export default function Tabs({ tabnames, contents, tabkeys }: TabsProps) {
    
    const [tabActive, setActive] = useState(tabkeys[0]);

    return (
        <TabsStyles>
            <div className="tab__buttons">
                {tabnames.map(function(name, index){
                    return <Tab key={name} className={tabkeys[index]} tabActive={tabActive === tabkeys[index]} onClick={() => setActive(tabkeys[index])}>{name}</Tab>;
                  })}
                
            </div>
            <div className="tab__contents">
                {contents.map(function(content, index){
                    return <TabContent key={tabkeys[index]} id={tabkeys[index]} tabActive={tabActive === tabkeys[index]}>{content}</TabContent>;
                  })}
                
            </div>
            
        </TabsStyles>
    )
    
}
