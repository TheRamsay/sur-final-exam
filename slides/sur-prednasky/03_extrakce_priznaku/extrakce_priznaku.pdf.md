---
title: "extrakce priznaku"
source_url: https://www.fit.vut.cz/study/course/SUR/public/prednasky/03_extrakce_priznaku/extrakce_priznaku.pdf
raw_path: raw/sur-prednasky/03_extrakce_priznaku/extrakce_priznaku.pdf
format: pdf
generated: 2026-05-11
---

# extrakce priznaku

- Source: [extrakce_priznaku.pdf](../../../raw/sur-prednasky/03_extrakce_priznaku/extrakce_priznaku.pdf)
- URL: https://www.fit.vut.cz/study/course/SUR/public/prednasky/03_extrakce_priznaku/extrakce_priznaku.pdf

## Page 1

Klasifikace a rozpoznávání

      Extrakce příznaků

## Page 2

Extrakce příznaků - parametrizace
• Poté co jsme ze snímače obdržely data která
  jsou relevantní pro naši klasifikační úlohu, je
  potřeba je přizpůsobit potřebám rozpoznávače
• Klasifikátory mají rády parametry které jsou:
  – Gaussovského rozložení (většinou vícerozměrného)
  – Nekorelované
  – Nízkodimenzionální

## Page 3

Příklad parametrizace pro 2D
            vstupní vektory
• Mějme vzorky (příklady) 2D rozložení pro dvě třídy.

## Page 4

Příklad parametrizace pro 2D
           vstupní vektory
• Rozložení není příliš gaussovské.
• Provedeme třetí odmocninou obou koeficientů.

## Page 5

Příklad parametrizace pro 2D
           vstupní vektory
• Prostor se komprimuje – nelineárně deformuje...

## Page 6

Příklad parametrizace pro 2D
             vstupní vektory
• ... a rozložení pro každou třídu je nyní gaussovské.
• Koeficienty jsou ale korelované.
• Je vhodné prostor otočit tak aby se koeficienty dekorelovaly.

## Page 7

Příklad parametrizace pro 2D
             vstupní vektory
• Nyní jsou koeficienty dekorelovány.
• Svislá dimenze je navíc zbytečná, protože třídy se v ní zcela
  překrývají.

## Page 8

Gaussovské rozložení (jednorozměrné)
     Evaluation:
                               1         𝑥−𝜇 2
                                       −
     𝑝 𝑥 = 𝒩 𝑥; 𝜇, 𝜎 2 =              𝑒 2𝜎2
                              2𝜋𝜎 2
                    ML odhad parametrů
                    (Trénování):

                           1
                     𝜇ො𝑀𝐿 = ෍ 𝑥𝑛
                           𝑁 𝑛

                       2
                              1                 1          2
                     𝜎ො𝑀𝐿 =     ෍ (𝑥𝑛 −𝜇ො𝑀𝐿 )2 = ෍ 𝑥𝑛2 − 𝜇ො𝑀𝐿
                              𝑁  𝑛              𝑁 𝑛

## Page 9

Gaussovské rozložení
              (vícerozměrné)

𝑝 𝑥1 , … , 𝑥𝐷 =
                   1              1
                                 −2 𝐱−𝝁 𝑇 𝚺 −1 𝐱−𝝁
  𝒩 𝐱; 𝝁, 𝚺 =                𝑒
                  2𝜋 𝐷 |𝚺|

                             ML odhad of parametrů:

                            1
                         𝝁 = ෍ 𝐱𝑖
                            𝑇 𝑖
                            1
                         𝚺 = ෍ 𝐱i − 𝝁 𝐱i − 𝝁 𝑇
                            𝑇 𝑖

## Page 10

Plná a diagonální kovarianční matice

              ·         ¸        ·            ¸        ·         ¸        ·            ¸
                   1                  1 0:8                 1                 0:4 0
         ¹=                 §=                    ¹=                 §=
                  0:5                0:8 1                 0:5                 0 1:5

## Page 11

Diagonální kovarianční matice
                           1         1
    𝒩 𝐱; 𝝁, 𝚺 =                 exp − 𝐱 − 𝝁 𝑇 𝚺 −1 𝐱 − 𝝁
                       2𝜋 𝐷 |𝚺|      2

