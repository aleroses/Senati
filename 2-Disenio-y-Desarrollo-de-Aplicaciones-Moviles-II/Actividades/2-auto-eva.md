# Diseño y Desarrollo de Aplicaciones Móviles II

## Autoevaluación T01

1.  Pregunta 1    
    ¿Cuál es la interfaz de desarrollo (IDE) de Xamarin?
    
    1.  Xcode
    2.  Sublime
    3.  Android Studio
    4.  ✅ Visual Studio  
    5.  Bloc de notas


2.  Pregunta 2  
    Es el diseño de la interfaz de usuario de la computadora, muestra una lista y los detalles del elemento seleccionado actualmente.
    
    1.  Xamarin nos ofrece un enfoque multiplataforma 
    2.  ✅ Master–detail
    3.  Xamarin suele añadir soporte el mismo día del lanzamiento oficial de una actualización
    4.  Drawer Navigation
    5.  Tenemos todas las APIs disponibles con C#, cualquier cosa que se pueda hacer con Objective-C/Swift o Java, se puede hacer con C# y Xamarin.


3.  Pregunta 3   
    Xamarin permite desarrollar en 3 principales plataformas del mercado indique cuales son:
    
    1.  os - Symbian - BlackBerry OS 
    2.  ✅ ios - windows phone - android  
    3.  ios - windows phone - Symbian
    4.  ios - Symbian - BlackBerry OS
    5.  ios - BlackBerry OS - Symbian


4.  Pregunta 4    
    En que lenguaje se desarrolla Xamarin.
    
    1.  ✅ c#   
    2.  java
    3.  php
    4.  cms
    5.  lotus


5.  Pregunta 5   
    Es un elemento de interfaz definido por Material Design consistente en el típico menú lateral deslizante desde la izquierda (salvo en lenguajes RTL) y utilizado ampliamente como el principal elemento de navegación de las aplicaciones móviles.
    
    1.  ✅ Navigation Drawer
    2.  Los layouts son elementos contenedores de otros layouts o vistas.
    3.  Barra de herramientas
    4.  Mastar - detail
    5.  Crea variables privadas de salida


## Autoevaluación T02 

1.  Pregunta 1   
    En la lista, que ítem no pertenece a técnicas para crear un Data Template.
    
    1.  ✅ Creación de una plantilla de datos en línea, crear una plantilla de datos con un tipo y creación de una plantilla de datos como recurso  
    2.  Creación de una plantilla de datos en línea y crear una plantilla de datos con un tipo 
    3.  Crear una plantilla de datos con un tipo y creación de una plantilla de datos como recurso
    4.  Creación de una plantilla de datos en línea, crear una plantilla de datos con un tipo, creación de una plantilla de datos como recurso y descargar plantilla con el XAMPP SERVER
    5.  Creación de una plantilla de datos en línea, crear una plantilla de datos con un tipo y descargar plantilla con el XAMPP SERVER


2.  Pregunta 2     
    El código mostrado significa:   
    lv = new ListView();
    
    1.  Sentencia para crear un polimorfismo
    2.  ✅ Se crea un objeto lv con la clase ListViwe()
    3.  Se crea una clase ListViwe con el objeto lv
    4.  Se crea una plantilla Android
    5.  Code Behind


3.  Pregunta 3     
    Las Views, también son denominados:
    
    1. ✅ Controles o widgets  
    2.  Layouts
    3.  Pages
    4.  ViewControler
    5.  Activity


4.  Pregunta 4      
    Es un control de contenedor que proporciona la funcionalidad de extracción para actualizar el contenido desplazable.
    
    1. ✅ SwipeView
    2.  TimePicker 
    3.  CheckBox
    4.  RefreshView
    5.  DatePicker


5.  Pregunta 5    
    El código que se muestra a continuación está creando:     
```cs
<ContentPage xmlns="http://xamarin.com/schemas/2014/forms"
    
           xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"
    
           xmlns:local="clr-namespace:DataTemplates"
    
           ...>
    
      <StackLayout Margin="20">
    
        ...
    
        <ListView Margin="0,20,0,0">
    
          <ListView.ItemsSource>
    
            <x:Array Type="{x:Type local:Person}">
    
              <local:Person Name="Steve" Age="21" Location="USA" />
    
              ...
    
            </x:Array>
    
          </ListView.ItemsSource>
    
          <ListView.ItemTemplate>
    
            <DataTemplate>
    
              <local:PersonCell />
    
            </DataTemplate>
    
          </ListView.ItemTemplate>
    
        </ListView>
    
      </StackLayout>
    
    </Crean una plantilla en C#ContentPage>
```
    1. ✅ Crean una plantilla en XAML
    2.  Crean una plantilla en C#
    3.  Es un constructor en Java
    4.  IndicatorView
    5.  ListView


