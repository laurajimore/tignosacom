# 📚 GUÍA DE COMANDOS - GIT, TERMINAL Y FLUJO DE TRABAJO

**Para:** Laura Jimore  
**Proyecto:** tignosacom  
**Fecha:** Febrero 2025

---

## 🎯 FASES DE TRABAJO

```
1. SETUP INICIAL (una vez)
2. DESARROLLO DIARIO (cada día)
3. GUARDAR CAMBIOS (cuando terminas algo)
4. COLABORACIÓN (trabajar con otros/desde varios PCs)
```

---

## 📂 COMANDOS DE NAVEGACIÓN (Terminal básica)

### Fase: SIEMPRE (navegación básica)

| Comando             | Qué hace                           | Ejemplo                     |
| ------------------- | ---------------------------------- | --------------------------- |
| `pwd`               | Muestra dónde estás (ruta actual)  | `pwd` → `/d/01_PROYECTOS`   |
| `ls`                | Lista archivos y carpetas          | `ls`                        |
| `ls -la`            | Lista TODO (incluidos ocultos)     | `ls -la`                    |
| `cd carpeta`        | Entrar a una carpeta               | `cd tignosacom`             |
| `cd ..`             | Subir un nivel (carpeta padre)     | `cd ..`                     |
| `cd ~`              | Ir a tu carpeta de usuario         | `cd ~`                      |
| `cd /d/`            | Ir a la raíz del disco D           | `cd /d/01_PROYECTOS`        |
| `mkdir nombre`      | Crear carpeta                      | `mkdir assets`              |
| `touch archivo`     | Crear archivo vacío                | `touch .gitignore`          |
| `rm archivo`        | Borrar archivo                     | `rm test.txt`               |
| `rm -r carpeta`     | Borrar carpeta y contenido         | `rm -r node_modules`        |
| `cp origen destino` | Copiar archivo                     | `cp index.html backup.html` |
| `mv origen destino` | Mover/renombrar archivo            | `mv old.txt new.txt`        |
| `clear`             | Limpiar pantalla de terminal       | `clear`                     |
| `cat archivo`       | Ver contenido de archivo           | `cat .gitignore`            |
| `code .`            | Abrir VS Code en carpeta actual    | `code .`                    |
| `code -r .`         | Abrir en ventana actual de VS Code | `code -r .`                 |

---

## 🔧 GIT - SETUP INICIAL

### Fase 1: CONFIGURACIÓN (una sola vez en tu PC)

```bash
# Configurar tu nombre (aparecerá en commits)
git config --global user.name "Laura Jimore"

# Configurar tu email (debe coincidir con GitHub)
git config --global user.email "tu@email.com"

# Verificar configuración
git config --list
```

### Fase 1: CLONAR REPOSITORIO (una vez por proyecto)

```bash
# Ir a donde quieras guardar el proyecto
cd /d/01_PROYECTOS

# Clonar (descargar) repositorio desde GitHub
git clone https://github.com/laurajimore/tignosacom.git

# Entrar al proyecto
cd tignosacom
```

---

## 💻 GIT - DESARROLLO DIARIO

### Fase 2: AL EMPEZAR EL DÍA

```bash
# Ver en qué rama estás
git branch

# Ver estado actual (archivos modificados)
git status

# Descargar cambios de GitHub (importante si trabajas desde varios PCs)
git pull origin main
```

### Fase 2: MIENTRAS TRABAJAS

```bash
# Ver qué archivos has modificado
git status

# Ver diferencias específicas de lo que cambiaste
git diff

# Ver diferencias de un archivo específico
git diff index.html
```

---

## 💾 GIT - GUARDAR CAMBIOS

### Fase 3: CUANDO TERMINES ALGO

```bash
# 1. VER QUÉ CAMBIASTE
git status

# 2. AÑADIR ARCHIVOS AL "STAGING" (preparar para guardar)
git add .                    # Añade TODOS los cambios
git add archivo.html         # Añade UN archivo específico
git add -A                   # Añade TODO (nuevos, modificados, borrados)
git add carpeta/             # Añade toda una carpeta

# 3. GUARDAR (COMMIT) con mensaje descriptivo
git commit -m "Descripción clara de lo que hiciste"

# Ejemplos de buenos mensajes:
git commit -m "Añadida sección de contacto"
git commit -m "Corregido bug en el menú responsive"
git commit -m "Actualizado logo y colores"

# 4. SUBIR A GITHUB
git push origin main         # Sube a la rama "main"
```

### ATAJO (añadir + commit en un comando)

