import { motion } from "framer-motion";

import LinkBox from './LinkBox'

const LinkBoxes = ({data}) => {
    const linkBoxes = data

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
            staggerChildren: 0.5
            }
        }
    }

    const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
    }

    return(
        <div className={`container`}>
            <hr className='max-w-[600px] text-cemter mx-auto opacity-40 mt-6 mb-14' />
            <motion.div
                className={`flex flex-col md:grid md:grid-cols-2 gap-6 justify-center pb-14`}
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            >
                {linkBoxes &&
                    linkBoxes.map(linkBox => {
                        linkBox = linkBox.globalLinkBox

                        if (linkBox) {
                            return(
                                <motion.div variants={item}>
                                    <LinkBox heading={linkBox.heading} page={linkBox.page} eyebrow={linkBox.eyebrow} image={linkBox.backgroundImage} />
                                </motion.div>
                            )
                        }
                    })
                }
            </motion.div>
        </div>
    )
}

export default LinkBoxes