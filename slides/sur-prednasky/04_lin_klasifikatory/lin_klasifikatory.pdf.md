---
title: "lin klasifikatory"
source_url: https://www.fit.vut.cz/study/course/SUR/public/prednasky/04_lin_klasifikatory/lin_klasifikatory.pdf
raw_path: raw/sur-prednasky/04_lin_klasifikatory/lin_klasifikatory.pdf
format: pdf
generated: 2026-05-11
---

# lin klasifikatory

- Source: [lin_klasifikatory.pdf](../../../raw/sur-prednasky/04_lin_klasifikatory/lin_klasifikatory.pdf)
- URL: https://www.fit.vut.cz/study/course/SUR/public/prednasky/04_lin_klasifikatory/lin_klasifikatory.pdf

## Page 1

Strojové učení a rozpoznávání
       Lineární klasifikátory

           Lukáš Burget

              Duben 2026

## Page 2

Opakování - Skalární součin
       𝑥1               𝑤1
    𝐱= 𝑥             𝐰= 𝑤
        2                2

                    𝑥1
  𝐰T𝐱 =   𝑤1   𝑤2
                    𝑥2 = 𝑤1 𝑥1 + 𝑤2 𝑥2

                     𝐱
                                 𝐰

                         .

## Page 3

Lineární klasifikátor
                 𝑦 𝐱 = 𝐰 T 𝐱 + 𝑤0

Vyber třídu 𝐶1 pokud 𝑦 𝐱 > 0 a jinak vyber třídu 𝐶2

          Zobecněný lineární klasifikátor

                 𝑦 𝐱 = 𝑓 𝐰 T 𝐱 + 𝑤0

         kde 𝑓 se nazývá aktivační funkce

## Page 4

Lineární klasifikátor
     𝑦=0
           𝑦>0                    𝑦 𝐱 = 𝐰 T 𝐱 + 𝑤0
                 𝐱
     𝑦<0
                                  𝐰T𝐱    𝑤0 𝑦 𝐱
                                      =−   +
                              𝐰    𝐰     𝐰   𝐰
x2
                          .

                     x1

## Page 5

Perceptron
• Jednoduchý lineární klasifikátor s aktivační funkcí:

• Samotná aktivační funkce v tomto případě nic nezmění –
  rozhodování na základě y(x) > 0 by vedlo ke stejnému výsledku –
  ale pro učící se algoritmus bude výhodné definovat si požadovaný
  výstup jako:

• Pro další zjednodušení předpokládejme, ze 𝑤0 je “nultý” koeficient
  vektoru 𝐰 a odpovídající vstup 𝑥0 je vždy 1. Můžeme tedy psát
  pouze:
                           𝑦 𝐱 = 𝑓 𝐰T𝐱

## Page 6

Perceptron – učící algoritmus
• Cyklicky procházej jednotlivé trénovací vzory 𝐱 n a vždy
  když narazíš na špatně klasifikovaný vzor kde

                  𝑦 𝐱n ≠ 𝑡𝑛
  změň vektor 𝐰 takto:

                  𝐰 𝜏+1 = 𝐰 𝜏 + 𝐱 n 𝑡𝑛
• Lze dokázat, že pokud jsou data lineárně separovatelná,
  tak, algoritmus vždy nalezne řešení – konverguje.
  V opačném případě, ale nikdy nekonverguje

## Page 8

Perceptron
•   Ale které řešení je to správné?   •   Algoritmus konverguje v méně
•   Řešení, které poskytne učící          než (R/D)2 krocích
    algoritmus perceptronu záleží
    na inicializaci – počátečním 𝐰

                                                                         Nejvzdálenější
                                                                         bod od počátku

                                                                         SVM řešení

## Page 9

Opakování - MAP klasifikátor
• Mějme 2 třídy 𝐶1 a 𝐶2
  – Pro daný příznak x vyber třídu 𝐶 s větší posteriorní
    pravděpodobností 𝑝 𝐶 𝐱
  – Vyber 𝐶1 pouze pokud:
                    𝑃 𝐶1 𝐱 > 𝑃 𝐶2 𝐱

              𝑝 𝐱 𝐶1 𝑃 𝐶1   𝑝 𝐱 𝐶2 𝑃 𝐶2
                          >
                  𝑝 𝐱           𝑝 𝐱

       ln 𝑝 𝐱 𝐶1 + ln 𝑃 𝐶1 > ln 𝑝 𝐱 𝐶2 + ln 𝑃 𝐶2

          𝑝 𝐱 𝐶1      𝑃 𝐶1
       ln        + ln      >0
          𝑝 𝐱 𝐶2      𝑃 𝐶2

