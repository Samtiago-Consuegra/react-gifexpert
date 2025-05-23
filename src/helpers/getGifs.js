export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=ClBI0u8IPZ0I2xIE2UKugROOy7P6at5N&q=${ category }&limit=10`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    
    return gifs;
}