---
title: "NN CNN SVM"
source_url: https://www.fit.vut.cz/study/course/SUR/public/prednasky/05_neral_networks/NN_CNN_SVM.pdf
raw_path: raw/sur-prednasky/05_neral_networks/NN_CNN_SVM.pdf
format: pdf
generated: 2026-05-11
---

# NN CNN SVM

- Source: [NN_CNN_SVM.pdf](../../../raw/sur-prednasky/05_neral_networks/NN_CNN_SVM.pdf)
- URL: https://www.fit.vut.cz/study/course/SUR/public/prednasky/05_neral_networks/NN_CNN_SVM.pdf

## Page 1

Klasifikace a rozpoznávání

     Umělé neuronové sítě
   a Support Vector Machines

## Page 2

Lineární klasifikátory
                       y = f w x + b 
    x1w    1                                             T
      w  Σ  a  f(.) y
          2
    x2
                 b
• Nevýhoda: pouze lineární rozhodovací hranice
• Možné řešení:
   – Použít jiný než lineární klasifikátor (např. GMM)
   – Nelineární transformace vstupních vektorů:

                                        Ale jakou transformaci použít?

   – Postavit hierarchii lineárních klasifikátorů

## Page 3

Neuron a jeho matematický model
                                                                  y

                                                                  f(.)

                                                                  a

                                                                  Σ
                                                                              b

                                                             w1    w2

                                                             x1          x2

  Zjednodušená abstrakce fyzického neuronu, inspirace v přírodě
                        Zdroj ilustrace: wikipedia

## Page 4

Hierarchie lineárních klasifikátorů
      w11
             Σ      a1       f(.)      h1      w31
x1    w12
              b1                                        Σ      a3      f(.)        y
      w21
x2
             Σ      a2       f(.)      h2      w32       b3
      w22
              b2
 • Napřed natrénujeme modrý a zelený klasifikátor tak aby
   oddělily každý cluster modrých dat od zbytku.
      – Potřebujeme supervizi: Které modré data patří do kterého clusteru?

 • Pak natrénujeme červený klasifikátor na pravděpodobnostních
   výstupech modrého a zeleného klasifikátoru
     x2                                          h2

                                     

                              x1                                              h1

## Page 5

Neuronové sítě pro klasifikaci
      w11
             Σ     a1      f(.)      h1     w31
x1    w12
              b1                                     Σ     a3      f(.)      y
      w21
x2
             Σ     a2      f(.)      h2     w32       b3
      w22
              b2

 • Takovýto hierarchický klasifikátor můžeme trénovat jako celek
   bez nutnosti předchozí supervize.
 • Jedná se o jednoduchou neuronovou síť (Neural Network) pro
   binární klasifikační problém
 • „Klasifikátory“ v první vrstvě
      – se mají samy naučit jaké clustery je v datech třeba identifikovat,
        aby finální lineární klasifikátor mohl oddělit třídy.
      – lze vidět jako nelineární transformaci do prostoru, kde jsou třídy
        dobře lineárně separovatelné.
      – představují tzv. skrytou vrstvu

## Page 6

Trénování neuronové sítě
•   Uvažujme jednoduchý případ binárního klasifikátoru. Stejně jako u logistické
    regrese použijeme jako objektivní funkci pravděpodobnost správných anotací

    kde             je pravděpodobnost správné třidy predikovaná neuronovou
    sítí pro vzor . je vektor korektních identit tříd:     resp.     , pokud
        paří do třídy     resp. . Výstup neuronové sítě            a a tedy

•   Opět se nám bude lepe pracovat se (záporným) logaritmem této objektivní
    funkce, tedy vzájemnou entropii:

•   Opět budeme parametry (váhy neuronové sítě) optimalizovat pomoci metody
    gradient descend:

## Page 7

Dosazením pak dostaneme

                       Zpětné šíření chyby
                                                                                          t
