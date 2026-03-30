# Koncept strony — LeasingPoProstu.pl (Ośmiorniczka)

Data: 2026-03-30

---

## Filozofia: "Daj wiedzę za darmo → zbuduj zaufanie → bądź pod ręką"

Strona to **darmowa encyklopedia leasingu i kredytów firmowych** — nie wizytówka brokera. Przedsiębiorca przychodzi tu po odpowiedź na pytanie, korzysta z kalkulatora, czyta poradnik. Czuje się jak na Wikipedii, nie jak na stronie sprzedażowej.

Konwersja jest naturalnym efektem zaufania — nie celem każdej podstrony. Jeśli ktoś przeczyta artykuł i wyjdzie — to sukces, bo wróci albo poleci.

**Szczegółowy opis filozofii, tonu, CTA i zasad → patrz [DNA_MARKI.md](DNA_MARKI.md)**

---

## Architektura strony (sitemap)

```
/ (strona główna)
├── /kalkulator-leasingu          ← MAGNES #1 — darmowe narzędzie
├── /porownaj-oferty              ← MAGNES #2 — porównywarka
├── /blog/                        ← MAGNES #3 — content SEO
│   ├── /blog/leasing/
│   ├── /blog/kredyty/
│   ├── /blog/faktoring/
│   ├── /blog/dotacje/
│   └── /blog/porownania/
├── /leasing/                     ← strony usługowe (transakcyjne)
│   ├── /leasing/samochody/
│   ├── /leasing/maszyny/
│   ├── /leasing/it-sprzet/
│   ├── /leasing/fotowoltaika/
│   ├── /leasing/nieruchomosci/
│   └── /leasing/zwrotny/
├── /kredyty/
│   ├── /kredyty/obrotowy/
│   ├── /kredyty/inwestycyjny/
│   ├── /kredyty/na-start/
│   └── /kredyty/z-gwarancja-bgk/
├── /faktoring/
├── /dla-kogo/                    ← strony per grupa docelowa
│   ├── /dla-kogo/jdg/
│   ├── /dla-kogo/spolka-zoo/
│   ├── /dla-kogo/nowa-firma/
│   ├── /dla-kogo/ryczalt/
│   └── /dla-kogo/duze-firmy/
├── /o-mnie                       ← budowanie zaufania
├── /kontakt
└── /faq
```

---

## 3 darmowe magnesy (lead magnets wbudowane w stronę)

### 1. Kalkulator leasingu / kredytu
- Użytkownik wpisuje: wartość przedmiotu, okres, wkład własny
- Otrzymuje: szacunkową ratę, koszt całkowity, porównanie leasing vs kredyt
- **Po obliczeniu:** delikatne zaproszenie: "Chcesz porównać z konkretnymi ofertami? Zostaw numer — porozmawiamy, zero zobowiązań"
- Targetowane frazy: `kalkulator leasingu`, `oblicz ratę leasingu`, `kalkulator leasingu samochodu`

### 2. Porównywarka ofert
- Tabele porównawcze firm leasingowych i banków (aktualizowane co miesiąc)
- Kolumny: firma, min. okres, max. okres, wkład własny, prowizja, ocena
- **CTA (delikatne, na końcu):** "Masz pytanie o konkretną ofertę? Napisz — chętnie pomożemy"
- Targetowane frazy: `ranking firm leasingowych`, `porównanie ofert leasingowych`, `najlepsza firma leasingowa`

### 3. Blog ekspercki (główny silnik SEO)
- **1 artykuł = 1 fraza kluczowa** (long-tail, informacyjna)
- Struktura artykułu:
  1. Odpowiedź na pytanie w pierwszym akapicie (featured snippet)
  2. Rozwinięcie z konkretnymi liczbami i przykładami
  3. Tabelka porównawcza lub checklist
  4. Delikatne CTA na końcu: "Masz pytanie, na które nie znalazłeś odpowiedzi? Napisz — pomożemy"

---

## Strategia SEO — plan contentowy (pierwsze 6 miesięcy)

### Miesiąc 1-2: Fundamenty (20 artykułów)
**Cel:** Pokrycie najważniejszych pytań informacyjnych + strony usługowe

Artykuły blogowe (informacyjne, niska konkurencja):
1. Czym się różni leasing operacyjny od finansowego — pełne porównanie
2. Leasing czy kredyt — co się bardziej opłaca w 2026
3. Jak wziąć leasing na firmę krok po kroku
4. Zmiany w leasingu 2026 — nowe limity amortyzacji samochodów
5. Leasing samochodu elektrycznego z dopłatą NaszEauto
6. Leasing dla JDG — poradnik krok po kroku
7. Leasing samochodu dla nowej firmy — jak dostać
8. Leasing na ryczałcie — jak to rozliczyć
9. Ile kosztuje leasing samochodu — wszystkie koszty
10. Jakie dokumenty potrzebujesz do leasingu
11. Jak uzyskać kredyt firmowy — poradnik
12. Gwarancja de minimis BGK — co to i jak uzyskać
13. Kredyt obrotowy czy inwestycyjny — co wybrać
14. Co to jest faktoring i czy się opłaca
15. Leasing maszyn CNC — warunki i oferty
16. Leasing fotowoltaiki dla firm — czy się opłaca
17. Co zrobić gdy firma leasingowa odmówiła
18. Leasing bez wkładu własnego — czy to możliwe
19. Leasing a zawieszenie działalności — co musisz wiedzieć
20. Wynajem długoterminowy czy leasing — porównanie 2026

