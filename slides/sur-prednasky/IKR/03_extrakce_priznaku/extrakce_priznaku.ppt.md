---
title: "extrakce priznaku"
source_url: https://www.fit.vut.cz/study/course/SUR/public/prednasky/IKR/03_extrakce_priznaku/extrakce_priznaku.ppt
raw_path: raw/sur-prednasky/IKR/03_extrakce_priznaku/extrakce_priznaku.ppt
format: ppt
generated: 2026-05-11
---

# extrakce priznaku

- Source: [extrakce_priznaku.ppt](../../../../raw/sur-prednasky/IKR/03_extrakce_priznaku/extrakce_priznaku.ppt)
- URL: https://www.fit.vut.cz/study/course/SUR/public/prednasky/IKR/03_extrakce_priznaku/extrakce_priznaku.ppt
- Note: extracted from legacy binary PowerPoint; slide layout and images are not preserved.

## Text block 1

Klasifikace a rozpoznávání

## Text block 2

Extrakce příznaků

## Text block 3

Extrakce příznaků - parametrizace

## Text block 4

Poté co jsme ze snímače obdržely data která jsou relevantní pro naši klasifikační úlohu, je potřeba je přizpůsobit potřebám rozpoznávače
Klasifikátory mají rády parametry které jsou:
Gaussovského rozložení (většinou vícerozměrného)
Nekorelované
Nízkodimenzionální

## Text block 5

Příklad parametrizace pro 2D vstupní vektory

## Text block 6

Mějme vzorky (příklady) 2D rozložení pro dvě třídy.

## Text block 7

Příklad parametrizace pro 2D vstupní vektory

## Text block 8

Rozložení není příliš gaussovské.
Provedeme třetí odmocninou obou koeficientů.

## Text block 9

Příklad parametrizace pro 2D vstupní vektory

## Text block 10

Prostor se komprimuje – nelineárně deformuje...

## Text block 11

Příklad parametrizace pro 2D vstupní vektory

## Text block 12

... a rozložení pro každou třídu je nyní gaussovské.
Koeficienty jsou ale korelované.
Je vhodné prostor otočit tak aby se koeficienty dekorelovaly.

## Text block 13

Příklad parametrizace pro 2D vstupní vektory

## Text block 14

Nyní jsou koeficienty dekorelovány.
Svislá dimenze je navíc zbytečná, protože třídy se v ní zcela překrývají.

## Text block 15

Gaussovské rozložení (jednorozměrné)

## Text block 16

Gaussian distribution (2 dimensions)

## Text block 17

Plná a diagonální kovarianční matice

## Text block 18

Diagonální kovarianční matice

## Text block 19

Pokud je Σ diagonální matice s koeficienty v diagonále σ2i 

## Text block 20

Diagonální kovarianční matice

## Text block 22

Proč nás zajímá?
Pomůže nám pochopit význam plné kovarianční matice v gaussovském rozložení
Úspora parametrů při modelování dat
Pokud jsou data korelována (viz červená třída na prvním obr.)
Zvláště pro vysoce dimenzionální příznaky, modelování pomocí směsi gaussovských rozložení s diagonální Σ může být úspornější než použití jedné gaussovky s plnou Σ
Můžeme se pokusit data natočit - dekorelovat

## Text block 23

Skalární součin

## Text block 24

Rotace vektoru

## Text block 25

Nechť b1 a b2 jsou ortonormální baze
Vektory jsou na sebe kolmé
Mají délku |b1| = |b2| = 1
Potom y = B x je otočený vektor x, kde b1 a b2 ukazují v původním prostoru směry nových os

## Text block 26

Projekce vektoru

## Text block 27

Nechť B je matice ortonormálních bází a B’ matice tvořena pouze několika řádky (bázemi) matice B.
Potom y = B’TB’x je projekce vektoru x do bází B’.

## Text block 28

Vlastní čísla a vektory

## Text block 29

λ je vlastní číslo a e je odpovídající vlastni vektor čtvercové matice A, pokud platí:

## Text block 30

μ transformovaných dat

## Text block 31

Jak se změní odhady střední hodnoty a kovarianční matice pokud původní data transformujeme: y = Ax

## Text block 32

Σ transformovaných dat

## Text block 33

Analýza hlavních komponent

## Text block 35

Umožňuje:
Dekorelaci – vlastní vektory kovarianční matice definuji souřadný systém ve kterých jsou data dekorelována – mají diagonální kovarianční matici
Redukci dimenzí – promítnutí dat do pouze několika vlastních vektorů odpovídajících největším vlastním číslům (směry s nevětší variancí) umožní optimální rekonstrukci dat s nejmenší kvadratickou chybou (mean square error - MSE)
Redukce dimenzí provádíme pokud věříme, že v některých směrech není užitečná informace ale pouze (gaussovský) šum s nízkou variabilitou.

## Text block 36

Interpretace Σ v gaussovském rozložení

## Text block 37

PCA - Příklad

## Text block 38

Obrázky 100x100 pixelů – 1000 dimensionální vektory

## Text block 39

PCA - Příklad

## Text block 40

Jakou dimenzi si PCA vybere na tomto příkladě?
Bude to výhodné pro klasifikaci tříd?

## Text block 41

Lineární diskriminační analýza

## Text block 42

Opět se pokusíme promítnout data pouze do určitého směru:
Tentokrát ale budeme chtít aby v tomto směru byly separovány třídy.
Intuitivně by nás mohlo napadnout vybrat směr ve kterém jsou nejlépe odděleny průměty středních hodnot tříd m1 a m2. Hledáme tedy w, které maximalizuje:

## Text block 43

Lineární diskriminační analýza

## Text block 44

Lze však najít i lepší směr:

## Text block 45

Lineární diskriminační analýza

## Text block 47

LDA dimenze dány vlastními vektory matice
Σac – kovarianční matice spočítaná se středních hodnot tříd
Σwc – průměrná kovarianční matice tříd
Lze zobecnit pro více tříd – vlastní vektory s největšími vlastními čísly odpovídají směrům ve kterých jsou třídy nelépe separovány
Pro J tříd bude pouze J-1 vlastních čísel nenulových
Pokud mají všechny třídy gaussovské rozložení se stejnou kovarianční maticí, LDA transformace transformuje prostor tak, že mohou byt třídy optimálně modelovány gaussovským rozložení s diagonální kovarianční maticí

## Text block 48

LDA a lineární klasifikátor

## Text block 49

Dvě třídy s gaussovským rozložením se stejnou kovarianční matici jsou opravdu optimálně oddělitelné lineárním klasifikátorem (přímkou, rovinou, hyper-rovinou)

## Text block 50

Extrakce příznaku pro řeč - MFCC
(Mel frequency cepstral coefficients)

## Text block 51

Nejprve řečový signál rozdělíme do asi 20ms překrývajících se segmentů

## Text block 52

Singular Value Decomposition - SVD

## Text block 53

A je jakákoli mxn matice
U je mxn matice kde sloupce jsou ortonormální báze
V je nxn matice kde sloupce jsou ortonormální báze
D je nxn je diagonální matice
Předpokládejme, že matice A je matice s příznakovými vektory v řádcích s již odečtenou střední hodnotou  Σ = ATA
Potom z následujících vztahů vyplývá, ze:
V jsou vlastní vektory Σ
Diagonála D obsahuje odmocniny z vlastních čísel Σ (variance ve směrech vlastních vektorů)

## Text block 54

SRC

## Text block 55

$\mathcal{N}(x;\mu,\sigma^2) = \frac{1}{\sigma\sqrt{2\pi}}
e^{-\frac{(x-\mu)^2}{2\sigma^2}}$

## Text block 56

LOG

## Text block 57

This is pdfTeX, Version 3.141592-1.40.3 (MiKTeX 2.6) (preloaded format=latex 2007.7.12) 12 JUL 2007 23:20
entering extended mode
**Text*Box*73
("Text Box 73.tex"
LaTeX2e <2005/12/01>
Babel <v3.8g> and hyphenation patterns for english, dumylang, nohyphenation, ge
rman, ngerman, french, loaded.
("C:\Program Files\MiKTeX 2.6\tex\latex\base\article.cls"
Document Class: article 2005/09/16 v1.4f Standard LaTeX document class
("C:\Program Files\MiKTeX 2.6\tex\latex\base\size10.clo"
File: size10.clo 2005/09/16 v1.4f Standard LaTeX file (size option)
\c@part=\count79
\c@section=\count80
\c@subsection=\count81
\c@subsubsection=\count82
\c@paragraph=\count83
\c@subparagraph=\count84
\c@figure=\count85
\c@table=\count86
\abovecaptionskip=\skip41
\belowcaptionskip=\skip42
\bibindent=\dimen102
) ("C:\Program Files\MiKTeX 2.6\tex\latex\tools\xspace.sty"
Package: xspace 2006/05/08 v1.12 Space after command names (DPC,MH)
) ("C:\Program Files\MiKTeX 2.6\tex\latex\amsfonts\amssymb.sty"
Package: amssymb 2002/01/22 v2.2d
("C:\Program Files\MiKTeX 2.6\tex\latex\amsfonts\amsfonts.sty"
Package: amsfonts 2001/10/25 v2.2f
\@emptytoks=\toks14
\symAMSa=\mathgroup4
\symAMSb=\mathgroup5
LaTeX Font Info: Overwriting math alphabet `\mathfrak' in version `bold'
(Font) U/euf/m/n --> U/euf/b/n on input line 132.
)) ("C:\Program Files\MiKTeX 2.6\tex\latex\amsmath\amsmath.sty"
Package: amsmath 2000/07/18 v2.13 AMS math features
\@mathmargin=\skip43
For additional information on amsmath, use the `?' option.
("C:\Program Files\MiKTeX 2.6\tex\latex\amsmath\amstext.sty"
Package: amstext 2000/06/29 v2.01
("C:\Program Files\MiKTeX 2.6\tex\latex\amsmath\amsgen.sty"
File: amsgen.sty 1999/11/30 v2.0
\@emptytoks=\toks15
\ex@=\dimen103
)) ("C:\Program Files\MiKTeX 2.6\tex\latex\amsmath\amsbsy.sty"
Package: amsbsy 1999/11/29 v1.2d
\pmbraise@=\dimen104
) ("C:\Program Files\MiKTeX 2.6\tex\latex\amsmath\amsopn.sty"
Package: amsopn 1999/12/14 v2.01 operator names
\inf@bad=\count87
LaTeX Info: Redefining \frac on input line 211.
\uproot@=\count88
\leftroot@=\count89
LaTeX Info: Redefining \overline on input line 307.
\classnum@=\count90
\DOTSCASE@=\count91
LaTeX Info: Redefining \ldots on input line 379.
LaTeX Info: Redefining \dots on input line 382.
LaTeX Info: Redefining \cdots on input line 467.
\Mathstrutbox@=\box26
\strutbox@=\box27
\big@size=\dimen105
LaTeX Font Info: Redeclaring font encoding OML on input line 567.
LaTeX Font Info: Redeclaring font encoding OMS on input line 568.
\macc@depth=\count92
\c@MaxMatrixCols=\count93
\dotsspace@=\muskip10
\c@parentequation=\count94
\dspbrk@lvl=\count95
\tag@help=\toks16
\row@=\count96
\column@=\count97
\maxfields@=\count98
\andhelp@=\toks17
\eqnshift@=\dimen106
\alignsep@=\dimen107
\tagshift@=\dimen108
\tagwidth@=\dimen109
\totwidth@=\dimen110
\lineht@=\dimen111
\@envbody=\toks18
\multlinegap=\skip44
\multlinetaggap=\skip45
\mathdisplay@stack=\toks19
LaTeX Info: Redefining \[ on input line 2666.
LaTeX Info: Redefining \] on input line 2667.
) ("C:\Program Files\MiKTeX 2.6\tex\latex\graphics\color.sty"
Package: color 2005/11/14 v1.0j Standard LaTeX Color (DPC)
("C:\Program Files\MiKTeX 2.6\tex\latex\00miktex\color.cfg"
File: color.cfg 2005/12/29 v1.1 MiKTeX 'color' configuration
Package color Info: Driver file: dvips.def on input line 130.
("C:\Program Files\MiKTeX 2.6\tex\latex\graphics\dvips.def"
File: dvips.def 1999/02/16 v3.0i Driver-dependant file (DPC,SPQR)
) ("C:\Program Files\MiKTeX 2.6\tex\latex\graphics\dvipsnam.def"
File: dvipsnam.def 1999/02/16 v3.0i Driver-dependant file (DPC,SPQR)
)) ("C:\Program Files\TeX4PPT\Styles\TeX4PPT.sty")
No file Text*Box*73.aux.
LaTeX Font Info: Checking defaults for OML/cmm/m/it on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for T1/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OT1/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OMS/cmsy/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OMX/cmex/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for U/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Try loading font information for U+msa on input line 9.
("C:\Program Files\MiKTeX 2.6\tex\latex\amsfonts\umsa.fd"
File: umsa.fd 2002/01/19 v2.2g AMS font definitions
LaTeX Font Info: Try loading font information for U+msb on input line 9.
("C:\Program Files\MiKTeX 2.6\tex\latex\amsfonts\umsb.fd"
File: umsb.fd 2002/01/19 v2.2g AMS font definitions
] ("Text Box 73.aux") )
Here is how much of TeX's memory you used:
1446 strings out of 95306
16126 string characters out of 1185186
59599 words of memory out of 1063299
4608 multiletter control sequences out of 60000
5339 words of font info for 22 fonts, out of 1000000 for 2000
14 hyphenation exceptions out of 8191
27i,5n,24p,221b,112s stack positions out of 5000i,500n,10000p,200000b,32768s
Output written on "Text Box 73.dvi" (1 page, 840 bytes).

## Text block 58

CTOP

## Text block 59

224,625

## Text block 60

CLEFT

## Text block 61

306,375

## Text block 62

CWIDTH

## Text block 63

408,125

## Text block 64

CHEIGHT

## Text block 65

63,75

## Text block 66

MAG

## Text block 67

SRC

## Text block 68

\mu = \frac{1}{T} \sum_{t=1}^T x(t)

## Text block 69

LOG

## Text block 70

This is pdfTeX, Version 3.141592-1.40.3 (MiKTeX 2.6) (preloaded format=latex 2007.7.12) 12 JUL 2007 23:23
entering extended mode
**Text*Box*147
("Text Box 147.tex"
LaTeX2e <2005/12/01>
Babel <v3.8g> and hyphenation patterns for english, dumylang, nohyphenation, ge
rman, ngerman, french, loaded.
("C:\Program Files\MiKTeX 2.6\tex\latex\base\article.cls"
Document Class: article 2005/09/16 v1.4f Standard LaTeX document class
("C:\Program Files\MiKTeX 2.6\tex\latex\base\size10.clo"
File: size10.clo 2005/09/16 v1.4f Standard LaTeX file (size option)
\c@part=\count79
\c@section=\count80
\c@subsection=\count81
\c@subsubsection=\count82
\c@paragraph=\count83
\c@subparagraph=\count84
\c@figure=\count85
\c@table=\count86
\abovecaptionskip=\skip41
\belowcaptionskip=\skip42
\bibindent=\dimen102
) ("C:\Program Files\MiKTeX 2.6\tex\latex\tools\xspace.sty"
Package: xspace 2006/05/08 v1.12 Space after command names (DPC,MH)
) ("C:\Program Files\MiKTeX 2.6\tex\latex\amsfonts\amssymb.sty"
Package: amssymb 2002/01/22 v2.2d
("C:\Program Files\MiKTeX 2.6\tex\latex\amsfonts\amsfonts.sty"
Package: amsfonts 2001/10/25 v2.2f
\@emptytoks=\toks14
\symAMSa=\mathgroup4
\symAMSb=\mathgroup5
LaTeX Font Info: Overwriting math alphabet `\mathfrak' in version `bold'
(Font) U/euf/m/n --> U/euf/b/n on input line 132.
)) ("C:\Program Files\MiKTeX 2.6\tex\latex\amsmath\amsmath.sty"
Package: amsmath 2000/07/18 v2.13 AMS math features
\@mathmargin=\skip43
For additional information on amsmath, use the `?' option.
("C:\Program Files\MiKTeX 2.6\tex\latex\amsmath\amstext.sty"
Package: amstext 2000/06/29 v2.01
("C:\Program Files\MiKTeX 2.6\tex\latex\amsmath\amsgen.sty"
File: amsgen.sty 1999/11/30 v2.0
\@emptytoks=\toks15
\ex@=\dimen103
)) ("C:\Program Files\MiKTeX 2.6\tex\latex\amsmath\amsbsy.sty"
Package: amsbsy 1999/11/29 v1.2d
\pmbraise@=\dimen104
) ("C:\Program Files\MiKTeX 2.6\tex\latex\amsmath\amsopn.sty"
Package: amsopn 1999/12/14 v2.01 operator names
\inf@bad=\count87
LaTeX Info: Redefining \frac on input line 211.
\uproot@=\count88
\leftroot@=\count89
LaTeX Info: Redefining \overline on input line 307.
\classnum@=\count90
\DOTSCASE@=\count91
LaTeX Info: Redefining \ldots on input line 379.
LaTeX Info: Redefining \dots on input line 382.
LaTeX Info: Redefining \cdots on input line 467.
\Mathstrutbox@=\box26
\strutbox@=\box27
\big@size=\dimen105
LaTeX Font Info: Redeclaring font encoding OML on input line 567.
LaTeX Font Info: Redeclaring font encoding OMS on input line 568.
\macc@depth=\count92
\c@MaxMatrixCols=\count93
\dotsspace@=\muskip10
\c@parentequation=\count94
\dspbrk@lvl=\count95
\tag@help=\toks16
\row@=\count96
\column@=\count97
\maxfields@=\count98
\andhelp@=\toks17
\eqnshift@=\dimen106
\alignsep@=\dimen107
\tagshift@=\dimen108
\tagwidth@=\dimen109
\totwidth@=\dimen110
\lineht@=\dimen111
\@envbody=\toks18
\multlinegap=\skip44
\multlinetaggap=\skip45
\mathdisplay@stack=\toks19
LaTeX Info: Redefining \[ on input line 2666.
LaTeX Info: Redefining \] on input line 2667.
) ("C:\Program Files\MiKTeX 2.6\tex\latex\graphics\color.sty"
Package: color 2005/11/14 v1.0j Standard LaTeX Color (DPC)
("C:\Program Files\MiKTeX 2.6\tex\latex\00miktex\color.cfg"
File: color.cfg 2005/12/29 v1.1 MiKTeX 'color' configuration
Package color Info: Driver file: dvips.def on input line 130.
("C:\Program Files\MiKTeX 2.6\tex\latex\graphics\dvips.def"
File: dvips.def 1999/02/16 v3.0i Driver-dependant file (DPC,SPQR)
) ("C:\Program Files\MiKTeX 2.6\tex\latex\graphics\dvipsnam.def"
File: dvipsnam.def 1999/02/16 v3.0i Driver-dependant file (DPC,SPQR)
)) ("C:\Program Files\TeX4PPT\Styles\TeX4PPT.sty")
No file Text*Box*147.aux.
LaTeX Font Info: Checking defaults for OML/cmm/m/it on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for T1/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OT1/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OMS/cmsy/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OMX/cmex/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for U/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
! Missing $ inserted.
<inserted text>
l.9 \mu
= \frac{1}{T} \sum_{t=1}^T x(t)
I've inserted a begin-math/end-math symbol since I think
you left one out. Proceed, with fingers crossed.
LaTeX Font Info: Try loading font information for U+msa on input line 9.
("C:\Program Files\MiKTeX 2.6\tex\latex\amsfonts\umsa.fd"
File: umsa.fd 2002/01/19 v2.2g AMS font definitions
LaTeX Font Info: Try loading font information for U+msb on input line 9.
("C:\Program Files\MiKTeX 2.6\tex\latex\amsfonts\umsb.fd"
File: umsb.fd 2002/01/19 v2.2g AMS font definitions
! Missing $ inserted.
<inserted text>
l.10
I've inserted a begin-math/end-math symbol since I think
you left one out. Proceed, with fingers crossed.
] ("Text Box 147.aux") )
Here is how much of TeX's memory you used:
1446 strings out of 95306
16137 string characters out of 1185186
59599 words of memory out of 1063299
4608 multiletter control sequences out of 60000
5339 words of font info for 22 fonts, out of 1000000 for 2000
14 hyphenation exceptions out of 8191
27i,5n,24p,222b,112s stack positions out of 5000i,500n,10000p,200000b,32768s
Output written on "Text Box 147.dvi" (1 page, 560 bytes).

## Text block 71

CTOP

## Text block 72

CLEFT

## Text block 73

274,125

## Text block 74

CWIDTH

## Text block 75

215,75

## Text block 76

CHEIGHT

## Text block 77

39,625

## Text block 78

MAG

## Text block 79

ML odhad parametrů (Trénování):

## Text block 80

SRC

## Text block 81

$\sigma^2 = \frac{1}{T}\sum_{t=1}^T (x(t)-\mu)^2$

## Text block 82

LOG

## Text block 83

This is pdfTeX, Version 3.141592-1.40.3 (MiKTeX 2.6) (preloaded format=latex 2007.7.12) 12 JUL 2007 23:38
entering extended mode
**Text*Box*189
("Text Box 189.tex"
LaTeX2e <2005/12/01>
Babel <v3.8g> and hyphenation patterns for english, dumylang, nohyphenation, ge
rman, ngerman, french, loaded.
("C:\Program Files\MiKTeX 2.6\tex\latex\base\article.cls"
Document Class: article 2005/09/16 v1.4f Standard LaTeX document class
("C:\Program Files\MiKTeX 2.6\tex\latex\base\size10.clo"
File: size10.clo 2005/09/16 v1.4f Standard LaTeX file (size option)
\c@part=\count79
\c@section=\count80
\c@subsection=\count81
\c@subsubsection=\count82
\c@paragraph=\count83
\c@subparagraph=\count84
\c@figure=\count85
\c@table=\count86
\abovecaptionskip=\skip41
\belowcaptionskip=\skip42
\bibindent=\dimen102
) ("C:\Program Files\MiKTeX 2.6\tex\latex\tools\xspace.sty"
Package: xspace 2006/05/08 v1.12 Space after command names (DPC,MH)
) ("C:\Program Files\MiKTeX 2.6\tex\latex\amsfonts\amssymb.sty"
Package: amssymb 2002/01/22 v2.2d
("C:\Program Files\MiKTeX 2.6\tex\latex\amsfonts\amsfonts.sty"
Package: amsfonts 2001/10/25 v2.2f
\@emptytoks=\toks14
\symAMSa=\mathgroup4
\symAMSb=\mathgroup5
LaTeX Font Info: Overwriting math alphabet `\mathfrak' in version `bold'
(Font) U/euf/m/n --> U/euf/b/n on input line 132.
)) ("C:\Program Files\MiKTeX 2.6\tex\latex\amsmath\amsmath.sty"
Package: amsmath 2000/07/18 v2.13 AMS math features
\@mathmargin=\skip43
For additional information on amsmath, use the `?' option.
("C:\Program Files\MiKTeX 2.6\tex\latex\amsmath\amstext.sty"
Package: amstext 2000/06/29 v2.01
("C:\Program Files\MiKTeX 2.6\tex\latex\amsmath\amsgen.sty"
File: amsgen.sty 1999/11/30 v2.0
\@emptytoks=\toks15
\ex@=\dimen103
)) ("C:\Program Files\MiKTeX 2.6\tex\latex\amsmath\amsbsy.sty"
Package: amsbsy 1999/11/29 v1.2d
\pmbraise@=\dimen104
) ("C:\Program Files\MiKTeX 2.6\tex\latex\amsmath\amsopn.sty"
Package: amsopn 1999/12/14 v2.01 operator names
\inf@bad=\count87
LaTeX Info: Redefining \frac on input line 211.
\uproot@=\count88
\leftroot@=\count89
LaTeX Info: Redefining \overline on input line 307.
\classnum@=\count90
\DOTSCASE@=\count91
LaTeX Info: Redefining \ldots on input line 379.
LaTeX Info: Redefining \dots on input line 382.
LaTeX Info: Redefining \cdots on input line 467.
\Mathstrutbox@=\box26
\strutbox@=\box27
\big@size=\dimen105
LaTeX Font Info: Redeclaring font encoding OML on input line 567.
LaTeX Font Info: Redeclaring font encoding OMS on input line 568.
\macc@depth=\count92
\c@MaxMatrixCols=\count93
\dotsspace@=\muskip10
\c@parentequation=\count94
\dspbrk@lvl=\count95
\tag@help=\toks16
\row@=\count96
\column@=\count97
\maxfields@=\count98
\andhelp@=\toks17
\eqnshift@=\dimen106
\alignsep@=\dimen107
\tagshift@=\dimen108
\tagwidth@=\dimen109
\totwidth@=\dimen110
\lineht@=\dimen111
\@envbody=\toks18
\multlinegap=\skip44
\multlinetaggap=\skip45
\mathdisplay@stack=\toks19
LaTeX Info: Redefining \[ on input line 2666.
LaTeX Info: Redefining \] on input line 2667.
) ("C:\Program Files\MiKTeX 2.6\tex\latex\graphics\color.sty"
Package: color 2005/11/14 v1.0j Standard LaTeX Color (DPC)
("C:\Program Files\MiKTeX 2.6\tex\latex\00miktex\color.cfg"
File: color.cfg 2005/12/29 v1.1 MiKTeX 'color' configuration
Package color Info: Driver file: dvips.def on input line 130.
("C:\Program Files\MiKTeX 2.6\tex\latex\graphics\dvips.def"
File: dvips.def 1999/02/16 v3.0i Driver-dependant file (DPC,SPQR)
) ("C:\Program Files\MiKTeX 2.6\tex\latex\graphics\dvipsnam.def"
File: dvipsnam.def 1999/02/16 v3.0i Driver-dependant file (DPC,SPQR)
)) ("C:\Program Files\TeX4PPT\Styles\TeX4PPT.sty")
No file Text*Box*189.aux.
LaTeX Font Info: Checking defaults for OML/cmm/m/it on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for T1/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OT1/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OMS/cmsy/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OMX/cmex/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for U/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Try loading font information for U+msa on input line 9.
("C:\Program Files\MiKTeX 2.6\tex\latex\amsfonts\umsa.fd"
File: umsa.fd 2002/01/19 v2.2g AMS font definitions
LaTeX Font Info: Try loading font information for U+msb on input line 9.
("C:\Program Files\MiKTeX 2.6\tex\latex\amsfonts\umsb.fd"
File: umsb.fd 2002/01/19 v2.2g AMS font definitions
] ("Text Box 189.aux") )
Here is how much of TeX's memory you used:
1446 strings out of 95306
16137 string characters out of 1185186
59599 words of memory out of 1063299
4608 multiletter control sequences out of 60000
5339 words of font info for 22 fonts, out of 1000000 for 2000
14 hyphenation exceptions out of 8191
27i,5n,24p,222b,112s stack positions out of 5000i,500n,10000p,200000b,32768s
Output written on "Text Box 189.dvi" (1 page, 636 bytes).

## Text block 84

CTOP

## Text block 85

187,5

## Text block 86

CLEFT

## Text block 87

251,875

## Text block 88

CWIDTH

## Text block 89

283,625

## Text block 90

CHEIGHT

## Text block 91

35,875

## Text block 92

MAG

## Text block 93

Evaluation:

## Text block 94

ML odhad of parametrů (Trénování):

## Text block 95

SRC

## Text block 96

$\boldsymbol{\mu} = \frac{1}{T} \sum_{t=1}^T \boldsymbol{x}(t)$

## Text block 97

LOG

## Text block 98

This is pdfTeX, Version 3.1415926-1.40.9 (MiKTeX 2.7) (preloaded format=latex 2008.11.17) 25 FEB 2009 02:12
entering extended mode
**Group*265
("Group 265.tex"
LaTeX2e <2005/12/01>
Babel <v3.8l> and hyphenation patterns for english, dumylang, nohyphenation, ge
rman, ngerman, german-x-2008-06-18, ngerman-x-2008-06-18, french, loaded.
("C:\Program Files\MiKTeX 2.7\tex\latex\base\article.cls"
Document Class: article 2005/09/16 v1.4f Standard LaTeX document class
("C:\Program Files\MiKTeX 2.7\tex\latex\base\size10.clo"
File: size10.clo 2005/09/16 v1.4f Standard LaTeX file (size option)
\c@part=\count79
\c@section=\count80
\c@subsection=\count81
\c@subsubsection=\count82
\c@paragraph=\count83
\c@subparagraph=\count84
\c@figure=\count85
\c@table=\count86
\abovecaptionskip=\skip41
\belowcaptionskip=\skip42
\bibindent=\dimen102
) ("C:\Program Files\MiKTeX 2.7\tex\latex\tools\xspace.sty"
Package: xspace 2006/05/08 v1.12 Space after command names (DPC,MH)
) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\amssymb.sty"
Package: amssymb 2002/01/22 v2.2d
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\amsfonts.sty"
Package: amsfonts 2001/10/25 v2.2f
\@emptytoks=\toks14
\symAMSa=\mathgroup4
\symAMSb=\mathgroup5
LaTeX Font Info: Overwriting math alphabet `\mathfrak' in version `bold'
(Font) U/euf/m/n --> U/euf/b/n on input line 132.
)) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsmath.sty"
Package: amsmath 2000/07/18 v2.13 AMS math features
\@mathmargin=\skip43
For additional information on amsmath, use the `?' option.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amstext.sty"
Package: amstext 2000/06/29 v2.01
("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsgen.sty"
File: amsgen.sty 1999/11/30 v2.0
\@emptytoks=\toks15
\ex@=\dimen103
)) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsbsy.sty"
Package: amsbsy 1999/11/29 v1.2d
\pmbraise@=\dimen104
) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsopn.sty"
Package: amsopn 1999/12/14 v2.01 operator names
\inf@bad=\count87
LaTeX Info: Redefining \frac on input line 211.
\uproot@=\count88
\leftroot@=\count89
LaTeX Info: Redefining \overline on input line 307.
\classnum@=\count90
\DOTSCASE@=\count91
LaTeX Info: Redefining \ldots on input line 379.
LaTeX Info: Redefining \dots on input line 382.
LaTeX Info: Redefining \cdots on input line 467.
\Mathstrutbox@=\box26
\strutbox@=\box27
\big@size=\dimen105
LaTeX Font Info: Redeclaring font encoding OML on input line 567.
LaTeX Font Info: Redeclaring font encoding OMS on input line 568.
\macc@depth=\count92
\c@MaxMatrixCols=\count93
\dotsspace@=\muskip10
\c@parentequation=\count94
\dspbrk@lvl=\count95
\tag@help=\toks16
\row@=\count96
\column@=\count97
\maxfields@=\count98
\andhelp@=\toks17
\eqnshift@=\dimen106
\alignsep@=\dimen107
\tagshift@=\dimen108
\tagwidth@=\dimen109
\totwidth@=\dimen110
\lineht@=\dimen111
\@envbody=\toks18
\multlinegap=\skip44
\multlinetaggap=\skip45
\mathdisplay@stack=\toks19
LaTeX Info: Redefining \[ on input line 2666.
LaTeX Info: Redefining \] on input line 2667.
) ("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\color.sty"
Package: color 2005/11/14 v1.0j Standard LaTeX Color (DPC)
("C:\Program Files\MiKTeX 2.7\tex\latex\00miktex\color.cfg"
File: color.cfg 2007/01/18 v1.5 color configuration of teTeX/TeXLive
Package color Info: Driver file: dvips.def on input line 130.
("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\dvips.def"
File: dvips.def 1999/02/16 v3.0i Driver-dependant file (DPC,SPQR)
) ("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\dvipsnam.def"
File: dvipsnam.def 1999/02/16 v3.0i Driver-dependant file (DPC,SPQR)
)) ("C:\Program Files\TeX4PPT\Styles\TeX4PPT.sty")
No file Group*265.aux.
LaTeX Font Info: Checking defaults for OML/cmm/m/it on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for T1/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OT1/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OMS/cmsy/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OMX/cmex/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for U/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Try loading font information for U+msa on input line 9.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\umsa.fd"
File: umsa.fd 2002/01/19 v2.2g AMS font definitions
LaTeX Font Info: Try loading font information for U+msb on input line 9.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\umsb.fd"
File: umsb.fd 2002/01/19 v2.2g AMS font definitions
] ("Group 265.aux") )
Here is how much of TeX's memory you used:
1411 strings out of 95305
16037 string characters out of 1183061
59708 words of memory out of 1500000
4639 multiletter control sequences out of 110000
8096 words of font info for 31 fonts, out of 1200000 for 2000
14 hyphenation exceptions out of 8191
27i,6n,24p,219b,112s stack positions out of 5000i,500n,10000p,200000b,5000s
Output written on "Group 265.dvi" (1 page, 620 bytes).

## Text block 99

CTOP

## Text block 100

197.125

## Text block 101

CLEFT

## Text block 102

265.625

## Text block 103

CWIDTH

## Text block 104

213.375

## Text block 105

CHEIGHT

## Text block 106

38.125

## Text block 107

MAG

## Text block 108

SRC

## Text block 109

$\mathcal{N} (\boldsymbol{x} ; \boldsymbol{\mu}, \boldsymbol{\Sigma}) = \frac{1}{\sqrt{(2\pi)^P |\boldsymbol{\Sigma}|}}
e^{-\frac{1}{2} (\boldsymbol{x} - \boldsymbol{\mu})^T \boldsymbol{\Sigma}^{-1}(\boldsymbol{x} - \boldsymbol{\mu})}$

## Text block 110

LOG

## Text block 111

This is pdfeTeX, Version 3.141592-1.30.6-2.2 (MiKTeX 2.5) (preloaded format=latex 2007.2.25) 12 JUL 2007 17:49
entering extended mode
**Text*Box*1036
("Text Box 1036.tex"
LaTeX2e <2005/12/01>
Babel <v3.8g> and hyphenation patterns for english, dumylang, nohyphenation, ge
rman, ngerman, french, loaded.
("C:\Program Files\MiKTeX 2.5\tex\latex\base\article.cls"
Document Class: article 2005/09/16 v1.4f Standard LaTeX document class
("C:\Program Files\MiKTeX 2.5\tex\latex\base\size10.clo"
File: size10.clo 2005/09/16 v1.4f Standard LaTeX file (size option)
\c@part=\count79
\c@section=\count80
\c@subsection=\count81
\c@subsubsection=\count82
\c@paragraph=\count83
\c@subparagraph=\count84
\c@figure=\count85
\c@table=\count86
\abovecaptionskip=\skip41
\belowcaptionskip=\skip42
\bibindent=\dimen102
) ("C:\Program Files\MiKTeX 2.5\tex\latex\tools\xspace.sty"
Package: xspace 2006/05/08 v1.12 Space after command names (DPC,MH)
) ("C:\Program Files\MiKTeX 2.5\tex\latex\amsfonts\amssymb.sty"
Package: amssymb 2002/01/22 v2.2d
("C:\Program Files\MiKTeX 2.5\tex\latex\amsfonts\amsfonts.sty"
Package: amsfonts 2001/10/25 v2.2f
\@emptytoks=\toks14
\symAMSa=\mathgroup4
\symAMSb=\mathgroup5
LaTeX Font Info: Overwriting math alphabet `\mathfrak' in version `bold'
(Font) U/euf/m/n --> U/euf/b/n on input line 132.
)) ("C:\Program Files\MiKTeX 2.5\tex\latex\amsmath\amsmath.sty"
Package: amsmath 2000/07/18 v2.13 AMS math features
\@mathmargin=\skip43
For additional information on amsmath, use the `?' option.
("C:\Program Files\MiKTeX 2.5\tex\latex\amsmath\amstext.sty"
Package: amstext 2000/06/29 v2.01
("C:\Program Files\MiKTeX 2.5\tex\latex\amsmath\amsgen.sty"
File: amsgen.sty 1999/11/30 v2.0
\@emptytoks=\toks15
\ex@=\dimen103
)) ("C:\Program Files\MiKTeX 2.5\tex\latex\amsmath\amsbsy.sty"
Package: amsbsy 1999/11/29 v1.2d
\pmbraise@=\dimen104
) ("C:\Program Files\MiKTeX 2.5\tex\latex\amsmath\amsopn.sty"
Package: amsopn 1999/12/14 v2.01 operator names
\inf@bad=\count87
LaTeX Info: Redefining \frac on input line 211.
\uproot@=\count88
\leftroot@=\count89
LaTeX Info: Redefining \overline on input line 307.
\classnum@=\count90
\DOTSCASE@=\count91
LaTeX Info: Redefining \ldots on input line 379.
LaTeX Info: Redefining \dots on input line 382.
LaTeX Info: Redefining \cdots on input line 467.
\Mathstrutbox@=\box26
\strutbox@=\box27
\big@size=\dimen105
LaTeX Font Info: Redeclaring font encoding OML on input line 567.
LaTeX Font Info: Redeclaring font encoding OMS on input line 568.
\macc@depth=\count92
\c@MaxMatrixCols=\count93
\dotsspace@=\muskip10
\c@parentequation=\count94
\dspbrk@lvl=\count95
\tag@help=\toks16
\row@=\count96
\column@=\count97
\maxfields@=\count98
\andhelp@=\toks17
\eqnshift@=\dimen106
\alignsep@=\dimen107
\tagshift@=\dimen108
\tagwidth@=\dimen109
\totwidth@=\dimen110
\lineht@=\dimen111
\@envbody=\toks18
\multlinegap=\skip44
\multlinetaggap=\skip45
\mathdisplay@stack=\toks19
LaTeX Info: Redefining \[ on input line 2666.
LaTeX Info: Redefining \] on input line 2667.
) ("C:\Program Files\MiKTeX 2.5\tex\latex\graphics\color.sty"
Package: color 2005/11/14 v1.0j Standard LaTeX Color (DPC)
("C:\Program Files\MiKTeX 2.5\tex\latex\00miktex\color.cfg"
File: color.cfg 2005/12/29 v1.1 MiKTeX 'color' configuration
Package color Info: Driver file: dvips.def on input line 130.
("C:\Program Files\MiKTeX 2.5\tex\latex\graphics\dvips.def"
File: dvips.def 1999/02/16 v3.0i Driver-dependant file (DPC,SPQR)
) ("C:\Program Files\MiKTeX 2.5\tex\latex\graphics\dvipsnam.def"
File: dvipsnam.def 1999/02/16 v3.0i Driver-dependant file (DPC,SPQR)
)) ("C:\Program Files\TeX4PPT\Styles\TeX4PPT.sty")
No file Text*Box*1036.aux.
LaTeX Font Info: Checking defaults for OML/cmm/m/it on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for T1/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OT1/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OMS/cmsy/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OMX/cmex/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for U/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Try loading font information for U+msa on input line 9.
("C:\Program Files\MiKTeX 2.5\tex\latex\amsfonts\umsa.fd"
File: umsa.fd 2002/01/19 v2.2g AMS font definitions
LaTeX Font Info: Try loading font information for U+msb on input line 9.
("C:\Program Files\MiKTeX 2.5\tex\latex\amsfonts\umsb.fd"
File: umsb.fd 2002/01/19 v2.2g AMS font definitions
] ("Text Box 1036.aux") )
Here is how much of TeX's memory you used:
1464 strings out of 95420
16349 string characters out of 1187323
60111 words of memory out of 1063299
4587 multiletter control sequences out of 60000
8096 words of font info for 31 fonts, out of 1000000 for 2000
14 hyphenation exceptions out of 8191
27i,8n,24p,223b,112s stack positions out of 5000i,500n,10000p,200000b,32768s
Output written on "Text Box 1036.dvi" (1 page, 1108 bytes).

## Text block 112

CTOP

## Text block 113

197,125

## Text block 114

CLEFT

## Text block 115

266,5

## Text block 116

CWIDTH

## Text block 117

546,5

## Text block 118

CHEIGHT

## Text block 119

53,625

## Text block 120

MAG

## Text block 121

SRC

## Text block 122

$\boldsymbol{\Sigma} = \frac{1}{T}\sum_{t=1}^T (\boldsymbol{x}(t)-\boldsymbol{\mu}) (\boldsymbol{x}(t)-\boldsymbol{\mu} )^T $

## Text block 123

LOG

## Text block 124

This is pdfTeX, Version 3.1415926-1.40.9 (MiKTeX 2.7) (preloaded format=latex 2008.11.17) 26 FEB 2009 01:43
entering extended mode
**Text*Box*439
("Text Box 439.tex"
LaTeX2e <2005/12/01>
Babel <v3.8l> and hyphenation patterns for english, dumylang, nohyphenation, ge
rman, ngerman, german-x-2008-06-18, ngerman-x-2008-06-18, french, loaded.
("C:\Program Files\MiKTeX 2.7\tex\latex\base\article.cls"
Document Class: article 2005/09/16 v1.4f Standard LaTeX document class
("C:\Program Files\MiKTeX 2.7\tex\latex\base\size10.clo"
File: size10.clo 2005/09/16 v1.4f Standard LaTeX file (size option)
\c@part=\count79
\c@section=\count80
\c@subsection=\count81
\c@subsubsection=\count82
\c@paragraph=\count83
\c@subparagraph=\count84
\c@figure=\count85
\c@table=\count86
\abovecaptionskip=\skip41
\belowcaptionskip=\skip42
\bibindent=\dimen102
) ("C:\Program Files\MiKTeX 2.7\tex\latex\tools\xspace.sty"
Package: xspace 2006/05/08 v1.12 Space after command names (DPC,MH)
) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\amssymb.sty"
Package: amssymb 2002/01/22 v2.2d
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\amsfonts.sty"
Package: amsfonts 2001/10/25 v2.2f
\@emptytoks=\toks14
\symAMSa=\mathgroup4
\symAMSb=\mathgroup5
LaTeX Font Info: Overwriting math alphabet `\mathfrak' in version `bold'
(Font) U/euf/m/n --> U/euf/b/n on input line 132.
)) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsmath.sty"
Package: amsmath 2000/07/18 v2.13 AMS math features
\@mathmargin=\skip43
For additional information on amsmath, use the `?' option.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amstext.sty"
Package: amstext 2000/06/29 v2.01
("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsgen.sty"
File: amsgen.sty 1999/11/30 v2.0
\@emptytoks=\toks15
\ex@=\dimen103
)) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsbsy.sty"
Package: amsbsy 1999/11/29 v1.2d
\pmbraise@=\dimen104
) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsopn.sty"
Package: amsopn 1999/12/14 v2.01 operator names
\inf@bad=\count87
LaTeX Info: Redefining \frac on input line 211.
\uproot@=\count88
\leftroot@=\count89
LaTeX Info: Redefining \overline on input line 307.
\classnum@=\count90
\DOTSCASE@=\count91
LaTeX Info: Redefining \ldots on input line 379.
LaTeX Info: Redefining \dots on input line 382.
LaTeX Info: Redefining \cdots on input line 467.
\Mathstrutbox@=\box26
\strutbox@=\box27
\big@size=\dimen105
LaTeX Font Info: Redeclaring font encoding OML on input line 567.
LaTeX Font Info: Redeclaring font encoding OMS on input line 568.
\macc@depth=\count92
\c@MaxMatrixCols=\count93
\dotsspace@=\muskip10
\c@parentequation=\count94
\dspbrk@lvl=\count95
\tag@help=\toks16
\row@=\count96
\column@=\count97
\maxfields@=\count98
\andhelp@=\toks17
\eqnshift@=\dimen106
\alignsep@=\dimen107
\tagshift@=\dimen108
\tagwidth@=\dimen109
\totwidth@=\dimen110
\lineht@=\dimen111
\@envbody=\toks18
\multlinegap=\skip44
\multlinetaggap=\skip45
\mathdisplay@stack=\toks19
LaTeX Info: Redefining \[ on input line 2666.
LaTeX Info: Redefining \] on input line 2667.
) ("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\color.sty"
Package: color 2005/11/14 v1.0j Standard LaTeX Color (DPC)
("C:\Program Files\MiKTeX 2.7\tex\latex\00miktex\color.cfg"
File: color.cfg 2007/01/18 v1.5 color configuration of teTeX/TeXLive
Package color Info: Driver file: dvips.def on input line 130.
("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\dvips.def"
File: dvips.def 1999/02/16 v3.0i Driver-dependant file (DPC,SPQR)
) ("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\dvipsnam.def"
File: dvipsnam.def 1999/02/16 v3.0i Driver-dependant file (DPC,SPQR)
)) ("C:\Program Files\TeX4PPT\Styles\TeX4PPT.sty")
No file Text*Box*439.aux.
LaTeX Font Info: Checking defaults for OML/cmm/m/it on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for T1/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OT1/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OMS/cmsy/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OMX/cmex/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for U/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Try loading font information for U+msa on input line 9.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\umsa.fd"
File: umsa.fd 2002/01/19 v2.2g AMS font definitions
LaTeX Font Info: Try loading font information for U+msb on input line 9.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\umsb.fd"
File: umsb.fd 2002/01/19 v2.2g AMS font definitions
] ("Text Box 439.aux") )
Here is how much of TeX's memory you used:
1411 strings out of 95305
16061 string characters out of 1183061
60708 words of memory out of 1500000
4639 multiletter control sequences out of 110000
8096 words of font info for 31 fonts, out of 1200000 for 2000
14 hyphenation exceptions out of 8191
27i,6n,24p,222b,112s stack positions out of 5000i,500n,10000p,200000b,5000s
Output written on "Text Box 439.dvi" (1 page, 768 bytes).

## Text block 125

CTOP

## Text block 126

194.125

## Text block 127

CLEFT

## Text block 128

261.375

## Text block 129

CWIDTH

## Text block 130

424.875

## Text block 131

CHEIGHT

## Text block 132

37.375

## Text block 133

MAG

## Text block 134

SRC

## Text block 135

\boldsymbol{\mu} = \left[
\begin{array}{c} 1 \\
0.5 \\
\end{array}
\right] \
\boldsymbol{\Sigma} = \left[
\begin{array}{cc} 1 & 0.8 \\
0.8 & 1 \\
\end{array}
\right]

## Text block 136

LOG

## Text block 137

This is pdfTeX, Version 3.1415926-1.40.9 (MiKTeX 2.7) (preloaded format=latex 2008.11.17) 25 FEB 2009 15:40
entering extended mode
**Text*Box*207
("Text Box 207.tex"
LaTeX2e <2005/12/01>
Babel <v3.8l> and hyphenation patterns for english, dumylang, nohyphenation, ge
rman, ngerman, german-x-2008-06-18, ngerman-x-2008-06-18, french, loaded.
("C:\Program Files\MiKTeX 2.7\tex\latex\base\article.cls"
Document Class: article 2005/09/16 v1.4f Standard LaTeX document class
("C:\Program Files\MiKTeX 2.7\tex\latex\base\size10.clo"
File: size10.clo 2005/09/16 v1.4f Standard LaTeX file (size option)
\c@part=\count79
\c@section=\count80
\c@subsection=\count81
\c@subsubsection=\count82
\c@paragraph=\count83
\c@subparagraph=\count84
\c@figure=\count85
\c@table=\count86
\abovecaptionskip=\skip41
\belowcaptionskip=\skip42
\bibindent=\dimen102
) ("C:\Program Files\MiKTeX 2.7\tex\latex\tools\xspace.sty"
Package: xspace 2006/05/08 v1.12 Space after command names (DPC,MH)
) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\amssymb.sty"
Package: amssymb 2002/01/22 v2.2d
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\amsfonts.sty"
Package: amsfonts 2001/10/25 v2.2f
\@emptytoks=\toks14
\symAMSa=\mathgroup4
\symAMSb=\mathgroup5
LaTeX Font Info: Overwriting math alphabet `\mathfrak' in version `bold'
(Font) U/euf/m/n --> U/euf/b/n on input line 132.
)) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsmath.sty"
Package: amsmath 2000/07/18 v2.13 AMS math features
\@mathmargin=\skip43
For additional information on amsmath, use the `?' option.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amstext.sty"
Package: amstext 2000/06/29 v2.01
("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsgen.sty"
File: amsgen.sty 1999/11/30 v2.0
\@emptytoks=\toks15
\ex@=\dimen103
)) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsbsy.sty"
Package: amsbsy 1999/11/29 v1.2d
\pmbraise@=\dimen104
) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsopn.sty"
Package: amsopn 1999/12/14 v2.01 operator names
\inf@bad=\count87
LaTeX Info: Redefining \frac on input line 211.
\uproot@=\count88
\leftroot@=\count89
LaTeX Info: Redefining \overline on input line 307.
\classnum@=\count90
\DOTSCASE@=\count91
LaTeX Info: Redefining \ldots on input line 379.
LaTeX Info: Redefining \dots on input line 382.
LaTeX Info: Redefining \cdots on input line 467.
\Mathstrutbox@=\box26
\strutbox@=\box27
\big@size=\dimen105
LaTeX Font Info: Redeclaring font encoding OML on input line 567.
LaTeX Font Info: Redeclaring font encoding OMS on input line 568.
\macc@depth=\count92
\c@MaxMatrixCols=\count93
\dotsspace@=\muskip10
\c@parentequation=\count94
\dspbrk@lvl=\count95
\tag@help=\toks16
\row@=\count96
\column@=\count97
\maxfields@=\count98
\andhelp@=\toks17
\eqnshift@=\dimen106
\alignsep@=\dimen107
\tagshift@=\dimen108
\tagwidth@=\dimen109
\totwidth@=\dimen110
\lineht@=\dimen111
\@envbody=\toks18
\multlinegap=\skip44
\multlinetaggap=\skip45
\mathdisplay@stack=\toks19
LaTeX Info: Redefining \[ on input line 2666.
LaTeX Info: Redefining \] on input line 2667.
) ("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\color.sty"
Package: color 2005/11/14 v1.0j Standard LaTeX Color (DPC)
("C:\Program Files\MiKTeX 2.7\tex\latex\00miktex\color.cfg"
File: color.cfg 2007/01/18 v1.5 color configuration of teTeX/TeXLive
Package color Info: Driver file: dvips.def on input line 130.
("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\dvips.def"
File: dvips.def 1999/02/16 v3.0i Driver-dependant file (DPC,SPQR)
) ("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\dvipsnam.def"
File: dvipsnam.def 1999/02/16 v3.0i Driver-dependant file (DPC,SPQR)
)) ("C:\Program Files\TeX4PPT\Styles\TeX4PPT.sty")
No file Text*Box*207.aux.
LaTeX Font Info: Checking defaults for OML/cmm/m/it on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for T1/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OT1/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OMS/cmsy/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OMX/cmex/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for U/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Try loading font information for U+msa on input line 9.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\umsa.fd"
File: umsa.fd 2002/01/19 v2.2g AMS font definitions
LaTeX Font Info: Try loading font information for U+msb on input line 9.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\umsb.fd"
File: umsb.fd 2002/01/19 v2.2g AMS font definitions
! Missing $ inserted.
<inserted text>
l.9 \boldsymbol{\mu}
= \left[
I've inserted a begin-math/end-math symbol since I think
you left one out. Proceed, with fingers crossed.
! Extra }, or forgotten $.
\math@atom #1#2->\binrel@ {#1}\binrel@@ {#2}
l.9 \boldsymbol{\mu}
= \left[
I've deleted a group-closing symbol because it seems to be
spurious, as in `$x}$'. But perhaps the } is legitimate and
you forgot something else, as in `\hbox{$x}'. In such cases
the way to recover is to insert both the forgotten and the
deleted material, e.g., by typing `I$}'.
! Missing $ inserted.
<inserted text>
l.9 \boldsymbol{\mu}
= \left[
I've inserted something that you may have forgotten.
(See the <inserted text> above.)
With luck, this will get me unwedged. But if you
really didn't forget anything, try typing `2' now; then
my insertion and my current dilemma will both disappear.
! Missing } inserted.
<inserted text>
l.9 \boldsymbol{\mu}
= \left[
I've inserted something that you may have forgotten.
(See the <inserted text> above.)
With luck, this will get me unwedged. But if you
really didn't forget anything, try typing `2' now; then
my insertion and my current dilemma will both disappear.
! Missing $ inserted.
<inserted text>
l.9 \boldsymbol{\mu} = \left
I've inserted a begin-math/end-math symbol since I think
you left one out. Proceed, with fingers crossed.
! Missing $ inserted.
<inserted text>
l.19 \end{document}
I've inserted a begin-math/end-math symbol since I think
you left one out. Proceed, with fingers crossed.
] ("Text Box 207.aux") )
Here is how much of TeX's memory you used:
1411 strings out of 95305
16061 string characters out of 1183061
60708 words of memory out of 1500000
4639 multiletter control sequences out of 110000
8096 words of font info for 31 fonts, out of 1200000 for 2000
14 hyphenation exceptions out of 8191
27i,8n,24p,222b,112s stack positions out of 5000i,500n,10000p,200000b,5000s
Output written on "Text Box 207.dvi" (1 page, 628 bytes).

