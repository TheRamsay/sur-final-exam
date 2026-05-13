# Pinned SUR signals


## 826109743680061530 / 2026

### 2026-04-08T20:00:00.502000+00:00 - theramsay - score 28

- Zdroj: pin
- Odkaz: https://discord.com/channels/@me/826109743680061530/1491528058937540778
- Témata: Klasifikace, Neuronové sítě, Redukce dimenze, Metriky a evaluace, Entropie/informace
- Attachmenty: -

> u nas 1) gmm+em, nevim jestli typek chtel vzorce, ale ptal se na kroky, jak to iteruje, kdy to zastavi, z ceho jsou data nebo tak neco? 2) softmax pro 2 tridy <-> sigmoid vztah dokazat 3) DET krivka, co je na osach, jak se to pocita, co nam rika, log scale 4) PCS vs LDA, co kazdy z nich focusuje, jakej druh chyb kazd dela 5) kategoricka cross entropy, ukazat na datech vypocet, vysledek a interpretaci jednotlivych cisel 6) bayseovo pravidlo pro klasifikatory, popsat vsechny ty veci v nem, proc nam staci jen vrchni cast zlomku obcas 7) linearni klasifikator (LDA?), odvodit tu goofy rovnici


## 826109743680061530 / 2024

### 2024-05-24T16:44:04.318000+00:00 - dzuris - score 33

- Zdroj: pin
- Odkaz: https://discord.com/channels/@me/826109743680061530/1243605449857564733
- Témata: HMM/Markov/Viterbi, Klasifikace, Regrese, Redukce dimenze
- Attachmenty: -

> 1. opravný 2024 1. MLE pre diskretne rozdelenie 2. Logistická regresia pre viac tried, 2D. Máme vektor váh **W** = [[1,0], [3, 0], [1, 2]] a biasy **w0** = [2, 0, 0], trebalo vypočítať ako musí vyzerať **x** aby P(C==1 | **x**) = P(C==2 | **x**) = 0.5 a P(C==3 | **x**) = 0 3. Nelineárne mapovanie do viacrozmerného priestoru 4. Mali sme Wc a Wac a odvodiť smer ktorý vyberie LDA a prečo 5. kernel funkcia 6. GMM - povedať prečo ho používame, napísať vzorec a popísať, a vysvetliť ako by sme ho mohli použiť pre klasifikáciu 7. Neurónová sieť ktorá klasifikuje binárne, výsledok je P(C==A), zistiť ako by malo vyzerať x aby P na výstupe bola 1 (v správe nižšie je obrázok) 8. Z predchádzajúcej úlohy odvodiť derivácia E podľa w1_1,1 9. Gaussovské rozloženie transformácia, určiť strednú hodnotu, kovariančnú maticu a vlastné čisla transformovanej kovariančnej matice 10. Jacobbiho matica, povedať ...

### 2024-05-10T14:11:21.356000+00:00 - .assist - score 35

- Zdroj: pin
- Odkaz: https://discord.com/channels/@me/826109743680061530/1238493587491258390
- Témata: Automaty a gramatiky, HMM/Markov/Viterbi, Bayes/pravděpodobnost, Klasifikace, Neuronové sítě, Regrese, Redukce dimenze, Entropie/informace
- Attachmenty: image.png

> Riadny 2024: 1. odvodiť ML odhad parametrov pre kategorické rozloženie 2. 3dimenzionalny priestor, 4 triedy, koľko parametrov potrebujeme na multiclass log. regresiu? ako vyzerajú parametre modelu, ako odvodiť pravdepodobnosť p(C|X) 3. HMM - rovnaký ako minulé roky - máme sekvenciu S = [1,2,3,3], ako budeme generovať dáta pre túto sekvenciu? ako generujeme dáta pre akúkoľvek sekvenciu S? 4. Cross-Entropy - kde a na co sa pouziva, vzorec pre Multiclass Cross-Entropy? 5. aký je výsledok softmax([-1, -1, -1, -1]) a prečo, kde sa používa softmax (príklady modelov) 6. LDA zadané matice W_ac a W_wc, aký konkrétny vektor zvolí LDA a prečo? 7. viď obrázok pre 2 triedy - akú hrancu zvolí perceptron, lin. logistická regresia (bez polynomialnej expanzie), SVM (bez slack variables) s lineárnou kernel funkciu, SVM (bez slack variables) s kernel funkciou (x^Ty+1)^2 ... popísať ku každému prečo, výh...