## Page 10

Pravděpodobnostní generativní model
• Modelujme rozložení tříd gaussovskym rozložením:
               1       1         1        T −1
  𝑝 𝐱 𝐶𝑘   =     𝐷/2   1/2
                           exp −   𝐱 − 𝝁𝑘  𝚺 𝐱 − 𝝁𝑘
             2𝜋      Σ           2
• Pokud náš model omezíme tak, ze každá třída má svou
  střední 𝝁𝑘 hodnotu, ale kovarianční matice 𝚺 je společná
  pro obě třídy, tak můžeme psát:
                      𝑝 𝐱 𝐶1      𝑃 𝐶1
           𝑦 𝐱 = ln          + ln      = 𝐰 T 𝐱 + 𝑤0
                      𝑝 𝐱 𝐶2      𝑃 𝐶2
  kde
              𝐰 = 𝚺 −1 𝝁1 − 𝝁2
                     1 T −1       1 T −1        𝑃 𝐶1
             𝑤𝟎 = − 𝝁1 𝚺 𝝁1 + 𝝁2 𝚺 𝝁2 + ln
                     2            2             𝑃 𝐶2

## Page 12

Maximum likelihood odhad parametrů
• Hledáme parametry modelu
                                            𝑁

                ෝ1 , 𝝁
                𝝁        ෡ = arg max ෑ 𝒩 𝐱𝑛 ; 𝝁𝑡 , 𝚺
                     ෝ2, 𝚺                      𝑛
                                𝝁1 ,𝝁2 ,𝚺
                                            𝑛=1
  kde 𝑡𝑛 je třída, do které patří vzor 𝐱𝑛 a 𝝁𝑡𝑛 je střední
  hodnota této třídy
• Řešením jsou :
   – střední hodnoty 𝝁
                     ෝ 𝑘 spočítané z dat jednotlivých tříd
   – kovarianční matice 𝚺, která je váhovaným průměrem
     kovariančních matic 𝚺෡𝑘 spočtených z dat jednotlivých tříd

       1                       1
  ෝ𝑘 =
  𝝁       ෍ 𝐱𝑛          ෡𝑘 =
                        𝚺                        ෝ𝑘 T
                                         ෝ𝑘 𝐱𝑛 − 𝝁
                                  ෍ 𝐱𝑛 − 𝝁
       𝑁𝑘                      𝑁𝑘
          𝑛:𝑡𝑛 =𝑘                𝑛:𝑡𝑛 =𝑘
          𝐾             𝑁
        1          1                        T
   ෡=
   𝚺           ෡            ෝ 𝑡𝑛 𝐱 𝑛 − 𝝁
          ෍ 𝑁𝑘 𝚺𝑘 = ෍ 𝐱 𝑛 − 𝝁          ෝ 𝑡𝑛
        𝑁          𝑁
         𝑘=1           𝑛=1

## Page 13

•   V případě kdy ovšem naše data nerespektují předpoklad gaussovských
    rozložení a sdílené kovarianční matice. Klasifikátor může selhat – fialová
    rozhodovací linie
•   Lepší výsledky dostaneme s diskriminativně natrénovaným klasifikátorem,
    který bude vysvětlen později – zelená rozhodovací linie

## Page 14

Opakování LDA
• Snažíme se data
  promítnout do takového
  směru, kde
    – Maximalizujeme
      vzdálenost mezi středními
      hodnotami tříd
    – Minimalizujeme
      průměrnou varianci tříd
•   Maximalizujeme tedy

• Pro dvě třídy je 𝐰 totožné s tím které jsme obdrželi pro náš
  generativní klasifikátor.
• Generativní klasifikátor ovšem zvolí i práh 𝑤0

## Page 15

Generativní model a zobecněny
     lineární klasifikátor
Nyní použijme zobecněný lineární klasifikátor
𝑦 𝐱 = 𝜎 𝐰 T 𝐱 + 𝑤0
                                        𝑝 𝐱 𝐶1      𝑃 𝐶1
kde stále platí, že   𝐰 T 𝐱 + 𝑤0 = ln          + ln
                                        𝑝 𝐱 𝐶2      𝑃 𝐶2

a kde aktivační funkce je
logistická sigmoida
          1                  →𝜎 𝑎
 𝜎 𝑎 =
       1 + 𝑒 −𝑎
                                            →𝑎
Potom lze hodnotu tohoto zobecněného linearního
klasifikátoru přímo interpretovat jako posteriorní
pravděpodobnost třídy 𝐶1 𝑝 𝐶 |𝐱 = 𝜎 𝐰 T 𝐱 + 𝑤
                                    1                 0

## Page 16

Jiné generativní lineární klasifikátory
• Lineární klasifikátor dostaneme nejen pro gaussovské rozložení, ale
  pro celou třídu rozložení s exponencialní rodiny, které lze zapsat v
  následující formě:

   kde vektor 𝛌𝑘 má každá třída svůj vlastní, zatím co parametr s je
   sdíleny všemi třídami

## Page 17

Problém s více třídami
• Klasifikace
   – jeden proti všem
   – Každý s každým

## Page 18

Lineární klasifikátor – více tříd
• Nejlépe je mít jednu lineární funkci pro každou třídu k

• Vyber třídu s největším 𝑦𝑘 𝐱
• Rozhodovací linie je opět lineární dána

• Kde k a j jsou dvě nejpravděpodobnější třídy pro dané x

• Pro dvě třídy řešení degraduje k tomu co už jsme viděli

## Page 19

Gaussovský lineární klasifikátor pro více tříd

   • Opět modelujme rozložení tříd gaussovskym rozložením:
                     𝐷         1         1
      ln 𝑝 𝐱 𝐶𝑘 = − ln(2𝜋) − ln Σ − 𝐱 − 𝝁𝑘 T 𝚺 −1 𝐱 − 𝝁𝑘
                     2         2         2
   • Pokud náš model omezíme tak, ze každá třída má svou střední 𝝁𝑘
     hodnotu, ale kovarianční matice 𝚺 je společná pro obě třídy, tak
     můžeme psát:
           𝑝 𝐱, 𝐶𝑘      exp(𝑎𝑘 + const(𝐱))    exp(𝑎𝑘 )          funkce
𝑃 𝐶𝑘 |𝐱 =            =                      =                  softmax
          σ𝑙 𝑝 𝐱, 𝐶𝑙   σ𝑙 exp(𝑎𝑙 + const(𝐱)) σ𝑙 exp(𝑎𝑙 )

              ln 𝑝 𝐱, 𝐶𝑘 = 𝑎𝑘 + const(𝐱)                    Konstanta, která
                                                           nezáleží na třídě.
                       𝑎𝑘 = 𝐱 T 𝐰𝑘 + 𝑤𝑘0
                                                           Vykrátila by se ve
                       𝐰𝑘 = 𝚺 −1 𝝁𝑘                         funkci softmax a
                               1 T −1
                      𝑤𝑘0 = − 𝝁𝑘 𝚺 𝝁𝑘 + ln 𝑃 𝐶𝑘            tedy ji nemusíme
                               2                              vůbec počítat

## Page 20

Odvození
ln 𝑝 𝐱, 𝐶𝑘
  = ln 𝑝 𝐱 𝐶𝑘 + ln 𝑃 𝐶𝑘
        𝐷        1      1
  = − ln 2𝜋 − ln Σ − 𝐱 − 𝝁𝑘 T 𝚺 −1 𝐱 − 𝝁𝑘 + ln 𝑃 𝐶𝑘
        2        2      2
        𝐷        1      1 T −1       T  −1
                                           1 T −1
  = − ln 2𝜋 − ln Σ − 𝐱 𝚺 𝐱 + 𝐱 𝚺 𝝁𝑘 − 𝝁𝑘 𝚺 𝝁𝑘 + ln 𝑃 𝐶𝑘
        2        2      2                  2
                T
  = const(𝐱) + 𝐱 𝐰𝑘 + 𝑤𝑘0 = 𝑎𝑘 + const(𝐱)

