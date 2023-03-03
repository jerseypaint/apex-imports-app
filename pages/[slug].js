import { client } from '../lib/client'
import PageHeader from '../components/PageHeader'
import ContentCards from '../components/ContentCards'
import LinkBoxes from '../components/LinkBoxes'
import Services from '../components/templates/Services'
import Inventory from '../components/templates/Inventory'
import Contact from '../components/templates/Contact'
import { Layout } from '../components/Layout'

const Page = ({pageData, inventoryData, globalData}) => {
  
    const template = pageData.template
    
    return (
        <Layout data={globalData}>
            <main>
                <PageHeader heading={pageData.title} image={globalData.pageHeader} />

                {template === `inventoryIndex` && <Inventory vehicles={inventoryData} />}
                {template === `services` && <Services cards={pageData.contentCards} />}
                {template === `contact` && <Contact content={globalData} />}

                {pageData.footerLinkBoxes &&
                  <LinkBoxes data={pageData.footerLinkBoxes} />
                }
                
            </main>
            <aside>
                <div>
                    {/* form */}
                </div>
            </aside>
            
        </Layout>
    )
  }

export async function getStaticPaths() {
    const paths = await client.fetch(
        `*[_type == "page" && defined(slug.current)][].slug.current`
    )

    console.log(paths)
  
    return {
      paths: paths.map((slug) => ({params: {slug}})),
      fallback: true,
    }
  }

  
  
  export async function getStaticProps(context) {
    // It's important to default the slug so that it doesn't return "undefined"
    const { slug = "" } = context.params

    const globalData = await client.fetch(`*[_type == "siteSettings"][0]{
      address, hours, phone, email,
      "headerMenu": headerMenu[]{
        text,
        "page": pageLink->slug.current
      },
      "pageHeader": pageHeader.asset->url
    }
    `)
    const pageData = await client.fetch(`*[_type == "page" && slug.current == $slug][0]{
      _id, header, title, template,
      contentCards,
      footerLinkBoxes[]->{
        "globalLinkBox": {
          "heading": globalLinkBox.heading,
          "eyebrow": globalLinkBox.eyebrow,
          "page": globalLinkBox.page->slug.current,
          "backgroundImage": globalLinkBox.backgroundImage.asset->url
        }
      },
    }`, { slug })
    const inventoryData = await client.fetch(`*[_type == "vehicle"]{
      _id, year, make, model, price, mileage, engine, drivetrain, exterior_color, interior_color, transmission,
      "images": images[].asset->url
    }`)

    return {
      props: {
        globalData,
        pageData,
        inventoryData
      }
    }
  }
  
  export default Page