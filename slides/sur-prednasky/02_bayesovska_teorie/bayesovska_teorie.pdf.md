---
title: "bayesovska teorie"
source_url: https://www.fit.vut.cz/study/course/SUR/public/prednasky/02_bayesovska_teorie/bayesovska_teorie.pdf
raw_path: raw/sur-prednasky/02_bayesovska_teorie/bayesovska_teorie.pdf
format: pdf
generated: 2026-05-11
---

# bayesovska teorie

- Source: [bayesovska_teorie.pdf](../../../raw/sur-prednasky/02_bayesovska_teorie/bayesovska_teorie.pdf)
- URL: https://www.fit.vut.cz/study/course/SUR/public/prednasky/02_bayesovska_teorie/bayesovska_teorie.pdf

## Page 1

Strojové učení a rozpoznávání
   Bayesovská rozhodovací teorie

            Lukáš Burget

## Page 2

Extrakce příznaků

                         Granáty
                         Jablka

→ Četnost

                      → Váha [dkg]

## Page 3

Pravděpodobnosti - diskrétní příznaky

 • Uvažujme diskrétní příznaky – „váhové kategorie“
 • Nechť tabulka reflektuje skutečné pravděpodobnosti
   jednotlivých kategorií

         1           6          12          15        12         2         2       50

         4          23          50          14         6         3         1       100

      nejlehčí      lehčí      lehký       střední    těžký     těžší   nejtěžší
      0.0 - 0.1   0.1 - 0.2   0.2 - 0.3   0.3 – 0.4 0.4 – 0.5 0.5 – 0.6 0.6 – 0.7 [kg]

## Page 4

Apriorní pravděpodobnost – Stav věci
• Hádej co mám za zády, jablko nebo granát?
• Klasifikační pravidlo:
   – Vyber čeho je nejvíc
   – Třída s největší apriorní pravděpodobností (a-priori probability)

                50                                                     100
    𝑃(𝑔𝑟𝑎𝑛á𝑡) =                                         𝑃(𝑗𝑎𝑏𝑙𝑘𝑜) =
                150                                                    150
                                   ෍ 𝑃(!) = 1
                                    !

           1           6          12          15        12         2         2       50

           4          23          50          14         6         3         1       100

        nejlehčí      lehčí      lehký       střední    těžký     těžší   nejtěžší
        0.0 - 0.1   0.1 - 0.2   0.2 - 0.3   0.3 – 0.4 0.4 – 0.5 0.5 – 0.6 0.6 – 0.7 [kg]

## Page 5

Společná pravděpodobnost
• Je to těžké. Hádej co to je?
• Klasifikační pravidlo:
   – Ve sloupci váhové kategorie vyber nejčastější třídu
   – Třída s největší společnou pravděpodobností (joint probability) –
     pravděpodobnost chlívečku.
   – … ale také největší podmíněnou pravděpodobností (viz další slajd)
                            12                               6
      𝑃(𝑔𝑟𝑎𝑛á𝑡, 𝑡ěž𝑘ý) =                𝑃(𝑗𝑎𝑏𝑙𝑘𝑜, 𝑡𝑒ž𝑘ý) =
                           150                              150
                                   ෍ 𝑃(!, 𝑥) = 1
                                    !,𝑥

          1           6          12          15        12         2         2       50

          4          23          50          14         6         3         1       100

       nejlehčí      lehčí      lehký       střední    těžký     těžší   nejtěžší
       0.0 - 0.1   0.1 - 0.2   0.2 - 0.3   0.3 – 0.4 0.4 – 0.5 0.5 – 0.6 0.6 – 0.7 [kg]

## Page 6

Podmíněná pravděpodobnost
• Je to těžké. S jakou pravděpodobností je to granát?
• Podmíněnou pravděpodobnost (conditional probability) -
  pravděpodobnost chlívečku dáno sloupec

                                                    12
                        𝑃(𝑔𝑟𝑎𝑛á𝑡|𝑡ěž𝑘ý) =
                                                  12 + 6

          1           6          12          15        12         2         2       50

          4          23          50          14         6         3         1       100

       nejlehčí      lehčí      lehký       střední    těžký     těžší   nejtěžší
       0.0 - 0.1   0.1 - 0.2   0.2 - 0.3   0.3 – 0.4 0.4 – 0.5 0.5 – 0.6 0.6 – 0.7 [kg]

