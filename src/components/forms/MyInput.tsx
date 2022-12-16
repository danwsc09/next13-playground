"use client";

import React, { forwardRef } from "react";
import styled from "@emotion/styled";

interface Props {
  error?: string;
}

const MyInput = forwardRef<HTMLInputElement, Props>((props, ref) => {
  return <StyledInput ref={ref} {...props} />;
});

MyInput.displayName = "MyInput";

export default MyInput;

const StyledInput = styled.input`
  color: red;
`;
