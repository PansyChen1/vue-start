// 远程获取新闻和新闻类别的数据
import axois from 'axios';
import {APPCODE} from './config'
// 获取所有的新闻类别

export async function getNewsChannels() {
    var res = await axois.get("http://ali-news.showapi.com/newsList", {
        headers: {
            Authorization: `APPCODE ${APPCODE}`
        }
    })
    console.log("getNewsChannel----", res.data.showapi_res_body.pagebean.contentlist)
    return res.data.showapi_res_body.pagebean.contentlist
}

// 根据频道，分页获取新闻

/**
 * @param channelId 频道id
 * @param page 页面，从1开始
 * @param limit 限制每页多少条数据
 * @export
 * @returns
 */
export async function getNews(channelId, page=1, limit=10) {
    var res = await axois.get("http://ali-news.showapi.com/newsList", {
        headers: {
            Authorization: `APPCODE ${APPCODE}`
        },
        params: {
            channelId,
            page,
            maxResult: limit,
            needContent: true
        }
    });
    console.log("getNews--------", res.data.showapi_res_body.pagebean.contentlist)
    return res.data.showapi_res_body.pagebean.contentlist
}