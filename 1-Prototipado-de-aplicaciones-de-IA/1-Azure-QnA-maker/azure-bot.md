# Azure - QnA Maker - Chat bot

## 1. Crear cuenta: 
- [Azure for students](https://azure.microsoft.com/en-us/free/students/)
- 馃煩 Start free or Empieza gratis
- Iniciar sesi贸n con cuenta SENATI
- Identity Verification by phone
    - Country code: +593
    - Phone number: 984233620 
    - Escribirme 
- Tu perfil:
    - Nombres y Apellidos
    - Correo y Tel茅fono 
    _ Direcci贸n L铆nea 1 y Ciudad 
    - Aceptar t茅rminos 
    - C贸digo postal: 170140
    - 馃煢 Inscribirse 


## 2. Ver mi subscription 
- 馃彙**Home** (inicio)
- Navigate 
    - 馃攽 Subscriptions
    - 馃煢 Azure for students
	    - 馃攽 Overview (Informaci贸n general)
        - [馃拵] Resource groups (grupos de recursos)
			Conjunto de servicios organizados
		- 馃挷 Usage + quotas
		- Billing properties (Propiedades de facturaci贸n)	
		- 馃洟 SQL databases 
			- Create: 馃煢 Create SQL database
			- Subscription: 
				- Azure for students


De no encontrar algo puedes buscar en la parte superior con el nombre clave 馃攷 subscriptions


馃搶 Al finalizar apagar el servidor 

## Precios en Azure   
[Calculadora de precios](https://azure.microsoft.com/es-es/pricing/calculator/)
- Destacadas
	- 馃枼Virtual Machines 
		- Regi贸n: West US
		- SO: Linux
		- Categor铆a: Uso general
		- M谩quinas virtuales: 1
		- 200 hours
- IA y Machine Learning 
	- 馃煟Azure Bot Service
	- 鈽丄zure Cognitive Service 
		- API: Language Understanding (LUIS)
		- QnA Maker


----
[Clase 15/08/2022 - Hora explicaci贸n 2:50:00](https://senatipe-my.sharepoint.com/personal/1323943_senati_pe/_layouts/15/onedrive.aspx?sortField=DateShared&isAscending=false&id=%2Fpersonal%2Frhuarcaya%5Fsenati%5Fpe%2FDocuments%2FRecordings%2F202220%2DPIAD%2D614%2DTAL%2DNRC%5F30339%5F000173395%2D20220815%5F173243%2DGrabaci%C3%B3n%20de%20la%20reuni%C3%B3n%2Emp4&listurl=%2Fpersonal%2Frhuarcaya%5Fsenati%5Fpe%2FDocuments&parentview=3)


## 3. Construir Chat bot

> Preguntas y respuestas previo entrenamiento 

### Crear grupo de recursos
- 馃彙**Home** (inicio)
- Navigate (navegar)
- [馃拵] Resource groups (Grupos de recursos)
	- 鉃? Crear
	- 馃搶Basics (datos b谩sicos)
		- Project details (Detalles del proyecto)
			- Resource group (Grupo de Recursos): **Demo**
		- Resource details (Detalles del Recurso)
			- (US) West US 3 (Mas cercano)
		- Next: Tags (Siguiente etiquetas)
	- 馃搶 Tags (Etiquetas)
		- Name: Ejemplos
		- Value: Ale Vel
		- Next: Review + create (siguiente: revisar y crear)
	- 馃搶 Review + create (Revisar y crear)
	- Create (Crear) Validando 

## Demo (ingresamos al grupo creado)
> Creamos Recurso (QnA Makers)

- 鉃? Create (Crear)
- Buscar 馃攷:  馃棬 **QnA Maker**
	- 馃煢 Create (Crear)
	- 馃搶 Basics
		- Project details: Name: **bd-demo**
		- Pricing tire (Plan): Free F0 (3 managed documents...)
		- Azure Search details - for data
			- Azure Search location: (US) West US  
			- Azure Search pricing tier: Free F (3 Indexes)
		- App Service details - for runtime
			- Website location: (US) West US 
		- App insights details - for telemetry and chat logs:
			- App insights: 馃煢 Enable (Habilitar)
			- App insights location: (US) West US 
		- Next: Tags (Siguiente etiquetas)
	- 馃搶Tags (Opcional)
		- Next: Review + create 
	- 馃搶 Review + create
		- 馃煢 Create (Crear) Validating...  


![Recurso creado](https://i.postimg.cc/DZTCQjTC/3-recurso-creado.png)


### Eliminar recurso (QnA Makers)

馃挘 Delete: De salir algo mal eliminar y crear otro dentro del **Demo** creado 

馃敟 Recursos: Reciente: Nombre   
- Demo
	- Resources: Seleccionamos name a eliminar 
		- 鉁? bd-demo
		- 鉁? bd-demo
		- 鉁? bddemo-asyqypu2jvmbk3g 
	- Panel de opciones barra superior: Delete 馃挘 
		- Confirm delete "yes" or "s铆" con tilde :3
		- 馃煢 Delete 


## Interfaz para crear BD
[QnA Maker](https://www.qnamaker.ai/)
- Get started 
- Ingresamos cuenta 
- [My knowledge bases](https://www.qnamaker.ai/Home/MyServices)
- [Create a Knowledge base](https://www.qnamaker.ai/Create)
- STEP 1: Ya lo hicimos anteriormente 
- STEP 2: 
	- Connect your QnA service to your KB.
	- Microsoft Azure Directory ID: SENATI
	- Azure subscription name: Azure for Students 
	- Azure QnA service: bd-demo-01
	- Language: Spanish 
- STEP 3: 
	- Name: Ale
- STEP 4: Populate your KB.
	- URL: Mas adelante aqu铆 colocaremos una web con preguntas y respuestas
	- Chit-chat: None   
- STEP 5:   
	- 馃煢 Create your KB

馃攷 Mas adelante googlearemos preguntas y respuestas de alguna cosa en especifico 

![Publisher](https://i.postimg.cc/nzh8xLtm/4-ale-publisher-knowledge-base.png)

- 鉃? **Add QnA pair**: Por cada pregunta clicamos aqu铆 
- Questions
	- 鉃? Add alternative phrasing 
	- Como se llama el jefe de centro
	- Quien es el encargado de la sede
	- Como se llama la coordinadora de ETI
	- Horario de atenci贸n 
	- Informaci贸n para cambio de carrera
	- No puedo pagar mi mensualidad via web
	- Como pago mi matricula segundo semestre 
- Answer
	- 鉃? Add follow-up prompt
	- **Juan Casta帽eda Lavine** - jcastaneda@senati.edu.pe
	- **Maribel Taipe** - mtaipe@senati.edu.pe
	- De lunes a viernes de 8 am a 1pm y de 2pm a 5pm
	- Dirigirse a la tutora Sra. Patricia Cassano - tcasano@senati.edu.pe
	- Elabore un formulario en sinfo indicando su ID y carrera. Espere 7 d铆as
	- Puedes pagar en cualquier agente BCP y en todos los bancos autorizados.

- 猬? **Save and train** 

- 馃煢 Test
	- Como pago mi matricula segundo semestre
	- Como me puedo cambiar de carrera?
	- No puedo pagar mi matricula

![Test chat bot](https://i.postimg.cc/ZYxQZMFS/5-test-bot.png)


- 猬? EDIT
- 鉃? **Add QnA pair**: Por cada pregunta clicamos aqu铆 
- Questions
	- 鉃? Add alternative phrasing 
	- P谩gina web del SENATI
- Answer: Podemos a帽adir im谩genes / links
	- 鉃? Add follow-up prompt
	- La p谩gina es: https://www.senati.edu.pe/

- 猬? **Save and train** 


### Publicar
- 猬? PUBLISH   
	- 馃煢 Publish 
	- 馃煢 Create bot 
		- Elije tu cuenta 

- Web App Bot 
	- Location: West US
	- Change plan: F0 Free : 馃煢 Select
	- Application Insights: Desactivado 
	- 馃煢 Create


![Bot creado](https://i.postimg.cc/j2zYrHQS/6-bot.png)

- 馃煢 Go to resource

Revisar panel de opciones lado izquierdo:
- 馃挰 Test in Web Chat 
	- Quien es el jefe 
- Channels (Canales) 
	- Channel 馃挰 **Web chat**
		- Default site: 
			- Cambiamos nombre: **Ale-site** 
			- Secret keys 馃憗鈥嶐煑?
			- **Embedded code**
				- Copiar c贸digo incrustado 
			- 馃煢 Apply 

Usamos VSC para crear una pagina web simple
- Creamos un index.html
- Pegamos el c贸digo incrustado 

```html
<iframe src='https://webchat.botframework.com/embed/bd-demo-01-bot?s=YOUR_SECRET_HERE'  style='min-width: 400px; width: 100%; min-height: 500px;'></iframe>
```

Reemplazamos el `YOUR_SECRET_HERE` por la clave secreta: 

- Volvemos al apartado Secret Keys 馃憗鈥嶐煑?
	- Copiar clave secreta 
	- Pegar y reemplazar dentro de `YOUR_SECRET_HERE`

```html
<iframe src='https://webchat.botframework.com/embed/bd-demo-01-bot?s=KLqYKoNUvbc.FOEpjfL6j2Cm_B3RYia2qcgzPANmr2FtZ8SGYk71VZw'  style='min-width: 400px; width: 100%; min-height: 500px;'></iframe>
```


馃搶 Buscar plantilla html gratis para agregar el bot fast.
- PlantillasHTMLgratis
		- Elegimos una
		- Descargar Resto
	- Ejecutar el index


----
[Clase 16/08/2022](https://senatipe-my.sharepoint.com/personal/1323943_senati_pe/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Frhuarcaya%5Fsenati%5Fpe%2FDocuments%2FRecordings%2F202220%2DPIAD%2D608%2DTEC%2DNRC%5F30333%5F000173395%2D20220816%5F173328%2DGrabaci%C3%B3n%20de%20la%20reuni%C3%B3n%2Emp4&listurl=%2Fpersonal%2Frhuarcaya%5Fsenati%5Fpe%2FDocuments%2FRecordings&parentview=3)