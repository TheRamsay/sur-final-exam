---
title: "lin klasifikatory"
source_url: https://www.fit.vut.cz/study/course/SUR/public/prednasky/IKR/04_lin_klasifikatory/lin_klasifikatory.ppt
raw_path: raw/sur-prednasky/IKR/04_lin_klasifikatory/lin_klasifikatory.ppt
format: ppt
generated: 2026-05-11
---

# lin klasifikatory

- Source: [lin_klasifikatory.ppt](../../../../raw/sur-prednasky/IKR/04_lin_klasifikatory/lin_klasifikatory.ppt)
- URL: https://www.fit.vut.cz/study/course/SUR/public/prednasky/IKR/04_lin_klasifikatory/lin_klasifikatory.ppt
- Note: extracted from legacy binary PowerPoint; slide layout and images are not preserved.

## Text block 1

Klasifikace a rozpoznávání

## Text block 2

Lineární klasifikátory

## Text block 3

Opakování - Skalární součin

## Text block 4

Lineární klasifikátor

## Text block 5

Vyber třídu C1 pokud y(x) > 0 a jinak vyber třídu C2

## Text block 6

Lineární klasifikátor

## Text block 7

Perceptron

## Text block 8

Jednoduchý lineární klasifikátor s aktivační funkcí:
Samotná aktivační funkce v tomto případě nic nezmění – rozhodování na základě y(x) > 0 by vedlo ke stejnému výsledku – ale pro učící se algoritmus bude výhodné definovat si požadovaný výstup jako:
Pro další zjednodušení předpokládejme, ze w0 je “nultý” koeficient vektoru w a odpovídající vstup x0 je vždy 1. Můžeme tedy psát pouze:

## Text block 9

Perceptron – učící algoritmus

## Text block 10

Cyklicky procházej jednotlivé trénovací vzory a vždy když narazíš na špatně klasifikovaný vzor kde
změň vektor w takto:
Lze dokázat, že pokud jsou data lineárně separovatelná, tak, algoritmus vždy nalezne řešení – konverguje. V opačném případě, ale nikdy nekonverguje

## Text block 11

Perceptron

## Text block 12

Ale které řešení je to správné?
Řešení, které poskytne učící algoritmus perceptronu záleží na inicializaci – počátečním w

## Text block 13

Opakování - MAP klasifikátor

## Text block 14

Mějme 2 třídy C1 a C2
Pro daný příznak x vyber třídu C s větší posteriorní pravděpodobností P(C|x)
Vyber C1 pouze pokud:

## Text block 15

Pravděpodobnostní generativní model

## Text block 16

Modelujme rozložení tříd gaussovskym rozložením:
Pokud náš model omezíme tak, ze každá třída má svou střední μi hodnotu, ale kovarianční matice Σ je společná pro obě třídy, tak můžeme psát:
kde

## Text block 17

Maximum likelihood odhad parametrů

## Text block 18

Hledáme parametry modelu
kde ti je třída do které patří vzor xi a μti je střední hodnota této třídy
Řešením jsou :
střední hodnoty spočítané z dat jednotlivých tříd
Kovarianční matice, která je váhovaným průměrem kovariančních matic spočtených z dat jednotlivých tříd

## Text block 19

V případě kdy ovšem naše data nerespektují předpoklad gaussovských rozložení a sdílené kovarianční matice. Klasifikátor může selhat – fialová rozhodovací linie
Lepší výsledky dostaneme s diskriminativně natrénovaným klasifikátorem, který bude vysvětlen později – zelená rozhodovací linie

## Text block 20

Opakování LDA

## Text block 21

Generativní model a zobecněny lineární klasifikátor

## Text block 22

Nyní použijme zobecněný lineární klasifikátor
kde stále platí, že
a kde aktivační funkce je logistická sigmoida
Potom lze hodnotu tohoto zobecněného linearního klasifikátoru přímo interpretovat jako posteriorní pravděpodobnost třídy C1

## Text block 23

Jiné generativní lineární klasifikátory

## Text block 24

Lineární klasifikátor dostaneme nejen pro gaussovské rozložení, ale pro celou třídu rozložení s exponencialní rodiny, které lze zapsat v následující formě:
kde vektor λk má každá třída svůj vlastní, zatím co parametr s je sdíleny všemi třídami

## Text block 25

Nelineární mapování vstupního vektoru

## Text block 26

Nelze-li původní data lineárně oddělit, možná pomůže jejich nelineární transformace do potenciálně vysocerozměrného prostoru – hlavní myšlenka „kernel methods“ které budou vysvětleny příště
V našem příkladu pomohlo i mapování dvourozměrných dat do dvou gaussovských funkcí

## Text block 27

Lineární logistická regrese

## Text block 28

Uvažujme opět pravděpodobnostní model
kde opět pro zjednodušení x0 je vžy 1 a nemusíme tedy explicitně zavádět w0.
Nyní ale budeme parametry w odhadovat přímo tak abychom maximalizovali pravděpodobnost, že všechna trénovací data budou rozpoznána správně

## Text block 29

Lineární logistická regrese – odhad parametrů

## Text block 30

Lépe se nám bude pracovat s logaritmem naší objektivní funkce, což je chybová funkce známo jako vzájemná entropie
Hledáme minimum této funkce, takže derivujeme abychom dostali gradient
Pokud najdeme parametry w pro které je gradient nulový, našli jsme optimum chybové funkce. To však není snadné nalézt analyticky. Budeme řešit nymericky, např pomocí gradient descent

## Text block 31

Lineární logistická regrese – odhad parametrů

## Text block 32

Rychlejší konvergenci dosáhneme pomocí Newton-Raphson optimalizace:
Kolem stávajícího řešení w(old) aproximujeme chybovou funkci E pomoci Taylorova rozvoje druhého řádu, čímž obdržíme kvadratickou formu (vícerozměrné zobecnění kvadratické funkce).
Jako nové řešení zvolíme to, kde má tato kvadratická forma minimum.

## Text block 33

Problém s více třídami

## Text block 34

Klasifikace
jeden proti všem
Každý s každým

## Text block 35

Lineární klasifikátor – více tříd

## Text block 36

Nejlépe je mít jednu lineární funkci pro každou třídu k
Vyber třídu s největším yk(x)
Rozhodovací linie je opět lineární dána
Kde k a j jsou dvě nejpravděpodobnější třídy pro dané x
Pro dvě třídy řešení degraduje k tomu co už jsme viděli

