# Apuntes del curso

## Section 1: Introducci贸n 
## 1. 驴De que trata EcoMoney?

Zona: Piura   

Reciclar:   
- Botellas pl谩sticas 
- Papel
- Metales 

Apps:  
- Cliente 
- Recolector 
- Administrador 

Tecnolog铆as:  
- Xamarin forms 
- Patron MVVM: Mayor rendimiento   
- C# 
- Firebase: Gratis, 5000 personas, no relacional (para pruebas)  
- Google Maps  

## 2. Estructura del proyecto 

馃敟 App CLIENTE:      
- Login: Para hacer consultas con su DNI 
- Acumulado, lo que ha ido cobrando 
- Pendiente por cobrar
- Acumulado, lo que ha vendido 
- Solicitar recojo, cuando tenga muchos envases 
- Elegir fecha y horario de recojo (rango de horario)

馃敟 App RECOLECTOR:   
- Login: Correo y contrase帽a 
- Ubicaci贸n y rutas 

馃敟 App ADMINISTRADOR  
- Login 
- Solicitudes de recojo 
- Asignar a recolectores 


Perfil de Tesis:  

## 3. Resoluci贸n de preguntas 

Telegram: **Eccobank**  

## 4. Perfil del proyecto - Tesis 


## Section 2: App Administrador 
## 5. Presentaci贸n de la secci贸n 

Gesti贸n de la aplicaci贸n 
- Productos 
- Usuarios 
- Recolectores 
- Solicitudes de recojo 

## 6. Creaci贸n del proyecto 

Ver c贸digo en GitHub: `Ale Roses (alevrs01)`

EcoMoney:  
- EcomoneyAdmin: 
- Conexiones 
- Datos 
- Modelo
- VistaModelo
- Vistas

## 7. Uso de just color picker 

Eliminamos archivo `MainPage.xaml`  

Vistas:  
Agregar elemento - XamarinForms - P谩gina de contenido - Menuprincipal.xaml  

Ver c贸digo en GitHub  

Descargar: Just Color Picker
Atajo de teclado: Control + S

## 8. Uso de degradados 

Soluci贸n "EcoMoney":   
Administrar paquete NuGet para la soluci贸n: Examinar - Xamarin.Forms.PancakeView    
Seleccionar todo - Instalar  

## 9. Subir im谩genes a servidor gratuito 

PostImage

## 10. Frame forma redondeada 


## 11. CollectionView

## 12. Creando tablas en Firebase 

Ver pasos en apuntes Shopping App

EcoMoney: `Android`: Agrega una app para comenzar 

馃敟 Nombre del paquete Android - Explorador de Soluciones    
EcomoneyAdmin.Android - Propiedades - Manifiesto de Android - Copiar Nombre de paquete      
`com.companyname.ecomoneyadmin` -> `com.mrjed.ecomoneyadmin`

馃敟 Sobre nombre:    
EcomoneyApp

Siguiente x2 - Ir a consola 

Actualizar p谩gina 


https://console.firebase.google.com/project/ecomoney-13888/database/ecomoney-13888-default-rtdb/data/~2F?hl=es  鉃?
- Productos
	- Modelo
		- Color: 
		- Descripcion:
		- Estado:
		- Icono:
		- PrecioCompra:
		- PrecioVenta:
		- Und:
- Recolectores
	- Modelo
		- Correo:
		- Estado:
		- Identificaci贸n: 
		- Nombre: 

## 13. Creando tablas enlazadas

- Asignaciones
	- Modelo:
		- Estado: 
		- Idrecolector:
		- Idsolicitud:
- Clientes
	- Modelo
		- Direcci贸n:
		- Fotofachada: 
		- Geolocalizaci贸n: 
		- IdDepartamento: 
		- IdDistrito: 
		- IdPais:
		- IdProvincia:
		- IdZona:
		- Identificaci贸n
		- Kgacumulados
		- NombreCom:
		- Puntos:
		- Totalcobrado: 
		- Totalporcobrar:
- Departamentos 
	- Modelo
		- Departamento: "Piura"
- Detallecompra: 
- Distrito
	- Modelo
		- Distrito: "Piura"
- Pa铆s 
	- Modelo
		- Pa铆s: "Peru"
- Provincia
	- Modelo
		- Provincias: "Piura"
- Solicitudes 
	- Modelo
		- Estado:
		- Fecha: 
		- Idcliente:
		- Idturno: 
- Turnosrecojo
	- Modelo
		- Turno: "9:00 am y 1:00 pm"
- Zona
	- Modelo
		- Zona: "Piura"

## 14. Modelo terminado

- Detallecompra
	- Modelo
		- Cantidad: 
		- Estado. 
		- Fecha: 
		- Ganancia: 
		- IdCliente:
		- IdProducto:
		- PrecioCompra:
		- PrecioVenta:
		- Puntos: 
		- Total: 
		- Und: 
- Estaticos
	- Modelo
		- Moneda:
		- Puntosmeta:

## 15. P谩gina de configuraciones

Crear dentro de Vistas: 
Vistas + Config + `Menuconfig.xaml`

Nota: Ver dise帽o para mejorarlo. 

## 16. Centrado de elementos

## 17. Scrollview 

## 18. 驴Qu茅 es el patr贸n de software MVVM?

Ver apuntes de platzi DMP

## 19. MVVM modo practico 

## 20. Base vista modelo 

VistaModelo: 
Clase: VMmenuprincipal.cs
Clase: BaseViewModel.cs

## 21. BaseViewModel 

Ver c贸digo `BaseViewModel.cs` de otros proyectos o de los apuntes tomados anteriormente. 

## 22. Asignar un command a un StackLayout 

Agregamos el `VMpatron.cs` ver apuntes o copiar c贸digo de proyectos.  

## 23. P谩gina recolectores 

VistaModelo   
Clase: VMmenuconf.cs

Config:   
Nuevo elemento: Xamarin.Forms: P谩gina de contenido: `Recolectoresconfig.xaml`   

Activaci贸n flecha volver

## 24. Conexi贸n a Firebase  

Administrar paquetes nuget   
- FirebaseDatabase.net: Para la conexi贸n a la BD
- FirebaseAuthentication.net: Para correo y contrase帽a 

Conexiones:   
- Clase: Constantes.cs

Obtener enlace Firebase:    
- Realtime Database
- Copiar: https://ecomoney-13888-default-rtdb.firebaseio.com sin la / del final y luego se la vuelves a colocar en Visual studio XD

Datos:   
- Clase: `Drecolectores.cs`  

Modelo:    
- Clase: `Mrecolectores.cs`

## 25. P谩gina recolectores 

## 26. Datos insertar recolectores 

VistaModelo:    
- Clase: VMrecolectoresconfig.cs

## 27. Probando el insertar recolectores  

https://ecomoney-13888-default-rtdb.firebaseio.com/

Compilaci贸n - Realtime Database - Reglas 

```sql
{
  "rules": {
    ".read": "auth==null",
    ".write": "auth==null"
  }
}
```

Publicar 

## 28. Crear correo y contrase帽a  

En Firebase:   
- Compilaci贸n
- Authentication 
- Comenzar
- Correo electr贸nico - Habilitar 
- Guardar 

Descripci贸n general 鈿? Configuraci贸n del proyecto    
- Copiar: Clave de API web 
- AIzaSyBAuFoH3nLHEuZxrVrR7PId37tkOpyEv0g

En Visual Studio    
Conexiones:    
- Constantes .cs

Contrase帽a de 6 d铆gitos 

## 29. Datos productos 

Config:     
- Nuevo elemento: XamarinForms - P谩gina de contenido 
- Productosconfig.xaml

VistaModelo:    
- Clase: VMproductosconfig.cs

Modelo:   
- Clase: Mproductos.cs

Datos:   
- Clase: Dproductos.cs
- Clase: Dpatron.cs

## 30. VM productos 

## 31. Insertar productos 

## 32. Datos solicitudes 

Modelo:   
- Clase: Msolicitudesrecojo.cs

Datos:    
- Clase: Dsolicitudesrecojo.cs

## 33. Ejecutar comando contenido en una lista 

Vistas:   
- Nuevo elemento: XamarinForms - P谩gina de contenido
- Asignaciones.xaml

## 34. Rescate datos de una lista 

## 35. P谩gina asignaciones 

revisar ScrollView

VistaModelo:    
- Clase: VMasignaciones.cs   

Datos:   
- Clase: Dasignaciones.cs  

Modelo:   
- Clase: Masignaciones.cs

