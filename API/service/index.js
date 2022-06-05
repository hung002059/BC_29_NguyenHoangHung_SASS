function Service() {
    this.getListProductAPI = function() {
        return promise = axios({
            url: `https://628b995c7886bbbb37bbca5a.mockapi.io/api/User`,
            method: "GET",
        })
    }
    this.deleteProductAPI = function(id) {
        return promise = axios({
            url: `https://628b995c7886bbbb37bbca5a.mockapi.io/api/User/${id}`,
            method: "DELETE",
        })
    }
    this.addProductAPI = function(product) {
        return promise = axios({
            url: `https://628b995c7886bbbb37bbca5a.mockapi.io/api/User`,
            method: "POST",
            data: product,
        })
    }
    this.getProductById = function(id) {
        return promise = axios({
            url: `https://628b995c7886bbbb37bbca5a.mockapi.io/api/User/${id}`,
            method: "GET",
        })
    }
    this.updateProductAPI = function(product) {
        return promise = axios({
            url: `https://628b995c7886bbbb37bbca5a.mockapi.io/api/User/${product.id}`,
            method: "PUT",
            data: product,
        })
    }
}