## Text block 138

CTOP

## Text block 139

116.5

## Text block 140

CLEFT

## Text block 141

149.375

## Text block 142

CWIDTH

## Text block 143

188.375

## Text block 144

CHEIGHT

## Text block 145

32.875

## Text block 146

MAG

## Text block 147

SRC

## Text block 148

\boldsymbol{\mu} = \left[
\begin{array}{c} 1 \\
0.5 \\
\end{array}
\right] \
\boldsymbol{\Sigma} = \left[
\begin{array}{cc} 0.4 & 0 \\
0 & 1.5 \\
\end{array}
\right]

## Text block 149

LOG

## Text block 150

This is pdfTeX, Version 3.1415926-1.40.9 (MiKTeX 2.7) (preloaded format=latex 2008.11.17) 25 FEB 2009 15:42
entering extended mode
**Text*Box*252
("Text Box 252.tex"
LaTeX2e <2005/12/01>
Babel <v3.8l> and hyphenation patterns for english, dumylang, nohyphenation, ge
rman, ngerman, german-x-2008-06-18, ngerman-x-2008-06-18, french, loaded.
("C:\Program Files\MiKTeX 2.7\tex\latex\base\article.cls"
Document Class: article 2005/09/16 v1.4f Standard LaTeX document class
("C:\Program Files\MiKTeX 2.7\tex\latex\base\size10.clo"
File: size10.clo 2005/09/16 v1.4f Standard LaTeX file (size option)
\c@part=\count79
\c@section=\count80
\c@subsection=\count81
\c@subsubsection=\count82
\c@paragraph=\count83
\c@subparagraph=\count84
\c@figure=\count85
\c@table=\count86
\abovecaptionskip=\skip41
\belowcaptionskip=\skip42
\bibindent=\dimen102
) ("C:\Program Files\MiKTeX 2.7\tex\latex\tools\xspace.sty"
Package: xspace 2006/05/08 v1.12 Space after command names (DPC,MH)
) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\amssymb.sty"
Package: amssymb 2002/01/22 v2.2d
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\amsfonts.sty"
Package: amsfonts 2001/10/25 v2.2f
\@emptytoks=\toks14
\symAMSa=\mathgroup4
\symAMSb=\mathgroup5
LaTeX Font Info: Overwriting math alphabet `\mathfrak' in version `bold'
(Font) U/euf/m/n --> U/euf/b/n on input line 132.
)) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsmath.sty"
Package: amsmath 2000/07/18 v2.13 AMS math features
\@mathmargin=\skip43
For additional information on amsmath, use the `?' option.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amstext.sty"
Package: amstext 2000/06/29 v2.01
("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsgen.sty"
File: amsgen.sty 1999/11/30 v2.0
\@emptytoks=\toks15
\ex@=\dimen103
)) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsbsy.sty"
Package: amsbsy 1999/11/29 v1.2d
\pmbraise@=\dimen104
) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsopn.sty"
Package: amsopn 1999/12/14 v2.01 operator names
\inf@bad=\count87
LaTeX Info: Redefining \frac on input line 211.
\uproot@=\count88
\leftroot@=\count89
LaTeX Info: Redefining \overline on input line 307.
\classnum@=\count90
\DOTSCASE@=\count91
LaTeX Info: Redefining \ldots on input line 379.
LaTeX Info: Redefining \dots on input line 382.
LaTeX Info: Redefining \cdots on input line 467.
\Mathstrutbox@=\box26
\strutbox@=\box27
\big@size=\dimen105
LaTeX Font Info: Redeclaring font encoding OML on input line 567.
LaTeX Font Info: Redeclaring font encoding OMS on input line 568.
\macc@depth=\count92
\c@MaxMatrixCols=\count93
\dotsspace@=\muskip10
\c@parentequation=\count94
\dspbrk@lvl=\count95
\tag@help=\toks16
\row@=\count96
\column@=\count97
\maxfields@=\count98
\andhelp@=\toks17
\eqnshift@=\dimen106
\alignsep@=\dimen107
\tagshift@=\dimen108
\tagwidth@=\dimen109
\totwidth@=\dimen110
\lineht@=\dimen111
\@envbody=\toks18
\multlinegap=\skip44
\multlinetaggap=\skip45
\mathdisplay@stack=\toks19
LaTeX Info: Redefining \[ on input line 2666.
LaTeX Info: Redefining \] on input line 2667.
) ("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\color.sty"
Package: color 2005/11/14 v1.0j Standard LaTeX Color (DPC)
("C:\Program Files\MiKTeX 2.7\tex\latex\00miktex\color.cfg"
File: color.cfg 2007/01/18 v1.5 color configuration of teTeX/TeXLive
Package color Info: Driver file: dvips.def on input line 130.
("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\dvips.def"
File: dvips.def 1999/02/16 v3.0i Driver-dependant file (DPC,SPQR)
) ("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\dvipsnam.def"
File: dvipsnam.def 1999/02/16 v3.0i Driver-dependant file (DPC,SPQR)
)) ("C:\Program Files\TeX4PPT\Styles\TeX4PPT.sty")
No file Text*Box*252.aux.
LaTeX Font Info: Checking defaults for OML/cmm/m/it on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for T1/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OT1/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OMS/cmsy/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OMX/cmex/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for U/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Try loading font information for U+msa on input line 9.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\umsa.fd"
File: umsa.fd 2002/01/19 v2.2g AMS font definitions
LaTeX Font Info: Try loading font information for U+msb on input line 9.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\umsb.fd"
File: umsb.fd 2002/01/19 v2.2g AMS font definitions
! Missing $ inserted.
<inserted text>
l.9 \boldsymbol{\mu}
= \left[
I've inserted a begin-math/end-math symbol since I think
you left one out. Proceed, with fingers crossed.
! Extra }, or forgotten $.
\math@atom #1#2->\binrel@ {#1}\binrel@@ {#2}
l.9 \boldsymbol{\mu}
= \left[
I've deleted a group-closing symbol because it seems to be
spurious, as in `$x}$'. But perhaps the } is legitimate and
you forgot something else, as in `\hbox{$x}'. In such cases
the way to recover is to insert both the forgotten and the
deleted material, e.g., by typing `I$}'.
! Missing $ inserted.
<inserted text>
l.9 \boldsymbol{\mu}
= \left[
I've inserted something that you may have forgotten.
(See the <inserted text> above.)
With luck, this will get me unwedged. But if you
really didn't forget anything, try typing `2' now; then
my insertion and my current dilemma will both disappear.
! Missing } inserted.
<inserted text>
l.9 \boldsymbol{\mu}
= \left[
I've inserted something that you may have forgotten.
(See the <inserted text> above.)
With luck, this will get me unwedged. But if you
really didn't forget anything, try typing `2' now; then
my insertion and my current dilemma will both disappear.
! Missing $ inserted.
<inserted text>
l.9 \boldsymbol{\mu} = \left
I've inserted a begin-math/end-math symbol since I think
you left one out. Proceed, with fingers crossed.
! Missing $ inserted.
<inserted text>
l.19 \end{document}
I've inserted a begin-math/end-math symbol since I think
you left one out. Proceed, with fingers crossed.
] ("Text Box 252.aux") )
Here is how much of TeX's memory you used:
1411 strings out of 95305
16061 string characters out of 1183061
60708 words of memory out of 1500000
4639 multiletter control sequences out of 110000
8096 words of font info for 31 fonts, out of 1200000 for 2000
14 hyphenation exceptions out of 8191
27i,8n,24p,222b,112s stack positions out of 5000i,500n,10000p,200000b,5000s
Output written on "Text Box 252.dvi" (1 page, 628 bytes).

## Text block 151

CTOP

## Text block 152

116.5

## Text block 153

CLEFT

## Text block 154

149.375

## Text block 155

CWIDTH

## Text block 156

188.375

## Text block 157

CHEIGHT

## Text block 158

32.875

## Text block 159

MAG

## Text block 160

SRC

## Text block 161

$\mathcal{N} (\boldsymbol{x} ; \boldsymbol{\mu}, \boldsymbol{\Sigma}) = \frac{1}{\sqrt{(2\pi)^P |\boldsymbol{\Sigma}|}}
e^{-\frac{1}{2} (\boldsymbol{x} - \boldsymbol{\mu})^T \boldsymbol{\Sigma}^{-1}(\boldsymbol{x} - \boldsymbol{\mu})}$

## Text block 162

LOG

## Text block 163

