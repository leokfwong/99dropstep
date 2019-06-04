// Every time page loads, it lands on the Play screen
window.onload = function() {

    // Get main play div
    let main_play = document.getElementById("main-play");
    main_play.addEventListener("click", function() {

        // Display home page, update data in background, and load the collection
        displayHomePage();
        //updateData();
        loadCollection();
        loadTeams();

        // Settings Button
        let settings_btn = document.getElementById("home-header-settings");
        settings_btn.addEventListener("click", function() {

            displaySpecificPage("settings-container");
            loadSettings();

        });

        // Collection Button
        let collection_btn = document.getElementById("home-content-row-1-itm-1");
        collection_btn.addEventListener("click", function() {

            displaySpecificPage("collection-container");
            loadCollection();

        });

        // Team Button
        let team_btn = document.getElementById("home-content-row-1-itm-2");
        team_btn.addEventListener("click", function() {

            displaySpecificPage("team-container");
            document.getElementById("team-overlay").style.display = "none";

        });

        // Game Modes Button
        let gamemodes_btn = document.getElementById("home-content-row-2-itm-1");
        gamemodes_btn.addEventListener("click", function() {

            displaySpecificPage("gamemodes-container");
            loadGameModes();

        });

        // Shop Button
        let shop_btn = document.getElementById("home-content-row-3-itm-1");
        shop_btn.addEventListener("click", function() {

            displaySpecificPage("shop-container");
            loadShop();

        });

        // Free Gift Button
        let free_gift_btn = document.getElementById("shop-free-btn");
        free_gift_btn.addEventListener("click", function() {

            console.log("Opening free gift!");
            let random_idx = randomIntFromInterval(0, players_json.length - 1);
            let random_player = players_json[random_idx];

            buyItem([random_player.id], 1, 0);

        });

        // Back Button
        let back_home = toArray(document.getElementsByClassName("back-home"));
        back_home.forEach(function(page) {

            page.addEventListener("click", function() {
                displaySpecificPage("home-container");
                displayHomePage();
            });

        });

    });

}

/* Fetch team related data and update team page. */
function loadTeams() {

    // Get the divs for starters and bench, these won't change
    let starters = document.getElementById("team-starters");
    let bench = document.getElementById("team-bench");
    // Reset the content of the above divs to empty
    starters.innerHTML = "";
    bench.innerHTML = "";

    // Initialize array listing out positions
    let position_array = ["PG", "SG", "SF", "PF", "C"];

    // Fetch user related data
    fetchRecord("userdata", "0001", function(summary) {

        // Fetch current team ID (1-5)
        let team_id = summary.team.toString();

        // Fetch team related data based on team ID
        fetchRecord("teams", team_id, function(team) {

            // Fetch team selection navigation bar div and reset content
            let nav = document.getElementById("team-selection-navigation");
            nav.innerHTML = "";

            // For each team selection (1-5)
            for (let y = 0; y < 5; y++) {

                // Create box div for team selection tab
                let box = document.createElement("div");
                box.id = "team-selection-nav-box-" + (y + 1);
                box.className = "team-selection-nav-box";
                nav.appendChild(box);
                box.innerHTML = "Team " + (y + 1);

                // If team selection tab is the active one, attach active class
                if (y == (team_id - 1)) {
                    box.className += " team-selection-nav-box-active";
                } else {
                    box.className += " team-selection-nav-box-inactive";
                }

                // Add event listener to team selection tab
                box.addEventListener("click", function() {

                    // Fetch user related data
                    fetchRecord("userdata", "0001", function(summary) {

                        // Update team ID
                        summary.team = (y + 1);

                        // Update user related data
                        removeRecord("userdata", "0001");
                        addRecord("userdata", summary);

                        // Reload team date and page
                        loadTeams();

                    });

                });

            }

            // Fetch row 1 of team summary section and reset content
            let team_summary_row1 = document.getElementById("team-summary-row-1");
            team_summary_row1.innerHTML = "";

            // Create team rating container within row 1
            let team_rating_container = document.createElement("div");
            team_rating_container.id = "team-summary-rating-container";
            team_rating_container.className = "div-fadein";
            team_summary_row1.appendChild(team_rating_container);

            // Create box within rating container
            let team_rating_box = document.createElement("div");
            team_rating_box.id = "team-summary-rating-box";
            team_rating_container.appendChild(team_rating_box);
            team_rating_box.innerHTML = "NA";

            // Create team rating breakdown container within row 1
            let team_rating_breakdown = document.createElement("div");
            team_rating_breakdown.id = "team-summary-rating-breakdown";
            team_rating_breakdown.className = "div-fadein";
            team_summary_row1.appendChild(team_rating_breakdown);

            // Initialize categories array
            let sct_array = ["OFF", "DEF", "PHYS"];

            // Iterate through each category
            for (let k = 0; k < 3; k++) {

                // Create section row for each category (3 rows)
                let sct = document.createElement("div");
                sct.id = "team-summary-rating-breakdown-sct-" + (k + 1);
                sct.className = "team-summary-rating-breakdown-sct";
                team_rating_breakdown.appendChild(sct);

                // Create div for title (OFF, DEF, PHYS)
                let title = document.createElement("div");
                title.id = "team-summary-rating-breakdown-title-" + (k + 1);
                title.className = "team-summary-rating-breakdown-title";
                sct.appendChild(title);
                title.innerHTML = sct_array[k];

                // Create div for rating bar (outer)
                let bar = document.createElement("div");
                bar.id = "team-summary-rating-breakdown-bar-" + (k + 1);
                bar.className = "team-summary-rating-breakdown-bar";
                sct.appendChild(bar);

                // Create div for rating bar fill (inner)
                let fill = document.createElement("div");
                fill.id = "team-summary-rating-breakdown-fill-" + (k + 1);
                fill.className = "team-summary-rating-breakdown-fill";
                bar.appendChild(fill);

                // Create div for rating value
                let value = document.createElement("div");
                value.id = "team-summary-rating-breakdown-value-" + (k + 1);
                value.className = "team-summary-rating-breakdown-value";
                sct.appendChild(value);
                value.innerHTML = "NA";

            }

            // Initialize empty array
            let team_rating_array = [];

            // Iterate through each player on selected team
            for (let i = 0; i < team.players.length; i++) {

                // Fetch player id
                let card = team.players[i];

                // Create div for row containing player info
                let row = document.createElement("div")
                row.id = "team-row-" + i;
                row.className = "team-row div-fadein";

                // Create div for container inside of row
                let container = document.createElement("div");
                container.id = "team-row-container-" + i;
                container.className = "team-row-container";
                row.appendChild(container);

                // Create div for position
                let position = document.createElement("div");
                position.id = "team-row-position-" + i;
                position.className = "team-position";
                container.appendChild(position);
                position.innerHTML = position_array[i % 5];

                // Create div for image
                let image = document.createElement("div");
                image.id = "team-row-image-" + i;
                image.className = "team-image";
                container.appendChild(image);

                // Create div for description
                let description = document.createElement("div");
                description.id = "team-row-description-" + i;
                description.className = "team-description";
                container.appendChild(description);

                // Create div for description box
                let description_box = document.createElement("div");
                description_box.id = "team-description-box-" + i;
                description_box.className = "team-description-box";
                description.appendChild(description_box);

                // Create div for description row 1
                let descr_row_1 = document.createElement("div");
                descr_row_1.id = "team-description-row-1";
                descr_row_1.className = "team-description-row";
                description_box.appendChild(descr_row_1);

                // Create div for description row 2
                let descr_row_2 = document.createElement("div");
                descr_row_2.id = "team-description-row-2";
                descr_row_2.className = "team-description-row";
                description_box.appendChild(descr_row_2);

                // Create div for description row 3
                let descr_row_3 = document.createElement("div");
                descr_row_3.id = "team-description-row-3";
                descr_row_3.className = "team-description-row";
                description_box.appendChild(descr_row_3);

                // Create div for rating
                let rating = document.createElement("div");
                rating.id = "team-row-rating-" + i;
                rating.className = "team-rating";
                container.appendChild(rating);

                // Create div for rating box
                let rating_box = document.createElement("div");
                rating_box.id = "team-rating-box-" + i;
                rating_box.className = "team-rating-box";
                rating.appendChild(rating_box);

                // Append to right section based on starter vs bench
                if (i < 5) {
                    starters.appendChild(row);
                } else {
                    bench.appendChild(row);
                }

                // If player is missing
                if (card == "") {

                    // Create div for "ADD PLAYER" overlay
                    let add_player = document.createElement("div");
                    add_player.id = "team-row-add-player-" + i;
                    add_player.className = "team-add-player";
                    row.appendChild(add_player);
                    add_player.innerHTML = "ADD PLAYER";

                } else {

                    // Create div for player image
                    let img = document.createElement("img");
                    img.id = "team-row-image-img-" + i;
                    img.src = "assets/images/thumbs/" + card.image + "_" + card.id + ".png";
                    image.appendChild(img);

                    image.style.background = card.color2;

                    // Update description background colors
                    description.style.background = card.color2;
                    description.style.color = card.color3;

                    // Update player info
                    descr_row_1.innerHTML = card.first + " " + card.last;
                    descr_row_2.innerHTML = card.position;
                    descr_row_3.innerHTML = card.team;

                    // If player name too long (>15 characters), reduce font size
                    if ((card.first.length + card.last.length) > 15) {
                        descr_row_1.style.fontSize = "81%";
                    }

                    // If team name too long (>15 characters), reduce font size
                    if (card.team.length > 15) {
                        descr_row_3.style.fontSize = "81%";
                    }

                    // Fetch player rating object
                    let rating_obj = calculateRatings(card);
                    // Update player rating and corresponding color
                    rating_box.innerHTML = Math.round(rating_obj.overall);
                    rating_box.style.background = getRatingColor(Math.round(rating_obj.overall));
                    rating.style.background = card.color2;

                    // Add rating object to array (for team overall calculations)
                    team_rating_array.push(rating_obj);
                    // Calculate mean and update rating
                    let overall = calculateTeamRating(team_rating_array, "overall");
                    team_rating_box.innerHTML = Math.round(overall);

                    // Calculate team offense and update values
                    let offense = calculateTeamRating(team_rating_array, "offense");
                    document.getElementById("team-summary-rating-breakdown-value-1").innerHTML = Math.round(offense);
                    document.getElementById("team-summary-rating-breakdown-fill-1").style.width = Math.round(offense) + "%";
                    document.getElementById("team-summary-rating-breakdown-fill-1").style.background = getRatingColor(offense);

                    // Calculate team defense and update values
                    let defense = calculateTeamRating(team_rating_array, "defense");
                    document.getElementById("team-summary-rating-breakdown-value-2").innerHTML = Math.round(defense);
                    document.getElementById("team-summary-rating-breakdown-fill-2").style.width = Math.round(defense) + "%";
                    document.getElementById("team-summary-rating-breakdown-fill-2").style.background = getRatingColor(defense);

                    // Calculate team physical and update values
                    let physical = calculateTeamRating(team_rating_array, "physical");
                    document.getElementById("team-summary-rating-breakdown-value-3").innerHTML = Math.round(physical);
                    document.getElementById("team-summary-rating-breakdown-fill-3").style.width = Math.round(physical) + "%";
                    document.getElementById("team-summary-rating-breakdown-fill-3").style.background = getRatingColor(physical);

                }
            }
        });
    });
}

/* Function displays the home page once user clicks on "PLAY"
@params {} none */
function displayHomePage() {

    // Hide main container and overlay
    let main_container = document.getElementById("main-container");
    main_container.style.display = "none";
    let overlay = document.getElementById("overlay");
    overlay.style.display = "none";

    // Show home page
    let home_container = document.getElementById("home-container");
    home_container.style.display = "flex";

    // TODO: Reorganize
    fetchRecord("userdata", "0001", function(summary) {

        if (summary != undefined) {
            let summary_sct = document.getElementById("home-summary");
            summary_sct.innerHTML = "Level: " + summary.level + "<br>" + "Experience: " + summary.experience + "<br>" + "Coins: " + summary.totalcoins;
        } else {
            console.log("Error! User summary doesn't exist!");
        }

    });

    console.log("Play! Loading home page.")

}

/* Function displays a specific page given a div id
@params {string} id - id of div */
function displaySpecificPage(id) {

    // Retrieve all the pages under wrapper
    let other_pages = Array.prototype.slice.call(document.getElementById("wrapper").children);

    // Hide all pages under wrapper
    other_pages.forEach(function(page) {
        page.style.display = "none";
    });

    // Show specific page only
    let active_view = document.getElementById(id);
    active_view.style.display = "flex";

}

/* Function updates data to get the most up-to-date json
@params {} none */
function updateData() {

    // TODO: Need to update Team as well

    // Drop shop table
    clearTable("shop");
    // Repopulate shop table with most updated json
    for (let i in shop_json) {
        addRecord("shop", shop_json[i])
    }

    fetchTable("collection", function(array) {

        for (let i = 0; i < array.length; i++) {

            let card = array[i];

            if (card.type == "player") {

                let player = players_json[parseInt(card.id) - 1];

                let attributes_to_update = ["type", "first", "last", "height", "weight", "team", "country", "number", "conference", "season", "salary", "unlockedlevel", "tier", "rarity", "position", "fgaintensity", "fgaaverage", "color1", "color2", "color3", "image"];

                for (let i = 0; i < attributes_to_update.length; i++) {

                    card[attributes_to_update[i]] = player[attributes_to_update[i]];

                }

                let ratings_to_update = ["inside", "dunk", "midrange", "outside", "drawfoul", "freethrow", "interior", "perimeter", "offensiverebound", "defensiverebound", "speed", "vertical", "strength", "hands", "stamina", "hustle", "passing", "steal", "block", "offensiveconsistency", "defensiveconsistency"];

                for (let i = 0; i < ratings_to_update.length; i++) {

                    if ((scoring_array.indexOf(ratings_to_update[i]) > -1)) {

                        card.ratings[ratings_to_update[i]].value = player.ratings[ratings_to_update[i]].value;

                    } else {

                        card.ratings[ratings_to_update[i]] = player.ratings[ratings_to_update[i]];

                    }
                }

                card.overall = calculateRatings(card).overall;
            }

            removeRecord("collection", card.id);
            addRecord("collection", card);

        }

    });

}

function loadSettings() {

    let btn = document.getElementById("settings-promocode-submit");

    btn.addEventListener("click", function() {

        let input = document.getElementById("settings-promocode-input-box").value.toLowerCase();

        if (input == "unlockall") {

            clearTable("collection");

            for (let i = 0; i < players_json.length; i++) {

                let player = new Player(players_json[i]);
                player = initializeCardStats(player);
                player.new = false;
                addRecord("collection", player);

            }

        } else {
            console.log("Incorrect code.")
        }

    });

}

/* Function loads the items inside the shop based on shop_json
@params {} none */
function loadShop() {

    // Get all records in shop table
    fetchTable("shop", function(array) {

        let shop = array;

        // Clear div inside shop
        let shop_shelves = document.getElementById("shop-shelves");
        shop_shelves.innerHTML = "";

        // Iterate through items inside shop
        for (let i = 0; i < shop.length; i++) {

            let shop_row = document.createElement("div");
            shop_row.id = "shop-row-" + i;
            shop_row.className = "shop-row";
            shop_shelves.appendChild(shop_row);

            let shop_img_div = document.createElement("div");
            shop_img_div.id = "shop-img-div-" + i;
            shop_img_div.className = "shop-img-div";
            shop_row.appendChild(shop_img_div);

            let shop_img = document.createElement("img");
            shop_img.src = "../nbaxdesign/assets/images/store/" + shop[i].filename + ".png";
            shop_img.id = "shop-img-div-img-" + i;
            shop_img.className = "shop-img-div-img";
            shop_img_div.appendChild(shop_img);

            let shop_info = document.createElement("div");
            shop_info.id = "shop-info-" + i;
            shop_info.className = "shop-info";
            shop_row.appendChild(shop_info);

            let shop_list_div = document.createElement("div");
            shop_list_div.id = "shop-list-div-" + i;
            shop_list_div.className = "shop-list-div shop-info-row";
            shop_info.appendChild(shop_list_div);

            let shop_list_btn = document.createElement("div");
            shop_list_btn.id = "shop-list-btn-" + i;
            shop_list_btn.className = "shop-list-btn";
            shop_list_div.appendChild(shop_list_btn);
            shop_list_btn.innerHTML = "Catalog";

            let shop_price_div = document.createElement("div");
            shop_price_div.id = "shop-price-div-" + i;
            shop_price_div.className = "shop-price-div shop-info-row";
            shop_info.appendChild(shop_price_div);

            let shop_price = document.createElement("div");
            shop_price.id = "shop-price-" + i;
            shop_price.className = "shop-price";
            shop_price_div.appendChild(shop_price);
            shop_price.innerHTML = shop[i].price + "$";

            let shop_buy_div = document.createElement("div");
            shop_buy_div.id = "shop-buy-div-" + i;
            shop_buy_div.className = "shop-buy-div shop-info-row";
            shop_info.appendChild(shop_buy_div);

            let shop_buy_btn = document.createElement("div");
            shop_buy_btn.id = "shop-buy-btn-" + i;
            shop_buy_btn.className = "shop-buy-btn";
            shop_buy_div.appendChild(shop_buy_btn);
            shop_buy_btn.innerHTML = "Buy";

            shop_buy_btn.addEventListener("click", function() {

                buyItem(shop[i].content, 9, shop[i].price);

            });

        }

    });

}

