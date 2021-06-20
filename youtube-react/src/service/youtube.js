class Youtube {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    async getMostPopular() {
        const response = await this.httpClient.get('/videos', {
            params: {
                part: 'snippet',
                chart: 'mostPopular',
                maxResults: 5,
                regionCode: 'KR'
            }
        })
        return response.data.items;
    }
    async search(query) {
        const response = await this.httpClient.get('/search', {
            params: {
                part: 'snippet',
                type: 'video',
                maxResults: 6,
                regionCode: 'KR',
                q: query
            }
        })
        return response.data.items.map(item => ({ ...item, id: item.id.videoId }));
    }
    async getChannelInfo(videos, promiseArr = []) {
        for (let i = 0; i < videos.length; i++) {
            const response = await this.httpClient.get('/channels', {
                params: {
                    part: 'snippet,statistics',
                    id: videos[i].snippet.channelId
                }
            })
            promiseArr.push(...response.data.items);
        }
        console.log(promiseArr);
        return Promise.resolve(promiseArr.map(item => item.snippet.thumbnails.default.url));
    }
    // async getChannelInfo(videos, promiseArr = []) {
    //     for (let i = 0; i < videos.length; i++) {
    //         const response = await this.httpClient.get('/channels', {
    //             params: {
    //                 part: 'snippet,statistics',
    //                 id: videos[i].snippet.channelId
    //             }
    //         })
    //         promiseArr.push(...response.data.items);
    //     }
    //     return Promise.resolve(promiseArr.map(item => item.snippet.thumbnails.default.url));
    // }
}



export default Youtube;