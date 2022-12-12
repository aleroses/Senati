# Inteligencia de Negocios y Dataware

## Foro temático del curso - FR1


### 1.- ¿Cómo construir cubos OLAP en MS SQL Server?

Se deberán seguir los siguientes pasos:

- Se necesitan dos programas esenciales: SQL Server (también se deben instalar las instancias de análisis server) y Visual Studio 2019

- También es necesaria una base de datos multidimensional creada previamente.

- Ahora empezaremos a crear nuestro cubo Olap. Para lo cual tenemos que comenzar creando nuestro proyecto y le damos aceptar.

- Crearemos nuestra conexión a la base de datos la cual creamos en Sql Server, adquirimos su tablas y datos

- Crearemos una Vista de origen de datos que nos permitirá elegir las tablas que conforman nuestro cubo Olap. Para empezar, le damos clic derecho en vista de Origen de Datos y seleccionamos nueva vista de origen de datos.

- Llamaremos nuestras tablas necesarias para crear nuestro cubo Olap, en esta parte del Proceso será consideradas como dimensiones del cubo. Además, puede ser opcional o requerida una tabla tiempo, en el enlace mostrado en la primera parte, también les estoy brindando el código para la creación de esta tabla. (si deseas crear la tabla tiempo solo ejecuta el código en la SqlServer). Para este ejemplo ya tengo una Tabla Tiempo.

- En el asistente se nos mostrar que ya tenemos nuestra Vista de Datos, además se puede visualizar un esquema de las tablas que hemos agregado, es necesario crear el cubo con tablas relacionadas, para poder ver un mejor desempeño de este. Además, en la imagen se nota la tabla tiempo que, aunque no esté relacionada ser la dimensión que indicara el tiempo en el cual se realizaron las operaciones, recordemos que nuestra Base de datos ya tuvo llenado de datos y operaciones ejecutadas.

- Ahora crearemos nuestro Cubo, dando clic derecho en Cubo y seleccionado nuevo cubo.

- Hay que tener en cuenta que usaremos tablas existentes en una base de datos, por eso previamente ya añadimos nuestras tablas, las cuales usaremos para crear nuestro cubo Olap.

- Se nos mostrara todas las tablas que añadimos en nuestra vista de datos, elegiremos las tablas necesarias para realizar nuestro cubo Olap.

- Seleccionamos las medidas que incluirá nuestro Cubo (cantidad, recuento, etc.).

- Se crearán las dimensiones, las Dimensiones están basadas en las tablas que añadimos y ya tendremos nuestro Cubo Olap creado y notaremos que las tablas en el esquema se tornaron de color amarillo, significa que estas tablas están siendo usadas como dimensiones para el cubo.

- Ahora tenemos que procesar las dimensiones para poder realizar el cubo. Haciendo clic derecho en el Cubo. Una vez ejecutado el proceso notaremos que al lado izquierdo del asistente se mostrar nuestras dimensiones y en la parte central, estará en si la tabla de consistencia que contendrá a nuestras dimensiones con sus datos

- Arrastrarnos en los espacios que serán ubicados las tablas, podemos generar cualquier dimensión y los datos de estas se mostrarán en forma de plantilla.


### 2.- ¿Cómo crear conexiones con herramientas visuales?

Para crear una cadena de conexión en Visual Studio:


1. En el menú Herramientas haga clic en Conectar a base de datos.

2. Seleccione un origen de datos de la lista (en este ejemplo Microsoft SQL Server). El proveedor de datos se rellena automáticamente en función de la opción elegida.

> 	dbc_vs_dlg_select_datasource

3. Haga clic en Continuar.

> 	dbc_vs_dlg_add_connection

4. Introduzca el nombre de host del servidor, el nombre de usuario y la contraseña de la base de datos. En este ejemplo nos conectamos a la base de datos ProductsDB en el servidor DBSQLSERV, usando SQL Server para la autenticación.

5. Para terminar haga clic en Aceptar.     
	Si la conexión se establece correctamente, aparecerá en la ventana Explorador de servidores. Para abrir esta ventana puede usar el comando Vista | Explorador de servidores. Para obtener la cadena de conexión con la base de datos, haga clic con el botón derecho en la conexión en la ventana Explorador de servidores y seleccione el comando Propiedades. Ahora aparece la cadena de conexión en la ventana Propiedades de Visual Studio. Recuerde que debe reemplazar los asteriscos con la contraseña antes de pegar la cadena en el cuadro de texto Cadena de conexión de MapForce.


