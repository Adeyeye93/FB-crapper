// horizontal list

function run() {
    
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    let button_eles = document.querySelectorAll('.x1i10hfl.x6umtig.x1b1mbwd.xaqea5y.xav7gou.x1ypdohk.xe8uvvx.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.x16tdsg8.x1hl2dhg.xggy1nq.x87ps6o.x1lku1pv.x1a2a7pz.x6s0dn4.x14yjl9h.xudhj91.x18nykt9.xww2gxu.x972fbf.xcfux6l.x1qhh985.xm0m39n.x9f619.x78zum5.xl56j7k.xexx8yu.x4uap5.x18d9i69.xkhd6sd.x1n2onr6.xsdox4t.x1useyqa.x9bbmet.x1k54i6l.xi81zsa')
    let button_ele = button_eles[button_eles.length-1]
    button_ele.click();
    console.log(button_ele)
    
    let n = 0
    let x = 0
    function scroll() {
        if (x>10) {scrollingFinished();return;}
        button_ele.click()
        let profileElements = document.querySelectorAll('.x9f619.x1n2onr6.x1ja2u2z.x2bj2ny.x8cjs6t.x1ch86jh.x80vd3b.xckqwgs.x13fuv20.xu3j5b3.x1q0q8m5.x26u7qi.x178xt8z.xm81vs4.xso031l.xy80clv.x1qpq9i9.xdney7k.xu5ydu1.xt3gfkd.xh8yej3.x6ikm8r.x10wlt62.x10h3on')
        if (profileElements.length == n) {x++;}
        else {x=0;}
        n = profileElements.length
        sleep(600).then(scroll);
    }
    
    function valuesToHtmlString(name, href, img_src) {
        let s = ""
        s += `<h3 style="margin-bottom: 5px">${name}</h3>\n`
        s += `<a href=${href}>${name}</a>\n`
        s += "<br>\n"
        s += "<br>\n"
        s += `<img style="width: 200px; height: 200px" src=${img_src}>\n`
        s += "<br> ---\n"
        return s
    }
    
    function saveHtmlStringToFile(s, fileName) {
        const blob = new Blob([s], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.download = fileName;
        link.href = url;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    }
    
    function scrollingFinished() {
        let profileElements = document.querySelectorAll('.x9f619.x1n2onr6.x1ja2u2z.x2bj2ny.x8cjs6t.x1ch86jh.x80vd3b.xckqwgs.x13fuv20.xu3j5b3.x1q0q8m5.x26u7qi.x178xt8z.xm81vs4.xso031l.xy80clv.x1qpq9i9.xdney7k.xu5ydu1.xt3gfkd.xh8yej3.x6ikm8r.x10wlt62.x10h3on')
        let result = ""
        profileElements.forEach(function (element) {
            let a_ele = element.querySelector('a.x1i10hfl.xjbqb8w.x6umtig.x1b1mbwd.xaqea5y.xav7gou.x1ypdohk.xe8uvvx.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.xexx8yu.x4uap5.x18d9i69.xkhd6sd.x16tdsg8.x1hl2dhg.xggy1nq.x1a2a7pz.x1heor9g.xt0b8zv.x1ey2m1c.x9f619.x1lliihq.xds687c.x10l6tqk.x17qophe.x13vifvy')
            if (a_ele === null) {return}
            let img_ele = element.querySelector('img')
            let name = img_ele.getAttribute('alt').replace('Profile Photo of ', '')
            let href = a_ele.getAttribute('href')
            let image_src = img_ele.getAttribute('src')
            s = valuesToHtmlString(name, href, image_src)
            result += s
            result += '\n'
        })
        saveHtmlStringToFile(result, "people.html")
    }
    
    scroll();
    
}

run();

