---
title: "lin klasifikatory"
source_url: https://www.fit.vut.cz/study/course/SUR/public/prednasky/IKR/04_lin_klasifikatory/lin_klasifikatory.pdf
raw_path: raw/sur-prednasky/IKR/04_lin_klasifikatory/lin_klasifikatory.pdf
format: pdf
generated: 2026-05-11
---

# lin klasifikatory

- Source: [lin_klasifikatory.pdf](../../../../raw/sur-prednasky/IKR/04_lin_klasifikatory/lin_klasifikatory.pdf)
- URL: https://www.fit.vut.cz/study/course/SUR/public/prednasky/IKR/04_lin_klasifikatory/lin_klasifikatory.pdf

## Page 1

Klasifikace a rozpoznávání

     Lineární klasifikátory

## Page 2

Opakování - Skalární součin
             ∙        ¸                ∙        ¸
                 x1                        w1
       x=                  w=
                 x2                        w2
                               ∙           ¸
   T
         £                 ¤       x1
  w x=       w1       w2                       = w1 x1 + w2 x2
                                   x2
                      x
                                                w
                               .

                           T x
                           w       |
                               | w

## Page 3

Lineární klasifikátor
                  y(x) = wT x + w0

Vyber třídu C1 pokud y(x) > 0 a jinak vyber třídu C2

          Zobecněný lineární klasifikátor
                y(x) = f (wT x + w0 )

         kde f se nazývá aktivační funkce

## Page 4

Lineární klasifikátor
      y=0
            y>0
                                        y(x) = wT x + w0
     y<0               x
                                       wT x    w0    y(x)
                                       |w| = − |w| + |w|

                        ( x)
x2                     y |         w
                         |w .
             w0 |
            − |w
                    T x
                  w       |
                      | w

                              x1

## Page 5

Perceptron
•   Jednoduchý lineární klasifikátor s aktivační funkcí:

•   Samotná aktivační funkce v tomto případě nic nezmění –
    rozhodování na základě y(x) > 0 by vedlo ke stejnému výsledku –
    ale pro učící se algoritmus bude výhodné definovat si požadovaný
    výstup jako:

•   Pro další zjednodušení předpokládejme, ze w0 je “nultý” koeficient
    vektoru w a odpovídající vstup x0 je vždy 1. Můžeme tedy psát
    pouze:
                            y(x) = f (wT x)

## Page 6

Perceptron – učící algoritmus
• Cyklicky procházej jednotlivé trénovací vzory a vždy
  když narazíš na špatně klasifikovaný vzor kde

                      y(xn ) 6= tn
  změň vektor w takto:
                     τ +1       τ
                 w          = w + xn tn
• Lze dokázat, že pokud jsou data lineárně separovatelná,
  tak, algoritmus vždy nalezne řešení – konverguje. V
  opačném případě, ale nikdy nekonverguje

## Page 8

Perceptron
•   Ale které řešení je to správné?   •   Algoritmus konverguje v méně
•   Řešení, které poskytne učící          než (R/D)2 krocích
    algoritmus perceptronu záleží
    na inicializaci – počátečním w

                                                             R
                                                                         Nejvzdálenější
                                                       D                 bod od počátku

                                                                         SVM řešení

## Page 9

Opakování - MAP klasifikátor
• Mějme 2 třídy C1 a C2
  – Pro daný příznak x vyber třídu C s větší posteriorní
    pravděpodobností P(C|x)
  – Vyber C1 pouze pokud:
                 P (C1 |x) > P (C2 |x)
        P (x|C1 )P (C1 )   P (x|C2 )P (C2 )
             P (x)       >      P (x)
         ln P (x|C1 )P (C1 ) > ln P (x|C2 )P (C2 )

          ln PP (x|C 1 )P (C1 )
                (x|C2 )P (C2 )
                                >0

## Page 10

Pravděpodobnostní generativní model
• Modelujme rozložení tříd gaussovskym rozložením:

• Pokud náš model omezíme tak, ze každá třída má svou
  střední μi hodnotu, ale kovarianční matice Σ je společná
  pro obě třídy, tak můžeme psát:

         y(x) = ln PP (x|C 1 )P (C1 )
                      (x|C2 )P (C2 )  = w T
                                            x + w0
  kde

## Page 12

Maximum likelihood odhad parametrů
 • Hledáme parametry modelu
                                                                      Y
{μ1 , μ2 , Σ, P (C1 ), P (C2 )} = arg             max                     p(xi |μti , Σ)P (Cti )
                                        {μ1 ,μ2 ,Σ,P (C1 ),P (C2 )}
                                                                      i

   kde ti je třída do které patří vzor xi a μti je střední hodnota
   této třídy
 • Řešením jsou :
      – střední hodnoty spočítané z dat jednotlivých tříd
      – Kovarianční matice, která je váhovaným průměrem
        kovariančních matic spočtených z dat jednotlivých tříd

