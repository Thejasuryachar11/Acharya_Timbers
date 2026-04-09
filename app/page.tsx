import { LogCuttingScene } from '@/components/3d/LogCuttingScene';
import { MachinesGrid } from '@/components/3d/MachinesGrid';
import { Gallery } from '@/components/Gallery';
import Contact from "@/components/Contact";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-primary/10 to-accent/5 py-20 px-4 md:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
                Premium Wood-Craft Solutions
              </h1>
              <p className="text-lg text-muted-foreground mb-4">
                Professional-grade timber cutting and woodworking equipment built for precision,
                durability, and performance. Transform raw timber into quality products with our
                advanced machinery.
              </p>
              <p className="text-base text-muted-foreground mb-8">
                Over 20 years of industrial woodworking expertise, serving sawmills and timber
                industries worldwide.
              </p>
              <div className="flex gap-4">
  <a href="#contact">
    <button className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity">
      Get Started
    </button>
  </a>

  <a href="#gallery">
    <button className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-colors">
      Our Products & Work
    </button>
  </a>
</div>
            </div>

            
             
                  

<div className="bg-white rounded-xl shadow-xl p-6 border border-border">
  <div className="w-full h-[400px] relative rounded-lg overflow-hidden">
    
    <Image
      src="/logo.jpeg"
      alt="Acharya Logo"
      fill
      className="object-contain"
      priority
    />

  </div>
</div>
                </div>
              </div>
            
         
      </section>

      {/* Log Cutting Animation Section */}
      <section id="products" className="w-full py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-primary mb-2">
              Advanced Cutting Technology
            </h2>
            <p className="text-muted-foreground text-lg">
              Watch our precision sawing equipment in action
            </p>
          </div>

          <div className="mb-8">
            <LogCuttingScene />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-gradient-to-br from-primary/5 to-transparent rounded-lg border border-primary/20">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-xl font-bold text-primary mb-2">High-Speed Operation</h3>
              <p className="text-muted-foreground text-sm">
                Cutting-edge machinery capable of processing timber at industrial scale with minimal
                waste.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-accent/5 to-transparent rounded-lg border border-accent/20">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="text-xl font-bold text-accent mb-2">Precision Cuts</h3>
              <p className="text-muted-foreground text-sm">
                Achieve consistently accurate cuts with tolerances measured in millimeters for perfect
                results.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-secondary/5 to-transparent rounded-lg border border-secondary/20">
              <div className="text-3xl mb-3">🌱</div>
              <h3 className="text-xl font-bold text-secondary mb-2">Sustainable Processing</h3>
              <p className="text-muted-foreground text-sm">
                Eco-friendly equipment design minimizes material waste and reduces environmental impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Machines Section */}
      <section id="machines" className="w-full py-16 bg-gradient-to-b from-gray-50 to-white px-4">
        <MachinesGrid />
      </section>

      {/* Gallery Section */}
      <section id="gallery">
        <Gallery />
      </section>

      {/* Features Section */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-primary mb-12">
            Why Choose Our Equipment
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Industrial Grade',
                description: 'Built with premium materials for maximum durability and reliability in demanding environments.',
              },
              {
                title: 'Safety First',
                description: 'Comprehensive safety features and guards designed to protect operators and maximize workplace safety.',
              },
              {
                title: 'Expert Support',
                description: 'Dedicated technical team providing installation, training, and 24/7 maintenance support.',
              },
              {
                title: 'Cost Effective',
                description: 'Optimized for efficiency, reducing operational costs while improving output quality.',
              },
              {
                title: 'Easy Maintenance',
                description: 'Simple, modular design allows for quick repairs and easy replacement of wear parts.',
              },
              {
                title: 'Flexible Configurations',
                description: 'Customize your setup with various blade options and accessories for specific applications.',
              },
            ].map((feature, index) => (
              <div key={index} className="p-6 border border-border rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact">
  <Contact />
</section>

      {/* CTA Section */}
      <section id="contact" className="w-full py-20 px-4 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-primary mb-6">
            Ready to Transform Your Wood-Craft Operations?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Contact our team today to learn how our advanced machinery can increase your production
            capacity and product quality.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity">
              Request Demo
            </button>
            <button className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 px-4 bg-primary/5 border-t border-border">
        <div className="max-w-6xl mx-auto text-center text-sm text-muted-foreground">
          <p className="mb-2">Acharya Timbers & Furnitures</p>
          <p>
            Developed by{' '}
            <a
              href="https://www.charvexglobal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors font-semibold"
            >
              Charvex Global LLP
            </a>
            {' - Founder Theja Suryachar P J '}
            <a
              href="https://www.charvexglobal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              www.charvexglobal.com
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}
