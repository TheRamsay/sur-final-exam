---
title: "extrakce priznaku"
source_url: https://www.fit.vut.cz/study/course/SUR/public/prednasky/03_extrakce_priznaku/extrakce_priznaku.pptx
raw_path: raw/sur-prednasky/03_extrakce_priznaku/extrakce_priznaku.pptx
format: pptx
generated: 2026-05-11
---

# extrakce priznaku

- Source: [extrakce_priznaku.pptx](../../../raw/sur-prednasky/03_extrakce_priznaku/extrakce_priznaku.pptx)
- URL: https://www.fit.vut.cz/study/course/SUR/public/prednasky/03_extrakce_priznaku/extrakce_priznaku.pptx

## Klasifikace a rozpoznávání

Extrakce příznaků

## Extrakce příznaků - parametrizace

Poté co jsme ze snímače obdržely data která jsou relevantní pro naši klasifikační úlohu, je potřeba je přizpůsobit potřebám rozpoznávače

Klasifikátory mají rády parametry které jsou:

Gaussovského rozložení (většinou vícerozměrného)

Nekorelované

Nízkodimenzionální

## Příklad parametrizace pro 2D vstupní vektory

![](../_media/03_extrakce_priznaku/extrakce_priznaku/ppt/media/image1.wmf "Picture 2")

Mějme vzorky (příklady) 2D rozložení pro dvě třídy.

## Příklad parametrizace pro 2D vstupní vektory

![](../_media/03_extrakce_priznaku/extrakce_priznaku/ppt/media/image2.wmf "Picture 2")

Rozložení není příliš gau s sovské.

Provedeme třetí odmocninou obou koeficientů.

## Příklad parametrizace pro 2D vstupní vektory

![](../_media/03_extrakce_priznaku/extrakce_priznaku/ppt/media/image3.wmf "Picture 2")

Prostor se komprimuje – nelineárně deformuje...

## Příklad parametrizace pro 2D vstupní vektory

![](../_media/03_extrakce_priznaku/extrakce_priznaku/ppt/media/image4.wmf "Picture 2")

... a rozložení pro každou třídu je nyní gaussovské.

Koeficienty jsou ale korelované.

Je vhodné prostor otočit tak aby se koeficienty dekorelovaly.

## Příklad parametrizace pro 2D vstupní vektory

![](../_media/03_extrakce_priznaku/extrakce_priznaku/ppt/media/image5.wmf "Picture 2")

Nyní jsou koeficienty dekorelovány.

Svislá dimenze je navíc zbytečná, protože třídy se v ní zcela překrývají.

## Gauss ovské rozložení  ( jednorozměrné )

![](../_media/03_extrakce_priznaku/extrakce_priznaku/ppt/media/image6.wmf "Picture 50")

ML odhad parametrů (Trénování):

Evaluation:

## Gaussovské rozložení ( vícerozměrné )

![gauss2](../_media/03_extrakce_priznaku/extrakce_priznaku/ppt/media/image7.wmf "Picture 45")

ML odhad of parametrů:

## Plná a diagonální kovarianční matice

![](../_media/03_extrakce_priznaku/extrakce_priznaku/ppt/media/image8.wmf "Picture 4")

![](../_media/03_extrakce_priznaku/extrakce_priznaku/ppt/media/image9.wmf "Picture 5")

![](../_media/03_extrakce_priznaku/extrakce_priznaku/ppt/media/image10.wmf "Picture 11")

![](../_media/03_extrakce_priznaku/extrakce_priznaku/ppt/media/image11.wmf "Picture 12")

## Diagonální kovarianční matice

## Diagonální kovarianční matice

Koeficienty x i  příznakového vektoru  x  jsou statisticky nezávislé.

## Diagonální kovarianční matice

![](../_media/03_extrakce_priznaku/extrakce_priznaku/ppt/media/image12.wmf "Picture 12")

## Skalární součin

## Rotace vektoru

## Projekce vektoru

## Vlastní čísla a vektory

## Slide 18

## Slide 19

## Analýza hlavních komponent

![](../_media/03_extrakce_priznaku/extrakce_priznaku/ppt/media/image15.wmf "Picture 3")

(Principal Component Analysis - PCA)

## Analýza hlavních komponent

![](../_media/03_extrakce_priznaku/extrakce_priznaku/ppt/media/image16.png "Picture 4")

Umožňuje:

Dekorelaci – vlastní vektory kovarianční matice definuji souřadný systém ve kterých jsou data dekorelována – mají diagonální kovarianční matici

Redukci dimenzí – promítnutí dat do pouze několika vlastních vektorů odpovídajících největším vlastním číslům (směry s nevětší variancí) umožní optimální rekonstrukci dat s nejmenší kvadratickou chybou ( mean square error - MSE )

Redukce dimenzí provádíme pokud věříme, že v některých směrech není užitečná informace ale pouze (gaussovský) šum s nízkou variabilitou.

## Interpretace  Σ  v  gaussovském rozložení

## PCA - Příklad

Obrázky 100x100 pixelů   –  10000  dimensionální vektory

![](../_media/03_extrakce_priznaku/extrakce_priznaku/ppt/media/image19.png "Picture 11")

![](../_media/03_extrakce_priznaku/extrakce_priznaku/ppt/media/image19.png "Picture 12")

![](../_media/03_extrakce_priznaku/extrakce_priznaku/ppt/media/image19.png "Picture 13")

