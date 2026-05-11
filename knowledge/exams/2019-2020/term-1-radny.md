# 2019/2020 - řádný termín

## Metadata

| Pole | Hodnota |
|---|---|
| Akademický rok | 2019/2020 |
| Termínový label | řádný |
| Datum zdroje | 9. 6. 2020 |
| Forma | pin text + fotografie |

## Stav verifikace

| Pole | Hodnota |
|---|---|
| Verifikační status | `pin image manual` |
| Primární zdroj | lokální Discord pin |
| Obrázek | [[knowledge/assets/2020-radny-photo.jpg]] |

## Jednotné zadání

1. Pravděpodobnostní úloha s nemocí/testem: zadáno `P(A)=0,15`, `P(B)=0,95` jako miss/nezelený virus a `P(C)=0,05` jako false error. Ptá se na pozitivní výsledek u náhodné osoby. Na fotografii je výpočet `0,15 * 0,95 + 0,85 * 0,05 = 0,185`.
2. 2D trénovací data: rozhodovací hranice, overfitting, generalizace.
3. Detection: dva typy chyb, threshold, DET křivka, co znamená a jak ji vyčíst.
4. Parametr `k` v K-nearest neighbours a jak jej zvolit.
5. Odvození Maximum Likelihood, plné odvození údajně za bonus.
6. Data `x_1 ... x_n`, kovarianční matice `Σ`, transformace `y = Ax`; odhad kovarianční matice po transformaci.
7. Regularizace: k čemu slouží, jak se provádí, jaký má vliv.
8. Softmax: kde se používá, příklad.
9. EM algoritmus: popište dva kroky a jejich význam.
10. 2D gaussovské rozložení `p(x)=N(x; μ, Σ)`, `x=[x1,x2]^T`, `μ=[μ1,μ2]^T`; vyjádřit `p(x1)`, `p(x2)`, `p(x1|x2)`, `p(x2|x1)` a vysvětlit závislost mezi `x1` a `x2`.
11. Logistická regrese vs lineární gaussovský klasifikátor.
12. Gradient descent a vztah k error back-propagation.
13. Lineární klasifikátor ve 2D, nakreslit hranici.
14. Nakreslit 2D data pro dvě lineárně separovatelné třídy a řešení SVM klasifikátoru.
15. Kernel function při SVM: vstup, výstup, k čemu slouží, co řeší a jak.
16. HMM se třemi stavy: podmíněná věrohodnost, výpočet `p(X|S)`, `P(S)` a podobné výrazy.

## Poznámky k nejistotám

- Otázka 1 je z fotografie hůře čitelná; v konverzaci se řešila i varianta výsledku `0,185`.
- Text je kombinace autorovy zprávy a ručního přepisu fotografie.