## 36. Buscar recolectores 


## Section 3: App Cliente 
## 39. Crear el proyecto 

EcomoneyCliente:  
- Conexiones
- Datos   
- Modelo
- VistaModelo: 
	- Clase: BaseViewModel.cs
- Vistas

## 40. P谩gina login

Soluci贸n "EccobankCliente"    
- Administrar paquetes NuGet para la soluci贸n 
- Examinar: Xamarin.Forms.PancakeView
- Marcar todo
- Instalar 

Vistas:   
- Nuevo elemento: Xamarin.Forms - P谩gina de contenido 
- Login.xaml

## 41. Agregar button

## 42. Aplicar degradado 

## 43. Agrega clases de Status bar

VistaModelo:  
- Clase: VMstatusbar.cs

EcomoneyCliente.Android    
- Carpeta: Controles - Clase: StatusBar.cs
- Administrar paquetes NuGet: Examinar: Plugin.CurrentActivity

## 44. Transparentar statusbar 

VistaModelo:   
- Clase: VMlogin.cs

## 45. Conexi贸n 

Conexiones:   
- Clase: Constantes.cs

Soluci贸n "EcomoneyCliente"    
- Administrar paquetes NuGet para la soluci贸n: 
- Examinar: FirebaseDatabase.net

Datos:   
- Clase: Dclientes.cs
- Clase: Dsolicitudesrecojo.cs

En Firebase: Clientes: sacamos datos

Modelo:   
- Clase: Mclientes.cs 

## 46. Vista modelo Cliente

Vistas:   
- Nuevo elemento: Xamarin.Forms - P谩gina de contenido: Menu.xaml

## 47. Primer prueba 

## 48. Dise帽o del menu

VistaModelo:   
- Clase: VMmenu.cs

VistaModelo:   
- Clase: VMpatron.cs

## 49. Bloque usuario 

## 50. Bloque totales

## 51. Redondear imagen 

## 52. Bloque puntos acumulados 

## 53. Bloque detalle compra

Datos:   
- Clase: Ddetallecompra.cs

Modelo:   
- Clase: Mdetallecompra.cs

## 54. Modelado detalle compra

Modelo:  
- Clase: Mproductos.cs

Datos:   
- Clase: Dproductos.cs 

## 55. Pasar datos entre VM

## 56. Disminuir bucles 

En Firebase debemos tener datos en: 
- Detallecompra: Idcliente debe existir en tabla Clientes: 

Debe aparecer:   
Precio de compra por KG = S/. 0.3 
Precio de compra por KG = S/. 0.3 
Precio de compra por KG = S/. 0.3 
Precio de compra por KG = S/. 0.3 

馃搶 Revisar: no aparecen los datos al final de la app

## 57. Detalle compras terminado 

## 58. Enlazando datos 

No se ven:   
- Nombre del cliente
- Foto fachada
- Total cobrado
- Total por cobrar
- Detalles de productos

## 59. Puntos 

## 60. Kg acumulados 

## 61. Implementar Skeleton 

EcomoneyCliente:    
- Administrar paquetes NuGet 
- Examinar: Xamarin.Forms.Skeleton 
- Instalar 

## 62. Skeleton terminado 

## 63. Pasar datos entre VM

Vistas:    
- Nuevo elemento: XamarinForms - P谩gina de contenidos  
- Solicitud.xaml

VistaModelo:   
- Clase:  VMsolicitud.cs

## 64. Dise帽o de solicitudes 

## 65. Modelado solicitud 

Modelo:   
- Clase: Msolicitud.cs

## 66. Validaciones 

## 67. Mostrar turnos 

Modelo:   
- Clase: Mturno.cs

Datos:   
- Clase: Dturno.cs

## 68. Date picker

## 69. Detalle compra 

Vista:  
- Nuevo elemento: Xamarin.Forms - P谩gina de contenido 
- Detallecompra.xaml


## Section 4: App recolector 
## 71. Creaci贸n del proyecto 

- Crear un proyecto 
- C# + Todas las plataformas + M贸vil 
- Aplicaci贸n m贸vil (Xamarin.Forms) 
	- C# - Android - iOS - Windows - M贸vil

EcoMoney:   
- EcomoneyRecolector: 
	- Conexiones 
	- Datos 
	- Modelo
	- VistaModelo
	- Vista

