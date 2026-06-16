interface ProjectsProps {
  data: {
    projects: Array<{
      title: string
      about: string
      url: string
      image?: string
    }>
  }
}

export default function Projects({ data }: ProjectsProps) {
  return (
    <section className="container mx-auto px-4 py-16" id="projects">
      <div className="max-w-5xl mx-auto">
        <div className="font-mono text-accent mb-8 flex flex-col items-center">
          <pre className="text-xs md:text-sm">╔════════════════════════════════════════════════╗</pre>
          <pre className="text-xs md:text-sm font-bold">║          PROJECTS          ║</pre>
          <pre className="text-xs md:text-sm">╚════════════════════════════════════════════════╝</pre>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.projects?.map((project, index) => (
            <div
              key={index}
              className="border border-border bg-card hover:border-accent hover:bg-card/50 transition-all duration-300 group p-6"
            >
              <div className="font-mono space-y-3">
                <h3 className="text-foreground font-bold text-base leading-tight">{project.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{project.about}</p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block font-mono text-xs text-accent hover:text-accent-foreground bg-accent/5 hover:bg-accent transition-all duration-200 border border-accent/30 hover:border-accent px-3 py-2 mt-2"
                >
                  view project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