function buyItem(ids, num, price) {

    fetchTable("collection", function(array) {

        let overlay = document.getElementById("shop-overlay");
        overlay.style.display = "flex";
        overlay.innerHTML = "";

        let overlay_container = document.createElement("div");
        overlay_container.id = "shop-overlay-main-container";
        overlay_container.className = "single-showcase";
        overlay.appendChild(overlay_container);

        let rewards = [];
        let collection = array;
        let open_speed = 1000;

        for (let i = 0; i < num; i++) {

            let random_idx = randomIntFromInterval(0, ids.length - 1);
            let random_card_id = ids[random_idx];
            let random_card = players_json[parseInt(random_card_id) - 1];

            let obj = {
                "id": random_card.id,
                "count": 1,
                "card": random_card
            };

            setTimeout(function() {

                overlay_container.innerHTML = "";

                let box = document.createElement("div");
                box.id = "shop-overlay-single-showcase-container-card-box";
                overlay_container.appendChild(box);

                let text = document.createElement("div");
                text.id = "shop-overlay-single-showcase-container-card-box-text";
                box.appendChild(text);
                text.innerHTML = "Card " + (i + 1) + " of " + num;

                let image = document.createElement("div");
                image.id = "shop-overlay-single-showcase-container-card-box-image";
                box.appendChild(image);

                let img = document.createElement("img");
                img.src = "assets/images/cards/" + random_card.image + "_" + random_card.id + "_card.png";
                img.id = "shop-overlay-single-showcase-container-card-box-image-img-" + (i + 1);
                image.appendChild(img);

            }, open_speed * i);

            let exists = false;
            if (rewards.length != 0) {
                for (let j = 0; j < rewards.length; j++) {
                    if (rewards[j].id == obj.id) {
                        exists = true;
                        rewards[j].count++;
                    }
                }
                if (!exists) {
                    rewards.push(obj)
                }
            } else {
                rewards.push(obj);
            }
        }

        setTimeout(function() {

            overlay_container.innerHTML = "";
            overlay_container.className = "summary-showcase";

            let row = document.createElement("div");
            row.id = "shop-overlay-summary-row";
            row.className = "shop-overlay-summary-row";
            overlay_container.appendChild(row);

            let collect = document.createElement("div");
            collect.id = "shop-overlay-summary-collect";
            collect.className = "shop-overlay-summary-collect";
            overlay_container.appendChild(collect);

            let collect_btn = document.createElement("div");
            collect_btn.id = "shop-overlay-summary-collect";
            collect_btn.className = "action_btn";
            collect.appendChild(collect_btn);
            collect_btn.innerHTML = "Collect";
            collect_btn.addEventListener("click", function() {

                let overlay = document.getElementById("shop-overlay");
                overlay.style.display = "none";
                displaySpecificPage("shop-container");
                loadShop();

            });

            for (let i = 0; i < rewards.length; i++) {

                let container = document.createElement("div")
                container.id = "shop-overlay-summary-card-container-" + (i + 1);
                container.className = "shop-overlay-summary-card-container";
                row.appendChild(container);

                let img = document.createElement("img");
                img.src = "assets/images/cards/" + rewards[i].card.image + "_" + rewards[i].card.id + "_card.png";
                img.id = "shop-overlay-summary-card-container-img-" + (i + 1);
                container.appendChild(img);

                let count = document.createElement("div");
                count.id = "shop-overlay-summary-card-container-count-" + (i + 1);
                count.className = "shop-overlay-summary-card-container-count";
                container.appendChild(count);
                count.innerHTML = "x" + rewards[i].count;

            }
        }, open_speed * num);

        console.log(rewards);

        for (let x = 0; x < rewards.length; x++) {
            fetchRecord("collection", rewards[x].id, function(card) {

                let new_card;

                if (card != undefined) {
                    console.log(`${card.first} ${card.last} (${card.id}) already exists.`);
                    card.count += rewards[x].count;
                    removeRecord("collection", card.id);
                    addRecord("collection", card);
                } else {
                    console.log(`${rewards[x].card.first} ${rewards[x].card.last} (${rewards[x].card.id}) doesn't exist.`);
                    new_card = new Player(rewards[x].card);
                    new_card.count = rewards[x].count;
                    new_card = initializeCardStats(new_card);
                    addRecord("collection", new_card);
                }

            });
        }

    });

    // Subtract price from total amount
    fetchRecord("userdata", "0001", function(summary) {

        let updated_summary;

        if (summary != undefined) {
            console.log("Initial amount: " + summary.totalcoins);
            let updated_summary = summary;
            updated_summary.totalcoins -= price;
            console.log("Price: " + price);
            console.log("Final amount: " + updated_summary.totalcoins);
            removeRecord("userdata", "0001");
            addRecord("userdata", updated_summary);

        } else {
            console.log("Error! User summary doesn't exist!");
        }

    });


}

function initializeCardStats(card) {

    console.log("Initializing stats");

    let stats = ["ast", "blk", "cpustr", "dd", "dreb", "fga", "fga3", "fgm", "fta", "ftm", "gp", "gs", "l", "min", "oreb", "pf", "pm", "potg", "pts", "reb", "stl", "td", "tov", "usrstr", "w"];

    card.stats = {};
    card.new = true;

    for (let i = 0; i < stats.length; i++) {

        card.stats[stats[i]] = 0;

    }

    return (card);

}

/* Load collection */
function loadCollection() {

    console.log("Loading collection");

    let collection_container = document.getElementById("collection-container");
    let back_to_top = document.createElement("div");
    back_to_top.id = "collection-back-to-top";
    collection_container.appendChild(back_to_top);
    back_to_top.innerHTML = "Back to Top";
    back_to_top.addEventListener("click", function() {
        document.getElementById("collection-tools").scrollIntoView();
    });

    let collection_content = document.getElementById("collection-content");
    back_to_top.className = "collection-back-to-top-hide";
    collection_content.addEventListener("scroll", function() {
        let y = (window.pageYOffset || collection_content.scrollTop) - (collection_content.clientTop || 0);
        if (y >= 1000) {
            back_to_top.className = "collection-back-to-top-show";
        } else {
            back_to_top.className = "collection-back-to-top-hide";
        }
    });

    // Fetch user related data
    fetchRecord("userdata", "0001", function(summary) {

        // Fetch all cards in collection
        fetchTable("collection", function(array) {

            // Sort collection based on current selected sorting
            let collection = array;
            collection.sort(function compare(a, b) {

                if (a[summary.sort] < b[summary.sort])
                    return -1;
                if (a[summary.sort] > b[summary.sort])
                    return 1;
                return 0;

            });

            // If descending, then reverse sorting
            if (summary.order == "descending") {
                collection.reverse();
            }

            // Get sort divs and update value
            let sort_text = document.getElementById("collection-sort-dropdown-text");
            sort_text.innerHTML = summary.sort.toUpperCase();
            let sort_order = document.getElementById("collection-sort-dropdown-button");
            if (summary.order == "ascending") {
                sort_order.innerHTML = "<i class='fas fa-sort-alpha-down'></i>";
            } else {
                sort_order.innerHTML = "<i class='fas fa-sort-alpha-up'></i>";
            }

            // Add event listener to sort button
            let sort_btn = document.getElementById("collection-sort");
            sort_btn.addEventListener("click", function() {

                // Display sorting overlay
                let overlay = document.getElementById("collection-overlay");
                overlay.style.display = "flex";
                overlay.innerHTML = ""

                // Create div for sort container
                let container = document.createElement("div");
                container.id = "collection-overlay-sort-container";
                container.className = "collection-overlay-container";
                overlay.appendChild(container);

                // Create div for sort header
                let header = document.createElement("div");
                header.id = "collection-overlay-sort-header";
                header.className = "collection-overlay-header";
                container.appendChild(header);

                // Create div for sort back
                let header_back = document.createElement("div");
                header_back.id = "collection-overlay-sort-header-back";
                header_back.className = "collection-overlay-header-back";
                header.appendChild(header_back);
                header_back.innerHTML = "<<";
                header_back.addEventListener("click", function() {
                    overlay.style.display = "none";
                });

                // Create div for sort header text
                let header_text = document.createElement("div");
                header_text.id = "collection-overlay-sort-header-text";
                header_text.className = "collection-overlay-header-text";
                header.appendChild(header_text);
                header_text.innerHTML = "SORT BY";

                // Create div for sort content
                let content = document.createElement("div");
                header.id = "collection-overlay-sort-content";
                content.className = "collection-overlay-content";
                container.appendChild(content);

                // Initialize sorting options
                let sort_options = ["overall", "first", "last", "team", "season", "salary", "weight", "number", "country", "fgaaverage"];

                // Iterate through options
                for (let i = 0; i < sort_options.length; i++) {

                    // Create div for sort option row
                    let row = document.createElement("div");
                    row.id = "collection-overlay-sort-row-" + i;
                    row.className = "collection-overlay-sort-row";
                    content.appendChild(row);
                    row.innerHTML = capitalize(sort_options[i]);

                    // If current sorting option
                    if (summary.sort == sort_options[i]) {

                        // Set color to green
                        row.style.background = "lightgreen";

                        // Add sorting icon
                        let sort_icon = document.createElement("div");
                        sort_icon.id = "collection-overlay-sort-row-icon";
                        row.appendChild(sort_icon);

                        if (summary.order == "ascending") {
                            sort_icon.innerHTML = "<i class='fas fa-sort-alpha-down'></i>";
                        } else {
                            sort_icon.innerHTML = "<i class='fas fa-sort-alpha-up'></i>";
                        }

                    }

                    // Add event listener to sort option
                    row.addEventListener("click", function() {

                        // Fetch user related data
                        fetchRecord("userdata", "0001", function(summary) {

                            // Update summary sort
                            let new_summary = summary;

                            if (summary.sort == sort_options[i]) {
                                if (summary.order == "ascending") {
                                    new_summary.order = "descending";
                                } else {
                                    new_summary.order = "ascending";
                                }
                            } else {
                                new_summary.sort = sort_options[i];
                                new_summary.order = "ascending";
                            }

                            // Update user related data
                            removeRecord("userdata", "0001");
                            addRecord("userdata", new_summary);

                            // Close sort overlay
                            overlay.style.display = "none";

                            // Reload collection
                            loadCollection();

                        });
                    });
                }
            });

            // Update collection progress
            let found = collection.length;
            let total = players_json.length;
            document.getElementById("collection-progress-bar-text").innerHTML = found + " / " + total;
            document.getElementById("collection-progress-bar-fill").style.width = (found / total * 100) + "%";

            collection = subsetCollection(collection);
            let collection_cards = document.getElementById("collection-cards");
            collection_cards.innerHTML = "";
            for (let i = 0; i < collection.length; i++) {

                let id = collection[i].id;

                let row = document.createElement("div");
                row.id = "collection-row-" + id;
                row.className = "collection-row";
                collection_cards.appendChild(row);

                row.addEventListener("click", function() {
                    displaySpecificPage("card-stats-container");
                    loadCardDetails(collection[i].id);
                });

                let img_div = document.createElement("div");
                img_div.id = "collection-img-" + id;
                img_div.className = "collection-img";
                row.appendChild(img_div);

                let img = document.createElement("img");
                img.src = "assets/images/thumbs/" + collection[i].image + "_" + collection[i].id + ".png";

                let img_overlay = document.createElement("div");
                img_overlay.id = "collection-img-overlay-" + id;
                img_overlay.className = "collection-img-overlay";

                let new_icon = document.createElement("div");
                new_icon.id = "collection-img-overlay-icon-" + id;
                new_icon.className = "collection-img-overlay-icon";
                img_overlay.appendChild(new_icon);
                new_icon.innerHTML = "NEW";

                img_div.appendChild(img);

                if (collection[i].new == true) {
                    img_div.appendChild(img_overlay);
                }

                let description = document.createElement("div");
                description.id = "collection-description-" + id;
                description.className = "collection-description";
                row.appendChild(description);
                description.style.background = collection[i].color2;
                description.style.color = collection[i].color3;

                let description_box = document.createElement("div");
                description_box.id = "collection-description-box-" + id;
                description_box.className = "collection-description-box";
                description.appendChild(description_box);

                let descr_row_1 = document.createElement("div");
                descr_row_1.id = "collection-description-row-1";
                descr_row_1.className = "collection-description-row";
                description_box.appendChild(descr_row_1);
                descr_row_1.innerHTML = collection[i].first + " " + collection[i].last;

                if ((collection[i].first.length + collection[i].last.length) > 15) {
                    descr_row_1.style.fontSize = "81%";
                }

                let descr_row_2 = document.createElement("div");
                descr_row_2.id = "collection-description-row-2";
                descr_row_2.className = "collection-description-row";
                description_box.appendChild(descr_row_2);
                descr_row_2.innerHTML = collection[i].position;

                let descr_row_3 = document.createElement("div");
                descr_row_3.id = "collection-description-row-3";
                descr_row_3.className = "collection-description-row";
                description_box.appendChild(descr_row_3);
                descr_row_3.innerHTML = collection[i].team;

                let stats = document.createElement("div");
                stats.id = "collection-stats-" + id;
                stats.className = "collection-stats";
                row.appendChild(stats);
                stats.style.background = collection[i].color2;

                let rating = document.createElement("div");
                rating.id = "collection-rating-" + id;
                rating.className = "collection-rating";
                stats.appendChild(rating);

                let rating_box = document.createElement("div");
                rating_box.id = "collection-rating-box-" + id;
                rating_box.className = "collection-rating-box";
                rating.appendChild(rating_box);
                let rating_obj = calculateRatings(collection[i]);
                rating_box.innerHTML = Math.round(rating_obj.overall);
                rating_box.style.background = getRatingColor(Math.round(rating_obj.overall));

                let count = document.createElement("div");
                count.id = "collection-count-" + id;
                count.className = "collection-count";
                stats.appendChild(count);

                let count_box = document.createElement("div");
                count_box.id = "collection-count-box-" + id;
                count_box.className = "collection-count-box";
                count.appendChild(count_box);

                let count_fill = document.createElement("div");
                count_fill.id = "collection-count-fill-" + id;
                count_fill.className = "collection-count-fill";
                count_box.appendChild(count_fill);
                let cnt = collection[i].count / 20 * 100;
                if (cnt > 100) {
                    cnt = 100
                };
                count_fill.style.width = cnt + "%";

                let count_text = document.createElement("div");
                count_text.id = "collection-count-text-" + id;
                count_text.className = "collection-count-text";
                count_box.appendChild(count_text);
                count_text.innerHTML = `${collection[i].count}/20`;

            }

        });

    });
}

function subsetCollection(collection) {

    let input = document.getElementById("collection-search-input-box").value.toLowerCase();
    let subset = [];

    for (let i = 0; i < collection.length; i++) {

        let first = collection[i].first.toLowerCase();
        let last = collection[i].last.toLowerCase();
        let name = first + " " + last;
        let team = collection[i].team.toLowerCase();

        if (input == "" | (first.indexOf(input) > -1) | (last.indexOf(input) > -1) | (team.indexOf(input) > -1) | (name.indexOf(input) > -1)) {

            subset.push(collection[i]);

        }
    }

    return (subset);

}

