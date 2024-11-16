import { $post, $get } from "@/utils/request.utils.js";
const API = {
  test: import.meta.env.VITE_API_URL + "/getInfo"
};
export function getInfo(data = {}) {
  return $post(API.test, data);
}

// 获取 热门 的列表
export const getHotAppList = (params = { limit: 10 }) => {
  return $get(`/hk/rss/topgrossingapplications/limit=${params.limit}/json`);
};
//  获取 简单列表
export const getFreeAppList = (params = { limit: 10 }) => {
  return $get(`/hk/rss/topfreeapplications/limit=${params.limit}/json`);
};
// https://itunes.apple.com/hk/lookup?id=${id}
export const getFreeListInfo = () => {
  return $get(`/hk/lookup`);
};
