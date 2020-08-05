export const sort = (unsortedArray: any[], param: string, direction?: string) => {
  if (unsortedArray.length === 0) return unsortedArray
  if(unsortedArray.some( el => !el.hasOwnProperty(param))) return unsortedArray

  const paramtype = isNaN(Number(unsortedArray[0][param])) ? String : Number
  if (direction === 'rev') {
    return [...unsortedArray].sort((a: any, b: any) => paramtype(a[param]) > paramtype(b[param]) ? -1 : 1)
  } else {
    return [...unsortedArray].sort((a: any, b: any) => paramtype(a[param]) > paramtype(b[param]) ? 1 : -1)
  }
}