This is pdfeTeX, Version 3.141592-1.30.6-2.2 (MiKTeX 2.5) (preloaded format=latex 2007.2.25) 12 JUL 2007 17:49
entering extended mode
**Text*Box*1036
("Text Box 1036.tex"
LaTeX2e <2005/12/01>
Babel <v3.8g> and hyphenation patterns for english, dumylang, nohyphenation, ge
rman, ngerman, french, loaded.
("C:\Program Files\MiKTeX 2.5\tex\latex\base\article.cls"
Document Class: article 2005/09/16 v1.4f Standard LaTeX document class
("C:\Program Files\MiKTeX 2.5\tex\latex\base\size10.clo"
File: size10.clo 2005/09/16 v1.4f Standard LaTeX file (size option)
\c@part=\count79
\c@section=\count80
\c@subsection=\count81
\c@subsubsection=\count82
\c@paragraph=\count83
\c@subparagraph=\count84
\c@figure=\count85
\c@table=\count86
\abovecaptionskip=\skip41
\belowcaptionskip=\skip42
\bibindent=\dimen102
) ("C:\Program Files\MiKTeX 2.5\tex\latex\tools\xspace.sty"
Package: xspace 2006/05/08 v1.12 Space after command names (DPC,MH)
) ("C:\Program Files\MiKTeX 2.5\tex\latex\amsfonts\amssymb.sty"
Package: amssymb 2002/01/22 v2.2d
("C:\Program Files\MiKTeX 2.5\tex\latex\amsfonts\amsfonts.sty"
Package: amsfonts 2001/10/25 v2.2f
\@emptytoks=\toks14
\symAMSa=\mathgroup4
\symAMSb=\mathgroup5
LaTeX Font Info: Overwriting math alphabet `\mathfrak' in version `bold'
(Font) U/euf/m/n --> U/euf/b/n on input line 132.
)) ("C:\Program Files\MiKTeX 2.5\tex\latex\amsmath\amsmath.sty"
Package: amsmath 2000/07/18 v2.13 AMS math features
\@mathmargin=\skip43
For additional information on amsmath, use the `?' option.
("C:\Program Files\MiKTeX 2.5\tex\latex\amsmath\amstext.sty"
Package: amstext 2000/06/29 v2.01
("C:\Program Files\MiKTeX 2.5\tex\latex\amsmath\amsgen.sty"
File: amsgen.sty 1999/11/30 v2.0
\@emptytoks=\toks15
\ex@=\dimen103
)) ("C:\Program Files\MiKTeX 2.5\tex\latex\amsmath\amsbsy.sty"
Package: amsbsy 1999/11/29 v1.2d
\pmbraise@=\dimen104
) ("C:\Program Files\MiKTeX 2.5\tex\latex\amsmath\amsopn.sty"
Package: amsopn 1999/12/14 v2.01 operator names
\inf@bad=\count87
LaTeX Info: Redefining \frac on input line 211.
\uproot@=\count88
\leftroot@=\count89
LaTeX Info: Redefining \overline on input line 307.
\classnum@=\count90
\DOTSCASE@=\count91
LaTeX Info: Redefining \ldots on input line 379.
LaTeX Info: Redefining \dots on input line 382.
LaTeX Info: Redefining \cdots on input line 467.
\Mathstrutbox@=\box26
\strutbox@=\box27
\big@size=\dimen105
LaTeX Font Info: Redeclaring font encoding OML on input line 567.
LaTeX Font Info: Redeclaring font encoding OMS on input line 568.
\macc@depth=\count92
\c@MaxMatrixCols=\count93
\dotsspace@=\muskip10
\c@parentequation=\count94
\dspbrk@lvl=\count95
\tag@help=\toks16
\row@=\count96
\column@=\count97
\maxfields@=\count98
\andhelp@=\toks17
\eqnshift@=\dimen106
\alignsep@=\dimen107
\tagshift@=\dimen108
\tagwidth@=\dimen109
\totwidth@=\dimen110
\lineht@=\dimen111
\@envbody=\toks18
\multlinegap=\skip44
\multlinetaggap=\skip45
\mathdisplay@stack=\toks19
LaTeX Info: Redefining \[ on input line 2666.
LaTeX Info: Redefining \] on input line 2667.
) ("C:\Program Files\MiKTeX 2.5\tex\latex\graphics\color.sty"
Package: color 2005/11/14 v1.0j Standard LaTeX Color (DPC)
("C:\Program Files\MiKTeX 2.5\tex\latex\00miktex\color.cfg"
File: color.cfg 2005/12/29 v1.1 MiKTeX 'color' configuration
Package color Info: Driver file: dvips.def on input line 130.
("C:\Program Files\MiKTeX 2.5\tex\latex\graphics\dvips.def"
File: dvips.def 1999/02/16 v3.0i Driver-dependant file (DPC,SPQR)
) ("C:\Program Files\MiKTeX 2.5\tex\latex\graphics\dvipsnam.def"
File: dvipsnam.def 1999/02/16 v3.0i Driver-dependant file (DPC,SPQR)
)) ("C:\Program Files\TeX4PPT\Styles\TeX4PPT.sty")
No file Text*Box*1036.aux.
LaTeX Font Info: Checking defaults for OML/cmm/m/it on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for T1/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OT1/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OMS/cmsy/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OMX/cmex/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for U/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Try loading font information for U+msa on input line 9.
("C:\Program Files\MiKTeX 2.5\tex\latex\amsfonts\umsa.fd"
File: umsa.fd 2002/01/19 v2.2g AMS font definitions
LaTeX Font Info: Try loading font information for U+msb on input line 9.
("C:\Program Files\MiKTeX 2.5\tex\latex\amsfonts\umsb.fd"
File: umsb.fd 2002/01/19 v2.2g AMS font definitions
] ("Text Box 1036.aux") )
Here is how much of TeX's memory you used:
1464 strings out of 95420
16349 string characters out of 1187323
60111 words of memory out of 1063299
4587 multiletter control sequences out of 60000
8096 words of font info for 31 fonts, out of 1000000 for 2000
14 hyphenation exceptions out of 8191
27i,8n,24p,223b,112s stack positions out of 5000i,500n,10000p,200000b,32768s
Output written on "Text Box 1036.dvi" (1 page, 1108 bytes).

## Text block 164

CTOP

## Text block 165

197,125

## Text block 166

CLEFT

## Text block 167

266,5

## Text block 168

CWIDTH

## Text block 169

546,5

## Text block 170

CHEIGHT

## Text block 171

53,625

## Text block 172

MAG

## Text block 173

SRC

## Text block 174

\begin{eqnarray}
\nonumber
\mathcal{N} (\boldsymbol{x} ; \boldsymbol{\mu}, \boldsymbol{\Sigma}) & = & \frac{1}{\sqrt{(2\pi)^P \prod _{i=1}^P \sigma_i^2}} \exp({-\frac{1}{2} \sum_{i=1}^P \frac{ (x_i - \mu_i)^2}{\sigma_i^2}}) \\
\nonumber
& = & \prod_{i=1}^P \frac{1}{\sqrt{(2\pi) \sigma_i^2}} \exp({-\frac{1}{2} \frac{ (x_i - \mu_i)^2}{\sigma_i^2}) \\
\nonumber
& = & \prod_{i=1}^P \mathcal{N} (x_i ; \mu_i, \sigma_i^2)
\end{eqnarray}

## Text block 175

LOG

## Text block 176

This is pdfTeX, Version 3.1415926-1.40.9 (MiKTeX 2.7) (preloaded format=latex 2008.11.17) 25 FEB 2009 16:30
entering extended mode
**Group*879
("Group 879.tex"
LaTeX2e <2005/12/01>
Babel <v3.8l> and hyphenation patterns for english, dumylang, nohyphenation, ge
rman, ngerman, german-x-2008-06-18, ngerman-x-2008-06-18, french, loaded.
("C:\Program Files\MiKTeX 2.7\tex\latex\base\article.cls"
Document Class: article 2005/09/16 v1.4f Standard LaTeX document class
("C:\Program Files\MiKTeX 2.7\tex\latex\base\size10.clo"
File: size10.clo 2005/09/16 v1.4f Standard LaTeX file (size option)
\c@part=\count79
\c@section=\count80
\c@subsection=\count81
\c@subsubsection=\count82
\c@paragraph=\count83
\c@subparagraph=\count84
\c@figure=\count85
\c@table=\count86
\abovecaptionskip=\skip41
\belowcaptionskip=\skip42
\bibindent=\dimen102
) ("C:\Program Files\MiKTeX 2.7\tex\latex\tools\xspace.sty"
Package: xspace 2006/05/08 v1.12 Space after command names (DPC,MH)
) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\amssymb.sty"
Package: amssymb 2002/01/22 v2.2d
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\amsfonts.sty"
Package: amsfonts 2001/10/25 v2.2f
\@emptytoks=\toks14
\symAMSa=\mathgroup4
\symAMSb=\mathgroup5
LaTeX Font Info: Overwriting math alphabet `\mathfrak' in version `bold'
(Font) U/euf/m/n --> U/euf/b/n on input line 132.
)) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsmath.sty"
Package: amsmath 2000/07/18 v2.13 AMS math features
\@mathmargin=\skip43
For additional information on amsmath, use the `?' option.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amstext.sty"
Package: amstext 2000/06/29 v2.01
("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsgen.sty"
File: amsgen.sty 1999/11/30 v2.0
\@emptytoks=\toks15
\ex@=\dimen103
)) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsbsy.sty"
Package: amsbsy 1999/11/29 v1.2d
\pmbraise@=\dimen104
) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsopn.sty"
Package: amsopn 1999/12/14 v2.01 operator names
\inf@bad=\count87
LaTeX Info: Redefining \frac on input line 211.
\uproot@=\count88
\leftroot@=\count89
LaTeX Info: Redefining \overline on input line 307.
\classnum@=\count90
\DOTSCASE@=\count91
LaTeX Info: Redefining \ldots on input line 379.
LaTeX Info: Redefining \dots on input line 382.
LaTeX Info: Redefining \cdots on input line 467.
\Mathstrutbox@=\box26
\strutbox@=\box27
\big@size=\dimen105
LaTeX Font Info: Redeclaring font encoding OML on input line 567.
LaTeX Font Info: Redeclaring font encoding OMS on input line 568.
\macc@depth=\count92
\c@MaxMatrixCols=\count93
\dotsspace@=\muskip10
\c@parentequation=\count94
\dspbrk@lvl=\count95
\tag@help=\toks16
\row@=\count96
\column@=\count97
\maxfields@=\count98
\andhelp@=\toks17
\eqnshift@=\dimen106
\alignsep@=\dimen107
\tagshift@=\dimen108
\tagwidth@=\dimen109
\totwidth@=\dimen110
\lineht@=\dimen111
\@envbody=\toks18
\multlinegap=\skip44
\multlinetaggap=\skip45
\mathdisplay@stack=\toks19
LaTeX Info: Redefining \[ on input line 2666.
LaTeX Info: Redefining \] on input line 2667.
) ("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\color.sty"
Package: color 2005/11/14 v1.0j Standard LaTeX Color (DPC)
("C:\Program Files\MiKTeX 2.7\tex\latex\00miktex\color.cfg"
File: color.cfg 2007/01/18 v1.5 color configuration of teTeX/TeXLive
Package color Info: Driver file: dvips.def on input line 130.
("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\dvips.def"
File: dvips.def 1999/02/16 v3.0i Driver-dependant file (DPC,SPQR)
) ("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\dvipsnam.def"
File: dvipsnam.def 1999/02/16 v3.0i Driver-dependant file (DPC,SPQR)
)) ("C:\Program Files\TeX4PPT\Styles\TeX4PPT.sty")
No file Group*879.aux.
LaTeX Font Info: Checking defaults for OML/cmm/m/it on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for T1/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OT1/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OMS/cmsy/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OMX/cmex/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for U/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Try loading font information for U+msa on input line 9.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\umsa.fd"
File: umsa.fd 2002/01/19 v2.2g AMS font definitions
LaTeX Font Info: Try loading font information for U+msb on input line 9.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\umsb.fd"
File: umsb.fd 2002/01/19 v2.2g AMS font definitions
! Missing } inserted.
<inserted text>
l.14 \nonumber
I've put in what seems to be necessary to fix
the current column of the current alignment.
Try to go on, since this might almost work.
] ("Group 879.aux") )
Here is how much of TeX's memory you used:
1411 strings out of 95305
16037 string characters out of 1183061
61708 words of memory out of 1500000
4639 multiletter control sequences out of 110000
8096 words of font info for 31 fonts, out of 1200000 for 2000
14 hyphenation exceptions out of 8191
27i,10n,24p,227b,127s stack positions out of 5000i,500n,10000p,200000b,5000s
Output written on "Group 879.dvi" (1 page, 1556 bytes).

## Text block 177

CTOP

## Text block 178

228.375

## Text block 179

CLEFT

## Text block 180

308.625

## Text block 181

CWIDTH

## Text block 182

623.875

## Text block 183

CHEIGHT

## Text block 184

255.125

## Text block 185

MAG

## Text block 186

SRC

## Text block 187

$P(A,B) = P(A) P(B) \Rightarrow$

## Text block 188

LOG

## Text block 189

This is pdfTeX, Version 3.1415926-1.40.9 (MiKTeX 2.7) (preloaded format=latex 2008.11.17) 25 FEB 2009 17:01
entering extended mode
**Group*157
("Group 157.tex"
LaTeX2e <2005/12/01>
Babel <v3.8l> and hyphenation patterns for english, dumylang, nohyphenation, ge
rman, ngerman, german-x-2008-06-18, ngerman-x-2008-06-18, french, loaded.
("C:\Program Files\MiKTeX 2.7\tex\latex\base\article.cls"
Document Class: article 2005/09/16 v1.4f Standard LaTeX document class
("C:\Program Files\MiKTeX 2.7\tex\latex\base\size10.clo"
File: size10.clo 2005/09/16 v1.4f Standard LaTeX file (size option)
\c@part=\count79
\c@section=\count80
\c@subsection=\count81
\c@subsubsection=\count82
\c@paragraph=\count83
\c@subparagraph=\count84
\c@figure=\count85
\c@table=\count86
\abovecaptionskip=\skip41
\belowcaptionskip=\skip42
\bibindent=\dimen102
) ("C:\Program Files\MiKTeX 2.7\tex\latex\tools\xspace.sty"
Package: xspace 2006/05/08 v1.12 Space after command names (DPC,MH)
) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\amssymb.sty"
Package: amssymb 2002/01/22 v2.2d
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\amsfonts.sty"
Package: amsfonts 2001/10/25 v2.2f
\@emptytoks=\toks14
\symAMSa=\mathgroup4
\symAMSb=\mathgroup5
LaTeX Font Info: Overwriting math alphabet `\mathfrak' in version `bold'
(Font) U/euf/m/n --> U/euf/b/n on input line 132.
)) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsmath.sty"
Package: amsmath 2000/07/18 v2.13 AMS math features
\@mathmargin=\skip43
For additional information on amsmath, use the `?' option.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amstext.sty"
Package: amstext 2000/06/29 v2.01
("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsgen.sty"
File: amsgen.sty 1999/11/30 v2.0
\@emptytoks=\toks15
\ex@=\dimen103
)) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsbsy.sty"
Package: amsbsy 1999/11/29 v1.2d
\pmbraise@=\dimen104
) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsopn.sty"
Package: amsopn 1999/12/14 v2.01 operator names
\inf@bad=\count87
LaTeX Info: Redefining \frac on input line 211.
\uproot@=\count88
\leftroot@=\count89
LaTeX Info: Redefining \overline on input line 307.
\classnum@=\count90
\DOTSCASE@=\count91
LaTeX Info: Redefining \ldots on input line 379.
LaTeX Info: Redefining \dots on input line 382.
LaTeX Info: Redefining \cdots on input line 467.
\Mathstrutbox@=\box26
\strutbox@=\box27
\big@size=\dimen105
LaTeX Font Info: Redeclaring font encoding OML on input line 567.
LaTeX Font Info: Redeclaring font encoding OMS on input line 568.
\macc@depth=\count92
\c@MaxMatrixCols=\count93
\dotsspace@=\muskip10
\c@parentequation=\count94
\dspbrk@lvl=\count95
\tag@help=\toks16
\row@=\count96
\column@=\count97
\maxfields@=\count98
\andhelp@=\toks17
\eqnshift@=\dimen106
\alignsep@=\dimen107
\tagshift@=\dimen108
\tagwidth@=\dimen109
\totwidth@=\dimen110
\lineht@=\dimen111
\@envbody=\toks18
\multlinegap=\skip44
\multlinetaggap=\skip45
\mathdisplay@stack=\toks19
LaTeX Info: Redefining \[ on input line 2666.
LaTeX Info: Redefining \] on input line 2667.
) ("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\color.sty"
Package: color 2005/11/14 v1.0j Standard LaTeX Color (DPC)
("C:\Program Files\MiKTeX 2.7\tex\latex\00miktex\color.cfg"
File: color.cfg 2007/01/18 v1.5 color configuration of teTeX/TeXLive
Package color Info: Driver file: dvips.def on input line 130.
("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\dvips.def"
File: dvips.def 1999/02/16 v3.0i Driver-dependant file (DPC,SPQR)
) ("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\dvipsnam.def"
File: dvipsnam.def 1999/02/16 v3.0i Driver-dependant file (DPC,SPQR)
)) ("C:\Program Files\TeX4PPT\Styles\TeX4PPT.sty")
No file Group*157.aux.
LaTeX Font Info: Checking defaults for OML/cmm/m/it on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for T1/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OT1/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OMS/cmsy/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OMX/cmex/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for U/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Try loading font information for U+msa on input line 9.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\umsa.fd"
File: umsa.fd 2002/01/19 v2.2g AMS font definitions
LaTeX Font Info: Try loading font information for U+msb on input line 9.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\umsb.fd"
File: umsb.fd 2002/01/19 v2.2g AMS font definitions
] ("Group 157.aux") )
Here is how much of TeX's memory you used:
1393 strings out of 95305
15854 string characters out of 1183061
59708 words of memory out of 1500000
4630 multiletter control sequences out of 110000
5339 words of font info for 22 fonts, out of 1200000 for 2000
14 hyphenation exceptions out of 8191
27i,5n,24p,219b,112s stack positions out of 5000i,500n,10000p,200000b,5000s
Output written on "Group 157.dvi" (1 page, 428 bytes).

## Text block 190

CTOP

## Text block 191

181.25

## Text block 192

CLEFT

## Text block 193

234.375

## Text block 194

CWIDTH

## Text block 195

268.375

## Text block 196

CHEIGHT

## Text block 197

24.75

## Text block 198

MAG

## Text block 199

Jevy A a B jsou statisticky nezávislé

## Text block 200

SRC

## Text block 201

$\mathcal{N} (\boldsymbol{x} ; \boldsymbol{\mu}, \boldsymbol{\Sigma}) = \prod_{i=1}^P \mathcal{N} (x_i ; \mu_i, \sigma_i^2) \Rightarrow$

## Text block 202

LOG

## Text block 203

This is pdfTeX, Version 3.1415926-1.40.9 (MiKTeX 2.7) (preloaded format=latex 2008.11.17) 25 FEB 2009 17:08
entering extended mode
**Text*Box*254
("Text Box 254.tex"
LaTeX2e <2005/12/01>
Babel <v3.8l> and hyphenation patterns for english, dumylang, nohyphenation, ge
rman, ngerman, german-x-2008-06-18, ngerman-x-2008-06-18, french, loaded.
("C:\Program Files\MiKTeX 2.7\tex\latex\base\article.cls"
Document Class: article 2005/09/16 v1.4f Standard LaTeX document class
("C:\Program Files\MiKTeX 2.7\tex\latex\base\size10.clo"
File: size10.clo 2005/09/16 v1.4f Standard LaTeX file (size option)
\c@part=\count79
\c@section=\count80
\c@subsection=\count81
\c@subsubsection=\count82
\c@paragraph=\count83
\c@subparagraph=\count84
\c@figure=\count85
\c@table=\count86
\abovecaptionskip=\skip41
\belowcaptionskip=\skip42
\bibindent=\dimen102
) ("C:\Program Files\MiKTeX 2.7\tex\latex\tools\xspace.sty"
Package: xspace 2006/05/08 v1.12 Space after command names (DPC,MH)
) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\amssymb.sty"
Package: amssymb 2002/01/22 v2.2d
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\amsfonts.sty"
Package: amsfonts 2001/10/25 v2.2f
\@emptytoks=\toks14
\symAMSa=\mathgroup4
\symAMSb=\mathgroup5
LaTeX Font Info: Overwriting math alphabet `\mathfrak' in version `bold'
(Font) U/euf/m/n --> U/euf/b/n on input line 132.
)) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsmath.sty"
Package: amsmath 2000/07/18 v2.13 AMS math features
\@mathmargin=\skip43
For additional information on amsmath, use the `?' option.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amstext.sty"
Package: amstext 2000/06/29 v2.01
("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsgen.sty"
File: amsgen.sty 1999/11/30 v2.0
\@emptytoks=\toks15
\ex@=\dimen103
)) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsbsy.sty"
Package: amsbsy 1999/11/29 v1.2d
\pmbraise@=\dimen104
) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsopn.sty"
Package: amsopn 1999/12/14 v2.01 operator names
\inf@bad=\count87
LaTeX Info: Redefining \frac on input line 211.
\uproot@=\count88
\leftroot@=\count89
LaTeX Info: Redefining \overline on input line 307.
\classnum@=\count90
\DOTSCASE@=\count91
LaTeX Info: Redefining \ldots on input line 379.
LaTeX Info: Redefining \dots on input line 382.
LaTeX Info: Redefining \cdots on input line 467.
\Mathstrutbox@=\box26
\strutbox@=\box27
\big@size=\dimen105
LaTeX Font Info: Redeclaring font encoding OML on input line 567.
LaTeX Font Info: Redeclaring font encoding OMS on input line 568.
\macc@depth=\count92
\c@MaxMatrixCols=\count93
\dotsspace@=\muskip10
\c@parentequation=\count94
\dspbrk@lvl=\count95
\tag@help=\toks16
\row@=\count96
\column@=\count97
\maxfields@=\count98
\andhelp@=\toks17
\eqnshift@=\dimen106
\alignsep@=\dimen107
\tagshift@=\dimen108
\tagwidth@=\dimen109
\totwidth@=\dimen110
\lineht@=\dimen111
\@envbody=\toks18
\multlinegap=\skip44
\multlinetaggap=\skip45
\mathdisplay@stack=\toks19
LaTeX Info: Redefining \[ on input line 2666.
LaTeX Info: Redefining \] on input line 2667.
) ("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\color.sty"
Package: color 2005/11/14 v1.0j Standard LaTeX Color (DPC)
("C:\Program Files\MiKTeX 2.7\tex\latex\00miktex\color.cfg"
File: color.cfg 2007/01/18 v1.5 color configuration of teTeX/TeXLive
Package color Info: Driver file: dvips.def on input line 130.
("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\dvips.def"
File: dvips.def 1999/02/16 v3.0i Driver-dependant file (DPC,SPQR)
) ("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\dvipsnam.def"
File: dvipsnam.def 1999/02/16 v3.0i Driver-dependant file (DPC,SPQR)
)) ("C:\Program Files\TeX4PPT\Styles\TeX4PPT.sty")
No file Text*Box*254.aux.
LaTeX Font Info: Checking defaults for OML/cmm/m/it on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for T1/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OT1/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OMS/cmsy/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OMX/cmex/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for U/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Try loading font information for U+msa on input line 9.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\umsa.fd"
File: umsa.fd 2002/01/19 v2.2g AMS font definitions
LaTeX Font Info: Try loading font information for U+msb on input line 9.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\umsb.fd"
File: umsb.fd 2002/01/19 v2.2g AMS font definitions
] ("Text Box 254.aux") )
Here is how much of TeX's memory you used:
1411 strings out of 95305
16061 string characters out of 1183061
59708 words of memory out of 1500000
4639 multiletter control sequences out of 110000
8096 words of font info for 31 fonts, out of 1200000 for 2000
14 hyphenation exceptions out of 8191
27i,6n,24p,230b,112s stack positions out of 5000i,500n,10000p,200000b,5000s
Output written on "Text Box 254.dvi" (1 page, 764 bytes).

## Text block 204

CTOP

## Text block 205

174.75

## Text block 206

CLEFT

## Text block 207

233.375

## Text block 208

CWIDTH

## Text block 209

379.375

## Text block 210

CHEIGHT

## Text block 211

31.5

## Text block 212

MAG

## Text block 213

Koeficienty xi příznakového vektoru x jsou statisticky nezávislé.

## Text block 214

 x1

## Text block 215

 x2

## Text block 216

p(x1)

## Text block 217

p(x2)

## Text block 218

p(x) = p(x1,x2)

## Text block 219

SRC

## Text block 220

\boldsymbol{x}

## Text block 221

LOG

## Text block 222

This is pdfTeX, Version 3.1415926-1.40.9 (MiKTeX 2.7) (preloaded format=latex 2008.11.17) 25 FEB 2009 22:18
entering extended mode
**Text*Box*348
("Text Box 348.tex"
LaTeX2e <2005/12/01>
Babel <v3.8l> and hyphenation patterns for english, dumylang, nohyphenation, ge
rman, ngerman, german-x-2008-06-18, ngerman-x-2008-06-18, french, loaded.
("C:\Program Files\MiKTeX 2.7\tex\latex\base\article.cls"
Document Class: article 2005/09/16 v1.4f Standard LaTeX document class
("C:\Program Files\MiKTeX 2.7\tex\latex\base\size10.clo"
File: size10.clo 2005/09/16 v1.4f Standard LaTeX file (size option)
\c@part=\count79
\c@section=\count80
\c@subsection=\count81
\c@subsubsection=\count82
\c@paragraph=\count83
\c@subparagraph=\count84
\c@figure=\count85
\c@table=\count86
\abovecaptionskip=\skip41
\belowcaptionskip=\skip42
\bibindent=\dimen102
) ("C:\Program Files\MiKTeX 2.7\tex\latex\tools\xspace.sty"
Package: xspace 2006/05/08 v1.12 Space after command names (DPC,MH)
) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\amssymb.sty"
Package: amssymb 2002/01/22 v2.2d
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\amsfonts.sty"
Package: amsfonts 2001/10/25 v2.2f
\@emptytoks=\toks14
\symAMSa=\mathgroup4
\symAMSb=\mathgroup5
LaTeX Font Info: Overwriting math alphabet `\mathfrak' in version `bold'
(Font) U/euf/m/n --> U/euf/b/n on input line 132.
)) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsmath.sty"
Package: amsmath 2000/07/18 v2.13 AMS math features
\@mathmargin=\skip43
For additional information on amsmath, use the `?' option.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amstext.sty"
Package: amstext 2000/06/29 v2.01
("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsgen.sty"
File: amsgen.sty 1999/11/30 v2.0
\@emptytoks=\toks15
\ex@=\dimen103
)) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsbsy.sty"
Package: amsbsy 1999/11/29 v1.2d
\pmbraise@=\dimen104
) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsopn.sty"
Package: amsopn 1999/12/14 v2.01 operator names
\inf@bad=\count87
LaTeX Info: Redefining \frac on input line 211.
\uproot@=\count88
\leftroot@=\count89
LaTeX Info: Redefining \overline on input line 307.
\classnum@=\count90
\DOTSCASE@=\count91
LaTeX Info: Redefining \ldots on input line 379.
LaTeX Info: Redefining \dots on input line 382.
LaTeX Info: Redefining \cdots on input line 467.
\Mathstrutbox@=\box26
\strutbox@=\box27
\big@size=\dimen105
LaTeX Font Info: Redeclaring font encoding OML on input line 567.
LaTeX Font Info: Redeclaring font encoding OMS on input line 568.
\macc@depth=\count92
\c@MaxMatrixCols=\count93
\dotsspace@=\muskip10
\c@parentequation=\count94
\dspbrk@lvl=\count95
\tag@help=\toks16
\row@=\count96
\column@=\count97
\maxfields@=\count98
\andhelp@=\toks17
\eqnshift@=\dimen106
\alignsep@=\dimen107
\tagshift@=\dimen108
\tagwidth@=\dimen109
\totwidth@=\dimen110
\lineht@=\dimen111
\@envbody=\toks18
\multlinegap=\skip44
\multlinetaggap=\skip45
\mathdisplay@stack=\toks19
LaTeX Info: Redefining \[ on input line 2666.
LaTeX Info: Redefining \] on input line 2667.
) ("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\color.sty"
Package: color 2005/11/14 v1.0j Standard LaTeX Color (DPC)
("C:\Program Files\MiKTeX 2.7\tex\latex\00miktex\color.cfg"
File: color.cfg 2007/01/18 v1.5 color configuration of teTeX/TeXLive
Package color Info: Driver file: dvips.def on input line 130.
("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\dvips.def"
File: dvips.def 1999/02/16 v3.0i Driver-dependant file (DPC,SPQR)
) ("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\dvipsnam.def"
File: dvipsnam.def 1999/02/16 v3.0i Driver-dependant file (DPC,SPQR)
)) ("C:\Program Files\TeX4PPT\Styles\TeX4PPT.sty")
No file Text*Box*348.aux.
LaTeX Font Info: Checking defaults for OML/cmm/m/it on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for T1/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OT1/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OMS/cmsy/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OMX/cmex/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for U/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Try loading font information for U+msa on input line 9.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\umsa.fd"
File: umsa.fd 2002/01/19 v2.2g AMS font definitions
LaTeX Font Info: Try loading font information for U+msb on input line 9.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\umsb.fd"
File: umsb.fd 2002/01/19 v2.2g AMS font definitions
! Missing $ inserted.
<inserted text>
l.9 \boldsymbol{x}
I've inserted a begin-math/end-math symbol since I think
you left one out. Proceed, with fingers crossed.
! Extra }, or forgotten $.
\math@atom #1#2->\binrel@ {#1}\binrel@@ {#2}
l.9 \boldsymbol{x}
I've deleted a group-closing symbol because it seems to be
spurious, as in `$x}$'. But perhaps the } is legitimate and
you forgot something else, as in `\hbox{$x}'. In such cases
the way to recover is to insert both the forgotten and the
deleted material, e.g., by typing `I$}'.
! Missing $ inserted.
<inserted text>
l.9 \boldsymbol{x}
I've inserted something that you may have forgotten.
(See the <inserted text> above.)
With luck, this will get me unwedged. But if you
really didn't forget anything, try typing `2' now; then
my insertion and my current dilemma will both disappear.
! Missing } inserted.
<inserted text>
l.9 \boldsymbol{x}
I've inserted something that you may have forgotten.
(See the <inserted text> above.)
With luck, this will get me unwedged. But if you
really didn't forget anything, try typing `2' now; then
my insertion and my current dilemma will both disappear.
] ("Text Box 348.aux") )
Here is how much of TeX's memory you used:
1411 strings out of 95305
16061 string characters out of 1183061
59708 words of memory out of 1500000
4639 multiletter control sequences out of 110000
8096 words of font info for 31 fonts, out of 1200000 for 2000
14 hyphenation exceptions out of 8191
27i,5n,24p,222b,112s stack positions out of 5000i,500n,10000p,200000b,5000s
Output written on "Text Box 348.dvi" (1 page, 296 bytes).

## Text block 223

CTOP

## Text block 224

208.875

## Text block 225

CLEFT

## Text block 226

260.75

## Text block 227

CWIDTH

## Text block 228

18.5

## Text block 229

CHEIGHT

## Text block 230

12.5

## Text block 231

MAG

## Text block 232

SRC

## Text block 233

$\boldsymbol{b} \boldsymbol{x} =
\left[ \begin{array}{cc} b_1 & b_2 \end{array} \right]
\left[ \begin{array}{c} x_1 \\ x_2 \\ \end{array} \right] =
b_1 x_1 + b_2 x_2 $

## Text block 234

LOG

## Text block 235

This is pdfTeX, Version 3.1415926-1.40.9 (MiKTeX 2.7) (preloaded format=latex 2008.11.17) 25 FEB 2009 22:31
entering extended mode
**Text*Box*115
("Text Box 115.tex"
LaTeX2e <2005/12/01>
Babel <v3.8l> and hyphenation patterns for english, dumylang, nohyphenation, ge
rman, ngerman, german-x-2008-06-18, ngerman-x-2008-06-18, french, loaded.
("C:\Program Files\MiKTeX 2.7\tex\latex\base\article.cls"
Document Class: article 2005/09/16 v1.4f Standard LaTeX document class
("C:\Program Files\MiKTeX 2.7\tex\latex\base\size10.clo"
File: size10.clo 2005/09/16 v1.4f Standard LaTeX file (size option)
\c@part=\count79
\c@section=\count80
\c@subsection=\count81
\c@subsubsection=\count82
\c@paragraph=\count83
\c@subparagraph=\count84
\c@figure=\count85
\c@table=\count86
\abovecaptionskip=\skip41
\belowcaptionskip=\skip42
\bibindent=\dimen102
) ("C:\Program Files\MiKTeX 2.7\tex\latex\tools\xspace.sty"
Package: xspace 2006/05/08 v1.12 Space after command names (DPC,MH)
) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\amssymb.sty"
Package: amssymb 2002/01/22 v2.2d
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\amsfonts.sty"
Package: amsfonts 2001/10/25 v2.2f
\@emptytoks=\toks14
\symAMSa=\mathgroup4
\symAMSb=\mathgroup5
LaTeX Font Info: Overwriting math alphabet `\mathfrak' in version `bold'
(Font) U/euf/m/n --> U/euf/b/n on input line 132.
)) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsmath.sty"
Package: amsmath 2000/07/18 v2.13 AMS math features
\@mathmargin=\skip43
For additional information on amsmath, use the `?' option.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amstext.sty"
Package: amstext 2000/06/29 v2.01
("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsgen.sty"
File: amsgen.sty 1999/11/30 v2.0
\@emptytoks=\toks15
\ex@=\dimen103
)) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsbsy.sty"
Package: amsbsy 1999/11/29 v1.2d
\pmbraise@=\dimen104
) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsopn.sty"
Package: amsopn 1999/12/14 v2.01 operator names
\inf@bad=\count87
LaTeX Info: Redefining \frac on input line 211.
\uproot@=\count88
\leftroot@=\count89
LaTeX Info: Redefining \overline on input line 307.
\classnum@=\count90
\DOTSCASE@=\count91
LaTeX Info: Redefining \ldots on input line 379.
LaTeX Info: Redefining \dots on input line 382.
LaTeX Info: Redefining \cdots on input line 467.
\Mathstrutbox@=\box26
\strutbox@=\box27
\big@size=\dimen105
LaTeX Font Info: Redeclaring font encoding OML on input line 567.
LaTeX Font Info: Redeclaring font encoding OMS on input line 568.
\macc@depth=\count92
\c@MaxMatrixCols=\count93
\dotsspace@=\muskip10
\c@parentequation=\count94
\dspbrk@lvl=\count95
\tag@help=\toks16
\row@=\count96
\column@=\count97
\maxfields@=\count98
\andhelp@=\toks17
\eqnshift@=\dimen106
\alignsep@=\dimen107
\tagshift@=\dimen108
\tagwidth@=\dimen109
\totwidth@=\dimen110
\lineht@=\dimen111
\@envbody=\toks18
\multlinegap=\skip44
\multlinetaggap=\skip45
\mathdisplay@stack=\toks19
LaTeX Info: Redefining \[ on input line 2666.
LaTeX Info: Redefining \] on input line 2667.
) ("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\color.sty"
Package: color 2005/11/14 v1.0j Standard LaTeX Color (DPC)
("C:\Program Files\MiKTeX 2.7\tex\latex\00miktex\color.cfg"
File: color.cfg 2007/01/18 v1.5 color configuration of teTeX/TeXLive
Package color Info: Driver file: dvips.def on input line 130.
("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\dvips.def"
File: dvips.def 1999/02/16 v3.0i Driver-dependant file (DPC,SPQR)
) ("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\dvipsnam.def"
File: dvipsnam.def 1999/02/16 v3.0i Driver-dependant file (DPC,SPQR)
)) ("C:\Program Files\TeX4PPT\Styles\TeX4PPT.sty")
No file Text*Box*115.aux.
LaTeX Font Info: Checking defaults for OML/cmm/m/it on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for T1/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OT1/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OMS/cmsy/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OMX/cmex/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for U/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Try loading font information for U+msa on input line 9.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\umsa.fd"
File: umsa.fd 2002/01/19 v2.2g AMS font definitions
LaTeX Font Info: Try loading font information for U+msb on input line 9.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\umsb.fd"
File: umsb.fd 2002/01/19 v2.2g AMS font definitions
] ("Text Box 115.aux") )
Here is how much of TeX's memory you used:
1411 strings out of 95305
16061 string characters out of 1183061
60708 words of memory out of 1500000
4639 multiletter control sequences out of 110000
8096 words of font info for 31 fonts, out of 1200000 for 2000
14 hyphenation exceptions out of 8191
27i,8n,24p,222b,112s stack positions out of 5000i,500n,10000p,200000b,5000s
Output written on "Text Box 115.dvi" (1 page, 684 bytes).

## Text block 236

CTOP

## Text block 237

186.125

## Text block 238

CLEFT

## Text block 239

250.375

## Text block 240

CWIDTH

## Text block 241

446.25

## Text block 242

CHEIGHT

## Text block 243

64.375

## Text block 244

MAG

## Text block 245

SRC

## Text block 246

$\boldsymbol{x} = \left[
\begin{array}{c}
x_1 \\
x_2
\end{array}
\right] \
\boldsymbol{b} = \left[
\begin{array}{cc} b_1 &
b_2
\end{array}
\right]$

## Text block 247

LOG

## Text block 248

This is pdfTeX, Version 3.1415926-1.40.9 (MiKTeX 2.7) (preloaded format=latex 2008.11.17) 25 FEB 2009 23:00
entering extended mode
**Text*Box*162
("Text Box 162.tex"
LaTeX2e <2005/12/01>
Babel <v3.8l> and hyphenation patterns for english, dumylang, nohyphenation, ge
rman, ngerman, german-x-2008-06-18, ngerman-x-2008-06-18, french, loaded.
("C:\Program Files\MiKTeX 2.7\tex\latex\base\article.cls"
Document Class: article 2005/09/16 v1.4f Standard LaTeX document class
("C:\Program Files\MiKTeX 2.7\tex\latex\base\size10.clo"
File: size10.clo 2005/09/16 v1.4f Standard LaTeX file (size option)
\c@part=\count79
\c@section=\count80
\c@subsection=\count81
\c@subsubsection=\count82
\c@paragraph=\count83
\c@subparagraph=\count84
\c@figure=\count85
\c@table=\count86
\abovecaptionskip=\skip41
\belowcaptionskip=\skip42
\bibindent=\dimen102
) ("C:\Program Files\MiKTeX 2.7\tex\latex\tools\xspace.sty"
Package: xspace 2006/05/08 v1.12 Space after command names (DPC,MH)
) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\amssymb.sty"
Package: amssymb 2002/01/22 v2.2d
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\amsfonts.sty"
Package: amsfonts 2001/10/25 v2.2f
\@emptytoks=\toks14
\symAMSa=\mathgroup4
\symAMSb=\mathgroup5
LaTeX Font Info: Overwriting math alphabet `\mathfrak' in version `bold'
(Font) U/euf/m/n --> U/euf/b/n on input line 132.
)) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsmath.sty"
Package: amsmath 2000/07/18 v2.13 AMS math features
\@mathmargin=\skip43
For additional information on amsmath, use the `?' option.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amstext.sty"
Package: amstext 2000/06/29 v2.01
("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsgen.sty"
File: amsgen.sty 1999/11/30 v2.0
\@emptytoks=\toks15
\ex@=\dimen103
)) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsbsy.sty"
Package: amsbsy 1999/11/29 v1.2d
\pmbraise@=\dimen104
) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsopn.sty"
Package: amsopn 1999/12/14 v2.01 operator names
\inf@bad=\count87
LaTeX Info: Redefining \frac on input line 211.
\uproot@=\count88
\leftroot@=\count89
LaTeX Info: Redefining \overline on input line 307.
\classnum@=\count90
\DOTSCASE@=\count91
LaTeX Info: Redefining \ldots on input line 379.
LaTeX Info: Redefining \dots on input line 382.
LaTeX Info: Redefining \cdots on input line 467.
\Mathstrutbox@=\box26
\strutbox@=\box27
\big@size=\dimen105
LaTeX Font Info: Redeclaring font encoding OML on input line 567.
LaTeX Font Info: Redeclaring font encoding OMS on input line 568.
\macc@depth=\count92
\c@MaxMatrixCols=\count93
\dotsspace@=\muskip10
\c@parentequation=\count94
\dspbrk@lvl=\count95
\tag@help=\toks16
\row@=\count96
\column@=\count97
\maxfields@=\count98
\andhelp@=\toks17
\eqnshift@=\dimen106
\alignsep@=\dimen107
\tagshift@=\dimen108
\tagwidth@=\dimen109
\totwidth@=\dimen110
\lineht@=\dimen111
\@envbody=\toks18
\multlinegap=\skip44
\multlinetaggap=\skip45
\mathdisplay@stack=\toks19
LaTeX Info: Redefining \[ on input line 2666.
LaTeX Info: Redefining \] on input line 2667.
) ("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\color.sty"
Package: color 2005/11/14 v1.0j Standard LaTeX Color (DPC)
("C:\Program Files\MiKTeX 2.7\tex\latex\00miktex\color.cfg"
File: color.cfg 2007/01/18 v1.5 color configuration of teTeX/TeXLive
Package color Info: Driver file: dvips.def on input line 130.
("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\dvips.def"
File: dvips.def 1999/02/16 v3.0i Driver-dependant file (DPC,SPQR)
) ("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\dvipsnam.def"
File: dvipsnam.def 1999/02/16 v3.0i Driver-dependant file (DPC,SPQR)
)) ("C:\Program Files\TeX4PPT\Styles\TeX4PPT.sty")
No file Text*Box*162.aux.
LaTeX Font Info: Checking defaults for OML/cmm/m/it on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for T1/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OT1/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OMS/cmsy/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OMX/cmex/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for U/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Try loading font information for U+msa on input line 9.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\umsa.fd"
File: umsa.fd 2002/01/19 v2.2g AMS font definitions
LaTeX Font Info: Try loading font information for U+msb on input line 9.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\umsb.fd"
File: umsb.fd 2002/01/19 v2.2g AMS font definitions
] ("Text Box 162.aux") )
Here is how much of TeX's memory you used:
1411 strings out of 95305
16061 string characters out of 1183061
59708 words of memory out of 1500000
4639 multiletter control sequences out of 110000
8096 words of font info for 31 fonts, out of 1200000 for 2000
14 hyphenation exceptions out of 8191
27i,8n,24p,222b,112s stack positions out of 5000i,500n,10000p,200000b,5000s
Output written on "Text Box 162.dvi" (1 page, 628 bytes).

## Text block 249

CTOP

## Text block 250

186.125

## Text block 251

CLEFT

## Text block 252

250.375

## Text block 253

CWIDTH

## Text block 254

CHEIGHT

## Text block 255

64.375

## Text block 256

MAG

## Text block 257

SRC

## Text block 258

\boldsymbol{b}_2

## Text block 259

LOG

## Text block 260

This is pdfTeX, Version 3.1415926-1.40.9 (MiKTeX 2.7) (preloaded format=latex 2008.11.17) 25 FEB 2009 22:43
entering extended mode
**Text*Box*44
("Text Box 44.tex"
LaTeX2e <2005/12/01>
Babel <v3.8l> and hyphenation patterns for english, dumylang, nohyphenation, ge
rman, ngerman, german-x-2008-06-18, ngerman-x-2008-06-18, french, loaded.
("C:\Program Files\MiKTeX 2.7\tex\latex\base\article.cls"
Document Class: article 2005/09/16 v1.4f Standard LaTeX document class
("C:\Program Files\MiKTeX 2.7\tex\latex\base\size10.clo"
File: size10.clo 2005/09/16 v1.4f Standard LaTeX file (size option)
\c@part=\count79
\c@section=\count80
\c@subsection=\count81
\c@subsubsection=\count82
\c@paragraph=\count83
\c@subparagraph=\count84
\c@figure=\count85
\c@table=\count86
\abovecaptionskip=\skip41
\belowcaptionskip=\skip42
\bibindent=\dimen102
) ("C:\Program Files\MiKTeX 2.7\tex\latex\tools\xspace.sty"
Package: xspace 2006/05/08 v1.12 Space after command names (DPC,MH)
) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\amssymb.sty"
Package: amssymb 2002/01/22 v2.2d
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\amsfonts.sty"
Package: amsfonts 2001/10/25 v2.2f
\@emptytoks=\toks14
\symAMSa=\mathgroup4
\symAMSb=\mathgroup5
LaTeX Font Info: Overwriting math alphabet `\mathfrak' in version `bold'
(Font) U/euf/m/n --> U/euf/b/n on input line 132.
)) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsmath.sty"
Package: amsmath 2000/07/18 v2.13 AMS math features
\@mathmargin=\skip43
For additional information on amsmath, use the `?' option.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amstext.sty"
Package: amstext 2000/06/29 v2.01
("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsgen.sty"
File: amsgen.sty 1999/11/30 v2.0
\@emptytoks=\toks15
\ex@=\dimen103
)) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsbsy.sty"
Package: amsbsy 1999/11/29 v1.2d
\pmbraise@=\dimen104
) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsopn.sty"
Package: amsopn 1999/12/14 v2.01 operator names
\inf@bad=\count87
LaTeX Info: Redefining \frac on input line 211.
\uproot@=\count88
\leftroot@=\count89
LaTeX Info: Redefining \overline on input line 307.
\classnum@=\count90
\DOTSCASE@=\count91
LaTeX Info: Redefining \ldots on input line 379.
LaTeX Info: Redefining \dots on input line 382.
LaTeX Info: Redefining \cdots on input line 467.
\Mathstrutbox@=\box26
\strutbox@=\box27
\big@size=\dimen105
LaTeX Font Info: Redeclaring font encoding OML on input line 567.
LaTeX Font Info: Redeclaring font encoding OMS on input line 568.
\macc@depth=\count92
\c@MaxMatrixCols=\count93
\dotsspace@=\muskip10
\c@parentequation=\count94
\dspbrk@lvl=\count95
\tag@help=\toks16
\row@=\count96
\column@=\count97
\maxfields@=\count98
\andhelp@=\toks17
\eqnshift@=\dimen106
\alignsep@=\dimen107
\tagshift@=\dimen108
\tagwidth@=\dimen109
\totwidth@=\dimen110
\lineht@=\dimen111
\@envbody=\toks18
\multlinegap=\skip44
\multlinetaggap=\skip45
\mathdisplay@stack=\toks19
LaTeX Info: Redefining \[ on input line 2666.
LaTeX Info: Redefining \] on input line 2667.
) ("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\color.sty"
Package: color 2005/11/14 v1.0j Standard LaTeX Color (DPC)
("C:\Program Files\MiKTeX 2.7\tex\latex\00miktex\color.cfg"
File: color.cfg 2007/01/18 v1.5 color configuration of teTeX/TeXLive
Package color Info: Driver file: dvips.def on input line 130.
("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\dvips.def"
File: dvips.def 1999/02/16 v3.0i Driver-dependant file (DPC,SPQR)
) ("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\dvipsnam.def"
File: dvipsnam.def 1999/02/16 v3.0i Driver-dependant file (DPC,SPQR)
)) ("C:\Program Files\TeX4PPT\Styles\TeX4PPT.sty")
No file Text*Box*44.aux.
LaTeX Font Info: Checking defaults for OML/cmm/m/it on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for T1/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OT1/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OMS/cmsy/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OMX/cmex/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for U/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Try loading font information for U+msa on input line 9.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\umsa.fd"
File: umsa.fd 2002/01/19 v2.2g AMS font definitions
LaTeX Font Info: Try loading font information for U+msb on input line 9.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\umsb.fd"
File: umsb.fd 2002/01/19 v2.2g AMS font definitions
! Missing $ inserted.
<inserted text>
l.9 \boldsymbol{b}
I've inserted a begin-math/end-math symbol since I think
you left one out. Proceed, with fingers crossed.
! Extra }, or forgotten $.
\math@atom #1#2->\binrel@ {#1}\binrel@@ {#2}
l.9 \boldsymbol{b}
I've deleted a group-closing symbol because it seems to be
spurious, as in `$x}$'. But perhaps the } is legitimate and
you forgot something else, as in `\hbox{$x}'. In such cases
the way to recover is to insert both the forgotten and the
deleted material, e.g., by typing `I$}'.
! Missing $ inserted.
<inserted text>
l.9 \boldsymbol{b}
I've inserted something that you may have forgotten.
(See the <inserted text> above.)
With luck, this will get me unwedged. But if you
really didn't forget anything, try typing `2' now; then
my insertion and my current dilemma will both disappear.
! Missing } inserted.
<inserted text>
l.9 \boldsymbol{b}
I've inserted something that you may have forgotten.
(See the <inserted text> above.)
With luck, this will get me unwedged. But if you
really didn't forget anything, try typing `2' now; then
my insertion and my current dilemma will both disappear.
! Missing $ inserted.
<inserted text>
l.9 \boldsymbol{b}_
I've inserted a begin-math/end-math symbol since I think
you left one out. Proceed, with fingers crossed.
! Missing $ inserted.
<inserted text>
l.10 \end{document}
I've inserted a begin-math/end-math symbol since I think
you left one out. Proceed, with fingers crossed.
] ("Text Box 44.aux") )
Here is how much of TeX's memory you used:
1411 strings out of 95305
16053 string characters out of 1183061
59708 words of memory out of 1500000
4639 multiletter control sequences out of 110000
8096 words of font info for 31 fonts, out of 1200000 for 2000
14 hyphenation exceptions out of 8191
27i,5n,24p,221b,112s stack positions out of 5000i,500n,10000p,200000b,5000s
Output written on "Text Box 44.dvi" (1 page, 348 bytes).

