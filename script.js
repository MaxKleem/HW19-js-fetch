let imgList = document.getElementById('imgList')
let dispList = document.getElementById('list');

async function getAlbumList() {
    let list = await fetch('http://jsonplaceholder.typicode.com/albums')
    let albumList = await list.json();
    dispList.innerHTML = albumList.map((data) => {
        let li = `<li value="${data.id}"> Id: ${data.id} Title: ${data.title}. UserId: ${data.userId}</li>`;
        return li;
    }).join('');
};
getAlbumList().then(() => getLogo(dispList.value));

async function getLogo(id = 1) {
    let logo = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`);
    let logos = await logo.json();
    imgList.innerHTML = logos.map((data) => {
        let img = `<img src="${data.url}">`
        return img;
    }).join('');
};

dispList.addEventListener('click', elem => {
    let resault = elem.target.value;
    getLogo(resault);
})