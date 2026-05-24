import { Logo } from "./Logo"
import { Separator } from "@/components/ui/separator"

export function Footer2() {
  return (
    <footer className="bg-muted py-16 lg:py-24" role="contentinfo" aria-label="Подвал сайта">
      <div className="container px-6 mx-auto flex flex-col gap-12 lg:gap-16">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col lg:flex-row md:justify-between gap-12">
            <div className="flex flex-col gap-6">
              <a href="/" aria-label="На главную">
                <Logo />
              </a>
              <p className="text-muted-foreground text-sm max-w-xs">
                Муниципальная некоммерческая организация — микрокредитная компания. Поддержка малого и среднего предпринимательства г. Таганрога с 1995 года.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-12">
              <div className="flex flex-col gap-4">
                <p className="font-semibold text-foreground text-sm">Услуги</p>
                <nav className="flex flex-col gap-3" aria-label="Услуги">
                  <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Микрозаймы</a>
                  <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Консультации</a>
                  <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Бизнес-инкубатор</a>
                  <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors text-sm">IT-центр</a>
                </nav>
              </div>

              <div className="flex flex-col gap-4">
                <p className="font-semibold text-foreground text-sm">Контакты</p>
                <div className="flex flex-col gap-3">
                  <p className="text-muted-foreground text-sm">г. Таганрог</p>
                  <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Частые вопросы</a>
                  <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Подать заявку</a>
                </div>
              </div>
            </div>
          </div>

          <Separator role="presentation" />

          <div className="flex flex-col lg:flex-row justify-between items-center gap-6 text-center">
            <p className="text-muted-foreground text-sm order-2 md:order-1">
              © 2025 Фонд поддержки предпринимательства г. Таганрога. Все права защищены.
            </p>
            <nav
              className="flex flex-col md:flex-row items-center gap-6 md:gap-8 order-1 md:order-2"
              aria-label="Юридические ссылки"
            >
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Реквизиты организации
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}
