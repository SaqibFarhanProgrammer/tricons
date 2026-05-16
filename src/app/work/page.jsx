import React from 'react'

const projects = [
  {
    title: 'E-Commerce Platform',
    tag: 'Web Development',
    image: 'https://i.pinimg.com/736x/dc/5f/c6/dc5fc6a1b01f06e6e2be38d5a345136d.jpg',
  },
  {
    title: 'Agency Landing Page',
    tag: 'UI/UX Design',
    image: 'https://i.pinimg.com/1200x/c0/c0/09/c0c009cf166c59996310c17c5646eda8.jpg',
  },
  {
    title: 'Task Manager App',
    tag: 'Full Stack',
    image: 'https://i.pinimg.com/1200x/f3/12/ee/f312eeb711678de7bede2ac730a741e8.jpg',
  },
  {
    title: 'Portfolio Website',
    tag: 'Frontend',
    image: 'https://i.pinimg.com/736x/5b/2d/7f/5b2d7f1b1a2d0b9f8a2b1f2d8c1a2e3f.jpg',
  },
]

function WorkPage() {
  return (
    <section className="w-full bg-white px-6 md:px-10 py-24 md:py-32">

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <span className="text-black/40 text-[10px] tracking-[0.2em] uppercase">
          Selected Work
        </span>

        <h1 className="text-black text-4xl md:text-6xl font-semibold tracking-tight leading-[1.1] mt-6">
          Projects built with focus on design and functionality.
        </h1>

        <p className="mt-6 text-black/60 text-base md:text-lg max-w-3xl">
          A collection of web apps, landing pages, and UI systems created for learning and client-style work.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">

          {projects.map((project, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-black/10"
            >

              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[320px] object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 p-6">

                <span className="text-white/60 text-[10px] tracking-[0.2em] uppercase">
                  {project.tag}
                </span>

                <h2 className="text-white text-xl md:text-2xl font-semibold mt-2">
                  {project.title}
                </h2>

              </div>

            </div>
          ))}

        </div>

        {/* CTA */}
        <div className="mt-20 text-center">

          <h3 className="text-black text-2xl md:text-3xl font-semibold">
            Want a project like this?
          </h3>

          <p className="text-black/50 mt-4">
            Let’s build something custom for your business.
          </p>

          <a
            href="#contact"
            className="inline-flex mt-8 px-8 py-3 bg-black text-white rounded-full hover:bg-black/90 transition"
          >
            Start a Project
          </a>

        </div>

      </div>

    </section>
  )
}

export default WorkPage