import React from "react"
import startup from "../../../images/home/startup.svg"
import digital from "../../../images/home/digital.svg"
import borderless from "../../../images/home/borderless.svg"
import safeguarding from "../../../images/home/safeguarding.svg"
import safeData from "../../../images/home/safe_data.svg"
import customerService from "../../../images/home/customer_service.svg"
import endowusLogo from "../../../images/home/endowus_logo.webp"
import efisheryLogo from "../../../images/home/efishery_logo.webp"
import multiplierLogo from "../../../images/home/multiplier_logo.webp"

import { StaticImage } from "gatsby-plugin-image"
export const designedBussinessData = [
  {
    image: startup,
    heading: "Startup ecosystem",
    subtitle: "Early & growth stage startups, VC funds, web3 startups",
  },
  {
    image: digital,
    heading: "Digital businesses",
    subtitle: "E-commerce, marketing agencies, IT services, and consultants",
  },
  {
    image: borderless,
    heading: "Borderless businesses",
    subtitle: "Holding companies, family offices and traders",
  },
]

export const imageCardData = [
  {
    logo: endowusLogo,
    image: <StaticImage src="../../../images/home/endowus.webp" alt="" />,
    subtitle:
      "How Endowus democratised wealth management in SEA, supercharged by Aspire’s all-in-one Business Account",
  },
  {
    logo: efisheryLogo,
    image: <StaticImage src="../../../images/home/efishery.webp" alt="" />,
    subtitle:
      "How eFishery conquered Indonesia’s aquaculture and digitised farming, boosted by Aspire’s finance OS",
  },
  {
    logo: multiplierLogo,
    image: <StaticImage src="../../../images/home/multiplier.webp" alt="" />,
    subtitle:
      "How Multiplier has revolutionised the employment market, powered by Aspire’s Expense Management systems",
  },
]

export const financeInfraData = [
  {
    image: safeguarding,
    heading: (
      <p>
        Safeguarding <br /> your funds
      </p>
    ),
    subtitle: "Your funds are safeguarded with Tier-1 banks in Singapore.",
  },
  {
    image: safeData,
    heading: (
      <p>
        Your data is
        <br /> safe with us
      </p>
    ),

    subtitle:
      "We implement the highest digital security encryption and access protocols. Customer privacy is central to our build and we never share your data.",
  },
  {
    image: customerService,
    heading: (
      <p>
        Customer service
        <br />
        is our priority
      </p>
    ),
    subtitle: (
      <p>
        We’re here to help in whichever format you prefer. Search our{" "}
        <a href="#">FAQs</a>, or chat or email us directly
      </p>
    ),
  },
]
