fetch("https://www.coursehubiitg.in/api/codingweek/contributions")
.then((response) => response.json())
.then((data) => {
    data.sort((a, b) => b.points - a.points);

    const winners = data.slice(0, 3);
    const rest  = data.slice(3,9);

    console.log(winners);
    console.log(rest);

    document.getElementsByClassName("first")[0].textContent = `${winners[0].name} - ${winners[0].points}`;
    document.getElementsByClassName("second")[0].textContent = `${winners[1].name} - ${winners[1].points}`;
    document.getElementsByClassName("third")[0].textContent = `${winners[2].name} - ${winners[2].points}`;


    document.getElementsByClassName("ellipse1")[0].style.backgroundImage = `url(${winners[0].avatar})`; 
    document.getElementsByClassName("ellipse2")[0].style.backgroundImage = `url(${winners[1].avatar})`; 
    document.getElementsByClassName("ellipse3")[0].style.backgroundImage = `url(${winners[2].avatar})`;
    
    
    
    
    
    
    
    let value = "";
     for( let index = 0; index < rest.length; index++){
        const values = rest[index];
        const position = index + 4;
        value+= `
           <div class="rank">
             <div class="hbar">${position}</div>
             <div class="ellipsebar">
                <div class="avatar-image" style="background-image: url(${values.avatar})"></div>
             </div>
             <div class="names">${values.name}</div>
             <div class="score">${values.points}</div>
             
            </div>
           `;
        }

           document.getElementsByClassName("ranklist")[0].innerHTML = value;
     })
        .catch((error) => {
            console.log("Error fetching data:", error);
     }
   )