### 2024-04-03T16:43:58.045000+00:00 - pomocpls - score 34

- Zdroj: pin
- Odkaz: https://discord.com/channels/@me/826109743680061530/1225123642401095750
- Témata: Klasifikace, Redukce dimenze
- Attachmenty: -

> Polsemka 2023/24 (2 skupiny, ale boli to len poprehadzovane otazky) 1.a) Matica ma vlastne cisla lambda1=lambda2=1. Ako bude vyzerat diagonalna matica s tymito vlastnymi cislami? Co vyjadruju vlastne cisla? Nakreslite rozlozenie podla takej matice, podla coho volime body? b) to iste pre lambda1=4 lambda2=1 a pre nediagonalnu maticu 2. Popisat DET krivku, prahy. Viem urcit, ze jeden system je lepsi ako druhy? 3. EM pre GMM, co sa v kazdej iteracii pocita? 4. K comu sluzi p(x|w) pri MAP klasifikatore? Co je p(x|w) intuitivne? 5. Popisat MLE pre kategoricke rozlozenie, ako sme sa dostali k mc/N, matematicky to znazornit. 6. Ako pocitame wTx+w0 pomocou generativneho klasifikatora, ako tam pouzivame gaussovske rozlozenie? 7. LDA, co znamenaju vlastne cisla, co znazornuje najlepsi smer trenovacich dat. Ak mi daco chyba/mam zle, prosim opravte ma.


## 621774199043653671 / 2023

### 2023-06-06T13:58:22.277000+00:00 - dithr - score 26

- Zdroj: pin
- Odkaz: https://discord.com/channels/@me/621774199043653671/1115640833358712862
- Témata: Klasifikace, Regrese
- Attachmenty: sur_all.pdf

> Update mergnutých slidov V tom ktorý je aktuálne v pinoch chýbajú niektoré veci ako napr. logistická regresia pre viacero tried ( čo bolo na minulom termíne akurát <:pepeLa:751183558126731274> ) a slidy z 5. prezentácie tam boli scuffed


## 826109743680061530 / 2023

### 2023-05-31T15:53:36.997000+00:00 - ricardo_pipas - score 33

- Zdroj: pin
- Odkaz: https://discord.com/channels/@me/826109743680061530/1113495508602867742
- Témata: HMM/Markov/Viterbi, Klasifikace, Neuronové sítě, Regrese, Redukce dimenze, Entropie/informace
- Attachmenty: -

> Já bych kdyžtak šel ustně taky, pokud sem to dneska nedal 😄 1) MLE pro Diskretni Rozdělení 2) Jak se dá použít Logistická Regrese jakožto linearni klasifikator 3) Byly tam data, ukazat křivku klasifikace za pomocí a) perceptronu, b) nevim c) SVM d) SVM s kvadratickým kernelem 4) Co je to softmax 5) Viterbiho Algoritmus 6) HMM 7) Jak z vícerozměrného Gaussovského rozložení pro dvě třídy udělat lineární klasifikátor 8) něco jako 21. v docu, akorát kovarianční matice mela 1,2 na diagonale 9) LDA 10) EM Algoritmus 11) Cross Entropy

### 2023-03-22T17:32:00.418000+00:00 - justlada - score 28

- Zdroj: pin
- Odkaz: https://discord.com/channels/@me/826109743680061530/1088153118753161277
- Témata: HMM/Markov/Viterbi, Bayes/pravděpodobnost, Redukce dimenze, Metriky a evaluace
- Attachmenty: -

