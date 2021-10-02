import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <ChevronWrapper>
        <Icon id="chevron-down" strokeWidth="2" />
      </ChevronWrapper>
      <StyledSelect value={value} onChange={onChange}>
        {children}
      </StyledSelect>
    </Wrapper>
  );
};

const StyledSelect = styled.select`
  appearance: none;
  border: 0;
  padding: 12px 16px;
  padding-right: 52px;
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  color: currentColor;
`;

const Wrapper = styled.div`
  position: relative;
  display: inline;
  color: ${COLORS.gray700};

  &:hover {
    color: black;
  }
`;

const ChevronWrapper = styled.div`
  position: absolute;
  right: 16px;
  top: -1px;
`;

export default Select;
