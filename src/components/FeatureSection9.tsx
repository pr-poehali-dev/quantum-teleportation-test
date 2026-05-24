import Icon from '@/components/ui/icon'

const features = [
  {
    icon: "Banknote",
    title: "Микрозаймы",
    description: "Доступное финансирование для старта и развития бизнеса на льготных условиях для предпринимателей Таганрога.",
  },
  {
    icon: "MessageSquare",
    title: "Консультации",
    description: "Бесплатные консультации по налогообложению, бухучёту, финансовому анализу и юридическим вопросам.",
  },
  {
    icon: "Building2",
    title: "Бизнес-инкубатор",
    description: "Предоставление офисных помещений по льготной аренде для начинающих предпринимателей и стартапов.",
  },
  {
    icon: "Cpu",
    title: "IT-центр",
    description: "Консультационный центр поддержки технологического предпринимательства, созданный в 2024 году.",
  },
]

export function FeatureSection9() {
  return (
    <section id="features" className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-6 flex flex-col gap-12 md:gap-16">
        <div className="flex flex-col gap-4 md:gap-5 max-w-xl mx-auto text-center">
          <p className="text-sm md:text-base font-semibold text-muted-foreground">Наши услуги</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Всё необходимое для вашего бизнеса</h2>
          <p className="text-base text-muted-foreground">
            Комплексная поддержка предпринимателей Таганрога — от финансирования до экспертных консультаций.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col gap-5 items-center text-center">
              <div className="flex justify-center items-center w-12 h-12 shrink-0 rounded-md bg-primary/10 border border-primary/20 shadow-sm">
                <Icon name={feature.icon} size={22} className="text-primary" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