## Autoevaluación T03

1.  Pregunta 1     
    Es un patrón de diseño que tiene por finalidad separar la parte de la interfaz del usuario de la parte de la lógica del negocio, logrando así que la parte visual sea totalmente independiente.
    
    1.  Swift.
    2.  Data Triggers
    3.  Jdk
    4.  ✅ MVVM
    5.  Windows 

2.  Pregunta 2    
    En cuantas partes se divide MVVM.
    
    1.  12
    2.  2
    3.  ✅ 3
    4.  4
    5.  5

3.  Pregunta 3    
    Se encarga de interactuar tanto con el modelo como con la vista.
    
    1.  Model 
    2.  Views 
    3.  MainActivity.cs
    4.  ✅ View Models 
    5.  Strings.xml

4.  Pregunta 4     
    La imagen representa    
    ![imagen.png](https://senati.blackboard.com/bbcswebdav/pid-17588919-dt-asiobject-rid-76399350_1/xid-76399350_1)
	
    1.  Model 
    2.  Views 
    3.  MainActivity.cs
    4.  View Models 
    5.  MVVM

5.  Pregunta 5     
    Es la parte visual de una aplicación:
    
    1.  Model 
    2.  MainActivity.cs
    3.  View Models 
    4.  Views 
    5.  Strings.xml


## Autoevaluación T04

1.  Pregunta 1    
    Son herramientas que nos permite armar y enviar peticiones REST para testear una comunicación entre cliente y servidor.
    
    1.  Web Services
    2.  API
    3.  ✅ Servicios REST.
    4.  Servicios SOAP
    5.  Envío de SMS.
   
2.  Pregunta 2     
    Hablamos de una arquitectura divididas por niveles que se utilizaba para hacer un servicio, es más complejo de montar como de gestionar y solo trabajaba con XML.
    
    1.  GET
    2.  POST
    3.  REST
    4.  ✅ SOAP
    5.  PUT

3.  Pregunta 3     
    En la lista, que ítem no pertenece a un método que se apoya el REST.
    
    1.  ✅ URL
    2.  Patch 
    3.  Delete 
    4.  Post
    5.  Get

4.  Pregunta 4      
    Dentro del servicio REST el método POST sirve para:
    
    1.  Para obtener un recurso en concreto 
    2.  Para borrar un recurso, un dato por ejemplo de nuestra base de datos. 
    3.  Modificar
    4.  ✅ Para crear recursos nuevos 
    5.  Para modificar un recurso que no es un recurso de un dato, por ejemplo.

5.  Pregunta 5     
    Dentro del servicio REST el método PATCH sirve para:
    
    1.  ✅ Para modificar un recurso que no es un recurso de un dato, por ejemplo.
    2.  Para borrar un recurso, un dato por ejemplo de nuestra base de datos.
     3.  Para modificar.
    4.  Para obtener un lichado o un recurso en concreto.
    5.  Para crear recursos nuevos.


## Autoevaluación T05

1.  Pregunta 1    
    Para publicar un proyecto Xamarin, primero que se debe de hacer es
    
    1.  Seleccionar la opción people
    2.  Play Store Connect
    3.  Instalar APPSER
    4. ✅ Certificates, Identifiers & Profiles 
    5.  Modelo Verificación Vista-Modelo
    
2.  Pregunta 2     
    El certificado que se debe de crear para publicar una aplicación es
    
    1.  Apple Development  
    2. ✅ Apple Distribution 
    3.  iSO Apple Development  
    4.  Mac Development
    5.  Mac App Distribution
    
3.  Pregunta 3     
    Para publicar la aplicación necesitamos un identificador para nuestra aplicación, por lo que seleccionaremos la opción
    
    1.  Services IDs
    2.  Pass Type IDs
    3.  Website Push IDs
    4.  iCloud Containers
    5. ✅ App IDs
    
4.  Pregunta 4     
    Para crear el identificador de nuestra aplicación, la opción correcta es
    
    1.  Certificates
    2. ✅ Identifiers
    3.  Devices
    4.  Profiles
    5.  Keys
    
5.  Pregunta 5     
    Es el proceso de compilación de una aplicación de Xamarin.Android para que esté lista para que los usuarios la instalen en sus dispositivos
    
    1.  Inicio del proyecto
    2. ✅ Publicar el proyecto
    3.  Utilizar patrones MVVM
    4.  La depuración de un proyecto
    5.  Una forma es simplemente agregar su ViewModel