## Text block 261

CTOP

## Text block 262

189.125

## Text block 263

CLEFT

## Text block 264

243.375

## Text block 265

CWIDTH

## Text block 266

23.875

## Text block 267

CHEIGHT

## Text block 268

21.875

## Text block 269

MAG

## Text block 270

SRC

## Text block 271

\boldsymbol{b}_1

## Text block 272

LOG

## Text block 273

This is pdfTeX, Version 3.1415926-1.40.9 (MiKTeX 2.7) (preloaded format=latex 2008.11.17) 25 FEB 2009 22:44
entering extended mode
**Text*Box*53
("Text Box 53.tex"
LaTeX2e <2005/12/01>
Babel <v3.8l> and hyphenation patterns for english, dumylang, nohyphenation, ge
rman, ngerman, german-x-2008-06-18, ngerman-x-2008-06-18, french, loaded.
("C:\Program Files\MiKTeX 2.7\tex\latex\base\article.cls"
Document Class: article 2005/09/16 v1.4f Standard LaTeX document class
("C:\Program Files\MiKTeX 2.7\tex\latex\base\size10.clo"
File: size10.clo 2005/09/16 v1.4f Standard LaTeX file (size option)
\c@part=\count79
\c@section=\count80
\c@subsection=\count81
\c@subsubsection=\count82
\c@paragraph=\count83
\c@subparagraph=\count84
\c@figure=\count85
\c@table=\count86
\abovecaptionskip=\skip41
\belowcaptionskip=\skip42
\bibindent=\dimen102
) ("C:\Program Files\MiKTeX 2.7\tex\latex\tools\xspace.sty"
Package: xspace 2006/05/08 v1.12 Space after command names (DPC,MH)
) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\amssymb.sty"
Package: amssymb 2002/01/22 v2.2d
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\amsfonts.sty"
Package: amsfonts 2001/10/25 v2.2f
\@emptytoks=\toks14
\symAMSa=\mathgroup4
\symAMSb=\mathgroup5
LaTeX Font Info: Overwriting math alphabet `\mathfrak' in version `bold'
(Font) U/euf/m/n --> U/euf/b/n on input line 132.
)) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsmath.sty"
Package: amsmath 2000/07/18 v2.13 AMS math features
\@mathmargin=\skip43
For additional information on amsmath, use the `?' option.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amstext.sty"
Package: amstext 2000/06/29 v2.01
("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsgen.sty"
File: amsgen.sty 1999/11/30 v2.0
\@emptytoks=\toks15
\ex@=\dimen103
)) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsbsy.sty"
Package: amsbsy 1999/11/29 v1.2d
\pmbraise@=\dimen104
) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsopn.sty"
Package: amsopn 1999/12/14 v2.01 operator names
\inf@bad=\count87
LaTeX Info: Redefining \frac on input line 211.
\uproot@=\count88
\leftroot@=\count89
LaTeX Info: Redefining \overline on input line 307.
\classnum@=\count90
\DOTSCASE@=\count91
LaTeX Info: Redefining \ldots on input line 379.
LaTeX Info: Redefining \dots on input line 382.
LaTeX Info: Redefining \cdots on input line 467.
\Mathstrutbox@=\box26
\strutbox@=\box27
\big@size=\dimen105
LaTeX Font Info: Redeclaring font encoding OML on input line 567.
LaTeX Font Info: Redeclaring font encoding OMS on input line 568.
\macc@depth=\count92
\c@MaxMatrixCols=\count93
\dotsspace@=\muskip10
\c@parentequation=\count94
\dspbrk@lvl=\count95
\tag@help=\toks16
\row@=\count96
\column@=\count97
\maxfields@=\count98
\andhelp@=\toks17
\eqnshift@=\dimen106
\alignsep@=\dimen107
\tagshift@=\dimen108
\tagwidth@=\dimen109
\totwidth@=\dimen110
\lineht@=\dimen111
\@envbody=\toks18
\multlinegap=\skip44
\multlinetaggap=\skip45
\mathdisplay@stack=\toks19
LaTeX Info: Redefining \[ on input line 2666.
LaTeX Info: Redefining \] on input line 2667.
) ("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\color.sty"
Package: color 2005/11/14 v1.0j Standard LaTeX Color (DPC)
("C:\Program Files\MiKTeX 2.7\tex\latex\00miktex\color.cfg"
File: color.cfg 2007/01/18 v1.5 color configuration of teTeX/TeXLive
Package color Info: Driver file: dvips.def on input line 130.
("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\dvips.def"
File: dvips.def 1999/02/16 v3.0i Driver-dependant file (DPC,SPQR)
) ("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\dvipsnam.def"
File: dvipsnam.def 1999/02/16 v3.0i Driver-dependant file (DPC,SPQR)
)) ("C:\Program Files\TeX4PPT\Styles\TeX4PPT.sty")
No file Text*Box*53.aux.
LaTeX Font Info: Checking defaults for OML/cmm/m/it on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for T1/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OT1/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OMS/cmsy/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OMX/cmex/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for U/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Try loading font information for U+msa on input line 9.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\umsa.fd"
File: umsa.fd 2002/01/19 v2.2g AMS font definitions
LaTeX Font Info: Try loading font information for U+msb on input line 9.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\umsb.fd"
File: umsb.fd 2002/01/19 v2.2g AMS font definitions
! Missing $ inserted.
<inserted text>
l.9 \boldsymbol{b}
I've inserted a begin-math/end-math symbol since I think
you left one out. Proceed, with fingers crossed.
! Extra }, or forgotten $.
\math@atom #1#2->\binrel@ {#1}\binrel@@ {#2}
l.9 \boldsymbol{b}
I've deleted a group-closing symbol because it seems to be
spurious, as in `$x}$'. But perhaps the } is legitimate and
you forgot something else, as in `\hbox{$x}'. In such cases
the way to recover is to insert both the forgotten and the
deleted material, e.g., by typing `I$}'.
! Missing $ inserted.
<inserted text>
l.9 \boldsymbol{b}
I've inserted something that you may have forgotten.
(See the <inserted text> above.)
With luck, this will get me unwedged. But if you
really didn't forget anything, try typing `2' now; then
my insertion and my current dilemma will both disappear.
! Missing } inserted.
<inserted text>
l.9 \boldsymbol{b}
I've inserted something that you may have forgotten.
(See the <inserted text> above.)
With luck, this will get me unwedged. But if you
really didn't forget anything, try typing `2' now; then
my insertion and my current dilemma will both disappear.
! Missing $ inserted.
<inserted text>
l.9 \boldsymbol{b}_
I've inserted a begin-math/end-math symbol since I think
you left one out. Proceed, with fingers crossed.
! Missing $ inserted.
<inserted text>
l.10 \end{document}
I've inserted a begin-math/end-math symbol since I think
you left one out. Proceed, with fingers crossed.
] ("Text Box 53.aux") )
Here is how much of TeX's memory you used:
1411 strings out of 95305
16053 string characters out of 1183061
59708 words of memory out of 1500000
4639 multiletter control sequences out of 110000
8096 words of font info for 31 fonts, out of 1200000 for 2000
14 hyphenation exceptions out of 8191
27i,5n,24p,221b,112s stack positions out of 5000i,500n,10000p,200000b,5000s
Output written on "Text Box 53.dvi" (1 page, 348 bytes).

## Text block 274

CTOP

## Text block 275

189.125

## Text block 276

CLEFT

## Text block 277

243.375

## Text block 278

CWIDTH

## Text block 279

23.875

## Text block 280

CHEIGHT

## Text block 281

21.875

## Text block 282

MAG

## Text block 283

SRC

## Text block 284

\boldsymbol{x}

## Text block 285

LOG

## Text block 286

This is pdfTeX, Version 3.1415926-1.40.9 (MiKTeX 2.7) (preloaded format=latex 2008.11.17) 25 FEB 2009 22:45
entering extended mode
**Text*Box*62
("Text Box 62.tex"
LaTeX2e <2005/12/01>
Babel <v3.8l> and hyphenation patterns for english, dumylang, nohyphenation, ge
rman, ngerman, german-x-2008-06-18, ngerman-x-2008-06-18, french, loaded.
("C:\Program Files\MiKTeX 2.7\tex\latex\base\article.cls"
Document Class: article 2005/09/16 v1.4f Standard LaTeX document class
("C:\Program Files\MiKTeX 2.7\tex\latex\base\size10.clo"
File: size10.clo 2005/09/16 v1.4f Standard LaTeX file (size option)
\c@part=\count79
\c@section=\count80
\c@subsection=\count81
\c@subsubsection=\count82
\c@paragraph=\count83
\c@subparagraph=\count84
\c@figure=\count85
\c@table=\count86
\abovecaptionskip=\skip41
\belowcaptionskip=\skip42
\bibindent=\dimen102
) ("C:\Program Files\MiKTeX 2.7\tex\latex\tools\xspace.sty"
Package: xspace 2006/05/08 v1.12 Space after command names (DPC,MH)
) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\amssymb.sty"
Package: amssymb 2002/01/22 v2.2d
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\amsfonts.sty"
Package: amsfonts 2001/10/25 v2.2f
\@emptytoks=\toks14
\symAMSa=\mathgroup4
\symAMSb=\mathgroup5
LaTeX Font Info: Overwriting math alphabet `\mathfrak' in version `bold'
(Font) U/euf/m/n --> U/euf/b/n on input line 132.
)) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsmath.sty"
Package: amsmath 2000/07/18 v2.13 AMS math features
\@mathmargin=\skip43
For additional information on amsmath, use the `?' option.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amstext.sty"
Package: amstext 2000/06/29 v2.01
("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsgen.sty"
File: amsgen.sty 1999/11/30 v2.0
\@emptytoks=\toks15
\ex@=\dimen103
)) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsbsy.sty"
Package: amsbsy 1999/11/29 v1.2d
\pmbraise@=\dimen104
) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsopn.sty"
Package: amsopn 1999/12/14 v2.01 operator names
\inf@bad=\count87
LaTeX Info: Redefining \frac on input line 211.
\uproot@=\count88
\leftroot@=\count89
LaTeX Info: Redefining \overline on input line 307.
\classnum@=\count90
\DOTSCASE@=\count91
LaTeX Info: Redefining \ldots on input line 379.
LaTeX Info: Redefining \dots on input line 382.
LaTeX Info: Redefining \cdots on input line 467.
\Mathstrutbox@=\box26
\strutbox@=\box27
\big@size=\dimen105
LaTeX Font Info: Redeclaring font encoding OML on input line 567.
LaTeX Font Info: Redeclaring font encoding OMS on input line 568.
\macc@depth=\count92
\c@MaxMatrixCols=\count93
\dotsspace@=\muskip10
\c@parentequation=\count94
\dspbrk@lvl=\count95
\tag@help=\toks16
\row@=\count96
\column@=\count97
\maxfields@=\count98
\andhelp@=\toks17
\eqnshift@=\dimen106
\alignsep@=\dimen107
\tagshift@=\dimen108
\tagwidth@=\dimen109
\totwidth@=\dimen110
\lineht@=\dimen111
\@envbody=\toks18
\multlinegap=\skip44
\multlinetaggap=\skip45
\mathdisplay@stack=\toks19
LaTeX Info: Redefining \[ on input line 2666.
LaTeX Info: Redefining \] on input line 2667.
) ("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\color.sty"
Package: color 2005/11/14 v1.0j Standard LaTeX Color (DPC)
("C:\Program Files\MiKTeX 2.7\tex\latex\00miktex\color.cfg"
File: color.cfg 2007/01/18 v1.5 color configuration of teTeX/TeXLive
Package color Info: Driver file: dvips.def on input line 130.
("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\dvips.def"
File: dvips.def 1999/02/16 v3.0i Driver-dependant file (DPC,SPQR)
) ("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\dvipsnam.def"
File: dvipsnam.def 1999/02/16 v3.0i Driver-dependant file (DPC,SPQR)
)) ("C:\Program Files\TeX4PPT\Styles\TeX4PPT.sty")
No file Text*Box*62.aux.
LaTeX Font Info: Checking defaults for OML/cmm/m/it on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for T1/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OT1/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OMS/cmsy/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OMX/cmex/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for U/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Try loading font information for U+msa on input line 9.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\umsa.fd"
File: umsa.fd 2002/01/19 v2.2g AMS font definitions
LaTeX Font Info: Try loading font information for U+msb on input line 9.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\umsb.fd"
File: umsb.fd 2002/01/19 v2.2g AMS font definitions
! Missing $ inserted.
<inserted text>
l.9 \boldsymbol{x}
I've inserted a begin-math/end-math symbol since I think
you left one out. Proceed, with fingers crossed.
! Extra }, or forgotten $.
\math@atom #1#2->\binrel@ {#1}\binrel@@ {#2}
l.9 \boldsymbol{x}
I've deleted a group-closing symbol because it seems to be
spurious, as in `$x}$'. But perhaps the } is legitimate and
you forgot something else, as in `\hbox{$x}'. In such cases
the way to recover is to insert both the forgotten and the
deleted material, e.g., by typing `I$}'.
! Missing $ inserted.
<inserted text>
l.9 \boldsymbol{x}
I've inserted something that you may have forgotten.
(See the <inserted text> above.)
With luck, this will get me unwedged. But if you
really didn't forget anything, try typing `2' now; then
my insertion and my current dilemma will both disappear.
! Missing } inserted.
<inserted text>
l.9 \boldsymbol{x}
I've inserted something that you may have forgotten.
(See the <inserted text> above.)
With luck, this will get me unwedged. But if you
really didn't forget anything, try typing `2' now; then
my insertion and my current dilemma will both disappear.
] ("Text Box 62.aux") )
Here is how much of TeX's memory you used:
1411 strings out of 95305
16053 string characters out of 1183061
59708 words of memory out of 1500000
4639 multiletter control sequences out of 110000
8096 words of font info for 31 fonts, out of 1200000 for 2000
14 hyphenation exceptions out of 8191
27i,5n,24p,221b,112s stack positions out of 5000i,500n,10000p,200000b,5000s
Output written on "Text Box 62.dvi" (1 page, 296 bytes).

## Text block 287

CTOP

## Text block 288

195.625

## Text block 289

CLEFT

## Text block 290

243.375

## Text block 291

CWIDTH

## Text block 292

17.125

## Text block 293

CHEIGHT

## Text block 294

11.5

## Text block 295

MAG

## Text block 296

SRC

## Text block 297

y_1

## Text block 298

LOG

## Text block 299

This is pdfTeX, Version 3.1415926-1.40.9 (MiKTeX 2.7) (preloaded format=latex 2008.11.17) 25 FEB 2009 22:46
entering extended mode
**Text*Box*83
("Text Box 83.tex"
LaTeX2e <2005/12/01>
Babel <v3.8l> and hyphenation patterns for english, dumylang, nohyphenation, ge
rman, ngerman, german-x-2008-06-18, ngerman-x-2008-06-18, french, loaded.
("C:\Program Files\MiKTeX 2.7\tex\latex\base\article.cls"
Document Class: article 2005/09/16 v1.4f Standard LaTeX document class
("C:\Program Files\MiKTeX 2.7\tex\latex\base\size10.clo"
File: size10.clo 2005/09/16 v1.4f Standard LaTeX file (size option)
\c@part=\count79
\c@section=\count80
\c@subsection=\count81
\c@subsubsection=\count82
\c@paragraph=\count83
\c@subparagraph=\count84
\c@figure=\count85
\c@table=\count86
\abovecaptionskip=\skip41
\belowcaptionskip=\skip42
\bibindent=\dimen102
) ("C:\Program Files\MiKTeX 2.7\tex\latex\tools\xspace.sty"
Package: xspace 2006/05/08 v1.12 Space after command names (DPC,MH)
) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\amssymb.sty"
Package: amssymb 2002/01/22 v2.2d
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\amsfonts.sty"
Package: amsfonts 2001/10/25 v2.2f
\@emptytoks=\toks14
\symAMSa=\mathgroup4
\symAMSb=\mathgroup5
LaTeX Font Info: Overwriting math alphabet `\mathfrak' in version `bold'
(Font) U/euf/m/n --> U/euf/b/n on input line 132.
)) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsmath.sty"
Package: amsmath 2000/07/18 v2.13 AMS math features
\@mathmargin=\skip43
For additional information on amsmath, use the `?' option.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amstext.sty"
Package: amstext 2000/06/29 v2.01
("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsgen.sty"
File: amsgen.sty 1999/11/30 v2.0
\@emptytoks=\toks15
\ex@=\dimen103
)) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsbsy.sty"
Package: amsbsy 1999/11/29 v1.2d
\pmbraise@=\dimen104
) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsopn.sty"
Package: amsopn 1999/12/14 v2.01 operator names
\inf@bad=\count87
LaTeX Info: Redefining \frac on input line 211.
\uproot@=\count88
\leftroot@=\count89
LaTeX Info: Redefining \overline on input line 307.
\classnum@=\count90
\DOTSCASE@=\count91
LaTeX Info: Redefining \ldots on input line 379.
LaTeX Info: Redefining \dots on input line 382.
LaTeX Info: Redefining \cdots on input line 467.
\Mathstrutbox@=\box26
\strutbox@=\box27
\big@size=\dimen105
LaTeX Font Info: Redeclaring font encoding OML on input line 567.
LaTeX Font Info: Redeclaring font encoding OMS on input line 568.
\macc@depth=\count92
\c@MaxMatrixCols=\count93
\dotsspace@=\muskip10
\c@parentequation=\count94
\dspbrk@lvl=\count95
\tag@help=\toks16
\row@=\count96
\column@=\count97
\maxfields@=\count98
\andhelp@=\toks17
\eqnshift@=\dimen106
\alignsep@=\dimen107
\tagshift@=\dimen108
\tagwidth@=\dimen109
\totwidth@=\dimen110
\lineht@=\dimen111
\@envbody=\toks18
\multlinegap=\skip44
\multlinetaggap=\skip45
\mathdisplay@stack=\toks19
LaTeX Info: Redefining \[ on input line 2666.
LaTeX Info: Redefining \] on input line 2667.
) ("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\color.sty"
Package: color 2005/11/14 v1.0j Standard LaTeX Color (DPC)
("C:\Program Files\MiKTeX 2.7\tex\latex\00miktex\color.cfg"
File: color.cfg 2007/01/18 v1.5 color configuration of teTeX/TeXLive
Package color Info: Driver file: dvips.def on input line 130.
("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\dvips.def"
File: dvips.def 1999/02/16 v3.0i Driver-dependant file (DPC,SPQR)
) ("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\dvipsnam.def"
File: dvipsnam.def 1999/02/16 v3.0i Driver-dependant file (DPC,SPQR)
)) ("C:\Program Files\TeX4PPT\Styles\TeX4PPT.sty")
No file Text*Box*83.aux.
LaTeX Font Info: Checking defaults for OML/cmm/m/it on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for T1/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OT1/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OMS/cmsy/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OMX/cmex/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for U/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
! Missing $ inserted.
<inserted text>
l.9 y_
I've inserted a begin-math/end-math symbol since I think
you left one out. Proceed, with fingers crossed.
LaTeX Font Info: Try loading font information for U+msa on input line 9.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\umsa.fd"
File: umsa.fd 2002/01/19 v2.2g AMS font definitions
LaTeX Font Info: Try loading font information for U+msb on input line 9.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\umsb.fd"
File: umsb.fd 2002/01/19 v2.2g AMS font definitions
! Missing $ inserted.
<inserted text>
l.10 \end{document}
I've inserted a begin-math/end-math symbol since I think
you left one out. Proceed, with fingers crossed.
] ("Text Box 83.aux") )
Here is how much of TeX's memory you used:
1393 strings out of 95305
15870 string characters out of 1183061
59708 words of memory out of 1500000
4630 multiletter control sequences out of 110000
5339 words of font info for 22 fonts, out of 1200000 for 2000
14 hyphenation exceptions out of 8191
27i,5n,24p,221b,112s stack positions out of 5000i,500n,10000p,200000b,5000s
Output written on "Text Box 83.dvi" (1 page, 340 bytes).

## Text block 300

CTOP

## Text block 301

CLEFT

## Text block 302

223.75

## Text block 303

CWIDTH

## Text block 304

21.625

## Text block 305

CHEIGHT

## Text block 306

14.625

## Text block 307

MAG

## Text block 308

SRC

## Text block 309

y_2

## Text block 310

LOG

## Text block 311

This is pdfTeX, Version 3.1415926-1.40.9 (MiKTeX 2.7) (preloaded format=latex 2008.11.17) 25 FEB 2009 22:47
entering extended mode
**Text*Box*92
("Text Box 92.tex"
LaTeX2e <2005/12/01>
Babel <v3.8l> and hyphenation patterns for english, dumylang, nohyphenation, ge
rman, ngerman, german-x-2008-06-18, ngerman-x-2008-06-18, french, loaded.
("C:\Program Files\MiKTeX 2.7\tex\latex\base\article.cls"
Document Class: article 2005/09/16 v1.4f Standard LaTeX document class
("C:\Program Files\MiKTeX 2.7\tex\latex\base\size10.clo"
File: size10.clo 2005/09/16 v1.4f Standard LaTeX file (size option)
\c@part=\count79
\c@section=\count80
\c@subsection=\count81
\c@subsubsection=\count82
\c@paragraph=\count83
\c@subparagraph=\count84
\c@figure=\count85
\c@table=\count86
\abovecaptionskip=\skip41
\belowcaptionskip=\skip42
\bibindent=\dimen102
) ("C:\Program Files\MiKTeX 2.7\tex\latex\tools\xspace.sty"
Package: xspace 2006/05/08 v1.12 Space after command names (DPC,MH)
) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\amssymb.sty"
Package: amssymb 2002/01/22 v2.2d
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\amsfonts.sty"
Package: amsfonts 2001/10/25 v2.2f
\@emptytoks=\toks14
\symAMSa=\mathgroup4
\symAMSb=\mathgroup5
LaTeX Font Info: Overwriting math alphabet `\mathfrak' in version `bold'
(Font) U/euf/m/n --> U/euf/b/n on input line 132.
)) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsmath.sty"
Package: amsmath 2000/07/18 v2.13 AMS math features
\@mathmargin=\skip43
For additional information on amsmath, use the `?' option.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amstext.sty"
Package: amstext 2000/06/29 v2.01
("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsgen.sty"
File: amsgen.sty 1999/11/30 v2.0
\@emptytoks=\toks15
\ex@=\dimen103
)) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsbsy.sty"
Package: amsbsy 1999/11/29 v1.2d
\pmbraise@=\dimen104
) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsopn.sty"
Package: amsopn 1999/12/14 v2.01 operator names
\inf@bad=\count87
LaTeX Info: Redefining \frac on input line 211.
\uproot@=\count88
\leftroot@=\count89
LaTeX Info: Redefining \overline on input line 307.
\classnum@=\count90
\DOTSCASE@=\count91
LaTeX Info: Redefining \ldots on input line 379.
LaTeX Info: Redefining \dots on input line 382.
LaTeX Info: Redefining \cdots on input line 467.
\Mathstrutbox@=\box26
\strutbox@=\box27
\big@size=\dimen105
LaTeX Font Info: Redeclaring font encoding OML on input line 567.
LaTeX Font Info: Redeclaring font encoding OMS on input line 568.
\macc@depth=\count92
\c@MaxMatrixCols=\count93
\dotsspace@=\muskip10
\c@parentequation=\count94
\dspbrk@lvl=\count95
\tag@help=\toks16
\row@=\count96
\column@=\count97
\maxfields@=\count98
\andhelp@=\toks17
\eqnshift@=\dimen106
\alignsep@=\dimen107
\tagshift@=\dimen108
\tagwidth@=\dimen109
\totwidth@=\dimen110
\lineht@=\dimen111
\@envbody=\toks18
\multlinegap=\skip44
\multlinetaggap=\skip45
\mathdisplay@stack=\toks19
LaTeX Info: Redefining \[ on input line 2666.
LaTeX Info: Redefining \] on input line 2667.
) ("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\color.sty"
Package: color 2005/11/14 v1.0j Standard LaTeX Color (DPC)
("C:\Program Files\MiKTeX 2.7\tex\latex\00miktex\color.cfg"
File: color.cfg 2007/01/18 v1.5 color configuration of teTeX/TeXLive
Package color Info: Driver file: dvips.def on input line 130.
("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\dvips.def"
File: dvips.def 1999/02/16 v3.0i Driver-dependant file (DPC,SPQR)
) ("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\dvipsnam.def"
File: dvipsnam.def 1999/02/16 v3.0i Driver-dependant file (DPC,SPQR)
)) ("C:\Program Files\TeX4PPT\Styles\TeX4PPT.sty")
No file Text*Box*92.aux.
LaTeX Font Info: Checking defaults for OML/cmm/m/it on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for T1/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OT1/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OMS/cmsy/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OMX/cmex/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for U/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
! Missing $ inserted.
<inserted text>
l.9 y_
I've inserted a begin-math/end-math symbol since I think
you left one out. Proceed, with fingers crossed.
LaTeX Font Info: Try loading font information for U+msa on input line 9.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\umsa.fd"
File: umsa.fd 2002/01/19 v2.2g AMS font definitions
LaTeX Font Info: Try loading font information for U+msb on input line 9.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\umsb.fd"
File: umsb.fd 2002/01/19 v2.2g AMS font definitions
! Missing $ inserted.
<inserted text>
l.10 \end{document}
I've inserted a begin-math/end-math symbol since I think
you left one out. Proceed, with fingers crossed.
] ("Text Box 92.aux") )
Here is how much of TeX's memory you used:
1393 strings out of 95305
15870 string characters out of 1183061
59708 words of memory out of 1500000
4630 multiletter control sequences out of 110000
5339 words of font info for 22 fonts, out of 1200000 for 2000
14 hyphenation exceptions out of 8191
27i,5n,24p,221b,112s stack positions out of 5000i,500n,10000p,200000b,5000s
Output written on "Text Box 92.dvi" (1 page, 340 bytes).

## Text block 312

CTOP

## Text block 313

CLEFT

## Text block 314

223.75

## Text block 315

CWIDTH

## Text block 316

21.625

## Text block 317

CHEIGHT

## Text block 318

14.625

## Text block 319

MAG

## Text block 320

SRC

## Text block 321

y_1

## Text block 322

LOG

## Text block 323

This is pdfTeX, Version 3.1415926-1.40.9 (MiKTeX 2.7) (preloaded format=latex 2008.11.17) 25 FEB 2009 22:46
entering extended mode
**Text*Box*83
("Text Box 83.tex"
LaTeX2e <2005/12/01>
Babel <v3.8l> and hyphenation patterns for english, dumylang, nohyphenation, ge
rman, ngerman, german-x-2008-06-18, ngerman-x-2008-06-18, french, loaded.
("C:\Program Files\MiKTeX 2.7\tex\latex\base\article.cls"
Document Class: article 2005/09/16 v1.4f Standard LaTeX document class
("C:\Program Files\MiKTeX 2.7\tex\latex\base\size10.clo"
File: size10.clo 2005/09/16 v1.4f Standard LaTeX file (size option)
\c@part=\count79
\c@section=\count80
\c@subsection=\count81
\c@subsubsection=\count82
\c@paragraph=\count83
\c@subparagraph=\count84
\c@figure=\count85
\c@table=\count86
\abovecaptionskip=\skip41
\belowcaptionskip=\skip42
\bibindent=\dimen102
) ("C:\Program Files\MiKTeX 2.7\tex\latex\tools\xspace.sty"
Package: xspace 2006/05/08 v1.12 Space after command names (DPC,MH)
) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\amssymb.sty"
Package: amssymb 2002/01/22 v2.2d
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\amsfonts.sty"
Package: amsfonts 2001/10/25 v2.2f
\@emptytoks=\toks14
\symAMSa=\mathgroup4
\symAMSb=\mathgroup5
LaTeX Font Info: Overwriting math alphabet `\mathfrak' in version `bold'
(Font) U/euf/m/n --> U/euf/b/n on input line 132.
)) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsmath.sty"
Package: amsmath 2000/07/18 v2.13 AMS math features
\@mathmargin=\skip43
For additional information on amsmath, use the `?' option.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amstext.sty"
Package: amstext 2000/06/29 v2.01
("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsgen.sty"
File: amsgen.sty 1999/11/30 v2.0
\@emptytoks=\toks15
\ex@=\dimen103
)) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsbsy.sty"
Package: amsbsy 1999/11/29 v1.2d
\pmbraise@=\dimen104
) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsopn.sty"
Package: amsopn 1999/12/14 v2.01 operator names
\inf@bad=\count87
LaTeX Info: Redefining \frac on input line 211.
\uproot@=\count88
\leftroot@=\count89
LaTeX Info: Redefining \overline on input line 307.
\classnum@=\count90
\DOTSCASE@=\count91
LaTeX Info: Redefining \ldots on input line 379.
LaTeX Info: Redefining \dots on input line 382.
LaTeX Info: Redefining \cdots on input line 467.
\Mathstrutbox@=\box26
\strutbox@=\box27
\big@size=\dimen105
LaTeX Font Info: Redeclaring font encoding OML on input line 567.
LaTeX Font Info: Redeclaring font encoding OMS on input line 568.
\macc@depth=\count92
\c@MaxMatrixCols=\count93
\dotsspace@=\muskip10
\c@parentequation=\count94
\dspbrk@lvl=\count95
\tag@help=\toks16
\row@=\count96
\column@=\count97
\maxfields@=\count98
\andhelp@=\toks17
\eqnshift@=\dimen106
\alignsep@=\dimen107
\tagshift@=\dimen108
\tagwidth@=\dimen109
\totwidth@=\dimen110
\lineht@=\dimen111
\@envbody=\toks18
\multlinegap=\skip44
\multlinetaggap=\skip45
\mathdisplay@stack=\toks19
LaTeX Info: Redefining \[ on input line 2666.
LaTeX Info: Redefining \] on input line 2667.
) ("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\color.sty"
Package: color 2005/11/14 v1.0j Standard LaTeX Color (DPC)
("C:\Program Files\MiKTeX 2.7\tex\latex\00miktex\color.cfg"
File: color.cfg 2007/01/18 v1.5 color configuration of teTeX/TeXLive
Package color Info: Driver file: dvips.def on input line 130.
("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\dvips.def"
File: dvips.def 1999/02/16 v3.0i Driver-dependant file (DPC,SPQR)
) ("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\dvipsnam.def"
File: dvipsnam.def 1999/02/16 v3.0i Driver-dependant file (DPC,SPQR)
)) ("C:\Program Files\TeX4PPT\Styles\TeX4PPT.sty")
No file Text*Box*83.aux.
LaTeX Font Info: Checking defaults for OML/cmm/m/it on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for T1/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OT1/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OMS/cmsy/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OMX/cmex/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for U/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
! Missing $ inserted.
<inserted text>
l.9 y_
I've inserted a begin-math/end-math symbol since I think
you left one out. Proceed, with fingers crossed.
LaTeX Font Info: Try loading font information for U+msa on input line 9.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\umsa.fd"
File: umsa.fd 2002/01/19 v2.2g AMS font definitions
LaTeX Font Info: Try loading font information for U+msb on input line 9.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\umsb.fd"
File: umsb.fd 2002/01/19 v2.2g AMS font definitions
! Missing $ inserted.
<inserted text>
l.10 \end{document}
I've inserted a begin-math/end-math symbol since I think
you left one out. Proceed, with fingers crossed.
] ("Text Box 83.aux") )
Here is how much of TeX's memory you used:
1393 strings out of 95305
15870 string characters out of 1183061
59708 words of memory out of 1500000
4630 multiletter control sequences out of 110000
5339 words of font info for 22 fonts, out of 1200000 for 2000
14 hyphenation exceptions out of 8191
27i,5n,24p,221b,112s stack positions out of 5000i,500n,10000p,200000b,5000s
Output written on "Text Box 83.dvi" (1 page, 340 bytes).

## Text block 324

CTOP

## Text block 325

CLEFT

## Text block 326

223.75

## Text block 327

CWIDTH

## Text block 328

21.625

## Text block 329

CHEIGHT

## Text block 330

14.625

## Text block 331

MAG

## Text block 332

SRC

## Text block 333

y_2

## Text block 334

LOG

## Text block 335

This is pdfTeX, Version 3.1415926-1.40.9 (MiKTeX 2.7) (preloaded format=latex 2008.11.17) 25 FEB 2009 22:47
entering extended mode
**Text*Box*92
("Text Box 92.tex"
LaTeX2e <2005/12/01>
Babel <v3.8l> and hyphenation patterns for english, dumylang, nohyphenation, ge
rman, ngerman, german-x-2008-06-18, ngerman-x-2008-06-18, french, loaded.
("C:\Program Files\MiKTeX 2.7\tex\latex\base\article.cls"
Document Class: article 2005/09/16 v1.4f Standard LaTeX document class
("C:\Program Files\MiKTeX 2.7\tex\latex\base\size10.clo"
File: size10.clo 2005/09/16 v1.4f Standard LaTeX file (size option)
\c@part=\count79
\c@section=\count80
\c@subsection=\count81
\c@subsubsection=\count82
\c@paragraph=\count83
\c@subparagraph=\count84
\c@figure=\count85
\c@table=\count86
\abovecaptionskip=\skip41
\belowcaptionskip=\skip42
\bibindent=\dimen102
) ("C:\Program Files\MiKTeX 2.7\tex\latex\tools\xspace.sty"
Package: xspace 2006/05/08 v1.12 Space after command names (DPC,MH)
) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\amssymb.sty"
Package: amssymb 2002/01/22 v2.2d
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\amsfonts.sty"
Package: amsfonts 2001/10/25 v2.2f
\@emptytoks=\toks14
\symAMSa=\mathgroup4
\symAMSb=\mathgroup5
LaTeX Font Info: Overwriting math alphabet `\mathfrak' in version `bold'
(Font) U/euf/m/n --> U/euf/b/n on input line 132.
)) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsmath.sty"
Package: amsmath 2000/07/18 v2.13 AMS math features
\@mathmargin=\skip43
For additional information on amsmath, use the `?' option.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amstext.sty"
Package: amstext 2000/06/29 v2.01
("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsgen.sty"
File: amsgen.sty 1999/11/30 v2.0
\@emptytoks=\toks15
\ex@=\dimen103
)) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsbsy.sty"
Package: amsbsy 1999/11/29 v1.2d
\pmbraise@=\dimen104
) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsopn.sty"
Package: amsopn 1999/12/14 v2.01 operator names
\inf@bad=\count87
LaTeX Info: Redefining \frac on input line 211.
\uproot@=\count88
\leftroot@=\count89
LaTeX Info: Redefining \overline on input line 307.
\classnum@=\count90
\DOTSCASE@=\count91
LaTeX Info: Redefining \ldots on input line 379.
LaTeX Info: Redefining \dots on input line 382.
LaTeX Info: Redefining \cdots on input line 467.
\Mathstrutbox@=\box26
\strutbox@=\box27
\big@size=\dimen105
LaTeX Font Info: Redeclaring font encoding OML on input line 567.
LaTeX Font Info: Redeclaring font encoding OMS on input line 568.
\macc@depth=\count92
\c@MaxMatrixCols=\count93
\dotsspace@=\muskip10
\c@parentequation=\count94
\dspbrk@lvl=\count95
\tag@help=\toks16
\row@=\count96
\column@=\count97
\maxfields@=\count98
\andhelp@=\toks17
\eqnshift@=\dimen106
\alignsep@=\dimen107
\tagshift@=\dimen108
\tagwidth@=\dimen109
\totwidth@=\dimen110
\lineht@=\dimen111
\@envbody=\toks18
\multlinegap=\skip44
\multlinetaggap=\skip45
\mathdisplay@stack=\toks19
LaTeX Info: Redefining \[ on input line 2666.
LaTeX Info: Redefining \] on input line 2667.
) ("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\color.sty"
Package: color 2005/11/14 v1.0j Standard LaTeX Color (DPC)
("C:\Program Files\MiKTeX 2.7\tex\latex\00miktex\color.cfg"
File: color.cfg 2007/01/18 v1.5 color configuration of teTeX/TeXLive
Package color Info: Driver file: dvips.def on input line 130.
("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\dvips.def"
File: dvips.def 1999/02/16 v3.0i Driver-dependant file (DPC,SPQR)
) ("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\dvipsnam.def"
File: dvipsnam.def 1999/02/16 v3.0i Driver-dependant file (DPC,SPQR)
)) ("C:\Program Files\TeX4PPT\Styles\TeX4PPT.sty")
No file Text*Box*92.aux.
LaTeX Font Info: Checking defaults for OML/cmm/m/it on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for T1/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OT1/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OMS/cmsy/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OMX/cmex/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for U/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
! Missing $ inserted.
<inserted text>
l.9 y_
I've inserted a begin-math/end-math symbol since I think
you left one out. Proceed, with fingers crossed.
LaTeX Font Info: Try loading font information for U+msa on input line 9.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\umsa.fd"
File: umsa.fd 2002/01/19 v2.2g AMS font definitions
LaTeX Font Info: Try loading font information for U+msb on input line 9.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\umsb.fd"
File: umsb.fd 2002/01/19 v2.2g AMS font definitions
! Missing $ inserted.
<inserted text>
l.10 \end{document}
I've inserted a begin-math/end-math symbol since I think
you left one out. Proceed, with fingers crossed.
] ("Text Box 92.aux") )
Here is how much of TeX's memory you used:
1393 strings out of 95305
15870 string characters out of 1183061
59708 words of memory out of 1500000
4630 multiletter control sequences out of 110000
5339 words of font info for 22 fonts, out of 1200000 for 2000
14 hyphenation exceptions out of 8191
27i,5n,24p,221b,112s stack positions out of 5000i,500n,10000p,200000b,5000s
Output written on "Text Box 92.dvi" (1 page, 340 bytes).

## Text block 336

CTOP

## Text block 337

CLEFT

## Text block 338

223.75

## Text block 339

CWIDTH

## Text block 340

21.625

## Text block 341

CHEIGHT

## Text block 342

14.625

## Text block 343

MAG

## Text block 344

SRC

## Text block 345

\boldsymbol{y}

## Text block 346

LOG

## Text block 347

This is pdfTeX, Version 3.1415926-1.40.9 (MiKTeX 2.7) (preloaded format=latex 2008.11.17) 25 FEB 2009 22:51
entering extended mode
**Text*Box*137
("Text Box 137.tex"
LaTeX2e <2005/12/01>
Babel <v3.8l> and hyphenation patterns for english, dumylang, nohyphenation, ge
rman, ngerman, german-x-2008-06-18, ngerman-x-2008-06-18, french, loaded.
("C:\Program Files\MiKTeX 2.7\tex\latex\base\article.cls"
Document Class: article 2005/09/16 v1.4f Standard LaTeX document class
("C:\Program Files\MiKTeX 2.7\tex\latex\base\size10.clo"
File: size10.clo 2005/09/16 v1.4f Standard LaTeX file (size option)
\c@part=\count79
\c@section=\count80
\c@subsection=\count81
\c@subsubsection=\count82
\c@paragraph=\count83
\c@subparagraph=\count84
\c@figure=\count85
\c@table=\count86
\abovecaptionskip=\skip41
\belowcaptionskip=\skip42
\bibindent=\dimen102
) ("C:\Program Files\MiKTeX 2.7\tex\latex\tools\xspace.sty"
Package: xspace 2006/05/08 v1.12 Space after command names (DPC,MH)
) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\amssymb.sty"
Package: amssymb 2002/01/22 v2.2d
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\amsfonts.sty"
Package: amsfonts 2001/10/25 v2.2f
\@emptytoks=\toks14
\symAMSa=\mathgroup4
\symAMSb=\mathgroup5
LaTeX Font Info: Overwriting math alphabet `\mathfrak' in version `bold'
(Font) U/euf/m/n --> U/euf/b/n on input line 132.
)) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsmath.sty"
Package: amsmath 2000/07/18 v2.13 AMS math features
\@mathmargin=\skip43
For additional information on amsmath, use the `?' option.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amstext.sty"
Package: amstext 2000/06/29 v2.01
("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsgen.sty"
File: amsgen.sty 1999/11/30 v2.0
\@emptytoks=\toks15
\ex@=\dimen103
)) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsbsy.sty"
Package: amsbsy 1999/11/29 v1.2d
\pmbraise@=\dimen104
) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsopn.sty"
Package: amsopn 1999/12/14 v2.01 operator names
\inf@bad=\count87
LaTeX Info: Redefining \frac on input line 211.
\uproot@=\count88
\leftroot@=\count89
LaTeX Info: Redefining \overline on input line 307.
\classnum@=\count90
\DOTSCASE@=\count91
LaTeX Info: Redefining \ldots on input line 379.
LaTeX Info: Redefining \dots on input line 382.
LaTeX Info: Redefining \cdots on input line 467.
\Mathstrutbox@=\box26
\strutbox@=\box27
\big@size=\dimen105
LaTeX Font Info: Redeclaring font encoding OML on input line 567.
LaTeX Font Info: Redeclaring font encoding OMS on input line 568.
\macc@depth=\count92
\c@MaxMatrixCols=\count93
\dotsspace@=\muskip10
\c@parentequation=\count94
\dspbrk@lvl=\count95
\tag@help=\toks16
\row@=\count96
\column@=\count97
\maxfields@=\count98
\andhelp@=\toks17
\eqnshift@=\dimen106
\alignsep@=\dimen107
\tagshift@=\dimen108
\tagwidth@=\dimen109
\totwidth@=\dimen110
\lineht@=\dimen111
\@envbody=\toks18
\multlinegap=\skip44
\multlinetaggap=\skip45
\mathdisplay@stack=\toks19
LaTeX Info: Redefining \[ on input line 2666.
LaTeX Info: Redefining \] on input line 2667.
) ("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\color.sty"
Package: color 2005/11/14 v1.0j Standard LaTeX Color (DPC)
("C:\Program Files\MiKTeX 2.7\tex\latex\00miktex\color.cfg"
File: color.cfg 2007/01/18 v1.5 color configuration of teTeX/TeXLive
Package color Info: Driver file: dvips.def on input line 130.
("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\dvips.def"
File: dvips.def 1999/02/16 v3.0i Driver-dependant file (DPC,SPQR)
) ("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\dvipsnam.def"
File: dvipsnam.def 1999/02/16 v3.0i Driver-dependant file (DPC,SPQR)
)) ("C:\Program Files\TeX4PPT\Styles\TeX4PPT.sty")
No file Text*Box*137.aux.
LaTeX Font Info: Checking defaults for OML/cmm/m/it on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for T1/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OT1/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OMS/cmsy/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OMX/cmex/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for U/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Try loading font information for U+msa on input line 9.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\umsa.fd"
File: umsa.fd 2002/01/19 v2.2g AMS font definitions
LaTeX Font Info: Try loading font information for U+msb on input line 9.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\umsb.fd"
File: umsb.fd 2002/01/19 v2.2g AMS font definitions
! Missing $ inserted.
<inserted text>
l.9 \boldsymbol{y}
I've inserted a begin-math/end-math symbol since I think
you left one out. Proceed, with fingers crossed.
! Extra }, or forgotten $.
\math@atom #1#2->\binrel@ {#1}\binrel@@ {#2}
l.9 \boldsymbol{y}
I've deleted a group-closing symbol because it seems to be
spurious, as in `$x}$'. But perhaps the } is legitimate and
you forgot something else, as in `\hbox{$x}'. In such cases
the way to recover is to insert both the forgotten and the
deleted material, e.g., by typing `I$}'.
! Missing $ inserted.
<inserted text>
l.9 \boldsymbol{y}
I've inserted something that you may have forgotten.
(See the <inserted text> above.)
With luck, this will get me unwedged. But if you
really didn't forget anything, try typing `2' now; then
my insertion and my current dilemma will both disappear.
! Missing } inserted.
<inserted text>
l.9 \boldsymbol{y}
I've inserted something that you may have forgotten.
(See the <inserted text> above.)
With luck, this will get me unwedged. But if you
really didn't forget anything, try typing `2' now; then
my insertion and my current dilemma will both disappear.
] ("Text Box 137.aux") )
Here is how much of TeX's memory you used:
1411 strings out of 95305
16061 string characters out of 1183061
59708 words of memory out of 1500000
4639 multiletter control sequences out of 110000
8096 words of font info for 31 fonts, out of 1200000 for 2000
14 hyphenation exceptions out of 8191
27i,5n,24p,222b,112s stack positions out of 5000i,500n,10000p,200000b,5000s
Output written on "Text Box 137.dvi" (1 page, 296 bytes).

