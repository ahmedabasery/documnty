//containsAny check if any member of an array is in another array
//inputs :
//source , target : the compared arrays
//output : boolean (the result)
export const containsAny = (source, target) => {
  if (!(source && target)) return false;
  const result = source.filter(function (item) {
    return target.indexOf(item) > -1;
  });
  return result.length > 0;
};
