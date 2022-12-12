# Apuntes del curso

## Section 1: Introducción 
## 1. ¿De que trata EcoMoney?

Zona: Piura   

Reciclar:   
- Botellas plásticas 
- Papel
- Metales 

Apps:  
- Cliente 
- Recolector 
- Administrador 

Tecnologías:  
- Xamarin forms 
- Patron MVVM: Mayor rendimiento   
- C# 
- Firebase: Gratis, 5000 personas, no relacional (para pruebas)  
- Google Maps  

## 2. Estructura del proyecto 

🔥 App CLIENTE:      
- Login: Para hacer consultas con su DNI 
- Acumulado, lo que ha ido cobrando 
- Pendiente por cobrar
- Acumulado, lo que ha vendido 
- Solicitar recojo, cuando tenga muchos envases 
- Elegir fecha y horario de recojo (rango de horario)

🔥 App RECOLECTOR:   
- Login: Correo y contraseña 
- Ubicación y rutas 

🔥 App ADMINISTRADOR  
- Login 
- Solicitudes de recojo 
- Asignar a recolectores 


Perfil de Tesis:  

## 3. Resolución de preguntas 

Telegram: **Eccobank**  

## 4. Perfil del proyecto - Tesis 


## Section 2: App Administrador 
## 5. Presentación de la sección 

Gestión de la aplicación 
- Productos 
- Usuarios 
- Recolectores 
- Solicitudes de recojo 

## 6. Creación del proyecto 

Ver código en GitHub: `Ale Roses (alevrs01)`

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
Agregar elemento - XamarinForms - Página de contenido - Menuprincipal.xaml  

Ver código en GitHub  

Descargar: Just Color Picker
Atajo de teclado: Control + S

## 8. Uso de degradados 

Solución "EcoMoney":   
Administrar paquete NuGet para la solución: Examinar - Xamarin.Forms.PancakeView    
Seleccionar todo - Instalar  

## 9. Subir imágenes a servidor gratuito 

PostImage

## 10. Frame forma redondeada 


## 11. CollectionView

## 12. Creando tablas en Firebase 

Ver pasos en apuntes Shopping App

EcoMoney: `Android`: Agrega una app para comenzar 

🔥 Nombre del paquete Android - Explorador de Soluciones    
EcomoneyAdmin.Android - Propiedades - Manifiesto de Android - Copiar Nombre de paquete      
`com.companyname.ecomoneyadmin` -> `com.mrjed.ecomoneyadmin`

🔥 Sobre nombre:    
EcomoneyApp

Siguiente x2 - Ir a consola 

Actualizar página 


https://console.firebase.google.com/project/ecomoney-13888/database/ecomoney-13888-default-rtdb/data/~2F?hl=es  ➕
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
		- Identificación: 
		- Nombre: 

## 13. Creando tablas enlazadas

- Asignaciones
	- Modelo:
		- Estado: 
		- Idrecolector:
		- Idsolicitud:
- Clientes
	- Modelo
		- Dirección:
		- Fotofachada: 
		- Geolocalización: 
		- IdDepartamento: 
		- IdDistrito: 
		- IdPais:
		- IdProvincia:
		- IdZona:
		- Identificación
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
- País 
	- Modelo
		- País: "Peru"
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

## 15. Página de configuraciones

Crear dentro de Vistas: 
Vistas + Config + `Menuconfig.xaml`

Nota: Ver diseño para mejorarlo. 

## 16. Centrado de elementos

## 17. Scrollview 

## 18. ¿Qué es el patrón de software MVVM?

Ver apuntes de platzi DMP

## 19. MVVM modo practico 

## 20. Base vista modelo 

VistaModelo: 
Clase: VMmenuprincipal.cs
Clase: BaseViewModel.cs

## 21. BaseViewModel 

Ver código `BaseViewModel.cs` de otros proyectos o de los apuntes tomados anteriormente. 

## 22. Asignar un command a un StackLayout 

Agregamos el `VMpatron.cs` ver apuntes o copiar código de proyectos.  

## 23. Página recolectores 

VistaModelo   
Clase: VMmenuconf.cs

Config:   
Nuevo elemento: Xamarin.Forms: Página de contenido: `Recolectoresconfig.xaml`   

Activación flecha volver

## 24. Conexión a Firebase  

Administrar paquetes nuget   
- FirebaseDatabase.net: Para la conexión a la BD
- FirebaseAuthentication.net: Para correo y contraseña 

Conexiones:   
- Clase: Constantes.cs

Obtener enlace Firebase:    
- Realtime Database
- Copiar: https://ecomoney-13888-default-rtdb.firebaseio.com sin la / del final y luego se la vuelves a colocar en Visual studio XD

