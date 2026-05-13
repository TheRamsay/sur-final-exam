---
title: "SUR gaussians"
source_url: https://www.fit.vut.cz/study/course/SUR/public/prednasky/02_bayesovska_teorie/SUR-gaussians.ipynb
raw_path: raw/sur-prednasky/02_bayesovska_teorie/SUR-gaussians.ipynb
format: ipynb
generated: 2026-05-11
---

# SUR gaussians

- Source: [SUR-gaussians.ipynb](../../../raw/sur-prednasky/02_bayesovska_teorie/SUR-gaussians.ipynb)
- URL: https://www.fit.vut.cz/study/course/SUR/public/prednasky/02_bayesovska_teorie/SUR-gaussians.ipynb

<div class="cell code" execution_count="59" colab="{}" colab_type="code" id="L0AMLQhRPc39">

``` python
import matplotlib.pyplot as plt
plt.rcParams.update({'figure.figsize': (8.0, 8.0), 'font.size': 18})
from IPython.display import clear_output

import numpy as np
import math
from scipy.spatial.distance import cdist
from scipy.special import logsumexp

def rand_gauss(n, mu, cov):
    if cov.ndim == 1:
        cov = np.diag(cov)
    assert(mu.ndim == 1 and len(mu) == len(cov) and cov.ndim == 2 and cov.shape[0] == cov.shape[1])
    d, v = np.linalg.eigh(cov)
    return (np.random.randn(n, len(mu)) * np.sqrt(d)).dot(v) + mu

def logpdf_gauss(x, mu, cov):
    assert(mu.ndim == 1 and len(mu) == len(cov) and (cov.ndim == 1 or cov.shape[0] == cov.shape[1]))
    x = np.atleast_2d(x) - mu
    return -0.5*(len(mu)*np.log(2 * np.pi) + np.linalg.slogdet(cov)[1] + np.sum(x.dot(np.linalg.inv(cov)) * x, axis=1))

def plot2dfun(f, limits, resolution, ax=None):
    if ax is None:
        ax = plt
    xmin, xmax, ymin, ymax = limits
    xlim = np.arange(ymin, ymax, (ymax - ymin) / float(resolution))
    ylim = np.arange(xmin, xmax, (xmax - xmin) / float(resolution))
    a, b = np.meshgrid(ylim, xlim)
    img = f(np.vstack([np.ravel(a), np.ravel(b)[::-1]]).T)
    img = (img - img.min()) /(img.max() - img.min()) # normalize to range 0.0 - 1.0
    img = img.reshape(a.shape+img.shape[1:])
    return ax.imshow(img, cmap='gray', aspect='auto', extent=(xmin, xmax, ymin, ymax))

def gellipse(mu, cov, *args, **kwargs):
    """
    Contour plot of 2D Multivariate Gaussian distribution showing
    2 times standard deviation range around the mean.

    gellipse(mu, cov, n) plots ellipse given by mean vector MU and
    covariance matrix COV. Ellipse is plotted using N (default is 100)
    points. Additional parameters can specify various line types and
    properties. See description of matplotlib.pyplot.plot for more details.
    """
    n= kwargs.get('npoints', 100)
    if len(mu) != 2 or cov.shape != (2, 2):
        raise RuntimeError('mu must be a two element vector and cov must be 2 x 2 matrix')

    d, v = np.linalg.eigh(4 * cov)
    d = np.diag(d)
    t = np.linspace(0, 2 * math.pi, n)
    x = v @ np.sign(d) @ np.sqrt(np.abs(d)) @ np.array([np.cos(t), np.sin(t)]) + mu[:,None]
    return plt.plot(x[0], x[1], *args, **kwargs)
```

</div>

<div class="cell markdown" colab_type="text" id="ellaLv1zRAjY">

# K-nearest neighbours example

</div>

<div class="cell code" execution_count="7" colab="{}" colab_type="code" id="bISdY5TGP1T0">

