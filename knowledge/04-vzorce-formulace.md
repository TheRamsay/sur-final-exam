# Vzorce a zkouškové formulace

Tahle stránka je tahák pro situaci, kdy koncept chápeš, ale potřebuješ ho u zkoušky zapsat přesně a čistě. U každé položky se uč tři věci: význam, vzorec, jednu větu intuice.

> [!tip] Zkouškový formát odpovědi
> Nejdřív řekni, co veličina/model znamená. Potom napiš vzorec, pojmenuj členy a zakonči tím, co se optimalizuje, porovnává nebo geometricky děje.

## Core mapa

| Okruh | Klíčový vzorec | Typická past |
|---|---|---|
| Bayes a MAP | $P(C_k\mid x)=p(x\mid C_k)P(C_k)/p(x)$ | Při rozhodování lze vynechat jen evidenci $p(x)$, ne prior. |
| Gauss klasifikátor | $g_k(x)=\log p(x\mid C_k)+\log P(C_k)$ | Sdílená kovariance dá lineární hranici, různá kovariance kvadratickou. |
| Softmax a CE | $y_k=\exp z_k/\sum_j\exp z_j$, $E=-\sum_k t_k\log y_k$ | Softmax není klasifikátor sám o sobě, jen normalizace skóre. |
| GMM a EM | $p(x)=\sum_k\pi_k\mathcal N(x\mid\mu_k,\Sigma_k)$ | E-krok počítá měkké příslušnosti, M-krok z nich přepočítá parametry. |
| HMM a Viterbi | $p(X,S)=\pi_{s_1}b_{s_1}(x_1)\prod_{t=2}^Ta_{s_{t-1}s_t}b_{s_t}(x_t)$ | Forward sčítá přes cesty, Viterbi bere maximum přes cesty. |
| PCA a LDA | $\Sigma u=\lambda u$, $w\propto S_W^{-1}(\mu_1-\mu_2)$ | PCA nevidí třídy; LDA třídy používá. |
| SVM a kernel | $\min\tfrac12\lVert w\rVert^2$ při $y_i(w^Tx_i+b)\ge1$ | Větší margin odpovídá menší normě vah. |
| ROC a DET | $TPR=TP/(TP+FN)$, $FPR=FP/(FP+TN)$ | ROC kreslí záchyt proti false alarmům; DET kreslí miss proti false alarmům. |

## Základní pravděpodobnost a Bayes

| Koncept | Standardní zápis | Jak to říct |
|---|---|---|
| Product rule | $p(x,C_k)=p(x\mid C_k)P(C_k)=P(C_k\mid x)p(x)$ | Sdruženou pravděpodobnost lze rozložit přes podmíněnou pravděpodobnost a prior. |
| Sum rule | $p(x)=\sum_k p(x,C_k)=\sum_k p(x\mid C_k)P(C_k)$ | Evidence je pravděpodobnost pozorování po vysčítání přes všechny třídy. |
| Bayesovo pravidlo | $P(C_k\mid x)=\dfrac{p(x\mid C_k)P(C_k)}{p(x)}$ | Posterior je likelihood krát prior, normalizovaný evidencí. |
| MAP klasifikátor | $C^\*=\arg\max_k P(C_k\mid x)$ | Vybíráme třídu s největší posteriorní pravděpodobností. |
| MAP pro rozhodování | $C^\*=\arg\max_k p(x\mid C_k)P(C_k)$ | Evidence $p(x)$ je pro všechny třídy stejná, proto v argmaxu odpadne. |
| Log-MAP | $C^\*=\arg\max_k\left[\log p(x\mid C_k)+\log P(C_k)\right]$ | Logaritmus převede součin na součet a je numericky stabilnější. |
| Likelihood | $L(\theta)=\prod_i p(x_i\mid\theta)$ | Pravděpodobnost dat jako funkce parametrů. |
| Log-likelihood | $\ell(\theta)=\sum_i\log p(x_i\mid\theta)$ | Stejné optimum jako likelihood, ale lépe se derivuje. |
| MLE | $\hat\theta_{ML}=\arg\max_\theta \ell(\theta)$ | ML volí parametry, pod kterými jsou pozorovaná data nejpravděpodobnější. |
| Kategorické MLE | $\hat p_c=n_c/N$ | Pravděpodobnost kategorie je její relativní četnost. |

## Gaussovské modely a lineární klasifikátory

Plný tvar vícerozměrné Gaussovy hustoty:

$$
\mathcal N(x\mid\mu,\Sigma)=
\frac{1}{(2\pi)^{d/2}\lvert\Sigma\rvert^{1/2}}
\exp\left[-\frac12(x-\mu)^T\Sigma^{-1}(x-\mu)\right]
$$

| Koncept | Standardní zápis | Jak to říct |
|---|---|---|
| Gaussův model třídy | $p(x\mid C_k)=\mathcal N(x\mid\mu_k,\Sigma_k)$ | Každá třída generuje data Gaussovým rozdělením. |
| MAP diskriminant | $g_k(x)=\log p(x\mid C_k)+\log P(C_k)$ | Pro každou třídu spočítáme skóre a vybereme největší. |
| Kvadratický diskriminant | $g_k(x)=-\tfrac12(x-\mu_k)^T\Sigma_k^{-1}(x-\mu_k)-\tfrac12\log\lvert\Sigma_k\rvert+\log P(C_k)$ | Při různých kovariancích zůstane kvadratický člen, hranice je obecně kvadratická. |
| Sdílená kovariance | $g_k(x)=w_k^Tx+w_{k0}$ | Pokud je $\Sigma_k=\Sigma$ pro všechny třídy, kvadratické členy se při porovnání odečtou. |
| Váhy sdíleného Gaussu | $w_k=\Sigma^{-1}\mu_k$ | Váhy jsou dány společnou kovariancí a středem dané třídy. |
| Bias sdíleného Gaussu | $w_{k0}=-\tfrac12\mu_k^T\Sigma^{-1}\mu_k+\log P(C_k)$ | Bias obsahuje vzdálenost středu od počátku v metrice $\Sigma^{-1}$ a prior třídy. |
| Lineární hranice | $f(x)=w^Tx+b=0$ | Znaménko $f(x)$ určuje stranu nadroviny. |
| Perceptron update | $w\leftarrow w+\eta t_i x_i$ | Při chybě posuneme váhy směrem ke správně označenému vzorku. |
| Binární logistická regrese | $P(C_1\mid x)=\sigma(w^Tx+b)$ | Diskriminativně modeluje posterior pomocí sigmoidu skóre. |
| Sigmoid | $\sigma(a)=1/(1+\exp(-a))$ | Převádí reálné skóre na pravděpodobnost v intervalu $(0,1)$. |
| Multiclass logistická regrese | $P(C_k\mid x)=\dfrac{\exp(w_k^Tx+b_k)}{\sum_j\exp(w_j^Tx+b_j)}$ | Pro více tříd se lineární skóre normalizují softmaxem. |

## Softmax, cross entropy a neuronové sítě

| Koncept | Standardní zápis | Jak to říct |
|---|---|---|
| Softmax | $y_k=\operatorname{softmax}(z)_k=\dfrac{\exp z_k}{\sum_j\exp z_j}$ | Převádí skóre na pravděpodobnosti, které se sčítají na 1. |
| Stejná skóre | $z_1=\dots=z_K\Rightarrow y_k=1/K$ | Když jsou všechna skóre stejná, model nepreferuje žádnou třídu. |
| Dvoutřídní softmax | $\dfrac{\exp z_1}{\exp z_0+\exp z_1}=\sigma(z_1-z_0)$ | Dvě třídy ve softmaxu jsou ekvivalentní sigmoidu rozdílu skóre. |
| Cross entropy pro vzorek | $E=-\sum_k t_k\log y_k$ | Trestá malou pravděpodobnost přiřazenou správné třídě. |
| One-hot třída | $t_c=1\Rightarrow E=-\log y_c$ | U one-hot targetu v cross entropy zůstane jen správná třída. |
| Dataset loss | $E=-\frac1N\sum_i\sum_k t_{ik}\log y_{ik}$ | Chyba přes dataset je průměr přes vzorky. |
| Gradient descent | $w\leftarrow w-\eta\nabla_w E(w)$ | Parametry posouváme proti směru růstu chyby. |
| Plně propojená vrstva | $y=Wx+b$ | Lineární transformace vstupu před aktivací. |
| Jacobian vrstvy | $J_{y,x}=\partial y/\partial x=W$ | Derivace výstupu podle vstupu je matice vah. |
| Backprop pro váhy | $\partial E/\partial W=\delta x^T$ | Gradient vah je outer product chyby vrstvy a vstupu vrstvy. |
| Backprop chyby | $\delta_l=(W_{l+1}^T\delta_{l+1})\odot f'(a_l)$ | Chyba se propaguje zpět přes váhy a derivaci aktivace. |
| Newtonova metoda | $w\leftarrow w-H^{-1}\nabla E(w)$ | Používá gradient i Hessian, tedy lokální zakřivení chyby. |

