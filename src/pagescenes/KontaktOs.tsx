import PageTile from "@/components/generic/HText-Titles/PageTitle";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import {
  EnvelopeIcon,
  ChatBubbleLeftEllipsisIcon,
  PhoneIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";
import Hero1 from "@/assets/kontaktosimg2.jpg";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const KontaktOs: React.FC<Props> = ({ setSelectedPage }) => {
  const inputStyles =
    "mt-5 w-full rounded-lg bg-brownish-100 px-5 py-3 placeholder-yellowgolden-100 text-white";
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };
  return (
    <section id="kontaktos" className="mx-auto w-5/6 pt-24 pb-32">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.KontaktOs)}
      >
        {/* Header */}
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <PageTile title="Har du nogen spørgsmål?" />
          {/* <p className="my-5"></p> */}
          {/* <ul className="my-5 pl-5 space-y-3 text-primary-300 list-disc marker:text-gray-500"> */}

          <div className="my-5">
            {/* <li> */}
            <div className="flex">
              <PhoneIcon className="h-7 w-7 text-brownish-100" />
              <p className="ml-1">Ring mellem 09-17 på:</p>
              <span className="text-black ml-1">+45 63112255 </span>
            </div>
            <br />
            {/* </li> */}
            {/* <li> */}
            <div className="flex">
              <ChatBubbleLeftEllipsisIcon className="h-7 w-7 text-brownish-100" />
              <p className="ml-1">Send en</p>{" "}
              <span className="text-black ml-1">SMS</span>
              <p className="ml-1">til:</p>
              <span className="ml-1 text-black">+45 63112255 </span>
            </div>
            <br />
            {/* </li> */}
            {/* </ul> */}

            <div className="flex">
              <EnvelopeIcon className="h-8 w-8 text-brownish-100" />
              <p className="ml-1">Send en E-mail til: HamidHonning@gmail.com</p>
            </div>
            <br />

            <div className="flex">
              <PencilSquareIcon className="h-8 w-8 text-brownish-100" />
              <p className="ml-1">
                Ellers henvend dig via. nedstående kontaktformat:
              </p>
            </div>
          </div>
        </motion.div>

        {/* INPUTFORM AND IMAGE */}
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              target="_blank"
              onSubmit={onSubmit}
              action="https://formsubmit.co/1d8a2e56660ca2f67d837a48cee41adf"
              method="POST"
            >
              <input
                type="text"
                placeholder="Navn"
                className={`${inputStyles}`}
                {...register("name", { required: true, maxLength: 100 })}
              />
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === "required" && "This field is required"}
                  {errors.name.type === "required" && "Max length is 100 char!"}
                </p>
              )}

              <input
                type="text"
                placeholder="E-mail"
                className={`${inputStyles}`}
                {...register("email", {
                  required: true,
                  pattern: /^[A-z0-9._%+-]+@[A-z0-9.-]+\.[A-z]{2,4}$/,
                })}
              />
              {errors.email && (
                <p className="mt-1 text-primary-500">
                  {errors.email.type === "required" && "This field is required"}
                  {errors.email.type === "pattern" && "Invalid email address!"}
                </p>
              )}

              <textarea
                rows={10}
                cols={50}
                placeholder="Besked"
                className={`${inputStyles}`}
                {...register("message", { required: true, maxLength: 2000 })}
              />
              {errors.message && (
                <p className="mt-1 text-primary-500">
                  {errors.message.type === "required" &&
                    "This field is required"}
                  {errors.message.type === "required" &&
                    "Max length is 2000 char!"}
                </p>
              )}

              <button
                type="submit"
                className="mt-5 rounded-lg bg-yelloworange-100 px-20 py-3 transition duration-500 hover:text-white text-brownish-300"
              >
                SEND
              </button>
            </form>
          </motion.div>

          <motion.div
            className="relative mt-16 basis-2/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="mt-5 md:before:content-logotext w-full before:absolute before:-bottom-14 before:-right-0.5 before:z-[-1]">
              <img
                src={Hero1}
                className="rounded-3xl w-full"
                alt="kontakt-os-img"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default KontaktOs;
