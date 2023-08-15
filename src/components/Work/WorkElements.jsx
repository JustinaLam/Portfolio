import styled from "styled-components";

export const WorkBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 7rem 0 7rem;
  height: auto;
  gap: 2em;
  // padding-bottom: 4rem;
  position: relative;
  align-items: center;

  @media screen and (max-width: 768px) {
    padding: 0px 2rem 0 2rem;
    gap: 1em;
    align-items: center;
  }
`;

export const WorkContainer = styled.div`
  // padding-top: 5em;
  padding-left: 3.5rem;
  display: flex;
  height: auto;

  @media screen and (max-width: 768px) {
    padding-top: 1em;
    padding-left: 0;
    align-self: center;
    width: auto;
  }
`;