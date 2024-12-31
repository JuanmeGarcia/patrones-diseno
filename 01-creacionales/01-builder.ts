/**
 * ! Patrón Builder:
 * Es un patrón de diseño creacional que nos permite construir objetos complejos
 * paso a paso.
 *
 * El patrón nos permite producir distintos tipos y representaciones
 * de un objeto empleando el mismo código de construcción.
 *
 * * Es útil cuando necesitamos construir un objeto complejo con muchas partes
 * * y queremos que el proceso de construcción sea independiente de las partes
 * * que lo componen.
 *
 * https://refactoring.guru/es/design-patterns/builder
 */

import { COLORS } from "../helpers/colors.ts";


class Computer {
  public cpu: string = 'CPU - not defined'
  public ram: string = 'RAM - not defined'
  public storage: string = 'storage - not defined'
  public gpu?: string

  displayConfiguration() {
    console.log(`Configuracion de la computadora
        CPU: ${this.cpu}
        RAM: ${this.ram}
        Almacenamiento: ${this.storage}
        GPU: ${this.gpu ?? 'No tiene GPU'}
      `)
  }
}

class ComputerBuilder {
  private computer: Computer

  constructor() {
    this.computer = new Computer()
  }

  setCpu(cpu: string): ComputerBuilder {
    this.computer.cpu = cpu

    return this
  }

  setRam(ram: string): ComputerBuilder {
    this.computer.ram = ram

    return this
  }

  setStorage(storage: string): ComputerBuilder {
    this.computer.storage = storage

    return this
  }

  setGpu(gpu: string): ComputerBuilder {
    this.computer.gpu = gpu
    return this
  }

  build() {
    return this.computer
  }
}


function main() {
  const basicComputer: Computer = new ComputerBuilder()
    .setCpu('Ryzen 3 3300')
    .setRam('8 GB')
    .setStorage('256 GB')
    .build()

  const gamerComputer: Computer = new ComputerBuilder()
    .setCpu('Ryzen 7 7700')
    .setRam('64 GB')
    .setStorage('4 TB')
    .setGpu('Nvidia GeForce 4080TI RTX')
    .build()

  console.log('%cComputador basica:', COLORS.blue);
  basicComputer.displayConfiguration()

  console.log('%cComputador gamer:', COLORS.red);
  gamerComputer.displayConfiguration()

}


main()