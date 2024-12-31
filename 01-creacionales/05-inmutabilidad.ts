/**
 * ! Inmutabilidad con copia
 * Aunque la inmutabilidad es una buena práctica, no siempre es posible.
 * En estos casos, se puede hacer una copia del objeto y modificar la copia.
 *
 *  * Es útil para mantener un historial de estados en aplicaciones interactivas.
 *
 */

import { COLORS } from "../helpers/colors.ts";

interface PlayerDto {
  name: string
  score: number
  level: number
}

class CodeEditorState {
  readonly content: string
  readonly cursorPosition: number
  readonly unsaveChanges: boolean

  constructor(
    content: string,
    cursorPosition: number,
    unsavedChanges: boolean
  ) {
    this.content = content
    this.cursorPosition = cursorPosition
    this.unsaveChanges = unsavedChanges
  }

  copyWith({
    content,
    cursorPosition,
    unsaveChanges
  }: Partial<CodeEditorState>): CodeEditorState {
    return new CodeEditorState(content ?? this.content, cursorPosition ?? this.cursorPosition, unsaveChanges ?? this.unsaveChanges)
  }

  displayState() {
    console.log(`Estado del editor%c`, COLORS.green);
    console.log(`
        Contenido: ${this.content}  
        Cursor pos: ${this.cursorPosition}  
        Unsaved changes: ${this.unsaveChanges}  

      `);

  }

}


class CodeEditorHistory {
  private history: CodeEditorState[] = []
  private currentIndex: number = -1

  save(state: CodeEditorState): void {

    if (this.currentIndex < this.history.length - 1) {
      this.history.splice(0, this.currentIndex + 1)
    }

    this.history.push(state)
    this.currentIndex++
  }

  redo(): CodeEditorState | null {
    if (this.currentIndex < this.history.length - 1) {
      this.currentIndex++
      return this.history[this.currentIndex]
    }

    return null
  }

  undo(): CodeEditorState | null {
    if (this.history.length === 0) {
      return null
    }

    this.currentIndex--
    return this.history[this.currentIndex]
  }
}

(() => {

  const history = new CodeEditorHistory()
  let editorState = new CodeEditorState(`console.log('Hola mundo')`, 2, false)

  history.save(editorState)


  console.log('%cEstado inicial:', COLORS.blue);
  editorState.displayState()


  editorState = editorState.copyWith({
    content: "console.log('Hola Mundo') \n console.log('Nueva linea dou')",
    cursorPosition: 3,
    unsaveChanges: true
  })

  console.log('%cSegundo estado:', COLORS.blue);

  history.save(editorState)

  editorState.displayState()

  editorState = editorState.copyWith({
    cursorPosition: 6,
  })

  history.save(editorState)

  console.log('%cTercer estado:', COLORS.blue);
  editorState.displayState()

  console.log('%cCuarto estado, UNDO:', COLORS.blue);
  editorState = history.undo()!
  editorState.displayState()


  console.log('%cQuinto estado, UNDO:', COLORS.blue);
  editorState = history.undo()!
  editorState.displayState()

  console.log('%cSexto estado, REDO:', COLORS.blue);
  editorState = history.redo()!
  editorState.displayState()

  console.log('%cSeptimo estado, REDO:', COLORS.blue);
  editorState = history.redo()!
  editorState.displayState()
  console.log('%cOctavo estado, UNDO:', COLORS.blue);
  editorState = history.undo()!
  editorState.displayState()



})()