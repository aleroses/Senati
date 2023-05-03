# Proyecto de Innovación y/o Mejora  

## 1. Introducción  
Este proyecto fue desarrollado para la empresa Mr.JED Ingeniería y Desarrollo en nuestra estadía como practicantes, la cual se especializa en la prestación de servicios tales como:   
- Instalación de cámaras
- Soporte técnico
- Desarrollo de software 

Dicha empresa nos encomendó desarrollar una aplicación móvil llamada `EcoMoney` para mejorar la gestión de los residuos reciclables en la ciudad de Piura. 

## 2. Objetivos  
### Objetivo General  
El propósito principal del proyecto de innovación y mejora es mejorar la eficiencia en la recolección de residuos reciclables, adaptándose a las necesidades de los clientes mediante la implementación de tres aplicaciones móviles. De esta manera, se busca generar un impacto positivo tanto en el ámbito social como ambiental en la ciudad de Piura.

El objetivo general del proyecto es disminuir el desecho de residuos en las calles, generando un impacto socio ambiental positivo en la comunidad. 

### Objetivos Específicos  
Los objetivos específicos son diseñar y construir una aplicación móvil para el administrador, el recolector y el cliente, disminuir el desecho de residuos a las calles y generar satisfacción en los usuarios al recibir un incentivo según el volumen de material reciclable.

## 3. Descripción de la innovación y/o mejora 
Sabiendo que la ciudad de Piura enfrenta un problema constante de acumulación de basura en las calles debido a la mala gestión de la recolección de residuos sólidos, se decidió contribuir con el cuidado del ambiente mediante la implementación de tres aplicaciones móviles que gestionen e incentiven el reciclaje en los ciudadanos. 

Este proyecto se desarrollo usando C#, Xamarin Forms y Firebase. 

Estas son algunas características de las aplicaciones:  
1. App Administrador: Esta aplicación permitirá a los administradores de la empresa 
	- Registrar recolectores contratados. 
	- Registrar los materiales a recolectar. 
	- Asignar la recolección de estos materiales. 
2. App Recolector: 
	- Afiliar a los nuevos clientes 
	- Recibir notificaciones sobre las solicitudes de los clientes 
	- Registrar el material que se recoja. 
3. App Cliente: Esta aplicación estará disponible para los ciudadanos que deseen reciclar sus residuos:
	- Solicitar el servicio de recolección.  
	- Revisar los materiales vendidos 

## 4. Diagrama de Proceso Actual 
- Usuario: Genera los residuos 
- Recolector: 
	- Recoge y lleva los residuos al vehículo
	- Lleva los residuos al relleno sanitario 

## 5. Diagrama de Proceso Mejorado 
- Administrador: 
	- Registra los productos (materiales a reciclar)
	- Registra recolector 
	- Asigna solicitudes  
- Recolector: 
	- Ingresa sus credenciales (login)
	- Afilia clientes 
	- Mapea solicitudes (google maps)
	- Obtiene dirección y va al punto de la solicitud 
	- Selecciona los productos 
	- Registra pesajes 
	- Realiza el pago  
- Cliente 
	- Ingresa credenciales (login)
	- Solicita recojo 

## 6. Diagrama de Ishikawa 
- Inadecuada gestión en la recolección de residuos 
	- Método: 
		- Escasa cobertura de recolección 
		- Inadecuada frecuencia de recolección 
		- Deficiente plan de recolección 
	- Materiales: 
		- Equipamiento viejo o en mal estado 
		- Escasos vehículos de recolección 
	- Mano de Obra: 
		- Personal poco comprometido 
		- Escasa supervisión 
	- Medio Ambiente: 
		- Ciudadanos insatisfechos 
		- Alta morosidad de impuestos  

## 7. Diagrama de Pareto 
FI representa la cantidad total de eventos hasta un punto específico en un conjunto de datos, mientras que FR y FRA se refieren a la proporción de eventos en relación con el número total de observaciones en un conjunto de datos. Además, FR se puede expresar como una frecuencia absoluta o relativa, mientras que FRA se refiere específicamente a la frecuencia relativa acumulada

