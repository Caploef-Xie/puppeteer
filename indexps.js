var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://api.observablehq.com/document/df98d75d54bfadc0/stats',
  'headers': {
    'authority': 'api.observablehq.com',
    'accept': '*/*',
    'accept-language': 'zh-CN,zh;q=0.9',
    'cookie': '__Host-GAPS=1:ahfK1ufUOZ3p48fEHiItggWS4Jffmw:D_OqSRU3jmovMywX;NID=511=tihOeNVlp_rgD27nmI11E4mSQHKctG_sOPtqRgsIWJWUWEUIPhOtgRzegmBukyK7BdQTlH_IAEhNSX1XrstfUyy1gneY_kxw8kSIV3c-xLZ5GE9ytTafakij2FAV0eVs3G22LOIV8SR3gvd0U92Fl8tzilDYASVn-hhX3k3UPLI;',
    'origin': 'https://observablehq.com',
    'referer': 'https://observablehq.com/',
    'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.115 Safari/537.36'
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});

