// filter section
function Filter() {
    document.getElementById("Loadbtn").style.display = "none";
 
    let company = document.getElementById("companySelect").value;
    let FridgeCards = Array.from(document.querySelectorAll('.Refrigerator'));
    let LCDCards = Array.from(document.querySelectorAll('.LCD'));
    let OvenCards = Array.from(document.querySelectorAll('.Oven'));// Oven cards are not functional
    let ACCards = Array.from(document.querySelectorAll('.AC'));// Ac cards are not functional 




    


        // Start Of Refrigerator Cards
    if (document.getElementById("refrigeratorradio").checked) {
        console.log("ASD")

        // when refrigerator is selected then lcd cards will not display
        FridgeCards.forEach(card => {
            card.style.display = "block";
        });
        LCDCards.forEach(card => {
            card.style.display = "none";
        });
        OvenCards.forEach(card => {
            card.style.display = "none";
        });
        ACCards.forEach(card => {
            card.style.display = "none";
        });

        // if lcd cards are selected as well then cards will be displayed
        



        if (company == "All") {
            console.log(FridgeCards);
            FridgeCards.forEach(card => {
                card.style.display = "block";
            });

        }
        else {
            console.log("not working");
            FridgeCards.forEach(card => {
                card.style.display = "none";
            });
        }
        // #for Samsung cards
        if (company == "Samsung") {
            FridgeCards = Array.from(document.querySelectorAll('#Samsung_Refrigerator'));

            FridgeCards.forEach(card => {
                card.style.display = "block";
            });

        }

        // #for Dawlence cards
        if (company == "Dawlance") {
            FridgeCards = Array.from(document.querySelectorAll('#Dawlence_Refrigerator'));
            FridgeCards.forEach(card => {
                console.log(FridgeCards);

                card.style.display = "block";
            });

        }

        // #for Samsung cards
        if (company == "LG") {
            FridgeCards = Array.from(document.querySelectorAll('#LG_Refrigerator'));
            FridgeCards.forEach(card => {
                card.style.display = "block";
            });

        }

    }
    
// END OF REFRIGERATOR CARDS
// START OF LCD CARDS
if (document.getElementById("LCDradio").checked) {
    // when LCD is selected then All other cards will not display
    FridgeCards.forEach(card => {
        card.style.display = "none";
    });
    LCDCards.forEach(card => {
        card.style.display = "Block";
    });
    OvenCards.forEach(card => {
        card.style.display = "none";
    });
    ACCards.forEach(card => {
        card.style.display = "none";
    });









    console.log("Checked");
    if (company == "All") {
        console.log(FridgeCards);
        LCDCards.forEach(card => {
            card.style.display = "block";
        });

    }
    else {
        console.log("not working");
        LCDCards.forEach(card => {
            card.style.display = "none";
        });
    }
    // #for Samsung cards
    if (company == "Samsung") {
        LCDCards = Array.from(document.querySelectorAll('#Samsung_LCD'));

        LCDCards.forEach(card => {
            card.style.display = "block";
        });


    }

    // #for LG cards
    if (company == "Haier") {
        LCDCards = Array.from(document.querySelectorAll('#Haier_LCD'));
        LCDCards.forEach(card => {
            card.style.display = "block";
        });

    }

    // #for Samsung cards
    if (company == "TCL") {
        LCDCards = Array.from(document.querySelectorAll('#TCL_LCD'));
        LCDCards.forEach(card => {
            card.style.display = "block";
        });
    }




}








// START OF AirConditioner CARDS
if (document.getElementById("ACradio").checked) {
    // when LCD is selected then All other cards will not display
    FridgeCards.forEach(card => {
        card.style.display = "none";
    });
    LCDCards.forEach(card => {
        card.style.display = "none";
    });
    OvenCards.forEach(card => {
        card.style.display = "none";
    });
    ACCards.forEach(card => {
        card.style.display = "block";
    });



    if (company == "All") {
        console.log(FridgeCards);
        ACCards.forEach(card => {
            card.style.display = "block";
        });

    }
    else {
        console.log("not working");
        ACCards.forEach(card => {
            card.style.display = "none";
        });
    }
    // #for Samsung cards
    if (company == "Samsung") {
        ACCards = Array.from(document.querySelectorAll('#Samsung_AC'));
        
    console.log("Checked");
        ACCards.forEach(card => {
            card.style.display = "block";
        });


    }

    // #for LG cards
    if (company == "Dawlance") {
        ACCards = Array.from(document.querySelectorAll('#Dawlance_AC'));
        ACCards.forEach(card => {
            card.style.display = "block";
            
        });

    }

    // #for Samsung cards
    if (company == "LG") {
        ACCards = Array.from(document.querySelectorAll('#LG_AC'));
        ACCards.forEach(card => {
            card.style.display = "block";
        });
    }




}













// START OF Oven CARDS
if (document.getElementById("Ovenradio").checked) {
    // when LCD is selected then All other cards will not display
    FridgeCards.forEach(card => {
        card.style.display = "none";
    });
    LCDCards.forEach(card => {
        card.style.display = "none";
    });
    OvenCards.forEach(card => {
        card.style.display = "block";
    });
    ACCards.forEach(card => {
        card.style.display = "none";
    });









    console.log("Checked");
    if (company == "All") {
        console.log(FridgeCards);
        OvenCards.forEach(card => {
            card.style.display = "block";
        });

    }
    else {
        console.log("not working");
        OvenCards.forEach(card => {
            card.style.display = "none";
        });
    }
    // #for Samsung cards
    if (company == "Samsung") {
        OvenCards = Array.from(document.querySelectorAll('#Samsung_Oven'));
        OvenCards.forEach(card => {
            card.style.display = "block";
        });


    }
    if (company == "Dawlance") {
        OvenCards = Array.from(document.querySelectorAll('#Dawlence_Oven'));
        OvenCards.forEach(card => {
            card.style.display = "block";
        });


    }

    // #for Dawlance cards


    // #for Samsung cards
    if (company == "LG") {
        OvenCards = Array.from(document.querySelectorAll('#LG_Oven'));
        OvenCards.forEach(card => {
            card.style.display = "block";
        });
    }




}


// Sort products by price (ascending)
products.sort((a, b) => a.price - b.price);


}// Add event listeners for radio buttons


