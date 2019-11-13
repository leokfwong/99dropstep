function randomIntFromInterval(min, max) {

    return (Math.floor(Math.random() * (max - min + 1) + min));

}

function toArray(htmlcollection) {

    return (Array.prototype.slice.call(htmlcollection));

}


function calculateRatings(player) {

    // Return an object containing the sum of the ratings and weights for a given category
    function sumRatingWeight(stats_array, player) {

        // Initialize variables
        let obj = {};
        obj.rating = 0;
        obj.weight = 0;

        // Iterate through every category and add up the rating and weight values
        stats_array.forEach(function(cat) {
            if ((scoring_array.indexOf(cat.attribute) > -1)) {
                obj.rating += (player.ratings[cat.attribute].value * cat.weight * player.ratings[cat.attribute].tendency / 100);
                obj.weight += (cat.weight * player.ratings[cat.attribute].tendency / 100);
            } else {
                obj.rating += (player.ratings[cat.attribute] * cat.weight);
                obj.weight += cat.weight;
            }
        });

        // Return object containing the sum of ratings and weights
        return (obj);

    }

    // List of stat categories
    let categories = ["offense", "defense", "physical", "overall"];

    // Calculate rating for each category
    let off_obj = sumRatingWeight(off_stats_json, player);
    let def_obj = sumRatingWeight(def_stats_json, player);
    let phys_obj = sumRatingWeight(phys_stats_json, player);
    let obj = {};

    // Store ratings into corresponding object
    obj.offense = off_obj.rating / off_obj.weight;
    obj.defense = def_obj.rating / def_obj.weight;
    obj.physical = phys_obj.rating / phys_obj.weight;
    obj.overall = (off_obj.rating + def_obj.rating + phys_obj.rating) / (off_obj.weight + def_obj.weight + phys_obj.weight);

    // Return object containing ratings for each category
    return (obj);

}

function calculateTeamRating(arr, category) {

    let sum = 0;

    for (let i = 0; i < arr.length; i++) {

        sum += arr[i][category];

    }

    return (sum / arr.length);

}

function getRatingColor(value) {

    let color;

    if (value >= 90) {
        color = "#26A65B";
    } else if (value < 90 & value >= 80) {
        color = "#87D37C";
    } else if (value < 80 & value >= 75) {
        color = "#C4E538";
    } else if (value < 75 & value >= 70) {
        color = "#F4D03F";
    } else if (value < 70 & value >= 65) {
        color = "#FFB61E";
    } else if (value < 65 & value >= 60) {
        color = "#EB9532";
    } else if (value < 60 & value >= 50) {
        color = "#EF4836";
    } else if (value < 50) {
        color = "red";
    }

    return (color);

}

function getAttributeRating(card, attribute) {

    let rating;

    if (["inside", "dunk", "midrange", "outside"].includes(attribute)) {
        rating = card.ratings[attribute].value;
    } else {
        rating = card.ratings[attribute];
    }

    return (rating);

}

function navigateArray(array, idx, jump) {

    if ((idx + jump) < 0) {
        return (array[(array.length - 1)]);
    } else if ((idx + jump) > (array.length - 1)) {
        return (array[0]);
    } else {
        return (array[idx + jump])
    }

}

function compare(a, b) {

    if (a.first < b.first)
        return -1;
    if (a.first > b.first)
        return 1;
    return 0;

}

function capitalize(string) {

    return(string.charAt(0).toUpperCase() + string.slice(1))

}

function Player(player) {

    this.id = player.id;
    this.type = player.type;
    this.first = player.first;
    this.last = player.last;
    this.height = player.height;
    this.weight = player.weight;
    this.number = player.number;
    this.country = player.country;
    this.team = player.team;
    this.conference = player.conference;
    this.season = player.season;
    this.salary = player.salary;
    this.unlockedlevel = player.unlockedlevel;
    this.tier = player.tier;
    this.rarity = player.rarity;
    this.level = player.level;
    this.count = player.count;
    this.ratings = player.ratings;
    this.position = player.position;
    this.fgaintensity = player.fgaintensity;
    this.fgaaverage = player.fgaaverage;
    this.color1 = player.color1;
    this.color2 = player.color2;
    this.color3 = player.color3;
    this.image = player.image;

    this.overall = calculateRatings(player).overall;

}

function convertFeetInch2cm(height) {

    let height_array = height.split("-");
    let feet = height_array[0];
    let inch = height_array[1];

    let cm = Math.round(((feet * 30.48) + (inch * 2.54)));

    return(cm);

}
