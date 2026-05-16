import React from 'react'

const projects = [
  {
    id: 1,
    title: 'Zupiter',
    tags: ['Product Design', 'Web Design'],
    image: 'https://i.pinimg.com/736x/dc/5f/c6/dc5fc6a1b01f06e6e2be38d5a345136d.jpg',
  },
  {
    id: 2,
    title: 'Nexora',
    tags: ['Product Design', 'Development'],
    image: 'https://i.pinimg.com/1200x/c0/c0/09/c0c009cf166c59996310c17c5646eda8.jpg',
  },
  {
    id: 3,
    title: 'Aurora',
    tags: ['Branding', 'Mobile App'],
    image: 'https://i.pinimg.com/1200x/f3/12/ee/f312eeb711678de7bede2ac730a741e8.jpg',
  },
]

function Projects() {
  return (
    <section id="work" className="relative w-full bg-white py-20 md:py-28 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-10 md:mb-14">

          <h3 className="text-black text-sm md:text-base tracking-wide font-medium">
            Featured Projects
          </h3>

          <a
            href="#work"
            className="inline-flex items-center justify-center px-5 py-2 border border-black/20 text-black text-[11px] tracking-wide rounded-full hover:bg-black/5 transition-all duration-300"
          >
            View All
          </a>

        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-3">

          {/* Top Row */}
          {projects.slice(0, 2).map((project) => (
            <a
              key={project.id}
              href="#"
              className="group relative w-full aspect-[4/5] md:aspect-[3/4] rounded-2xl overflow-hidden border border-black/10"
            >

              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-6 md:p-8">

                <h4 className="text-black text-2xl md:text-3xl tracking-tight font-semibold">
                  {project.title}
                </h4>

                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-black/50 text-[10px] md:text-xs tracking-wide border border-black/10 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>

            </a>
          ))}

          {/* Bottom Full Width */}
          <a
            href="#"
            className="group relative w-full aspect-[16/9] md:col-span-2 rounded-2xl overflow-hidden border border-black/10"
          >

            <img
              src={projects[2].image}
              alt={projects[2].title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 w-full p-6 md:p-8">

              <h4 className="text-black text-2xl md:text-3xl tracking-tight font-semibold">
                {projects[2].title}
              </h4>

              <div className="flex flex-wrap gap-2 mt-2">
                {projects[2].tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-black/50 text-[10px] md:text-xs tracking-wide border border-black/10 px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>

          </a>

        </div>

      </div>
    </section>
  )
}

export default Projects