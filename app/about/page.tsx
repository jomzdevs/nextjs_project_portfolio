export default function About() {
  return (
    <main className="min-h-screen pt-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Background</h2>
            <p className="text-gray-600">
              A passionate developer with a year of experience in building web and mobile applications using Flutter Framework, Dart for Mobile and React/NextJs, Tailwind CSS for web application.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Experience</h2>
            <ul className="space-y-2">
              {['Web Development', 'Mobile Development', 'UI/UX Design'].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
