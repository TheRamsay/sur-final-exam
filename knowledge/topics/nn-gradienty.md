# Neuronové sítě a gradienty

## Co umět

- Dopředný výpočet jednoduché neuronové sítě.
- Sigmoid/ReLU a požadované nastavení vstupu pro daný výstup.
- Backpropagation a vztah ke gradient descent.
- Jacobian pro plně propojenou vrstvu `y = Wx + b`.
- Newton-Raphson vs gradient descent.

## Přednášky

- [[slides/sur-prednasky/05_neral_networks/NN_CNN_SVM.pdf|NN_CNN_SVM PDF]]
- [[slides/sur-prednasky/05_neral_networks/NN_CNN_SVM.pptx|NN_CNN_SVM PPTX]]
- [[slides/sur-prednasky/05_neral_networks/NN classifier.ipynb|NN classifier notebook]]
- [[slides/sur-prednasky/04_lin_klasifikatory/lin_klasifikatory.pdf|Lineární klasifikátory]] pro perceptron/logistickou návaznost.

## Typické zadání

- Pro zadanou binární síť určete `x`, aby `P(C=A)` bylo 0 nebo 1.
- Odvoďte derivaci chyby podle vybrané váhy.
- Popište Jacobian a jeho použití při gradient descent/backprop.
