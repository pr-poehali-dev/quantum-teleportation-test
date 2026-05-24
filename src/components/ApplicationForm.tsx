import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Icon from "@/components/ui/icon"

const SERVICES = [
  { value: "microloan", label: "Микрозайм" },
  { value: "consultation", label: "Консультация (налоги, бухучёт, юридические вопросы)" },
  { value: "incubator", label: "Бизнес-инкубатор (аренда помещения)" },
  { value: "it-center", label: "IT-центр (технологическое предпринимательство)" },
  { value: "other", label: "Другое" },
]

export function ApplicationForm() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMsg, setErrorMsg] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    setErrorMsg("")
    try {
      const res = await fetch("https://functions.poehali.dev/65a6d8f6-4e60-4c35-b675-e640d5f64eeb", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (res.ok && data.success) {
        setStatus("success")
        setForm({ name: "", phone: "", email: "", service: "", message: "" })
      } else {
        setStatus("error")
        setErrorMsg(data.error || "Произошла ошибка. Попробуйте ещё раз.")
      }
    } catch {
      setStatus("error")
      setErrorMsg("Нет соединения. Проверьте интернет и попробуйте снова.")
    }
  }

  return (
    <section id="contact" className="bg-muted py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-4 text-center">
            <p className="text-sm md:text-base font-semibold text-muted-foreground">Заявка</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Оставьте заявку</h2>
            <p className="text-muted-foreground">
              Заполните форму — наш специалист свяжется с вами в течение рабочего дня.
            </p>
          </div>

          {status === "success" ? (
            <div className="bg-background rounded-xl border p-10 flex flex-col items-center gap-4 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon name="CheckCircle" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Заявка отправлена!</h3>
              <p className="text-muted-foreground">
                Спасибо! Мы получили вашу заявку и свяжемся с вами в ближайшее время.
              </p>
              <Button variant="outline" onClick={() => setStatus("idle")}>
                Отправить ещё одну
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-background rounded-xl border p-6 md:p-8 flex flex-col gap-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="name">Имя и фамилия *</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Иван Иванов"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="phone">Телефон *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+7 (900) 000-00-00"
                    value={form.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="ivan@example.com"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="service">Интересующая услуга *</Label>
                <select
                  id="service"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  required
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-foreground"
                >
                  <option value="" disabled>Выберите услугу...</option>
                  {SERVICES.map((s) => (
                    <option key={s.value} value={s.value}>{s.label}</option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="message">Комментарий</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Кратко опишите ваш запрос или вопрос..."
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                />
              </div>

              {status === "error" && (
                <div className="flex items-center gap-2 text-destructive text-sm bg-destructive/10 rounded-md px-3 py-2">
                  <Icon name="AlertCircle" size={16} />
                  {errorMsg}
                </div>
              )}

              <Button type="submit" size="lg" disabled={status === "loading"} className="w-full">
                {status === "loading" ? (
                  <span className="flex items-center gap-2">
                    <Icon name="Loader" size={16} className="animate-spin" />
                    Отправляем...
                  </span>
                ) : "Отправить заявку"}
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                * — обязательные поля. Данные используются только для обратной связи.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
