export default function Contact() {
  return (
    <main className="min-h-screen pt-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Get in Touch</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
            >
              Send Message
            </button>
          </form>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Connect with me</h2>
            <div className="space-y-2">
              <p>Email: jomaridivinagracia15@gmail.com</p>
              <p>LinkedIn: /in/jomari-divinagracia-0395782aa</p>
              <p>GitHub: @jomzdevs</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
