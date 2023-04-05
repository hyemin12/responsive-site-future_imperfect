import { keyframes } from "styled-components";

export const fadeIn = keyframes`
  to{
    opacity:0
  }
  from {
   opacity:1
  }
`;

export const fadeOut = keyframes`
  to {
   opacity:1
  }
  from {
    opacity:0
  }
`;