kde si uvědomíme, že const(𝐱) závisí na 𝐱, ale nezavisí na třídě 𝑘,

                          𝐱 T 𝚺 −1 𝝁𝑘 = 𝝁𝑘 T 𝚺 −1 𝐱
a tedy
                  1 T −1    1 T −1
                    𝐱 𝚺 𝝁𝑘 + 𝝁𝑘 𝚺 𝐱 = 𝐱 T 𝚺 −1 𝝁𝑘
                  2         2

## Page 21

Softmax funkce
 Vstupem softmax
  funkce je vektor
                                     exp(𝑎𝑘 )
                   softmax𝑘 (𝐚) =               = 𝑃 𝐶𝑘 |𝐱
                                    σ𝑙 exp(𝑎𝑙 )
   𝑘-tý element
  výstupu funkce

                           𝑎1                     exp 𝑎1
                           𝑎2              1      exp 𝑎2
               softmax      ⋮       =
                                      σ𝑙 exp 𝑎𝑙      ⋮
                           𝑎𝐾                     exp 𝑎𝐾
   Funkce vrací
   vektor hodnot
                            Převede vector logaritmu nenormalizovaných
(pravděpodobností)
                           pravděpodobností tříd na pravděpodobnosti tříd

          log 𝑃 𝐶1 |𝐱 + 𝑐𝑜𝑛𝑠𝑡                 log 𝑃 𝐱, 𝐶1     𝑃 𝐶1 |𝐱
          log 𝑃 𝐶2 |𝐱 + 𝑐𝑜𝑛𝑠𝑡                 log 𝑃 𝐱, 𝐶2     𝑃 𝐶2 |𝐱
softmax                         = softmax                   =
                    ⋮                               ⋮            ⋮
          log 𝑃 𝐶𝐾 |𝐱 + 𝑐𝑜𝑛𝑠𝑡                 log 𝑃 𝐱, 𝐶𝐾     𝑃 𝐶𝐾 |𝐱

## Page 22

Gaussovský lineární klasifikátor pro více tříd II
               𝑝 𝐱, 𝐶𝑘      exp(𝑎𝑘 + const(𝐱))    exp(𝑎𝑘 )
    𝑃 𝐶𝑘 |𝐱 =            =                      =
              σ𝑙 𝑝 𝐱, 𝐶𝑙   σ𝑙 exp(𝑎𝑙 + const(𝐱)) σ𝑙 exp(𝑎𝑙 )
  ln 𝑝 𝐱, 𝐶𝑘 = 𝑎𝑘 + const(𝐱)
           𝑎𝑘 = 𝐰𝑘T 𝐱 + 𝑤𝑘0
           𝐰𝑘 = 𝚺 −1 𝝁𝑘
                   1 T −1
          𝑤𝑘0 = − 𝝁𝑘 𝚺 𝝁𝑘 + ln 𝑃 𝐶𝑘
                   2
Pravděpodobností všech tříd můžeme tedy efektivně vypočítat jako

    𝑃 𝐶1 |𝐱                𝑎1
    𝑃 𝐶2 |𝐱                𝑎2
              = softmax     ⋮    = softmax 𝐚 = softmax 𝐖𝐱 + 𝐰0
       ⋮
    𝑃 𝐶𝐾 |𝐱                𝑎𝐾

kde 𝐰𝑘𝑻 jsou řádky matice 𝐖 a 𝑤𝑘0 jsou koeficienty vektoru 𝐰0 .
𝐖 = 𝐰1 , 𝐰2 , … , 𝐰𝐾 T 𝐰0 = 𝑤10 , 𝑤20 , … , 𝑤𝑘0 T

## Page 23

Lineární logistická regrese pro více tříd
          𝑃 𝐶1 |𝐱                   𝑎1
          𝑃 𝐶2 |𝐱                   𝑎2
                    = softmax        ⋮   = softmax 𝐚 = softmax 𝐖𝐱
             ⋮
          𝑃 𝐶𝐾 |𝐱                   𝑎𝐾

