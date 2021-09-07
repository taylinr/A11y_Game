import TabsStyles from "./TabsStyles";
import React, { useState } from "react";
import styled from "styled-components";

interface TabProps {
  tabActive?: boolean;
}

const Tab = styled.li<TabProps>`
  width: 150px;
  display: inline-block;
  background-color: ${({ theme }) => theme.primary};
  border: none;
  border-radius: ${({ theme }) =>
    theme.baseSpace * 1.5 + "px " + theme.baseSpace * 1.5 + "px 0 0"};
  color: white;
  padding: ${({ theme }) => theme.baseSpace + "px"};
  box-shadow: ${({ theme }) => theme.boxShadow};
  cursor: pointer;
  text-align: center;
  ${({ tabActive }) =>
    tabActive &&
    `background-color: #dce6eb;
    color: #3b6b76;
    box-shadow: none;
    cursor: unset;
  `}
`;

interface ContentProps {
  tabActive?: boolean;
}

const TabContent = styled.div<ContentProps>`
  position: absolute;
  right: 0; /* change as needed */
  bottom: 0; /* change as needed */
  opacity: 0;
  width: 50px;
  ${({ tabActive }) =>
    tabActive &&
    `
    opacity: 1;
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
  `}
`;

type TabsProps = {
  tabkeys: string[];
  tabnames: string[];
  contents: any[];
};

const Tabs = ({ tabnames, contents, tabkeys }: TabsProps) => {
  const [tabActive, setActive] = useState(tabkeys[0]);

  return (
    <TabsStyles>
      <ul className="tab__buttons" role="tablist">
        {tabnames.map(function (name, index) {
          return (
            <Tab
              key={name}
              className={tabkeys[index]}
              tabActive={tabActive === tabkeys[index]}
              role={"tab"}
              aria-controls={name + " code-tab"}
              aria-selected={tabActive === tabkeys[index]}
              onClick={() => {
                setActive(tabkeys[index]);
              }}
            >
              {name}
            </Tab>
          );
        })}
      </ul>
      <div className="tab__contents" role="tabpanel">
        {contents.map(function (content, index) {
          return (
            <TabContent
              key={tabkeys[index]}
              id={tabkeys[index]}
              tabActive={tabActive === tabkeys[index]}
              role={"tabpanel"}
              aria-labelledby={tabnames[index] + "-tab"}
              aria-hidden={!(tabActive === tabkeys[index])}
            >
              {content}
            </TabContent>
          );
        })}
      </div>
    </TabsStyles>
  );
};

export default Tabs;
