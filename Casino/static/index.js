document.addEventListener('DOMContentLoaded', function() {
    count=0;
    hands=0;
    min=0;
    max=0;
    xArray = [];
    yArray = [];
    document.getElementById('countBtn').addEventListener("click", ()=> {


            for(i=0;i<1000;i++){
                if (Math.random() > .495) {
                    count+=5;
                } else {
                    count-=5;
                }
                hands++;
                if(count<min){
                    min=count
                }
                if(count>max){
                    max=count
                }
                if(i%10==0){
                    xArray.push(hands);
                    yArray.push(count);
                }
            }

            document.getElementById('counter').innerHTML = count;
            document.getElementById('handCounter').innerHTML = hands;
            document.getElementById('average').innerHTML = 100*count/hands;



            // Define Data
            const data = [{
            x: xArray,
            y: yArray,
            mode:"markers"
            }];

            // Define Layout
            const layout = {
            xaxis: {range: [0, hands], title: "Square Meters"},
            yaxis: {range: [min, max], title: "Price in Millions"},
            title: "House Prices vs. Size"
            };

            // Display with Plotly
            Plotly.newPlot("myPlot", data, layout);
        });


    
})