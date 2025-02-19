"use client"
import { motion } from "framer-motion"
import Loader from "../ui/Loader";
import SuccessForm from "../ui/SuccessForm";
import { FormEvent, useState } from "react";
import { formVariants } from "@/animation/varients";
export default function Form() {

    const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
    const [loader, setLoader] = useState<boolean>(false)
    const [errorOnSubmit, setErrorOnSubmit] = useState(false)


    const [data, setData] = useState({
        name: "",
        email: "",
        message: "",
    })

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        setIsSubmitting(true);
        setLoader(true);

        // TODO: API CALL

        setTimeout(() => {
            setData({
                name: "",
                email: "",
                message: "",
            });
            setLoader(false);
            setErrorOnSubmit(false);

            setTimeout(() => {
                setIsSubmitting(false);

            }, 7000);
        }, 4000);



    };


    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={formVariants}
            viewport={{ once: true }}
            className={`${isSubmitting ? "gap-0" : 'gap-0'} flex flex-col w-full`}
        >
            {isSubmitting ?
                <div className="h-full min-h-[350px] w-full relative flex flex-col items-center justify-center bg-dark-gray-2 rounded-xl border border-dark-gray-3 select-none">
                    {loader ? <Loader /> : <> <SuccessForm action={errorOnSubmit ? "error" : "success"} /> </>}
                </div>
                :
                <form method="POST" onSubmit={handleSubmit} className="grid gap-4">
                    {/* Input Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="">
                            <input
                                className={`appearance-none w-full leading-[1.4em] outline-none border-none p-4 rounded-lg font-medium text-base placeholder:text-light-gray-1 text-very-light-gray bg-dark-gray-2`}
                                name="Name"
                                placeholder="Name"
                                type="text"
                                aria-label="Full Name"
                                value={data.name}
                                onChange={(e) => setData({ ...data, name: e.target.value })}

                            />
                        </div>
                        <div className="">
                            <input
                                className="appearance-none w-full leading-[1.4em] outline-none border-none p-4 rounded-lg font-medium text-base placeholder:text-light-gray-1 text-very-light-gray bg-dark-gray-2"
                                name="Email"
                                placeholder="Email"
                                type="email"
                                aria-label="Email Address"
                                value={data.email}
                                onChange={(e) => setData({ ...data, email: e.target.value })}

                            />
                        </div>
                    </div>
                    {/* Textarea */}
                    <textarea
                        className="appearance-none w-full leading-[1.4em] outline-none border-none p-4 rounded-lg font-medium text-base placeholder:text-light-gray-1 text-very-light-gray bg-dark-gray-2 resize-y min-h-56 max-h-96"
                        name="Message"
                        placeholder="Message"
                        rows={8}
                        aria-label="Message"
                        value={data.message}
                        onChange={(e) => setData({ ...data, message: e.target.value })}

                    />

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-almost-black text-white p-4 rounded-lg font-medium hover:bg-dark-gray-4 transition-all"
                    >
                        Send Your Message
                    </button>
                </form>
            }

            <div />
        </motion.div>
    )
}