## Text block 348

CTOP

## Text block 349

195.625

## Text block 350

CLEFT

## Text block 351

243.375

## Text block 352

CWIDTH

## Text block 353

15.25

## Text block 354

CHEIGHT

## Text block 355

16.5

## Text block 356

MAG

## Text block 357

SRC

## Text block 358

$\boldsymbol{x} = \left[
\begin{array}{c}
x_1 \\
x_2
\end{array}
\right] \
\boldsymbol{B} = \left[
\begin{array}{c} \boldsymbol{b}_1 \\
\boldsymbol{b}_2
\end{array}
\right]
= \left[
\begin{array}{cc} b_{11} &b_{12} \\
b_{21} & b_{22}
\end{array}
\right]$

## Text block 359

LOG

## Text block 360

This is pdfTeX, Version 3.1415926-1.40.9 (MiKTeX 2.7) (preloaded format=latex 2008.11.17) 25 FEB 2009 23:11
entering extended mode
**Group*216
("Group 216.tex"
LaTeX2e <2005/12/01>
Babel <v3.8l> and hyphenation patterns for english, dumylang, nohyphenation, ge
rman, ngerman, german-x-2008-06-18, ngerman-x-2008-06-18, french, loaded.
("C:\Program Files\MiKTeX 2.7\tex\latex\base\article.cls"
Document Class: article 2005/09/16 v1.4f Standard LaTeX document class
("C:\Program Files\MiKTeX 2.7\tex\latex\base\size10.clo"
File: size10.clo 2005/09/16 v1.4f Standard LaTeX file (size option)
\c@part=\count79
\c@section=\count80
\c@subsection=\count81
\c@subsubsection=\count82
\c@paragraph=\count83
\c@subparagraph=\count84
\c@figure=\count85
\c@table=\count86
\abovecaptionskip=\skip41
\belowcaptionskip=\skip42
\bibindent=\dimen102
) ("C:\Program Files\MiKTeX 2.7\tex\latex\tools\xspace.sty"
Package: xspace 2006/05/08 v1.12 Space after command names (DPC,MH)
) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\amssymb.sty"
Package: amssymb 2002/01/22 v2.2d
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\amsfonts.sty"
Package: amsfonts 2001/10/25 v2.2f
\@emptytoks=\toks14
\symAMSa=\mathgroup4
\symAMSb=\mathgroup5
LaTeX Font Info: Overwriting math alphabet `\mathfrak' in version `bold'
(Font) U/euf/m/n --> U/euf/b/n on input line 132.
)) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsmath.sty"
Package: amsmath 2000/07/18 v2.13 AMS math features
\@mathmargin=\skip43
For additional information on amsmath, use the `?' option.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amstext.sty"
Package: amstext 2000/06/29 v2.01
("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsgen.sty"
File: amsgen.sty 1999/11/30 v2.0
\@emptytoks=\toks15
\ex@=\dimen103
)) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsbsy.sty"
Package: amsbsy 1999/11/29 v1.2d
\pmbraise@=\dimen104
) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsopn.sty"
Package: amsopn 1999/12/14 v2.01 operator names
\inf@bad=\count87
LaTeX Info: Redefining \frac on input line 211.
\uproot@=\count88
\leftroot@=\count89
LaTeX Info: Redefining \overline on input line 307.
\classnum@=\count90
\DOTSCASE@=\count91
LaTeX Info: Redefining \ldots on input line 379.
LaTeX Info: Redefining \dots on input line 382.
LaTeX Info: Redefining \cdots on input line 467.
\Mathstrutbox@=\box26
\strutbox@=\box27
\big@size=\dimen105
LaTeX Font Info: Redeclaring font encoding OML on input line 567.
LaTeX Font Info: Redeclaring font encoding OMS on input line 568.
\macc@depth=\count92
\c@MaxMatrixCols=\count93
\dotsspace@=\muskip10
\c@parentequation=\count94
\dspbrk@lvl=\count95
\tag@help=\toks16
\row@=\count96
\column@=\count97
\maxfields@=\count98
\andhelp@=\toks17
\eqnshift@=\dimen106
\alignsep@=\dimen107
\tagshift@=\dimen108
\tagwidth@=\dimen109
\totwidth@=\dimen110
\lineht@=\dimen111
\@envbody=\toks18
\multlinegap=\skip44
\multlinetaggap=\skip45
\mathdisplay@stack=\toks19
LaTeX Info: Redefining \[ on input line 2666.
LaTeX Info: Redefining \] on input line 2667.
) ("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\color.sty"
Package: color 2005/11/14 v1.0j Standard LaTeX Color (DPC)
("C:\Program Files\MiKTeX 2.7\tex\latex\00miktex\color.cfg"
File: color.cfg 2007/01/18 v1.5 color configuration of teTeX/TeXLive
Package color Info: Driver file: dvips.def on input line 130.
("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\dvips.def"
File: dvips.def 1999/02/16 v3.0i Driver-dependant file (DPC,SPQR)
) ("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\dvipsnam.def"
File: dvipsnam.def 1999/02/16 v3.0i Driver-dependant file (DPC,SPQR)
)) ("C:\Program Files\TeX4PPT\Styles\TeX4PPT.sty")
No file Group*216.aux.
LaTeX Font Info: Checking defaults for OML/cmm/m/it on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for T1/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OT1/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OMS/cmsy/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OMX/cmex/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for U/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Try loading font information for U+msa on input line 9.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\umsa.fd"
File: umsa.fd 2002/01/19 v2.2g AMS font definitions
LaTeX Font Info: Try loading font information for U+msb on input line 9.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\umsb.fd"
File: umsb.fd 2002/01/19 v2.2g AMS font definitions
] ("Group 216.aux") )
Here is how much of TeX's memory you used:
1411 strings out of 95305
16037 string characters out of 1183061
60708 words of memory out of 1500000
4639 multiletter control sequences out of 110000
8096 words of font info for 31 fonts, out of 1200000 for 2000
14 hyphenation exceptions out of 8191
27i,12n,24p,219b,120s stack positions out of 5000i,500n,10000p,200000b,5000s
Output written on "Group 216.dvi" (1 page, 764 bytes).

## Text block 361

CTOP

## Text block 362

170.875

## Text block 363

CLEFT

## Text block 364

228.375

## Text block 365

CWIDTH

## Text block 366

425.875

## Text block 367

CHEIGHT

## Text block 368

57.5

## Text block 369

MAG

## Text block 370

SRC

## Text block 371

\boldsymbol{x}

## Text block 372

LOG

## Text block 373

This is pdfTeX, Version 3.1415926-1.40.9 (MiKTeX 2.7) (preloaded format=latex 2008.11.17) 25 FEB 2009 22:45
entering extended mode
**Text*Box*62
("Text Box 62.tex"
LaTeX2e <2005/12/01>
Babel <v3.8l> and hyphenation patterns for english, dumylang, nohyphenation, ge
rman, ngerman, german-x-2008-06-18, ngerman-x-2008-06-18, french, loaded.
("C:\Program Files\MiKTeX 2.7\tex\latex\base\article.cls"
Document Class: article 2005/09/16 v1.4f Standard LaTeX document class
("C:\Program Files\MiKTeX 2.7\tex\latex\base\size10.clo"
File: size10.clo 2005/09/16 v1.4f Standard LaTeX file (size option)
\c@part=\count79
\c@section=\count80
\c@subsection=\count81
\c@subsubsection=\count82
\c@paragraph=\count83
\c@subparagraph=\count84
\c@figure=\count85
\c@table=\count86
\abovecaptionskip=\skip41
\belowcaptionskip=\skip42
\bibindent=\dimen102
) ("C:\Program Files\MiKTeX 2.7\tex\latex\tools\xspace.sty"
Package: xspace 2006/05/08 v1.12 Space after command names (DPC,MH)
) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\amssymb.sty"
Package: amssymb 2002/01/22 v2.2d
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\amsfonts.sty"
Package: amsfonts 2001/10/25 v2.2f
\@emptytoks=\toks14
\symAMSa=\mathgroup4
\symAMSb=\mathgroup5
LaTeX Font Info: Overwriting math alphabet `\mathfrak' in version `bold'
(Font) U/euf/m/n --> U/euf/b/n on input line 132.
)) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsmath.sty"
Package: amsmath 2000/07/18 v2.13 AMS math features
\@mathmargin=\skip43
For additional information on amsmath, use the `?' option.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amstext.sty"
Package: amstext 2000/06/29 v2.01
("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsgen.sty"
File: amsgen.sty 1999/11/30 v2.0
\@emptytoks=\toks15
\ex@=\dimen103
)) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsbsy.sty"
Package: amsbsy 1999/11/29 v1.2d
\pmbraise@=\dimen104
) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsopn.sty"
Package: amsopn 1999/12/14 v2.01 operator names
\inf@bad=\count87
LaTeX Info: Redefining \frac on input line 211.
\uproot@=\count88
\leftroot@=\count89
LaTeX Info: Redefining \overline on input line 307.
\classnum@=\count90
\DOTSCASE@=\count91
LaTeX Info: Redefining \ldots on input line 379.
LaTeX Info: Redefining \dots on input line 382.
LaTeX Info: Redefining \cdots on input line 467.
\Mathstrutbox@=\box26
\strutbox@=\box27
\big@size=\dimen105
LaTeX Font Info: Redeclaring font encoding OML on input line 567.
LaTeX Font Info: Redeclaring font encoding OMS on input line 568.
\macc@depth=\count92
\c@MaxMatrixCols=\count93
\dotsspace@=\muskip10
\c@parentequation=\count94
\dspbrk@lvl=\count95
\tag@help=\toks16
\row@=\count96
\column@=\count97
\maxfields@=\count98
\andhelp@=\toks17
\eqnshift@=\dimen106
\alignsep@=\dimen107
\tagshift@=\dimen108
\tagwidth@=\dimen109
\totwidth@=\dimen110
\lineht@=\dimen111
\@envbody=\toks18
\multlinegap=\skip44
\multlinetaggap=\skip45
\mathdisplay@stack=\toks19
LaTeX Info: Redefining \[ on input line 2666.
LaTeX Info: Redefining \] on input line 2667.
) ("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\color.sty"
Package: color 2005/11/14 v1.0j Standard LaTeX Color (DPC)
("C:\Program Files\MiKTeX 2.7\tex\latex\00miktex\color.cfg"
File: color.cfg 2007/01/18 v1.5 color configuration of teTeX/TeXLive
Package color Info: Driver file: dvips.def on input line 130.
("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\dvips.def"
File: dvips.def 1999/02/16 v3.0i Driver-dependant file (DPC,SPQR)
) ("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\dvipsnam.def"
File: dvipsnam.def 1999/02/16 v3.0i Driver-dependant file (DPC,SPQR)
)) ("C:\Program Files\TeX4PPT\Styles\TeX4PPT.sty")
No file Text*Box*62.aux.
LaTeX Font Info: Checking defaults for OML/cmm/m/it on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for T1/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OT1/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OMS/cmsy/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OMX/cmex/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for U/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Try loading font information for U+msa on input line 9.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\umsa.fd"
File: umsa.fd 2002/01/19 v2.2g AMS font definitions
LaTeX Font Info: Try loading font information for U+msb on input line 9.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\umsb.fd"
File: umsb.fd 2002/01/19 v2.2g AMS font definitions
! Missing $ inserted.
<inserted text>
l.9 \boldsymbol{x}
I've inserted a begin-math/end-math symbol since I think
you left one out. Proceed, with fingers crossed.
! Extra }, or forgotten $.
\math@atom #1#2->\binrel@ {#1}\binrel@@ {#2}
l.9 \boldsymbol{x}
I've deleted a group-closing symbol because it seems to be
spurious, as in `$x}$'. But perhaps the } is legitimate and
you forgot something else, as in `\hbox{$x}'. In such cases
the way to recover is to insert both the forgotten and the
deleted material, e.g., by typing `I$}'.
! Missing $ inserted.
<inserted text>
l.9 \boldsymbol{x}
I've inserted something that you may have forgotten.
(See the <inserted text> above.)
With luck, this will get me unwedged. But if you
really didn't forget anything, try typing `2' now; then
my insertion and my current dilemma will both disappear.
! Missing } inserted.
<inserted text>
l.9 \boldsymbol{x}
I've inserted something that you may have forgotten.
(See the <inserted text> above.)
With luck, this will get me unwedged. But if you
really didn't forget anything, try typing `2' now; then
my insertion and my current dilemma will both disappear.
] ("Text Box 62.aux") )
Here is how much of TeX's memory you used:
1411 strings out of 95305
16053 string characters out of 1183061
59708 words of memory out of 1500000
4639 multiletter control sequences out of 110000
8096 words of font info for 31 fonts, out of 1200000 for 2000
14 hyphenation exceptions out of 8191
27i,5n,24p,221b,112s stack positions out of 5000i,500n,10000p,200000b,5000s
Output written on "Text Box 62.dvi" (1 page, 296 bytes).

## Text block 374

CTOP

## Text block 375

195.625

## Text block 376

CLEFT

## Text block 377

243.375

## Text block 378

CWIDTH

## Text block 379

17.125

## Text block 380

CHEIGHT

## Text block 381

11.5

## Text block 382

MAG

## Text block 383

SRC

## Text block 384

\boldsymbol{b}_2

## Text block 385

LOG

## Text block 386

This is pdfTeX, Version 3.1415926-1.40.9 (MiKTeX 2.7) (preloaded format=latex 2008.11.17) 25 FEB 2009 22:43
entering extended mode
**Text*Box*44
("Text Box 44.tex"
LaTeX2e <2005/12/01>
Babel <v3.8l> and hyphenation patterns for english, dumylang, nohyphenation, ge
rman, ngerman, german-x-2008-06-18, ngerman-x-2008-06-18, french, loaded.
("C:\Program Files\MiKTeX 2.7\tex\latex\base\article.cls"
Document Class: article 2005/09/16 v1.4f Standard LaTeX document class
("C:\Program Files\MiKTeX 2.7\tex\latex\base\size10.clo"
File: size10.clo 2005/09/16 v1.4f Standard LaTeX file (size option)
\c@part=\count79
\c@section=\count80
\c@subsection=\count81
\c@subsubsection=\count82
\c@paragraph=\count83
\c@subparagraph=\count84
\c@figure=\count85
\c@table=\count86
\abovecaptionskip=\skip41
\belowcaptionskip=\skip42
\bibindent=\dimen102
) ("C:\Program Files\MiKTeX 2.7\tex\latex\tools\xspace.sty"
Package: xspace 2006/05/08 v1.12 Space after command names (DPC,MH)
) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\amssymb.sty"
Package: amssymb 2002/01/22 v2.2d
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\amsfonts.sty"
Package: amsfonts 2001/10/25 v2.2f
\@emptytoks=\toks14
\symAMSa=\mathgroup4
\symAMSb=\mathgroup5
LaTeX Font Info: Overwriting math alphabet `\mathfrak' in version `bold'
(Font) U/euf/m/n --> U/euf/b/n on input line 132.
)) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsmath.sty"
Package: amsmath 2000/07/18 v2.13 AMS math features
\@mathmargin=\skip43
For additional information on amsmath, use the `?' option.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amstext.sty"
Package: amstext 2000/06/29 v2.01
("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsgen.sty"
File: amsgen.sty 1999/11/30 v2.0
\@emptytoks=\toks15
\ex@=\dimen103
)) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsbsy.sty"
Package: amsbsy 1999/11/29 v1.2d
\pmbraise@=\dimen104
) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsopn.sty"
Package: amsopn 1999/12/14 v2.01 operator names
\inf@bad=\count87
LaTeX Info: Redefining \frac on input line 211.
\uproot@=\count88
\leftroot@=\count89
LaTeX Info: Redefining \overline on input line 307.
\classnum@=\count90
\DOTSCASE@=\count91
LaTeX Info: Redefining \ldots on input line 379.
LaTeX Info: Redefining \dots on input line 382.
LaTeX Info: Redefining \cdots on input line 467.
\Mathstrutbox@=\box26
\strutbox@=\box27
\big@size=\dimen105
LaTeX Font Info: Redeclaring font encoding OML on input line 567.
LaTeX Font Info: Redeclaring font encoding OMS on input line 568.
\macc@depth=\count92
\c@MaxMatrixCols=\count93
\dotsspace@=\muskip10
\c@parentequation=\count94
\dspbrk@lvl=\count95
\tag@help=\toks16
\row@=\count96
\column@=\count97
\maxfields@=\count98
\andhelp@=\toks17
\eqnshift@=\dimen106
\alignsep@=\dimen107
\tagshift@=\dimen108
\tagwidth@=\dimen109
\totwidth@=\dimen110
\lineht@=\dimen111
\@envbody=\toks18
\multlinegap=\skip44
\multlinetaggap=\skip45
\mathdisplay@stack=\toks19
LaTeX Info: Redefining \[ on input line 2666.
LaTeX Info: Redefining \] on input line 2667.
) ("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\color.sty"
Package: color 2005/11/14 v1.0j Standard LaTeX Color (DPC)
("C:\Program Files\MiKTeX 2.7\tex\latex\00miktex\color.cfg"
File: color.cfg 2007/01/18 v1.5 color configuration of teTeX/TeXLive
Package color Info: Driver file: dvips.def on input line 130.
("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\dvips.def"
File: dvips.def 1999/02/16 v3.0i Driver-dependant file (DPC,SPQR)
) ("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\dvipsnam.def"
File: dvipsnam.def 1999/02/16 v3.0i Driver-dependant file (DPC,SPQR)
)) ("C:\Program Files\TeX4PPT\Styles\TeX4PPT.sty")
No file Text*Box*44.aux.
LaTeX Font Info: Checking defaults for OML/cmm/m/it on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for T1/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OT1/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OMS/cmsy/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OMX/cmex/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for U/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Try loading font information for U+msa on input line 9.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\umsa.fd"
File: umsa.fd 2002/01/19 v2.2g AMS font definitions
LaTeX Font Info: Try loading font information for U+msb on input line 9.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\umsb.fd"
File: umsb.fd 2002/01/19 v2.2g AMS font definitions
! Missing $ inserted.
<inserted text>
l.9 \boldsymbol{b}
I've inserted a begin-math/end-math symbol since I think
you left one out. Proceed, with fingers crossed.
! Extra }, or forgotten $.
\math@atom #1#2->\binrel@ {#1}\binrel@@ {#2}
l.9 \boldsymbol{b}
I've deleted a group-closing symbol because it seems to be
spurious, as in `$x}$'. But perhaps the } is legitimate and
you forgot something else, as in `\hbox{$x}'. In such cases
the way to recover is to insert both the forgotten and the
deleted material, e.g., by typing `I$}'.
! Missing $ inserted.
<inserted text>
l.9 \boldsymbol{b}
I've inserted something that you may have forgotten.
(See the <inserted text> above.)
With luck, this will get me unwedged. But if you
really didn't forget anything, try typing `2' now; then
my insertion and my current dilemma will both disappear.
! Missing } inserted.
<inserted text>
l.9 \boldsymbol{b}
I've inserted something that you may have forgotten.
(See the <inserted text> above.)
With luck, this will get me unwedged. But if you
really didn't forget anything, try typing `2' now; then
my insertion and my current dilemma will both disappear.
! Missing $ inserted.
<inserted text>
l.9 \boldsymbol{b}_
I've inserted a begin-math/end-math symbol since I think
you left one out. Proceed, with fingers crossed.
! Missing $ inserted.
<inserted text>
l.10 \end{document}
I've inserted a begin-math/end-math symbol since I think
you left one out. Proceed, with fingers crossed.
] ("Text Box 44.aux") )
Here is how much of TeX's memory you used:
1411 strings out of 95305
16053 string characters out of 1183061
59708 words of memory out of 1500000
4639 multiletter control sequences out of 110000
8096 words of font info for 31 fonts, out of 1200000 for 2000
14 hyphenation exceptions out of 8191
27i,5n,24p,221b,112s stack positions out of 5000i,500n,10000p,200000b,5000s
Output written on "Text Box 44.dvi" (1 page, 348 bytes).

## Text block 387

CTOP

## Text block 388

189.125

## Text block 389

CLEFT

## Text block 390

243.375

## Text block 391

CWIDTH

## Text block 392

23.875

## Text block 393

CHEIGHT

## Text block 394

21.875

## Text block 395

MAG

## Text block 396

SRC

## Text block 397

\boldsymbol{b}_1

## Text block 398

LOG

## Text block 399

This is pdfTeX, Version 3.1415926-1.40.9 (MiKTeX 2.7) (preloaded format=latex 2008.11.17) 25 FEB 2009 22:44
entering extended mode
**Text*Box*53
("Text Box 53.tex"
LaTeX2e <2005/12/01>
Babel <v3.8l> and hyphenation patterns for english, dumylang, nohyphenation, ge
rman, ngerman, german-x-2008-06-18, ngerman-x-2008-06-18, french, loaded.
("C:\Program Files\MiKTeX 2.7\tex\latex\base\article.cls"
Document Class: article 2005/09/16 v1.4f Standard LaTeX document class
("C:\Program Files\MiKTeX 2.7\tex\latex\base\size10.clo"
File: size10.clo 2005/09/16 v1.4f Standard LaTeX file (size option)
\c@part=\count79
\c@section=\count80
\c@subsection=\count81
\c@subsubsection=\count82
\c@paragraph=\count83
\c@subparagraph=\count84
\c@figure=\count85
\c@table=\count86
\abovecaptionskip=\skip41
\belowcaptionskip=\skip42
\bibindent=\dimen102
) ("C:\Program Files\MiKTeX 2.7\tex\latex\tools\xspace.sty"
Package: xspace 2006/05/08 v1.12 Space after command names (DPC,MH)
) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\amssymb.sty"
Package: amssymb 2002/01/22 v2.2d
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\amsfonts.sty"
Package: amsfonts 2001/10/25 v2.2f
\@emptytoks=\toks14
\symAMSa=\mathgroup4
\symAMSb=\mathgroup5
LaTeX Font Info: Overwriting math alphabet `\mathfrak' in version `bold'
(Font) U/euf/m/n --> U/euf/b/n on input line 132.
)) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsmath.sty"
Package: amsmath 2000/07/18 v2.13 AMS math features
\@mathmargin=\skip43
For additional information on amsmath, use the `?' option.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amstext.sty"
Package: amstext 2000/06/29 v2.01
("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsgen.sty"
File: amsgen.sty 1999/11/30 v2.0
\@emptytoks=\toks15
\ex@=\dimen103
)) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsbsy.sty"
Package: amsbsy 1999/11/29 v1.2d
\pmbraise@=\dimen104
) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsopn.sty"
Package: amsopn 1999/12/14 v2.01 operator names
\inf@bad=\count87
LaTeX Info: Redefining \frac on input line 211.
\uproot@=\count88
\leftroot@=\count89
LaTeX Info: Redefining \overline on input line 307.
\classnum@=\count90
\DOTSCASE@=\count91
LaTeX Info: Redefining \ldots on input line 379.
LaTeX Info: Redefining \dots on input line 382.
LaTeX Info: Redefining \cdots on input line 467.
\Mathstrutbox@=\box26
\strutbox@=\box27
\big@size=\dimen105
LaTeX Font Info: Redeclaring font encoding OML on input line 567.
LaTeX Font Info: Redeclaring font encoding OMS on input line 568.
\macc@depth=\count92
\c@MaxMatrixCols=\count93
\dotsspace@=\muskip10
\c@parentequation=\count94
\dspbrk@lvl=\count95
\tag@help=\toks16
\row@=\count96
\column@=\count97
\maxfields@=\count98
\andhelp@=\toks17
\eqnshift@=\dimen106
\alignsep@=\dimen107
\tagshift@=\dimen108
\tagwidth@=\dimen109
\totwidth@=\dimen110
\lineht@=\dimen111
\@envbody=\toks18
\multlinegap=\skip44
\multlinetaggap=\skip45
\mathdisplay@stack=\toks19
LaTeX Info: Redefining \[ on input line 2666.
LaTeX Info: Redefining \] on input line 2667.
) ("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\color.sty"
Package: color 2005/11/14 v1.0j Standard LaTeX Color (DPC)
("C:\Program Files\MiKTeX 2.7\tex\latex\00miktex\color.cfg"
File: color.cfg 2007/01/18 v1.5 color configuration of teTeX/TeXLive
Package color Info: Driver file: dvips.def on input line 130.
("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\dvips.def"
File: dvips.def 1999/02/16 v3.0i Driver-dependant file (DPC,SPQR)
) ("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\dvipsnam.def"
File: dvipsnam.def 1999/02/16 v3.0i Driver-dependant file (DPC,SPQR)
)) ("C:\Program Files\TeX4PPT\Styles\TeX4PPT.sty")
No file Text*Box*53.aux.
LaTeX Font Info: Checking defaults for OML/cmm/m/it on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for T1/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OT1/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OMS/cmsy/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OMX/cmex/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for U/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Try loading font information for U+msa on input line 9.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\umsa.fd"
File: umsa.fd 2002/01/19 v2.2g AMS font definitions
LaTeX Font Info: Try loading font information for U+msb on input line 9.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\umsb.fd"
File: umsb.fd 2002/01/19 v2.2g AMS font definitions
! Missing $ inserted.
<inserted text>
l.9 \boldsymbol{b}
I've inserted a begin-math/end-math symbol since I think
you left one out. Proceed, with fingers crossed.
! Extra }, or forgotten $.
\math@atom #1#2->\binrel@ {#1}\binrel@@ {#2}
l.9 \boldsymbol{b}
I've deleted a group-closing symbol because it seems to be
spurious, as in `$x}$'. But perhaps the } is legitimate and
you forgot something else, as in `\hbox{$x}'. In such cases
the way to recover is to insert both the forgotten and the
deleted material, e.g., by typing `I$}'.
! Missing $ inserted.
<inserted text>
l.9 \boldsymbol{b}
I've inserted something that you may have forgotten.
(See the <inserted text> above.)
With luck, this will get me unwedged. But if you
really didn't forget anything, try typing `2' now; then
my insertion and my current dilemma will both disappear.
! Missing } inserted.
<inserted text>
l.9 \boldsymbol{b}
I've inserted something that you may have forgotten.
(See the <inserted text> above.)
With luck, this will get me unwedged. But if you
really didn't forget anything, try typing `2' now; then
my insertion and my current dilemma will both disappear.
! Missing $ inserted.
<inserted text>
l.9 \boldsymbol{b}_
I've inserted a begin-math/end-math symbol since I think
you left one out. Proceed, with fingers crossed.
! Missing $ inserted.
<inserted text>
l.10 \end{document}
I've inserted a begin-math/end-math symbol since I think
you left one out. Proceed, with fingers crossed.
] ("Text Box 53.aux") )
Here is how much of TeX's memory you used:
1411 strings out of 95305
16053 string characters out of 1183061
59708 words of memory out of 1500000
4639 multiletter control sequences out of 110000
8096 words of font info for 31 fonts, out of 1200000 for 2000
14 hyphenation exceptions out of 8191
27i,5n,24p,221b,112s stack positions out of 5000i,500n,10000p,200000b,5000s
Output written on "Text Box 53.dvi" (1 page, 348 bytes).