kde opět předpokládáme 𝑥0 = 1 a nemusíme tedy explicitně zavádět 𝑤𝑘0 .
Nyní budeme parametry 𝐖 odhadovat tak, abychom přímo maximalizovali
pravděpodobnost anotací 𝐭 = 𝑡1 , 𝑡2 … , 𝑡𝑁 T , tedy

                                                            exp(𝐰𝑡T𝑛 𝐱𝑛 )
     𝑃 𝐭 𝐗 = ෑ 𝑃 𝑡𝑛 𝐱 𝑛 = ෑ softmax𝑡𝑛 𝐖𝐱n = ෑ
                                                          σ𝐾
                                                           𝑙=1 exp(𝐰 T
                                                                    𝑙 𝐱𝑛 )
               𝑛                𝑛                     𝑛
kde 𝐰𝑘T je 𝑘-tý řádek matice 𝐖 a 𝑡𝑛 je index třídy 𝑛-tého trénovacího vzoru.

Všiměme si , že maximalizujeme stejnou onjektivní funkci jako pro při
odhadu maximalně věrohodných parametrů diskrétního rozložení, jen je teď
pravděpodobnost třídy podmíněna pozorováním 𝐱.

## Page 24

Lineární logistická regrese – II.
• Místo maximlizování

                                                                  exp(𝐰𝑡T𝑛 𝐱 𝑛 )
     𝑃 𝐭 𝐗 = ෑ 𝑃 𝑡𝑛 𝐱 𝑛 = ෑ softmax𝑡𝑛 𝐖𝐱 n = ෑ
                                                                σ𝐾
                                                                 𝑙=1 exp(𝐰 T
                                                                          𝑙 𝐱𝑛 )
               𝑛               𝑛                           𝑛
lidé ve strojovém učení často mluví o minimalizování ekvivalentí chybové
funkce známé jako křížová entropie (cross-entropy)
                               𝑵                      𝑵
                                                                 exp(𝐰𝑡T𝑛 𝐱𝑛 )
      𝐸 𝐖 = − ln 𝑃 𝐭 𝐗 = − ෍ ln 𝑃 𝑡𝑛 𝐱 𝑛 = − ෍ ln
                                                               σ𝐶𝑙=1 exp(𝐰𝑙T 𝐱 𝑛 )
                               𝒏=𝟏                   𝒏=𝟏

• Hledáme minimum této funkce, takže derivujeme abychom dostali gradient
                          𝑵
                                   exp 𝐱 𝑛T 𝐰𝑗
              𝛻𝐰𝑗 𝐸 𝐖 = ෍                        − 𝛿 𝑡𝑛 = 𝑗       𝐱𝑛
                                σ𝑙 exp 𝐱 𝑛T 𝐰𝑙
                         𝒏=𝟏

   a hledáme takové 𝐰𝑗 (pro všechna 𝑗) pro které 𝛻𝐰𝑗 𝐸 𝐖 = 𝟎

## Page 25

Lineární logistická regrese – III.
Gradient muzueme pocitat pro kazdý řadek matice 𝐖 zvlašť
                             𝑵
                 𝜕𝐸 𝐖
       𝛻𝐰𝑗 𝐸 𝐖 =      = ෍ softmax𝑗 𝐖𝐱 n − 𝛿 𝑡𝑛 = 𝑗           𝐱𝑛
                  𝜕𝐰𝑗
                            𝒏=𝟏

Nebo můžeme rovnou pořítat derivaci 𝐸 𝐖 podle celé matice 𝐖
                𝑵
      𝜕𝐸 𝐖
           = ෍ softmax 𝐖𝐱n − onehot 𝑡𝑛 𝐱 𝑛T = (𝐘 − 𝐓) 𝐗 T
       𝜕𝐖
               𝒏=𝟏

•   𝛿 𝑖 = 𝑗 = 1 pokud 𝑖 = 𝑗 a jinak je 0
•   onehot 𝑘 je vektor nul a pouze 𝑘 -tý element je 1
•   𝐗 = 𝐱1 , 𝐱 2 , … , 𝐱 𝑁 je matice trénovacích vzorů (ve sloupcích)
•   𝐓 = 𝐭1 , 𝐭 2 , … , 𝐭 𝑁 kde sloupce 𝐭1 = onehot 𝑡n jsou anotace
•   𝐘 = 𝐲1 , 𝐲2 , … , 𝐲𝑁 kde sloupce jsou predikované pravděpodobnosti
    tříd 𝐲n = softmax 𝐖𝐱 n

