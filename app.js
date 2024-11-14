if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch(error => {
                console.log('Service Worker registration failed:', error);
            });
    });
}

function getRandomZnak(zasobnik_znaku)
{
    const num = Math.floor(Math.random() * (zasobnik_znaku.length));
    return zasobnik_znaku[num];
}

var kliku = 0;
var vyher = 0;
function Roztoc()
{
    kliku++;
    document.getElementById("kliku").textContent =  kliku;

    let znaky = ["first", "second", "third", "fourth", "fifth"];

    let zasobnik_znaku = ["⭐","🍀","🌈","🌸","🍎"];
    let vytoceno = [];
    
    for(let i =0;i<5; i++ )
    {
        document.getElementById(znaky[i]).textContent = getRandomZnak(zasobnik_znaku);
        vytoceno[i] = document.getElementById(znaky[i]).textContent;

    }

    for(let i =0;i<5;i++)
    {
        console.log(vytoceno[i]);
    }
    

}