function loadCardDetails(id) {

    let back_btn = document.getElementById("card-stats-header-back");
    back_btn.addEventListener("click", function() {
        displaySpecificPage("collection-container");
        loadCollection();
    });

    let box = document.getElementById("card-stats-content");
    box.innerHTML = "";

    fetchRecord("collection", id, function(card) {

        if (card.type == "player") {

            card.new = false;
            removeRecord("collection", card.id);
            addRecord("collection", card);

            let sections = ["Card Info", "Card Upgrade", "Card Stats"];

            for (let i = 0; i < sections.length; i++) {

                let sct = document.createElement("div");
                sct.id = "card-stats-section-" + i;
                sct.className = "card-stats-section";
                box.appendChild(sct);

                let subtitle = document.createElement("div");
                subtitle.id = "card-stats-subtitle-" + i;
                subtitle.className = "card-stats-subtitle header-subtitle";
                sct.appendChild(subtitle);
                subtitle.style.background = card.color3;
                subtitle.style.color = card.color2;

                let text = document.createElement("div");
                text.id = "card-stats-subtitle-text-" + i;
                text.className = "card-stats-subtitle header-subtitle-text";
                subtitle.appendChild(text);
                text.innerHTML = sections[i].toUpperCase();

                let content = document.createElement("div");
                content.id = "card-stats-content-" + i;
                content.className = "card-stats-content";
                sct.appendChild(content);

            }

            /* SECTION 0 - CARD INFO, PICTURE, SELECTION */

            let section_0 = document.getElementById("card-stats-content-0");
            section_0.style.backgroundImage = "linear-gradient(" + card.color2 + ", " + card.color1 + ")";

            let primary_stats = document.createElement("div");
            primary_stats.id = "card-stats-primary-stats";
            section_0.appendChild(primary_stats);

            let primary_left = document.createElement("div");
            primary_left.id = "card-stats-primary-stats-left";
            primary_stats.appendChild(primary_left);

            let rating_box = document.createElement("div");
            rating_box.id = "card-stats-rating-box";
            rating_box.className = "card-stats-box";
            primary_left.appendChild(rating_box);

            let rating_title = document.createElement("div");
            rating_title.id = "card-stats-rating-box-title";
            rating_title.className = "card-stats-box-title";
            rating_box.appendChild(rating_title);
            rating_title.innerHTML = "RATING";

            let rating_text = document.createElement("div");
            rating_text.id = "card-stats-rating-box-text";
            rating_text.className = "card-stats-box-text";
            rating_box.appendChild(rating_text);
            let rating_obj = calculateRatings(card);
            rating_text.innerHTML = Math.round(rating_obj.overall);

            rating_box.style.background = getRatingColor(Math.round(rating_obj.overall));

            console.log(rating_obj.overall);

            let primary_right = document.createElement("div");
            primary_right.id = "card-stats-primary-stats-right";
            primary_stats.appendChild(primary_right);

            let row_1 = document.createElement("div");
            row_1.id = "card-stats-primary-stats-row-1";
            row_1.className = "card-stats-primary-stats-row";
            primary_right.appendChild(row_1);

            // Level
            let level_box = document.createElement("div");
            level_box.id = "card-stats-level-box";
            level_box.className = "card-stats-box";
            row_1.appendChild(level_box);

            let level_title = document.createElement("div");
            level_title.id = "card-stats-level-box-title";
            level_title.className = "card-stats-box-title";
            level_box.appendChild(level_title);
            level_title.innerHTML = "Level";

            let level_text = document.createElement("div");
            level_text.id = "card-stats-level-box-text";
            level_text.className = "card-stats-box-text";
            level_box.appendChild(level_text);
            level_text.innerHTML = card.level;

            // Salary
            let salary_box = document.createElement("div");
            salary_box.id = "card-stats-salary-box";
            salary_box.className = "card-stats-box";
            row_1.appendChild(salary_box);

            let salary_title = document.createElement("div");
            salary_title.id = "card-stats-salary-box-title";
            salary_title.className = "card-stats-box-title";
            salary_box.appendChild(salary_title);
            salary_title.innerHTML = "Salary";

            let salary_text = document.createElement("div");
            salary_text.id = "card-stats-salary-box-text";
            salary_text.className = "card-stats-box-text";
            salary_box.appendChild(salary_text);
            salary_text.innerHTML = card.salary + " M";

            let row_2 = document.createElement("div");
            row_2.id = "card-stats-primary-stats-row-2";
            row_2.className = "card-stats-primary-stats-row";
            primary_right.appendChild(row_2);

            // Height
            let height_box = document.createElement("div");
            height_box.id = "card-stats-height-box";
            height_box.className = "card-stats-box";
            row_2.appendChild(height_box);

            let height_title = document.createElement("div");
            height_title.id = "card-stats-height-box-title";
            height_title.className = "card-stats-box-title";
            height_box.appendChild(height_title);
            height_title.innerHTML = "Height";

            let height_text = document.createElement("div");
            height_text.id = "card-stats-height-box-text";
            height_text.className = "card-stats-box-text";
            height_box.appendChild(height_text);
            height_text.innerHTML = card.height;

            // Weight
            let weight_box = document.createElement("div");
            weight_box.id = "card-stats-weight-box";
            weight_box.className = "card-stats-box";
            row_2.appendChild(weight_box);

            let weight_title = document.createElement("div");
            weight_title.id = "card-stats-weight-box-title";
            weight_title.className = "card-stats-box-title";
            weight_box.appendChild(weight_title);
            weight_title.innerHTML = "Weight";

            let weight_text = document.createElement("div");
            weight_text.id = "card-stats-weight-box-text";
            weight_text.className = "card-stats-box-text";
            weight_box.appendChild(weight_text);
            weight_text.innerHTML = card.weight;

            // Country
            let country_box = document.createElement("div");
            country_box.id = "card-stats-country-box";
            country_box.className = "card-stats-box";
            row_2.appendChild(country_box);

            let country_title = document.createElement("div");
            country_title.id = "card-stats-country-box-title";
            country_title.className = "card-stats-box-title";
            country_box.appendChild(country_title);
            country_title.innerHTML = "Country";

            let country_text = document.createElement("div");
            country_text.id = "card-stats-country-box-text";
            country_text.className = "card-stats-box-text";
            country_box.appendChild(country_text);
            country_text.innerHTML = card.country;

            // Card image

            let card_image = document.createElement("div");
            card_image.id = "card-stats-card-image";
            section_0.appendChild(card_image);

            let img_frame = document.createElement("div");
            img_frame.id = "card-stats-card-image-frame";
            card_image.appendChild(img_frame);

            let img = document.createElement("img");
            img.src = "assets/images/cards/" + card.image + "_" + card.id + "_card.png";
            img_frame.appendChild(img);

            // Add to deck button

            let select_container = document.createElement("div");
            select_container.id = "card-stats-card-select-container";
            section_0.appendChild(select_container);

            let select_btn = document.createElement("div");
            select_btn.id = "card-stats-card-select-button";
            select_btn.className = "action_btn";
            select_container.appendChild(select_btn);
            select_btn.innerHTML = "SELECT";
            select_btn.addEventListener("click", function() {

                displaySpecificPage("team-container");
                document.getElementById("team-overlay").style.display = "block";

                let position_array = ["PG", "SG", "SF", "PF", "C"];
                let starters_bench_array = ["starters", "bench"];

                let pos_string = card.position;
                pos_array = pos_string.split("/");

                // Get all records in shop table
                fetchRecord("userdata", "0001", function(summary) {

                    let idx = summary.team.toString();

                    fetchRecord("teams", idx, function(team) {

                        let overlay = document.getElementById("team-overlay");
                        overlay.innerHTML = "";

                        for (let x = 0; x < starters_bench_array.length; x++) {

                            let header = document.createElement("div");
                            header.id = "select-player-header-" + starters_bench_array[x];
                            header.className = "team-section-header";
                            overlay.appendChild(header);
                            header.innerHTML = starters_bench_array[x];

                            for (let i = 0; i < pos_array.length; i++) {

                                let pos_index = position_array.indexOf(pos_array[i]);

                                let card_replace = team.players[pos_index + (x * 5)];

                                let row = document.createElement("div")
                                row.id = "select-player-row-" + starters_bench_array[x] + "-" + i;
                                row.className = "select-player-row";
                                overlay.appendChild(row);

                                let container = document.createElement("div");
                                container.id = "select-player-row-container-" + starters_bench_array[x] + "-" + i;
                                container.className = "team-row-container";
                                row.appendChild(container);

                                let position = document.createElement("div");
                                position.id = "select-player-row-position-" + starters_bench_array[x] + "-" + i;
                                position.className = "team-position";
                                container.appendChild(position);
                                position.innerHTML = pos_array[i];

                                let image = document.createElement("div");
                                image.id = "select-player-row-image-" + starters_bench_array[x] + "-" + i;
                                image.className = "select-player-image";
                                container.appendChild(image);

                                let description = document.createElement("div");
                                description.id = "select-player-row-description-" + starters_bench_array[x] + "-" + i;
                                description.className = "team-description";
                                container.appendChild(description);

                                let description_box = document.createElement("div");
                                description_box.id = "select-player-description-box-" + id;
                                description_box.className = "collection-description-box";
                                description.appendChild(description_box);

                                let descr_row_1 = document.createElement("div");
                                descr_row_1.id = "select-player-description-row-1";
                                descr_row_1.className = "collection-description-row";
                                description_box.appendChild(descr_row_1);

                                let descr_row_2 = document.createElement("div");
                                descr_row_2.id = "select-player-description-row-2";
                                descr_row_2.className = "collection-description-row";
                                description_box.appendChild(descr_row_2);

                                let descr_row_3 = document.createElement("div");
                                descr_row_3.id = "select-player-description-row-3";
                                descr_row_3.className = "collection-description-row";
                                description_box.appendChild(descr_row_3);

                                let rating = document.createElement("div");
                                rating.id = "select-player-row-rating-" + starters_bench_array[x] + "-" + i;
                                rating.className = "team-rating";
                                container.appendChild(rating);

                                if (card_replace == "") {

                                    let add_player = document.createElement("div");
                                    add_player.id = "select-player-row-add-player-" + starters_bench_array[x] + "-" + i;
                                    add_player.className = "team-add-player";
                                    row.appendChild(add_player);
                                    add_player.innerHTML = "ADD PLAYER";

                                } else {

                                    let img = document.createElement("img");
                                    img.id = "select-player-row-image-img-" + starters_bench_array[x] + "-" + i;
                                    img.src = "assets/images/thumbs/" + card_replace.image + "_" + card_replace.id + ".png";
                                    image.appendChild(img);

                                    description.style.background = card_replace.color2;
                                    description.style.color = card_replace.color3;

                                    descr_row_1.innerHTML = card_replace.first + " " + card_replace.last;
                                    descr_row_2.innerHTML = card_replace.position;
                                    descr_row_3.innerHTML = card_replace.team;

                                }


                                row.addEventListener("click", function() {

                                    let comparison_overlay = document.getElementById("select-player-comparison-overlay");

                                    if (comparison_overlay == undefined) {

                                        comparison_overlay = document.createElement("div");
                                        comparison_overlay.id = "select-player-comparison-overlay";
                                        overlay.appendChild(comparison_overlay);

                                    } else {

                                        comparison_overlay.innerHTML = "";

                                    }

                                    comparison_overlay.style.display = "flex";

                                    let comparison_header = document.createElement("div");
                                    comparison_header.id = "select-player-comparison-header";
                                    comparison_header.className = "header-container";
                                    comparison_overlay.appendChild(comparison_header);

                                    let comparison_back = document.createElement("div");
                                    comparison_back.id = "select-player-comparison-back";
                                    comparison_back.className = "header-back";
                                    comparison_header.appendChild(comparison_back);
                                    comparison_back.innerHTML = "<<";

                                    comparison_back.addEventListener("click", function() {
                                        document.getElementById("select-player-comparison-overlay").style.display = "none";
                                    });

                                    let comparison_title = document.createElement("div");
                                    comparison_title.id = "select-player-comparison-title";
                                    comparison_title.className = "header-title";
                                    comparison_header.appendChild(comparison_title);
                                    comparison_title.innerHTML = "PLAYERS COMPARISON";

                                    let comparison_container = document.createElement("div");
                                    comparison_container.id = "select-player-comparison-container";
                                    comparison_overlay.appendChild(comparison_container);

                                    let comparison_image_row = document.createElement("div");
                                    comparison_image_row.id = "select-player-comparison-image-row";
                                    comparison_image_row.className = "select-player-comparison-row";
                                    comparison_container.appendChild(comparison_image_row);

                                    let itm_new = document.createElement("div");
                                    itm_new.id = "select-player-comparison-image-new";
                                    itm_new.className = "select-player-comparison-image";
                                    comparison_image_row.appendChild(itm_new);

                                    let img_new = document.createElement("img");
                                    img_new.id = "select-player-comparison-image-new-img";
                                    img_new.className = "select-player-comparison-image-img";
                                    img_new.src = "assets/images/cards/" + card.image + "_" + card.id + "_card.png";
                                    itm_new.appendChild(img_new);

                                    let itm_new_rating = document.createElement("div");
                                    itm_new_rating.id = "select-player-comparison-new-rating";
                                    itm_new_rating.className = "select-player-comparison-rating";
                                    itm_new.appendChild(itm_new_rating);

                                    let itm_new_rating_box = document.createElement("div");
                                    itm_new_rating_box.id = "select-player-comparison-new-rating-box";
                                    itm_new_rating_box.className = "select-player-comparison-rating-box collection-rating-box";
                                    itm_new_rating.appendChild(itm_new_rating_box);

                                    itm_new_rating_box.innerHTML = Math.round(calculateRatings(card).overall);
                                    itm_new_rating_box.style.background = getRatingColor(Math.round(calculateRatings(card).overall));

                                    let itm_replace = document.createElement("div");
                                    itm_replace.id = "select-player-comparison-replace-container";
                                    itm_replace.className = "select-player-comparison-replace";
                                    comparison_image_row.appendChild(itm_replace);

                                    let replace_btn = document.createElement("div");
                                    replace_btn.id = "select-player-comparison-replace-button";
                                    replace_btn.className = "action_btn";
                                    itm_replace.appendChild(replace_btn);
                                    replace_btn.innerHTML = "Replace";

                                    let itm_old = document.createElement("div");
                                    itm_old.id = "select-player-comparison-image-old";
                                    itm_old.className = "select-player-comparison-image";
                                    comparison_image_row.appendChild(itm_old);

                                    let itm_old_rating = document.createElement("div");
                                    itm_old_rating.id = "select-player-comparison-old-rating";
                                    itm_old_rating.className = "select-player-comparison-rating";
                                    itm_old.appendChild(itm_old_rating);

                                    let itm_old_rating_box = document.createElement("div");
                                    itm_old_rating_box.id = "select-player-comparison-old-rating-box";
                                    itm_old_rating_box.className = "select-player-comparison-rating-box collection-rating-box";
                                    itm_old_rating.appendChild(itm_old_rating_box);

                                    if (card_replace == "") {
                                        itm_old_rating_box.innerHTML = "NA";
                                        itm_old_rating_box.style.background = "lightgrey";
                                    } else {
                                        itm_old_rating_box.innerHTML = Math.round(calculateRatings(card_replace).overall);
                                        itm_old_rating_box.style.background = getRatingColor(Math.round(calculateRatings(card_replace).overall));
                                    }

                                    let img_old;
                                    if (card_replace == "") {
                                        img_old = document.createElement("div");
                                        img_old.id = "select-player-comparison-image-old-img";
                                        img_old.className = "select-player-comparison-image-img";
                                        img_old.innerHTML = "NA"
                                        img_old.style.border = "solid 1px grey";
                                    } else {
                                        img_old = document.createElement("img");
                                        img_old.id = "select-player-comparison-image-old-img";
                                        img_old.className = "select-player-comparison-image-img";
                                        img_old.src = "assets/images/cards/" + card_replace.image + "_" + card_replace.id + "_card.png";
                                    }
                                    itm_old.appendChild(img_old);

                                    let stats_array = [off_stats_json, def_stats_json, phys_stats_json];
                                    let stats_array_labels = ["Offense", "Defense", "Physical"];

                                    for (let i = 0; i < stats_array.length; i++) {

                                        let header = document.createElement("div");
                                        header.id = "select-player-comparison-" + i + "-row";
                                        header.className = "select-player-comparison-stats-row-header";
                                        comparison_container.appendChild(header);
                                        header.innerHTML = stats_array_labels[i];

                                        for (let j = 0; j < stats_array[i].length; j++) {

                                            let row = document.createElement("div");
                                            row.id = "select-player-comparison-" + stats_array[i][j] + "-row";
                                            row.className = "select-player-comparison-stats-row";
                                            comparison_container.appendChild(row);

                                            let itm_left_light = document.createElement("div");
                                            itm_left_light.id = "select-player-comparison-left-light-" + stats_array[i][j];
                                            itm_left_light.className = "select-player-comparison-left-light";
                                            row.appendChild(itm_left_light);

                                            let itm_left = document.createElement("div");
                                            itm_left.id = "select-player-comparison-left-" + stats_array[i][j];
                                            itm_left.className = "select-player-comparison-left";
                                            row.appendChild(itm_left);

                                            let itm_left_box = document.createElement("div");
                                            itm_left_box.id = "select-player-comparison-left-box-" + stats_array[i][j];
                                            itm_left_box.className = "select-player-comparison-left-box";
                                            itm_left.appendChild(itm_left_box);
                                            itm_left_box.innerHTML = getAttributeRating(card, stats_array[i][j].attribute);
                                            itm_left_box.style.background = getRatingColor(getAttributeRating(card, stats_array[i][j].attribute));


                                            let itm_middle = document.createElement("div");
                                            itm_middle.id = "select-player-comparison-middle-" + stats_array[i][j];
                                            itm_middle.className = "select-player-comparison-middle";
                                            row.appendChild(itm_middle);
                                            itm_middle.innerHTML = stats_array[i][j].title;

                                            let itm_right = document.createElement("div");
                                            itm_right.id = "select-player-comparison-right-" + stats_array[i][j];
                                            itm_right.className = "select-player-comparison-right";
                                            row.appendChild(itm_right);

                                            let itm_right_box = document.createElement("div");
                                            itm_right_box.id = "select-player-comparison-right-box-" + stats_array[i][j];
                                            itm_right_box.className = "select-player-comparison-right-box";
                                            itm_right.appendChild(itm_right_box);
                                            if (card_replace == "") {
                                                itm_right_box.innerHTML = "NA";
                                                itm_right_box.style.background = "lightgrey";
                                            } else {
                                                itm_right_box.innerHTML = getAttributeRating(card_replace, stats_array[i][j].attribute);
                                                itm_right_box.style.background = getRatingColor(getAttributeRating(card_replace, stats_array[i][j].attribute));
                                            }

                                            let itm_right_light = document.createElement("div");
                                            itm_right_light.id = "select-player-comparison-right-light-" + stats_array[i][j];
                                            itm_right_light.className = "select-player-comparison-right-light";
                                            row.appendChild(itm_right_light);

                                            if (card_replace == "") {

                                                itm_left_light.style.background = "lightgreen";

                                            } else {

                                                if (getAttributeRating(card, stats_array[i][j].attribute) > getAttributeRating(card_replace, stats_array[i][j].attribute)) {

                                                    itm_left_light.style.background = "lightgreen";

                                                } else if (getAttributeRating(card, stats_array[i][j].attribute) < getAttributeRating(card_replace, stats_array[i][j].attribute)) {

                                                    itm_right_light.style.background = "lightgreen";

                                                } else {

                                                    itm_left_light.style.background = "lightyellow";
                                                    itm_right_light.style.background = "lightyellow";

                                                }
                                            }

                                        }
                                    }

                                    replace_btn.addEventListener("click", function() {

                                        let players_index = pos_index;

                                        if (x == 1) {

                                            players_index += 5;

                                        }

                                        fetchRecord("teams", idx, function(team) {

                                            console.log(card);
                                            team.players[players_index] = card;

                                            removeRecord("teams", team.id);
                                            addRecord("teams", team);

                                            loadTeams();

                                            overlay.style.display = "none";
                                            comparison_overlay.style.display = "none";

                                        });

                                    })

                                });

                            }

                        }

                    });

                });

            });

            /* SECTION 1 - CARD UPGRADE */

            let section_1 = document.getElementById("card-stats-content-1");
            section_1.style.background = card.color1;

            let upgrade_container = document.createElement("div");
            upgrade_container.id = "card-stats-upgrade-container";
            section_1.appendChild(upgrade_container);

            let progress = document.createElement("div");
            progress.id = "card-stats-ugprade-progress";
            upgrade_container.appendChild(progress);

            ["cards-collected", "minutes-played"].forEach(function(itm) {

                let box = document.createElement("div");
                box.id = "card-stats-upgrade-" + itm + "-box";
                box.className = "card-stats-box";
                progress.appendChild(box);

                let title = document.createElement("div");
                title.id = "card-stats-upgrade-" + itm + "-box-title";
                title.className = "card-stats-box-title";
                box.appendChild(title);
                title.innerHTML = itm;

                let bar = document.createElement("div");
                bar.id = "card-stats-upgrade-" + itm + "-box-bar";
                bar.className = "card-stats-box-text";
                box.appendChild(bar);

                let fill = document.createElement("div");
                fill.id = "card-stats-upgrade-" + itm + "-box-fill";
                fill.className = "card-stats-box-upgrade-fill";
                bar.appendChild(fill);

                let text = document.createElement("div");
                text.id = "card-stats-upgrade-" + itm + "-box-text";
                text.className = "card-stats-box-upgrade-text";
                bar.appendChild(text);
                text.innerHTML = "1/20";

                if (itm == "cards-collected") {

                    title.innerHTML = "Cards Collected";
                    text.innerHTML = card.count + "/20";
                    fill.style.width = (card.count / 20 * 100) + "%";

                } else if (itm == "minutes-played") {

                    title.innerHTML = "Minutes Played";
                    text.innerHTML = card.stats.min + "/50";
                    fill.style.width = (card.stats.min / 50 * 100) + "%";

                }

            });

            let upgrade_btn = document.createElement("div");
            upgrade_btn.id = "card-stats-card-upgrade-button";
            upgrade_btn.className = "action_btn";
            upgrade_container.appendChild(upgrade_btn);
            upgrade_btn.innerHTML = "UPGRADE";

            /* SECTION 2 - CARD STATS */

            let section_2 = document.getElementById("card-stats-content-2");
            section_2.style.background = card.color1;

            let stats_container = document.createElement("div");
            stats_container.id = "card-stats-stats-container";
            section_2.appendChild(stats_container);

            let stats_box = document.createElement("div");
            stats_box.id = "card-stats-stats-box";
            stats_container.appendChild(stats_box);

            let stats_nav = document.createElement("div");
            stats_nav.id = "card-stats-stats-nav";
            stats_box.appendChild(stats_nav);

            let nav_options = ["offense", "defense", "physical"];

            let stats_nav_left = document.createElement("div");
            stats_nav_left.id = "card-stats-stats-nav-left";
            stats_nav.appendChild(stats_nav_left);
            stats_nav_left.innerHTML = "<<";

            let stats_nav_middle = document.createElement("div");
            stats_nav_middle.id = "card-stats-stats-nav-middle";
            stats_nav.appendChild(stats_nav_middle);
            stats_nav_middle.innerHTML = "Offense";

            let stats_nav_right = document.createElement("div");
            stats_nav_right.id = "card-stats-stats-nav-right";
            stats_nav.appendChild(stats_nav_right);
            stats_nav_right.innerHTML = ">>";

            stats_nav_left.addEventListener("click", function() {
                let current_cat = stats_nav_middle.innerHTML.toLowerCase();
                let current_idx = nav_options.indexOf(current_cat);
                let cat = navigateArray(nav_options, current_idx, -1);
                stats_nav_middle.innerHTML = capitalize(cat);
                displayCardStats(cat);
            });

            stats_nav_right.addEventListener("click", function() {
                let current_cat = stats_nav_middle.innerHTML.toLowerCase();
                let current_idx = nav_options.indexOf(current_cat);
                let cat = navigateArray(nav_options, current_idx, 1);
                stats_nav_middle.innerHTML = capitalize(cat);
                displayCardStats(cat);
            });

            let stats_content = document.createElement("div");
            stats_content.id = "card-stats-stats-content";
            stats_box.appendChild(stats_content);

            function displayCardStats(cat) {

                let stats_json;

                if (cat == "offense") {
                    stats_json = off_stats_json;
                } else if (cat == "defense") {
                    stats_json = def_stats_json;
                } else if (cat == "physical") {
                    stats_json = phys_stats_json;
                } else {
                    console.log("Missing argument");
                }

                stats_content.innerHTML = "";

                for (let i = 0; i < stats_json.length; i++) {

                    let row = document.createElement("div");
                    row.id = "card-stats-stats-content-row-" + i;
                    row.className = "card-stats-stats-content-row";
                    stats_content.appendChild(row);

                    let row_title = document.createElement("div");
                    row_title.id = "card-stats-stats-content-row-title-" + i;
                    row_title.className = "card-stats-stats-content-row-title";
                    row.appendChild(row_title);
                    row_title.innerHTML = stats_json[i].title;

                    let row_rating = document.createElement("div");
                    row_rating.id = "card-stats-stats-content-row-rating-" + i;
                    row_rating.className = "card-stats-stats-content-row-rating";
                    row.appendChild(row_rating);

                    let row_rating_box = document.createElement("div");
                    row_rating_box.id = "card-stats-stats-content-row-rating-box" + i;
                    row_rating_box.className = "card-stats-stats-content-row-rating-box";
                    row_rating.appendChild(row_rating_box);
                    row_rating_box.innerHTML = getAttributeRating(card, stats_json[i].attribute);
                    row_rating_box.style.background = getRatingColor(getAttributeRating(card, stats_json[i].attribute));

                }
            }

            displayCardStats("offense");

            /* SECTION 3 - CARD USAGE */

        }

    });

}


