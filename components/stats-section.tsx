export function StatsSection() {
  const stats = [
    { value: "+10 000", label: "projets réalisés" },
    { value: "15 ans", label: "d'experience dans le secteur" },
    { value: "+11", label: "partenaires" },
    { value: "+1500", label: "articles & designs différents" },
  ]

  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            De petites réalisations aux projets de grandes envergures
          </h2>
          <p className="text-lg text-primary-foreground/90 max-w-3xl mx-auto">
            Forts de notre expérience sur plus de 10 000 projets, nous maîtrisons tous les aspects en matière de
            carrelage et de sanitaires.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-sm md:text-base text-primary-foreground/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
