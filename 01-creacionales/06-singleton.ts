/**
 * ! Singleton:
 * Es un patrón de diseño creacional que garantiza que una clase
 * tenga una única instancia y proporciona un punto de acceso global a ella.
 *
 * * Es útil cuando necesitas controlar el acceso a una única instancia
 * * de una clase, como por ejemplo, en un objeto de base de datos o en un
 * * objeto de configuración.
 *
 * https://refactoring.guru/es/design-patterns/singleton
 */

import { COLORS } from "../helpers/colors.ts";


class DragonBalls {

  static instance: DragonBalls

  private ballsCollected: number

  private constructor() {
    this.ballsCollected = 0
  }

  public static getInstance(): DragonBalls {
    if (!DragonBalls.instance) {
      DragonBalls.instance = new DragonBalls()
      console.log('%cLas esferas del dragon han sido creadas', COLORS.orange);
      return DragonBalls.instance
    }

    return DragonBalls.instance
  }

  collectBall(): number {
    if (this.ballsCollected === 7) {
      console.log('Ya se han recolectado todas las esferas!');
      return this.ballsCollected
    }


    this.ballsCollected++
    console.log("Esfera recolectadas: ", this.ballsCollected);
    return this.ballsCollected
  }

  summonShenlong() {
    if (this.ballsCollected !== 7) {
      console.log("Todavia te faltan reunir mas esferas! ", 7 - this.ballsCollected);
      return
    }

    this.ballsCollected = 0
    console.log("Has invocado a Shenlong!");
  }
}

(() => {
  const dragonBalls = DragonBalls.getInstance()

  dragonBalls.collectBall()
  dragonBalls.collectBall()
  dragonBalls.collectBall()
  dragonBalls.collectBall()
  dragonBalls.collectBall()
  dragonBalls.collectBall()
  dragonBalls.collectBall()
  dragonBalls.collectBall()
  dragonBalls.collectBall()
  dragonBalls.collectBall()
  dragonBalls.summonShenlong()
  dragonBalls.collectBall()
  dragonBalls.collectBall()
  dragonBalls.summonShenlong()

})()