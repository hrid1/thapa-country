const ContactUs = () => {

    const handleFormSubmit = (formData) => {
        const formInputData = Object.fromEntries(formData.entries());
        console.log(formInputData)
        
    }
  return (
    <div>
      <h2 className="text-3xl text-white font-semibold text-center mt-4">
        Contact Us
      </h2>

      <section className="flex items-center justify-center">
        <form action={handleFormSubmit} className="w-4/5 md:w-1/3 space-y-5 my-8">
          <input
            className="input bg-transparent border rounded  w-full p-1.5"
            type="text"
            required
            placeholder="Enter your Name"
            name="username"
          />
          <input
            className="input bg-transparent  rounded border w-full p-1.5"
            type="email"
            required
            placeholder="Enter your Email"
            name="email"
          />
          <textarea
            className="input bg-transparent border rounded  w-full p-1.5 h-36"
            type="text"
            required
            placeholder="Enter your Message"
            name="message"
          />
          <div className="mx-auto text-center">
            <button type="submit"  className="w-full px-3 py-2 font-bold rounded-xl  text-center border bg-green-950">
              SEND
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default ContactUs;