## Page 7

Ještě nějaké další pravděpodobnosti
                50                                           12
   𝑃(𝑔𝑟𝑎𝑛á𝑡) =                           𝑃(𝑔𝑟𝑎𝑛á𝑡|𝑡ěž𝑘ý) =
               150                                         12 + 6
               12 + 6                                      12
    𝑃(𝑡ěž𝑘ý) =                           𝑃(𝑡ěž𝑘ý|𝑔𝑟𝑎𝑛á𝑡) =
                150                                        50
                                                 12
   𝑃(𝑔𝑟𝑎𝑛á𝑡, 𝑡ěž𝑘ý) = 𝑃(𝑔𝑟𝑎𝑛á𝑡|𝑡ěž𝑘ý)𝑃(𝑡ěž𝑘ý) =
                                                150
                                                   12
    𝑃(𝑔𝑟𝑎𝑛á𝑡, 𝑡ěž𝑘ý) = 𝑃(𝑡ěž𝑘ý|𝑔𝑟𝑎𝑛á𝑡)𝑃(𝑔𝑟𝑎𝑛á𝑡) =
                                                  150

       1           6          12          15        12         2         2       50

       4          23          50          14         6         3         1       100

    nejlehčí      lehčí      lehký       střední    těžký     těžší   nejtěžší
    0.0 - 0.1   0.1 - 0.2   0.2 - 0.3   0.3 – 0.4 0.4 – 0.5 0.5 – 0.6 0.6 – 0.7 [kg]

## Page 8

Bayesův teorém
Posteriorní pravděpodobnost           Věrohodnost     Apriorní pravděpodobnost
   (posterior probability)             (likelihood)   (prior probability)

                                  𝑝(𝑥|!)𝑃(!)
                         𝑃(!|𝑥) =                                    Evidence
                                     𝑝(𝑥)
 •   Věrohodnost nás zatím moc nezajímala, ale za chvíli to bude to hlavní co se
     budeme snažit odhadovat z trénovacích dat.
 •   Již dříve jsme viděli že (product rule):

                        𝑃(!, 𝑥) = 𝑃(𝑥|!)𝑃(!)
 •   Pro evidenci platí (sum rule):
                            𝑃 𝑥 = ෍ 𝑃(!, 𝑥)
                                   !
                                                      12   6
 např.: 𝑃 𝑡ěž𝑘ý = 𝑃 𝑔𝑟𝑎𝑛á𝑡, 𝑡ěž𝑘ý + 𝑃 𝑗𝑎𝑏𝑙𝑘𝑜, 𝑡ěž𝑘ý =    +
                                                      150 150

## Page 9

Maximum a-posteriori (MAP)
            klasifikátor
• Mějme 2 třídy ω1 a ω2
  – Pro daný příznak x vyber třídu ω s větší posteriorní
    pravděpodobností P(ω|x)
  – Vyber ω1 pouze pokud:

                𝑃 !1 |𝑥 > 𝑃 !2, |𝑥

          𝑃(𝑥|!1 )𝑃(!1 ) 𝑃(𝑥|!2 )𝑃(!2 )
                        >
              𝑃(𝑥)           𝑃(𝑥)

                𝑃 !1 , 𝑥 > 𝑃 !2, , 𝑥

## Page 10

Maximum a-posteriori (MAP)
               klasifikátor
•   Pro každé x minimalizuje pravděpodobnost chyby:
        P(chyby|x) = P(ω1|x) pokud vybereme ω2
        P(chyby|x) = P(ω2|x) pokud vybereme ω1
        Pro dané x vybíráme třídu ω s větším P(ω|x) ➔ minimalizace chyby

•   Musíme ovšem znát
    –   P(ω|x)
    –   nebo P(x,ω)
    –   nebo P(x|ω) a P(ω),
    které reflektují skutečná rozložení pro rozpoznávaná data

