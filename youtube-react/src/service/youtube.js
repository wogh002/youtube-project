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


    async getChannelInfo(videos, array = []) {
        for (let i = 0; i < videos.length; i++) {
            const response = await this.httpClient.get('/channels', {
                params: {
                    part: 'snippet',
                    id: videos[i].snippet.channelId
                }
            })
            array.push(response);
            console.log(array);
        }
    }
}



export default Youtube;