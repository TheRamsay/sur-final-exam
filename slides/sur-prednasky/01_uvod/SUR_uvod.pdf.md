---
title: "SUR uvod"
source_url: https://www.fit.vut.cz/study/course/SUR/public/prednasky/01_uvod/SUR_uvod.pdf
raw_path: raw/sur-prednasky/01_uvod/SUR_uvod.pdf
format: pdf
generated: 2026-05-11
---

# SUR uvod

- Source: [SUR_uvod.pdf](../../../raw/sur-prednasky/01_uvod/SUR_uvod.pdf)
- URL: https://www.fit.vut.cz/study/course/SUR/public/prednasky/01_uvod/SUR_uvod.pdf

## Page 1

Strojové učení a rozpoznávání
      Úvod do problematiky

          Lukáš Burget

## Page 2

Co je strojové učení?
• Tom M. Mitchell : „Říkáme, že počítačový program se učí ze
  zkušenosti E s ohledem na nějakou třídu úloh T a nějaké měřítko
  úspěšnosti P, pokud jeho se jeho úspěšnost měřená pomocí P,
  zlepší se zkušeností E.“

• Typické úlohy:
  vstupní pozorování
                               Model / Algoritmus            výstup
      (příznaky)
   Příklady:
   – Prozpoznej slova v řečové nahrávce
   – Rozpoznej identitu člověka z obrázku obličeje
   – Přelož čeký text do Korejštiny
   – Klasifikuj objekt na základě změřené velikosti a váhy
   – Predikuj cenu akcií z údajů o hospodaření firmy

• Typická reprezentace zkušenosti: Kolekce trenovacích vzorů
  (vstupy a/nebo výstupy).

• Typický způsob měření úspěšnosti: Konrola jak dobře řešíme
  úlohu na nových (testovacích) vstupech a požadovaných výstupech.

## Page 3

Příklady vstupních pozorování I.
• Řečová nahrávka – různě dlouhé sekvence numerických hodnot
                                   [ 0.1, 1.5, 5.4, 5.2, 1.1, -2.3, -5.4, …, 0.8 ]

• Obrázek obličeje 100x100 pixelů – 3D matice
  numerických hodnot
  (jedna dimenze pro barevný kanál)

• Sekvence slov – různě dlouhé sekvence diskrétních symbolů

## Page 4

Příklady vstupních pozorování II.
• Vstupní pozorování (tzv. příznaký) mohou mít
   – Spojité nebo diskrétní hodnoty
   – Pevnou nebo proměnsivou velikost (např. vektor, matice vs. sekvence hodnot,
     vektoru, symbolu, …)
• V našich příkladech budou pozorování často jen 𝐷-dimenzionální
  vektory reálných čísel (nebo jen reálné číslo):
                                       𝑥1
                                       𝑥2
                                   𝐱= ⋮
                                       𝑥𝐷
• Množina 𝑁 pozorování (např. trénovací vzory) potom bude
  reprezentována maticí:
                                     𝑥11 𝑥21 ⋯ 𝑥𝑁1
                                     𝑥12 𝑥22 ⋯ 𝑥𝑁2
            𝐗 = 𝐱1 , 𝐱 2 , … , 𝐱 𝑁 = ⋮    ⋮    ⋱  ⋮
                                     𝑥1𝐷 𝑥2𝐷 ⋯ 𝑥𝑁𝐷

## Page 5

Příklady vstupních pozorování III.
• Pro jednoduchost bude často vstupní pozorování jen 2D vektor:
   Příkladzy:
   – Vektor dvou hodnot odpovídající velikosti a váze vstupního objektu
   – Triviální čenobílý (grayscale) “obrázek” o dvou pixelech
                                        𝑥1
                                     𝐱= 𝑥
                                         2
• Potom můžeme zobrazit vtupní pozorování jako bod ve 2D prostoru:

## Page 6

Co je strojové učení? II.
• Na daných trénovacích vzorech (vstupy a/nebo výstupy) se učíme
  zobrazit neviděné vstupy na požadované výstupy.
   Příklady:
   – Na stovkách hodin řečových nahrávek s textovým přepsem se učíme automaticky
      přepsat nové řečové nahrávky.
   – Na datové sadě milionů obrazků lidských obličejů kde známe identitu člověka se učíme
      rozpoznat identitu člověka v nových obrázcích.
