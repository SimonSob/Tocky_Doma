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
vyhrasoucet = 0;
var kliku = 10;
var vyhra = 0;

function Roztoc()
{
    
    if(kliku > 0)
    {
        kliku--;
        document.getElementById("tlacitko").textContent = 'Roztoč'
        document.getElementById("kliku").textContent =  kliku;

        let znaky = ["first", "second", "third", "fourth", "fifth"];

        let zasobnik_znaku = ["⭐","🍀","🌈","🌸","🍎"];
        let vytoceno = [];
        var soucet =0;
    
        for(let i =0;i<5; i++ )
        {
            document.getElementById(znaky[i]).textContent = getRandomZnak(zasobnik_znaku);
            vytoceno[i] = document.getElementById(znaky[i]).textContent;

        }

        for(let i =0;i<5;i++)
        {
            for(let j = 0;j<5;j++)
            {
                if(i != j)
                {
                    if(vytoceno[i] == vytoceno[j])
                        {
                            soucet++;
                        }
                }
            }
        }
        vyhra = 0;
        console.log(soucet);
        if(soucet == 8 || soucet == 6)
        {
            vyhra = 100;
        }
        else if(soucet == 12)
        {
            vyhra = 400;
        }
        else if(soucet == 20)
        {
            vyhra = 1000;
        }

        vyhrasoucet = vyhrasoucet + vyhra;

        document.getElementById("vyhra").textContent = vyhrasoucet;
    }

    else
    {
        document.getElementById("tlacitko").textContent = 'nemáš žádné spiny!'
        document.getElementById("pay").textContent = 'Kup si jeden spin za 20 bodů!!☺☺'

    }
    

}

function pridejSpiny()
{
    hide();

}

function hide() {
    var x = document.getElementById("platba");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }