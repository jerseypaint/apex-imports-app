import Link from "next/link"

export const Footer = ({nav, logo, contact}) => {
    return (
        <footer className={`bg-black py-12 px-6`}>
            <div className={`container`}>
                <div className={`flex flex-col-reverse lg:flex-row lg:justify-between`}>
                    <div className={`text-center md:text-left my-6 whitespace-pre-line`}>
                        <div>
                            {/* logo */}
                        </div>
                        <div className={`mb-6 md:flex gap-10`}>
                            <div>
                                <p className={`text-h4`}>Apex Imports</p>
                                <p>
                                    {contact &&
                                        <span>{contact.address}</span>
                                    }
                                </p>
                            </div>
                            <div>
                                <p className={`text-h4`}>Hours</p>
                                <p>
                                    {contact &&
                                        <span>{contact.hours}</span>
                                    }
                                </p>
                            </div>
                        </div>
                        <div>
                            <p>CALL: <a href={`tel:${contact && contact.phone}`}>{contact && contact.phone}</a></p> 
                            <p>EMAIL: <a href={`mailto:${contact && contact.email}`}>{contact && contact.email}</a></p>
                        </div>

                    </div>
                    <div>
                        {nav &&
                            <nav className={``}>
                                <ul className={`text-center md:text-left md:flex md:-mx-5`}>
                                    {nav.map(item => {
                                        return(
                                            <li className={`font-exo-2 uppercase text-lg mx-5`}>
                                                <Link href={`/${item.page === null ? `` : item.page}`}>{item.text}</Link>
                                            </li>
                                        )
                                    })}
                                    
                                </ul>
                            </nav>
                        }
                    </div>
                </div>
                <div>
                    <div>
                        {/* copyright */}
                    </div>
                    <div>
                        {/* socials */}
                    </div>
                </div>
            </div>
        </footer>
    )
}