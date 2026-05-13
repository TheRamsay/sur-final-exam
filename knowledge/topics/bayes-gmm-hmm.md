# Bayes, GMM, HMM

## Co umět

- Bayesovo pravidlo, sum rule, product/chain rule.
- MAP klasifikaci a roli apriorní pravděpodobnosti.
- ML/MLE odhad, zejména kategorické rozdělení a gaussovské rozdělení.
- GMM jako model se skrytou proměnnou, `p(x)` a EM kroky.
- HMM: generování `X` ze stavové sekvence `S`, výpočet `p(X|S)`, `P(S)` a `p(X)`, Viterbi.

## Přednášky

- [[slides/sur-prednasky/02_bayesovska_teorie/bayesovska_teorie.pdf|Bayesovská teorie PDF]]
- [[slides/sur-prednasky/02_bayesovska_teorie/EM-GMM.pdf|EM-GMM PDF]]
- [[slides/sur-prednasky/02_bayesovska_teorie/ml_training_of_gmm.ipynb|GMM training notebook]]
- [[slides/sur-prednasky/06_hmm/statistical_models_for_automatic_speech_recognition.pptx|HMM / ASR modely]]
- [[slides/sur-prednasky/06_hmm/ANO_NE_speech_recognition.ipynb|ANO_NE HMM notebook]]

## Interaktivně

<div class="sur-viz" data-sur-viz="bayes-map"></div>

<div class="sur-viz" data-sur-viz="gmm-em"></div>

<div class="sur-viz" data-sur-viz="hmm-viterbi"></div>

## Typické zadání

- Odvoďte ML odhad parametrů kategorického rozdělení.
- Popište EM pro GMM, co se počítá v E a M kroku.
- Pro HMM se stavy `[1,2,2,3]` popište generování dat a výpočet pravděpodobnosti.
- Odvoďte pomocí Bayesova vzorce `P(S|X)`.
