---
title: "hmm varecky"
source_url: https://www.fit.vut.cz/study/course/SUR/public/prednasky/IKR/06_hmm/hmm_varecky.ppt
raw_path: raw/sur-prednasky/IKR/06_hmm/hmm_varecky.ppt
format: ppt
generated: 2026-05-11
---

# hmm varecky

- Source: [hmm_varecky.ppt](../../../../raw/sur-prednasky/IKR/06_hmm/hmm_varecky.ppt)
- URL: https://www.fit.vut.cz/study/course/SUR/public/prednasky/IKR/06_hmm/hmm_varecky.ppt
- Note: extracted from legacy binary PowerPoint; slide layout and images are not preserved.

## Text block 1

cernocky@fit.vutbr.cz

## Text block 2

Rozpoznávač jeté vařečky
s HMM

## Text block 3

Honza Černocký
cernocky@fit.vutbr.cz

## Text block 4

Úkol

## Text block 5

Analýza problému

## Text block 6

Na data je potřeba se nejprve podívat a určit, čím se asi tak taková vařečka odlišuje od jiných.

## Text block 7

Parametrizace

## Text block 8

Segmentace
Feature extraction pomocí šířky a jasu
Možnost 1: Diskrétní symboly
SÚ je „světlá úzká“
PÚ je „polotmavá úzká“
TŠ je „tmavá a široká“
Možnost dvě
Spojité hodnoty obou veličin.

## Text block 9

Jak rozpoznat jetou vařečku I.
Tvrdé srovnání se sekvencí symbolů

## Text block 10

Vařečka je přesně sekvence symbolů
[SÚ SÚ SÚ SÚ SÚ SÚ SÚ PÚ PÚ TŠ TŠ]
Odpověď je ANO / NE
Problém: rozpozná to pouze vařečky této délky.

## Text block 11

Jak rozpoznat jetou vařečku II.
Konečný stavový automat

## Text block 12

Stavový automat přijme nebo nepřijme vstupní sekvenci symbolů.
Dokáže vařečky různé délky.
Problém: rozpozná bez problémů i pahýlek vařečky..

## Text block 13

Jak rozpoznat jetou vařečku III.
Stochastický konečný stavový automat (Markovův model)

## Text block 14

Stavový automat násobí pravděpodobnosti, dá nám likelihood „vyslání“ sekvence symbolů modelem:
0.7x0.7x0.7x0.7x0.7x0.7x0.3x0.6x0.6x0.6x0.4x0.3x0.7
Slušná vařečka bude mít vysokou likelihood .
Problém: pokud se v jediném symbolu spleteme (třeba smítko na vařečce), máme
smůlu.

## Text block 15

The ultimate solution
Skrytý Markovův model

## Text block 16

Každý stav si pro každý vektor určí, jak je pravděpodobné, že je vstupní vektor „jeho“ – tak, že pro něj vyhodnotí funkci hustoty rozdělení pravděpodobnosti.
V tomto příkladu jsme určili stavy ručně – budou podle nás representovat SÚ, PÚ a TŠ
Běžně si toto ale dělají HMM při trénování SAMY !!!

## Text block 17

Početní cvičení - images

## Text block 18

Rozpoznat jetou vařečku od jiného kuchyňského náčiní.

## Text block 19

SÚ

## Text block 20

PÚ

## Text block 21

TŠ

## Text block 22

SÚ

## Text block 23

PÚ

## Text block 24

TŠ

## Text block 25

0.7

## Text block 26

0.3

## Text block 27

0.6

## Text block 28

0.4

## Text block 29

0.3

## Text block 30

0.7

## Text block 32

0.3

## Text block 33

0.6

## Text block 34

0.4

## Text block 35

0.3

## Text block 36

0.7

## Text block 37

Funkce
Hustoty
Rozdělení
Pravděpodobnosti
Pro SÚ

## Text block 38

Funkce
Hustoty
Rozdělení
Pravděpodobnosti
Pro PÚ

## Text block 39

Funkce
Hustoty
Rozdělení
Pravděpodobnosti
Pro TŠ
