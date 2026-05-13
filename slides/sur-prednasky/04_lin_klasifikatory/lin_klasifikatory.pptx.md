---
title: "lin klasifikatory"
source_url: https://www.fit.vut.cz/study/course/SUR/public/prednasky/04_lin_klasifikatory/lin_klasifikatory.pptx
raw_path: raw/sur-prednasky/04_lin_klasifikatory/lin_klasifikatory.pptx
format: pptx
generated: 2026-05-11
---

# lin klasifikatory

- Source: [lin_klasifikatory.pptx](../../../raw/sur-prednasky/04_lin_klasifikatory/lin_klasifikatory.pptx)
- URL: https://www.fit.vut.cz/study/course/SUR/public/prednasky/04_lin_klasifikatory/lin_klasifikatory.pptx

## Slide 1

Strojové učení a rozpoznávání

Lineární klasifikátory

Luk áš   Burget

![https://www.vutbr.cz/data_storage/multimedia/jvs/loga/02_fakulty/FIT/1-zakladni/EN/PNG/FIT_color_RGB_EN.png](../_media/04_lin_klasifikatory/lin_klasifikatory/ppt/media/image1.png "Picture 2")

Duben  2026

## Opakování - Skalární součin

.

## Lineární klasifikátor

Zobecněný lineární klasifikátor

## Lineární klasifikátor

## Perceptron

![](../_media/04_lin_klasifikatory/lin_klasifikatory/ppt/media/image2.wmf "Picture 4")

![](../_media/04_lin_klasifikatory/lin_klasifikatory/ppt/media/image3.wmf "Picture 10")

## Perceptron – učící algoritmus

## Slide 7

![](../_media/04_lin_klasifikatory/lin_klasifikatory/ppt/media/image4.wmf "Picture 6")

## Perceptron

![](../_media/04_lin_klasifikatory/lin_klasifikatory/ppt/media/image4.wmf "Picture 4")

![](../_media/04_lin_klasifikatory/lin_klasifikatory/ppt/media/image4.wmf "Picture 14")

D

R

Nejvzdálenější bod od počátku

SVM řešení

Algoritmus konverguje v méně než  ( R /D) 2  krocích

## Opakování - MAP klasifikátor

## Pravděpodobnostní generativní model

## Slide 11

![](../_media/04_lin_klasifikatory/lin_klasifikatory/ppt/media/image5.jpeg "Picture 4")

## M aximum likelihood   odhad parametrů

## Slide 13

V případě kdy ovšem naše data nerespektují předpoklad gaussovských rozložení a sdílené kovarianční matice. Klasifikátor může selhat – fialová rozhodovací linie

Lepší výsledky dostaneme s diskriminativně natrénovaným klasifikátorem, který bude vysvětlen později – zelená rozhodovací linie

![](../_media/04_lin_klasifikatory/lin_klasifikatory/ppt/media/image6.wmf "Picture 4")

## Opakování LDA

![](../_media/04_lin_klasifikatory/lin_klasifikatory/ppt/media/image24.png "Picture 5")

![](../_media/04_lin_klasifikatory/lin_klasifikatory/ppt/media/image25.wmf "Picture 9")

![](../_media/04_lin_klasifikatory/lin_klasifikatory/ppt/media/image28.png "Picture 10")

Snažíme se data promítnout do takového směru, kde

 Maximalizujeme vzdálenost mezi středními hodnotami tříd

 Minimalizujeme průměrnou varianci tříd

 Maximalizujeme tedy

![](../_media/04_lin_klasifikatory/lin_klasifikatory/ppt/media/image29.png "Picture 13")

![](../_media/04_lin_klasifikatory/lin_klasifikatory/ppt/media/image30.wmf "Picture 14")

## Generativní model a zobecněny lineární klasifikátor

## Jiné generativní lineární klasifikátory

![](../_media/04_lin_klasifikatory/lin_klasifikatory/ppt/media/image41.wmf "Picture 4")

## Problém s více třídami

Klasifikace

jeden proti všem

Každý s každým

![](../_media/04_lin_klasifikatory/lin_klasifikatory/ppt/media/image46.png "Picture 4")

## Lineární klasifikátor – více tříd

![](../_media/04_lin_klasifikatory/lin_klasifikatory/ppt/media/image47.wmf "Picture 4")

![](../_media/04_lin_klasifikatory/lin_klasifikatory/ppt/media/image48.png "Picture 7")

![](../_media/04_lin_klasifikatory/lin_klasifikatory/ppt/media/image49.wmf "Picture 8")

## Gaussovský lineární klasifikátor pro více tříd

funkce

softmax

Konstanta ,  která nezáleží na třídě. Vykrátila by se ve funkci softmax a tedy ji nemusíme vůbec počítat

## Odvození

## Softmax   funkce

Funkce vrací vektor hodnot

( pravděpodobností )

Vstupem softmax funkce je vektor

Převede  vector  logaritmu nenormalizovaných pravděpodobností tříd na   pravděpodobnosti tříd

## Gaussovský lineární klasifikátor pro více tříd  II

## Lineární logistická regrese   pro více tříd

## Lineární logistická regrese  – II.

## Lineární logistická regrese  – III.

## M etod a  gradientního sestupu

## softmax   pro  2  třídy

## Lineární logistická regrese  –  2 třídy

## Lineární logistická regrese  –  2 třídy – II.

## Lineární logistická regrese  –  2 třídy – III.

## M etod a  gradientního sestupu

![](../_media/04_lin_klasifikatory/lin_klasifikatory/ppt/media/image68.png "Picture 7")

![](../_media/04_lin_klasifikatory/lin_klasifikatory/ppt/media/image75.png "Content Placeholder 3")

## Lineární logistická regrese :   odhad parametrů

## L ogistická regrese  –  příklad

![](../_media/04_lin_klasifikatory/lin_klasifikatory/ppt/media/image91.png "Picture 2")

![](../_media/04_lin_klasifikatory/lin_klasifikatory/ppt/media/image92.png "Picture 4")

## Regularizace parametrů

## Slide 35

![](../_media/04_lin_klasifikatory/lin_klasifikatory/ppt/media/image93.png "Picture 2")

![](../_media/04_lin_klasifikatory/lin_klasifikatory/ppt/media/image94.png "Picture 4")

![](../_media/04_lin_klasifikatory/lin_klasifikatory/ppt/media/image95.png "Picture 6")

![](../_media/04_lin_klasifikatory/lin_klasifikatory/ppt/media/image96.png "Picture 8")

## Nelineární mapování vstupního vektoru

Nelze-li původní data lineárně oddělit, možná pomůže jejich nelineární transformace do potenciálně vysocerozměrného prostoru – hlavní myšlenka „kernel methods“ které  budou vysvětleny příště

V našem příkladu pomohlo i mapování dvourozměrných dat do dvou gaussovských funkcí

![](../_media/04_lin_klasifikatory/lin_klasifikatory/ppt/media/image97.wmf "Picture 4")

## Lineární logistická regrese: nelineární klasifikace

![](../_media/04_lin_klasifikatory/lin_klasifikatory/ppt/media/image101.png "Picture 2")
