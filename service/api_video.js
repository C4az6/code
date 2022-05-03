/* video 相关网络请求 */
import http from './index'
export function getTopMv(offset, limit = 10) {
  return http.get('/top/mv', {
    offset,
    limit
  })
}