"use client";
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';

const services = [
  {
    id: 'landing',
    title: 'Landing Page',
    price: '$499',
    bullets: ['Responsive design', 'Fast performance', 'SEO basic'],
  },
  {
    id: 'business',
    title: 'Business Website',
    price: '$1299',
    bullets: ['Custom sections', 'CMS integration', 'Analytics'],
  },
  {
    id: 'blog',
    title: 'Blog & Content',
    price: '$799',
    bullets: ['Markdown/MDX support', 'Pagination', 'Author profiles'],
  },
  {
    id: 'ecom',
    title: 'E‑commerce Store',
    price: '$2499',
    bullets: ['Payments', 'Inventory', 'Order management'],
  }
];

const card = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#060712] via-[#0f1724] to-[#05050a] text-white">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-20">
        <motion.header initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className="text-3xl font-bold">Services</h1>
          <p className="text-gray-300 mt-2">Packages tailored for startups, businesses and creators. Prices are starting points — I’ll provide a custom quote after discussing your needs.</p>
        </motion.header>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <motion.article key={s.id} variants={card} initial="initial" whileInView="animate" viewport={{ once: true }} whileHover={{ y: -8 }} className="rounded-xl p-6 bg-white/3 backdrop-blur-sm border border-white/6">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-lg">{s.title}</h3>
                <div className="text-sm text-blue-300 font-medium">{s.price}</div>
              </div>

              <ul className="mt-4 text-sm text-gray-300 space-y-2">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="mt-1 w-2 h-2 rounded-full bg-blue-400" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex items-center justify-between">
                <a className="text-sm text-blue-400 hover:underline" href={`#contact`}>Get a quote</a>
                <button className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-sm">Order</button>
              </div>
            </motion.article>
          ))}
        </section>

        <section className="mt-12">
          <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} className="rounded-xl bg-white/3 backdrop-blur-sm border border-white/6 p-6">
            <h3 className="font-semibold mb-3">Need something custom?</h3>
            <p className="text-gray-300">If your project requires integrations, APIs, or complex flows, reach out and I’ll provide a tailored plan and timeline.</p>
          </motion.div>
        </section>
      </main>
    </div>
  )
}