•   Obecně pro N tříd
    –   Vyber třídu s největší posteiorní pravděpodobností:

        arg max! 𝑃 !|𝑥 = arg max! 𝑃 𝑥|! 𝑃 !

## Page 11

Spojité příznaky
• P(.) – bude pravděpodobnost
• p(.) – bude hodnota funkce rozložení pravděpodobnosti
                                  𝑏
          𝑃 𝑥 ∈ (𝑎, 𝑏) = න 𝑝(𝑥) d𝑥
                                  𝑎
• Bude nás zajímat funkce rozložení pravděpodobnosti
  příznaků podmíněné třídou 𝑝 𝑥|!
   3.5

                             •Plocha pod funkci musí být 1
                             •Hodnoty mohou být ale libovolné kladné

    0                  0.7 [kg]

## Page 12

Bayesův teorém – spojité příznaky

                          𝑝(𝑥|!)𝑃(!)
                 𝑃(!|𝑥) =
                             𝑝(𝑥)

        𝑝(𝑥|!)      𝑝(!, 𝑥) = 𝑝(𝑥|!)𝑃(!)       𝑃(!|𝑥)
3.5               2.5                      1

 0                 0                       0
         →x                 →x                   →x

## Page 13

MAP klasifikátor – spojité příznaky
• Opět se budeme rozhodovat podle:
     𝑝 !1 , 𝑥 > 𝑝 !2, , 𝑥
   nebo
    𝑃 !1 |𝑥 > 𝑃 !2, |𝑥
                                𝑃(!, 𝑥)       𝑃(!|𝑥)
                          2.5             1

Na obrazcích vidíme, že
obě pravidla vedou ke
stejným rozhodnutím

                           0              0
                                 →x           →x

## Page 14

MAP klasifikátor – pravděpodobnost chyby
      •    Říkali jsme, že MAP klasifikátor minimalizuje pravděpodobnost chyby
      •    Plocha pod funkci společného rozložení pravděpodobnosti p(ω,x) v určitém
           intervalu x je pravděpodobnost výskytu vzoru třídy ω s příznakem v daném
           intervalu
      •    Jaká je tedy celková pravděpodobnost, že klasifikátor udělá chybu?

          Pravděpodobnost, že červená třída
          je chybně klasifikována jako modrá               Jakákoli snaha posunout hranice
                                                              povede jen k větší chybě

  2.5                                              2.5

𝑝(!, 𝑥)
                                               → 𝑝(!, 𝑥)
→

     0                                                 0

                         →x                                             →x

## Page 15

Posteriorní pravděpodobnosti pro
   různé apriorní pravděpodobnosti
 • Změna apriorních pravděpodobností tříd může
   vézt k různým rozhodnutím

       1          2          1          1             99               1
𝑃 !1 = , 𝑃 !2 =       𝑃 !1 = , 𝑃 !2 =       𝑃 !1 =       , 𝑃 !2   =
       3          3          2          2            100              100

      →x                     →x                       →x

## Page 16

Vícerozměrné příznaky
• Místo jednorozměrného příznaku máme N rozměrný
  příznakový vektor
   – x = [x1, x2, …, xN]
   – např. [váha, červenost]
   – MAP klasifikátor opět vybírá nejpravděpodobnější třídu

𝑃(!, 𝐱)
   →

## Page 17

Parametrické modely
– Pro rozpoznávání s MAP klasifikátorem jsme doposud
  předpokládali, že známe skutečná rozloženi
   • P(ω|x)
   • nebo p(x,ω)
   • nebo p(x|ω) a P(ω)
– Ve skutečnosti ale většinou známe jen trénovací vzory
– Pokusíme se tato rozložení odhadnout z dat – budeme trénovat
  statistické modely

          Švestky      Jablka         Granáty

## Page 18

Parametrické modely
• Můžeme se pokusit modelovat přímo posteriorní pravděpodobnost,
  a tu použít přímo k rozpoznávání P(ω|x)
   – tzv. diskriminativní trénování
   – Ale o tomto bude řeč až později
• Běžnější je odhadovat rozložení p(x|ω) a P(ω)
• Tato rozložení popisují předpokládaný proces generování dat –
  generativní modely
