# Bayes, GMM, HMM

## Co umět

- Bayesovo pravidlo, sum rule, product/chain rule.
- MAP klasifikaci a roli apriorní pravděpodobnosti.
- ML/MLE odhad, zejména kategorické rozdělení a gaussovské rozdělení.
- GMM jako model se skrytou proměnnou, `p(x)` a EM kroky.
- HMM: generování `X` ze stavové sekvence `S`, výpočet `p(X|S)`, `P(S)` a `p(X)`, Viterbi.

## Interaktivně

<div class="sur-viz" data-sur-viz="bayes-map"></div>

<div class="sur-viz" data-sur-viz="gmm-em"></div>

<div class="sur-viz" data-sur-viz="hmm-viterbi"></div>

## Typické zadání

- Odvoďte ML odhad parametrů kategorického rozdělení.
- Popište EM pro GMM, co se počítá v E a M kroku.
- Pro HMM se stavy `[1,2,2,3]` popište generování dat a výpočet pravděpodobnosti.
- Odvoďte pomocí Bayesova vzorce `P(S|X)`.
