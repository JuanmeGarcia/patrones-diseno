import { COLORS } from '../helpers/colors.ts';
/**
 * ! Abstract Factory:
 * Es un patrón de diseño que permite crear familias de objetos relacionados
 * sin especificar sus clases concretas.
 *
 * En lugar de crear objetos individuales directamente,
 * creamos fábricas que producen un conjunto de objetos relacionados.
 *
 * * Es útil cuando necesitas crear objetos que son parte de una familia
 * * y quieres asegurarte de que estos objetos se complementen entre sí.
 *
 * https://refactoring.guru/es/design-patterns/abstract-factory
 */

/**
 *  El propósito del Abstract Factory es crear familias de objetos relacionados
 *  (en este caso, hamburguesas y bebidas) sin especificar las clases concretas
 *  de cada uno de esos objetos en el código principal.
 */



interface Hamburguer {
  prepare(): void
}

interface Drink {
  pour(): void
}

class ChickenHamburguer implements Hamburguer {
  prepare(): void {
    console.log('Preparando hamburguesa de %cpollo', COLORS.yellow);

  }
}

class BeefHamburguer implements Hamburguer {
  prepare(): void {
    console.log('Preparando hamburguesa de %ccarne', COLORS.red);

  }
}

class Water implements Drink {
  pour(): void {
    console.log('Sirviendo un vaso de %cagua', COLORS.blue);

  }
}

class SoftDrink implements Drink {
  pour(): void {
    console.log('Sirviendo un vaso de %cagua', COLORS.black);
  }
}


interface RestaurantFactory {
  createHamburguer(): Hamburguer
  createDrink(): Drink
}

class FastFoodRestaurantFactory implements RestaurantFactory {
  createDrink(): Drink {
    return new SoftDrink()
  }

  createHamburguer(): Hamburguer {
    return new BeefHamburguer()
  }
}

class HealthyRestaurantFactory implements RestaurantFactory {
  createDrink(): Drink {
    return new Water()
  }

  createHamburguer(): Hamburguer {
    return new ChickenHamburguer()
  }
}


function main(factory: RestaurantFactory) {
  const hamburguer = factory.createHamburguer()
  const drink = factory.createDrink()

  hamburguer.prepare()
  drink.pour()
}

console.log('%cPedido del menu regular:', COLORS.cyan);
main(new HealthyRestaurantFactory())

console.log('%cPedido del menu regular:', COLORS.cyan);
main(new FastFoodRestaurantFactory())

console.log('%cPedido del menu regular:', COLORS.cyan);
main(new HealthyRestaurantFactory())
