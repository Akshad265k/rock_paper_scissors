document.addEventListener("DOMContentLoaded", () => {

let us=0;
let cs=0;
let ts=0;

let choices=document.querySelectorAll(".choices");

function comp_choice(){
    let comp = Math.floor(Math.random()*3);
    if(comp==0){
        comp="rock";
    }
    else if(comp==1){
        comp="paper";
    }
    else{
        comp="scissors";
    }
return comp;
}

document.querySelector(".reset").addEventListener("click",()=>{
    us=0;
    cs=0;
    ts=0;
    document.querySelector("#player_choice img").src =`images/white.png`
    document.querySelector("#computer_choice img").src = `images/white.png`;
    update_score();
})


choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        let user=choice.id;
        console.log("user chose :"+user);
        let comp=comp_choice();
        console.log("computer chose :"+comp);
    
        // Update player's choice display
        document.querySelector("#player_choice img").src = `images/${user}.jpg`;

        // Update computer's choice display
        document.querySelector("#computer_choice img").src = `images/${comp}.jpg`;
        play_Game(user,comp);

        update_score();
    })
});

function play_Game(user,comp){

    if(user==comp){
        document.querySelector("#msg").textContent="it's a tie";
        ts++;
    }
    else if(user=="rock"){
        if(comp=="paper"){
            document.querySelector("#msg").textContent="computer wins";
            cs++;
        }
        else{
            document.querySelector("#msg").textContent="user wins";
            us++;
        }
    }
    else if(user=="paper"){
        if(comp=="scissors"){
            document.querySelector("#msg").textContent="computer wins";
            cs++;
        }
        else{
            document.querySelector("#msg").textContent="user wins";
            us++;
        }
    }
    else if(user=="scissors"){
        if(comp=="rock"){
            document.querySelector("#msg").textContent="computer wins";
            cs++;
        }    
        else{
            document.querySelector("#msg").textContent="user wins";
            us++;
        }
    }
}


function update_score(){
    document.querySelector("#player-score").textContent=us;
    document.querySelector("#computer-score").textContent=cs;
    document.querySelector("#tie-score").textContent=ts;
}

})