• Nejprve se musíme rozhodnout pro formu modelu, který použijeme
  (např. gaussovské rozložení)
              Švestky        Jablka      Granáty

## Page 19

Gaussovské rozložení
    (jednorozměrné)
                       1         𝑥−𝜇 2
                               −
𝑝 𝑥 = 𝒩 𝑥; 𝜇, 𝜎 2 =           𝑒 2𝜎2
                      2𝜋𝜎 2

## Page 20

Proč gaussovské rozložení?
• Přirozeně se vyskytuje
• Centralní limitní teorém: Sečtení hodnot mnoha
  bezávysle vygenerovaných nahodných čísel nám
  da vzorek z Gaussova rozložení
• Příklady:
   – Sečtení hodnot z N hracích kostek
   – Galton’s board
      https://www.youtube.com/watch?v=03tx4v0i7MA

## Page 21

Proč gaussovské rozložení?
 • Jednoduché a dobře se s ním pracuje
    – V logaritmické doméně je to jen kvadratická funkce
                   log 2𝜋𝜎 2   1                1          𝜇     𝜇 2
log𝒩 𝑥; 𝜇, 𝜎 2 = −           − 2 𝑥 − 𝜇 2 = − 2 𝑥2 + 2 𝑥 − 2 + 𝐾
                       2      2𝜎               2𝜎         𝜎     2𝜎
    – Věrohodnost množiny pozorování 𝐱 = 𝑥1 , 𝑥2 , 𝑥3 , … 𝑥𝑁 je

      𝑝 𝐱 𝜇, 𝜎 2 = 𝑝 𝑥1 , 𝑥2 , 𝑥3 , … 𝑥𝑁 𝜇, 𝜎 2 = ෑ 𝒩 𝑥𝑖 ; 𝜇, 𝜎 2
                                                           𝑖

   log 𝑝 𝐱 𝜇, 𝜎 2 = ෍ log 𝒩 𝑥𝑖 ; 𝜇, 𝜎 2 = ෍ log 𝒩 𝑥𝑖 ; 𝜇, 𝜎 2
                     𝑖                             𝑖
                     1    2   𝜇          𝜇2
                 = − 2 ෍ 𝑥𝑖 + 2 ෍ 𝑥𝑖 − 𝑁 2 + 𝑁𝐾
                    2𝜎       𝜎          2𝜎
                            𝑖                  𝑖

                                Postačující statistiky
                                 (Sufficient statistics)

## Page 22

Gaussovské rozložení
     (vícerozměrné)
𝑝 𝑥1 , … , 𝑥𝐷 =
                   1              1
                                 −2 𝐱−𝝁 𝑇 𝚺 −1 𝐱−𝝁
 𝒩 𝐱; 𝝁, 𝚺 =                 𝑒
                  2𝜋 𝐷 |𝚺|

## Page 23

Příklady dvourozměrných gaussovek

## Page 24

Odhad parametrů rozložení
          s maximální věrohodností
•   Mějme trénovací vzory (pozorování) 𝐗 = 𝐱1 , 𝐱 2 , … , 𝐱 𝑁 , u kterých
    předpokládáme že jsou generovaná nezávislé ze stejného rozložení
    (idependent, identically distributed - i.i.d.) 𝑝 𝐱|𝜼 popsaného parametry 𝜼
     – Např gaussovské rozložení s parametry 𝜼 = 𝜇, 𝜎 2
•   Maximálně věrohodným odhadem (Maximum Likelihood Estimate) jsou
                 𝜼𝑀𝐿 , které maximalizují funkci věrohodnosti:
    ty parametry ෝ
                                                              𝑁

      ෝ𝑀𝐿 = arg max 𝓛 𝜼 𝐗 = arg max 𝑝 𝐗 𝜼 = arg max ෑ 𝑝 𝐱 𝑛 𝜼
      𝜼
                   𝜼                     𝜼                𝜼
                                                              𝑛=1
•   V následujících příkladech předpokládáme, že odhadujeme parametry
    nezávisle pro jednotlivé třídy. Pro zjednodušení notace tedy u rozložení
    neuvádíme závislost na třídě ω, pouze na jejích parametrech 𝜼.
