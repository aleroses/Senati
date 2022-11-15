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
