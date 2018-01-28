# utilidadesdetests
Es el código con utilidades para la carga y generación de tests en Preparatic.
La utilidad toma como entrada las hojas con los TEST especificados como entrada en el fichero de configuración config/config.properties: 

```
#La hoja de calculo que contiene las preguntas. Puede haber varias separadas por espacios en blanco.
input.spreadsheetId=10hUnfLaoBcZFsOrSrHSl0fYIZIVa-CQtSRQt_KLA2UE 10hUnfLaoBcZFsOrSrHSl0fYIZIVa-CQtSRQt_KLA2UE 1UJiQDigjek_Hq3i5frPhRO65rUYwU-xzzelenG3zEjM
input.spreadsheetRange=Excel_preguntas_nuevas_preparat!A2:U examenes_años_anteriores!A2:U Excel_revision_preparatic24!A2:U
```

y produce los ficheros de salida HTML correspondientes a la aplicación HTML en el directorio testV2.

Una vez producidos los ficheros HTML, conjuntamente con las hojas css, las imágenes estáticas y el código javascript, este directorio contiene íntegramente la aplicación para la realización de tests a través de cualquier navegador compatible.


