export const getFullImageURL = (url) => {  
  //console.log(url,"imgg url");
  if(url){
   url = url.replace(
        "nyc3.digitaloceanspaces.com/adamallys-space",
        "adamallys-space.nyc3.cdn.digitaloceanspaces.com"
      );
      url = url.replace(
        "adamallys-space.nyc3.digitaloceanspaces.com",
        "adamallys-space.nyc3.cdn.digitaloceanspaces.com"
    ); 
    if (url?.includes?.('http')) return url  
   // return url
    return (`https://${url}`)
  }else{
    return url
  }
}