## Text block 37

Více tříd – generativní model

## Text block 38

SRC

## Text block 39

$ {\bf w} $

## Text block 40

LOG

## Text block 41

This is pdfTeX, Version 3.1415926-1.40.9 (MiKTeX 2.7) (preloaded format=latex 2008.11.17) 12 MAR 2009 01:08
entering extended mode
**Group*421
("Group 421.tex"
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
No file Group*421.aux.
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
] ("Group 421.aux") )
Here is how much of TeX's memory you used:
1399 strings out of 95305
15913 string characters out of 1183061
59708 words of memory out of 1500000
4633 multiletter control sequences out of 110000
6266 words of font info for 25 fonts, out of 1200000 for 2000
14 hyphenation exceptions out of 8191
27i,5n,24p,219b,112s stack positions out of 5000i,500n,10000p,200000b,5000s
Output written on "Group 421.dvi" (1 page, 296 bytes).

## Text block 42

CTOP

## Text block 43

212.75

## Text block 44

CLEFT

## Text block 45

265.875

## Text block 46

CWIDTH

## Text block 47

CHEIGHT

## Text block 48

12.875

## Text block 49

MAG

## Text block 50

SRC

## Text block 51

$ {\bf x} $

## Text block 52

LOG

## Text block 53

This is pdfTeX, Version 3.1415926-1.40.9 (MiKTeX 2.7) (preloaded format=latex 2008.11.17) 12 MAR 2009 01:09
entering extended mode
**Text*Box*459
("Text Box 459.tex"
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
No file Text*Box*459.aux.
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
] ("Text Box 459.aux") )
Here is how much of TeX's memory you used:
1399 strings out of 95305
15937 string characters out of 1183061
59708 words of memory out of 1500000
4633 multiletter control sequences out of 110000
6266 words of font info for 25 fonts, out of 1200000 for 2000
14 hyphenation exceptions out of 8191
27i,5n,24p,222b,112s stack positions out of 5000i,500n,10000p,200000b,5000s
Output written on "Text Box 459.dvi" (1 page, 296 bytes).

## Text block 54

CTOP

## Text block 55

212.75

## Text block 56

CLEFT

## Text block 57

265.875

## Text block 58

CWIDTH

## Text block 59

17.5

## Text block 60

CHEIGHT

## Text block 61

12.875

## Text block 62

MAG

## Text block 63

SRC

## Text block 64

$ {\bf x} = \left[
\begin{array}{c}
x_1 \\
x_2
\end{array}
\right] \
{\bf w} = \left[
\begin{array}{c}
w_1 \\
w_2
\end{array}
\right]$

## Text block 65

LOG

## Text block 66

This is pdfTeX, Version 3.1415926-1.40.9 (MiKTeX 2.7) (preloaded format=latex 2008.11.17) 12 MAR 2009 01:55
entering extended mode
**Text*Box*530
("Text Box 530.tex"
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
No file Text*Box*530.aux.
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
] ("Text Box 530.aux") )
Here is how much of TeX's memory you used:
1399 strings out of 95305
15937 string characters out of 1183061
59708 words of memory out of 1500000
4633 multiletter control sequences out of 110000
6266 words of font info for 25 fonts, out of 1200000 for 2000
14 hyphenation exceptions out of 8191
27i,8n,24p,222b,112s stack positions out of 5000i,500n,10000p,200000b,5000s
Output written on "Text Box 530.dvi" (1 page, 628 bytes).

## Text block 67

CTOP

## Text block 68

186.125

## Text block 69

CLEFT

## Text block 70

250.375

## Text block 71

CWIDTH

## Text block 72

292.625

## Text block 73

CHEIGHT

## Text block 74

64.375

## Text block 75

MAG

## Text block 76

SRC

## Text block 77

$ {\bf w}^T {\bf x} =
\left[ \begin{array}{cc} w_1 & w_2 \end{array} \right]
\left[ \begin{array}{c} x_1 \\ x_2 \\ \end{array} \right] =
w_1 x_1 + w_2 x_2 $

## Text block 78

LOG

## Text block 79

This is pdfTeX, Version 3.1415926-1.40.9 (MiKTeX 2.7) (preloaded format=latex 2008.11.17) 12 MAR 2009 01:55
entering extended mode
**Text*Box*549
("Text Box 549.tex"
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
No file Text*Box*549.aux.
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
] ("Text Box 549.aux") )
Here is how much of TeX's memory you used:
1399 strings out of 95305
15937 string characters out of 1183061
60708 words of memory out of 1500000
4633 multiletter control sequences out of 110000
6266 words of font info for 25 fonts, out of 1200000 for 2000
14 hyphenation exceptions out of 8191
27i,8n,24p,222b,112s stack positions out of 5000i,500n,10000p,200000b,5000s
Output written on "Text Box 549.dvi" (1 page, 724 bytes).

## Text block 80

CTOP

## Text block 81

186.125

## Text block 82

CLEFT

## Text block 83

250.375

## Text block 84

CWIDTH

## Text block 85

501.25

## Text block 86

CHEIGHT

## Text block 87

64.375

## Text block 88

MAG

## Text block 89

SRC

## Text block 90

$\frac{{\bf w}^T{\bf x}}{|{\bf w}|}$

## Text block 91

LOG

## Text block 92

This is pdfTeX, Version 3.1415926-1.40.9 (MiKTeX 2.7) (preloaded format=latex 2008.11.17) 12 MAR 2009 01:56
entering extended mode
**Group*589
("Group 589.tex"
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
No file Group*589.aux.
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
] ("Group 589.aux") )
Here is how much of TeX's memory you used:
1399 strings out of 95305
15913 string characters out of 1183061
59708 words of memory out of 1500000
4633 multiletter control sequences out of 110000
6266 words of font info for 25 fonts, out of 1200000 for 2000
14 hyphenation exceptions out of 8191
27i,5n,24p,219b,112s stack positions out of 5000i,500n,10000p,200000b,5000s
Output written on "Group 589.dvi" (1 page, 444 bytes).

## Text block 93

CTOP

## Text block 94

212.75

## Text block 95

CLEFT

## Text block 96

292.875

## Text block 97

CWIDTH

## Text block 98

CHEIGHT

## Text block 99

49.5

## Text block 100

MAG

## Text block 101

SRC

## Text block 102

$y({\bf x}) = {\bf w}^T{\bf x} + w_0$

