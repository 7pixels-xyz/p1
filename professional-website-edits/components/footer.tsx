export default function Footer() {
  return (
    <footer className="container mx-auto px-4 py-16 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <div className="font-mono text-accent text-center space-y-4">
          <div className="flex flex-col items-center gap-2">
            <pre className="text-xs md:text-sm">
              {`╔════════════════════════════════════╗
║  crafted_with_love_by_harsha   ║
╚════════════════════════════════════╝`}
            </pre>
          </div>
          <div className="text-muted-foreground text-xs space-y-2">
            <p>© {new Date().getFullYear()} • Built with Next.js & TailwindCSS</p>
            <p className="text-[10px] text-muted-foreground/70">template made my 7pixels</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
