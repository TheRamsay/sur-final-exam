# ROI plán

## Naučit jako první

1. Bayes, MAP, pravděpodobnostní pravidla, ML/MLE.
2. Gaussovské modely, GMM, EM, lineární gaussovský klasifikátor.
3. HMM: generování sekvence, `p(X|S)`, `P(S)`, `p(X)`, Viterbi.
4. Softmax, sigmoid, multiclass cross entropy.
5. Lineární klasifikátory: logistická regrese, perceptron, SVM, generativní vs diskriminativní.

## Druhá vlna

1. PCA vs LDA, vlastní čísla kovarianční matice, transformace `y = Ax`.
2. DET křivka, false alarm/miss, threshold, interpretace systému.
3. Kernel trick, polynomial kernel, slack variables.
4. Neuronové sítě: dopředný výpočet, backprop, Jacobian, gradient descent, Newton-Raphson.
5. MFCC a feature extraction.

## Praktický závěr

Největší návratnost mají opakované formulace: MLE kategorického rozdělení, HMM sekvence, lineární gaussovský klasifikátor, LDA/PCA a SVM/kernel. Roky 2024 a 2025 jsou nejpodobnější aktuálnímu stylu zadání.

## Doplněk po legacy zipu

Nový legacy přípravový dokument přidává hlavně podpůrné otázky. Do první/druhé vlny bych je nezařadil před Bayes/GMM/HMM, ale před zkouškou stojí za krátký průchod:

1. Regularizace a generalizace u logistické regrese.
2. KNN: hard/soft decision, role `k`, výhody a nevýhody.
3. Diagonální kovariance: nezávislost příznaků a tvar vrstevnic.
4. MFCC pipeline.
5. Normalizace dat a cross-validace u neuronových sítí.

Legacy obrazové okruhy jako LBP, integrální obraz, Hough, Viola-Jones, ko-okurenční matice a AdaBoost jsou nízká priorita, pokud se držíme současného SUR stylu.
