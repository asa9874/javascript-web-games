export function isChoiceScript(script) {
    if (script && typeof script === 'object') {
      return script.hasOwnProperty(1);
    }
    return false;
}
