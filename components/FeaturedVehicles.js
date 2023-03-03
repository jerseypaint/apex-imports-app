import Image from 'next/image';
import Link from 'next/link';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import { ChevronLeft, ChevronRight } from './svg';
import '@splidejs/splide/dist/css/splide-core.min.css';
import { money } from '../lib/format';


const FeaturedVehicles = ({data}) => {
    let heading         = data.heading ? data.heading : false ;
    let link            = data.link ? data.link : false ;
    let vehicles        = data.vehicles ? data.vehicles : false ;

    return(
        <div className={`pt-8`}>
            <div className={`container`}>
                <div className={`flex flex-col gap-4 md:flex-row justify-between items-center mb-12`}>
                    <h2 className={`text-h2`}>{heading}</h2>
                    <Link href={link.url} className={`hidden md:inline-block button button--ghost button--white`}>{link.text}</Link>
    
                </div>
                {vehicles &&
                    <>
                        <Splide
                            options={ {
                                rewind  : false,
                                type    : `loop`,
                                perPage : 1,
                                perMove : 1,
                                pagination: false,
                                mediaQuery: `min`,
                                breakpoints: {
                                    640: {
                                        perPage: 1.5,
                                    },
                                    1280: {
                                        perPage: 2.5,
                                    }
                              }
                            } }
                            hasTrack={false}
                            aria-label={`Featured Vehicles Slider`}
                            className={`overflow-hidden`}
                            >
                            <SplideTrack className={`md:-mx-12`}>
                                {vehicles.map(vehicle => {
                                    console.log(vehicle)
                                    return(
                                        <SplideSlide className={`md:px-12 md:border-r md:border-white md:border-opacity-40`}>
                                            <Link href={`/vehicles/${vehicle._id}`} className={`flex flex-col h-full`}>
                                                <div className={`relative w-full pt-[56.25%] overflow-hidden`}>
                                                    <Image src={vehicle.image}  width={600} height={400} unoptimized={true} className={`absolute top-0 left-0 w-full h-full object-cover`} />
                                                </div>
                                                <div className={`md:flex md:justify-between md:items-start mt-3 mb-6 flex-1`}>
                                                    <h3 className={`text-h3`}>{vehicle.year} {vehicle.make} {vehicle.model}</h3>
                                                    <p className={`md:text-right text-h2`}>{money(vehicle.price)}</p>
                                                </div>
                                                <div className={`md:flex md:justify-between md:items-end`}>
                                                    <p className={`text-lg`}>{parseFloat(vehicle.mileage).toLocaleString('en')} mi</p>
                                                    <p className={`md:text-right button`}>More</p>
                                                </div>
                                            </Link>
                                        </SplideSlide>
                                    )
                                })}
                            </SplideTrack>
                            <ul className={`splide__arrows flex gap-4 justify-end mt-12`}>
                                    <li><button className={`splide__arrow splide__arrow--prev`}><ChevronLeft /></button></li>
                                    <li><button className={`splide__arrow splide__arrow--next`}><ChevronRight /></button></li>
                                </ul>
                        </Splide>
                    </>
                }
                <div className={`text-center md:hidden mt-12`}>
                    <Link href={link.url} className={`button button--ghost button--white`}>{link.text}</Link>
                </div>
            </div>
        </div>

    )
}

export default FeaturedVehicles