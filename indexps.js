var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://api.observablehq.com/document/df98d75d54bfadc0/stats',
  'headers': {
    'authority': 'api.observablehq.com',
    'accept': '*/*',
    'accept-language': 'zh-CN,zh;q=0.9',
    'cookie': 'I=eyJpZCI6IjgyN2Y2OWEwZDM4MDc0ZDYiLCJpZHMiOlt7ImlkIjoiYjYzOGIwNTVkYWI3ZDYwNiIsIm9yZyI6InN0YXJib2FyZHZlbnR1cmVzLmlvIiwic28iOjE2NTU4OTE3NTM0MzAsImF0IjoxNjU1ODkxNzUzNDMwfV0sImV4cGlyYXRpb24iOjE2NTY3NDE2MDAwMDB9.sWTuEI8tgF6IRx1ZmtQVP4HFO51f1FIJU9oixwxUzNE=;_ga=GA1.2.509244172.1655891742;D=421ebc39-5537-4455-b8cf-2342a8fabd84|1687427741764;_gid=GA1.2.764762393.1655891742;T=c8b337bcdf9b57e4140613c69563f05e;_gat=1;',
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

