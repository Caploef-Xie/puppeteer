var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://api.observablehq.com/document/df98d75d54bfadc0/stats',
  'headers': {
    'authority': 'api.observablehq.com',
    'accept': '*/*',
    'accept-language': 'zh-CN,zh;q=0.9',
    'cookie': 'I=eyJpZCI6IjgyN2Y2OWEwZDM4MDc0ZDYiLCJpZHMiOlt7ImlkIjoiYjYzOGIwNTVkYWI3ZDYwNiIsIm9yZyI6InN0YXJib2FyZHZlbnR1cmVzLmlvIiwic28iOjE2NTU5NTEzMjQ2OTEsImF0IjoxNjU1OTUxMzI0NjkxfV0sImV4cGlyYXRpb24iOjE2NTY4MDY0MDAwMDB9.8bsXsgjSeBaPI6G9IBC0Ww+ix+WgbLpR38BcNlHtpk0=;_ga=GA1.2.1799520404.1655951312;D=b5833b57-2f19-4e99-9a69-961e1e86e8f2|1687487316536;_gid=GA1.2.128479609.1655951312;T=ee3f7c3768e4698f78bc3741aa7d83e5;_gat=1;',
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