- Causas: 
	- Inadecuada frecuencia de recolección
	- Deficiente plan de recolección
	- Escasa cobertura de recolección
	- Ciudadanos insatisfechos
	- Equipamiento viejo o en mal estado
- Prioridad: (0 - 10)
- FI: Frecuencia acumulada 
- FR: Frecuencia relativa y absoluta 
- FRA: Frecuencia relativas acumuladas 

Existen 5 causas raíz de mayor prioridad entre todas (izquierda), estas se denominan los “pocos vitales”, el resto (derecha) es denominado como los “muchos triviales”. De las 5 causas raíz con la implementación de las aplicaciones propuestas se está dando solución a 4 de estas

## 8. KPI Principal (Indicador clave de rendimiento)
Su finalidad es medir el rendimiento de los procesos de recolección de residuos. Para el presente proyecto se consideran las métricas más importantes, tomando en cuenta la naturaleza de los problemas identificados.  

Para el problema de mayor relevancia: **Inadecuada gestión en la recolección de residuos**, se consideran las siguientes métricas: 
- Meta de recolección. Está determinado por la demanda de los clientes afiliados al sistema propuesto de recolección de residuos reciclables.
- Frecuencia de recolección. Está determinado por la frecuencia actual de recolección de residuos ofrecida por la municipalidad provincial de Piura. 
- Incumplimientos. Está determinada por la cantidad de veces que la recolección de residuos no se pudo realizar

Analizando los datos: 
- Noviembre: 
	- Meta: 8
	- Frecuencia recolección actual: 4 
	- Incumplimientos: 100%
	- Eficaz: 50.00%
	- Eficiente: 0.00%
	- Efectividad: 0.00%
- Diciembre: 
	- Meta: 10
	- Frecuencia recolección actual: 3 
	- Incumplimientos: 233.33%
	- Eficaz: 30.00%
	- Eficiente: -40.00%
	- Efectividad: -12.00%
- Enero: 
	- Meta: 9
	- Frecuencia recolección actual: 4 
	- Incumplimientos: 125.00%
	- Eficaz: 44.44%
	- Eficiente: -11.11%
	- Efectividad: -4.94%


- Inadecuada gestión en la recolección de residuos
- Arrojo constante de basura en lugares no autorizados
- Falta de contenedores de reciclaje en puntos estratégicos del distrito

## 9. Implementación | Planos de Proyecto 
Anexo 3: pág. 76

## 10. Costos - Inversión 

Inversión: S/. 13 665.0

- Operativo: Costo parcial de los recursos humanos
	- Mensual: S/ 7,200.00
- Técnico: Suma de costos parciales correspondientes a las máquinas, equipos, herramientas, materiales e insumos fijos.
	- Mensual: S/ 6,465.00

## 11. Costos - Inversión | Retorno de Inversión
Retorno de Inversión de S/. 16 335.00  

|Inversión única| Precio de venta| Beneficio    | 
|---------------|----------------|--------------|
|S/ 13,665.00   | S/ 30,000.00   | S/ 16,335.00 |

El resultado se interpreta de la siguiente forma: “Por cada nuevo sol invertido en el proyecto la empresa ha de recuperar S/ 0.20”

## 12. Cronograma de Actividades 

## 13. Conclusiones  
- La implementación de las aplicaciones móviles influye significativamente en el proceso de reciclaje en las familias, además, disminuirá los niveles de contaminación en la ciudad. 
- La implementación promueve e influencia la economía, al generar empleos dignos, además, de recompensar a cada usuario al comprarle los residuos que generó durante la semana estimulando y mejorando el reciclaje en la ciudad de Piura, Perú. 
- Se llegó a la conclusión de que el teléfono móvil, se convierte en una gran herramienta a la hora de adquirir buenos hábitos.