> pulsemka 23 1) Odvozeni ML pro kategoricke rozložení 2) popis kroky viterbi a popis rovnic 3) PCA a vl. č 4) LDA a vl. č 5) popis jak se dostat od zaznamu hlasu k MFCC a proc 6) popis DET krivku nejak v kontextu nalezitosti hlasu k mluvicmu (ne kategorie, ale nalezitost 90% muz 10% zena) 7) λ1 = 1, λ2 = 0, co to znamena, napis nediagonalni kovar. matici a nakresli 8) Zavislost s diagonalni kovariacni matici urcit pravdepodobnosti p(x1) p(x2), p(x1/x2), p(x2/x1) credits <@414845106588352532> <@462736951519477760>

### 2023-03-20T17:25:59.309000+00:00 - toxicenzo - score 7

- Zdroj: pin
- Odkaz: https://discord.com/channels/@me/826109743680061530/1087426828421054615
- Témata: -
- Attachmenty: -
- Embedy: https://docs.google.com/document/d/1wAjaXn1jHBvw5QkAMWW8Tk9Oer55IkKW/edit, https://lh4.googleusercontent.com/DpMPlRQ_nXJmu7YH5AhDqYyy7QFFJTCQcjLWy9WQaUyQmyZrSqdGF7pBP7FOLAOyQzk=w1200-h630-p

> hej něco podobného jak toto https://docs.google.com/document/d/1wAjaXn1jHBvw5QkAMWW8Tk9Oer55IkKW/edit


## 826109743680061530 / 2022

### 2022-05-17T15:19:06.551000+00:00 - isaacdrews - score 19

- Zdroj: pin
- Odkaz: https://discord.com/channels/@me/826109743680061530/976141823460405268
- Témata: Automaty a gramatiky, HMM/Markov/Viterbi, Bayes/pravděpodobnost, Klasifikace, Neuronové sítě, Regrese, Redukce dimenze, Metriky a evaluace
- Attachmenty: -

> LDA najít dimenzi, Perceptron učení, SVM rovnice vysvětlit význam a proč to minimalizujeme, output basic zadané neuronové sítě tak, aby vyšla třída B a ne A, generativní systémy a jejich výhody, GMM skrytý něco (to mi nic neříkalo), Markovské modely jednou prakticky (pravděpodobnost sekvence, kde jednou víme stavy a jednou ne), podruhé Markovské procesy a Viterbiho trénováním, dál jak bysme udělali klasifikátor pro data na obrázku (co, jak, jaký parametry, jak by se klasifikovalo), co je regularizace, odvodit jak ze dvou vícerozměrných gaussovek se stejnou kovarianční maticí uděláme lineární klasifikátor, jak vypadá klasifikátor pro více než dvě třídy (třeba logistickou regresí), output softmaxu při daným vstupu a k čemu je, MFCC co jsou, jak je získám.


## 826109743680061530 / 2021

### 2021-06-01T09:17:23.961000+00:00 - francze - score 7

- Zdroj: pin
- Odkaz: https://discord.com/channels/@me/826109743680061530/849215043240329227
- Témata: -
- Attachmenty: -
- Embedy: https://docs.google.com/document/d/1lphxLFTAz6GopOTjp7-FjI62GaZuTkR3L1oeQEc5W3c/edit, https://lh4.googleusercontent.com/bvDVQksNVpLhObpTiUuL4LwLuTVxACFD2OVPlFR2y-9RN3usRKgb_36foIJTxaRfvcudwcZdKtJ3Sw=w1200-h630-p

> sdílenej dokument - i s doplněnýma odpověďma k letošnímu řádnému https://docs.google.com/document/d/1lphxLFTAz6GopOTjp7-FjI62GaZuTkR3L1oeQEc5W3c/edit#

### 2021-04-12T09:54:47.834000+00:00 - nervacka - score 19

- Zdroj: pin
- Odkaz: https://discord.com/channels/@me/826109743680061530/831105061446615080
- Témata: HMM/Markov/Viterbi, Bayes/pravděpodobnost, Klasifikace, Regrese
- Attachmenty: -