## Text block 103

LOG

## Text block 104

This is pdfTeX, Version 3.1415926-1.40.9 (MiKTeX 2.7) (preloaded format=latex 2008.11.17) 12 MAR 2009 01:58
entering extended mode
**Text*Box*518
("Text Box 518.tex"
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
No file Text*Box*518.aux.
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
] ("Text Box 518.aux") )
Here is how much of TeX's memory you used:
1399 strings out of 95305
15937 string characters out of 1183061
59708 words of memory out of 1500000
4633 multiletter control sequences out of 110000
6266 words of font info for 25 fonts, out of 1200000 for 2000
14 hyphenation exceptions out of 8191
27i,5n,24p,222b,112s stack positions out of 5000i,500n,10000p,200000b,5000s
Output written on "Text Box 518.dvi" (1 page, 516 bytes).

## Text block 105

CTOP

## Text block 106

179.25

## Text block 107

CLEFT

## Text block 108

234.75

## Text block 109

CWIDTH

## Text block 110

189.875

## Text block 111

CHEIGHT

## Text block 112

MAG

## Text block 113

SRC

## Text block 114

$y({\bf x}) = f({\bf w}^T{\bf x} + w_0)$

## Text block 115

LOG

## Text block 116

This is pdfTeX, Version 3.1415926-1.40.9 (MiKTeX 2.7) (preloaded format=latex 2008.11.17) 12 MAR 2009 02:08
entering extended mode
**Text*Box*34
("Text Box 34.tex"
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
No file Text*Box*34.aux.
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
] ("Text Box 34.aux") )
Here is how much of TeX's memory you used:
1399 strings out of 95305
15929 string characters out of 1183061
59708 words of memory out of 1500000
4633 multiletter control sequences out of 110000
6266 words of font info for 25 fonts, out of 1200000 for 2000
14 hyphenation exceptions out of 8191
27i,5n,24p,221b,112s stack positions out of 5000i,500n,10000p,200000b,5000s
Output written on "Text Box 34.dvi" (1 page, 532 bytes).

## Text block 117

CTOP

## Text block 118

179.25

## Text block 119

CLEFT

## Text block 120

234.75

## Text block 121

CWIDTH

## Text block 122

225.125

## Text block 123

CHEIGHT

## Text block 124

MAG

## Text block 125

Zobecněný lineární klasifikátor

## Text block 126

kde f se nazývá aktivační funkce

## Text block 127

SRC

## Text block 128

$ {\bf w} $

## Text block 129

LOG

## Text block 130

This is pdfTeX, Version 3.1415926-1.40.9 (MiKTeX 2.7) (preloaded format=latex 2008.11.17) 12 MAR 2009 01:08
entering extended mode
**Group*421
("Group 421.tex"
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
No file Group*421.aux.
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
] ("Group 421.aux") )
Here is how much of TeX's memory you used:
1399 strings out of 95305
15913 string characters out of 1183061
59708 words of memory out of 1500000
4633 multiletter control sequences out of 110000
6266 words of font info for 25 fonts, out of 1200000 for 2000
14 hyphenation exceptions out of 8191
27i,5n,24p,219b,112s stack positions out of 5000i,500n,10000p,200000b,5000s
Output written on "Group 421.dvi" (1 page, 296 bytes).

## Text block 131

CTOP

## Text block 132

212.75

## Text block 133

CLEFT

## Text block 134

265.875

## Text block 135

CWIDTH

## Text block 136

CHEIGHT

## Text block 137

12.875

## Text block 138

MAG

## Text block 139

SRC

## Text block 140

$ {\bf x} $

## Text block 141

LOG

## Text block 142

This is pdfTeX, Version 3.1415926-1.40.9 (MiKTeX 2.7) (preloaded format=latex 2008.11.17) 12 MAR 2009 01:09
entering extended mode
**Text*Box*459
("Text Box 459.tex"
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
No file Text*Box*459.aux.
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
] ("Text Box 459.aux") )
Here is how much of TeX's memory you used:
1399 strings out of 95305
15937 string characters out of 1183061
59708 words of memory out of 1500000
4633 multiletter control sequences out of 110000
6266 words of font info for 25 fonts, out of 1200000 for 2000
14 hyphenation exceptions out of 8191
27i,5n,24p,222b,112s stack positions out of 5000i,500n,10000p,200000b,5000s
Output written on "Text Box 459.dvi" (1 page, 296 bytes).

## Text block 143

CTOP

## Text block 144

212.75

## Text block 145

CLEFT

## Text block 146

265.875

## Text block 147

CWIDTH

## Text block 148

17.5

## Text block 149

CHEIGHT

## Text block 150

12.875

## Text block 151

MAG

## Text block 152

SRC

## Text block 153

$\frac{y ({\bf x})}{|{\bf w}|} $

## Text block 154

LOG

## Text block 155

This is pdfTeX, Version 3.1415926-1.40.9 (MiKTeX 2.7) (preloaded format=latex 2008.11.17) 12 MAR 2009 01:38
entering extended mode
**Group*239
("Group 239.tex"
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
No file Group*239.aux.
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
] ("Group 239.aux") )
Here is how much of TeX's memory you used:
1399 strings out of 95305
15913 string characters out of 1183061
59708 words of memory out of 1500000
4633 multiletter control sequences out of 110000
6266 words of font info for 25 fonts, out of 1200000 for 2000
14 hyphenation exceptions out of 8191
27i,5n,24p,219b,112s stack positions out of 5000i,500n,10000p,200000b,5000s
Output written on "Group 239.dvi" (1 page, 476 bytes).

## Text block 156

CTOP

## Text block 157

209.75

## Text block 158

CLEFT

## Text block 159

288.5

## Text block 160

CWIDTH

## Text block 161

CHEIGHT

## Text block 162

47.875

## Text block 163

MAG

## Text block 164

SRC

## Text block 165

$-\frac{w_0}{|{\bf w}|} $

## Text block 166

LOG

## Text block 167

This is pdfTeX, Version 3.1415926-1.40.9 (MiKTeX 2.7) (preloaded format=latex 2008.11.17) 12 MAR 2009 01:40
entering extended mode
**Group*260
("Group 260.tex"
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
No file Group*260.aux.
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
] ("Group 260.aux") )
Here is how much of TeX's memory you used:
1399 strings out of 95305
15913 string characters out of 1183061
59708 words of memory out of 1500000
4633 multiletter control sequences out of 110000
6266 words of font info for 25 fonts, out of 1200000 for 2000
14 hyphenation exceptions out of 8191
27i,5n,24p,219b,112s stack positions out of 5000i,500n,10000p,200000b,5000s
Output written on "Group 260.dvi" (1 page, 520 bytes).

