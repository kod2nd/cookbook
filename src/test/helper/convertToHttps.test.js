import convertToHttps from '../../utils/convertToHttps'

const urlHTTPS = "https://testing.com"
const urlHTTP = "http://testing.com"
const urlNoHttp = "testing.com"

test('if it begins with https, return itself', () => {
    expect(convertToHttps(urlHTTPS)).toBe(urlHTTPS)
});

test('if it begins with http, return itself with https prefix', () => {
    expect(convertToHttps(urlHTTP)).toBe(urlHTTPS)
});

test('if it does not begin with http or https, return itself', () => {
    expect(convertToHttps(urlNoHttp)).toBe(urlNoHttp)
});