•   Modely rozložení kterými se budeme zabývat jsou:
     – Gaussovské rozloženi
     – Směs gaussovských rozložení (Gaussian Mixture Model, GMM)
     – V následujících přednáškách přibudou další (např. HMM)

## Page 25

Proč odhad s maximální věrohodností
• Použijme opět Bayesův vzorec, ale tentokrát na vyjádření toho, jak jsou
  které parametry rozložení 𝜂 pravděpodobné po tom co jsme vyděli
  trénovací data 𝐗
                                    𝑝 𝐗|𝜼 𝑝(𝜼)
                         𝑝(𝜼|𝐗) =
                                       𝑝(𝐗)

• 𝑝(𝐗) nezavysí na 𝜼 a je tedy pro dané 𝐗 konstanta
• 𝑝 𝜼 je apriorní rozložení parametrů: naše prvotní představa o tom jak
  jsou které parametry pravděpodobné než vidíme trénovací data.
• Uvážíme-li ignorantní prior 𝑝 𝜼 = 𝑘𝑜𝑛𝑠𝑡𝑎𝑛𝑡𝑎 (jakékoli parametry jsou
  pro nás stejně pravděpodobné) potom
                 arg max 𝑝 𝜼 𝐗 = arg max 𝑝 𝐗 𝜼
                     𝜼                 𝜼

  ⇒ maximálně věrohodný odhad jsou ty nejpravděpodobnější parametry!

## Page 26

Ještě jednou:
        Proč gaussovské rozložení?
 • Jednoduché a dobře se s ním pracuje
    – V logaritmické doméně je to jen kvadratická funkce
                   log 2𝜋𝜎 2   1                1          𝜇     𝜇 2
log𝒩 𝑥; 𝜇, 𝜎 2 = −           − 2 𝑥 − 𝜇 2 = − 2 𝑥2 + 2 𝑥 − 2 + 𝐾
                       2      2𝜎               2𝜎         𝜎     2𝜎
    – Věrohodnost množiny pozorování 𝐱 = 𝑥1 , 𝑥2 , 𝑥3 , … 𝑥𝑁 je

      𝑝 𝐱 𝜇, 𝜎 2 = 𝑝 𝑥1 , 𝑥2 , 𝑥3 , … 𝑥𝑁 𝜇, 𝜎 2 = ෑ 𝒩 𝑥𝑖 ; 𝜇, 𝜎 2
                                                           𝑖

   log 𝑝 𝐱 𝜇, 𝜎 2 = ෍ log 𝒩 𝑥𝑖 ; 𝜇, 𝜎 2 = ෍ log 𝒩 𝑥𝑖 ; 𝜇, 𝜎 2
                     𝑖                             𝑖
                     1    2   𝜇          𝜇2
                 = − 2 ෍ 𝑥𝑖 + 2 ෍ 𝑥𝑖 − 𝑁 2 + 𝑁𝐾
                    2𝜎       𝜎          2𝜎
                            𝑖                  𝑖

                                Postačující statistiky
                                 (Sufficient statistics)

## Page 27

ML odhad pro Gaussovku
arg max 𝑝 𝐱 𝜇, 𝜎 2 = arg max log 𝑝 𝐱 𝜇, 𝜎 2 = arg max ෍ log 𝒩 𝑥𝑛 ; 𝜇, 𝜎 2
  𝜇,𝜎2                 𝜇,𝜎 2                        𝜇,𝜎2
                                                            𝑛
                               1         𝜇          𝜇 2 log 2𝜋
                   = arg max − 2 ෍ 𝑥𝑛2 + 2 ෍ 𝑥𝑛 − 𝑁 2 −
                       𝜇,𝜎2   2𝜎        𝜎          2𝜎      2
                                          𝑛           𝑛
                                                 2
 𝜕                   𝜕    1         𝜇          𝜇   log 2𝜋
    log 𝑝 𝐱 𝜇, 𝜎 2 =    − 2 ෍ 𝑥𝑛2 + 2 ෍ 𝑥𝑛 − 𝑁 2 −
 𝜕𝜇                  𝜕𝜇  2𝜎        𝜎          2𝜎      2
                                  𝑛             𝑛

                     1                       1
                   = 2 ෍ 𝑥𝑛 − 𝑁𝜇 = 0 ⇒ 𝜇ො𝑀𝐿 = ෍ 𝑥𝑛
                    𝜎                        𝑁 𝑛
                           𝑛

                                                     Postačující statistiky
                                                      (Sufficient statistics)

                                  2
                                         1                1          2
                 and similarly: 𝜎ො𝑀𝐿 =     ෍ (𝑥𝑛 −𝜇ො𝑀𝐿 ) = ෍ 𝑥𝑛2 − 𝜇ො𝑀𝐿
                                                        2
                                         𝑁  𝑛             𝑁 𝑛