## Text block 168

CTOP

## Text block 169

CLEFT

## Text block 170

286.5

## Text block 171

CWIDTH

## Text block 172

64.125

## Text block 173

CHEIGHT

## Text block 174

38.75

## Text block 175

MAG

## Text block 176

SRC

## Text block 177

$y > 0$

## Text block 178

LOG

## Text block 179

This is pdfTeX, Version 3.1415926-1.40.9 (MiKTeX 2.7) (preloaded format=latex 2008.11.17) 12 MAR 2009 01:44
entering extended mode
**Text*Box*321
("Text Box 321.tex"
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
No file Text*Box*321.aux.
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
] ("Text Box 321.aux") )
Here is how much of TeX's memory you used:
1393 strings out of 95305
15878 string characters out of 1183061
59708 words of memory out of 1500000
4630 multiletter control sequences out of 110000
5339 words of font info for 22 fonts, out of 1200000 for 2000
14 hyphenation exceptions out of 8191
27i,5n,24p,222b,112s stack positions out of 5000i,500n,10000p,200000b,5000s
Output written on "Text Box 321.dvi" (1 page, 344 bytes).

## Text block 180

CTOP

## Text block 181

156.75

## Text block 182

CLEFT

## Text block 183

197.375

## Text block 184

CWIDTH

## Text block 185

47.125

## Text block 186

CHEIGHT

## Text block 187

16.75

## Text block 188

MAG

## Text block 189

SRC

## Text block 190

$y < 0$

## Text block 191

LOG

## Text block 192

This is pdfTeX, Version 3.1415926-1.40.9 (MiKTeX 2.7) (preloaded format=latex 2008.11.17) 12 MAR 2009 01:46
entering extended mode
**Text*Box*343
("Text Box 343.tex"
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
No file Text*Box*343.aux.
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
] ("Text Box 343.aux") )
Here is how much of TeX's memory you used:
1393 strings out of 95305
15878 string characters out of 1183061
59708 words of memory out of 1500000
4630 multiletter control sequences out of 110000
5339 words of font info for 22 fonts, out of 1200000 for 2000
14 hyphenation exceptions out of 8191
27i,5n,24p,222b,112s stack positions out of 5000i,500n,10000p,200000b,5000s
Output written on "Text Box 343.dvi" (1 page, 344 bytes).

## Text block 193

CTOP

## Text block 194

156.75

## Text block 195

CLEFT

## Text block 196

197.375

## Text block 197

CWIDTH

## Text block 198

47.125

## Text block 199

CHEIGHT

## Text block 200

16.75

## Text block 201

MAG

## Text block 202

SRC

## Text block 203

$\textcolor{red}{y = 0}$

## Text block 204

LOG

## Text block 205

This is pdfTeX, Version 3.1415926-1.40.9 (MiKTeX 2.7) (preloaded format=latex 2008.11.17) 12 MAR 2009 01:48
entering extended mode
**Text*Box*360
("Text Box 360.tex"
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
)) ("C:\Program Files\TeX4PPT\Styles\TeX4PPT.sty") ("Text Box 360.aux")
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
] ("Text Box 360.aux") )
Here is how much of TeX's memory you used:
1395 strings out of 95305
15910 string characters out of 1183061
59708 words of memory out of 1500000
4630 multiletter control sequences out of 110000
5339 words of font info for 22 fonts, out of 1200000 for 2000
14 hyphenation exceptions out of 8191
27i,5n,24p,222b,112s stack positions out of 5000i,500n,10000p,200000b,5000s
Output written on "Text Box 360.dvi" (1 page, 384 bytes).

## Text block 206

CTOP

## Text block 207

156.75

## Text block 208

CLEFT

## Text block 209

197.375

## Text block 210

CWIDTH

## Text block 211

47.125

## Text block 212

CHEIGHT

## Text block 213

16.75

## Text block 214

MAG

## Text block 215

SRC

## Text block 216

$x_1$

## Text block 217

LOG

## Text block 218

This is pdfTeX, Version 3.1415926-1.40.9 (MiKTeX 2.7) (preloaded format=latex 2008.11.17) 12 MAR 2009 01:50
entering extended mode
**Text*Box*366
("Text Box 366.tex"
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
No file Text*Box*366.aux.
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
] ("Text Box 366.aux") )
Here is how much of TeX's memory you used:
1393 strings out of 95305
15878 string characters out of 1183061
59708 words of memory out of 1500000
4630 multiletter control sequences out of 110000
5339 words of font info for 22 fonts, out of 1200000 for 2000
14 hyphenation exceptions out of 8191
27i,5n,24p,222b,112s stack positions out of 5000i,500n,10000p,200000b,5000s
Output written on "Text Box 366.dvi" (1 page, 340 bytes).

## Text block 219

CTOP

## Text block 220

CLEFT

## Text block 221

197.375

## Text block 222

CWIDTH

## Text block 223

19.375

## Text block 224

CHEIGHT

## Text block 225

11.625

## Text block 226

MAG

## Text block 227

SRC

## Text block 228

$x_2$

## Text block 229

LOG

## Text block 230

This is pdfTeX, Version 3.1415926-1.40.9 (MiKTeX 2.7) (preloaded format=latex 2008.11.17) 12 MAR 2009 01:50
entering extended mode
**Text*Box*375
("Text Box 375.tex"
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
No file Text*Box*375.aux.
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
] ("Text Box 375.aux") )
Here is how much of TeX's memory you used:
1393 strings out of 95305
15878 string characters out of 1183061
59708 words of memory out of 1500000
4630 multiletter control sequences out of 110000
5339 words of font info for 22 fonts, out of 1200000 for 2000
14 hyphenation exceptions out of 8191
27i,5n,24p,222b,112s stack positions out of 5000i,500n,10000p,200000b,5000s
Output written on "Text Box 375.dvi" (1 page, 340 bytes).

## Text block 231

CTOP

## Text block 232

CLEFT

## Text block 233

197.375

## Text block 234

CWIDTH

## Text block 235

19.375

## Text block 236

CHEIGHT

## Text block 237

11.625

