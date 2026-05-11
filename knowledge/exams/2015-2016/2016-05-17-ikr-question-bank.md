# 2016-05-17 - IKR/SUR otázkový dokument

## Metadata

| Pole | Hodnota |
|---|---|
| Akademický rok | 2015/2016 |
| Datum v dokumentu | 17. 5. 2016 |
| Předmět v dokumentu | IKR |
| Vztah k SUR | starý otázkový základ; opakovaně zmiňovaný v SUR kanálu |
| Forma | PDF, textově extrahované |

## Stav verifikace

| Pole | Hodnota |
|---|---|
| Verifikační status | `legacy doc` |
| Primární zdroj | lokální pinové PDF `ikr_otazky.pdf` |
| Doplňkový zdroj | lokální legacy zip obsahuje stejné zadání a studentské řešení v PDF/DOCX |

## Obsah

Dokument obsahuje 48 starších otázek. V SUR konverzaci se používá jako guide, ze kterého se mnoho pozdějších otázek recykluje.

Hlavní bloky:

1. DET křivka a generalizace.
2. Generativní vs diskriminativní modely.
3. KNN.
4. Bayes, MAP, apriorní pravděpodobnost, pravděpodobnostní příklady.
5. ML/MLE, GMM a EM.
6. Feature extraction.
7. Transformace gaussovských dat, PCA/LDA.
8. Lineární klasifikátory, logistická regrese, perceptron.
9. Neuronové sítě, gradient descent, backprop, CNN/RNN.
10. SVM, kernel, slack variables.
11. HMM a Viterbi-like výpočty.

## Poznámky

- Není to oficiální SUR termín, ale v konverzaci 2020-2025 slouží jako referenční otázková banka.
- Zvlášť důležité jsou otázky 10-11, 14-18, 20-32, 39-48.
- Studentské řešení v legacy zipu nepřidává nové otázky, ale potvrzuje několik častých výkladových pastí:
  - kernel function u SVM není jen "mapování do vyšší dimenze", ale efektivní výpočet skalárního součinu v rozšířeném prostoru;
  - backpropagation je způsob výpočtu gradientu pro gradient descent, ne samostatná optimalizační metoda;
  - u HMM je skrytá stavová sekvence, ne parametry modelu;
  - `p(X)` u HMM se získá sumací `p(X,S)` přes všechny možné skryté sekvence stavů;
  - generativní a diskriminativní klasifikátor mohou mít stejnou tvarovou formu posterioru, ale liší se odhadovanými veličinami a předpoklady.