• Hlavní typy učících se algoritmů
   – Učení s učitelem (Supervised Learning)
       • Trénovací vzory jsou dvojice vstupů a požadovaných výstupů
       • Typické úkoly: klasifikace či obecně rozpoznávání vzoru, regrese, …
   – Učení bez učitele (Unsupervised Learning)
       • Trénovací vzory jsou pouze „neanotovaná“ (vstupní) data
         Typické úkoly: shlukování, detekce anomálií, odhad rozložení pravděpodobnosti, ...
   – Semi-supervizované učení (Semi-supervised learning)
       • Některé trénovací vzory jsou anotované dvojice vstup/výstum, ale pro některé
         (většinu) máme jen neonatované vstupy.
   – Posilované učení (Reinforcement learning)
       • Parametry modelu jsou upravovány na základě pozitivního či negativního zpětné
         vazby po tom co uděláme serii rozhodnutí/akcí (např. na konci vyhrané/prohrané
         hry, po (ne)uspěšné jízdě automaticky řízeným autem).
       • Příklady: naučit řídit autonomní vozidlo, naučit počítač hrát deskové či počítačové
         hry

## Page 7

Učení s učitelem
                  (Supervised Learning)
• Trénovací vzory jsou dvojice vstupů 𝐱 a požadovaných výstupů 𝐲
  Klasifikace:
                                   𝑥1
                                𝐱= 𝑥        𝑦 = {𝑟𝑒𝑑, 𝑔𝑟𝑒𝑒𝑛, 𝑏𝑙𝑢𝑒}
                                    2

                              Na trenovacích vzorech (barevné tečký) se
                              učíme přiřadit třídu (barvu) novému před
                              tím neviděnému vzoru (černá tečka)

• Regrese:
  Na trenovacích vzorech se učíme
  predikovat pravděpodobné
  hodnoty 𝑦 pro nové vstupy 𝑥.
  Tedy učíme se funkci 𝑦 = f(𝑥)

## Page 8

Učení s učitelem - příklady
• Všechy předchozí příklady odpovídaly učení s učitelem
• Classification:
   – Rozpoznej identitu člověka z obrázku obličeje
   – Klasifikuj objekt na základě změřené velikosti a váhy
   – Rozpoznej výraz v obličeji pro každý snímek videa
• Regression:
   – Predikuj cenu akcií z údajů o hospodaření firmy
   – Predikuj počasí (teplotu, vlhkost, pravděpodobnost deště, ...) z historie
     meteorologických měření
• More general pattern recognition problems
   – Prozpoznej slova v řečové nahrávce
   – Detekuj a klasifikuj všechny známe (>9k) objekty ve videu https://youtu.be/MPU2HistivI
   – Odhadni pózu každého člověka ve videu https://youtu.be/pW6nZXeWlGM
• Other supervised learning problem
   – Přelož čeký text do Korejštiny (Strojový překlad, Machine Translation)
   – Automatický popiš obrázek anglickým textem
   – Generuj realistické obrázky z textového popisu

## Page 9

Učení s učitelem - příklady
• Automatický popis obrázku anglickým textem
   Kombinace konvoluční a rekurentní neuronové sítě
   Andrej Karpathy, Li Fei-Fei: Deep Visual-Semantic Alignments for
   Generating Image Descriptions

## Page 10

Supervised learning - examples
• Generování realistických obrázků z textového popisu
   Generativní kompetitivní neuronová sít (Generative Adversal Neural)
   Han Zhang, et al.: StackGAN: Text to Photo-realistic Image Synthesis with
   Stacked Generative Adversarial Networks.

## Page 11

Učení bez učitele I.
• Shlukování (Clustering): najdi shluky „podobných“ vstupních vzorů

   – V kolekci dokumentů najdi podobné dokumenty (stejné tema)
   – Zjisti kolik lidí mluví v nahrávce konverzace a kdo mluví kdy (diarizace)

• Detekce anomalií: detekuj neobvyklé vstupy (outliers)
   – pro zamítnutí dalšího zpracování
   – abychom na ně upozornili jako na zajímavá nová data

## Page 12