> Ak niekomu pomoze aspon kde tie vzorce priblizne hladat: - DiagonalGaussian: bayesovska_teorie s.22,23 - MultivariateGaussian: bayesovska_teorie s.22, samples: https://en.wikipedia.org/wiki/Multivariate_normal_distribution#Drawing_values_from_the_distribution - Posteriors: bayesovska_teorie s.32,33 - GMM_pdf: bayesovska_teorie s.36-37 - Viterbi trenovanie: bayesovska_teorie s.38-41 - EM-trenovanie: bayesovska_teorie s.42 - GenerativeClassifier: len 1 argmax funkcia - estimate_glc: shared covariance - extrakce_priznaku s.28 - MulticlassLogisticRegression: - logits - lin_klasifikatory s.27 - posteriors - lin_klasifikatory s.27 - gd_step - lin_klasifikatory s.32-34 - softmax_regr_from_tied_gaussians: lin_klasifikatory s.43


## 621774199043653671 / 2021

### 2021-03-24T15:34:00.273000+00:00 - danicek3003 - score 16

- Zdroj: pin
- Odkaz: https://discord.com/channels/@me/621774199043653671/824305056316784671
- Témata: Klasifikace
- Attachmenty: DU.zip

> <@!625582140322480128> Vsechno po prvni klasifikator odcislovane jak to jde po sobe. :] 3. ukol neni plne diagonalni ale plna kovariancni * 😉 + asi spatne ukladam vahy atp. u 10 a 11 protoze tam je moc car 😄


## 621774199043653671 / 2020

### 2020-06-22T15:48:02.414000+00:00 - pheter5687 - score 8

- Zdroj: pin
- Odkaz: https://discord.com/channels/@me/621774199043653671/724651925470969856
- Témata: -
- Attachmenty: vsetko.pdf

> Všetky prezentácie pokope

### 2020-06-09T12:50:40.406000+00:00 - mrotterly - score 29

- Zdroj: pin
- Odkaz: https://discord.com/channels/@me/621774199043653671/719896247401578507
- Témata: Automaty a gramatiky, HMM/Markov/Viterbi, Bayes/pravděpodobnost, Klasifikace
- Attachmenty: 20200609_144936.jpg

> Budem sa snazit napisat cca co bola ta otazka a z akej otazky cerpat info - viz. pin od <@!489144196608032789> Pokial by ste nasli otazku ktoru som missol pls tag/dm me 1 - uloha na pravdepodobnost - INM flashbacks - guide otazka ?? 2 - Ako vyzera rozhodovacia hranica pri overfitted klasifikatore - guide otazka 2? 3 - False error a miss - guide otazka 1 4 - Co je parameter K v k-nearest - guide otazka 4? 5 - Maximum Likelihood - guide otazka 15,16 6 - kovariancna matice - guide otazka 20? 7 - regularizacia - guide otazka ?? 8 - softmax - guide otazka ?? 9 - presne otazka 16 z guidu 10 - 2 rozmerne gausovke rozlozenie, no clue tbh - otazka ?? 11 - presne otazka 30 z guidu 12 - presne otazka 33 z guidu 13 - dokreslit hranicu pre linearny klas. - guide otazka 28 14 - SVM klasifikator - guide otazka 39 15 - kernel fction pri SVM - guide otazka 40 16 - HMM - guide otazka 44

### 2020-06-08T20:10:14.958000+00:00 - lada_42 - score 8

- Zdroj: pin
- Odkaz: https://discord.com/channels/@me/621774199043653671/719644482424799303
- Témata: -
- Attachmenty: unknown.png

> ty korelace btw

### 2020-06-08T17:39:55.944000+00:00 - aven_7 - score 8

- Zdroj: pin
- Odkaz: https://discord.com/channels/@me/621774199043653671/719606653938303070
- Témata: -
- Attachmenty: Xrmqg.png

> rozdíly generativní vs diskriminativní model o zprávu výš ^^

### 2020-06-08T16:34:11.550000+00:00 - menzac - score 7

- Zdroj: pin
- Odkaz: https://discord.com/channels/@me/621774199043653671/719590109950902382
- Témata: -
- Attachmenty: -
- Embedy: https://www.youtube.com/watch?v=5HNr_j6LmPc, https://i.ytimg.com/vi/5HNr_j6LmPc/hqdefault.jpg, https://www.youtube.com/embed/5HNr_j6LmPc