function loadGameModes() {

    let content = document.getElementById("gamemodes-content");
    content.innerHTML = "";

    let modes_array = ["Quick Game", "Campaign"];

    for (let i = 0; i < modes_array.length; i++) {

        let row = document.createElement("div");
        row.id = "gamemodes-row-" + (i + 1);
        row.className = "gamemodes-row";
        content.appendChild(row);
        row.innerHTML = modes_array[i];

        if (modes_array[i] == "Quick Game") {

            row.addEventListener("click", function() {

                displaySpecificPage("play-container");

                let agents = ["usr", "cpu"];

                for (let i = 0; i < agents.length; i++) {

                    let oncourt;
                    if (agents[i] == "usr") {
                        oncourt = document.getElementById("play-sct-3");
                        oncourt.innerHTML = "";
                    } else {
                        oncourt = document.getElementById("play-sct-1");
                        oncourt.innerHTML = "";
                    }

                    for (let j = 0; j < 5; j++) {

                        let player_div = document.createElement("div");
                        player_div.id = "play-" + agents[i] + "-oncourt-player-" + (j + 1);
                        player_div.className = "play-oncourt-player";
                        oncourt.appendChild(player_div);

                        let status = document.createElement("div");
                        status.id = "play-" + agents[i] + "-oncourt-player-status-" + (j + 1);
                        status.className = "play-oncourt-player-status";
                        player_div.appendChild(status);

                        let stamina_bar = document.createElement("div");
                        stamina_bar.id = "play-" + agents[i] + "-oncourt-player-stamina-bar-" + (j + 1);
                        stamina_bar.className = "play-oncourt-player-stamina-bar";
                        status.appendChild(stamina_bar);

                        let stamina_fill = document.createElement("div");
                        stamina_fill.id = "play-" + agents[i] + "-oncourt-player-stamina-fill-" + (j + 1);
                        stamina_fill.className = "play-oncourt-player-stamina-fill";
                        stamina_bar.appendChild(stamina_fill);

                        let pending_sub = document.createElement("div");
                        pending_sub.id = "play-" + agents[i] + "-oncourt-player-pending-sub-" + (j + 1);
                        pending_sub.className = "play-oncourt-player-pending-sub";
                        status.appendChild(pending_sub);

                        let sub_light = document.createElement("div");
                        sub_light.id = "play-" + agents[i] + "-oncourt-player-sub-light-" + (j + 1);
                        sub_light.className = "play-oncourt-player-sub-light";
                        pending_sub.appendChild(sub_light);

                        let player_image = document.createElement("div");
                        player_image.id = "play-" + agents[i] + "-oncourt-player-image-" + (j + 1);
                        player_image.className = "play-oncourt-player-image";
                        player_div.appendChild(player_image);

                    }
                }

                initializePlayStats();

            });

        }

    }

}

function updateNavigation(view) {

    let stats_nav_array = ["play-by-play", "boxscore", "game stats"];

    for (let i = 0; i < stats_nav_array.length; i++) {

        let nav_itm = document.getElementById("play-stats-navigation-itm-" + (i + 1));

        if (view == stats_nav_array[i]) {
            nav_itm.className = "play-stats-navigation-itm play-stats-navigation-itm-active";
        } else {
            nav_itm.className = "play-stats-navigation-itm play-stats-navigation-itm-inactive";
        }
    }

}

function initializePlayStats() {

    // Fetch user related data
    fetchRecord("userdata", "0001", function(summary) {

        // Fetch current team ID (1-5)
        let team_id = summary.team.toString();

        // Fetch team related data based on team ID
        fetchRecord("teams", team_id, function(team) {

            let play_stats_json = {
                "id": "0001",
                "possession": "",
                "possessionNumber": 1,
                "time": 2880,
                "possessionDuration": 0,
                "gameover": 0,
                "overtime": 0,
                "score": {
                    "usr": [0, 0, 0, 0, 0, 0, 0, 0],
                    "cpu": [0, 0, 0, 0, 0, 0, 0, 0]
                },
                "team": {
                    "usr": {
                        "autosub": 1,
                        "roster": [],
                        "timeouts": 7,
                        "substitutions": {
                            "pg": 0,
                            "sg": 0,
                            "sf": 0,
                            "pf": 0,
                            "c": 0
                        }
                    },
                    "cpu": {
                        "autosub": 1,
                        "roster": [],
                        "timeouts": 7,
                        "substitutions": {
                            "pg": 0,
                            "sg": 0,
                            "sf": 0,
                            "pf": 0,
                            "c": 0
                        }
                    },
                },
                "FTshooter": "",
                "view": "boxscore",
                "boxscoreView": "usr",
                "playbyplay": [],
                "gameTracker": {
                    "timesTied": {
                        "count": 0,
                        "lastTied": 0
                    },
                    "leadChanges": {
                        "count": 0,
                        "lastLead": "tie"
                    },
                    "biggestLead": {
                        "usr": 0,
                        "cpu": 0
                    },
                    "longestRun": {
                        "usr": {
                            "maxRun": 0,
                            "currentRun": 0,
                            "lastScore": 0
                        },
                        "cpu": {
                            "maxRun": 0,
                            "currentRun": 0,
                            "lastScore": 0
                        }
                    }
                }
            };

            // Initialize stats navigation
            let nav_container = document.getElementById("play-stats-navigation-container");
            nav_container.innerHTML = "";

            let stats_nav_array = ["play-by-play", "boxscore", "game stats"];

            for (let i = 0; i < stats_nav_array.length; i++) {

                let nav_itm = document.createElement("div");
                nav_itm.id = "play-stats-navigation-itm-" + (i + 1);
                nav_itm.className = "play-stats-navigation-itm";
                nav_container.appendChild(nav_itm);
                nav_itm.innerHTML = capitalize(stats_nav_array[i]);

                nav_itm.addEventListener("click", function() {

                    console.log(stats_nav_array[i]);
                    if (stats_nav_array[i] == "boxscore") {

                        document.getElementById("play-stats-boxscore-container").style.zIndex = 2;
                        document.getElementById("play-stats-play-by-play-container").style.zIndex = 1;
                        document.getElementById("play-stats-game-stats-container").style.zIndex = 1;
                        play_stats_json.view = "boxscore";
                        updateNavigation("boxscore");

                    } else if (stats_nav_array[i] == "play-by-play") {

                        document.getElementById("play-stats-play-by-play-container").style.zIndex = 2;
                        document.getElementById("play-stats-boxscore-container").style.zIndex = 1;
                        document.getElementById("play-stats-game-stats-container").style.zIndex = 1;
                        play_stats_json.view = "play-by-play";
                        updateNavigation("play-by-play");

                    } else if (stats_nav_array[i] == "game stats") {

                        document.getElementById("play-stats-game-stats-container").style.zIndex = 2;
                        document.getElementById("play-stats-boxscore-container").style.zIndex = 1;
                        document.getElementById("play-stats-play-by-play-container").style.zIndex = 1;
                        play_stats_json.view = "game stats";
                        updateNavigation("game stats");

                    }

                });
            }

            updateNavigation("boxscore");

            // Initialize scoreboard
            let agents = ["usr", "cpu"];

            for (let i = 0; i < agents.length; i++) {

                let scoreboard = document.getElementById("play-scoreboard-" + agents[i]);
                scoreboard.innerHTML = "";

                let scoreboard_title = document.createElement("div");
                scoreboard_title.id = "play-scoreboard-" + agents[i] + "-title";
                scoreboard_title.className = "play-scoreboard-title";
                scoreboard.appendChild(scoreboard_title);
                scoreboard_title.innerHTML = agents[i].toUpperCase();

                let scoreboard_score = document.createElement("div");
                scoreboard_score.id = "play-scoreboard-" + agents[i] + "-score";
                scoreboard_score.className = "play-scoreboard-score";
                scoreboard.appendChild(scoreboard_score);
                scoreboard_score.innerHTML = "0";

                let scoreboard_timeouts = document.createElement("div");
                scoreboard_timeouts.id = "play-scoreboard-" + agents[i] + "-timeouts";
                scoreboard_timeouts.className = "play-scoreboard-timeouts";
                scoreboard.appendChild(scoreboard_timeouts);

                for (let j = 0; j < 7; j++) {

                    let scoreboard_timeouts_sct = document.createElement("div");
                    scoreboard_timeouts_sct.id = "play-scoreboard-" + agents[i] + "-timeouts-sct-" + (j + 1);
                    scoreboard_timeouts_sct.className = "play-scoreboard-timeouts-sct";
                    scoreboard_timeouts.appendChild(scoreboard_timeouts_sct);

                    let scoreboard_timeouts_light = document.createElement("div");
                    scoreboard_timeouts_light.id = "play-scoreboard-" + agents[i] + "-timeouts-light-" + (j + 1);
                    scoreboard_timeouts_light.className = "play-scoreboard-timeouts-light";
                    scoreboard_timeouts_sct.appendChild(scoreboard_timeouts_light);
                    scoreboard_timeouts_light.style.background = "#E1C773";

                }
            }

            let time_container = document.getElementById("play-scoreboard-time-period");
            time_container.innerHTML = "";

            let time = document.createElement("div");
            time.id = "play-scoreboard-time";
            time_container.appendChild(time);
            time.innerHTML = "12:00";

            let period = document.createElement("div");
            period.id = "play-scoreboard-period";
            time_container.appendChild(period);
            period.innerHTML = "Period 1";

            let players_to_exclude_from_random = [];

            // Initialize user team
            for (let i = 0; i < team.players.length; i++) {

                let card = team.players[i];
                players_to_exclude_from_random.push(card.id);

                card.gamestats = {};
                card.gamestats.pos = (i + 1);
                card.gamestats.ratings = JSON.parse(JSON.stringify(card.ratings));
                card.gamestats.stats = initializePlayerIngameStats();
                card.gamestats.agent = "usr";

                if (i < 5) {

                    card.gamestats.active = 1;
                    let player_image = document.getElementById("play-usr-oncourt-player-image-" + (i + 1));
                    player_image.innerHTML = "";
                    let img = document.createElement("img");
                    img.src = "assets/images/thumbs/" + card.image + "_" + card.id + ".png";
                    player_image.appendChild(img);

                    let stamina_fill = document.getElementById("play-usr-oncourt-player-stamina-fill-" + (i + 1));
                    stamina_fill.style.width = card.gamestats.ratings.stamina + "%";
                    stamina_fill.style.background = getRatingColor(Math.round(card.gamestats.ratings.stamina));

                } else {

                    card.gamestats.active = 0;

                }

                play_stats_json.team.usr.roster.push(card);

            }

            // Initialize CPU team
            let team_cpu = generateRandomTeam(
                subsetCardPool(players_json, {
                    "position": null,
                    "conference": null,
                    "unlockedlevel": null,
                    "exclude": players_to_exclude_from_random
                })
            );

            // TODO: Not needed in the future, will empty once game is over
            play_stats_json.team.cpu.roster = [];

            for (let i = 0; i < team_cpu.length; i++) {

                card = team_cpu[i];

                card.gamestats = {};
                card.gamestats.pos = (i + 1);
                card.gamestats.ratings = JSON.parse(JSON.stringify(card.ratings));
                card.gamestats.stats = initializePlayerIngameStats();
                card.gamestats.agent = "cpu";

                if (i < 5) {

                    card.gamestats.active = 1;
                    let player_image = document.getElementById("play-cpu-oncourt-player-image-" + (i + 1));
                    player_image.innerHTML = "";
                    let img = document.createElement("img");
                    img.src = "assets/images/thumbs/" + card.image + "_" + card.id + ".png";
                    player_image.appendChild(img);

                    let stamina_fill = document.getElementById("play-cpu-oncourt-player-stamina-fill-" + (i + 1));
                    stamina_fill.style.width = card.gamestats.ratings.stamina + "%";
                    stamina_fill.style.background = getRatingColor(Math.round(card.gamestats.ratings.stamina));

                } else {

                    card.gamestats.active = 0;

                }

                play_stats_json.team.cpu.roster.push(card);


            }

            removeRecord("play", "0001");
            addRecord("play", play_stats_json);

            // Initialize boxscore
            initializeBoxscore("usr");
            initializePlayByPlay();
            initializeGameStats();

        });

    });

    let action_container = document.getElementById("play-action-container");
    action_container.innerHTML = "";

    let gameplan = document.createElement("div");
    gameplan.id = "play-action-gameplan";
    gameplan.className = "play-action-sct";
    action_container.appendChild(gameplan);

    let gameplan_btn = document.createElement("div");
    gameplan_btn.id = "play-action-gameplan-btn";
    gameplan_btn.className = "play-action-sct-btn";
    gameplan.appendChild(gameplan_btn);
    gameplan_btn.innerHTML = "Gameplan";

    gameplan_btn.addEventListener("click", function() {

        displayGameplanMenu();

    });

    let next_possession = document.createElement("div");
    next_possession.id = "play-action-next-possession";
    next_possession.className = "play-action-sct";
    action_container.appendChild(next_possession);

    let next_possession_btn = document.createElement("div");
    next_possession_btn.id = "play-action-next-possession-btn";
    next_possession_btn.className = "play-action-sct-btn";
    next_possession.appendChild(next_possession_btn);
    next_possession_btn.innerHTML = "Play";

    next_possession_btn.addEventListener("click", function() {

        simulateNextPossession();

    });

    document.onkeydown = function(evt) {
        evt = evt || window.event;
        if (evt.keyCode == 78) {
            simulateNextPossession();
        } else if (evt.keyCode == 84) {
            callTimeout("usr");
        }
    };

}

function displayGameplanMenu() {

    let overlay = document.getElementById("play-overlay");
    overlay.innerHTML = "";
    overlay.style.display = "flex";

    let overlay_container = document.createElement("div");
    overlay_container.id = "play-overlay-container";
    overlay.appendChild(overlay_container);

    let overlay_header = document.createElement("div");
    overlay_header.id = "play-overlay-header";
    overlay_container.appendChild(overlay_header);

    let overlay_header_back = document.createElement("div");
    overlay_header_back.id = "play-overlay-header-back";
    overlay_header.appendChild(overlay_header_back);
    overlay_header_back.innerHTML = "<<";
    overlay_header_back.addEventListener("click", function() {
        overlay.style.display = "none";
    });

    let overlay_header_text = document.createElement("div");
    overlay_header_text.id = "play-overlay-header-text";
    overlay_header.appendChild(overlay_header_text);
    overlay_header_text.innerHTML = "Gameplan";

    let overlay_content = document.createElement("div");
    overlay_content.id = "play-overlay-content";
    overlay_container.appendChild(overlay_content);

    let gameplan_options = ["substitutions", "timeout"];

    for (let i = 0; i < gameplan_options.length; i++) {

        let row = document.createElement("div");
        row.id = "play-overlay-sort-row-" + i;
        row.className = "play-overlay-sort-row";
        overlay_content.appendChild(row);
        row.innerHTML = capitalize(gameplan_options[i]);

        if (gameplan_options[i] == "substitutions") {

            row.addEventListener("click", function() {
                displaySubstitutionsMenu();
            });

        } else if (gameplan_options[i] == "timeout") {

            row.addEventListener("click", function() {
                callTimeout("usr");
                overlay.style.display = "none";
            });

        }

    }

}

function displaySubstitutionsMenu() {

    let overlay_container = document.getElementById("play-overlay-container");
    overlay_container.innerHTML = "";

    let overlay_header = document.createElement("div");
    overlay_header.id = "play-overlay-header";
    overlay_container.appendChild(overlay_header);

    let overlay_header_back = document.createElement("div");
    overlay_header_back.id = "play-overlay-header-back";
    overlay_header.appendChild(overlay_header_back);
    overlay_header_back.innerHTML = "<<";
    overlay_header_back.addEventListener("click", function() {
        displayGameplanMenu();
    });

    let overlay_header_text = document.createElement("div");
    overlay_header_text.id = "play-overlay-header-text";
    overlay_header.appendChild(overlay_header_text);
    overlay_header_text.innerHTML = "Substitutions";

    let overlay_content = document.createElement("div");
    overlay_content.id = "play-overlay-content";
    overlay_container.appendChild(overlay_content);

    let message = document.createElement("div");
    message.id = "play-overlay-content-substitutions-message";
    overlay_content.appendChild(message);

    fetchRecord("play", "0001", function(play) {

        let roster = play.team.usr.roster;

        let header = document.createElement("div");
        header.id = "play-overlay-content-substitutions-header";
        overlay_content.appendChild(header);

        for (let i = 0; i < 5; i++) {

            let player_1 = roster[i];
            let player_2 = roster[i + 5];

            let active_player, bench_player;

            if (player_1.gamestats.active == 1) {
                active_player = player_1;
                bench_player = player_2;
            } else {
                active_player = player_2;
                bench_player = player_1;
            }

            let row = document.createElement("div");
            row.id = "play-overlay-content-substitutions-row-" + (i + 1);
            row.className = "play-overlay-content-substitutions-row";
            overlay_content.appendChild(row);

            let active = document.createElement("div");
            active.id = "play-overlay-content-substitutions-row-active-" + (i + 1);
            active.className = "play-overlay-content-substitutions-row-active";
            row.appendChild(active);

            let active_img_box = document.createElement("div");
            active_img_box.id = "play-overlay-content-substitutions-row-active-img-box-" + (i + 1);
            active_img_box.className = "play-overlay-content-substitutions-row-active-img-box";
            active.appendChild(active_img_box);

            let active_img = document.createElement("img");
            active_img.src = "assets/images/thumbs/" + active_player.image + "_" + active_player.id + ".png";
            active_img.id = "play-overlay-content-substitutions-row-active-img-box-img-" + (i + 1);
            active_img.className = "play-overlay-content-substitutions-row-active-img-box-img";
            active_img_box.appendChild(active_img);

            let active_info = document.createElement("div");
            active_info.id = "play-overlay-content-substitutions-row-active-info-" + (i + 1);
            active_info.className = "play-overlay-content-substitutions-row-active-info";
            active.appendChild(active_info);
            active_info.style.background = active_player.color1;

            let sub = document.createElement("div");
            sub.id = "play-overlay-content-substitutions-row-sub-" + (i + 1);
            sub.className = "play-overlay-content-substitutions-row-sub";
            row.appendChild(sub);

            let sub_btn = document.createElement("div");
            sub_btn.id = "play-overlay-content-substitutions-row-sub-btn-" + (i + 1);
            sub_btn.className = "play-overlay-content-substitutions-row-sub-btn";
            sub.appendChild(sub_btn);
            sub_btn.innerHTML = ">";
            sub_btn.addEventListener("click", function() {
                toggleSubstitution(i, "usr");
            });

            let bench = document.createElement("div");
            bench.id = "play-overlay-content-substitutions-row-bench-" + (i + 1);
            bench.className = "play-overlay-content-substitutions-row-bench";
            row.appendChild(bench);

            let bench_info = document.createElement("div");
            bench_info.id = "play-overlay-content-substitutions-row-bench-info-" + (i + 1);
            bench_info.className = "play-overlay-content-substitutions-row-bench-info";
            bench.appendChild(bench_info);
            bench_info.style.background = bench_player.color1;

            let bench_img_box = document.createElement("div");
            bench_img_box.id = "play-overlay-content-substitutions-row-bench-img-box-" + (i + 1);
            bench_img_box.className = "play-overlay-content-substitutions-row-bench-img-box";
            bench.appendChild(bench_img_box);

            let bench_img = document.createElement("img");
            bench_img.src = "assets/images/thumbs/" + bench_player.image + "_" + bench_player.id + ".png";
            bench_img.id = "play-overlay-content-substitutions-row-bench-img-box-img-" + (i + 1);
            bench_img.className = "play-overlay-content-substitutions-row-bench-img-box-img";
            bench_img_box.appendChild(bench_img);

        }

    });

}

