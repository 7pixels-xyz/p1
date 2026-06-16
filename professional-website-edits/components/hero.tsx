interface HeroProps {
  data: {
    name: string
    occupation: string
  }
}

export default function Hero({ data }: HeroProps) {
  return (
    <section className="container mx-auto px-4 py-20 md:py-32 relative scan-line">
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="font-mono leading-tight">
          <pre className="text-[10px] sm:text-xs md:text-sm lg:text-base neon-text">
            {`
 █████╗ ██╗     ███████╗██╗  ██╗    ██████╗ ██╗██╗   ██╗███████╗██████╗  █████╗ 
██╔══██╗██║     ██╔════╝╚██╗██╔╝    ██╔══██╗██║██║   ██║██╔════╝██╔══██╗██╔══██╗
███████║██║     █████╗   ╚███╔╝     ██████╔╝██║██║   ██║█████╗  ██████╔╝███████║
██╔══██║██║     ██╔══╝   ██╔██╗     ██╔══██╗██║╚██╗ ██╔╝██╔══╝  ██╔══██╗██╔══██║
██║  ██║███████╗███████╗██╔╝ ██╗    ██║  ██║██║ ╚████╔╝ ███████╗██║  ██║██║  ██║
╚═╝  ╚═╝╚══════╝╚══════╝╚═╝  ╚═╝    ╚═╝  ╚═╝╚═╝  ╚═══╝  ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝
`}
          </pre>
        </div>

        <div className="text-center space-y-6">
          <h1 className="font-mono text-2xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">{data.name}</h1>
          <div className="font-mono text-sm md:text-base text-muted-foreground border-t border-b border-border/50 py-3 px-6">
            <span className="text-accent">{">"}</span> {data.occupation}
          </div>
        </div>
      </div>

      <div className="absolute top-6 left-6 text-accent/20 font-mono text-xs md:text-sm">╔═══</div>
      <div className="absolute top-6 right-6 text-accent/20 font-mono text-xs md:text-sm">═══╗</div>
      <div className="absolute bottom-6 left-6 text-accent/20 font-mono text-xs md:text-sm">╚═══</div>
      <div className="absolute bottom-6 right-6 text-accent/20 font-mono text-xs md:text-sm">═══╝</div>
    </section>
  )
}