## Page 26

Metoda gradientního sestupu
• Opakovaně měníme parametry tak, že jimi pohybujeme v malých
  krocích ve směru opačném ke gradientu 𝛻𝐸 𝐖 (tedy z kopce dolů)
  se nedostaneme do minima funkce kde 𝛻𝐸 𝐖 = 𝟎
                          𝜏+1       𝜏
                                         𝜕𝐸 𝐖 𝜏
                        𝐖     =𝐖 −𝜂
                                            𝜕𝐖
• Učící konstanta (learning rate) 𝜂 určuje jak velké kroky děláme a
  musí být správně nastavena aby algoritmus konvergoval

                             • Matematicky správně je gradient
                                                          𝜕𝐸 𝐖 𝜏
                                vektor, ale naše derivace       je
                                                            𝜕𝐖
                                matice, tak abychom ji mohli použít
                     𝐖3
                                přímo pro upravu matice parametrů 𝐖.
                 2
             𝐖
        𝐖1

   𝐖0

## Page 27

softmax pro 2 třídy
                               𝑎1      exp 𝑎1           exp 𝑎1
          𝑃 𝐶1 |𝐱 = softmax1   𝑎2   =            =
                                      σ𝑙 exp 𝑎𝑙    exp 𝑎1 + exp 𝑎2
                       1                 1
                 =              =               = 𝜎 𝑎1 − 𝑎2
                      exp 𝑎2      1 + 𝑒 − 𝑎1−𝑎2
                   1+
                      exp 𝑎1
• Pro dva vstupy, první výstup softmax1 „degraduje“ na logistickou
  sigmoidu rozdílu vstupů
• Pro logistickou regresi se dvěmi třídami:
𝑃 𝐶1 𝐱 = softmax1 𝐖𝐱 = softmax1 𝐰1 , 𝐰2 T 𝐱 = 𝜎       𝐰1 − 𝐰2 T 𝐱 = 𝜎 𝐰 T 𝐱

• A tedy logisticka pro dvě třídy je jen specialním případem kde
  𝐰 = 𝐰1 − 𝐰2

               𝑃 𝐭 𝐗 = ෑ 𝑃 𝑡𝑛 𝐱 𝑛 = ෑ softmax𝑡𝑛 𝐖𝐱 n
                          𝑛              𝑛

                                                     𝑡𝑛                  1− 𝑡𝑛
   𝑃 𝐭𝐗   = ෑ 𝑃 𝐶1 𝐱 𝑛 𝑡𝑛 𝑃 𝐶2 𝐱 𝑛 1−𝑡𝑛 = ෑ 𝜎 𝐱 𝑛T 𝐰      1 − 𝜎 𝐱 𝑛𝑇 𝐰
            𝑛                             𝑛

## Page 28

Lineární logistická regrese – 2 třídy
• Uvažujme opět pravděpodobnostní model, kde
                          𝑃 𝐶1 |𝐱 = 𝜎 𝐱 T 𝐰
  a pravděpodobnost druhé třídy
                       𝑃 𝐶2 |𝐱 = 1 − 𝑃 𝐶1 |𝐱
• kde opět předpokládáme 𝑥0 = 1 a nemusíme tedy explicitně zavádět 𝑤0 .
• Nyní budeme parametry 𝐰 odhadovat tak, abychom přímo maximalizovali
  pravděpodobnost anotací 𝐭 = 𝑡1 , 𝑡2 … , 𝑡𝑁 T , tedy
                          𝑃 𝐭 𝐗 = ෑ 𝑃 𝑡𝑛 𝐱 𝑛
                                    𝑛
• Pro zjednodušení zápisu předpokládejme, že 𝑡𝑛 = 1, pokud 𝐱 𝑛 paří do
  třídy 𝐶1 a 𝑡𝑛 = 0, pokud 𝐱 𝑛 paří do třídy 𝐶2 .Potom můžeme psát
                                                     𝑡𝑛                  1− 𝑡𝑛
   𝑃 𝐭𝐗   = ෑ 𝑃 𝐶1 𝐱 𝑛 𝑡𝑛 𝑃 𝐶2 𝐱 𝑛 1−𝑡𝑛 = ෑ 𝜎 𝐱 𝑛T 𝐰      1 − 𝜎 𝐱 𝑛𝑇 𝐰
            𝑛                             𝑛
