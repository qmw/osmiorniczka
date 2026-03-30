# Branding — Ośmiorniczka · LeasingPoProstu.pl

Data: 2026-03-30

---

## Nazwa i charakter marki

**Domena:** leasingpoprostu.pl
**Marka / maskotka:** Ośmiorniczka
**Pełna nazwa:** Ośmiorniczka - Leasing Po Prostu
**Tagline:** "Leasing po prostu"

**Osobowość marki:** Przyjazny przewodnik po świecie leasingu i kredytów. Nie sprzedawca — raczej mądry znajomy, który cierpliwie tłumaczy, daje narzędzia do samodzielnej analizy i pomaga dopiero wtedy, gdy go o to poprosisz. Ośmiorniczka to metafora: wiele ramion = ogarnia wszystko naraz, a "po prostu" = bez komplikacji, bez ściemy.

**Ton komunikacji:**
- Edukacyjny, ciepły, bezpośredni — jak rozmowa ze znajomym, który się na tym zna
- Bez żargonu (a jeśli się pojawi — od razu tłumaczymy)
- Uczciwy — jeśli coś się nie opłaca, mówimy to wprost
- Liczby, tabele, przykłady zamiast marketingowego bełkotu
- Nigdy nachalny — zero "ZADZWOŃ TERAZ", zero pop-upów, zero clickbaitu

**Szczegółowy opis tonu głosu, CTA i filozofii "90% wartość, 10% konwersja"
→ patrz [DNA_MARKI.md](DNA_MARKI.md)**

---

## Paleta kolorów

### Kolory główne

| Rola | Kolor | HEX | Użycie |
|------|-------|-----|--------|
| **Primary** | Ocean Teal | `#0EA5A3` | Przyciski CTA, nagłówki, linki, akcenty |
| **Primary Dark** | Deep Teal | `#087F7D` | Hover na przyciskach, nagłówki H1 |
| **Primary Light** | Soft Teal | `#D1F5F4` | Tła sekcji, badge'e, subtle highlights |

### Kolory uzupełniające

| Rola | Kolor | HEX | Użycie |
|------|-------|-----|--------|
| **Accent Warm** | Sunny Coral | `#FF8B6A` | CTA drugorzędne, wyróżniki, ikony korzyści |
| **Accent Yellow** | Cheerful Gold | `#FFB830` | Gwiazdki ocen, "oszczędność", badge "NOWE" |
| **Success** | Fresh Green | `#34D399` | Potwierdzenia, "zaoszczędzisz X", porównania na plus |
| **Warning** | Soft Amber | `#FBBF24` | Uwagi, alerty informacyjne |
| **Error** | Warm Red | `#F87171` | Błędy formularza |

### Tła i neutralne

| Rola | Kolor | HEX | Użycie |
|------|-------|-----|--------|
| **Background** | Snow White | `#FAFBFC` | Główne tło strony |
| **Surface** | Cloud White | `#FFFFFF` | Karty, formularze, tabele |
| **Surface Alt** | Cream | `#F5F0EB` | Alternujące sekcje (lekkie ciepło) |
| **Text Primary** | Charcoal | `#1E293B` | Tekst główny (body, nagłówki) |
| **Text Secondary** | Slate | `#64748B` | Tekst pomocniczy, opisy, metadane |
| **Border** | Mist | `#E2E8F0` | Obramowania kart, separatory |

### Gradient (hero, CTA)

```css
/* Gradient tła hero */
background: linear-gradient(135deg, #D1F5F4 0%, #FAFBFC 50%, #FFF0E6 100%);

/* Gradient przycisku głównego */
background: linear-gradient(135deg, #0EA5A3 0%, #087F7D 100%);
```

---

## Typografia

### Czcionki (Google Fonts — darmowe)

| Rola | Font | Waga | Użycie |
|------|------|------|--------|
| **Nagłówki** | **Plus Jakarta Sans** | 600 (Semi), 700 (Bold) | H1–H4, CTA, nazwa marki |
| **Body** | **Inter** | 400 (Regular), 500 (Medium) | Tekst artykułów, formularze, tabele |
| **Mono / liczby** | **JetBrains Mono** | 400 | Kalkulator, kwoty, raty |