Pokud je 𝚺 diagonální matice s koeficienty v diagonále 𝜎𝑖2 ➔
                                                𝐷
                               1              1  𝑥𝑖 − 𝜇𝑖 2
     𝒩 𝐱; 𝝁, 𝚺 =                         exp − ෍      2
                                              2     𝜎𝑖
                       2𝜋 𝐷 ς𝐷
                             𝑖=1 𝜎𝑖
                                       2       𝑖=1

                       𝐷                 𝐷
                                1               1 𝑥𝑖 − 𝜇𝑖 2
               =    ෑ                   ෑ exp −
                                                2    𝜎𝑖2
                    𝑖=1        2𝜋𝜎𝑖2    𝑖=1

                   𝐷

               = ෑ 𝒩 𝑥𝑖 ; 𝜇𝑖 , 𝜎𝑖2
                   𝑖=1

## Page 12

Diagonální kovarianční matice
𝑃 𝐴, 𝐵 = 𝑃 𝐴 𝑃 𝐵 ⇒        Jevy 𝐴 a 𝐵 jsou statisticky nezávislé
              𝐷                         Koeficienty xi příznakového
𝒩 𝐱; 𝝁, 𝚺 = ෑ 𝒩 𝑥𝑖 ; 𝜇𝑖 , 𝜎𝑖2           vektoru x jsou statisticky
                                        nezávislé.
             𝑖=1

  → 𝑥2             𝑝 𝑥2                   𝑝 𝐱 = 𝑝 𝑥1 , 𝑥2

                                         𝑝 𝑥1

                                       → 𝑥1

## Page 13

Diagonální kovarianční matice
Proč nás zajímá?
• Pomůže nám pochopit význam plné kovarianční matice v
   gaussovském rozložení
• Úspora parametrů při modelování dat
• Pokud jsou data korelována (viz červená třída na prvním obr.)
   – Zvláště pro vysoce dimenzionální příznaky, modelování pomocí směsi
     gaussovských rozložení s diagonální 𝚺 může být úspornější než použití
     jedné gaussovky s plnou 𝚺
   – Můžeme se pokusit data natočit - dekorelovat

## Page 14

Skalární součin
   𝑥1
𝐱= 𝑥             𝐛 = 𝑏1   𝑏2
    2

                 𝑥1
𝐛𝐱 = 𝑏1     𝑏2   𝑥2 = 𝑏1 𝑥1 + 𝑏2 𝑥2

        𝐱                 𝐛
                  .

## Page 15

Rotace vektoru
                 𝑥1               𝐛1   𝑏11   𝑏12
              𝐱= 𝑥             𝐁=    =
                  2               𝐛2   𝑏21   𝑏22
Nechť 𝐛1 a 𝐛2 jsou ortonormální baze
– Vektory jsou na sebe kolmé
– Mají délku 𝐛1 = 𝐛2 = 1
Potom 𝐲 = 𝐁𝐱 je otočený vektor 𝐱, kde 𝐛1 a 𝐛2 ukazují v
původním prostoru směry nových os
                      𝐱
𝐛2
                               𝐛1                  𝐲
                           .
      .
                                    𝑦2
 𝑦2       .           𝑦1

                                              𝑦1

## Page 16

Projekce vektoru
• Nechť 𝐁 je matice ortonormálních bází a 𝐁 ഥ matice
  tvořena pouze několika řádky (bázemi) matice 𝐁.
• Potom 𝐲 = 𝐁ഥ 𝑻𝐁
                ഥ 𝐱 je projekce vektoru 𝐱 do bází 𝐁
                                                  ഥ.

             𝐛2                  𝐱

                                         𝐛1
                                     .

                                𝐲 = 𝐛1T 𝐛1 𝐱
                        .

## Page 17

Vlastní čísla a vektory
λ je vlastní číslo a 𝐞 je odpovídající vlastni vektor čtvercové
matice 𝚺, pokud platí:
                          𝚺𝐞 = 𝐞λ

D × D matice má (nanejvýš) D různých vlastních čísel. Nechť je
𝚲 diagonální matice všech vlastních čísel a matice 𝐄 obsahuje
ve sloupcích odpovídající vlastní vektory.

                           𝚺𝐄 = 𝐄𝚲
Nás bude zajímat speciální případ kdy matice 𝚺 je symetrická.
Potom budou sloupce maticeT𝐄 tvořit−1ortonormální báze. Pro
takovou matici potom platí: 𝐄 𝐄 = 𝐄 𝐄 = 𝐈 kde 𝐈 je jednotková
matice. Tedy platí následující rozklady matic:

                𝐄 T 𝚺𝐄 = 𝚲          𝚺 = 𝐄𝚲𝐄 T