## Text block 400

CTOP

## Text block 401

189.125

## Text block 402

CLEFT

## Text block 403

243.375

## Text block 404

CWIDTH

## Text block 405

23.875

## Text block 406

CHEIGHT

## Text block 407

21.875

## Text block 408

MAG

## Text block 409

SRC

## Text block 410

$\boldsymbol{y} = \boldsymbol{b}_1^T\boldsymbol{b}_1\boldsymbol{x}

## Text block 411

LOG

## Text block 412

This is pdfTeX, Version 3.1415926-1.40.9 (MiKTeX 2.7) (preloaded format=latex 2008.11.17) 26 FEB 2009 07:59
entering extended mode
**Group*133
("Group 133.tex"
LaTeX2e <2005/12/01>
Babel <v3.8l> and hyphenation patterns for english, dumylang, nohyphenation, ge
rman, ngerman, german-x-2008-06-18, ngerman-x-2008-06-18, french, loaded.
("C:\Program Files\MiKTeX 2.7\tex\latex\base\article.cls"
Document Class: article 2005/09/16 v1.4f Standard LaTeX document class
("C:\Program Files\MiKTeX 2.7\tex\latex\base\size10.clo"
File: size10.clo 2005/09/16 v1.4f Standard LaTeX file (size option)
\c@part=\count79
\c@section=\count80
\c@subsection=\count81
\c@subsubsection=\count82
\c@paragraph=\count83
\c@subparagraph=\count84
\c@figure=\count85
\c@table=\count86
\abovecaptionskip=\skip41
\belowcaptionskip=\skip42
\bibindent=\dimen102
) ("C:\Program Files\MiKTeX 2.7\tex\latex\tools\xspace.sty"
Package: xspace 2006/05/08 v1.12 Space after command names (DPC,MH)
) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\amssymb.sty"
Package: amssymb 2002/01/22 v2.2d
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\amsfonts.sty"
Package: amsfonts 2001/10/25 v2.2f
\@emptytoks=\toks14
\symAMSa=\mathgroup4
\symAMSb=\mathgroup5
LaTeX Font Info: Overwriting math alphabet `\mathfrak' in version `bold'
(Font) U/euf/m/n --> U/euf/b/n on input line 132.
)) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsmath.sty"
Package: amsmath 2000/07/18 v2.13 AMS math features
\@mathmargin=\skip43
For additional information on amsmath, use the `?' option.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amstext.sty"
Package: amstext 2000/06/29 v2.01
("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsgen.sty"
File: amsgen.sty 1999/11/30 v2.0
\@emptytoks=\toks15
\ex@=\dimen103
)) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsbsy.sty"
Package: amsbsy 1999/11/29 v1.2d
\pmbraise@=\dimen104
) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsopn.sty"
Package: amsopn 1999/12/14 v2.01 operator names
\inf@bad=\count87
LaTeX Info: Redefining \frac on input line 211.
\uproot@=\count88
\leftroot@=\count89
LaTeX Info: Redefining \overline on input line 307.
\classnum@=\count90
\DOTSCASE@=\count91
LaTeX Info: Redefining \ldots on input line 379.
LaTeX Info: Redefining \dots on input line 382.
LaTeX Info: Redefining \cdots on input line 467.
\Mathstrutbox@=\box26
\strutbox@=\box27
\big@size=\dimen105
LaTeX Font Info: Redeclaring font encoding OML on input line 567.
LaTeX Font Info: Redeclaring font encoding OMS on input line 568.
\macc@depth=\count92
\c@MaxMatrixCols=\count93
\dotsspace@=\muskip10
\c@parentequation=\count94
\dspbrk@lvl=\count95
\tag@help=\toks16
\row@=\count96
\column@=\count97
\maxfields@=\count98
\andhelp@=\toks17
\eqnshift@=\dimen106
\alignsep@=\dimen107
\tagshift@=\dimen108
\tagwidth@=\dimen109
\totwidth@=\dimen110
\lineht@=\dimen111
\@envbody=\toks18
\multlinegap=\skip44
\multlinetaggap=\skip45
\mathdisplay@stack=\toks19
LaTeX Info: Redefining \[ on input line 2666.
LaTeX Info: Redefining \] on input line 2667.
) ("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\color.sty"
Package: color 2005/11/14 v1.0j Standard LaTeX Color (DPC)
("C:\Program Files\MiKTeX 2.7\tex\latex\00miktex\color.cfg"
File: color.cfg 2007/01/18 v1.5 color configuration of teTeX/TeXLive
Package color Info: Driver file: dvips.def on input line 130.
("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\dvips.def"
File: dvips.def 1999/02/16 v3.0i Driver-dependant file (DPC,SPQR)
) ("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\dvipsnam.def"
File: dvipsnam.def 1999/02/16 v3.0i Driver-dependant file (DPC,SPQR)
)) ("C:\Program Files\TeX4PPT\Styles\TeX4PPT.sty")
No file Group*133.aux.
LaTeX Font Info: Checking defaults for OML/cmm/m/it on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for T1/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OT1/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OMS/cmsy/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OMX/cmex/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for U/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Try loading font information for U+msa on input line 9.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\umsa.fd"
File: umsa.fd 2002/01/19 v2.2g AMS font definitions
LaTeX Font Info: Try loading font information for U+msb on input line 9.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\umsb.fd"
File: umsb.fd 2002/01/19 v2.2g AMS font definitions
! Missing $ inserted.
<inserted text>
l.10 \end{document}
I've inserted a begin-math/end-math symbol since I think
you left one out. Proceed, with fingers crossed.
] ("Group 133.aux") )
Here is how much of TeX's memory you used:
1411 strings out of 95305
16037 string characters out of 1183061
59708 words of memory out of 1500000
4639 multiletter control sequences out of 110000
8096 words of font info for 31 fonts, out of 1200000 for 2000
14 hyphenation exceptions out of 8191
27i,6n,24p,219b,112s stack positions out of 5000i,500n,10000p,200000b,5000s
Output written on "Group 133.dvi" (1 page, 496 bytes).

## Text block 413

CTOP

## Text block 414

186.75

## Text block 415

CLEFT

## Text block 416

248.5

## Text block 417

CWIDTH

## Text block 418

125.875

## Text block 419

CHEIGHT

## Text block 420

31.125

## Text block 421

MAG

## Text block 422

PxP matice má (nanejvýš) P různých vlastních čísel. Nechť je Λ diagonální matice všech vlastních čísel a matice E obsahuje ve sloupcích odpovídající vlastní vektory.

## Text block 423

SRC

## Text block 424

$\boldsymbol{AE} = \boldsymbol{E \Lambda} $

## Text block 425

LOG

## Text block 426

This is pdfTeX, Version 3.1415926-1.40.9 (MiKTeX 2.7) (preloaded format=latex 2008.11.17) 26 FEB 2009 00:49
entering extended mode
**Text*Box*115
("Text Box 115.tex"
LaTeX2e <2005/12/01>
Babel <v3.8l> and hyphenation patterns for english, dumylang, nohyphenation, ge
rman, ngerman, german-x-2008-06-18, ngerman-x-2008-06-18, french, loaded.
("C:\Program Files\MiKTeX 2.7\tex\latex\base\article.cls"
Document Class: article 2005/09/16 v1.4f Standard LaTeX document class
("C:\Program Files\MiKTeX 2.7\tex\latex\base\size10.clo"
File: size10.clo 2005/09/16 v1.4f Standard LaTeX file (size option)
\c@part=\count79
\c@section=\count80
\c@subsection=\count81
\c@subsubsection=\count82
\c@paragraph=\count83
\c@subparagraph=\count84
\c@figure=\count85
\c@table=\count86
\abovecaptionskip=\skip41
\belowcaptionskip=\skip42
\bibindent=\dimen102
) ("C:\Program Files\MiKTeX 2.7\tex\latex\tools\xspace.sty"
Package: xspace 2006/05/08 v1.12 Space after command names (DPC,MH)
) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\amssymb.sty"
Package: amssymb 2002/01/22 v2.2d
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\amsfonts.sty"
Package: amsfonts 2001/10/25 v2.2f
\@emptytoks=\toks14
\symAMSa=\mathgroup4
\symAMSb=\mathgroup5
LaTeX Font Info: Overwriting math alphabet `\mathfrak' in version `bold'
(Font) U/euf/m/n --> U/euf/b/n on input line 132.
)) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsmath.sty"
Package: amsmath 2000/07/18 v2.13 AMS math features
\@mathmargin=\skip43
For additional information on amsmath, use the `?' option.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amstext.sty"
Package: amstext 2000/06/29 v2.01
("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsgen.sty"
File: amsgen.sty 1999/11/30 v2.0
\@emptytoks=\toks15
\ex@=\dimen103
)) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsbsy.sty"
Package: amsbsy 1999/11/29 v1.2d
\pmbraise@=\dimen104
) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsopn.sty"
Package: amsopn 1999/12/14 v2.01 operator names
\inf@bad=\count87
LaTeX Info: Redefining \frac on input line 211.
\uproot@=\count88
\leftroot@=\count89
LaTeX Info: Redefining \overline on input line 307.
\classnum@=\count90
\DOTSCASE@=\count91
LaTeX Info: Redefining \ldots on input line 379.
LaTeX Info: Redefining \dots on input line 382.
LaTeX Info: Redefining \cdots on input line 467.
\Mathstrutbox@=\box26
\strutbox@=\box27
\big@size=\dimen105
LaTeX Font Info: Redeclaring font encoding OML on input line 567.
LaTeX Font Info: Redeclaring font encoding OMS on input line 568.
\macc@depth=\count92
\c@MaxMatrixCols=\count93
\dotsspace@=\muskip10
\c@parentequation=\count94
\dspbrk@lvl=\count95
\tag@help=\toks16
\row@=\count96
\column@=\count97
\maxfields@=\count98
\andhelp@=\toks17
\eqnshift@=\dimen106
\alignsep@=\dimen107
\tagshift@=\dimen108
\tagwidth@=\dimen109
\totwidth@=\dimen110
\lineht@=\dimen111
\@envbody=\toks18
\multlinegap=\skip44
\multlinetaggap=\skip45
\mathdisplay@stack=\toks19
LaTeX Info: Redefining \[ on input line 2666.
LaTeX Info: Redefining \] on input line 2667.
) ("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\color.sty"
Package: color 2005/11/14 v1.0j Standard LaTeX Color (DPC)
("C:\Program Files\MiKTeX 2.7\tex\latex\00miktex\color.cfg"
File: color.cfg 2007/01/18 v1.5 color configuration of teTeX/TeXLive
Package color Info: Driver file: dvips.def on input line 130.
("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\dvips.def"
File: dvips.def 1999/02/16 v3.0i Driver-dependant file (DPC,SPQR)
) ("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\dvipsnam.def"
File: dvipsnam.def 1999/02/16 v3.0i Driver-dependant file (DPC,SPQR)
)) ("C:\Program Files\TeX4PPT\Styles\TeX4PPT.sty")
No file Text*Box*115.aux.
LaTeX Font Info: Checking defaults for OML/cmm/m/it on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for T1/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OT1/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OMS/cmsy/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OMX/cmex/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for U/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Try loading font information for U+msa on input line 9.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\umsa.fd"
File: umsa.fd 2002/01/19 v2.2g AMS font definitions
LaTeX Font Info: Try loading font information for U+msb on input line 9.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\umsb.fd"
File: umsb.fd 2002/01/19 v2.2g AMS font definitions
] ("Text Box 115.aux") )
Here is how much of TeX's memory you used:
1411 strings out of 95305
16061 string characters out of 1183061
59708 words of memory out of 1500000
4639 multiletter control sequences out of 110000
8096 words of font info for 31 fonts, out of 1200000 for 2000
14 hyphenation exceptions out of 8191
27i,6n,24p,222b,112s stack positions out of 5000i,500n,10000p,200000b,5000s
Output written on "Text Box 115.dvi" (1 page, 408 bytes).

## Text block 427

CTOP

## Text block 428

226.75

## Text block 429

CLEFT

## Text block 430

294.625

## Text block 431

CWIDTH

## Text block 432

154.25

## Text block 433

CHEIGHT

## Text block 434

22.375

## Text block 435

MAG

## Text block 436

SRC

## Text block 437

$\boldsymbol{Ae} = \boldsymbol{e} \lambda$

## Text block 438

LOG

## Text block 439

This is pdfTeX, Version 3.1415926-1.40.9 (MiKTeX 2.7) (preloaded format=latex 2008.11.17) 26 FEB 2009 00:52
entering extended mode
**Text*Box*123
("Text Box 123.tex"
LaTeX2e <2005/12/01>
Babel <v3.8l> and hyphenation patterns for english, dumylang, nohyphenation, ge
rman, ngerman, german-x-2008-06-18, ngerman-x-2008-06-18, french, loaded.
("C:\Program Files\MiKTeX 2.7\tex\latex\base\article.cls"
Document Class: article 2005/09/16 v1.4f Standard LaTeX document class
("C:\Program Files\MiKTeX 2.7\tex\latex\base\size10.clo"
File: size10.clo 2005/09/16 v1.4f Standard LaTeX file (size option)
\c@part=\count79
\c@section=\count80
\c@subsection=\count81
\c@subsubsection=\count82
\c@paragraph=\count83
\c@subparagraph=\count84
\c@figure=\count85
\c@table=\count86
\abovecaptionskip=\skip41
\belowcaptionskip=\skip42
\bibindent=\dimen102
) ("C:\Program Files\MiKTeX 2.7\tex\latex\tools\xspace.sty"
Package: xspace 2006/05/08 v1.12 Space after command names (DPC,MH)
) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\amssymb.sty"
Package: amssymb 2002/01/22 v2.2d
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\amsfonts.sty"
Package: amsfonts 2001/10/25 v2.2f
\@emptytoks=\toks14
\symAMSa=\mathgroup4
\symAMSb=\mathgroup5
LaTeX Font Info: Overwriting math alphabet `\mathfrak' in version `bold'
(Font) U/euf/m/n --> U/euf/b/n on input line 132.
)) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsmath.sty"
Package: amsmath 2000/07/18 v2.13 AMS math features
\@mathmargin=\skip43
For additional information on amsmath, use the `?' option.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amstext.sty"
Package: amstext 2000/06/29 v2.01
("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsgen.sty"
File: amsgen.sty 1999/11/30 v2.0
\@emptytoks=\toks15
\ex@=\dimen103
)) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsbsy.sty"
Package: amsbsy 1999/11/29 v1.2d
\pmbraise@=\dimen104
) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsopn.sty"
Package: amsopn 1999/12/14 v2.01 operator names
\inf@bad=\count87
LaTeX Info: Redefining \frac on input line 211.
\uproot@=\count88
\leftroot@=\count89
LaTeX Info: Redefining \overline on input line 307.
\classnum@=\count90
\DOTSCASE@=\count91
LaTeX Info: Redefining \ldots on input line 379.
LaTeX Info: Redefining \dots on input line 382.
LaTeX Info: Redefining \cdots on input line 467.
\Mathstrutbox@=\box26
\strutbox@=\box27
\big@size=\dimen105
LaTeX Font Info: Redeclaring font encoding OML on input line 567.
LaTeX Font Info: Redeclaring font encoding OMS on input line 568.
\macc@depth=\count92
\c@MaxMatrixCols=\count93
\dotsspace@=\muskip10
\c@parentequation=\count94
\dspbrk@lvl=\count95
\tag@help=\toks16
\row@=\count96
\column@=\count97
\maxfields@=\count98
\andhelp@=\toks17
\eqnshift@=\dimen106
\alignsep@=\dimen107
\tagshift@=\dimen108
\tagwidth@=\dimen109
\totwidth@=\dimen110
\lineht@=\dimen111
\@envbody=\toks18
\multlinegap=\skip44
\multlinetaggap=\skip45
\mathdisplay@stack=\toks19
LaTeX Info: Redefining \[ on input line 2666.
LaTeX Info: Redefining \] on input line 2667.
) ("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\color.sty"
Package: color 2005/11/14 v1.0j Standard LaTeX Color (DPC)
("C:\Program Files\MiKTeX 2.7\tex\latex\00miktex\color.cfg"
File: color.cfg 2007/01/18 v1.5 color configuration of teTeX/TeXLive
Package color Info: Driver file: dvips.def on input line 130.
("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\dvips.def"
File: dvips.def 1999/02/16 v3.0i Driver-dependant file (DPC,SPQR)
) ("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\dvipsnam.def"
File: dvipsnam.def 1999/02/16 v3.0i Driver-dependant file (DPC,SPQR)
)) ("C:\Program Files\TeX4PPT\Styles\TeX4PPT.sty")
No file Text*Box*123.aux.
LaTeX Font Info: Checking defaults for OML/cmm/m/it on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for T1/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OT1/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OMS/cmsy/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OMX/cmex/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for U/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Try loading font information for U+msa on input line 9.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\umsa.fd"
File: umsa.fd 2002/01/19 v2.2g AMS font definitions
LaTeX Font Info: Try loading font information for U+msb on input line 9.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\umsb.fd"
File: umsb.fd 2002/01/19 v2.2g AMS font definitions
] ("Text Box 123.aux") )
Here is how much of TeX's memory you used:
1411 strings out of 95305
16061 string characters out of 1183061
59708 words of memory out of 1500000
4639 multiletter control sequences out of 110000
8096 words of font info for 31 fonts, out of 1200000 for 2000
14 hyphenation exceptions out of 8191
27i,6n,24p,222b,112s stack positions out of 5000i,500n,10000p,200000b,5000s
Output written on "Text Box 123.dvi" (1 page, 408 bytes).

## Text block 440

CTOP

## Text block 441

226.5

## Text block 442

CLEFT

## Text block 443

294.625

## Text block 444

CWIDTH

## Text block 445

126.75

## Text block 446

CHEIGHT

## Text block 447

22.625

## Text block 448

MAG

## Text block 449

Nás bude zajímat speciální případ kdy matice A je symetrická. Potom budou sloupce matice E tvořit ortonormální báze. Pro takovou matici potom platí: ETE = E-1E = I, kde I je jednotková matice. Tedy platí následující rozklady matic:

## Text block 450

SRC

## Text block 451

$\boldsymbol{E}^T\boldsymbol{AE} = \boldsymbol{\Lambda} $

## Text block 452

LOG

## Text block 453

This is pdfTeX, Version 3.1415926-1.40.9 (MiKTeX 2.7) (preloaded format=latex 2008.11.17) 26 FEB 2009 01:08
entering extended mode
**Text*Box*157
("Text Box 157.tex"
LaTeX2e <2005/12/01>
Babel <v3.8l> and hyphenation patterns for english, dumylang, nohyphenation, ge
rman, ngerman, german-x-2008-06-18, ngerman-x-2008-06-18, french, loaded.
("C:\Program Files\MiKTeX 2.7\tex\latex\base\article.cls"
Document Class: article 2005/09/16 v1.4f Standard LaTeX document class
("C:\Program Files\MiKTeX 2.7\tex\latex\base\size10.clo"
File: size10.clo 2005/09/16 v1.4f Standard LaTeX file (size option)
\c@part=\count79
\c@section=\count80
\c@subsection=\count81
\c@subsubsection=\count82
\c@paragraph=\count83
\c@subparagraph=\count84
\c@figure=\count85
\c@table=\count86
\abovecaptionskip=\skip41
\belowcaptionskip=\skip42
\bibindent=\dimen102
) ("C:\Program Files\MiKTeX 2.7\tex\latex\tools\xspace.sty"
Package: xspace 2006/05/08 v1.12 Space after command names (DPC,MH)
) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\amssymb.sty"
Package: amssymb 2002/01/22 v2.2d
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\amsfonts.sty"
Package: amsfonts 2001/10/25 v2.2f
\@emptytoks=\toks14
\symAMSa=\mathgroup4
\symAMSb=\mathgroup5
LaTeX Font Info: Overwriting math alphabet `\mathfrak' in version `bold'
(Font) U/euf/m/n --> U/euf/b/n on input line 132.
)) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsmath.sty"
Package: amsmath 2000/07/18 v2.13 AMS math features
\@mathmargin=\skip43
For additional information on amsmath, use the `?' option.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amstext.sty"
Package: amstext 2000/06/29 v2.01
("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsgen.sty"
File: amsgen.sty 1999/11/30 v2.0
\@emptytoks=\toks15
\ex@=\dimen103
)) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsbsy.sty"
Package: amsbsy 1999/11/29 v1.2d
\pmbraise@=\dimen104
) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsopn.sty"
Package: amsopn 1999/12/14 v2.01 operator names
\inf@bad=\count87
LaTeX Info: Redefining \frac on input line 211.
\uproot@=\count88
\leftroot@=\count89
LaTeX Info: Redefining \overline on input line 307.
\classnum@=\count90
\DOTSCASE@=\count91
LaTeX Info: Redefining \ldots on input line 379.
LaTeX Info: Redefining \dots on input line 382.
LaTeX Info: Redefining \cdots on input line 467.
\Mathstrutbox@=\box26
\strutbox@=\box27
\big@size=\dimen105
LaTeX Font Info: Redeclaring font encoding OML on input line 567.
LaTeX Font Info: Redeclaring font encoding OMS on input line 568.
\macc@depth=\count92
\c@MaxMatrixCols=\count93
\dotsspace@=\muskip10
\c@parentequation=\count94
\dspbrk@lvl=\count95
\tag@help=\toks16
\row@=\count96
\column@=\count97
\maxfields@=\count98
\andhelp@=\toks17
\eqnshift@=\dimen106
\alignsep@=\dimen107
\tagshift@=\dimen108
\tagwidth@=\dimen109
\totwidth@=\dimen110
\lineht@=\dimen111
\@envbody=\toks18
\multlinegap=\skip44
\multlinetaggap=\skip45
\mathdisplay@stack=\toks19
LaTeX Info: Redefining \[ on input line 2666.
LaTeX Info: Redefining \] on input line 2667.
) ("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\color.sty"
Package: color 2005/11/14 v1.0j Standard LaTeX Color (DPC)
("C:\Program Files\MiKTeX 2.7\tex\latex\00miktex\color.cfg"
File: color.cfg 2007/01/18 v1.5 color configuration of teTeX/TeXLive
Package color Info: Driver file: dvips.def on input line 130.
("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\dvips.def"
File: dvips.def 1999/02/16 v3.0i Driver-dependant file (DPC,SPQR)
) ("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\dvipsnam.def"
File: dvipsnam.def 1999/02/16 v3.0i Driver-dependant file (DPC,SPQR)
)) ("C:\Program Files\TeX4PPT\Styles\TeX4PPT.sty")
No file Text*Box*157.aux.
LaTeX Font Info: Checking defaults for OML/cmm/m/it on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for T1/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OT1/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OMS/cmsy/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OMX/cmex/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for U/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Try loading font information for U+msa on input line 9.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\umsa.fd"
File: umsa.fd 2002/01/19 v2.2g AMS font definitions
LaTeX Font Info: Try loading font information for U+msb on input line 9.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\umsb.fd"
File: umsb.fd 2002/01/19 v2.2g AMS font definitions
] ("Text Box 157.aux") )
Here is how much of TeX's memory you used:
1411 strings out of 95305
16061 string characters out of 1183061
59708 words of memory out of 1500000
4639 multiletter control sequences out of 110000
8096 words of font info for 31 fonts, out of 1200000 for 2000
14 hyphenation exceptions out of 8191
27i,6n,24p,222b,112s stack positions out of 5000i,500n,10000p,200000b,5000s
Output written on "Text Box 157.dvi" (1 page, 464 bytes).

## Text block 454

CTOP

## Text block 455

219.25

## Text block 456

CLEFT

## Text block 457

294.625

## Text block 458

CWIDTH

## Text block 459

174.75

## Text block 460

CHEIGHT

## Text block 461

29.875

## Text block 462

MAG

## Text block 463

SRC

## Text block 464

$ \boldsymbol{A} = \boldsymbol{E\Lambda E}^T$

## Text block 465

LOG

## Text block 466

This is pdfTeX, Version 3.1415926-1.40.9 (MiKTeX 2.7) (preloaded format=latex 2008.11.17) 26 FEB 2009 01:10
entering extended mode
**Text*Box*190
("Text Box 190.tex"
LaTeX2e <2005/12/01>
Babel <v3.8l> and hyphenation patterns for english, dumylang, nohyphenation, ge
rman, ngerman, german-x-2008-06-18, ngerman-x-2008-06-18, french, loaded.
("C:\Program Files\MiKTeX 2.7\tex\latex\base\article.cls"
Document Class: article 2005/09/16 v1.4f Standard LaTeX document class
("C:\Program Files\MiKTeX 2.7\tex\latex\base\size10.clo"
File: size10.clo 2005/09/16 v1.4f Standard LaTeX file (size option)
\c@part=\count79
\c@section=\count80
\c@subsection=\count81
\c@subsubsection=\count82
\c@paragraph=\count83
\c@subparagraph=\count84
\c@figure=\count85
\c@table=\count86
\abovecaptionskip=\skip41
\belowcaptionskip=\skip42
\bibindent=\dimen102
) ("C:\Program Files\MiKTeX 2.7\tex\latex\tools\xspace.sty"
Package: xspace 2006/05/08 v1.12 Space after command names (DPC,MH)
) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\amssymb.sty"
Package: amssymb 2002/01/22 v2.2d
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\amsfonts.sty"
Package: amsfonts 2001/10/25 v2.2f
\@emptytoks=\toks14
\symAMSa=\mathgroup4
\symAMSb=\mathgroup5
LaTeX Font Info: Overwriting math alphabet `\mathfrak' in version `bold'
(Font) U/euf/m/n --> U/euf/b/n on input line 132.
)) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsmath.sty"
Package: amsmath 2000/07/18 v2.13 AMS math features
\@mathmargin=\skip43
For additional information on amsmath, use the `?' option.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amstext.sty"
Package: amstext 2000/06/29 v2.01
("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsgen.sty"
File: amsgen.sty 1999/11/30 v2.0
\@emptytoks=\toks15
\ex@=\dimen103
)) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsbsy.sty"
Package: amsbsy 1999/11/29 v1.2d
\pmbraise@=\dimen104
) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsopn.sty"
Package: amsopn 1999/12/14 v2.01 operator names
\inf@bad=\count87
LaTeX Info: Redefining \frac on input line 211.
\uproot@=\count88
\leftroot@=\count89
LaTeX Info: Redefining \overline on input line 307.
\classnum@=\count90
\DOTSCASE@=\count91
LaTeX Info: Redefining \ldots on input line 379.
LaTeX Info: Redefining \dots on input line 382.
LaTeX Info: Redefining \cdots on input line 467.
\Mathstrutbox@=\box26
\strutbox@=\box27
\big@size=\dimen105
LaTeX Font Info: Redeclaring font encoding OML on input line 567.
LaTeX Font Info: Redeclaring font encoding OMS on input line 568.
\macc@depth=\count92
\c@MaxMatrixCols=\count93
\dotsspace@=\muskip10
\c@parentequation=\count94
\dspbrk@lvl=\count95
\tag@help=\toks16
\row@=\count96
\column@=\count97
\maxfields@=\count98
\andhelp@=\toks17
\eqnshift@=\dimen106
\alignsep@=\dimen107
\tagshift@=\dimen108
\tagwidth@=\dimen109
\totwidth@=\dimen110
\lineht@=\dimen111
\@envbody=\toks18
\multlinegap=\skip44
\multlinetaggap=\skip45
\mathdisplay@stack=\toks19
LaTeX Info: Redefining \[ on input line 2666.
LaTeX Info: Redefining \] on input line 2667.
) ("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\color.sty"
Package: color 2005/11/14 v1.0j Standard LaTeX Color (DPC)
("C:\Program Files\MiKTeX 2.7\tex\latex\00miktex\color.cfg"
File: color.cfg 2007/01/18 v1.5 color configuration of teTeX/TeXLive
Package color Info: Driver file: dvips.def on input line 130.
("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\dvips.def"
File: dvips.def 1999/02/16 v3.0i Driver-dependant file (DPC,SPQR)
) ("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\dvipsnam.def"
File: dvipsnam.def 1999/02/16 v3.0i Driver-dependant file (DPC,SPQR)
)) ("C:\Program Files\TeX4PPT\Styles\TeX4PPT.sty")
No file Text*Box*190.aux.
LaTeX Font Info: Checking defaults for OML/cmm/m/it on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for T1/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OT1/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OMS/cmsy/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OMX/cmex/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for U/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Try loading font information for U+msa on input line 9.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\umsa.fd"
File: umsa.fd 2002/01/19 v2.2g AMS font definitions
LaTeX Font Info: Try loading font information for U+msb on input line 9.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\umsb.fd"
File: umsb.fd 2002/01/19 v2.2g AMS font definitions
] ("Text Box 190.aux") )
Here is how much of TeX's memory you used:
1411 strings out of 95305
16061 string characters out of 1183061
59708 words of memory out of 1500000
4639 multiletter control sequences out of 110000
8096 words of font info for 31 fonts, out of 1200000 for 2000
14 hyphenation exceptions out of 8191
27i,6n,24p,222b,112s stack positions out of 5000i,500n,10000p,200000b,5000s
Output written on "Text Box 190.dvi" (1 page, 464 bytes).

## Text block 467

CTOP

## Text block 468

219.25

## Text block 469

CLEFT

## Text block 470

294.625

## Text block 471

CWIDTH

## Text block 472

169.625

## Text block 473

CHEIGHT

## Text block 474

29.875

## Text block 475

MAG

## Text block 476

SRC

## Text block 477

\begin{eqnarray}
\nonumber
\boldsymbol{\mu_y} & = & \frac{1}{T} \sum_{t=1}^T \boldsymbol{Ax}(t) \\
\nonumber
& = & \boldsymbol{A}\frac{1}{T} \sum_{t=1}^T \boldsymbol{x}(t) \\
\nonumber
& = & \boldsymbol{A\mu_x}
\end{eqnarray}

## Text block 478

LOG

## Text block 479

This is pdfTeX, Version 3.1415926-1.40.9 (MiKTeX 2.7) (preloaded format=latex 2008.11.17) 26 FEB 2009 01:34
entering extended mode
**Text*Box*283
("Text Box 283.tex"
LaTeX2e <2005/12/01>
Babel <v3.8l> and hyphenation patterns for english, dumylang, nohyphenation, ge
rman, ngerman, german-x-2008-06-18, ngerman-x-2008-06-18, french, loaded.
("C:\Program Files\MiKTeX 2.7\tex\latex\base\article.cls"
Document Class: article 2005/09/16 v1.4f Standard LaTeX document class
("C:\Program Files\MiKTeX 2.7\tex\latex\base\size10.clo"
File: size10.clo 2005/09/16 v1.4f Standard LaTeX file (size option)
\c@part=\count79
\c@section=\count80
\c@subsection=\count81
\c@subsubsection=\count82
\c@paragraph=\count83
\c@subparagraph=\count84
\c@figure=\count85
\c@table=\count86
\abovecaptionskip=\skip41
\belowcaptionskip=\skip42
\bibindent=\dimen102
) ("C:\Program Files\MiKTeX 2.7\tex\latex\tools\xspace.sty"
Package: xspace 2006/05/08 v1.12 Space after command names (DPC,MH)
) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\amssymb.sty"
Package: amssymb 2002/01/22 v2.2d
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\amsfonts.sty"
Package: amsfonts 2001/10/25 v2.2f
\@emptytoks=\toks14
\symAMSa=\mathgroup4
\symAMSb=\mathgroup5
LaTeX Font Info: Overwriting math alphabet `\mathfrak' in version `bold'
(Font) U/euf/m/n --> U/euf/b/n on input line 132.
)) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsmath.sty"
Package: amsmath 2000/07/18 v2.13 AMS math features
\@mathmargin=\skip43
For additional information on amsmath, use the `?' option.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amstext.sty"
Package: amstext 2000/06/29 v2.01
("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsgen.sty"
File: amsgen.sty 1999/11/30 v2.0
\@emptytoks=\toks15
\ex@=\dimen103
)) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsbsy.sty"
Package: amsbsy 1999/11/29 v1.2d
\pmbraise@=\dimen104
) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsopn.sty"
Package: amsopn 1999/12/14 v2.01 operator names
\inf@bad=\count87
LaTeX Info: Redefining \frac on input line 211.
\uproot@=\count88
\leftroot@=\count89
LaTeX Info: Redefining \overline on input line 307.
\classnum@=\count90
\DOTSCASE@=\count91
LaTeX Info: Redefining \ldots on input line 379.
LaTeX Info: Redefining \dots on input line 382.
LaTeX Info: Redefining \cdots on input line 467.
\Mathstrutbox@=\box26
\strutbox@=\box27
\big@size=\dimen105
LaTeX Font Info: Redeclaring font encoding OML on input line 567.
LaTeX Font Info: Redeclaring font encoding OMS on input line 568.
\macc@depth=\count92
\c@MaxMatrixCols=\count93
\dotsspace@=\muskip10
\c@parentequation=\count94
\dspbrk@lvl=\count95
\tag@help=\toks16
\row@=\count96
\column@=\count97
\maxfields@=\count98
\andhelp@=\toks17
\eqnshift@=\dimen106
\alignsep@=\dimen107
\tagshift@=\dimen108
\tagwidth@=\dimen109
\totwidth@=\dimen110
\lineht@=\dimen111
\@envbody=\toks18
\multlinegap=\skip44
\multlinetaggap=\skip45
\mathdisplay@stack=\toks19
LaTeX Info: Redefining \[ on input line 2666.
LaTeX Info: Redefining \] on input line 2667.
) ("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\color.sty"
Package: color 2005/11/14 v1.0j Standard LaTeX Color (DPC)
("C:\Program Files\MiKTeX 2.7\tex\latex\00miktex\color.cfg"
File: color.cfg 2007/01/18 v1.5 color configuration of teTeX/TeXLive
Package color Info: Driver file: dvips.def on input line 130.
("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\dvips.def"
File: dvips.def 1999/02/16 v3.0i Driver-dependant file (DPC,SPQR)
) ("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\dvipsnam.def"
File: dvipsnam.def 1999/02/16 v3.0i Driver-dependant file (DPC,SPQR)
)) ("C:\Program Files\TeX4PPT\Styles\TeX4PPT.sty")
No file Text*Box*283.aux.
LaTeX Font Info: Checking defaults for OML/cmm/m/it on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for T1/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OT1/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OMS/cmsy/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OMX/cmex/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for U/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Try loading font information for U+msa on input line 9.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\umsa.fd"
File: umsa.fd 2002/01/19 v2.2g AMS font definitions
LaTeX Font Info: Try loading font information for U+msb on input line 9.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\umsb.fd"
File: umsb.fd 2002/01/19 v2.2g AMS font definitions
] ("Text Box 283.aux") )
Here is how much of TeX's memory you used:
1411 strings out of 95305
16061 string characters out of 1183061
60708 words of memory out of 1500000
4639 multiletter control sequences out of 110000
8096 words of font info for 31 fonts, out of 1200000 for 2000
14 hyphenation exceptions out of 8191
27i,10n,24p,222b,127s stack positions out of 5000i,500n,10000p,200000b,5000s
Output written on "Text Box 283.dvi" (1 page, 888 bytes).

## Text block 480

CTOP

## Text block 481

228.375

## Text block 482

CLEFT

## Text block 483

504.5

## Text block 484

CWIDTH

## Text block 485

232.25

## Text block 486

CHEIGHT

## Text block 487

191.125

## Text block 488

MAG

## Text block 489

Co se stane když jako A použijeme transponovanou matici vlastních vektoru kovarianční matice Σx? (Proč transponovanou? Protože vlastní vektory máme ve sloupcích a ne v řádcích).
Jaký význam mají vlastní čísla?

## Text block 490

SRC

## Text block 491

\begin{eqnarray}
\nonumber
\boldsymbol{\Sigma_y} & = & \frac{1}{T}\sum_{t=1}^T (\boldsymbol{Ax}(t)-\boldsymbol{\mu}_y) (\boldsymbol{Ax}(t)-\boldsymbol{\mu}_y)^T \\
\nonumber
& = & \boldsymbol{A}\frac{1}{T}\sum_{t=1}^T (\boldsymbol{x}(t)-\boldsymbol{\mu}_x) (\boldsymbol{x}(t)-\boldsymbol{\mu}_x)^T \boldsymbol{A}^T \\
\nonumber
& = & \boldsymbol{A\Sigma_x A}^T
\end{eqnarray}

## Text block 492

LOG

## Text block 493

This is pdfTeX, Version 3.1415926-1.40.9 (MiKTeX 2.7) (preloaded format=latex 2008.11.17) 26 FEB 2009 07:34
entering extended mode
**Text*Box*75
("Text Box 75.tex"
LaTeX2e <2005/12/01>
Babel <v3.8l> and hyphenation patterns for english, dumylang, nohyphenation, ge
rman, ngerman, german-x-2008-06-18, ngerman-x-2008-06-18, french, loaded.
("C:\Program Files\MiKTeX 2.7\tex\latex\base\article.cls"
Document Class: article 2005/09/16 v1.4f Standard LaTeX document class
("C:\Program Files\MiKTeX 2.7\tex\latex\base\size10.clo"
File: size10.clo 2005/09/16 v1.4f Standard LaTeX file (size option)
\c@part=\count79
\c@section=\count80
\c@subsection=\count81
\c@subsubsection=\count82
\c@paragraph=\count83
\c@subparagraph=\count84
\c@figure=\count85
\c@table=\count86
\abovecaptionskip=\skip41
\belowcaptionskip=\skip42
\bibindent=\dimen102
) ("C:\Program Files\MiKTeX 2.7\tex\latex\tools\xspace.sty"
Package: xspace 2006/05/08 v1.12 Space after command names (DPC,MH)
) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\amssymb.sty"
Package: amssymb 2002/01/22 v2.2d
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\amsfonts.sty"
Package: amsfonts 2001/10/25 v2.2f
\@emptytoks=\toks14
\symAMSa=\mathgroup4
\symAMSb=\mathgroup5
LaTeX Font Info: Overwriting math alphabet `\mathfrak' in version `bold'
(Font) U/euf/m/n --> U/euf/b/n on input line 132.
)) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsmath.sty"
Package: amsmath 2000/07/18 v2.13 AMS math features
\@mathmargin=\skip43
For additional information on amsmath, use the `?' option.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amstext.sty"
Package: amstext 2000/06/29 v2.01
("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsgen.sty"
File: amsgen.sty 1999/11/30 v2.0
\@emptytoks=\toks15
\ex@=\dimen103
)) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsbsy.sty"
Package: amsbsy 1999/11/29 v1.2d
\pmbraise@=\dimen104
) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsopn.sty"
Package: amsopn 1999/12/14 v2.01 operator names
\inf@bad=\count87
LaTeX Info: Redefining \frac on input line 211.
\uproot@=\count88
\leftroot@=\count89
LaTeX Info: Redefining \overline on input line 307.
\classnum@=\count90
\DOTSCASE@=\count91
LaTeX Info: Redefining \ldots on input line 379.
LaTeX Info: Redefining \dots on input line 382.
LaTeX Info: Redefining \cdots on input line 467.
\Mathstrutbox@=\box26
\strutbox@=\box27
\big@size=\dimen105
LaTeX Font Info: Redeclaring font encoding OML on input line 567.
LaTeX Font Info: Redeclaring font encoding OMS on input line 568.
\macc@depth=\count92
\c@MaxMatrixCols=\count93
\dotsspace@=\muskip10
\c@parentequation=\count94
\dspbrk@lvl=\count95
\tag@help=\toks16
\row@=\count96
\column@=\count97
\maxfields@=\count98
\andhelp@=\toks17
\eqnshift@=\dimen106
\alignsep@=\dimen107
\tagshift@=\dimen108
\tagwidth@=\dimen109
\totwidth@=\dimen110
\lineht@=\dimen111
\@envbody=\toks18
\multlinegap=\skip44
\multlinetaggap=\skip45
\mathdisplay@stack=\toks19
LaTeX Info: Redefining \[ on input line 2666.
LaTeX Info: Redefining \] on input line 2667.
) ("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\color.sty"
Package: color 2005/11/14 v1.0j Standard LaTeX Color (DPC)
("C:\Program Files\MiKTeX 2.7\tex\latex\00miktex\color.cfg"
File: color.cfg 2007/01/18 v1.5 color configuration of teTeX/TeXLive
Package color Info: Driver file: dvips.def on input line 130.
("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\dvips.def"
File: dvips.def 1999/02/16 v3.0i Driver-dependant file (DPC,SPQR)
) ("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\dvipsnam.def"
File: dvipsnam.def 1999/02/16 v3.0i Driver-dependant file (DPC,SPQR)
)) ("C:\Program Files\TeX4PPT\Styles\TeX4PPT.sty")
No file Text*Box*75.aux.
LaTeX Font Info: Checking defaults for OML/cmm/m/it on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for T1/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OT1/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OMS/cmsy/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OMX/cmex/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for U/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Try loading font information for U+msa on input line 9.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\umsa.fd"
File: umsa.fd 2002/01/19 v2.2g AMS font definitions
LaTeX Font Info: Try loading font information for U+msb on input line 9.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\umsb.fd"
File: umsb.fd 2002/01/19 v2.2g AMS font definitions
] ("Text Box 75.aux") )
Here is how much of TeX's memory you used:
1411 strings out of 95305
16053 string characters out of 1183061
60708 words of memory out of 1500000
4639 multiletter control sequences out of 110000
8096 words of font info for 31 fonts, out of 1200000 for 2000
14 hyphenation exceptions out of 8191
27i,10n,24p,221b,127s stack positions out of 5000i,500n,10000p,200000b,5000s
Output written on "Text Box 75.dvi" (1 page, 1188 bytes).

## Text block 494

CTOP

## Text block 495

223.125

## Text block 496

CLEFT

## Text block 497

368.375

## Text block 498

CWIDTH

## Text block 499

468.125

## Text block 500

CHEIGHT

## Text block 501

190.25

## Text block 502

MAG

## Text block 503

(Principal Component Analysis - PCA)

## Text block 504

SRC

## Text block 505

$\mathcal{N} (\boldsymbol{x} ; \boldsymbol{\mu}, \boldsymbol{\Sigma}) = \frac{1}{\sqrt{(2\pi)^P |\boldsymbol{\Sigma}|}}
e^{-\frac{1}{2} (\boldsymbol{x} - \boldsymbol{\mu})^T \boldsymbol{\Sigma}^{-1}(\boldsymbol{x} - \boldsymbol{\mu})}$

## Text block 506

LOG

## Text block 507

This is pdfeTeX, Version 3.141592-1.30.6-2.2 (MiKTeX 2.5) (preloaded format=latex 2007.2.25) 12 JUL 2007 17:49
entering extended mode
**Text*Box*1036
("Text Box 1036.tex"
LaTeX2e <2005/12/01>
Babel <v3.8g> and hyphenation patterns for english, dumylang, nohyphenation, ge
rman, ngerman, french, loaded.
("C:\Program Files\MiKTeX 2.5\tex\latex\base\article.cls"
Document Class: article 2005/09/16 v1.4f Standard LaTeX document class
("C:\Program Files\MiKTeX 2.5\tex\latex\base\size10.clo"
File: size10.clo 2005/09/16 v1.4f Standard LaTeX file (size option)
\c@part=\count79
\c@section=\count80
\c@subsection=\count81
\c@subsubsection=\count82
\c@paragraph=\count83
\c@subparagraph=\count84
\c@figure=\count85
\c@table=\count86
\abovecaptionskip=\skip41
\belowcaptionskip=\skip42
\bibindent=\dimen102
) ("C:\Program Files\MiKTeX 2.5\tex\latex\tools\xspace.sty"
Package: xspace 2006/05/08 v1.12 Space after command names (DPC,MH)
) ("C:\Program Files\MiKTeX 2.5\tex\latex\amsfonts\amssymb.sty"
Package: amssymb 2002/01/22 v2.2d
("C:\Program Files\MiKTeX 2.5\tex\latex\amsfonts\amsfonts.sty"
Package: amsfonts 2001/10/25 v2.2f
\@emptytoks=\toks14
\symAMSa=\mathgroup4
\symAMSb=\mathgroup5
LaTeX Font Info: Overwriting math alphabet `\mathfrak' in version `bold'
(Font) U/euf/m/n --> U/euf/b/n on input line 132.
)) ("C:\Program Files\MiKTeX 2.5\tex\latex\amsmath\amsmath.sty"
Package: amsmath 2000/07/18 v2.13 AMS math features
\@mathmargin=\skip43
For additional information on amsmath, use the `?' option.
("C:\Program Files\MiKTeX 2.5\tex\latex\amsmath\amstext.sty"
Package: amstext 2000/06/29 v2.01
("C:\Program Files\MiKTeX 2.5\tex\latex\amsmath\amsgen.sty"
File: amsgen.sty 1999/11/30 v2.0
\@emptytoks=\toks15
\ex@=\dimen103
)) ("C:\Program Files\MiKTeX 2.5\tex\latex\amsmath\amsbsy.sty"
Package: amsbsy 1999/11/29 v1.2d
\pmbraise@=\dimen104
) ("C:\Program Files\MiKTeX 2.5\tex\latex\amsmath\amsopn.sty"
Package: amsopn 1999/12/14 v2.01 operator names
\inf@bad=\count87
LaTeX Info: Redefining \frac on input line 211.
\uproot@=\count88
\leftroot@=\count89
LaTeX Info: Redefining \overline on input line 307.
\classnum@=\count90
\DOTSCASE@=\count91
LaTeX Info: Redefining \ldots on input line 379.
LaTeX Info: Redefining \dots on input line 382.
LaTeX Info: Redefining \cdots on input line 467.
\Mathstrutbox@=\box26
\strutbox@=\box27
\big@size=\dimen105
LaTeX Font Info: Redeclaring font encoding OML on input line 567.
LaTeX Font Info: Redeclaring font encoding OMS on input line 568.
\macc@depth=\count92
\c@MaxMatrixCols=\count93
\dotsspace@=\muskip10
\c@parentequation=\count94
\dspbrk@lvl=\count95
\tag@help=\toks16
\row@=\count96
\column@=\count97
\maxfields@=\count98
\andhelp@=\toks17
\eqnshift@=\dimen106
\alignsep@=\dimen107
\tagshift@=\dimen108
\tagwidth@=\dimen109
\totwidth@=\dimen110
\lineht@=\dimen111
\@envbody=\toks18
\multlinegap=\skip44
\multlinetaggap=\skip45
\mathdisplay@stack=\toks19
LaTeX Info: Redefining \[ on input line 2666.
LaTeX Info: Redefining \] on input line 2667.
) ("C:\Program Files\MiKTeX 2.5\tex\latex\graphics\color.sty"
Package: color 2005/11/14 v1.0j Standard LaTeX Color (DPC)
("C:\Program Files\MiKTeX 2.5\tex\latex\00miktex\color.cfg"
File: color.cfg 2005/12/29 v1.1 MiKTeX 'color' configuration
Package color Info: Driver file: dvips.def on input line 130.
("C:\Program Files\MiKTeX 2.5\tex\latex\graphics\dvips.def"
File: dvips.def 1999/02/16 v3.0i Driver-dependant file (DPC,SPQR)
) ("C:\Program Files\MiKTeX 2.5\tex\latex\graphics\dvipsnam.def"
File: dvipsnam.def 1999/02/16 v3.0i Driver-dependant file (DPC,SPQR)
)) ("C:\Program Files\TeX4PPT\Styles\TeX4PPT.sty")
No file Text*Box*1036.aux.
LaTeX Font Info: Checking defaults for OML/cmm/m/it on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for T1/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OT1/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OMS/cmsy/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OMX/cmex/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for U/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Try loading font information for U+msa on input line 9.
("C:\Program Files\MiKTeX 2.5\tex\latex\amsfonts\umsa.fd"
File: umsa.fd 2002/01/19 v2.2g AMS font definitions
LaTeX Font Info: Try loading font information for U+msb on input line 9.
("C:\Program Files\MiKTeX 2.5\tex\latex\amsfonts\umsb.fd"
File: umsb.fd 2002/01/19 v2.2g AMS font definitions
] ("Text Box 1036.aux") )
Here is how much of TeX's memory you used:
1464 strings out of 95420
16349 string characters out of 1187323
60111 words of memory out of 1063299
4587 multiletter control sequences out of 60000
8096 words of font info for 31 fonts, out of 1000000 for 2000
14 hyphenation exceptions out of 8191
27i,8n,24p,223b,112s stack positions out of 5000i,500n,10000p,200000b,32768s
Output written on "Text Box 1036.dvi" (1 page, 1108 bytes).

## Text block 508

CTOP

## Text block 509

197,125

## Text block 510

CLEFT

## Text block 511

266,5

## Text block 512

CWIDTH

## Text block 513

546,5

## Text block 514

CHEIGHT

## Text block 515

53,625

## Text block 516

MAG

## Text block 517

μ λ1=3.4∙105 λ2=2.8∙105 λ3=2.4∙105 λ3=1.6∙105

## Text block 518

Střední hodnota, vlastní čísla a vlastní vektory

## Text block 520

Originál M = 1 M=10 M=50 M=250

## Text block 521

m1

## Text block 522

m2

## Text block 523

Snažíme se data promítnout do takového směru, kde
Maximalizujeme vzdálenost mezi středními hodnotami tříd
Minimalizujeme průměrnou varianci tříd
Maximalizujeme tedy

## Text block 524

SRC

## Text block 525

$\boldsymbol{\Sigma}_{ac}\boldsymbol{\Sigma}_{wc}^{-1}$

## Text block 526

LOG

## Text block 527

This is pdfTeX, Version 3.1415926-1.40.9 (MiKTeX 2.7) (preloaded format=latex 2008.11.17) 26 FEB 2009 11:07
entering extended mode
**Group*52
("Group 52.tex"
LaTeX2e <2005/12/01>
Babel <v3.8l> and hyphenation patterns for english, dumylang, nohyphenation, ge
rman, ngerman, german-x-2008-06-18, ngerman-x-2008-06-18, french, loaded.
("C:\Program Files\MiKTeX 2.7\tex\latex\base\article.cls"
Document Class: article 2005/09/16 v1.4f Standard LaTeX document class
("C:\Program Files\MiKTeX 2.7\tex\latex\base\size10.clo"
File: size10.clo 2005/09/16 v1.4f Standard LaTeX file (size option)
\c@part=\count79
\c@section=\count80
\c@subsection=\count81
\c@subsubsection=\count82
\c@paragraph=\count83
\c@subparagraph=\count84
\c@figure=\count85
\c@table=\count86
\abovecaptionskip=\skip41
\belowcaptionskip=\skip42
\bibindent=\dimen102
) ("C:\Program Files\MiKTeX 2.7\tex\latex\tools\xspace.sty"
Package: xspace 2006/05/08 v1.12 Space after command names (DPC,MH)
) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\amssymb.sty"
Package: amssymb 2002/01/22 v2.2d
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\amsfonts.sty"
Package: amsfonts 2001/10/25 v2.2f
\@emptytoks=\toks14
\symAMSa=\mathgroup4
\symAMSb=\mathgroup5
LaTeX Font Info: Overwriting math alphabet `\mathfrak' in version `bold'
(Font) U/euf/m/n --> U/euf/b/n on input line 132.
)) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsmath.sty"
Package: amsmath 2000/07/18 v2.13 AMS math features
\@mathmargin=\skip43
For additional information on amsmath, use the `?' option.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amstext.sty"
Package: amstext 2000/06/29 v2.01
("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsgen.sty"
File: amsgen.sty 1999/11/30 v2.0
\@emptytoks=\toks15
\ex@=\dimen103
)) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsbsy.sty"
Package: amsbsy 1999/11/29 v1.2d
\pmbraise@=\dimen104
) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsopn.sty"
Package: amsopn 1999/12/14 v2.01 operator names
\inf@bad=\count87
LaTeX Info: Redefining \frac on input line 211.
\uproot@=\count88
\leftroot@=\count89
LaTeX Info: Redefining \overline on input line 307.
\classnum@=\count90
\DOTSCASE@=\count91
LaTeX Info: Redefining \ldots on input line 379.
LaTeX Info: Redefining \dots on input line 382.
LaTeX Info: Redefining \cdots on input line 467.
\Mathstrutbox@=\box26
\strutbox@=\box27
\big@size=\dimen105
LaTeX Font Info: Redeclaring font encoding OML on input line 567.
LaTeX Font Info: Redeclaring font encoding OMS on input line 568.
\macc@depth=\count92
\c@MaxMatrixCols=\count93
\dotsspace@=\muskip10
\c@parentequation=\count94
\dspbrk@lvl=\count95
\tag@help=\toks16
\row@=\count96
\column@=\count97
\maxfields@=\count98
\andhelp@=\toks17
\eqnshift@=\dimen106
\alignsep@=\dimen107
\tagshift@=\dimen108
\tagwidth@=\dimen109
\totwidth@=\dimen110
\lineht@=\dimen111
\@envbody=\toks18
\multlinegap=\skip44
\multlinetaggap=\skip45
\mathdisplay@stack=\toks19
LaTeX Info: Redefining \[ on input line 2666.
LaTeX Info: Redefining \] on input line 2667.
) ("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\color.sty"
Package: color 2005/11/14 v1.0j Standard LaTeX Color (DPC)
("C:\Program Files\MiKTeX 2.7\tex\latex\00miktex\color.cfg"
File: color.cfg 2007/01/18 v1.5 color configuration of teTeX/TeXLive
Package color Info: Driver file: dvips.def on input line 130.
("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\dvips.def"
File: dvips.def 1999/02/16 v3.0i Driver-dependant file (DPC,SPQR)
) ("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\dvipsnam.def"
File: dvipsnam.def 1999/02/16 v3.0i Driver-dependant file (DPC,SPQR)
)) ("C:\Program Files\TeX4PPT\Styles\TeX4PPT.sty")
No file Group*52.aux.
LaTeX Font Info: Checking defaults for OML/cmm/m/it on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for T1/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OT1/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OMS/cmsy/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OMX/cmex/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for U/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Try loading font information for U+msa on input line 9.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\umsa.fd"
File: umsa.fd 2002/01/19 v2.2g AMS font definitions
LaTeX Font Info: Try loading font information for U+msb on input line 9.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\umsb.fd"
File: umsb.fd 2002/01/19 v2.2g AMS font definitions
] ("Group 52.aux") )
Here is how much of TeX's memory you used:
1411 strings out of 95305
16029 string characters out of 1183061
59708 words of memory out of 1500000
4639 multiletter control sequences out of 110000
8096 words of font info for 31 fonts, out of 1200000 for 2000
14 hyphenation exceptions out of 8191
27i,6n,24p,218b,112s stack positions out of 5000i,500n,10000p,200000b,5000s
Output written on "Group 52.dvi" (1 page, 476 bytes).

## Text block 528

CTOP

## Text block 529

CLEFT

## Text block 530

227.625

## Text block 531

CWIDTH

## Text block 532

CHEIGHT

## Text block 533

27.125

## Text block 534

MAG

## Text block 535

Logaritmický vystup z banky filtru – je třeba již jen dekorelovat

## Text block 536

Původní signál

## Text block 537

Klasifikace a rozpoznávání

## Text block 538

Extrakce příznaků

## Text block 539

Extrakce příznaků - parametrizace

## Text block 540

Poté co jsme ze snímače obdržely data která jsou relevantní pro naši klasifikační úlohu, je potřeba je přizpůsobit potřebám rozpoznávače
Klasifikátory mají rády parametry které jsou:
Gaussovského rozložení (většinou vícerozměrného)
Nekorelované
Nízkodimenzionální

## Text block 541

Příklad parametrizace pro 2D vstupní vektory

## Text block 542

Mějme vzorky (příklady) 2D rozložení pro dvě třídy.

## Text block 543

Příklad parametrizace pro 2D vstupní vektory

## Text block 544

Rozložení není příliš gaussovské.
Provedeme třetí odmocninou obou koeficientů.

## Text block 545

Příklad parametrizace pro 2D vstupní vektory

## Text block 546

Prostor se komprimuje – nelineárně deformuje...

## Text block 547

Příklad parametrizace pro 2D vstupní vektory

## Text block 548

... a rozložení pro každou třídu je nyní gaussovské.
Koeficienty jsou ale korelované.
Je vhodné prostor otočit tak aby se koeficienty dekorelovaly.

## Text block 549

Příklad parametrizace pro 2D vstupní vektory

## Text block 550

Nyní jsou koeficienty dekorelovány.
Svislá dimenze je navíc zbytečná, protože třídy se v ní zcela překrývají.

## Text block 551

Gaussovské rozložení (jednorozměrné)

## Text block 552

Gaussian distribution (2 dimensions)

## Text block 553

Plná a diagonální kovarianční matice

## Text block 554

Diagonální kovarianční matice

## Text block 555

Pokud je Σ diagonální matice s koeficienty v diagonále σ2i 

## Text block 556

Diagonální kovarianční matice

## Text block 558

Proč nás zajímá?
Pomůže nám pochopit význam plné kovarianční matice v gaussovském rozložení
Úspora parametrů při modelování dat
Pokud jsou data korelována (viz červená třída na prvním obr.)
Zvláště pro vysoce dimenzionální příznaky, modelování pomocí směsi gaussovských rozložení s diagonální Σ může být úspornější než použití jedné gaussovky s plnou Σ
Můžeme se pokusit data natočit - dekorelovat

## Text block 559

Skalární součin

## Text block 560

Rotace vektoru

## Text block 561

Nechť b1 a b2 jsou ortonormální baze
Vektory jsou na sebe kolmé
Mají délku |b1| = |b2| = 1
Potom y = B x je otočený vektor x, kde b1 a b2 ukazují v původním prostoru směry nových os

## Text block 562

Projekce vektoru

## Text block 563

Nechť B je matice ortonormálních bází a B’ matice tvořena pouze několika řádky (bázemi) matice B.
Potom y = B’TB’x je projekce vektoru x do bází B’.

## Text block 564

Vlastní čísla a vektory

## Text block 565

λ je vlastní číslo a e je odpovídající vlastni vektor čtvercové matice A, pokud platí:

## Text block 566

μ transformovaných dat

## Text block 567

Jak se změní odhady střední hodnoty a kovarianční matice pokud původní data transformujeme: y = Ax

## Text block 568

Σ transformovaných dat

## Text block 569

Analýza hlavních komponent

## Text block 571

Umožňuje:
Dekorelaci – vlastní vektory kovarianční matice definuji souřadný systém ve kterých jsou data dekorelována – mají diagonální kovarianční matici
Redukci dimenzí – promítnutí dat do pouze několika vlastních vektorů odpovídajících největším vlastním číslům (směry s nevětší variancí) umožní optimální rekonstrukci dat s nejmenší kvadratickou chybou (mean square error - MSE)
Redukce dimenzí provádíme pokud věříme, že v některých směrech není užitečná informace ale pouze (gaussovský) šum s nízkou variabilitou.

## Text block 572

Interpretace Σ v gaussovském rozložení

## Text block 573

PCA - Příklad

## Text block 574

Obrázky 100x100 pixelů – 1000 dimensionální vektory

## Text block 575

PCA - Příklad

## Text block 576

Jakou dimenzi si PCA vybere na tomto příkladě?
Bude to výhodné pro klasifikaci tříd?

## Text block 577

Lineární diskriminační analýza

## Text block 578

Opět se pokusíme promítnout data pouze do určitého směru:
Tentokrát ale budeme chtít aby v tomto směru byly separovány třídy.
Intuitivně by nás mohlo napadnout vybrat směr ve kterém jsou nejlépe odděleny průměty středních hodnot tříd m1 a m2. Hledáme tedy w, které maximalizuje:

## Text block 579

Lineární diskriminační analýza

## Text block 580

Lze však najít i lepší směr:

## Text block 581

Lineární diskriminační analýza

## Text block 583

LDA dimenze dány vlastními vektory matice
Σac – kovarianční matice spočítaná se středních hodnot tříd
Σwc – průměrná kovarianční matice tříd
Lze zobecnit pro více tříd – vlastní vektory s největšími vlastními čísly odpovídají směrům ve kterých jsou třídy nelépe separovány
Pro J tříd bude pouze J-1 vlastních čísel nenulových
Pokud mají všechny třídy gaussovské rozložení se stejnou kovarianční maticí, LDA transformace transformuje prostor tak, že mohou byt třídy optimálně modelovány gaussovským rozložení s diagonální kovarianční maticí

## Text block 584

LDA a lineární klasifikátor

## Text block 585

Dvě třídy s gaussovským rozložením se stejnou kovarianční matici jsou opravdu optimálně oddělitelné lineárním klasifikátorem (přímkou, rovinou, hyper-rovinou)

## Text block 586

Extrakce příznaku pro řeč - MFCC
(Mel frequency cepstral coefficients)

## Text block 587

Nejprve řečový signál rozdělíme do asi 20ms překrývajících se segmentů

## Text block 588

Singular Value Decomposition - SVD

## Text block 589

A je jakákoli mxn matice
U je mxn matice kde sloupce jsou ortonormální báze
V je nxn matice kde sloupce jsou ortonormální báze
D je nxn je diagonální matice
Předpokládejme, že matice A je matice s příznakovými vektory v řádcích s již odečtenou střední hodnotou  Σ = ATA
Potom z následujících vztahů vyplývá, ze:
V jsou vlastní vektory Σ
Diagonála D obsahuje odmocniny z vlastních čísel Σ (variance ve směrech vlastních vektorů)

## Text block 590

Klasifikace a rozpoznávání

## Text block 591

Extrakce příznaků

## Text block 592

Extrakce příznaků - parametrizace

## Text block 593

Poté co jsme ze snímače obdržely data která jsou relevantní pro naši klasifikační úlohu, je potřeba je přizpůsobit potřebám rozpoznávače
Klasifikátory mají rády parametry které jsou:
Gaussovského rozložení (většinou vícerozměrného)
Nekorelované
Nízkodimenzionální

## Text block 594

Příklad parametrizace pro 2D vstupní vektory

## Text block 595

Mějme vzorky (příklady) 2D rozložení pro dvě třídy.

## Text block 596

Příklad parametrizace pro 2D vstupní vektory

## Text block 597

Rozložení není příliš gaussovské.
Provedeme třetí odmocninou obou koeficientů.

## Text block 598

Příklad parametrizace pro 2D vstupní vektory

## Text block 599

Prostor se komprimuje – nelineárně deformuje...

## Text block 600

Příklad parametrizace pro 2D vstupní vektory

## Text block 601

... a rozložení pro každou třídu je nyní gaussovské.
Koeficienty jsou ale korelované.
Je vhodné prostor otočit tak aby se koeficienty dekorelovaly.

## Text block 602

Příklad parametrizace pro 2D vstupní vektory

## Text block 603

Nyní jsou koeficienty dekorelovány.
Svislá dimenze je navíc zbytečná, protože třídy se v ní zcela překrývají.

## Text block 604

Gaussovské rozložení (jednorozměrné)

## Text block 605

Gaussian distribution (2 dimensions)

## Text block 606

Plná a diagonální kovarianční matice

## Text block 607

Diagonální kovarianční matice

## Text block 608

Pokud je Σ diagonální matice s koeficienty v diagonále σ2i 

## Text block 609

Diagonální kovarianční matice

## Text block 611

Proč nás zajímá?
Pomůže nám pochopit význam plné kovarianční matice v gaussovském rozložení
Úspora parametrů při modelování dat
Pokud jsou data korelována (viz červená třída na prvním obr.)
Zvláště pro vysoce dimenzionální příznaky, modelování pomocí směsi gaussovských rozložení s diagonální Σ může být úspornější než použití jedné gaussovky s plnou Σ
Můžeme se pokusit data natočit - dekorelovat

## Text block 612

Skalární součin

## Text block 613

Rotace vektoru

## Text block 614

Nechť b1 a b2 jsou ortonormální baze
Vektory jsou na sebe kolmé
Mají délku |b1| = |b2| = 1
Potom y = B x je otočený vektor x, kde b1 a b2 ukazují v původním prostoru směry nových os

## Text block 615

Projekce vektoru

## Text block 616

Nechť B je matice ortonormálních bází a B’ matice tvořena pouze několika řádky (bázemi) matice B.
Potom y = B’TB’x je projekce vektoru x do bází B’.

## Text block 617

Vlastní čísla a vektory

## Text block 618

λ je vlastní číslo a e je odpovídající vlastni vektor čtvercové matice Σ, pokud platí:

## Text block 619

μ transformovaných dat

## Text block 620

Jak se změní odhady střední hodnoty a kovarianční matice pokud původní data transformujeme: y = Ax

## Text block 621

Σ transformovaných dat

## Text block 622

Analýza hlavních komponent

## Text block 624

Umožňuje:
Dekorelaci – vlastní vektory kovarianční matice definuji souřadný systém ve kterých jsou data dekorelována – mají diagonální kovarianční matici
Redukci dimenzí – promítnutí dat do pouze několika vlastních vektorů odpovídajících největším vlastním číslům (směry s nevětší variancí) umožní optimální rekonstrukci dat s nejmenší kvadratickou chybou (mean square error - MSE)
Redukce dimenzí provádíme pokud věříme, že v některých směrech není užitečná informace ale pouze (gaussovský) šum s nízkou variabilitou.

## Text block 625

Interpretace Σ v gaussovském rozložení

## Text block 626

PCA - Příklad

## Text block 627

Obrázky 100x100 pixelů – 1000 dimensionální vektory

## Text block 628

PCA - Příklad

## Text block 629

Jakou dimenzi si PCA vybere na tomto příkladě?
Bude to výhodné pro klasifikaci tříd?

## Text block 630

Lineární diskriminační analýza

## Text block 631

Opět se pokusíme promítnout data pouze do určitého směru:
Tentokrát ale budeme chtít aby v tomto směru byly separovány třídy.
Intuitivně by nás mohlo napadnout vybrat směr ve kterém jsou nejlépe odděleny průměty středních hodnot tříd m1 a m2. Hledáme tedy w, které maximalizuje:

## Text block 632

Lineární diskriminační analýza

## Text block 633

Lze však najít i lepší směr:

## Text block 634

Lineární diskriminační analýza

## Text block 636

LDA dimenze dány vlastními vektory matice
Σac – kovarianční matice spočítaná se středních hodnot tříd
Σwc – průměrná kovarianční matice tříd
Lze zobecnit pro více tříd – vlastní vektory s největšími vlastními čísly odpovídají směrům ve kterých jsou třídy nelépe separovány
Pro J tříd bude pouze J-1 vlastních čísel nenulových
Pokud mají všechny třídy gaussovské rozložení se stejnou kovarianční maticí, LDA transformace transformuje prostor tak, že mohou byt třídy optimálně modelovány gaussovským rozložení s diagonální kovarianční maticí

## Text block 637

LDA a lineární klasifikátor

## Text block 638

Dvě třídy s gaussovským rozložením se stejnou kovarianční matici jsou opravdu optimálně oddělitelné lineárním klasifikátorem (přímkou, rovinou, hyper-rovinou)

## Text block 639

Extrakce příznaku pro řeč - MFCC
(Mel frequency cepstral coefficients)

## Text block 640

Nejprve řečový signál rozdělíme do asi 20ms překrývajících se segmentů

## Text block 641

Singular Value Decomposition - SVD

## Text block 642

A je jakákoli mxn matice
U je mxn matice kde sloupce jsou ortonormální báze
V je nxn matice kde sloupce jsou ortonormální báze
D je nxn je diagonální matice
Předpokládejme, že matice A je matice s příznakovými vektory v řádcích s již odečtenou střední hodnotou  Σ = ATA
Potom z následujících vztahů vyplývá, ze:
V jsou vlastní vektory Σ
Diagonála D obsahuje odmocniny z vlastních čísel Σ (variance ve směrech vlastních vektorů)

## Text block 643

PxP matice má (nanejvýš) P různých vlastních čísel. Nechť je Λ diagonální matice všech vlastních čísel a matice E obsahuje ve sloupcích odpovídající vlastní vektory.

## Text block 644

Nás bude zajímat speciální případ kdy matice Σ je symetrická. Potom budou sloupce matice E tvořit ortonormální báze. Pro takovou matici potom platí: ETE = E-1E = I, kde I je jednotková matice. Tedy platí následující rozklady matic:

## Text block 645

SRC

## Text block 646

$\boldsymbol{\Sigma e} = \boldsymbol{e} \lambda$

## Text block 647

LOG

## Text block 648

This is pdfTeX, Version 3.1415926-1.40.9 (MiKTeX 2.7) (preloaded format=latex 2008.11.17) 1 MAR 2010 16:14
entering extended mode
**Text*Box*36
("Text Box 36.tex"
LaTeX2e <2005/12/01>
Babel <v3.8l> and hyphenation patterns for english, dumylang, nohyphenation, ge
rman, ngerman, german-x-2008-06-18, ngerman-x-2008-06-18, french, loaded.
("C:\Program Files\MiKTeX 2.7\tex\latex\base\article.cls"
Document Class: article 2005/09/16 v1.4f Standard LaTeX document class
("C:\Program Files\MiKTeX 2.7\tex\latex\base\size10.clo"
File: size10.clo 2005/09/16 v1.4f Standard LaTeX file (size option)
\c@part=\count79
\c@section=\count80
\c@subsection=\count81
\c@subsubsection=\count82
\c@paragraph=\count83
\c@subparagraph=\count84
\c@figure=\count85
\c@table=\count86
\abovecaptionskip=\skip41
\belowcaptionskip=\skip42
\bibindent=\dimen102
) ("C:\Program Files\MiKTeX 2.7\tex\latex\tools\xspace.sty"
Package: xspace 2006/05/08 v1.12 Space after command names (DPC,MH)
) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\amssymb.sty"
Package: amssymb 2002/01/22 v2.2d
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\amsfonts.sty"
Package: amsfonts 2001/10/25 v2.2f
\@emptytoks=\toks14
\symAMSa=\mathgroup4
\symAMSb=\mathgroup5
LaTeX Font Info: Overwriting math alphabet `\mathfrak' in version `bold'
(Font) U/euf/m/n --> U/euf/b/n on input line 132.
)) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsmath.sty"
Package: amsmath 2000/07/18 v2.13 AMS math features
\@mathmargin=\skip43
For additional information on amsmath, use the `?' option.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amstext.sty"
Package: amstext 2000/06/29 v2.01
("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsgen.sty"
File: amsgen.sty 1999/11/30 v2.0
\@emptytoks=\toks15
\ex@=\dimen103
)) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsbsy.sty"
Package: amsbsy 1999/11/29 v1.2d
\pmbraise@=\dimen104
) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsopn.sty"
Package: amsopn 1999/12/14 v2.01 operator names
\inf@bad=\count87
LaTeX Info: Redefining \frac on input line 211.
\uproot@=\count88
\leftroot@=\count89
LaTeX Info: Redefining \overline on input line 307.
\classnum@=\count90
\DOTSCASE@=\count91
LaTeX Info: Redefining \ldots on input line 379.
LaTeX Info: Redefining \dots on input line 382.
LaTeX Info: Redefining \cdots on input line 467.
\Mathstrutbox@=\box26
\strutbox@=\box27
\big@size=\dimen105
LaTeX Font Info: Redeclaring font encoding OML on input line 567.
LaTeX Font Info: Redeclaring font encoding OMS on input line 568.
\macc@depth=\count92
\c@MaxMatrixCols=\count93
\dotsspace@=\muskip10
\c@parentequation=\count94
\dspbrk@lvl=\count95
\tag@help=\toks16
\row@=\count96
\column@=\count97
\maxfields@=\count98
\andhelp@=\toks17
\eqnshift@=\dimen106
\alignsep@=\dimen107
\tagshift@=\dimen108
\tagwidth@=\dimen109
\totwidth@=\dimen110
\lineht@=\dimen111
\@envbody=\toks18
\multlinegap=\skip44
\multlinetaggap=\skip45
\mathdisplay@stack=\toks19
LaTeX Info: Redefining \[ on input line 2666.
LaTeX Info: Redefining \] on input line 2667.
) ("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\color.sty"
Package: color 2005/11/14 v1.0j Standard LaTeX Color (DPC)
("C:\Program Files\MiKTeX 2.7\tex\latex\00miktex\color.cfg"
File: color.cfg 2007/01/18 v1.5 color configuration of teTeX/TeXLive
Package color Info: Driver file: dvips.def on input line 130.
("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\dvips.def"
File: dvips.def 1999/02/16 v3.0i Driver-dependant file (DPC,SPQR)
) ("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\dvipsnam.def"
File: dvipsnam.def 1999/02/16 v3.0i Driver-dependant file (DPC,SPQR)
)) ("C:\Program Files\TeX4PPT\Styles\TeX4PPT.sty")
No file Text*Box*36.aux.
LaTeX Font Info: Checking defaults for OML/cmm/m/it on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for T1/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OT1/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OMS/cmsy/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OMX/cmex/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for U/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Try loading font information for U+msa on input line 9.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\umsa.fd"
File: umsa.fd 2002/01/19 v2.2g AMS font definitions
LaTeX Font Info: Try loading font information for U+msb on input line 9.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\umsb.fd"
File: umsb.fd 2002/01/19 v2.2g AMS font definitions
] ("Text Box 36.aux") )
Here is how much of TeX's memory you used:
1411 strings out of 95305
16053 string characters out of 1183061
59708 words of memory out of 1500000
4639 multiletter control sequences out of 110000
8096 words of font info for 31 fonts, out of 1200000 for 2000
14 hyphenation exceptions out of 8191
27i,6n,24p,221b,112s stack positions out of 5000i,500n,10000p,200000b,5000s
Output written on "Text Box 36.dvi" (1 page, 452 bytes).

## Text block 649

CTOP

## Text block 650

226.5

## Text block 651

CLEFT

## Text block 652

294.625

## Text block 653

CWIDTH

## Text block 654

125.5

## Text block 655

CHEIGHT

## Text block 656

22.625

## Text block 657

MAG

## Text block 658

SRC

## Text block 659

$\boldsymbol{\Sigma E} = \boldsymbol{E \Lambda} $

## Text block 660

LOG

## Text block 661

This is pdfTeX, Version 3.1415926-1.40.9 (MiKTeX 2.7) (preloaded format=latex 2008.11.17) 1 MAR 2010 16:15
entering extended mode
**Text*Box*44
("Text Box 44.tex"
LaTeX2e <2005/12/01>
Babel <v3.8l> and hyphenation patterns for english, dumylang, nohyphenation, ge
rman, ngerman, german-x-2008-06-18, ngerman-x-2008-06-18, french, loaded.
("C:\Program Files\MiKTeX 2.7\tex\latex\base\article.cls"
Document Class: article 2005/09/16 v1.4f Standard LaTeX document class
("C:\Program Files\MiKTeX 2.7\tex\latex\base\size10.clo"
File: size10.clo 2005/09/16 v1.4f Standard LaTeX file (size option)
\c@part=\count79
\c@section=\count80
\c@subsection=\count81
\c@subsubsection=\count82
\c@paragraph=\count83
\c@subparagraph=\count84
\c@figure=\count85
\c@table=\count86
\abovecaptionskip=\skip41
\belowcaptionskip=\skip42
\bibindent=\dimen102
) ("C:\Program Files\MiKTeX 2.7\tex\latex\tools\xspace.sty"
Package: xspace 2006/05/08 v1.12 Space after command names (DPC,MH)
) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\amssymb.sty"
Package: amssymb 2002/01/22 v2.2d
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\amsfonts.sty"
Package: amsfonts 2001/10/25 v2.2f
\@emptytoks=\toks14
\symAMSa=\mathgroup4
\symAMSb=\mathgroup5
LaTeX Font Info: Overwriting math alphabet `\mathfrak' in version `bold'
(Font) U/euf/m/n --> U/euf/b/n on input line 132.
)) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsmath.sty"
Package: amsmath 2000/07/18 v2.13 AMS math features
\@mathmargin=\skip43
For additional information on amsmath, use the `?' option.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amstext.sty"
Package: amstext 2000/06/29 v2.01
("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsgen.sty"
File: amsgen.sty 1999/11/30 v2.0
\@emptytoks=\toks15
\ex@=\dimen103
)) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsbsy.sty"
Package: amsbsy 1999/11/29 v1.2d
\pmbraise@=\dimen104
) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsopn.sty"
Package: amsopn 1999/12/14 v2.01 operator names
\inf@bad=\count87
LaTeX Info: Redefining \frac on input line 211.
\uproot@=\count88
\leftroot@=\count89
LaTeX Info: Redefining \overline on input line 307.
\classnum@=\count90
\DOTSCASE@=\count91
LaTeX Info: Redefining \ldots on input line 379.
LaTeX Info: Redefining \dots on input line 382.
LaTeX Info: Redefining \cdots on input line 467.
\Mathstrutbox@=\box26
\strutbox@=\box27
\big@size=\dimen105
LaTeX Font Info: Redeclaring font encoding OML on input line 567.
LaTeX Font Info: Redeclaring font encoding OMS on input line 568.
\macc@depth=\count92
\c@MaxMatrixCols=\count93
\dotsspace@=\muskip10
\c@parentequation=\count94
\dspbrk@lvl=\count95
\tag@help=\toks16
\row@=\count96
\column@=\count97
\maxfields@=\count98
\andhelp@=\toks17
\eqnshift@=\dimen106
\alignsep@=\dimen107
\tagshift@=\dimen108
\tagwidth@=\dimen109
\totwidth@=\dimen110
\lineht@=\dimen111
\@envbody=\toks18
\multlinegap=\skip44
\multlinetaggap=\skip45
\mathdisplay@stack=\toks19
LaTeX Info: Redefining \[ on input line 2666.
LaTeX Info: Redefining \] on input line 2667.
) ("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\color.sty"
Package: color 2005/11/14 v1.0j Standard LaTeX Color (DPC)
("C:\Program Files\MiKTeX 2.7\tex\latex\00miktex\color.cfg"
File: color.cfg 2007/01/18 v1.5 color configuration of teTeX/TeXLive
Package color Info: Driver file: dvips.def on input line 130.
("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\dvips.def"
File: dvips.def 1999/02/16 v3.0i Driver-dependant file (DPC,SPQR)
) ("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\dvipsnam.def"
File: dvipsnam.def 1999/02/16 v3.0i Driver-dependant file (DPC,SPQR)
)) ("C:\Program Files\TeX4PPT\Styles\TeX4PPT.sty")
No file Text*Box*44.aux.
LaTeX Font Info: Checking defaults for OML/cmm/m/it on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for T1/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OT1/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OMS/cmsy/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OMX/cmex/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for U/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Try loading font information for U+msa on input line 9.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\umsa.fd"
File: umsa.fd 2002/01/19 v2.2g AMS font definitions
LaTeX Font Info: Try loading font information for U+msb on input line 9.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\umsb.fd"
File: umsb.fd 2002/01/19 v2.2g AMS font definitions
] ("Text Box 44.aux") )
Here is how much of TeX's memory you used:
1411 strings out of 95305
16053 string characters out of 1183061
59708 words of memory out of 1500000
4639 multiletter control sequences out of 110000
8096 words of font info for 31 fonts, out of 1200000 for 2000
14 hyphenation exceptions out of 8191
27i,6n,24p,221b,112s stack positions out of 5000i,500n,10000p,200000b,5000s
Output written on "Text Box 44.dvi" (1 page, 408 bytes).

## Text block 662

CTOP

## Text block 663

226.75

## Text block 664

CLEFT

## Text block 665

294.625

## Text block 666

CWIDTH

## Text block 667

CHEIGHT

## Text block 668

22.375

## Text block 669

MAG

## Text block 670

SRC

## Text block 671

$\boldsymbol{E}^T\boldsymbol{\Sigma E} = \boldsymbol{\Lambda} $

## Text block 672

LOG

## Text block 673

This is pdfTeX, Version 3.1415926-1.40.9 (MiKTeX 2.7) (preloaded format=latex 2008.11.17) 1 MAR 2010 16:16
entering extended mode
**Text*Box*52
("Text Box 52.tex"
LaTeX2e <2005/12/01>
Babel <v3.8l> and hyphenation patterns for english, dumylang, nohyphenation, ge
rman, ngerman, german-x-2008-06-18, ngerman-x-2008-06-18, french, loaded.
("C:\Program Files\MiKTeX 2.7\tex\latex\base\article.cls"
Document Class: article 2005/09/16 v1.4f Standard LaTeX document class
("C:\Program Files\MiKTeX 2.7\tex\latex\base\size10.clo"
File: size10.clo 2005/09/16 v1.4f Standard LaTeX file (size option)
\c@part=\count79
\c@section=\count80
\c@subsection=\count81
\c@subsubsection=\count82
\c@paragraph=\count83
\c@subparagraph=\count84
\c@figure=\count85
\c@table=\count86
\abovecaptionskip=\skip41
\belowcaptionskip=\skip42
\bibindent=\dimen102
) ("C:\Program Files\MiKTeX 2.7\tex\latex\tools\xspace.sty"
Package: xspace 2006/05/08 v1.12 Space after command names (DPC,MH)
) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\amssymb.sty"
Package: amssymb 2002/01/22 v2.2d
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\amsfonts.sty"
Package: amsfonts 2001/10/25 v2.2f
\@emptytoks=\toks14
\symAMSa=\mathgroup4
\symAMSb=\mathgroup5
LaTeX Font Info: Overwriting math alphabet `\mathfrak' in version `bold'
(Font) U/euf/m/n --> U/euf/b/n on input line 132.
)) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsmath.sty"
Package: amsmath 2000/07/18 v2.13 AMS math features
\@mathmargin=\skip43
For additional information on amsmath, use the `?' option.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amstext.sty"
Package: amstext 2000/06/29 v2.01
("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsgen.sty"
File: amsgen.sty 1999/11/30 v2.0
\@emptytoks=\toks15
\ex@=\dimen103
)) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsbsy.sty"
Package: amsbsy 1999/11/29 v1.2d
\pmbraise@=\dimen104
) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsopn.sty"
Package: amsopn 1999/12/14 v2.01 operator names
\inf@bad=\count87
LaTeX Info: Redefining \frac on input line 211.
\uproot@=\count88
\leftroot@=\count89
LaTeX Info: Redefining \overline on input line 307.
\classnum@=\count90
\DOTSCASE@=\count91
LaTeX Info: Redefining \ldots on input line 379.
LaTeX Info: Redefining \dots on input line 382.
LaTeX Info: Redefining \cdots on input line 467.
\Mathstrutbox@=\box26
\strutbox@=\box27
\big@size=\dimen105
LaTeX Font Info: Redeclaring font encoding OML on input line 567.
LaTeX Font Info: Redeclaring font encoding OMS on input line 568.
\macc@depth=\count92
\c@MaxMatrixCols=\count93
\dotsspace@=\muskip10
\c@parentequation=\count94
\dspbrk@lvl=\count95
\tag@help=\toks16
\row@=\count96
\column@=\count97
\maxfields@=\count98
\andhelp@=\toks17
\eqnshift@=\dimen106
\alignsep@=\dimen107
\tagshift@=\dimen108
\tagwidth@=\dimen109
\totwidth@=\dimen110
\lineht@=\dimen111
\@envbody=\toks18
\multlinegap=\skip44
\multlinetaggap=\skip45
\mathdisplay@stack=\toks19
LaTeX Info: Redefining \[ on input line 2666.
LaTeX Info: Redefining \] on input line 2667.
) ("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\color.sty"
Package: color 2005/11/14 v1.0j Standard LaTeX Color (DPC)
("C:\Program Files\MiKTeX 2.7\tex\latex\00miktex\color.cfg"
File: color.cfg 2007/01/18 v1.5 color configuration of teTeX/TeXLive
Package color Info: Driver file: dvips.def on input line 130.
("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\dvips.def"
File: dvips.def 1999/02/16 v3.0i Driver-dependant file (DPC,SPQR)
) ("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\dvipsnam.def"
File: dvipsnam.def 1999/02/16 v3.0i Driver-dependant file (DPC,SPQR)
)) ("C:\Program Files\TeX4PPT\Styles\TeX4PPT.sty")
No file Text*Box*52.aux.
LaTeX Font Info: Checking defaults for OML/cmm/m/it on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for T1/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OT1/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OMS/cmsy/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OMX/cmex/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for U/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Try loading font information for U+msa on input line 9.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\umsa.fd"
File: umsa.fd 2002/01/19 v2.2g AMS font definitions
LaTeX Font Info: Try loading font information for U+msb on input line 9.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\umsb.fd"
File: umsb.fd 2002/01/19 v2.2g AMS font definitions
] ("Text Box 52.aux") )
Here is how much of TeX's memory you used:
1411 strings out of 95305
16053 string characters out of 1183061
59708 words of memory out of 1500000
4639 multiletter control sequences out of 110000
8096 words of font info for 31 fonts, out of 1200000 for 2000
14 hyphenation exceptions out of 8191
27i,6n,24p,221b,112s stack positions out of 5000i,500n,10000p,200000b,5000s
Output written on "Text Box 52.dvi" (1 page, 468 bytes).

## Text block 674

CTOP

## Text block 675

219.25

## Text block 676

CLEFT

## Text block 677

294.625

## Text block 678

CWIDTH

## Text block 679

173.5

## Text block 680

CHEIGHT

## Text block 681

29.875

## Text block 682

MAG

## Text block 683

SRC

## Text block 684

$ \boldsymbol{\Sigma} = \boldsymbol{E\Lambda E}^T$

## Text block 685

LOG

## Text block 686

This is pdfTeX, Version 3.1415926-1.40.9 (MiKTeX 2.7) (preloaded format=latex 2008.11.17) 1 MAR 2010 16:16
entering extended mode
**Text*Box*61
("Text Box 61.tex"
LaTeX2e <2005/12/01>
Babel <v3.8l> and hyphenation patterns for english, dumylang, nohyphenation, ge
rman, ngerman, german-x-2008-06-18, ngerman-x-2008-06-18, french, loaded.
("C:\Program Files\MiKTeX 2.7\tex\latex\base\article.cls"
Document Class: article 2005/09/16 v1.4f Standard LaTeX document class
("C:\Program Files\MiKTeX 2.7\tex\latex\base\size10.clo"
File: size10.clo 2005/09/16 v1.4f Standard LaTeX file (size option)
\c@part=\count79
\c@section=\count80
\c@subsection=\count81
\c@subsubsection=\count82
\c@paragraph=\count83
\c@subparagraph=\count84
\c@figure=\count85
\c@table=\count86
\abovecaptionskip=\skip41
\belowcaptionskip=\skip42
\bibindent=\dimen102
) ("C:\Program Files\MiKTeX 2.7\tex\latex\tools\xspace.sty"
Package: xspace 2006/05/08 v1.12 Space after command names (DPC,MH)
) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\amssymb.sty"
Package: amssymb 2002/01/22 v2.2d
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\amsfonts.sty"
Package: amsfonts 2001/10/25 v2.2f
\@emptytoks=\toks14
\symAMSa=\mathgroup4
\symAMSb=\mathgroup5
LaTeX Font Info: Overwriting math alphabet `\mathfrak' in version `bold'
(Font) U/euf/m/n --> U/euf/b/n on input line 132.
)) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsmath.sty"
Package: amsmath 2000/07/18 v2.13 AMS math features
\@mathmargin=\skip43
For additional information on amsmath, use the `?' option.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amstext.sty"
Package: amstext 2000/06/29 v2.01
("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsgen.sty"
File: amsgen.sty 1999/11/30 v2.0
\@emptytoks=\toks15
\ex@=\dimen103
)) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsbsy.sty"
Package: amsbsy 1999/11/29 v1.2d
\pmbraise@=\dimen104
) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsopn.sty"
Package: amsopn 1999/12/14 v2.01 operator names
\inf@bad=\count87
LaTeX Info: Redefining \frac on input line 211.
\uproot@=\count88
\leftroot@=\count89
LaTeX Info: Redefining \overline on input line 307.
\classnum@=\count90
\DOTSCASE@=\count91
LaTeX Info: Redefining \ldots on input line 379.
LaTeX Info: Redefining \dots on input line 382.
LaTeX Info: Redefining \cdots on input line 467.
\Mathstrutbox@=\box26
\strutbox@=\box27
\big@size=\dimen105
LaTeX Font Info: Redeclaring font encoding OML on input line 567.
LaTeX Font Info: Redeclaring font encoding OMS on input line 568.
\macc@depth=\count92
\c@MaxMatrixCols=\count93
\dotsspace@=\muskip10
\c@parentequation=\count94
\dspbrk@lvl=\count95
\tag@help=\toks16
\row@=\count96
\column@=\count97
\maxfields@=\count98
\andhelp@=\toks17
\eqnshift@=\dimen106
\alignsep@=\dimen107
\tagshift@=\dimen108
\tagwidth@=\dimen109
\totwidth@=\dimen110
\lineht@=\dimen111
\@envbody=\toks18
\multlinegap=\skip44
\multlinetaggap=\skip45
\mathdisplay@stack=\toks19
LaTeX Info: Redefining \[ on input line 2666.
LaTeX Info: Redefining \] on input line 2667.
) ("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\color.sty"
Package: color 2005/11/14 v1.0j Standard LaTeX Color (DPC)
("C:\Program Files\MiKTeX 2.7\tex\latex\00miktex\color.cfg"
File: color.cfg 2007/01/18 v1.5 color configuration of teTeX/TeXLive
Package color Info: Driver file: dvips.def on input line 130.
("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\dvips.def"
File: dvips.def 1999/02/16 v3.0i Driver-dependant file (DPC,SPQR)
) ("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\dvipsnam.def"
File: dvipsnam.def 1999/02/16 v3.0i Driver-dependant file (DPC,SPQR)
)) ("C:\Program Files\TeX4PPT\Styles\TeX4PPT.sty")
No file Text*Box*61.aux.
LaTeX Font Info: Checking defaults for OML/cmm/m/it on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for T1/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OT1/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OMS/cmsy/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OMX/cmex/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for U/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Try loading font information for U+msa on input line 9.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\umsa.fd"
File: umsa.fd 2002/01/19 v2.2g AMS font definitions
LaTeX Font Info: Try loading font information for U+msb on input line 9.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\umsb.fd"
File: umsb.fd 2002/01/19 v2.2g AMS font definitions
] ("Text Box 61.aux") )
Here is how much of TeX's memory you used:
1411 strings out of 95305
16053 string characters out of 1183061
59708 words of memory out of 1500000
4639 multiletter control sequences out of 110000
8096 words of font info for 31 fonts, out of 1200000 for 2000
14 hyphenation exceptions out of 8191
27i,6n,24p,221b,112s stack positions out of 5000i,500n,10000p,200000b,5000s
Output written on "Text Box 61.dvi" (1 page, 464 bytes).

## Text block 687

CTOP

## Text block 688

219.25

## Text block 689

CLEFT

## Text block 690

294.625

## Text block 691

CWIDTH

## Text block 692

168.25

## Text block 693

CHEIGHT

## Text block 694

29.875

## Text block 695

MAG

## Text block 696

SRC

## Text block 697

\begin{eqnarray}
\nonumber
\mathcal{N} (\boldsymbol{x} ; \boldsymbol{\mu}, \boldsymbol{\Sigma}) &=& \frac{1}{\sqrt{(2\pi)^P |\boldsymbol{\Sigma}|}}
e^{-\frac{1}{2} (\boldsymbol{x} - \boldsymbol{\mu})^T \boldsymbol{\Sigma}^{-1}(\boldsymbol{x} - \boldsymbol{\mu})}\\
\nonumber
&=& \frac{1}{\sqrt{(2\pi)^P |\boldsymbol{\Sigma}|}}
e^{-\frac{1}{2} (\boldsymbol{x} - \boldsymbol{\mu})^T \boldsymbol{E} \boldsymbol{\Lambda}^{-1} \boldsymbol{E} ^T (\boldsymbol{x} - \boldsymbol{\mu})}\\
\nonumber
&=& \frac{1}{\sqrt{(2\pi)^P |\boldsymbol{\Lambda}|}}
e^{-\frac{1}{2} (\boldsymbol{E} ^T \boldsymbol{x} - \boldsymbol{E} ^T \boldsymbol{\mu})^T \boldsymbol{\Lambda}^{-1} (\boldsymbol{E}^T \boldsymbol{x} - \boldsymbol{E}^T \boldsymbol{\mu})}
\end{eqnarray}

## Text block 698

LOG

## Text block 699

This is pdfTeX, Version 3.1415926-1.40.9 (MiKTeX 2.7) (preloaded format=latex 2008.11.17) 1 MAR 2010 16:11
entering extended mode
**Group*1042
("Group 1042.tex"
LaTeX2e <2005/12/01>
Babel <v3.8l> and hyphenation patterns for english, dumylang, nohyphenation, ge
rman, ngerman, german-x-2008-06-18, ngerman-x-2008-06-18, french, loaded.
("C:\Program Files\MiKTeX 2.7\tex\latex\base\article.cls"
Document Class: article 2005/09/16 v1.4f Standard LaTeX document class
("C:\Program Files\MiKTeX 2.7\tex\latex\base\size10.clo"
File: size10.clo 2005/09/16 v1.4f Standard LaTeX file (size option)
\c@part=\count79
\c@section=\count80
\c@subsection=\count81
\c@subsubsection=\count82
\c@paragraph=\count83
\c@subparagraph=\count84
\c@figure=\count85
\c@table=\count86
\abovecaptionskip=\skip41
\belowcaptionskip=\skip42
\bibindent=\dimen102
) ("C:\Program Files\MiKTeX 2.7\tex\latex\tools\xspace.sty"
Package: xspace 2006/05/08 v1.12 Space after command names (DPC,MH)
) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\amssymb.sty"
Package: amssymb 2002/01/22 v2.2d
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\amsfonts.sty"
Package: amsfonts 2001/10/25 v2.2f
\@emptytoks=\toks14
\symAMSa=\mathgroup4
\symAMSb=\mathgroup5
LaTeX Font Info: Overwriting math alphabet `\mathfrak' in version `bold'
(Font) U/euf/m/n --> U/euf/b/n on input line 132.
)) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsmath.sty"
Package: amsmath 2000/07/18 v2.13 AMS math features
\@mathmargin=\skip43
For additional information on amsmath, use the `?' option.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amstext.sty"
Package: amstext 2000/06/29 v2.01
("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsgen.sty"
File: amsgen.sty 1999/11/30 v2.0
\@emptytoks=\toks15
\ex@=\dimen103
)) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsbsy.sty"
Package: amsbsy 1999/11/29 v1.2d
\pmbraise@=\dimen104
) ("C:\Program Files\MiKTeX 2.7\tex\latex\amsmath\amsopn.sty"
Package: amsopn 1999/12/14 v2.01 operator names
\inf@bad=\count87
LaTeX Info: Redefining \frac on input line 211.
\uproot@=\count88
\leftroot@=\count89
LaTeX Info: Redefining \overline on input line 307.
\classnum@=\count90
\DOTSCASE@=\count91
LaTeX Info: Redefining \ldots on input line 379.
LaTeX Info: Redefining \dots on input line 382.
LaTeX Info: Redefining \cdots on input line 467.
\Mathstrutbox@=\box26
\strutbox@=\box27
\big@size=\dimen105
LaTeX Font Info: Redeclaring font encoding OML on input line 567.
LaTeX Font Info: Redeclaring font encoding OMS on input line 568.
\macc@depth=\count92
\c@MaxMatrixCols=\count93
\dotsspace@=\muskip10
\c@parentequation=\count94
\dspbrk@lvl=\count95
\tag@help=\toks16
\row@=\count96
\column@=\count97
\maxfields@=\count98
\andhelp@=\toks17
\eqnshift@=\dimen106
\alignsep@=\dimen107
\tagshift@=\dimen108
\tagwidth@=\dimen109
\totwidth@=\dimen110
\lineht@=\dimen111
\@envbody=\toks18
\multlinegap=\skip44
\multlinetaggap=\skip45
\mathdisplay@stack=\toks19
LaTeX Info: Redefining \[ on input line 2666.
LaTeX Info: Redefining \] on input line 2667.
) ("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\color.sty"
Package: color 2005/11/14 v1.0j Standard LaTeX Color (DPC)
("C:\Program Files\MiKTeX 2.7\tex\latex\00miktex\color.cfg"
File: color.cfg 2007/01/18 v1.5 color configuration of teTeX/TeXLive
Package color Info: Driver file: dvips.def on input line 130.
("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\dvips.def"
File: dvips.def 1999/02/16 v3.0i Driver-dependant file (DPC,SPQR)
) ("C:\Program Files\MiKTeX 2.7\tex\latex\graphics\dvipsnam.def"
File: dvipsnam.def 1999/02/16 v3.0i Driver-dependant file (DPC,SPQR)
)) ("C:\Program Files\TeX4PPT\Styles\TeX4PPT.sty")
No file Group*1042.aux.
LaTeX Font Info: Checking defaults for OML/cmm/m/it on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for T1/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OT1/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OMS/cmsy/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for OMX/cmex/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Checking defaults for U/cmr/m/n on input line 8.
LaTeX Font Info: ... okay on input line 8.
LaTeX Font Info: Try loading font information for U+msa on input line 9.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\umsa.fd"
File: umsa.fd 2002/01/19 v2.2g AMS font definitions
LaTeX Font Info: Try loading font information for U+msb on input line 9.
("C:\Program Files\MiKTeX 2.7\tex\latex\amsfonts\umsb.fd"
File: umsb.fd 2002/01/19 v2.2g AMS font definitions
! Missing $ inserted.
<inserted text>
l.19
I've inserted a begin-math/end-math symbol since I think
you left one out. Proceed, with fingers crossed.
! Missing } inserted.
<inserted text>
l.19
I've inserted something that you may have forgotten.
(See the <inserted text> above.)
With luck, this will get me unwedged. But if you
really didn't forget anything, try typing `2' now; then
my insertion and my current dilemma will both disappear.
! Missing } inserted.
<inserted text>
l.19
I've inserted something that you may have forgotten.
(See the <inserted text> above.)
With luck, this will get me unwedged. But if you
really didn't forget anything, try typing `2' now; then
my insertion and my current dilemma will both disappear.
! Missing \cr inserted.
<inserted text>
\cr
l.19
I'm guessing that you meant to end an alignment here.
! Missing { inserted.
<inserted text>
l.19
I've put in what seems to be necessary to fix
the current column of the current alignment.
Try to go on, since this might almost work.
! Missing $ inserted.
<inserted text>
l.19
I've inserted a begin-math/end-math symbol since I think
you left one out. Proceed, with fingers crossed.
! Missing $$ inserted.
<to be read again>
\par
l.19
Displays can use special alignments (like \eqalignno)
only if nothing but the alignment itself is between $$'s.
! Misplaced alignment tab character &.
\reserved@a ->&
l.20 \end{eqnarray}
I can't figure out why you would want to use a tab mark
here. If you just want an ampersand, the remedy is
simple: Just type `I\&' now. But if some right brace
up above has ended a previous alignment prematurely,
you're probably due for more error messages, and you
might try typing `S' now just to see what is salvageable.
! Misplaced \cr.
\@@eqncr ...l \@eqnswtrue \global \@eqcnt \z@ \cr
l.20 \end{eqnarray}
I can't figure out why you would want to use a tab mark
or \cr or \span just now. If something like a right brace
up above has ended a previous alignment prematurely,
you're probably due for more error messages, and you
might try typing `S' now just to see what is salvageable.
! Extra }, or forgotten \endgroup.
\endeqnarray ->\@@eqncr \egroup
\global \advance \c@equation \m@ne $$\@ignor...
l.20 \end{eqnarray}
I've deleted a group-closing symbol because it seems to be
spurious, as in `$x}$'. But perhaps the } is legitimate and
you forgot something else, as in `\hbox{$x}'. In such cases
the way to recover is to insert both the forgotten and the
deleted material, e.g., by typing `I$}'.
! Missing $ inserted.
<inserted text>
l.20 \end{eqnarray}
I've inserted something that you may have forgotten.
(See the <inserted text> above.)
With luck, this will get me unwedged. But if you
really didn't forget anything, try typing `2' now; then
my insertion and my current dilemma will both disappear.
! Display math should end with $$.
<to be read again>
\endgroup
l.20 \end{eqnarray}
The `$' that I just saw supposedly matches a previous `$$'.
So I shall assume that you typed `$$' both times.
] ("Group 1042.aux") )
Here is how much of TeX's memory you used:
1411 strings out of 95305
16045 string characters out of 1183061
62708 words of memory out of 1500000
4639 multiletter control sequences out of 110000
8096 words of font info for 31 fonts, out of 1200000 for 2000
14 hyphenation exceptions out of 8191
27i,12n,24p,220b,127s stack positions out of 5000i,500n,10000p,200000b,5000s
Output written on "Group 1042.dvi" (1 page, 1844 bytes).

## Text block 700

CTOP

## Text block 701

239.75

## Text block 702

CLEFT

## Text block 703

318.875

## Text block 704

CWIDTH

## Text block 705

CHEIGHT

## Text block 706

215.75

## Text block 707

MAG

## Text block 708

Klasifikace a rozpoznávání

## Text block 709

Extrakce příznaků

## Text block 710

Extrakce příznaků - parametrizace

## Text block 711

Poté co jsme ze snímače obdržely data která jsou relevantní pro naši klasifikační úlohu, je potřeba je přizpůsobit potřebám rozpoznávače
Klasifikátory mají rády parametry které jsou:
Gaussovského rozložení (většinou vícerozměrného)
Nekorelované
Nízkodimenzionální

## Text block 712

Příklad parametrizace pro 2D vstupní vektory

## Text block 713

Mějme vzorky (příklady) 2D rozložení pro dvě třídy.

## Text block 714

Příklad parametrizace pro 2D vstupní vektory

## Text block 715

Rozložení není příliš gaussovské.
Provedeme třetí odmocninou obou koeficientů.

## Text block 716

Příklad parametrizace pro 2D vstupní vektory

## Text block 717

Prostor se komprimuje – nelineárně deformuje...

## Text block 718

Příklad parametrizace pro 2D vstupní vektory

## Text block 719

... a rozložení pro každou třídu je nyní gaussovské.
Koeficienty jsou ale korelované.
Je vhodné prostor otočit tak aby se koeficienty dekorelovaly.

## Text block 720

Příklad parametrizace pro 2D vstupní vektory

## Text block 721

Nyní jsou koeficienty dekorelovány.
Svislá dimenze je navíc zbytečná, protože třídy se v ní zcela překrývají.

## Text block 722

Gaussovské rozložení (jednorozměrné)

## Text block 723

Gaussian distribution (2 dimensions)

## Text block 724

Plná a diagonální kovarianční matice

## Text block 725

Diagonální kovarianční matice

## Text block 726

Pokud je Σ diagonální matice s koeficienty v diagonále σ2i 

## Text block 727

Diagonální kovarianční matice

## Text block 729

Proč nás zajímá?
Pomůže nám pochopit význam plné kovarianční matice v gaussovském rozložení
Úspora parametrů při modelování dat
Pokud jsou data korelována (viz červená třída na prvním obr.)
Zvláště pro vysoce dimenzionální příznaky, modelování pomocí směsi gaussovských rozložení s diagonální Σ může být úspornější než použití jedné gaussovky s plnou Σ
Můžeme se pokusit data natočit - dekorelovat

## Text block 730

Skalární součin

## Text block 731

Rotace vektoru

## Text block 732

Nechť b1 a b2 jsou ortonormální baze
Vektory jsou na sebe kolmé
Mají délku |b1| = |b2| = 1
Potom y = B x je otočený vektor x, kde b1 a b2 ukazují v původním prostoru směry nových os

## Text block 733

Projekce vektoru

## Text block 734

Nechť B je matice ortonormálních bází a B’ matice tvořena pouze několika řádky (bázemi) matice B.
Potom y = B’TB’x je projekce vektoru x do bází B’.

## Text block 735

Vlastní čísla a vektory

## Text block 736

λ je vlastní číslo a e je odpovídající vlastni vektor čtvercové matice Σ, pokud platí:

## Text block 737

μ transformovaných dat

## Text block 738

Jak se změní odhady střední hodnoty a kovarianční matice pokud původní data transformujeme: y = Ax

## Text block 739

Σ transformovaných dat

## Text block 740

Analýza hlavních komponent

## Text block 742

Umožňuje:
Dekorelaci – vlastní vektory kovarianční matice definuji souřadný systém ve kterých jsou data dekorelována – mají diagonální kovarianční matici
Redukci dimenzí – promítnutí dat do pouze několika vlastních vektorů odpovídajících největším vlastním číslům (směry s nevětší variancí) umožní optimální rekonstrukci dat s nejmenší kvadratickou chybou (mean square error - MSE)
Redukce dimenzí provádíme pokud věříme, že v některých směrech není užitečná informace ale pouze (gaussovský) šum s nízkou variabilitou.

## Text block 743

Interpretace Σ v gaussovském rozložení

## Text block 744

PCA - Příklad

## Text block 745

Obrázky 100x100 pixelů – 10000 dimensionální vektory

## Text block 746

PCA - Příklad

## Text block 747

Jakou dimenzi si PCA vybere na tomto příkladě?
Bude to výhodné pro klasifikaci tříd?

## Text block 748

Lineární diskriminační analýza

## Text block 749

Opět se pokusíme promítnout data pouze do určitého směru:
Tentokrát ale budeme chtít aby v tomto směru byly separovány třídy.
Intuitivně by nás mohlo napadnout vybrat směr ve kterém jsou nejlépe odděleny průměty středních hodnot tříd m1 a m2. Hledáme tedy w, které maximalizuje:

## Text block 750

Lineární diskriminační analýza

## Text block 751

Lze však najít i lepší směr:

## Text block 752

Lineární diskriminační analýza

## Text block 754

LDA dimenze dány vlastními vektory matice
Σac – kovarianční matice spočítaná se středních hodnot tříd
Σwc – průměrná kovarianční matice tříd
Lze zobecnit pro více tříd – vlastní vektory s největšími vlastními čísly odpovídají směrům ve kterých jsou třídy nelépe separovány
Pro J tříd bude pouze J-1 vlastních čísel nenulových
Pokud mají všechny třídy gaussovské rozložení se stejnou kovarianční maticí, LDA transformace transformuje prostor tak, že mohou byt třídy optimálně modelovány gaussovským rozložení s diagonální kovarianční maticí

## Text block 755

LDA a lineární klasifikátor

## Text block 756

Dvě třídy s gaussovským rozložením se stejnou kovarianční matici jsou opravdu optimálně oddělitelné lineárním klasifikátorem (přímkou, rovinou, hyper-rovinou)

## Text block 757

Extrakce příznaku pro řeč - MFCC
(Mel frequency cepstral coefficients)

## Text block 758

Nejprve řečový signál rozdělíme do asi 20ms překrývajících se segmentů

## Text block 759

Singular Value Decomposition - SVD

## Text block 760

A je jakákoli mxn matice
U je mxn matice kde sloupce jsou ortonormální báze
V je nxn matice kde sloupce jsou ortonormální báze
D je nxn je diagonální matice
Předpokládejme, že matice A je matice s příznakovými vektory v řádcích s již odečtenou střední hodnotou  Σ = ATA
Potom z následujících vztahů vyplývá, ze:
V jsou vlastní vektory Σ
Diagonála D obsahuje odmocniny z vlastních čísel Σ (variance ve směrech vlastních vektorů)

## Text block 761

μ λ1=3.4∙105 λ2=2.8∙105 λ3=2.4∙105 λ3=1.6∙105

## Text block 762

Střední hodnota, vlastní čísla a vlastní vektory

## Text block 764

Originál M = 1 M=10 M=50 M=250
