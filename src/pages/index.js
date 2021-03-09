import React from "react"
import { Container, FeatureImage, Content, ContentCard } from "../components"

const IndexPage = () => {
  return (
    <Container>
      <FeatureImage />
      <Content>
        <ContentCard 
          date="09-03-2021" 
          title="Hier een titel van een content card" 
          excerpt="lorem" 
          slug="/lorem" />
      </Content>
    </Container>
  )
}


export default IndexPage