## Text block 238

MAG

## Text block 239

SRC

## Text block 240

$\frac{{\bf w}^T {\bf x}}{|{\bf w}|} $

## Text block 241

LOG

## Text block 242

This is pdfTeX, Version 3.1415926-1.40.9 (MiKTeX 2.7) (preloaded format=latex 2008.11.17) 12 MAR 2009 01:57
entering extended mode
**Text*Box*481
("Text Box 481.tex"
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
No file Text*Box*481.aux.
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
] ("Text Box 481.aux") )
Here is how much of TeX's memory you used:
1399 strings out of 95305
15937 string characters out of 1183061
59708 words of memory out of 1500000
4633 multiletter control sequences out of 110000
6266 words of font info for 25 fonts, out of 1200000 for 2000
14 hyphenation exceptions out of 8191
27i,5n,24p,222b,112s stack positions out of 5000i,500n,10000p,200000b,5000s
Output written on "Text Box 481.dvi" (1 page, 444 bytes).

## Text block 243

CTOP

## Text block 244

213.625

## Text block 245

CLEFT

## Text block 246

294.375

## Text block 247

CWIDTH

## Text block 248

54.25

## Text block 249

CHEIGHT

## Text block 250

49.875

## Text block 251

MAG

## Text block 252

SRC

## Text block 253

$\frac{{\bf w}^T{\bf x}}{|{\bf w}|} = - \frac{w_0}{|{\bf w}|} + \frac{y ({\bf x})}{|{\bf w}|} $

## Text block 254

LOG

## Text block 255

This is pdfTeX, Version 3.1415926-1.40.9 (MiKTeX 2.7) (preloaded format=latex 2008.11.17) 12 MAR 2009 01:58
entering extended mode
**Text*Box*491
("Text Box 491.tex"
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
)) ("C:\Program Files\TeX4PPT\Styles\TeX4PPT.sty") ("Text Box 491.aux")
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
] ("Text Box 491.aux") )
Here is how much of TeX's memory you used:
1401 strings out of 95305
15969 string characters out of 1183061
59708 words of memory out of 1500000
4633 multiletter control sequences out of 110000
6266 words of font info for 25 fonts, out of 1200000 for 2000
14 hyphenation exceptions out of 8191
27i,5n,24p,222b,112s stack positions out of 5000i,500n,10000p,200000b,5000s
Output written on "Text Box 491.dvi" (1 page, 788 bytes).

## Text block 256

CTOP

## Text block 257

202.375

## Text block 258

CLEFT

## Text block 259

277.75

## Text block 260

CWIDTH

## Text block 261

244.5

## Text block 262

CHEIGHT

## Text block 263

46.5

## Text block 264

MAG

## Text block 265

SRC

## Text block 266

$y({\bf x}) = {\bf w}^T{\bf x} + w_0$

## Text block 267

LOG

## Text block 268

This is pdfTeX, Version 3.1415926-1.40.9 (MiKTeX 2.7) (preloaded format=latex 2008.11.17) 12 MAR 2009 01:58
entering extended mode
**Text*Box*518
("Text Box 518.tex"
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
No file Text*Box*518.aux.
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
] ("Text Box 518.aux") )
Here is how much of TeX's memory you used:
1399 strings out of 95305
15937 string characters out of 1183061
59708 words of memory out of 1500000
4633 multiletter control sequences out of 110000
6266 words of font info for 25 fonts, out of 1200000 for 2000
14 hyphenation exceptions out of 8191
27i,5n,24p,222b,112s stack positions out of 5000i,500n,10000p,200000b,5000s
Output written on "Text Box 518.dvi" (1 page, 516 bytes).

## Text block 269

CTOP

## Text block 270

179.25

## Text block 271

CLEFT

## Text block 272

234.75

## Text block 273

CWIDTH

## Text block 274

189.875

## Text block 275

CHEIGHT

## Text block 276

MAG

## Text block 277

SRC

## Text block 278

$y({\bf x}) = f({\bf w}^T{\bf x})$

## Text block 279

LOG

## Text block 280

This is pdfTeX, Version 3.1415926-1.40.9 (MiKTeX 2.7) (preloaded format=latex 2008.11.17) 12 MAR 2009 08:33
entering extended mode
**Text*Box*28
("Text Box 28.tex"
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
No file Text*Box*28.aux.
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
] ("Text Box 28.aux") )
Here is how much of TeX's memory you used:
1399 strings out of 95305
15929 string characters out of 1183061
59708 words of memory out of 1500000
4633 multiletter control sequences out of 110000
6266 words of font info for 25 fonts, out of 1200000 for 2000
14 hyphenation exceptions out of 8191
27i,5n,24p,221b,112s stack positions out of 5000i,500n,10000p,200000b,5000s
Output written on "Text Box 28.dvi" (1 page, 472 bytes).

## Text block 281

CTOP

## Text block 282

179.25

## Text block 283

CLEFT

## Text block 284

234.75

## Text block 285

CWIDTH

## Text block 286

CHEIGHT

## Text block 287

MAG

## Text block 288

SRC

## Text block 289

${\bf w}^{\tau + 1} = {\bf w}^{\tau} + {\bf x}_n t_n$

## Text block 290

LOG

## Text block 291

This is pdfTeX, Version 3.1415926-1.40.9 (MiKTeX 2.7) (preloaded format=latex 2008.11.17) 12 MAR 2009 08:40
entering extended mode
**Group*49
("Group 49.tex"
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
No file Group*49.aux.
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
] ("Group 49.aux") )
Here is how much of TeX's memory you used:
1399 strings out of 95305
15905 string characters out of 1183061
59708 words of memory out of 1500000
4633 multiletter control sequences out of 110000
6266 words of font info for 25 fonts, out of 1200000 for 2000
14 hyphenation exceptions out of 8191
27i,5n,24p,218b,112s stack positions out of 5000i,500n,10000p,200000b,5000s
Output written on "Group 49.dvi" (1 page, 540 bytes).

## Text block 292

CTOP

## Text block 293

238.875

## Text block 294

CLEFT

## Text block 295

317.5

## Text block 296

CWIDTH

## Text block 297

293.75

## Text block 298

CHEIGHT

## Text block 299

34.25

## Text block 300

MAG

## Text block 301

SRC

## Text block 302

$y({\bf x}_n) \neq t_n$

## Text block 303

LOG

## Text block 304

