interface SkillsProps {
  data: {
    skills: Array<{
      name: string
      level: string
    }>
  }
}

export default function Skills({ data }: SkillsProps) {
  return (
    <section className="container mx-auto px-4 py-16" id="skills">
      <div className="max-w-4xl mx-auto">
        <div className="font-mono text-accent mb-8 flex flex-col items-center">
          <pre className="text-xs md:text-sm">╔════════════════════════════════════════════════╗</pre>
          <pre className="text-xs md:text-sm font-bold">║          SKILLS          ║</pre>
          <pre className="text-xs md:text-sm">╚════════════════════════════════════════════════╝</pre>
        </div>

        <div className="border border-border bg-card/40 p-8 hover:border-accent/50 transition-colors duration-300">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {data.skills?.map((skill, index) => (
              <div key={index} className="font-mono text-xs md:text-sm">
                <div className="flex items-center gap-2 p-2 bg-accent/5 border border-accent/20 hover:border-accent/50 transition-colors">
                  <span className="text-accent">▸</span>
                  <span className="text-foreground truncate">{skill.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
