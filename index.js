function updateObjectWithKeyAndValue(object, key, value){
  var newObj = Obj.assign({}, object)
  newObj[key] = value
  return newObj
}
