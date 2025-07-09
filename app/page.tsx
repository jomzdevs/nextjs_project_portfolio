"use client"
import { useEffect, useState } from "react"
import { SplashPage } from "../components/Splash"
import Navbar from "../components/Navbar"
import { SplashProvider, useSplash } from "./pages/contexts/SplashContext"

const facts = [
  "The first computer bug was an actual moth found in a computer.",
  "The first programmer was Ada Lovelace in the 1800s.",
  "The original name for Java was Oak.",
  "Python is named after Monty Python, not the snake.",
  "The first version of Windows was released in 1985.",
  "The first website is still online: info.cern.ch.",
  "The 'Hello, World!' program is often the first program written when learning a new language.",
  "The first video game was created in 1958 and was called Tennis for Two.",
  "The C programming language was developed at Bell Labs in 1972.",
  "Git was created by Linus Torvalds, the creator of Linux.",
  "JavaScript was created in just 10 days.",
  "There are over 700 programming languages.",
  "COBOL is one of the oldest programming languages still in use today.",
  "The first emoticon was used in 1982 by computer scientist Scott Fahlman.",
  "The first computer virus was created in 1983.",
  "The first email was sent in 1971 by Ray Tomlinson.",
  "PHP originally stood for 'Personal Home Page'.",
  "The first iPhone was released in 2007 and revolutionized mobile development.",
  "Stack Overflow was launched in 2008.",
  "The term 'bug' in computing was popularized by Grace Hopper.",
]

function HomeContent() {
  const { showSplash } = useSplash()
  const [fact, setFact] = useState("")

  useEffect(() => {
    setFact(facts[Math.floor(Math.random() * facts.length)])
  }, [])

  if (showSplash) return <SplashPage fact={fact} />

  return (
    <>
      <Navbar />
      <main className="min-h-screen p-8 dark:bg-gray-900">
        {/* Render navbar and all content only when splash is not active */}

        {/* Hero Section */}
        <section className="py-20 text-center">
          <h1 className="text-5xl font-bold mb-4 dark:text-white">Jomari Divinagracia</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">Web and Mobile Developer</p>
        </section>

        {/* About Section */}
        <section className="max-w-3xl mx-auto py-16">
          <h2 className="text-3xl font-bold mb-6 dark:text-white">About Me</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            I'm a passionate developer with experience in building modern web applications. I just like to build web and
            mobile apps.
          </p>
        </section>

        {/* Skills Section */}
        <section className="bg-gray-50 dark:bg-gray-800 py-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 dark:text-white">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "Git", "Flutter", "Dart"].map((skill) => (
                <div
                  key={skill}
                  className="bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white p-4 rounded-lg shadow"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="max-w-3xl mx-auto py-16">
          <h2 className="text-3xl font-bold mb-6 dark:text-white">Get In Touch</h2>
          <div className="flex gap-4 justify-center">
            <a
              href="mailto:jomaridivinagracia15@gmail.com"
              className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Email
            </a>
            <a
              href="https://github.com"
              className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </main>
    </>
  )
}

export default function Home() {
  return (
    <SplashProvider>
      <HomeContent />
    </SplashProvider>
  )
}
