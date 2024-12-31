/**
 * ! Factory Function
 * Es un patrón de diseño que nos permite crear objetos o funciones de manera dinámica que serán
 * usados posteriormente en el código.
 *
 * * Es útil cuando necesitamos crear objetos o funciones de manera dinámica,
 * * es decir, en tiempo de ejecución y no en tiempo de compilación.
 *
 */

type Language = 'es' | 'en' | 'fr'

function createGreeter(lang: Language) {
  return (name: string) => {
    const message = {
      es: `Hola ${name}!`,
      en: `Hello ${name}`,
      fr: `Bonjour ${name}`
    }

    return message[lang] ?? 'No existe traduccion'
  }
}


(() => {
  const greeter = createGreeter('es')

  const hello = greeter('Juanme')

  console.log(hello);


})()