function toggleSubstitution(i, agent) {

    let position_array = ["pg", "sg", "sf", "pf", "c"];

    fetchRecord("play", "0001", function(play) {

        if (play.team[agent].substitutions[position_array[i]] == 0) {
            play.team[agent].substitutions[position_array[i]] = 1;
        } else {
            play.team[agent].substitutions[position_array[i]] = 0;
        }

        console.log(i + 1);
        let sub_btn = document.getElementById("play-overlay-content-substitutions-row-sub-btn-" + (i + 1));
        let sub_light = document.getElementById("play-" + agent + "-oncourt-player-sub-light-" + (i + 1));

        if (play.team[agent].substitutions[position_array[i]] == 0) {

            if (sub_btn != undefined) {
                sub_btn.style.color = "red";
            }
            sub_light.style.background = "#2A2723";
        } else {
            if (sub_btn != undefined) {
                sub_btn.style.color = "lightgreen";
            }
            sub_light.style.background = "lightgreen";
        }

        removeRecord("play", "0001");
        addRecord("play", play);

    });
}

function selectSubstitution(play, i, agent) {

    let position_array = ["pg", "sg", "sf", "pf", "c"];

    let opposite_i;

    if (i > 4) {
        opposite_i = i - 5;
    } else {
        opposite_i = i + 5;
    }

    if (play.team[agent].roster[opposite_i].gamestats.stats.pf < 6) {

        if (i > 4) {
            i -= 5;
        }

        play.team[agent].substitutions[position_array[i]] = 1;
        let sub_light = document.getElementById("play-" + agent + "-oncourt-player-sub-light-" + (i + 1));
        sub_light.style.background = "lightgreen";

    } else {
        console.log("Cannot sub-in, fouled out!");
    }

    return (play);

}

function callTimeout(agent) {

    fetchRecord("play", "0001", function(play) {

        if (play.team[agent].timeouts > 0) {
            play.team[agent].timeouts -= 1;
        }

        for (let i = 1; i <= 7; i++) {
            let light = document.getElementById("play-scoreboard-" + agent + "-timeouts-light-" + i);
            if (i <= play.team[agent].timeouts) {
                light.style.background = "#E1C773";
            } else {
                light.style.background = "#2A2723";
            }
        }

        play = increaseAllStamina(play, 5);

        play = makeSubstitutions(play);

        let event = {
            "time": play.time,
            "team": play.possession,
            "play": play.possession + " full timeout (Remaining: " + play.team[agent].timeouts + ")",
            "score": fetchScore(play, "usr") + " - " + fetchScore(play, "cpu"),
            "make": 0
        };
        play.playbyplay.push(event);

        updatePlayByPlay(play);

        removeRecord("play", "0001");
        addRecord("play", play);

    });

}

function increaseAllStamina(play, boost) {

    let agents = ["usr", "cpu"];

    for (let i = 0; i < agents.length; i++) {
        for (let j = 0; j < 10; j++) {

            let max_stamina = play.team[agents[i]].roster[j].ratings.stamina;
            let current_stamina = play.team[agents[i]].roster[j].gamestats.ratings.stamina;

            if (current_stamina + boost > max_stamina) {
                play.team[agents[i]].roster[j].gamestats.ratings.stamina = max_stamina;
            } else {
                console.log("Increase all players' stamina by +5.");
                play.team[agents[i]].roster[j].gamestats.ratings.stamina += boost;
            }

        }
    }

    return (play);

}

function subAllStarters(play) {

    let agents = ["usr", "cpu"];

    for (let i = 0; i < agents.length; i++) {
        for (let j = 0; j < 5; j++) {

            if (play.team[agents[i]].roster[j].gamestats.active == 0) {

                play = selectSubstitution(play, j, agents[i]);

            } else {

                play.team[agents[i]].substitutions[j] = 0;
                let sub_light = document.getElementById("play-" + agents[i] + "-oncourt-player-sub-light-" + (j + 1));
                sub_light.style.background = "none";
            }

        }
    }

    return (play);

}

function makeSubstitutions(play) {

    let agents = ["usr", "cpu"];
    let position_array = ["pg", "sg", "sf", "pf", "c"];

    for (let i = 0; i < agents.length; i++) {
        for (let j = 0; j < position_array.length; j++) {

            let player_1 = play.team[agents[i]].roster[j];
            let player_2 = play.team[agents[i]].roster[j + 5];

            let bench_player;

            if (player_1.gamestats.active == 1) {
                bench_player = player_2;
            } else {
                bench_player = player_1;
            }

            if (play.team[agents[i]].substitutions[position_array[j]] == 1 & bench_player.gamestats.stats.pf < 6) {

                if (player_1.id != play.FTshooter & player_2.id != play.FTshooter) {

                    let player_in, player_out;

                    if (player_1.gamestats.active == 1) {
                        player_1.gamestats.active = 0;
                        player_2.gamestats.active = 1;

                        player_in = player_2;
                        player_out = player_1;

                        console.log(player_2.first + " " + player_2.last + " subs in for " + player_1.first + " " + player_1.last);


                        let sub_light = document.getElementById("play-" + agents[i] + "-oncourt-player-sub-light-" + (j + 1));
                        sub_light.style.background = "#2A2723";

                    } else {
                        player_1.gamestats.active = 1;
                        player_2.gamestats.active = 0;

                        player_in = player_1;
                        player_out = player_2;

                        console.log(player_1.first + " " + player_1.last + " subs in for " + player_2.first + " " + player_2.last);

                        let sub_light = document.getElementById("play-" + agents[i] + "-oncourt-player-sub-light-" + (j + 1));
                        sub_light.style.background = "#2A2723";
                    }

                    let event = {
                        "time": play.time - play.possessionDuration,
                        "team": play.possession,
                        "play": player_in.first + " " + player_in.last + " enters game for " + player_out.first + " " + player_out.last,
                        "score": fetchScore(play, "usr") + " - " + fetchScore(play, "cpu"),
                        "make": 0
                    };
                    play.playbyplay.push(event);
                }
            }
        }
    }

    displayStartingLineup(play);

    play = resetSubstitutions(play);

    return (play);

}

function displayStartingLineup(play) {

    let agents = ["usr", "cpu"];

    for (let i = 0; i < agents.length; i++) {
        for (let j = 0; j < 5; j++) {

            let player_1 = play.team[agents[i]].roster[j];
            let player_2 = play.team[agents[i]].roster[j + 5];

            let active_player;

            if (player_1.gamestats.active == 1) {
                active_player = player_1;
            } else {
                active_player = player_2;
            }

            let player_image = document.getElementById("play-" + agents[i] + "-oncourt-player-image-" + (j + 1));
            player_image.innerHTML = "";
            let img = document.createElement("img");
            img.src = "assets/images/thumbs/" + active_player.image + "_" + active_player.id + ".png";
            player_image.appendChild(img);

            let stamina_fill = document.getElementById("play-" + agents[i] + "-oncourt-player-stamina-fill-" + (j + 1));
            stamina_fill.style.width = active_player.gamestats.ratings.stamina + "%";
            stamina_fill.style.background = getRatingColor(Math.round(active_player.gamestats.ratings.stamina));
        }
    }
}

function resetSubstitutions(play) {

    let agents = ["usr", "cpu"];
    let position_array = ["pg", "sg", "sf", "pf", "c"];

    for (let i = 0; i < agents.length; i++) {
        for (let j = 0; j < 5; j++) {

            play.team[agents[i]].substitutions[position_array[j]] = 0;

        }
    }

    return (play);

}

function updateRatingsAfterStamina(play) {

    let agents = ["usr", "cpu"];

    for (let i = 0; i < agents.length; i++) {
        for (let j = 0; j < play.team[agents[i]].roster.length; j++) {

            let player = play.team[agents[i]].roster[j];

            let STAMINA_CUTOFF = 75;
            let STAMINA_PENALTY = 0.5;

            let stamina_stats = ["inside", "dunk", "midrange", "outside", "drawfoul", "freethrow", "interior", "perimeter", "offensiverebound", "defensiverebound", "speed", "vertical", "strength", "hands", "passing", "steal", "block"];

            for (let i = 0; i < stamina_stats.length; i++) {

                let stat = stamina_stats[i];
                let penalty = ((STAMINA_CUTOFF - player.gamestats.ratings.stamina) * STAMINA_PENALTY);

                if (penalty < 0) {
                    penalty = 0;
                }

                if (["inside", "dunk", "midrange", "outside"].indexOf(stat) > -1) {

                    player.gamestats.ratings[stat].value = (player.ratings[stat].value - penalty);

                } else {

                    player.gamestats.ratings[stat] = (player.ratings[stat] - penalty);

                }

            }

        }
    }
    return (play);

}

function simulateNextPossession() {

    fetchRecord("play", "0001", function(play) {

        if (play.time > 0) {

            let agents = ["usr", "cpu"];

            // Simulate tip-off
            if (play.time == 2880) {
                play = simulateTipOff(play);
            }

            // Update gamestats ratings based on stamina
            play = updateRatingsAfterStamina(play);

            // Update time
            let seconds = simulateTimePossession();
            // Check if end of quarter, adjust seconds
            let end_of_quarter_times = [2160, 1440, 720, 0];
            for (let i = 0; i < end_of_quarter_times.length; i++) {
                if (play.time > end_of_quarter_times[i]) {
                    if (play.time - seconds < end_of_quarter_times[i]) {
                        seconds = play.time - end_of_quarter_times[i];
                        console.log("End of Q" + (play.overtime + i + 1));
                    }
                }
            }
            play.possessionDuration = seconds;

            // Simulate shooter
            play = simulateShooter(play);

            // Check if end of regulation
            if (play.time - seconds > 0) {
                play.time -= seconds;
            } else {
                play.time = 0;
                play.gameover = 1;
            }

            // Check if halftime or 7m left, boost stamina and sub in starters
            if (play.time == 1440) {
                play = increaseAllStamina(play, 10);
                play = subAllStarters(play);
                play = makeSubstitutions(play);
            }

            // Check if 7m remaining, sub in starters
            if ((play.time < 420 & play.time + seconds >= 420)) {
                play = subAllStarters(play);
                // Turn off autosub
                play = updateAutoSub(play, "usr", 0);
                play = updateAutoSub(play, "cpu", 0);
            }

            // Update minutes
            for (let i = 0; i < agents.length; i++) {
                for (let j = 0; j < play.team[agents[i]].roster.length; j++) {

                    let player = play.team[agents[i]].roster[j];

                    if (player.gamestats.active == 1) {

                        // Update minutes played
                        player.gamestats.stats.min += seconds;

                        // Update stamina
                        if ((player.gamestats.ratings.stamina - 0.5) < 0) {
                            player.gamestats.ratings.stamina = 0;
                        } else {
                            player.gamestats.ratings.stamina -= 0.5;
                        }

                        // Autosub
                        if (player.gamestats.ratings.stamina < 75) {
                            if (agents[i] == "usr") {
                                if (play.team[agents[i]].autosub == 1) {
                                    play = selectSubstitution(play, player.gamestats.pos - 1, "usr");
                                }
                            } else {
                                if (play.team[agents[i]].autosub == 1) {
                                    play = selectSubstitution(play, player.gamestats.pos - 1, "cpu");
                                }
                            }
                        }

                    } else {

                        if (player.gamestats.ratings.stamina < player.ratings.stamina) {
                            player.gamestats.ratings.stamina += 0.5;
                        }

                    }
                }
            }

            updatePlayByPlay(play);

            // Switch possession
            if (play.steal == 1) {

                play.possession = fetchOtherAgent(play.possession);

            } else if ((play.fouled == 0 & play.madeFG == 0) | (play.fouled == 1 & play.madeFT == 0)) {

                if (play.reboundType == "defensive") {

                    play.possession = fetchOtherAgent(play.possession);

                }

            } else {

                play.possession = fetchOtherAgent(play.possession);

            }

            updateBoxscore(play);
            updateScoreboard(play);
            updateGameTrackerChart(play);
            updateGameTrackerBox(play);
            play = updateGameTrackerLeads(play);
            updateTeamStats(play);
            updateTime(play);
            updateStaminaBar(play);

            removeRecord("play", "0001");
            addRecord("play", play);


        } else if (fetchScore(play, "usr") == fetchScore(play, "cpu")) {

            console.log("OVERTIME");
            play.time = 300;
            play.overtime += 1;

            removeRecord("play", "0001");
            addRecord("play", play);

        } else {

            console.log("Game Over");
            let action_btn = document.getElementById("play-action-next-possession-btn");
            action_btn.innerHTML = "Quit";
            action_btn.style.background = "#d24d57"; //RED

            action_btn.addEventListener("click", function() {
                displaySpecificPage("gamemodes-container");
            });

        }

    });

}

function updateAutoSub(play, agent, status) {

    play.team[agent].autosub = status;

    return (play);

}

function updateScoreboard(play) {

    let usr_score = document.getElementById("play-scoreboard-usr-score");
    let cpu_score = document.getElementById("play-scoreboard-cpu-score");

    usr_score.innerHTML = fetchScore(play, "usr");
    cpu_score.innerHTML = fetchScore(play, "cpu");

}

function fetchScore(play, agent) {

    let sum = 0;

    for (let i = 0; i < play.score[agent].length; i++) {

        sum += play.score[agent][i];

    }

    return (sum);

}

function simulateShooter(play) {

    let off_agent = play.possession;
    let def_agent = fetchOtherAgent(off_agent);

    let off_starters = fetchStarters(play, off_agent);
    let def_starters = fetchStarters(play, def_agent);

    console.log(off_starters);
    console.log(def_starters);

    let fga_odds = [];

    for (let i = 0; i < off_starters.length; i++) {
        for (let j = 0; j < off_starters[i].fgaaverage; j++) {
            fga_odds.push(off_starters[i].id);
        }
    }

    let shooter_id = fga_odds[randomIntFromInterval(0, fga_odds.length - 1)];
    let idx;

    for (let x = 0; x < off_starters.length; x++) {

        if (off_starters[x].id == shooter_id) {
            idx = x;
        }

    }

    let shooter = off_starters[idx];
    let defender = def_starters[idx];

    play.shooter = shooter;
    play.defender = defender;

    play = simulateShotType(play);

    return (play);

}

function simulateShotType(play) {

    let shot_type_array = [];
    let shot_types = ["inside", "dunk", "midrange", "outside"];

    for (let i = 0; i < shot_types.length; i++) {
        for (let j = 0; j < play.shooter.ratings[shot_types[i]].tendency; j++) {
            shot_type_array.push(shot_types[i]);
        }
    }

    let shotType = shot_type_array[randomIntFromInterval(0, shot_type_array.length - 1)];

    play.shotType = shotType;

    if (play.shotType == "inside" | play.shotType == "dunk") {
        play.defenseType = "interior";
    } else {
        play.defenseType = "perimeter";
    }

    play = simulateShotSuccess(play);

    return (play);

}

function simulateShotSuccess(play) {

    let made_shot_array = ["misses", "makes"];
    let SUCCESS_PENALTY;

    if (play.shotType == "inside") {
        SUCCESS_PENALTY = 0.6;
    } else if (play.shotType == "dunk") {
        SUCCESS_PENALTY = 0.75;
    } else if (play.shotType == "midrange") {
        SUCCESS_PENALTY = 0.40;
    } else if (play.shotType == "outside") {
        SUCCESS_PENALTY = 0.35;
    } else {
        console.log("Problem!!");
    }

    let offense_rating = play.shooter.gamestats.ratings[play.shotType].value;
    let defense_rating = play.defender.gamestats.ratings[play.defenseType];

    let odds = (SUCCESS_PENALTY * offense_rating) / defense_rating;
    console.log(play.shooter.first + " " + play.shooter.last + " offensive rating: " + offense_rating);
    console.log(play.defender.first + " " + play.defender.last + " defensive rating: " + defense_rating);
    console.log("Success rate penalty for " + play.shotType + " shot: " + SUCCESS_PENALTY);

    // TODO
    play.successRate = odds;
    console.log("Success rate (Raw): " + play.successRate);

    play = simulateSteal(play);

    if (play.steal == 0) {

        play = simulateAssist(play);

        play = simulateBlock(play);

        play = simulateShootingFoul(play);

        play = adjustForOffensiveConsistency(play);

        if (play.fouled == 1) {

            console.log("FOUL!");
            console.log("Success rate before: " + play.successRate);
            let PENALTY = 0.42;
            play.successRate *= PENALTY;
            console.log("Success rate after: " + play.successRate);

        } else {
            play.FTshooter = "";
        }

        if (Math.random() < play.successRate) {

            if (play.shotType == "outside") {

                play.team[play.possession].roster[play.shooter.gamestats.pos - 1].gamestats.stats["pts"] += 3;
                play.team[play.possession].roster[play.shooter.gamestats.pos - 1].gamestats.stats["3pm"] += 1;
                play.team[play.possession].roster[play.shooter.gamestats.pos - 1].gamestats.stats["3pa"] += 1;
                play.team[play.possession].roster[play.shooter.gamestats.pos - 1].gamestats.stats["tg"] += 3;
                play.score[play.possession][fetchQuarter(play) - 1] += 3;
                play = updateOnCourtPlusMinus(play, 3);

            } else {

                play.team[play.possession].roster[play.shooter.gamestats.pos - 1].gamestats.stats["pts"] += 2;
                play.team[play.possession].roster[play.shooter.gamestats.pos - 1].gamestats.stats["tg"] += 2;
                play.score[play.possession][fetchQuarter(play) - 1] += 2;
                play = updateOnCourtPlusMinus(play, 2);

            }

            play.team[play.possession].roster[play.shooter.gamestats.pos - 1].gamestats.stats["fgm"] += 1;
            play.team[play.possession].roster[play.shooter.gamestats.pos - 1].gamestats.stats["fga"] += 1;
            play.madeFG = 1;

            if (play.passer != "") {
                play.team[play.possession].roster[play.passer.gamestats.pos - 1].gamestats.stats["ast"] += 1;
                play.team[play.possession].roster[play.passer.gamestats.pos - 1].gamestats.stats["tg"] += 2;
                console.log("Assist made by " + play.passer.first + " " + play.passer.last);
            }

            play.team[play.possession].roster[play.shooter.gamestats.pos - 1].gamestats.stats["fgtracker"] += 1;


        } else {

            if (play.fouled == 0) {

                if (play.shotType == "outside") {

                    play.team[play.possession].roster[play.shooter.gamestats.pos - 1].gamestats.stats["3pa"] += 1;
                    play.team[play.possession].roster[play.shooter.gamestats.pos - 1].gamestats.stats["tg"] -= 1.5;

                }

                play.team[play.possession].roster[play.shooter.gamestats.pos - 1].gamestats.stats["fga"] += 1;
                play.team[play.possession].roster[play.shooter.gamestats.pos - 1].gamestats.stats["tg"] -= 1;

            }

            play.madeFG = 0;

            play.team[play.possession].roster[play.shooter.gamestats.pos - 1].gamestats.stats["fgtracker"] -= 1;

        }

        console.log(play.shooter.first + " " + play.shooter.last + " " + made_shot_array[play.madeFG] + " " + play.shotType + " over " + play.defender.first + " " + play.defender.last + " (Success Rate: " + play.successRate + ")");

        let assist_event;
        if (play.passer != "" & play.madeFG == 1) {
            assist_event = "<br/>" + play.passer.first + " " + play.passer.last + " assists [" + play.team[play.possession].roster[play.passer.gamestats.pos - 1].gamestats.stats["ast"] + " AST]";
        } else {
            assist_event = "";
        }

        let block_event;
        if (play.blocked == 1 & play.madeFG == 0) {
            block_event = "<br/>" + play.blocker.first + " " + play.blocker.last + " blocks shot [" + play.blocker.gamestats.stats["blk"] + " BLK]";
        } else {
            block_event = "";
        }

        let event = {
            "time": play.time - play.possessionDuration,
            "team": play.possession,
            "play": play.shooter.first + " " + play.shooter.last + " " + made_shot_array[play.madeFG] + " " + play.shotType + " [" + play.shooter.gamestats.stats.pts + " PTS] " + assist_event + block_event,
            "score": fetchScore(play, "usr") + " - " + fetchScore(play, "cpu"),
            "make": play.madeFG
        };
        play.playbyplay.push(event);

        // Fouled! How many FTs?
        if (play.fouled == 1) {

            let number_of_ft;

            if (play.madeFG == 1) {

                number_of_ft = 1;

            } else {

                if (play.shotType == "outside") {
                    number_of_ft = 3;
                } else {
                    number_of_ft = 2;
                }

            }

            play.numberOfFT = number_of_ft;
            play = simulateFreeThrow(play);

        }

        if ((play.madeFG == 0 & play.fouled == 0) | (play.madeFT == 0 & play.fouled == 1)) {

            play = simulateRebound(play);

        }
    }

    // Update FG%
    play = updateBoxscorePercentages(play);

    return (play);

}

