# t3_act5_react

Este es un proyecto de práctica en React donde hice varios componentes chiquitos para practicar lo básico: componentes funcionales, props, useState y renderizar listas con `.map()`.

## ¿Qué tiene el proyecto?

- Un componente simple que solo muestra un texto (`Saludo`).
- Un componente que recibe props y las muestra (`Persona`).
- Un contador hecho con `useState` que suma y reinicia.
- Un botón que muestra/oculta un texto.
- Una lista de notas que se renderiza dinámicamente con `.map()` (`TodoApp`).

## Cómo correrlo

```bash
npm install
npm run dev
```

El proyecto también está publicado en GitHub Pages:
https://badiolajh.github.io/t3_act5_react/

---

## Preguntas

**a) ¿Qué diferencia hay entre props y state en React?**

los pops son datos que llegan de afuera y solo son de lectura, los state son datos que maneja el componente mismo y puede cambiar (por ejemplo con un click.)


**b) ¿Por qué es importante usar una key al renderizar una lista de elementos?**

Para identificar cada elemento de la lista. Si no se pone key, react se puede confundir al actualizar la lista y renderizar mal o de forma más lenta.

**c) Explica con tus propias palabras qué hace la función useState y da un ejemplo de dónde la usaste en tu mini aplicación.**

useState sirve para "recordar" un valor y que cuando ese valor cambie, el componente se vuelva a dibujar en pantalla.
