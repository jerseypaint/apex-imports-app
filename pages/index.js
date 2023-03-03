import { client } from "../lib/client"
import Hero from "../components/Hero"
import FeaturedVehicles from "../components/FeaturedVehicles"
import LinkBoxes from "../components/LinkBoxes"
import { Layout } from "../components/Layout"

export default function Home({data, globalData}) {
  console.log(globalData)
  return (
    <Layout data={globalData}>
      <Hero data={data[0].homeHero} />
      <FeaturedVehicles data={data[0].featuredVehicles} />

      {data[0].footerLinkBoxes &&
        <LinkBoxes data={data[0].footerLinkBoxes} />
      }
    </Layout>
  )
}


export async function getStaticProps() {
  const data = await client.fetch(`*[_type == "homePage"]{
    "homeHero": {
      "heading": homeHero.heading,
      "backgroundImage": homeHero.backgroundImage.asset->url,
      "link": {
        "text": homeHero.link.text,
        "url": homeHero.link.pageLink->slug.current
      }
    },
    footerLinkBoxes[]->{
      "globalLinkBox": {
        "heading": globalLinkBox.heading,
        "eyebrow": globalLinkBox.eyebrow,
        "page": globalLinkBox.page->slug.current,
        "backgroundImage": globalLinkBox.backgroundImage.asset->url
      }
    },
    "featuredVehicles": {
      "heading": featuredVehicles.heading,
      "link": {
        "text": featuredVehicles.link.text,
        "url": featuredVehicles.link.pageLink->slug.current
      },
      "vehicles": featuredVehicles.vehicles[]->{
        _id, year, make, model, price, mileage,
        "image": images[0].asset->url
      }
    }
  }`)

  const globalData = await client.fetch(`*[_type == "siteSettings"][0]{
    title, description, address, hours, phone, email,
    "headerMenu": headerMenu[]{
      text,
      "page": pageLink->slug.current
    }
  }`)

  return {
    props: {
      data,
      globalData
    }
  };
}