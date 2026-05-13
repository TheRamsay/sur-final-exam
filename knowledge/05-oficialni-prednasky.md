# Oficiální přednášky

Zdroj: https://www.fit.vut.cz/study/course/SUR/public/prednasky/

Lokální kopie:

- [[slides/sur-prednasky/index|Index převedených přednášek]]
- `raw/sur-prednasky/` - stažené originály.
- `slides/sur-prednasky/` - čitelné Markdown převody.
- `scripts/sync_sur_lectures.py` - reprodukovatelné stažení a převod.

## Stav extrakce

- Staženo: 45 raw souborů.
- Převedeno do Markdownu: 32 materiálů.
- Převoditelné formáty: PDF, PPTX, legacy PPT, IPYNB.
- Jen raw: audio, video, ZIP/TGZ archivy a demo data.

Poznámka: PDF jsou extrahovaná po stránkách, PPTX/IPYNB přes Pandoc včetně médií a staré `.ppt` přes textové bloky z binárního PowerPointu. U legacy `.ppt` není zachovaný layout ani obrázky, ale text je použitelný pro hledání a rychlé čtení.

## Rychlá mapa témat

| Téma | Primární přednášky | Doplňky |
|---|---|---|
| Úvod, typy úloh, model/algoritmus | [[slides/sur-prednasky/01_uvod/SUR_uvod.pdf|SUR_uvod PDF]], [[slides/sur-prednasky/01_uvod/SUR_uvod.pptx|SUR_uvod PPTX]] | [[slides/sur-prednasky/IKR/01_uvod/uvod.ppt|IKR úvod]] |
| Bayes, MAP, MLE, Gaussy | [[slides/sur-prednasky/02_bayesovska_teorie/bayesovska_teorie.pdf|bayesovska_teorie PDF]], [[slides/sur-prednasky/02_bayesovska_teorie/bayesovska_teorie.pptx|bayesovska_teorie PPTX]] | [[slides/sur-prednasky/02_bayesovska_teorie/ml_estimate_of_gaussian.ipynb|ML Gaussian notebook]] |
| GMM a EM | [[slides/sur-prednasky/02_bayesovska_teorie/EM-GMM.pdf|EM-GMM PDF]], [[slides/sur-prednasky/02_bayesovska_teorie/ml_training_of_gmm.ipynb|ML training of GMM]] | [[slides/sur-prednasky/02_bayesovska_teorie/SUR-gaussians.ipynb|SUR gaussians notebook]] |
| Feature extraction, MFCC, signály | [[slides/sur-prednasky/03_extrakce_priznaku/extrakce_priznaku.pdf|extrakce_priznaku PDF]], [[slides/sur-prednasky/03_extrakce_priznaku/extrakce_priznaku.pptx|extrakce_priznaku PPTX]] | [[slides/sur-prednasky/03_extrakce_priznaku/different_phase.pdf|different_phase]] |
| PCA/LDA a transformace | [[slides/sur-prednasky/03_extrakce_priznaku/LDA.ipynb|LDA notebook]], [[slides/sur-prednasky/03_extrakce_priznaku/extrakce_priznaku.pdf|extrakce_priznaku PDF]] | [[slides/sur-prednasky/IKR/03_extrakce_priznaku/extrakce_priznaku.ppt|IKR extrakce PPT]] |
| Lineární klasifikátory, perceptron, LDA classifier | [[slides/sur-prednasky/04_lin_klasifikatory/lin_klasifikatory.pdf|lin_klasifikatory PDF]], [[slides/sur-prednasky/04_lin_klasifikatory/lin_klasifikatory.pptx|lin_klasifikatory PPTX]] | [[slides/sur-prednasky/04_lin_klasifikatory/linear clasifiers.ipynb|linear classifiers notebook]] |
| Neuronové sítě | [[slides/sur-prednasky/05_neral_networks/NN_CNN_SVM.pdf|NN_CNN_SVM PDF]], [[slides/sur-prednasky/05_neral_networks/NN_CNN_SVM.pptx|NN_CNN_SVM PPTX]] | [[slides/sur-prednasky/05_neral_networks/NN classifier.ipynb|NN classifier notebook]] |
| SVM a kernel | [[slides/sur-prednasky/05_neral_networks/NN_CNN_SVM.pdf|NN_CNN_SVM PDF]], [[slides/sur-prednasky/05_neral_networks/SVM.ipynb|SVM notebook]] | [[slides/sur-prednasky/IKR/05_nn_svm/NN_CNN_SVM.pptx|IKR NN/SVM PPTX]] |
| HMM, Markov, Viterbi | [[slides/sur-prednasky/06_hmm/statistical_models_for_automatic_speech_recognition.pptx|ASR/HMM PPTX]], [[slides/sur-prednasky/06_hmm/ANO_NE_speech_recognition.ipynb|ANO_NE notebook]] | [[slides/sur-prednasky/IKR/06_hmm/hmm_varecky.ppt|hmm_varecky PPT]], [[slides/sur-prednasky/IKR/06_hmm/statistical_models_for_automatic_speech_recognitio-4.pptx|IKR ASR/HMM PPTX]] |
| KNN, regularizace, validace | [[slides/sur-prednasky/02_bayesovska_teorie/SUR-gaussians.ipynb|SUR gaussians notebook]], [[slides/sur-prednasky/01_uvod/SUR_uvod.pdf|SUR_uvod PDF]] | [[knowledge/topics/knn-regularizace-validace|KNN topic]] |
| DET a metriky | [[slides/sur-prednasky/01_uvod/SUR_uvod.pdf|SUR_uvod PDF]] | [[knowledge/topics/metriky-det|DET topic]], [[knowledge/03-opakovani-otazek|opakování otázek]] |

## Doporučené pořadí čtení

1. [[slides/sur-prednasky/02_bayesovska_teorie/bayesovska_teorie.pdf|Bayesovská teorie]] + [[slides/sur-prednasky/02_bayesovska_teorie/EM-GMM.pdf|EM-GMM]].
2. [[slides/sur-prednasky/04_lin_klasifikatory/lin_klasifikatory.pdf|Lineární klasifikátory]].
3. [[slides/sur-prednasky/05_neral_networks/NN_CNN_SVM.pdf|NN, CNN, SVM]].
4. [[slides/sur-prednasky/06_hmm/statistical_models_for_automatic_speech_recognition.pptx|HMM / ASR modely]].
5. [[slides/sur-prednasky/03_extrakce_priznaku/extrakce_priznaku.pdf|Extrakce příznaků]] a [[slides/sur-prednasky/03_extrakce_priznaku/LDA.ipynb|LDA notebook]].

## Jak používat s analýzami

- [[knowledge/01-roi-plan|ROI plán]] říká, co má největší návratnost před zkouškou.
- [[knowledge/02-cetnosti-temat|Četnosti témat]] říkají, které okruhy se opakují.
- [[knowledge/03-opakovani-otazek|Opakování otázek]] spojuje historická zadání s archetypy.
- [[knowledge/04-vzorce-formulace|Vzorce a formulace]] je tahák; přednášky jsou k němu oficiální opora.