## Page 18

𝝁 transformovaných dat
• Jak se změní odhady střední hodnoty a
  kovarianční matice pokud původní data
  transformujeme: 𝐲 = 𝐀𝐱

                      T
                   1
               𝝁𝑦 = ෍ 𝐀𝐱n
                   𝑁
                     𝑛=1
                        T
                    1
                 = 𝐀 ෍ 𝐱n
                    𝑁
                         𝑛=1
                 = 𝐀𝝁𝑥

## Page 19

𝚺 transformovaných dat
                      T
                  1                    T
              𝚺𝑦 = ෍ 𝐀𝐱n − 𝝁𝑦 𝐀𝐱n − 𝝁𝑦
                  𝑁
                     𝑛=1
                      T
                  1
                 = ෍ 𝐀𝐱n − 𝐀𝝁𝑥 𝐀𝐱 n − 𝐀𝝁𝑥 T
                  𝑁
                     𝑛=1
                           T
                    1
                 =𝐀   ෍ 𝐱n − 𝝁𝑥 𝐱 n − 𝝁𝑥 T 𝐀T
                    𝑁
                        𝑛=1
                 = 𝐀𝚺𝑥 𝐀T

Co se stane když jako A použijeme transponovanou matici
vlastních vektoru kovarianční matice Σx? (Proč transponovanou?
Protože vlastní vektory máme ve sloupcích a ne v řádcích).
Jaký význam mají vlastní čísla?

## Page 20

Analýza hlavních komponent
     (Principal Component Analysis - PCA)

## Page 21

Analýza hlavních komponent
• Umožňuje:
  – Dekorelaci – vlastní vektory kovarianční matice definuji souřadný
    systém ve kterých jsou data dekorelována – mají diagonální
    kovarianční matici
  – Redukci dimenzí – promítnutí dat do pouze několika vlastních
    vektorů odpovídajících největším vlastním číslům (směry s
    nevětší variancí) umožní optimální rekonstrukci dat s nejmenší
    kvadratickou chybou (mean square error - MSE)
  – Redukce dimenzí provádíme pokud věříme, že v některých
    směrech není užitečná informace ale pouze (gaussovský) šum s
    nízkou variabilitou.

## Page 22

Interpretace Σ v gaussovském
                rozložení

               1          1
𝒩 𝐱; 𝝁, 𝚺 =          exp − 𝐱 − 𝝁 𝑇 𝚺 −1 𝐱 − 𝝁
              2𝜋 𝐷 𝚺      2

               1          1
         =           exp − 𝐱 − 𝝁 𝑇 𝐄𝚲−1 𝐄T 𝐱 − 𝝁
              2𝜋 𝐷 𝚺      2

               1          1 T       𝑇 −1
         =           exp − 𝐄 𝐱 − 𝐄 𝝁 𝚲 𝐄T 𝐱 − 𝐄T 𝝁
                                  T
              2𝜋 𝐷 𝚲      2

## Page 23

PCA - Příklad
• Obrázky 100x100 pixelů – 10000 dimensionální vektory

• Střední hodnota, vlastní čísla a vlastní vektory
              μ        λ1=3.4∙105 λ2=2.8∙105 λ3=2.4∙105 λ3=1.6∙105

• Střední hodnota, vlastní čísla a vlastní vektory
            Originál      M=1        M=10        M=50    M=250

## Page 24

PCA - Příklad
• Jakou dimenzi si PCA vybere na tomto příkladě?
• Bude to výhodné pro klasifikaci tříd?

## Page 25

Lineární diskriminační analýza
• Opět se pokusíme promítnout data pouze do určitého
  směru:

• Tentokrát ale budeme chtít aby v tomto směru byly
  separovány třídy.
• Intuitivně by nás mohlo napadnout vybrat směr ve kterém
  jsou nejlépe odděleny průměty středních hodnot tříd m1 a
  m2. Hledáme tedy w, které maximalizuje:

                                                   m1

                                                             m2

## Page 26

Lineární diskriminační analýza
• Lze však najít i lepší směr:

  • Snažíme se data promítnout do takového směru, kde
      – Maximalizujeme (čtverec) vzdálenosti mezi středními hodnotami tříd
          • Nebo-li varianci mezi třídami
      – Minimalizujeme průměrnou varianci tříd
  •   Maximalizujeme tedy

