import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection7() {
  return (
    <section className="bg-muted pattern-1 py-16 lg:py-24" aria-labelledby="hero-heading">
      <div className="container px-6 flex flex-col items-center gap-12 lg:gap-16 mx-auto">
        <div className="flex flex-col items-center text-center gap-6 max-w-3xl">
          <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-1.5 rounded-full">
            Основан в 1995 году · Таганрог
          </span>
          <h1 id="hero-heading" className="text-foreground text-3xl lg:text-5xl font-bold">
            Поддержка малого и среднего{" "}
            <span className="text-primary">бизнеса Таганрога</span>
          </h1>
          <p className="text-muted-foreground text-base lg:text-lg max-w-2xl">
            Фонд поддержки предпринимательства — ваш надёжный партнёр с 1995 года. Микрозаймы, бесплатные консультации, бизнес-инкубатор и центр поддержки технологического предпринимательства.
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
            { value: "29+", label: "лет на рынке" },
            { value: "1000+", label: "предпринимателей помогли" },
            { value: "0%", label: "комиссия за консультации" },
            { value: "2024", label: "открыт IT-центр" },
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
