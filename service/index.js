function Service() {
    this.getListProductAPI = function() {
        return promise = axios({
            url: "https://628b995c7886bbbb37bbca5a.mockapi.io/api/User",
            method: "GET",
        })
    }
}