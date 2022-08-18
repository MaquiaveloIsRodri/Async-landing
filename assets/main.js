const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCSVhJzTvlYPj7bRbCReYwvw&part=snippet%2Cid&order=date&maxResults=6';
const content = document.getElementById('content');
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'd1232fda29msh6b5a7637684d307p1aede5jsna989566ab7e0',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

async function fetchData(Url_Api) {
    const response = await fetch(Url_Api, options);
    const data = await response.json();
    return data;
}

//funcion que llama a si misma

(async () => {
    try {
        const videos = await fetchData(API);
        const view = `${videos.items.map(video =>
            `
                <div class="group relative">
                    <div
                        class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                        <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
                    </div>
                    <div class="mt-4 flex justify-between">
                        <h3 class="text-sm text-gray-700">
                            <span aria-hidden="true" class="absolute inset-0"></span>
                            Title: ${video.snippet.title}
                        </h3>
                    </div>
                </div>
            `).slice(0,5).join('')
        }
        `;
        console.log(view);
        content.innerHTML = view;

    } catch (error) {
        console.log(error);
    }
})();//los parentesis son para que se ejecute la funcion de forma asincrona