```bash
# Solo para archivos YA existentes en Git (no para nuevos)
git commit -am "Tu mensaje"
```

---

## 🌿 GIT - RAMAS (Trabajo avanzado)

### Fase 4: ORGANIZACIÓN PROFESIONAL

```bash
# Ver todas las ramas
git branch

# Crear nueva rama
git branch nombre-rama

# Cambiar a otra rama
git checkout nombre-rama

# Crear Y cambiar a nueva rama (atajo)
git checkout -b desarrollo

# Fusionar rama en la actual
git merge nombre-rama

# Ejemplo de flujo profesional:
git checkout -b nueva-funcionalidad    # Crear rama para trabajar
# ... trabajas, haces commits ...
git checkout main                      # Volver a main
git merge nueva-funcionalidad          # Fusionar cambios
git push origin main                   # Subir todo
```

---

## 🔍 GIT - INFORMACIÓN Y HISTORIAL

### Fase: SIEMPRE (consulta)

```bash
# Ver historial de commits
git log

# Ver historial compacto (una línea por commit)
git log --oneline

# Ver últimos 5 commits
git log -5

# Ver quién modificó qué en un archivo
git blame archivo.html

# Ver cambios de un commit específico
git show abc1234
```

---

## ⚠️ GIT - DESHACER CAMBIOS

### Fase: CUANDO TE EQUIVOCAS

```bash
# DESCARTAR cambios de un archivo (CUIDADO: se pierden cambios)
git restore archivo.html

# QUITAR archivo del staging (sin perder cambios)
git restore --staged archivo.html

# DESHACER último commit (mantiene los cambios)
git reset --soft HEAD~1

# DESHACER último commit (BORRA los cambios)
git reset --hard HEAD~1

# VOLVER a un commit anterior
git reset --hard abc1234
```

⚠️ **CUIDADO con `--hard`**: Borra cambios permanentemente

---

## 📦 NPM - GESTIÓN DE PAQUETES (Node.js)

### Fase: SETUP INICIAL

```bash
# Instalar dependencias (una vez, o cuando clonas proyecto)
npm install

# Instalar paquete específico
npm install nombre-paquete

# Instalar como dependencia de desarrollo
npm install nombre-paquete --save-dev
```

### Fase: DESARROLLO

```bash
# Iniciar servidor de desarrollo (Vite)
npm run dev

# Compilar para producción
npm run build

# Ver versión compilada
npm run preview
```

---

## 🐧 WSL - COMANDOS ADICIONALES (Para cuando uses WSL)

### Navegación entre Windows y Linux

```bash
# Desde WSL: acceder a discos de Windows
cd /mnt/c/Users/laura              # Disco C:
cd /mnt/d/01_PROYECTOS             # Disco D:

# Abrir explorador de Windows desde WSL
explorer.exe .

# Abrir VS Code desde WSL
code .
```

### Permisos y propietario (Linux)

```bash
# Ver permisos de archivos
ls -l

# Cambiar permisos
chmod 755 archivo.sh               # Hacer ejecutable

# Cambiar propietario
chown usuario:grupo archivo
```

---

## 📋 FLUJO DE TRABAJO COMPLETO

### 🌅 MAÑANA (empiezas a trabajar)

```bash
# 1. Abrir terminal
cd /d/01_PROYECTOS/tignosacom

# 2. Actualizar desde GitHub
git pull origin main

# 3. Ver estado
git status

# 4. (Si usas Vite) Iniciar servidor
npm run dev

# 5. Trabajar en VS Code
code .
```

### 💼 DURANTE EL DÍA (mientras trabajas)

```bash
# Ver cambios frecuentemente
git status

# Guardar trabajo importante (commits intermedios)
git add .
git commit -m "Trabajo en progreso: sección hero"
```

### 🌙 TARDE (terminas el día)

```bash
# 1. Ver todo lo que cambiaste
git status

# 2. Añadir cambios
git add -A

# 3. Commit final del día
git commit -m "Completada página de inicio y estilos responsive"

# 4. Subir a GitHub
git push origin main

# 5. (Opcional) Compilar versión final
npm run build
```

---

## 🎓 COMANDOS POR NIVEL DE EXPERIENCIA

### ⭐ NIVEL BÁSICO (DOMINA ESTOS PRIMERO)

```bash
pwd                          # ¿Dónde estoy?
ls                           # ¿Qué hay aquí?
cd carpeta                   # Moverse
git status                   # ¿Qué cambié?
git add .                    # Preparar cambios
git commit -m "mensaje"      # Guardar cambios
git push origin main         # Subir a GitHub
git pull origin main         # Descargar de GitHub
```