## 72. P谩gina Login 

Vista:   
- Nuevo elemento: Xamarin.Forms - P谩gina de contenido 
- Login.xaml

## 73. Dise帽o 

IsPassword = "True"

## 74. VM patr贸n 

Vista:   
- Nuevo elemento: Xamarin.Forms - P谩gina de contenido 
- Menuprincipal.xaml

Soluci贸n "EcomoneyRecolector":    
- Administrar paquete NuGet para la soluci贸n: 
- `Examinar:` Xamarin.Forms.PancakeView    
- Seleccionar todo - Instalar  
- `Examinar:` Sharpnado.Shadows 

VistaModelo:   
- Clase: VMlogin.cs
- Clase: BaseViewModel.cs
- Clase: VMpatron.cs
- Clase: VMstatusbar.cs

Modelo:   
- Clase: Mlogin.cs

Datos:   
- Clase: Drecolectores.cs

## 75. Conexi贸n a Firebase 

Conexi贸n:   
- Clase: Constantes.cs 

Soluci贸n "EcomoneyRecolector"    
- Administrar paquetes NuGet para la soluci贸n: 
- Examinar: FirebaseDatabase.net

## 76. Inicio de sesi贸n  

Soluci贸n "EcomoneyRecolector"    
- Administrar paquetes NuGet para la soluci贸n: 
- `Examinar:` Acr.UserDialogs
	- `Versi贸n:` 7.1.0.514
- `Examinar:` FirebaseAuthentication.net

## 77. Statusbar 

Soluci贸n "EcomoneyRecolector"    
- Administrar paquetes NuGet para la soluci贸n: 
- `Examinar:` Xamarin.Plugin.SharedTransitions

EcomoneyRecolector.Android:    
- Carpeta: Controles
	- Clase: StatusBar.cs
- Administrar paquetes NuGet
- Examinar: Plugin.CurrentActivity

## 78. Dise帽o menu principal

diego@mail.com - diego1234

## 79. Bloque de recolector 

## 80. Proporciones 

## 81. Paginas de navegaci贸n 

VistaModelos:   
- Clase: VMmenuprincipal.cs

Vista:   
- Nuevo elemento: Xamarin.Forms - P谩gina de contenido 
- Agregarcliente.xaml
- Nuevo elemento: Xamarin.Forms - P谩gina de contenido 
- Mapear.xaml

## 82. Contador de asignaciones 

Modelo:   
- Clase: Masignaciones.cs

Datos:   
- Clase: Dasignaciones.cs

## 83. Registro de clientes 

## 84. Geolocalizar 

## 85. Mostrar animaciones

Soluci贸n "EcomoneyRecolector"   
- Administrar paquetes NuGet: 
- Examinar: Com.Airbnb.Xamarin.Forms.Lottie
- Versi贸n: 4.0.10