Potřebujeme vypočítat gradient chyby:                  h1   w31
(zde jsou vzorce jen pro jeden vzor trénovacích dat)
                                                                  Σ     a3   (.)   y      E

                                                       h2   w32    b3

Nejprve určíme gradient vah mezi skrytou a výstupní vrstvou:

                                   Řetězové pravidlo: chyba E je složená funkce závislá
      ,                   ,
                                   na váze wm,j přes aktivaci a3 a výstup y

                                              ,                   Takzvaná chyba na výstupu
          ,           ,             ,

Zde předpokládáme, že všechny aktivační funkce jsou logistické sigmoidy
          a víme, že derivace                                     .

## Page 8

Zpětné šíření chyby II
Nyní určíme gradient vah mezi vstupní a skrytou vrstvou:

                                     Opět řetězové pravidlo: chyba E je složená funkce
                                     závislá na váze wj,n přes aktivaci aj a výstup hj první
   ,                           ,
                                     vrstvy a dále přes aktivaci a3 a výstup druhé vrstvy

Podobným výpočtem jako pro výstupní vrstvu a využitím už spočítaného δ3:

                                                               Chyba na výstupu δ3 se
                           ,                                   zpětně se propaguje do
                                                               „chyby“ ve skryte vrsve δk

       ,        ,
                               w11                                                            t
                                     Σ        a1   𝜎(.)   h1   w31
                      x1       w12
                                         b1                          Σ        a3   𝜎(.)   y   E
                               w21
                      x2
                                              a2          h2   w32       b3
                               w22   Σ             𝜎(.)

                                         b2

## Page 9

Varianty neuronových síťí
• Umělé neuronové sítě mohou mít více než jednu skrytou vrstvu:
    •   Současný trend pro large-scale problémy (rozpoznávání řeči či obrazu) jsou
        hluboké sítě (Deep Neural Networks) s několika (typicky do 10) vrstvami a až
        desítky tisíc neuronů (miliony trénovatelných vah)

• Neuronovou síť lze použít pro jiné problémy než binární klasifikace:
  Regrese
    •   Neunorová síť muže aproximovat libovolnou (M-dimensionální) nelineární funkci
    •   Typicky je použita lineární (či-li žádná) aktivační funkce na vytupu NN.
    •   Objektivní funkce je typicky Mean Squared Error (pro N vzoru a M výstupů):

   Klasifikace do více tříd:
    •   Muticlass cross-entropy obektivní funkce:

        kde tnm, je 1 pokud n-tý vzor patří do m-té třídy, jinak je 0.
    •   Softmax nelinearita na výstupu zaručí, že výstupem jsou normalizované
        posteriorní pravděpodobnosti říd:

## Page 10

Dopředna klasifikační neuronová síť
           pro více tříd
         w11                                              w31
                   Σ            a1      𝜎(.)       h1            Σ        a3             y1
    x1       w12                                           w32

                                                                               Softmax
                       b1                                            b3
             w21                                          w41
    x2
         w22       Σ            a2      𝜎(.)       h2     w42    Σ        a4             y2

                       b2
                                                                 b4

                   - matice vah ze vstupu do skryté vrstvy

                   - vektor biasů ve skryté vrstvě

                   - matice vah ze skryté vrstvy do výstupní vrstvy.

                   - vektor biasů ve výstupní vrstvě
                   - logistická sigmoida aplikovaná na vektor                       po elementech
                   𝐚
         ∑
                                - kde          jsou elementy vektoru
                            )

## Page 11

Zpětné šíření chyby III
V případě, že má neuronová sít více výstupů                      (např. pro více tříd) nebo více
vrstev, bude mít chyba: složitější tvar:
                                                                                               Index vrstvy

