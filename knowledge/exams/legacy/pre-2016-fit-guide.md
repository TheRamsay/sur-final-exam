# Legacy FIT/IKR otázky 2009-2014

## Metadata

| Pole | Hodnota |
|---|---|
| Roky ve zdroji | 2009, 2011, 2012, 2013, 2014 |
| Vztah k SUR | starší IKR/FIT otázky, opakují základní koncepty |
| Forma | studentský přípravový dokument s odpověďmi |

## Stav verifikace

| Pole | Hodnota |
|---|---|
| Verifikační status | `legacy student guide` |
| Primární zdroj | lokální legacy přípravový dokument |

## Co je nové oproti hlavní databázi

Aktuální databáze už pokrývala moderní SUR témata a 2016 otázkový dokument. Tento zdroj navíc přidává starší formulace z let 2009-2014, zejména:

1. KNN soft decision a princip KNN jako samostatné otázky.
2. Diagonální kovarianční matice a tvar vrstevnic oproti plné kovarianci.
3. Nulové vlastní číslo kovarianční matice: data leží v nižší dimenzi.
4. Multi-class klasifikace z binárních klasifikátorů: one-vs-rest a one-vs-one.
5. Normalizace vstupů pro neuronové sítě na nulovou střední hodnotu a jednotkový rozptyl.
6. Cross-validační sada u neuronových sítí.
7. GMM a vektorová kvantizace / responsibilities `Y_i(t)`.
8. Dekorelace příznaků pro GMM.
9. Starší obrazové příznaky: LBP, integrální obraz, Houghův prostor, ko-okurenční matice, Viola-Jones, kaskáda.
10. Shlukování: single-linkage, dendrogram, k-means paměťové nároky.
11. AdaBoost / slabé klasifikátory jako legacy obrazový blok.

## Rok 2014

1. MLE: co je a odvození vztahu pro `mu` u 1D Gaussu.
2. Logistická regrese vs generativní klasifikátor: stejné rozhodovací pravidlo, jiné učení a předpoklady.
3. Kernel function: vstupy, výstup a význam jako skalární součin v rozšířeném prostoru.
4. Kernel function pro nelineárně oddělitelná data.
5. MAP: co je a jak se rozhoduje.
6. Apriorní pravděpodobnost a vliv na MAP.
7. Backpropagation: co se počítá.
8. Společné rysy dopředné neuronové sítě a logistické regrese.
9. Kaskáda u rozpoznávání objektů v obraze.
10. Slabé klasifikátory / space partition weak hypothesis.
11. Gaussovsky rozložená data s diagonální kovariancí transformovaná ortonormální maticí.
12. LDA: kdy, jak a proč.
13. Generalizace rozpoznávače.
14. HMM: co jsou, co rozpoznávají a jaký je vstup.
15. Co je skryté u HMM.

## Rok 2013

1. Perceptron: kdy konverguje, kdy selže a jaké řešení najde.
2. Vliv změny biasu `w0` u lineárního klasifikátoru.
3. MAP klasifikace se dvěma GMM modely a změněnými cílovými priory.
4. Společné 2D rozložení dvou nezávislých 1D gaussovských veličin.
5. Vlastní čísla kovarianční matice jako variance po natočení do vlastních směrů.
6. MLE odhad střední hodnoty Gaussu.
7. KNN klasifikace nového vzoru.
8. DET křivka a co říká navíc oproti jednomu součtu chyb.

## Rok 2012

1. Obecné schéma klasifikátoru pro obrazovou úlohu: snímání, segmentace, příznaky, model, post-processing.
2. Paměťové nároky KNN/k-means style klasifikátoru při ukládání `D` trénovacích dat s `F` příznaky.
3. Apriorní pravděpodobnost a její vliv na rozhodovací hranici.
4. Bayesův teorém a význam symbolů.
5. Podmínky LDA: třídy gaussovské se stejnou kovarianční maticí.
6. LBP příznak a rotační invariantnost.
7. Integrální obraz: výpočet a použití.
8. Aktualizační krok perceptronu `w_{tau+1} = w_tau + x_n t_n`.

## Rok 2011

1. Feature extraction a očekávané vlastnosti příznaků.
2. Apriorní pravděpodobnost.
3. Bayesovo pravidlo v klasifikaci.
4. Logistická regrese: výpočet posterioru ze skóre přes sigmoid.
5. PCA vs LDA.
6. Odhad podmíněné pravděpodobnosti ze statistik populace.
7. GMM s omezeným počtem parametrů.
8. Rozdíl GMM pro shlukování a rozpoznávání.
9. KNN princip.
10. Houghův prostor pro kruh.
11. Multi-class z binárních klasifikátorů: one-vs-rest a one-vs-one.
12. Single-linkage shlukování.
13. Gaussovský klasifikátor se zadanými priory a vzorky.
14. Normalizace dat pro neuronové sítě.
15. Cross-validace u neuronových sítí.
16. GMM responsibilities a vektorová kvantizace.
17. DET chyby a jejich pravděpodobnosti.
18. Dekorelace příznaků u GMM.
19. MAP pravidlo.
20. Hrany v obraze, Viola-Jones, ko-okurenční matice, AdaBoost a PCA redukce dimenze.

## Rok 2009

1. DET jako závislost false alarm a miss.
2. Overfitting/generalizace u klasifikátoru s příliš mnoha parametry.
3. Podmíněná pravděpodobnost ze statistik.
4. Sigmoid lineárního klasifikátoru se zadaným `w`, `w0` a `x`.
5. EM update vah Gaussovek jako průměr posteriorních příslušností.
6. Ko-okurenční matice a Haralickovy příznaky.
7. Viola-Jones kaskáda kvůli rychlosti detekce.
8. Dendrogram u hierarchického shlukování.
9. Perceptron vs SVM: hlavní rozdíl je ve způsobu trénování.
10. Nelineárně separovatelná data u SVM: mapování do prostoru s více dimenzemi.

## Relevance pro aktuální SUR

Vysoká relevance:

- Bayes, MAP, priory, posterior, product/sum rule.
- MLE, Gauss, GMM, EM.
- PCA/LDA, kovariance, vlastní čísla.
- Lineární klasifikátory, perceptron, SVM/kernel.
- HMM a DET.

Střední relevance:

- KNN, regularizace, normalizace, cross-validace.
- MFCC a feature extraction.
- Multi-class z binárních klasifikátorů.

Nízká / legacy relevance:

- LBP, integrální obraz, Hough, Viola-Jones, ko-okurenční matice, AdaBoost, dendrogram.
- Tyto položky se v aktuálních SUR zdrojích téměř neobjevují, ale můžou vysvětlovat starší IKR otázky.
