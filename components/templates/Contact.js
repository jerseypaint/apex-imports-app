import { useForm } from "react-hook-form"
const Contact = ({content}) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    const contact = {
        address: content.address,
        hours: content.hours,
        phone: content.phone,
        email: content.email
    }

    console.log(contact.address)

    return(
        <div className={`py-12`}>
            <div className={`container`}>
                <div className={`flex flex-col-reverse md:grid md:grid-cols-3 lg:grid-cols-4 gap-6`}>
                    <aside className={`md:col-span-1 whitespace-pre-line`}>
                        <div className={`mb-6`}>
                            <p className={`text-h3 font-exo-2 font-bold`}>Address</p>
                            <p>
                                {contact &&
                                    <span>{contact.address}</span>
                                }
                            </p>
                        </div>
                        <div className={`mb-6`}>
                            <p className={`text-h3 font-exo-2 font-bold`}>Contact</p>
                            <p>
                                <span className={`block`}>CALL: {contact && contact.phone}</span>
                                <span className={`block`}>EMAIL: {contact && contact.email}</span>
                            </p>
                        </div>
                        <div className={`mb-6`}>
                            <p className={`text-h3 font-exo-2 font-bold`}>Hours</p>
                            {contact &&
                                <span>{contact.hours}</span>
                            }
                        </div>
                        {/* <div>
                            <p>Follow</p>
                        </div> */}
                    </aside>
                    <div className={`md:col-span-2 lg:col-span-3`}>
                        <h2 className={`text-h2 mb-6`}>Send us a Message</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* register your input into the hook by invoking the "register" function */}
                            <label className={`mb-4 block`}>
                                Name
                                <span className={`md:grid grid-cols-2 gap-4`}>
                                    <input className={`block w-full bg-white bg-opacity-40 border border-white p-2 placeholder:text-white mt-2`} placeholder={`First`} {...register("firstName")} />
                                    <input className={`block w-full bg-white bg-opacity-40 border border-white p-2 placeholder:text-white mt-2`} placeholder={`Last`} {...register("lastName")} />
                                </span>
                            </label>

                            <div className={`lg:grid grid-cols-2 gap-4`}>
                                <label className={`mb-4 block`}>
                                    Email
                                    <input className={`block w-full bg-white bg-opacity-40 border border-white p-2 placeholder:text-white mt-2`} placeholder={`joe@email.com`} {...register("Email")} />
                                </label>

                                <label className={`mb-4 block`}>
                                    Phone
                                    <input className={`block w-full bg-white bg-opacity-40 border border-white p-2 placeholder:text-white mt-2`} placeholder={`XXX-XXX-XXXX`} {...register("Phone")} />
                                </label>
                            </div>

                            <label className={`mb-4 block`}>
                                Message
                                <textarea className={`block w-full bg-white bg-opacity-40 border border-white p-2 placeholder:text-white mt-2`} placeholder={`Write a message here`} {...register("Phone")} />
                            </label>


                            <input type="submit" className={`button button--solid button--black`} />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact