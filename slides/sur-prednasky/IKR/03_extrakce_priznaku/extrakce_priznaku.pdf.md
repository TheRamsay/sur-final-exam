---
title: "extrakce priznaku"
source_url: https://www.fit.vut.cz/study/course/SUR/public/prednasky/IKR/03_extrakce_priznaku/extrakce_priznaku.pdf
raw_path: raw/sur-prednasky/IKR/03_extrakce_priznaku/extrakce_priznaku.pdf
format: pdf
generated: 2026-05-11
---

# extrakce priznaku

- Source: [extrakce_priznaku.pdf](../../../../raw/sur-prednasky/IKR/03_extrakce_priznaku/extrakce_priznaku.pdf)
- URL: https://www.fit.vut.cz/study/course/SUR/public/prednasky/IKR/03_extrakce_priznaku/extrakce_priznaku.pdf

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

       2. koeficient

                       1. koeficient

## Page 4

Příklad parametrizace pro 2D
           vstupní vektory
• Rozložení není příliš gaussovské.
• Provedeme třetí odmocninou obou koeficientů.

       2. koeficient

                       1. koeficient

## Page 5

Příklad parametrizace pro 2D
           vstupní vektory
• Prostor se komprimuje – nelineárně deformuje...

      2. koeficient po kompresi

                                  1. koeficient po kompresi

## Page 6

Příklad parametrizace pro 2D
              vstupní vektory
•   ... a rozložení pro každou třídu je nyní gaussovské.
•   Koeficienty jsou ale korelované.
•   Je vhodné prostor otočit tak aby se koeficienty dekorelovaly.

          2. koeficient po kompresi

                                      1. koeficient po kompresi

## Page 7

Příklad parametrizace pro 2D
              vstupní vektory
•   Nyní jsou koeficienty dekorelovány.
•   Svislá dimenze je navíc zbytečná, protože třídy se v ní zcela
    překrývají.

          2. dimenze po rotaci

                                 1. dimenze po rotaci

## Page 8

Gaussovské rozložení (jednorozměrné)
                        Evaluation:
                                                                (x−μ)2
                                       2 1                     − 2σ2
                        N (x; μ, σ ) = σ 2π e
                                        √

                                                       ML odhad parametrů
        0.4
                                                       (Trénování):
       0.35
                                                                      PT
        0.3
                                                       μ = T1           t=1 x(t)
       0.25

p(x)    0.2

                                                                      PT
       0.15
                                                       σ   2
                                                               = T1    t=1 (x(t) − μ) 2
        0.1

       0.05

         0
         −5   −4   −3    −2   −1   0   1   2   3   4
                                   x

## Page 9

Gaussian distribution (2 dimensions)
                                             1       T   −1
                                   1       −   (x−μ)   Σ    (x−μ)
                 N (x; μ, Σ) = √          e  2
                                (2π)P |Σ|

       0.8

       0.7

       0.6

       0.5

p(x)   0.4

       0.3
                                                                 ML odhad of parametrů
       0.2
                                                             2
                                                                 (Trénování):
       0.1                                               1

        0                                                                  PT
         4
             3
                    2
                        1
                                 0
                                     −1        −1
                                                    0
                                                                  μ = T1      t=1 x(t)
                                                        x2
                                          −2
                            x1

                                                             PT
                                           Σ = T1                t=1 (x(t) − μ)(x(t) − μ) T

## Page 10

Plná a diagonální kovarianční matice

        0.3                                                                                                                       0.25

                                                                                                                                   0.2

        0.2                                                                                                                       0.15

 p(x)                                                                                                                      p(x)    0.1
        0.1
                                                                                                                                  0.05

                                                                                                                                    0
         0
                                                                                                                                    4
         4
                                                                                                                                         3
              3
                                                                                                                                              2
                    2
                                                                                                                                                    1                                                                               4
                         1                                                                                    4
                                                                                                      3                                                         0                                                               3
                                  0                                                              2                                                                                                                         2
                                                                                     1                                                                               −1                                            1
                                       −1                                                                                                                                                                      0
                                                                               0                                                                                          −2                          −1
                                            −2                           −1                                                                             x
                    4        x1                                                                                                                4            1                                −2
                                                                −2                                                                                                             −3   −3
                                                  −3                                                                                                                                                       x
                                                       −3                     x2                                                                                                                               2

                    3                                                                                                                          3

                    2                                                                                                                          2

                    1                                                                                                                          1

              x1                                                                                                                         x1

                    0                                                                                                                          0

                   −1
                                                                              ∙              ¸            ∙                ¸                  −1
                                                                                                                                                                                             ∙             ¸               ∙            ¸
                                                                                    1                              1 0.8                                                                           1                           0.4 0
                                                                     μ=                              Σ=                                                                             μ=                             Σ=
                   −2
                                                                                   0.5                            0.8 1                       −2
                                                                                                                                                                                                  0.5                           0 1.5

                   −3                                                                                                                         −3
                    −3            −2             −1         0        1         2         3                                                     −3                   −2         −1        0        1        2           3
                                                                x2                                                                                                                           x2

## Page 11

Diagonální kovarianční matice
                             1       T   −1
                   1       −   (x−μ)   Σ    (x−μ)
 N (x; μ, Σ) = √          e  2
                (2π)P |Σ|

Pokud je Σ diagonální matice s koeficienty v diagonále σ2i Î

                        1                   1 X
                                              P
                                                (xi − μi )2
N (x; μ, Σ) =     q      Q        exp(−                       )
                                        2 i=1        σi2
                   (2π)P Pi=1 σi2
                 Y
                 P
                      1          1 (xi − μi )2
             =     p       exp(−        2      )
               i=1
                         2
                    (2π)σi       2     σi
                 Y
                 P
             =         N (xi ; μi , σi2 )
                 i=1

## Page 12

Diagonální kovarianční matice
P (A, B) = P (A)P (B) ⇒ Jevy A a B jsou statisticky nezávislé
              QP
N (x; μ, Σ) = i=1 N (xi ; μi , σi2 ) ⇒ Koeficienty xi příznakového
                                          vektoru x jsou statisticky
                                          nezávislé.

                   p(x2)
   Æ x2
                                            p(x) = p(x1,x2)

                                            p(x1)

                                         Æ x1

## Page 13

Diagonální kovarianční matice
Proč nás zajímá?
• Pomůže nám pochopit význam plné kovarianční matice v
   gaussovském rozložení
• Úspora parametrů při modelování dat
• Pokud jsou data korelována (viz červená třída na prvním obr.)
   – Zvláště pro vysoce dimenzionální příznaky, modelování pomocí směsi
     gaussovských rozložení s diagonální Σ může být úspornější než použití
     jedné gaussovky s plnou Σ
   – Můžeme se pokusit data natočit - dekorelovat

## Page 14

Skalární součin
            ∙        ¸
                x1                £                 ¤
   x=                        b=       b1       b2
                x2
                         ∙        ¸
       £             ¤       x1
bx =       b1   b2                    = b1 x1 + b2 x2
                             x2

                 x
                             .
                                           b

                         bx |
                          |b

## Page 15

Rotace vektoru
               ∙        ¸        ∙         ¸       ∙                   ¸
                   x1                 b1                   b11   b12
          x=                B=                 =
                   x2                 b2                   b21   b22
Nechť b1 a b2 jsou ortonormální baze
– Vektory jsou na sebe kolmé
– Mají délku |b1| = |b2| = 1
Potom y = B x je otočený vektor x, kde b1 a b2 ukazují v
původním prostoru směry nových os
                        x
b2

                             .   b1                                             y
                                                       .
      .
                                           y2
                        y1                             .                    .
 y2       .

                                                                       y1

## Page 16

Projekce vektoru
• Nechť B je matice ortonormálních bází a B’ matice
  tvořena pouze několika řádky (bázemi) matice B.
• Potom y = B’TB’x je projekce vektoru x do bází B’.

                b2             x
                                   .      b1
                                       y = bT1 b1 x
                       .

## Page 17

Vlastní čísla a vektory
λ je vlastní číslo a e je odpovídající vlastni vektor čtvercové
matice Σ, pokud platí:
                        Σe = eλ
PxP matice má (nanejvýš) P různých vlastních čísel. Nechť
je Λ diagonální matice všech vlastních čísel a matice E
obsahuje ve sloupcích odpovídající vlastní vektory.
                        ΣE = EΛ
Nás bude zajímat speciální případ kdy matice Σ je symetrická.
Potom budou sloupce matice E tvořit ortonormální báze. Pro
takovou matici potom platí:    ETE = E-1E = I, kde I je
jednotková matice. Tedy platí následující rozklady matic:

          T                                          T
       E ΣE = Λ                       Σ = EΛE

## Page 18

μ transformovaných dat
• Jak se změní odhady střední hodnoty a
  kovarianční matice pokud původní data
  transformujeme: y = Ax

                       1X
                          T
              μy   =         Ax(t)
                       T t=1
                           T
                           X
                         1
                   = A           x(t)
                         T t=1
                   = Aμx

## Page 19

Σ transformovaných dat
                  XT
                1
       Σy   =         (Ax(t) − μy )(Ax(t) − μy )T
                T t=1
                  XT
                1
            = A       (x(t) − μx )(x(t) − μx )T AT
                T t=1
            = AΣx AT

• Co se stane když jako A použijeme transponovanou
  matici vlastních vektoru kovarianční matice Σx? (Proč
  transponovanou? Protože vlastní vektory máme ve
  sloupcích a ne v řádcích).
• Jaký význam mají vlastní čísla?

## Page 20

Analýza hlavních komponent
     (Principal Component Analysis - PCA)

                        Data distribution

                                        on
                                        si
    2nd                             en
                                    m
        PC                      A
                                   di
          A
             di            1 st
              m               PC
              en
                  si
                  on
                           original space
                           coordinates

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

                        1             − 12 (x−μ)T Σ−1 (x−μ)
N (x; μ, Σ)   =   p               e
                      (2π)P |Σ|
                        1             − 12 (x−μ)T EΛ−1 ET (x−μ)
              =   p               e
                      (2π)P |Σ|
                        1             − 12 (ET x−ET μ)T Λ−1 (ET x−ET μ)
              =   p               e
                      (2π)P |Λ|

## Page 23

PCA - Příklad
• Obrázky 100x100 pixelů – 10000 dimensionální vektory

• Střední hodnota, vlastní čísla a vlastní vektory
              μ        λ1=3.4·105 λ2=2.8·105 λ3=2.4·105 λ3=1.6·105

• Střední hodnota, vlastní čísla a vlastní vektory
            Originál      M=1        M=10       M=50     M=250

## Page 24

PCA - Příklad
• Jakou dimenzi si PCA vybere na tomto příkladě?
• Bude to výhodné pro klasifikaci tříd?

## Page 25

Lineární diskriminační analýza
•   Opět se pokusíme promítnout data pouze do určitého
    směru:

•   Tentokrát ale budeme chtít aby v tomto směru byly
    separovány třídy.
•   Intuitivně by nás mohlo napadnout vybrat směr ve kterém
    jsou nejlépe odděleny průměty středních hodnot tříd m1 a
    m2. Hledáme tedy w, které maximalizuje:

                                                     m1

                                                               m2

## Page 26

Lineární diskriminační analýza
• Lze však najít i lepší směr:

   •   Snažíme se data promítnout do takového směru, kde
       – Maximalizujeme vzdálenost mezi středními hodnotami tříd
       – Minimalizujeme průměrnou varianci tříd
   •   Maximalizujeme tedy

## Page 27

Lineární diskriminační analýza

                    1
                    st
                     LD
                        A
                          di
                            m
                            en
                                si
                                on
          Class 1

                    Class 2

## Page 28

Lineární diskriminační analýza
                                                      −1
