import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const services = [
  {
    name: "Микрозаймы для МСП",
    description: "Льготное финансирование для субъектов малого и среднего предпринимательства Таганрога.",
    features: [
      "Сумма: до 5 000 000 ₽",
      "Ставка: от 4,5% годовых",
      "Срок: до 3 лет",
      "Только для субъектов МСП",
    ],
    cta: "Подать заявку",
    highlight: false,
  },
  {
    name: "Консультации",
    description: "Бесплатная экспертная помощь предпринимателям по всем вопросам бизнеса.",
    badge: "Бесплатно",
    features: [
      "Налогообложение и бухучёт",
      "Финансовый анализ",
      "Юридические вопросы",
      "Консультационный центр (2024)",
    ],
    cta: "Записаться",
    highlight: true,
  },
  {
    name: "Бизнес-инкубатор",
    description: "Офисные помещения и инфраструктура для начинающих предпринимателей.",
    features: [
      "Льготная аренда помещений",
      "Переговорные комнаты",
      "IT-центр для стартапов",
      "Поддержка специалистов Фонда",
    ],
    cta: "Узнать условия",
    highlight: false,
  },
]

export function PricingSection4() {
  return (
    <section id="services" className="py-16 md:py-24 pattern-1 bg-muted" aria-labelledby="pricing-section-title-4">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col items-center gap-4 md:gap-5 max-w-xl text-center">
            <p className="text-base font-semibold text-muted-foreground">Направления поддержки</p>
            <h2 id="pricing-section-title-4" className="text-3xl md:text-4xl font-bold">
              Выберите нужную услугу
            </h2>
            <p className="text-base text-muted-foreground">Все услуги оказываются предпринимателям Таганрога.</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 lg:max-w-5xl w-full mx-auto">
            {services.map((service, index) => (
              <Card key={service.name} className={`p-8 space-y-8 flex-1 ${index === 1 ? "bg-foreground text-background" : ""}`}>
                <div className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-semibold leading-7">{service.name}</h3>
                      {service.badge && (
                        <span className="text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded-full font-medium">
                          {service.badge}
                        </span>
                      )}
                    </div>
                    <p className={`text-sm leading-5 ${index === 1 ? "opacity-70" : "text-muted-foreground"}`}>
                      {service.description}
                    </p>
                  </div>

                  <Button variant={index === 1 ? "secondary" : "default"} className="w-full" asChild>
                    <a href="#contact">{service.cta}</a>
                  </Button>
                </div>

                <div className="space-y-4">
                  <p className="text-sm font-medium">Что включено:</p>
                  <div className="flex flex-col gap-4">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <Check className={`h-5 w-5 shrink-0 ${index === 1 ? "" : "text-primary"}`} />
                        <span className={`text-sm ${index === 1 ? "opacity-70" : "text-muted-foreground"}`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}