## GMM a EM

| Koncept | Standardní zápis | Jak to říct |
|---|---|---|
| GMM hustota | $p(x)=\sum_{k=1}^K\pi_k\mathcal N(x\mid\mu_k,\Sigma_k)$ | Směs Gaussů modeluje data přes latentní komponentu. |
| Váhy směsi | $\sum_k\pi_k=1,\quad\pi_k\ge0$ | Váha je prior pravděpodobnosti komponenty. |
| Log-likelihood GMM | $\ell=\sum_i\log\sum_k\pi_k\mathcal N(x_i\mid\mu_k,\Sigma_k)$ | EM maximalizuje likelihood směsi nepřímo přes latentní proměnné. |
| E-krok | $r_{ik}=P(k\mid x_i)=\dfrac{\pi_k\mathcal N(x_i\mid\mu_k,\Sigma_k)}{\sum_j\pi_j\mathcal N(x_i\mid\mu_j,\Sigma_j)}$ | Spočítá měkké příslušnosti bodů ke komponentám. |
| Efektivní počet bodů | $N_k=\sum_i r_{ik}$ | Komponenta dostane měkký počet bodů, ne celé číslo. |
| M-krok střed | $\mu_k=\dfrac{1}{N_k}\sum_i r_{ik}x_i$ | Střed je vážený průměr dat podle responsibilities. |
| M-krok kovariance | $\Sigma_k=\dfrac{1}{N_k}\sum_i r_{ik}(x_i-\mu_k)(x_i-\mu_k)^T$ | Kovariance je vážený rozptyl kolem nového středu. |
| M-krok váhy | $\pi_k=N_k/N$ | Váha je efektivní podíl komponenty na datech. |
| Monotonicita EM | $\ell^{(t+1)}\ge\ell^{(t)}$ | EM by neměl snižovat likelihood; zastaví se při malé změně. |

## HMM a Viterbi

| Koncept | Standardní zápis | Jak to říct |
|---|---|---|
| Počáteční prior | $\pi_s=P(s_1=s)$ | Pravděpodobnost prvního skrytého stavu. |
| Přechody | $a_{qr}=P(s_t=r\mid s_{t-1}=q)$ | Markovův předpoklad: další stav závisí jen na předchozím. |
| Emise | $b_s(x_t)=p(x_t\mid s_t=s)$ | Pravděpodobnost pozorování v daném stavu. |
| Joint pravděpodobnost | $p(X,S)=\pi_{s_1}b_{s_1}(x_1)\prod_{t=2}^Ta_{s_{t-1}s_t}b_{s_t}(x_t)$ | Pravděpodobnost pozorování a konkrétní stavové sekvence. |
| Likelihood pozorování | $p(X)=\sum_{s_1,\dots,s_T}p(X,S)$ | Když neznáme skryté stavy, sčítáme přes všechny sekvence. |
| Posterior sekvence | $P(S\mid X)=p(X,S)/p(X)$ | Bayes pro pravděpodobnost stavové sekvence po pozorování dat. |
| Forward inicializace | $\alpha_1(s)=\pi_sb_s(x_1)$ | Start kombinuje prior stavu a emisi prvního pozorování. |
| Forward rekurze | $\alpha_t(s)=b_s(x_t)\sum_q\alpha_{t-1}(q)a_{qs}$ | Forward sčítá pravděpodobnosti všech cest do stavu $s$. |
| Viterbi inicializace | $\delta_1(s)=\pi_sb_s(x_1)$ | Stejný start jako forward, ale dál se místo sumy bere maximum. |
| Viterbi rekurze | $\delta_t(s)=b_s(x_t)\max_q\delta_{t-1}(q)a_{qs}$ | U každého stavu držíme nejlepší předchozí cestu. |
| Backpointer | $\psi_t(s)=\arg\max_q\delta_{t-1}(q)a_{qs}$ | Ukládá, odkud nejlepší cesta přišla, aby šla rekonstruovat. |
| Viterbi cíl | $S^\*=\arg\max_S p(X,S)$ | Hledáme nejpravděpodobnější skrytou sekvenci stavů. |

## PCA, LDA, kovariance a transformace