### Miesiąc 3-4: Rozbudowa long-tail (20 artykułów)
- Artykuły odpowiadające na pytania z sekcji 4, 7, 8 z listy słów kluczowych
- Strony usługowe per branża (maszyny budowlane, rolnicze, medyczne, IT)
- Artykuły sezonowe/trendowe

### Miesiąc 5-6: Autorytet i lokalne SEO (20 artykułów)
- Strony lokalne: "broker leasingowy [miasto]" × 10 miast
- Case studies / przykłady zrealizowanych leasingów
- Głębsze artykuły porównawcze (tabele, kalkulacje, scenariusze)

---

## Struktura pojedynczej strony usługowej (np. /leasing/samochody/)

```
[H1] Leasing samochodu na firmę — najlepsze oferty 2026

[Sekcja 1 — Hero]
Krótki opis usługi + CTA "Oblicz ratę" → kalkulator

[Sekcja 2 — Kalkulator inline]
Uproszczony kalkulator (wartość → rata)

[Sekcja 3 — Porównanie ofert]
Tabela z aktualnymi ofertami firm leasingowych

[Sekcja 4 — Jak to działa]
3-4 kroki procesu leasingowego

[Sekcja 5 — FAQ]
5-8 pytań z odpowiedziami (schema FAQ → rich snippets)

[Sekcja 6 — Powiązane artykuły]
Linki do blogpostów (internal linking)

[Sekcja 7 — Delikatne CTA]
"Masz pytanie? Chętnie pomożemy — zero zobowiązań"
Prosty formularz: imię, telefon (opcjonalnie)
```

---

## SEO techniczne — must have

1. **Schema markup:** FAQ, LocalBusiness, Article, BreadcrumbList
2. **Szybkość:** statyczna strona (Next.js SSG lub Astro), <2s LCP
3. **Mobile-first:** 70%+ ruchu z mobile
4. **Internal linking:** każdy artykuł linkuje do 2-3 powiązanych + do strony usługowej
5. **Meta title pattern:** `[Fraza kluczowa] — [Benefit] | LeasingPoProstu.pl`
6. **URL pattern:** `/blog/leasing-samochodu-dla-nowej-firmy` (czytelne, z frazą)
7. **Breadcrumbs:** Strona główna > Blog > Leasing > [Tytuł]
8. **Sitemap XML + robots.txt**
9. **Google Search Console + Analytics od dnia 1**

---

## Technologia (rekomendacja)

| Opcja | Zalety | Wady |
|---|---|---|
| **Astro + MDX** | Najszybsza, świetne SEO, markdown dla bloga | Wymaga dev-a do kalkulatora |
| **Next.js (SSG)** | React ekosystem, łatwy kalkulator | Trochę wolniejsze niż Astro |
| **WordPress + Yoast** | Najprostsze zarządzanie treścią | Wolniejsze, wymaga hostingu |

**Rekomendacja:** Astro (strona + blog) z komponentem React (kalkulator). Hosting na Netlify/Vercel (darmowy tier wystarczy na start).

---

## Ścieżka użytkownika (User Journey)

```
Google: "leasing samochodu dla nowej firmy"
    ↓
Blog: artykuł poradnikowy (daje wartość, buduje zaufanie)
    ↓
Internal link → Kalkulator leasingu (angażuje, trzyma na stronie)
    ↓
Wynik kalkulatora (pełny, bez blokad)
    ↓
Użytkownik decyduje — wychodzi mądrzejszy LUB chce pogadać
    ↓
Delikatne CTA: "Chcesz porównać z realnymi ofertami? Zostaw numer"
    ↓
Rozmowa — pomagamy, nie sprzedajemy
```

---

## Kluczowe zasady

1. **Każda strona odpowiada na jedno pytanie użytkownika** — nie mieszaj tematów
2. **Najpierw wiedza, potem (może) kontakt** — CTA dopiero na końcu, delikatnie, bez presji
3. **Aktualizuj treści** — nieaktualne dane = utrata zaufania, Google to sprawdza
4. **Buduj topical authority** — pisz o WSZYSTKIM co dotyczy leasingu/kredytów
5. **Bądź uczciwy** — jeśli leasing się nie opłaca, napisz to wprost
6. **Nie blokuj treści** — żadnych pop-upów, wymaganych emaili, ukrytych wyników
7. **Ton: mądry znajomy** — nie sprzedawca, nie profesor, nie bank (→ patrz DNA_MARKI.md)
