interface ContactProps {
  data: {
    contactmessage: string
    email: string
    address: {
      city: string
      state: string
    }
  }
}

export default function Contact({ data }: ContactProps) {
  return (
    <section className="container mx-auto px-4 py-16" id="contact">
      <div className="max-w-4xl mx-auto">
        <div className="font-mono text-accent mb-8 flex flex-col items-center">
          <pre className="text-xs md:text-sm">╔════════════════════════════════════════════════╗</pre>
          <pre className="text-xs md:text-sm font-bold">║         CONTACT         ║</pre>
          <pre className="text-xs md:text-sm">╚════════════════════════════════════════════════╝</pre>
        </div>

        <div className="border border-border bg-card/40 p-8 md:p-10 text-center hover:border-accent/50 transition-colors duration-300">
          <div className="font-mono text-xs md:text-sm space-y-6">
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">{data.contactmessage}</p>

            <div className="pt-6 border-t border-border/50">
              <a
                href={`mailto:${data.email}`}
                className="inline-block font-mono text-xs text-accent hover:text-accent-foreground bg-accent/5 hover:bg-accent transition-all duration-200 border border-accent/30 hover:border-accent px-6 py-2"
              >
                send email
              </a>
            </div>

            <div className="text-muted-foreground text-xs pt-4">
              {data.address.city}, {data.address.state}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