document.addEventListener("DOMContentLoaded", function() {
    // Show the body content after a delay (e.g., 2 seconds)
    setTimeout(function() {
        document.body.style.display = "block";
        Filter();
    }, 1); // 2000 milliseconds = 2 seconds
});

function fadeInAnim() {
    const sidebar = document.querySelector('.sidebar');
    const animBtn = document.getElementById("Animation_Btn");
    sidebar.style.animationName = "fadeIn";
    sidebar.style.display = 'block';
    animBtn.style.display = "none";
}    

function fadeOutAnim() {
    const sidebar = document.querySelector('.sidebar');
    const animBtn = document.getElementById("Animation_Btn");
    sidebar.style.animationName = "fadeOut";
    setTimeout(() => {
        sidebar.style.display = 'none';
        animBtn.style.display = "block";
    }, 400);    
}    

// End Of Filter Side Menu
document.getElementById('companySelect').addEventListener('change', function(event) {

   let company = document.getElementById("companySelect").value; 
   switch(company) {
       case "Haier":
       case "TCL":
           disableRadios(false, true, true, true);
           document.getElementById("LCDradio").checked = true;
           break;
           case "LG":
               disableRadios(true, false, false, false);
               
               document.getElementById("LCDradio").checked = false;
               document.getElementById("refrigeratorradio").checked = true;
           break;    
       case "Dawlance":
           disableRadios(true, false, false, false);
           document.getElementById("refrigeratorradio").checked = true;
           break;
       case "Samsung":
           disableRadios(true, false, false, false);
           document.getElementById("refrigeratorradio").checked = true;
           break;
       default:
           disableRadios(false, false, false, false);
   }        
});   

function disableRadios(LCD, Oven, AC, refrigerator) {
   document.getElementById("LCDradio").disabled = LCD; 
   document.getElementById("Ovenradio").disabled = Oven;
   document.getElementById("ACradio").disabled = AC;
   document.getElementById("refrigeratorradio").disabled = refrigerator;
}   

// Show More Btn 
function LoadMoreLogic(){
    let currentitems = 6;
    let Allcards = Array.from(document.querySelectorAll('.card'));
    loadbtn = document.getElementById("Loadbtn");
    console.log(Allcards.length);
    
    for (let i = 0; i < Allcards.length; i++) {
        if (i < currentitems) {
            Allcards[i].style.display = "block";
        }    
        else{
            Allcards[i].style.display = "none";
        }    

       
    }    
    if(currentitems >= 24){
        loadbtn.style.display = "none";
    }    
    currentitems += 6; // Increase the number of items to show for the next call


}    
LoadMoreLogic();
function LoadMoreButton(){
    LoadMoreLogic();
}    




document.getElementById("refrigeratorradio").addEventListener("change", Filter);
document.getElementById("LCDradio").addEventListener("change", Filter);
document.getElementById("ACradio").addEventListener("change", Filter);
document.getElementById("Ovenradio").addEventListener("change", Filter);

// Add event listener for the companySelect element
document.getElementById("companySelect").addEventListener("change", Filter);