## Page 28

ML odhad pro Gaussovku

• Černé svislé čary představují trénovací vzory (pozorování)
• Červena gaussovka odpovídá maximálně věrohodnému odhadu
  maximum likelihood estimate
   – Násobek výšek červených teček bude největší možné číslo

## Page 29

Gaussovské rozložení
          (vícerozměrné)
               1              1
                             −2 𝐱−𝝁 𝑇 𝚺 −1 𝐱−𝝁
𝒩 𝐱; 𝝁, 𝚺 =              𝑒
              2𝜋 𝐷 |𝚺|

                         ML odhad of parametrů:

                        1
                     𝝁 = ෍ 𝐱𝑖
                        𝑇 𝑖
                        1
                     𝚺 = ෍ 𝐱i − 𝝁 𝐱i − 𝝁 𝑇
                        𝑇 𝑖

## Page 30

Diskrétní rozložení
                             𝑝 𝜔 𝝅 = Cat(𝜔|𝝅) = 𝜋𝜔

•   Např. k popisu apriorní pravděpodobnosti tříd

                   𝑝 𝜔𝝅 =        0.5        0.3       0.2

• Speciální binární případ je Bernoulliho rozložení
• 𝜔 ∈ š𝑣𝑒𝑠𝑡𝑘𝑎, 𝑗𝑎𝑏𝑙𝑘𝑜, 𝑔𝑟𝑎𝑛á𝑡
  nebo 𝜔 může být jednoduše index třídy 𝜔 ∈ {1,2, … , 𝐶}
• 𝝅 = 𝜋1 , 𝜋2 , … , 𝜋𝐶 - parametry rozložení jsou pravděpodobnosti tříd
• Věrohodnost trénovacích vzorů 𝝎 = 𝜔1 , 𝜔2 , … , 𝜔𝑁
                                                                𝑚
                𝑃 𝝎 𝝅 = ෑ Cat 𝜔𝑛 𝝅 = ෑ 𝜋𝜔𝑛 = ෑ 𝜋𝑐 𝑐
                             𝑛                 𝑛            𝑐

    kde 𝑚𝑐 je počet pozorování třídy 𝑐 (tedy čísla z naší tabulky)

## Page 31

ML odhad pro diskrétní rozložení
                                                          𝑁

arg max 𝑝 𝐱 𝝅 = arg max log 𝑝 𝐱 𝝅 = arg max log ෑ Cat 𝑥𝑛 |𝝅
   𝝅                  𝝅                      𝝅
                                                          𝑛=1
                                     𝑚
                = arg max log ෑ 𝜋𝑐 𝑐 = arg max ෍ 𝑚𝑐 log 𝜋𝑐
                      𝝅                       𝝅
                                 𝑐                    𝑐
Potřebujeme lagrangeovy multiplikátory 𝜆 pro zajičtění podminký σ𝑘 𝜋𝑘 = 1

     𝜕               𝜕                                             𝑚𝑐
        log 𝑝 𝐱 𝝅 =     ෍ 𝑚𝑘 log 𝜋𝑘 − 𝜆 ෍ 𝜋𝑘 − 1                 =    −𝜆 =0
    𝜕𝜋𝑐             𝜕𝜋𝑐                                            𝜋𝑐
                             𝑘                    𝑘

                                                                 𝜋2
                           𝑚𝑐 𝑚𝑐
                    ⇒ 𝜋𝑐 =   =                                        𝐶=3
                           𝜆   𝑁

                                                                            𝜋1
                                                                𝜋3

