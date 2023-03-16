import { useRef } from 'react';
import Image from 'next/image';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide-core.min.css';
import Link from 'next/link';
import { motion } from "framer-motion";

import { ArrowRight, ChevronLeft, ChevronRight } from './svg';
import { money } from '../lib/format';

const VehicleCard = ({vehicle}) => {

    return (
        <motion.div
            className={`border border-white bg-black border-opacity-40 lg:flex my-12 first:mt-0 last:mb-0transition-opacity duration-300`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
        >
            <div className={`flex flex-col w-full flex-1 lg:max-w-[40%]`}>
                <Splide
                options={ {
                    rewind  : true,
                    type    : `loop`,
                    perPage : 1,
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
                                <SplideSlide className={`relative h-full w-full pt-[56.25%] lg:pt-0`}>
                                    <Image src={image}  width={600} height={400} unoptimized={true} className={`absolute top-0 left-0 w-full h-full object-cover`} />
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
            <div className={`flex-1`}>
                <div className={`p-6`}>
                    <h2 className={`text-h2 mb-6`}>{vehicle.year} {vehicle.make} {vehicle.model}</h2>
                    <ul className={`grid grid-cols-2 gap-4`}>
                        <li className={`text-p`}><span className={`font-bold block md:inline`}>Engine: </span>{vehicle.engine}</li>
                        <li className={`text-p`}><span className={`font-bold block md:inline`}>Mileage: </span>{vehicle.mileage}</li>
                        <li className={`text-p`}><span className={`font-bold block md:inline`}>Transmission: </span>{vehicle.transmission}</li>
                        <li className={`text-p`}><span className={`font-bold block md:inline`}>Exterior Color: </span>{vehicle.exterior_color}</li>
                        <li className={`text-p`}><span className={`font-bold block md:inline`}>Drivetrain: </span>{vehicle.drivetrain}</li>
                        <li className={`text-p`}><span className={`font-bold block md:inline`}>Interior Color: </span>{vehicle.interior_color}</li>
                    </ul>
                </div>
                <div className={`p-6 border-t border-white border-opacity-40 flex gap-6 flex-col md:flex-row items-center justify-between`}>
                    <p className={`text-3xl md:text-4xl`}>{money(vehicle.price)}</p>
                    <Link className={`button flex justify-end items-center gap-4`} href={`/vehicles/${vehicle._id}`}>Learn More<ArrowRight /></Link>
                </div>
            </div>
        </motion.div>
    )
}

export default VehicleCard