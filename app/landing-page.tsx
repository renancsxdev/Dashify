"use client"

import Link from "next/link"
import { useState } from "react"
import {
  ArrowRight,
  BarChart3,
  Check,
  Globe,
  LayoutDashboard,
  Lightbulb,
  Moon,
  Palette,
  Smartphone,
  Sun,
  Zap,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Logo } from "@/components/logo"
import { DashboardPreview } from "@/components/preview/dashboard-preview"
import { AnalyticsPreview } from "@/components/preview/analytics-preview"
import { CustomersPreview } from "@/components/preview/customers-preview"
import { SettingsPreview } from "@/components/preview/settings-preview"

export default function LandingPage() {
  const [theme, setTheme] = useState<"light" | "dark">("light")
  const [language, setLanguage] = useState<"en" | "pt">("pt")

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "pt" : "en")
  }

  // Translations object
  const translations = {
    en: {
      features: "Features",
      preview: "Preview",
      pricing: "Pricing",
      faq: "FAQ",
      getDashify: "Get Dashify",
      heroTitle: "The Ultimate Dashboard Template for Your Next Project",
      heroSubtitle:
        "Dashify is a premium, fully responsive dashboard template built with Next.js, Tailwind CSS, and shadcn/ui. Save weeks of development time.",
      getStarted: "Get Started",
      livePreview: "Live Preview",
      powerfulFeatures: "Powerful Features",
      featuresSubtitle: "Everything you need to build a professional dashboard for your next project",
      responsiveLayout: "Responsive Layout",
      responsiveDesc: "Fully responsive design that works perfectly on desktops, tablets, and mobile devices.",
      darkLightMode: "Dark & Light Mode",
      darkLightDesc: "Built-in dark and light mode support with seamless switching between themes.",
      interactiveCharts: "Interactive Charts",
      chartsDesc: "Beautiful and interactive charts to visualize your data effectively.",
      mobileFirst: "Mobile-First Design",
      mobileDesc: "Optimized for mobile devices with touch-friendly components and layouts.",
      intuitiveUI: "Intuitive UI",
      intuitiveDesc: "Clean and intuitive user interface with attention to detail and user experience.",
      readyPages: "Ready-to-Use Pages",
      readyDesc: "Multiple pre-built pages including dashboard, analytics, customers, products, and more.",
      seeDashify: "See Dashify in Action",
      previewSubtitle: "Explore the different pages and components included in the template",
      dashboard: "Dashboard",
      analytics: "Analytics",
      customers: "Customers",
      settings: "Settings",
      simplePricing: "Simple, Transparent Pricing",
      pricingSubtitle: "Get access to the complete Dashify template at a one-time price",
      dashifyTemplate: "Dashify Template",
      oneTimePayment: "one-time payment",
      everythingYouNeed: "Everything you need to build a professional dashboard",
      buyNow: "Buy Now",
      limitedOffer: "Limited time offer! Save R$740 today.",
      customSolution: "Need a custom solution?",
      customDesc: "Contact us for custom development or enterprise licensing options.",
      contactSales: "Contact Sales",
      testimonials: "What Our Customers Say",
      testimonialsSubtitle: "Don't just take our word for it. Here's what developers think about Dashify.",
      frequentlyAsked: "Frequently Asked Questions",
      faqSubtitle: "Find answers to common questions about Dashify",
      readyToBuild: "Ready to Build Your Next Dashboard?",
      ctaSubtitle: "Get started with Dashify today and save weeks of development time",
      getDashifyFor: "Get Dashify for R$230",
      viewDemo: "View Demo",
      allRightsReserved: "All rights reserved.",
      terms: "Terms",
      privacy: "Privacy",
      contact: "Contact",
    },
    pt: {
      features: "Recursos",
      preview: "Demonstração",
      pricing: "Preços",
      faq: "Dúvidas",
      getDashify: "Obter Dashify",
      heroTitle: "O Melhor Template de Dashboard para Seu Próximo Projeto",
      heroSubtitle:
        "Dashify é um template premium e responsivo construído com Next.js, Tailwind CSS e shadcn/ui. Economize semanas de desenvolvimento.",
      getStarted: "Começar Agora",
      livePreview: "Ver Demonstração",
      powerfulFeatures: "Recursos Poderosos",
      featuresSubtitle: "Tudo o que você precisa para construir um dashboard profissional para seu próximo projeto",
      responsiveLayout: "Layout Responsivo",
      responsiveDesc:
        "Design totalmente responsivo que funciona perfeitamente em desktops, tablets e dispositivos móveis.",
      darkLightMode: "Modo Claro e Escuro",
      darkLightDesc: "Suporte integrado para modo claro e escuro com alternância perfeita entre temas.",
      interactiveCharts: "Gráficos Interativos",
      chartsDesc: "Gráficos bonitos e interativos para visualizar seus dados de forma eficaz.",
      mobileFirst: "Design Mobile-First",
      mobileDesc: "Otimizado para dispositivos móveis com componentes e layouts amigáveis ao toque.",
      intuitiveUI: "Interface Intuitiva",
      intuitiveDesc: "Interface de usuário limpa e intuitiva com atenção aos detalhes e experiência do usuário.",
      readyPages: "Páginas Prontas para Uso",
      readyDesc: "Múltiplas páginas pré-construídas incluindo dashboard, analytics, clientes, produtos e mais.",
      seeDashify: "Veja o Dashify em Ação",
      previewSubtitle: "Explore as diferentes páginas e componentes incluídos no template",
      dashboard: "Dashboard",
      analytics: "Análises",
      customers: "Clientes",
      settings: "Configurações",
      simplePricing: "Preço Simples e Transparente",
      pricingSubtitle: "Obtenha acesso ao template completo Dashify por um preço único",
      dashifyTemplate: "Template Dashify",
      oneTimePayment: "pagamento único",
      everythingYouNeed: "Tudo o que você precisa para construir um dashboard profissional",
      buyNow: "Comprar Agora",
      limitedOffer: "Oferta por tempo limitado! Economize R$740 hoje.",
      customSolution: "Precisa de uma solução personalizada?",
      customDesc: "Entre em contato para opções de desenvolvimento personalizado ou licenciamento empresarial.",
      contactSales: "Falar com Vendas",
      testimonials: "O que Nossos Clientes Dizem",
      testimonialsSubtitle: "Não acredite apenas em nossa palavra. Veja o que os desenvolvedores acham do Dashify.",
      frequentlyAsked: "Perguntas Frequentes",
      faqSubtitle: "Encontre respostas para perguntas comuns sobre o Dashify",
      readyToBuild: "Pronto para Construir Seu Próximo Dashboard?",
      ctaSubtitle: "Comece com o Dashify hoje e economize semanas de desenvolvimento",
      getDashifyFor: "Obtenha Dashify por R$230",
      viewDemo: "Ver Demonstração",
      allRightsReserved: "Todos os direitos reservados.",
      terms: "Termos",
      privacy: "Privacidade",
      contact: "Contato",
    },
  }

  // Helper function to get text based on current language
  const t = (key: keyof typeof translations.en) => {
    return translations[language][key]
  }

  return (
    <div className={theme}>
      <div className="min-h-screen bg-background text-foreground">
        {/* Navbar */}
        <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
          <div className="container flex h-16 items-center justify-between">
            <div className="flex items-center gap-6">
              <Logo />
              <nav className="hidden md:flex gap-6">
                <Link href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                  {t("features")}
                </Link>
                <Link href="#preview" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                  {t("preview")}
                </Link>
                <Link href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                  {t("pricing")}
                </Link>
                <Link href="#faq" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                  {t("faq")}
                </Link>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleLanguage}
                title={language === "en" ? "Mudar para Português" : "Switch to English"}
              >
                <Globe className="h-5 w-5" />
                <span className="sr-only">{language === "en" ? "Switch to Portuguese" : "Mudar para Inglês"}</span>
              </Button>
              <Button variant="ghost" size="icon" onClick={toggleTheme}>
                {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              </Button>
              <Button asChild>
                <Link href="#pricing">{t("getDashify")}</Link>
              </Button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="container py-12 md:py-24 lg:py-32">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">{t("heroTitle")}</h1>
                <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl">{t("heroSubtitle")}</p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" asChild>
                  <Link href="#pricing">
                    {t("getStarted")} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#preview">{t("livePreview")}</Link>
                </Button>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Next.js 14</span>
                </div>
                <div className="flex items-center gap-1">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Tailwind CSS</span>
                </div>
                <div className="flex items-center gap-1">
                  <Check className="h-4 w-4 text-primary" />
                  <span>TypeScript</span>
                </div>
                <div className="flex items-center gap-1">
                  <Check className="h-4 w-4 text-primary" />
                  <span>shadcn/ui</span>
                </div>
              </div>
            </div>
            <div className="relative flex items-center justify-center">
              <div className="relative w-full overflow-hidden rounded-lg border shadow-xl">
                <div className="w-full">
                  <DashboardPreview />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/0"></div>
                <div className="absolute bottom-4 left-4 right-4 flex justify-center">
                  <Button size="sm" variant="secondary" className="gap-1">
                    <Zap className="h-4 w-4" />
                    <span>Interactive Demo</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="container py-12 md:py-24 lg:py-32 border-t">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("powerfulFeatures")}</h2>
            <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t("featuresSubtitle")}
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-16">
            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <LayoutDashboard className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold">{t("responsiveLayout")}</h3>
                <p className="mt-2 text-muted-foreground">{t("responsiveDesc")}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Palette className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold">{t("darkLightMode")}</h3>
                <p className="mt-2 text-muted-foreground">{t("darkLightDesc")}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <BarChart3 className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold">{t("interactiveCharts")}</h3>
                <p className="mt-2 text-muted-foreground">{t("chartsDesc")}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Smartphone className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold">{t("mobileFirst")}</h3>
                <p className="mt-2 text-muted-foreground">{t("mobileDesc")}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Lightbulb className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold">{t("intuitiveUI")}</h3>
                <p className="mt-2 text-muted-foreground">{t("intuitiveDesc")}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Globe className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold">{t("readyPages")}</h3>
                <p className="mt-2 text-muted-foreground">{t("readyDesc")}</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Preview Section */}
        <section id="preview" className="container py-12 md:py-24 lg:py-32 border-t">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("seeDashify")}</h2>
            <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t("previewSubtitle")}
            </p>
          </div>

          <div className="mt-16">
            <Tabs defaultValue="dashboard">
              <div className="flex justify-center mb-8">
                <TabsList className="grid w-full max-w-md grid-cols-4">
                  <TabsTrigger value="dashboard">{t("dashboard")}</TabsTrigger>
                  <TabsTrigger value="analytics">{t("analytics")}</TabsTrigger>
                  <TabsTrigger value="customers">{t("customers")}</TabsTrigger>
                  <TabsTrigger value="settings">{t("settings")}</TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="dashboard" className="flex justify-center">
                <div className="relative w-full max-w-4xl overflow-hidden rounded-lg border shadow-xl">
                  <DashboardPreview />
                </div>
              </TabsContent>
              <TabsContent value="analytics" className="flex justify-center">
                <div className="relative w-full max-w-4xl overflow-hidden rounded-lg border shadow-xl">
                  <AnalyticsPreview />
                </div>
              </TabsContent>
              <TabsContent value="customers" className="flex justify-center">
                <div className="relative w-full max-w-4xl overflow-hidden rounded-lg border shadow-xl">
                  <CustomersPreview />
                </div>
              </TabsContent>
              <TabsContent value="settings" className="flex justify-center">
                <div className="relative w-full max-w-4xl overflow-hidden rounded-lg border shadow-xl">
                  <SettingsPreview />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="container py-12 md:py-24 lg:py-32 border-t">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("simplePricing")}</h2>
            <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t("pricingSubtitle")}
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-md">
            <Card className="relative overflow-hidden">
              <div className="absolute -top-px left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/70"></div>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <h3 className="text-2xl font-bold">{t("dashifyTemplate")}</h3>
                  <div className="mt-4 flex flex-col items-center justify-center">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl text-muted-foreground line-through">R$970</span>
                      <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
                        76% OFF
                      </span>
                    </div>
                    <div className="flex items-baseline">
                      <span className="text-5xl font-bold">R$230</span>
                      <span className="ml-1 text-muted-foreground">{t("oneTimePayment")}</span>
                    </div>
                  </div>
                  <p className="mt-4 text-muted-foreground">{t("everythingYouNeed")}</p>
                  <Button className="mt-6 w-full" size="lg">
                    <a
                      href="https://pay.kirvano.com/2d913d32-2469-47a0-a799-f16a2b7d15e6"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t("buyNow")}
                    </a>
                  </Button>
                  <p className="mt-4 text-sm text-amber-600 dark:text-amber-400 font-medium">{t("limitedOffer")}</p>
                  <div className="mt-6 space-y-2">
                    {[
                      "Full Source Code",
                      "Next.js 14 App Router",
                      "TypeScript Support",
                      "Responsive Design",
                      "Dark & Light Mode",
                      "8+ Pre-built Pages",
                      "Interactive Components",
                      "Regular Updates",
                      "Developer Support",
                      "Commercial License",
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center justify-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mx-auto mt-12 max-w-md text-center">
            <h3 className="text-xl font-bold">{t("customSolution")}</h3>
            <p className="mt-2 text-muted-foreground">{t("customDesc")}</p>
            <Button variant="outline" className="mt-4">
              {t("contactSales")}
            </Button>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="container py-12 md:py-24 lg:py-32 border-t">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("testimonials")}</h2>
            <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t("testimonialsSubtitle")}
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                quote:
                  "Dashify saved me weeks of development time. The code is clean, well-organized, and easy to customize.",
                author: "Sarah Johnson",
                role: "Frontend Developer",
                avatar: "/placeholder.svg?height=64&width=64",
              },
              {
                quote:
                  "The best dashboard template I've used. The components are well-designed and the documentation is excellent.",
                author: "Michael Chen",
                role: "Full Stack Developer",
                avatar: "/placeholder.svg?height=64&width=64",
              },
              {
                quote: "I was able to launch my SaaS product in record time thanks to Dashify. Worth every penny!",
                author: "Alex Rodriguez",
                role: "Startup Founder",
                avatar: "/placeholder.svg?height=64&width=64",
              },
              {
                quote:
                  "The attention to detail in this template is impressive. Everything from accessibility to performance is top-notch.",
                author: "Emily Wilson",
                role: "UI/UX Designer",
                avatar: "/placeholder.svg?height=64&width=64",
              },
              {
                quote:
                  "Dashify has become our go-to template for client projects. It's flexible, modern, and easy to extend.",
                author: "David Thompson",
                role: "Agency Owner",
                avatar: "/placeholder.svg?height=64&width=64",
              },
              {
                quote: "The dark mode implementation is flawless. My users love being able to switch between themes.",
                author: "Lisa Brown",
                role: "Product Manager",
                avatar: "/placeholder.svg?height=64&width=64",
              },
            ].map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4">
                    <p className="italic text-muted-foreground">"{testimonial.quote}"</p>
                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.author}
                        className="h-10 w-10 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-medium">{testimonial.author}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="container py-12 md:py-24 lg:py-32 border-t">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("frequentlyAsked")}</h2>
            <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t("faqSubtitle")}
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What's included in the Dashify template?</AccordionTrigger>
                <AccordionContent>
                  Dashify includes the complete source code for a modern dashboard application built with Next.js,
                  Tailwind CSS, and shadcn/ui. It includes 8+ pre-built pages (Dashboard, Analytics, Customers,
                  Products, Orders, Billing, Calendar, Settings), interactive components, charts, tables, and more.
                  Everything is fully responsive and includes both dark and light mode.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Do I need to pay for updates?</AccordionTrigger>
                <AccordionContent>
                  No, once you purchase Dashify, you'll receive all future updates for free. We regularly improve the
                  template with new features, bug fixes, and compatibility updates.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Can I use Dashify for commercial projects?</AccordionTrigger>
                <AccordionContent>
                  Yes, your purchase includes a commercial license. You can use Dashify in unlimited personal and
                  commercial projects. However, you cannot redistribute or resell the template itself.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>What technologies does Dashify use?</AccordionTrigger>
                <AccordionContent>
                  Dashify is built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and shadcn/ui components. It
                  follows modern best practices and is designed to be easy to customize and extend.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Do you offer support?</AccordionTrigger>
                <AccordionContent>
                  Yes, we offer email support to help you with any questions or issues you might have while using the
                  template. We typically respond within 24-48 hours on business days.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>Can I request a refund?</AccordionTrigger>
                <AccordionContent>
                  Due to the digital nature of the product, we do not offer refunds. However, if you have any issues
                  with the template, please contact our support team, and we'll do our best to help you.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-muted py-12 md:py-24 lg:py-32">
          <div className="container">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("readyToBuild")}</h2>
              <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {t("ctaSubtitle")}
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" asChild>
                  <Link href="#pricing">{t("getDashifyFor")}</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#preview">{t("viewDemo")}</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t py-12">
          <div className="container">
            <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
              <div className="flex flex-col items-center gap-2 md:items-start">
                <Logo />
                <p className="text-sm text-muted-foreground">
                  &copy; {new Date().getFullYear()} Dashify. {t("allRightsReserved")}
                </p>
              </div>
              <div className="flex gap-4">
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  {t("terms")}
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  {t("privacy")}
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  {t("contact")}
                </Link>
              </div>
              <div className="flex gap-4">
                <Button variant="ghost" size="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                  <span className="sr-only">Twitter</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.4 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                  <span className="sr-only">GitHub</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                  <span className="sr-only">Instagram</span>
                </Button>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

