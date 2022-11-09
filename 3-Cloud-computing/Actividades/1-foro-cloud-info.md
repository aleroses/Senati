# Cloud Computing

## Foro temático del curso - FR1

### 1.¿Cuáles serán las fortalezas que considera de Azure?    

Los servicios de computación en la nube de Microsoft, conocido como Azure, están compuestos por más de 200 productos y servicios cloud. Se trata de una solución segura, que permite trabajar en un entorno híbrido, donde se pueden ejecutar y administrar las aplicaciones empresariales en la nube, por eso, las ventajas de migrar a Azure son muchas.

🔥 Entre sus principales fortalezas tenemos:

- **Nube híbrida:**   
	Una de las grandes fortalezas de Azure es la nube híbrida. Muchas empresas cuentan con su propio centro de datos y cuando deciden dar el salto a la nube no quieren perder algunos beneficios que les otorga el entorno local. 

- **La recuperación de desastres se resuelve con Azure:**    
	Azure dispone de grandes capacidades de recuperación de desastres. Esto incluye temas como ubicaciones de conmutación por error y objetivos de puntos de recuperación.

- **Gran nivel de integración:**    
	Los servicios y aplicaciones de Microsoft se integran de forma perfecta, ofreciendo una solución ideal para el trabajo en la nube de las empresas.

- **Máquinas virtuales:**   
	El uso de máquinas virtuales es fundamental a la hora de trabajar en la nube, ya que permiten un mayor grado de flexibilidad y escalado, así como una mejor utilización de los recursos disponibles.

- **Facilidad y rapidez de uso:**    
	Azure es una solución muy rápida y sencilla de utilizar para crear entornos de trabajo en la nube. Su alta velocidad de despliegue permite tener listas aplicaciones y otros servicios cloud en muy poco tiempo y sin la necesidad de realizar un gran esfuerzo.

- **Azure ofrece cobertura global:**   
	Azure tiene la ventaja de adaptarse de forma sencilla a los requisitos de rendimiento y utilización de cada empresa, bien sea una empresa local o una que tenga localizaciones en diferentes países.

- **Entorno de desarrollo integrado de Azure:**     
	Azure tiene el beneficio de tener el entorno de desarrollo líder en el mundo: Visual Studio . Como resultado, la curva de aprendizaje habitual asociado con una nueva plataforma se reduce drásticamente

- **Azure se puede implementar en cualquier lugar:**    
	Microsoft ha desarrollado Azure Stack, una extensión de Azure para ejecutar aplicaciones híbridas de forma coherente en el entorno local

❄ Información obtenida de los siguientes sitios web:   