This is pdfTeX, Version 3.1415926-1.40.9 (MiKTeX 2.7) (preloaded format=latex 2008.11.17) 12 MAR 2009 08:57
entering extended mode
**Text*Box*91
("Text Box 91.tex"
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
No file Text*Box*91.aux.
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
] ("Text Box 91.aux") )
Here is how much of TeX's memory you used:
1399 strings out of 95305
15929 string characters out of 1183061
59708 words of memory out of 1500000
4633 multiletter control sequences out of 110000
6266 words of font info for 25 fonts, out of 1200000 for 2000
14 hyphenation exceptions out of 8191
27i,5n,24p,221b,112s stack positions out of 5000i,500n,10000p,200000b,5000s
Output written on "Text Box 91.dvi" (1 page, 512 bytes).

## Text block 305

CTOP

## Text block 306

241.125

## Text block 307

CLEFT

## Text block 308

317.5

## Text block 309

CWIDTH

## Text block 310

CHEIGHT

## Text block 311

35.625

## Text block 312

MAG

## Text block 313

Nejvzdálenější bod od počátku

## Text block 314

SVM řešení

## Text block 315

Algoritmus konverguje v méně než (R/D)2 krocích

## Text block 316

SRC

## Text block 317

$\ln P(x|\mathcal{C}_1)P(\mathcal{C} _1) > \ln P(x| \mathcal{C} _2)P(\mathcal{C} _2)$

## Text block 318

LOG

## Text block 319

This is pdfTeX, Version 3.1415926-1.40.9 (MiKTeX 2.7) (preloaded format=latex 2008.11.17) 12 MAR 2009 09:41
entering extended mode
**Text*Box*448
("Text Box 448.tex"
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
No file Text*Box*448.aux.
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
] ("Text Box 448.aux") )
Here is how much of TeX's memory you used:
1393 strings out of 95305
15878 string characters out of 1183061
59708 words of memory out of 1500000
4630 multiletter control sequences out of 110000
5339 words of font info for 22 fonts, out of 1200000 for 2000
14 hyphenation exceptions out of 8191
27i,5n,24p,222b,112s stack positions out of 5000i,500n,10000p,200000b,5000s
Output written on "Text Box 448.dvi" (1 page, 528 bytes).

## Text block 320

CTOP

## Text block 321

190.25

## Text block 322

CLEFT

## Text block 323

246.875

## Text block 324

CWIDTH

## Text block 325

399.5

## Text block 326

CHEIGHT

## Text block 327

26.375

## Text block 328

MAG

## Text block 329

SRC

## Text block 330

$\frac{P(x|\mathcal{C}_1)P(\mathcal{C} _1)}{P(x)} > \frac{P(x| \mathcal{C} _2)P(\mathcal{C} _2)}{P(x)}$

## Text block 331

LOG

## Text block 332

This is pdfTeX, Version 3.1415926-1.40.9 (MiKTeX 2.7) (preloaded format=latex 2008.11.17) 12 MAR 2009 09:43
entering extended mode
**Group*263
("Group 263.tex"
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
No file Group*263.aux.
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
] ("Group 263.aux") )
Here is how much of TeX's memory you used:
1393 strings out of 95305
15854 string characters out of 1183061
59708 words of memory out of 1500000
4630 multiletter control sequences out of 110000
5339 words of font info for 22 fonts, out of 1200000 for 2000
14 hyphenation exceptions out of 8191
27i,5n,24p,219b,112s stack positions out of 5000i,500n,10000p,200000b,5000s
Output written on "Group 263.dvi" (1 page, 656 bytes).

## Text block 333

CTOP

## Text block 334

231.875

## Text block 335

CLEFT

## Text block 336

321.25

## Text block 337

CWIDTH

## Text block 338

397.75

## Text block 339

CHEIGHT

## Text block 340

54.25

## Text block 341

MAG

## Text block 342

SRC

## Text block 343

$P(\mathcal{C}_1|x) > P(\mathcal{C}_2|x)$

## Text block 344

LOG

## Text block 345

This is pdfTeX, Version 3.1415926-1.40.9 (MiKTeX 2.7) (preloaded format=latex 2008.11.17) 12 MAR 2009 09:43
entering extended mode
**Text*Box*584
("Text Box 584.tex"
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
No file Text*Box*584.aux.
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
] ("Text Box 584.aux") )
Here is how much of TeX's memory you used:
1393 strings out of 95305
15878 string characters out of 1183061
59708 words of memory out of 1500000
4630 multiletter control sequences out of 110000
5339 words of font info for 22 fonts, out of 1200000 for 2000
14 hyphenation exceptions out of 8191
27i,5n,24p,222b,112s stack positions out of 5000i,500n,10000p,200000b,5000s
Output written on "Text Box 584.dvi" (1 page, 476 bytes).

## Text block 346

CTOP

## Text block 347

195.625

## Text block 348

CLEFT

## Text block 349

254.375

## Text block 350

CWIDTH

## Text block 351

221.25

## Text block 352

CHEIGHT

## Text block 353

27.375

## Text block 354

MAG

## Text block 355

SRC

## Text block 356

$\ln \frac{P(x|\mathcal{C}_1) P(\mathcal{C} _1)}{P(x| \mathcal{C} _2) P(\mathcal{C} _2)} > 0$

## Text block 357

LOG

## Text block 358

This is pdfTeX, Version 3.1415926-1.40.9 (MiKTeX 2.7) (preloaded format=latex 2008.11.17) 12 MAR 2009 10:01
entering extended mode
**Text*Box*785
("Text Box 785.tex"
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
No file Text*Box*785.aux.
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
] ("Text Box 785.aux") )
Here is how much of TeX's memory you used:
1393 strings out of 95305
15878 string characters out of 1183061
59708 words of memory out of 1500000
4630 multiletter control sequences out of 110000
5339 words of font info for 22 fonts, out of 1200000 for 2000
14 hyphenation exceptions out of 8191
27i,5n,24p,222b,112s stack positions out of 5000i,500n,10000p,200000b,5000s
Output written on "Text Box 785.dvi" (1 page, 644 bytes).

## Text block 359

CTOP

## Text block 360

189.875

## Text block 361

CLEFT

## Text block 362

255.875

## Text block 363

CWIDTH

## Text block 364

217.25

## Text block 365

CHEIGHT

## Text block 366

42.125

## Text block 367

MAG

## Text block 368

SRC

## Text block 369

