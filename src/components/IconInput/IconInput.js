import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  small: {
    iconSize: 16,
    fontSize: 14,
    height: 24,
    strokeWidth: 1,
  },
  large: {
    iconSize: 24,
    fontSize: 16,
    height: 36,
    strokeWidth: 2,
  },
};

const IconInput = ({ label, icon, width = 250, size, ...rest }) => {
  const styles = STYLES[size];

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper size={styles.iconSize}>
        <Icon
          id={icon}
          size={styles.iconSize}
          strokeWidth={styles.strokeWidth}
        />
      </IconWrapper>
      <NativeInput
        width={width}
        height={styles.height}
        paddingLeft={styles.height}
        fontSize={styles.fontSize}
        strokeWidth={styles.strokeWidth}
        {...rest}
      />
    </Wrapper>
  );
};

const NativeInput = styled.input`
  border: none;
  height: ${(p) => p.height / 16 + "rem"};
  padding-left: ${(p) => p.paddingLeft + "px"};
  font-size: ${(p) => p.fontSize / 16 + "rem"};
  border-bottom: ${(p) => `${p.strokeWidth}px`} solid black;
  outline-offset: 4px;
  width: ${(p) => p.width + "px"};
  font-weight: 700;

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;

const Wrapper = styled.label`
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: black;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  font-weight: 700;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: ${(p) => `${p.size / 16}rem`};
`;

export default IconInput;
