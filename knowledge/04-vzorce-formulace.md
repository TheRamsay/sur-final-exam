# Vzorce a zkouškové formulace

Tahle stránka je rychlý tahák pro situaci, kdy koncept chápeš, ale potřebuješ přesnou formulaci a standardní zápis. U každého řádku se nauč minimálně: co to je, vzorec, význam členů.

## Základní pravděpodobnost a Bayes

| Koncept | Standardní vzorec | Zkoušková formulace |
|---|---|---|
| Product rule | $p(x,C)=p(x \mid C)P(C)=P(C \mid x)p(x)$ | Sdruženou pravděpodobnost lze rozložit přes podmíněnou pravděpodobnost a prior. |
| Sum rule | $p(x)=\sum_k p(x,C_k)=\sum_k p(x \mid C_k)P(C_k)$ | Evidence je pravděpodobnost pozorování po vysčítání přes všechny třídy. |
| Bayesovo pravidlo | $P(C_k \mid x)=\frac{p(x \mid C_k)P(C_k)}{p(x)}$ | Posterior třídy po pozorování $x$ je likelihood krát prior, normalizovaný evidencí. |
| MAP klasifikátor | $C^\*=\arg\max_k P(C_k \mid x)=\arg\max_k p(x \mid C_k)P(C_k)$ | Při klasifikaci vybíráme třídu s největším posterior; $p(x)$ lze vynechat, protože je stejná pro všechny třídy. |
| Log-MAP | $C^\*=\arg\max_k\left[\log p(x \mid C_k)+\log P(C_k)\right]$ | V logaritmu se součin změní na součet a numericky se s tím lépe pracuje. |
| MLE obecně | $\hat{\theta}_{ML}=\arg\max_\theta \prod_i p(x_i \mid \theta)=\arg\max_\theta \sum_i \log p(x_i \mid \theta)$ | Maximum likelihood vybírá parametry, které maximalizují pravděpodobnost pozorovaných dat. |
| MLE kategorického rozdělení | $\hat{p}_k=\frac{n_k}{N}$ | U kategorického rozdělení je ML odhad pravděpodobnosti kategorie její relativní četnost. |

## Gaussovské modely a lineární klasifikátory

| Koncept | Standardní vzorec | Zkoušková formulace |
|---|---|---|
| Vícerozměrný Gauss | $\mathcal{N}(x \mid \mu,\Sigma)=\frac{1}{(2\pi)^{d/2}\lvert\Sigma\rvert^{1/2}}\exp\left(-\frac{1}{2}(x-\mu)^T\Sigma^{-1}(x-\mu)\right)$ | Gauss je určen střední hodnotou a kovariancí; kovariance určuje tvar a natočení vrstevnic. |
| Gaussovský klasifikátor | $g_k(x)=\log p(x \mid C_k)+\log P(C_k)$ | Pro každou třídu spočítáme diskriminační funkci a vybereme největší hodnotu. |
| Sdílená kovariance | $g_k(x)=w_k^T x+w_{k0}$ | Pokud mají třídy stejnou kovarianční matici, kvadratické členy se při porovnání tříd odečtou a hranice je lineární. |
| Váhy sdíleného Gaussu | $w_k=\Sigma^{-1}\mu_k,\quad w_{k0}=-\frac{1}{2}\mu_k^T\Sigma^{-1}\mu_k+\log P(C_k)$ | Lineární gaussovský klasifikátor má váhy dané kovariancí, středy tříd a priory. |
| Binární logistická regrese | $P(C=1 \mid x)=\sigma(w^T x+b),\quad \sigma(a)=\frac{1}{1+\exp(-a)}$ | Logistická regrese modeluje posterior přímo diskriminativně přes sigmoid skóre. |
| Multiclass logistická regrese | $P(C=k \mid x)=\frac{\exp(w_k^T x+b_k)}{\sum_j \exp(w_j^T x+b_j)}$ | Pro více tříd se skóre převedou na posteriorní pravděpodobnosti softmaxem. |
| Perceptron update | $w \leftarrow w+\eta\,t_i x_i$ | Perceptron upravuje váhy při chybné klasifikaci ve směru správně označeného vzorku. |
| Regularizovaný trénink | $E_{reg}(w)=E_{data}(w)+\lambda R(w)$ | Regularizace penalizuje složitost modelu, typicky velikost vah, a zlepšuje generalizaci. |

