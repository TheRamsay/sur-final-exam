---
title: "SVM"
source_url: https://www.fit.vut.cz/study/course/SUR/public/prednasky/05_neral_networks/SVM.ipynb
raw_path: raw/sur-prednasky/05_neral_networks/SVM.ipynb
format: ipynb
generated: 2026-05-11
---

# SVM

- Source: [SVM.ipynb](../../../raw/sur-prednasky/05_neral_networks/SVM.ipynb)
- URL: https://www.fit.vut.cz/study/course/SUR/public/prednasky/05_neral_networks/SVM.ipynb

<div id="8ae4a22d" class="cell markdown">

# SVM example

</div>

<div id="4b3a058c" class="cell code" execution_count="30" scrolled="false">

``` python
import matplotlib.pyplot as plt
plt.rcParams.update({'figure.figsize': (8.0, 8.0), 'font.size': 10})
import numpy as np
from sklearn import svm, datasets
from numpy.random import randn

def plot2dfun(f, limits, resolution, ax=None):
    if ax is None:
        ax = plt
    xmin, xmax, ymin, ymax = limits
    ylim = np.arange(ymin, ymax, (ymax - ymin) / float(resolution))
    xlim = np.arange(xmin, xmax, (xmax - xmin) / float(resolution))
    a, b = np.meshgrid(xlim, ylim)
    img = f(np.vstack([np.ravel(a), np.ravel(b)]).T)
    img = img.reshape(a.shape+img.shape[1:])
    ax.imshow(img[::-1], cmap='gray', aspect='auto', extent=(xmin, xmax, ymin, ymax))
    plt.xlabel('$x_1$', fontsize=16)
    plt.ylabel('$x_2$', fontsize=16)
    return a, b, img
```

</div>

<div id="349ba227" class="cell code" execution_count="65">

``` python
# Create some training data for two classes
n = 10 # Controls the amount of the training data
x1 = np.r_[randn(n, 2) + np.array([1, 3]),
           randn(n, 2) + np.array([-2, -2]),
           randn(n, 2) + np.array([0, 0])]

x2 = randn(n, 2) + np.array([-4, 4]) # Linearly separable problem

# Uncomment the following lines to make the problem "more difficult"
x2 = np.r_[x2, randn(n, 2) + np.array([-4, -4])]
#x2 = np.r_[x2, randn(n, 2) + np.array([2, -2]), randn(n, 2) + np.array([4, 4])]

t1 = np.ones(len(x1))
t2 = np.zeros(len(x2))

X = np.r_[x1, x2]
Y = np.r_[t1, t2]

plt.plot(*x1.T, 'r.', *x2.T, 'b.')
ax = plt.axis()
```

<div class="output display_data">

![](../_media/05_neral_networks/SVM/29988b91e6cd5a34268268a3e34d73e1a076f147.png)

</div>

</div>

<div id="f6fa2965" class="cell code" execution_count="66">

``` python
C = 1e1 # SVM regularization parameter (lower C => more regularization)

# train SVM using a chosen kernel
#clf = svm.SVC(kernel='linear',                   C=C).fit(X, Y)
#clf = svm.SVC(kernel='rbf',  gamma=0.7,         C=C).fit(X, Y)
clf = svm.SVC(kernel='poly', degree=3, coef0=1, C=C).fit(X, Y)

# plot decision function y as grayscale immage
xx, yy, zz = plot2dfun(lambda x: clf.decision_function(x), ax, 500)

#plot training data
plt.plot(*x1.T, 'r.', *x2.T, 'b.', markersize=10)

# plot decision boundary (y=0) and margin boundaries (y=1 amd y=-1)
plt.contour(xx, yy, zz, [-1, 0, 1], colors=['b','k','r'], linestyles=['dotted','solid','dotted'])

# show support vectors in green circles
plt.plot(*X[clf.support_].T, 'go', markersize=10, fillstyle='none')
plt.show()
```

<div class="output display_data">

![](../_media/05_neral_networks/SVM/00153553c226a7ec35adbf24f3c97c34d6b8299f.png)

</div>

</div>
