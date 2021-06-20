class Youtube {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    async getMostPopular() {
        const response = await this.httpClient.get('/videos', {
            params: {
                part: 'snippet,statistics',
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
    async getChannelInfo(videos, thumbnailURLs = [], viewCounts = []) {
        for (let i = 0; i < videos.length; i++) {
            const { data: { items: [channelInfo] } } = await this.httpClient.get('/channels', {
                params: {
                    part: 'snippet,statistics',
                    id: videos[i].snippet.channelId
                }
            })
            const { snippet: { thumbnails: { default: { url } } }, statistics: { viewCount } } = channelInfo;
            thumbnailURLs.push(url);
            viewCounts.push(viewCount);
        }
        return Promise.resolve(videos.map(item => {
            return ({
                ...item,
                viewCount: viewCounts.shift(),
                thumbnailURL: thumbnailURLs.shift()
            })
        }));
    }
}



export default Youtube;