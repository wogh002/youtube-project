class Youtube {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    async getMostPopular() {
        const response = await this.httpClient.get('/videos', {
            params: {
                part: 'snippet',
                chart: 'mostPopular',
                maxResults: 10,
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
                maxResults: 10,
                regionCode: 'KR',
                q: query
            }
        })
        return response.data.items.map(item => ({ ...item, id: item.id.videoId }));
    }
    async getChannelInfo(videos, thumbnailURLs = []) {
        for (let i = 0; i < videos.length; i++) {
            const { data: { items: [channelInfo] } } = await this.httpClient.get('/channels', {
                params: {
                    part: 'snippet',
                    id: videos[i].snippet.channelId
                }
            })
            const { snippet: { thumbnails: { default: { url } } } } = channelInfo;
            thumbnailURLs.push(url);
        }
        return Promise.resolve(videos.map(item => {
            return ({
                ...item,
                thumbnailURL: thumbnailURLs.shift()
            })
        }));
    }
}
export default Youtube;