function simulateSteal(play) {

    let STEAL_ODDS = 0.95;

    let stl_odds = (play.defender.gamestats.ratings.steal / 1000 * STEAL_ODDS);

    if (Math.random() < stl_odds) {

        console.log("STEAL");

        console.log(play.defender.first + " " + play.defender.last + " steals ball from " + play.shooter.first + " " + play.shooter.last);

        play.steal = 1;
        play.team[fetchOtherAgent(play.possession)].roster[play.defender.gamestats.pos - 1].gamestats.stats["stl"] += 1;
        play.team[fetchOtherAgent(play.possession)].roster[play.defender.gamestats.pos - 1].gamestats.stats["tg"] += 3;
        play.team[play.possession].roster[play.shooter.gamestats.pos - 1].gamestats.stats["tov"] += 1;
        play.team[play.possession].roster[play.shooter.gamestats.pos - 1].gamestats.stats["tg"] -= 3;

        let event = {
            "time": play.time - play.possessionDuration,
            "team": play.possession,
            "play": play.shooter.first + " " + play.shooter.last + " turnover: lost ball [" + play.team[play.possession].roster[play.shooter.gamestats.pos - 1].gamestats.stats["tov"] + " TOV] <br/>" + play.defender.first + " " + play.defender.last + " steals ball [" + play.team[fetchOtherAgent(play.possession)].roster[play.defender.gamestats.pos - 1].gamestats.stats["stl"] + " STL]",
            "score": fetchScore(play, "usr") + " - " + fetchScore(play, "cpu"),
            "make": 0
        };
        play.playbyplay.push(event);

    } else {

        play.steal = 0;

    }

    return (play);

}

function simulateAssist(play) {

    let ASSIST_BASELINE = 50;
    let off_agent = play.possession;

    let off_starters = fetchStarters(play, off_agent);
    let passers = [];
    let assist_odds_array = [];

    for (let i = 0; i < off_starters.length; i++) {

        let passer = off_starters[i];

        if (passer.id != play.shooter.id) {

            if (Math.random() < (Math.max(1, (passer.gamestats.ratings.passing - ASSIST_BASELINE)) / 100)) {

                passers.push(passer);

            }

        }

    }

    for (let j = 0; j < passers.length; j++) {

        for (let k = 0; k < Math.round(Math.max(1, (passers[j].gamestats.ratings.passing - ASSIST_BASELINE))); k++) {

            assist_odds_array.push(passers[j]);

        }

    }

    if (assist_odds_array.length > 0) {

        let passer = assist_odds_array[randomIntFromInterval(0, assist_odds_array.length - 1)];
        let assist_boost = passer.gamestats.ratings.passing / 1000;
        play.passer = passer;
        play.assistBoost = assist_boost;

        console.log(play.passer.first + " " + play.passer.last + " passes to " + play.shooter.first + " " + play.shooter.last);
        console.log("Success rate before pass: " + play.successRate + "; Success rate after pass: " + (play.successRate + play.assistBoost));
        play.successRate += play.assistBoost;

    } else {

        play.passer = "";
        play.assistBoost = 0;

    }

    return (play);

}

function simulateBlock(play) {

    let BLOCK_BASELINE = 40;
    let SHOT_WEIGHT = 0.48;
    let BLK_WEIGHT = 0.53;

    let shot_rating, blk_rating;
    let blk_odds;

    shot_rating = play.shooter.gamestats.ratings[play.shotType].value;
    blk_rating = play.defender.gamestats.ratings.block;

    blk_odds = (((blk_rating - (shot_rating * SHOT_WEIGHT)) * BLK_WEIGHT) * blk_rating) / 10000;

    console.log("Block odds: " + blk_odds);

    if (Math.random() < blk_odds) {

        console.log("BLOCKED");
        console.log(play.defender.first + " " + play.defender.last + " blocks " + play.shooter.first + " " + play.shooter.last);
        console.log("Success rate before block attempt: " + play.successRate + "; Success rate after block: 0");

        play.successRate = 0;
        play.team[fetchOtherAgent(play.possession)].roster[play.defender.gamestats.pos - 1].gamestats.stats["blk"] += 1;
        play.team[fetchOtherAgent(play.possession)].roster[play.defender.gamestats.pos - 1].gamestats.stats["tg"] += 2;
        play.team[play.possession].roster[play.shooter.gamestats.pos - 1].gamestats.stats["ba"] += 1;
        play.team[play.possession].roster[play.shooter.gamestats.pos - 1].gamestats.stats["tg"] -= 2;
        play.blocker = play.team[fetchOtherAgent(play.possession)].roster[play.defender.gamestats.pos - 1];
        play.blocked = 1;

    } else {

        console.log("Success rate before block attempt: " + play.successRate + "; Success rate after block attempt: " + (play.successRate - ((Math.max(1, (blk_rating - BLOCK_BASELINE)) / 1000) * 3)));
        play.successRate -= ((Math.max(1, (blk_rating - BLOCK_BASELINE)) / 1000) * 3);
        play.blocker = "";
        play.blocked = 0;

    }

    return (play);

}

function adjustForOffensiveConsistency(play) {

    let OFF_CONSISTENCY_BASELINE = 50;
    let BONUS_MULTIPLIER = 1.5;

    let fgtracker = play.team[play.possession].roster[play.shooter.gamestats.pos - 1].gamestats.stats["fgtracker"];
    let off_consistency = play.team[play.possession].roster[play.shooter.gamestats.pos - 1].ratings["offensiveconsistency"];

    let bonus = 1;
    if (fgtracker != 0) {
        for (let i = 0; i < Math.abs(fgtracker); i++) {

            bonus += (Math.max(1, (off_consistency - OFF_CONSISTENCY_BASELINE)) / 1000 * BONUS_MULTIPLIER / Math.abs(fgtracker));

        }
    }

    console.log("Offensive off_consistency: " + off_consistency + "; FG-Tracker: " + fgtracker + "; Bonus: " + bonus);
    console.log("Success rate before off. consistency: " + play.successRate + "; Success rate after off. consistency: " + (play.successRate * bonus));

    play.successRate *= bonus;

    return (play);

}

function updateOnCourtPlusMinus(play, pts) {

    let off_oncourt = fetchStarters(play, play.possession);
    let def_oncourt = fetchStarters(play, fetchOtherAgent(play.possession));

    for (let i = 0; i < off_oncourt.length; i++) {

        play.team[play.possession].roster[off_oncourt[i].gamestats.pos - 1].gamestats.stats.pm += pts;
        play.team[fetchOtherAgent(play.possession)].roster[def_oncourt[i].gamestats.pos - 1].gamestats.stats.pm -= pts;

    }

    return (play);

}

function updateBoxscorePercentages(play) {

    let player = play.team[play.possession].roster[play.shooter.gamestats.pos - 1];

    let percent_types = [
        ["fgm", "fga", "fgp"],
        ["3pm", "3pa", "3pp"],
        ["ftm", "fta", "ftp"]
    ];

    for (let i = 0; i < percent_types.length; i++) {

        if (player.gamestats.stats[percent_types[i][1]] != 0) {

            player.gamestats.stats[percent_types[i][2]] = Math.round(player.gamestats.stats[percent_types[i][0]] / player.gamestats.stats[percent_types[i][1]] * 100);

        } else {

            player.gamestats.stats[percent_types[i][2]] = 0;

        }

    }

    return (play);

}

function simulateShootingFoul(play) {

    let drawfoul = play.shooter.gamestats.ratings.drawfoul;
    let defense;
    let FOUL_WEIGHT = 0.25;
    let DEFENSE_WEIGHT = 0.5;

    if (play.shotType == "outside" | play.shotType == "midrange") {
        defense = play.defender.gamestats.ratings.perimeter;
    } else {
        defense = play.defender.gamestats.ratings.interior;
    }

    let odds = (drawfoul * FOUL_WEIGHT / 100) - (defense * DEFENSE_WEIGHT / 1000);
    console.log("Draw foul: " + drawfoul + "; Defense: " + defense + "; Shooting Foul: " + odds);

    if (Math.random() < odds) {
        console.log(play.defender.first + " " + play.defender.last + " fouls " + play.shooter.first + " " + play.shooter.last);
        play.team[fetchOtherAgent(play.possession)].roster[play.defender.gamestats.pos - 1].gamestats.stats.pf += 1;
        play.fouled = 1;

        if (play.team[fetchOtherAgent(play.possession)].roster[play.defender.gamestats.pos - 1].gamestats.stats.pf > 5) {

            play = selectSubstitution(play, (play.defender.gamestats.pos - 1), fetchOtherAgent(play.possession));
            play = makeSubstitutions(play);

        }

        let event = {
            "time": play.time - play.possessionDuration,
            "team": play.possession,
            "play": play.defender.first + " " + play.defender.last + " foul: shooting" + " [" + play.team[fetchOtherAgent(play.possession)].roster[play.defender.gamestats.pos - 1].gamestats.stats.pf + " PF]",
            "score": fetchScore(play, "usr") + " - " + fetchScore(play, "cpu"),
            "make": 0
        };
        play.playbyplay.push(event);

    } else {
        play.fouled = 0;
    }

    return (play);

}

function simulateFreeThrow(play) {

    let made_shot_array = ["misses", "makes"];
    let free_throw_odds = play.shooter.gamestats.ratings.freethrow / 100;

    play.FTshooter = play.shooter.id;
    console.log(play.shooter.first + " " + play.shooter.last);

    play.team[play.possession].roster[play.shooter.gamestats.pos - 1].gamestats.stats["tg"] += 1;

    for (let i = 0; i < play.numberOfFT; i++) {

        let success = Math.random();
        console.log("Random number: " + success, "Free throw rating: " + free_throw_odds);

        if (success < free_throw_odds) {

            play.team[play.possession].roster[play.shooter.gamestats.pos - 1].gamestats.stats.pts += 1;
            play.team[play.possession].roster[play.shooter.gamestats.pos - 1].gamestats.stats.ftm += 1;
            play.team[play.possession].roster[play.shooter.gamestats.pos - 1].gamestats.stats.fta += 1;
            play.team[play.possession].roster[play.shooter.gamestats.pos - 1].gamestats.stats["tg"] += 1;
            play.score[play.possession][fetchQuarter(play) - 1] += 1;
            play = updateOnCourtPlusMinus(play, 1);
            play.madeFT = 1;

        } else {
            play.team[play.possession].roster[play.shooter.gamestats.pos - 1].gamestats.stats.fta += 1;
            play.team[play.possession].roster[play.shooter.gamestats.pos - 1].gamestats.stats["tg"] -= .5;
            play.madeFT = 0;
        }

        console.log(play.shooter.first + " " + play.shooter.last + " " + made_shot_array[play.madeFT] + " free throw (Success Rate: " + free_throw_odds + ")");
        let event = {
            "time": play.time - play.possessionDuration,
            "team": play.possession,
            "play": play.shooter.first + " " + play.shooter.last + " " + made_shot_array[play.madeFT] + " free throw " + (i + 1) + " of " + play.numberOfFT + " [" + play.team[play.possession].roster[play.shooter.gamestats.pos - 1].gamestats.stats.pts + " PTS]",
            "score": fetchScore(play, "usr") + " - " + fetchScore(play, "cpu"),
            "make": play.madeFT
        };
        play.playbyplay.push(event);

        if (i == play.numberOfFT - 2) {
            play = makeSubstitutions(play);
        }

    }

    return (play);

}

function simulateRebound(play) {

    let off_agent = play.possession;
    let def_agent = fetchOtherAgent(off_agent);

    let rebound_winners = [];
    let REB_BASELINE = 55;

    let off_starters = fetchStarters(play, off_agent);
    let def_starters = fetchStarters(play, def_agent);
    console.log(def_starters);

    for (let i = 0; i < off_starters.length; i++) {

        let rebound_matchup_odds = [];

        let oreb_rating = off_starters[i].gamestats.ratings.offensiverebound;
        let dreb_rating = def_starters[i].gamestats.ratings.defensiverebound;

        let OREB_PENALTY = 0.34;

        for (let j = 0; j < Math.round(Math.max(1, (oreb_rating - REB_BASELINE)) * OREB_PENALTY); j++) {

            rebound_matchup_odds.push(off_starters[i]);

        }

        for (let k = 0; k < Math.max(1, (dreb_rating - REB_BASELINE)); k++) {

            rebound_matchup_odds.push(def_starters[i]);

        }

        rebound_winners.push(rebound_matchup_odds[randomIntFromInterval(0, rebound_matchup_odds.length - 1)]);

    }

    let rebound_winners_odds = [];

    for (let x = 0; x < rebound_winners.length; x++) {

        let OREB_PENALTY = 0.92;
        let reb_rating;
        let player = rebound_winners[x];

        if (player.gamestats.agent == play.possession) {

            reb_rating = Math.round(Math.max(1, (player.gamestats.ratings.offensiverebound - REB_BASELINE)) * OREB_PENALTY);

        } else {

            reb_rating = Math.max(1, (player.gamestats.ratings.defensiverebound - REB_BASELINE));

        }

        for (let y = 0; y < reb_rating; y++) {

            rebound_winners_odds.push(player);

        }

    }

    let rebounder = rebound_winners_odds[randomIntFromInterval(0, rebound_winners_odds.length - 1)];
    play.rebounder = rebounder;
    let rebound_type;

    if (rebounder.gamestats.agent == play.possession) {
        rebound_type = "offensive";
    } else {
        rebound_type = "defensive";
    }
    play.reboundType = rebound_type;

    if (rebound_type == "offensive") {
        play.team[play.possession].roster[rebounder.gamestats.pos - 1].gamestats.stats.reb += 1;
        play.team[play.possession].roster[rebounder.gamestats.pos - 1].gamestats.stats.oreb += 1;
        play.team[play.possession].roster[rebounder.gamestats.pos - 1].gamestats.stats["tg"] += 3;
    } else {
        play.team[fetchOtherAgent(play.possession)].roster[rebounder.gamestats.pos - 1].gamestats.stats.reb += 1;
        play.team[fetchOtherAgent(play.possession)].roster[rebounder.gamestats.pos - 1].gamestats.stats.dreb += 1;
        play.team[fetchOtherAgent(play.possession)].roster[rebounder.gamestats.pos - 1].gamestats.stats["tg"] += 2;
    }

    console.log(rebounder.first + " " + rebounder.last + " gets " + rebound_type + " rebound");
    let event = {
        "time": play.time - play.possessionDuration,
        "team": play.possession,
        "play": rebounder.first + " " + rebounder.last + " " + rebound_type + " rebound" + " [" + play.rebounder.gamestats.stats.reb + " REB]",
        "score": fetchScore(play, "usr") + " - " + fetchScore(play, "cpu"),
        "make": 0
    };
    play.playbyplay.push(event);

    return (play);

}

function fetchOtherAgent(agent) {

    if (agent == "usr") {
        return ("cpu");
    } else {
        return ("usr");
    }
}

function fetchStarters(play, agent) {

    let starters = new Array(5);

    for (let i = 0; i < play.team[agent].roster.length; i++) {

        let player = play.team[agent].roster[i];
        // console.log("Adding player " + play.team[agent].roster[i].first + " to starters");

        if (player.gamestats.active == 1) {

            if (player.gamestats.pos > 5) {
                starters.splice((player.gamestats.pos - 6), 1, player);
            } else {
                starters.splice((player.gamestats.pos - 1), 1, player);
            }

        }

    }

    return (starters);
}

function simulateTipOff(play) {

    let jumper_usr = play.team.usr.roster[4];
    let jumper_cpu = play.team.cpu.roster[4];

    let HEIGHT_WEIGHT = .75;
    let VERTICAL_WEIGHT = .25;

    let usr_height = convertFeetInch2cm(jumper_usr.height);
    let cpu_height = convertFeetInch2cm(jumper_cpu.height);
    let usr_vertical = jumper_usr.ratings.vertical;
    let cpu_vertical = jumper_cpu.ratings.vertical;

    let usr_score = (HEIGHT_WEIGHT * usr_height) + (VERTICAL_WEIGHT * usr_vertical);
    let cpu_score = (HEIGHT_WEIGHT * cpu_height) + (VERTICAL_WEIGHT * cpu_vertical);

    console.log(jumper_usr.height, usr_height, usr_vertical, usr_score);
    console.log(jumper_cpu.height, cpu_height, cpu_vertical, cpu_score);

    let odds_array = ["usr", "cpu"];
    let diff = Math.abs(usr_score - cpu_score);
    let higher_chances;

    if (usr_score > cpu_score) {
        higher_chances = "usr";
    } else {
        higher_chances = "cpu";
    }

    for (let i = 0; i < Math.round(diff); i++) {

        odds_array.push(higher_chances);

    }

    console.log(odds_array);

    let winner = odds_array[randomIntFromInterval(0, odds_array.length - 1)];

    let win_player, lose_player;

    if (winner == "usr") {
        win_player = jumper_usr;
        lose_player = jumper_cpu;
        console.log(jumper_usr.first + " " + jumper_usr.last + " wins the tip!");
    } else {
        win_player = jumper_cpu;
        lose_player = jumper_usr;
        console.log(jumper_cpu.first + " " + jumper_cpu.last + " wins the tip!");
    }

    play.possession = winner;

    let pbp_event = {}
    pbp_event.time = play.time;
    pbp_event.team = play.possession;
    pbp_event.play = win_player.last + " wins jump ball against " + lose_player.last;
    pbp_event.score = fetchScore(play, "usr") + " - " + fetchScore(play, "cpu");
    play.playbyplay.push(pbp_event);

    return (play);

}

function updateStaminaBar(play) {

    let agents = ["usr", "cpu"];

    for (let i = 0; i < agents.length; i++) {
        for (let j = 0; j < play.team[agents[i]].roster.length; j++) {

            let player = play.team[agents[i]].roster[j];

            if (player.gamestats.active == 1) {

                let pos;

                if (player.gamestats.pos <= 5) {
                    pos = player.gamestats.pos;
                } else {
                    pos = player.gamestats.pos - 5;
                }

                let fill = document.getElementById("play-" + agents[i] + "-oncourt-player-stamina-fill-" + pos);
                fill.style.width = player.gamestats.ratings.stamina + "%";
                fill.style.background = getRatingColor(player.gamestats.ratings.stamina);

            }

        }
    }

}

function simulateTimePossession() {

    let time_array = [];

    for (let i = 0; i < time_distribution_default.length; i++) {

        let obj = time_distribution_default[i];

        for (let j = 0; j < obj.probability; j++) {

            time_array.push(obj.seconds);

        }

    }

    let random_idx = randomIntFromInterval(0, time_array.length - 1);
    let seconds = time_array[random_idx];

    return (seconds);

}

