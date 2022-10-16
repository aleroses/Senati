# Azure - LUIS 
[Azure for students](https://azure.microsoft.com/en-us/free/students/)

## Crear grupo de recursos
- 🏡**Home** (inicio)
- Navigate (navegar)
- [💎] Resource groups (Grupos de recursos)
	- ➕ Crear
	- 📌Basics (datos básicos)
		- Project details (Detalles del proyecto)
			- Resource group (Grupo de Recursos): **Demo-luis**
		- Resource details (Detalles del Recurso)
			- (US) West US 3 (Mas cercano)
		- Next: Tags (Siguiente etiquetas)
	- 📌 Tags (Etiquetas)
		- Name: Ejemplo-two
		- Value: Ale Vel
		- Next: Review + create (siguiente: revisar y crear)
	- 📌 Review + create (Revisar y crear)
	- Create (Crear) Validando 


### Crear dentro del grupo Demo-luis
- ➕ Crear
- 🔎 Search the Marketplace - Buscar LUIS 
- {🔵} Language Understanding
- Create or Ingresar y luego crear 
	- 📌 Basic / Aspectos básicos 
		- Create options / Opciones de creación: 
			- **Prediction** se recomienda
			- Both / Ambos
		- Project Details / Detalles del proyecto
			- Resource group / Grupo de recursos: 
				- Elegir: Demo-luis
		- Instance Details / Detalles de la instalación
			- Nombre: Ale-luis-two
		- Authoring Resource / Recurso de creación 
			- Región: West US
			- Authoring pricing tier / Plan de tarifa de creación: 
				- **Standard S0** se recomienda
				- Free F0
		- Prediction Resource / Recurso de predicción
			- Región: West US
			- Prediction pricing tier / Plan de tarifa de predicción: 
				- **Standard S0** se recomienda
				- Free F0
	- Next: Network / Siguiente Etiqueta ▶
	- 📌Network / Red
		- Network for authoring and prediction resource / Red para recurso de creación y predicción
			- Type / Tipo: 
				- All networks, including the internet, can access this resource. 
				- Todas las redes, incluso internet, pueden acceder a este recurso.
	- Next: Tags / Siguiente Etiquetas ▶
	- 📌 Tags / Etiquetas:
		- Name / Nombre: Bot-luis
		- Value / Valor: Lenguaje español
	- Net: Review + create / Siguiente: Revisar y crear ▶

> ✅ Validation Passed / Validación aprobada

🟦 Create / Crear

![Luis](https://i.postimg.cc/y845cncZ/1-luis.png)

- 🟦 Got to resource group / Ir al grupo de recursos

📌 Nota: Primero se creo en **Both** (ambos) pero luego regresamos a este mismo apartado y creamos **Prediction**. 


## Crear producto
Googleamos [luis.ai](https://www.luis.ai/)

- 🟦 Login / Sign up

🔥 Welcome to the Language Understanding Intelligent Service (LUIS)   
- Subscription:
	- Azure for Students
	- 🟦 Select or create an authoring resource 

🔥 Choose an authoring resource   
- Azure directory / Directorio predeterminado
	- SENATI
- Azure subscription: 
	- Azure for Students / Azure para estudiantes
- Authoring resource: 
	- Elegir el que termina en -Authoring
	- Alexanderluis-Authoring
- 🟦 Done


🔥 Conversation apps
- ➕ New app
- Create new app
	- Name: SENATI-luis
	- Culture: Spanish 
	- Prediction resource
		- Alexander-luis
- 🟦 Done

Cerramos ventana emergente: How to create an effective LUIS app 

🔥 Intents 
- ➕ Create
- Create new intent
	- **Reclamos**
- 🟦 Done
- Example user input 
	- El instructor falta mucho
	- Presionar tecla **Enter**

> ✅ Submit utterance completed

- Example user input 
	- No hay teléfono de contacto para consultar mis dudas
	- Los form de sinfo no responden
	- Nunca contestan las llamadas
	- La asistente no atiende bien
	- Han subido la pensión 
	- Las clases están grabadas, todo es virtual

 📌 En este apartado tenemos opciones para Delete and ◾◾◾ Edit utterance. Para editar debemos seleccionar el texto ingresado previamente. 

🔥 Creamos mas Intents    
> Intents: Panel izquierdo  

- ➕ Create
- Create new intent
	- **Saludos**
- 🟦 Done
- Example user input 
	- Hola
	- Buenos días
	- Buen día 
	- Buenas noches
	- Hola brothers
	- Hola bro

Intents ▶ None: son preguntas que LUIS no entiende:   
- Te invito al cine
- No me gustas
- No sabes nada
- No te entiendo 

> Intents: Panel izquierdo  

- ➕ Create
- Create new intent
	- **Matricula**
- 🟦 Done
- Example user input 
	- Cuando inicia el 2do semestre del año
	- Se me pasó la fecha de mi matricula
	- No sale mi recibo 
	- Donde pago la pensión 
	- En que bancos puedo pagar


🔥 Entities   
> Entities: Panel izquierdo  

- ➕ Create 
- Create an entity 
	- Name: Motivos
	- Type: 🔘 List
- 🟦 Create

> ✅ Create entity completed

List items:
- Normalized values
	- Instructor 
	- Empleado administrativo 
	- Procedimiento 
	- Pensiones 

> Intents: Panel izquierdo   

- Reclamos 
	- Seleccionamos una palabra como: 
	- Pension: ➡ Motivos ➡ Pensiones 
	> ✅ Predictions loaded
	- Asistente: Motivos ➡ Empleado administrativo 
	- Nunca contesta: Motivos ➡ Procedimiento 
	- Instructor: Motivos ➡ Instructor 
	- Teléfono de contacto: Motivos ➡ Procedimientos 
	- Form de sinfo: Motivos ➡ Procedimientos 
	- Todo es virtual: Motivos ➡ Procedimientos 

> 💢**Train**: Panel superior 
> ✅ Train completed 


> 🧪 **Test**

- El profesor no enseña nada
	- None
- El instructor no enseña nada 
	- None
- El instructor no entra a la clase 
	- Reclamos
- Buenas
	- Saludos
- Hello señorita 
	- None
- No tengo información del inicio de semestre 
	- Matricula 


> **MANAGE**: Panel superior 

> Azure Resources: Panel izquierdo 


Prediction Resources
- 🟦 Add prediction resource
	- Add a prediction resource 
		- Azure directory: SENATI / Predeterminado  
		- Azure subscription: Azure para estudiantes
		- Prediction resource: Ale-luis-two
	- 🟦 Done

> ✅ The prediction resource added.


> 🛂 **Publish** Panel superior 

Choose your publishing slot and settings 
- 🔘 Staging Slot 
- 🟦 Done

> ✅ Publish app 'SENATI-luis' completed

> 🛂 Nuevamente **Publish** Panel superior 

- 🔘 Production Slot 
- 🟦 Done

> ✅ Publish app 'SENATI-luis' completed


- Example Query: Copiamos código 
- Vamos al navegador: Pegamos código
	- Modificamos = YOUR_QUERY_HERE
	- No puedo pagar
	- `query=No puedo pagar`

Buscar extensión [JSONView](https://chrome.google.com/webstore/detail/json-viewer/efknglbfhoddmmfabeihlemgekhhnabb)

![Resultado Luis](https://i.postimg.cc/tRB3R36h/2-luis-json.png)

📌 Buscar: Leer json con php 
- Página web simple
- Formulario
- Caja de texto
- Botón 

🔥 Ignorar esto :v 🔥
- `Create a new prediction resource` 
		- Azure subscription: Azure para estudiantes 
		- Azure resource group: grupoLuis
		- Azure resource name: alexander-prediccion
		- Location: West us
		- Pricing tier: F0
		- ☑ I confirm that I gave reviewed and ...
	🟦 Done
	- Ignorar lo de arriba XD


[Clase 18.08.2022 - 1era parte - Duration 1:21:54](https://senatipe-my.sharepoint.com/personal/rhuarcaya_senati_pe/_layouts/15/stream.aspx?id=%2Fpersonal%2Frhuarcaya%5Fsenati%5Fpe%2FDocuments%2FRecordings%2F202220%2DPIAD%2D608%2DTEC%2DNRC%5F30333%5F000173395%2D20220818%5F174612%2DGrabaci%C3%B3n%20de%20la%20reuni%C3%B3n%2Emp4)

---
## Crear BD-SQL en Azure
[Azure for students](https://azure.microsoft.com/en-us/free/students/)

- Home
- Buscar: 🛢 SQL Database 
- 🟦 Crear Base de datos SQL
- 📌 Básico
	- Suscripción: Azure para estudiantes
	- Grupo de recursos: Demo-luis
	- Nombre bd: ventas-azure
	- Servidor: `Crear nuevo`
	- Nombre del servidor: servidor-one 
	- Ubicación: (US) West US
	- Método de autenticación: Uso de autenticación de SQL
	- Inicio de sesión del adm: admin-ale
	- Contraseña: West-servidor-01
	- Confirmar: West-servidor-01
- 🟦 Aceptar 
	- ¿Quiere usar un grupo elástico de SQL?: No
	- Entorno de carga de trabajo: Producción 
	- Proceso y almacenamiento: 
		- `Configurar base de datos`
		- Nivel de proceso: Sin servidor
		- Número max de núcleos: 2
		- Numero min de núcleos: 0,5 Núcleos 
			- 2,02GB / 3GB MEMORIA
	- 🟦 Aplicar
	- Redundancia del almacenamiento de copias de seguridad
		- 🔘 Almacenamiento de copias de seguridad con redundancia local
- Siguiente: Redes
- 📌 Redes
	- Método de conectividad: Punto de conexión público
	- Permitir que los servicios y recurso de Azure:  🟣 Si
	- Agregar dirección IP del cliente actual: 🟣 Si
- Siguiente: Seguridad
- 📌 Seguridad  
- Siguiente: Configuración adicional  
- 📌 Etiquetas 
- Siguiente: Revisar y crear 
- 🟦 Crear

![Luis BD](https://i.postimg.cc/xTqnfvmz/3-luis-bd.png)

- 🟦 Ir al recurso

- 🟦 Ver cadenas de conexión 
- **Editor de consultas**: Panel izquierdo 
	- Usuario: admin-ale 
	- Contraseña: West-servidor-01
- 🟦 Aceptar

### Creamos una tabla 
Consulta 1 ✖

```sql
create table vendedores (
	id_ven int primary key identity(1,1),
	nom_ven varchar(20) not null,
	ape_ven varchar(20) not null
)
```

▶ Ejecutar    
> Consulta realizada correctamente

```sql
insert into [dbo].[vendedores] values('Juan', 'Alva')
insert into [dbo].[vendedores] values('Diego', 'More')
insert into [dbo].[vendedores] values('Andre', 'Perez')
```

▶ Ejecutar    
> Consulta realizada correctamente

Veremos en el panel izquierdo todo lo que vamos creando. Recargar página en caso no aparezcan los cambios. 

- Tablas
	- dbo.vendedores: Clic derecho
		- Select Top 1000 Rows


### Iniciar SQL para conectarme
- Información general: Panel izquierdo
	Nombre del servidor: Copiar

- Abrimos **SQL Server** en local desde tu pc
	- Server type: Database Engine (Motor de bd)
	- Server name: Pegamos :v
	- Authentication: SQL Server Authentication 
		- Login: admin-ale
		- Password: West-servidor-01
	- 🟦 Connect


🔥 Agregamos otro vendedor 

- dbo.vendedores: Clic derecho
	- Edit Top 200 Rows
	- nom_ne:
		- Alexander
	- ape_ven
		- Velasquez 

🔥 Revisamos nuestra nube en Microsoft Azure
- Editor de consultas: Panel izquierdo 
	- Coloca tus credenciales 
	- Tablas: dbo.vendedores
		- Select Top 1000 Rows
	- Vemos lo que hemos creado en local

🔥 En SQL Server local
- New Query

```sql
create table distritos (
	id_dis int primary key identity(1, 1),
	nom_dis varchar(20)
)
```

Seleccionar y ▶ Ejecutar   

```sql
insert into distritos values ('Comas'), ('SJM'), ('Ate')
```

Seleccionar y ▶ Ejecutar   

🔥 Revisamos nuestra nube en Microsoft Azure

```sql
select * from [dbo].[distritos]
```

▶ Ejecutar 


Ver panel izquierdo:
- Configuración
	- Cadenas de conexión
	- El enlace que aparece en diferentes formatos e conexión se puede usar en una página web


[Clase 18.08.2022 - 2da parte - Duration 1:30:37](https://senatipe-my.sharepoint.com/personal/rhuarcaya_senati_pe/_layouts/15/stream.aspx?id=%2Fpersonal%2Frhuarcaya%5Fsenati%5Fpe%2FDocuments%2FRecordings%2F202220%2DPIAD%2D614%2DTAL%2DNRC%5F30339%5F000173395%2D20220818%5F191709%2DGrabaci%C3%B3n%20de%20la%20reuni%C3%B3n%2Emp4)

---

## Crear BD-MySQL en Azure
- Home
- Grupos de recursos
- Demo-luis
- ➕ Create 
- Buscar Azure Database for MySQL 
- ➕ Create 
- Tipo de recurso: Servidor flexible (recomendado)
- 🟦 Create 
- 📌 Básico
- Nombre del servidor: bd-mysql-ale
- Región: West US
- Tipo de carga de trabajo: Para proyectos de desarrollo o aficiones 
- Proceso y almacenamiento: `Configurar servidor`
- Compute tier: Flexible
- Tamaño de proceso: Standard_B1s
- Periodo de retención de la copia de seguridad: 1 día
- 🟦 Guardar
- Nombre de usuario de administrador: admi-bd-mysql
- Contraseña: West-us-mysql
- 🟦 Revisar y crear
- 🟦 Crear
- Crear servidor sin reglas de firewall

Una vez creado
- 🟦 Ir al recurso
- Información general (Panel izquierdo)
	- Nombre del servidor: Copiar


Descargar **MySQL Workbench**   
- MySQL Connections 

me quede 1:52:12

app services

Investigar **asp.net core** Min: 1:07:01
- ocupa menos espacio
- se puede usar en linux
- se puede trabajar con vsc


[Clase 22/08/2022](https://senatipe-my.sharepoint.com/:v:/r/personal/rhuarcaya_senati_pe/Documents/Recordings/202220-PIAD-614-TAL-NRC_30339_000173395-20220822_173242-Grabaci%C3%B3n%20de%20la%20reuni%C3%B3n.mp4?csf=1&web=1&e=I6xHdp)