import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default class NewsletterSuccess extends Component {
  render() {
    const { location } = this.props
    return (
      <Layout location={location} pageTitle="Success!">
        <SEO title="Success" keywords={[`gatsby`, `application`, `react`]} />
        <div>
          <p>
            You just filled in a form, the contents have been sent to David
            Rönnlid!
          </p>
        </div>
      </Layout>
    )
  }
}
