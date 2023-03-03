import { Header } from './Header'
import { Footer } from './Footer'

export const Layout = ({data, children}) => {
    const nav = data ? data.headerMenu : false

    const contact = {
        address: data.address,
        hours: data.hours,
        phone: data.phone,
        email: data.email
    }
    return(
        <div className={`overflow-hidden`}>
            <Header logo={false} nav={nav} />
            <div>
                {children}
            </div>
            <Footer logo={false} nav={nav} contact={contact} />
        </div>
    )
}