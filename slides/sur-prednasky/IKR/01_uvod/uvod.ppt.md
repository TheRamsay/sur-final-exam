---
title: "uvod"
source_url: https://www.fit.vut.cz/study/course/SUR/public/prednasky/IKR/01_uvod/uvod.ppt
raw_path: raw/sur-prednasky/IKR/01_uvod/uvod.ppt
format: ppt
generated: 2026-05-11
---

# uvod

- Source: [uvod.ppt](../../../../raw/sur-prednasky/IKR/01_uvod/uvod.ppt)
- URL: https://www.fit.vut.cz/study/course/SUR/public/prednasky/IKR/01_uvod/uvod.ppt
- Note: extracted from legacy binary PowerPoint; slide layout and images are not preserved.

## Text block 1

http://speech.fit.vutbr.cz/lid-demo/

## Text block 3

https://www.superlectures.com/odyssey2016/

## Text block 5

https://www.superlectures.com/barcampbrno2015/

## Text block 7

https://www.youtube.com/watch?v=Nuzmo0My7m4

## Text block 9

http://pjreddie.com/darknet/yolo/

## Text block 11

https://www.youtube.com/watch?v=VOC3huqHrss

## Text block 13

https://www.youtube.com/watch?v=Khuj4ASldmU

## Text block 15

http://speech.fit.vutbr.cz/lid-demo/

## Text block 17

https://www.superlectures.com/odyssey2016/

## Text block 19

https://www.superlectures.com/barcampbrno2015/

## Text block 21

https://www.youtube.com/watch?v=pW6nZXeWlGM

## Text block 23

https://www.youtube.com/watch?v=Nuzmo0My7m4

## Text block 25

http://pjreddie.com/darknet/yolo/

## Text block 27

https://www.youtube.com/watch?v=VOC3huqHrss

## Text block 29

https://www.youtube.com/watch?v=Khuj4ASldmU

## Text block 31

___PPT12

## Text block 32

___PPT9

## Text block 40

Klasifikace a rozpoznávání

## Text block 41

Úvod do problematiky

## Text block 42

Zpracovaní Řeči

## Text block 43

Web-based LID
http://speech.fit.vutbr.cz/lid-demo/
Web-based Lecture Browser
https://www.superlectures.com/odyssey2016/
https://www.superlectures.com/barcampbrno2015/

## Text block 44

Detekce obličeje a výrazu

## Text block 45

detekce obličeje
skenování obrazu AdaBoost klasifikátorem (klasifikace výřezů na obsahuje obličej/neobsahuje obličej)
Parametrizace výřezu pomocí Haarových vlnek, o kterých bude řeč určitě v 12
Rozpoznávání výrazů
pomocí podobných kasfikátorů, jako pro detekci 4 výrazy = 4 binár klasifikátory, každý rozhoduje mezi jedním výrazem a ostatními. Odezvy klasifikátorů jsou spojeny.
Detekce obličeje – druhé demo
ukázka aplikace v dohledových systémech
- na detekci by navazovalo například rozpoznávání osob podle obličeje (hledání vrahů, teroristů, a opozičních živlů)

## Text block 46

___PPT9

## Text block 47

Deep Learning

## Text block 48

___PPT9

## Text block 49

Variace na téma: Convoluční neuronová sítě
Rozpoznávání postoje
https://www.youtube.com/watch?v=pW6nZXeWlGM
Změna identity obličeje:
https://www.youtube.com/watch?v=Nuzmo0My7m4
Realtime detekce objektů v obraze
http://pjreddie.com/darknet/yolo/
https://www.youtube.com/watch?v=VOC3huqHrss
Přenesení uměleckého stylu mezi obrázky
https://www.youtube.com/watch?v=Khuj4ASldmU

## Text block 50

___PPT9

## Text block 51

Popis obrázku z popisu

## Text block 52

___PPT9

## Text block 53

Convoluční a rekuretni neuronove sítě
Andrej Karpathy, Li Fei-Fei:
Deep Visual-Semantic Alignments for Generating Image Descriptions

## Text block 54

___PPT9

## Text block 55

Generovaní obrázku z popisu

## Text block 56

___PPT9

## Text block 57

Generative Adversal Neural Networks
Han Zhang, Tao Xu, Hongsheng Li, Shaoting Zhang, Xiaolei Huang, Xiaogang Wang, Dimitris N. Metaxas:
StackGAN: Text to Photo-realistic Image Synthesis with Stacked Generative Adversarial Networks.

## Text block 58

Jak takový klasifikátor pracuje?

## Text block 59

