# Claude Workflow Rules

## Change Implementation Process

Cuando se solicite un cambio en la página de JeatLabs, seguir este proceso:

1. **Realizar cambios localmente**
   - Hacer todas las modificaciones necesarias en los archivos
   - Revisar los cambios con `git diff` antes de commitear

2. **Publicar cambios**
   - Crear un commit descriptivo
   - Hacer push a GitHub
   - Esperar a que GitHub Pages despliegue los cambios (~20-30 segundos)

3. **Verificar con Playwright**
   - Navegar a la página publicada
   - Tomar screenshot para verificación visual
   - Revisar el snapshot de accesibilidad
   - Confirmar que los cambios se aplicaron correctamente

4. **Confirmar completitud**
   - Solo marcar la tarea como completada después de verificar que todo funciona
   - Reportar cualquier problema encontrado durante la verificación

## Notas importantes

- Siempre usar el TodoWrite tool para trackear el progreso
- No dar por terminado un cambio hasta verificarlo en producción
- Si hay problemas de caché, usar parámetros query string para forzar recarga
