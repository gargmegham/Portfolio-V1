import React from 'react';
import { FormattedIcon, IconTerms, IconPrivacy, IconRefund } from '@components/icons';
import { socialMedia } from '@config';
import styled from 'styled-components';
import { theme, mixins, media } from '@styles';
const { colors, fontSizes, fonts } = theme;
import trackGaEvent from '@tracking';

const StyledContainer = styled.footer`
  ${mixins.flexCenter};
  flex-direction: column;
  padding: 15px;
  text-align: center;
  height: auto;
  min-height: 70px;
`;
const StyledSocial = styled.div`
  color: ${colors.lightSlate};
  width: 100%;
  max-width: 270px;
  margin: 0 auto 10px;
  display: none;
  ${media.tablet`display: block;`};
`;
const StyledSocialList = styled.ul`
  ${mixins.flexBetween};
  padding: 0;
  margin: 0;
  list-style: none;
`;
const StyledSocialLink = styled.a`
  padding: 10px;
  svg {
    width: 20px;
    height: 20px;
  }
`;
const StyledFooter = styled.div`
  font-family: ${fonts.SFMono};
  font-display: swap;
  font-size: ${fontSizes.xs};
  line-height: 1;
  color: ${colors.lightSlate};
  padding: 10px;
  margin-top: 10px;
  span {
    display: inline-flex;
    align-items: center;
    margin: 0 7px;
  }
  svg {
    display: inline-block;
    height: 15px;
    width: auto;
    margin-right: 5px;
  }
`;

const Footer = () => (
  <StyledContainer>
    <StyledSocial>
      <StyledSocialList>
        {socialMedia &&
            socialMedia.map(({ name, url }, i) => (
              <li key={i}>
                <StyledSocialLink
                  onClick={() => trackGaEvent('click', `Social Footer ${name}`)}
                  href={url}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  aria-label={name}>
                  <FormattedIcon name={name} />
                </StyledSocialLink>
              </li>
            ))}
      </StyledSocialList>
    </StyledSocial>
    <StyledFooter tabindex="-1">
      <div>
        <a href="/t&c" target="_blank" rel="nofollow noopener noreferrer">
          <span>
            <IconTerms name="terms and conditions" />
            <span>Terms & Conditions</span>
          </span>
        </a>
        <a href="/privacy-policy" target="_blank" rel="nofollow noopener noreferrer">
          <span>
            <IconPrivacy name="privacy" />
            <span>Privacy Policy</span>
          </span>
        </a>
        <a href="/refund-policy" target="_blank" rel="nofollow noopener noreferrer">
          <span>
            <IconRefund name="privacy" />
            <span>Refund & Cancellation</span>
          </span>
        </a>
      </div>
    </StyledFooter>
  </StyledContainer>
);

Footer.propTypes = {};

export default Footer;