[ILIMIT, (2021)](https://www.ilimit.com/blog/ventajas-migrar-azure/#:~:text=Una%20de%20las%20grandes%20fortalezas%20de%20Azure%20es,algunos%20beneficios%20que%20les%20otorga%20el%20entorno%20local)

[Ibermática,(2021)](https://www.ibermatica365.com/10-beneficios-de-microsoft-azure/)


### 2.¿Qué diferencia encuentra entre Api y ApiRest?

- ¿Qué es API?    
	API significa “interfaz de programación de aplicaciones”. En el contexto de las API, la palabra aplicación se refiere a cualquier software con una función distinta. La interfaz puede considerarse como un contrato de servicio entre dos aplicaciones. Este contrato define cómo se comunican entre sí mediante solicitudes y respuestas. La documentación de su API contiene información sobre cómo los desarrolladores deben estructurar esas solicitudes y respuestas.

- ¿Qué es la API REST?    
	Transferencia de estado representacional abreviado a REST.     
	Las API REST funcionan respondiendo solicitudes de un recurso y devolviendo toda la información relevante sobre el recurso, traducida a un formato que los clientes pueden interpretar fácilmente (este formato lo determina la API que recibe las solicitudes). Los clientes también pueden modificar elementos en el servidor e incluso agregar nuevos elementos al servidor a través de una API REST.

🔥 Las diferencias entre las API y las API REST    

No todas las API son REST, pero todos los servicios REST son API.

Desafortunadamente el enfoque REST, aún siendo uno de los más famosos y usados en época moderna, sigue siendo uno de los más incomprendidos.

REST, que significa Representational State Transfer o sea transferencia del estado, no tiene relación con las operaciones que usan métodos HTTP para efectuar CRUD en la base de datos.

Solo hace falta leer con atención los principios descritos y notaréis que no han sido citados en el uso de los métodos HTTP como ocurre con clientes que se consideran RESTful.

Los servicios HTTP que nosotros creemos o a los que accedemos en nuestras aplicaciones se denomina WEB API o también WEB SERVICES API. El punto sobre el que se concentran no es la transferencia del estado, como señala el enfoque REST, si no la gestión remota de los recursos a visualizar, modificar o crear.

Entonces incluso si se ha convertido de uso común definir nuestras WEB API como servicios REST, en realidad es equivocado, ya que la implementación de un correcto enfoque REST requiere que el client no conozca desde el principio todos los recursos, si no que conozca solo el entry point de las API, o sea los URL o LINK iniciales y que sucesivamente sea el server el que gestione las transiciones de estado, enviando al client los hipervínculos entre un recurso y otro. Este dato puede pasar también a través de un archivo normal JSON que contenga en su interior los LINK que el cliente podrá seguir.

❄ Información obtenida de los siguiente sitios web:   

[Andrés C.,(2022)](https://www.desarrollolibre.net/blog/programacion-basica/api-api-rest-y-api-restful)   

AulaB, (2022) API y API RESTful qué son y las principales diferencias | Aulab Hackademy


### 3.¿Qué servicio(s) le parece más interesantes de aplicar, sustente su respuesta?

Para mí un servicio interesante de aplicar sería el Language Studio, el cual se define como:

es un conjunto de herramientas basadas en interfaz de usuario que le permiten explorar, compilar e integrar características de Azure Cognitive Service for Language en las aplicaciones.

Me parece interesante porque unifica el QnA Maker con LUIS, además de otros servicios como lectura y traducción de textos, etc. Cosa que además de que nos sirve bastante en nuestro PIM, evita el estar conectando un servicio con el otro como era el caso con QnA Maker y LUIS.


❄ Información obtenida de:  

[Microsoft, (2022)](https://learn.microsoft.com/es-es/azure/cognitive-services/language-service/language-studio)


### 4.¿Que diferencias existirán entre Azure y Amazon?

- AWS está enfocado más en modelos server-less proporcionando herramientas completas para dejar aún lado el hardware, licenciamiento y administración costosa.

- Azure está enfocado en modelos de nubes híbridas con la ventaja de que los modelos on-premise conviven mejor por tener ya licenciamiento Microsoft.
 
- AWS cuenta con escalabilidad y flexibilidad natural sin mínimos de consumo.
 
- Azure otorga paquetes de almacenamiento predeterminados.
 
- AWS cuenta ya con productos para soluciones de machine learning altamente automatizados sugiriendo el comportamiento de los algoritmos.

- Azure cuenta con también con productos para ML solo que menos automatizados, es necesario más desarrollo y con ciertas limitantes para la operación y adaptabilidad.


❄ Información obtenida de los siguiente sitios web:

[Helen F.,(2022)](https://www.inbest.cloud/comunidad/aws-vs.-azure-comparativo-general)


### 5.¿Cuál de los servicios implementados le pareció un reto? explique por qué.

Podría decirse que al crear la máquina virtual, porque me demoré bastante y tuve algunas trabas, además, también implementamos un api que conectamos con la nube. Pero en sí diría que el reto lo tenemos en el PIM, ya que estamos usando diversos servicios tales como Language Studio, MySQL, conectado a python, sistema que sirve middleware para insertar datos en el GLPI.
