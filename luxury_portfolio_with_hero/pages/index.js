
import Image from "next/image";
import { motion } from "framer-motion";

export default function Portfolio() {
  const projects = [
    { title: "Mr. Shekhar’s Residence", mood: "Elegant, inviting, refined.", image: "/shekhar.jpg" },
    { title: "The White Bliss", mood: "Calm, airy, timeless.", image: "/white_bliss.jpg" },
    { title: "Mr. Kunal’s Residence", mood: "Stylish yet warm.", image: "/kunal.jpg" },
    { title: "Revanta Interiors", mood: "Striking, modern, luxurious.", image: "/revanta.jpg" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen bg-gradient-to-br from-violet-950 via-black to-violet-900"
    >
      {/* Hero Banner */}
      <div className="relative h-[80vh] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1617103829205-08e49e2c6ebf?auto=format&fit=crop&w=1600&q=80')" }}
        ></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className="text-6xl md:text-7xl font-serif text-yellow-400 drop-shadow-lg"
          >
            Luxury Interior Portfolio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="text-lg md:text-2xl mt-6 text-gray-200 max-w-2xl"
          >
            A curated showcase of timeless elegance, bespoke comfort, and high-end living.
          </motion.p>
        </div>
      </div>

      {/* Portfolio Section */}
      <div className="py-20 px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="rounded-2xl overflow-hidden bg-gradient-to-br from-violet-950 via-violet-900 to-black shadow-2xl border border-yellow-500/40"
            >
              <Image src={p.image} alt={p.title} width={800} height={600} className="w-full h-64 object-cover opacity-90" />
              <div className="p-8">
                <h2 className="text-3xl font-serif text-yellow-400 mb-4">{p.title}</h2>
                <p className="text-gray-300">{p.mood}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
