import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import TechStack from "../components/techStack"
import Toggle from "../components/toggle"
import styled from "styled-components"
import ValueProposition from "../components/valueProposition"
import { BasicButton } from "../components/styledComponents"
import FAQ from "../components/fAQ"
import IndexMenu from "../components/indexMenu"

const AboutDavid = styled.div`
  border: 1px solid black;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 2px 2px black;
  background: #f5f5f1;
  z-index: 5;

  & h1,
  h5,
  button,
  p {
    color: black;
  }

  @media screen and (max-width: 1000px) {
    display: block;
    padding-bottom: 3px;
    margin-bottom: 1rem;
  }

  @media screen and (min-width: 1000px) {
    width: 40vw;
    margin: 1rem auto;
    padding-bottom: 3px;
  }
`

const SubTitle = styled.h2`
  @media screen and (max-width: 1000px) {
    margin: 1rem;
    margin-top: -1rem;
    padding: 10px;
    background: white;
    color: black;
    box-shadow: 1px 1px 1px black;
  }
`

export default class IndexPage extends Component {
  render() {
    const { location } = this.props
    return (
      <Layout location={location}>
        <IndexMenu />

        <h1 className="pageTitle">About Ronnlid Websites</h1>
        <SubTitle>Company selling website solutions.</SubTitle>
        <AboutDavid className="aboutDavid" id="about">
          <Img
            fluid={this.props.data.file.childImageSharp.fluid}
            style={{ borderRadius: "60%", width: "40%", margin: "0 auto" }}
            alt="David Rönnlid"
          />
          <a
            href="https://www.linkedin.com/in/davidronnlid/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BasicButton>David Rönnlid on LinkedIn</BasicButton>
          </a>
          <p>
            Ronnlid Websites is owned and founded by David Rönnlid, 18 years
            old, web developer (mainly front-end) & entrepreneur. My vision is
            no less than a world where people are experiencing more well-being.
            I try to boost love and reduce suffering by accruing power to
            influence reality, including the society within which the people who
            can experience more or less valuably exist. This company & coding is
            a means to that end.
          </p>
        </AboutDavid>

        <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />

        <Toggle>
          {({ on, toggle }) => (
            <>
              {on ? (
                <>
                  <BasicButton onClick={toggle}>
                    Hide technologies used at the company
                  </BasicButton>
                  <TechStack />
                </>
              ) : (
                <BasicButton onClick={toggle}>
                  Show technologies used at the company
                </BasicButton>
              )}
            </>
          )}
        </Toggle>
        <ValueProposition />
        <br />
        <FAQ />
      </Layout>
    )
  }
}

export const query = graphql`
  query davidImg {
    file(relativePath: { regex: "/davidRonnlidPreview/" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