### 3.- ¿Qué otras herramientas aparte de PowerBI de Microsoft permiten crear Dashboard?

Scoro: El software de panel Scoro KPI permite supervisar todos los aspectos de tu negocio en uno (o varios) paneles para que puedas realizar un seguimiento de tu proyecto, trabajo y KPI financieros en tiempo real.

ClicData: Es una plataforma de tablero basada en la nube parecido a Power BI que ofrece con éxito una interfaz gráfica fácil de usar, de arrastrar y soltar, a la vez que proporciona las herramientas para que los usuarios avanzados puedan ofrecer altos niveles de sofisticación.

Sisense: Sisense es un software de análisis de datos que simplifica los datos complejos y los transforma en aplicaciones de análisis. Este software permite explorar datos con la ayuda de la inteligencia artificial para extraer información útil. 

InetSoft: Proporcionan una versión gratuita de su excelente plataforma Style Scope. La edición gratuita de Style Scope es un servidor de tamaño reducido que ofrece tableros y visualizaciones Flash interactivos basados en la web que pueden ser compartidos dentro de una organización.


### 4.- ¿Qué otras herramientas aparte de PowerPivot permiten crear Tablas Dinámicas?

- Infogr.am => Es una herramienta muy fácil de utilizar y su interfaz de usuario es muy amigable.
- CartoDB => Se trata de una plataforma para almacenar y visualizar datos espaciales.
- Piktochart.
- Socrata.
- Tableau Public.


### 5.- ¿Qué otras herramientas aparte de PowerView permiten crear Gráficos?

- RAWGraphs: Es una aplicación que permite crear gráficos de todo tipo, e incluso generar un tipo de gráfico personalizado. Se puede utilizar online o se puede instalar localmente en cada computadora. 

- Infogram: Es una herramienta online que permite generar Infografías, Dashboards, Reportes, Social Media Posts y Mapas, que contengan gráficos dentro. También permite generar gráficos por sí solos.

- Plot.ly: Es una herramienta que permite generar gráficos online o utilizando su librería JavaScript llamada “Plotly.js”.

- Easel.ly: Es una herramienta online gratuita, muy sencilla de utilizar, que permite crear varios tipos de infografías, y entre ellas, gráficos.


### 6.- ¿Qué opina respecto a proceder a la solución de un problema como éste, guiándose tan sólo de casos similares?

A pesar de existir casos similares que pueden ayudar a darle solución al problema, también es importante investigar el problema por sí solo, ya que, un pequeño detalle que sea diferente, aunque parezca simple, puede acarrear errores en la implementación de la solución. Si bien los casos similares pueden servir como ejemplos, lo ideal es resolverlo individualmente para evitar errores a futuro y consecuentemente la pérdida innecesaria de tiempo adicional.



## Bibliografía:

- Lara, (2015) Pregunta 1: ¿Cómo construir cubos OLAP en MS SQL Server?  https://developerlara.blogspot.com/2015/03/crear-cubos-olap-en-sql-server.html

- Altova, (2022) Pregunta 2: ¿crear conexiones con herramientas visuales? https://www.altova.com/manual/es/Mapforce/mapforceprofessional/dbcadonet_constring.html#:~:text=Para%20crear%20una%20cadena%20de%20conexi%C3%B3n%20en%20Visual,...%205%205.Para%20terminar%20haga%20clic%20en%20Aceptar. 

- Sanra M., (2022) Pregunta 3: ¿Qué otras herramientas aparte de PowerBI de Microsoft permiten crear Dashboard? F1:https://datascope.io/es/blog/las-mejores-herramientas-para-hacer-un-dashboard-en-2022/ F2:https://millev.com/power-bi-10-aplicaciones-alternativas-gratuitas-para-crear-dashboards

- Author, (2020) Pregunta 4 ¿Qué otras herramientas aparte de PowerPivot permiten crear Tablas Dinámicas? https://consejossabios.com.mx/que-otras-herramientas-permiten-crear-tablas-dinamicas/

- Federico, (2018) Pregunta 5: ¿Qué otras herramientas aparte de PowerView permiten crear Gráficos? https://www.federico-toledo.com/herramientas-para-graficos-para-reportes/ 

- Laura V., (2022) Pregunta 6: ¿Qué opina respecto a proceder a la solución de un problema como éste, guiándose tan sólo de casos similares? Fuente: Opinión personal.














