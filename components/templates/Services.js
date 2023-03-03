import { PortableText } from "@portabletext/react"
import { useForm } from "react-hook-form"
const Card = ({heading, body, list, media}) => {

    return(
        <div className={`border border-white bg-black border-opacity-40 my-6 p-6 first:mt-0 last:mb-0`}>
            <div className={`flex justify-between`}>
                <h3 className={`text-h3`}>{heading}</h3>
            </div>
            <div className={`mt-6`}>
             <PortableText value={body} />
            </div>
        </div>
    )
}


const Services = ({cards}) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return(
        <div className={`py-12`}>
            <div className={`container`}>
                <div className='md:grid md:grid-cols-3 2xl:grid-cols-4 gap-6'>
                    <div className={`col-span-2 2xl:col-span-3`}>
                        <div>
                            {cards &&
                                cards.map(card => {
                                    return(
                                        <Card heading={card.heading} body={card.body} list={card.list} />
                                    )
                                })
                            }
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
            </div>
        </div>
    )
}

export default Services