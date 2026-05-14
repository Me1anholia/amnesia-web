function ResizeText(text, fontSize)
{
    const textElement = document.createElement('span');
    textElement.textContent = text;
    textElement.style.fontSize = typeof fontSize === 'number' ? fontSize + 'px' : fontSize;
    document.currentScript.parentNode.appendChild(textElement);
}

function startJumpingImg(imageSrc)
{
    const img = document.createElement('img');
    img.src = imageSrc;
    img.style.position = 'absolute';
    img.style.width = '300px';
    img.style.transition = 'top 0.2s, left 0.2s';

    document.body.appendChild(img);

    setInterval(() => {

        const maxX = window.innerWidth - img.offsetWidth;
        const maxY = window.innerHeight - img.offsetHeight;


        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);


        img.style.left = randomX + 'px';
        img.style.top = randomY + 'px';
    }, 1000);
}

function ResizeAllArticles()
{
const articles = document.getElementsByTagName('p');
    for (let i = 0; i < articles.length; i++)
    {
        let articleStyle = articles[i].getAttribute('style') || '';
        articles[i].setAttribute('style', articleStyle + 'font-size:15px');
    }
}

function createTextClock(){
    const clockElement = document.createElement('div');
    clockElement.style.fontSize = '16px';
    document.currentScript.parentNode.appendChild(clockElement);
    setInterval(() => {
        const now = new Date();
        clockElement.textContent = now.toLocaleTimeString();
    }, 1000);
}
function fadeOutElement(elementId) {
    const element = document.getElementById(elementId);
    if (!element){
        console.error('Element not found!');
        return;
    }
    let opacity = 1;
    const Timer = setInterval(() => {
        if (opacity <= 0){
            opacity = 1;
        } else {
            element.style.opacity = opacity;
            opacity -= .01;
        }
    },50)
}
///Block  2

