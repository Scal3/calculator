const handleExeptions = (exeptionObject) => {
    throw new Error(`${exeptionObject.type}: ${exeptionObject.message}`);
    // call logger
};
export { handleExeptions };
