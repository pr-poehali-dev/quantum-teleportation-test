import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection7() {
  return (
    <section className="bg-muted pattern-1 py-16 lg:py-24" aria-labelledby="hero-heading">
      <div className="container px-6 flex flex-col items-center gap-12 lg:gap-16 mx-auto">
        <div className="flex flex-col items-center text-center gap-6 max-w-3xl">
          <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-1.5 rounded-full">
            Муниципальная организация · Таганрог · с 1995 года
          </span>
          <h1 id="hero-heading" className="text-foreground text-3xl lg:text-5xl font-bold">
            Займы до 5 млн рублей{" "}
            <span className="text-primary">от 4,5% годовых</span>
          </h1>
          <p className="text-muted-foreground text-base lg:text-lg max-w-2xl">
            НКО МКК «Фонд поддержки предпринимательства города Таганрога» — микрозаймы для субъектов МСП, бесплатные консультации по налогам, бухучёту и праву, бизнес-инкубатор и IT-центр поддержки технологического предпринимательства.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button size="lg" asChild>
              <a href="#contact">Получить микрозайм</a>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <a href="#features">
                Узнать об услугах
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-3xl">
          {[
            { value: "30+", label: "лет на рынке" },
            { value: "до 5 млн", label: "сумма займа" },
            { value: "от 4,5%", label: "ставка в год" },
            { value: "до 3 лет", label: "срок займа" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1 bg-background rounded-xl p-5 shadow-sm border">
              <span className="text-3xl font-bold text-primary">{stat.value}</span>
              <span className="text-sm text-muted-foreground text-center">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}