Učení bez učitele I.
• Odhad rozložení pravděpodobnosti z dat
   – Uvidíme jak odhadnout parametry jednoduchých rozložení pravděpodobnosti
     (Gaussovské, Diskrétní, Směs Gaussovských rozložení)
   – S využívajícími hlubokých neuronových sítí můžeme modelovat (a generovat
     vzory ze) složitých rozložení (např. rozložení obrázků lidských tváří)
   Diederik P. Kingma, Prafulla Dhariwal: Glow: Generative Flow with Invertible 1x1
   Convolutions

## Page 13

Semisupervizované učení
• Unannotated examples can help to
  find better decision boundary
  between classes

• There is lots of unannotated data
  available on the internet
   –   Text
   –   Photos and other images
   –   Speech and other recordings
   –   ...

## Page 14

Jak postavi klasifikátor?

## Page 15

Jak takový klasifikátor pracuje?

## Page 16

Snímání
• Co se dá o rozpoznávaných předmětech zjistit?
  – obraz, tlak, teplota, hmotnost, zvuk, pach ?
  – jak tyto veličiny prakticky získat, jde to vůbec a kolik
    to bude stát ?
  – jaké vlastnosti bude mít snímač a převod
    veličina→číslo ?
     • šum
     • linearita
     • kalibrace
     • stárnutí
     • atd.

## Page 17

Extrakce příznaků
• Příznaky musí umožnit rozlišovat mezi třídami → musí
  být diskriminativní.
• Předzpracování vstupu do následujícího klasifikátoru
   – Redukce dimenzí
   – Invariance vůči:
      • translace (mÍsto v obrázku, čas v řeči)
      • rotace
      • scale (velikost v obrázku, volume v řeči)
      • occlusion (zakrytí objektu vs. Maskování šumem)
      • projective distorition (úhel pohledu, optika)
      • rate (rychlost v řeči - intra- a inter-speaker variabilita)
      • deformace
      • atd.
   – Dekorelace…ale o tom ještě bude řeč v samostatné přednášce o
     příznacích.

## Page 18

Extrakce příznaků
      Bude průměr jablka / granátu dobrým příznakem?

→ Četnost

                                 → Průměr [mm]

## Page 19

Extrakce příznaků
                        Nic moc, ale alespoň trochu lepší

                                                   Granáty
                                                   Jablka

       → Četnost [mm]

                              → Podíl červené barvy [%]

Intuitivně už bychom mohli začít rozpoznávat, nastavením prahu tak aby
bylo co nejvíce vzorů, které jsme zatím viděli rozpoznáno správně

## Page 20

Extrakce příznaků
Když se tak díváme na histogramy příznaků, asi nás budou pro
rozpoznávání zajímat jejich pravděpodobnostní rozložení
…ale to už zase předbíháme.

                                       Granáty
                                       Jablka

       → Četnost

                                   → Váha [dkg]

## Page 21

Vícerozměrné příznaky
                              • Co když se podíváme na váhu a podíl červené barvy

→ Podíl červené barvy [%]
                              současně. Pro rozpoznávání to tady vypadá už docela
                              nadějně.

                              • U jablek je váha                    Granáty
                              korelovaná s
                                                                    Jablka
                              červeností

                                                               → Váha [dkg]

## Page 22

Klasifikace

## Page 23

Klasifikace
Jde nám o to je najít vhodnou rozhodovací hranici
(decision boundary) přece oddělit vzorky jedné třídy
od druhé.…to se nám to krásně povedlo…ale možná
         to nebude to pravé

## Page 24

Generalizace
V našem přikladu byly data náhodně vygenerovány z
gaussovského rozložení. Pokud si takových dat
„nasbíráme“ víc, už s našim výsledkem nebudeme tak
spokojeni. Systém negeneralizuje na nová data.

## Page 25

Lineární klasifikátor
•Omezeni schopnosti detailně modelovat rozhodovací línii vedlo ke
zlepšení generalizace. Oddělení tříd prostou přímkou nebo obecně hyper-
rovinou teď vypadá o mnoho přijatelněji. O tom jak takovou rovinu určit
bude samostatná přednáška.

•Bohužel, rozpoznávání
z takto vybraných
příznaku nebude nikdy
bez chyb, protože jejich
rozložení se překrývají.
Budeme tuto chybu
chtít alespoň
minimalizovat

