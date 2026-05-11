# Opakování otázek po letech

## Závěr

Zadání není náhodný výběr z celé látky. V moderních finálních termínech se opakuje malá sada archetypů, jen se mění úhel otázky: jednou se kreslí hranice, jindy se odvozuje vzorec, jindy se počítá konkrétní parametr.

Pro praktické učení to znamená:

1. Každý termín čekej kombinaci pravděpodobnostních modelů, lineárních klasifikátorů, SVM/kernelu, HMM/Viterbi, PCA/LDA/kovariance a softmax/cross entropy.
2. Burget často zkouší porozumění: nestačí napsat vzorec, musíš umět říct, co člen znamená, proč se minimalizuje/maximalizuje a jak by se změnila hranice.
3. Přesné formulace se opakují hlavně jako archetypy. Například "kernel funkce: vstup, výstup, proč" se vrací opakovaně, ale jednou jako definice, podruhé jako rozpis polynomial kernelu a potřetí jako kreslení nelineární hranice.
4. Opravné termíny často recyklují více než polovinu banky ze stejného roku, ale zamění konkrétní čísla, model nebo požadovaný směr odvození.

## Váha zdrojů

Moderní finální termíny s největší váhou:

- [[knowledge/exams/2024-2025/term-1-radny|2024/2025 řádný]]
- [[knowledge/exams/2024-2025/term-2-prvni-opravny-fragment|2024/2025 1. opravný fragment]]
- [[knowledge/exams/2023-2024/term-1-radny|2023/2024 řádný]]
- [[knowledge/exams/2023-2024/term-2-prvni-opravny|2023/2024 1. opravný]]
- [[knowledge/exams/2022-2023/term-1-radny|2022/2023 řádný]]
- [[knowledge/exams/2021-2022/term-1-radny|2021/2022 řádný]]
- [[knowledge/exams/2020-2021/term-1-a-2-fragment|2020/2021 řádný podle studentského guide]]
- [[knowledge/exams/2019-2020/term-1-radny|2019/2020 řádný]]

Podpůrné zdroje:

- Půlsemestrálky: dobré na aktuální důraz, ale nejsou finální termín.
- Fragmenty dalších opravných: dobré na potvrzení opakování, ale ne na přesné počty.
- [[knowledge/exams/2015-2016/2016-05-17-ikr-question-bank|2016 otázkový dokument]] a [[knowledge/exams/legacy/pre-2016-fit-guide|legacy FIT/IKR guide]]: zdroj starší banky, ze které se recyklují koncepty.

## Hrubá míra opakování

Počítáno nad osmi moderními finálními/finálně použitelnými zdroji 2019/2020 až 2024/2025. Půlsemestrálky a legacy nejsou v čitateli, ale jsou uvedené jako podpůrný signál.

| Téma / archetyp | Moderní finální zdroje | Míra opakování | Co to prakticky znamená |
|---|---:|---|---|
| Lineární, logistické a gaussovské klasifikátory | 8/8 | extrémní | téměř jistota, často odvození nebo kreslení hranice |
| SVM, slack, kernel, nelineární mapování | 8/8 | extrémní | naučit formálně rovnici i intuitivně kernel trick |
| HMM, Markov, Viterbi, `p(X,S)`, `p(X)` | 8/8 | extrémní | opakuje se generování sekvence a sumace přes skryté stavy |
| GMM, EM, MLE, gaussovské modely | 8/8 | extrémní | MLE/EM/GMM se vrací v různých převlecích |
| PCA, LDA, kovariance, vlastní čísla, transformace | 8/8 | extrémní | umět geometrii i maticový výpočet po transformaci |
| Softmax, sigmoid, cross entropy, multiclass logistická regrese | 8/8 | extrémní | často výpočet nebo vztah softmax-sigmoid |
| Neuronové sítě, backprop, Jacobian, Newton/gradient | asi 6/8 | vysoká | spíš jedna až dvě otázky, často navázané na derivaci |
| Regularizace, overfitting, generalizace | asi 4/8 | střední | menší téma, ale když přijde, chce se slovní pochopení |
| DET, threshold, false alarm/miss | asi 2/8 finálně, silně v půlsemestrálkách | střední až aktuálně vysoká | nechodí každý finální rok, ale 2025/2026 pin ho zesiluje |
| MFCC / feature extraction | asi 2/8 finálně + fragmenty | doplňkové | typicky stručný popis pipeline |
| KNN | asi 1/8 finálně + legacy | nízké pro aktuální finále | umět soft/hard decision, ale ne před core tématy |

