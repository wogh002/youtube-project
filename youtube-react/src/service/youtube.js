class Youtube {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    async getMostPopular() {
        const response = await this.httpClient.get('/videos', {
            params: {
                part: 'snippet',
                chart: 'mostPopular',
                maxResults: 3,
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
                maxResults: 3,
                regionCode: 'KR',
                q: query
            }
        })
        return response.data.items.map(item => ({ ...item, id: item.id.videoId }));
    }

    //비동기 : 특정 로직의 실행이 끝날때 까지 기다려주는게 아니라 다른 나머지 코드를 먼저 실행하는것.
    //async 함수는 항상 promise를 반환합니다. 
    //만약 async 함수의 반환값이 명시적으로 promise가 아니라면 암묵적으로 promise로 감싸집니다.
    async getChannelInfo(videos, promiseArr = []) {
        for (let i = 0; i < videos.length; i++) {
            const response = await this.httpClient.get('/channels', {
                params: {
                    part: 'snippet',
                    id: videos[i].snippet.channelId
                }
            })
            promiseArr.push(...response.data.items);
        }
        // 순회 가능한 객체에 주어진 모든 프로미스가 이행한 후,
        return Promise.resolve(promiseArr.map(item => item.snippet.thumbnails.default.url));
        //Promise.all([0,1,2])
    }
}



export default Youtube;