## Page 13

•   V případě kdy ovšem naše data nerespektují předpoklad gaussovských
    rozložení a sdílené kovarianční matice. Klasifikátor může selhat – fialová
    rozhodovací linie
•   Lepší výsledky dostaneme s diskriminativně natrénovaným klasifikátorem,
    který bude vysvětlen později – zelená rozhodovací linie

## Page 14

Opakování LDA
•   Snažíme se data
    promítnout do takového
    směru, kde
     – Maximalizujeme
       vzdálenost mezi středními
       hodnotami tříd
     – Minimalizujeme
       průměrnou varianci tříd
•    Maximalizujeme tedy

•   Pro dvě třídy je w totožné s tím které jsme obdrželi pro náš
    generativní klasifikátor.
•   Generativní klasifikátor ovšem zvolí i práh w0

## Page 15

Generativní model a zobecněny
     lineární klasifikátor
Nyní použijme zobecněný lineární klasifikátor
     y(x) = σ(wT x + w0 )

kde stále platí, že
 wT x + w0 = ln PP (x|C 1 )P (C1 )
                   (x|C2 )P (C2 )

a kde aktivační funkce je logistická sigmoida

Potom lze hodnotu tohoto zobecněného linearního
klasifikátoru přímo interpretovat jako posteriorní
pravděpodobnost třídy C1

## Page 17

Jiné generativní lineární klasifikátory
•   Lineární klasifikátor dostaneme nejen pro gaussovské rozložení, ale
    pro celou třídu rozložení s exponencialní rodiny, které lze zapsat v
    následující formě:

    kde vektor λk má každá třída svůj vlastní, zatím co parametr s je
    sdíleny všemi třídami

## Page 18

Nelineární mapování vstupního vektoru
•   Nelze-li původní data lineárně oddělit, možná pomůže jejich nelineární
    transformace do potenciálně vysocerozměrného prostoru – hlavní myšlenka
    „kernel methods“ které budou vysvětleny příště
•   V našem příkladu pomohlo i mapování dvourozměrných dat do dvou
    gaussovských funkcí

## Page 19

Lineární logistická regrese
•   Uvažujme opět pravděpodobnostní model

                          p(C1 |x) = y(x) = σ(wT x)
  kde opět pro zjednodušení x0 je vžy 1 a nemusíme tedy explicitně
  zavádět w0.
• Nyní ale budeme parametry w odhadovat přímo tak abychom
  maximalizovali pravděpodobnost, že všechna trénovací data budou
  rozpoznána správně                Y         Y
                                p(t|X) =           y(xn )          (1 − y(xn ))
                                            n∈C1            n∈C2
    Kde t je vektor korektních identit tříd ti pro jednotlivé vstupní vektory xn. Pro
    zjednodušení zápisu předpokládejme, že tn = 1, pokud xn paří do třídy C1 a
    tn = 0 pokud xn paří do třídy C2.Potom muzeme psát
                                             Y
                                 p(t|X) =         yntn (1 − yn )1−tn
                                              n

## Page 20

Lineární logistická regrese – odhad
             parametrů
•   Lépe se nám bude pracovat s logaritmem naší objektivní funkce,
    což je chybová funkce známo jako vzájemná entropie

•   Hledáme minimum této funkce, takže derivujeme abychom dostali
    gradient                 XN
                    ∇E(w) =          (yn − tn )xn
                               n=1

•   Pokud najdeme parametry w pro které je gradient nulový, našli jsme
    optimum chybové funkce. To však není snadné nalézt analyticky.
    Budeme řešit nymericky, např pomocí gradient descent

## Page 21

Lineární logistická regrese – odhad
             parametrů
•   Rychlejší konvergenci dosáhneme pomocí Newton-Raphson
    optimalizace:
     – Kolem stávajícího řešení w(old) aproximujeme chybovou funkci ∇E
       pomoci Taylorova rozvoje druhého řádu, čímž obdržíme kvadratickou
       formu (vícerozměrné zobecnění kvadratické funkce).
     – Jako nové řešení zvolíme to, kde má tato kvadratická forma minimum.

    kde H = XT R X je matice druhých derivací (Hessian matrix).

              w(new) = w(old) − (XT RX)−1 XT (y − t)

    R je diagonální matice s hodnotami na diagonále:

## Page 22

Problém s více třídami
• Klasifikace
   – jeden proti všem
   – Každý s každým

## Page 23

Lineární klasifikátor – více tříd
• Nejlépe je mít jednu lineární funkci pro každou třídu k

• Vyber třídu s největším yk(x)
• Rozhodovací linie je opět lineární dána

• Kde k a j jsou dvě nejpravděpodobnější třídy pro dané x
• Pro dvě třídy řešení degraduje k tomu co už jsme viděli

## Page 24

Více tříd – generativní model