μ           λ 1 =3.4∙10 5     λ 2 =2.8∙10 5    λ 3 =2.4∙10 5     λ 3 =1.6∙10 5

Střední hodnota, vlastní čísla a vlastní vektory

Střední hodnota, vlastní čísla a vlastní vektory

Originál          M  = 1           M=10          M=50      M=250

## PCA - Příklad

Jakou dimenzi si PCA vybere na tomto příkladě?

Bude to výhodné pro klasifikaci tříd?

![](../_media/03_extrakce_priznaku/extrakce_priznaku/ppt/media/image3.wmf "Picture 4")

## Lineární diskriminační analýza

![](../_media/03_extrakce_priznaku/extrakce_priznaku/ppt/media/image20.wmf "Picture 8")

Opět se pokusíme promítnout data pouze do určitého směru:

Tentokrát ale budeme chtít aby v tomto směru byly separovány třídy.

Intuitivně by nás mohlo napadnout vybrat směr ve kterém jsou nejlépe odděleny průměty středních hodnot tříd  m 1  a  m 2 . Hledáme tedy  w , které maximalizuje:

![](../_media/03_extrakce_priznaku/extrakce_priznaku/ppt/media/image28.png "Picture 4")

![](../_media/03_extrakce_priznaku/extrakce_priznaku/ppt/media/image29.wmf "Picture 6")

m 1

m 2

## Lineární diskriminační analýza

Lze však najít i lepší směr:

![](../_media/03_extrakce_priznaku/extrakce_priznaku/ppt/media/image28.png "Picture 5")

![](../_media/03_extrakce_priznaku/extrakce_priznaku/ppt/media/image30.wmf "Picture 9")

![](../_media/03_extrakce_priznaku/extrakce_priznaku/ppt/media/image48.png "Picture 10")

Snažíme se data promítnout do takového směru, kde

Maximalizujeme  ( čtverec )  vzdálenosti mezi středními hodnotami tříd

Nebo-li  varianci   mezi  t ří dami

Minimalizujeme průměrnou varianci tříd

 Maximalizujeme tedy

## Lineární diskriminační analýza

![](../_media/03_extrakce_priznaku/extrakce_priznaku/ppt/media/image49.wmf "Picture 4")

## Lineární diskriminační analýza

![](../_media/03_extrakce_priznaku/extrakce_priznaku/ppt/media/image50.wmf "Picture 4")

![](../_media/03_extrakce_priznaku/extrakce_priznaku/ppt/media/image51.wmf "Picture 5")

![](../_media/03_extrakce_priznaku/extrakce_priznaku/ppt/media/image52.wmf "Picture 6")

![](../_media/03_extrakce_priznaku/extrakce_priznaku/ppt/media/image53.wmf "Picture 7")

## Lineární diskriminační analýza

## Lineární diskriminační analýza

![](../_media/03_extrakce_priznaku/extrakce_priznaku/ppt/media/image56.png "Content Placeholder 7")

## Lineární diskriminační analýza

![A group of images of different shapes

Description automatically generated with medium confidence](../_media/03_extrakce_priznaku/extrakce_priznaku/ppt/media/image64.png "Content Placeholder 21")

## LDA a lineární klasifikátor

	Dvě třídy s gaussovským rozložením se stejnou kovarianční matici jsou opravdu optimálně oddělitelné lineárním klasifikátorem (přímkou, rovinou, hyper-rovinou)

![](../_media/03_extrakce_priznaku/extrakce_priznaku/ppt/media/image72.jpeg "Picture 4")

## Extrakce příznaku pro řeč - MFCC ( Mel frequency cepstral coefficients )

![](../_media/03_extrakce_priznaku/extrakce_priznaku/ppt/media/image73.wmf "Picture 4")

Nejprve řečový signál rozdělíme do asi 20ms překrývajících se segmentů

![](../_media/03_extrakce_priznaku/extrakce_priznaku/ppt/media/image74.wmf "Picture 7")

## Slide 34

![](../_media/03_extrakce_priznaku/extrakce_priznaku/ppt/media/image75.wmf "Picture 4")

## Slide 35

![](../_media/03_extrakce_priznaku/extrakce_priznaku/ppt/media/image73.wmf "Picture 4")

![](../_media/03_extrakce_priznaku/extrakce_priznaku/ppt/media/image76.wmf "Picture 5")

Logaritmický vystup z banky filtru – je třeba již jen dekorelovat

Původní signál

## Slide 36

![](../_media/03_extrakce_priznaku/extrakce_priznaku/ppt/media/image77.wmf "Picture 7")

## Singular Value Decomposition - SVD

![](../_media/03_extrakce_priznaku/extrakce_priznaku/ppt/media/image78.png "Picture 8")

![](../_media/03_extrakce_priznaku/extrakce_priznaku/ppt/media/image79.png "Picture 11")

![](../_media/03_extrakce_priznaku/extrakce_priznaku/ppt/media/image80.png "Picture 12")

A  je jakákoli mxn matice

U  je mxn matice kde sloupce jsou ortonormální báze

V  je nxn matice kde sloupce jsou ortonormální báze

D  je nxn je diagonální matice

- Předpokládejme, že matice A je matice s příznakovými vektory v řádcích s již odečtenou střední hodnotou     Σ  =  A T A

Potom z následujících vztahů vyplývá, ze:

V  jsou vlastní vektory  Σ

Diagonála  D  obsahuje odmocniny z vlastních čísel  Σ  (variance ve směrech vlastních vektorů)
