## Comienzo
- Decido no ir haciendo commits por cada paso, sino que haré uno final. Esto no es recomendable en un proyecto
  real, pero me da mucha versatilidad en un proyecto de prueba como este para poder ir viendo rápidamente qué cosas he modificado
  con respecto al proyecto original
- Utilizo `npm-check-update` para ver qué dependencias están desactualizadas y actualizarlas.
- En este caso, empiezo por `Nuxt`, que ponemos en la versión 3.6.5

## Actualización a Nuxt 3
- Decido no utilizar Bridge para asegurarme una migración completa y que no dependo de nada antiguo
- Utilizo la guía de Nuxt para migrar de la versión 2 a la 3 (https://nuxt.com/docs/migration/overview)
- Primero cambio en `nuxt.config.js` el tipo de export con el nuevo `defineNuxtConfi`
- Luego cambio todos los `require()` que hubiera en el proyecto por `imports` de ES6
- También todos los `module.exports` que puedo por `export default`, para cambiar el proyecto y usar ESM
- Nuxt 3 ya tiene soporte nativo para los .env, así que los quitamos del archivo `nuxt.config.js` como tal y lo añadimos al runtimeConfig
- Cambio los `buildModules` por `modules` porque en Nuxt 3 ahora son lo mismo
- Cambio el comando `dev` en package.json para que use `nuxt dev` en vez de solamente `nuxt`
- Cambio la carpeta `static` por `assets`, y modifico en todos los archivos las referencias. Prefiero renombrarla en lugar de indicar en la configuración el cambio de nombre para que el proyecto se asemeje más a uno nativo de Nuxt 3
- Creo el archivo `tsconfig.json` para usar Typescript porque Nuxt 3 tiene un muy buen soporte para él
- Al intentar ejecutar el comando `nuxi prepare` para configurar Typescript, ya saltan errores sobre no encontrar `webpack`... así que toca eliminar las referencias a él desde cualquier lado
- Creo un archivo `app.vue` que será el punto de entrada de la aplicación y elimino el antiguo `app.html`

## Migración de Store
- Modifico el store actual de `Vuex` por `Pinia`, ya que Nuxt 3 ya no soporta Vuex y además Pinia es el recomendado por el equipo de Vue
- Para ello instalo `@pinia/nuxt` y `pinia` y modifico el archivo `nuxt.config.js` para que use el módulo de Pinia
- Luego migro todos los archivos de Vuex a Pinia, creando los archivos `store/index.ts` y `store/auth.ts`
- Además, también paso el store dinámico de `store-lazy/projects` a uno normal, ya que Pinia lo gestiona mucho mejor
- Modifico la `action` `nuxtServerInit` para que ahora sea un plugin `plugins/server-init.server.ts` porque Nuxt 3 ya no soporta `nuxtServerInit` y en su lugar se recomienda un plugin

## Simplificación de dependencias
- Ahora que Nuxt 3 usa Vite, podemos borrar todas las referencias relativas a babel, webpack, y otras herramientas que ya no necesitamos+
- Quitamos `axios` en favor de `useFetch`, el composable integrado en Nuxt 3 para hacer peticiones
- Quitamos `@nuxtjs/composition-api` porque ya por defecto Nuxt 3 usa Composition API
- Modificamos `@nuxtjs/pwa` por `@vite-pwa/nuxt` porque no tenía soporte para Nuxt 3
- Ya no necesitamos `@nuxtjs/style-resources` porque Nuxt 3 tiene soporte por defecto con la propiedad `css` en `nuxt.config.js`
- Nuxt 3 auto-sanea el HTML, así que ya no necesitamos nada relativo a `isomorphic-dompurify`
- Core-js hace tiempo que está obsoleto y, por tanto, lo eliminamos, ya que sus funcionalidades nos las da Nuxt 3
- Pasamos de `element-ui` a `element-plus` que es la versión oficial para Nuxt 3 de la librería de componentes
- También hace tiempo que `lodash` está obsoleto, y además no se está usando dentro del proyecto, así que podemos eliminarlo con seguridad
- Aunque `moment` también está obsoleto, lo dejamos por ahora porque se usa en el proyecto y funciona bien, pero debería existir el compromiso de migrarlo en un futuro cercano

## Meta tags
- Modifico los meta tags de todos los componentes para utilizar el nuevo composable `useHead` de Nuxt 3
- Además, aprovecho para utilizar el nuevo composable `defineOptions` de Vue 3.3 para definir atributos de los componentes como el nombre

## Plugins, Middleware y otros monstruos
- Me deshago de la carpeta `core` para abrazar un sistema de carpetas más estándar con `plugins`, `middleware`, `composables`, etc
- Muevo los plugins de `core` a `plugins` y los middleware de `core` a `middleware`
- Paso la configuración de `windi` al archivo de configuración de `tailwind` directamente para mayor simplicidad
- Como solo hay un `layout`, lo muevo al `app.vue` tal y como recomiendan desde Vue 3
- Muevo los filtros de `core` a `utils/filters` a un solo `composable` en `composables/useFilters.ts` ya que con Vue 3 se elimina el soporte para filtros

## Nuxt Router
- Llamo Nuxt Router al enrutamiento por archivos que hace Nuxt
- Modifico todos los `<Nuxt />` por un `<slot />` o por un `<NuxtPage />` según corresponda
- Modifico todos los `<NuxtChild />` por un `<NuxtPage />`

## Tests unitarios
- Aunque en las instrucciones de la prueba se hacía mucho hincapié en los tests unitarios, no he encontrado que este proyecto los tenga
- Igualmente, he decidido añadir un par de ellos para demostrar que se pueden hacer con Nuxt 3 y Vue 3 usando Vue Test Utils
  y Vitest (sucesor espiritual de Jest y muy similar en sintaxis, aunque mucho más rápido en eficiencia)
- Añadimos `@nuxt/test-utils`, `@vue/test-utils`, `vitest`, `jsdom`, `eslint-plugin-vitest` y `@vitejs/plugin-vue` como dependencias de desarrollo
- Añadimos el archivo `vitest.config.ts` para la configuración de los tests
- Añadimos `vitest` como plugin a ESLint
- Añadimos el comando `test` a `package.json` para ejecutar los tests

## Otros
- Elimino todo lo relativo a `jsconfig.json` porque utilizaremos `tsconfig.json` en su lugar
- Como el uso que hay del servidor es muy pequeño y realmente en un proyecto real su uso es mínimo, he decidido no tocarlo
  por la complejidad de migrar el axios en servidor, y porque creo que no es el objetivo de esta prueba.
- He migrado todos los componentes a la Composition API utilizando `script setup` y dejando por defecto Typescript,
  aunque veréis muchos `any` porque considero que el objetivo de la prueba no es tampoco hacer una migración completa a Typescript
- No me gusta usar CSS/SCSS con módulos, creo que ensucian mucho el html y que hacen más complejo trabajar con ello,
  siempre prefiero utilizar `Scoped CSS` en los componentes de Vue en este sentido, pero no lo he modificado por respetar
  el código original de la prueba
- Soy más de JSON que de YAML, y más de NPM/PNPM que de Yarn, pero no he querido modificarlo por respetar el código original
