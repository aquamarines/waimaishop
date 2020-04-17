// 包含多个请求接口函数,函数返回值为promise对象
import ajax from "./ajax"
// 经纬度位置
export const reqAddress=(geohash)=>ajax(`/position/${geohash  }`)
// 食物分类
export const reqFoodTypes=()=>ajax(`/indexx_category`)
// 感觉经纬度获取商铺列表
export const reqShops=(longitude,latitude)=>ajax(`/shops`,{longitude,latitude})