## Page 27

Lineární diskriminační analýza

## Page 28

Lineární diskriminační analýza
• LDA dimenze dány vlastními vektory matice 𝚺wc   −1 𝚺
                                                       ac
• Σac – kovarianční matice spočítaná se středních hodnot tříd
• Σwc – průměrná kovarianční matice tříd
• Lze zobecnit pro více tříd – vlastní vektory s největšími vlastními
  čísly odpovídají směrům ve kterých jsou třídy nejlépe separovány
• Pro J tříd bude pouze J-1 vlastních čísel nenulových
• Pokud mají všechny třídy gaussovské rozložení se stejnou
  kovarianční maticí, LDA transformace transformuje prostor tak, že
  mohou byt třídy optimálně modelovány gaussovským rozložení s
  diagonální kovarianční maticí

## Page 29

Lineární diskriminační analýza
• Vlastních vektor 𝐰𝑖 odpovídá určitému směru v prostoru vstupních dat
• Odpovídající vlastní číslo 𝜆𝑖 udává poměr mezi variancí
   – středních hodnot tříd
   – průměrnou variancí v rámci tříd
   ve směru 𝐰𝑖

                                 𝐰𝑖𝑇 𝚺ac 𝐰𝑖
                             𝜆𝑖 = 𝑇
                                 𝐰𝑖 𝚺wc 𝐰𝑖

• LDA najde první směr 𝐰1 kde je tento poměr 𝜆1 největší, druhý směr 𝐰2
  kde je tento poměr 𝜆2 druhý největší, atd.
                                                  −1 𝚺 lze řešit jako
• Místo hledáni vlastních čísel a vektorů matice 𝚺wc  ac
  zobecněný problém vlastních čísel (Generalized eigen value problem)
  pro které existují standardni implementace (scipy.linalg.eigh)
                             𝚺ac 𝐰𝑖 = 𝜆𝑖 𝚺wc 𝐰𝑖

                              𝚺ac 𝐖 = 𝚺wc 𝐖𝚲

## Page 30

Lineární diskriminační analýza
               𝐰𝟏
                          𝐖 𝑇 𝚺WC 𝐖 = 𝐈

                           𝐖 𝑇 𝚺AC 𝐖

                                                           4 𝜆1
     𝐰𝟐

                                          Protože kreslime elipsy v rozsahu
                                            ± 2x standardní odchylka 𝜆1
          Transformace pomoci 𝐖

## Page 31

Lineární diskriminační analýza
                      PCA pro 𝚺wc

                  trasformace 𝐄wc jsou
                  vlastní vektory 𝚺wc

                                             1
          1                                 −
     𝑇   −2 𝑇                  trasformace 𝚲wc2
                                                jsou odmocniny
𝐖 = 𝐄AC 𝚲wc 𝐄wc
                                inverzních vlastních čísel 𝚺wc

                                                 𝚺wC = 𝐈

                       PCA pro 𝚺AC

                   trasformace 𝐄A𝐶 jsou
                                                     1              1
                   vlastní vektory𝚺AC             −
                                           𝚺AC = 𝚲wc2  𝑇
                                                      𝐄wc
                                                                   −
                                                          𝚺AC 𝐄wc 𝚲wc2

## Page 32

LDA a lineární klasifikátor

Dvě třídy s gaussovským
rozložením se stejnou kovarianční
matici jsou opravdu optimálně
oddělitelné lineárním
klasifikátorem (přímkou, rovinou,
hyper-rovinou)

## Page 33

Extrakce příznaku pro řeč - MFCC
  (Mel frequency cepstral coefficients)

• Nejprve řečový signál rozdělíme do asi 20ms
  překrývajících se segmentů

## Page 35

Původní signál

Logaritmický vystup z banky filtru – je třeba již jen dekorelovat

## Page 37

Singular Value Decomposition - SVD

•   A je jakákoli mxn matice
•   U je mxn matice kde sloupce jsou ortonormální báze
•   V je nxn matice kde sloupce jsou ortonormální báze
•   D je nxn je diagonální matice

• Předpokládejme, že matice A je matice s příznakovými vektory v
  řádcích s již odečtenou střední hodnotou ➔ Σ = ATA
• Potom z následujících vztahů vyplývá, ze:
    – V jsou vlastní vektory Σ
    – Diagonála D obsahuje odmocniny z vlastních čísel Σ (variance ve
      směrech vlastních vektorů)
