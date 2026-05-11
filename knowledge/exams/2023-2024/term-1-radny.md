# 2023/2024 - řádný termín

## Metadata

| Pole | Hodnota |
|---|---|
| Akademický rok | 2023/2024 |
| Termínový label | řádný |
| Datum zdroje | 10. 5. 2024 |
| Forma | pin text + obrázek |

## Stav verifikace

| Pole | Hodnota |
|---|---|
| Verifikační status | `pin exact` |
| Primární zdroj | lokální Discord pin |
| Obrázek | [[knowledge/assets/2024-radny-classifier-boundary.png]] |

## Jednotné zadání

1. Odvodit ML odhad parametrů pro kategorické rozložení.
2. 3D prostor, 4 třídy: kolik parametrů potřebuje multiclass logistická regrese, jak vypadají parametry modelu a jak odvodit `p(C|X)`.
3. HMM: pro sekvenci `S = [1,2,3,3]` popsat, jak generujeme data pro tuto sekvenci a jak generujeme data pro libovolnou sekvenci `S`.
4. Cross entropy: kde a k čemu se používá, vzorec pro multiclass cross entropy.
5. Softmax: výsledek `softmax([-1,-1,-1,-1])`, proč, a kde se softmax používá.
6. LDA: zadané matice `W_ac` a `W_wc`, jaký konkrétní vektor LDA zvolí a proč.
7. Pro obrázek dvou tříd určit, jakou hranici zvolí:
   - perceptron,
   - lineární logistická regrese bez polynomial expansion,
   - SVM bez slack variables s lineárním kernelem,
   - SVM bez slack variables s kernelem `(x^T y + 1)^2`.
   Ke každému popsat proč, výhody a nevýhody.
8. Regularizace parametrů modelu, například logistické regrese: proč a kde ve vzorci se vyskytuje.
9. SVM bez slack variables: popsat zadanou rovnici s podmínkou, proč tuto rovnici minimalizujeme a proč jsou tam podmínky.
10. Pro `x ~ N(0, I)` a transformaci `y = Wx` určit změnu střední hodnoty, kovarianční matice a vlastních čísel.
11. Neznámá otázka.
12. Odvodit vektor vah a bias lineárního gaussovského klasifikátoru.

## Poznámky k nejistotám

Otázka 11 nebyla ve zdroji doplněna.
