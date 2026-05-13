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

## Oficiální přednášky k průchodu

1. [[slides/sur-prednasky/02_bayesovska_teorie/bayesovska_teorie.pdf|Bayesovská teorie]] a [[slides/sur-prednasky/02_bayesovska_teorie/EM-GMM.pdf|EM-GMM]] pro Bayes/MAP/MLE/GMM/EM.
2. [[slides/sur-prednasky/04_lin_klasifikatory/lin_klasifikatory.pdf|Lineární klasifikátory]] pro perceptron, logistiku, generativní lineární klasifikátor a LDA classifier.
3. [[slides/sur-prednasky/05_neral_networks/NN_CNN_SVM.pdf|NN_CNN_SVM]] a [[slides/sur-prednasky/05_neral_networks/SVM.ipynb|SVM notebook]] pro NN, softmax, SVM a kernel.
4. [[slides/sur-prednasky/06_hmm/statistical_models_for_automatic_speech_recognition.pptx|HMM / ASR modely]] a [[slides/sur-prednasky/06_hmm/ANO_NE_speech_recognition.ipynb|ANO_NE notebook]] pro HMM/Viterbi.
5. [[slides/sur-prednasky/03_extrakce_priznaku/extrakce_priznaku.pdf|Extrakce příznaků]] a [[slides/sur-prednasky/03_extrakce_priznaku/LDA.ipynb|LDA notebook]] pro MFCC, transformace, PCA/LDA doplňky.

## Doplněk po legacy zipu

Nový legacy přípravový dokument přidává hlavně podpůrné otázky. Do první/druhé vlny bych je nezařadil před Bayes/GMM/HMM, ale před zkouškou stojí za krátký průchod:

1. Regularizace a generalizace u logistické regrese.
2. KNN: hard/soft decision, role `k`, výhody a nevýhody.
3. Diagonální kovariance: nezávislost příznaků a tvar vrstevnic.
4. MFCC pipeline.
5. Normalizace dat a cross-validace u neuronových sítí.

Legacy obrazové okruhy jako LBP, integrální obraz, Hough, Viola-Jones, ko-okurenční matice a AdaBoost jsou nízká priorita, pokud se držíme současného SUR stylu.
