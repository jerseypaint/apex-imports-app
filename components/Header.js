import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/router"
import { Hamburger } from "./svg"

export const Header = ({logo, nav}) => {
    const [ showNav, setShowNav ] = useState(false)
    const router = useRouter()

    return(
        <header className={`relative bg-black py-4`}>
            <div className={`container`}>
                <div className={`flex justify-between items-center`}>
                    <div className={`md:max-w-xs md:mr-12`}>
                        <a href={`/`}>
                            {logo &&
                                <Image src={logo.src} height={100} width={100} alt={logo.alt} />
                            }
                            {!logo &&
                                <span className={`block text-white text-[60px] font-black leading-none`}>AI</span>
                            }
                        </a>
                    </div>
                    <div>
                        <div className={`md:hidden`}>
                            <button onClick={() => setShowNav(!showNav)}>
                                <i>
                                    <Hamburger />
                                </i>
                            </button>
                        </div>
                            {nav &&
                                <nav className={`hidden md:block`}>
                                    <ul className={`md:flex md:-mx-5`}>
                                        {nav.map(item => {
                                            const isActive = router.asPath === `/${item.page}` ? true : (item.page === null && router.asPath === '/' ? true : false)
                                            return(
                                                <li className={`font-exo-2 uppercase text-lg mx-5`}>
                                                    <Link href={`/${item.page === null ? `` : item.page}`} class={`border-b hover:border-white active:border-white transition-colors duration-300 ${isActive ? `border-white` : `border-transparent`}`}>{item.text}</Link>
                                                </li>
                                            )
                                        })}
                                        
                                    </ul>
                                </nav>
                            }
                            {nav &&
                                <nav className={`md:hidden`}>
                                    <ul className={`absolute top-full right-0 h-full min-h-screen min-w-[50%] bg-black z-50 duration-300 transition-transform ${showNav ? `` : `translate-x-full`}`}>
                                        {nav.map(item => {
                                            return(
                                                <li className={`font-exo-2 uppercase text-lg px-4 py-2`}>
                                                    <Link href={`/${item.page === null ? `` : item.page}`}>{item.text}</Link>
                                                </li>
                                            )
                                        })}
                                        
                                    </ul>
                                </nav>
                            }
                    </div>
                </div>
            </div>
        </header>
    )
}