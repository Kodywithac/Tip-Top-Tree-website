import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import Image from "next/image";

export default function TipTopTreeWebsite() {
  return (
    <div className="min-h-screen bg-green-50 p-6">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-green-800">Tip Top Tree & Landscape</h1>
        <p className="text-xl text-green-700 font-semibold mt-2">Call Now: <a href="tel:2486886128" className="hover:underline">248-688-6128</a></p>
        <p className="text-md text-green-500">Serving Orion Township & surrounding areas</p>
        <div className="mt-4">
          <a href="tel:2486886128">
            <Button className="bg-green-700 hover:bg-green-800 text-white text-lg px-6 py-3 rounded-2xl shadow-lg">
              <Phone className="mr-2" /> Click to Call 248-688-6128
            </Button>
          </a>
        </div>
      </header>

      <section className="text-center mb-8">
        <p className="text-xl text-green-700 font-semibold">Need Tree Work? One Call Does It All.</p>
        <div className="flex justify-center items-center mt-2">
          <Phone className="text-green-600 mr-2" />
          <a href="tel:2486886128" className="text-2xl text-green-800 font-bold hover:underline">248-6886128</a>
        </div>
        <p className="text-green-500 mt-2">Mention this site for a new customer discount!</p>
      </section>

      <main className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <Card className="shadow-xl">
          <CardContent className="p-6">
            <Image src="https://images.unsplash.com/photo-1601031942232-0a5f0e3519c7" alt="Tree removal" width={500} height={300} className="rounded-lg mb-4" />
            <h2 className="text-2xl font-semibold text-green-700 mb-2">Tree Removal</h2>
            <p className="text-gray-700">Safe and efficient removal of hazardous or unwanted trees. Fully insured and equipped for any size job.</p>
            <a href="tel:2486886128" className="text-green-700 font-medium hover:underline block mt-2">Call 248-688-6128</a>
          </CardContent>
        </Card>

        <Card className="shadow-xl">
          <CardContent className="p-6">
            <Image src="https://images.unsplash.com/photo-1603575448363-0b4d9caa71e8" alt="Tree trimming" width={500} height={300} className="rounded-lg mb-4" />
            <h2 className="text-2xl font-semibold text-green-700 mb-2">Pruning & Trimming</h2>
            <p className="text-gray-700">Improve tree health and appearance with expert trimming. We care for your trees like they’re our own.</p>
            <a href="tel:2486886128" className="text-green-700 font-medium hover:underline block mt-2">Call 248-688-6128</a>
          </CardContent>
        </Card>

        <Card className="shadow-xl">
          <CardContent className="p-6">
            <Image src="https://images.unsplash.com/photo-1620200349228-7b98cb1b5ec0" alt="Brush cleanup" width={500} height={300} className="rounded-lg mb-4" />
            <h2 className="text-2xl font-semibold text-green-700 mb-2">Brush & Log Cleanup</h2>
            <p className="text-gray-700">We leave your property clean and safe. Ask about our brush hauling and small log removal options.</p>
            <a href="tel:2486886128" className="text-green-700 font-medium hover:underline block mt-2">Call 248-688-6128</a>
          </CardContent>
        </Card>

        <Card className="shadow-xl">
          <CardContent className="p-6">
            <Image src="https://images.unsplash.com/photo-1621279309444-85a764b62ed4" alt="Storm damage tree work" width={500} height={300} className="rounded-lg mb-4" />
            <h2 className="text-2xl font-semibold text-green-700 mb-2">Emergency Storm Work</h2>
            <p className="text-gray-700">Downed limbs or trees after a storm? Call us for fast, dependable response and cleanup.</p>
            <a href="tel:2486886128" className="text-green-700 font-medium hover:underline block mt-2">Call 248-688-6128</a>
          </CardContent>
        </Card>
      </main>

      <section className="max-w-4xl mx-auto mt-16 mb-12 px-4">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-6">What Our Customers Say</h2>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <blockquote className="italic text-gray-700 mb-4">"Absolutely the best! Tip Top Tree came out same day and safely removed a dangerous limb hanging over my house. Professional and friendly. Highly recommend!"</blockquote>
          <p className="font-semibold text-green-700">– Verified Google Review</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 mt-6">
          <blockquote className="italic text-gray-700 mb-4">"Fast, affordable, and they cleaned up everything when they finished. Couldn’t ask for more. Will call them again for sure."</blockquote>
          <p className="font-semibold text-green-700">– Verified Google Review</p>
        </div>
      </section>

      <footer className="text-center mt-12 text-green-800 font-semibold">
        <p>Call Tip Top Tree & Landscape Today: <a href="tel:2486886128" className="hover:underline">248-688-6128</a></p>
      </footer>
    </div>
  );
}
