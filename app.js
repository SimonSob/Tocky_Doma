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
    
    for(let i =0;i<5; i++ )
    {
        document.getElementById(znaky[i]).textContent = getRandomZnak(zasobnik_znaku);
        const vytoceno = [document.getElementById(znaky[i]).textContent];

        let soucet = [hv, cl, da, ib, ja]

        var hv =0;
        var cl = 0;
        var da = 0;
        var ib = 0;
        var ja = 0;

        console.log(vytoceno[i]);
        console.log(i);

        /*switch(vytoceno[i])
        {
            case "⭐":
                hv++;
                break;
            
            case "🍀":
                cl++;
                break;

            case "🌈":
                da++;
                break;

            case "🌸":
                ib++;
                break;

            case "🍎":
                ja++;
                break;
                
        }*/
    }
    

}