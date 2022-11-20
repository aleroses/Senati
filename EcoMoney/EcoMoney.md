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