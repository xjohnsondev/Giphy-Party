
async function displayGif(q){
    // validates if a gif for query exists in giphy database
    try{
        // accessing giphy api and searching
        const api_key = 'lfPjsFeR9rJf4IB0rsWoKkmEay0xZwOD'
        let res = await axios.get(`http://api.giphy.com/v1/gifs/search`, { params: { q, api_key } });

        // adding random gif to the window
        let newGif = document.createElement('img');
        newGif.src = res.data.data[Math.floor(Math.random() * res.data.data.length)].images.downsized.url;
        display.append(newGif);
    }
    catch (e) {
        alert("Try searching another term");
    }
}

const form = document.querySelector('#searchForm');
const display = document.querySelector('#gifContainer')
const remove = document.querySelector('#deleteForm')

form.addEventListener('submit', function (e){
    // passing query to api
    e.preventDefault();
    const input = document.querySelector('input');
    displayGif(input.value);
    input.value = '';
})

remove.addEventListener('submit', function(e){
    // clearing display
    e.preventDefault();
    let $allGifs = $('img');
    $allGifs.remove();
})
