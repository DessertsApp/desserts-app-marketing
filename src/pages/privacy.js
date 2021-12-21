import * as React from "react"
import Layout from "../layout/layout"
import DocxBody from "../components/DocxBody"

// markup
const Privacy = () => {
  return (
    <Layout>
      <title>Privacy Policy</title>
      <DocxBody
        title="Privacy Policy"
        subtitle={<>Our official privacy policy<span role="img" aria-label="smile">🔐</span></>}
        iframeSrc = "https://docs.google.com/document/d/e/2PACX-1vQqnRa9mkIaDtIrma6BL-Xj4HRZRAjjTBtkxnyysNVEaInycywaelyZYGZ8fpCsMCbVFv1DQQ1lAgOR/pub?embedded=true"
        docSrc = "/Desserts App Privacy Policy.docx"
      />
    </Layout>
  )
}

export default Privacy