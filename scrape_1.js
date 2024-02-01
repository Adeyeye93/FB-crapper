// vertical list

function run() {
    console.log("Script one is running ");
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    ele = document.querySelector('.xb57i2i.x1q594ok.x5lxg6s.x78zum5.xdt5ytf.x6ikm8r.x1ja2u2z.x1pq812k.x1rohswg.xfk6m8.x1yqm8si.xjx87ck.x1l7klhg.x1iyjqo2.xs83m0k.x2lwn1j.xx8ngbg.xwo3gff.x1oyok0e.x1odjw0f.x1e4zzel.x1n2onr6.xq1qtft')
    
    let n = 0
    let x = 0
    function scroll() {
        if (x>5) {scrollingFinished();return;}
        ele.scrollTop = ele.scrollHeight
        let profileElements = document.querySelectorAll('.x1i10hfl.x1qjc9v5.xjbqb8w.xjqpnuy.xa49m3k.xqeqjp1.x2hbi6w.x13fuv20.xu3j5b3.x1q0q8m5.x26u7qi.x972fbf.xcfux6l.x1qhh985.xm0m39n.x9f619.x1ypdohk.xdl72j9.x2lah0s.xe8uvvx.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.x2lwn1j.xeuugli.xexx8yu.x4uap5.x18d9i69.xkhd6sd.x1n2onr6.x16tdsg8.x1hl2dhg.xggy1nq.x1ja2u2z.x1t137rt.x1q0g3np.x87ps6o.x1lku1pv.x1a2a7pz.x1lq5wgf.xgqcy7u.x30kzoy.x9jhf4c.x1lliihq')
        if (profileElements.length == n) {x++;}
        else {x=0;}
        n = profileElements.length
        sleep(500).then(scroll);
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
        let profileElements = document.querySelectorAll('.x1i10hfl.x1qjc9v5.xjbqb8w.xjqpnuy.xa49m3k.xqeqjp1.x2hbi6w.x13fuv20.xu3j5b3.x1q0q8m5.x26u7qi.x972fbf.xcfux6l.x1qhh985.xm0m39n.x9f619.x1ypdohk.xdl72j9.x2lah0s.xe8uvvx.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.x2lwn1j.xeuugli.xexx8yu.x4uap5.x18d9i69.xkhd6sd.x1n2onr6.x16tdsg8.x1hl2dhg.xggy1nq.x1ja2u2z.x1t137rt.x1q0g3np.x87ps6o.x1lku1pv.x1a2a7pz.x1lq5wgf.xgqcy7u.x30kzoy.x9jhf4c.x1lliihq')
        let result = ""
        profileElements.forEach(function(element) {
            let svg_ele = element.querySelector('svg')
            if (svg_ele === null) {return}
            let img_ele = element.querySelector('image')
            let name = svg_ele.getAttribute('aria-label')
            let href = element.getAttribute('href')
            let image_src = img_ele.getAttribute('xlink:href')
            s = valuesToHtmlString(name, href, image_src)
            result += s
            result += '\n'
        })
        saveHtmlStringToFile(result, "people.html")
    }
    
    scroll();
    
}

run();


// good luck working with the dude...