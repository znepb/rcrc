var rateTypes = [
    {
        name: "layout",
        weight: 2,
        rating: 5
    },
    {
        name: "intensity",
        weight: 2,
        rating: 5
    },
    {
        name: "appearance",
        weight: 2,
        rating: 5
    },
    {
        name: "theming",
        weight: 2,
        rating: 5
    }
]

var weightValid = true;

function calculateRating() {
    var output;
    if(weightValid == true) {
        var score = 0;
        rateTypes.forEach(element => {
            var rawWeight = (element.weight / 8);
            var rating = rawWeight * element.rating;

            score = +score + +rating;
        });
        output = score + "/10";
    } else {
        output = "Invalid weight!";
    }
    document.getElementById("output").innerHTML = output;
}

window.onload = function() {
    calculateRating();
    
    rateTypes.forEach(element => {
        console.log(element);
        var ratingSlider = document.getElementById("rate-" + element.name);
        var weightSlider = document.getElementById("weight-" + element.name);
    
        var ratingValue = document.getElementById("rating-" + element.name);
        var weightValue = document.getElementById("weighting-" + element.name);
                
        ratingSlider.oninput = function() {
            ratingValue.innerHTML = this.value;
            element.rating = this.value;

            calculateRating();
        }
        weightSlider.oninput = function() {
            weightValue.innerHTML = this.value;
            element.weight = this.value;

            var amount = 0;
            rateTypes.forEach(element => {
                amount = +amount + +element.weight
            })
            console.log(amount);
            if(amount != 8) {
                document.getElementById("weight-invalid").style.display = "inline";
                weightValid = false;
            } else {
                document.getElementById("weight-invalid").style.display = "none";
                weightValid = true;
            }

            calculateRating();
        }
    });
}