## Rok po roce

### 2025/2026 - aktuální signál, ne finální termín

Zdroj: [[knowledge/exams/2025-2026/pulsemka-2026-signal|aktuální/půlsemestrální pin]].

| Zachycené otázky | Témata | Opakuje co |
|---|---|---|
| GMM + EM: kroky, iterace, zastavení, data | GMM/EM | 2019 EM, 2020 hard-EM, 2022 EM, 2023 půlsemestrálka EM, 2024 GMM `p(x)` |
| Softmax pro dvě třídy a vztah k sigmoidu | softmax/sigmoid | 2024 opravný "odvoďte sigmoid ze softmaxu", 2020/2021/2022/2023 softmax |
| DET křivka, osy, výpočet, log scale | DET | 2019 řádný, 2022/2023 půlsemestrálky, 2024/2025 řádný |
| PCA vs LDA: zaměření a chyby | PCA/LDA | 2022/2023, 2023/2024 a 2024/2025 LDA/PCA formulace |
| Kategorická cross entropy na datech | cross entropy | 2020, 2022, 2023, 2024/2025 |
| Bayesovo pravidlo pro klasifikátory | Bayes/MAP | 2018/2019, 2019/2020 pravděpodobnostní úloha, legacy |
| Lineární klasifikátor/LDA: odvodit rovnici | lineární gaussovský klasifikátor, LDA | 2021, 2022, 2023, 2024/2025 |

Interpretace: aktuální signál je hodně "core". Neobsahuje zatím SVM/HMM, ale historicky bych je z přípravy nevyhazoval, protože finální termíny je mají skoro pořád.

### 2024/2025

Zdroj: [[knowledge/exams/2024-2025/term-1-radny|řádný]] a [[knowledge/exams/2024-2025/term-2-prvni-opravny-fragment|1. opravný fragment]].

| Termín | Otázky / archetypy | Co se opakuje |
|---|---|---|
| Řádný | lineární klasifikátor z vícerozměrného Gaussu; cross entropy pro více tříd; GMM `p(x)`; DET; binární NN a derivace; kernel funkce; transformace Gaussu; rozhodovací hranice logreg/SVM/polynomial kernel; HMM `P(X)`, `P(S)`; LDA/PCA báze; multiclass logistická regrese s vahami | skoro celá sada 2023/2024, jen v jiném pořadí a s novými konkrétními daty |
| 1. opravný fragment | GMM `P(x)`; Jacobian `y=Wx+b`; Newton vs gradient descent; výpočet cross entropy; vlastní čísla kovariance; SVM polynomial kernel a rozpis; HMM generování a hustota `X`; diskriminativní modely; sigmoid ze softmaxu; binární lineární klasifikátor + CE | recykluje GMM, CE, SVM/kernel, HMM, gaussovské kovariance, softmax/logistiku; přidává silnější NN/optimalizační blok |

Silný pattern: řádný i opravný sdílí GMM, CE, SVM/kernel, HMM, gaussovské transformace/kovariance a logistickou klasifikaci. Opravný častěji mění "popiš" na "spočítej/rozepiš".

### 2023/2024

Zdroje: [[knowledge/exams/2023-2024/term-1-radny|řádný]], [[knowledge/exams/2023-2024/term-2-prvni-opravny|1. opravný]], [[knowledge/exams/2023-2024/term-3-dalsi-opravny-fragment|další opravný fragment]], [[knowledge/exams/2023-2024/pulsemka-2023-2024|půlsemestrálka]].