## Page 32

Gaussovský klasifikátor – 2D data
            •   Apriorní pravděpodobnosti tříd mohou byt ML
                odhadnuty jako poměry počtu příkladů

                               𝑁𝑐                      400
                      𝑃 𝑐 =           𝑃 𝑏𝑙𝑢𝑒 =
                              σ𝑘 𝑁𝑘                 400 + 600

            •   Probability density function for each class is
                assumed to be 2D Gaussian
                             𝑝 𝐱 𝑐 = 𝒩 𝐱; 𝝁𝑐 , 𝚺𝑐
                and its parameters ML estimated as
                        𝑁𝑐                𝑁𝑐
                     1              1
                𝝁𝑐 =    ෍ 𝐱 𝑐𝑛 𝚺𝑐 =    ෍ 𝐱 𝒄𝑛 − 𝝁𝑐 𝐱 𝑐𝑛 − 𝝁𝑐 𝑇
                     𝑁𝑐             𝑁𝑐
                       𝑛=1               𝑛=1
            •   Class posterior probability for new
                observations is obtained from the prior and
                class pdf-s using Bayes rule:
                                     𝑝 𝐱|𝑐 𝑃 𝑐
                          𝑃 𝑐|𝐱 =
                                   σ𝑘 𝑝 𝐱|𝑘 𝑃 𝑘

## Page 33

Gaussian classifier – more classes
             •   Class priors can be ML estimated as the
                 proportions of the example counts

                                 𝑁𝑐                 400
                        𝑃 𝑐 =           𝑃 𝑏𝑙𝑢𝑒
                                σ𝑘 𝑁𝑘            400 + 600

             •   Probability density function for each class is
                 assumed to be 2D Gaussian
                              𝑝 𝐱 𝑐 = 𝒩 𝐱; 𝝁𝑐 , 𝚺𝑐
                 and its parameters ML estimated as
                         𝑁𝑐                𝑁𝑐
                      1              1
                 𝝁𝑐 =    ෍ 𝐱 𝑐𝑛 𝚺𝑐 =    ෍ 𝐱 𝑐𝑛 − 𝝁𝑐 𝐱 𝑐𝑛 − 𝝁𝑐 𝑇
                      𝑁𝑐             𝑁𝑐
                        𝑛=1               𝑛=1
             •   Class posterior probability for new observations
                 is obtained from the prior and class pdf-s using
                 Bayes rule:
                                       𝑝 𝐱|𝑐 𝑃 𝑐
                            𝑃 𝑐|𝐱 =
                                     σ𝑘 𝑝 𝐱|𝑘 𝑃 𝑘

## Page 36

Směs gaussovských rozložení
 (Gaussian Mixture Model – GMM)

     𝑃 𝐱|Θ = ෍ 𝒩 𝐱; 𝝁𝑐 , 𝚺𝑐 𝑃𝑐
                𝑐

                    kde

                      Θ = {𝑃𝑐 , 𝝁𝑐 , 𝚺𝑐 }

                     ෍ 𝑃𝑐 = 1
                          𝑐

## Page 37

Směs gaussovských rozložení
     𝑃 𝐱 = ෍ 𝑝 𝐱 𝑐 𝑃(𝑐) = ෍ 𝒩 𝐱; 𝝁𝑐 , 𝚺𝑐 𝑃𝑐
                  𝑐                      𝑐
• Vzoreček můžeme chápat jen jako něco co definuje tvar
  funkce hustoty pravděpodobnosti…
• nebo jej můžeme vidět jako složitější generativní
  model,který generuje příznaky následujícím způsobem:
   – Napřed je jedna z gaussovských komponent vybrána tak aby
     respektovala apriorní pravděpodobnosti Pc
   – Příznakový vektor se generuje z vybraného gaussovského
     rozložení.
• Pro vyhodnoceni modelu ale nevíme, která komponenta
  příznakový vektor generovala a proto musíme
  marginalizovat (suma přes gaussovské komponenty
  násobené jejich “apriorními” pravděpodobnostmi)

## Page 38

Trénování GMM – Viterbi training
•   Intuitivní ale nepřesný iterativní algoritmus pro ML trénování GMM parametrů

