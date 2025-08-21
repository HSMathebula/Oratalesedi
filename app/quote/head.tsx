import React from "react"

export default function Head() {
  return (
    <>
      <title>Request a Quote — Oratalesedi</title>
      <meta name="description" content="Request a project quote from Oratalesedi. Complete the form to get a tailored quote for your project." />
      <link rel="canonical" href="https://oratalesedi.co.za/quote" />

      {/* Open Graph */}
      <meta property="og:title" content="Request a Quote — Oratalesedi" />
      <meta property="og:description" content="Request a project quote from Oratalesedi. Complete the form to get a tailored quote for your project." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://oratalesedi.co.za/quote" />
      <meta property="og:image" content="https://oratalesedi.co.za/oratalesedi-hero-img.jpg" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Request a Quote — Oratalesedi" />
      <meta name="twitter:description" content="Request a project quote from Oratalesedi. Complete the form to get a tailored quote for your project." />
      <meta name="twitter:image" content="https://oratalesedi.co.za/oratalesedi-hero-img.jpg" />
    </>
  )
}
