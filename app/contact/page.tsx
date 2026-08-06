'use client'
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return(
    <div className="flex min-h-screen bg-zinc-50 dark:bg-zinc-900 font-sans">
      <section className="hidden md:block flex-1/4 relative rounded-r-2xl">
        <div className="absolute inset-0 flex-center flex-col  bg-zinc-950/30 backdrop-blur-xs   px-4 text-center ">
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Be Part of <span className="text-primary text-gradient-peach">Peach State Tech</span>
          </h1>

          <p className="mt-4 max-w-2xl text-base sm:text-lg md:text-xl text-white/90">
            Join our growing community of tech enthusiasts and entrepreneurs.
          </p>

        </div>
        <img src="/meeting.jpg" alt="peach-tech-background" className="h-full w-full object-cover " />
      </section>

      <section className="flex-1 flex items-center justify-center bg-white dark:bg-zinc-800 p-8">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">Get in Touch</h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-8">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
          
          <form action="https://formsubmit.co/team@thomasmedia.online" method="POST" className="space-y-6">
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://www.peachstate.tech/thankyou" />
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:ring-2 focus:ring-peach focus:border-transparent outline-none transition"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:ring-2 focus:ring-peach focus:border-transparent outline-none transition"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:ring-2 focus:ring-peach focus:border-transparent outline-none transition resize-none"
                placeholder="Tell us what's on your mind..."
              />
            </div>

            <button
              type="submit"
              className="w-full cursor-pointer bg-gradient-peach text-white font-semibold py-3 px-6 rounded-lg hover:bg-peach/80 transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}