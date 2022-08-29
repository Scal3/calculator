
interface ExeptionObject {
  type: string,
  message: string
}

const handleExeptions = (exeptionObject: ExeptionObject) => {
  throw new Error(`${exeptionObject.type}: ${exeptionObject.message}`);

  // call logger
}




export {
  handleExeptions
}