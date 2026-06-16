interface AboutProps {
  data: {
    bio: string
    email: string
    phone: string
    social: Array<{
      name: string
      url: string
      className: string
    }>
    profiles?: Array<{
      name: string
      url: string
      className: string
    }>
  }
}

export default function About({ data }: AboutProps) {
  return (
    <section className="container mx-auto px-4 py-16" id="about">
      <div className="max-w-4xl mx-auto">
        <div className="font-mono text-accent mb-8 flex flex-col items-center">
          <pre className="text-xs md:text-sm">╔════════════════════════════════════════════════╗</pre>
          <pre className="text-xs md:text-sm font-bold">║          ABOUT ME          ║</pre>
          <pre className="text-xs md:text-sm">╚════════════════════════════════════════════════╝</pre>
        </div>

        <div className="border border-border p-8 bg-card/40 hover:border-accent/50 transition-colors duration-300">
          <div className="font-mono text-xs md:text-sm leading-relaxed space-y-4">
            <p className="text-foreground/90">
              <span className="text-accent">{">> "}</span>
              {data.bio}
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-border/50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-xs md:text-sm">
              <div>
                <span className="text-accent">email:</span>{" "}
                <a
                  href={`mailto:${data.email}`}
                  className="text-muted-foreground hover:text-accent transition-colors underline"
                >
                  {data.email}
                </a>
              </div>
              <div>
                <span className="text-accent">phone:</span> <span className="text-muted-foreground">{data.phone}</span>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {data.social?.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-accent hover:text-accent-foreground bg-accent/5 hover:bg-accent transition-all duration-200 border border-accent/30 hover:border-accent px-3 py-1"
                >
                  {social.name}
                </a>
              ))}
              {data.profiles?.map((profile) => (
                <a
                  key={profile.name}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-accent hover:text-accent-foreground bg-accent/5 hover:bg-accent transition-all duration-200 border border-accent/30 hover:border-accent px-3 py-1"
                >
                  {profile.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
