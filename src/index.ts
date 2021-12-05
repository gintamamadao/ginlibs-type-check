export function isString(v: any): v is string {
  return typeof v === 'string'
}

export function isFinite(v: any): boolean {
  return Number.isFinite(v)
}

export function isNumber(v: any): v is number {
  return typeof v === 'number' && !Number.isNaN(v) && isFinite(v)
}

export function isNull(v: any): v is null {
  return v === null
}

export function isUndefined(v: any): v is undefined {
  return v === undefined
}

export function isBoolean(v: any): v is boolean {
  return v === true || v === false
}

export function isObject<T = Record<string, any>>(v: any): v is T {
  return isThisType(v, 'Object')
}

export function isEmptyObject<T = Record<string, any>>(v: any): v is T {
  return isThisType(v, 'Object') && Object.keys(v).length <= 0
}

export function isArray<T = any[]>(v: any): v is T {
  return Array.isArray(v)
}

export function isEmptyArray<T = any[]>(v: any): v is T {
  return Array.isArray(v) && v.length <= 0
}

export function isNilVal(v: any, ...args: any[]): v is undefined | null {
  args.push(v)
  return args.every((it) => isUndefined(it) || isNull(it))
}

export function isFunc<T = AnyFunction>(v: any): v is T {
  return typeof v === 'function'
}

export function isPromise<T = Promise<any>>(v: any): v is T {
  return v && isFunc(v.then)
}

export function isDate<T = Promise<any>>(v: any): v is T {
  return isThisType(v, 'Date') && isNumber(v.getTime())
}

export function isThisType(val: any, type: string) {
  const valType = Object.prototype.toString.call(val)
  const trueType = valType.slice(8, valType.length - 1)
  return type === trueType
}