| Koncept | Standardní zápis | Jak to říct |
|---|---|---|
| Střední hodnota | $\mu=E[x]$ | Průměrná poloha dat. |
| Kovariance | $\Sigma=E[(x-\mu)(x-\mu)^T]$ | Rozptyly a závislosti příznaků. |
| Výběrová kovariance | $\hat\Sigma=\frac1N\sum_i(x_i-\hat\mu)(x_i-\hat\mu)^T$ | Odhad kovariance z dat. |
| Transformace průměru | $y=Ax,\quad \mu_y=A\mu_x$ | Lineární transformace posune střed přes stejnou matici. |
| Transformace kovariance | $\Sigma_y=A\Sigma_xA^T$ | Kovariance se násobí zleva i zprava kvůli součinu odchylek. |
| PCA směr | $u_1=\arg\max_{\lVert u\rVert=1}u^T\Sigma u$ | První hlavní komponenta maximalizuje varianci projekce. |
| PCA eigen problém | $\Sigma u=\lambda u$ | Vlastní vektory jsou směry, vlastní čísla variance v těchto směrech. |
| PCA projekce | $y=U_m^T(x-\mu)$ | Data promítneme do prvních $m$ hlavních komponent. |
| Whitening | $y=\Lambda^{-1/2}U^T(x-\mu)$ | Otočí data do vlastních směrů a škáluje variance na 1. |
| Within scatter | $S_W=\sum_c\sum_{i\in c}(x_i-\mu_c)(x_i-\mu_c)^T$ | Rozptyl uvnitř tříd. |
| Between scatter | $S_B=\sum_cn_c(\mu_c-\mu)(\mu_c-\mu)^T$ | Rozptyl mezi středy tříd. |
| LDA kritérium | $J(w)=\dfrac{w^TS_Bw}{w^TS_Ww}$ | Chceme velké oddělení tříd a malý rozptyl uvnitř tříd. |
| LDA pro dvě třídy | $w\propto S_W^{-1}(\mu_1-\mu_2)$ | Směr odděluje středy tříd vzhledem k vnitrotřídní kovarianci. |
| LDA eigen problém | $S_W^{-1}S_Bw=\lambda w$ | Multiclass LDA hledá diskriminační směry jako vlastní vektory. |
| Diagonální kovariance | $\Sigma=\operatorname{diag}(\sigma_1^2,\dots,\sigma_d^2)$ | Předpokládá nezávislé příznaky a osově zarovnané elipsy. |

## SVM a kernel

| Koncept | Standardní zápis | Jak to říct |
|---|---|---|
| Rozhodovací funkce | $f(x)=w^Tx+b$ | Znaménko skóre určuje třídu, hranice je $f(x)=0$. |
| Hard-margin SVM | $\min_{w,b}\tfrac12\lVert w\rVert^2\quad\text{s.t.}\quad y_i(w^Tx_i+b)\ge1$ | Minimalizace normy vah maximalizuje margin při separovatelných datech. |
| Geometrický margin | $\gamma_i=y_i(w^Tx_i+b)/\lVert w\rVert$ | Vzdálenost bodu od hranice se znaménkem třídy. |
| Šířka pásu | $2/\lVert w\rVert$ | Dvě podpůrné přímky $f(x)=\pm1$ jsou od sebe vzdálené $2/\lVert w\rVert$. |
| Soft-margin SVM | $\min_{w,b,\xi}\tfrac12\lVert w\rVert^2+C\sum_i\xi_i$ | Dovolí porušení marginu pomocí slack proměnných. |
| Soft-margin podmínky | $y_i(w^Tx_i+b)\ge1-\xi_i,\quad\xi_i\ge0$ | Slack $\xi_i$ měří, o kolik bod porušuje margin. |
| Hinge loss | $\max(0,1-y_if(x_i))$ | Ekvivalentní pohled na trest za porušení marginu. |
| Kernel trick | $K(x,z)=\phi(x)^T\phi(z)$ | Kernel počítá skalární součin ve feature prostoru bez explicitního mapování. |
| Polynomial kernel | $K(x,z)=(x^Tz+c)^d$ | Lineární SVM ve feature prostoru dává nelineární hranici ve vstupu. |
| RBF kernel | $K(x,z)=\exp(-\gamma\lVert x-z\rVert^2)$ | Podobnost rychle klesá se vzdáleností bodů. |
| Kernelové rozhodnutí | $f(x)=\sum_{i\in SV}\alpha_i y_iK(x_i,x)+b$ | Rozhodují jen support vectors s nenulovými $\alpha_i$. |

## ROC, DET a confusion matrix

| Skutečnost / rozhodnutí | Rozhodnuto pozitivně | Rozhodnuto negativně |
|---|---|---|
| Skutečně pozitivní | $TP$ | $FN$ |
| Skutečně negativní | $FP$ | $TN$ |

