const puppeteer = require('puppeteer-extra');
puppeteer.use(require('puppeteer-extra-plugin-anonymize-ua')({
    customFn: (ua) => 'MyCoolAgent/' + ua.replace('Chrome', 'Beer')
})
)
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
var format = require('date-fns')
puppeteer.use(StealthPlugin());
//
puppeteer.launch({ headless: false, args: ['--no-sandbox'] }).then(async browser => {
  // const page = await browser.newPage();
  // await page.goto('https://www.google.com');
  // await page.screenshot({path: 'screenshot.png'});
  const google = await browser.newPage();

  // await google.setUserAgent(ua);
  await google.goto('https://accounts.google.com/', { waitUntil: 'networkidle2' });

  await google.type('#identifierId', 'jinmiao@starboardventures.io');
  await Promise.all([
    google.waitForNavigation(),
    await google.keyboard.press('Enter')
  ]);
  // await google.waitForNavigation({
  //   waitUntil: 'load'
  // });

  await google.waitForSelector('input[type="password"]', { visible: true });
  await google.type('input[type="password"]', 'xjmhandsome520');
  await Promise.all([
    google.waitForNavigation(),
    await google.keyboard.press('Enter')
  ]);

  await google.goto('https://observablehq.com');
  await google.click('button.dark-gray.pointer.animate-all.hover-bg-black-05.flex.mr2.pa2.f6.fw6.br2.ba.items-center.bg-transparent.b--transparent.relative');
  await google.click('button[value="google"]');
  // await google.click('.lCoei:first-child[data-item-index="0"]');
  await google.waitForSelector('.lCoei:first-child[data-item-index="0"]', { visible: true });
  await google.waitFor(2500);
  await google.click('.lCoei:first-child[data-item-index="0"]');
  await google.waitFor(9500);

  let cookies = await google.cookies();
  let strCookie = cookies.map((x) => { return x.name + "=" + x.value + ";" }).join('');
  console.log(strCookie)
  // await google.keyboard.press('Tab')
  // await google.keyboard.press('Tab')  
  // await google.keyboard.press('Enter')



  // const inputElement = await google.$('#captchaimg');
  // await console.log(2)
  // await console.log(inputElement)
  // await google.screenshot({ path: 'example.png' });

  // 其他操作...
  // await browser.close();
});
