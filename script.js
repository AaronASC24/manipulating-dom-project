let paraCounter = 0;
let imgCounter = 0;

function addNewPara() {
    const pDiv = document.getElementById('p-div');
    const newPara = document.createElement('p');
    const paraText = document.getElementById('p-div').textContent;
    newPara.textContent = paraText;
    pDiv.appendChild(newPara);
}

function addNewImg() {
    const imgDiv = document.getElementById('img-div');
    const newImg = document.createElement('img');
    newImg.src = 'download.jpg';
    newImg.alt = 'New image ' + (imgCounter + 1);
    imgCounter++;
    imgDiv.appendChild(newImg);
}

function showParaDiv() {
    document.getElementById('p-div').style.display = 'block';
    document.getElementById('img-div').style.display = 'none';
}

function showImgDiv() {
    document.getElementById('p-div').style.display = 'none';
    document.getElementById('img-div').style.display = 'block';
}

document.getElementById('p-button').addEventListener('click', function() {
    showParaDiv();
    addNewPara();
});

document.getElementById('img-button').addEventListener('click', function() {
    showImgDiv();
    addNewImg();
});