## Softmax, cross entropy a neuronové sítě

| Koncept | Standardní vzorec | Zkoušková formulace |
|---|---|---|
| Softmax | $\operatorname{softmax}(z)_k=\frac{\exp(z_k)}{\sum_j \exp(z_j)}$ | Softmax převádí libovolná skóre na pravděpodobnosti tříd, které se sčítají na 1. |
| Softmax pro stejné vstupy | $z_1=\dots=z_K\Rightarrow \operatorname{softmax}(z)_k=\frac{1}{K}$ | Když jsou všechna skóre stejná, žádná třída není preferovaná. |
| Softmax a sigmoid | $\frac{\exp(z_1)}{\exp(z_0)+\exp(z_1)}=\sigma(z_1-z_0)$ | Dvoutřídní softmax je ekvivalentní sigmoidu rozdílu skóre. |
| Multiclass cross entropy | $E=-\sum_k t_k\log y_k$ | Cross entropy penalizuje malou pravděpodobnost přiřazenou správné třídě. |
| Dataset cross entropy | $E=-\sum_i\sum_k t_{ik}\log y_{ik}$ | Přes data se cross entropy sčítá přes vzorky a třídy. |
| Gradient descent | $w \leftarrow w-\eta\nabla_w E(w)$ | Gradient descent posouvá parametry proti směru gradientu chyby. |
| Plně propojená vrstva | $y=Wx+b,\quad J_{y,x}=W$ | Jacobian plně propojené vrstvy podle vstupu je matice vah. |
| Backpropagation | $\frac{\partial E}{\partial W}=\delta x^T$ | Backpropagation efektivně počítá gradient chyby podle parametrů pomocí řetězového pravidla. |
| Newton-Raphson | $w \leftarrow w-H^{-1}\nabla E(w)$ | Newtonova metoda používá i druhé derivace, tedy zakřivení chyby; může konvergovat rychleji, ale je dražší. |

## GMM a EM

| Koncept | Standardní vzorec | Zkoušková formulace |
|---|---|---|
| GMM hustota | $p(x)=\sum_{k=1}^K \pi_k\,\mathcal{N}(x \mid \mu_k,\Sigma_k)$ | GMM je směs Gaussů; latentní proměnná říká, ze které komponenty bod pochází. |
| Váhy směsi | $\sum_k \pi_k=1,\quad \pi_k\ge 0$ | Směšovací váhy jsou apriorní pravděpodobnosti komponent. |
| E-krok EM | $r_{ik}=P(k \mid x_i)=\frac{\pi_k\mathcal{N}(x_i \mid \mu_k,\Sigma_k)}{\sum_j\pi_j\mathcal{N}(x_i \mid \mu_j,\Sigma_j)}$ | E-krok spočítá posteriorní příslušnosti bodů ke komponentám. |
| Efektivní počet bodů | $N_k=\sum_i r_{ik}$ | Komponenta dostane ne celočíselný, ale měkký počet bodů podle responsibilities. |
| M-krok střed | $\mu_k=\frac{1}{N_k}\sum_i r_{ik}x_i$ | Nový střed komponenty je vážený průměr dat podle příslušností. |
| M-krok kovariance | $\Sigma_k=\frac{1}{N_k}\sum_i r_{ik}(x_i-\mu_k)(x_i-\mu_k)^T$ | Kovariance komponenty je vážená kovariance bodů kolem nového středu. |
| M-krok váhy | $\pi_k=\frac{N_k}{N}$ | Nová váha komponenty je její efektivní podíl na datech. |

## HMM a Viterbi