Snímání

## Text block 60

Co se dá o rozpoznávaných předmětech zjistit?
obraz, tlak, teplota, hmotnost, zvuk, pach ?
jak tyto veličiny prakticky získat, jde to vůbec a kolik to bude stát ?
jaké vlastnosti bude mít snímač a převod veličinačíslo ?
šum
linearita
kalibrace
stárnutí
atd.

## Text block 61

Segmentace a seskupování

## Text block 62

Rozpoznávané vzorky by mely byt izolované a neměly by s překrývat…ale to často neplatí:

## Text block 63

Segmentace a seskupování

## Text block 64

Příklady:
Při rozpoznávání řeči se signál rozdělí do krátkých úseků fixní délky, které jsou nejprve zpracovávaný samostatně a teprve později začne klasifikátor uvažovat tyto segmenty v kontextu segmentů okolních

## Text block 65

V předchozí demonstraci jsme viděli, že se v obraze nejprve detekuje obličej pomocí spousty jednoduchých klasifikátorů soustředících se na různé oblasti v obraze. Na detekovaný obličej byla poté aplikována detekce výrazu v obličeji

## Text block 66

Extrakce příznaků

## Text block 67

Příznaky musí umožnit rozlišovat mezi třídami  musí být diskriminativní.
Předzpracování vstupu do následujícího klasifikátoru
Redukce dimenzí
Invariance vůči:
translace (mÍsto v obrázku, čas v řeči)
rotace
scale (velikost v obrázku, volume v řeči)
occlusion (zakrytí objektu vs. Maskování šumem)
projective distorition (úhel pohledu, optika)
rate (rychlost v řeči - intra- a inter-speaker variabilita)
deformace
atd.
Dekorelace…ale o tom ještě bude řeč v samostatné přednášce o příznacích.

## Text block 68

Extrakce příznaků

## Text block 69

Bude průměr jablka / granátu dobrým příznakem?

## Text block 70

 Průměr [mm]

## Text block 71

 Četnost

## Text block 72

 Podíl červené barvy [%]

## Text block 73

Extrakce příznaků

## Text block 74

Granáty
Jablka

## Text block 75

 Četnost [mm]

## Text block 76

 Podíl červené barvy [%]

## Text block 77

Nic moc, ale alespoň trochu lepší

## Text block 78

Intuitivně už bychom mohli začít rozpoznávat, nastavením prahu tak aby bylo co nejvíce vzorů, které jsme zatím viděli rozpoznáno správně

## Text block 79

Extrakce příznaků

## Text block 80

 Četnost

## Text block 81

 Váha [dkg]

## Text block 82

Granáty
Jablka

## Text block 83

Když se tak díváme na histogramy příznaků, asi nás budou pro rozpoznávání zajímat jejich pravděpodobnostní rozložení …ale to už zase předbíháme.

## Text block 84

Vícerozměrné příznaky

## Text block 85

Co když se podíváme na váhu a podíl červené barvy současně. Pro rozpoznávání to tady vypadá už docela nadějně. Tak hurá na to.

## Text block 86

 Váha [dkg]

## Text block 87

 Podíl červené barvy [%]

## Text block 88

U jablek je váha korelovaná s červeností

## Text block 89

Granáty
Jablka

## Text block 90

Klasifikace

## Text block 91

O co nám jde je najít vhodnou rozhodovací linii (decision boundary) přece oddělit vzorky jedné třídy od druhé.

## Text block 92

…to se nám to krásně povedlo…ale možná to nebude to pravé

## Text block 93

Generalizace

## Text block 94

V našem přikladu byly data náhodně vygenerovány z gaussovského rozložení. Pokud si takových dat „nasbíráme“ víc, už s našim výsledkem nebudeme tak spokojeni. Systém negeneralizuje na nová data.

## Text block 95

Lineární klasifikátor

## Text block 96

Bohužel, rozpoznávání z takto vybraných příznaku nebude nikdy bez chyb, protože jejich rozložení se překrývají. Budeme tuto chybu chtít alespoň minimalizovat

## Text block 97

Omezeni schopnosti detailně modelovat rozhodovací línii vedlo ke zlepšení generalizace. Oddělení tříd prostou přímkou nebo obecně hyper-rovinou teď vypadá o mnoho přijatelněji. O tom jak takovou rovinu určit bude samostatná přednáška.

## Text block 98

Lineární klasifikátor

## Text block 99

V příští přednášce si ukážeme, že pro tento případ, kdy mají jednotlivé třídy gaussovské rozložení, dosáhneme nejlepší úspěšnosti při oddělení tříd kvadratickou křivkou.