### Skala typografii

```css
--text-xs:   0.75rem;   /* 12px — drobne opisy */
--text-sm:   0.875rem;  /* 14px — metadane, footnotes */
--text-base: 1rem;      /* 16px — body text */
--text-lg:   1.125rem;  /* 18px — lead, intro */
--text-xl:   1.25rem;   /* 20px — H4, karty */
--text-2xl:  1.5rem;    /* 24px — H3 */
--text-3xl:  1.875rem;  /* 30px — H2 */
--text-4xl:  2.25rem;   /* 36px — H1 */
--text-5xl:  3rem;      /* 48px — Hero headline */
```

---

## Logo i maskotka

### Koncept logo

Uproszczona, uśmiechnięta ośmiorniczka w stylu flat/line-art:
- Okrągła głowa z dwoma przyjaznymi oczami (duże, jak w kawaii)
- 8 ramion — każde może trzymać ikonkę (samochód, maszynę, laptopa, dom, dokument...)
- W logo "default" ramiona są czyste, w ilustracjach mogą trzymać różne przedmioty

### Warianty logo

1. **Pełne logo:** Ośmiorniczka + napis "Ośmiorniczka" (obok lub pod)
2. **Kompaktowe:** Sama ośmiorniczka (ikona) — do favicon, avatarów, mobile
3. **Tekstowe:** Sam napis z jednym ramieniem jako ozdobnik litery "Ó" lub "k"

### Styl ośmiorniczki

```
Kolor główny ciała:  #0EA5A3 (Ocean Teal)
Policzki (rumieńce): #FF8B6A (Sunny Coral) — dwa kółka na "policzkach"
Oczy:                #1E293B (Charcoal) — duże, okrągłe, przyjazne
Tło akcentowe:       #D1F5F4 (Soft Teal) — halo/cień
```

### Mikro-ilustracje (dla sekcji strony)

Ośmiorniczka w różnych "sytuacjach":
- 🐙 + kalkulator → sekcja kalkulatora
- 🐙 + lupa → porównywarka
- 🐙 + książka → blog
- 🐙 + telefon → kontakt
- 🐙 + kciuk w górę → sukces/potwierdzenie
- 🐙 + znak zapytania → FAQ

*(Do wykonania jako SVG w jednolitym stylu line-art)*

---

## Komponenty UI — styl

### Przyciski

```css
/* Primary CTA */
.btn-primary {
  background: linear-gradient(135deg, #0EA5A3, #087F7D);
  color: #FFFFFF;
  border-radius: 12px;
  padding: 14px 28px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  box-shadow: 0 4px 14px rgba(14, 165, 163, 0.3);
  transition: all 0.2s ease;
}
.btn-primary:hover {
  box-shadow: 0 6px 20px rgba(14, 165, 163, 0.45);
  transform: translateY(-1px);
}

/* Secondary CTA */
.btn-secondary {
  background: transparent;
  color: #0EA5A3;
  border: 2px solid #0EA5A3;
  border-radius: 12px;
  padding: 12px 26px;
  font-weight: 600;
}

/* Accent / wyróżniony */
.btn-accent {
  background: linear-gradient(135deg, #FF8B6A, #FF7043);
  color: #FFFFFF;
  border-radius: 12px;
  box-shadow: 0 4px 14px rgba(255, 139, 106, 0.3);
}
```

### Karty

```css
.card {
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
  transition: box-shadow 0.2s ease, transform 0.2s ease;
}
.card:hover {
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
  transform: translateY(-2px);
}
```

### Tagi / Badge

```css
.badge {
  background: #D1F5F4;
  color: #087F7D;
  border-radius: 20px;
  padding: 4px 12px;
  font-size: 0.75rem;
  font-weight: 600;
}
.badge-new {
  background: #FFB830;
  color: #1E293B;
}
```

---

## Ikonografia

