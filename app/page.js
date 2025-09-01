"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Link from 'next/link';

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
};

const project = [
  {
    id: 1,
    title: 'RX-Prompts',
    desc: 'A web app for generating AI prompts',
    image: '/images/p1.png',
    link: 'https://rx-prompts.vercel.app',
    source: 'https://github.com/ryan-dev9/rx-prompts'
  },
  {
    id: 2,
    title: 'RD Blog',
    desc: 'A personal blog built with Next.js, Tailwind CSS, and Framer-motion.',
    image: '/images/p2.png',
    link: 'https://rdblog.vercel.app',
    source: 'https://github.com/ryan-dev9/RD-Blog'
  },
  {
    id: 3,
    title: 'REMS - Employee management system',
    desc: 'A web app they use for manage employees built with React + Tailwind CSS',
    image: '/images/p3.png',
    link: 'https://ems-x.vercel.app',
    source: 'https://github.com/ryan-dev9/EMSx'
  }
]

const stagger = {
  initial: {},
  animate: { transition: { staggerChildren: 0.12 } }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#060712] via-[#0f1724] to-[#05050a] text-white">
 

      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <motion.div initial="initial" animate="animate" variants={stagger} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <motion.div variants={fadeInUp} className="space-y-6">
              <p className="inline-flex items-center gap-3 text-sm text-white/80 bg-white/3 rounded-full px-3 py-1 w-max">
                <span className="block w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 shadow-sm" />
                Ryan Developer
              </p>

              <h1 className="font-[Orbitron] text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-500">
                I build modern, accessible interfaces
              </h1>

              <p className="text-gray-300 max-w-xl">
                I design and develop delightful user experiences using React, Next.js and MongoDB, Express.js. I focus on clarity, performance and motion to bring interfaces to life.
              </p>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
                <a className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg hover:scale-[1.02] transition-transform" href="#projects">
                  View Projects
                </a>
                <a className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-white/10 text-sm hover:bg-white/3 transition-colors" href="#contact">
                  Contact Me
                </a>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeInUp} className="relative flex items-center justify-center">
              <div className="w-[340px] max-w-full rounded-2xl bg-white/3 backdrop-blur-2xl border border-white/6 p-6 shadow-2xl">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex-shrink-0 flex items-center justify-center text-xl font-bold">
                    <Image
                      src="/images/my.jpg"
                      alt="Profile Picture"
                      width={64}
                      height={64}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">Hi, I'm Ryan Developer</h3>
                    <p className="text-sm text-gray-300">Full-stack Web Developer • UI/UX enthusiast</p>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-3 gap-3 text-xs text-center">
                  <div className="p-3 rounded-lg bg-white/2">Next.js</div>
                  <div className="p-3 rounded-lg bg-white/2">MongoDB</div>
                  <div className="p-3 rounded-lg bg-white/2">Tailwind</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Subtle background decorative shapes */}
        <div className="pointer-events-none absolute -right-48 top-12 w-[420px] h-[420px] rounded-full bg-gradient-to-tr from-blue-600/20 to-purple-500/10 blur-3xl" />
        <div className="pointer-events-none absolute left-[-80px] bottom-6 w-[240px] h-[240px] rounded-full bg-gradient-to-tr from-pink-600/10 to-indigo-500/5 blur-2xl" />
      </header>

      {/* Projects / Featured */}
      <section id="projects" className="max-w-7xl mx-auto px-6 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold mb-6"
        >
          Featured Projects
        </motion.h2>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {project.map((n) => (
            <motion.article
              key={n.id}
              variants={fadeInUp}
              whileHover={{ y: -6 }}
              className="rounded-xl overflow-hidden bg-white/3 backdrop-blur-sm border border-white/6"
            >
              <div className="aspect-[16/9] relative w-full">
                <Image
                  src={n.image}
                  alt={n.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={n.id === 1}
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold">{n.title}</h3>
                <p className="text-sm text-gray-300 mt-2">{n.desc}</p>
                <div className="mt-4 flex items-center gap-3">
                  <Link
                    className="text-sm text-blue-400 hover:underline"
                    href={n.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live
                  </Link>
                  <Link
                    className="text-sm text-gray-300 hover:underline"
                    href={n.source}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-2xl font-bold mb-6">Skills & Tools</motion.h2>
        <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={stagger} className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {['React', 'Next.js', 'Tailwind', 'Framer Motion', 'Node.js', 'MongoDB', 'Express', 'Vercel'].map((s) => (
            <motion.div key={s} variants={fadeInUp} className="p-4 rounded-lg text-center bg-white/2">
              <div className="text-sm font-medium">{s}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Expertise & Experience */}
      <section id="expertise" className="max-w-7xl mx-auto px-6 py-16">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="text-2xl font-bold mb-6">Expertise & Experience</motion.h2>

        <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Expertise */}
          <motion.div variants={fadeInUp} className="rounded-xl p-6 bg-white/3 backdrop-blur-sm border border-white/6">
            <h3 className="font-semibold mb-3">Expertise</h3>
            <ul className="text-sm text-gray-300 space-y-2">
              <li>UI/UX Design & Prototyping</li>
              <li>Frontend Architecture (React/Next)</li>
              <li>Performance Optimization & Accessibility</li>
            </ul>
          </motion.div>

          {/* Experience */}
          <motion.div variants={fadeInUp} className="rounded-xl p-6 bg-white/3 backdrop-blur-sm border border-white/6">
            <h3 className="font-semibold mb-3">Experience</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <div>
                <div className="font-medium">Senior Frontend Developer</div>
                <div className="text-xs text-gray-400">Acme Co • 2022 - Present</div>
                <div className="mt-1">Lead UI development, accessibility, and performance initiatives.</div>
              </div>

              <div>
                <div className="font-medium">Frontend Engineer</div>
                <div className="text-xs text-gray-400">Beta Labs • 2019 - 2022</div>
                <div className="mt-1">Built scalable component libraries and design systems.</div>
              </div>
            </div>
          </motion.div>

          {/* Locations & Others */}
          <motion.div variants={fadeInUp} className="rounded-xl p-6 bg-white/3 backdrop-blur-sm border border-white/6">
            <h3 className="font-semibold mb-3">Locations & Others</h3>
            <div className="text-sm text-gray-300 space-y-2">
              <div>
                <div className="font-medium">Based in</div>
                <div className="text-xs text-gray-400">San Francisco, CA</div>
              </div>
              <div>
                <div className="font-medium">Open to</div>
                <div className="text-xs text-gray-400">Remote, Relocation</div>
              </div>
              <div>
                <div className="font-medium">Availability</div>
                <div className="text-xs text-gray-400">Freelance / Full-time</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* CTA */}
      <section id="contact" className="max-w-7xl mx-auto px-6 py-20">
        <div className="rounded-2xl bg-white/3 backdrop-blur-2xl border border-white/6 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold">Want to work together?</h3>
            <p className="text-gray-300">I'm available for freelance and full-time opportunities. Let's build something great.</p>
          </div>
          <div className="flex gap-3">
            <a className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600" href="#">Say Hello</a>
            <a className="px-6 py-3 rounded-full border border-white/10" href="#">Download CV</a>
          </div>
        </div>
      </section>

      <footer className="max-w-7xl mx-auto px-6 py-12 text-sm text-gray-400">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} John Doe. All rights reserved.</div>
          <div className="flex gap-4">
            <a className="hover:text-white" href="#">Twitter</a>
            <a className="hover:text-white" href="#">GitHub</a>
            <a className="hover:text-white" href="#">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

