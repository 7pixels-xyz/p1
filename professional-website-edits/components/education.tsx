interface EducationProps {
  data: {
    education: Array<{
      school: string
      degree: string
      graduated: string
      description: string
    }>
  }
}

export default function Education({ data }: EducationProps) {
  return (
    <section className="container mx-auto px-4 py-16" id="education">
      <div className="max-w-4xl mx-auto">
        <div className="font-mono text-accent mb-8 flex flex-col items-center">
          <pre className="text-xs md:text-sm">╔════════════════════════════════════════════════╗</pre>
          <pre className="text-xs md:text-sm font-bold">║       EDUCATION       ║</pre>
          <pre className="text-xs md:text-sm">╚════════════════════════════════════════════════╝</pre>
        </div>

        <div className="space-y-4">
          {data.education?.map((edu, index) => (
            <div
              key={index}
              className="border border-border bg-card/40 p-6 md:p-8 hover:border-accent/50 transition-all duration-300"
            >
              <div className="font-mono text-xs md:text-sm space-y-3">
                <div className="text-foreground font-semibold text-sm">{edu.school}</div>
                <div className="text-accent">{edu.degree}</div>
                <div className="text-muted-foreground text-xs">{edu.graduated}</div>
                <p className="text-foreground/80 text-xs leading-relaxed pt-2">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