• Všiměme si , že maximalizujeme stejnou onjektivní funkci jako pro pří
  odhadu maximalně věrohodných parametrů diskrétního rozložení, jen je
  teď pravděpodobnost třídy podmíněna pozorováním 𝐱.

## Page 29

Lineární logistická regrese – 2 třídy – II.
• Místo maximlizování
                                          𝑡𝑛                  1− 𝑡𝑛
       𝑃 𝐭 𝐗 = ෑ 𝑃 𝑡𝑛 𝐱 𝑛    = ෑ 𝜎 𝐱 𝑛T 𝐰      1 − 𝜎 𝐱 𝑛𝑇 𝐰
                 𝑛             𝑛
  lidé ve strojovém učení často mluví o minimalizování ekvivalentí chybové
  funkce známé jako křížová entropie (cross-entropy)

                            𝑵

    𝐸 𝐰 = − ln 𝑃 𝐭 𝐗 = − ෍ 𝑡𝑛 ln 𝜎 𝐱 𝑛T 𝐰 + 1 − 𝑡𝑛 ln 1 − 𝜎 𝐱 𝑛T 𝐰
                            𝒏=𝟏

• Hledáme minimum této funkce, takže derivujeme abychom dostali gradient
                                  𝑵

                     𝛻𝐸 𝐰 = ෍ (𝜎 𝐱 𝑛T 𝐰 − 𝑡𝑛 )𝐱𝑛
                                𝒏=𝟏

  a hledáme takové 𝐰 pro které 𝛻𝐸 𝐰 = 𝟎

## Page 30

Lineární logistická regrese – 2 třídy – III.
• Pomocí maticového nasobeni mužeme

                                    𝑵

                        𝛻𝐸 𝐰 = ෍ 𝜎 𝐱 𝑛T 𝐰 − 𝑡𝑛 𝐱𝑛
                                   𝒏=𝟏
  přepsat jako
                               𝛻𝐸 𝐰 = 𝐗 𝐲 − 𝐭

  kde 𝐗 = [𝐱1 , 𝐱 2 , … , 𝐱 N ] je matice trenovacích vzorů, 𝐭 = 𝑡1 , 𝑡2 , … , 𝑡𝑁 T
  sloupcový vektor odpovídajících (0/1) anotací a 𝐲 = 𝑦1 , 𝑦2 … , 𝑦𝑁 T je
  sloupcový vektor vystupů klasifikátoru

                           𝑦𝑛 = 𝑃 𝐶1 |𝐱𝑛 = 𝜎 𝐱 𝑛T 𝐰

  Vyjádření parametrů 𝐰 pro 𝛻𝐸 𝐰 = 𝟎 bohužel nemá analytické řešení a
  musíme přistoupit k numerické optimalizaci, např. pomocí metody
  gradientního sestupu (gradient descent)

## Page 31

Metoda gradientního sestupu
• Opakovaně měníme parametry tak, že jimi pohybujeme v malých
  krocích ve směru opačném ke gradientu 𝛻𝐸 𝐰 (tedy z kopce dolů)
  se nedostaneme do minima funkce kde 𝛻𝐸 𝐰 = 𝟎

                        𝐰 𝜏+1 = 𝐰 𝜏 − 𝜂∇𝐸 𝐰 𝝉
• Učící konstanta (learning rate) 𝜂 určuje jak velké kroky děláme a
  musí být správně nastavena aby algoritmus konvergoval

## Page 32

Lineární logistická regrese:
             odhad parametrů
• Rychlejší konvergenci dosáhneme pomocí Newton-Raphson
  optimalizace:
   – Kolem stávajícího řešení 𝐰 𝜏 aproximujeme chybovou funkci ∇𝐸 pomoci
     Taylorova rozvoje druhého řádu, čímž obdržíme kvadratickou formu
     (vícerozměrné zobecnění kvadratické funkce).
   – Jako nové řešení zvolíme to, kde má tato kvadratická forma minimum.

             𝐰 𝜏+1 = 𝐰 𝜏 − 𝐇 𝐰 𝝉 −1 ∇𝐸 𝐰 𝝉

  kde 𝐇(𝐰 𝝉 ) = 𝐗𝐑 𝐗 T je matice druhých derivací (Hessian matrix).
                                   −𝟏
            𝐰 𝜏+1 = 𝐰 𝜏 − 𝐗𝐑 𝐗 T        𝐗 𝐲−𝐭