| Koncept | Standardní zápis | Jak to říct |
|---|---|---|
| Accuracy | $(TP+TN)/(TP+TN+FP+FN)$ | Podíl správných rozhodnutí ze všech případů. |
| True positive rate | $TPR=TP/(TP+FN)$ | Z pozitivních případů říká, kolik jsme správně zachytili. |
| False positive rate | $FPR=FP/(FP+TN)$ | Z negativních případů říká, kolik jsme falešně označili pozitivně. |
| True negative rate | $TNR=TN/(TN+FP)=1-FPR$ | Specificita: kolik negativních případů jsme správně odmítli. |
| Miss rate | $P_{Miss}=FNR=FN/(TP+FN)=1-TPR$ | Pravděpodobnost, že skutečně pozitivní případ mineme. |
| False alarm | $P_{FA}=FPR=FP/(FP+TN)$ | Pravděpodobnost, že negativní případ falešně přijmeme. |
| Precision | $TP/(TP+FP)$ | Z pozitivních rozhodnutí říká, kolik bylo skutečně pozitivních. |
| Threshold pravidlo | $s(x)\ge\tau\Rightarrow\text{positive}$ | Prah mění kompromis mezi zachycením a false alarmy. |
| ROC bod | $(FPR,TPR)$ | ROC kreslí false positive rate na ose $x$ a true positive rate na ose $y$. |
| AUC | $P(s(x^+)>s(x^-))+\tfrac12P(s(x^+)=s(x^-))$ | Pravděpodobnost, že náhodný pozitivní vzorek má vyšší skóre než negativní; druhý člen řeší shodná skóre. |
| DET bod | $(P_{FA},P_{Miss})$ | DET kreslí dva druhy chyb proti sobě. |
| DET normální měřítko | $(\Phi^{-1}(P_{FA}),\Phi^{-1}(P_{Miss}))$ | V praxi se DET často kreslí v normálním deviate měřítku, aby byly trendy čitelnější. |
| EER | $P_{FA}=P_{Miss}$ | Equal error rate je bod, kde jsou oba typy chyb stejné. |

## Doplňky

| Koncept | Standardní zápis | Jak to říct |
|---|---|---|
| KNN hard decision | $C^\*=\operatorname{majority}_{x_i\in N_k(x)}C_i$ | Třída je většina mezi $k$ nejbližšími sousedy. |
| KNN soft decision | $P(C=c\mid x)=N_c(x)/k$ | Posterior odhadneme jako podíl sousedů dané třídy. |
| Normalizace | $x'_j=(x_j-\mu_j)/\sigma_j$ | Příznaky dostanou srovnatelné měřítko. |
| Regularizace | $E_{reg}(w)=E_{data}(w)+\lambda R(w)$ | Penalizuje složitost modelu a snižuje přeučení. |
| L2 regularizace | $R(w)=\lVert w\rVert^2$ | Tlačí váhy k menším hodnotám. |
| Cross-validace | $\hat E=\frac1K\sum_{k=1}^K E_k$ | Odhad generalizace průměrem přes validační foldy. |
| MFCC pipeline | signál $\to$ rámce $\to$ spektrum $\to$ mel filtry $\to$ log $\to$ DCT | MFCC jsou řečové příznaky ze spektrální obálky na mel škále. |

## Mini odvození, která se často hodí

### Proč u MAP odpadne evidence

$$
C^\*=\arg\max_k P(C_k\mid x)
=\arg\max_k \frac{p(x\mid C_k)P(C_k)}{p(x)}
=\arg\max_k p(x\mid C_k)P(C_k)
$$

Evidence $p(x)$ nezávisí na třídě $k$, takže nemění pořadí tříd v argmaxu.

### Proč sdílený Gauss vede na lineární hranici

Při stejné kovarianci $\Sigma$ mají všechny třídy stejný kvadratický člen $-\tfrac12x^T\Sigma^{-1}x$. Ten se při porovnání tříd odečte a zůstane lineární tvar:

$$
g_k(x)=\mu_k^T\Sigma^{-1}x-\frac12\mu_k^T\Sigma^{-1}\mu_k+\log P(C_k)
$$

### Proč je dvoutřídní softmax sigmoid

$$
\frac{\exp z_1}{\exp z_0+\exp z_1}
=\frac{1}{1+\exp(z_0-z_1)}
=\sigma(z_1-z_0)
$$

### Jak číst DET

Nižší $P_{FA}$ znamená méně falešných poplachů, nižší $P_{Miss}$ znamená méně minutých pozitivních případů. Lepší systém je blíž levému dolnímu rohu. Změna prahu posouvá bod po křivce, ne mezi různými systémy.