``` python
def k_nearest_neighbours(test_data, class1, class2, k):
    euclidean = cdist(np.r_[class1, class2], test_data)
    i = np.argsort(euclidean.T)
    return np.sum(i[:,:k] >= len(class1), axis=1) / float(k)

x1 = rand_gauss(100, np.array([50, 50]), np.array([[100, 70], [70, 100]]))
x2 = rand_gauss(200, np.array([40, 60]), np.array([[40, 0], [0, 40]]))
plt.plot(x1[:,0], x1[:,1], 'r.', x2[:,0], x2[:,1], 'b.')
ax = plt.axis()

k = 9

def soft_score(x):
  return k_nearest_neighbours(x, x1, x2, k)

def hard_decision(x):
  return (soft_score(x) > 0.5).astype(float)

plt.figure()
plot2dfun(hard_decision, ax, 500)
plt.plot(x1[:,0], x1[:,1], 'r.', x2[:,0], x2[:,1], 'b.')

plt.figure()
plot2dfun(soft_score, ax, 500)
plt.plot(x1[:,0], x1[:,1], 'r.', x2[:,0], x2[:,1], 'b.');
```

<div class="output display_data">

![](../_media/02_bayesovska_teorie/SUR-gaussians/a8f00ea9113af1b93df8ca7aa9accd6388c67bd3.png)

</div>

<div class="output display_data">

![](../_media/02_bayesovska_teorie/SUR-gaussians/e4f6c83fb185c7cdeaf2a58069bf590b3bc7beec.png)

</div>

<div class="output display_data">

![](../_media/02_bayesovska_teorie/SUR-gaussians/6acb0a446b27fe28c110b9e7439b2153bb1207f7.png)

</div>

</div>

<div class="cell markdown" colab_type="text" id="8QDXotpfRfh-">

# Examples of 2D Multivariate Gaussian distribution

</div>

<div class="cell code" execution_count="4" colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;,&quot;height&quot;:548}" colab_type="code" executionInfo="{&quot;elapsed&quot;:1197,&quot;status&quot;:&quot;ok&quot;,&quot;timestamp&quot;:1563426010119,&quot;user&quot;:{&quot;displayName&quot;:&quot;lukas&quot;,&quot;photoUrl&quot;:&quot;&quot;,&quot;userId&quot;:&quot;16549058022837008943&quot;},&quot;user_tz&quot;:-120}" id="gCasOIsaQ-pu" outputId="074fb7a1-9346-4ea2-f04e-afba8886099b">

``` python
mu  = np.array([0.0, 0.0])
cov = np.array([[4.0, -0.8],
                [-0.8, 1.0]])
x = rand_gauss(500, mu, cov)
plt.plot(x[:,0], x[:,1], 'r.', markersize=2)
ax = plt.axis()

np.exp(logpdf_gauss(x, mu, cov))
plt.axis('equal')
plot2dfun(lambda x: 1-np.exp(logpdf_gauss(x, mu, cov)), ax, 500)
plt.title(r'$\mu=\binom{'+str(mu[0])+'}{'+str(mu[1])+r'}\Sigma=\binom{'+str(cov[0,0])+r'\ \ '+str(cov[0,1])+r'}{'+str(cov[1,0])+r'\ \ '+str(cov[1,1])+ r'}$', fontsize=24, pad=15);
```

<div class="output display_data">

![](../_media/02_bayesovska_teorie/SUR-gaussians/71f2cd46f30e28645791f63b8dafd35420e0c47d.png)

</div>

</div>

<div class="cell markdown" colab_type="text" id="NtABQiuaSCVq">

# Example of Gaussian classifier

</div>

<div class="cell code" execution_count="6" colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;,&quot;height&quot;:1000}" colab_type="code" executionInfo="{&quot;elapsed&quot;:1740,&quot;status&quot;:&quot;ok&quot;,&quot;timestamp&quot;:1563425603879,&quot;user&quot;:{&quot;displayName&quot;:&quot;lukas&quot;,&quot;photoUrl&quot;:&quot;&quot;,&quot;userId&quot;:&quot;16549058022837008943&quot;},&quot;user_tz&quot;:-120}" id="0ZlNecXVSCvo" outputId="360d1137-b9de-470d-8572-6e5d110fce50">

