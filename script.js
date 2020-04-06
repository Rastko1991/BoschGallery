$( document ).ready(function() {
    $(function () {
        $(".d-none").slice(0, 2).removeClass("d-none");
        $("#loadMore").on('click', function (e) {
            $(".d-none").slice(0, 2).removeClass("d-none");
            if($(".d-none").slice(0, 2).length==0) {
                $("#loadMore").addClass("d-none");
            }
        });
    });
    
    let average = [];
 
    function recalculateAverage(){
        let sum=0;
        average.forEach((element)=>{sum=sum+element});
        calculator.innerText = (sum/average.length).toFixed(2);
    }

    let calculator = document.getElementById('calculator');
    let onePoint = document.getElementsByClassName('one-point');
    let twoPoint = document.getElementsByClassName('two-point');  
    let threePoint = document.getElementsByClassName('three-point');  
    let fourPoint = document.getElementsByClassName('four-point');  
    let fivePoint = document.getElementsByClassName('five-point');  
    
    for (let i = 0; i < onePoint.length; i++) {
        onePoint[i].addEventListener('click', ()=>{average.push(1); recalculateAverage();});
    }
        
    for (let i = 0; i < twoPoint.length; i++) {
        twoPoint[i].addEventListener('click', ()=>{average.push(2); recalculateAverage();});
    }
        
    for (let i = 0; i < threePoint.length; i++) {
        threePoint[i].addEventListener('click', ()=>{average.push(3); recalculateAverage();});
    }
        
    for (let i = 0; i < fourPoint.length; i++) {
        fourPoint[i].addEventListener('click', ()=>{average.push(4); recalculateAverage();});
    }
        
    for (let i = 0; i < fivePoint.length; i++) {
        fivePoint[i].addEventListener('click', ()=>{average.push(5); recalculateAverage();});
    } 
});



