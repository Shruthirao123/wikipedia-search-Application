let searchInput = document.getElementById('searchInput');
let searchResults = document.getElementById('searchResults');
let spinner=document.getElementById('spinner');

function createApp(result) {
    let {
        title,
        link,
        description
    } = result;
    spinner.classList.add('d-none');
    let divEle = document.createElement('div');
    divEle.classList.add('result-item');

    let title1 = document.createElement('a');
    title1.classList.add("result-title");
    title1.target='_blank';
    title1.href=link;
    title1.textContent = title;
    divEle.appendChild(title1);

    let break1 = document.createElement('br');
    divEle.appendChild(break1);

    let link1 = document.createElement('a');
    link1.classList.add("result-url");
    link1.textContent = link;
    divEle.appendChild(link1);

    let break2 = document.createElement('br');
    divEle.appendChild(break2);

    let desc = document.createElement('p');
    desc.classList.add('link-description');
    desc.textContent = description;
    divEle.appendChild(desc);
    searchResults.appendChild(divEle);
}

function display(search_results){
    for (let i of search_results){
        createApp(i);
    }
}

function fun1(event) {
    if (event.key === 'Enter') {
        spinner.classList.remove('d-none');
        searchResults.textContent="";
        let half = searchInput.value;
        let url = "https://apis.ccbp.in/wiki-search?search=" + half;
        let options = {
            method: 'GET'
        };
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(data1) {
                let {
                    search_results
                } = data1;
                display(search_results);
            });
    }
}
searchInput.addEventListener('keydown', fun1);