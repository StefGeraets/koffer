import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql} from "gatsby"
import { FeatureImageWrapper } from "../elements"

export const FeatureImage = ({ fixed }) => {
  const data = useStaticQuery(graphql`
    query {
      imageSharp(fixed: {originalName: {eq: "markt.jpg"}}) {
        fixed(width: 1000, quality: 75) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  `)

  return (
    <FeatureImageWrapper>
      <Img fixed={fixed ? fixed : data.imageSharp.fixed} 
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
      }}
      />
    </FeatureImageWrapper>
  )
}