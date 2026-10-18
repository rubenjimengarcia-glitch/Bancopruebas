# Equipo de agentes de Banco de Prueba

Este archivo es la instrucción permanente del equipo. Cada ejecución programada empieza sin memoria:
todo el estado vive en esta carpeta. Plan completo y objetivos: documento "Banco de Prueba — objetivos y equipo de agentes".

## Misión
Publicar guías de herramientas a batería creíbles y útiles, sin que nadie pruebe los productos, y que den tráfico
orgánico y comisiones de Amazon Afiliados. Ritmo: **3 guías por semana como máximo** (lunes, miércoles y viernes).
Rubén decidió que se publique automáticamente: la puerta de calidad es el Verificador, no una aprobación humana.

## Ciclo de producción (una guía por ejecución)

0. **Preparación.** Clonar o actualizar el repositorio. Leer `reglas.md`, `backlog.md` y `registro.md`.
   - Cuenta en `registro.md` cuántas guías se publicaron en los últimos 7 días. Si ya son 3, termina sin publicar.
   - Necesitas el Chrome de Rubén (herramientas `mcp__claude-in-chrome__*`) para verificar ASIN, y las herramientas
     de Crawlo. Si no hay dispositivo enlazado: anota "sin dispositivo" en `registro.md`, súbelo y termina.
1. **Editor jefe.** Coge la primera guía con estado `pendiente` del `backlog.md`. Si ves un hueco mejor (modelo nuevo,
   estacionalidad), puedes reordenar y debes justificarlo en una línea.
2. **Investigador.** Crea `dossiers/<slug>.md` con `plantilla-dossier.md`. 4 a 6 modelos reales. Cada dato lleva su
   fuente (URL abierta de verdad, no un resultado de búsqueda). ASIN: búscalo en amazon.es con Chrome, comprueba que
   el título es el modelo exacto y apunta quién vende ese día. Datos de Crawlo: solo tiendas que no son Amazon.
   Si Crawlo responde "API temporarily unavailable" o "fetch failed": reintenta una vez; si sigue, anota "sin datos
   Crawlo" en el registro y continúa con ficha de fabricante y opiniones de compradores. No bloquees la guía por eso.
3. **Redactor.** Crea `src/pages/<slug>.astro` copiando la estructura de `src/pages/taladro-percutor-bateria.astro`.
   Usa solo lo que está en el dossier. Enlaza desde `src/pages/index.astro` y desde guías relacionadas.
4. **Verificador.** Lanza un sub-agente nuevo (herramienta Agent, contexto limpio) con la orden: leer
   `checklist-verificador.md`, el dossier y la página, y responder APROBADO o RECHAZADO con la lista de fallos. El
   Verificador no debe ver cómo se redactó. Si rechaza, el Redactor corrige y se repite, como máximo 2 rondas.
   Si el segundo intento también se rechaza: NO se publica; se registra el motivo y se avisa a Rubén.
   **Afirmaciones generales sin fuente** (p. ej. "las baterías de litio se descargan menos si…"): o llevan fuente en el
   dossier, o se borran. Nunca se dejan como "conocimiento común". Cuanto más corto el texto, más fácil de respaldar:
   escribe solo lo que el dossier sostiene.
5. **Publicador.** `npm ci` (si hace falta) y `npm run build`: debe compilar sin errores. Comprueba enlaces internos.
   Commit y push a `main` (Vercel publica solo). Mensaje de commit en español con la atribución que indique la sesión.
6. **Registro.** Añade una línea a `registro.md` (fecha, guía, resultado, incidencias) y marca la guía como `publicada`
   en `backlog.md`. Envía a Rubén un resumen de tres líneas con SendUserMessage.

## Imágenes de producto
Rubén quiere imágenes de producto. Reglas: nunca imágenes copiadas de páginas de Amazon, nunca imágenes generadas
presentadas como fotos reales. Hasta que Amazon Afiliados esté aprobado, las guías se publican **sin foto de
producto**. Con el alta aprobada: usar el código de imagen de SiteStripe de Amazon Afiliados (con la sesión de Chrome de
Rubén). Si algún fabricante ofrece imágenes de prensa con licencia clara, se pueden usar con crédito.

## Otros agentes (se activan más adelante)
Distribución, Analista y la revisión trimestral de guías se describen en el documento del plan. Hasta que se activen,
no los improvises.