$y({\bf x})= \ln \frac{P(x|\mathcal{C}_1) P(\mathcal{C} _1)}{P(x| \mathcal{C} _2) P(\mathcal{C} _2)} = {\bf w}^T {\bf x} + w_0$

## Text block 370

LOG

## Text block 371

This is pdfTeX, Version 3.1415926-1.40.9 (MiKTeX 2.7) (preloaded format=latex 2008.11.17) 12 MAR 2009 10:07
entering extended mode
**Text*Box*251
("Text Box 251.tex"
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
No file Text*Box*251.aux.
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
] ("Text Box 251.aux") )
Here is how much of TeX's memory you used:
1399 strings out of 95305
15937 string characters out of 1183061
59708 words of memory out of 1500000
4633 multiletter control sequences out of 110000
6266 words of font info for 25 fonts, out of 1200000 for 2000
14 hyphenation exceptions out of 8191
27i,5n,24p,222b,112s stack positions out of 5000i,500n,10000p,200000b,5000s
Output written on "Text Box 251.dvi" (1 page, 740 bytes).

## Text block 372

CTOP

## Text block 373

174.25

## Text block 374

CLEFT

## Text block 375

233.25

## Text block 376

CWIDTH

## Text block 377

370.125

## Text block 378

CHEIGHT

## Text block 379

37.625

## Text block 380

MAG

## Text block 381

SRC

## Text block 382

$\{\mathbf{\mu}_1, \mathbf{\mu}_2, \mathbf{\Sigma}, P(\mathcal{C}_1), P(\mathcal{C}_2) \} = \displaystyle \arg \max_{\{\mathbf{\mu}_1, \mathbf{\mu}_2, \mathbf{\Sigma} , P(\mathcal{C}_1), P(\mathcal{C}_2)\}} \displaystyle \prod_i p({\bf x}_i | \mathbf{\mu}_{t_i}, \mathbf{\Sigma})P(\mathcal{C}_{t_i})$

## Text block 383

LOG

## Text block 384

This is pdfTeX, Version 3.1415926-1.40.9 (MiKTeX 2.7) (preloaded format=latex 2008.11.17) 9 FEB 2010 19:08
entering extended mode
**Text*Box*633
("Text Box 633.tex"
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
No file Text*Box*633.aux.
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
] ("Text Box 633.aux") )
Here is how much of TeX's memory you used:
1399 strings out of 95305
15937 string characters out of 1183061
59708 words of memory out of 1500000
4633 multiletter control sequences out of 110000
6266 words of font info for 25 fonts, out of 1200000 for 2000
14 hyphenation exceptions out of 8191
27i,5n,24p,393b,112s stack positions out of 5000i,500n,10000p,200000b,5000s
Output written on "Text Box 633.dvi" (1 page, 1016 bytes).

## Text block 385

CTOP

## Text block 386

155.25

## Text block 387

CLEFT

## Text block 388

205.75

## Text block 389

CWIDTH

## Text block 390

659.5

## Text block 391

CHEIGHT

## Text block 392

46.875

## Text block 393

MAG

## Text block 394

Snažíme se data promítnout do takového směru, kde
Maximalizujeme vzdálenost mezi středními hodnotami tříd
Minimalizujeme průměrnou varianci tříd
Maximalizujeme tedy

## Text block 395

Pro dvě třídy je w totožné s tím které jsme obdrželi pro náš generativní klasifikátor.
Generativní klasifikátor ovšem zvolí i práh w0

## Text block 396

SRC

## Text block 397

$ {\bf w}^T {\bf x} + w_0 = \ln \frac{P(x|\mathcal{C}_1) P(\mathcal{C} _1)}{P(x| \mathcal{C} _2) P(\mathcal{C} _2)}$

## Text block 398

LOG

## Text block 399

This is pdfTeX, Version 3.1415926-1.40.9 (MiKTeX 2.7) (preloaded format=latex 2008.11.17) 12 MAR 2009 11:12
entering extended mode
**Text*Box*161
("Text Box 161.tex"
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
No file Text*Box*161.aux.
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
] ("Text Box 161.aux") )
Here is how much of TeX's memory you used:
1399 strings out of 95305
15937 string characters out of 1183061
59708 words of memory out of 1500000
4633 multiletter control sequences out of 110000
6266 words of font info for 25 fonts, out of 1200000 for 2000
14 hyphenation exceptions out of 8191
27i,5n,24p,222b,112s stack positions out of 5000i,500n,10000p,200000b,5000s
Output written on "Text Box 161.dvi" (1 page, 724 bytes).

## Text block 400

CTOP

## Text block 401

174.25

## Text block 402

CLEFT

## Text block 403

233.25

## Text block 404

CWIDTH

## Text block 405

288.75

## Text block 406

CHEIGHT

## Text block 407

37.625

## Text block 408

MAG

## Text block 409

SRC

## Text block 410

$y({\bf x}) = \sigma({\bf w}^T{\bf x} + w_0)$

## Text block 411

LOG

## Text block 412

This is pdfTeX, Version 3.1415926-1.40.9 (MiKTeX 2.7) (preloaded format=latex 2008.11.17) 12 MAR 2009 11:17
entering extended mode
**Text*Box*198
("Text Box 198.tex"
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
No file Text*Box*198.aux.
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
] ("Text Box 198.aux") )
Here is how much of TeX's memory you used:
1399 strings out of 95305
15937 string characters out of 1183061
59708 words of memory out of 1500000
4633 multiletter control sequences out of 110000
6266 words of font info for 25 fonts, out of 1200000 for 2000
14 hyphenation exceptions out of 8191
27i,5n,24p,222b,112s stack positions out of 5000i,500n,10000p,200000b,5000s
Output written on "Text Box 198.dvi" (1 page, 528 bytes).

## Text block 413

CTOP

## Text block 414

179.25

## Text block 415

CLEFT

## Text block 416

234.75

## Text block 417

CWIDTH

## Text block 418

225.375

## Text block 419

CHEIGHT

## Text block 420

MAG

## Text block 421

Kde t je vektor korektních identit tříd ti pro jednotlivé vstupní vektory xn. Pro zjednodušení zápisu předpokládejme, že tn = 1, pokud xn paří do třídy C1 a tn = 0 pokud xn paří do třídy C2.Potom muzeme psát

## Text block 422

SRC

## Text block 423

$p(\mathcal{C}_1|{\bf x}) = y({\bf x}) = \sigma({\bf w}^T{\bf x})$