| Koncept | Standardní vzorec | Zkoušková formulace |
|---|---|---|
| HMM parametry | $\pi_s=P(s_1=s),\quad a_{qr}=P(s_t=r \mid s_{t-1}=q),\quad b_s(x)=p(x \mid s)$ | HMM má počáteční pravděpodobnosti stavů, přechody a emission modely. |
| Joint pravděpodobnost | $p(X,S)=P(s_1)b_{s_1}(x_1)\prod_{t=2}^T a_{s_{t-1}s_t}b_{s_t}(x_t)$ | Pravděpodobnost pozorování a stavové sekvence je součin startu, přechodů a emisí. |
| Likelihood pozorování | $p(X)=\sum_S p(X,S)$ | Když neznáme skrytou sekvenci stavů, musíme vysčítat přes všechny možné sekvence. |
| Posterior stavů | $P(S \mid X)=\frac{p(X,S)}{p(X)}$ | Bayesův vzorec dá pravděpodobnost stavové sekvence po pozorování dat. |
| Viterbi inicializace | $\delta_1(s)=P(s)b_s(x_1)$ | První krok kombinuje prior stavu a pravděpodobnost prvního pozorování. |
| Viterbi rekurze | $\delta_t(s)=\max_q \delta_{t-1}(q)a_{qs}b_s(x_t)$ | Viterbi u každého stavu ukládá nejlepší předchozí cestu místo enumerace všech cest. |
| Viterbi cíl | $S^\*=\arg\max_S p(X,S)$ | Viterbi hledá nejpravděpodobnější skrytou stavovou sekvenci. |

## PCA, LDA, kovariance a transformace

| Koncept | Standardní vzorec | Zkoušková formulace |
|---|---|---|
| Kovariance | $\Sigma=E[(x-\mu)(x-\mu)^T]$ | Kovariance popisuje rozptyly v jednotlivých směrech a vzájemné závislosti příznaků. |
| Lineární transformace průměru | $y=Ax,\quad \mu_y=A\mu_x$ | Po lineární transformaci se střední hodnota násobí transformační maticí. |
| Lineární transformace kovariance | $\Sigma_y=A\Sigma_xA^T$ | Kovariance se transformuje zleva i zprava, protože obsahuje součiny odchylek. |
| PCA směr | $u_1=\arg\max_{\lVert u\rVert=1}u^T\Sigma u$ | PCA hledá směr největší celkové variance bez ohledu na třídy. |
| PCA eigen problém | $\Sigma u=\lambda u$ | Vlastní vektory kovariance jsou hlavní směry; vlastní čísla jsou variance v těchto směrech. |
| Whitening | $y=\Lambda^{-1/2}U^T(x-\mu)$ | Whitening odečte střed, otočí do vlastních směrů a škáluje variance na 1. |
| LDA směr pro dvě třídy | $w\propto S_W^{-1}(\mu_1-\mu_2)$ | LDA hledá směr, který dobře oddělí středy tříd vzhledem k vnitrotřídní varianci. |
| LDA kritérium | $J(w)=\frac{w^TS_Bw}{w^TS_Ww}$ | LDA maximalizuje mezi-třídní rozptyl a minimalizuje vnitro-třídní rozptyl v promítnutém prostoru. |
| Diagonální kovariance | $\Sigma=\operatorname{diag}(\sigma_1^2,\dots,\sigma_d^2)$ | Diagonální kovariance předpokládá nezávislé příznaky a osově zarovnané vrstevnice. |

## SVM a kernel

| Koncept | Standardní vzorec | Zkoušková formulace |
|---|---|---|
| Hard-margin SVM | $\min_{w,b}\frac{1}{2}\lVert w\rVert^2\quad\text{s.t.}\quad y_i(w^Tx_i+b)\ge 1$ | Minimalizace normy vah maximalizuje margin; podmínky vynucují správnou klasifikaci s rezervou. |
| Rozhodovací funkce | $f(x)=w^Tx+b$ | Znaménko rozhodovací funkce určuje třídu; hranice je $f(x)=0$. |
| Margin | $\text{margin}=\frac{2}{\lVert w\rVert}$ | Menší norma vah znamená větší geometrický margin. |
| Soft-margin SVM | $\min_{w,b,\xi}\frac{1}{2}\lVert w\rVert^2+C\sum_i\xi_i\quad\text{s.t.}\quad y_i(w^Tx_i+b)\ge 1-\xi_i$ | Slack proměnné dovolují porušení marginu; $C$ řídí trest za tato porušení. |
| Kernel trick | $K(x,z)=\phi(x)^T\phi(z)$ | Kernel počítá skalární součin ve feature prostoru bez explicitního mapování všech souřadnic. |
| Polynomial kernel | $K(x,z)=(x^Tz+c)^d$ | Polynomial kernel umožní lineární SVM ve feature prostoru odpovídat nelineární hranici ve vstupu. |
| Kernel SVM rozhodnutí | $f(x)=\sum_i\alpha_i y_i K(x_i,x)+b$ | V duální formě rozhodují trénovací body přes kernel; nenulové $\alpha_i$ odpovídají support vectors. |

