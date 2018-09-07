const convertToHttps = (url) => {


    const HTTPS = "https"
    const HTTP = "http:"
    const prefix = url.slice(0,5)
    const indexOfLastChar = url.length
    
    if(prefix===HTTPS){
        return url
    }

    if(prefix === HTTP){
        return HTTPS + ":" + url.slice(5,indexOfLastChar)
    }

    return url
    
}

export default convertToHttps