| Termín | Otázky / archetypy | Co se opakuje |
|---|---|---|
| Půlsemestrálka | kovariance a vlastní čísla; DET; EM pro GMM; likelihood v MAP; MLE kategorického rozdělení; generativní lineární klasifikátor; LDA a vlastní čísla | předznamenává řádný termín: MLE, LDA, gaussovský klasifikátor, transformace |
| Řádný | MLE kategorického rozdělení; multiclass logistická regrese v 3D/4 třídách; HMM generování dat; cross entropy; softmax all-equal; LDA z `W_ac/W_wc`; hranice perceptron/logreg/SVM/kernel; regularizace; SVM rovnice bez slack; transformace `x ~ N(0,I)`; lineární gaussovský klasifikátor | extrémně podobné 2022 a 2024; mnoho položek je stejný archetyp s jinými čísly |
| 1. opravný | MLE; multiclass logistická regrese s konkrétními vahami; nelineární mapování; LDA z `Wc/Wac`; kernel; GMM; binární NN a derivace; transformace Gaussu; Jacobian; gaussovský lineární klasifikátor; HMM přes Bayese `P(S|X)` | sdílí s řádným MLE, logistiku, LDA, kernel/SVM, transformace, gaussovský klasifikátor, HMM |
| Další opravný fragment | Jacobiany; NN/ReLU; backprop; MFCC; Viterbi; multiclass logistická regrese; nezávislé 1D Gaussy jako společné 2D rozložení; generativní vs diskriminativní; multiclass CE | potvrzuje, že na opravných rotují NN/Jacobian, HMM/Viterbi, multiclass logistika a CE |

Silný pattern: 2023/2024 je nejlepší ukázka stylu. Stejné jádro se vrací ve všech termínech, jen se posouvá forma: řádný je víc "vysvětli/odvoď", opravný víc "spočítej z konkrétních vah".

### 2022/2023

Zdroje: [[knowledge/exams/2022-2023/term-1-radny|řádný]], [[knowledge/exams/2022-2023/pulsemka-2023|půlsemestrálka]].

| Termín | Otázky / archetypy | Co se opakuje |
|---|---|---|
| Půlsemestrálka | ML kategorické rozdělení; Viterbi; PCA/LDA a vlastní čísla; MFCC; DET; nulové vlastní číslo; diagonální kovariance a podmíněné hustoty | menší banka, ale téměř vše se objevuje později ve finálních termínech nebo 2023/2024 půlsemestrálce |
| Řádný | MLE diskrétní/kategorické; logistická regrese jako lineární klasifikátor; hranice perceptron/lineární metoda/SVM/SVM s kvadratickým kernelem; softmax; Viterbi; HMM; gaussovský lineární klasifikátor; transformace kovariance; LDA; EM; cross entropy; doplněk: 3D/4 třídy logistická regrese; nelineární problémy lineárními klasifikátory | prakticky přímý předchůdce 2023/2024: MLE, multiclass logistika, SVM/kernel, HMM, LDA, EM, CE |

Silný pattern: 2022/2023 už obsahuje většinu současné core banky. Kdo umí 2022 řádný + 2023 řádný, pokryje velkou část 2024/2025.

### 2021/2022

Zdroj: [[knowledge/exams/2021-2022/term-1-radny|řádný]].

| Otázky / archetypy | Co se opakuje |
|---|---|
| LDA dimenze; perceptron učení; SVM rovnice; jednoduchá NN nastavená na třídu B; generativní systémy; GMM latentní složka; Markovské modely se známými/neznámými stavy; Viterbi trénování; návrh klasifikátoru pro obrázek; regularizace; lineární klasifikátor ze dvou Gaussů se stejnou kovariancí; multiclass logistika; softmax; MFCC | stejná sestava jako později: SVM, HMM/Viterbi, GMM, lineární gaussovský klasifikátor, multiclass logistika, softmax; navíc MFCC a regularizace |

Silný pattern: rok 2021/2022 je méně konkrétní paměťový seznam, ale tematicky sedí přesně na moderní core.

### 2020/2021

Zdroj: [[knowledge/exams/2020-2021/term-1-a-2-fragment|řádný podle studentského guide + 1. opravný fragment]].

