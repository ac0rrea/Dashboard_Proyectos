# WE ARE · Dashboard de Proyectos v1.2

Aplicación estática, sin dependencias ni compilación. Abrir `index.html` o servir con `python -m http.server 8000`.

## Publicación
1. Descomprimir el ZIP y subir el contenido (incluidos `data/` y `js/`) a la raíz de un repositorio **privado** de GitHub.
2. En Netlify, importar el repositorio. Build command vacío, publish directory `.` (configurado en netlify.toml).
3. Antes de publicar datos reales, configurar protección de acceso en el hosting. Un repositorio privado no protege por sí solo el sitio publicado. Los datos iniciales están en `data/seed.js` y son descargables por cualquier visitante autorizado a acceder al sitio. No publicar en abierto.

## Estructura
- index.html: estructura y navegación
- styles.css: sistema visual del Estimador Comercial V1.4 adaptado al dashboard
- data/seed.js: datos iniciales
- js/core.js: estado, cálculos y utilidades
- js/dashboard.js: panel, edición y cortes
- js/tasks.js: accionables
- js/history.js: historial
- js/storage.js: importación y exportación
- js/app.js: renderizado e inicio

## Datos y migración
Se conserva la clave localStorage `weare-dashboard-v1`. El almacenamiento es específico del navegador y origen. Exportar el JSON desde el HTML anterior e importarlo en el nuevo sitio para conservar cambios hechos durante el testing. No existe sincronización entre usuarios o dispositivos ni autenticación incorporada. Inter se utiliza si está instalada; se mantienen las alternativas del Estimador original.
