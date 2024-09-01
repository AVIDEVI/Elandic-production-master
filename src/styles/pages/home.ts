import styled from 'styled-components';
import { fontFamily, colors } from 'styles/themes';

export const ComingSoonWrapper = styled.div`
  background-color: ${colors.black};
  width: 100%;
  display: flex;
  align-items: center;
`;

export const ComingSoon = styled.div`
  color: ${colors.white};
  width: auto;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  text-transform: uppercase;
  font: 700 90px ${fontFamily.secondaryFont};

  @media screen and (max-width: 660px) {
    font-size: 50px;
  }
`;
