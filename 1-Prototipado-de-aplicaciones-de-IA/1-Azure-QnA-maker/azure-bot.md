# Azure - QnA Maker - Chat bot

## 1. Crear cuenta: 
- [Azure for students](https://azure.microsoft.com/en-us/free/students/)
- 🟩 Start free or Empieza gratis
- Iniciar sesión con cuenta SENATI
- Identity Verification by phone
    - Country code: +593
    - Phone number: 984233620 
    - Escribirme 
- Tu perfil:
    - Nombres y Apellidos
    - Correo y Teléfono 
    _ Dirección Línea 1 y Ciudad 
    - Aceptar términos 
    - Código postal: 170140
    - 🟦 Inscribirse 


## 2. Ver mi subscription 
- 🏡**Home** (inicio)
- Navigate 
    - 🔑 Subscriptions
    - 🟦 Azure for students
	    - 🔑 Overview (Información general)
        - [💎] Resource groups (grupos de recursos)
			Conjunto de servicios organizados
		- 💲 Usage + quotas
		- Billing properties (Propiedades de facturación)	
		- 🛢 SQL databases 
			- Create: 🟦 Create SQL database
			- Subscription: 
				- Azure for students


De no encontrar algo puedes buscar en la parte superior con el nombre clave 🔎 subscriptions


📌 Al finalizar apagar el servidor 

## Precios en Azure   
[Calculadora de precios](https://azure.microsoft.com/es-es/pricing/calculator/)
- Destacadas
	- 🖥Virtual Machines 
		- Región: West US
		- SO: Linux
		- Categoría: Uso general
		- Máquinas virtuales: 1
		- 200 hours
- IA y Machine Learning 
	- 🟣Azure Bot Service
	- ☁Azure Cognitive Service 
		- API: Language Understanding (LUIS)
		- QnA Maker


----
[Clase 15/08/2022 - Hora explicación 2:50:00](https://senatipe-my.sharepoint.com/personal/1323943_senati_pe/_layouts/15/onedrive.aspx?sortField=DateShared&isAscending=false&id=%2Fpersonal%2Frhuarcaya%5Fsenati%5Fpe%2FDocuments%2FRecordings%2F202220%2DPIAD%2D614%2DTAL%2DNRC%5F30339%5F000173395%2D20220815%5F173243%2DGrabaci%C3%B3n%20de%20la%20reuni%C3%B3n%2Emp4&listurl=%2Fpersonal%2Frhuarcaya%5Fsenati%5Fpe%2FDocuments&parentview=3)


## 3. Construir Chat bot

> Preguntas y respuestas previo entrenamiento 

### Crear grupo de recursos
- 🏡**Home** (inicio)
- Navigate (navegar)
- [💎] Resource groups (Grupos de recursos)
	- ➕ Crear
	- 📌Basics (datos básicos)
		- Project details (Detalles del proyecto)
			- Resource group (Grupo de Recursos): **Demo**
		- Resource details (Detalles del Recurso)
			- (US) West US 3 (Mas cercano)
		- Next: Tags (Siguiente etiquetas)
	- 📌 Tags (Etiquetas)
		- Name: Ejemplos
		- Value: Ale Vel
		- Next: Review + create (siguiente: revisar y crear)
	- 📌 Review + create (Revisar y crear)
	- Create (Crear) Validando 

## Demo (ingresamos al grupo creado)
> Creamos Recurso (QnA Makers)

- ➕ Create (Crear)
- Buscar 🔎:  🗨 **QnA Maker**
	- 🟦 Create (Crear)
	- 📌 Basics
		- Project details: Name: **bd-demo**
		- Pricing tire (Plan): Free F0 (3 managed documents...)
		- Azure Search details - for data
			- Azure Search location: (US) West US  
			- Azure Search pricing tier: Free F (3 Indexes)
		- App Service details - for runtime
			- Website location: (US) West US 
		- App insights details - for telemetry and chat logs:
			- App insights: 🟦 Enable (Habilitar)
			- App insights location: (US) West US 
		- Next: Tags (Siguiente etiquetas)
	- 📌Tags (Opcional)
		- Next: Review + create 
	- 📌 Review + create
		- 🟦 Create (Crear) Validating...  


![Recurso creado](https://i.postimg.cc/DZTCQjTC/3-recurso-creado.png)


### Eliminar recurso (QnA Makers)

💣 Delete: De salir algo mal eliminar y crear otro dentro del **Demo** creado 

🔥 Recursos: Reciente: Nombre   
- Demo
	- Resources: Seleccionamos name a eliminar 
		- ✅ bd-demo
		- ✅ bd-demo
		- ✅ bddemo-asyqypu2jvmbk3g 
	- Panel de opciones barra superior: Delete 💣 
		- Confirm delete "yes" or "sí" con tilde :3
		- 🟦 Delete 


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
	- URL: Mas adelante aquí colocaremos una web con preguntas y respuestas
	- Chit-chat: None   
- STEP 5:   
	- 🟦 Create your KB

🔎 Mas adelante googlearemos preguntas y respuestas de alguna cosa en especifico 

![Publisher](https://i.postimg.cc/nzh8xLtm/4-ale-publisher-knowledge-base.png)

- ➕ **Add QnA pair**: Por cada pregunta clicamos aquí 
- Questions
	- ➕ Add alternative phrasing 
	- Como se llama el jefe de centro
	- Quien es el encargado de la sede
	- Como se llama la coordinadora de ETI
	- Horario de atención 
	- Información para cambio de carrera
	- No puedo pagar mi mensualidad via web
	- Como pago mi matricula segundo semestre 
- Answer
	- ➕ Add follow-up prompt
	- **Juan Castañeda Lavine** - jcastaneda@senati.edu.pe
	- **Maribel Taipe** - mtaipe@senati.edu.pe
	- De lunes a viernes de 8 am a 1pm y de 2pm a 5pm
	- Dirigirse a la tutora Sra. Patricia Cassano - tcasano@senati.edu.pe
	- Elabore un formulario en sinfo indicando su ID y carrera. Espere 7 días
	- Puedes pagar en cualquier agente BCP y en todos los bancos autorizados.

- ⬛ **Save and train** 

- 🟦 Test
	- Como pago mi matricula segundo semestre
	- Como me puedo cambiar de carrera?
	- No puedo pagar mi matricula

![Test chat bot](https://i.postimg.cc/ZYxQZMFS/5-test-bot.png)


- ⬛ EDIT
- ➕ **Add QnA pair**: Por cada pregunta clicamos aquí 
- Questions
	- ➕ Add alternative phrasing 
	- Página web del SENATI
- Answer: Podemos añadir imágenes / links
	- ➕ Add follow-up prompt
	- La página es: https://www.senati.edu.pe/

- ⬛ **Save and train** 


### Publicar
- ⬛ PUBLISH   
	- 🟦 Publish 
	- 🟦 Create bot 
		- Elije tu cuenta 

- Web App Bot 
	- Location: West US
	- Change plan: F0 Free : 🟦 Select
	- Application Insights: Desactivado 
	- 🟦 Create


![Bot creado](https://i.postimg.cc/j2zYrHQS/6-bot.png)

- 🟦 Go to resource

Revisar panel de opciones lado izquierdo:
- 💬 Test in Web Chat 
	- Quien es el jefe 
- Channels (Canales) 
	- Channel 💬 **Web chat**
		- Default site: 
			- Cambiamos nombre: **Ale-site** 
			- Secret keys 👁‍🗨
			- **Embedded code**
				- Copiar código incrustado 
			- 🟦 Apply 

Usamos VSC para crear una pagina web simple
- Creamos un index.html
- Pegamos el código incrustado 

```html
<iframe src='https://webchat.botframework.com/embed/bd-demo-01-bot?s=YOUR_SECRET_HERE'  style='min-width: 400px; width: 100%; min-height: 500px;'></iframe>
```

Reemplazamos el `YOUR_SECRET_HERE` por la clave secreta: 

- Volvemos al apartado Secret Keys 👁‍🗨
	- Copiar clave secreta 
	- Pegar y reemplazar dentro de `YOUR_SECRET_HERE`

```html
<iframe src='https://webchat.botframework.com/embed/bd-demo-01-bot?s=KLqYKoNUvbc.FOEpjfL6j2Cm_B3RYia2qcgzPANmr2FtZ8SGYk71VZw'  style='min-width: 400px; width: 100%; min-height: 500px;'></iframe>
```


📌 Buscar plantilla html gratis para agregar el bot fast.
- PlantillasHTMLgratis
		- Elegimos una
		- Descargar Resto
	- Ejecutar el index


----
[Clase 16/08/2022](https://senatipe-my.sharepoint.com/personal/1323943_senati_pe/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Frhuarcaya%5Fsenati%5Fpe%2FDocuments%2FRecordings%2F202220%2DPIAD%2D608%2DTEC%2DNRC%5F30333%5F000173395%2D20220816%5F173328%2DGrabaci%C3%B3n%20de%20la%20reuni%C3%B3n%2Emp4&listurl=%2Fpersonal%2Frhuarcaya%5Fsenati%5Fpe%2FDocuments%2FRecordings&parentview=3)