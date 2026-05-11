# 2020/2021 - řádný termín a 1. opravný fragment

## Metadata

| Pole | Hodnota |
|---|---|
| Akademický rok | 2020/2021 |
| Termíny | řádný + 1. opravný fragment |
| Datum zdrojů | 28. 5. 2021 až 1. 6. 2021 |
| Forma | konverzace + studentský přípravový dokument |

## Stav verifikace

| Pole | Hodnota |
|---|---|
| Verifikační status | `student guide + fragment` |
| Pin | lokální Discord pin se sdíleným dokumentem s odpověďmi k řádnému |
| Primární konverzační zdroje | `2021-05-29`, `2021-06-01` |
| Doplňkový zdroj | lokální legacy přípravový dokument |

## Řádný termín podle studentského guide

Studentský dokument tvrdí, že jde o odpovědi vyplněné na testu s výsledkem 54/60. Není to oficiální zadání, ale je to výrazně přesnější než původní konverzační fragment.

1. Zakreslit rozhodovací čáru natrénované logistické regrese do 2D dat bez regularizace. Vysvětlit, co čára znamená a jakou další informaci nese výstup klasifikátoru.
2. Posoudit, zda model z předchozí otázky generalizuje, a vysvětlit proč.
3. Regularizace: co znamená a proč se používá.
4. Generativní model: co je, jak se používá v lineárním klasifikátoru a uvést příklad generativního klasifikátoru.
5. Viterbi/hard-EM trénování u GMM: popsat dva kroky a vzorce pro výpočet gaussovských parametrů.
6. Newton-Raphson: jak se liší od gradient descent, na čem je založen a jaké má výhody.
7. MFCC: co jsou, k čemu se používají a jak se extrahují.
8. Kernel `K(x,y) = (1 + xy)^2`: určit typ kernelu a vysvětlit proč.
9. Softmax: co představuje, jaký má vstup/výstup a kde se používá.
10. Cross entropy: co představuje a u kterých modelů se používá.
11. Logistická regrese vs lineární gaussovský klasifikátor se sdílenou kovarianční maticí: stejná posteriorní forma, ale odlišný princip učení, výhody a nevýhody.
12. Lineární/gaussovský model s `x = [x1,x2]`, `mu = [mu1,mu2]` a diagonální kovarianční maticí: vyjádřit `p(x1)`, `p(x2)`, `p(x1|x2)`, `p(x2|x1)` a vysvětlit nezávislost.
13. Perceptron: učicí algoritmus, co znamená řešení a co musí platit, aby se našlo.
14. PCA: co je, k čemu slouží a jaké matematické operace používá.
15. SVM se slack variables: objektivní funkce a význam slack proměnných.
16. HMM: spočítat `p(X,S)` pro `S = [1,2,3,3]` a rámce `[x1,x2,x3,x4]`; pokud jsou známy pravděpodobnosti všech možných sekvencí, získat `p(X)` sumací přes sekvence.

## Konverzační signály

1. V diskusi se řešilo, zda rozhodovací hranice logistické regrese měla být přímka nebo obtažení bodů. Studentský guide potvrzuje lineární rozhodovací čáru.
2. Objevila se otázka na SVM, kernel function, SVM slack a Markov/HMM; studentský guide je potvrzuje.
3. HMM: v konverzaci se objevila varianta stavové sekvence `[1,2,2,3]`; studentský guide má `[1,2,3,3]`. Obě formulace jsou stejný typ výpočtu.
4. Pravděpodobnostní úloha s nemocí/testem: `1 %` populace má nemoc, `P(pozitivní|nemoc)=0,5`, `5 %` zdravých má pozitivní test; počítalo se `P(pozitivní)`, v diskusi se objevuje výsledek `0,0545`.
5. ML odhad kategorického rozdělení: odvodit `P(c)=n_c/N`, s Lagrange multiplikátorem kvůli sumě pravděpodobností.
6. 1. opravný měl podle účastníků více než polovinu otázek prakticky stejných jako řádný a zbytek jednodušší.

## Co je nové oproti původní databázi

- Přibyl téměř kompletní seznam řádného termínu 2021.
- Nově potvrzené / zesílené položky: regularizace, MFCC, cross entropy, hard-EM/Viterbi training u GMM, diagonální kovariance a nezávislost příznaků.

## Poznámky k nejistotám

- Studentský guide není oficiální zadání, ale je konkrétnější než původní Discord fragment.
- Externí sdílený dokument z Discord pinu nebyl přímo stažen; lokální legacy PDF/DOCX je nezávislá kopie studentské přípravy.