Datos:   
- Clase: `Drecolectores.cs`  

Modelo:    
- Clase: `Mrecolectores.cs`

## 25. Página recolectores 

## 26. Datos insertar recolectores 

VistaModelo:    
- Clase: VMrecolectoresconfig.cs

## 27. Probando el insertar recolectores  

https://ecomoney-13888-default-rtdb.firebaseio.com/

Compilación - Realtime Database - Reglas 

```sql
{
  "rules": {
    ".read": "auth==null",
    ".write": "auth==null"
  }
}
```

Publicar 

## 28. Crear correo y contraseña  

En Firebase:   
- Compilación
- Authentication 
- Comenzar
- Correo electrónico - Habilitar 
- Guardar 

Descripción general ⚙ Configuración del proyecto    
- Copiar: Clave de API web 
- AIzaSyBAuFoH3nLHEuZxrVrR7PId37tkOpyEv0g

En Visual Studio    
Conexiones:    
- Constantes .cs

Contraseña de 6 dígitos 

## 29. Datos productos 

Config:     
- Nuevo elemento: XamarinForms - Página de contenido 
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
- Nuevo elemento: XamarinForms - Página de contenido
- Asignaciones.xaml

## 34. Rescate datos de una lista 

## 35. Página asignaciones 

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

## 40. Página login

Solución "EccobankCliente"    
- Administrar paquetes NuGet para la solución 
- Examinar: Xamarin.Forms.PancakeView
- Marcar todo
- Instalar 

Vistas:   
- Nuevo elemento: Xamarin.Forms - Página de contenido 
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

## 45. Conexión 

Conexiones:   
- Clase: Constantes.cs

Solución "EcomoneyCliente"    
- Administrar paquetes NuGet para la solución: 
- Examinar: FirebaseDatabase.net

Datos:   
- Clase: Dclientes.cs
- Clase: Dsolicitudesrecojo.cs

En Firebase: Clientes: sacamos datos

Modelo:   
- Clase: Mclientes.cs 

## 46. Vista modelo Cliente

Vistas:   
- Nuevo elemento: Xamarin.Forms - Página de contenido: Menu.xaml

## 47. Primer prueba 

## 48. Diseño del menu

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

📌 Revisar: no aparecen los datos al final de la app

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
- Nuevo elemento: XamarinForms - Página de contenidos  
- Solicitud.xaml

VistaModelo:   
- Clase:  VMsolicitud.cs

## 64. Diseño de solicitudes 

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
- Nuevo elemento: Xamarin.Forms - Página de contenido 
- Detallecompra.xaml


## Section 4: App recolector 
## 71. Creación del proyecto 

- Crear un proyecto 
- C# + Todas las plataformas + Móvil 
- Aplicación móvil (Xamarin.Forms) 
	- C# - Android - iOS - Windows - Móvil

EcoMoney:   
- EcomoneyRecolector: 
	- Conexiones 
	- Datos 
	- Modelo
	- VistaModelo
	- Vista

## 72. Página Login 

Vista:   
- Nuevo elemento: Xamarin.Forms - Página de contenido 
- Login.xaml

## 73. Diseño 

IsPassword = "True"

## 74. VM patrón 

Vista:   
- Nuevo elemento: Xamarin.Forms - Página de contenido 
- Menuprincipal.xaml

Solución "EcomoneyRecolector":    
- Administrar paquete NuGet para la solución: 
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

## 75. Conexión a Firebase 

Conexión:   
- Clase: Constantes.cs 

Solución "EcomoneyRecolector"    
- Administrar paquetes NuGet para la solución: 
- Examinar: FirebaseDatabase.net

## 76. Inicio de sesión  

Solución "EcomoneyRecolector"    
- Administrar paquetes NuGet para la solución: 
- `Examinar:` Acr.UserDialogs
	- `Versión:` 7.1.0.514
- `Examinar:` FirebaseAuthentication.net

## 77. Statusbar 

Solución "EcomoneyRecolector"    
- Administrar paquetes NuGet para la solución: 
- `Examinar:` Xamarin.Plugin.SharedTransitions

EcomoneyRecolector.Android:    
- Carpeta: Controles
	- Clase: StatusBar.cs
- Administrar paquetes NuGet
- Examinar: Plugin.CurrentActivity

## 78. Diseño menu principal

diego@mail.com - diego1234

## 79. Bloque de recolector 

## 80. Proporciones 

## 81. Paginas de navegación 

VistaModelos:   
- Clase: VMmenuprincipal.cs

Vista:   
- Nuevo elemento: Xamarin.Forms - Página de contenido 
- Agregarcliente.xaml
- Nuevo elemento: Xamarin.Forms - Página de contenido 
- Mapear.xaml

