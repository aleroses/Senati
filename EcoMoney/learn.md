# Proyecto de Innovación y/o Mejora  

Buen día, soy Alexander Velásquez y voy a sustentar este proyecto con la colaboración de mi compañera Palacios Crisanto. Este proyecto se titula: 
> Implementación de una App Móvil (Android) para administrar el reciclaje de materiales en la empresa Mr. JED Ingeniería y Desarrollo - Piura; 2022.

## 1. Introducción  
Este proyecto fue desarrollado para la empresa Mr.JED Ingeniería y Desarrollo en nuestra estadía como practicantes, la cual se especializa en la prestación de servicios tales como:   
- Instalación de cámaras
- Soporte técnico
- Desarrollo de software 

Dicha empresa nos encomendó desarrollar una aplicación móvil llamada `EcoMoney` para mejorar la gestión de los residuos reciclables en la ciudad de Piura. 

Esta app consta de 3 partes: 
- App Administrador
- App Recolector
- App Cliente

## 2. Objetivos  
### Objetivo General  
Optimizar la recolección de residuos reciclables según la demanda de los clientes, a través, de la implementación de tres aplicaciones móviles generando un impacto socio ambiental en la ciudad de Piura.

Debemos tener en cuanta que para alcanzar este objetivo necesitamos adaptarnos a las necesidades de los clientes, lo cual va de la mano con la frecuencia de recolección requerida.  

### Objetivos Específicos  
- Diseñar y construir una aplicación móvil para el administrador, el recolector y para el cliente. 
- Disminuir los desechos de residuos en las calles. 
- Generar satisfacción en los usuarios al recibir un incentivo según el volumen de material reciclable.

## 3. Descripción de la innovación y/o mejora 
Sabiendo que la ciudad de Piura enfrenta un problema constante de acumulación de basura en las calles debido a la mala gestión de la recolección de residuos sólidos, se decidió contribuir con el cuidado del ambiente mediante la implementación de tres aplicaciones móviles que gestionen e incentiven el reciclaje en los ciudadanos. 

Este proyecto se desarrollo usando las siguiente tecnologías: 
- Patron de software MVVM: Separa la lógica de presentación de los datos de la lógica de negocio (funcionalidades), facilitando el mantenimiento y la evolución de la aplicación.
	- Model: representa los datos y la lógica de negocio de la aplicación.
	- View: es la interfaz de usuario que permite la interacción con la aplicación.
	- ViewModel: actúa como un intermediario entre la vista y el modelo, proporcionando una representación de los datos del modelo que la vista puede mostrar y manejar.
- C#: Lenguaje de programación  
- Xamarin forms: Lenguaje de marcado 
- Firebase: Gratis, 5000 personas, no relacional (para pruebas)  
- Google Maps  

Algunas características:  
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
- Inicio: Modelado del negocio 
	- Análisis de negocio: 
		Aborda el manejo actual de los residuos y de su recolección. Se identifican problemas y se elabora Diagrama de Ishikawa y Diagrama de Pareto. 
	- Modelado del negocio:  
		Describe la situación actual de la recolección de residuos. Se elaboran Diagrama de paquetes y Diagrama de casos de uso. 
- Elaboración: Factibilidad del proyecto  
	- Análisis de requerimientos: 
		Condiciones o características que debe cumplir un proyecto.
		- Registro de clientes 
		- Registro de materiales 
	- Formulación del proyecto: 
		Modelar el sistema: Objetivos y alcance del proyecto.
	- Análisis de factibilidad:  
		- F. Técnica: Máquinas, herramientas: $ 6 465.00
		- F. Operativa: Recurso Humano: $ 7 200.00
		- F. Económica: 
- Construcción: Prototipado de las apps 
	- Modelado del sistema: Diagrama de paquetes del sistema y Diagrama de casos de uso. 
	- Implementación y Pruebas: Ver capturas en anexos
- Transición: Lanzamiento de las apps 
	- Despliegue del producto: Se prueba en dispositivos Android 
	- Entrega del documentación 


## 13. Conclusiones  
- La implementación de las aplicaciones móviles influye significativamente en el proceso de reciclaje en las familias, además, disminuirá los niveles de contaminación en la ciudad. 
- La implementación promueve e influencia la economía, al generar empleos dignos, además, de recompensar a cada usuario al comprarle los residuos que generó durante la semana estimulando y mejorando el reciclaje en la ciudad de Piura, Perú. 
- Se llegó a la conclusión de que el teléfono móvil, se convierte en una gran herramienta a la hora de adquirir buenos hábitos.