## Page 26

Kvadratická rozhodovací hranice
     • V příští přednášce si ukážeme, že pro tento případ,
     kdy mají jednotlivé třídy gaussovské rozložení,
     dosáhneme nejlepší úspěšnosti při oddělení tříd
     kvadratickou křivkou.

## Page 27

Algoritmus k-nejbližších sousedů
                                (K-nearest neighbors classifier)
 •            “Neparametricky klasifikátor” → nemá žádné parametry, které by bylo potřeba
              trénovat či odhadovat.
 •            Klasifikátor si pamatuje všechna “trénovací data“.
 •            K nově klasifikovanému vzoru (černá tečka) najde K nejbližších vzorů z trénovacích
              dat a vybere tu třídu, která je ve vybraných vzorech nejčastěji zastoupena.

                    Granáty                                   •   Můžu ale vůbec
                                                                  rovnávat váhu s

→ Červenost
                    Jablka                                        červeností?

                                                              •   Co když budu měřit
                                                                  váhu v tunách nebo
                                                                  miligramech

                                                              •   Prvně bude potřeba
                                                                  obě veličiny
                                                                  normalizovat – převézt
                 will be classified as grenade                    do srovnatelného
                                                                  dinamického rozsahu

                                 → Váha [dkg]                                   → Váha [kg]

## Page 28

1-nejbližší soused
Opět problém z generalizací – podobná klikatá
rozhodovací hranice.

## Page 29

3-nejbližší sousedé
O něco lepší výsledek. Zvýšení „počtu sousedů“ vede k vyhlazení rozhodovací
hranice, přestože jsme model nijak nezjednodušili. Zde by se dalo mluvit o
obdobě regularizace (viz další přednášky)

## Page 30

9-nejbližších sousedů
Rozhodovací linie už je dosti podobná optimální kvadratické křivce

## Page 31

9-nejbližších sousedů
           měkké rozhodnutí
Místo tvrdého rozhodnutí můžeme použít poměr mezi počtem
sousedů z různých tříd jako „měkké“ měřítko důvěry (confidence),
že vzor patří do té či oné třídy (pro K=9 máme pouze 10 úrovní).

## Page 32

31-nejbližších sousedů
  měkké rozhodnutí

## Page 33

Post-processing

## Page 34

Post-processing
• Závislé na konkrétním úkolu.
• Využití dalších kontextových informací jiných než je
  samotný vzor
• Pokud je výstupem klasifikátoru měkké rozhodnutí, post-
  processing se může přiklonit jedné variantě než té s
  nejlepším skóre:
   – např. integrace apriorní pravděpodobnosti (viz další přednáška)
   – Můžeme brát v úvahu ceny jednotlivých rozhodnutí. Co nás bolí
     víc? Poslat jablko pyrotechnikovi nebo granát do marmeládovny.
   – Rozhodnutí pro konkrétní třídu pokud její skóre překročí jistý
     práh → Detekční úloha

## Page 35

Identifikace vs. detekce
• Identifikace →vyber jednu z N možných tříd
• V příchozích vzorech detekuj ty, které paří do třídy,
  kterou hledáme.
   – Vzory, které detekovat nechceme nemusí patřit do omezeného
     tříd (např. v telefonních hovorech hledáme hlas konkrétního
     mluvčího mezi hlasy všech možný mluvčích)
   – Detekci proveď na základě měkkého rozhodnuti – skóre – a
     nastaveného prahu.
   – Detekční práh je možné měnit podle požadované aplikace:
      • Práh nastavený nízko → Hodně detekcí ale také hodně planých
        poplachů
      • Práh nastavený vysoko → opačný problém

## Page 36

Detection tradeoff (DET) křivka

## Page 38

The Design Cycle
• Data Collection
   –     How do we know when we have collected an adequately large and
       representative set of examples for training and testing the system?
• Feature Choice
   –    Depends on the characteristics of the problem domain. Simple to
       extract, invariant to irrelevant transformation insensitive to noise.
• Model Choice
   –     Unsatisfied with the performance of our fish classifier and want to
       jump to another class of model
• Training
   –     Use data to determine the classifier. Many different procedures for
       training classifiers and choosing models
• Evaluation
   –     Measure the error rate (or performance and switch from one set of
       features to another one
