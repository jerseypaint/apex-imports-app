import { PortableText } from "@portabletext/react"
import { motion } from "framer-motion"

const Card = ({card}) => {

    const type      = card.type
    const heading   = card.heading
    const body      = card.body
    const list      = card.list
    const media     = card.media
    const mediaType = card.type === `mediaText` ? card.media.type : false
    const ytSource  = mediaType === `video` ? card.media.ytEmbedUrl : false
    const image     = mediaType === `image` ? card.media.image : false

    const components = {
        block: {
            h4: ({children}) => <h4 className="text-h4">{children}</h4>,
            normal: ({children}) => <p className="text-p mb-3">{children}</p>,
        },
        marks: {
            em: ({children}) => <em className={`italic`}>{children}</em>,
            link: ({value, children}) => {
                const target = (value?.href || '').startsWith('http') ? '_blank' : undefined
                return (
                    <a href={value?.href} target={target} rel={target === '_blank' && 'noindex nofollow'}>
                        {children}
                    </a>
                )
            },
        },
        list: {
          bullet: ({children}) => <ul className={`ml-6 list-disc mt-4`}>{children}</ul>,
          number: ({children}) => <ol className={`ml-6 list-decimal mt-4`}>{children}</ol>,
        },
        listItem: {
            bullet: ({children}) => <li className={`mb-2 last:mb-0`}>{children}</li>,
          },
      }

    return(
        <>
            {(card.type === `text` || card.type === `textList`) &&
                <motion.div
                    className={`border border-white bg-black border-opacity-40 my-6 p-6 first:mt-0 last:mb-0`}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5 }}
                    >
                    <div className={``}>
                        <h3 className={`text-h3`}>{heading}</h3>
                    </div>
                    <div className={`mt-6`}>
                        <PortableText value={body} components={components} />
                    </div>
                    {list &&
                        <ul className={`mt-6 list-disc ml-6 grid md:grid-cols-2 gap-3`}>
                            {list.map(item => {
                                return(
                                    <li className={``}>{item}</li>
                                )
                            })}
                        </ul>
                    }
                </motion.div>
            }

            {card.type === `mediaText` &&
                <motion.div
                    className={`border border-white bg-black border-opacity-40 my-6 p-6 first:mt-0 last:mb-0`}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5 }}
                >
                
                    <div className={``}>
                        <h3 className={`text-h3`}>{heading}</h3>
                    </div>
                    <div className={`mt-6 md:flex gap-6`}>
                        <div className={`flex-1`}>
                            {ytSource &&
                                <div className={`relative pt-[56.25%] w-full`}>
                                    <iframe
                                        className={`absolute top-0 left-0 w-full h-full object-cover`}
                                        width="560"
                                        height="315"
                                        src={ytSource}
                                        title="YouTube video player"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowfullscreen>
                                    </iframe>
                                </div>

                            }
                        </div>
                        <div className={`flex-1 mt-6 md:mt-0`}>
                            <div>
                                <PortableText value={body} components={components} />
                            </div>
                            {list &&
                                <ul className={`mt-6 list-disc ml-6 grid md:grid-cols-2 gap-3`}>
                                    {list.map(item => {
                                        return(
                                            <li>{item}</li>
                                        )
                                    })}
                                </ul>
                            }
                        </div>
                    </div>


                </motion.div>
            }
        </>
    )
}

export default Card