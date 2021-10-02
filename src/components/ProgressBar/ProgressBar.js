/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    "--height": "8px",
    "--border-radius": "4px",
  },
  medium: {
    "--height": "16px",
    "--border-radius": "4px",
  },
  large: {
    "--height": "24px",
    "--padding": "4px",
    "--border-radius": "8px",
  },
};

const Wrapper = styled.div`
  height: var(--height);
  padding: var(--padding);
  background-color: ${COLORS.transparentGray15};
  border-radius: var(--border-radius);
  box-shadow: inset 0px 2px 4px rgba(128, 128, 128, 0.35);
`;

const StyledProgressBar = styled.div`
  background-color: ${COLORS.primary};
  width: ${(p) => `${p.value}%`};
  height: 100%;
  border-radius: var(--border-radius)
    ${(p) =>
      p.value < 100 ? "0 0" : "var(--border-radius) var(--border-radius)"}
    var(--border-radius);
`;

const ProgressBar = ({ value, size }) => {
  return (
    <Wrapper style={SIZES[size]}>
      <StyledProgressBar
        role="progressbar"
        value={value}
        style={SIZES[size]}
        aria-valuenow={value}
        aria-valuemin="0"
        aria-valuemax="100"
      />
      <VisuallyHidden>Progress bar</VisuallyHidden>
    </Wrapper>
  );
};

export default ProgressBar;
