import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Layout } from '@components';
import styled from 'styled-components';
import { Main, theme } from '@styles';
const { colors } = theme;

const StyledDocumentContainer = styled(Main)`
  max-width: 1000px;
`;
const StyledDocumentHeader = styled.header`
  margin-bottom: 50px;
  .tag {
    margin-right: 10px;
  }
`;
const StyledDocumentContent = styled.div`
  margin-bottom: 100px;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 2em 0 1em;
  }

  p {
    margin: 1em 0;
    line-height: 1.5;
    color: ${colors.lightSlate};
  }
`;

const PrivacyPolicy = ({ data, location }) => {
  const { frontmatter, html } = data.allMarkdownRemark.edges[0].node;
  const { title } = frontmatter;

  return (
    <Layout location={location}>
      <Helmet>
        <title>{title} | Megham Garg</title>
        <link rel="canonical" href="https://meghamgarg.com/blog" />
      </Helmet>
      <StyledDocumentContainer>
        <StyledDocumentHeader>
          <h1 className="medium-title">{title}</h1>
        </StyledDocumentHeader>
        <StyledDocumentContent dangerouslySetInnerHTML={{ __html: html }} />
      </StyledDocumentContainer>
    </Layout>
  );
};

export default PrivacyPolicy;

PrivacyPolicy.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object,
};

export const pageQuery = graphql`
  {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/privacy-policy/" } }) {
      edges {
        node {
          frontmatter {
            title
          }
          html
        }
      }
    }
  }
`;
