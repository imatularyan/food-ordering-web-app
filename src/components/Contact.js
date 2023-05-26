import contactImg from "../assets/img/contactUs.png";

const Contact = () => {
  return (
    <div className=" w-10/12 rounded-xl mx-auto bg-orange-400/100 p-8 text-gray-700 text-sm mt-10">
      <div className="flex w-full">
        <div className=" basis-3/5">
          <h1 className="text-3xl font-bold text-white">Contact</h1>
          <img src={contactImg} alt="contact" />
        </div>
        <div className="  basis-2/5">
          <form className="flex flex-col basis-full gap-3 bg-gray-50/90 rounded-xl p-5">
            <div className="flex flex-col">
              <label htmlFor="fullName">Your Name</label>
              <input
                id="fullName"
                type="text"
                className="border focus:border-blue-600 p-3 basis-full outline-none rounded-md mt-2"
                placeholder="Full Name"
              />
            </div>
            <div className="flex flex-col basis-full">
              <label htmlFor="mail">Mail</label>
              <input
                id="mail"
                type="text"
                className="border p-3 basis-full rounded-md outline-none focus:border-blue-600 mt-2"
                placeholder="Email Address"
              />
            </div>
            <div className="flex flex-col basis-full h-96">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                type="textarea"
                name="message"
                className=" p-3 rounded-md outline-none focus:border-blue-600 mt-2 h-44"
                placeholder="Message"
              />
            </div>
            <button
              type="button"
              className=" border bg-blue-600 p-3 text-white rounded-md w-40 tracking-wide ml-auto mt-2"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
