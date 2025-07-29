// https://en.wikipedia.org/wiki/Edward_Drinker_Cope

const url = `https://en.wikipedia.org/wiki/Edward_Drinker_Cope`

returnAddress(url);

function returnAddress(url) {

    if (typeof url !== `string` || url == null) {
        throw new Error(`URL is incorrect`)
    } else if (url.trim() === "") {
        throw new Error(`URL is empty`)
    } else {
        const returnURL = url.split(/\/+/);
        console.log(returnURL)
    }
}

console.log(`----------------------------------------------------`);

function getUrlParts(url){
    const [protocol, _, host, ...path] = url.split(`/`);

if (protocol === `https:` || protocol === `http:`){
    if( !host.includes(`.`)){
        return;
    }
     console.log(protocol, _, host, path);

    console.log(`Protocol: ${protocol.split(`:`)[0]}`);
    console.log(`Domain name: ${host}`);
    console.log(`Path within the site: /${path.join(`/`)}`);
} else {
    throw new Error(`Protocol is incorrect`)
}

 
};

getUrlParts(url);