| Otázky / archetypy | Co se opakuje |
|---|---|
| rozhodovací čára logistické regrese; generalizace; regularizace; generativní model; Viterbi/hard-EM pro GMM; Newton-Raphson vs gradient descent; MFCC; polynomial kernel; softmax; cross entropy; logistická regrese vs lineární gaussovský klasifikátor; diagonální Gauss a podmíněné hustoty; perceptron; PCA; SVM se slack; HMM `p(X,S)` a `p(X)` | mnoho přesných archetypů později: regularizace, GMM/EM, kernel, softmax/CE, gaussovský klasifikátor, PCA, SVM slack, HMM |

Poznámka: ve zdroji je explicitní signál, že 1. opravný měl "více než polovinu otázek prakticky stejných jako řádný a zbytek jednodušší". To podporuje závěr, že opravné termíny silně recyklují banku.

### 2019/2020

Zdroje: [[knowledge/exams/2019-2020/term-1-radny|řádný]], [[knowledge/exams/2019-2020/term-2-opravny-fragment|opravný fragment]].

| Termín | Otázky / archetypy | Co se opakuje |
|---|---|---|
| Řádný | nemoc/test pravděpodobnost; rozhodovací hranice a overfitting; DET/threshold; KNN `k`; MLE; kovarianční transformace `y=Ax`; regularizace; softmax; EM; 2D Gauss, marginály a podmíněné hustoty; logistická regrese vs gaussovský lineární klasifikátor; gradient descent/backprop; lineární hranice; SVM; kernel; HMM | už obsahuje skoro celou moderní sadu, jen více rozptýlenou |
| Opravný fragment | převážně otázkový dokument; pravděpodobnostní úloha kolem `0,185`; CNN; PCA/LDA; HMM; lineární/logistické klasifikátory; SVM | důkaz recyklace staré otázkové banky |

Silný pattern: 2019/2020 má nejširší seznam. Část side témat jako KNN/CNN už později slábne, ale core zůstává.

### 2018/2019 a starší

Zdroje: [[knowledge/exams/2018-2019/pulsemka-2019|2018/2019 půlsemestrálka]], [[knowledge/exams/2015-2016/2016-05-17-ikr-question-bank|2016 IKR/SUR otázkový dokument]], [[knowledge/exams/legacy/pre-2016-fit-guide|legacy FIT/IKR guide]].

| Zdroj | Co přidává | Aktuální relevance |
|---|---|---|
| 2018/2019 půlsemestrálka | KNN soft decision; DET chyby; GMM pro třídy; diagonální kovariance; MAP posterior; vlastní číslo 0; Bayes product/sum rule | podpůrné, hlavně Bayes/GMM/DET/kovariance |
| 2016 otázkový dokument | 48 otázek: DET, generativní vs diskriminativní, KNN, Bayes/MAP, MLE/GMM/EM, feature extraction, PCA/LDA, lineární klasifikátory, NN/backprop, SVM/kernel/slack, HMM | vysoká jako otázková banka, ale ne jako predikce přesného moderního termínu |
| Legacy 2009-2014 | starší formulace Bayes/MAP, MLE, LDA, perceptron, KNN, DET, GMM, HMM, SVM, plus obrazové příznaky a shlukování | core koncepty ano; obrazové/shlukovací věci nízká priorita |

## Nejčastější konkrétní archetypy

