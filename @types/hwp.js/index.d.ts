declare module 'hwp.js' {
  declare class HWPViewer {
    constructor(
      container: HTMLElement,
      data: Uint8Array,
      option: CFB$ParsingOptions = { type: 'binary' }
    )
  }
  export default HWPViewer
}
