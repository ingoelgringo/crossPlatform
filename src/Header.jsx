import { useState, useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from "./ThemeContext";

const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
`

const Label = styled.label`
  position: relative;
  width: 50px;
  height: 24px;
  background: #fff;
  display: inline-block;
  border-radius: 100px;
  box-shadow: 0px 2px 6px -2px rgba(0, 0, 0, 0.4);
  cursor: pointer;
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  width: 0;
  visibility: hidden;
`;

const Fill = styled.span`
  position: absolute;
  left: ${props => (props.checked ? "calc(100% - 22px)" : "2px")};
  top: 2px;
  width: 20px;
  height: 20px;
  background: black;
  border-radius: 50%;
  transition: 0.4s left;
`;

function Header() {
  const [checked, setChecked] = useState(false);
  const { toggleTheme } = useContext(ThemeContext);

    return(
      <FlexDiv>
        <h1>E-shop</h1>
        <Label>
          <HiddenCheckbox
            checked={checked}
            onChange={() => {setChecked(!checked); toggleTheme();}}
          />
          <Fill checked={checked} />Darkmode
        </Label>
      </FlexDiv>
    )
}

export default Header