> https://www.youtube.com/watch?v=5HNr_j6LmPc

### 2020-06-04T11:23:19.006000+00:00 - berrit - score 19

- Zdroj: pin
- Odkaz: https://discord.com/channels/@me/621774199043653671/718062324048724059
- Témata: -
- Attachmenty: -

> ak sa to niekomu nechce sťahovať, tak tu sú tie, čo streamoval na youtube 17.3. https://www.youtube.com/watch?v=zkdY58IiaAI&feature=youtu.be 24.3. https://www.youtube.com/watch?v=qBEnlNL8Ct4&feature=youtu.be 31.3. https://www.youtube.com/watch?v=RdQZqmnaiQI&feature=youtu.be 7.4. https://www.youtube.com/watch?v=H4-Lg7ZGop0&feature=youtu.be 14.4. https://www.youtube.com/watch?v=Y7tFZPi6oQA&feature=youtu.be 21.4 https://www.youtube.com/watch?v=MRIlYeqdW3c&feature=youtu.be 28.4 https://youtu.be/h6Fy4NOzUhk táto z nejakeho dovodu nie je spristupnená <:VUTrtzW:498624900957732866>

### 2020-06-01T17:38:06.301000+00:00 - lada_42 - score 14

- Zdroj: pin
- Odkaz: https://discord.com/channels/@me/621774199043653671/717069479003291791
- Témata: -
- Attachmenty: -

> Sdílenej dokument, otázky 2017. Kdybyste chtěli editovat, napište. <https://drive.google.com/file/d/1wAjaXn1jHBvw5QkAMWW8Tk9Oer55IkKW/view>

### 2020-05-25T02:44:23.900000+00:00 - houndthe - score 8

- Zdroj: pin
- Odkaz: https://discord.com/channels/@me/621774199043653671/714307855292956733
- Témata: -
- Attachmenty: ikr_otazky.pdf

> [bez textu]

### 2020-03-11T11:28:57.459000+00:00 - ne_rk - score 8

- Zdroj: pin
- Odkaz: https://discord.com/channels/@me/621774199043653671/687260775047626754
- Témata: -
- Attachmenty: IKR_demos_py.tgz

> [bez textu]

### 2020-02-19T20:16:04.543000+00:00 - gathy - score 7

- Zdroj: pin
- Odkaz: https://discord.com/channels/@me/621774199043653671/679783283474825238
- Témata: -
- Attachmenty: -
- Embedy: https://docs.google.com/document/d/1lphxLFTAz6GopOTjp7-FjI62GaZuTkR3L1oeQEc5W3c/, https://lh5.googleusercontent.com/ICyep34-sHdxyXWuoE5KuVqN3r5U7lUuryX-V3Zo2rK4c73i1bMQs0PqcaYwk_LmW-jzypQNLg=w1200-h630-p

> Tady je sdílený dokument z našeho IKR, je to spíš takový výtah, třeba pomůže https://docs.google.com/document/d/1lphxLFTAz6GopOTjp7-FjI62GaZuTkR3L1oeQEc5W3c/

### 2020-02-18T17:49:21.338000+00:00 - betsst - score 6

- Zdroj: pin
- Odkaz: https://discord.com/channels/@me/621774199043653671/679383972291280906
- Témata: -
- Attachmenty: -

> SUR slidy: https://www.fit.vutbr.cz/study/courses/SUR/public/prednasky/.cs

### 2020-02-04T16:32:22.428000+00:00 - betsst - score 8

- Zdroj: pin
- Odkaz: https://discord.com/channels/@me/621774199043653671/674291169060061190
- Témata: -
- Attachmenty: -

> Ak chce niekto slidy z IKR, ale asi nie su tie isté https://www.fit.vutbr.cz/study/courses/IKR/public/ Slidy zo SUI (SUI_BasicsInML.pdf) https://www.fit.vutbr.cz/study/courses/SUI/public/prednasky/
