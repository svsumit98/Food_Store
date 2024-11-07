const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-xl w-full">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
          Contact Us
        </h1>
        <p className="text-center text-gray-600 mb-8">
          We'd love to hear from you! Reach out through any of the following methods.
        </p>
        
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <img
              src="https://img.icons8.com/ios-filled/50/000000/phone.png"
              alt="Contact Illustration"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Phone</h3>
              <p className="text-gray-500">+91 9810651537</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <img
              src="https://img.icons8.com/ios-filled/50/000000/email-open.png"
              alt="Email Icon"
              className="w-12 h-12"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Email</h3>
              <p className="text-gray-500">svsumit9810@gmail.com</p>
            </div>
          </div>
        </div>
        
        <form className="mt-8 space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Name</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200"
              placeholder="Your Email"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Message</label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200"
              placeholder="Your Message"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
