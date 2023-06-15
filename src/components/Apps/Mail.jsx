import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Mail = ({ isMaximized }) => {
  const form = useRef();
  const [notify, setNotify] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState(<></>);

  const submitHandler = (e) => {
    e.preventDefault();
    const input = form.current;

    if (
      !input.email.value.includes("@") ||
      !input.email.value.includes(".com")
    ) {
      setNotification(
        <>
          <span className=" text-red-600 pe-1">&#10006;</span> Invalid Email
        </>
      );
      setNotify(true);
      setTimeout(() => {
        setNotify(false);
      }, 3000);
      return;
    }

    setIsLoading(true);
    const serviceId = "service_7isvhjm";
    const templateId = "template_jsxd2sx";
    const publicKey = "ns-YLmw0akeeK0kZU";

    emailjs
      .sendForm(serviceId, templateId, input, publicKey)
      .then((result) => {
        setIsLoading(false);
        setNotification(
          <>
            <span className=" text-green-600 pe-1">&#10003;</span> Mail Sent
            Successfully!
          </>
        );
        setNotify(true);
        setTimeout(() => {
          setNotify(false);
        }, 3000);
        form.current.reset();
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <>
      <form
        className={`flex flex-col gap-[5px] h-full w-full overflow-y-auto ${
          isMaximized ? " px-1" : ""
        }`}
        onSubmit={submitHandler}
        ref={form}
      >
        <div className=" w-full flex justify-end">
          <span
            className={`absolute bg-black p-4 mt-5 me-3 text-white text-[17px]  ${
              notify ? "" : " opacity-0"
            }`}
          >
            {notification}
          </span>
        </div>

        <div className=" bg-white border-b-[2px] border-b-[#4d4c4c] m-[2px] p-[10px] flex justify-start gap-[5px] text-[18px] items-center">
          <label htmlFor="receiver" className=" text-[#9b9b9b]">
            To:
          </label>
          <input
            id="receiver"
            type="text"
            readOnly
            value={"renishkar47@gmail.com"}
            className=" border-none shadow-none bg-transparent outline-none p-[5px] "
          />
        </div>
        <div className=" bg-white border-b-[2px] border-b-[#4d4c4c] m-[2px] p-[10px] flex justify-start gap-[5px] text-[18px] items-center">
          <label htmlFor="email" className=" text-[#9b9b9b]">
            From:
          </label>
          <input
            id="email"
            name="email"
            type="text"
            required
            className=" border-none shadow-none bg-transparent outline-none p-[5px] w-full"
          />
        </div>
        <div className=" bg-white border-b-[2px] border-b-[#4d4c4c] m-[2px] p-[10px] flex justify-start gap-[5px] text-[18px] items-center">
          <label htmlFor="subject" className=" text-[#9b9b9b]">
            Subject:
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            required
            className=" border-none shadow-none bg-transparent outline-none p-[5px] w-full"
          />
        </div>
        <textarea
          name="message"
          id="message"
          placeholder="your message"
          required
          className=" text-[16px] min-h-[50%] p-[5px] ps-[10px]  m-[2px] bg-white border-b-[2px] border-b-[#4d4c4c]"
        ></textarea>

        <span className="border-b-[grey] border-b-[1px] flex justify-center " />

        <div className=" flex justify-center m-[5px] p-[5px] pb-[10px]">
          <button
            type="submit"
            className=" flex justify-center items-center w-[100px] gap-[5px] p-[5px] h-[30px] border-t-[#dfdfdf]  border-e-[grey]  border-b-[grey] border-s-[#dfdfdf] border-[2px] disabled:opacity-70 "
            disabled={isLoading}
          >
            {/* <img
              src="/assets/mail.png"
              alt="mail"
              className=" h-[25px] w-[25px] "
            /> */}
            {isLoading ? (
              <span className=" text-gray-600">Sending...</span>
            ) : (
              <span>Send</span>
            )}
          </button>
        </div>
      </form>
    </>
  );
};

export default Mail;
