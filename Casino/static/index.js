document.addEventListener('DOMContentLoaded', function() {
   
    document.getElementById('countBtn').addEventListener("click", ()=> {
        lines = 10;
        data=[];
        min=0;
        max=0;
        for(a=0;a<lines;a++){
            handTest = document.getElementById('hands').value;
            count=0;
            hands=0;
            xArray = [];
            yArray = [];
            xArrayAvg = [];
            yArrayAvg = []; 
            bet = 10;
            console.log(handTest);
            for(i=0;i<handTest;i++){
                if (Math.random() > .495) {
                    count+=bet;
                } else {
                    count-=bet;
                }
                hands++;
                if(count<min){
                    min=count
                }
                if(count>max){
                    max=count
                }
                if(i%5==0){
                    xArray.push(hands);
                    yArray.push(count);
                    xArrayAvg.push(hands );
                    yArrayAvg.push(bet * hands* 0.01);
                }
            }

            document.getElementById('counter').innerHTML = count;
            document.getElementById('handCounter').innerHTML = hands;
            document.getElementById('average').innerHTML = 100*count/hands;



            // Define Data
            const data1 = {
            x: xArray,
            y: yArray,
            mode:"scatter"
            };

            const data2 = {
                x: xArrayAvg,
                y: yArrayAvg,
                mode:"scatter"
                };

            data.push(data1);

            // Define Layout

            }
        const layout = {
            xaxis: {range: [0, hands], title: "Hands"},
            yaxis: {range: [min + min*.1, max + max*.1], title: "Profit"},
            title: "Profit from Hands Played"
            };
        // Display with Plotly
        Plotly.newPlot("myPlot", data, layout);
        });


    
})