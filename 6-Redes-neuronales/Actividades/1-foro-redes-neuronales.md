# Redes Neuronales

## Foro temático del curso - FR1

1. ¿Qué es una Red Neuronal?    
Una red neuronal es un modelo de computación cuya estructura de capas se asemeja a la estructura interconectada de las neuronas en el cerebro, con capas de nodos conectados. Una red neuronal puede aprender de los datos, de manera que se puede entrenar para que reconozca patrones, clasifique datos y pronostique eventos futuros.

Link: [¿Qué es una red neuronal? - MATLAB & Simulink (mathworks.com)](https://es.mathworks.com/discovery/neural-network.html#:~:text=Una%20red%20neuronal%20es%20un%20modelo%20de%20computaci%C3%B3n,reconozca%20patrones%2C%20clasifique%20datos%20y%20pronostique%20eventos%20futuros.)

2. ¿Que especificaciones debe tener una red neuronal genérica?    
-   Una función básica que reciba datos de entrada y salida para "entrenar" (calcular o iterar) los coeficientes hasta llegar al mejor valor.
-   Debes especificar como entrada, la cantidad de hidden layers en tu red.
-   Deberías dibujar una gráfica de input y output para observar patrones que te ayuden mejor a diseñar.
-   Debe haber una función que acepte nuevos datos.
-   Un algoritmo base (default) debe emplearse con un error bajo.
-   La función debe aceptar series de datos en el tiempo si alterar mucho su arquitectura.
-   Debe haber formas alternativas de calcular error o de extender las funciones.
-   Debe poder hacer cálculos de redes de Hopfield y self organizing maps u otro tipo de red.

Link: [Construyamos una red neuronal con Excel - Rankia](https://www.rankia.us/blog/comstar/3242558-construyamos-red-neuronal-excel#%C2%BFque-especificaciones-debe-tener-una-red-neuronal-gen%C3%A9rica?)

3. ¿Cuántas capas tiene tu red neuronal creada?      
- Capa de entrada: neuronas que reciben datos o señales procedentes del entorno.
- Capa oculta: no tiene conexión directa con el entorno, esta puede ser precedida por otras capas ocultas, o bien, por la capa de entrada.
- Capa de salida: neuronas que proporcionan la solución de la RN.

Link: [4. Capas de una Red Neuronal · Capa de entrada: neuronas que reciben... | Download Scientific Diagram (researchgate.net)](https://www.researchgate.net/figure/Figura-III4-Capas-de-una-Red-Neuronal-Capa-de-entrada-neuronas-que-reciben-datos-o_fig3_315762548)

4. ¿En qué consiste algoritmo base?    
El algoritmo prueba cada posible estado del atributo de entrada con cada posible estado del atributo de predicción, y calcula las probabilidades de cada combinación según los datos de aprendizaje. Puede usar estas probabilidades para las tareas de clasificación o regresión, para predecir un resultado basado en algunos atributos de entrada. También se puede usar una red neuronal para el análisis de asociación.

Es útil para analizar datos de entrada complejos, como desde un proceso comercial o de fabricación, o problemas empresariales para los que hay disponible una cantidad significativa de datos de entrenamiento, pero para los que las reglas no se pueden derivar fácilmente mediante el uso de otros algoritmos.

Link: [Algoritmo base red neuronal de Microsoft | Microsoft Learn](https://learn.microsoft.com/es-es/analysis-services/data-mining/microsoft-neural-network-algorithm?view=asallproducts-allversions)

5. ¿En qué consiste una gráfica de input y output para que te ayude a diseñar mejor?     

**Input:**     
Son los datos o valores iniciales, necesarios para poder realizar un cálculo o actividad; estos valores pueden ser de diversos tipos:

-   Numéricos.
-   Carácter
-   Booleanos.
-   Algoritmos.
-   Entre otros tipos de datos, se pueden tener inputs de muchos más tipos.

En fin, como podemos analizar, los input, son el punto de partida con el cual un algoritmo o programa, adquiere los datos suficientes para poder trabajar.

**Output:**     
Cuando ya se tienen los datos iniciales para que un algoritmo o programa pueda funcionar; se realizan diversos cálculos y funciones, cómo fue mencionado con anterioridad; por lo tanto, el resultado de estos procesos, son unos datos de salida u output.

Link: [Qué es Input y Output en Algoritmos e Informática | Diccionario (byspel.com)](https://byspel.com/que-es-input-y-output-en-algoritmos-e-informatica-diccionario/)