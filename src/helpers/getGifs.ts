


export const getGifs = async (categories: any) =>{

    const url = `https://api.giphy.com/v1/gifs/search?api_key=4lsFyDidYoaK9RxFmvdTV2MY9Wvh6ShP&q=${categories}&limit=10`
    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map( (img: any) => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    return gifs;
};