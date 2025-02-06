
const modifyImageUrl = (url) => {
    url = url.replace(
        "nyc3.digitaloceanspaces.com/adamallys-space",
        "adamallys-space.nyc3.cdn.digitaloceanspaces.com"
        //"adamallysgroup.b-cdn.net"
      );
      url = url.replace(
        "adamallys-space.nyc3.digitaloceanspaces.com",
        "adamallys-space.nyc3.cdn.digitaloceanspaces.com"
        //"adamallysgroup.b-cdn.net"
    ); 
    if(!url.includes('http')){
        return `https://${url}`
    }
    return url
}

export default modifyImageUrl