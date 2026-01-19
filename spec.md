# Global Iport - Especificacion del Proyecto

## Descripcion General

**Global Iport** es una consultora DevOps recien creada, fundada por **Leandro Gomez** y **Victoria Scagliotti**.

Este repositorio contiene la landing page de la empresa.

- **Dominio**: globaliport.com
- **Repo**: https://github.com/LeanGomez/iport

---

## Historial de Decisiones (Q&A)

### Sesion 1 - Creacion inicial de la landing page

**Contexto inicial**: El usuario queria crear un front page sencillo para iport, una consultora DevOps nueva.

#### Pregunta 1: Tecnologia
> "Que tecnologia prefieren para el sitio web?"

**Opciones presentadas**:
- HTML/CSS simple - Pagina estatica sin frameworks
- React + Vite - SPA moderna con componentes
- Next.js - Framework React con SSR
- Astro - Framework optimizado para contenido

**Respuesta**: **React + Vite**

**Razonamiento**: Permite agregar funcionalidad facilmente en el futuro, componentes reutilizables, y buen DX con hot reload.

#### Pregunta 2: Estilo visual
> "Que estilo visual prefieren?"

**Opciones presentadas**:
- Minimalista profesional - Colores neutros, mucho espacio en blanco
- Moderno tech - Gradientes, colores vibrantes, estilo startup
- Corporativo clasico - Estilo empresarial tradicional

**Respuesta**: **Moderno tech**

**Razonamiento**: Refleja mejor la naturaleza tecnologica de una consultora DevOps y atrae al publico objetivo (CTOs, engineering managers, developers).

#### Pregunta 3: Secciones
> "Que secciones quieren incluir?"

**Opciones presentadas**:
- Hero + Servicios + Contacto (basica)
- Hero + Servicios + Nosotros + Contacto (intermedia)
- Completa (Hero, Servicios, Nosotros, Casos de exito, Blog, Contacto)

**Respuesta**: **Hero + Servicios + Nosotros + Contacto**

**Razonamiento**: Suficiente para presentar la empresa y sus fundadores sin sobrecargar con contenido que aun no existe (casos de exito, blog).

#### Cambio 1: Links de LinkedIn de fundadores
**Solicitud**: Agregar los LinkedIn reales de los fundadores.

**Links agregados**:
- Leandro Gomez: https://www.linkedin.com/in/leandro-d-gomez/
- Victoria Scagliotti: https://www.linkedin.com/in/maria-victoria-scagliotti/

**Archivo modificado**: `src/components/About.jsx`

#### Cambio 2: Fotos de perfil de fundadores
**Solicitud**: Agregar las fotos de LinkedIn de los fundadores.

**Proceso**:
1. LinkedIn bloquea acceso programatico (error 999)
2. Usuario descargo manualmente las fotos y las guardo en `src/assets/`

**Archivos agregados**:
- `src/assets/leandro.jpg`
- `src/assets/victoria.jpg`

**Archivo modificado**: `src/components/About.jsx`
- Import de las imagenes
- Reemplazo del placeholder de iniciales por `<img>` con borde gradiente

#### Cambio 3: Deploy a produccion
**Solicitud**: Deployar el sitio a Vercel.

**Proceso**:
1. Inicializar git y crear commit inicial
2. Instalar GitHub CLI (`brew install gh`)
3. Autenticar con GitHub (`gh auth login`)
4. Crear repo publico y push (`gh repo create iport --public --source=. --push`)
5. Instalar Vercel CLI (`npm install -g vercel`)
6. Autenticar con Vercel (`vercel login`)
7. Deploy (`vercel --yes`)

**Resultado**:
- **GitHub**: https://github.com/LeanGomez/iport
- **Vercel (produccion)**: https://iport-theta.vercel.app

#### Cambio 4: Rebranding a Global Iport
**Solicitud**: Cambiar la marca de "iport" a "Global Iport" porque el dominio comprado es globaliport.com.

**Archivos modificados**:
- `src/components/Navbar.jsx` - Logo
- `src/components/Footer.jsx` - Logo y copyright
- `src/components/Contact.jsx` - Email de contacto (contacto@globaliport.com)
- `index.html` - Title y meta description

---

## Stack Tecnologico

- **Framework**: React 19 + Vite 7
- **Estilos**: Tailwind CSS 4 (via @tailwindcss/vite plugin)
- **Lenguaje**: JavaScript (JSX)

## Decisiones de Diseno

### Estilo Visual
- **Tema**: Moderno tech / startup tecnologica
- **Colores principales**:
  - Background: slate-900, slate-800
  - Acentos: cyan-400, cyan-500, blue-500, blue-600
  - Gradientes: cyan -> blue (botones, titulos)
- **Tipografia**: System fonts (default de Tailwind)

### Secciones de la Landing
1. **Navbar** - Navegacion fija con logo y links, menu hamburguesa en mobile
2. **Hero** - Mensaje principal, CTAs, iconos de tecnologias
3. **Servicios** - 6 cards con servicios DevOps
4. **Nosotros** - Perfiles de fundadores + valores de la empresa
5. **Contacto** - Formulario + info de contacto
6. **Footer** - Logo, copyright, links sociales

## Estructura de Archivos

```
iport/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx      # Navegacion responsive
│   │   ├── Hero.jsx        # Seccion hero con gradientes
│   │   ├── Services.jsx    # Grid de 6 servicios
│   │   ├── About.jsx       # Fundadores + valores
│   │   ├── Contact.jsx     # Formulario de contacto
│   │   └── Footer.jsx      # Footer
│   ├── App.jsx             # Componente principal
│   ├── main.jsx            # Entry point
│   └── index.css           # Tailwind imports
├── index.html              # HTML base con meta tags
├── vite.config.js          # Config de Vite + Tailwind
├── package.json
└── spec.md                 # Este archivo
```

## Servicios Ofrecidos (contenido)

1. **Cloud Infrastructure** - AWS, GCP, Azure
2. **Kubernetes & Containers** - Orquestacion, migracion, gestion
3. **CI/CD Pipelines** - GitHub Actions, GitLab CI, Jenkins, ArgoCD
4. **Observabilidad** - Prometheus, Grafana, Datadog, ELK
5. **Seguridad & Compliance** - Vault, mejores practicas
6. **Infrastructure as Code** - Terraform, Terragrunt, Pulumi, CloudFormation

## Informacion de Contacto (placeholder)

- **Email**: contacto@globaliport.com
- **Ubicacion**: Buenos Aires, Argentina
- **Modalidad**: 100% Remoto

## Comandos de Desarrollo

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build para produccion
npm run build

# Preview del build
npm run preview
```

## TODO / Pendientes

- [ ] Conectar formulario de contacto a backend (EmailJS, Formspree, o API propia)
- [x] Agregar fotos reales de los fundadores
- [ ] Crear favicon personalizado (reemplazar vite.svg)
- [x] Agregar links reales de LinkedIn de los fundadores
- [ ] Configurar dominio globaliport.com en Vercel
- [x] Deploy (Vercel)
- [ ] Agregar Google Analytics o similar
- [ ] Agregar mas contenido SEO (og:tags, structured data)

## Notas Adicionales

- El formulario de contacto actualmente solo muestra un alert, necesita integracion con servicio de email
- Los avatares de fundadores usan iniciales como placeholder
- El sitio es full responsive con breakpoints sm/md/lg de Tailwind
