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