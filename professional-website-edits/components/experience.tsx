interface ExperienceProps {
  data: {
    work: Array<{
      company: string
      title: string
      years: string
    }>
  }
}

export default function Experience({ data }: ExperienceProps) {
  return (
    <section className="container mx-auto px-4 py-16" id="experience">
      <div className="max-w-4xl mx-auto">
        <div className="font-mono text-accent mb-8 flex flex-col items-center">
          <pre className="text-xs md:text-sm">╔════════════════════════════════════════════════╗</pre>
          <pre className="text-xs md:text-sm font-bold">║       EXPERIENCE       ║</pre>
          <pre className="text-xs md:text-sm">╚════════════════════════════════════════════════╝</pre>
        </div>

        <div className="space-y-4">
          {data.work?.map((job, index) => (
            <div
              key={index}
              className="border border-border bg-card/40 hover:border-accent/50 transition-all duration-300 p-6"
            >
              <div className="font-mono text-xs md:text-sm space-y-2">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div className="flex-1">
                    <div className="text-accent font-semibold">{job.company}</div>
                    <div className="text-foreground font-semibold text-sm mt-1">{job.title}</div>
                    <div className="text-muted-foreground text-xs mt-2">{job.years}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