function generateRandomTeam(subset = null) {

    let pool;

    if (subset != null) {
        pool = subset;
    } else {
        pool = players_json;
    }

    let position_array = ["PG", "SG", "SF", "PF", "C"];

    let pool_sub;
    let starters = [];
    let bench = [];
    let to_exclude = [];

    for (let i = 0; i < position_array.length; i++) {

        pool_sub = subsetCardPool(pool, {
            "position": position_array[i],
            "conference": null,
            "unlockedlevel": null,
            "exclude": null
        });

        let random_1 = pool_sub[randomIntFromInterval(0, pool_sub.length - 1)];
        pool_sub = removePlayerFromPool(pool_sub, random_1);

        let random_2 = pool_sub[randomIntFromInterval(0, pool_sub.length - 1)];
        pool_sub = removePlayerFromPool(pool_sub, random_2);

        to_exclude.push(random_1.id);
        to_exclude.push(random_2.id);

        console.log(to_exclude);

        pool_sub = subsetCardPool(pool_sub, {
            "position": null,
            "conference": null,
            "unlockedlevel": null,
            "exclude": to_exclude
        })

        if (calculateRatings(random_1).overall > calculateRatings(random_2).overall) {

            starters.push(random_1);
            bench.push(random_2);

        } else {

            starters.push(random_2);
            bench.push(random_1);

        }

    }

    let team = starters.concat(bench);

    return (team);

}

function removePlayerFromPool(pool, card) {

    for (let i = 0; i < pool.length; i++) {
        if (pool[i].first == card.first & pool[i].last == card.last) {
            pool.splice(i, 1);
        }
    }

    return (pool);

}

function subsetCardPool(pool, obj) {

    // Subset based on position
    let pool_1 = [];
    if (obj.position != null) {
        console.log("Selecting by position: ", obj.position);
        for (let i = 0; i < pool.length; i++) {
            if (pool[i].position.indexOf(obj.position) > -1) {
                pool_1.push(pool[i]);
            }
        }
    } else {
        pool_1 = pool;
    }

    // Subset based on conference
    let pool_2 = [];
    if (obj.conference != null) {
        console.log("Selecting by conference: ", obj.conference);
        for (let i = 0; i < pool_1.length; i++) {
            if (pool_1[i].conference.indexOf(obj.conference) > -1) {
                pool_2.push(pool_1[i]);
            }
        }
    } else {
        pool_2 = pool_1;
    }

    // Subset based on unlocked level
    let pool_3 = [];
    if (obj.unlockedlevel != null) {
        console.log("Selecting by unlockedlevel: ", obj.unlockedlevel);
        for (let i = 0; i < pool_2.length; i++) {
            if (pool_2[i].unlockedlevel < obj.unlockedlevel) {
                pool_3.push(pool_2[i]);
            }
        }
    } else {
        pool_3 = pool_2;
    }

    // Subset based on list of exclusion
    let pool_4 = [];
    if (obj.exclude != null) {
        for (let i = 0; i < pool_3.length; i++) {
            if (obj.exclude.indexOf(pool_3[i].id) <= -1) {
                pool_4.push(pool_3[i]);
            } else {
                console.log("Excluding: ", pool_3[i].id);
            }
        }
    } else {
        pool_4 = pool_3;
    }

    return (pool_4);

}

function displayPlayByPlayQuarter(i) {

    let playbyplay_container = document.getElementById("play-stats-play-by-play-container");

    if (document.getElementById("play-stats-play-by-play-quarter-container-" + i) == undefined) {

        let quarter_container = document.createElement("div");
        quarter_container.id = "play-stats-play-by-play-quarter-container-" + i;
        quarter_container.className = "play-stats-play-by-play-quarter-container";
        playbyplay_container.appendChild(quarter_container);

        let quarter_header = document.createElement("div");
        quarter_header.id = "play-stats-play-by-play-quarter-header-" + i;
        quarter_header.className = "play-stats-play-by-play-quarter-header";
        quarter_container.appendChild(quarter_header);
        if (i > 5) {
            quarter_header.innerHTML = "OT " + (i - 4);
        } else {
            quarter_header.innerHTML = "Quarter " + i;
        }

        let quarter_content = document.createElement("div");
        quarter_content.id = "play-stats-play-by-play-quarter-content-" + i;
        quarter_content.className = "play-stats-play-by-play-quarter-content";
        quarter_container.appendChild(quarter_content);

        let marker = document.createElement("div");
        marker.id = "play-stats-play-by-play-quarter-marker-" + i;
        marker.className = "play-stats-play-by-play-quarter-marker";
        quarter_container.appendChild(marker);

    }

}

function initializePlayByPlay() {

    let container = document.getElementById("play-stats-content");

    let playbyplay_container = document.getElementById("play-stats-play-by-play-container");
    if (playbyplay_container == undefined) {
        playbyplay_container = document.createElement("div");
        playbyplay_container.id = "play-stats-play-by-play-container";
        container.appendChild(playbyplay_container);
    } else {
        playbyplay_container.innerHTML = "";
    }

    for (let i = 0; i < 4; i++) {

        displayPlayByPlayQuarter(i + 1);

    }

}


function updatePlayByPlay(play) {

    let quarter = fetchQuarter(play);

    if (quarter > 4) {

        displayPlayByPlayQuarter(quarter);

    }

    let quarter_content = document.getElementById("play-stats-play-by-play-quarter-content-" + quarter);


    for (let i = 0; i < play.playbyplay.length; i++) {

        let event = play.playbyplay[i];

        let row = document.createElement("div");
        row.className = "play-stats-play-by-play-row div-fadein";
        quarter_content.appendChild(row);

        let container = document.createElement("div");
        container.className = "play-stats-play-by-play-row-container";
        row.appendChild(container);

        if (event.make == 1) {
            row.style.fontWeight = "bold";
        }

        let time_itm = document.createElement("div");
        time_itm.className = "play-stats-play-by-play-row-time";
        container.appendChild(time_itm);
        time_itm.innerHTML = convertTime2MinuteSecond(event.time);

        let team_itm = document.createElement("div");
        team_itm.className = "play-stats-play-by-play-row-team";
        container.appendChild(team_itm);
        team_itm.innerHTML = event.team;

        let play_itm = document.createElement("div");
        play_itm.className = "play-stats-play-by-play-row-play";
        container.appendChild(play_itm);
        play_itm.innerHTML = event.play;

        let score_itm = document.createElement("div");
        score_itm.className = "play-stats-play-by-play-row-score";
        container.appendChild(score_itm);
        score_itm.innerHTML = event.score;

    }

    document.getElementById("play-stats-play-by-play-quarter-marker-" + quarter).scrollIntoView(false);
    play.playbyplay = [];


}

function initializeBoxscore(agent) {

    let container = document.getElementById("play-stats-content");

    let boxscore_container = document.getElementById("play-stats-boxscore-container");

    if (boxscore_container == undefined) {
        boxscore_container = document.createElement("div");
        boxscore_container.id = "play-stats-boxscore-container";
        container.appendChild(boxscore_container);
    } else {
        boxscore_container.innerHTML = "";
    }

    let toggle_container = document.createElement("div");
    toggle_container.id = "play-stats-toggle-container";
    boxscore_container.appendChild(toggle_container);

    let toggle_box = document.createElement("div");
    toggle_box.id = "play-stats-toggle-box";
    toggle_container.appendChild(toggle_box);

    let toggle_usr = document.createElement("div");
    toggle_usr.id = "play-stats-toggle-box-usr";
    toggle_usr.className = "play-stats-toggle-box-agent";
    toggle_box.appendChild(toggle_usr);
    toggle_usr.innerHTML = "USR";
    toggle_usr.addEventListener("click", function() {
        initializeBoxscore("usr");
    });

    let toggle_cpu = document.createElement("div");
    toggle_cpu.id = "play-stats-toggle-box-cpu";
    toggle_cpu.className = "play-stats-toggle-box-agent"
    toggle_box.appendChild(toggle_cpu);
    toggle_cpu.innerHTML = "CPU";
    toggle_cpu.addEventListener("click", function() {
        initializeBoxscore("cpu");
    });

    if (agent == "usr") {
        toggle_usr.className += " play-stats-toggle-box-agent-active";
        toggle_cpu.className += " play-stats-toggle-box-agent-inactive";
    } else {
        toggle_usr.className += " play-stats-toggle-box-agent-inactive";
        toggle_cpu.className += " play-stats-toggle-box-agent-active";
    }

    let boxscore_content = document.createElement("div");
    boxscore_content.id = "play-stats-boxscore-content";
    boxscore_content.className = "div-fadein";
    boxscore_container.appendChild(boxscore_content);

    let boxscore_left = document.createElement("div");
    boxscore_left.id = "play-stats-boxscore-left";
    boxscore_content.appendChild(boxscore_left);

    let boxscore_right = document.createElement("div");
    boxscore_right.id = "play-stats-boxscore-right";
    boxscore_content.appendChild(boxscore_right);

    let boxscore_stats = document.createElement("div");
    boxscore_stats.id = "play-stats-boxscore-right-stats";
    boxscore_right.appendChild(boxscore_stats);

    let player_name_header = document.createElement("div");
    player_name_header.id = "play-stats-boxscore-left-name-header";
    player_name_header.className = "play-stats-boxscore-left-name play-stats-boxscore-header";
    boxscore_left.appendChild(player_name_header);
    player_name_header.innerHTML = "Player";

    let stats_row_header = document.createElement("div");
    stats_row_header.id = "play-stats-boxscore-right-stats-row-header";
    stats_row_header.className = "play-stats-boxscore-right-stats-row play-stats-boxscore-header";
    boxscore_stats.appendChild(stats_row_header);

    for (let j = 0; j < boxscore_stats_array.length; j++) {
        let itm = document.createElement("div");
        itm.id = "play-stats-boxscore-right-stats-row-header-" + (j + 1);
        itm.className = "play-stats-boxscore-right-stats-row-itm";
        stats_row_header.appendChild(itm);

        if (boxscore_stats_array[j] == "pm") {
            itm.innerHTML = "+/-";
        } else {
            itm.innerHTML = boxscore_stats_array[j].toUpperCase();
        }
    }

    fetchRecord("play", "0001", function(play) {

        play.boxscoreView = agent;

        let roster = play.team[agent].roster;

        for (let i = 0; i < roster.length; i++) {

            let name = document.createElement("div");
            name.id = "play-stats-boxscore-left-name-" + (i + 1);
            name.className = "play-stats-boxscore-left-name";
            boxscore_left.appendChild(name);
            name.style.background = "linear-gradient(90deg, " + roster[i].color2 + ", " + roster[i].color1 + ")";
            name.style.color = roster[i].color3;

            let first = document.createElement("div");
            first.id = "play-stats-boxscore-left-name-first-" + (i + 1);
            first.className = "play-stats-boxscore-left-name-first";
            name.appendChild(first);
            first.innerHTML = roster[i].first;

            let last = document.createElement("div");
            last.id = "play-stats-boxscore-left-name-last-" + (i + 1);
            last.className = "play-stats-boxscore-left-name-last";
            name.appendChild(last);
            last.innerHTML = roster[i].last;

            let stats_row = document.createElement("div");
            stats_row.id = "play-stats-boxscore-right-stats-row-" + (i + 1);
            stats_row.className = "play-stats-boxscore-right-stats-row";
            boxscore_stats.appendChild(stats_row);

            let stats_array = boxscore_stats_array;

            for (let j = 0; j < stats_array.length; j++) {

                let itm = document.createElement("div");
                itm.id = "play-stats-boxscore-right-stats-row-" + (i + 1) + "-" + (j + 1);
                itm.className = "play-stats-boxscore-right-stats-row-itm";
                stats_row.appendChild(itm);
                itm.innerHTML = roster[i].gamestats.stats[stats_array[j]];
            }

        }

        let totals_stats_title = document.createElement("div");
        totals_stats_title.id = "play-stats-boxscore-left-totals-stats-title";
        totals_stats_title.className = "play-stats-boxscore-left-name";
        boxscore_left.appendChild(totals_stats_title);
        totals_stats_title.innerHTML = "Total";

        let totals_stats_row = document.createElement("div");
        totals_stats_row.id = "play-stats-boxscore-right-totals-stats-row";
        totals_stats_row.className = "play-stats-boxscore-right-stats-row";
        boxscore_stats.appendChild(totals_stats_row);

        for (let a = 0; a < boxscore_stats_array.length; a++) {

            let itm = document.createElement("div");
            itm.id = "play-stats-boxscore-right-totals-stats-row-" + (a + 1);
            itm.className = "play-stats-boxscore-right-stats-row-itm";
            totals_stats_row.appendChild(itm);
        }

        updateBoxscore(play);

    });

}

function updateBoxscore(play) {

    let current_agent = play.boxscoreView;
    let totals_obj = {};

    for (let j = 0; j < play.team[current_agent].roster.length; j++) {

        let player = play.team[current_agent].roster[j];

        for (let k = 0; k < boxscore_stats_array.length; k++) {

            let itm = document.getElementById("play-stats-boxscore-right-stats-row-" + (j + 1) + "-" + (k + 1));

            let value = player.gamestats.stats[boxscore_stats_array[k]];

            if (totals_obj[boxscore_stats_array[k]] == undefined) {

                totals_obj[boxscore_stats_array[k]] = value;

            } else {

                totals_obj[boxscore_stats_array[k]] += value;

            }

            if (boxscore_stats_array[k] == "min") {
                value = convertTime2MinuteSecond(value);
            } else if (["fgp", "3pp", "ftp"].indexOf(boxscore_stats_array[k]) > -1) {
                value += "%";
            } else if (boxscore_stats_array[k] == "tg") {
                value = fetchTeammateGrade(value);
            }

            itm.innerHTML = value;

        }
    }

    let idx = 0;
    for (let stat in totals_obj) {

        let div = document.getElementById("play-stats-boxscore-right-totals-stats-row-" + (idx + 1));
        idx += 1;

        if (stat == "min") {

            div.innerHTML = convertTime2MinuteSecond(totals_obj[stat]);

        } else if (["fgp", "3pp", "ftp"].indexOf(stat) > -1) {

            if (totals_obj[stat.replace(/p$/, "a")] > 0) {
                div.innerHTML = Math.round(totals_obj[stat.replace(/p$/, "m")] / totals_obj[stat.replace(/p$/, "a")] * 100) + "%";
            } else {
                div.innerHTML = "0%";
            }

        } else if (stat == "tg") {
            div.innerHTML = fetchTeammateGrade(totals_obj[stat] / 10);
        } else {

            div.innerHTML = totals_obj[stat];
        }

    }

}

function initializeGameStats() {

    let container = document.getElementById("play-stats-content");

    let game_stats_container = document.getElementById("play-stats-game-stats-container");
    if (game_stats_container == undefined) {
        game_stats_container = document.createElement("div");
        game_stats_container.id = "play-stats-game-stats-container";
        container.appendChild(game_stats_container);
    } else {
        game_stats_container.innerHTML = "";
    }

    // Game tracker
    let game_tracker_container = document.createElement("div");
    game_tracker_container.id = "play-stats-game-stats-game-tracker-container";
    game_tracker_container.className = "play-stats-game-stats-game-section";
    game_stats_container.appendChild(game_tracker_container);

    let game_tracker_header = document.createElement("div");
    game_tracker_header.id = "play-stats-game-stats-game-tracker-header";
    game_tracker_header.className = "play-stats-game-stats-game-header";
    game_tracker_container.appendChild(game_tracker_header);

    let game_tracker_title = document.createElement("div");
    game_tracker_title.id = "play-stats-game-stats-game-tracker-title";
    game_tracker_title.className = "play-stats-game-stats-game-title";
    game_tracker_header.appendChild(game_tracker_title);
    game_tracker_title.innerHTML = "Game Tracker";

    let game_tracker_content = document.createElement("div");
    game_tracker_content.id = "play-stats-game-stats-game-tracker-content";
    game_tracker_content.className = "play-stats-game-stats-game-content";
    game_tracker_container.appendChild(game_tracker_content);

    let game_tracker_chart_container = document.createElement("div");
    game_tracker_chart_container.id = "play-stats-game-stats-game-tracker-chart-container";
    game_tracker_chart_container.className = "play-stats-game-stats-game-chart-container";
    game_tracker_content.appendChild(game_tracker_chart_container);

    let game_tracker_leads_container = document.createElement("div");
    game_tracker_leads_container.id = "play-stats-game-stats-game-tracker-leads-container";
    game_tracker_leads_container.className = "play-stats-game-stats-game-leads-container";
    game_tracker_content.appendChild(game_tracker_leads_container);

    let game_tracker_box_container = document.createElement("div");
    game_tracker_box_container.id = "play-stats-game-stats-game-tracker-box-container";
    game_tracker_box_container.className = "play-stats-game-stats-game-box-container";
    game_tracker_content.appendChild(game_tracker_box_container);

    let game_tracker_box = document.createElement("div");
    game_tracker_box.id = "play-stats-game-stats-game-tracker-box";
    game_tracker_box.className = "play-stats-game-stats-game-box";
    game_tracker_box_container.appendChild(game_tracker_box);

    initializeGameTrackerChart();
    initializeGameTrackerLeads();
    initializeGameTrackerBox();

    let team_stats_container = document.createElement("div");
    team_stats_container.id = "play-stats-game-stats-team-stats-container";
    team_stats_container.className = "play-stats-game-stats-game-section";
    game_stats_container.appendChild(team_stats_container);

    let team_stats_header = document.createElement("div");
    team_stats_header.id = "play-stats-game-stats-team-stats-header";
    team_stats_header.className = "play-stats-game-stats-game-header";
    team_stats_container.appendChild(team_stats_header);

    let team_stats_title = document.createElement("div");
    team_stats_title.id = "play-stats-game-stats-team-stats-title";
    team_stats_title.className = "play-stats-game-stats-game-title";
    team_stats_header.appendChild(team_stats_title);
    team_stats_title.innerHTML = "Team Stats";

    let team_stats_content = document.createElement("div");
    team_stats_content.id = "play-stats-game-stats-team-stats-content";
    team_stats_content.className = "play-stats-game-stats-game-content";
    team_stats_container.appendChild(team_stats_content);

    initializeTeamStats();

}

function initializeGameTrackerChart() {

    let container = document.getElementById("play-stats-game-stats-game-tracker-chart-container");

    let wrapper = document.getElementById("wrapper");

    let width = wrapper.offsetWidth * .9;
    let height = wrapper.offsetWidth * .5;

    let canvas = document.createElement("canvas");
    canvas.id = "play-stats-game-stats-game-tracker-chart-canvas";
    container.appendChild(canvas);
    canvas.setAttribute("width", width);
    canvas.setAttribute("height", height);


    if (canvas.getContext) {

        let ctx = canvas.getContext("2d");

        let ticks = ["5", "10", "15", "20", "25", "30"];
        let mirror = [-1, 1];
        let x_origin = 25;
        let y_origin = height / 2;
        let w = Math.floor((width - x_origin - 20) / 48);

        ctx.beginPath();
        ctx.moveTo(x_origin, 10);
        ctx.lineTo(x_origin, height - 10);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(x_origin, height / 2);
        ctx.lineTo(width - x_origin, height / 2);
        ctx.stroke();

        let quarters = ["Q1", "Q2", "Q3", "Q4"];

        for (let x = 0; x < quarters.length; x++) {

            ctx.beginPath();
            ctx.moveTo(x_origin + (x + 1) * (12 * w), 10);
            ctx.lineTo(x_origin + (x + 1) * (12 * w), height - 10);
            ctx.stroke();

            ctx.strokeText(quarters[x], x_origin + (x * (12 * w)) + 5, height - 10);

        }

        for (let i = 0; i < ticks.length; i++) {

            for (let j = 0; j < mirror.length; j++) {

                let margin = y_origin + (mirror[j] * ticks[i] * 3);

                if (i == 0 & j == 0) {
                    ctx.strokeText("0", 5, height / 2);
                }

                ctx.strokeText(ticks[i], 5, margin);

                ctx.save();
                ctx.setLineDash([1, 4]);
                ctx.beginPath();
                ctx.strokeStyle = "grey";
                ctx.moveTo(x_origin, margin);
                ctx.lineTo(width - x_origin, margin);
                ctx.stroke();
                ctx.restore();

            }

        }

    }

}

