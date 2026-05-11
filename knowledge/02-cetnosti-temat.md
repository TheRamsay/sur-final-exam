# Četnosti témat

Zdroj: `raw/discord-analysis/topic_counts.tsv`, piny, ručně sjednocené termíny a lokální legacy přípravový dokument.

## Automatický signál z Discord oken

| Téma | Mentions | Messages |
|---|---:|---:|
| Klasifikace | 227 | 147 |
| Bayes/pravděpodobnost | 199 | 151 |
| Metriky a evaluace | 128 | 124 |
| HMM/Markov/Viterbi | 105 | 96 |
| Neuronové sítě | 80 | 70 |
| Redukce dimenze | 67 | 51 |
| Regrese | 57 | 46 |
| Weka/nástroje | 27 | 25 |
| KNN | 19 | 18 |
| Automaty a gramatiky | 19 | 19 |
| Shlukování | 15 | 14 |
| Entropie/informace | 14 | 11 |

## Ruční četnost v rekonstruovaných zadáních

| Téma | Výskyt | Typické formulace |
|---|---:|---|
| [[knowledge/topics/bayes-gmm-hmm|Bayes/GMM/HMM]] | velmi vysoký | Bayesovo pravidlo, GMM `p(x)`, EM, HMM `p(X|S)`, Viterbi |
| [[knowledge/topics/linearni-klasifikatory|Lineární klasifikátory]] | velmi vysoký | logistická regrese, lineární gaussovský klasifikátor, perceptron |
| [[knowledge/topics/svm-kernel|SVM/kernel]] | vysoký | SVM rovnice, kernel funkce, polynomial kernel, slack variables |
| [[knowledge/topics/pca-lda-transformace|PCA/LDA/transformace]] | vysoký | směr LDA/PCA, vlastní čísla, transformace kovariance |
| [[knowledge/topics/softmax-cross-entropy|Softmax/cross entropy]] | vysoký | softmax vs sigmoid, multiclass CE, výpočet CE |
| [[knowledge/topics/nn-gradienty|NN/gradienty]] | střední až vysoký | Jacobian, backprop, ReLU/sigmoid síť |
| [[knowledge/topics/metriky-det|DET/metriky]] | střední | DET, threshold, false alarm/miss |
| [[knowledge/topics/knn-regularizace-validace|KNN/regularizace/validace]] | doplňkový | KNN soft decision, regularizace, normalizace, cross-validace |

## Doplňkový signál z legacy zipu

Legacy přípravový dokument nepřepisuje hlavní priority, ale přidává několik okruhů, které v Discord rekonstrukci nebyly tak explicitní:

| Téma | Dopad na přípravu |
|---|---|
| KNN | umět hard/soft decision, výhody a nevýhody |
| Regularizace | častá praktická otázka u logistické regrese / generalizace |
| Diagonální kovariance | vrstevnice, nezávislost příznaků, `p(x1|x2)` |
| MFCC | umět stručný pipeline extrakce příznaků |
| Normalizace a cross-validace | hlavně jako NN/generalizace doplněk |
| Obrazové příznaky a shlukování | nízká priorita pro aktuální SUR, ale objevuje se ve starších IKR otázkách |
