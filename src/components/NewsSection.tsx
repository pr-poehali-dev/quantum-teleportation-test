import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

interface NewsItem {
  title: string
  link: string
  date: string
  description: string
  category: string
}

function formatDate(dateStr: string): string {
  try {
    const d = new Date(dateStr)
    return d.toLocaleDateString("ru-RU", { day: "numeric", month: "long", year: "numeric" })
  } catch {
    return dateStr
  }
}

export function NewsSection() {
  const [news, setNews] = useState<NewsItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch("https://functions.poehali.dev/048f5cbc-89ca-406c-9cb4-1d728a0ce09f?limit=6")
      .then((r) => r.json())
      .then((data) => {
        setNews(data.news || [])
        setLoading(false)
      })
      .catch(() => {
        setError(true)
        setLoading(false)
      })
  }, [])

  return (
    <section id="news" className="bg-muted py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="flex flex-col gap-3">
              <p className="text-sm md:text-base font-semibold text-muted-foreground">Актуально</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Новости Фонда</h2>
              <p className="text-muted-foreground">Последние события, семинары и важные обновления для предпринимателей Таганрога.</p>
            </div>
            <Button variant="outline" asChild className="w-fit">
              <a href="https://tagfond.ru" target="_blank" rel="noopener noreferrer">
                Все новости
                <Icon name="ExternalLink" size={16} className="ml-2" />
              </a>
            </Button>
          </div>

          {loading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <Card key={i} className="p-6 flex flex-col gap-3">
                  <div className="h-4 bg-muted-foreground/10 rounded animate-pulse w-20" />
                  <div className="h-5 bg-muted-foreground/10 rounded animate-pulse w-full" />
                  <div className="h-5 bg-muted-foreground/10 rounded animate-pulse w-3/4" />
                  <div className="h-4 bg-muted-foreground/10 rounded animate-pulse w-full mt-1" />
                  <div className="h-4 bg-muted-foreground/10 rounded animate-pulse w-5/6" />
                </Card>
              ))}
            </div>
          )}

          {error && (
            <div className="flex flex-col items-center gap-3 py-10 text-center text-muted-foreground">
              <Icon name="WifiOff" size={32} />
              <p>Не удалось загрузить новости. Попробуйте позже.</p>
            </div>
          )}

          {!loading && !error && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {news.map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <Card className="p-6 flex flex-col gap-3 h-full transition-shadow hover:shadow-md cursor-pointer">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                        {item.category}
                      </span>
                      <span className="text-xs text-muted-foreground shrink-0">
                        {formatDate(item.date)}
                      </span>
                    </div>
                    <h3 className="font-semibold text-foreground leading-snug group-hover:text-primary transition-colors line-clamp-3">
                      {item.title}
                    </h3>
                    {item.description && (
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-1">
                        {item.description}
                      </p>
                    )}
                    <div className="flex items-center gap-1 text-primary text-sm font-medium mt-1">
                      Читать далее
                      <Icon name="ArrowRight" size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Card>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
