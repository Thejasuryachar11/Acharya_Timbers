"use client";

export default function Contact() {
  const phone = "9980747630";
  const whatsappLink = `https://wa.me/91${phone}`;
  const callLink = `tel:+91${phone}`;
  const mapLink = `https://maps.app.goo.gl/n59qSV2C6g9o9p2Z6`;

  return (
    <section id="contact" className="py-20 bg-muted/40">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-6 text-center">
          Contact Us
        </h2>

        <p className="text-center mb-12 text-muted-foreground text-lg">
          Get in touch for timber & furniture services
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE INFO */}
          <div className="space-y-6">

            <div>
              <h3 className="text-2xl font-semibold">
                Acharya Timbers & Furnitures
              </h3>
              <p className="text-muted-foreground">
                Owner: <span className="font-medium">Parmeshwar Achar</span>
              </p>
            </div>

            {/* Address */}
            <div>
              <p className="text-lg font-medium">📍 Address</p>
              <p className="text-muted-foreground">
                Arasikere – Mysuru Road, <br />
                Bukkapatna Hobli, <br />
                Arasikere – 573103, Karnataka
              </p>
            </div>

            {/* Contact */}
            <div>
              <p className="text-lg font-medium">📞 Phone</p>
              <p className="text-muted-foreground text-lg font-semibold">
                +91 {phone}
              </p>
            </div>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4 mt-6">

              {/* Call */}
              <a
                href={callLink}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition shadow-md"
              >
                📞 Call Now
              </a>

              {/* WhatsApp */}
              <a
                href={whatsappLink}
                target="_blank"
                className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-green-700 transition shadow-md"
              >
                💬 WhatsApp
              </a>

              {/* Map */}
              <a
                href={mapLink}
                target="_blank"
                className="bg-red-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-red-600 transition shadow-md"
              >
                📍 View Map
              </a>

            </div>
          </div>

          {/* RIGHT SIDE MAP */}
          <div className="w-full h-[350px] rounded-xl overflow-hidden shadow-lg border">
            <iframe
              src="https://www.google.com/maps?q=13.29690274734809,76.25694052848166&z=15&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              className="border-0"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}