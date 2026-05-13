# KNN, regularizace a validace

## Co umět

- KNN hard decision: třída je určena většinou mezi `k` nejbližšími sousedy.
- KNN soft decision: `P(C=c|x) = pocet_sousedu_tridy_c / k`.
- Role `k`: malé `k` může přeučit, velké `k` vyhlazuje hranici.
- Výhody KNN: jednoduchost, žádné trénování, snadné přidávání dat.
- Nevýhody KNN: pomalá klasifikace pro velká data, citlivost na škálování příznaků, šum a dimenzi.
- Regularizace: omezuje složitost modelu / velikost vah, aby model lépe generalizoval.
- Normalizace na nulovou střední hodnotu a jednotkový rozptyl: zrychluje a stabilizuje učení, hlavně u NN a gradientních metod.
- Cross-validace / validační sada: slouží k odhadu generalizace a ladění hyperparametrů.

## Přednášky

- [[slides/sur-prednasky/02_bayesovska_teorie/SUR-gaussians.ipynb|SUR gaussians notebook]] pro KNN příklad.
- [[slides/sur-prednasky/01_uvod/SUR_uvod.pdf|SUR úvod]] pro generalizaci/testování.
- [[slides/sur-prednasky/05_neral_networks/NN_CNN_SVM.pdf|NN_CNN_SVM]] pro regularizaci a učení modelů v širším kontextu.

## Typické formulace

- Popište, jak funguje měkké rozhodování u KNN.
- Jak vybrat parametr `k` a co se stane při příliš malém nebo příliš velkém `k`.
- Co je regularizace a proč ji používáme.
- Jak regularizace ovlivní rozhodovací hranici logistické regrese.
- Proč normalizujeme data před učením neuronové sítě.
- K čemu se používá validační / cross-validační sada.

## Formální minimum

KNN soft decision:

```text
P(C=c|x) = N_c(x) / k
```

kde `N_c(x)` je počet sousedů mezi `k` nejbližšími trénovacími vzory, které patří do třídy `c`.

Regularizovaný trénink se typicky zapisuje jako minimalizace chyby s penalizací:

```text
E_reg(w) = E_data(w) + lambda R(w)
```

kde `R(w)` penalizuje složitost modelu, často velikost vah.

## Relevance

Zip z legacy přípravy tato témata výrazně zesílil, ale pořád jsou pod hlavními okruhy Bayes/GMM/HMM, lineární klasifikátory, PCA/LDA, softmax/cross entropy a SVM.