• 𝐑 je diagonální matice s diagonálou diag 𝐑 = 𝐲 1 − 𝐲

• Pozor! Stejně jako i metody gradientního sestupu není zaručeno, že
  každý krok zlepšení řešení. Metoda může začít divergovat, ale dá se
  řešit např. (opakovaným) půlením kroku 𝐰 𝜏+1 ≔ (𝐰 𝜏+1 +𝐰 𝜏 )/2.

## Page 33

Logistická regrese – příklad
             𝑃 𝐶1 |𝐱 = 𝜎 𝐱 T 𝐰 = 𝜎 𝑤1 𝑥1 + 𝑤2 𝑥2 + 𝑤0
Na “přektývajících se třídách” se    Na “oddělených třídách” může
korektně naučíme odhadovat 𝑃 𝐶1 |𝐱   dojít k přetrénování, kde 𝐸 𝐰 ≈ 𝟎,
                                     i když řešení není uspokojivé.
                                     Koeficienty 𝑤1 a 𝑤2 jsou příliš
                                     velke ⇒ rychlá změna 𝑃 𝐶1 |𝐱

## Page 34

Regularizace parametrů
• Do objektivní funkce přidáme regularizační člen
                                                    𝐷

                         𝜆 𝐰 𝟐𝟐 = 𝜆𝐰 T 𝐰 = 𝜆 ෍ 𝑤𝑑2
                                                𝑑=1
   který pealizuje vysoké hodnoty 𝑤1 a 𝑤2 .
               𝑵

    𝐸 𝐰 = − ෍ 𝑡𝑛 ln 𝜎 𝐱 𝑛T 𝐰 + 1 − 𝑡𝑛 ln 1 − 𝜎 𝐱𝑛T 𝐰                    + 𝜆𝐰 T 𝐰
              𝒏=𝟏
• Potom
             𝛻𝐸 𝐰 = 𝐗 𝐲 − 𝐭 + 𝜆 𝐰              𝐇 𝐰 𝝉 = 𝜆𝐈 + 𝐗𝐑 𝐗 T
                                               −𝟏
                   𝐰 𝜏+1 = 𝐰 𝜏 − 𝜆𝐈 + 𝐗𝐑 𝐗 T        (𝐗 𝐲 − 𝐭 +𝜆 𝐰 𝝉 )

• Zde pro jednoduchost regularizujeme i 𝑤0 , ale je lepší to nedělat
  abycho nestahovali rozhodovací hranici k počátku.

## Page 35

Příklady pro různé hodnoty
     regularizačního koeficientu 𝜆

 𝜆=0                           𝜆=2

𝜆 = 200                        𝜆 = 20 000

## Page 36

Nelineární mapování vstupního vektoru
•   Nelze-li původní data lineárně oddělit, možná pomůže jejich nelineární
    transformace do potenciálně vysocerozměrného prostoru – hlavní myšlenka
    „kernel methods“ které budou vysvětleny příště
•   V našem příkladu pomohlo i mapování dvourozměrných dat do dvou
    gaussovských funkcí

                                     𝑎

## Page 37

Lineární logistická regrese:
        nelineární klasifikace
• Nelineárně transformujeme vstupy 𝐱 do vícerozměrného vektoru 𝐱ො .
• Jako příklad použijeme trasformaci pomoci polynomů druhého řádu:
                𝐱ො = 1, 𝑥1 , 𝑥2 , 𝑥1 𝑥2 , 𝑥12 , 𝑥22
• Nyní natrénujeme a aplikujeme logistickou regresi nad těmito
  vícerozměrnými daty. Jakou pravděpodobnost 𝑃 𝐶1 |𝐱 odhaduje
  takový model jako funkci původních dvourozměrných dat 𝐱?

• Rozhodovací línie je kuželosečka
  (jako u gaussovského klasifikátoru).