Protože všechny výstupy sítě závisí na hodnotě skryté vrstvy hk, sčítáme parciální
derivace ze všech neuronů další vrstvy. Výraz                je chyba na m-tém
výstupu.
                     𝑤                                       𝑤
                               Σ       𝑎          𝜎(.)   ℎ       Σ       𝑎             𝑦
                x1   𝑤

                                                                             Softmax
                                                             𝑤
                                   𝑏                                 𝑏                     𝐸
                     𝑤
                x2                                           𝑤
                      𝟏        Σ       𝑎          𝜎(.)   ℎ       Σ       𝑎             𝑦
                     𝑤𝟐𝟐                                     𝑤
                                                                                           t
                                   𝑏                                 𝑏

     Druhý vstup, druhého neuronu v první vrsvě

## Page 12

Zpětné šíření chyby IV
 Jak už jsme viděli, vyhodnocení neuronové sitě můzeme výjádřit vektorový zápisem:

     𝑤                                 𝑤
           Σ       𝑎   𝜎(.)   ℎ                    Σ       𝑎                       𝑦
x1   𝑤

                                                                   Softmax
                                       𝑤
               𝑏                                       𝑏                                        𝐸
     𝑤                                                                                                                 𝟐 𝟏
x2                                     𝑤
      𝟏    Σ       𝑎   𝜎(.)   ℎ                    Σ       𝑎                       𝑦
     𝑤𝟐𝟐                               𝑤
                                                                                                t
               𝑏                                       𝑏
 Jodobně můžeme výjádřit i zpětné šíření chyby

 jako:
                                                                             𝒍 𝟏                    𝒍 𝟏

                                           (               (𝐚 ))                            𝒂             𝐖 𝐥 𝐡𝐥 𝟏 𝐛
 Kde Jacobiho matice:
                                  𝐚                    𝐚                                   𝐡𝐥 𝟏               𝐡

                                  𝐡𝐥           𝐚                   𝒍                   𝒍
                                  𝐚𝐥       𝐚

## Page 13

Úprava vah

Úpravu vah lze provádět:
1. po předložení všech vektorů trénovací sady (batch training)
    • gradienty pro jednotlivé vzory z předchozích slajdů se akumulují
    • pomalejší konvergence, nebezpečí uvíznutí v lokálním minimu
2. po každém vektoru (Stochastic-Gradient Descent)
    • rychlejší postup trénování při redundantních trénovacích datech
    • riziko přetrénování na posledních pár vektorů z trénovací sady
    • data je lepší předkládat v náhodném pořadí
3. po předložení několika vektorů (mini-batch training)

## Page 14

Ochrana proti přetrénování
•   Rozdělení dat: trénovací, cross-validační, testovací sada
•   Algoritmus New-Bob:
    1. proveď jednu iteraci trénovaní
    2. zjisti úspěšnost NN na CV sadě
         - pokud přírůstek je menší než 0.5%, sniž „teplotu“ є o 1/2
         - pokud přírůstek opětovně menší než 0.5%, zastav trénování
    3. jdi na 1.

●   Regularizace vah (weight-decay): do objektivní funkce přidáme
    výraz který penalizuje váhy s velkou kladnou či zápornou
    hondotou (viz regularizace logistické regrese)

## Page 15

Normalizace dat
                          ~
                          x  x        ~  x
   bez normalizace                       x
                                             
      x2                    x2              x2

                                    x1            x1

                     x1

• Transformujeme náhodné proměnné X, tak aby platilo:
      E[X] = 0; D[X] = 1
• Dynamický rozsah hodnot se přizpůsobí dynamickému
  rozsahu vah

## Page 16

Rekurentní neuronová síť
•   Dopředná síť:

•   Rekurentní neuronová sít:

                                                𝟏

                                                        𝐭 𝟏

    •   Vhodná pro rozpoznávání sekvenčních dat (např. matice řečových příznaků)
    •   Ve „stavovém vektoru“ si pamatuje historii minulých vstupů
    •   Může nas zajímat pro každé t  mapování sekvence                   na
    •   nebo jen    pro posledni vzor sekvence  klasifikace celé sekvence