[LottieFiles: Download Free lightweight animations for website & apps.](https://lottiefiles.com/)

Descargar en formato: **Lottie JSON**

## 86. Subir foto a Store 

Modelo:   
- Clase: Mclientes.cs

Datos:  
- Clase: Dclientes.cs

En Firebase:   
- Compilaci贸n: Storage
- us-west3
- Carpeta: Fachadasclientes

Soluci贸n "EcomoneyRecolector"    
- Administrar paquetes NuGet
- FirebaseStorage.net

## 87. Mostrar listas

VistaModelo:   
- Clase: VMclientes.cs

Modelo:  
- Clase: Mubicaciones.cs

Datos:   
- Clase: Dubicaciones.cs

Soluci贸n "EcomoneyRecolector"   
- Administrar paquetes NuGet para la soluci贸n 
- Examinar: Xam.Plugin.Media 

## 88. Asignar objetos 

## 89. Selectores 

Vista:   
- Nuevo elemento: Xamarin.Forms - P谩gina de contenido 
- Paglocalizar.xaml

## 90. Seleccionar items

EcomoneyRecolector.Android: Dar permisos   
- Propiedades 
- Manifiesto de Android
- Permisos necesarios: 
	- Buscar: Dar Check
	- Camera
	- Internet
	- Access_coarse_location
	- Access_fine_location
	- Access_mock_location

## 91. Consumo de servicios de google maps 

Soluci贸n "EcomoneyRecolector"   
- Administrar paquetes NuGet para la soluci贸n 
- Examinar: Xamarin.Forms.GoogleMaps
- Versi贸n: 3.3.0

En google: Google developer console     
- https://console.cloud.google.com/projectselector2/apis/dashboard?pli=1&supportedpurview=project
- Per煤
- Aceptar todo 
- 驴C贸mo planeas usar Google Cloud?
- Analizar datos 

Crear proyecto:   
- Nombre: EcoMoney
- Sin organizaci贸n 
- Crear

Habilitar API y Servicios   
- Maps SDK for Android
- Habilitar 

Cuenta: alx.vroses@gmail.com


Credenciales:    
- Crear credenciales: Clave de API
- AIzaSyD07p-6HM92_eIEXTbcvQP1gNYCRhl65Bw


En el proyecto    
EcomoneyRecolector.Android:   
- Clase: Activitymaps.cs

No funciona: NuGet PackageReference Upgrader


Paquete NuGet: Xam.Plugin.ExternalMaps

## 92. P谩gina de geolocalizaci贸n 


## 93. Obtener ubicaci贸n actual 

img punto ubicaci贸n: 64x64


## 94. Obtener coordenadas 


## 95. Pruebas en dispositivo f铆sico 

Soluci贸n "EcomoneyRecolector.Android"   
- Administrar paquetes NuGet para la soluci贸n 
- Examinar: Xamarin.GooglePlayServices.Maps
- Versi贸n: 117.0.1

En caso el paquete anterior no se instale debes instalar: 
- `Xamarin.Android.Support.V7.AppCompat` 


Descargar cami贸n 64 x 64

Proyector de pantalla: `Apowermirror`


## 96. Pruebas toma de foto 

Proyecto Android:    
- Carpeta: Resources
- Carpeta: xml 
	- Nuevo elemento: Datos - Archivo XML: name: file_paths.xml


## 97. Prueba de registro de cliente


## 98. Dise帽o de mapeado


## 99. Solicitudes de recojo 

Modelo:   
- Clase: Msolicitudesrecojo.cs

Datos:   
- Clase: Dsolicitudesrecojo.cs


## 100. Modelado turnos 

Modelo:   
- Clase: Mturnosrecojo.cs

Datos:   
- Clase: Dturnosrecojo.cs


## 101. Cargar datos


## 102. Mapear puntos 


## 103. Ver cliente 

Vista:   
- Nuevo elemento: Xamarin.Forms + P谩gina de contenido 
- Vercliente.xaml


## 104. Bot贸n ir 

Soluci贸n "EcomoneyRecolector"   
- Administrar paquetes NuGet para la soluci贸n   
- Xam.Plugin.ExternalMaps (4.0.1)

## 105. VMregistro de compras  

Vista:   
- Nuevo elemento: xamarin.Forms - P谩gina de contenido
- RegCompras.xaml

VistaModelo:  
- Clase: VMregCompras.cs

Datos:   
- Clase: Dproductos.cs

Modelo:   
- Clase: Mproductos.cs


## 106. Dise帽o de registro de compras

## 107. Panel contador

## 108. Compartir datos entre VM

Vista:   
- Nuevo elemento: Xamarin.Forms - Pagina de contenido
- Agregarcompra.xaml

VistaModelo:   
- Clase: VMagregarcompra.cs

## 109. Asignar comando a frame

## 110. Dise帽o agregar compra


## 111. Insertar detalle compra

Modelo:   
- Clase: Mdetallecompras.cs

Datos:   
- Clase: Ddetallecompras.cs

## 112. Funci贸n sumar total 

## 113. Problema de actualizaciones 

## 114. Actualizar procesos independientes 


## 115. Eliminar compras sin confirmar 

## 116. Dise帽o confirmar compra 

## 117. Confirmar detalle compras 

## 118. Animaci贸n up

Google: Easing Xamarin fomrs 


App.xaml.cs = public App()

```c#
MainPage = new NavigationPage(new Login());

//Tambien 
MainPage = new NavigationPage(new RegCompras());
```


## 119. Animaci贸n Down


## 120. Eliminar solicitudes 


## 121. Prueba confirmar compra

error xd

## 122. Primeras pruebas 

ver de nuevo
- Cliente hace la solicitud 
- Administrador asigna a un recolector 