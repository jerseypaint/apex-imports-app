import { useState } from 'react'
import { PortableText } from '@portabletext/react'
import { useForm } from "react-hook-form"
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide-core.min.css'
import Image from 'next/image'

import { client } from '../../lib/client'
import PageHeader from '../../components/PageHeader'
import ContentCards from '../../components/ContentCards'
import LinkBoxes from '../../components/LinkBoxes'
import { Minus, Plus, ChevronLeft, ChevronRight } from '../../components/svg'
import { money } from '../../lib/format'
import { Layout } from '../../components/Layout'

const Card = ({heading, body}) => {
    const [ showing, setShowing ] = useState(false)

    return(
        <div className={`border border-white bg-black border-opacity-40 my-12 p-6`}>
            <div className={`flex justify-between`}>
                <h3 className={`text-h3`}>{heading}</h3>
                <button onClick={() => setShowing(!showing)} className={`text-white`}>
                    {showing &&
                        <Minus />
                    }

                    {!showing &&
                        <Plus />
                    }
                </button>
            </div>
            {showing &&
                <div className={`mt-6`}>
                    {body &&
                        <PortableText
                        value={body}
                        />
                    }
                </div>
            }
        </div>
    )
}

const Vehicle = ({data, globalData}) => {
    const vehicle = data
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(vehicle)
    return (
        <Layout data={globalData}>
            <main>
                <PageHeader image={globalData && globalData.vehicleHeader !== undefined ? globalData.vehicleHeader : ``} heading={`${vehicle.year} ${vehicle.make} ${vehicle.model}`} />

                <div className={`mb-12`}>
                    <Splide
                        options={ {
                            rewind  : true,
                            type    : `loop`,
                            perMove : 1,
                            pagination: false
                        } }
                        hasTrack={false}
                        aria-label={`${vehicle.year} ${vehicle.make} ${vehicle.model} Slider`}
                        className={`relative overflow-hidden h-full`}
                        >
                        <SplideTrack className={`h-full`}>
                            {vehicle.images.map(image => {
                                
                                return(
                                    <SplideSlide className={`relative h-full max-w-full md:max-w-[600px]`}>
                                        <div className={`relative pt-[66%]`}>
                                            <Image src={image}  width={600} height={400} unoptimized={true} className={`absolute top-0 left-0 w-full h-full object-cover`} />
                                        </div>
                                    </SplideSlide>
                                )
                            })}
                        </SplideTrack>
                        <nav>
                            <ul>
                                <li className={`absolute top-0 left-0 h-full w-auto splide__arrows flex justify-start items-center`}><button className={`splide__arrow splide__arrow--prev`}><ChevronLeft /></button></li>
                                <li className={`absolute top-0 right-0 h-full w-auto splide__arrows flex justify-start items-center`}><button className={`splide__arrow splide__arrow--next`}><ChevronRight /></button></li>
                            </ul>
                        </nav>
                    </Splide>
                </div>

                <div className='container gap-6 grid lg:grid-cols-3 2xl:grid-cols-4'>
                    <div className={`lg:col-span-2 2xl:col-span-3`}>
                        <div className={``}>
                            <div className={`border border-white bg-black border-opacity-40 my-12 p-6 first:mt-0 last:mb-0`}>
                                <div className={`md:flex justify-between items-center`}>
                                    <h2 className={`text-h2 mb-6`}>{vehicle.year} {vehicle.make} {vehicle.model}</h2>
                                    <p className={`text-h2 mb-6`}>{money(vehicle.price)}</p>
                                </div>
                                
                                <ul className={`grid grid-cols-2 gap-4`}>
                                    <li className={`text-p`}>Engine {vehicle.engine}</li>
                                    <li className={`text-p`}>Mileage: {vehicle.mileage}</li>
                                    <li className={`text-p`}>Transmission: {vehicle.transmission}</li>
                                    <li className={`text-p`}>Exterior Color: {vehicle.exterior_color}</li>
                                    <li className={`text-p`}>Drivetrain: {vehicle.drivetrain}</li>
                                    <li className={`text-p`}>Interior Color: {vehicle.interior_color}</li>
                                </ul>
                            </div>

                            <Card heading={`Interior`} body={vehicle.interior_description} />

                            <Card heading={`Exterior`} body={vehicle.exterior_description} />

                            <Card heading={`Performance`} body={vehicle.performance_description} />

                        </div>
                    </div>
                    <aside className={`col-span-1`}>
                        <div>
                            <div className={`bg-ai-gold py-10 px-6`}>
                                <h3 className={`text-h3 mb-6`}>REQUEST INFORMATION</h3>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    {/* register your input into the hook by invoking the "register" function */}
                                    <label className={`mb-4 block`}>
                                        Name
                                        <span className={`md:grid grid-cols-2 gap-4`}>
                                            <input className={`block w-full bg-white bg-opacity-40 border border-white p-2 placeholder:text-white mt-2`} placeholder={`First`} {...register("firstName")} />
                                            <input className={`block w-full bg-white bg-opacity-40 border border-white p-2 placeholder:text-white mt-2`} placeholder={`Last`} {...register("lastName")} />
                                        </span>
                                    </label>

                                    <label className={`mb-4 block`}>
                                        Email
                                        <input className={`block w-full bg-white bg-opacity-40 border border-white p-2 placeholder:text-white mt-2`} placeholder={`joe@email.com`} {...register("Email")} />
                                    </label>

                                    <label className={`mb-4 block`}>
                                        Phone
                                        <input className={`block w-full bg-white bg-opacity-40 border border-white p-2 placeholder:text-white mt-2`} placeholder={`XXX-XXX-XXXX`} {...register("Phone")} />
                                    </label>

                                    <label className={`mb-4 block`}>
                                        Message
                                        <textarea className={`block w-full bg-white bg-opacity-40 border border-white p-2 placeholder:text-white mt-2`} placeholder={`Write a message here`} {...register("Phone")} />
                                    </label>


                                    <input type="submit" className={`button button--solid button--black`} />
                                </form>
                            </div>
                        </div>
                    </aside>
                </div>

                <LinkBoxes data={globalData.footerLinkBoxes} />
            </main>
        </Layout>
    )
  }

export async function getStaticPaths() {
    const paths = await client.fetch(
        `*[_type == 'vehicle']._id`
    )

    console.log(paths)
  
    return {
      paths: paths.map((id) => ({params: {id}})),
      fallback: false,
    }
  }
  
  export async function getStaticProps(context) {
    const { id = "" } = context.params
    const data = await client.fetch(`
      *[_type == "vehicle" && _id == $id][0]{
        _id, year, make, model, price, mileage, engine, drivetrain, exterior_color, interior_color, transmission,
        exterior_description, interior_description, performance_description,
        "images": images[].asset->url
      }
    `, { id })
    const globalData = await client.fetch(`*[_type == "siteSettings"][0]{
        address, hours, phone, email,
        footerLinkBoxes[]->{
            "globalLinkBox": {
              "heading": globalLinkBox.heading,
              "eyebrow": globalLinkBox.eyebrow,
              "page": globalLinkBox.page->slug.current,
              "backgroundImage": globalLinkBox.backgroundImage.asset->url
            }
          },
        "headerMenu": headerMenu[]{
            text,
            "page": pageLink->slug.current
        },
        "vehicleHeader": vehicleHeader.asset->url
    }`)
    return {
      props: {
        data,
        globalData
      }
    }
  }

  export default Vehicle