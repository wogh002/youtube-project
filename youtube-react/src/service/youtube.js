class Youtube {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    async getMostPopular() {
        const response = await this.httpClient.get('/videos', {
            params: {
                part: 'snippet',
                chart: 'mostPopular',
                maxResults: 25,
                regionCode: 'KR'
            }
        })
        return response.data.items;
    }
    async search(query) {
        const response = await this.httpClient.get('/search', {
            params: {
                part: 'snippet',
                maxResults: 25,
                regionCode: 'KR',
                q: query
            }
        })
        return response.data.items;
    }
}


export default Youtube;