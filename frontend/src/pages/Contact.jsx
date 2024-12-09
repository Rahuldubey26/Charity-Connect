const Contact = () => {
    return (
      <div className="container mx-auto py-10">
        <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
        <form className="bg-white shadow-md rounded-lg p-6">
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input type="text" className="w-full border rounded-lg p-2" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input type="email" className="w-full border rounded-lg p-2" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Message</label>
            <textarea className="w-full border rounded-lg p-2"></textarea>
          </div>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">Submit</button>
        </form>
      </div>
    );
  };
  
  export default Contact;
  