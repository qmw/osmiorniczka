# Styl graficzny — szablon promptów do generowania obrazów

## Bazowy prompt (kopiuj i modyfikuj)

```
Cute pink cartoon octopus character (kawaii style) [AKCJA / SCENA].
[DODATKOWE DETALE]. Flat illustration, pastel colors (pink, teal #0EA5A3, coral #FF8B6A),
clean minimal background. Big friendly eyes, rosy cheeks. No text. 16:9
```

## Obowiązkowe elementy w każdym prompcie

| Element | Wartość | Dlaczego |
|---|---|---|
| **Postać** | `Cute pink cartoon octopus character (kawaii style)` | Spójność maskotki |
| **Styl** | `Flat illustration` | Czysty, nowoczesny look |
| **Kolory** | `pastel colors (pink, teal #0EA5A3, coral #FF8B6A)` | Paleta marki |
| **Tło** | `clean minimal background` | Czytelność na stronie |
| **Twarz** | `Big friendly eyes, rosy cheeks` | Rozpoznawalność Ośmiorniczki |
| **Tekst** | `No text` | Tekst dodajemy w HTML, nie na obrazku |
| **Proporcje** | `16:9` | Spójne proporcje na stronie |

## Styl referencyjny

Przy generowaniu w Nano Banana zawsze wrzuć jako reference image:
- `public/logo.svg` lub `public/osmiorniczka_bg.png`

## Czego unikać

- Tekstu na obrazku (tytuły, etykiety, napisy)
- Ciemnych tł, czerni, granatu
- Realistycznego stylu (zdjęcia, 3D)
- Ostrych krawędzi, twardych cieni
- Innych postaci niż ośmiorniczka (wyjątek: druga mała ośmiorniczka w cesji)
- Zbyt wielu detali — ilustracja ma być prosta i czytelna

## Przykłady gotowych promptów

### Header artykułu (ogólny)
```
Cute pink cartoon octopus character (kawaii style) standing next to a shiny car,
holding a calculator in one tentacle and a price tag in another.
Flat illustration, pastel colors (pink, teal #0EA5A3, coral #FF8B6A),
clean minimal background. Big friendly eyes, rosy cheeks. No text. 16:9
```

### Ilustracja w środku artykułu (porównanie)
```
Cute pink cartoon octopus character (kawaii style) holding a balance scale
in two tentacles. One side has a document icon, the other has a key icon.
Comparing two options. Thoughtful expression.
Flat illustration, pastel colors (pink, teal #0EA5A3, coral #FF8B6A),
clean minimal background. Big friendly eyes, rosy cheeks. No text. 16:9
```

### Hero strony usługowej
```
Cute pink cartoon octopus character (kawaii style) sitting proudly in
a shiny car, one tentacle on the steering wheel, another holding car keys.
Happy, excited expression.
Flat illustration, pastel colors (pink, teal #0EA5A3, coral #FF8B6A),
clean minimal background. Big friendly eyes, rosy cheeks. No text. 16:9
```

## Wyrażenia na emocje Ośmiorniczki

| Sytuacja | Wyrażenie w prompcie |
|---|---|
| Wyjaśnianie / edukacja | `Teacher/explainer vibe, pointing at...` |
| Porównywanie opcji | `Thoughtful expression, comparing...` |
| Sukces / pozytywny wynik | `Happy, triumphant expression` |
| Ostrzeżenie / red flags | `Cautious expression, holding warning sign` |
| Zachęta / motywacja | `Coach/motivator vibe, encouraging expression` |
| Szukanie / analiza | `Detective/inspector vibe, using magnifying glass` |
| Zaskoczenie kosztami | `Slightly surprised but calm expression` |
| Pewność siebie | `Confident, determined expression` |
| Spokój / relaks | `Focused but relaxed expression` |

## Gdzie umieszczać obrazy

| Typ | Folder | Format w HTML |
|---|---|---|
| Header artykułu | `public/blog/` | `<img src="/blog/nazwa.png" alt="..." class="rounded-2xl my-8 w-full" />` |
| Środek artykułu | `public/blog/` | j.w. — wstaw przed odpowiednią sekcją `##` |
| Hero strony usługowej | `public/` | `<img src="/nazwa.png" alt="..." class="rounded-2xl my-8 w-full max-w-md mx-auto" />` |
| Strona główna | `public/` | dostosuj klasy do kontekstu |

## Nazewnictwo plików

- Blog header: `nazwa-artykulu.png` (slug artykułu)
- Blog środek: `nazwa-artykulu-kontekst.png` (np. `-koszty`, `-porownanie`, `-schemat`)
- Strona usługowa: `nazwa-podstrony-hero.png` (np. `leasing-samochody-hero.png`)