## 82. Contador de asignaciones 

Modelo:   
- Clase: Masignaciones.cs

Datos:   
- Clase: Dasignaciones.cs

## 83. Registro de clientes 

## 84. Geolocalizar 

## 85. Mostrar animaciones

Solución "EcomoneyRecolector"   
- Administrar paquetes NuGet: 
- Examinar: Com.Airbnb.Xamarin.Forms.Lottie
- Versión: 4.0.10


[LottieFiles: Download Free lightweight animations for website & apps.](https://lottiefiles.com/)

Descargar en formato: **Lottie JSON**

## 86. Subir foto a Store 

Modelo:   
- Clase: Mclientes.cs

Datos:  
- Clase: Dclientes.cs

En Firebase:   
- Compilación: Storage
- us-west3
- Carpeta: Fachadasclientes

Solución "EcomoneyRecolector"    
- Administrar paquetes NuGet
- FirebaseStorage.net

## 87. Mostrar listas

VistaModelo:   
- Clase: VMclientes.cs

Modelo:  
- Clase: Mubicaciones.cs

Datos:   
- Clase: Dubicaciones.cs

Solución "EcomoneyRecolector"   
- Administrar paquetes NuGet para la solución 
- Examinar: Xam.Plugin.Media 

## 88. Asignar objetos 

## 89. Selectores 

Vista:   
- Nuevo elemento: Xamarin.Forms - Página de contenido 
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

Solución "EcomoneyRecolector"   
- Administrar paquetes NuGet para la solución 
- Examinar: Xamarin.Forms.GoogleMaps
- Versión: 3.3.0

En google: Google developer console     
- https://console.cloud.google.com/projectselector2/apis/dashboard?pli=1&supportedpurview=project
- Perú
- Aceptar todo 
- ¿Cómo planeas usar Google Cloud?
- Analizar datos 

Crear proyecto:   
- Nombre: EcoMoney
- Sin organización 
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

## 92. Página de geolocalización 


## 93. Obtener ubicación actual 

img punto ubicación: 64x64


## 94. Obtener coordenadas 


## 95. Pruebas en dispositivo físico 

Solución "EcomoneyRecolector.Android"   
- Administrar paquetes NuGet para la solución 
- Examinar: Xamarin.GooglePlayServices.Maps
- Versión: 117.0.1

En caso el paquete anterior no se instale debes instalar: 
- `Xamarin.Android.Support.V7.AppCompat` 


Descargar camión 64 x 64

Proyector de pantalla: `Apowermirror`


## 96. Pruebas toma de foto 

Proyecto Android:    
- Carpeta: Resources
- Carpeta: xml 
	- Nuevo elemento: Datos - Archivo XML: name: file_paths.xml


## 97. Prueba de registro de cliente


## 98. Diseño de mapeado


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
- Nuevo elemento: Xamarin.Forms + Página de contenido 
- Vercliente.xaml


## 104. Botón ir 

Solución "EcomoneyRecolector"   
- Administrar paquetes NuGet para la solución   
- Xam.Plugin.ExternalMaps (4.0.1)

## 105. VMregistro de compras  

Vista:   
- Nuevo elemento: xamarin.Forms - Página de contenido
- RegCompras.xaml

VistaModelo:  
- Clase: VMregCompras.cs

Datos:   
- Clase: Dproductos.cs

Modelo:   
- Clase: Mproductos.cs


## 106. Diseño de registro de compras

## 107. Panel contador

## 108. Compartir datos entre VM

Vista:   
- Nuevo elemento: Xamarin.Forms - Pagina de contenido
- Agregarcompra.xaml

VistaModelo:   
- Clase: VMagregarcompra.cs

## 109. Asignar comando a frame

## 110. Diseño agregar compra


## 111. Insertar detalle compra

Modelo:   
- Clase: Mdetallecompras.cs

Datos:   
- Clase: Ddetallecompras.cs

## 112. Función sumar total 

## 113. Problema de actualizaciones 

## 114. Actualizar procesos independientes 


## 115. Eliminar compras sin confirmar 

## 116. Diseño confirmar compra 

## 117. Confirmar detalle compras 

## 118. Animación up

Google: Easing Xamarin fomrs 


App.xaml.cs = public App()

```c#
MainPage = new NavigationPage(new Login());

//Tambien 
MainPage = new NavigationPage(new RegCompras());
```


## 119. Animación Down


## 120. Eliminar solicitudes 


## 121. Prueba confirmar compra

error xd

## 122. Primeras pruebas 

ver de nuevo
- Cliente hace la solicitud 
- Administrador asigna a un recolector 