## Text block 424

LOG

## Text block 425

This is pdfTeX, Version 3.1415926-1.40.9 (MiKTeX 2.7) (preloaded format=latex 2008.11.17) 12 MAR 2009 12:20
entering extended mode
**Text*Box*64
("Text Box 64.tex"
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
No file Text*Box*64.aux.
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
] ("Text Box 64.aux") )
Here is how much of TeX's memory you used:
1399 strings out of 95305
15929 string characters out of 1183061
59708 words of memory out of 1500000
4633 multiletter control sequences out of 110000
6266 words of font info for 25 fonts, out of 1200000 for 2000
14 hyphenation exceptions out of 8191
27i,5n,24p,221b,112s stack positions out of 5000i,500n,10000p,200000b,5000s
Output written on "Text Box 64.dvi" (1 page, 580 bytes).

## Text block 426

CTOP

## Text block 427

179.25

## Text block 428

CLEFT

## Text block 429

234.75

## Text block 430

CWIDTH

## Text block 431

277.125

## Text block 432

CHEIGHT

## Text block 433

MAG

## Text block 434

SRC

## Text block 435

$p({\bf t}|{\bf X}) = \displaystyle\prod_{n \in \mathcal{C}_1} y({\bf x}_n) \prod_{n \in \mathcal{C}_2} (1-y({\bf x}_n)) $

## Text block 436

LOG

## Text block 437

This is pdfTeX, Version 3.1415926-1.40.9 (MiKTeX 2.7) (preloaded format=latex 2008.11.17) 12 MAR 2009 12:45
entering extended mode
**Text*Box*334
("Text Box 334.tex"
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
No file Text*Box*334.aux.
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
] ("Text Box 334.aux") )
Here is how much of TeX's memory you used:
1399 strings out of 95305
15937 string characters out of 1183061
59708 words of memory out of 1500000
4633 multiletter control sequences out of 110000
6266 words of font info for 25 fonts, out of 1200000 for 2000
14 hyphenation exceptions out of 8191
27i,5n,24p,222b,112s stack positions out of 5000i,500n,10000p,200000b,5000s
Output written on "Text Box 334.dvi" (1 page, 748 bytes).

## Text block 438

CTOP

## Text block 439

155.5

## Text block 440

CLEFT

## Text block 441

CWIDTH

## Text block 442

329.625

## Text block 443

CHEIGHT

## Text block 444

49.375

## Text block 445

MAG

## Text block 446

SRC

## Text block 447

$p({\bf t}|{\bf X}) = \displaystyle\prod_{n} y_n^{t_n} (1-y_n) ^{1-t_n} $

## Text block 448

LOG

## Text block 449

This is pdfTeX, Version 3.1415926-1.40.9 (MiKTeX 2.7) (preloaded format=latex 2008.11.17) 14 MAR 2011 17:55
entering extended mode
**Text*Box*483
("Text Box 483.tex"
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
No file Text*Box*483.aux.
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
] ("Text Box 483.aux") )
Here is how much of TeX's memory you used:
1399 strings out of 95305
15937 string characters out of 1183061
59708 words of memory out of 1500000
4633 multiletter control sequences out of 110000
6266 words of font info for 25 fonts, out of 1200000 for 2000
14 hyphenation exceptions out of 8191
27i,5n,24p,222b,112s stack positions out of 5000i,500n,10000p,200000b,5000s
Output written on "Text Box 483.dvi" (1 page, 764 bytes).

## Text block 450

CTOP

## Text block 451

155.5

## Text block 452

CLEFT

## Text block 453

CWIDTH

## Text block 454

259.25

## Text block 455

CHEIGHT

## Text block 456

46.25

## Text block 457

MAG

## Text block 458

SRC

## Text block 459

$\displaystyle \nabla E({\bf w}) = \sum_{n=1}^{N} (y_n-t_n) {\bf x}_n$

## Text block 460

LOG

## Text block 461

This is pdfTeX, Version 3.1415926-1.40.9 (MiKTeX 2.7) (preloaded format=latex 2008.11.17) 9 APR 2010 20:44
entering extended mode
**Group*267
("Group 267.tex"
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
No file Group*267.aux.
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
] ("Group 267.aux") )
Here is how much of TeX's memory you used:
1399 strings out of 95305
15913 string characters out of 1183061
59708 words of memory out of 1500000
4633 multiletter control sequences out of 110000
6266 words of font info for 25 fonts, out of 1200000 for 2000
14 hyphenation exceptions out of 8191
27i,5n,24p,219b,112s stack positions out of 5000i,500n,10000p,200000b,5000s
Output written on "Group 267.dvi" (1 page, 668 bytes).

## Text block 462

CTOP

## Text block 463

160.375

## Text block 464

CLEFT

## Text block 465

209.875

## Text block 466

CWIDTH

## Text block 467

CHEIGHT

## Text block 468

62.375

## Text block 469

MAG

## Text block 470

SRC

## Text block 471

${\bf w}^{(\mathsf{new})} = {\bf w}^{(\mathsf{old})} - ({\bf X}^T {\bf R X})^{-1} {\bf X}^T ({\bf y} - {\bf t}) $

## Text block 472

LOG

## Text block 473

This is pdfTeX, Version 3.1415926-1.40.9 (MiKTeX 2.7) (preloaded format=latex 2008.11.17) 9 APR 2010 20:57
entering extended mode
**Group*126
("Group 126.tex"
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
No file Group*126.aux.
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
] ("Group 126.aux") )
Here is how much of TeX's memory you used:
1404 strings out of 95305
15967 string characters out of 1183061
59708 words of memory out of 1500000
4636 multiletter control sequences out of 110000
7171 words of font info for 28 fonts, out of 1200000 for 2000
14 hyphenation exceptions out of 8191
27i,5n,24p,219b,112s stack positions out of 5000i,500n,10000p,200000b,5000s
Output written on "Group 126.dvi" (1 page, 684 bytes).

## Text block 474

CTOP

## Text block 475

155.875

## Text block 476

CLEFT

## Text block 477

203.125

## Text block 478

CWIDTH

## Text block 479

360.125

## Text block 480

CHEIGHT

## Text block 481

23.5

## Text block 482

MAG

## Text block 483

kde H = XT R X je matice druhých derivací (Hessian matrix).

## Text block 484

R je diagonální matice s hodnotami na diagonále:
