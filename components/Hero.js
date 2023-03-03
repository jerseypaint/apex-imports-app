import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion";

const Hero = ({data}) => {
    let backgroundImage = data.backgroundImage ? data.backgroundImage : false ;
    let heading         = data.heading ? data.heading : false ;
    let link            = data.link ? data.link : false ;

    //console.log(data)

    return (
       <div className={`relative min-h-[600px] py-8 flex flex-col items-center justify-center`}>
            {backgroundImage && 
                <div className={`absolute top-0 left-0 w-full h-full object-cover`}>
                    <Image src={backgroundImage} className={`w-full h-full object-cover`} width={1920} height={1280} unoptimized={true} />
                </div>
            }
            <div className={`container text-center relative`}>
                {heading &&
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5 }}
                    >
                        <h1 className={`text-h1 mb-12`}>{heading}</h1>
                    </motion.div>
                    
                }
                
                {link &&
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2 }}
                    >
                        <Link href={link.url} className={`button button--ghost button--white`}>{link.text}</Link>
                    </motion.div>
                }
            </div>
       </div>
    )
}

export default Hero