## Page 17

Zpětná propagace časem

•   Pro trénování můžeme rekurentní sít
    rozvinout v čase a trénovat ji stejně jako
    doprednou neuronovou sít.
•   Stejné „sdílené“ váhy (         se objeví na
    různých mistech v takto rozvinuté síti  pro
    trénování sečteme odpovídající gradienty.

## Page 18

Konvoluční neuronové sítě
• CNN je obvyklá architektura pro rozpoznávání obrázků
• Berou v úvahu to jak jednotlive vstupy neuronové sítě (pixely
  obrázku) leží vedle sebe.
• Sdílení vah pro různé pozice v obrázku  invariance vůči translaci
  obrázku.

      Diskrétní konvoluce

      2d konvoluce

## Page 19

2d konvoluce

## Page 20

Konvoluční filtry
• Konvoluční vrstva aplikuje několik konvolučních filtru jejichž váhy se
  v rámci trénování CNN učíme.
• Výsledkem je několik hladin (replik) obrázku (tzv. feature maps)
• Na výsledné obrázky se jestě pixel po pixelu aplikuje nelinearita:
  např. sigmoida nebo ReLU(a) = max(0,a)

0    0   0                              1   2    1
0    1   0                              0   0    0
0    0   0                             -1   -2   -1

-1   -1 -1                             -1   0    1
-1   8   -1                            -2   0    2
-1   -1 -1                             -1   0    1

## Page 21

Pooling
• Pooling vrstva provede podvzorkování obrázku
• Např Max-pooling nahradí každou čtverici pizeků pouze jejich
  maximalní hodnotou  zredukuje onrázek na poloviční velikost

## Page 22

Kompletní CNN
• CNN střídá konvolučni a pooling vrstvy
• Na konci se většinou objevi obvyklá plně propojená hladina

• Konvoluční filtry v pozdějších vrstvách mají tvar 3D matic tak aby
  operovaly nad všemi “feature maps”. Filtry se ale pohybuji jen ve
  dvou dimenzich:

                     ,

• Pro barevné obrázky operuje i prvni konvoliční vrstva nad třemi
  barevnými hladinami (RGB feature maps)

## Page 23

Support Vector Machines

## Page 24

Support Vector Machines
• SVM lineární klasifikátor s specifickou objektivní
  funkci: maximum margin

                                 N
                             y   wn xn  b  w T x  b
                                 n 1

• V základní variantě zvládne pouze dvě
  nepřekrývající se lineárně separovatelné třídy

## Page 25

SVM kritérium
• Maximalizuje mezeru (margin) mezi dvěmi
  shluky dat

## Page 26

Lineární klasifikátor
                 y ( x)  w T x  b

                wT x     b   y ( x)
                         
                |w|     |w| |w|

       .

## Page 27

Lineární klasifikátor
                 y  w xb
                       T

           • Rozhodněme, že margin
             bude dán prostorem mezi
             přímkami y=-1 a y=1
           • Co se stane, když zkrátíme
             vektor w?

  .

## Page 28

Lineární klasifikátor
                y  w xb
                       T

           • Rozhodněme, že „margin“
             bude dán prostorem mezi
             přímkami y=-1 a y=1
           • Co se stane, když zkrátíme
             vektor w? Margin se zvětší!
  .
           • Budeme hledat řešeni, kde
             w je co nejkratší a kde
             „margin“ odděluje data
             obou tříd.

## Page 29

Trénování SVM
• Minimalizujeme:
                     1 T
             arg min w w
                w ,b 2
• S podmínkami:
            t n ( w T x n  b)  1   n  1,2,  , N 
• N je počet trénovacích vektorů a t n  {1,1} udávají třídy
  pro jednotlivá trénovací data.

• Jedná se o problém tzv. kvadratického programování,
  což je speciální případ optimalizace s omezením
  (constrained optimization).

## Page 30

Co jsou to Support Vectors?
• Podpůrné vektory (support vectors) leží na okraji
  prázdné oblasti a přímo ovlivňují řešení
• Kdyby se ostatní data vypustila z trénovacího setu,
  výsledek by se nezměnil

  x2                           x2
                `
                                             . `
            `       `                    `

                          x1                            x1

## Page 31

Řešení
• Normálový vektor w definující rozhodovací hranici lze
  sestavit lineární kombinaci podpůrných vektoru:
           w   ti i x i    i  0
                iS

• Tato reprezentace umožňuje klasifikaci bez explicitního
  vyjádření vektoru w:

                y  w x  b   ti i x x  b
                        T              T
                                       i
                               iS

• Podobně i vstupem do trénovacíhi mohou být skalární
  součiny mezi trénovacími daty  možnost použití
  následujícího „kernel triku“.

## Page 32

Lineárně neseparovatelná úloha
• Může být řešena nelineárním mapováním dat φ(x) do nového
  prostoru (s více dimenzemi)

         x                                          φ(x)
                      ?
                           2D   3D

• Pro SVM potřebujeme v novem prostoru spočítat skalární součin
  mezi jakýmikoli dvěma mapovanými vektory.
• To lze často udělat efektivněji bez explicitního mapovaní do noveho
  prostoru pomoci tzv. jádrové funkce (kernel function)

                     K(x, y )  φ( x)T φ(y )

## Page 33

Příklady jader
• Polynomiální jádro: K(x, y )  (1  xT y ) d
   • Přiklad pro jednorozměrná data a d=2
     K( x, y )  (1  xy)  1  2 xy  x y  φ( x) φ( y )
                        2             2   2       T

   • Což odpovídá skalárnímu součinu po mapování:
               
      φ( x)T  1, 2 x, x 2   
• Radiální bázove funkce:
                     1                      
      K(x, y )  exp  2 (x  y )T (x  y ) 
                     2                     
   • Odpovídají skalárnímu součinu po projekci do jistého
     nekonečně dimensionálního prostoru  vždy
     separovatelné třídy .

## Page 34

Překrývající se třídy
• Pro překrývající třídy uvedené řešení selže.
• Zavádějí se proměnné (slack variables), které
  oslabí omezující podmínky

          x2

                      ξi

                                    x1

## Page 35

Překrývající se třídy II
• Minimalizujeme
                                         N
                       min w w  C   n
                               T
                        w ,b             n 1

• S podmínkami:

            t n ( w x n  b)  1   n
                  T
                                                n  1,  , N
           n  0

• První výraz maximalizuje mezeru (margin) mezi třídami
  a druhý penalizuje vzory porušující tento margin.
• C řídí kompromis mezi oběma výrazy. C∞ odpovídá
  originální variantě pro separovatelná data.

## Page 36

Vlastnosti a použití SVM
• Výstup SVM nemá pravděpodobnostní interpretaci.
    • nepredikuje pravděpodobnost tříd pro daný vstup
    • produkuje ale měkké skóre, které lze přibližně na „pravděpodobnost
      třídy“ převést.
    • Objektivní funkce má blíže k maximalizaci počtu správně rozpoznaných
      než k maximalizaci pravděpodobnost že vše je rozpoznáno dobře
      (objektivní funkce logistické regrese).

• Často používaný klasifikátor pro problémy se dvěma třídami.
    • Rozšíření na více tříd je možné, ale ne tak přímočaré jako u
      pravděpodobnostních klasifikátorů.

• Hlavní výhoda oproti např. logistické regresi je možnost implicitní
  nelineární transformace vstupů pomoci jader.
    • Společná vlastnost všech jádrových metod (Kernel methods).

## Page 37

Software
• Existuje velni dobrá knihovna LibSVM
 http://www.csie.ntu.edu.tw/~cjlin/libsvm/

• Funkce v Matlabu:
  – svmtrain, svmclassify