### ⭐⭐ NIVEL INTERMEDIO (CUANDO TE SIENTAS CÓMODA)

```bash
git log --oneline            # Ver historial
git diff                     # Ver diferencias
git checkout -b rama         # Crear rama
git merge rama               # Fusionar rama
git restore archivo          # Deshacer cambios
npm run dev                  # Servidor desarrollo
npm run build                # Compilar
```

### ⭐⭐⭐ NIVEL AVANZADO (MÁS ADELANTE)

```bash
git reset --hard             # Deshacer commits
git rebase                   # Reorganizar commits
git stash                    # Guardar cambios temporalmente
git cherry-pick              # Aplicar commits específicos
```

---

## 🚨 ERRORES COMUNES Y SOLUCIONES

### Error: "No such file or directory"

```bash
# Problema: Ruta incorrecta
# Solución: Usar rutas estilo Git Bash
❌ cd C:\xampp\htdocs
✅ cd /c/xampp/htdocs
```

### Error: "Permission denied"

```bash
# Problema: No tienes permisos
# Solución: Ejecutar como administrador o cambiar permisos
chmod +x archivo.sh
```

### Error: Conflictos al hacer pull

```bash
# Problema: Cambios locales conflictúan con remotos
# Solución 1: Guardar tus cambios primero
git add .
git commit -m "Mis cambios locales"
git pull origin main

# Solución 2: Descartar cambios locales
git restore .
git pull origin main
```

### Error: "fatal: not a git repository"

```bash
# Problema: No estás en una carpeta con Git
# Solución: Ve a la carpeta correcta
cd /d/01_PROYECTOS/tignosacom
```

---

## 📖 GLOSARIO RÁPIDO

| Término               | Significado                                   |
| --------------------- | --------------------------------------------- |
| **Repository (repo)** | Carpeta de proyecto con historial Git         |
| **Clone**             | Copiar repositorio de GitHub a tu PC          |
| **Commit**            | Guardar cambios en el historial local         |
| **Push**              | Subir commits a GitHub                        |
| **Pull**              | Descargar cambios de GitHub                   |
| **Branch**            | Rama paralela de desarrollo                   |
| **Merge**             | Fusionar ramas                                |
| **Staging**           | Área donde preparas archivos antes del commit |
| **Working directory** | Carpeta donde trabajas                        |
| **Remote**            | Repositorio en GitHub (remoto)                |
| **Origin**            | Nombre por defecto del repositorio remoto     |
| **Main/Master**       | Rama principal del proyecto                   |
| **HEAD**              | Apunta al commit actual                       |

---

## 💡 TIPS Y BUENAS PRÁCTICAS

### ✅ HAZ ESTO:

- ✓ Commits pequeños y frecuentes
- ✓ Mensajes de commit claros y descriptivos
- ✓ `git pull` antes de empezar a trabajar
- ✓ `git status` frecuentemente
- ✓ Usa `.gitignore` para excluir archivos innecesarios
- ✓ Haz backup antes de comandos destructivos (`--hard`)

### ❌ EVITA ESTO:

- ✗ Commits gigantes con muchos cambios diferentes
- ✗ Mensajes como "cambios", "actualización", "asdfg"
- ✗ Trabajar días sin hacer commit
- ✗ Usar `--hard` sin entender qué hace
- ✗ Subir contraseñas o archivos sensibles
- ✗ Ignorar conflictos de merge

---

## 🎯 PLAN DE APRENDIZAJE SUGERIDO

### Semana 1-2: BÁSICO
```bash
pwd, ls, cd
git status
git add .
git commit -m
git push
git pull
```

### Semana 3-4: INTERMEDIO
```bash
git log
git diff
git restore
npm run dev/build
```

### Mes 2: AVANZADO
```bash
git branch
git checkout
git merge
Trabajo con ramas
```

### Mes 3+: PROFESIONAL
```bash
WSL (Linux)
Docker
Flujos de trabajo complejos
```

---

## 📚 RECURSOS PARA APRENDER MÁS

- **Git oficial:** https://git-scm.com/docs
- **GitHub Docs:** https://docs.github.com
- **Git Cheat Sheet:** https://education.github.com/git-cheat-sheet-education.pdf
- **Learn Git Branching (interactivo):** https://learngitbranching.js.org/

---

**Última actualización:** Febrero 2025  
**Versión:** 1.0

---

💬 **Recuerda:** No necesitas memorizar todo. Usa esta guía como referencia. Con la práctica, los comandos más comunes se volverán automáticos.