## Text block 100

Bude klasifikován jako granát

## Text block 101

Klasifikátor založený na
K-nejbližších sousedech

## Text block 102

“Neparametricky klasifikátor”  nemá žádné parametry, které by bylo potřeba trénovat či odhadovat.
Klasifikátor si pamatuje všechna “trénovací data“.
K nově klasifikovanému vzoru najde K nejbližších vzorů z trénovacích dat a vybere tu třídu, která je ve vybraných vzorech nejčastěji zastoupena.

## Text block 103

 Červenost

## Text block 104

 Váha

## Text block 105

Granáty
Jablka

## Text block 106

Můžu ale vůbec rovnávat váhu s červeností?
Prvně bude potřeba obě veličiny normalizovat – převézt do srovnatelného dinamického rozsahu

## Text block 107

1-nejbližší soused

## Text block 108

Opět problém z generalizací – podobná klikatá rozhodovací hranice.

## Text block 109

3-nejbližší sousedé

## Text block 110

O něco lepší výsledek. Zvýšení „počtu sousedů“ vede k vyhlazení rozhodovací hranice, přestože jsme model nijak nezjednodušili. Zde by se dalo mluvit o obdobě regularizace (viz další přednášky)

## Text block 111

9-nejbližších sousedů

## Text block 112

Rozhodovací linie už je dosti podobná optimální kvadratické křivce

## Text block 113

9-nejbližších sousedů
měkké rozhodnutí

## Text block 114

Místo tvrdého rozhodnutí můžeme použít poměr mezi počtem sousedů z různých tříd jako „měkké“ měřítko důvěry (confidence), že vzor patří do té či oné třídy (pro K=9 máme pouze 10 úrovní).

## Text block 115

31-nejbližších sousedů
měkké rozhodnutí

## Text block 116

Post-processing

## Text block 117

Závislé na konkrétním úkolu.
Využití dalších kontextových informací jiných než je samotný vzor
Pokud je výstupem klasifikátoru měkké rozhodnutí, post-processing se může přiklonit jedné variantě než té s nejlepším skóre:
např. integrace apriorní pravděpodobnosti (viz další přednáška)
Můžeme brát v úvahu ceny jednotlivých rozhodnutí. Co nás bolí víc? Poslat jablko pyrotechnikovi nebo granát do marmeládovny.
Rozhodnutí pro konkrétní třídu pokud její skóre překročí jistý práh  Detekční úloha

## Text block 118

Identifikace vs. detekce

## Text block 119

Identifikace vyber jednu z N možných tříd
V příchozích vzorech detekuj ty, které paří do třídy, kterou hledáme.
Vzory, které detekovat nechceme nemusí patřit do omezeného tříd (např. v telefonních hovorech hledáme hlas konkrétního mluvčího mezi hlasy všech možný mluvčích)
Detekci proveď na základě měkkého rozhodnuti – skóre – a nastaveného prahu.
Detekční práh je možné měnit podle požadované aplikace:
Práh nastavený nízko  Hodně detekcí ale také hodně planých poplachů
Práh nastavený vysoko  opačný problém

## Text block 120

Detection tradeoff (DET) křivka

## Text block 121

The Design Cycle

## Text block 122

Data collection
Feature Choice
Model Choice
Training
Evaluation
Computational Complexity

## Text block 123

Data Collection
How do we know when we have collected an adequately large and representative set of examples for training and testing the system?
Feature Choice
Depends on the characteristics of the problem domain. Simple to extract, invariant to irrelevant transformation insensitive to noise.
Model Choice
Unsatisfied with the performance of our fish classifier and want to jump to another class of model
Training
Use data to determine the classifier. Many different procedures for training classifiers and choosing models
Evaluation
Measure the error rate (or performance and switch from one set of features to another one

## Text block 124

The Design Cycle

## Text block 125

Learning and Adaptation

## Text block 126

Supervised learning
A teacher provides a category label or cost for each pattern in the training set
Unsupervised learning
The system forms clusters or “natural groupings” of the input patterns
Reinforcement learning
A teacher only say whether the classifier is correct or not on a training data.

## Text block 127

k_nearest_neighbours in Matlab

## Text block 128

function [output_class score]=k_nearest_neighbours(test_data, class1_examples, class2_examples, k)
euclidean_distances=dist([class1_examples class2_examples], test_data);
[v i]=sort(euclidean_distances);
score = sum(i(1:k,:) > size(class1_examples,1)) / k;
output_class = score > 0.5;