## ROC, DET a confusion matrix

| Koncept | Standardní vzorec | Zkoušková formulace |
|---|---|---|
| Accuracy | $\frac{TP+TN}{TP+TN+FP+FN}$ | Podíl správných rozhodnutí ze všech případů. |
| True positive rate | $TPR=\frac{TP}{TP+FN}$ | Z pozitivních případů říká, kolik jsme správně našli. |
| False positive rate | $FPR=\frac{FP}{FP+TN}$ | Z negativních případů říká, kolik jsme falešně označili jako pozitivní. |
| Miss rate | $P_{Miss}=FNR=\frac{FN}{TP+FN}=1-TPR$ | Miss je pravděpodobnost, že skutečně pozitivní případ odmítneme. |
| False alarm | $P_{FA}=FPR=\frac{FP}{FP+TN}$ | False alarm je pravděpodobnost, že skutečně negativní případ falešně přijmeme jako pozitivní. |
| ROC křivka | $x=FPR,\quad y=TPR$ | ROC ukazuje tradeoff mezi falešnými poplachy a zachycenými pozitivními při změně thresholdu. |
| AUC | $AUC=P(s(x^+)>s(x^-))$ | AUC je pravděpodobnost, že náhodný pozitivní vzorek dostane vyšší skóre než náhodný negativní. |
| DET křivka | $x=P_{FA},\quad y=P_{Miss}$ | DET kreslí dva typy chyb proti sobě; lepší systém je blíž levému dolnímu rohu. |

## Doplňky

| Koncept | Standardní vzorec | Zkoušková formulace |
|---|---|---|
| KNN hard decision | $C^\*=\operatorname{majority}_{x_i\in N_k(x)} C_i$ | KNN přiřadí třídu podle většiny mezi $k$ nejbližšími sousedy. |
| KNN soft decision | $P(C=c \mid x)=\frac{N_c(x)}{k}$ | Měkké KNN odhaduje posterior jako podíl sousedů dané třídy. |
| Normalizace | $x'_j=\frac{x_j-\mu_j}{\sigma_j}$ | Normalizace dá příznakům podobné měřítko a stabilizuje učení. |
| Cross-validace | $\hat{E}=\frac{1}{K}\sum_{k=1}^K E_k$ | Cross-validace odhaduje generalizaci průměrem chyby přes validační foldy. |
| MFCC pipeline | signál $\rightarrow$ rámce $\rightarrow$ spektrum $\rightarrow$ mel filtry $\rightarrow$ log $\rightarrow$ DCT | MFCC jsou příznaky řeči získané ze spektrální obálky na mel škále. |

## Jak odpovídat u zkoušky

Pro každý vzorec drž stejný formát odpovědi:

1. Nejdřív řekni, co model/veličina znamená.
2. Napiš vzorec.
3. Pojmenuj členy.
4. Řekni, co se optimalizuje nebo porovnává.
5. Přidej jednu větu intuice.

Například pro MAP:

> MAP klasifikátor vybírá třídu s největší posteriorní pravděpodobností po pozorování vzoru $x$. Podle Bayesova pravidla platí $P(C_k \mid x)=p(x \mid C_k)P(C_k)/p(x)$. Protože evidence $p(x)$ je pro všechny třídy stejná, při rozhodování maximalizujeme jen $p(x \mid C_k)P(C_k)$. Likelihood říká, jak dobře třída vysvětluje data, prior říká, jak pravděpodobná byla třída před pozorováním.
