shapely.geom = function( coords, type ){

  var type = type;
  var coords = coords; 

  var geom = {
    area: area,
    length: length
  }

  function area(){
    return 0.0;
  }

  function length(){
    return 0.0;
  }

  return geom;
};