| Archetyp | Roky / zdroje | Jak se mění formulace |
|---|---|---|
| MLE pro kategorické/diskrétní rozdělení | 2020 signál, 2022, 2023 řádný, 2023 opravný, půlsemestrálky 2022/2023 | odvodit `n_c/N`, někdy s Lagrange multiplikátorem, někdy jen vysvětlit |
| Lineární gaussovský klasifikátor | 2019, 2020, 2021, 2022, 2023, 2024 | jednou porovnání s logistickou regresí, jindy odvození vah a biasu, jindy kreslení hranice |
| Multiclass logistická regrese | 2021, 2022, 2023 řádný, 2023 opravný, 2024 řádný | počet parametrů, konkrétní váhy/biasy, odvození `p(C|x)` |
| Softmax a sigmoid | 2019, 2020, 2021, 2022, 2023, 2024 opravný, 2025/2026 pin | definice, výsledek pro stejné vstupy, vztah 2-class softmaxu k sigmoidu |
| Cross entropy | 2020, 2022, 2023 řádný, 2023 fragment, 2024 řádný, 2024 opravný, 2025/2026 pin | vzorec, použití, výpočet z dat, interpretace členů |
| SVM rovnice | 2021, 2023 řádný, 2020/2024 přes slack/kernel | vysvětlit podmínky, proč minimalizujeme normu, co jsou slack variables |
| Kernel funkce | 2019, 2020, 2022, 2023, 2024 | vstup/výstup, polynomial kernel, rozpis na skalární součin, proč pomáhá nelineárně |
| HMM výpočty | 2019, 2020, 2021, 2022, 2023, 2024 | `p(X|S)`, `P(S)`, `p(X,S)`, `p(X)` sumací, `P(S|X)` přes Bayese, Viterbi |
| GMM a EM | 2019, 2020, 2021, 2022, 2023, 2024, 2025/2026 pin | `p(x)`, latentní složka, E/M krok, hard-EM/Viterbi training |
| PCA/LDA/kovariance | 2019, 2020, 2021, 2022, 2023, 2024, 2025/2026 pin | vlastní čísla, `y=Ax`, `Wc/Wac`, PCA vs LDA, geometrie směru |
| DET | 2019, půlsemestrálky 2022/2023, 2024 řádný, 2025/2026 pin | osy, threshold, false alarm/miss, lepší systém |
| NN derivace/Jacobian | 2019, 2020, 2021, 2023 opravné, 2024 | nastavit vstup, derivovat chybu podle váhy, Jacobian `y=Wx+b`, backprop |
| MFCC | 2020, 2021, 2022 půlsemestrálka, 2023 fragment | vždy spíš "co je a jak se získá" |

## Co se dá čekat v jednom termínu

Typický moderní termín má kolem 11-16 položek. Rozumný odhad:

- 7-10 položek bude z úplně opakovaného core: lineární/Gauss/logreg, SVM/kernel, HMM, GMM/EM/MLE, PCA/LDA/kovariance, softmax/CE.
- 1-3 položky budou výpočetní varianty stejného core: konkrétní váhy, konkrétní kovarianční matice, konkrétní sekvence stavů, konkrétní cross entropy.
- 0-2 položky budou doplňky: MFCC, Newton, Jacobian, regularizace, DET, KNN.
- Legacy obrazové/shlukovací otázky mají nízkou prioritu pro současný SUR, pokud se neobjeví nový explicitní signál.

## Jak se učit podle opakování

Priorita A: umět formálně i intuitivně.

- Bayes/MAP/MLE, GMM/EM.
- Lineární gaussovský klasifikátor, logistická regrese, generativní vs diskriminativní.
- HMM: `p(X|S)`, `P(S)`, `p(X,S)`, `p(X)`, `P(S|X)`, Viterbi.
- SVM: margin, podmínky, slack, kernel, polynomial expansion.
- PCA/LDA, kovariance, vlastní čísla, transformace.
- Softmax, sigmoid, cross entropy.

Priorita B: umět stručně a bez paniky.

- NN dopředný výpočet, backprop, Jacobian, Newton vs gradient descent.
- DET, false alarm/miss, threshold.
- Regularizace, overfitting, generalizace.
- MFCC pipeline.

Priorita C: jen rychlé pokrytí.

- KNN soft/hard decision.
- Normalizace/cross-validace.
- Legacy obrazové příznaky a shlukování.

## Krátká odpověď na "jak moc se to opakuje"

Hodně. Na úrovni témat se core opakuje skoro pořád. Na úrovni přesných zadání se opakuje středně: málokdy přijde úplně doslovná otázka, ale velmi často přijde stejný archetyp s jiným číslem, jinou maticí nebo opačným směrem odvození.

Nejlepší predikce není memorovat konkrétní větu z minulého roku, ale umět pro každý archetyp tři režimy:

1. slovně vysvětlit význam,
2. formálně zapsat vzorec a odvození,
3. použít ho na malý konkrétní příklad nebo nákres.