• LDA dimenze dány vlastními vektory matice Σac Σwc
• Σac – kovarianční matice spočítaná se středních hodnot tříd
• Σwc – průměrná kovarianční matice tříd
• Lze zobecnit pro více tříd – vlastní vektory s největšími vlastními
  čísly odpovídají směrům ve kterých jsou třídy nelépe separovány
• Pro J tříd bude pouze J-1 vlastních čísel nenulových
• Pokud mají všechny třídy gaussovské rozložení se stejnou
  kovarianční maticí, LDA transformace transformuje prostor tak, že
  mohou byt třídy optimálně modelovány gaussovským rozložení s
  diagonální kovarianční maticí

## Page 29

LDA a lineární klasifikátor

Dvě třídy s gaussovským
rozložením se stejnou kovarianční
matici jsou opravdu optimálně
oddělitelné lineárním
klasifikátorem (přímkou, rovinou,
hyper-rovinou)

## Page 30

Extrakce příznaku pro řeč - MFCC
  (Mel frequency cepstral coefficients)

           500   1000   1500   2000   2500

• Nejprve řečový signál rozdělíme do asi 20ms
  překrývajících se segmentů

## Page 31

a) Segment of speech signal for vowel ’iy’                                                  b) Speech segment after preemphasis and windowing
  1                                                                                                  0.5

 0.5

  0                                                                                                   0

−0.5

 −1                                                                                                 −0.5
       0                 5              10                    15               20             25           0               5               10               15              20         25
                                             time [ms]                                                                                          time [ms]
                 c) Fourier spectrum of speech segment                                                             d) Filter bank energies − smoothed spectrum
  6                                                                                                  20

  5
                                                                                                     15
  4

  3                                                                                                  10

  2
                                                                                                      5
  1

  0                                                                                                   0
       0       500           1000   1500          2000        2500      3000         3500    4000          1   3       5           7   9        11     13        15   17     19   21   23
                                        frequency [Hz]                                                                                      band number
                              e) Log of filter bank energies                                                           f) Mel frefuency cepstral coefficients
  4                                                                                                   5

  3

  2

  1

  0                                                                                                   0

 −1

 −2

 −3

 −4                                                                                                  −5
       1   3         5          7   9        11          13        15   17      19      21    23               2               4            6               8          10         12
                                           band number                                                                                     mel quefrency

## Page 32

Původní signál

               500             1000        1500           2000           2500

     Logaritmický vystup z banky filtru – je třeba již jen dekorelovat
22

20

18

16

14

12

10

 8

 6

 4

 2

              20          40          60           80            100       120
                                           f

## Page 33

a) Eigen values                                            b) 1st Eigen vector
300                                                             0.5

250

200

150                                                              0

100

 50

  0                                                            −0.5
       1   3   5   7    9   11   13   15   17   19   21   23          1   3   5   7   9   11   13   15   17   19   21   23
                         band number                                                  band number
                   c) 2nd Eigen vector                                            d) 3rd Eigen vector
 0.5                                                            0.5

  0                                                              0

−0.5                                                           −0.5
       1   3   5   7    9   11   13   15   17   19   21   23          1   3   5   7   9   11   13   15   17   19   21   23
                         band number                                                  band number
                   e) 4th Eigen vector                                            f) 5th Eigen vector
 0.5                                                            0.5

  0                                                              0

−0.5                                                           −0.5
       1   3   5   7    9   11   13   15   17   19   21   23          1   3   5   7   9   11   13   15   17   19   21   23
                         band number                                                  band number

## Page 34

Singular Value Decomposition - SVD

• A je jakákoli mxn matice
• U je mxn matice kde sloupce jsou ortonormální báze
• V je nxn matice kde sloupce jsou ortonormální báze
• D je nxn je diagonální matice

•   Předpokládejme, že matice A je matice s příznakovými vektory v
    řádcích s již odečtenou střední hodnotou Î Σ = ATA
•   Potom z následujících vztahů vyplývá, ze:
    – V jsou vlastní vektory Σ
    – Diagonála D obsahuje odmocniny z vlastních čísel Σ (variance ve
      směrech vlastních vektorů)