## Page 39

Trénování GMM – Viterbi training
•   Intuitivní ale nepřesný iterativní algoritmus pro ML trénování GMM parametrů

•   Současným modelem klasifikujeme data
    jako kdyby by jednotlivé Gaussovky
    modelovaly různé třídy a váhy byly
    apriorní pravděpodobnosti tříd (přesto,
    že všechnadata patří do jedné třídy,
    kterou se snažíme modelovat).

## Page 40

Trénování GMM – Viterbi training
•   Intuitivní ale nepřesný iterativní algoritmus pro ML trénování GMM parametrů

•   Současným modelem klasifikujeme data
    jako kdyby by jednotlivé Gaussovky
    modelovaly různé třídy a váhy byly
    apriorní pravděpodobnosti tříd (přesto,
    že všechnadata patří do jedné třídy,
    kterou se snažíme modelovat).

•   Nové parametry každé Gaussovky
    odhadneme na datech k ní
    přiřazených v předchozím kroku.
    Nové váhy jsou dány poměry
    možství dat přiřazených Gausovkám.

## Page 41

Trénování GMM – Viterbi training
•   Intuitivní ale nepřesný iterativní algoritmus pro ML trénování GMM parametrů

•   Současným modelem klasifikujeme data
    jako kdyby by jednotlivé Gaussovky
    modelovaly různé třídy a váhy byly
    apriorní pravděpodobnosti tříd (přesto,
    že všechnadata patří do jedné třídy,
    kterou se snažíme modelovat).

•   Nové parametry každé Gaussovky
    odhadneme na datech k ní
    přiřazených v předchozím kroku.
    Nové váhy jsou dány poměry
    možství dat přiřazených Gausovkám.

•   Předchozí dva kroky opakujeme až
    do konvergence.

## Page 42

Trénování GMM – EM algorithm
 •   Expectation Maximization je iterativní algoritmus pro trénování různých
     generativních modelů se skrytými proměnnými (latent or hidden variables),
     jehož kazdá iterace vede ke zvýšení věrohodnosti (likelihood) trenovacích
     dat. Nezaručuje ale nalezení globalního optima.
 •   Zde ukazujeme pouze výsledek aplikace EM na trénování GMM.
 •   Algoritmus je podobny předchozímu Viterbi trénování, s tím rozdílem, že
     (místo tvrdých přiřazení) jsou data Gaussovkám přiřazena “měkce” pomocí
     vah – posteriorních pravděpodobností 𝑃 𝑐|𝐱 𝑖 spočítaných současným
     modelem. Parametry 𝝁𝑐 , 𝚺𝑐 jsou potom pocítány pomocí váhovaných
     (namísto prostých) průměrů.
                     (𝑜𝑙𝑑)     (𝑜𝑙𝑑)     (𝑜𝑙𝑑)
         𝒩 𝐱𝑖 ; 𝝁𝑐           , 𝚺𝑐       𝑃𝑐
                                     𝑝 𝐱𝑖 |𝑐 𝑃(𝑐)
𝛾𝑐𝑖 =                             =                 = 𝑃 𝑐|𝐱 𝑖
      σ 𝒩 𝐱 ;𝝁(𝑜𝑙𝑑) (𝑜𝑙𝑑)
                   ,𝚺     𝑃
                            (𝑜𝑙𝑑)   σ𝑘 𝑝 𝐱𝑖 |𝑘 𝑃(𝑘)
         𝑘       𝑖    𝑘             𝑘        𝑘

  𝑛𝑒𝑤        1                                        𝑛𝑒𝑤      σ𝑖 𝛾𝑐𝑖
𝝁𝑐       =        ෍ 𝛾𝑐𝑖 𝐱𝑖                       𝑃𝑐         =
           σ𝑖 𝛾𝑐𝑖  𝑖                                          σ𝑘 σ𝑖 𝛾𝑘𝑖

   𝑛𝑒𝑤        1
 𝚺c       =        ෍ 𝛾𝑐𝑖 𝐱i − 𝝁𝑐 𝐱i − 𝝁𝒄 𝑇
            σ𝑖 𝛾𝑐𝑖  𝑖
