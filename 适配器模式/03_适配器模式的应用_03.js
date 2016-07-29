var getGuangdongCity = function(){
  var guangdongCity = [{
    name: "shenzhen",
    id: 11,
  },{
    name: "guangzhou",
    id: 12
  }];
  return guangdongCity;
};

var render = function(fn){
  console.log("开始渲染广东省地图");
  document.write(JSON.stringify(fn()));
}

render(getGuangdongCity);
