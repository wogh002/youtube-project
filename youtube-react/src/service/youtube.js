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
    async getChannelInfo(channelId) {
        const id = channelId.map(item => item).toString();
        console.log(id);
        const response = await this.httpClient.get('/channels', {
            params: {
                part: 'snippet',
                id
            },
        })
        return response.data.items.map(item => item.snippet.thumbnails.default.url);

    }
}


export default Youtube;