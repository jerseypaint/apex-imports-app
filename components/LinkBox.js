import Image from "next/image"
import Link from "next/link"

const LinkBox = ({heading, eyebrow, image, page}) => {
    return (
       <div className={`relative w-full pt-[calc(56.25%-120px)]`}>
            <Link href={page}>
                <div className={`absolute top-0 left-0 w-full h-full object-cover`}>
                    <Image src={image} className={`w-full h-full object-cover`} width={800} height={1200} />
                    <div className={`absolute top-0 left-0 w-full h-full object-cover bg-black opacity-20`}></div>
                </div>
                <div className={`relative flex flex-col justify-end h-full p-6`}>
                    {eyebrow &&
                        <span className={`text-h3`}>{eyebrow}</span>
                    }
                    {heading &&
                        <h2 className={`text-h2`}>{heading}</h2>
                    }
                </div>
            </Link>
       </div>
    )
}

export default LinkBox