``` python
#Generate random data for classes x1, x2 and x3. The data for each class are
#generated from two gaussian distributions.
np.random.seed(0)
x1 = rand_gauss(400, np.array([45, 60]), np.array([[40, 0],   [0, 40]]))
x2 = rand_gauss(600, np.array([50, 40]), np.array([[100, 80], [80, 100]]))
x3 = rand_gauss(500, np.array([30, 50]), np.array([[40, -10], [-10, 40]]))

mus  = [np.mean(x, axis=0) for x in [x1, x2, x3]]
covs = [np.cov(x.T) for x in [x1, x2, x3]]
N = np.array([len(x1), len(x2), len(x3)], dtype=float)
P = N/N.sum()

# Plot the data
plt.plot(
    x1[:,0], x1[:,1], 'r.',
    x2[:,0], x2[:,1], 'g.',
    x3[:,0], x3[:,1], 'b.',
    markersize=5, markeredgecolor='w', markeredgewidth=0
)
plt.xlabel('$x_1$', fontsize=16)
plt.ylabel('$x_2$', fontsize=16)
ax = plt.axis()

plt.figure()

def pdfs_for_all_classes(x):
  return np.vstack([np.exp(logpdf_gauss(x, mu, cov)) for mu, cov in zip(mus, covs)]).T

plot2dfun(pdfs_for_all_classes, ax, 500)
plt.xlabel('$x_1$', fontsize=16)
plt.ylabel('$x_2$', fontsize=16)

# compute posterior probability for class X1
def x1_posterior(x):
  joint_prob = pdfs_for_all_classes(x) * P
  return  joint_prob / joint_prob.sum(axis=1, keepdims=True)

# Plot the data with the posterior probability as the background
plt.figure()
plot2dfun(x1_posterior, ax, 500)
plt.plot(x1[:,0], x1[:,1], 'r.',
         x2[:,0], x2[:,1], 'g.',
         x3[:,0], x3[:,1], 'b.',
         markersize=7, markeredgecolor='k', markeredgewidth=0.5)
plt.xlabel('$x_1$', fontsize=16)
plt.ylabel('$x_2$', fontsize=16);
```

<div class="output display_data">

![](../_media/02_bayesovska_teorie/SUR-gaussians/ee3ab4960173c7af8272829e9f894948049ef84d.png)

</div>

<div class="output display_data">

![](../_media/02_bayesovska_teorie/SUR-gaussians/9249a69bff136f21ce207659d230a01c9e71eede.png)

</div>

<div class="output display_data">

![](../_media/02_bayesovska_teorie/SUR-gaussians/31bf8c9f95f14d638bcca9b5df1c65900cc10cee.png)

</div>

</div>

<div class="cell markdown">

# Classifying non-Gaussian data

</div>

<div class="cell code" execution_count="8">

``` python
def compute_ellipse(mu, cov, n):
    mu = mu.copy()
    if mu.shape == (2,):
        mu.shape = (2, 1)
    if mu.shape != (2, 1) or cov.shape != (2, 2):
        raise RuntimeError('mu must be a two element vector and cov must be 2 x 2 matrix')

    d, v = np.linalg.eigh(4 * cov)
    d = np.diag(d)
    t = np.linspace(0, 2 * math.pi, n)
    x = v @ np.sign(d) @ np.sqrt(np.abs(d)) @ np.array([np.cos(t), np.sin(t)]) + mu

    return x

def gellipse(mu, cov, n=100, *args, **kwargs):
    """
    Contour plot of 2D Multivariate Gaussian distribution.

    gellipse(mu, cov, n) plots ellipse given by mean vector MU and
    covariance matrix COV. Ellipse is plotted using N (default is 100)
    points. Additional parameters can specify various line types and
    properties. See description of matplotlib.pyplot.plot for more details.
    """
    x = compute_ellipse(mu, cov, n)
    return plt.plot(x[0], x[1], *args, **kwargs)

def train_gauss(x):
    """
    Estimates gaussian distribution from data.
    (MU, COV) = TRAIN_GAUSS(X) return Maximum Likelihood estimates of mean
    vector and covariance matrix estimated using training data X
    """
    return np.mean(x, axis=0), np.cov(x.T, bias=True)
```

