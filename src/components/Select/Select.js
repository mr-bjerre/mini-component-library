import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <StyledSelect>
        {displayedValue}
        <ChevronWrapper>
          <Icon id="chevron-down" strokeWidth="2" size={24} />
        </ChevronWrapper>
      </StyledSelect>
    </Wrapper>
  );
};

const NativeSelect = styled.select`
  position: absolute;
  opacity: 0;
  height: 100%;
  width: 100%;
`;

const StyledSelect = styled.div`
  padding: 12px 16px;
  padding-right: 52px;
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;

  ${NativeSelect}:focus + & {
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${NativeSelect}:hover + & {
    color: black;
  }
`;

const Wrapper = styled.div`
  position: relative;
  color: ${COLORS.gray700};
  width: fit-content;
`;

const ChevronWrapper = styled.div`
  position: absolute;
  right: 12px;
  top: 0;
  bottom: 0;
  margin: auto;
  height: 24px;
  width: 24px;
  pointer-events: none;
`;

export default Select;
