import * as React from "react"
import Layout from "../layout/layout"
import DocxBody from "../components/DocxBody"

// markup
const Terms = () => {
  return (
    <Layout>
      <title>Terms of Service</title>
      <DocxBody
        title="Terms of Service"
        subtitle={<>Our official terms of service<span role="img" aria-label="smile">🧑‍⚖️</span></>}
        iframeSrc = "https://docs.google.com/document/d/e/2PACX-1vS41FiGDDgzLHP57-qQlpRVcI17e341f30jz7fUE7Er2okJb3AIeeawXiq2VmTKOHZFk46vQeTYMdYh/pub?embedded=true"
        docSrc = "/Desserts App Terms of Service.docx"
      />
    </Layout>
  )
}

export default Terms