**Styl:** Line icons, zaokrąglone końcówki (rounded), 2px stroke
**Zestaw rekomendowany:** [Lucide Icons](https://lucide.dev) (open source, spójny styl)
**Kolor ikon:** `#0EA5A3` (akcent) lub `#64748B` (neutralny) — nigdy czarne
**Rozmiar:** 20px (inline), 24px (nawigacja), 32–48px (sekcje hero)

---

## Zdjęcia i grafiki

- **Brak stockowych zdjęć ludzi w garniturach** — to nie jest bank
- Preferowane: ilustracje flat/line-art, ikony, wykresy, screenshoty kalkulatora
- Jeśli zdjęcia — realne, naturalnie oświetlone, ludzie w casualowym biznesie
- Alternatywa: geometryczne pattern z ośmiorniczkowymi ramionami jako tło sekcji

---

## Spacing i layout

```css
/* System 4px */
--space-1:  4px;
--space-2:  8px;
--space-3:  12px;
--space-4:  16px;
--space-5:  20px;
--space-6:  24px;
--space-8:  32px;
--space-10: 40px;
--space-12: 48px;
--space-16: 64px;
--space-20: 80px;

/* Border radius */
--radius-sm:  8px;
--radius-md:  12px;
--radius-lg:  16px;
--radius-xl:  24px;
--radius-full: 9999px;

/* Max-width */
--content-max: 1200px;
--text-max: 720px;    /* czytelność artykułów */
```

---

## Przykład zastosowania — hero strony głównej

```
┌──────────────────────────────────────────────────────┐
│  [gradient tło: teal → white → coral(subtle)]        │
│                                                      │
│  🐙 (ilustracja ośmiorniczki, ~200px)               │
│                                                      │
│  Leasing i kredyt firmowy?                  [H1, 48px]
│  Ogarniamy to za Ciebie.                             │
│                                                      │
│  Porównujemy oferty 30+ firm leasingowych    [18px]  │
│  i banków — znajdziemy najtańszą.                    │
│                                                      │
│  [ Oblicz ratę leasingu ]  [ Porównaj oferty ]       │
│  (primary CTA, teal)      (secondary CTA, outline)   │
│                                                      │
│  ⭐ 4.9/5 na Google  ·  200+ opinii  ·  30+ firm    │
│                                                      │
└──────────────────────────────────────────────────────┘
```

---

## Podsumowanie Design DNA

| Cecha | Tak | Nie |
|-------|-----|-----|
| Ciepły, jasny | Teal + coral + białe tła | Ciemne motywy, granat, czerń |
| Przyjazny | Zaokrąglone rogi, soft shadow | Ostre kąty, twarde cienie |
| Profesjonalny | Czysta typografia, liczby, tabele | Comic Sans, za dużo animacji |
| Lekki | Dużo whitespace, 1-2 kolory na raz | Przeładowane layouty |
| Zabawny | Ośmiorniczka maskotka, luźny copywriting | Humorki na siłę, memy |
| Godny zaufania | Konkrety, social proof, schema | "Najlepsza oferta!" bez dowodów |

---

## Tailwind CSS — konfiguracja kolorów

```js
// tailwind.config.js (fragment)
module.exports = {
  theme: {
    extend: {
      colors: {
        teal: {
          50:  '#D1F5F4',
          100: '#B3EEEC',
          200: '#7DE0DE',
          300: '#47D2CF',
          400: '#1ABFBC',
          500: '#0EA5A3',  // PRIMARY
          600: '#0C8E8C',
          700: '#087F7D',  // PRIMARY DARK
          800: '#065E5D',
          900: '#044342',
        },
        coral: {
          50:  '#FFF0E6',
          100: '#FFD9C7',
          200: '#FFBFA3',
          300: '#FFA580',
          400: '#FF8B6A',  // ACCENT
          500: '#FF7043',
          600: '#E5603A',
          700: '#CC5030',
        },
        gold: {
          400: '#FFB830',  // ACCENT YELLOW
        },
        cream: '#F5F0EB',
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        body:    ['Inter', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        'card': '16px',
        'btn':  '12px',
      },
    },
  },
}
```
