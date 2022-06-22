const puppeteer = require('puppeteer-extra');
puppeteer.use(require('puppeteer-extra-plugin-anonymize-ua')({
    customFn: (ua) => 'MyCoolAgent/' + ua.replace('Chrome', 'Beer')
})
)
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
var format = require('date-fns')
puppeteer.use(StealthPlugin());
//
puppeteer.launch({ headless: true, args: ['--no-sandbox'] }).then(async browser => {
    const page = await browser.newPage();
    let data = [];

    await page.setExtraHTTPHeaders({ 
        'accept-language': 'en-US,en;q=0.9,hy;q=0.8'
    });

    // login in
    await login('jinmiao@starboardventures.io', 'xjmhandsome520', page);

    // // get notebook list
    // let list = await getNotebookList(page);
    // for (let i = 0; i < list.length; i++) {
    //     //search notebook
    //     await loopNotebook(list[i], page, data)
    //     await console.log(list[i])
    // }
    // tableToExcel(data, page)

    // await browser.close();
})

///login
//observable account
//observable password
//page
async function login(account, password, page) {

    await page.goto('https://observablehq.com');
    await page.click('button.dark-gray.pointer.animate-all.hover-bg-black-05.flex.mr2.pa2.f6.fw6.br2.ba.items-center.bg-transparent.b--transparent.relative');
    await page.click('button[value="google"]');

    await page.waitForSelector('input[type="email"]')
    await page.type('input[type="email"]', account);
    await Promise.all([
        page.waitForNavigation(),
        await page.keyboard.press('Enter')
    ]);
    await page.waitForSelector('input[type="password"]', { visible: true });
    await page.type('input[type="password"]', password);
    await page.waitFor(3500);
 
    await Promise.all([
        page.waitForNavigation(),
        await page.keyboard.press('Enter')
    ]);
    await page.waitForSelector('#__NEXT_DATA__');
    let cookies = await page.cookies();
    let strCookie = cookies.map((x) => { return x.name + "=" + x.value + ";" }).join('');
    console.log(strCookie)
    console.log(await page.$eval('#__NEXT_DATA__', e => document.querySelector('#__NEXT_DATA__').innerText))
    // console.log(await page.$eval('input[type="password"]', e => document.querySelector('input[type="password"]').value))
    await console.log("Password entered successfully ")
}

async function getNotebookList(page) {
    await page.goto('https://observablehq.com/' + '@starboard/web-crawler-config');
    await page.waitFor(3500);
    let result = await page.$eval('#__NEXT_DATA__', e => eval(JSON.parse(document.querySelector('#__NEXT_DATA__').innerText).props.pageProps.initialNotebook.nodes[2].value));
    return result;
}

async function loopNotebook(address, page, data) {
    try {
        await page.goto('https://observablehq.com/' + address);
        await page.waitForSelector('[title="Open insights pane"]')
        await page.waitFor(1500);
        await page.click('[title="Open insights pane"]')
        await page.waitFor(3500);
        data.push(...(await page.evaluate(() => {
            let mess = JSON.parse(document.querySelector('#__NEXT_DATA__').innerText).props.pageProps.initialNotebook;
            let data = [];

            let itemList = document.querySelectorAll('.totalViews')[0].parentNode.querySelectorAll('svg rect title');

            let total = document.querySelector('.totalViews .fw5').innerText.replace(/\,/g, '');
            for (let item of itemList) {
                let value = item.innerHTML.split('\n');
                data.push({ ob_id: mess.id, title: mess.title.replace(/\,/g, ''), stat_date: value[0].replace(/\,/g, ''), increment: value[1].replace(/\,/g, ''), total: total })
            }
            return Promise.resolve(data)
        })))
    }
    catch {
    }
}

async function tableToExcel(data, page) {
    await page.evaluate(jsonData => {
        //列标题，逗号隔开，每一个逗号就是隔开一个单元格
        let str = `ob_id,title,stat_date,increment,total\n`;
        //增加\t为了不让表格显示科学计数法或者其他格式
        for (let i = 0; i < jsonData.length; i++) {
            for (let item in jsonData[i]) {
                str += `${jsonData[i][item] + '\t'},`;
            }
            str += '\n';
        }
        //encodeURIComponent解决中文乱码
        let uri = 'data:text/csv;charset=utf-8,\ufeff' + encodeURIComponent(str);
        //通过创建a标签实现
        let link = document.createElement("a");
        link.href = uri;
        //对下载的文件命名
        link.download = "json数据表.csv";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }, data)
}