</div>

<div class="cell code" execution_count="10">

``` python
#Generate random data for classes X1 and X2. The data for each class are
#generated from two gaussian distributions. Hopefully, we will be able to
#learn these distributions from data using EM algorithm implemented in
#'train_gmm' function.
x1 = np.r_[rand_gauss(400, np.array([50, 40]), np.array([[100, 70], [70, 100]])),
           rand_gauss(200, np.array([55, 75]), np.array([[25, 0], [0, 25]]))]

x2 = np.r_[rand_gauss(400, np.array([45, 60]), np.array([[40, 0], [0, 40]])),
           rand_gauss(200, np.array([30, 40]), np.array([[20, 0], [0, 40]]))]

print(x1.shape)

mu1, cov1 = train_gauss(x1)
mu2, cov2 = train_gauss(x2)
p1 = p2 = 0.5

# Plot the data
plt.plot(x1[:,0], x1[:,1], 'r.', x2[:,0], x2[:,1], 'b.')
plt.show();
```

<div class="output stream stdout">

    (600, 2)

</div>

<div class="output display_data">

![](../_media/02_bayesovska_teorie/SUR-gaussians/c7379dddb053e343361061acd1deadda8b6ba637.png)

</div>

</div>

<div class="cell code" execution_count="11">

``` python
def hard_decision(x):
    class_1 = logpdf_gauss(x, mu1, cov1) + np.log(p1) > logpdf_gauss(x, mu2, cov2) + np.log(p2)
    return class_1.astype(np.float)

def x1_posterior(x):
    joint_1 = np.exp(logpdf_gauss(x, mu1, cov1) + np.log(p1))
    joint_2 = np.exp(logpdf_gauss(x, mu2, cov2) + np.log(p2))
    Z = joint_1 + joint_2
    return joint_1 / Z

plt.figure()
plt.plot(x1[:,0], x1[:,1], 'r.', x2[:,0], x2[:,1], 'b.')
ax = plt.axis()
gellipse(mu1, cov1, 100, 'r')
gellipse(mu2, cov2, 100, 'b')
plt.show()

plt.figure(figsize=(16, 8))
plt.subplot(121)
plt.plot(x1[:,0], x1[:,1], 'r.', x2[:,0], x2[:,1], 'b.')
plot2dfun(hard_decision, ax, 100)

plt.subplot(122)
plt.plot(x1[:,0], x1[:,1], 'r.', x2[:,0], x2[:,1], 'b.')
plot2dfun(x1_posterior, ax, 100)
plt.show()
```

<div class="output display_data">

![](../_media/02_bayesovska_teorie/SUR-gaussians/32b0e7694492ad59f0d570d5ab485967cd157e09.png)

</div>

<div class="output display_data">

![](../_media/02_bayesovska_teorie/SUR-gaussians/fe1c2be77551f6195653b0cdfd7d3bccafa1c4d5.png)

</div>

</div>

<div class="cell markdown">

## Building a GMM classifier

</div>

<div class="cell code" execution_count="73">