function updateGameTrackerChart(play) {

    let canvas = document.getElementById("play-stats-game-stats-game-tracker-chart-canvas");
    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;
    let offset = 25;
    let color;

    if (canvas.getContext) {

        let ctx = canvas.getContext("2d");

        let w = Math.floor((width - offset - 20) / 48);
        let x = (Math.floor(Math.abs(2880 - play.time - 1) / 60) * w) + offset;
        let y = height / 2;
        let y_margin = (fetchScore(play, "usr") - fetchScore(play, "cpu")) * -3;

        if (y_margin > 0) {
            color = "#2A2723";
            ctx.fillStyle = color;
            ctx.fillRect(x, y, w, y_margin);
        } else {
            color = "#E1C773";
            ctx.fillStyle = color;
            ctx.fillRect(x, y - 2, w, y_margin);
        }


    }

}


function initializeGameTrackerLeads() {

    let container = document.getElementById("play-stats-game-stats-game-tracker-leads-container");

    let leads_array = ["Biggest Lead", "Times Tied", "Longest Run", "Leads Changes"];
    let leads_initial_values = ["0 | 0", "0", "0 | 0", "0"];

    for (let i = 0; i < leads_array.length; i++) {

        let leads_box = document.createElement("div");
        leads_box.id = "play-stats-game-stats-game-tracker-leads-box-" + (i + 1);
        leads_box.className = "play-stats-game-stats-game-tracker-leads-box";
        container.appendChild(leads_box);

        let leads_title = document.createElement("div");
        leads_title.id = "play-stats-game-stats-game-tracker-leads-title-" + (i + 1);
        leads_title.className = "play-stats-game-stats-game-tracker-leads-title";
        leads_box.appendChild(leads_title);
        leads_title.innerHTML = leads_array[i];

        let leads_value = document.createElement("div");
        leads_value.id = "play-stats-game-stats-game-tracker-leads-value-" + (i + 1);
        leads_value.className = "play-stats-game-stats-game-tracker-leads-value";
        leads_box.appendChild(leads_value);
        leads_value.innerHTML = leads_initial_values[i];

    }

}

function updateGameTrackerLeads(play) {

    // Biggest Lead
    let biggest_lead = document.getElementById("play-stats-game-stats-game-tracker-leads-value-1");

    let diff = fetchScore(play, "usr") - fetchScore(play, "cpu");

    if (diff > 0) {
        if (diff > play.gameTracker.biggestLead.usr) {
            play.gameTracker.biggestLead.usr = diff;
        }
    } else {
        if (Math.abs(diff) > play.gameTracker.biggestLead.cpu) {
            play.gameTracker.biggestLead.cpu = Math.abs(diff);
        }
    }

    biggest_lead.innerHTML = play.gameTracker.biggestLead.usr + " | " + play.gameTracker.biggestLead.cpu;

    // Times Tied
    let times_tied = document.getElementById("play-stats-game-stats-game-tracker-leads-value-2");

    if (fetchScore(play, "usr") == fetchScore(play, "cpu") & fetchScore(play, "usr") != 0) {
        if (fetchScore(play, "usr") > play.gameTracker.timesTied.lastTied) {
            play.gameTracker.timesTied.count++;
            play.gameTracker.timesTied.lastTied = fetchScore(play, "usr");
        }
    }

    times_tied.innerHTML = play.gameTracker.timesTied.count;

    // Longest Run
    let longest_run = document.getElementById("play-stats-game-stats-game-tracker-leads-value-3");

    if (fetchScore(play, "usr") > play.gameTracker.longestRun.usr.lastScore) {

        play.gameTracker.longestRun.cpu.currentRun = 0;
        play.gameTracker.longestRun.usr.currentRun += fetchScore(play, "usr") - play.gameTracker.longestRun.usr.lastScore;
        play.gameTracker.longestRun.usr.lastScore = fetchScore(play, "usr");

        if (play.gameTracker.longestRun.usr.currentRun > play.gameTracker.longestRun.usr.maxRun) {
            play.gameTracker.longestRun.usr.maxRun = play.gameTracker.longestRun.usr.currentRun;
        }

    } else if (fetchScore(play, "cpu") > play.gameTracker.longestRun.cpu.lastScore) {

        play.gameTracker.longestRun.usr.currentRun = 0;
        play.gameTracker.longestRun.cpu.currentRun += fetchScore(play, "cpu") - play.gameTracker.longestRun.cpu.lastScore;
        play.gameTracker.longestRun.cpu.lastScore = fetchScore(play, "cpu");

        if (play.gameTracker.longestRun.cpu.currentRun > play.gameTracker.longestRun.cpu.maxRun) {
            play.gameTracker.longestRun.cpu.maxRun = play.gameTracker.longestRun.cpu.currentRun;
        }

    } else {
        // Nothing happened, nobody scored
    }

    longest_run.innerHTML = play.gameTracker.longestRun.usr.maxRun + " | " + play.gameTracker.longestRun.cpu.maxRun

    // Times Tied
    let lead_changes = document.getElementById("play-stats-game-stats-game-tracker-leads-value-4");

    if (fetchScore(play, "usr") > fetchScore(play, "cpu")) {
        if (play.gameTracker.leadChanges.lastLead != "usr") {
            play.gameTracker.leadChanges.count++;
            play.gameTracker.leadChanges.lastLead = "usr";
        }
    } else if (fetchScore(play, "cpu") > fetchScore(play, "usr")) {
        if (play.gameTracker.leadChanges.lastLead != "cpu") {
            play.gameTracker.leadChanges.count++;
            play.gameTracker.leadChanges.lastLead = "cpu";
        }
    } else {
        // Do nothing, it's a tie
    }

    lead_changes.innerHTML = play.gameTracker.leadChanges.count;

    return (play);

}

function initializeGameTrackerBox() {

    let game_tracker_box = document.getElementById("play-stats-game-stats-game-tracker-box");

    let initial_teams = ["", "USR", "CPU"];

    let initial_quarters = [
        ["Q1", "Q2", "Q3", "Q4"],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ];

    let initial_totals = ["TOT", 0, 0];

    for (let i = 0; i < 3; i++) {

        let row = document.createElement("div");
        row.id = "play-stats-game-stats-game-tracker-box-row-" + (i + 1);
        row.className = "play-stats-game-stats-game-tracker-box-row";
        game_tracker_box.appendChild(row);

        let teams_row = document.createElement("div");
        teams_row.id = "play-stats-game-stats-game-tracker-box-row-teams-" + (i + 1);
        teams_row.className = "play-stats-game-stats-game-tracker-box-row-teams";
        row.appendChild(teams_row);

        let t1_cell = document.createElement("div");
        t1_cell.id = "play-stats-game-stats-game-tracker-box-row-teams-" + (i + 1) + "-cell";
        t1_cell.className = "play-stats-game-stats-game-tracker-box-row-teams-cell";
        teams_row.appendChild(t1_cell);
        t1_cell.innerHTML = initial_teams[i];

        let quarters_row = document.createElement("div");
        quarters_row.id = "play-stats-game-stats-game-tracker-box-row-quarters-" + (i + 1);
        quarters_row.className = "play-stats-game-stats-game-tracker-box-row-quarters";
        row.appendChild(quarters_row);

        for (let j = 0; j < initial_quarters[0].length; j++) {

            let q_cell = document.createElement("div");
            q_cell.id = "play-stats-game-stats-game-tracker-box-row-quarters-" + (i + 1) + "-cell-" + (j + 1);
            q_cell.className = "play-stats-game-stats-game-tracker-box-row-cell";
            quarters_row.appendChild(q_cell);
            q_cell.innerHTML = initial_quarters[i][j];

        }

        let totals_row = document.createElement("div");
        totals_row.id = "play-stats-game-stats-game-tracker-box-row-totals-" + (i + 1);
        totals_row.className = "play-stats-game-stats-game-tracker-box-row-totals";
        row.appendChild(totals_row);

        let t2_cell = document.createElement("div");
        t2_cell.id = "play-stats-game-stats-game-tracker-box-row-totals-" + (i + 1) + "-cell";
        t1_cell.className = "play-stats-game-stats-game-tracker-box-row-totals-cell";
        totals_row.appendChild(t2_cell);
        t2_cell.innerHTML = initial_totals[i];

    }

}

function updateGameTrackerBox(play) {

    let quarter = fetchQuarter(play);

    if (quarter > 4) {

        initializeOvertimeGameTrackerBox(play);

    }

    for (let i = 0; i < quarter; i++) {

        let usr_cell = document.getElementById("play-stats-game-stats-game-tracker-box-row-quarters-2-cell-" + (i + 1));
        usr_cell.innerHTML = play.score.usr[i];
        let cpu_cell = document.getElementById("play-stats-game-stats-game-tracker-box-row-quarters-3-cell-" + (i + 1));
        cpu_cell.innerHTML = play.score.cpu[i];

        if (play.score.usr[i] == play.score.cpu[i]) {
            usr_cell.style.fontWeight = "normal";
            cpu_cell.style.fontWeight = "normal";
        } else if (play.score.usr[i] > play.score.cpu[i]) {
            usr_cell.style.fontWeight = "bold";
            cpu_cell.style.fontWeight = "normal";
        } else {
            usr_cell.style.fontWeight = "normal";
            cpu_cell.style.fontWeight = "bold";
        }

    }

    let usr_tot = document.getElementById("play-stats-game-stats-game-tracker-box-row-totals-2-cell");
    usr_tot.innerHTML = fetchScore(play, "usr");

    let cpu_tot = document.getElementById("play-stats-game-stats-game-tracker-box-row-totals-3-cell");
    cpu_tot.innerHTML = fetchScore(play, "cpu");

    if (fetchScore(play, "usr") == fetchScore(play, "cpu")) {
        usr_tot.style.fontWeight = "normal";
        cpu_tot.style.fontWeight = "normal";
    } else if (fetchScore(play, "usr") > fetchScore(play, "cpu")) {
        usr_tot.style.fontWeight = "bold";
        cpu_tot.style.fontWeight = "normal";
    } else {
        usr_tot.style.fontWeight = "normal";
        cpu_tot.style.fontWeight = "bold";
    }

}

function initializeOvertimeGameTrackerBox(play) {

    let quarter = fetchQuarter(play);
    let check = document.getElementById("play-stats-game-stats-game-tracker-box-row-quarters-1-cell-" + quarter);

    if (check == undefined) {

        let initial_ot_quarters = ["OT" + (quarter - 4), 0, 0];

        for (let i = 0; i < initial_ot_quarters.length; i++) {

            let q_row = document.getElementById("play-stats-game-stats-game-tracker-box-row-quarters-" + (i + 1));

            let cell = document.createElement("div");
            cell.id = "play-stats-game-stats-game-tracker-box-row-quarters-" + (i + 1) + "-cell-" + quarter;
            cell.className = "play-stats-game-stats-game-tracker-box-row-cell";
            q_row.appendChild(cell);
            cell.innerHTML = initial_ot_quarters[i];

        }

    }

}

function initializeTeamStats() {

    let content = document.getElementById("play-stats-game-stats-team-stats-content");

    let sct_1 = document.createElement("div");
    sct_1.id = "play-stats-game-stats-team-stats-sct-1";
    content.appendChild(sct_1);

    let stats_array = ["pts", "dreb", "oreb", "ast", "stl", "blk", "tov", "fgp", "3pp", "ftp"];

    for (let i = 0; i < stats_array.length; i++) {

        let row = document.createElement("div");
        row.id = "play-stats-game-stats-team-stats-row-" + (i + 1);
        row.className = "play-stats-game-stats-team-stats-row";
        sct_1.appendChild(row);

        let usr_value = document.createElement("div");
        usr_value.id = "play-stats-game-stats-team-stats-usr-value-" + (i + 1);
        usr_value.className = "play-stats-game-stats-team-stats-value";
        row.appendChild(usr_value);
        usr_value.innerHTML = "0";

        let usr_bar = document.createElement("div");
        usr_bar.id = "play-stats-game-stats-team-stats-usr-bar-" + (i + 1);
        usr_bar.className = "play-stats-game-stats-team-stats-bar";
        row.appendChild(usr_bar);

        let usr_out = document.createElement("div");
        usr_out.id = "play-stats-game-stats-team-stats-usr-out-" + (i + 1);
        usr_out.className = "play-stats-game-stats-team-stats-usr-out";
        usr_bar.appendChild(usr_out);

        let usr_in = document.createElement("div");
        usr_in.id = "play-stats-game-stats-team-stats-usr-in-" + (i + 1);
        usr_in.className = "play-stats-game-stats-team-stats-in";
        usr_out.appendChild(usr_in);
        usr_in.style.background = "#E1C773";

        let category = document.createElement("div");
        category.id = "play-stats-game-stats-team-stats-category-" + (i + 1);
        category.className = "play-stats-game-stats-team-stats-category";
        row.appendChild(category);
        category.innerHTML = stats_array[i].toUpperCase();

        let cpu_bar = document.createElement("div");
        cpu_bar.id = "play-stats-game-stats-team-stats-cpu-bar-" + (i + 1);
        cpu_bar.className = "play-stats-game-stats-team-stats-bar";
        row.appendChild(cpu_bar);

        let cpu_out = document.createElement("div");
        cpu_out.id = "play-stats-game-stats-team-stats-cpu-out-" + (i + 1);
        cpu_out.className = "play-stats-game-stats-team-stats-cpu-out";
        cpu_bar.appendChild(cpu_out);

        let cpu_in = document.createElement("div");
        cpu_in.id = "play-stats-game-stats-team-stats-cpu-in-" + (i + 1);
        cpu_in.className = "play-stats-game-stats-team-stats-in";
        cpu_out.appendChild(cpu_in);
        cpu_in.style.background = "#2A2723";

        let cpu_value = document.createElement("div");
        cpu_value.id = "play-stats-game-stats-team-stats-cpu-value-" + (i + 1);
        cpu_value.className = "play-stats-game-stats-team-stats-value";
        row.appendChild(cpu_value);
        cpu_value.innerHTML = "0";

    }

    let sct_2 = document.createElement("div");
    sct_2.id = "play-stats-game-stats-team-stats-sct-2";
    content.appendChild(sct_2);

}

function updateTeamStats(play) {

    let stats_array = ["pts", "dreb", "oreb", "ast", "stl", "blk", "tov", "fgp", "3pp", "ftp"];

    for (let i = 0; i < 10; i++) {

        let usr_value = document.getElementById("play-stats-game-stats-team-stats-usr-value-" + (i + 1));
        let cpu_value = document.getElementById("play-stats-game-stats-team-stats-cpu-value-" + (i + 1));
        let usr_in = document.getElementById("play-stats-game-stats-team-stats-usr-in-" + (i + 1));
        let cpu_in = document.getElementById("play-stats-game-stats-team-stats-cpu-in-" + (i + 1));

        if (["fgp", "3pp", "ftp"].indexOf(stats_array[i]) > -1) {

            let usr_m = fetchTeamTotals(play, stats_array[i].replace(/p$/, "m"), "usr");
            let cpu_m = fetchTeamTotals(play, stats_array[i].replace(/p$/, "m"), "cpu");
            let usr_a = fetchTeamTotals(play, stats_array[i].replace(/p$/, "a"), "usr");
            let cpu_a = fetchTeamTotals(play, stats_array[i].replace(/p$/, "a"), "cpu");

            let usr_percent;
            let cpu_percent;

            if (usr_a > 0) {
                usr_percent = Math.round(usr_m / usr_a * 100) + "%";
            } else {
                usr_percent = 0;
            }

            if (cpu_a > 0) {
                cpu_percent = Math.round(cpu_m / cpu_a * 100) + "%";
            } else {
                cpu_percent = 0;
            }

            usr_value.innerHTML = usr_percent;
            cpu_value.innerHTML = cpu_percent;

            usr_in.style.width = usr_percent;
            cpu_in.style.width = cpu_percent;


        } else {

            let usr_v = fetchTeamTotals(play, stats_array[i], "usr");
            let cpu_v = fetchTeamTotals(play, stats_array[i], "cpu");

            usr_value.innerHTML = usr_v;
            cpu_value.innerHTML = cpu_v;

            if (stats_array[i] == "pts") {
                if (usr_v > 100 | cpu_v > 100) {
                    usr_in.style.width = (usr_v / 2) + "%";
                    cpu_in.style.width = (cpu_v / 2) + "%";
                }
            } else {
                usr_in.style.width = usr_v + "%";
                cpu_in.style.width = cpu_v + "%";
            }

        }

    }

}

function fetchTeamTotals(play, cat, agent) {

    let total = 0;

    for (let i = 0; i < play.team[agent].roster.length; i++) {
        total += play.team[agent].roster[i].gamestats.stats[cat];
    }

    return (total);

}

function fetchTeammateGrade(tg) {

    let grade;

    if (tg >= 0 & tg < 7) {
        grade = "E";
    } else if (tg >= 7 & tg < 14) {
        grade = "D-";
    } else if (tg >= 14 & tg < 21) {
        grade = "D";
    } else if (tg >= 21 & tg < 28) {
        grade = "C-";
    } else if (tg >= 28 & tg < 35) {
        grade = "C";
    } else if (tg >= 35 & tg < 42) {
        grade = "B-";
    } else if (tg >= 42 & tg < 49) {
        grade = "B";
    } else if (tg >= 49 & tg < 56) {
        grade = "B+";
    } else if (tg >= 56 & tg < 63) {
        grade = "A-";
    } else if (tg >= 63 & tg < 70) {
        grade = "A";
    } else if (tg >= 70) {
        grade = "A+";
    } else {
        console.log("Error");
    }

    return (grade);

}

function convertTime2MinuteSecond(time) {

    let minutes = Math.floor(time / 60);
    let seconds = (time % 60);

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    return (minutes + ":" + seconds);

}

function updateTime(play) {

    let time = play.time;
    let overtime = play.overtime;
    let quarter;

    let minutes = Math.floor((time % 720) / 60);
    let seconds = ((time % 720) % 60);

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    if (overtime == 0) {
        quarter = "Period " + Math.ceil((2880 - time) / 720);
    } else {
        quarter = overtime + " OT";
    }

    document.getElementById("play-scoreboard-time").innerHTML = minutes + ":" + seconds;
    document.getElementById("play-scoreboard-period").innerHTML = quarter;

}

function fetchQuarter(play) {

    let time = play.time;
    let quarter;

    if (play.overtime == 0) {
        quarter = Math.ceil((2880 - time) / 720);
        if (quarter == 0) {
            quarter = 1;
        }
    } else {
        quarter = play.overtime + 4;
    }

    console.log(time, play.possessionDuration, quarter);

    return (quarter);

}

function initializePlayerIngameStats() {

    let stats = {};

    let stats_array = ["min", "pts", "reb", "ast", "stl", "blk", "ba", "fgm", "fga", "fgp", "3pm", "3pa", "3pp", "ftm", "fta", "ftp", "oreb", "dreb", "tov", "pf", "pm", "grade", "hotcold", "fgtracker", "tg"];

    for (let i = 0; i < stats_array.length; i++) {

        if (stats_array[i] == "tg") {
            stats[stats_array[i]] = 28;
        } else {
            stats[stats_array[i]] = 0;
        }

    }

    return (stats);

}