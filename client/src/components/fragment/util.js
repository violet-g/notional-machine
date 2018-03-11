import isFunction from 'lodash/isFunction'

/**
 * Given a boolean value or a function which returns a boolean value,
 * this function will return a boolean value:
 * - equal to the value of the first argument if its a boolean
 * - equal to the return value of the first argument if it's a function; the first
 *   argument is called in that case with any extra arguments provided to the
 *   original function
 * @param  {<Function|Boolean>} fnOrBool  A boolean of a function which returns a boolean.
 * @param  {Any}                [...args] Optional arguments passed to the first argument
 *                                        if it's a function.
 * @return {Boolean}
 */
export function getBoolValue (fnOrBool, ...args) {
  if (fnOrBool === true || fnOrBool === false) {
    return fnOrBool
  }
  return fnOrBool(...args)
}

/**
 * Given a node (anything that can be rendered) value or a function which returns
 * a node value, this function will return a node value:
 * - equal to the value of the first argument if its a node
 * - equal to the return value of the first argument if it's a function; the first
 *   argument is called in that case with any extra arguments provided to the
 *   original function
 * @param  {<Function|Any>} fnOrNode
 * @param  {Any}            [...args] Optional arguments passed to the first argument
 *                                    if it's a function.
 * @return {Any}
 */
export function getNodeValue (fnOrNode, ...args) {
  if (isFunction(fnOrNode)) {
    return fnOrNode(...args)
  }
  return fnOrNode
}
