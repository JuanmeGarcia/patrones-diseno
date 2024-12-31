import { COLORS } from '../helpers/colors.ts';
/**
 * ! Factory Method:
 * El patrón Factory Method permite crear objetos sin especificar
 * la clase exacta del objeto que se creará.
 *
 * En lugar de eso, delegamos la creación de objetos a subclases o métodos
 * que encapsulan esta lógica.
 *
 * * Es útil cuando una clase no puede anticipar la clase
 * * de objetos que debe crear.
 *
 * https://refactoring.guru/es/design-patterns/factory-method
 *
 */


interface Hamburguer {
  prepare(): void
}

class ChickenHamburguer implements Hamburguer {

  prepare(): void {
    console.log('Preparando una hamburguesa de %cpollo', COLORS.yellow);
  }
}

class BeefHamburguer implements Hamburguer {

  prepare(): void {
    console.log('Preparando una hamburguesa de %ccarne', COLORS.red);
  }
}

class PeaHamburguer implements Hamburguer {

  prepare(): void {
    console.log('Preparando una hamburguesa de %cgarbanzos', COLORS.green);
  }
}


abstract class Restaurant {
  protected abstract createHamburguer(): Hamburguer

  orderHamburguer(): void {
    const hamburguer = this.createHamburguer()
    hamburguer.prepare()
  }
}

class ChickenRestaurant extends Restaurant {

  override createHamburguer(): Hamburguer {
    const chickenHamburguer = new ChickenHamburguer()

    return chickenHamburguer
  }

}

class BeefRestaurant extends Restaurant {

  override createHamburguer(): Hamburguer {
    const beefHamburguer = new BeefHamburguer()

    return beefHamburguer
  }
}

class PeaRestaurant extends Restaurant {

  override createHamburguer(): Hamburguer {
    const peaHamburguer = new PeaHamburguer()

    return peaHamburguer
  }
}

// (() => {
//   const chickenRestaurant = new ChickenRestaurant()
//   const beefRestaurants = new BeefRestaurant()

//   const chickenHamburguer = chickenRestaurant.createHamburguer()
//   const beefHamburguer = beefRestaurants.orderHamburguer()

//   chickenHamburguer.prepare()


// })()

(() => {
  let restaurant: Restaurant

  const burguerType = prompt('Que tipo de hamburguesa quieres? (pollo/carne/garbanzos)')

  switch (burguerType) {
    case 'pollo':
      restaurant = new ChickenRestaurant()
      break;
    case 'carne':
      restaurant = new BeefRestaurant()
      break;
    case 'garbanzos':
      restaurant = new PeaRestaurant()
      break;
    default:
      throw new Error('Te confundiste? Intentanlo de nuevo');
  }

  restaurant.orderHamburguer()



})()