import Link from 'next/link';
import { Suspense } from 'react';

function ProjectsSearchParamsComponent() {
  const projects = [
    {
      title: "QR Code Attendance System",
      description: "A full-stack Atten built with Flutter and Firebase",
      tech: "Flutter, Firebase, Dart",
      link: "https://passianqr-student.vercel.app/",
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio website",
      tech: "Next.js, Tailwind CSS, TypeScript",
      link: "https://github.com/yourusername/portfolio",
    },
    {
      title: "Medicine Purchase Record App",
      description: "A Mobile app for recording medicine purchases",
      tech: "Flutter, SQLite, Dart",
      link: "https://github.com/jomzdevs/medicine_purchase_record",
    },
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <Link 
          href={project.link} 
          key={index} 
          target="_blank"
          className="border rounded-lg p-6 hover:shadow-lg transition hover:border-gray-400"
        >
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-gray-600 mb-4">{project.description}</p>
          <p className="text-sm text-gray-500">{project.tech}</p>
        </Link>
      ))}
    </div>
  );
}

export default function Projects() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <main className="min-h-screen pt-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">My Projects</h1>
          
          <ProjectsSearchParamsComponent />
        </div>
      </main>
    </Suspense>
  );
}