``` python
plt.rcParams.update({'figure.figsize': (8.0, 8.0), 'font.size': 18})

def plot_gmm(ws, mus, covs, *args, **kwargs):
    for w, mu, cov in zip(ws, mus, covs):
        gellipse2(mu, cov, *args, lw=10*w, **kwargs)

def train_gmm(x, ws, mus, covs):
    # E-step
    log_gamma = np.vstack([np.log(w) + logpdf_gauss(x, m, c) for w, m, c in zip(ws, mus, covs)])
    logevidence = logsumexp(log_gamma, axis=0) #  Marginalize components
    gamma = np.exp(log_gamma - logevidence)
    tll = logevidence.sum()
    gammasum = gamma.sum(axis=1) #  Marginalize datapoints

    # M-step
    ws = gammasum / len(x) # Normalize total responsibility by the number of datapoints
    mus = gamma @ x / gammasum[:, np.newaxis]
    covs = np.array([(gamma[i] * x.T) @ x / gammasum[i] - np.outer(mus[i], mus[i]) for i in range(len(ws))])

    return ws, mus, covs, tll

# Initialize 2 GMM models with full covariance matrices
m1 = 2  # Number of components
mus1 = x1[np.random.randint(1, len(x1), m1)]  #  Initialize means to random points from given class
covs1 = [cov1] * m1 #  Use the full cov matrix for both components
ws1 = np.ones(m1) / m1 #  Use uniform distribution as initial guess for the weights

m2 = 2
mus2 = x2[np.random.randint(1, len(x2), m2)]
covs2 = [cov2] * m2
ws2 = np.ones(m2) / m2

log_likelhood1 = []
log_likelhood2 = []

plt.plot(x1[:,0], x1[:,1], 'r.', x2[:,0], x2[:,1], 'b.')
plot_gmm(ws1, mus1, covs1, c='r')
plot_gmm(ws2, mus2, covs2, c='b')
```

<div class="output display_data">

![](../_media/02_bayesovska_teorie/SUR-gaussians/a67293a230f63bb41a4680c5fda727572f74b636.png)

</div>

</div>

<div class="cell code" execution_count="75" scrolled="false">

``` python
plt.rcParams.update({'figure.figsize': (16.0, 8.0), 'font.size': 18})

for i in range(30):
    ws1, mus1, covs1, tll1 = train_gmm(x1, ws1, mus1, covs1)
    ws2, mus2, covs2, tll2 = train_gmm(x2, ws2, mus2, covs2)
    log_likelhood1.append(tll1)
    log_likelhood2.append(tll2)
    clear_output(wait=True)
    plt.subplot(121)
    plt.plot(x1[:,0], x1[:,1], 'r.', x2[:,0], x2[:,1], 'b.')
    plot_gmm(ws1, mus1, covs1, c='r')
    plot_gmm(ws2, mus2, covs2, c='b')
    plt.subplot(122)
    plt.plot(log_likelhood1, 'r', log_likelhood2, 'b')
    plt.title("Log likellihod of traning data")
    plt.show()
```

<div class="output display_data">

![](../_media/02_bayesovska_teorie/SUR-gaussians/82427b6485be1d314aed7e2c5dc3cc7d016a14f5.png)

</div>

</div>

<div class="cell code" execution_count="76">

``` python
def logpdf_gmm(x, ws, mus, covs):
    return logsumexp([np.log(w) + logpdf_gauss(x, m, c) for w, m, c in zip(ws, mus, covs)], axis=0)

def hard_decision(x):
    log_joint_1 = logpdf_gmm(x, ws1, mus1, covs1) + np.log(p1)
    log_joint_2 = logpdf_gmm(x, ws2, mus2, covs2) + np.log(p2)
    return  (log_joint_1 > log_joint_2).astype(np.float)

def soft_decision(x):
    joint_1 = np.exp(logpdf_gmm(x, ws1, mus1, covs1) + np.log(p1))
    joint_2 = np.exp(logpdf_gmm(x, ws2, mus2, covs2) + np.log(p2))
    Z = joint_1 + joint_2
    return  joint_1 / Z

plt.figure(figsize=(16, 8))
plt.subplot(121)
plt.plot(x1[:,0], x1[:,1], 'r.')
plt.plot(x2[:,0], x2[:,1], 'b.')
plot2dfun(hard_decision, plt.axis(), 500)

plt.subplot(122)
plt.plot(x1[:,0], x1[:,1], 'r.')
plt.plot(x2[:,0], x2[:,1], 'b.')
plot2dfun(soft_decision, plt.axis(), 500)
plt.show()
```

<div class="output display_data">

![](../_media/02_bayesovska_teorie/SUR-gaussians/d5b6ddfc0f48c3bf73a600e7224a0ad65e300c84.png)

</div>

</div>
