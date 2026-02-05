import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function ThankYou() {
  return (
    <div className="min-h-screen flex  justify-center bg-gradient-to-br from-zinc-50 to-zinc-100 px-4">
      <div className="max-w-2xl w-full text-center mt-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="mb-6 flex justify-center">
            <div className="bg-peach/40 rounded-full p-3">
              <CheckCircle2 className="w-16 h-16 text-peach" />
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
            Thank You for Reaching Out!
          </h1>

          <p className="text-lg text-zinc-600 mb-4">
            We've received your message and appreciate you contacting Peach State Tech.
            Our team will get back to you shortly.
          </p>

          <p className="text-zinc-500 mb-8">
            In the meantime, feel free to explore our latest tech news, tutorials,
            and digital insights.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/browse/?"
              className="inline-flex items-center justify-center px-6 py-3 bg-peach text-white font-semibold rounded-lg hover:bg-peach/80 transition duration-200"
            >
              View Latest Articles
            </Link>

            <Link 
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-peach text-peach font-semibold rounded-lg hover:bg-peach hover:text-white transition duration-200"
            >
              Go Back Home
            </Link>
          </div>

          <div className="mt-8 pt-8 border-t border-zinc-200">
            <p className="text-sm text-zinc-500">
              Expected response time: <span className="font-semibold text-zinc-700">24-48 hours</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}