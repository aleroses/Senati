# Administradores 
El administrador no tiene usuario ni contraseña, accede de manera directa  

## Funciones 
- Configurar 
	- Recolectores: Añade personal recolector de residuos reciclables 
		- Nombres
		- Identificación 
		- Correo
		- Contraseña 
	- Productos: Añade productos 
		- Descripción 
		- Precio venta 
		- Precio compra 
		- Und: kg
		- Color: Hexadecimal 
		- Icono: Link en la BD Firebase 
 - Asignar: Asigna solicitudes de recojo por Identificación a los recolectores encargados de pasar por cada casa 

## Recolectores añadidos 
Recolector 01:   
- Nombres: Ozzy Osbourne   
- Identificación: 0001
- Correo: ozzy@mail.com 
- Contraseña: ozzy1234

Recolector 02:   
- Nombres: Lemmy Kilmister
- Identificación: 0002 
- Correo: lemmy@mail.com
- Contraseña: lemmy1234

Recolector 03:   
- Nombres: Kurt Cobain 
- Identificación: 0003 
- Correo: kurt@mail.com
- Contraseña: kurt1234

Recolector 04:   
- Nombres: Diego Alexis 
- Identificación: 0004 - 12341234
- Correo: diego@mail.com
- Contraseña: diego1234

Recolector 05:  
- Miguel Hurtado 
- 0005
- miguel@mail.com
- miguel1234

## Productos añadidos 
- Papel
- Plástico 
- Metal 

# Recolectores
El recolector accede con su correo y contraseña ingresado por el administrador.

## Funciones 
- Afiliar 
	- Identificación: DNI
	- Nombres y Apellidos
	- Dirección 
	- País 
	- Departamento 
	- Provincia 
	- Distrito 
	- Zona
	- Foto fachada
	- Geolocalizar: Indicar el punto exacto 
- Mapear: Ver los puntos a los que tengo que ir (Asignado por el Administrador)
	- Ver: Muestra 
		- Dirección
		- Identificación del cliente
		- Foto de la fachada de la casa
	- Comprar: Muestra los productos que en ese momento estamos autorizados a comprar.
		- Papel: 
		- Plástico
		- Metal 
	- Ir: Nos traza la ruta en Google Maps 

## Clientes añadidos 
Cliente 01: 
- Identificación 87654321
- Nombre y apellidos: Elvis Presley


# Clientes  
El cliente accede con su DNI   

## Funciones  
- Solicitar recojo
	- Fecha 
	- Horario
- Ver detalles: Muestra los productos que el recolector se llevó 


John Lennon 


diego@mail.com
diego1234

# Diagrama de Procesos 

![Proceso](https://i.postimg.cc/TP88B2yq/diagrama-procesos.png)   



![Flujo](https://i.postimg.cc/fW2KJtT5/diagrama-procesos.jpg)  


![Flujo + Simbolos](https://i.postimg.cc/x8kD278N/diagrama-de-flujo-simbolos.webp)   


1. Nombre: Comenzar con el nombre del proceso que se va a diagramar 
2. Encabezado: Se debe especificar si se trata del diagrama actual o el propuesto 
3. Símbolo Inicio: El diagrama debe comenzar con el símbolo de rectángulo ovalado 
4. Flechas: Se usan flechas para indicar el sentido en el que se debe leer el diagrama 
5. Sentido: De arriba hacia abajo, y de izquierda a derecha 
6. Salidas: De un símbolo solo sale una flecha aunque pueden llegar varias, excepto en el rombo 
7. Páginas: Para cambiar de página se necesita un símbolo en forma de conector 
8. Continuidad: Ninguna ruta del diagrama debe quedar inconclusa 
9. Dirección: Para el cambio de dirección del diagrama se usa un semi-circulo

# Diagramas de Flujo

- De procesos 
	- D. de Flujo por Bloques
	- D. de Flujo Funcional 
- De decisiones 
- De sistemas 
- De producto 
- Lógico 