import React from 'react';
import PropTypes from 'prop-types';
import { email } from '@config';
import { Side } from '@components';
import styled from 'styled-components';
import { theme } from '@styles';
const { colors, fontSizes, fonts } = theme;
import trackGaEvent from "@tracking";

const StyledLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: ${colors.lightSlate};
  }
`;
const StyledEmailLink = styled.a`
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.xs};
  font-display: swap;
  letter-spacing: 0.1em;
  writing-mode: vertical-rl;
  margin: 20px auto;
  padding: 10px;

  &:hover,
  &:focus {
    transform: translateY(-3px);
  }
`;

const Email = ({ isHome }) => {
  return (
    <Side isHome={isHome} orientation="right">
      <StyledLinkWrapper>
        <StyledEmailLink onClick={() => trackGaEvent("click", "Email On Side")} href={`mailto:${email}`}>{email}</StyledEmailLink>
      </StyledLinkWrapper>
    </Side>
  );
};
Email.propTypes = {
  isHome: PropTypes.bool,
};

export default Email;
