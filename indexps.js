var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://api.observablehq.com/document/df98d75d54bfadc0/stats',
  'headers': {
    'authority': 'api.observablehq.com',
    'accept': '*/*',
    'accept-language': 'zh-CN,zh;q=0.9',
    'cookie': 'D=c9d8a325-6f36-479d-a9b5-760deff6d2e9|1686023908200; _ga=GA1.2.607578784.1654487911; _gid=GA1.2.148281293.1655082761; T=6d413879eefe086a92ca8e03f06a7e51; S=l44zGmkI/mveTjvnaiTIHgFxVEnRJnMLRUT8p15EeSBlrpx8J9C0AoPLG7pQ4G0b; _gat=1; I=eyJpZCI6IjgyN2Y2OWEwZDM4MDc0ZDYiLCJpZHMiOlt7ImlkIjoiYjYzOGIwNTVkYWI3ZDYwNiIsIm9yZyI6InN0YXJib2FyZHZlbnR1cmVzLmlvIiwic28iOjE2NTUxMjYwNjQ2NjksImF0IjoxNjU1MTI4ODAwMDAwfV0sImV4cGlyYXRpb24iOjE2NTU5ODU2MDAwMDB9.CQV0LjmE9XBeCnt0y1CA4e6bHfkfrRCIrJd8pDr2ROk=; S=shT9KACyGZb+ImKr7KnMqal0LuaeiL5K35NVO0pzc2mojvDtPGQzAoHM+oKPNQdz',
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

