import { Suspense } from 'react'
import ContactForm from './ContactForm'

export default function Contact() {
  return (
    <main className="min-h-screen pt-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Get in Touch</h1>
        
        <Suspense fallback={<div>Loading...</div>}>
          <ContactForm />
        </Suspense>
      </div>
    </main>
  )
}