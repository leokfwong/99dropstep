const userdata_json = [{
    "id": "0001",
    "level": 1,
    "experience": 0,
    "totalcoins": 5000,
    "filter": null,
    "sort": "overall",
    "order": "descending",
    "search": null,
    "team": 1
}];

const teams_json = [{
    "id": "1",
    "players": ["", "", "", "", "", "", "", "", "", ""],
    "coach": "",
    "arena": ""
}, {
    "id": "2",
    "players": ["", "", "", "", "", "", "", "", "", ""],
    "coach": "",
    "arena": ""
}, {
    "id": "3",
    "players": ["", "", "", "", "", "", "", "", "", ""],
    "coach": "",
    "arena": ""
}, {
    "id": "4",
    "players": ["", "", "", "", "", "", "", "", "", ""],
    "coach": "",
    "arena": ""
}, {
    "id": "5",
    "players": ["", "", "", "", "", "", "", "", "", ""],
    "coach": "",
    "arena": ""
}];

const shop_json = [{
    "id": "001",
    "code": "ttp",
    "name": "Trust The Process",
    "filename": "trust_the_process",
    "content": ["0001", "0002", "0003", "0004", "0005", "0006", "0007", "0008", "0009", "0010", "0011", "0012", "0013", "0014", "0015", "0016", "0017", "0018", "0019", "0020", "0021", "0022", "0023", "0024", "0025", "0026", "0027", "0028", "0029", "0030", "0031", "0032", "0033", "0034", "0035", "0036"],
    "price": 200
}, {
    "id": "002",
    "code": "wtn",
    "name": "We The North",
    "filename": "we_the_north",
    "content": ["0037", "0038", "0039", "0040", "0041", "0042", "0043", "0044", "0045", "0046", "0047", "0048", "0049", "0050", "0051", "0052", "0053", "0054", "0055", "0056", "0057", "0058", "0059", "0060", "0061", "0062", "0063", "0064", "0065", "0066", "0067", "0068", "0069", "0070", "0071", "0072"],
    "price": 200
}, {
    "id": "003",
    "code": "tsp",
    "name": "The Splash Brothers",
    "filename": "the_splash_brothers",
    "content": ["0073", "0074", "0075", "0076", "0077", "0078", "0079", "0080", "0081", "0082", "0083", "0084", "0085", "0086", "0087", "0088", "0089", "0090", "0091", "0092", "0093", "0094", "0095", "0096", "0097", "0098", "0099", "0100", "0101", "0102", "0103", "0104", "0105", "0106", "0107", "0108"],
    "price": 200
}, {
    "id": "004",
    "code": "ssol",
    "name": "Seven Seconds Or Less",
    "filename": "seven_seconds_or_less",
    "content": ["0109", "0110", "0111", "0112", "0113", "0114", "0115", "0116", "0117", "0118", "0119", "0120", "0121", "0122", "0123", "0124", "0125", "0126", "0127", "0128", "0129", "0130", "0131", "0132", "0133", "0134", "0135", "0136", "0137", "0138", "0139", "0140"],
    "price": 200
}, {
    "id": "005",
    "code": "klbj",
    "name": "King James",
    "filename": "king_james",
    "content": ["0141", "0142", "0143", "0144", "0145", "0146", "0147", "0148", "0149", "0150", "0151", "0152", "0153", "0154", "0155", "0156", "0157", "0158", "0159", "0160", "0161", "0162", "0163", "0164", "0165", "0166", "0167", "0168", "0169", "0170"],
    "price": 200
}, {
    "id": "006",
    "code": "tgf",
    "name": "The Greek Freak",
    "filename": "the_greek_freak",
    "content": ["0171", "0172", "0173", "0174", "0175", "0176", "0177", "0178", "0179", "0180", "0181", "0182", "0183", "0184", "0185", "0186", "0187", "0188", "0189", "0190", "0191", "0192", "0193", "0194", "0195", "0196", "0197", "0198", "0199", "0200"],
    "price": 200
}];

const off_stats_json = [{
    "attribute": "inside",
    "title": "Inside Scoring",
    "weight": 8
}, {
    "attribute": "dunk",
    "title": "Dunk",
    "weight": 1
}, {
    "attribute": "midrange",
    "title": "Midrange Scoring",
    "weight": 8
}, {
    "attribute": "outside",
    "title": "Outside Scoring",
    "weight": 7
}, {
    "attribute": "drawfoul",
    "title": "Drawing Foul",
    "weight": 4
}, {
    "attribute": "freethrow",
    "title": "Free Throw",
    "weight": 3
}, {
    "attribute": "passing",
    "title": "Passing",
    "weight": 4
}, {
    "attribute": "offensiveconsistency",
    "title": "Offensive Consistency",
    "weight": 5
}, {
    "attribute": "offensiverebound",
    "title": "Offensive Rebounding",
    "weight": 1
}];

const def_stats_json = [{
    "attribute": "interior",
    "title": "Interior Defense",
    "weight": 2
}, {
    "attribute": "perimeter",
    "title": "Perimeter Defense",
    "weight": 2
}, {
    "attribute": "steal",
    "title": "Steal",
    "weight": 1
}, {
    "attribute": "block",
    "title": "Block",
    "weight": 1
}, {
    "attribute": "defensiveconsistency",
    "title": "Defensive Consistency",
    "weight": 5
}, {
    "attribute": "defensiverebound",
    "title": "Defensive Rebounding",
    "weight": 3
}];

const phys_stats_json = [{
    "attribute": "speed",
    "title": "Speed",
    "weight": 1
}, {
    "attribute": "vertical",
    "title": "Vertical",
    "weight": 1
}, {
    "attribute": "strength",
    "title": "Strength",
    "weight": 1
}, {
    "attribute": "hands",
    "title": "Hands",
    "weight": 1
}, {
    "attribute": "stamina",
    "title": "Stamina",
    "weight": 6
}, {
    "attribute": "hustle",
    "title": "Hustle",
    "weight": 1
}];

const scoring_array = ["inside", "dunk", "midrange", "outside"];

const sub_colors = ["#d64541", "#fcb941", "#4daf7c", "#2c82c9", "#736598"];

let boxscore_stats_array = ["min", "pts", "reb", "ast", "stl", "blk", "ba", "fgm", "fga", "fgp", "3pm", "3pa", "3pp", "ftm", "fta", "ftp", "oreb", "dreb", "tov", "pf", "pm", "tg"];

let time_distribution_default = [{"seconds":1,"probability":1},{"seconds":2,"probability":1},{"seconds":3,"probability":1},{"seconds":4,"probability":1},{"seconds":5,"probability":1},{"seconds":6,"probability":2},{"seconds":7,"probability":2},{"seconds":8,"probability":2},{"seconds":9,"probability":2},{"seconds":10,"probability":2},{"seconds":11,"probability":4},{"seconds":12,"probability":5},{"seconds":13,"probability":6},{"seconds":14,"probability":7},{"seconds":15,"probability":9},{"seconds":16,"probability":10},{"seconds":17,"probability":9},{"seconds":18,"probability":8},{"seconds":19,"probability":7},{"seconds":20,"probability":6},{"seconds":21,"probability":5},{"seconds":22,"probability":4},{"seconds":23,"probability":3},{"seconds":24,"probability":2}];

let playoffs_teams_json = [{
    "id": "0001",
    "name": "New York Knicks",
    "season": "2018-2019",
    "roster": ["0288", "0289", "0290", "0292", "0291", "0125", "0293", "0185", "0063", "0126"],
    "image": "new_york_knicks_2018-2019_banner"
}, {
    "id": "0002",
    "name": "Los Angeles Lakers",
    "season": "2008-2009",
    "roster": ["0295", "0189", "0298", "0297", "0294", "0299", "0037", "0151", "0296", "0148"],
    "image": "losangeles_lakers_2008-2009_banner"
}]

const players_json = [{
    "id": "0001",
    "type": "player",
    "first": "Steve",
    "last": "Nash",
    "height": "6-3",
    "weight": "195",
    "number": 13,
    "country": "Canada",
    "team": "Phoenix Suns",
    "conference": "Western Conference",
    "season": "2006-2007",
    "salary": 20,
    "unlockedlevel": 98,
    "tier": 0,
    "rarity": "Legendary",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 74,
            "tendency": 34
        },
        "dunk": {
            "value": 50,
            "tendency": 0
        },
        "midrange": {
            "value": 77,
            "tendency": 33
        },
        "outside": {
            "value": 80,
            "tendency": 33
        },
        "drawfoul": 60,
        "freethrow": 90,
        "interior": 65,
        "perimeter": 81,
        "offensiverebound": 61,
        "defensiverebound": 68,
        "speed": 92,
        "vertical": 75,
        "strength": 66,
        "hands": 98,
        "stamina": 94,
        "hustle": 92,
        "passing": 99,
        "steal": 56,
        "block": 42,
        "offensiveconsistency": 98,
        "defensiveconsistency": 81
    },
    "position": "PG",
    "fgaintensity": 2,
    "fgaaverage": 13,
    "color1": "#f29f3f",
    "color2": "#cc663e",
    "color3": "#ffffff",
    "image": "nash_steve_phoenix_suns"
}, {
    "id": "0002",
    "type": "player",
    "first": "Gary",
    "last": "Payton",
    "height": "6-4",
    "weight": "180",
    "number": 20,
    "country": "United States",
    "team": "Seattle SuperSonics",
    "conference": "Western Conference",
    "season": "1999-2000",
    "salary": 11,
    "unlockedlevel": 97,
    "tier": 0,
    "rarity": "Rare",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 80,
            "tendency": 36
        },
        "dunk": {
            "value": 40,
            "tendency": 0
        },
        "midrange": {
            "value": 78,
            "tendency": 37
        },
        "outside": {
            "value": 72,
            "tendency": 27
        },
        "drawfoul": 68,
        "freethrow": 74,
        "interior": 68,
        "perimeter": 92,
        "offensiverebound": 65,
        "defensiverebound": 75,
        "speed": 86,
        "vertical": 70,
        "strength": 65,
        "hands": 90,
        "stamina": 98,
        "hustle": 85,
        "passing": 88,
        "steal": 79,
        "block": 43,
        "offensiveconsistency": 90,
        "defensiveconsistency": 90
    },
    "position": "PG",
    "fgaintensity": 1,
    "fgaaverage": 20,
    "color1": "#48605e",
    "color2": "#254437",
    "color3": "#f4c542",
    "image": "payton_gary_seattle_supersonics"
}, {
    "id": "0003",
    "type": "player",
    "first": "Allen",
    "last": "Iverson",
    "height": "6-0",
    "weight": "165",
    "number": 3,
    "team": "Philadelphia 76ers",
    "country": "United States",
    "conference": "Eastern Conference",
    "season": "2001-2002",
    "salary": 11,
    "unlockedlevel": 91,
    "tier": 0,
    "rarity": "Legendary",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 80,
            "tendency": 36
        },
        "dunk": {
            "value": 70,
            "tendency": 1
        },
        "midrange": {
            "value": 86,
            "tendency": 38
        },
        "outside": {
            "value": 75,
            "tendency": 25
        },
        "drawfoul": 86,
        "freethrow": 81,
        "interior": 60,
        "perimeter": 76,
        "offensiverebound": 62,
        "defensiverebound": 70,
        "speed": 96,
        "vertical": 97,
        "strength": 65,
        "hands": 98,
        "stamina": 99,
        "hustle": 97,
        "passing": 75,
        "steal": 97,
        "block": 43,
        "offensiveconsistency": 98,
        "defensiveconsistency": 75
    },
    "position": "PG/SG",
    "fgaintensity": 2,
    "fgaaverage": 28,
    "color1": "#ebebf7",
    "color2": "#ffffff",
    "color3": "#1e1d1b",
    "image": "iverson_allen_philadelphia_sixers"
}, {
    "id": "0004",
    "type": "player",
    "first": "Dirk",
    "last": "Nowitzki",
    "number": 47,
    "height": "7-0",
    "weight": "245",
    "team": "Dallas Mavericks",
    "country": "Germany",
    "conference": "Western Conference",
    "season": "2010-2011",
    "salary": 17,
    "unlockedlevel": 99,
    "tier": 0,
    "rarity": "Legendary",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 77,
            "tendency": 28
        },
        "dunk": {
            "value": 81,
            "tendency": 1
        },
        "midrange": {
            "value": 85,
            "tendency": 38
        },
        "outside": {
            "value": 69,
            "tendency": 33
        },
        "drawfoul": 71,
        "freethrow": 89,
        "interior": 85,
        "perimeter": 75,
        "offensiverebound": 62,
        "defensiverebound": 80,
        "speed": 70,
        "vertical": 75,
        "strength": 88,
        "hands": 95,
        "stamina": 94,
        "hustle": 90,
        "passing": 64,
        "steal": 50,
        "block": 49,
        "offensiveconsistency": 98,
        "defensiveconsistency": 90
    },
    "position": "PF",
    "fgaintensity": 2,
    "fgaaverage": 16,
    "color1": "#263061",
    "color2": "#314f95",
    "color3": "#ffffff",
    "image": "nowitzki_dirk_dallas_mavericks"
}, {
    "id": "0005",
    "type": "player",
    "first": "Reggie",
    "last": "Miller",
    "number": 31,
    "height": "6-7",
    "weight": "185",
    "team": "Indiana Pacers",
    "country": "United States",
    "conference": "Eastern Conference",
    "season": "1989-1990",
    "salary": 10,
    "unlockedlevel": 93,
    "tier": 0,
    "rarity": "Rare",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 72,
            "tendency": 26
        },
        "dunk": {
            "value": 74,
            "tendency": 1
        },
        "midrange": {
            "value": 84,
            "tendency": 35
        },
        "outside": {
            "value": 82,
            "tendency": 38
        },
        "drawfoul": 70,
        "freethrow": 88,
        "interior": 62,
        "perimeter": 79,
        "offensiverebound": 62,
        "defensiverebound": 67,
        "speed": 82,
        "vertical": 81,
        "strength": 79,
        "hands": 85,
        "stamina": 97,
        "hustle": 80,
        "passing": 67,
        "steal": 58,
        "block": 46,
        "offensiveconsistency": 95,
        "defensiveconsistency": 70
    },
    "position": "SG",
    "fgaintensity": 2,
    "fgaaverage": 15,
    "color1": "#27273f",
    "color2": "#0c0c0e",
    "color3": "#f7b716",
    "image": "miller_reggie_indiana_pacers"
}, {
    "id": "0006",
    "type": "player",
    "first": "Stephon",
    "last": "Marbury",
    "height": "6-2",
    "weight": "180",
    "number": 3,
    "country": "United States",
    "team": "New York Knicks",
    "conference": "Eastern Conference",
    "season": "2004-2005",
    "salary": 14,
    "unlockedlevel": 89,
    "tier": 1,
    "rarity": "Rare",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 75,
            "tendency": 34
        },
        "dunk": {
            "value": 72,
            "tendency": 0
        },
        "midrange": {
            "value": 77,
            "tendency": 36
        },
        "outside": {
            "value": 76,
            "tendency": 30
        },
        "drawfoul": 74,
        "freethrow": 83,
        "interior": 60,
        "perimeter": 79,
        "offensiverebound": 62,
        "defensiverebound": 65,
        "speed": 96,
        "vertical": 92,
        "strength": 64,
        "hands": 77,
        "stamina": 97,
        "hustle": 92,
        "passing": 85,
        "steal": 71,
        "block": 42,
        "offensiveconsistency": 95,
        "defensiveconsistency": 80
    },
    "position": "PG",
    "fgaintensity": 2,
    "fgaaverage": 16,
    "color1": "#283a87",
    "color2": "#1f1f54",
    "color3": "#f16722",
    "image": "marbury_stephon_newyork_knicks"
}, {
    "id": "0007",
    "type": "player",
    "first": "Tracy",
    "last": "McGrady",
    "height": "6-8",
    "weight": "210",
    "number": 1,
    "country": "United States",
    "team": "Houston Rockets",
    "conference": "Western Conference",
    "season": "2006-2007",
    "salary": 16,
    "unlockedlevel": 90,
    "tier": 1,
    "rarity": "Epic",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 73,
            "tendency": 27
        },
        "dunk": {
            "value": 89,
            "tendency": 7
        },
        "midrange": {
            "value": 90,
            "tendency": 34
        },
        "outside": {
            "value": 78,
            "tendency": 32
        },
        "drawfoul": 74,
        "freethrow": 71,
        "interior": 66,
        "perimeter": 80,
        "offensiverebound": 63,
        "defensiverebound": 73,
        "speed": 87,
        "vertical": 90,
        "strength": 75,
        "hands": 88,
        "stamina": 95,
        "hustle": 79,
        "passing": 79,
        "steal": 66,
        "block": 48,
        "offensiveconsistency": 95,
        "defensiveconsistency": 80
    },
    "position": "SG/SF",
    "fgaintensity": 2,
    "fgaaverage": 21,
    "color1": "#e22727",
    "color2": "#851515",
    "color3": "#ffffff",
    "image": "mcgrady_tracy_houston_rockets"
}, {
    "id": "0008",
    "type": "player",
    "first": "Carmelo",
    "last": "Anthony",
    "height": "6-8",
    "weight": "240",
    "number": 7,
    "country": "United States",
    "team": "Oklahoma City Thunder",
    "conference": "Western Conference",
    "season": "2017-2018",
    "salary": 26,
    "unlockedlevel": 79,
    "tier": 1,
    "rarity": "Rare",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 72,
            "tendency": 17
        },
        "dunk": {
            "value": 78,
            "tendency": 1
        },
        "midrange": {
            "value": 78,
            "tendency": 41
        },
        "outside": {
            "value": 80,
            "tendency": 41
        },
        "drawfoul": 57,
        "freethrow": 77,
        "interior": 69,
        "perimeter": 67,
        "offensiverebound": 63,
        "defensiverebound": 74,
        "speed": 78,
        "vertical": 70,
        "strength": 78,
        "hands": 75,
        "stamina": 93,
        "hustle": 77,
        "passing": 59,
        "steal": 52,
        "block": 49,
        "offensiveconsistency": 85,
        "defensiveconsistency": 55
    },
    "position": "SF/PF",
    "fgaintensity": 1,
    "fgaaverage": 15,
    "color1": "#152435",
    "color2": "#0d1723",
    "color3": "#f75848",
    "image": "anthony_carmelo_oklahomacity_thunder"
}, {
    "id": "0009",
    "type": "player",
    "first": "Jimmy",
    "last": "Butler",
    "height": "6-8",
    "weight": "236",
    "number": 23,
    "country": "United States",
    "team": "Minnesota Timberwolves",
    "conference": "Western Conference",
    "season": "2017-2018",
    "salary": 19,
    "unlockedlevel": 76,
    "tier": 1,
    "rarity": "Rare",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 79,
            "tendency": 37
        },
        "dunk": {
            "value": 84,
            "tendency": 4
        },
        "midrange": {
            "value": 74,
            "tendency": 37
        },
        "outside": {
            "value": 72,
            "tendency": 22
        },
        "drawfoul": 76,
        "freethrow": 85,
        "interior": 68,
        "perimeter": 90,
        "offensiverebound": 66,
        "defensiverebound": 71,
        "speed": 88,
        "vertical": 78,
        "strength": 65,
        "hands": 93,
        "stamina": 95,
        "hustle": 97,
        "passing": 73,
        "steal": 81,
        "block": 46,
        "offensiveconsistency": 90,
        "defensiveconsistency": 90
    },
    "position": "SG/SF",
    "fgaintensity": 2,
    "fgaaverage": 16,
    "color1": "#b1c9d9",
    "color2": "#ffffff",
    "color3": "#192752",
    "image": "butler_jimmy_minnesota_timberwolves"
}, {
    "id": "0010",
    "type": "player",
    "first": "Kyle",
    "last": "Lowry",
    "height": "6-0",
    "weight": "205",
    "number": 7,
    "country": "United States",
    "team": "Toronto Raptors",
    "conference": "Eastern Conference",
    "season": "2017-2018",
    "salary": 12,
    "unlockedlevel": 77,
    "tier": 1,
    "rarity": "Rare",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 70,
            "tendency": 26
        },
        "dunk": {
            "value": 71,
            "tendency": 0
        },
        "midrange": {
            "value": 72,
            "tendency": 11
        },
        "outside": {
            "value": 87,
            "tendency": 63
        },
        "drawfoul": 60,
        "freethrow": 85,
        "interior": 63,
        "perimeter": 79,
        "offensiverebound": 63,
        "defensiverebound": 74,
        "speed": 82,
        "vertical": 68,
        "strength": 66,
        "hands": 90,
        "stamina": 93,
        "hustle": 92,
        "passing": 81,
        "steal": 62,
        "block": 43,
        "offensiveconsistency": 93,
        "defensiveconsistency": 80
    },
    "position": "PG",
    "fgaintensity": 2,
    "fgaaverage": 12,
    "color1": "#353433",
    "color2": "#191b1a",
    "color3": "#d4c17c",
    "image": "lowry_kyle_toronto_raptors"
}, {
    "id": "0011",
    "type": "player",
    "first": "Gordon",
    "last": "Hayward",
    "height": "6-8",
    "weight": "226",
    "team": "Boston Celtics",
    "country": "United States",
    "number": 20,
    "conference": "Eastern Conference",
    "season": "2017-2018",
    "salary": 30,
    "unlockedlevel": 78,
    "tier": 1,
    "rarity": "Rare",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 75,
            "tendency": 32
        },
        "dunk": {
            "value": 79,
            "tendency": 4
        },
        "midrange": {
            "value": 80,
            "tendency": 32
        },
        "outside": {
            "value": 74,
            "tendency": 32
        },
        "drawfoul": 56,
        "freethrow": 89,
        "interior": 69,
        "perimeter": 75,
        "offensiverebound": 63,
        "defensiverebound": 71,
        "speed": 80,
        "vertical": 71,
        "strength": 49,
        "hands": 84,
        "stamina": 89,
        "hustle": 79,
        "passing": 68,
        "steal": 60,
        "block": 44,
        "offensiveconsistency": 88,
        "defensiveconsistency": 78
    },
    "position": "SG/SF",
    "fgaintensity": 2,
    "fgaaverage": 9,
    "color1": "#235b37",
    "color2": "#12823a",
    "color3": "#ffffff",
    "image": "hayward_gordon_boston_celtics"
}, {
    "id": "0012",
    "type": "player",
    "first": "Draymond",
    "last": "Green",
    "height": "6-7",
    "weight": "230",
    "number": 23,
    "country": "United States",
    "team": "Golden State Warriors",
    "conference": "Western Conference",
    "season": "2017-2018",
    "salary": 16,
    "unlockedlevel": 69,
    "tier": 1,
    "rarity": "Rare",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 72,
            "tendency": 43
        },
        "dunk": {
            "value": 82,
            "tendency": 4
        },
        "midrange": {
            "value": 67,
            "tendency": 12
        },
        "outside": {
            "value": 76,
            "tendency": 41
        },
        "drawfoul": 57,
        "freethrow": 78,
        "interior": 90,
        "perimeter": 86,
        "offensiverebound": 65,
        "defensiverebound": 81,
        "speed": 73,
        "vertical": 61,
        "strength": 85,
        "hands": 91,
        "stamina": 93,
        "hustle": 91,
        "passing": 82,
        "steal": 68,
        "block": 60,
        "offensiveconsistency": 58,
        "defensiveconsistency": 91
    },
    "position": "PF/C",
    "fgaintensity": 0,
    "fgaaverage": 9,
    "color1": "#dadada",
    "color2": "#ffffff",
    "color3": "#3b44ab",
    "image": "green_draymond_goldenstate_warriors"
}, {
    "id": "0013",
    "type": "player",
    "first": "Damian",
    "last": "Lillard",
    "height": "6-3",
    "weight": "195",
    "number": 0,
    "country": "United States",
    "team": "Portland Trail Blazers",
    "conference": "Western Conference",
    "season": "2017-2018",
    "salary": 26,
    "unlockedlevel": 70,
    "tier": 1,
    "rarity": "Rare",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 75,
            "tendency": 35
        },
        "dunk": {
            "value": 79,
            "tendency": 1
        },
        "midrange": {
            "value": 74,
            "tendency": 20
        },
        "outside": {
            "value": 92,
            "tendency": 44
        },
        "drawfoul": 76,
        "freethrow": 92,
        "interior": 60,
        "perimeter": 63,
        "offensiverebound": 63,
        "defensiverebound": 69,
        "speed": 85,
        "vertical": 84,
        "strength": 61,
        "hands": 83,
        "stamina": 95,
        "hustle": 89,
        "passing": 79,
        "steal": 62,
        "block": 46,
        "offensiveconsistency": 92,
        "defensiveconsistency": 66
    },
    "position": "PG",
    "fgaintensity": 2,
    "fgaaverage": 19,
    "color1": "#edeff4",
    "color2": "#ffffff",
    "color3": "#252729",
    "image": "lillard_damian_portland_trailblazers"
}, {
    "id": "0014",
    "type": "player",
    "first": "Kevin",
    "last": "Love",
    "height": "6-10",
    "weight": "251",
    "number": 0,
    "country": "United States",
    "team": "Cleveland Cavaliers",
    "conference": "Eastern Conference",
    "season": "2017-2018",
    "salary": 23,
    "unlockedlevel": 72,
    "tier": 1,
    "rarity": "Rare",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 72,
            "tendency": 36
        },
        "dunk": {
            "value": 78,
            "tendency": 1
        },
        "midrange": {
            "value": 73,
            "tendency": 19
        },
        "outside": {
            "value": 81,
            "tendency": 45
        },
        "drawfoul": 65,
        "freethrow": 88,
        "interior": 71,
        "perimeter": 61,
        "offensiverebound": 68,
        "defensiverebound": 84,
        "speed": 67,
        "vertical": 65,
        "strength": 80,
        "hands": 88,
        "stamina": 90,
        "hustle": 89,
        "passing": 61,
        "steal": 54,
        "block": 46,
        "offensiveconsistency": 91,
        "defensiveconsistency": 58
    },
    "position": "PF/C",
    "fgaintensity": 1,
    "fgaaverage": 12,
    "color1": "#a33a3a",
    "color2": "#62120c",
    "color3": "#fda320",
    "image": "love_kevin_cleveland_cavaliers"
}, {
    "id": "0015",
    "type": "player",
    "first": "Chris",
    "last": "Bosh",
    "height": "6-11",
    "weight": "235",
    "number": 1,
    "country": "United States",
    "team": "Miami Heat",
    "conference": "Eastern Conference",
    "season": "2010-2011",
    "salary": 15,
    "unlockedlevel": 80,
    "tier": 1,
    "rarity": "Rare",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 76,
            "tendency": 39
        },
        "dunk": {
            "value": 85,
            "tendency": 5
        },
        "midrange": {
            "value": 77,
            "tendency": 54
        },
        "outside": {
            "value": 68,
            "tendency": 2
        },
        "drawfoul": 71,
        "freethrow": 82,
        "interior": 87,
        "perimeter": 70,
        "offensiverebound": 69,
        "defensiverebound": 80,
        "speed": 69,
        "vertical": 75,
        "strength": 75,
        "hands": 91,
        "stamina": 95,
        "hustle": 84,
        "passing": 61,
        "steal": 56,
        "block": 49,
        "offensiveconsistency": 85,
        "defensiveconsistency": 85
    },
    "position": "PF/C",
    "fgaintensity": 1,
    "fgaaverage": 14,
    "color1": "#a02037",
    "color2": "#f8f3fd",
    "color3": "#000000",
    "image": "bosh_chris_miami_heat"
}, {
    "id": "0016",
    "type": "player",
    "first": "Paul",
    "last": "Pierce",
    "height": "6-7",
    "weight": "235",
    "number": 34,
    "country": "United States",
    "team": "Boston Celtics",
    "conference": "Eastern Conference",
    "season": "2007-2008",
    "salary": 16,
    "unlockedlevel": 71,
    "tier": 1,
    "rarity": "Rare",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 73,
            "tendency": 35
        },
        "dunk": {
            "value": 79,
            "tendency": 1
        },
        "midrange": {
            "value": 77,
            "tendency": 31
        },
        "outside": {
            "value": 76,
            "tendency": 33
        },
        "drawfoul": 71,
        "freethrow": 84,
        "interior": 65,
        "perimeter": 75,
        "offensiverebound": 62,
        "defensiverebound": 73,
        "speed": 88,
        "vertical": 88,
        "strength": 70,
        "hands": 85,
        "stamina": 95,
        "hustle": 60,
        "passing": 71,
        "steal": 66,
        "block": 48,
        "offensiveconsistency": 85,
        "defensiveconsistency": 70
    },
    "position": "SF",
    "fgaintensity": 2,
    "fgaaverage": 14,
    "color1": "#609573",
    "color2": "#008349",
    "color3": "#ffffff",
    "image": "pierce_paul_boston_celtics"
}, {
    "id": "0017",
    "type": "player",
    "first": "DeMar",
    "last": "DeRozan",
    "height": "6-7",
    "weight": "221",
    "number": 10,
    "country": "United States",
    "team": "Toronto Raptors",
    "conference": "Eastern Conference",
    "season": "2017-2018",
    "salary": 28,
    "unlockedlevel": 73,
    "tier": 1,
    "rarity": "Rare",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 79,
            "tendency": 35
        },
        "dunk": {
            "value": 88,
            "tendency": 2
        },
        "midrange": {
            "value": 77,
            "tendency": 43
        },
        "outside": {
            "value": 74,
            "tendency": 20
        },
        "drawfoul": 75,
        "freethrow": 83,
        "interior": 67,
        "perimeter": 71,
        "offensiverebound": 62,
        "defensiverebound": 68,
        "speed": 80,
        "vertical": 83,
        "strength": 66,
        "hands": 87,
        "stamina": 94,
        "hustle": 78,
        "passing": 74,
        "steal": 62,
        "block": 45,
        "offensiveconsistency": 91,
        "defensiveconsistency": 58
    },
    "position": "SG",
    "fgaintensity": 2,
    "fgaaverage": 18,
    "color1": "#f43d72",
    "color2": "#b52a41",
    "color3": "#ffffff",
    "image": "derozan_demar_toronto_raptors"
}, {
    "id": "0018",
    "type": "player",
    "first": "Giannis",
    "last": "Antetokounmpo",
    "height": "6-11",
    "weight": "222",
    "number": 34,
    "country": "Greece",
    "team": "Milwaukee Bucks",
    "conference": "Eastern Conference",
    "season": "2017-2018",
    "salary": 22,
    "unlockedlevel": 92,
    "tier": 1,
    "rarity": "Rare",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 82,
            "tendency": 52
        },
        "dunk": {
            "value": 90,
            "tendency": 11
        },
        "midrange": {
            "value": 72,
            "tendency": 27
        },
        "outside": {
            "value": 71,
            "tendency": 10
        },
        "drawfoul": 97,
        "freethrow": 88,
        "interior": 87,
        "perimeter": 84,
        "offensiverebound": 71,
        "defensiverebound": 86,
        "speed": 85,
        "vertical": 88,
        "strength": 71,
        "hands": 94,
        "stamina": 95,
        "hustle": 94,
        "passing": 72,
        "steal": 71,
        "block": 61,
        "offensiveconsistency": 82,
        "defensiveconsistency": 78
    },
    "position": "PF",
    "fgaintensity": 2,
    "fgaaverage": 19,
    "color1": "#3d664c",
    "color2": "#16332c",
    "color3": "#e6d9bc",
    "image": "antetokounmpo_giannis_milwaukee_bucks"
}, {
    "id": "0019",
    "type": "player",
    "first": "John",
    "last": "Wall",
    "height": "6-4",
    "weight": "195",
    "number": 2,
    "country": "United States",
    "team": "Washington Wizards",
    "conference": "Eastern Conference",
    "season": "2017-2018",
    "salary": 18,
    "unlockedlevel": 74,
    "tier": 1,
    "rarity": "Rare",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 74,
            "tendency": 38
        },
        "dunk": {
            "value": 82,
            "tendency": 2
        },
        "midrange": {
            "value": 73,
            "tendency": 35
        },
        "outside": {
            "value": 79,
            "tendency": 25
        },
        "drawfoul": 70,
        "freethrow": 73,
        "interior": 78,
        "perimeter": 82,
        "offensiverebound": 61,
        "defensiverebound": 68,
        "speed": 96,
        "vertical": 83,
        "strength": 74,
        "hands": 87,
        "stamina": 94,
        "hustle": 88,
        "passing": 91,
        "steal": 68,
        "block": 57,
        "offensiveconsistency": 85,
        "defensiveconsistency": 85
    },
    "position": "PG",
    "fgaintensity": 1,
    "fgaaverage": 16,
    "color1": "#ef5959",
    "color2": "#c51b1e",
    "color3": "#ffffff",
    "image": "wall_john_washington_wizards"
}, {
    "id": "0020",
    "type": "player",
    "first": "Ray",
    "last": "Allen",
    "height": "6-5",
    "weight": "205",
    "number": 34,
    "country": "United States",
    "team": "Milwaukee Bucks",
    "conference": "Eastern Conference",
    "season": "2000-2001",
    "salary": 11,
    "unlockedlevel": 83,
    "tier": 2,
    "rarity": "Rare",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 75,
            "tendency": 30
        },
        "dunk": {
            "value": 80,
            "tendency": 2
        },
        "midrange": {
            "value": 78,
            "tendency": 32
        },
        "outside": {
            "value": 80,
            "tendency": 36
        },
        "drawfoul": 66,
        "freethrow": 89,
        "interior": 67,
        "perimeter": 74,
        "offensiverebound": 65,
        "defensiverebound": 71,
        "speed": 92,
        "vertical": 92,
        "strength": 62,
        "hands": 94,
        "stamina": 96,
        "hustle": 82,
        "passing": 72,
        "steal": 71,
        "block": 43,
        "offensiveconsistency": 81,
        "defensiveconsistency": 72
    },
    "position": "SG",
    "fgaintensity": 1,
    "fgaaverage": 16,
    "color1": "#38725a",
    "color2": "#284c3f",
    "color3": "#ffffff",
    "image": "allen_ray_milwaukee_bucks"
}, {
    "id": "0021",
    "type": "player",
    "first": "Kemba",
    "last": "Walker",
    "height": "6-1",
    "weight": "172",
    "number": 15,
    "country": "United States",
    "team": "Charlotte Hornets",
    "conference": "Eastern Conference",
    "season": "2017-2018",
    "salary": 12,
    "unlockedlevel": 34,
    "tier": 2,
    "rarity": "Rare",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 73,
            "tendency": 31
        },
        "dunk": {
            "value": 67,
            "tendency": 0
        },
        "midrange": {
            "value": 74,
            "tendency": 25
        },
        "outside": {
            "value": 91,
            "tendency": 44
        },
        "drawfoul": 68,
        "freethrow": 86,
        "interior": 67,
        "perimeter": 72,
        "offensiverebound": 61,
        "defensiverebound": 66,
        "speed": 95,
        "vertical": 77,
        "strength": 76,
        "hands": 83,
        "stamina": 94,
        "hustle": 85,
        "passing": 76,
        "steal": 62,
        "block": 45,
        "offensiveconsistency": 90,
        "defensiveconsistency": 75
    },
    "position": "PG/SG",
    "fgaintensity": 2,
    "fgaaverage": 17,
    "color1": "#38c6d5",
    "color2": "#3d909b",
    "color3": "#ffffff",
    "image": "walker_kemba_charlotte_hornets"
}, {
    "id": "0022",
    "type": "player",
    "first": "Nikola",
    "last": "Jokic",
    "height": "6-10",
    "weight": "250",
    "number": 15,
    "country": "Serbia",
    "team": "Denver Nuggets",
    "conference": "Western Conference",
    "season": "2017-2018",
    "salary": 2,
    "unlockedlevel": 35,
    "tier": 2,
    "rarity": "Rare",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 76,
            "tendency": 49
        },
        "dunk": {
            "value": 79,
            "tendency": 2
        },
        "midrange": {
            "value": 72,
            "tendency": 21
        },
        "outside": {
            "value": 76,
            "tendency": 28
        },
        "drawfoul": 64,
        "freethrow": 85,
        "interior": 76,
        "perimeter": 67,
        "offensiverebound": 74,
        "defensiverebound": 86,
        "speed": 68,
        "vertical": 53,
        "strength": 77,
        "hands": 89,
        "stamina": 93,
        "hustle": 89,
        "passing": 77,
        "steal": 64,
        "block": 52,
        "offensiveconsistency": 89,
        "defensiveconsistency": 64
    },
    "position": "PF/C",
    "fgaintensity": 1,
    "fgaaverage": 14,
    "color1": "#ffffff",
    "color2": "#ffffff",
    "color3": "#2c2726",
    "image": "jokic_nikola_denver_nuggets"
}, {
    "id": "0023",
    "type": "player",
    "first": "Pau",
    "last": "Gasol",
    "number": 16,
    "height": "7-0",
    "weight": "250",
    "team": "San Antonio Spurs",
    "country": "Spain",
    "conference": "Western Conference",
    "season": "2017-2018",
    "salary": 16,
    "unlockedlevel": 36,
    "tier": 2,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 71,
            "tendency": 48
        },
        "dunk": {
            "value": 79,
            "tendency": 3
        },
        "midrange": {
            "value": 70,
            "tendency": 30
        },
        "outside": {
            "value": 70,
            "tendency": 19
        },
        "drawfoul": 58,
        "freethrow": 76,
        "interior": 77,
        "perimeter": 74,
        "offensiverebound": 68,
        "defensiverebound": 80,
        "speed": 51,
        "vertical": 38,
        "strength": 72,
        "hands": 87,
        "stamina": 88,
        "hustle": 72,
        "passing": 66,
        "steal": 46,
        "block": 55,
        "offensiveconsistency": 72,
        "defensiveconsistency": 77
    },
    "position": "PF/C",
    "fgaintensity": 2,
    "fgaaverage": 8,
    "color1": "#111210",
    "color2": "#383837",
    "color3": "#ffffff",
    "image": "gasol_pau_sanantonio_spurs"
}, {
    "id": "0024",
    "type": "player",
    "first": "Lonzo",
    "last": "Ball",
    "height": "6-6",
    "weight": "190",
    "number": 2,
    "country": "United States",
    "team": "Los Angeles Lakers",
    "conference": "Western Conference",
    "season": "2017-2018",
    "salary": 6,
    "unlockedlevel": 37,
    "tier": 2,
    "rarity": "Rare",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 70,
            "tendency": 36
        },
        "dunk": {
            "value": 77,
            "tendency": 1
        },
        "midrange": {
            "value": 69,
            "tendency": 11
        },
        "outside": {
            "value": 80,
            "tendency": 52
        },
        "drawfoul": 53,
        "freethrow": 45,
        "interior": 61,
        "perimeter": 66,
        "offensiverebound": 66,
        "defensiverebound": 77,
        "speed": 84,
        "vertical": 77,
        "strength": 49,
        "hands": 80,
        "stamina": 94,
        "hustle": 71,
        "passing": 82,
        "steal": 75,
        "block": 52,
        "offensiveconsistency": 71,
        "defensiveconsistency": 68
    },
    "position": "PG",
    "fgaintensity": 1,
    "fgaaverage": 11,
    "color1": "#fcb827",
    "color2": "#f8ea5e",
    "color3": "#65418e",
    "image": "ball_lonzo_losangeles_lakers"
}, {
    "id": "0025",
    "type": "player",
    "first": "Paul",
    "last": "Millsap",
    "height": "6-8",
    "weight": "246",
    "number": 4,
    "country": "United States",
    "team": "Denver Nuggets",
    "conference": "Western Conference",
    "season": "2017-2018",
    "salary": 31,
    "unlockedlevel": 38,
    "tier": 2,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 76,
            "tendency": 49
        },
        "dunk": {
            "value": 81,
            "tendency": 3
        },
        "midrange": {
            "value": 69,
            "tendency": 22
        },
        "outside": {
            "value": 73,
            "tendency": 26
        },
        "drawfoul": 64,
        "freethrow": 70,
        "interior": 90,
        "perimeter": 82,
        "offensiverebound": 68,
        "defensiverebound": 74,
        "speed": 62,
        "vertical": 61,
        "strength": 82,
        "hands": 90,
        "stamina": 92,
        "hustle": 84,
        "passing": 65,
        "steal": 60,
        "block": 58,
        "offensiveconsistency": 85,
        "defensiveconsistency": 90
    },
    "position": "PF",
    "fgaintensity": 2,
    "fgaaverage": 11,
    "color1": "#20497a",
    "color2": "#10141c",
    "color3": "#ffda00",
    "image": "millsap_paul_denver_nuggets"
}, {
    "id": "0026",
    "type": "player",
    "first": "DAngelo",
    "last": "Russell",
    "height": "6-5",
    "weight": "195",
    "number": 1,
    "country": "United States",
    "team": "Brooklyn Nets",
    "conference": "Eastern Conference",
    "season": "2017-2018",
    "salary": 6,
    "unlockedlevel": 39,
    "tier": 2,
    "rarity": "Rare",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 73,
            "tendency": 34
        },
        "dunk": {
            "value": 67,
            "tendency": 0
        },
        "midrange": {
            "value": 73,
            "tendency": 25
        },
        "outside": {
            "value": 81,
            "tendency": 41
        },
        "drawfoul": 58,
        "freethrow": 74,
        "interior": 66,
        "perimeter": 70,
        "offensiverebound": 62,
        "defensiverebound": 68,
        "speed": 80,
        "vertical": 67,
        "strength": 65,
        "hands": 76,
        "stamina": 89,
        "hustle": 76,
        "passing": 74,
        "steal": 56,
        "block": 46,
        "offensiveconsistency": 85,
        "defensiveconsistency": 64
    },
    "position": "PG",
    "fgaintensity": 2,
    "fgaaverage": 14,
    "color1": "#060709",
    "color2": "#282423",
    "color3": "#ffffff",
    "image": "russell_dangelo_brooklyn_nets"
}, {
    "id": "0027",
    "type": "player",
    "first": "Brandon",
    "last": "Roy",
    "height": "6-6",
    "weight": "215",
    "number": 7,
    "country": "United States",
    "team": "Portland Trail Blazers",
    "conference": "Western Conference",
    "season": "2008-2009",
    "salary": 3,
    "unlockedlevel": 40,
    "tier": 2,
    "rarity": "Rare",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 77,
            "tendency": 41
        },
        "dunk": {
            "value": 81,
            "tendency": 2
        },
        "midrange": {
            "value": 80,
            "tendency": 40
        },
        "outside": {
            "value": 69,
            "tendency": 17
        },
        "drawfoul": 73,
        "freethrow": 82,
        "interior": 66,
        "perimeter": 76,
        "offensiverebound": 66,
        "defensiverebound": 69,
        "speed": 78,
        "vertical": 80,
        "strength": 78,
        "hands": 76,
        "stamina": 95,
        "hustle": 81,
        "passing": 74,
        "steal": 62,
        "block": 45,
        "offensiveconsistency": 88,
        "defensiveconsistency": 71
    },
    "position": "SG",
    "fgaintensity": 1,
    "fgaaverage": 17,
    "color1": "#2c2c33",
    "color2": "#0d0d11",
    "color3": "#ffffff",
    "image": "roy_brandon_portland_trailblazers"
}, {
    "id": "0028",
    "type": "player",
    "first": "Josh",
    "last": "Smith",
    "height": "6-9",
    "weight": "225",
    "number": 5,
    "country": "United States",
    "team": "Atlanta Hawks",
    "conference": "Eastern Conference",
    "season": "2009-2010",
    "salary": 11,
    "unlockedlevel": 68,
    "tier": 2,
    "rarity": "Rare",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 75,
            "tendency": 60
        },
        "dunk": {
            "value": 87,
            "tendency": 14
        },
        "midrange": {
            "value": 69,
            "tendency": 25
        },
        "outside": {
            "value": 67,
            "tendency": 1
        },
        "drawfoul": 68,
        "freethrow": 62,
        "interior": 81,
        "perimeter": 79,
        "offensiverebound": 75,
        "defensiverebound": 78,
        "speed": 83,
        "vertical": 90,
        "strength": 78,
        "hands": 77,
        "stamina": 94,
        "hustle": 81,
        "passing": 70,
        "steal": 73,
        "block": 72,
        "offensiveconsistency": 75,
        "defensiveconsistency": 77
    },
    "position": "PF",
    "fgaintensity": 1,
    "fgaaverage": 12,
    "color1": "#e23c39",
    "color2": "#c11717",
    "color3": "#ffffff",
    "image": "smith_josh_atlanta_hawks"
}, {
    "id": "0029",
    "type": "player",
    "first": "Otto",
    "last": "Porter",
    "height": "6-8",
    "weight": "198",
    "number": 22,
    "country": "United States",
    "team": "Washington Wizards",
    "conference": "Eastern Conference",
    "season": "2017-2018",
    "salary": 25,
    "unlockedlevel": 41,
    "tier": 2,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 72,
            "tendency": 29
        },
        "dunk": {
            "value": 78,
            "tendency": 1
        },
        "midrange": {
            "value": 76,
            "tendency": 35
        },
        "outside": {
            "value": 79,
            "tendency": 35
        },
        "drawfoul": 54,
        "freethrow": 83,
        "interior": 63,
        "perimeter": 70,
        "offensiverebound": 66,
        "defensiverebound": 75,
        "speed": 71,
        "vertical": 70,
        "strength": 45,
        "hands": 81,
        "stamina": 92,
        "hustle": 77,
        "passing": 62,
        "steal": 71,
        "block": 48,
        "offensiveconsistency": 57,
        "defensiveconsistency": 52
    },
    "position": "SF/PF",
    "fgaintensity": 0,
    "fgaaverage": 12,
    "color1": "#00295d",
    "color2": "#232639",
    "color3": "#ffffff",
    "image": "porter_otto_washington_wizards"
}, {
    "id": "0030",
    "type": "player",
    "first": "Manu",
    "last": "Ginobili",
    "height": "6-6",
    "weight": "205",
    "number": 20,
    "country": "Argentina",
    "team": "San Antonio Spurs",
    "conference": "Western Conference",
    "season": "2017-2018",
    "salary": 3,
    "unlockedlevel": 62,
    "tier": 2,
    "rarity": "Rare",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 70,
            "tendency": 42
        },
        "dunk": {
            "value": 75,
            "tendency": 1
        },
        "midrange": {
            "value": 69,
            "tendency": 15
        },
        "outside": {
            "value": 72,
            "tendency": 42
        },
        "drawfoul": 55,
        "freethrow": 84,
        "interior": 63,
        "perimeter": 70,
        "offensiverebound": 60,
        "defensiverebound": 63,
        "speed": 72,
        "vertical": 65,
        "strength": 41,
        "hands": 73,
        "stamina": 86,
        "hustle": 73,
        "passing": 64,
        "steal": 54,
        "block": 43,
        "offensiveconsistency": 58,
        "defensiveconsistency": 58
    },
    "position": "SF/SG",
    "fgaintensity": 1,
    "fgaaverage": 7,
    "color1": "#303030",
    "color2": "#090505",
    "color3": "#ffffff",
    "image": "ginobili_manu_sanantonio_spurs"
}, {
    "id": "0031",
    "type": "player",
    "first": "Rajon",
    "last": "Rondo",
    "height": "6-1",
    "weight": "186",
    "number": 9,
    "country": "United States",
    "team": "New Orleans Pelicans",
    "conference": "Western Conference",
    "season": "2017-2018",
    "salary": 3,
    "unlockedlevel": 42,
    "tier": 2,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 71,
            "tendency": 54
        },
        "dunk": {
            "value": 72,
            "tendency": 1
        },
        "midrange": {
            "value": 69,
            "tendency": 15
        },
        "outside": {
            "value": 71,
            "tendency": 30
        },
        "drawfoul": 50,
        "freethrow": 54,
        "interior": 64,
        "perimeter": 82,
        "offensiverebound": 61,
        "defensiverebound": 69,
        "speed": 83,
        "vertical": 80,
        "strength": 46,
        "hands": 93,
        "stamina": 89,
        "hustle": 88,
        "passing": 86,
        "steal": 62,
        "block": 43,
        "offensiveconsistency": 58,
        "defensiveconsistency": 73
    },
    "position": "PG",
    "fgaintensity": 0,
    "fgaaverage": 8,
    "color1": "#324263",
    "color2": "#1a243d",
    "color3": "#eedb97",
    "image": "rondo_rajon_neworleans_pelicans"
}, {
    "id": "0032",
    "type": "player",
    "first": "Derrick",
    "last": "Rose",
    "height": "6-3",
    "weight": "190",
    "number": 1,
    "country": "United States",
    "team": "Cleveland Cavaliers",
    "conference": "Eastern Conference",
    "season": "2017-2018",
    "salary": 2,
    "unlockedlevel": 43,
    "tier": 2,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 71,
            "tendency": 55
        },
        "dunk": {
            "value": 79,
            "tendency": 2
        },
        "midrange": {
            "value": 68,
            "tendency": 25
        },
        "outside": {
            "value": 69,
            "tendency": 18
        },
        "drawfoul": 54,
        "freethrow": 87,
        "interior": 68,
        "perimeter": 72,
        "offensiverebound": 61,
        "defensiverebound": 59,
        "speed": 91,
        "vertical": 87,
        "strength": 62,
        "hands": 83,
        "stamina": 84,
        "hustle": 90,
        "passing": 60,
        "steal": 46,
        "block": 43,
        "offensiveconsistency": 73,
        "defensiveconsistency": 58
    },
    "position": "PG",
    "fgaintensity": 1,
    "fgaaverage": 7,
    "color1": "#a73b47",
    "color2": "#771a1b",
    "color3": "#f6cf54",
    "image": "rose_derrick_cleveland_cavaliers"
}, {
    "id": "0033",
    "type": "player",
    "first": "Brook",
    "last": "Lopez",
    "height": "7-0",
    "weight": "275",
    "number": 11,
    "country": "United States",
    "team": "Los Angeles Lakers",
    "conference": "Western Conference",
    "season": "2017-2018",
    "salary": 23,
    "unlockedlevel": 44,
    "tier": 2,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 74,
            "tendency": 30
        },
        "dunk": {
            "value": 83,
            "tendency": 3
        },
        "midrange": {
            "value": 69,
            "tendency": 15
        },
        "outside": {
            "value": 78,
            "tendency": 41
        },
        "drawfoul": 55,
        "freethrow": 70,
        "interior": 74,
        "perimeter": 60,
        "offensiverebound": 64,
        "defensiverebound": 67,
        "speed": 31,
        "vertical": 56,
        "strength": 83,
        "hands": 80,
        "stamina": 88,
        "hustle": 69,
        "passing": 61,
        "steal": 48,
        "block": 60,
        "offensiveconsistency": 93,
        "defensiveconsistency": 60
    },
    "position": "C",
    "fgaintensity": 1,
    "fgaaverage": 11,
    "color1": "#723ba3",
    "color2": "#3c1c7f",
    "color3": "#f9be3d",
    "image": "lopez_brook_losangeles_lakers"
}, {
    "id": "0034",
    "type": "player",
    "first": "Devin",
    "last": "Booker",
    "height": "6-6",
    "weight": "206",
    "number": 1,
    "country": "United States",
    "team": "Phoenix Suns",
    "conference": "Western Conference",
    "season": "2017-2018",
    "salary": 2,
    "rarity": "Rare",
    "unlockedlevel": 45,
    "tier": 2,
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 77,
            "tendency": 31
        },
        "dunk": {
            "value": 78,
            "tendency": 1
        },
        "midrange": {
            "value": 77,
            "tendency": 32
        },
        "outside": {
            "value": 86,
            "tendency": 36
        },
        "drawfoul": 71,
        "freethrow": 88,
        "interior": 60,
        "perimeter": 65,
        "offensiverebound": 61,
        "defensiverebound": 71,
        "speed": 79,
        "vertical": 65,
        "strength": 57,
        "hands": 81,
        "stamina": 94,
        "hustle": 75,
        "passing": 72,
        "steal": 58,
        "block": 44,
        "offensiveconsistency": 93,
        "defensiveconsistency": 55
    },
    "position": "SG",
    "fgaintensity": 2,
    "fgaaverage": 20,
    "color1": "#5b538c",
    "color2": "#3a3062",
    "color3": "#fd9328",
    "image": "booker_devin_phoenix_suns"
}, {
    "id": "0035",
    "type": "player",
    "first": "Zach",
    "last": "LaVine",
    "height": "6-5",
    "weight": "189",
    "number": 8,
    "country": "United States",
    "team": "Chicago Bulls",
    "conference": "Eastern Conference",
    "season": "2017-2018",
    "salary": 3,
    "unlockedlevel": 46,
    "tier": 2,
    "rarity": "Rare",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 72,
            "tendency": 41
        },
        "dunk": {
            "value": 95,
            "tendency": 3
        },
        "midrange": {
            "value": 72,
            "tendency": 22
        },
        "outside": {
            "value": 79,
            "tendency": 34
        },
        "drawfoul": 65,
        "freethrow": 81,
        "interior": 66,
        "perimeter": 62,
        "offensiverebound": 60,
        "defensiverebound": 69,
        "speed": 79,
        "vertical": 95,
        "strength": 42,
        "hands": 77,
        "stamina": 90,
        "hustle": 77,
        "passing": 66,
        "steal": 60,
        "block": 43,
        "offensiveconsistency": 72,
        "defensiveconsistency": 52
    },
    "position": "SG",
    "fgaintensity": 1,
    "fgaaverage": 15,
    "color1": "#e53953",
    "color2": "#910308",
    "color3": "#ffffff",
    "image": "lavine_zach_chicago_bulls"
}, {
    "id": "0036",
    "type": "player",
    "first": "Rashard",
    "last": "Lewis",
    "height": "6-10",
    "weight": "215",
    "number": 9,
    "country": "United States",
    "team": "Orlando Magic",
    "conference": "Eastern Conference",
    "season": "2008-2009",
    "salary": 16,
    "unlockedlevel": 63,
    "tier": 2,
    "rarity": "Rare",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 74,
            "tendency": 26
        },
        "dunk": {
            "value": 77,
            "tendency": 1
        },
        "midrange": {
            "value": 77,
            "tendency": 23
        },
        "outside": {
            "value": 80,
            "tendency": 50
        },
        "drawfoul": 60,
        "freethrow": 83,
        "interior": 76,
        "perimeter": 61,
        "offensiverebound": 65,
        "defensiverebound": 73,
        "speed": 73,
        "vertical": 70,
        "strength": 71,
        "hands": 76,
        "stamina": 95,
        "hustle": 74,
        "passing": 64,
        "steal": 60,
        "block": 49,
        "offensiveconsistency": 80,
        "defensiveconsistency": 66
    },
    "position": "PF",
    "fgaintensity": 1,
    "fgaaverage": 14,
    "color1": "#ffffff",
    "color2": "#d6e8f7",
    "color3": "#348bd9",
    "image": "lewis_rashard_orlando_magic"
}, {
    "id": "0037",
    "type": "player",
    "first": "Sasha",
    "last": "Vujacic",
    "height": "6-7",
    "weight": "195",
    "number": 18,
    "country": "Slovenia",
    "team": "Los Angeles Lakers",
    "conference": "Western Conference",
    "season": "2007-2008",
    "salary": 2,
    "unlockedlevel": 2,
    "tier": 4,
    "rarity": "Rare",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 67,
            "tendency": 13
        },
        "dunk": {
            "value": 60,
            "tendency": 0
        },
        "midrange": {
            "value": 77,
            "tendency": 31
        },
        "outside": {
            "value": 74,
            "tendency": 56
        },
        "drawfoul": 52,
        "freethrow": 84,
        "interior": 63,
        "perimeter": 70,
        "offensiverebound": 60,
        "defensiverebound": 63,
        "speed": 78,
        "vertical": 74,
        "strength": 31,
        "hands": 67,
        "stamina": 85,
        "hustle": 81,
        "passing": 58,
        "steal": 50,
        "block": 42,
        "offensiveconsistency": 80,
        "defensiveconsistency": 60
    },
    "position": "SF/SG",
    "fgaintensity": 0,
    "fgaaverage": 7,
    "color1": "#744aaf",
    "color2": "#552e84",
    "color3": "#facc30",
    "image": "vujajic_sasha_losangeles_lakers"
}, {
    "id": "0038",
    "type": "player",
    "first": "Allen",
    "last": "Crabbe",
    "height": "6-6",
    "weight": "210",
    "number": 33,
    "country": "United States",
    "team": "Brooklyn Nets",
    "conference": "Eastern Conference",
    "season": "2017-2018",
    "salary": 19,
    "unlockedlevel": 32,
    "tier": 3,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 69,
            "tendency": 18
        },
        "dunk": {
            "value": 75,
            "tendency": 3
        },
        "midrange": {
            "value": 74,
            "tendency": 18
        },
        "outside": {
            "value": 84,
            "tendency": 64
        },
        "drawfoul": 54,
        "freethrow": 85,
        "interior": 61,
        "perimeter": 66,
        "offensiverebound": 60,
        "defensiverebound": 71,
        "speed": 71,
        "vertical": 71,
        "strength": 45,
        "hands": 72,
        "stamina": 91,
        "hustle": 61,
        "passing": 60,
        "steal": 52,
        "block": 48,
        "offensiveconsistency": 51,
        "defensiveconsistency": 61
    },
    "position": "SG",
    "fgaintensity": 0,
    "fgaaverage": 11,
    "color1": "#35343a",
    "color2": "#090909",
    "color3": "#ffffff",
    "image": "crabbe_allen_brooklyn_nets"
}, {
    "id": "0039",
    "type": "player",
    "first": "Arron",
    "last": "Afflalo",
    "height": "6-5",
    "weight": "210",
    "number": 40,
    "country": "United States",
    "team": "Orlando Magic",
    "conference": "Eastern Conference",
    "season": "2017-2018",
    "salary": 2,
    "unlockedlevel": 31,
    "tier": 3,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 67,
            "tendency": 22
        },
        "dunk": {
            "value": 71,
            "tendency": 0
        },
        "midrange": {
            "value": 68,
            "tendency": 35
        },
        "outside": {
            "value": 69,
            "tendency": 43
        },
        "drawfoul": 49,
        "freethrow": 85,
        "interior": 67,
        "perimeter": 75,
        "offensiverebound": 59,
        "defensiverebound": 60,
        "speed": 73,
        "vertical": 71,
        "strength": 59,
        "hands": 79,
        "stamina": 82,
        "hustle": 89,
        "passing": 56,
        "steal": 42,
        "block": 43,
        "offensiveconsistency": 59,
        "defensiveconsistency": 69
    },
    "position": "SG",
    "fgaintensity": 1,
    "fgaaverage": 3,
    "color1": "#557ed8",
    "color2": "#364996",
    "color3": "#ffffff",
    "image": "affalo_arron_orlando_magic"
}, {
    "id": "0040",
    "type": "player",
    "first": "Ricky",
    "last": "Rubio",
    "height": "6-4",
    "weight": "194",
    "number": 3,
    "country": "Spain",
    "team": "Utah Jazz",
    "conference": "Western Conference",
    "season": "2017-2018",
    "salary": 14,
    "unlockedlevel": 30,
    "tier": 3,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 71,
            "tendency": 26
        },
        "dunk": {
            "value": 63,
            "tendency": 0
        },
        "midrange": {
            "value": 75,
            "tendency": 41
        },
        "outside": {
            "value": 73,
            "tendency": 33
        },
        "drawfoul": 60,
        "freethrow": 87,
        "interior": 62,
        "perimeter": 83,
        "offensiverebound": 62,
        "defensiverebound": 71,
        "speed": 83,
        "vertical": 57,
        "strength": 45,
        "hands": 87,
        "stamina": 91,
        "hustle": 87,
        "passing": 74,
        "steal": 73,
        "block": 42,
        "offensiveconsistency": 79,
        "defensiveconsistency": 67
    },
    "position": "PG",
    "fgaintensity": 0,
    "fgaaverage": 11,
    "color1": "#384356",
    "color2": "#10192b",
    "color3": "#eebc33",
    "image": "rubio_ricky_utah_jazz"
}, {
    "id": "0041",
    "type": "player",
    "first": "Kyle",
    "last": "Korver",
    "height": "6-7",
    "weight": "212",
    "number": 26,
    "country": "United States",
    "team": "Cleveland Cavaliers",
    "conference": "Eastern Conference",
    "season": "2017-2018",
    "salary": 7,
    "unlockedlevel": 32,
    "tier": 3,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 67,
            "tendency": 8
        },
        "dunk": {
            "value": 65,
            "tendency": 0
        },
        "midrange": {
            "value": 73,
            "tendency": 14
        },
        "outside": {
            "value": 80,
            "tendency": 78
        },
        "drawfoul": 51,
        "freethrow": 89,
        "interior": 62,
        "perimeter": 68,
        "offensiverebound": 59,
        "defensiverebound": 64,
        "speed": 54,
        "vertical": 55,
        "strength": 34,
        "hands": 75,
        "stamina": 87,
        "hustle": 78,
        "passing": 59,
        "steal": 48,
        "block": 46,
        "offensiveconsistency": 83,
        "defensiveconsistency": 53
    },
    "position": "SG/SF",
    "fgaintensity": 1,
    "fgaaverage": 7,
    "color1": "#82033d",
    "color2": "#0c070b",
    "color3": "#e29e30",
    "image": "korver_kyle_cleveland_cavaliers"
}, {
    "id": "0042",
    "type": "player",
    "first": "George",
    "last": "Hill",
    "height": "6-3",
    "weight": "188",
    "number": 3,
    "country": "United States",
    "team": "Indiana Pacers",
    "conference": "Eastern Conference",
    "season": "2012-2013",
    "salary": 8,
    "unlockedlevel": 29,
    "tier": 3,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 72,
            "tendency": 31
        },
        "dunk": {
            "value": 73,
            "tendency": 1
        },
        "midrange": {
            "value": 72,
            "tendency": 28
        },
        "outside": {
            "value": 78,
            "tendency": 40
        },
        "drawfoul": 58,
        "freethrow": 82,
        "interior": 61,
        "perimeter": 82,
        "offensiverebound": 62,
        "defensiverebound": 68,
        "speed": 78,
        "vertical": 86,
        "strength": 50,
        "hands": 81,
        "stamina": 94,
        "hustle": 71,
        "passing": 72,
        "steal": 62,
        "block": 45,
        "offensiveconsistency": 72,
        "defensiveconsistency": 82
    },
    "position": "PG",
    "fgaintensity": 1,
    "fgaaverage": 12,
    "color1": "#892018",
    "color2": "#fdbc19",
    "color3": "#ffffff",
    "image": "hill_george_indiana_pacers"
}, {
    "id": "0043",
    "type": "player",
    "first": "Dion",
    "last": "Waiters",
    "height": "6-4",
    "weight": "225",
    "number": 11,
    "country": "United States",
    "team": "Miami Heat",
    "conference": "Eastern Conference",
    "season": "2017-2018",
    "salary": 11,
    "unlockedlevel": 28,
    "tier": 3,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 71,
            "tendency": 37
        },
        "dunk": {
            "value": 69,
            "tendency": 0
        },
        "midrange": {
            "value": 75,
            "tendency": 21
        },
        "outside": {
            "value": 76,
            "tendency": 42
        },
        "drawfoul": 56,
        "freethrow": 74,
        "interior": 61,
        "perimeter": 70,
        "offensiverebound": 60,
        "defensiverebound": 65,
        "speed": 73,
        "vertical": 75,
        "strength": 61,
        "hands": 81,
        "stamina": 92,
        "hustle": 66,
        "passing": 69,
        "steal": 56,
        "block": 45,
        "offensiveconsistency": 81,
        "defensiveconsistency": 56
    },
    "position": "SG/SF",
    "fgaintensity": 1,
    "fgaaverage": 14,
    "color1": "#ef6067",
    "color2": "#c63b3c",
    "color3": "#ffffff",
    "image": "waiters_dion_miami_heat"
}, {
    "id": "0044",
    "type": "player",
    "first": "Rudy",
    "last": "Gay",
    "height": "6-8",
    "weight": "230",
    "number": 22,
    "country": "United States",
    "team": "San Antonio Spurs",
    "conference": "Western Conference",
    "season": "2017-2018",
    "salary": 8,
    "unlockedlevel": 27,
    "tier": 3,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 74,
            "tendency": 40
        },
        "dunk": {
            "value": 82,
            "tendency": 6
        },
        "midrange": {
            "value": 69,
            "tendency": 32
        },
        "outside": {
            "value": 71,
            "tendency": 22
        },
        "drawfoul": 57,
        "freethrow": 77,
        "interior": 63,
        "perimeter": 66,
        "offensiverebound": 66,
        "defensiverebound": 70,
        "speed": 74,
        "vertical": 77,
        "strength": 69,
        "hands": 71,
        "stamina": 87,
        "hustle": 68,
        "passing": 59,
        "steal": 56,
        "block": 51,
        "offensiveconsistency": 75,
        "defensiveconsistency": 71
    },
    "position": "PF/SF",
    "fgaintensity": 1,
    "fgaaverage": 9,
    "color1": "#aeb3b7",
    "color2": "#8c9093",
    "color3": "#ffffff",
    "image": "gay_rudy_sanantonio_spurs"
}, {
    "id": "0045",
    "type": "player",
    "first": "Taj",
    "last": "Gibson",
    "height": "6-9",
    "weight": "225",
    "number": 67,
    "country": "United States",
    "team": "Minnesota Timberwolves",
    "conference": "Western Conference",
    "season": "2017-2018",
    "salary": 14,
    "unlockedlevel": 26,
    "tier": 3,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 75,
            "tendency": 60
        },
        "dunk": {
            "value": 86,
            "tendency": 12
        },
        "midrange": {
            "value": 68,
            "tendency": 24
        },
        "outside": {
            "value": 67,
            "tendency": 4
        },
        "drawfoul": 56,
        "freethrow": 77,
        "interior": 74,
        "perimeter": 67,
        "offensiverebound": 72,
        "defensiverebound": 74,
        "speed": 58,
        "vertical": 57,
        "strength": 79,
        "hands": 90,
        "stamina": 93,
        "hustle": 84,
        "passing": 59,
        "steal": 56,
        "block": 51,
        "offensiveconsistency": 64,
        "defensiveconsistency": 69
    },
    "position": "PF",
    "fgaintensity": 0,
    "fgaaverage": 9,
    "color1": "#8bdb65",
    "color2": "#7ac142",
    "color3": "#ffffff",
    "image": "gibson_taj_minnesota_timberwolves"
}, {
    "id": "0046",
    "type": "player",
    "first": "Zach",
    "last": "Randolph",
    "height": "6-9",
    "weight": "260",
    "number": 50,
    "country": "United States",
    "team": "Sacramento Kings",
    "conference": "Western Conference",
    "season": "2017-2018",
    "salary": 12,
    "unlockedlevel": 25,
    "tier": 3,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 76,
            "tendency": 52
        },
        "dunk": {
            "value": 69,
            "tendency": 0
        },
        "midrange": {
            "value": 72,
            "tendency": 29
        },
        "outside": {
            "value": 73,
            "tendency": 19
        },
        "drawfoul": 54,
        "freethrow": 79,
        "interior": 72,
        "perimeter": 69,
        "offensiverebound": 68,
        "defensiverebound": 75,
        "speed": 46,
        "vertical": 51,
        "strength": 85,
        "hands": 76,
        "stamina": 89,
        "hustle": 82,
        "passing": 62,
        "steal": 54,
        "block": 43,
        "offensiveconsistency": 72,
        "defensiveconsistency": 62
    },
    "position": "PF/C",
    "fgaintensity": 1,
    "fgaaverage": 13,
    "color1": "#ffffff",
    "color2": "#ededf4",
    "color3": "#3f2c91",
    "image": "randolph_zach_sacramento_kings"
}, {
    "id": "0047",
    "type": "player",
    "first": "Patrick",
    "last": "Beverley",
    "height": "6-1",
    "weight": "185",
    "number": 21,
    "country": "United States",
    "team": "Los Angeles Clippers",
    "conference": "Western Conference",
    "season": "2017-2018",
    "salary": 6,
    "unlockedlevel": 24,
    "tier": 3,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 71,
            "tendency": 38
        },
        "dunk": {
            "value": 59,
            "tendency": 0
        },
        "midrange": {
            "value": 69,
            "tendency": 12
        },
        "outside": {
            "value": 84,
            "tendency": 50
        },
        "drawfoul": 53,
        "freethrow": 82,
        "interior": 72,
        "perimeter": 91,
        "offensiverebound": 67,
        "defensiverebound": 66,
        "speed": 74,
        "vertical": 88,
        "strength": 47,
        "hands": 87,
        "stamina": 92,
        "hustle": 72,
        "passing": 65,
        "steal": 75,
        "block": 48,
        "offensiveconsistency": 51,
        "defensiveconsistency": 91
    },
    "position": "PG/SG",
    "fgaintensity": 0,
    "fgaaverage": 11,
    "color1": "#ffffff",
    "color2": "#e2e6f2",
    "color3": "#192a57",
    "image": "beverley_patrick_losangeles_clippers"
}, {
    "id": "0048",
    "type": "player",
    "first": "Jonathon",
    "last": "Simmons",
    "height": "6-6",
    "weight": "195",
    "number": 17,
    "country": "United States",
    "team": "Orlando Magic",
    "conference": "Eastern Conference",
    "season": "2017-2018",
    "salary": 6,
    "unlockedlevel": 0,
    "tier": 4,
    "rarity": "Rare",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 73,
            "tendency": 47
        },
        "dunk": {
            "value": 81,
            "tendency": 3
        },
        "midrange": {
            "value": 71,
            "tendency": 23
        },
        "outside": {
            "value": 73,
            "tendency": 27
        },
        "drawfoul": 61,
        "freethrow": 77,
        "interior": 61,
        "perimeter": 79,
        "offensiverebound": 63,
        "defensiverebound": 66,
        "speed": 76,
        "vertical": 72,
        "strength": 41,
        "hands": 75,
        "stamina": 91,
        "hustle": 63,
        "passing": 64,
        "steal": 56,
        "block": 43,
        "offensiveconsistency": 62,
        "defensiveconsistency": 62
    },
    "position": "SG",
    "fgaintensity": 0,
    "fgaaverage": 11,
    "color1": "#1a1f24",
    "color2": "#29397f",
    "color3": "#ffffff",
    "image": "simmons_jonathon_orlando_magic"
}, {
    "id": "0049",
    "type": "player",
    "first": "Patrick",
    "last": "McCaw",
    "height": "6-7",
    "weight": "185",
    "number": 0,
    "country": "United States",
    "team": "Golden State Warriors",
    "conference": "Western Conference",
    "season": "2017-2018",
    "salary": 1,
    "unlockedlevel": 0,
    "tier": 4,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 68,
            "tendency": 44
        },
        "dunk": {
            "value": 79,
            "tendency": 3
        },
        "midrange": {
            "value": 67,
            "tendency": 17
        },
        "outside": {
            "value": 69,
            "tendency": 36
        },
        "drawfoul": 49,
        "freethrow": 77,
        "interior": 64,
        "perimeter": 71,
        "offensiverebound": 59,
        "defensiverebound": 60,
        "speed": 76,
        "vertical": 69,
        "strength": 55,
        "hands": 69,
        "stamina": 84,
        "hustle": 72,
        "passing": 59,
        "steal": 56,
        "block": 43,
        "offensiveconsistency": 56,
        "defensiveconsistency": 56
    },
    "position": "PG/SG/SF",
    "fgaintensity": 0,
    "fgaaverage": 4,
    "color1": "#fbc244",
    "color2": "#fbdf6a",
    "color3": "#365099",
    "image": "mccaw_patrick_goldenstate_warriors"
}, {
    "id": "0050",
    "type": "player",
    "first": "Ben",
    "last": "McLemore",
    "height": "6-5",
    "weight": "195",
    "number": 23,
    "country": "United States",
    "team": "Memphis Grizzlies",
    "conference": "Western Conference",
    "season": "2017-2018",
    "salary": 5,
    "unlockedlevel": 23,
    "tier": 3,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 69,
            "tendency": 36
        },
        "dunk": {
            "value": 82,
            "tendency": 1
        },
        "midrange": {
            "value": 70,
            "tendency": 21
        },
        "outside": {
            "value": 73,
            "tendency": 42
        },
        "drawfoul": 51,
        "freethrow": 83,
        "interior": 62,
        "perimeter": 62,
        "offensiverebound": 62,
        "defensiverebound": 63,
        "speed": 72,
        "vertical": 80,
        "strength": 51,
        "hands": 72,
        "stamina": 86,
        "hustle": 69,
        "passing": 57,
        "steal": 54,
        "block": 44,
        "offensiveconsistency": 52,
        "defensiveconsistency": 57
    },
    "position": "SG",
    "fgaintensity": 0,
    "fgaaverage": 7,
    "color1": "#8cb1de",
    "color2": "#5c76a9",
    "color3": "#ffffff",
    "image": "mclemore_ben_memphis_grizzlies"
}, {
    "id": "0051",
    "type": "player",
    "first": "Kentavious",
    "last": "Caldwell-Pope",
    "height": "6-5",
    "weight": "205",
    "number": 1,
    "country": "United States",
    "team": "Los Angeles Lakers",
    "conference": "Western Conference",
    "season": "2017-2018",
    "salary": 18,
    "unlockedlevel": 22,
    "tier": 3,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 70,
            "tendency": 26
        },
        "dunk": {
            "value": 78,
            "tendency": 1
        },
        "midrange": {
            "value": 72,
            "tendency": 22
        },
        "outside": {
            "value": 83,
            "tendency": 51
        },
        "drawfoul": 57,
        "freethrow": 79,
        "interior": 61,
        "perimeter": 78,
        "offensiverebound": 63,
        "defensiverebound": 72,
        "speed": 82,
        "vertical": 64,
        "strength": 35,
        "hands": 79,
        "stamina": 93,
        "hustle": 86,
        "passing": 62,
        "steal": 68,
        "block": 43,
        "offensiveconsistency": 69,
        "defensiveconsistency": 74
    },
    "position": "SG",
    "fgaintensity": 1,
    "fgaaverage": 11,
    "color1": "#fadb33",
    "color2": "#fcb136",
    "color3": "#542d84",
    "image": "caldwell-pope_kentavious_losangeles_lakers"
}, {
    "id": "0052",
    "type": "player",
    "first": "Aron",
    "last": "Baynes",
    "height": "6-10",
    "weight": "260",
    "number": 46,
    "country": "New Zealand",
    "team": "Boston Celtics",
    "conference": "Eastern Conference",
    "season": "2017-2018",
    "salary": 4,
    "unlockedlevel": 3,
    "tier": 4,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 71,
            "tendency": 48
        },
        "dunk": {
            "value": 79,
            "tendency": 12
        },
        "midrange": {
            "value": 68,
            "tendency": 36
        },
        "outside": {
            "value": 67,
            "tendency": 4
        },
        "drawfoul": 51,
        "freethrow": 76,
        "interior": 74,
        "perimeter": 64,
        "offensiverebound": 68,
        "defensiverebound": 70,
        "speed": 44,
        "vertical": 54,
        "strength": 64,
        "hands": 66,
        "stamina": 85,
        "hustle": 65,
        "passing": 58,
        "steal": 46,
        "block": 49,
        "offensiveconsistency": 51,
        "defensiveconsistency": 60
    },
    "position": "C",
    "fgaintensity": 0,
    "fgaaverage": 6,
    "color1": "#309177",
    "color2": "#00694d",
    "color3": "#ffffff",
    "image": "baynes_aron_boston_celtics"
}, {
    "id": "0053",
    "type": "player",
    "first": "Ersan",
    "last": "Ilyasova",
    "height": "6-10",
    "weight": "235",
    "number": 7,
    "country": "Turkey",
    "team": "Atlanta Hawks",
    "conference": "Eastern Conference",
    "season": "2017-2018",
    "salary": 6,
    "unlockedlevel": 21,
    "tier": 3,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 70,
            "tendency": 39
        },
        "dunk": {
            "value": 79,
            "tendency": 1
        },
        "midrange": {
            "value": 72,
            "tendency": 19
        },
        "outside": {
            "value": 73,
            "tendency": 41
        },
        "drawfoul": 55,
        "freethrow": 78,
        "interior": 68,
        "perimeter": 61,
        "offensiverebound": 68,
        "defensiverebound": 72,
        "speed": 52,
        "vertical": 44,
        "strength": 61,
        "hands": 68,
        "stamina": 89,
        "hustle": 87,
        "passing": 59,
        "steal": 58,
        "block": 46,
        "offensiveconsistency": 69,
        "defensiveconsistency": 69
    },
    "position": "PF",
    "fgaintensity": 1,
    "fgaaverage": 9,
    "color1": "#353433",
    "color2": "#1d1d1d",
    "color3": "#ffffff",
    "image": "ilyasova_ersan_atlanta_hawks"
}, {
    "id": "0054",
    "type": "player",
    "first": "Udonis",
    "last": "Haslem",
    "height": "6-8",
    "weight": "235",
    "number": 40,
    "country": "United States",
    "team": "Miami Heat",
    "conference": "Eastern Conference",
    "season": "2006-2007",
    "salary": 6,
    "unlockedlevel": 20,
    "tier": 3,
    "rarity": "Rare",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 72,
            "tendency": 40
        },
        "dunk": {
            "value": 80,
            "tendency": 5
        },
        "midrange": {
            "value": 71,
            "tendency": 54
        },
        "outside": {
            "value": 67,
            "tendency": 1
        },
        "drawfoul": 57,
        "freethrow": 68,
        "interior": 76,
        "perimeter": 64,
        "offensiverebound": 72,
        "defensiverebound": 78,
        "speed": 62,
        "vertical": 59,
        "strength": 72,
        "hands": 63,
        "stamina": 92,
        "hustle": 89,
        "passing": 59,
        "steal": 52,
        "block": 45,
        "offensiveconsistency": 54,
        "defensiveconsistency": 59
    },
    "position": "PF",
    "fgaintensity": 1,
    "fgaaverage": 9,
    "color1": "#b13646",
    "color2": "#490808",
    "color3": "#dee2f7",
    "image": "haslem_udonis_miami_heat"
}, {
    "id": "0055",
    "type": "player",
    "first": "Vince",
    "last": "Carter",
    "height": "6-6",
    "weight": "220",
    "number": 15,
    "country": "United States",
    "team": "Sacramento Kings",
    "conference": "Western Conference",
    "season": "2017-2018",
    "salary": 8,
    "unlockedlevel": 33,
    "tier": 3,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 67,
            "tendency": 24
        },
        "dunk": {
            "value": 88,
            "tendency": 2
        },
        "midrange": {
            "value": 68,
            "tendency": 16
        },
        "outside": {
            "value": 74,
            "tendency": 58
        },
        "drawfoul": 49,
        "freethrow": 76,
        "interior": 61,
        "perimeter": 62,
        "offensiverebound": 60,
        "defensiverebound": 64,
        "speed": 68,
        "vertical": 78,
        "strength": 55,
        "hands": 78,
        "stamina": 85,
        "hustle": 46,
        "passing": 59,
        "steal": 54,
        "block": 46,
        "offensiveconsistency": 63,
        "defensiveconsistency": 53
    },
    "position": "SF/PF",
    "fgaintensity": 1,
    "fgaaverage": 5,
    "color1": "#2f2251",
    "color2": "#5b4e89",
    "color3": "#ffffff",
    "image": "carter_vince_sacramento_kings"
}, {
    "id": "0056",
    "type": "player",
    "first": "Nick",
    "last": "Young",
    "height": "6-7",
    "weight": "210",
    "number": 6,
    "country": "United States",
    "team": "Golden State Warriors",
    "conference": "Western Conference",
    "season": "2017-2018",
    "salary": 5,
    "unlockedlevel": 19,
    "tier": 3,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 68,
            "tendency": 9
        },
        "dunk": {
            "value": 69,
            "tendency": 0
        },
        "midrange": {
            "value": 71,
            "tendency": 24
        },
        "outside": {
            "value": 76,
            "tendency": 67
        },
        "drawfoul": 50,
        "freethrow": 86,
        "interior": 62,
        "perimeter": 73,
        "offensiverebound": 60,
        "defensiverebound": 61,
        "speed": 70,
        "vertical": 95,
        "strength": 49,
        "hands": 72,
        "stamina": 85,
        "hustle": 64,
        "passing": 56,
        "steal": 50,
        "block": 41,
        "offensiveconsistency": 58,
        "defensiveconsistency": 58
    },
    "position": "SG",
    "fgaintensity": 1,
    "fgaaverage": 6,
    "color1": "#ffffff",
    "color2": "#ffffff",
    "color3": "#3b58b2",
    "image": "young_nick_goldenstate_warriors"
}, {
    "id": "0057",
    "type": "player",
    "first": "Jonas",
    "last": "Jerebko",
    "height": "6-10",
    "weight": "231",
    "number": 8,
    "country": "Sweeden",
    "team": "Utah Jazz",
    "conference": "Western Conference",
    "season": "2017-2018",
    "salary": 4,
    "unlockedlevel": 0,
    "tier": 4,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 69,
            "tendency": 42
        },
        "dunk": {
            "value": 77,
            "tendency": 2
        },
        "midrange": {
            "value": 69,
            "tendency": 10
        },
        "outside": {
            "value": 70,
            "tendency": 46
        },
        "drawfoul": 50,
        "freethrow": 81,
        "interior": 61,
        "perimeter": 63,
        "offensiverebound": 62,
        "defensiverebound": 66,
        "speed": 58,
        "vertical": 62,
        "strength": 38,
        "hands": 69,
        "stamina": 83,
        "hustle": 83,
        "passing": 56,
        "steal": 46,
        "block": 43,
        "offensiveconsistency": 70,
        "defensiveconsistency": 55
    },
    "position": "PF",
    "fgaintensity": 0,
    "fgaaverage": 5,
    "color1": "#397752",
    "color2": "#274e37",
    "color3": "#ffffff",
    "image": "jerebko_jonas_utah_jazz"
}, {
    "id": "0058",
    "type": "player",
    "first": "Raymond",
    "last": "Felton",
    "height": "6-1",
    "weight": "205",
    "number": 2,
    "country": "United States",
    "team": "Oklahoma City Thunder",
    "conference": "Western Conference",
    "season": "2017-2018",
    "salary": 3,
    "unlockedlevel": 1,
    "tier": 4,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 69,
            "tendency": 28
        },
        "dunk": {
            "value": 45,
            "tendency": 0
        },
        "midrange": {
            "value": 71,
            "tendency": 30
        },
        "outside": {
            "value": 73,
            "tendency": 42
        },
        "drawfoul": 49,
        "freethrow": 82,
        "interior": 62,
        "perimeter": 69,
        "offensiverebound": 60,
        "defensiverebound": 62,
        "speed": 74,
        "vertical": 61,
        "strength": 54,
        "hands": 73,
        "stamina": 84,
        "hustle": 68,
        "passing": 64,
        "steal": 52,
        "block": 43,
        "offensiveconsistency": 56,
        "defensiveconsistency": 56
    },
    "position": "PG",
    "fgaintensity": 0,
    "fgaaverage": 7,
    "color1": "#5895d6",
    "color2": "#3a75c3",
    "color3": "#ffffff",
    "image": "felton_raymond_oklahomacity_thunder"
}, {
    "id": "0059",
    "type": "player",
    "first": "Patrick",
    "last": "Patterson",
    "height": "6-9",
    "weight": "230",
    "number": 54,
    "country": "United States",
    "team": "Oklahoma City Thunder",
    "conference": "Western Conference",
    "season": "2017-2018",
    "salary": 5,
    "unlockedlevel": 3,
    "tier": 4,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 67,
            "tendency": 27
        },
        "dunk": {
            "value": 71,
            "tendency": 0
        },
        "midrange": {
            "value": 69,
            "tendency": 9
        },
        "outside": {
            "value": 70,
            "tendency": 64
        },
        "drawfoul": 49,
        "freethrow": 87,
        "interior": 79,
        "perimeter": 72,
        "offensiverebound": 60,
        "defensiverebound": 63,
        "speed": 68,
        "vertical": 65,
        "strength": 79,
        "hands": 77,
        "stamina": 84,
        "hustle": 72,
        "passing": 57,
        "steal": 52,
        "block": 45,
        "offensiveconsistency": 57,
        "defensiveconsistency": 77
    },
    "position": "PF/C",
    "fgaintensity": 0,
    "fgaaverage": 3,
    "color1": "#ffffff",
    "color2": "#ededef",
    "color3": "#19203b",
    "image": "patterson_patrick_oklahomacity_thunder"
}, {
    "id": "0060",
    "type": "player",
    "first": "Marreese",
    "last": "Speights",
    "height": "6-10",
    "weight": "255",
    "number": 5,
    "country": "United States",
    "team": "Orlando Magic",
    "conference": "Eastern Conference",
    "season": "2017-2018",
    "salary": 2,
    "unlockedlevel": 15,
    "tier": 4,
    "rarity": "Rare",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 69,
            "tendency": 19
        },
        "dunk": {
            "value": 70,
            "tendency": 0
        },
        "midrange": {
            "value": 68,
            "tendency": 14
        },
        "outside": {
            "value": 81,
            "tendency": 67
        },
        "drawfoul": 51,
        "freethrow": 73,
        "interior": 61,
        "perimeter": 62,
        "offensiverebound": 60,
        "defensiverebound": 64,
        "speed": 61,
        "vertical": 51,
        "strength": 75,
        "hands": 57,
        "stamina": 82,
        "hustle": 84,
        "passing": 57,
        "steal": 44,
        "block": 46,
        "offensiveconsistency": 74,
        "defensiveconsistency": 54
    },
    "position": "C",
    "fgaintensity": 1,
    "fgaaverage": 7,
    "color1": "#3e58d0",
    "color2": "#182333",
    "color3": "#ffffff",
    "image": "speights_marreese_orlando_magic"
}, {
    "id": "0061",
    "type": "player",
    "first": "JaVale",
    "last": "McGee",
    "height": "7-0",
    "weight": "270",
    "number": 1,
    "country": "United States",
    "team": "Golden State Warriors",
    "conference": "Western Conference",
    "season": "2017-2018",
    "salary": 2,
    "unlockedlevel": 18,
    "tier": 3,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 70,
            "tendency": 48
        },
        "dunk": {
            "value": 75,
            "tendency": 35
        },
        "midrange": {
            "value": 65,
            "tendency": 14
        },
        "outside": {
            "value": 67,
            "tendency": 3
        },
        "drawfoul": 50,
        "freethrow": 73,
        "interior": 76,
        "perimeter": 65,
        "offensiverebound": 62,
        "defensiverebound": 62,
        "speed": 69,
        "vertical": 67,
        "strength": 56,
        "hands": 35,
        "stamina": 80,
        "hustle": 73,
        "passing": 56,
        "steal": 46,
        "block": 54,
        "offensiveconsistency": 53,
        "defensiveconsistency": 53
    },
    "position": "C",
    "fgaintensity": 0,
    "fgaaverage": 3,
    "color1": "#373542",
    "color2": "#111112",
    "color3": "#ffffff",
    "image": "mcgee_javale_goldenstate_warriors"
}, {
    "id": "0062",
    "type": "player",
    "first": "Jamal",
    "last": "Crawford",
    "height": "6-5",
    "weight": "200",
    "number": 11,
    "country": "United States",
    "team": "Minnesota Timberwolves",
    "conference": "Western Conference",
    "season": "2017-2018",
    "salary": 4,
    "unlockedlevel": 17,
    "tier": 3,
    "rarity": "Rare",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 69,
            "tendency": 14
        },
        "dunk": {
            "value": 69,
            "tendency": 0
        },
        "midrange": {
            "value": 76,
            "tendency": 44
        },
        "outside": {
            "value": 74,
            "tendency": 42
        },
        "drawfoul": 53,
        "freethrow": 90,
        "interior": 62,
        "perimeter": 63,
        "offensiverebound": 60,
        "defensiverebound": 60,
        "speed": 72,
        "vertical": 72,
        "strength": 37,
        "hands": 74,
        "stamina": 86,
        "hustle": 47,
        "passing": 63,
        "steal": 50,
        "block": 42,
        "offensiveconsistency": 76,
        "defensiveconsistency": 51
    },
    "position": "SG",
    "fgaintensity": 2,
    "fgaaverage": 9,
    "color1": "#2b416d",
    "color2": "#1c1d2a",
    "color3": "#ffffff",
    "image": "crawford_jamal_minnesota_timberwolves"
}, {
    "id": "0063",
    "type": "player",
    "first": "Michael",
    "last": "Beasley",
    "height": "6-9",
    "weight": "235",
    "number": 8,
    "country": "United States",
    "team": "New York Knicks",
    "conference": "Eastern Conference",
    "season": "2017-2018",
    "salary": 2,
    "unlockedlevel": 16,
    "tier": 3,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 77,
            "tendency": 55
        },
        "dunk": {
            "value": 80,
            "tendency": 5
        },
        "midrange": {
            "value": 69,
            "tendency": 29
        },
        "outside": {
            "value": 70,
            "tendency": 11
        },
        "drawfoul": 55,
        "freethrow": 78,
        "interior": 63,
        "perimeter": 66,
        "offensiverebound": 66,
        "defensiverebound": 72,
        "speed": 85,
        "vertical": 90,
        "strength": 60,
        "hands": 80,
        "stamina": 87,
        "hustle": 80,
        "passing": 61,
        "steal": 50,
        "block": 49,
        "offensiveconsistency": 95,
        "defensiveconsistency": 60
    },
    "position": "PF",
    "fgaintensity": 1,
    "fgaaverage": 11,
    "color1": "#3a4a70",
    "color2": "#1f2539",
    "color3": "#ffffff",
    "image": "beasley_michael_newyork_knicks"
}, {
    "id": "0064",
    "type": "player",
    "first": "Avery",
    "last": "Bradley",
    "height": "6-2",
    "weight": "180",
    "number": 22,
    "country": "United States",
    "team": "Detroit Pistons",
    "conference": "Eastern Conference",
    "season": "2017-2018",
    "salary": 9,
    "unlockedlevel": 15,
    "tier": 3,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 72,
            "tendency": 33
        },
        "dunk": {
            "value": 79,
            "tendency": 2
        },
        "midrange": {
            "value": 76,
            "tendency": 32
        },
        "outside": {
            "value": 75,
            "tendency": 33
        },
        "drawfoul": 54,
        "freethrow": 77,
        "interior": 72,
        "perimeter": 91,
        "offensiverebound": 61,
        "defensiverebound": 63,
        "speed": 81,
        "vertical": 75,
        "strength": 42,
        "hands": 90,
        "stamina": 92,
        "hustle": 91,
        "passing": 62,
        "steal": 62,
        "block": 43,
        "offensiveconsistency": 60,
        "defensiveconsistency": 81
    },
    "position": "SG",
    "fgaintensity": 1,
    "fgaaverage": 14,
    "color1": "#4b526b",
    "color2": "#242842",
    "color3": "#ffffff",
    "image": "bradley_avery_detroit_pistons"
}, {
    "id": "0065",
    "type": "player",
    "first": "Nerlens",
    "last": "Noel",
    "height": "6-11",
    "weight": "228",
    "number": 3,
    "country": "United States",
    "team": "Dallas Mavericks",
    "conference": "Western Conference",
    "season": "2017-2018",
    "salary": 4,
    "unlockedlevel": 47,
    "tier": 2,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 70,
            "tendency": 58
        },
        "dunk": {
            "value": 82,
            "tendency": 23
        },
        "midrange": {
            "value": 65,
            "tendency": 18
        },
        "outside": {
            "value": 67,
            "tendency": 1
        },
        "drawfoul": 51,
        "freethrow": 75,
        "interior": 81,
        "perimeter": 63,
        "offensiverebound": 68,
        "defensiverebound": 71,
        "speed": 70,
        "vertical": 72,
        "strength": 58,
        "hands": 77,
        "stamina": 84,
        "hustle": 88,
        "passing": 57,
        "steal": 60,
        "block": 51,
        "offensiveconsistency": 58,
        "defensiveconsistency": 58
    },
    "position": "C/PF",
    "fgaintensity": 0,
    "fgaaverage": 4,
    "color1": "#323449",
    "color2": "#505368",
    "color3": "#ffffff",
    "image": "noel_nerlens_dallas_mavericks"
}, {
    "id": "0066",
    "type": "player",
    "first": "JJ",
    "last": "Redick",
    "height": "6-4",
    "weight": "190",
    "number": 17,
    "country": "United States",
    "team": "Philadelphia 76ers",
    "conference": "Eastern Conference",
    "season": "2017-2018",
    "salary": 23,
    "unlockedlevel": 14,
    "tier": 3,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 69,
            "tendency": 12
        },
        "dunk": {
            "value": 61,
            "tendency": 0
        },
        "midrange": {
            "value": 81,
            "tendency": 36
        },
        "outside": {
            "value": 86,
            "tendency": 52
        },
        "drawfoul": 59,
        "freethrow": 90,
        "interior": 61,
        "perimeter": 64,
        "offensiverebound": 59,
        "defensiverebound": 65,
        "speed": 65,
        "vertical": 60,
        "strength": 25,
        "hands": 76,
        "stamina": 92,
        "hustle": 76,
        "passing": 66,
        "steal": 50,
        "block": 42,
        "offensiveconsistency": 81,
        "defensiveconsistency": 51
    },
    "position": "SG",
    "fgaintensity": 1,
    "fgaaverage": 13,
    "color1": "#4458c8",
    "color2": "#1b285d",
    "color3": "#ffffff",
    "image": "redick_jj_philadelphia_sixers"
}, {
    "id": "0067",
    "type": "player",
    "first": "Victor",
    "last": "Oladipo",
    "height": "6-4",
    "weight": "210",
    "number": 4,
    "country": "United States",
    "team": "Indiana Pacers",
    "conference": "Eastern Conference",
    "season": "2017-2018",
    "salary": 21,
    "unlockedlevel": 13,
    "tier": 3,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 75,
            "tendency": 31
        },
        "dunk": {
            "value": 88,
            "tendency": 4
        },
        "midrange": {
            "value": 78,
            "tendency": 33
        },
        "outside": {
            "value": 84,
            "tendency": 32
        },
        "drawfoul": 66,
        "freethrow": 80,
        "interior": 64,
        "perimeter": 73,
        "offensiverebound": 62,
        "defensiverebound": 73,
        "speed": 74,
        "vertical": 85,
        "strength": 63,
        "hands": 83,
        "stamina": 94,
        "hustle": 81,
        "passing": 71,
        "steal": 89,
        "block": 52,
        "offensiveconsistency": 76,
        "defensiveconsistency": 67
    },
    "position": "SG",
    "fgaintensity": 1,
    "fgaaverage": 18,
    "color1": "#fdbb30",
    "color2": "#fadb46",
    "color3": "#282634",
    "image": "oladipo_victor_indiana_pacers"
}, {
    "id": "0068",
    "type": "player",
    "first": "DeAaron",
    "last": "Fox",
    "height": "6-3",
    "weight": "170",
    "number": 5,
    "country": "United States",
    "team": "Sacramento Kings",
    "conference": "Western Conference",
    "season": "2017-2018",
    "salary": 5,
    "unlockedlevel": 12,
    "tier": 3,
    "rarity": "Rare",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 73,
            "tendency": 43
        },
        "dunk": {
            "value": 81,
            "tendency": 3
        },
        "midrange": {
            "value": 72,
            "tendency": 35
        },
        "outside": {
            "value": 70,
            "tendency": 19
        },
        "drawfoul": 58,
        "freethrow": 72,
        "interior": 61,
        "perimeter": 74,
        "offensiverebound": 61,
        "defensiverebound": 65,
        "speed": 96,
        "vertical": 83,
        "strength": 63,
        "hands": 81,
        "stamina": 90,
        "hustle": 86,
        "passing": 71,
        "steal": 60,
        "block": 45,
        "offensiveconsistency": 86,
        "defensiveconsistency": 73
    },
    "position": "PG",
    "fgaintensity": 1,
    "fgaaverage": 11,
    "color1": "#78d2f9",
    "color2": "#3895e0",
    "color3": "#ffffff",
    "image": "fox_deaaron_sacramento_kings"
}, {
    "id": "0069",
    "type": "player",
    "first": "Danilo",
    "last": "Gallinari",
    "height": "6-10",
    "weight": "225",
    "number": 8,
    "country": "Italy",
    "team": "Los Angeles Clippers",
    "conference": "Western Conference",
    "season": "2017-2018",
    "salary": 21,
    "unlockedlevel": 11,
    "tier": 3,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 71,
            "tendency": 24
        },
        "dunk": {
            "value": 77,
            "tendency": 4
        },
        "midrange": {
            "value": 75,
            "tendency": 30
        },
        "outside": {
            "value": 78,
            "tendency": 42
        },
        "drawfoul": 63,
        "freethrow": 93,
        "interior": 61,
        "perimeter": 61,
        "offensiverebound": 60,
        "defensiverebound": 72,
        "speed": 60,
        "vertical": 62,
        "strength": 42,
        "hands": 71,
        "stamina": 93,
        "hustle": 75,
        "passing": 62,
        "steal": 52,
        "block": 48,
        "offensiveconsistency": 80,
        "defensiveconsistency": 55
    },
    "position": "SF/PF",
    "fgaintensity": 0,
    "fgaaverage": 12,
    "color1": "#7793d8",
    "color2": "#3d3ca4",
    "color3": "#eff2f9",
    "image": "gallinari_danilo_losangeles_clippers"
}, {
    "id": "0070",
    "type": "player",
    "first": "Isaiah",
    "last": "Thomas",
    "height": "5-9",
    "weight": "185",
    "number": 3,
    "country": "United States",
    "team": "Cleveland Cavaliers",
    "conference": "Eastern Conference",
    "season": "2017-2018",
    "salary": 6,
    "unlockedlevel": 75,
    "tier": 1,
    "rarity": "Rare",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 72,
            "tendency": 33
        },
        "dunk": {
            "value": 80,
            "tendency": 0
        },
        "midrange": {
            "value": 73,
            "tendency": 23
        },
        "outside": {
            "value": 78,
            "tendency": 44
        },
        "drawfoul": 63,
        "freethrow": 89,
        "interior": 62,
        "perimeter": 62,
        "offensiverebound": 61,
        "defensiverebound": 62,
        "speed": 82,
        "vertical": 76,
        "strength": 40,
        "hands": 87,
        "stamina": 90,
        "hustle": 92,
        "passing": 72,
        "steal": 50,
        "block": 42,
        "offensiveconsistency": 93,
        "defensiveconsistency": 55
    },
    "position": "PG",
    "fgaintensity": 1,
    "fgaaverage": 13,
    "color1": "#953c3f",
    "color2": "#752a2c",
    "color3": "#f5e33a",
    "image": "thomas_isaiah_cleveland_cavaliers"
}, {
    "id": "0071",
    "type": "player",
    "first": "Dennis",
    "last": "Schroder",
    "height": "6-1",
    "weight": "172",
    "number": 17,
    "country": "Germany",
    "team": "Atlanta Hawks",
    "conference": "Eastern Conference",
    "season": "2017-2018",
    "salary": 16,
    "unlockedlevel": 48,
    "tier": 2,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 76,
            "tendency": 42
        },
        "dunk": {
            "value": 74,
            "tendency": 0
        },
        "midrange": {
            "value": 77,
            "tendency": 35
        },
        "outside": {
            "value": 74,
            "tendency": 23
        },
        "drawfoul": 58,
        "freethrow": 83,
        "interior": 73,
        "perimeter": 74,
        "offensiverebound": 62,
        "defensiverebound": 65,
        "speed": 81,
        "vertical": 71,
        "strength": 43,
        "hands": 82,
        "stamina": 92,
        "hustle": 87,
        "passing": 70,
        "steal": 58,
        "block": 43,
        "offensiveconsistency": 77,
        "defensiveconsistency": 70
    },
    "position": "PG",
    "fgaintensity": 1,
    "fgaaverage": 17,
    "color1": "#ce1130",
    "color2": "#890619",
    "color3": "#d3db76",
    "image": "schroder_dennis_atlanta_hawks"
}, {
    "id": "0072",
    "type": "player",
    "first": "Kyrie",
    "last": "Irving",
    "height": "6-3",
    "weight": "193",
    "number": 11,
    "country": "Australia",
    "team": "Boston Celtics",
    "conference": "Eastern Conference",
    "season": "2017-2018",
    "salary": 19,
    "unlockedlevel": 81,
    "tier": 1,
    "rarity": "Epic",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 77,
            "tendency": 38
        },
        "dunk": {
            "value": 55,
            "tendency": 0
        },
        "midrange": {
            "value": 76,
            "tendency": 25
        },
        "outside": {
            "value": 88,
            "tendency": 37
        },
        "drawfoul": 64,
        "freethrow": 89,
        "interior": 65,
        "perimeter": 76,
        "offensiverebound": 62,
        "defensiverebound": 68,
        "speed": 88,
        "vertical": 76,
        "strength": 66,
        "hands": 89,
        "stamina": 93,
        "hustle": 80,
        "passing": 74,
        "steal": 62,
        "block": 45,
        "offensiveconsistency": 91,
        "defensiveconsistency": 72
    },
    "position": "PG",
    "fgaintensity": 2,
    "fgaaverage": 18,
    "color1": "#12af82",
    "color2": "#077241",
    "color3": "#ffffff",
    "image": "irving_kyrie_boston_celtics"
}, {
    "id": "0073",
    "type": "player",
    "first": "Jae",
    "last": "Crowder",
    "height": "6-6",
    "weight": "235",
    "number": 99,
    "country": "United States",
    "team": "Cleveland Cavaliers",
    "conference": "Eastern Conference",
    "season": "2017-2018",
    "salary": 7,
    "unlockedlevel": 10,
    "tier": 3,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 69,
            "tendency": 34
        },
        "dunk": {
            "value": 70,
            "tendency": 0
        },
        "midrange": {
            "value": 71,
            "tendency": 16
        },
        "outside": {
            "value": 74,
            "tendency": 50
        },
        "drawfoul": 55,
        "freethrow": 82,
        "interior": 63,
        "perimeter": 83,
        "offensiverebound": 62,
        "defensiverebound": 66,
        "speed": 72,
        "vertical": 71,
        "strength": 80,
        "hands": 83,
        "stamina": 89,
        "hustle": 91,
        "passing": 59,
        "steal": 56,
        "block": 45,
        "offensiveconsistency": 53,
        "defensiveconsistency": 83
    },
    "position": "SF",
    "fgaintensity": 0,
    "fgaaverage": 8,
    "color1": "#f2ca79",
    "color2": "#f2be44",
    "color3": "#672527",
    "image": "crowder_jae_cleveland_cavaliers"
}, {
    "id": "0074",
    "type": "player",
    "first": "Patty",
    "last": "Mills",
    "height": "6-0",
    "weight": "185",
    "number": 8,
    "country": "Australia",
    "team": "San Antonio Spurs",
    "conference": "Western Conference",
    "season": "2017-2018",
    "salary": 11,
    "unlockedlevel": 9,
    "tier": 3,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 68,
            "tendency": 15
        },
        "dunk": {
            "value": 37,
            "tendency": 0
        },
        "midrange": {
            "value": 74,
            "tendency": 24
        },
        "outside": {
            "value": 78,
            "tendency": 61
        },
        "drawfoul": 46,
        "freethrow": 80,
        "interior": 60,
        "perimeter": 65,
        "offensiverebound": 61,
        "defensiverebound": 65,
        "speed": 87,
        "vertical": 64,
        "strength": 49,
        "hands": 72,
        "stamina": 89,
        "hustle": 72,
        "passing": 72,
        "steal": 61,
        "block": 25,
        "offensiveconsistency": 67,
        "defensiveconsistency": 57
    },
    "position": "PG",
    "fgaintensity": 0,
    "fgaaverage": 8,
    "color1": "#9da5a8",
    "color2": "#ced2d5",
    "color3": "#18171c",
    "image": "mills_patty_sanantonio_spurs"
}, {
    "id": "0075",
    "type": "player",
    "first": "Jabari",
    "last": "Parker",
    "height": "6-8",
    "weight": "250",
    "number": 12,
    "country": "United States",
    "team": "Milwaukee Bucks",
    "conference": "Eastern Conference",
    "season": "2017-2018",
    "salary": 7,
    "unlockedlevel": 49,
    "tier": 2,
    "rarity": "Rare",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 72,
            "tendency": 40
        },
        "dunk": {
            "value": 83,
            "tendency": 10
        },
        "midrange": {
            "value": 72,
            "tendency": 26
        },
        "outside": {
            "value": 73,
            "tendency": 24
        },
        "drawfoul": 54,
        "freethrow": 74,
        "interior": 67,
        "perimeter": 73,
        "offensiverebound": 66,
        "defensiverebound": 69,
        "speed": 80,
        "vertical": 84,
        "strength": 79,
        "hands": 93,
        "stamina": 88,
        "hustle": 81,
        "passing": 61,
        "steal": 56,
        "block": 45,
        "offensiveconsistency": 51,
        "defensiveconsistency": 64
    },
    "position": "PF/SF",
    "fgaintensity": 0,
    "fgaaverage": 11,
    "color1": "#457065",
    "color2": "#344e48",
    "color3": "#f0eada",
    "image": "parker_jabari_milwaukee_bucks"
}, {
    "id": "0076",
    "type": "player",
    "first": "Ming",
    "last": "Yao",
    "height": "7-6",
    "weight": "310",
    "number": 11,
    "country": "China",
    "team": "Houston Rockets",
    "conference": "Western Conference",
    "season": "2006-2007",
    "salary": 12,
    "unlockedlevel": 92,
    "tier": 0,
    "rarity": "Legendary",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 88,
            "tendency": 70
        },
        "dunk": {
            "value": 79,
            "tendency": 3
        },
        "midrange": {
            "value": 67,
            "tendency": 27
        },
        "outside": {
            "value": 67,
            "tendency": 0
        },
        "drawfoul": 81,
        "freethrow": 86,
        "interior": 85,
        "perimeter": 77,
        "offensiverebound": 71,
        "defensiverebound": 83,
        "speed": 42,
        "vertical": 33,
        "strength": 90,
        "hands": 98,
        "stamina": 94,
        "hustle": 85,
        "passing": 62,
        "steal": 48,
        "block": 70,
        "offensiveconsistency": 95,
        "defensiveconsistency": 80
    },
    "position": "C",
    "fgaintensity": 2,
    "fgaaverage": 17,
    "color1": "#ce2c2c",
    "color2": "#871515",
    "color3": "#d7d8d8",
    "image": "ming_yao_houston_rockets"
}, {
    "id": "0077",
    "type": "player",
    "first": "Kevin",
    "last": "Garnett",
    "height": "6-11",
    "weight": "240",
    "number": 21,
    "country": "United States",
    "team": "Minnesota Timberwolves",
    "conference": "Western Conference",
    "season": "2003-2004",
    "salary": 28,
    "unlockedlevel": 94,
    "tier": 0,
    "rarity": "Legendary",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 82,
            "tendency": 54
        },
        "dunk": {
            "value": 90,
            "tendency": 7
        },
        "midrange": {
            "value": 80,
            "tendency": 56
        },
        "outside": {
            "value": 68,
            "tendency": 3
        },
        "drawfoul": 70,
        "freethrow": 79,
        "interior": 95,
        "perimeter": 92,
        "offensiverebound": 76,
        "defensiverebound": 97,
        "speed": 69,
        "vertical": 85,
        "strength": 84,
        "hands": 97,
        "stamina": 97,
        "hustle": 95,
        "passing": 73,
        "steal": 71,
        "block": 73,
        "offensiveconsistency": 85,
        "defensiveconsistency": 96
    },
    "position": "PF",
    "fgaintensity": 2,
    "fgaaverage": 20,
    "color1": "#ffffff",
    "color2": "#f4f9f5",
    "color3": "#000000",
    "image": "garnett_kevin_minnesota_timberwolves"
}, {
    "id": "0078",
    "type": "player",
    "first": "Carlos",
    "last": "Boozer",
    "height": "6-9",
    "weight": "258",
    "number": 5,
    "country": "Germany",
    "team": "Utah Jazz",
    "conference": "Western Conference",
    "season": "2007-2008",
    "salary": 11,
    "unlockedlevel": 67,
    "tier": 2,
    "rarity": "Epic",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 80,
            "tendency": 54
        },
        "dunk": {
            "value": 78,
            "tendency": 5
        },
        "midrange": {
            "value": 74,
            "tendency": 41
        },
        "outside": {
            "value": 67,
            "tendency": 0
        },
        "drawfoul": 66,
        "freethrow": 74,
        "interior": 79,
        "perimeter": 70,
        "offensiverebound": 72,
        "defensiverebound": 86,
        "speed": 67,
        "vertical": 75,
        "strength": 94,
        "hands": 92,
        "stamina": 94,
        "hustle": 61,
        "passing": 65,
        "steal": 64,
        "block": 48,
        "offensiveconsistency": 90,
        "defensiveconsistency": 70
    },
    "position": "PF",
    "fgaintensity": 2,
    "fgaaverage": 16,
    "color1": "#3572c2",
    "color2": "#70adef",
    "color3": "#10061f",
    "image": "boozer_carlos_utah_jazz"
}, {
    "id": "0079",
    "type": "player",
    "first": "Brian",
    "last": "Scalabrine",
    "height": "6-9",
    "weight": "241",
    "number": 44,
    "country": "United States",
    "team": "Boston Celtics",
    "conference": "Eastern Conference",
    "season": "2007-2008",
    "salary": 3,
    "unlockedlevel": 3,
    "tier": 4,
    "rarity": "Legendary",
    "unlockedlevel": 3,
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 67,
            "tendency": 29
        },
        "dunk": {
            "value": 70,
            "tendency": 1
        },
        "midrange": {
            "value": 67,
            "tendency": 21
        },
        "outside": {
            "value": 68,
            "tendency": 49
        },
        "drawfoul": 49,
        "freethrow": 75,
        "interior": 60,
        "perimeter": 61,
        "offensiverebound": 61,
        "defensiverebound": 60,
        "speed": 54,
        "vertical": 55,
        "strength": 59,
        "hands": 90,
        "stamina": 81,
        "hustle": 45,
        "passing": 57,
        "steal": 44,
        "block": 43,
        "offensiveconsistency": 90,
        "defensiveconsistency": 55
    },
    "position": "PF",
    "fgaintensity": 0,
    "fgaaverage": 2,
    "color1": "#5bb28e",
    "color2": "#308c69",
    "color3": "#ffffff",
    "image": "scalabrine_brian_boston_celtics"
}, {
    "id": "0080",
    "type": "player",
    "first": "Karl",
    "last": "Malone",
    "height": "6-9",
    "weight": "250",
    "number": 32,
    "country": "United States",
    "team": "Utah Jazz",
    "conference": "Western Conference",
    "season": "1989-1990",
    "salary": 2,
    "unlockedlevel": 95,
    "tier": 0,
    "rarity": "Legendary",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 84,
            "tendency": 39
        },
        "dunk": {
            "value": 75,
            "tendency": 5
        },
        "midrange": {
            "value": 85,
            "tendency": 56
        },
        "outside": {
            "value": 67,
            "tendency": 0
        },
        "drawfoul": 87,
        "freethrow": 80,
        "interior": 84,
        "perimeter": 88,
        "offensiverebound": 72,
        "defensiverebound": 86,
        "speed": 80,
        "vertical": 90,
        "strength": 95,
        "hands": 85,
        "stamina": 96,
        "hustle": 92,
        "passing": 71,
        "steal": 68,
        "block": 54,
        "color1": "#624eb7",
        "color2": "#472792",
        "color3": "#ffffff",
        "offensiveconsistency": 85,
        "defensiveconsistency": 85
    },
    "position": "PF",
    "fgaintensity": 2,
    "fgaaverage": 20,
    "color1": "#624eb7",
    "color2": "#472792",
    "color3": "#ffffff",
    "image": "malone_karl_utah_jazz"
}, {
    "id": "0081",
    "type": "player",
    "first": "Klay",
    "last": "Thompson",
    "height": "6-7",
    "weight": "215",
    "number": 11,
    "country": "United States",
    "team": "Golden State Warriors",
    "conference": "Western Conference",
    "season": "2017-2018",
    "salary": 18,
    "unlockedlevel": 82,
    "tier": 1,
    "rarity": "Rare",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 72,
            "tendency": 18
        },
        "dunk": {
            "value": 74,
            "tendency": 1
        },
        "midrange": {
            "value": 84,
            "tendency": 38
        },
        "outside": {
            "value": 86,
            "tendency": 44
        },
        "drawfoul": 52,
        "freethrow": 84,
        "interior": 72,
        "perimeter": 88,
        "offensiverebound": 60,
        "defensiverebound": 69,
        "speed": 70,
        "vertical": 61,
        "strength": 49,
        "hands": 82,
        "stamina": 94,
        "hustle": 78,
        "passing": 64,
        "steal": 56,
        "block": 48,
        "offensiveconsistency": 90,
        "defensiveconsistency": 88
    },
    "position": "SG/SF",
    "fgaintensity": 1,
    "fgaaverage": 16,
    "color1": "#f9d18a",
    "color2": "#ffc756",
    "color3": "#19357e",
    "image": "thompson_klay_goldenstate_warriors"
}, {
    "id": "0082",
    "type": "player",
    "first": "Baron",
    "last": "Davis",
    "height": "6-3",
    "weight": "209",
    "number": 5,
    "country": "United States",
    "team": "Golden State Warriors",
    "conference": "Western Conference",
    "season": "2007-2008",
    "salary": 16,
    "unlockedlevel": 66,
    "tier": 2,
    "rarity": "Epic",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 76,
            "tendency": 42
        },
        "dunk": {
            "value": 89,
            "tendency": 1
        },
        "midrange": {
            "value": 73,
            "tendency": 23
        },
        "outside": {
            "value": 83,
            "tendency": 34
        },
        "drawfoul": 68,
        "freethrow": 75,
        "interior": 69,
        "perimeter": 76,
        "offensiverebound": 65,
        "defensiverebound": 69,
        "speed": 91,
        "vertical": 91,
        "strength": 79,
        "hands": 94,
        "stamina": 96,
        "hustle": 95,
        "passing": 83,
        "steal": 87,
        "block": 48,
        "offensiveconsistency": 81,
        "defensiveconsistency": 73
    },
    "position": "PG",
    "fgaintensity": 1,
    "fgaaverage": 19,
    "color1": "#2c3042",
    "color2": "#171a2b",
    "color3": "#f7a72a",
    "image": "davis_baron_goldenstate_warriors"
}, {
    "id": "0083",
    "type": "player",
    "first": "Mike",
    "last": "Conley",
    "height": "6-1",
    "weight": "175",
    "number": 11,
    "country": "United States",
    "team": "Memphis Grizzlies",
    "conference": "Western Conference",
    "season": "2017-2018",
    "salary": 29,
    "unlockedlevel": 50,
    "tier": 2,
    "rarity": "Rare",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 72,
            "tendency": 39
        },
        "dunk": {
            "value": 54,
            "tendency": 0
        },
        "midrange": {
            "value": 68,
            "tendency": 16
        },
        "outside": {
            "value": 85,
            "tendency": 45
        },
        "drawfoul": 69,
        "freethrow": 80,
        "interior": 62,
        "perimeter": 82,
        "offensiverebound": 64,
        "defensiverebound": 68,
        "speed": 80,
        "vertical": 90,
        "strength": 65,
        "hands": 82,
        "stamina": 92,
        "hustle": 82,
        "passing": 70,
        "steal": 60,
        "block": 45,
        "offensiveconsistency": 85,
        "defensiveconsistency": 75
    },
    "position": "PG",
    "fgaintensity": 1,
    "fgaaverage": 14,
    "color1": "#b5d3f4",
    "color2": "#8fb3e3",
    "color3": "#233053",
    "image": "conley_mike_memphis_grizzlies"
}, {
    "id": "0084",
    "type": "player",
    "first": "Ben",
    "last": "Wallace",
    "height": "6-9",
    "weight": "240",
    "number": 3,
    "country": "United States",
    "team": "Detroit Pistons",
    "conference": "Eastern Conference",
    "season": "2003-2004",
    "salary": 6,
    "unlockedlevel": 65,
    "tier": 2,
    "rarity": "Epic",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 73,
            "tendency": 59
        },
        "dunk": {
            "value": 88,
            "tendency": 18
        },
        "midrange": {
            "value": 66,
            "tendency": 22
        },
        "outside": {
            "value": 67,
            "tendency": 1
        },
        "drawfoul": 61,
        "freethrow": 49,
        "interior": 95,
        "perimeter": 73,
        "offensiverebound": 82,
        "defensiverebound": 87,
        "speed": 78,
        "vertical": 88,
        "strength": 85,
        "hands": 85,
        "stamina": 96,
        "hustle": 84,
        "passing": 61,
        "steal": 77,
        "block": 85,
        "offensiveconsistency": 65,
        "defensiveconsistency": 90
    },
    "position": "C",
    "fgaintensity": 0,
    "fgaaverage": 9,
    "color1": "#ffffff",
    "color2": "#e4e6ed",
    "color3": "#131e51",
    "image": "wallace_ben_detroit_pistons"
}, {
    "id": "0085",
    "type": "player",
    "first": "Gerald",
    "last": "Wallace",
    "height": "6-7",
    "weight": "215",
    "number": 3,
    "country": "United States",
    "team": "Charlotte Bobcats",
    "conference": "Eastern Conference",
    "season": "2006-2007",
    "salary": 6,
    "unlockedlevel": 50,
    "tier": 2,
    "rarity": "Epic",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 75,
            "tendency": 62
        },
        "dunk": {
            "value": 87,
            "tendency": 8
        },
        "midrange": {
            "value": 72,
            "tendency": 18
        },
        "outside": {
            "value": 68,
            "tendency": 12
        },
        "drawfoul": 72,
        "freethrow": 69,
        "interior": 82,
        "perimeter": 83,
        "offensiverebound": 70,
        "defensiverebound": 75,
        "speed": 85,
        "vertical": 88,
        "strength": 60,
        "hands": 89,
        "stamina": 95,
        "hustle": 75,
        "passing": 64,
        "steal": 81,
        "block": 55,
        "offensiveconsistency": 70,
        "defensiveconsistency": 81
    },
    "position": "SF",
    "fgaintensity": 0,
    "fgaaverage": 13,
    "color1": "#99b2d6",
    "color2": "#7084a8",
    "color3": "#ffffff",
    "image": "wallace_gerald_charlotte_bobcats"
}, {
    "id": "0086",
    "type": "player",
    "first": "Zydrunas",
    "last": "Ilgauskas",
    "height": "7-3",
    "weight": "238",
    "number": 11,
    "country": "Lithuania",
    "team": "Cleveland Cavaliers",
    "conference": "Eastern Conference",
    "season": "2008-2009",
    "salary": 11,
    "unlockedlevel": 64,
    "tier": 2,
    "rarity": "Epic",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 72,
            "tendency": 38
        },
        "dunk": {
            "value": 74,
            "tendency": 2
        },
        "midrange": {
            "value": 78,
            "tendency": 55
        },
        "outside": {
            "value": 67,
            "tendency": 5
        },
        "drawfoul": 58,
        "freethrow": 80,
        "interior": 85,
        "perimeter": 73,
        "offensiverebound": 72,
        "defensiverebound": 75,
        "speed": 35,
        "vertical": 60,
        "strength": 92,
        "hands": 80,
        "stamina": 90,
        "hustle": 78,
        "passing": 58,
        "steal": 48,
        "block": 60,
        "offensiveconsistency": 95,
        "defensiveconsistency": 80
    },
    "position": "C",
    "fgaintensity": 1,
    "fgaaverage": 11,
    "color1": "#662e44",
    "color2": "#4b1628",
    "color3": "#b59f7c",
    "image": "ilgauskas_zydrunas_cleveland_cavaliers"
}, {
    "id": "0087",
    "type": "player",
    "first": "Jakob",
    "last": "Poeltl",
    "height": "7-0",
    "weight": "248",
    "number": 42,
    "country": "Austria",
    "team": "Toronto Raptors",
    "conference": "Eastern Conference",
    "season": "2017-2018",
    "salary": 3,
    "unlockedlevel": 0,
    "tier": 4,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 72,
            "tendency": 84
        },
        "dunk": {
            "value": 75,
            "tendency": 10
        },
        "midrange": {
            "value": 65,
            "tendency": 5
        },
        "outside": {
            "value": 67,
            "tendency": 1
        },
        "drawfoul": 52,
        "freethrow": 59,
        "interior": 72,
        "perimeter": 61,
        "offensiverebound": 70,
        "defensiverebound": 66,
        "speed": 57,
        "vertical": 64,
        "strength": 71,
        "hands": 63,
        "stamina": 85,
        "hustle": 80,
        "passing": 57,
        "steal": 50,
        "block": 58,
        "offensiveconsistency": 56,
        "defensiveconsistency": 51
    },
    "position": "C",
    "fgaintensity": 0,
    "fgaaverage": 5,
    "color1": "#d14646",
    "color2": "#c11717",
    "color3": "#ffffff",
    "image": "poeltl_jakob_toronto_raptors"
}, {
    "id": "0088",
    "type": "player",
    "first": "Jameer",
    "last": "Nelson",
    "height": "6-0",
    "weight": "190",
    "number": 14,
    "country": "United States",
    "team": "Orlando Magic",
    "conference": "Eastern Conference",
    "season": "2008-2009",
    "salary": 8,
    "unlockedlevel": 61,
    "tier": 2,
    "rarity": "Rare",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 71,
            "tendency": 30
        },
        "dunk": {
            "value": 45,
            "tendency": 0
        },
        "midrange": {
            "value": 83,
            "tendency": 36
        },
        "outside": {
            "value": 75,
            "tendency": 34
        },
        "drawfoul": 56,
        "freethrow": 89,
        "interior": 63,
        "perimeter": 76,
        "offensiverebound": 61,
        "defensiverebound": 67,
        "speed": 86,
        "vertical": 78,
        "strength": 74,
        "hands": 72,
        "stamina": 92,
        "hustle": 85,
        "passing": 75,
        "steal": 64,
        "block": 42,
        "offensiveconsistency": 95,
        "defensiveconsistency": 80
    },
    "position": "PG",
    "fgaintensity": 1,
    "fgaaverage": 13,
    "color1": "#ffffff",
    "color2": "#f2f1fc",
    "color3": "#243d9e",
    "image": "nelson_jameer_orlando_magic"
}, {
    "id": "0089",
    "type": "player",
    "first": "Frank",
    "last": "Kaminsky",
    "height": "7-0",
    "weight": "242",
    "number": 44,
    "country": "United States",
    "team": "Charlotte Hornets",
    "conference": "Eastern Conference",
    "season": "2017-2018",
    "salary": 3,
    "unlockedlevel": 8,
    "tier": 3,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 72,
            "tendency": 41
        },
        "dunk": {
            "value": 71,
            "tendency": 1
        },
        "midrange": {
            "value": 67,
            "tendency": 20
        },
        "outside": {
            "value": 78,
            "tendency": 38
        },
        "drawfoul": 57,
        "freethrow": 80,
        "interior": 62,
        "perimeter": 61,
        "offensiverebound": 62,
        "defensiverebound": 68,
        "speed": 54,
        "vertical": 64,
        "strength": 39,
        "hands": 82,
        "stamina": 88,
        "hustle": 82,
        "passing": 60,
        "steal": 50,
        "block": 43,
        "offensiveconsistency": 82,
        "defensiveconsistency": 57
    },
    "position": "PF/C",
    "fgaintensity": 0,
    "fgaaverage": 9,
    "color1": "#92c2dd",
    "color2": "#629cc1",
    "color3": "#ffffff",
    "image": "kaminsky_frank_charlotte_hornets"
}, {
    "id": "0090",
    "type": "player",
    "first": "Taurean",
    "last": "Prince",
    "height": "6-8",
    "weight": "220",
    "number": 12,
    "country": "United States",
    "team": "Atlanta Hawks",
    "conference": "Eastern Conference",
    "season": "2017-2018",
    "salary": 2,
    "unlockedlevel": 0,
    "tier": 4,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 72,
            "tendency": 36
        },
        "dunk": {
            "value": 77,
            "tendency": 1
        },
        "midrange": {
            "value": 73,
            "tendency": 16
        },
        "outside": {
            "value": 78,
            "tendency": 47
        },
        "drawfoul": 58,
        "freethrow": 84,
        "interior": 60,
        "perimeter": 70,
        "offensiverebound": 62,
        "defensiverebound": 71,
        "speed": 80,
        "vertical": 81,
        "strength": 57,
        "hands": 74,
        "stamina": 91,
        "hustle": 81,
        "passing": 64,
        "steal": 60,
        "block": 48,
        "offensiveconsistency": 56,
        "defensiveconsistency": 56
    },
    "position": "SF",
    "fgaintensity": 0,
    "fgaaverage": 12,
    "color1": "#ffffff",
    "color2": "#e8eff4",
    "color3": "#b62636",
    "image": "prince_taurean_atlanta_hawks"
}, {
    "id": "0091",
    "type": "player",
    "first": "Steve",
    "last": "Kerr",
    "height": "6-3",
    "weight": "175",
    "number": 25,
    "country": "Lebanon",
    "team": "Chicago Bulls",
    "conference": "Eastern Conference",
    "season": "1995-1996",
    "salary": 1,
    "unlockedlevel": 10,
    "tier": 3,
    "rarity": "Epic",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 69,
            "tendency": 21
        },
        "dunk": {
            "value": 40,
            "tendency": 0
        },
        "midrange": {
            "value": 75,
            "tendency": 31
        },
        "outside": {
            "value": 73,
            "tendency": 48
        },
        "drawfoul": 50,
        "freethrow": 92,
        "interior": 61,
        "perimeter": 78,
        "offensiverebound": 60,
        "defensiverebound": 60,
        "speed": 78,
        "vertical": 57,
        "strength": 25,
        "hands": 95,
        "stamina": 87,
        "hustle": 82,
        "passing": 62,
        "steal": 56,
        "block": 40,
        "offensiveconsistency": 90,
        "defensiveconsistency": 75
    },
    "position": "PG",
    "fgaintensity": 0,
    "fgaaverage": 6,
    "color1": "#d32237",
    "color2": "#9e0a1c",
    "color3": "#ffffff",
    "image": "kerr_steve_chicago_bulls"
}, {
    "id": "0092",
    "type": "player",
    "first": "Eric",
    "last": "Bledsoe",
    "height": "6-1",
    "weight": "205",
    "number": 2,
    "country": "United States",
    "team": "Phoenix Suns",
    "conference": "Western Conference",
    "season": "2016-2017",
    "salary": 14,
    "unlockedlevel": 51,
    "tier": 2,
    "rarity": "Rare",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 75,
            "tendency": 42
        },
        "dunk": {
            "value": 81,
            "tendency": 0
        },
        "midrange": {
            "value": 74,
            "tendency": 29
        },
        "outside": {
            "value": 77,
            "tendency": 29
        },
        "drawfoul": 74,
        "freethrow": 85,
        "interior": 68,
        "perimeter": 77,
        "offensiverebound": 63,
        "defensiverebound": 71,
        "speed": 80,
        "vertical": 85,
        "strength": 72,
        "hands": 80,
        "stamina": 93,
        "hustle": 78,
        "passing": 78,
        "steal": 68,
        "block": 48,
        "offensiveconsistency": 72,
        "defensiveconsistency": 72
    },
    "position": "PG",
    "fgaintensity": 1,
    "fgaaverage": 16,
    "color1": "#f99c5d",
    "color2": "#ff933b",
    "color3": "#662d91",
    "image": "bledsoe_eric_phoenix_suns"
}, {
    "id": "0093",
    "type": "player",
    "first": "Malik",
    "last": "Monk",
    "height": "6-3",
    "weight": "200",
    "number": 1,
    "country": "United States",
    "team": "Charlotte Hornets",
    "conference": "Eastern Conference",
    "season": "2017-2018",
    "salary": 3,
    "unlockedlevel": 15,
    "tier": 3,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 68,
            "tendency": 18
        },
        "dunk": {
            "value": 73,
            "tendency": 1
        },
        "midrange": {
            "value": 71,
            "tendency": 24
        },
        "outside": {
            "value": 76,
            "tendency": 57
        },
        "drawfoul": 49,
        "freethrow": 84,
        "interior": 62,
        "perimeter": 65,
        "offensiverebound": 59,
        "defensiverebound": 59,
        "speed": 80,
        "vertical": 85,
        "strength": 45,
        "hands": 85,
        "stamina": 82,
        "hustle": 69,
        "passing": 59,
        "steal": 46,
        "block": 42,
        "offensiveconsistency": 67,
        "defensiveconsistency": 52
    },
    "position": "PG/SG",
    "fgaintensity": 0,
    "fgaaverage": 7,
    "color1": "#83e5e5",
    "color2": "#1ebfcb",
    "color3": "#554683",
    "image": "monk_malik_charlotte_hornets"
}, {
    "id": "0094",
    "type": "player",
    "first": "David",
    "last": "Robinson",
    "height": "7-1",
    "weight": "235",
    "number": 50,
    "country": "United States",
    "team": "San Antonio Spurs",
    "conference": "Western Conference",
    "season": "1994-1995",
    "salary": 7,
    "unlockedlevel": 96,
    "tier": 0,
    "rarity": "Legendary",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 80,
            "tendency": 50
        },
        "dunk": {
            "value": 90,
            "tendency": 15
        },
        "midrange": {
            "value": 74,
            "tendency": 35
        },
        "outside": {
            "value": 67,
            "tendency": 0
        },
        "drawfoul": 82,
        "freethrow": 74,
        "interior": 94,
        "perimeter": 88,
        "offensiverebound": 77,
        "defensiverebound": 83,
        "speed": 81,
        "vertical": 90,
        "strength": 98,
        "hands": 90,
        "stamina": 94,
        "hustle": 95,
        "passing": 64,
        "steal": 68,
        "block": 79,
        "offensiveconsistency": 93,
        "defensiveconsistency": 94
    },
    "position": "C",
    "fgaintensity": 2,
    "fgaaverage": 18,
    "color1": "#dedee0",
    "color2": "#bab9bf",
    "color3": "#000000",
    "image": "robinson_david_sanantonio_spurs"
}, {
    "id": "0095",
    "type": "player",
    "first": "Jarrett",
    "last": "Jack",
    "height": "6-3",
    "weight": "200",
    "number": 55,
    "country": "United States",
    "team": "New York Knicks",
    "conference": "Eastern Conference",
    "season": "2017-2018",
    "salary": 2,
    "unlockedlevel": 4,
    "tier": 4,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 71,
            "tendency": 34
        },
        "dunk": {
            "value": 41,
            "tendency": 0
        },
        "midrange": {
            "value": 71,
            "tendency": 47
        },
        "outside": {
            "value": 70,
            "tendency": 19
        },
        "drawfoul": 52,
        "freethrow": 84,
        "interior": 60,
        "perimeter": 64,
        "offensiverebound": 60,
        "defensiverebound": 66,
        "speed": 82,
        "vertical": 60,
        "strength": 55,
        "hands": 84,
        "stamina": 89,
        "hustle": 70,
        "passing": 76,
        "steal": 52,
        "block": 42,
        "offensiveconsistency": 80,
        "defensiveconsistency": 51
    },
    "position": "PG",
    "fgaintensity": 0,
    "fgaaverage": 7,
    "color1": "#2363a3",
    "color2": "#074584",
    "color3": "#fe803e",
    "image": "jack_jarrett_newyork_knicks"
}, {
    "id": "0096",
    "type": "player",
    "first": "Sim",
    "last": "Bhullar",
    "height": "7-5",
    "weight": "360",
    "number": 32,
    "country": "Canada",
    "team": "Sacramento Kings",
    "conference": "Western Conference",
    "season": "2014-2015",
    "salary": 1,
    "unlockedlevel": 0,
    "tier": 4,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 70,
            "tendency": 83
        },
        "dunk": {
            "value": 65,
            "tendency": 2
        },
        "midrange": {
            "value": 65,
            "tendency": 15
        },
        "outside": {
            "value": 67,
            "tendency": 0
        },
        "drawfoul": 47,
        "freethrow": 50,
        "interior": 68,
        "perimeter": 60,
        "offensiverebound": 58,
        "defensiverebound": 57,
        "speed": 29,
        "vertical": 25,
        "strength": 69,
        "hands": 65,
        "stamina": 75,
        "hustle": 50,
        "passing": 55,
        "steal": 40,
        "block": 45,
        "offensiveconsistency": 59,
        "defensiveconsistency": 59
    },
    "position": "C",
    "fgaintensity": 0,
    "fgaaverage": 1,
    "color1": "#4f4faf",
    "color2": "#312a94",
    "color3": "#ffffff",
    "image": "bhullar_sim_sacramento_kings"
}, {
    "id": "0097",
    "type": "player",
    "first": "Nik",
    "last": "Stauskas",
    "height": "6-6",
    "weight": "205",
    "number": 11,
    "country": "Canada",
    "team": "Philadelphia 76ers",
    "conference": "Eastern Conference",
    "season": "2017-2018",
    "salary": 4,
    "unlockedlevel": 0,
    "tier": 4,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 69,
            "tendency": 50
        },
        "dunk": {
            "value": 65,
            "tendency": 0
        },
        "midrange": {
            "value": 71,
            "tendency": 25
        },
        "outside": {
            "value": 75,
            "tendency": 25
        },
        "drawfoul": 55,
        "freethrow": 81,
        "interior": 60,
        "perimeter": 61,
        "offensiverebound": 60,
        "defensiverebound": 66,
        "speed": 68,
        "vertical": 67,
        "strength": 33,
        "hands": 78,
        "stamina": 82,
        "hustle": 73,
        "passing": 63,
        "steal": 52,
        "block": 46,
        "offensiveconsistency": 63,
        "defensiveconsistency": 53
    },
    "position": "SF",
    "fgaintensity": 0,
    "fgaaverage": 4,
    "color1": "#406ac6",
    "color2": "#1f409b",
    "color3": "#ffffff",
    "image": "stauskas_nik_philadelphia_sixers"
}, {
    "id": "0098",
    "type": "player",
    "first": "Shabazz",
    "last": "Napier",
    "height": "6-1",
    "weight": "175",
    "number": 6,
    "country": "United States",
    "team": "Portland Trail Blazers",
    "conference": "Western Conference",
    "season": "2017-2018",
    "salary": 2,
    "unlockedlevel": 2,
    "tier": 4,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 69,
            "tendency": 28
        },
        "dunk": {
            "value": 67,
            "tendency": 0
        },
        "midrange": {
            "value": 72,
            "tendency": 32
        },
        "outside": {
            "value": 74,
            "tendency": 40
        },
        "drawfoul": 55,
        "freethrow": 84,
        "interior": 60,
        "perimeter": 63,
        "offensiverebound": 60,
        "defensiverebound": 63,
        "speed": 83,
        "vertical": 72,
        "strength": 32,
        "hands": 72,
        "stamina": 86,
        "hustle": 85,
        "passing": 62,
        "steal": 62,
        "block": 43,
        "offensiveconsistency": 53,
        "defensiveconsistency": 58
    },
    "position": "PG",
    "fgaintensity": 0,
    "fgaaverage": 7,
    "color1": "#32353d",
    "color2": "#17191e",
    "color3": "#ffffff",
    "image": "napier_shabazz_portland_trailblazers"
}, {
    "id": "0099",
    "type": "player",
    "first": "Sam",
    "last": "Dekker",
    "height": "6-9",
    "weight": "230",
    "number": 7,
    "country": "United States",
    "team": "Los Angeles Clippers",
    "conference": "Western Conference",
    "season": "2017-2018",
    "salary": 2,
    "unlockedlevel": 4,
    "tier": 4,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 69,
            "tendency": 59
        },
        "dunk": {
            "value": 75,
            "tendency": 11
        },
        "midrange": {
            "value": 66,
            "tendency": 7
        },
        "outside": {
            "value": 68,
            "tendency": 23
        },
        "drawfoul": 50,
        "freethrow": 66,
        "interior": 60,
        "perimeter": 62,
        "offensiverebound": 62,
        "defensiverebound": 63,
        "speed": 72,
        "vertical": 72,
        "strength": 62,
        "hands": 68,
        "stamina": 82,
        "hustle": 77,
        "passing": 56,
        "steal": 46,
        "block": 42,
        "offensiveconsistency": 57,
        "defensiveconsistency": 52
    },
    "position": "PF",
    "fgaintensity": 0,
    "fgaaverage": 4,
    "color1": "#eeebf1",
    "color2": "#ffffff",
    "color3": "#243a8e",
    "image": "dekker_sam_losangeles_clippers"
}, {
    "id": "0100",
    "type": "player",
    "first": "Dejounte",
    "last": "Murray",
    "height": "6-5",
    "weight": "170",
    "number": 5,
    "country": "United States",
    "team": "San Antonio Spurs",
    "conference": "Western Conference",
    "season": "2017-2018",
    "salary": 1,
    "unlockedlevel": 5,
    "tier": 4,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 73,
            "tendency": 60
        },
        "dunk": {
            "value": 78,
            "tendency": 3
        },
        "midrange": {
            "value": 67,
            "tendency": 30
        },
        "outside": {
            "value": 67,
            "tendency": 7
        },
        "drawfoul": 54,
        "freethrow": 71,
        "interior": 70,
        "perimeter": 72,
        "offensiverebound": 66,
        "defensiverebound": 72,
        "speed": 81,
        "vertical": 58,
        "strength": 38,
        "hands": 85,
        "stamina": 87,
        "hustle": 72,
        "passing": 65,
        "steal": 64,
        "block": 46,
        "offensiveconsistency": 67,
        "defensiveconsistency": 69
    },
    "position": "PG",
    "fgaintensity": 0,
    "fgaaverage": 3,
    "color1": "#b7b7b7",
    "color2": "#828181",
    "color3": "#ffffff",
    "image": "murray_dejounte_sanantonio_spurs"
}, {
    "id": "0101",
    "type": "player",
    "first": "Jonathan",
    "last": "Isaac",
    "height": "6-10",
    "weight": "210",
    "number": 1,
    "country": "United States",
    "team": "Orlando Magic",
    "conference": "Eastern Conference",
    "season": "2017-2018",
    "salary": 4,
    "unlockedlevel": 6,
    "tier": 4,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 69,
            "tendency": 24
        },
        "dunk": {
            "value": 75,
            "tendency": 7
        },
        "midrange": {
            "value": 68,
            "tendency": 37
        },
        "outside": {
            "value": 70,
            "tendency": 32
        },
        "drawfoul": 51,
        "freethrow": 76,
        "interior": 65,
        "perimeter": 80,
        "offensiverebound": 62,
        "defensiverebound": 68,
        "speed": 75,
        "vertical": 77,
        "strength": 37,
        "hands": 65,
        "stamina": 86,
        "hustle": 87,
        "passing": 57,
        "steal": 64,
        "block": 57,
        "offensiveconsistency": 57,
        "defensiveconsistency": 67
    },
    "position": "PF",
    "fgaintensity": 0,
    "fgaaverage": 5,
    "color1": "#3f85fa",
    "color2": "#163ca5",
    "color3": "#ffffff",
    "image": "isaac_jonathan_orlando_magic"
}, {
    "id": "0102",
    "type": "player",
    "first": "Al",
    "last": "Jefferson",
    "height": "6-10",
    "weight": "289",
    "number": 7,
    "country": "United States",
    "team": "Indiana Pacers",
    "conference": "Eastern Conference",
    "season": "2017-2018",
    "salary": 10,
    "unlockedlevel": 17,
    "tier": 3,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 73,
            "tendency": 55
        },
        "dunk": {
            "value": 76,
            "tendency": 4
        },
        "midrange": {
            "value": 67,
            "tendency": 40
        },
        "outside": {
            "value": 67,
            "tendency": 1
        },
        "drawfoul": 51,
        "freethrow": 83,
        "interior": 78,
        "perimeter": 64,
        "offensiverebound": 63,
        "defensiverebound": 68,
        "speed": 65,
        "vertical": 60,
        "strength": 88,
        "hands": 77,
        "stamina": 82,
        "hustle": 60,
        "passing": 57,
        "steal": 48,
        "block": 49,
        "offensiveconsistency": 65,
        "defensiveconsistency": 51
    },
    "position": "C",
    "fgaintensity": 1,
    "fgaaverage": 6,
    "color1": "#f9ce62",
    "color2": "#ffc92a",
    "color3": "#ffffff",
    "image": "jefferson_al_indiana_pacers"
}, {
    "id": "0103",
    "type": "player",
    "first": "Anthony",
    "last": "Davis",
    "height": "6-10",
    "weight": "253",
    "number": 23,
    "country": "United States",
    "team": "New Orleans Pelicans",
    "conference": "Western Conference",
    "season": "2017-2018",
    "salary": 24,
    "unlockedlevel": 85,
    "tier": 1,
    "rarity": "Epic",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 83,
            "tendency": 44
        },
        "dunk": {
            "value": 86,
            "tendency": 14
        },
        "midrange": {
            "value": 72,
            "tendency": 31
        },
        "outside": {
            "value": 72,
            "tendency": 11
        },
        "drawfoul": 79,
        "freethrow": 83,
        "interior": 85,
        "perimeter": 78,
        "offensiverebound": 73,
        "defensiverebound": 88,
        "speed": 78,
        "vertical": 82,
        "strength": 75,
        "hands": 85,
        "stamina": 95,
        "hustle": 88,
        "passing": 63,
        "steal": 71,
        "block": 79,
        "offensiveconsistency": 89,
        "defensiveconsistency": 84
    },
    "position": "C/PF",
    "fgaintensity": 2,
    "fgaaverage": 20,
    "color1": "#d3d8ea",
    "color2": "#ffffff",
    "color3": "#000d35",
    "image": "davis_anthony_neworleans_pelicans"
}, {
    "id": "0104",
    "type": "player",
    "first": "Joel",
    "last": "Embiid",
    "height": "7-0",
    "weight": "250",
    "number": 21,
    "country": "Cameroon",
    "team": "Philadelphia 76ers",
    "conference": "Eastern Conference",
    "season": "2017-2018",
    "salary": 6,
    "unlockedlevel": 83,
    "tier": 1,
    "rarity": "Epic",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 80,
            "tendency": 40
        },
        "dunk": {
            "value": 87,
            "tendency": 7
        },
        "midrange": {
            "value": 71,
            "tendency": 33
        },
        "outside": {
            "value": 75,
            "tendency": 20
        },
        "drawfoul": 76,
        "freethrow": 77,
        "interior": 87,
        "perimeter": 81,
        "offensiverebound": 72,
        "defensiverebound": 89,
        "speed": 75,
        "vertical": 81,
        "strength": 88,
        "hands": 79,
        "stamina": 92,
        "hustle": 79,
        "passing": 66,
        "steal": 52,
        "block": 67,
        "offensiveconsistency": 89,
        "defensiveconsistency": 88
    },
    "position": "C",
    "fgaintensity": 2,
    "fgaaverage": 17,
    "color1": "#ffffff",
    "color2": "#ebebe7",
    "color3": "#323985",
    "image": "embiid_joel_philadelphia_sixers"
}, {
    "id": "0105",
    "type": "player",
    "first": "Chris",
    "last": "Paul",
    "height": "6-0",
    "weight": "175",
    "number": 3,
    "country": "United States",
    "team": "New Orleans Hornets",
    "conference": "Western Conference",
    "season": "2008-2009",
    "salary": 5,
    "unlockedlevel": 86,
    "tier": 1,
    "rarity": "Epic",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 79,
            "tendency": 45
        },
        "dunk": {
            "value": 62,
            "tendency": 0
        },
        "midrange": {
            "value": 77,
            "tendency": 41
        },
        "outside": {
            "value": 72,
            "tendency": 14
        },
        "drawfoul": 74,
        "freethrow": 87,
        "interior": 78,
        "perimeter": 86,
        "offensiverebound": 63,
        "defensiverebound": 74,
        "speed": 96,
        "vertical": 77,
        "strength": 64,
        "hands": 88,
        "stamina": 96,
        "hustle": 88,
        "passing": 96,
        "steal": 97,
        "block": 42,
        "offensiveconsistency": 89,
        "defensiveconsistency": 87
    },
    "position": "PG",
    "fgaintensity": 1,
    "fgaaverage": 16,
    "color1": "#40ccf2",
    "color2": "#0091d4",
    "color3": "#ffffff",
    "image": "paul_chris_neworleans_hornets"
}, {
    "id": "0106",
    "type": "player",
    "first": "Amare",
    "last": "Stoudemire",
    "height": "6-10",
    "weight": "245",
    "number": 1,
    "country": "United States",
    "team": "Phoenix Suns",
    "conference": "Western Conference",
    "season": "2007-2008",
    "salary": 14,
    "unlockedlevel": 88,
    "tier": 1,
    "rarity": "Epic",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 82,
            "tendency": 60
        },
        "dunk": {
            "value": 90,
            "tendency": 8
        },
        "midrange": {
            "value": 72,
            "tendency": 29
        },
        "outside": {
            "value": 67,
            "tendency": 3
        },
        "drawfoul": 82,
        "freethrow": 81,
        "interior": 68,
        "perimeter": 64,
        "offensiverebound": 72,
        "defensiverebound": 81,
        "speed": 82,
        "vertical": 95,
        "strength": 82,
        "hands": 98,
        "stamina": 94,
        "hustle": 85,
        "passing": 60,
        "steal": 56,
        "block": 72,
        "offensiveconsistency": 85,
        "defensiveconsistency": 60
    },
    "position": "C/PF",
    "fgaintensity": 2,
    "fgaaverage": 15,
    "color1": "#ffffff",
    "color2": "#ede7f2",
    "color3": "#4b307d",
    "image": "stoudemire_amare_phoenix_suns"
}, {
    "id": "0107",
    "type": "player",
    "first": "Latrell",
    "last": "Sprewell",
    "height": "6-5",
    "weight": "190",
    "number": 8,
    "country": "United States",
    "team": "New York Knicks",
    "conference": "Eastern Conference",
    "season": "2000-2001",
    "salary": 10,
    "unlockedlevel": 60,
    "tier": 2,
    "rarity": "Rare",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 78,
            "tendency": 39
        },
        "dunk": {
            "value": 80,
            "tendency": 1
        },
        "midrange": {
            "value": 75,
            "tendency": 49
        },
        "outside": {
            "value": 69,
            "tendency": 11
        },
        "drawfoul": 65,
        "freethrow": 78,
        "interior": 62,
        "perimeter": 83,
        "offensiverebound": 62,
        "defensiverebound": 71,
        "speed": 81,
        "vertical": 88,
        "strength": 58,
        "hands": 79,
        "stamina": 96,
        "hustle": 74,
        "passing": 67,
        "steal": 68,
        "block": 46,
        "offensiveconsistency": 85,
        "defensiveconsistency": 69
    },
    "position": "SF/SG",
    "fgaintensity": 2,
    "fgaaverage": 16,
    "color1": "#4e67ad",
    "color2": "#2c3c89",
    "color3": "#ffffff",
    "image": "sprewell_latrell_newyork_knicks"
}, {
    "id": "0108",
    "type": "player",
    "first": "Gilbert",
    "last": "Arenas",
    "height": "6-3",
    "weight": "191",
    "number": 0,
    "country": "United States",
    "team": "Washington Wizards",
    "conference": "Eastern Conference",
    "season": "2005-2006",
    "salary": 10,
    "unlockedlevel": 87,
    "tier": 1,
    "rarity": "Rare",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 74,
            "tendency": 30
        },
        "dunk": {
            "value": 77,
            "tendency": 1
        },
        "midrange": {
            "value": 84,
            "tendency": 37
        },
        "outside": {
            "value": 84,
            "tendency": 32
        },
        "drawfoul": 87,
        "freethrow": 82,
        "interior": 62,
        "perimeter": 79,
        "offensiverebound": 62,
        "defensiverebound": 66,
        "speed": 82,
        "vertical": 87,
        "strength": 77,
        "hands": 81,
        "stamina": 98,
        "hustle": 78,
        "passing": 77,
        "steal": 81,
        "block": 45,
        "offensiveconsistency": 83,
        "defensiveconsistency": 66
    },
    "position": "PG",
    "fgaintensity": 2,
    "fgaaverage": 21,
    "color1": "#dbc7a1",
    "color2": "#b79e6c",
    "color3": "#282727",
    "image": "arenas_gilbert_washington_wizards"
}, {
    "id": "0109",
    "type": "player",
    "first": "Charlie",
    "last": "Villanueva",
    "height": "6-11",
    "weight": "232",
    "number": 31,
    "country": "United States",
    "team": "Milwaukee Bucks",
    "conference": "Eastern Conference",
    "season": "2008-2009",
    "salary": 3,
    "unlockedlevel": 18,
    "tier": 3,
    "rarity": "Rare",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 76,
            "tendency": 40
        },
        "dunk": {
            "value": 79,
            "tendency": 4
        },
        "midrange": {
            "value": 72,
            "tendency": 32
        },
        "outside": {
            "value": 76,
            "tendency": 24
        },
        "drawfoul": 59,
        "freethrow": 84,
        "interior": 70,
        "perimeter": 68,
        "offensiverebound": 70,
        "defensiverebound": 74,
        "speed": 72,
        "vertical": 69,
        "strength": 69,
        "hands": 79,
        "stamina": 90,
        "hustle": 80,
        "passing": 61,
        "steal": 52,
        "block": 51,
        "offensiveconsistency": 75,
        "defensiveconsistency": 65
    },
    "position": "PF",
    "fgaintensity": 1,
    "fgaaverage": 14,
    "color1": "#325447",
    "color2": "#16241f",
    "color3": "#ffffff",
    "image": "villanueva_charlie_milwaukee_bucks"
}, {
    "id": "0110",
    "type": "player",
    "first": "Nikola",
    "last": "Mirotic",
    "height": "6-10",
    "weight": "220",
    "number": 44,
    "country": "Montenegro",
    "team": "Chicago Bulls",
    "conference": "Eastern Conference",
    "season": "2014-2015",
    "salary": 5,
    "unlockedlevel": 19,
    "tier": 3,
    "rarity": "Rare",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 69,
            "tendency": 27
        },
        "dunk": {
            "value": 76,
            "tendency": 1
        },
        "midrange": {
            "value": 71,
            "tendency": 19
        },
        "outside": {
            "value": 72,
            "tendency": 53
        },
        "drawfoul": 61,
        "freethrow": 80,
        "interior": 69,
        "perimeter": 62,
        "offensiverebound": 63,
        "defensiverebound": 72,
        "speed": 69,
        "vertical": 67,
        "strength": 65,
        "hands": 68,
        "stamina": 86,
        "hustle": 88,
        "passing": 59,
        "steal": 54,
        "block": 51,
        "offensiveconsistency": 77,
        "defensiveconsistency": 54
    },
    "position": "PF",
    "fgaintensity": 1,
    "fgaaverage": 8,
    "color1": "#ffffff",
    "color2": "#f1efeb",
    "color3": "#000000",
    "image": "mirotic_nikola_chicago_bulls"
}, {
    "id": "0111",
    "type": "player",
    "first": "Chandler",
    "last": "Parsons",
    "height": "6-10",
    "weight": "230",
    "number": 25,
    "country": "United States",
    "team": "Memphis Grizzlies",
    "conference": "Western Conference",
    "season": "2017-2018",
    "salary": 23,
    "unlockedlevel": 20,
    "tier": 3,
    "rarity": "Rare",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 69,
            "tendency": 29
        },
        "dunk": {
            "value": 77,
            "tendency": 1
        },
        "midrange": {
            "value": 71,
            "tendency": 19
        },
        "outside": {
            "value": 76,
            "tendency": 51
        },
        "drawfoul": 50,
        "freethrow": 63,
        "interior": 60,
        "perimeter": 73,
        "offensiverebound": 60,
        "defensiverebound": 64,
        "speed": 69,
        "vertical": 68,
        "strength": 54,
        "hands": 72,
        "stamina": 86,
        "hustle": 70,
        "passing": 61,
        "steal": 50,
        "block": 45,
        "offensiveconsistency": 55,
        "defensiveconsistency": 65
    },
    "position": "SF/PF",
    "fgaintensity": 1,
    "fgaaverage": 7,
    "color1": "#424251",
    "color2": "#0d0f17",
    "color3": "#9eaaaf",
    "image": "parsons_chandler_memphis_grizzlies"
}, {
    "id": "0112",
    "type": "player",
    "first": "Erick",
    "last": "Dampier",
    "height": "6-11",
    "weight": "265",
    "number": 25,
    "country": "United States",
    "team": "Dallas Mavericks",
    "conference": "Western Conference",
    "season": "2007-2008",
    "salary": 11,
    "unlockedlevel": 6,
    "tier": 4,
    "rarity": "Rare",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 70,
            "tendency": 72
        },
        "dunk": {
            "value": 78,
            "tendency": 27
        },
        "midrange": {
            "value": 65,
            "tendency": 1
        },
        "outside": {
            "value": 67,
            "tendency": 0
        },
        "drawfoul": 55,
        "freethrow": 58,
        "interior": 82,
        "perimeter": 61,
        "offensiverebound": 75,
        "defensiverebound": 73,
        "speed": 59,
        "vertical": 38,
        "strength": 75,
        "hands": 72,
        "stamina": 88,
        "hustle": 77,
        "passing": 57,
        "steal": 46,
        "block": 63,
        "offensiveconsistency": 58,
        "defensiveconsistency": 79
    },
    "position": "C",
    "fgaintensity": 0,
    "fgaaverage": 4,
    "color1": "#21203f",
    "color2": "#13141e",
    "color3": "#ffffff",
    "image": "dampier_erick_dallas_mavericks"
}, {
    "id": "0113",
    "type": "player",
    "first": "Eduardo",
    "last": "Najera",
    "height": "6-8",
    "weight": "240",
    "number": 21,
    "country": "Mexico",
    "team": "Denver Nuggets",
    "conference": "Western Conference",
    "season": "2006-2007",
    "salary": 5,
    "unlockedlevel": 7,
    "tier": 4,
    "rarity": "Rare",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 71,
            "tendency": 71
        },
        "dunk": {
            "value": 75,
            "tendency": 4
        },
        "midrange": {
            "value": 66,
            "tendency": 24
        },
        "outside": {
            "value": 67,
            "tendency": 1
        },
        "drawfoul": 53,
        "freethrow": 72,
        "interior": 75,
        "perimeter": 81,
        "offensiverebound": 68,
        "defensiverebound": 65,
        "speed": 71,
        "vertical": 50,
        "strength": 69,
        "hands": 85,
        "stamina": 87,
        "hustle": 95,
        "passing": 57,
        "steal": 60,
        "block": 45,
        "offensiveconsistency": 58,
        "defensiveconsistency": 77
    },
    "position": "PF/SF",
    "fgaintensity": 0,
    "fgaaverage": 5,
    "color1": "#6590ca",
    "color2": "#3a5ba8",
    "color3": "#ffffff",
    "image": "najera_eduardo_denver_nuggets"
}, {
    "id": "0114",
    "type": "player",
    "first": "Vladimir",
    "last": "Radmanovic",
    "height": "6-10",
    "weight": "227",
    "number": 77,
    "country": "Bosnia and Herzegovina",
    "team": "Seattle SuperSonics",
    "conference": "Western Conference",
    "season": "2003-2004",
    "salary": 2,
    "unlockedlevel": 21,
    "tier": 3,
    "rarity": "Epic",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 70,
            "tendency": 27
        },
        "dunk": {
            "value": 77,
            "tendency": 3
        },
        "midrange": {
            "value": 76,
            "tendency": 24
        },
        "outside": {
            "value": 75,
            "tendency": 46
        },
        "drawfoul": 53,
        "freethrow": 75,
        "interior": 62,
        "perimeter": 68,
        "offensiverebound": 66,
        "defensiverebound": 71,
        "speed": 77,
        "vertical": 84,
        "strength": 76,
        "hands": 81,
        "stamina": 92,
        "hustle": 79,
        "passing": 61,
        "steal": 60,
        "block": 48,
        "offensiveconsistency": 80,
        "defensiveconsistency": 57
    },
    "position": "PF",
    "fgaintensity": 1,
    "fgaaverage": 11,
    "color1": "#2e7c5e",
    "color2": "#1f4739",
    "color3": "#ffffff",
    "image": "radmanovic_vladimir_seattle_supersonics"
}, {
    "id": "0115",
    "type": "player",
    "first": "Richard",
    "last": "Jefferson",
    "height": "6-7",
    "weight": "233",
    "number": 24,
    "country": "United States",
    "team": "New Jersey Nets",
    "conference": "Eastern Conference",
    "season": "2005-2006",
    "salary": 10,
    "unlockedlevel": 59,
    "tier": 2,
    "rarity": "Epic",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 73,
            "tendency": 40
        },
        "dunk": {
            "value": 80,
            "tendency": 11
        },
        "midrange": {
            "value": 76,
            "tendency": 30
        },
        "outside": {
            "value": 69,
            "tendency": 19
        },
        "drawfoul": 76,
        "freethrow": 81,
        "interior": 70,
        "perimeter": 79,
        "offensiverebound": 65,
        "defensiverebound": 77,
        "speed": 86,
        "vertical": 92,
        "strength": 69,
        "hands": 81,
        "stamina": 97,
        "hustle": 85,
        "passing": 69,
        "steal": 56,
        "block": 43,
        "offensiveconsistency": 95,
        "defensiveconsistency": 75
    },
    "position": "SF",
    "fgaintensity": 2,
    "fgaaverage": 13,
    "color1": "#ffffff",
    "color2": "#efedee",
    "color3": "#181632",
    "image": "jefferson_richard_newjersey_nets"
}, {
    "id": "0116",
    "type": "player",
    "first": "Fabricio",
    "last": "Oberto",
    "height": "6-10",
    "weight": "245",
    "number": 7,
    "country": "Argentina",
    "team": "San Antonio Spurs",
    "conference": "Western Conference",
    "season": "2007-2008",
    "salary": 4,
    "unlockedlevel": 7,
    "tier": 4,
    "rarity": "Rare",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 70,
            "tendency": 70
        },
        "dunk": {
            "value": 65,
            "tendency": 0
        },
        "midrange": {
            "value": 66,
            "tendency": 30
        },
        "outside": {
            "value": 67,
            "tendency": 0
        },
        "drawfoul": 50,
        "freethrow": 61,
        "interior": 78,
        "perimeter": 70,
        "offensiverebound": 69,
        "defensiverebound": 69,
        "speed": 59,
        "vertical": 48,
        "strength": 76,
        "hands": 88,
        "stamina": 86,
        "hustle": 84,
        "passing": 59,
        "steal": 50,
        "block": 43,
        "offensiveconsistency": 58,
        "defensiveconsistency": 73
    },
    "position": "PF/C",
    "fgaintensity": 0,
    "fgaaverage": 4,
    "color1": "#2d2d2d",
    "color2": "#121412",
    "color3": "#ffffff",
    "image": "oberto_fabricio_sanantonio_spurs"
}, {
    "id": "0117",
    "type": "player",
    "first": "Emmanuel",
    "last": "Mudiay",
    "height": "6-5",
    "weight": "200",
    "number": 0,
    "country": "Democratic Republic of the Congo",
    "team": "Denver Nuggets",
    "conference": "Western Conference",
    "season": "2017-2018",
    "salary": 3,
    "unlockedlevel": 0,
    "tier": 4,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 54,
            "tendency": 44
        },
        "dunk": {
            "value": 74,
            "tendency": 1
        },
        "midrange": {
            "value": 62,
            "tendency": 23
        },
        "outside": {
            "value": 71,
            "tendency": 32
        },
        "drawfoul": 55,
        "freethrow": 76,
        "interior": 64,
        "perimeter": 67,
        "offensiverebound": 60,
        "defensiverebound": 63,
        "speed": 85,
        "vertical": 85,
        "strength": 49,
        "hands": 83,
        "stamina": 86,
        "hustle": 71,
        "passing": 66,
        "steal": 52,
        "block": 43,
        "offensiveconsistency": 51,
        "defensiveconsistency": 51
    },
    "position": "PG",
    "fgaintensity": 0,
    "fgaaverage": 8,
    "color1": "#fcd772",
    "color2": "#f4bd4d",
    "color3": "#060a1d",
    "image": "mudiay_emmanuel_denver_nuggets"
}, {
    "id": "0118",
    "type": "player",
    "first": "Morris",
    "last": "Peterson",
    "height": "6-7",
    "weight": "218",
    "number": 24,
    "country": "United States",
    "team": "Toronto Raptors",
    "conference": "Eastern Conference",
    "season": "2005-2006",
    "salary": 5,
    "unlockedlevel": 58,
    "tier": 2,
    "rarity": "Rare",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 71,
            "tendency": 28
        },
        "dunk": {
            "value": 76,
            "tendency": 1
        },
        "midrange": {
            "value": 82,
            "tendency": 30
        },
        "outside": {
            "value": 73,
            "tendency": 41
        },
        "drawfoul": 61,
        "freethrow": 82,
        "interior": 64,
        "perimeter": 73,
        "offensiverebound": 63,
        "defensiverebound": 71,
        "speed": 80,
        "vertical": 85,
        "strength": 68,
        "hands": 87,
        "stamina": 96,
        "hustle": 77,
        "passing": 63,
        "steal": 66,
        "block": 43,
        "offensiveconsistency": 80,
        "defensiveconsistency": 64
    },
    "position": "SG",
    "fgaintensity": 1,
    "fgaaverage": 13,
    "color1": "#5f4c8e",
    "color2": "#3d2e60",
    "color3": "#ffffff",
    "image": "peterson_morris_toronto_raptors"
}, {
    "id": "0119",
    "type": "player",
    "first": "Antawn",
    "last": "Jamison",
    "height": "6-8",
    "weight": "223",
    "number": 4,
    "country": "United States",
    "team": "Washington Wizards",
    "conference": "Eastern Conference",
    "season": "2007-2008",
    "salary": 16,
    "unlockedlevel": 57,
    "tier": 2,
    "rarity": "Epic",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 78,
            "tendency": 29
        },
        "dunk": {
            "value": 77,
            "tendency": 0
        },
        "midrange": {
            "value": 76,
            "tendency": 30
        },
        "outside": {
            "value": 75,
            "tendency": 41
        },
        "drawfoul": 69,
        "freethrow": 76,
        "interior": 70,
        "perimeter": 74,
        "offensiverebound": 74,
        "defensiverebound": 84,
        "speed": 77,
        "vertical": 50,
        "strength": 67,
        "hands": 87,
        "stamina": 96,
        "hustle": 79,
        "passing": 60,
        "steal": 66,
        "block": 46,
        "offensiveconsistency": 95,
        "defensiveconsistency": 70
    },
    "position": "PF",
    "fgaintensity": 1,
    "fgaaverage": 18,
    "color1": "#3662c0",
    "color2": "#183a7f",
    "color3": "#ffffff",
    "image": "jamison_antawn_washington_wizards"
}, {
    "id": "0120",
    "type": "player",
    "first": "Monta",
    "last": "Ellis",
    "height": "6-3",
    "weight": "185",
    "number": 8,
    "country": "United States",
    "team": "Golden State Warriors",
    "conference": "Western Conference",
    "season": "2007-2008",
    "salary": 11,
    "unlockedlevel": 56,
    "tier": 2,
    "rarity": "Epic",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 76,
            "tendency": 47
        },
        "dunk": {
            "value": 80,
            "tendency": 6
        },
        "midrange": {
            "value": 77,
            "tendency": 43
        },
        "outside": {
            "value": 67,
            "tendency": 4
        },
        "drawfoul": 67,
        "freethrow": 77,
        "interior": 61,
        "perimeter": 75,
        "offensiverebound": 68,
        "defensiverebound": 68,
        "speed": 96,
        "vertical": 75,
        "strength": 48,
        "hands": 74,
        "stamina": 96,
        "hustle": 75,
        "passing": 69,
        "steal": 71,
        "block": 45,
        "offensiveconsistency": 98,
        "defensiveconsistency": 75
    },
    "position": "SG",
    "fgaintensity": 2,
    "fgaaverage": 15,
    "color1": "#ffffff",
    "color2": "#f4e9e1",
    "color3": "#202945",
    "image": "ellis_monta_goldenstate_warriors"
}, {
    "id": "0121",
    "type": "player",
    "first": "Bobby",
    "last": "Portis",
    "height": "6-11",
    "weight": "230",
    "number": 5,
    "country": "United States",
    "team": "Chicago Bulls",
    "conference": "Eastern Conference",
    "season": "2017-2018",
    "salary": 2,
    "unlockedlevel": 22,
    "tier": 3,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 74,
            "tendency": 47
        },
        "dunk": {
            "value": 78,
            "tendency": 2
        },
        "midrange": {
            "value": 71,
            "tendency": 23
        },
        "outside": {
            "value": 75,
            "tendency": 28
        },
        "drawfoul": 55,
        "freethrow": 77,
        "interior": 70,
        "perimeter": 60,
        "offensiverebound": 71,
        "defensiverebound": 73,
        "speed": 43,
        "vertical": 52,
        "strength": 48,
        "hands": 72,
        "stamina": 87,
        "hustle": 87,
        "passing": 61,
        "steal": 54,
        "block": 45,
        "offensiveconsistency": 72,
        "defensiveconsistency": 57
    },
    "position": "PF/C",
    "fgaintensity": 0,
    "fgaaverage": 11,
    "color1": "#ea6c6c",
    "color2": "#bf3232",
    "color3": "#ffffff",
    "image": "portis_bobby_chicago_bulls"
}, {
    "id": "0122",
    "type": "player",
    "first": "Dante",
    "last": "Exum",
    "height": "6-6",
    "weight": "190",
    "number": 11,
    "country": "Australia",
    "team": "Utah Jazz",
    "conference": "Western Conference",
    "season": "2017-2018",
    "salary": 4,
    "unlockedlevel": 0,
    "tier": 4,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 71,
            "tendency": 73
        },
        "dunk": {
            "value": 79,
            "tendency": 3
        },
        "midrange": {
            "value": 66,
            "tendency": 3
        },
        "outside": {
            "value": 69,
            "tendency": 21
        },
        "drawfoul": 56,
        "freethrow": 81,
        "interior": 60,
        "perimeter": 77,
        "offensiverebound": 60,
        "defensiverebound": 62,
        "speed": 80,
        "vertical": 75,
        "strength": 46,
        "hands": 83,
        "stamina": 84,
        "hustle": 83,
        "passing": 66,
        "steal": 52,
        "block": 43,
        "offensiveconsistency": 53,
        "defensiveconsistency": 68
    },
    "position": "PG",
    "fgaintensity": 0,
    "fgaaverage": 6,
    "color1": "#568265",
    "color2": "#2e4738",
    "color3": "#f4d862",
    "image": "exum_dante_utah_jazz"
}, {
    "id": "0123",
    "type": "player",
    "first": "Wesley",
    "last": "Matthews",
    "height": "6-5",
    "weight": "200",
    "number": 23,
    "country": "United States",
    "team": "Dallas Mavericks",
    "conference": "Western Conference",
    "season": "2015-2016",
    "salary": 16,
    "unlockedlevel": 52,
    "tier": 2,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 69,
            "tendency": 20
        },
        "dunk": {
            "value": 66,
            "tendency": 0
        },
        "midrange": {
            "value": 79,
            "tendency": 19
        },
        "outside": {
            "value": 74,
            "tendency": 61
        },
        "drawfoul": 55,
        "freethrow": 86,
        "interior": 60,
        "perimeter": 85,
        "offensiverebound": 60,
        "defensiverebound": 66,
        "speed": 82,
        "vertical": 70,
        "strength": 55,
        "hands": 85,
        "stamina": 94,
        "hustle": 80,
        "passing": 61,
        "steal": 60,
        "block": 43,
        "offensiveconsistency": 85,
        "defensiveconsistency": 85
    },
    "position": "SF/SG",
    "fgaintensity": 0,
    "fgaaverage": 11,
    "color1": "#53b3f4",
    "color2": "#2f5fa5",
    "color3": "#ffffff",
    "image": "matthews_wesley_dallas_mavericks"
}, {
    "id": "0124",
    "type": "player",
    "first": "Donovan",
    "last": "Mitchell",
    "height": "6-3",
    "weight": "211",
    "number": 45,
    "country": "United States",
    "team": "Utah Jazz",
    "conference": "Western Conference",
    "season": "2017-2018",
    "salary": 3,
    "unlockedlevel": 23,
    "tier": 3,
    "rarity": "Rare",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 75,
            "tendency": 39
        },
        "dunk": {
            "value": 89,
            "tendency": 2
        },
        "midrange": {
            "value": 74,
            "tendency": 19
        },
        "outside": {
            "value": 83,
            "tendency": 40
        },
        "drawfoul": 62,
        "freethrow": 81,
        "interior": 60,
        "perimeter": 78,
        "offensiverebound": 62,
        "defensiverebound": 68,
        "speed": 96,
        "vertical": 97,
        "strength": 60,
        "hands": 80,
        "stamina": 93,
        "hustle": 90,
        "passing": 68,
        "steal": 71,
        "block": 45,
        "offensiveconsistency": 65,
        "defensiveconsistency": 70
    },
    "position": "SG/PG",
    "fgaintensity": 1,
    "fgaaverage": 17,
    "color1": "#fee001",
    "color2": "#ef642e",
    "color3": "#ffffff",
    "image": "mitchell_donovan_utah_jazz"
}, {
    "id": "0125",
    "type": "player",
    "first": "Frank",
    "last": "Ntilikina",
    "height": "6-5",
    "weight": "190",
    "number": 11,
    "country": "Belgium",
    "team": "New York Knicks",
    "conference": "Eastern Conference",
    "season": "2017-2018",
    "salary": 4,
    "unlockedlevel": 24,
    "tier": 3,
    "rarity": "Rare",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 69,
            "tendency": 25
        },
        "dunk": {
            "value": 79,
            "tendency": 1
        },
        "midrange": {
            "value": 70,
            "tendency": 42
        },
        "outside": {
            "value": 71,
            "tendency": 32
        },
        "drawfoul": 51,
        "freethrow": 72,
        "interior": 62,
        "perimeter": 70,
        "offensiverebound": 61,
        "defensiverebound": 63,
        "speed": 81,
        "vertical": 68,
        "strength": 53,
        "hands": 82,
        "stamina": 87,
        "hustle": 77,
        "passing": 66,
        "steal": 56,
        "block": 43,
        "offensiveconsistency": 52,
        "defensiveconsistency": 57
    },
    "position": "PG",
    "fgaintensity": 0,
    "fgaaverage": 6,
    "color1": "#ffffff",
    "color2": "#eee3d9",
    "color3": "#000000",
    "image": "ntilikina_frank_newyork_knicks"
}, {
    "id": "0126",
    "type": "player",
    "first": "Enes",
    "last": "Kanter",
    "height": "6-11",
    "weight": "245",
    "number": 0,
    "country": "Switzerland",
    "team": "New York Knicks",
    "conference": "Eastern Conference",
    "season": "2017-2018",
    "salary": 21,
    "unlockedlevel": 53,
    "tier": 2,
    "rarity": "Rare",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 77,
            "tendency": 82
        },
        "dunk": {
            "value": 75,
            "tendency": 5
        },
        "midrange": {
            "value": 66,
            "tendency": 12
        },
        "outside": {
            "value": 67,
            "tendency": 1
        },
        "drawfoul": 57,
        "freethrow": 85,
        "interior": 62,
        "perimeter": 60,
        "offensiverebound": 81,
        "defensiverebound": 83,
        "speed": 69,
        "vertical": 60,
        "strength": 85,
        "hands": 85,
        "stamina": 89,
        "hustle": 78,
        "passing": 60,
        "steal": 50,
        "block": 48,
        "offensiveconsistency": 90,
        "defensiveconsistency": 51
    },
    "position": "C",
    "fgaintensity": 1,
    "fgaaverage": 10,
    "color1": "#ffffff",
    "color2": "#f2e8e2",
    "color3": "#484280",
    "image": "kanter_enes_newyork_knicks"
}, {
    "id": "0127",
    "type": "player",
    "first": "Kyle",
    "last": "Kuzma",
    "height": "6-9",
    "weight": "220",
    "number": 0,
    "country": "United States",
    "team": "Los Angeles Lakers",
    "conference": "Western Conference",
    "season": "2017-2018",
    "salary": 1,
    "unlockedlevel": 54,
    "tier": 2,
    "rarity": "Epic",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 74,
            "tendency": 41
        },
        "dunk": {
            "value": 75,
            "tendency": 2
        },
        "midrange": {
            "value": 71,
            "tendency": 15
        },
        "outside": {
            "value": 82,
            "tendency": 42
        },
        "drawfoul": 58,
        "freethrow": 71,
        "interior": 65,
        "perimeter": 65,
        "offensiverebound": 65,
        "defensiverebound": 75,
        "speed": 77,
        "vertical": 75,
        "strength": 68,
        "hands": 80,
        "stamina": 92,
        "hustle": 73,
        "passing": 61,
        "steal": 52,
        "block": 46,
        "offensiveconsistency": 75,
        "defensiveconsistency": 51
    },
    "position": "PF",
    "fgaintensity": 1,
    "fgaaverage": 14,
    "color1": "#f4d682",
    "color2": "#f7ca4d",
    "color3": "#49207f",
    "image": "kuzma_kyle_losangeles_lakers"
}, {
    "id": "0128",
    "type": "player",
    "first": "Jayson",
    "last": "Tatum",
    "height": "6-8",
    "weight": "205",
    "number": 0,
    "country": "United States",
    "team": "Boston Celtics",
    "conference": "Eastern Conference",
    "season": "2017-2018",
    "salary": 6,
    "unlockedlevel": 54,
    "tier": 2,
    "rarity": "Epic",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 71,
            "tendency": 38
        },
        "dunk": {
            "value": 75,
            "tendency": 5
        },
        "midrange": {
            "value": 74,
            "tendency": 28
        },
        "outside": {
            "value": 74,
            "tendency": 29
        },
        "drawfoul": 60,
        "freethrow": 83,
        "interior": 70,
        "perimeter": 71,
        "offensiverebound": 62,
        "defensiverebound": 72,
        "speed": 81,
        "vertical": 78,
        "strength": 54,
        "hands": 77,
        "stamina": 92,
        "hustle": 73,
        "passing": 60,
        "steal": 60,
        "block": 51,
        "offensiveconsistency": 81,
        "defensiveconsistency": 75
    },
    "position": "SF",
    "fgaintensity": 1,
    "fgaaverage": 10,
    "color1": "#ffffff",
    "color2": "#e8edeb",
    "color3": "#3d7458",
    "image": "tatum_jayson_boston_celtics"
}, {
    "id": "0129",
    "type": "player",
    "first": "Carmelo",
    "last": "Anthony",
    "height": "6-8",
    "weight": "240",
    "number": 15,
    "country": "United States",
    "team": "Denver Nuggets",
    "conference": "Western Conference",
    "season": "2006-2007",
    "salary": 13,
    "unlockedlevel": 84,
    "tier": 1,
    "rarity": "Epic",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 80,
            "tendency": 40
        },
        "dunk": {
            "value": 75,
            "tendency": 10
        },
        "midrange": {
            "value": 80,
            "tendency": 39
        },
        "outside": {
            "value": 69,
            "tendency": 11
        },
        "drawfoul": 82,
        "freethrow": 81,
        "interior": 74,
        "perimeter": 72,
        "offensiverebound": 71,
        "defensiverebound": 70,
        "speed": 88,
        "vertical": 90,
        "strength": 82,
        "hands": 84,
        "stamina": 96,
        "hustle": 82,
        "passing": 69,
        "steal": 64,
        "block": 46,
        "offensiveconsistency": 95,
        "defensiveconsistency": 71
    },
    "position": "SF",
    "fgaintensity": 2,
    "fgaaverage": 22,
    "color1": "#9dbeed",
    "color2": "#608ccc",
    "color3": "#fcd35a",
    "image": "anthony_carmelo_denver_nuggets"
}, {
    "id": "0130",
    "type": "player",
    "first": "Jordan",
    "last": "Bell",
    "height": "6-9",
    "weight": "224",
    "number": 2,
    "country": "United States",
    "team": "Golden State Warriors",
    "conference": "Western Conference",
    "season": "2017-2018",
    "salary": 1,
    "unlockedlevel": 1,
    "tier": 4,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 70,
            "tendency": 54
        },
        "dunk": {
            "value": 75,
            "tendency": 29
        },
        "midrange": {
            "value": 65,
            "tendency": 15
        },
        "outside": {
            "value": 67,
            "tendency": 2
        },
        "drawfoul": 50,
        "freethrow": 68,
        "interior": 74,
        "perimeter": 67,
        "offensiverebound": 65,
        "defensiverebound": 66,
        "speed": 75,
        "vertical": 79,
        "strength": 77,
        "hands": 67,
        "stamina": 83,
        "hustle": 92,
        "passing": 61,
        "steal": 52,
        "block": 55,
        "offensiveconsistency": 59,
        "defensiveconsistency": 68
    },
    "position": "C",
    "fgaintensity": 0,
    "fgaaverage": 3,
    "color1": "#ffffff",
    "color2": "#ededef",
    "color3": "#243466",
    "image": "bell_jordan_goldenstate_warriors"
}, {
    "id": "0131",
    "type": "player",
    "first": "Goran",
    "last": "Dragic",
    "height": "6-3",
    "weight": "190",
    "number": 7,
    "country": "Slovenia",
    "team": "Miami Heat",
    "conference": "Eastern Conference",
    "season": "2016-2017",
    "salary": 17,
    "unlockedlevel": 55,
    "tier": 2,
    "rarity": "Rare",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 77,
            "tendency": 43
        },
        "dunk": {
            "value": 45,
            "tendency": 0
        },
        "midrange": {
            "value": 76,
            "tendency": 31
        },
        "outside": {
            "value": 73,
            "tendency": 26
        },
        "drawfoul": 68,
        "freethrow": 79,
        "interior": 60,
        "perimeter": 69,
        "offensiverebound": 63,
        "defensiverebound": 67,
        "speed": 75,
        "vertical": 69,
        "strength": 41,
        "hands": 72,
        "stamina": 94,
        "hustle": 81,
        "passing": 76,
        "steal": 64,
        "block": 43,
        "offensiveconsistency": 91,
        "defensiveconsistency": 66
    },
    "position": "PG",
    "fgaintensity": 2,
    "fgaaverage": 15,
    "color1": "#ef6565",
    "color2": "#b33636",
    "color3": "#ffffff",
    "image": "dragic_goran_miami_heat"
}, {
    "id": "0132",
    "type": "player",
    "first": "Hassan",
    "last": "Whiteside",
    "height": "7-0",
    "weight": "269",
    "number": 21,
    "country": "United States",
    "team": "Miami Heat",
    "conference": "Eastern Conference",
    "season": "2017-2018",
    "salary": 24,
    "unlockedlevel": 55,
    "tier": 2,
    "rarity": "Rare",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 77,
            "tendency": 59
        },
        "dunk": {
            "value": 81,
            "tendency": 17
        },
        "midrange": {
            "value": 67,
            "tendency": 24
        },
        "outside": {
            "value": 67,
            "tendency": 0
        },
        "drawfoul": 60,
        "freethrow": 70,
        "interior": 78,
        "perimeter": 68,
        "offensiverebound": 77,
        "defensiverebound": 87,
        "speed": 67,
        "vertical": 55,
        "strength": 65,
        "hands": 83,
        "stamina": 89,
        "hustle": 83,
        "passing": 58,
        "steal": 54,
        "block": 66,
        "offensiveconsistency": 78,
        "defensiveconsistency": 78
    },
    "position": "C",
    "fgaintensity": 0,
    "fgaaverage": 11,
    "color1": "#ffffff",
    "color2": "#f2e9ea",
    "color3": "#882d36",
    "image": "whiteside_hassan_miami_heat"
}, {
    "id": "0133",
    "type": "player",
    "first": "Steven",
    "last": "Adams",
    "height": "7-0",
    "weight": "255",
    "number": 12,
    "country": "New Zealand",
    "team": "Oklahoma City Thunder",
    "conference": "Western Conference",
    "season": "2017-2018",
    "salary": 22,
    "unlockedlevel": 55,
    "tier": 2,
    "rarity": "Rare",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 77,
            "tendency": 70
        },
        "dunk": {
            "value": 79,
            "tendency": 24
        },
        "midrange": {
            "value": 65,
            "tendency": 6
        },
        "outside": {
            "value": 67,
            "tendency": 0
        },
        "drawfoul": 62,
        "freethrow": 56,
        "interior": 87,
        "perimeter": 73,
        "offensiverebound": 89,
        "defensiverebound": 71,
        "speed": 64,
        "vertical": 74,
        "strength": 86,
        "hands": 74,
        "stamina": 93,
        "hustle": 89,
        "passing": 59,
        "steal": 64,
        "block": 55,
        "offensiveconsistency": 62,
        "defensiveconsistency": 87
    },
    "position": "C",
    "fgaintensity": 0,
    "fgaaverage": 9,
    "color1": "#6a90d3",
    "color2": "#2954c3",
    "color3": "#ffffff",
    "image": "adams_steven_oklahomacity_thunder"
}, {
    "id": "0134",
    "type": "player",
    "first": "Andre",
    "last": "Roberson",
    "height": "6-7",
    "weight": "210",
    "number": 21,
    "country": "United States",
    "team": "Oklahoma City Thunder",
    "conference": "Western Conference",
    "season": "2017-2018",
    "salary": 9,
    "unlockedlevel": 25,
    "tier": 3,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 69,
            "tendency": 66
        },
        "dunk": {
            "value": 79,
            "tendency": 11
        },
        "midrange": {
            "value": 66,
            "tendency": 1
        },
        "outside": {
            "value": 68,
            "tendency": 22
        },
        "drawfoul": 51,
        "freethrow": 32,
        "interior": 82,
        "perimeter": 91,
        "offensiverebound": 69,
        "defensiverebound": 66,
        "speed": 71,
        "vertical": 69,
        "strength": 63,
        "hands": 84,
        "stamina": 90,
        "hustle": 91,
        "passing": 59,
        "steal": 64,
        "block": 54,
        "offensiveconsistency": 56,
        "defensiveconsistency": 88
    },
    "position": "SG/SF",
    "fgaintensity": 0,
    "fgaaverage": 4,
    "color1": "#ff8257",
    "color2": "#e8563f",
    "color3": "#2d2c4a",
    "image": "roberson_andre_oklahomacity_thunder"
}, {
    "id": "0135",
    "type": "player",
    "first": "James",
    "last": "Harden",
    "height": "6-5",
    "weight": "220",
    "number": 13,
    "country": "United States",
    "team": "Houston Rockets",
    "conference": "Western Conference",
    "season": "2017-2018",
    "salary": 28,
    "unlockedlevel": 85,
    "tier": 1,
    "rarity": "Epic",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 76,
            "tendency": 38
        },
        "dunk": {
            "value": 81,
            "tendency": 1
        },
        "midrange": {
            "value": 72,
            "tendency": 11
        },
        "outside": {
            "value": 96,
            "tendency": 50
        },
        "drawfoul": 87,
        "freethrow": 86,
        "interior": 62,
        "perimeter": 60,
        "offensiverebound": 62,
        "defensiverebound": 74,
        "speed": 89,
        "vertical": 85,
        "strength": 82,
        "hands": 87,
        "stamina": 94,
        "hustle": 81,
        "passing": 88,
        "steal": 77,
        "block": 51,
        "offensiveconsistency": 98,
        "defensiveconsistency": 61
    },
    "position": "SG",
    "fgaintensity": 2,
    "fgaaverage": 20,
    "color1": "#f95f67",
    "color2": "#c9272f",
    "color3": "#ffffff",
    "image": "harden_james_houston_rockets"
}, {
    "id": "0136",
    "type": "player",
    "first": "Domantas",
    "last": "Sabonis",
    "height": "6-11",
    "weight": "240",
    "number": 11,
    "country": "United States",
    "team": "Indiana Pacers",
    "conference": "Eastern Conference",
    "season": "2017-2018",
    "salary": 3,
    "unlockedlevel": 9,
    "tier": 4,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 74,
            "tendency": 61
        },
        "dunk": {
            "value": 70,
            "tendency": 8
        },
        "midrange": {
            "value": 68,
            "tendency": 25
        },
        "outside": {
            "value": 68,
            "tendency": 6
        },
        "drawfoul": 59,
        "freethrow": 75,
        "interior": 65,
        "perimeter": 60,
        "offensiverebound": 71,
        "defensiverebound": 77,
        "speed": 64,
        "vertical": 67,
        "strength": 76,
        "hands": 85,
        "stamina": 88,
        "hustle": 70,
        "passing": 62,
        "steal": 50,
        "block": 46,
        "offensiveconsistency": 70,
        "defensiveconsistency": 56
    },
    "position": "C/PF",
    "fgaintensity": 1,
    "fgaaverage": 9,
    "color1": "#35476d",
    "color2": "#121a2b",
    "color3": "#f7d26b",
    "image": "sabonis_domantas_indiana_pacers"
}, {
    "id": "0137",
    "type": "player",
    "first": "Clint",
    "last": "Capela",
    "height": "6-10",
    "weight": "240",
    "number": 15,
    "country": "Switzerland",
    "team": "Houston Rockets",
    "conference": "Western Conference",
    "season": "2017-2018",
    "salary": 2,
    "unlockedlevel": 13,
    "tier": 4,
    "rarity": "Rare",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 76,
            "tendency": 63
        },
        "dunk": {
            "value": 75,
            "tendency": 35
        },
        "midrange": {
            "value": 65,
            "tendency": 2
        },
        "outside": {
            "value": 67,
            "tendency": 0
        },
        "drawfoul": 61,
        "freethrow": 56,
        "interior": 77,
        "perimeter": 60,
        "offensiverebound": 78,
        "defensiverebound": 84,
        "speed": 64,
        "vertical": 78,
        "strength": 60,
        "hands": 68,
        "stamina": 90,
        "hustle": 94,
        "passing": 57,
        "steal": 56,
        "block": 69,
        "offensiveconsistency": 68,
        "defensiveconsistency": 73
    },
    "position": "C",
    "fgaintensity": 1,
    "fgaaverage": 9,
    "color1": "#db4f4f",
    "color2": "#a02727",
    "color3": "#ffffff",
    "image": "capela_clint_houston_rockets"
}, {
    "id": "0138",
    "type": "player",
    "first": "Jeremy",
    "last": "Lin",
    "height": "6-3",
    "weight": "200",
    "number": 7,
    "country": "United States",
    "team": "Brooklyn Nets",
    "conference": "Eastern Conference",
    "season": "2016-2017",
    "salary": 12,
    "unlockedlevel": 23,
    "tier": 3,
    "rarity": "Rare",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 72,
            "tendency": 39
        },
        "dunk": {
            "value": 75,
            "tendency": 0
        },
        "midrange": {
            "value": 72,
            "tendency": 22
        },
        "outside": {
            "value": 77,
            "tendency": 39
        },
        "drawfoul": 62,
        "freethrow": 82,
        "interior": 60,
        "perimeter": 69,
        "offensiverebound": 60,
        "defensiverebound": 69,
        "speed": 79,
        "vertical": 80,
        "strength": 33,
        "hands": 76,
        "stamina": 89,
        "hustle": 82,
        "passing": 74,
        "steal": 64,
        "block": 46,
        "offensiveconsistency": 63,
        "defensiveconsistency": 53
    },
    "position": "PG",
    "fgaintensity": 1,
    "fgaaverage": 11,
    "color1": "#414142",
    "color2": "#1f1d21",
    "color3": "#ffffff",
    "image": "lin_jeremy_brooklyn_nets"
}, {
    "id": "0139",
    "type": "player",
    "first": "Anthony",
    "last": "Bennett",
    "height": "6-8",
    "weight": "245",
    "number": 13,
    "country": "Canada",
    "team": "Brooklyn Nets",
    "conference": "Eastern Conference",
    "season": "2016-2017",
    "salary": 1,
    "unlockedlevel": 5,
    "tier": 4,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 68,
            "tendency": 41
        },
        "dunk": {
            "value": 78,
            "tendency": 5
        },
        "midrange": {
            "value": 67,
            "tendency": 2
        },
        "outside": {
            "value": 69,
            "tendency": 52
        },
        "drawfoul": 53,
        "freethrow": 72,
        "interior": 77,
        "perimeter": 60,
        "offensiverebound": 65,
        "defensiverebound": 64,
        "speed": 66,
        "vertical": 77,
        "strength": 77,
        "hands": 76,
        "stamina": 81,
        "hustle": 82,
        "passing": 56,
        "steal": 44,
        "block": 42,
        "offensiveconsistency": 52,
        "defensiveconsistency": 57
    },
    "position": "PF",
    "fgaintensity": 0,
    "fgaaverage": 4,
    "color1": "#2e2e30",
    "color2": "#171719",
    "color3": "#ffffff",
    "image": "bennett_anthony_brooklyn_nets"
}, {
    "id": "0140",
    "type": "player",
    "first": "Marcus",
    "last": "Smart",
    "height": "6-4",
    "weight": "220",
    "number": 36,
    "country": "United States",
    "team": "Boston Celtics",
    "conference": "Eastern Conference",
    "season": "2017-2018",
    "salary": 5,
    "unlockedlevel": 26,
    "tier": 3,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 70,
            "tendency": 33
        },
        "dunk": {
            "value": 71,
            "tendency": 1
        },
        "midrange": {
            "value": 70,
            "tendency": 18
        },
        "outside": {
            "value": 77,
            "tendency": 48
        },
        "drawfoul": 57,
        "freethrow": 73,
        "interior": 73,
        "perimeter": 88,
        "offensiverebound": 63,
        "defensiverebound": 66,
        "speed": 74,
        "vertical": 81,
        "strength": 65,
        "hands": 74,
        "stamina": 91,
        "hustle": 84,
        "passing": 72,
        "steal": 66,
        "block": 46,
        "offensiveconsistency": 56,
        "defensiveconsistency": 84
    },
    "position": "SG",
    "fgaintensity": 1,
    "fgaaverage": 10,
    "color1": "#0c825d",
    "color2": "#29b78b",
    "color3": "#ffffff",
    "image": "smart_marcus_boston_celtics"
}, {
    "id": "0141",
    "type": "player",
    "first": "Kevin",
    "last": "Durant",
    "height": "6-9",
    "weight": "240",
    "number": 35,
    "country": "United States",
    "team": "Seattle SuperSonics",
    "conference": "Western Conference",
    "season": "2007-2008",
    "salary": 4,
    "unlockedlevel": 42,
    "tier": 2,
    "rarity": "Epic",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 75,
            "tendency": 35
        },
        "dunk": {
            "value": 77,
            "tendency": 3
        },
        "midrange": {
            "value": 79,
            "tendency": 47
        },
        "outside": {
            "value": 72,
            "tendency": 15
        },
        "drawfoul": 69,
        "freethrow": 87,
        "interior": 74,
        "perimeter": 77,
        "offensiverebound": 63,
        "defensiverebound": 69,
        "speed": 79,
        "vertical": 80,
        "strength": 61,
        "hands": 82,
        "stamina": 94,
        "hustle": 88,
        "passing": 63,
        "steal": 60,
        "block": 54,
        "offensiveconsistency": 85,
        "defensiveconsistency": 79
    },
    "position": "SG/SF",
    "fgaintensity": 2,
    "fgaaverage": 17,
    "color1": "#f9c973",
    "color2": "#fcb922",
    "color3": "#145135",
    "image": "durant_kevin_seattle_supersonics"
}, {
    "id": "0142",
    "type": "player",
    "first": "Tracy",
    "last": "McGrady",
    "height": "6-8",
    "weight": "210",
    "number": 1,
    "country": "United States",
    "team": "Atlanta Hawks",
    "conference": "Eastern Conference",
    "season": "2011-2012",
    "salary": 1,
    "unlockedlevel": 16,
    "tier": 4,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 69,
            "tendency": 34
        },
        "dunk": {
            "value": 72,
            "tendency": 4
        },
        "midrange": {
            "value": 68,
            "tendency": 48
        },
        "outside": {
            "value": 69,
            "tendency": 14
        },
        "drawfoul": 53,
        "freethrow": 68,
        "interior": 64,
        "perimeter": 63,
        "offensiverebound": 60,
        "defensiverebound": 65,
        "speed": 69,
        "vertical": 68,
        "strength": 66,
        "hands": 88,
        "stamina": 84,
        "hustle": 68,
        "passing": 62,
        "steal": 46,
        "block": 45,
        "offensiveconsistency": 63,
        "defensiveconsistency": 63
    },
    "position": "SF",
    "fgaintensity": 0,
    "fgaaverage": 4,
    "color1": "#ffffff",
    "color2": "#eaebef",
    "color3": "#333859",
    "image": "mcgrady_tracy_atlanta_hawks"
}, {
    "id": "0143",
    "type": "player",
    "first": "Rasheed",
    "last": "Wallace",
    "height": "6-10",
    "weight": "225",
    "number": 36,
    "country": "United States",
    "team": "Atlanta Hawks",
    "conference": "Eastern Conference",
    "season": "2003-2004",
    "salary": 17,
    "unlockedlevel": 56,
    "tier": 2,
    "rarity": "Legendary",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 77,
            "tendency": 25
        },
        "dunk": {
            "value": 80,
            "tendency": 5
        },
        "midrange": {
            "value": 74,
            "tendency": 45
        },
        "outside": {
            "value": 72,
            "tendency": 25
        },
        "drawfoul": 59,
        "freethrow": 74,
        "interior": 85,
        "perimeter": 60,
        "offensiverebound": 67,
        "defensiverebound": 76,
        "speed": 65,
        "vertical": 70,
        "strength": 75,
        "hands": 82,
        "stamina": 94,
        "hustle": 72,
        "passing": 63,
        "steal": 58,
        "block": 67,
        "offensiveconsistency": 80,
        "defensiveconsistency": 74
    },
    "position": "PF",
    "fgaintensity": 2,
    "fgaaverage": 14,
    "color1": "#d32d2d",
    "color2": "#99140e",
    "color3": "#ffffff",
    "image": "wallace_rasheed_atlanta_hawks"
}, {
    "id": "0144",
    "type": "player",
    "first": "Langston",
    "last": "Galloway",
    "height": "6-2",
    "weight": "200",
    "number": 9,
    "country": "United States",
    "team": "Detroit Pistons",
    "conference": "Eastern Conference",
    "season": "2017-2018",
    "salary": 7,
    "unlockedlevel": 21,
    "tier": 4,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 68,
            "tendency": 12
        },
        "dunk": {
            "value": 50,
            "tendency": 0
        },
        "midrange": {
            "value": 70,
            "tendency": 24
        },
        "outside": {
            "value": 76,
            "tendency": 64
        },
        "drawfoul": 50,
        "freethrow": 81,
        "interior": 60,
        "perimeter": 65,
        "offensiverebound": 59,
        "defensiverebound": 61,
        "speed": 74,
        "vertical": 83,
        "strength": 45,
        "hands": 58,
        "stamina": 83,
        "hustle": 67,
        "passing": 58,
        "steal": 52,
        "block": 42,
        "offensiveconsistency": 62,
        "defensiveconsistency": 57
    },
    "position": "SG",
    "fgaintensity": 0,
    "fgaaverage": 6,
    "color1": "#ffffff",
    "color2": "#e9eaf4",
    "color3": "#27318b",
    "image": "galloway_langston_detroit_pistons"
}, {
    "id": "0145",
    "type": "player",
    "first": "Boban",
    "last": "Marjanovic",
    "height": "7-3",
    "weight": "290",
    "number": 51,
    "country": "United States",
    "team": "Detroit Pistons",
    "conference": "Eastern Conference",
    "season": "2017-2018",
    "salary": 7,
    "unlockedlevel": 11,
    "tier": 4,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 71,
            "tendency": 89
        },
        "dunk": {
            "value": 75,
            "tendency": 3
        },
        "midrange": {
            "value": 65,
            "tendency": 11
        },
        "outside": {
            "value": 67,
            "tendency": 0
        },
        "drawfoul": 57,
        "freethrow": 79,
        "interior": 70,
        "perimeter": 60,
        "offensiverebound": 65,
        "defensiverebound": 65,
        "speed": 34,
        "vertical": 37,
        "strength": 64,
        "hands": 37,
        "stamina": 80,
        "hustle": 42,
        "passing": 56,
        "steal": 46,
        "block": 45,
        "offensiveconsistency": 52,
        "defensiveconsistency": 62
    },
    "position": "C",
    "fgaintensity": 0,
    "fgaaverage": 4,
    "color1": "#4d5fba",
    "color2": "#293faa",
    "color3": "#ffffff",
    "image": "marjanovic_boban_detroit_pistons"
}, {
    "id": "0146",
    "type": "player",
    "first": "Lucas",
    "last": "Nogueira",
    "height": "7-0",
    "weight": "241",
    "number": 92,
    "country": "Brazil",
    "team": "Toronto Raptors",
    "conference": "Eastern Conference",
    "season": "2017-2018",
    "salary": 3,
    "unlockedlevel": 13,
    "tier": 4,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 68,
            "tendency": 77
        },
        "dunk": {
            "value": 75,
            "tendency": 3
        },
        "midrange": {
            "value": 65,
            "tendency": 0
        },
        "outside": {
            "value": 68,
            "tendency": 23
        },
        "drawfoul": 49,
        "freethrow": 68,
        "interior": 72,
        "perimeter": 64,
        "offensiverebound": 60,
        "defensiverebound": 61,
        "speed": 48,
        "vertical": 73,
        "strength": 58,
        "hands": 53,
        "stamina": 80,
        "hustle": 63,
        "passing": 56,
        "steal": 50,
        "block": 54,
        "offensiveconsistency": 53,
        "defensiveconsistency": 58
    },
    "position": "C",
    "fgaintensity": 0,
    "fgaaverage": 2,
    "color1": "#ffffff",
    "color2": "#f2edee",
    "color3": "#000000",
    "image": "nogueira_lucas_toronto_raptors"
}, {
    "id": "0147",
    "type": "player",
    "first": "Dario",
    "last": "Saric",
    "height": "6-10",
    "weight": "223",
    "number": 9,
    "country": "Croatia",
    "team": "Philadelphia 76ers",
    "conference": "Eastern Conference",
    "season": "2017-2018",
    "salary": 2,
    "unlockedlevel": 33,
    "tier": 3,
    "rarity": "Rare",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 71,
            "tendency": 40
        },
        "dunk": {
            "value": 75,
            "tendency": 3
        },
        "midrange": {
            "value": 70,
            "tendency": 17
        },
        "outside": {
            "value": 83,
            "tendency": 43
        },
        "drawfoul": 58,
        "freethrow": 86,
        "interior": 67,
        "perimeter": 60,
        "offensiverebound": 70,
        "defensiverebound": 74,
        "speed": 67,
        "vertical": 57,
        "strength": 52,
        "hands": 85,
        "stamina": 91,
        "hustle": 83,
        "passing": 64,
        "steal": 54,
        "block": 58,
        "offensiveconsistency": 77,
        "defensiveconsistency": 62
    },
    "position": "PF",
    "fgaintensity": 1,
    "fgaaverage": 11,
    "color1": "#7393d8",
    "color2": "#3067bf",
    "color3": "#ffffff",
    "image": "saric_dario_philadelphia_sixers"
}, {
    "id": "0148",
    "type": "player",
    "first": "Ronny",
    "last": "Turiaf",
    "height": "6-10",
    "weight": "249",
    "number": 21,
    "country": "France",
    "team": "Los Angeles Lakers",
    "conference": "Western Conference",
    "season": "2007-2008",
    "salary": 1,
    "unlockedlevel": 0,
    "tier": 4,
    "rarity": "Epic",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 70,
            "tendency": 56
        },
        "dunk": {
            "value": 75,
            "tendency": 3
        },
        "midrange": {
            "value": 68,
            "tendency": 44
        },
        "outside": {
            "value": 67,
            "tendency": 0
        },
        "drawfoul": 57,
        "freethrow": 75,
        "interior": 83,
        "perimeter": 63,
        "offensiverebound": 65,
        "defensiverebound": 66,
        "speed": 72,
        "vertical": 72,
        "strength": 78,
        "hands": 44,
        "stamina": 85,
        "hustle": 88,
        "passing": 60,
        "steal": 48,
        "block": 61,
        "offensiveconsistency": 55,
        "defensiveconsistency": 60
    },
    "position": "C",
    "fgaintensity": 0,
    "fgaaverage": 5,
    "color1": "#fcd56b",
    "color2": "#facd3b",
    "color3": "#4e335b",
    "image": "turiaf_ronny_losangeles_lakers"
}, {
    "id": "0149",
    "type": "player",
    "first": "Boris",
    "last": "Diaw",
    "height": "6-8",
    "weight": "250",
    "number": 33,
    "country": "France",
    "team": "Utah Jazz",
    "conference": "Western Conference",
    "season": "2016-2017",
    "salary": 7,
    "unlockedlevel": 13,
    "tier": 4,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 69,
            "tendency": 52
        },
        "dunk": {
            "value": 75,
            "tendency": 3
        },
        "midrange": {
            "value": 67,
            "tendency": 23
        },
        "outside": {
            "value": 68,
            "tendency": 25
        },
        "drawfoul": 49,
        "freethrow": 74,
        "interior": 60,
        "perimeter": 64,
        "offensiverebound": 62,
        "defensiverebound": 62,
        "speed": 58,
        "vertical": 60,
        "strength": 60,
        "hands": 63,
        "stamina": 85,
        "hustle": 70,
        "passing": 63,
        "steal": 44,
        "block": 42,
        "offensiveconsistency": 75,
        "defensiveconsistency": 60
    },
    "position": "PF",
    "fgaintensity": 0,
    "fgaaverage": 5,
    "color1": "#434e70",
    "color2": "#212533",
    "color3": "#e2b652",
    "image": "diaw_boris_utah_jazz"
}, {
    "id": "0150",
    "type": "player",
    "first": "Shawn",
    "last": "Marion",
    "height": "6-7",
    "weight": "220",
    "number": 0,
    "country": "United States",
    "team": "Dallas Mavericks",
    "conference": "Western Conference",
    "season": "2010-2011",
    "salary": 9,
    "unlockedlevel": 66,
    "tier": 2,
    "rarity": "Rare",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 78,
            "tendency": 79
        },
        "dunk": {
            "value": 75,
            "tendency": 3
        },
        "midrange": {
            "value": 66,
            "tendency": 17
        },
        "outside": {
            "value": 67,
            "tendency": 4
        },
        "drawfoul": 55,
        "freethrow": 77,
        "interior": 75,
        "perimeter": 76,
        "offensiverebound": 71,
        "defensiverebound": 74,
        "speed": 72,
        "vertical": 80,
        "strength": 60,
        "hands": 95,
        "stamina": 90,
        "hustle": 90,
        "passing": 59,
        "steal": 58,
        "block": 49,
        "offensiveconsistency": 70,
        "defensiveconsistency": 60
    },
    "position": "SF/PF",
    "fgaintensity": 1,
    "fgaaverage": 10,
    "color1": "#69bbed",
    "color2": "#2893e3",
    "color3": "#ffffff",
    "image": "marion_shawn_dallas_mavericks"
}, {
    "id": "0151",
    "type": "player",
    "first": "Ron",
    "last": "Artest",
    "height": "6-6",
    "weight": "260",
    "number": 37,
    "country": "United States",
    "team": "Los Angeles Lakers",
    "conference": "Western Conference",
    "season": "2009-2010",
    "salary": 6,
    "unlockedlevel": 67,
    "tier": 2,
    "rarity": "Rare",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 70,
            "tendency": 39
        },
        "dunk": {
            "value": 75,
            "tendency": 3
        },
        "midrange": {
            "value": 74,
            "tendency": 21
        },
        "outside": {
            "value": 73,
            "tendency": 40
        },
        "drawfoul": 56,
        "freethrow": 69,
        "interior": 81,
        "perimeter": 86,
        "offensiverebound": 66,
        "defensiverebound": 67,
        "speed": 83,
        "vertical": 61,
        "strength": 86,
        "hands": 85,
        "stamina": 94,
        "hustle": 84,
        "passing": 66,
        "steal": 68,
        "block": 45,
        "offensiveconsistency": 60,
        "defensiveconsistency": 85
    },
    "position": "SF",
    "fgaintensity": 1,
    "fgaaverage": 10,
    "color1": "#f7c85e",
    "color2": "#f5bb22",
    "color3": "#523559",
    "image": "artest_ron_losangeles_lakers"
}, {
    "id": "0152",
    "type": "player",
    "first": "Austin",
    "last": "Rivers",
    "height": "6-4",
    "weight": "200",
    "number": 25,
    "country": "United States",
    "team": "Los Angeles Clippers",
    "conference": "Western Conference",
    "season": "2017-2018",
    "salary": 11,
    "unlockedlevel": 60,
    "tier": 3,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 73,
            "tendency": 44
        },
        "dunk": {
            "value": 75,
            "tendency": 3
        },
        "midrange": {
            "value": 71,
            "tendency": 10
        },
        "outside": {
            "value": 82,
            "tendency": 46
        },
        "drawfoul": 57,
        "freethrow": 64,
        "interior": 61,
        "perimeter": 76,
        "offensiverebound": 60,
        "defensiverebound": 63,
        "speed": 74,
        "vertical": 77,
        "strength": 39,
        "hands": 69,
        "stamina": 94,
        "hustle": 74,
        "passing": 69,
        "steal": 64,
        "block": 45,
        "offensiveconsistency": 59,
        "defensiveconsistency": 74
    },
    "position": "SG",
    "fgaintensity": 1,
    "fgaaverage": 13,
    "color1": "#5368c1",
    "color2": "#344188",
    "color3": "#ffffff",
    "image": "rivers_austin_losangeles_clippers"
}, {
    "id": "0153",
    "type": "player",
    "first": "Rudy",
    "last": "Gobert",
    "height": "7-1",
    "weight": "245",
    "number": 27,
    "country": "France",
    "team": "Utah Jazz",
    "conference": "Western Conference",
    "season": "2017-2018",
    "salary": 22,
    "unlockedlevel": 65,
    "tier": 2,
    "rarity": "Rare",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 74,
            "tendency": 96
        },
        "dunk": {
            "value": 75,
            "tendency": 3
        },
        "midrange": {
            "value": 65,
            "tendency": 4
        },
        "outside": {
            "value": 67,
            "tendency": 0
        },
        "drawfoul": 68,
        "freethrow": 68,
        "interior": 95,
        "perimeter": 83,
        "offensiverebound": 75,
        "defensiverebound": 85,
        "speed": 53,
        "vertical": 62,
        "strength": 75,
        "hands": 84,
        "stamina": 93,
        "hustle": 84,
        "passing": 59,
        "steal": 56,
        "block": 75,
        "offensiveconsistency": 69,
        "defensiveconsistency": 95
    },
    "position": "C",
    "fgaintensity": 0,
    "fgaaverage": 8,
    "color1": "#3f3f54",
    "color2": "#1e1e2d",
    "color3": "#ffffff",
    "image": "gobert_rudy_utah_jazz"
}, {
    "id": "0154",
    "type": "player",
    "first": "Anthony",
    "last": "Parker",
    "height": "6-6",
    "weight": "215",
    "number": 18,
    "country": "United States",
    "team": "Toronto Raptors",
    "conference": "Eastern Conference",
    "season": "2007-2008",
    "salary": 4,
    "unlockedlevel": 15,
    "tier": 3,
    "rarity": "Rare",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 70,
            "tendency": 30
        },
        "dunk": {
            "value": 75,
            "tendency": 3
        },
        "midrange": {
            "value": 82,
            "tendency": 33
        },
        "outside": {
            "value": 70,
            "tendency": 37
        },
        "drawfoul": 53,
        "freethrow": 82,
        "interior": 67,
        "perimeter": 70,
        "offensiverebound": 62,
        "defensiverebound": 69,
        "speed": 69,
        "vertical": 59,
        "strength": 68,
        "hands": 74,
        "stamina": 93,
        "hustle": 78,
        "passing": 62,
        "steal": 60,
        "block": 43,
        "offensiveconsistency": 71,
        "defensiveconsistency": 54
    },
    "position": "SG",
    "fgaintensity": 1,
    "fgaaverage": 10,
    "color1": "#ce3e34",
    "color2": "#93170a",
    "color3": "#ffffff",
    "image": "parker_anthony_toronto_raptors"
}, {
    "id": "0155",
    "type": "player",
    "first": "Larry",
    "last": "Bird",
    "height": "6-9",
    "weight": "220",
    "number": 33,
    "country": "United States",
    "team": "Boston Celtics",
    "conference": "Eastern Conference",
    "season": "1985-1986",
    "salary": 20,
    "unlockedlevel": 99,
    "tier": 0,
    "rarity": "Legendary",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 87,
            "tendency": 33
        },
        "dunk": {
            "value": 86,
            "tendency": 3
        },
        "midrange": {
            "value": 89,
            "tendency": 34
        },
        "outside": {
            "value": 83,
            "tendency": 33
        },
        "drawfoul": 77,
        "freethrow": 89,
        "interior": 79,
        "perimeter": 85,
        "offensiverebound": 74,
        "defensiverebound": 75,
        "speed": 86,
        "vertical": 80,
        "strength": 86,
        "hands": 89,
        "stamina": 97,
        "hustle": 98,
        "passing": 70,
        "steal": 67,
        "block": 57,
        "offensiveconsistency": 95,
        "defensiveconsistency": 83
    },
    "position": "SF/PF",
    "fgaintensity": 2,
    "fgaaverage": 20,
    "color1": "#2e9e63",
    "color2": "#116c40",
    "color3": "#ffffff",
    "image": "bird_larry_boston_celtics"
}, {
    "id": "0156",
    "type": "player",
    "first": "Magic",
    "last": "Johnson",
    "height": "6-9",
    "weight": "215",
    "number": 32,
    "country": "United States",
    "team": "Los Angeles Lakers",
    "conference": "Western Conference",
    "season": "1986-1987",
    "salary": 20,
    "unlockedlevel": 99,
    "tier": 0,
    "rarity": "Legendary",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 84,
            "tendency": 42
        },
        "dunk": {
            "value": 80,
            "tendency": 3
        },
        "midrange": {
            "value": 86,
            "tendency": 40
        },
        "outside": {
            "value": 76,
            "tendency": 15
        },
        "drawfoul": 88,
        "freethrow": 92,
        "interior": 83,
        "perimeter": 86,
        "offensiverebound": 74,
        "defensiverebound": 72,
        "speed": 97,
        "vertical": 95,
        "strength": 89,
        "hands": 98,
        "stamina": 98,
        "hustle": 95,
        "passing": 93,
        "steal": 88,
        "block": 75,
        "offensiveconsistency": 95,
        "defensiveconsistency": 81
    },
    "position": "PG/SG/PF",
    "fgaintensity": 1,
    "fgaaverage": 16,
    "color1": "#f9d05d",
    "color2": "#f1bf1b",
    "color3": "#62457a",
    "image": "johnson_magic_losangeles_lakers"
}, {
    "id": "0157",
    "type": "player",
    "first": "Joakim",
    "last": "Noah",
    "height": "6-11",
    "weight": "230",
    "number": 13,
    "country": "United States",
    "team": "New York Knicks",
    "conference": "Eastern Conference",
    "season": "2016-2017",
    "salary": 13,
    "unlockedlevel": 13,
    "tier": 4,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 70,
            "tendency": 97
        },
        "dunk": {
            "value": 75,
            "tendency": 3
        },
        "midrange": {
            "value": 65,
            "tendency": 2
        },
        "outside": {
            "value": 67,
            "tendency": 1
        },
        "drawfoul": 49,
        "freethrow": 50,
        "interior": 81,
        "perimeter": 77,
        "offensiverebound": 63,
        "defensiverebound": 60,
        "speed": 51,
        "vertical": 73,
        "strength": 74,
        "hands": 62,
        "stamina": 78,
        "hustle": 89,
        "passing": 56,
        "steal": 46,
        "block": 45,
        "offensiveconsistency": 55,
        "defensiveconsistency": 84
    },
    "position": "C",
    "fgaintensity": 0,
    "fgaaverage": 4,
    "color1": "#6c8dd8",
    "color2": "#3757a0",
    "color3": "#ffffff",
    "image": "noah_joakim_newyork_knicks"
}, {
    "id": "0158",
    "type": "player",
    "first": "Marcin",
    "last": "Gortat",
    "height": "6-11",
    "weight": "240",
    "number": 13,
    "country": "Poland",
    "team": "Washington Wizards",
    "conference": "Eastern Conference",
    "season": "2017-2018",
    "salary": 13,
    "unlockedlevel": 17,
    "tier": 3,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 74,
            "tendency": 77
        },
        "dunk": {
            "value": 75,
            "tendency": 3
        },
        "midrange": {
            "value": 65,
            "tendency": 23
        },
        "outside": {
            "value": 67,
            "tendency": 0
        },
        "drawfoul": 55,
        "freethrow": 68,
        "interior": 76,
        "perimeter": 70,
        "offensiverebound": 71,
        "defensiverebound": 76,
        "speed": 60,
        "vertical": 68,
        "strength": 85,
        "hands": 63,
        "stamina": 89,
        "hustle": 77,
        "passing": 61,
        "steal": 50,
        "block": 51,
        "offensiveconsistency": 52,
        "defensiveconsistency": 67
    },
    "position": "C",
    "fgaintensity": 0,
    "fgaaverage": 7,
    "color1": "#f75b57",
    "color2": "#dd3b33",
    "color3": "#ffffff",
    "image": "gortat_marcin_washington_wizards"
}, {
    "id": "0159",
    "type": "player",
    "first": "Norris",
    "last": "Cole",
    "height": "6-2",
    "weight": "175",
    "number": 30,
    "country": "United States",
    "team": "New Orleans Pelicans",
    "conference": "Western Conference",
    "season": "2015-2016",
    "salary": 3,
    "unlockedlevel": 9,
    "tier": 4,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 71,
            "tendency": 33
        },
        "dunk": {
            "value": 75,
            "tendency": 3
        },
        "midrange": {
            "value": 76,
            "tendency": 46
        },
        "outside": {
            "value": 70,
            "tendency": 21
        },
        "drawfoul": 53,
        "freethrow": 80,
        "interior": 62,
        "perimeter": 74,
        "offensiverebound": 59,
        "defensiverebound": 68,
        "speed": 83,
        "vertical": 68,
        "strength": 48,
        "hands": 78,
        "stamina": 90,
        "hustle": 62,
        "passing": 68,
        "steal": 56,
        "block": 42,
        "offensiveconsistency": 55,
        "defensiveconsistency": 60
    },
    "position": "PG",
    "fgaintensity": 0,
    "fgaaverage": 11,
    "color1": "#ef6156",
    "color2": "#d94532",
    "color3": "#ffffff",
    "image": "cole_norris_neworleans_pelicans"
}, {
    "id": "0160",
    "type": "player",
    "first": "Nick",
    "last": "Collison",
    "height": "6-10",
    "weight": "255",
    "number": 4,
    "country": "United States",
    "team": "Oklahoma City Thunder",
    "conference": "Western Conference",
    "season": "2017-2018",
    "salary": 2,
    "unlockedlevel": 10,
    "tier": 4,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 68,
            "tendency": 87
        },
        "dunk": {
            "value": 75,
            "tendency": 3
        },
        "midrange": {
            "value": 65,
            "tendency": 13
        },
        "outside": {
            "value": 67,
            "tendency": 0
        },
        "drawfoul": 51,
        "freethrow": 39,
        "interior": 76,
        "perimeter": 72,
        "offensiverebound": 61,
        "defensiverebound": 59,
        "speed": 68,
        "vertical": 63,
        "strength": 66,
        "hands": 61,
        "stamina": 78,
        "hustle": 80,
        "passing": 55,
        "steal": 40,
        "block": 40,
        "offensiveconsistency": 51,
        "defensiveconsistency": 65
    },
    "position": "PF/C",
    "fgaintensity": 0,
    "fgaaverage": 1,
    "color1": "#5991d3",
    "color2": "#3764a5",
    "color3": "#ffffff",
    "image": "collison_nick_oklahomacity_thunder"
}, {
    "id": "0161",
    "type": "player",
    "first": "Shareef",
    "last": "Abdur-Rahim",
    "height": "6-9",
    "weight": "225",
    "number": 3,
    "country": "United States",
    "team": "Vancouver Grizzlies",
    "conference": "Western Conference",
    "season": "1999-2000",
    "salary": 9,
    "unlockedlevel": 77,
    "tier": 2,
    "rarity": "Epic",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 78,
            "tendency": 55
        },
        "dunk": {
            "value": 75,
            "tendency": 3
        },
        "midrange": {
            "value": 75,
            "tendency": 40
        },
        "outside": {
            "value": 68,
            "tendency": 5
        },
        "drawfoul": 74,
        "freethrow": 81,
        "interior": 78,
        "perimeter": 72,
        "offensiverebound": 74,
        "defensiverebound": 84,
        "speed": 72,
        "vertical": 76,
        "strength": 79,
        "hands": 82,
        "stamina": 97,
        "hustle": 84,
        "passing": 67,
        "steal": 62,
        "block": 57,
        "offensiveconsistency": 82,
        "defensiveconsistency": 79
    },
    "position": "SF",
    "fgaintensity": 2,
    "fgaaverage": 16,
    "color1": "#83e2e2",
    "color2": "#0abecc",
    "color3": "#ffffff",
    "image": "abdur-rahim_shareef_vancouver_grizzlies"
}, {
    "id": "0162",
    "type": "player",
    "first": "Lauri",
    "last": "Markkanen",
    "height": "7-0",
    "weight": "230",
    "number": 24,
    "country": "Finland",
    "team": "Chicago Bulls",
    "conference": "Eastern Conference",
    "season": "2017-2018",
    "salary": 4,
    "unlockedlevel": 49,
    "tier": 3,
    "rarity": "Rare",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 72,
            "tendency": 35
        },
        "dunk": {
            "value": 75,
            "tendency": 3
        },
        "midrange": {
            "value": 71,
            "tendency": 16
        },
        "outside": {
            "value": 82,
            "tendency": 49
        },
        "drawfoul": 57,
        "freethrow": 84,
        "interior": 62,
        "perimeter": 60,
        "offensiverebound": 65,
        "defensiverebound": 80,
        "speed": 67,
        "vertical": 59,
        "strength": 47,
        "hands": 76,
        "stamina": 91,
        "hustle": 54,
        "passing": 59,
        "steal": 52,
        "block": 49,
        "offensiveconsistency": 61,
        "defensiveconsistency": 51
    },
    "position": "PF",
    "fgaintensity": 1,
    "fgaaverage": 13,
    "color1": "#353535",
    "color2": "#090803",
    "color3": "#ffffff",
    "image": "markkanen_lauri_chicago_bulls"
}, {
    "id": "0163",
    "type": "player",
    "first": "Daniel",
    "last": "Theis",
    "height": "6-9",
    "weight": "215",
    "number": 27,
    "country": "Germany",
    "team": "Boston Celtics",
    "conference": "Eastern Conference",
    "season": "2017-2018",
    "salary": 1,
    "unlockedlevel": 2,
    "tier": 4,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 69,
            "tendency": 55
        },
        "dunk": {
            "value": 75,
            "tendency": 3
        },
        "midrange": {
            "value": 67,
            "tendency": 19
        },
        "outside": {
            "value": 68,
            "tendency": 26
        },
        "drawfoul": 52,
        "freethrow": 75,
        "interior": 74,
        "perimeter": 72,
        "offensiverebound": 66,
        "defensiverebound": 67,
        "speed": 63,
        "vertical": 73,
        "strength": 71,
        "hands": 55,
        "stamina": 83,
        "hustle": 78,
        "passing": 57,
        "steal": 50,
        "block": 52,
        "offensiveconsistency": 58,
        "defensiveconsistency": 66
    },
    "position": "C/PF",
    "fgaintensity": 0,
    "fgaaverage": 4,
    "color1": "#ffffff",
    "color2": "#eef3f1",
    "color3": "#346f54",
    "image": "theis_daniel_boston_celtics"
}, {
    "id": "0164",
    "type": "player",
    "first": "Andrew",
    "last": "Bogut",
    "height": "7-0",
    "weight": "260",
    "number": 66,
    "country": "Australia",
    "team": "Los Angeles Lakers",
    "conference": "Western Conference",
    "season": "2017-2018",
    "salary": 2,
    "unlockedlevel": 0,
    "tier": 4,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 68,
            "tendency": 88
        },
        "dunk": {
            "value": 75,
            "tendency": 3
        },
        "midrange": {
            "value": 65,
            "tendency": 12
        },
        "outside": {
            "value": 67,
            "tendency": 0
        },
        "drawfoul": 47,
        "freethrow": 42,
        "interior": 79,
        "perimeter": 75,
        "offensiverebound": 65,
        "defensiverebound": 64,
        "speed": 45,
        "vertical": 52,
        "strength": 75,
        "hands": 72,
        "stamina": 80,
        "hustle": 67,
        "passing": 56,
        "steal": 44,
        "block": 48,
        "offensiveconsistency": 55,
        "defensiveconsistency": 75
    },
    "position": "C",
    "fgaintensity": 0,
    "fgaaverage": 1,
    "color1": "#c0cef2",
    "color2": "#94aae0",
    "color3": "#fff437",
    "image": "bogut_andrew_losangeles_lakers"
}, {
    "id": "0165",
    "type": "player",
    "first": "Mo",
    "last": "Williams",
    "height": "6-1",
    "weight": "198",
    "number": 2,
    "country": "United States",
    "team": "Cleveland Cavaliers",
    "conference": "Eastern Conference",
    "season": "2008-2009",
    "salary": 8,
    "unlockedlevel": 43,
    "tier": 2,
    "rarity": "Rare",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 72,
            "tendency": 23
        },
        "dunk": {
            "value": 75,
            "tendency": 3
        },
        "midrange": {
            "value": 85,
            "tendency": 40
        },
        "outside": {
            "value": 75,
            "tendency": 37
        },
        "drawfoul": 58,
        "freethrow": 91,
        "interior": 60,
        "perimeter": 62,
        "offensiverebound": 62,
        "defensiverebound": 67,
        "speed": 92,
        "vertical": 78,
        "strength": 45,
        "hands": 77,
        "stamina": 94,
        "hustle": 70,
        "passing": 70,
        "steal": 58,
        "block": 42,
        "offensiveconsistency": 98,
        "defensiveconsistency": 70
    },
    "position": "PG",
    "fgaintensity": 1,
    "fgaaverage": 14,
    "color1": "#f9db5a",
    "color2": "#f7ce26",
    "color3": "#942e2f",
    "image": "williams_mo_cleveland_cavaliers"
}, {
    "id": "0166",
    "type": "player",
    "first": "Chuck",
    "last": "Hayes",
    "height": "6-6",
    "weight": "240",
    "number": 44,
    "country": "United States",
    "team": "Houston Rockets",
    "conference": "Western Conference",
    "season": "2010-2011",
    "salary": 2,
    "unlockedlevel": 0,
    "tier": 4,
    "rarity": "Rare",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 72,
            "tendency": 81
        },
        "dunk": {
            "value": 75,
            "tendency": 3
        },
        "midrange": {
            "value": 65,
            "tendency": 19
        },
        "outside": {
            "value": 67,
            "tendency": 0
        },
        "drawfoul": 55,
        "freethrow": 66,
        "interior": 82,
        "perimeter": 68,
        "offensiverebound": 76,
        "defensiverebound": 75,
        "speed": 62,
        "vertical": 66,
        "strength": 85,
        "hands": 37,
        "stamina": 90,
        "hustle": 97,
        "passing": 64,
        "steal": 62,
        "block": 51,
        "offensiveconsistency": 55,
        "defensiveconsistency": 60
    },
    "position": "C",
    "fgaintensity": 0,
    "fgaaverage": 6,
    "color1": "#ffffff",
    "color2": "#f4e9e9",
    "color3": "#e0111d",
    "image": "hayes_chuck_houston_rockets"
}, {
    "id": "0167",
    "type": "player",
    "first": "Michael",
    "last": "Carter-Williams",
    "height": "6-6",
    "weight": "190",
    "number": 10,
    "country": "United States",
    "team": "Charlotte Hornets",
    "conference": "Eastern Conference",
    "season": "2017-2018",
    "salary": 3,
    "unlockedlevel": 0,
    "tier": 4,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 68,
            "tendency": 52
        },
        "dunk": {
            "value": 75,
            "tendency": 3
        },
        "midrange": {
            "value": 67,
            "tendency": 22
        },
        "outside": {
            "value": 68,
            "tendency": 26
        },
        "drawfoul": 54,
        "freethrow": 82,
        "interior": 60,
        "perimeter": 71,
        "offensiverebound": 62,
        "defensiverebound": 63,
        "speed": 74,
        "vertical": 72,
        "strength": 35,
        "hands": 80,
        "stamina": 84,
        "hustle": 80,
        "passing": 62,
        "steal": 56,
        "block": 46,
        "offensiveconsistency": 56,
        "defensiveconsistency": 51
    },
    "position": "PG",
    "fgaintensity": 0,
    "fgaaverage": 4,
    "color1": "#41cee5",
    "color2": "#1499b8",
    "color3": "#ffffff",
    "image": "carter-williams_michael_charlotte_hornets"
}, {
    "id": "0168",
    "type": "player",
    "first": "Paul",
    "last": "George",
    "height": "6-9",
    "weight": "220",
    "number": 13,
    "country": "United States",
    "team": "Oklahoma City Thunder",
    "conference": "Western Conference",
    "season": "2017-2018",
    "salary": 20,
    "unlockedlevel": 85,
    "tier": 1,
    "rarity": "Epic",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 73,
            "tendency": 27
        },
        "dunk": {
            "value": 75,
            "tendency": 3
        },
        "midrange": {
            "value": 78,
            "tendency": 27
        },
        "outside": {
            "value": 84,
            "tendency": 46
        },
        "drawfoul": 68,
        "freethrow": 82,
        "interior": 60,
        "perimeter": 80,
        "offensiverebound": 63,
        "defensiverebound": 74,
        "speed": 73,
        "vertical": 83,
        "strength": 55,
        "hands": 88,
        "stamina": 95,
        "hustle": 83,
        "passing": 67,
        "steal": 81,
        "block": 48,
        "offensiveconsistency": 88,
        "defensiveconsistency": 83
    },
    "position": "SF",
    "fgaintensity": 2,
    "fgaaverage": 17,
    "color1": "#6d6b6b",
    "color2": "#c0bfbf",
    "color3": "#ffffff",
    "image": "george_paul_oklahomacity_thunder"
}, {
    "id": "0169",
    "type": "player",
    "first": "Blake",
    "last": "Griffin",
    "height": "6-10",
    "weight": "251",
    "number": 23,
    "country": "United States",
    "team": "Detroit Pistons",
    "conference": "Eastern Conference",
    "season": "2017-2018",
    "salary": 30,
    "unlockedlevel": 88,
    "tier": 1,
    "rarity": "Epic",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 75,
            "tendency": 45
        },
        "dunk": {
            "value": 88,
            "tendency": 3
        },
        "midrange": {
            "value": 73,
            "tendency": 21
        },
        "outside": {
            "value": 79,
            "tendency": 34
        },
        "drawfoul": 70,
        "freethrow": 79,
        "interior": 77,
        "perimeter": 73,
        "offensiverebound": 66,
        "defensiverebound": 79,
        "speed": 76,
        "vertical": 88,
        "strength": 89,
        "hands": 85,
        "stamina": 94,
        "hustle": 89,
        "passing": 76,
        "steal": 54,
        "block": 45,
        "offensiveconsistency": 89,
        "defensiveconsistency": 78
    },
    "position": "PF",
    "fgaintensity": 2,
    "fgaaverage": 17,
    "color1": "#1b1c2e",
    "color2": "#303552",
    "color3": "#b6b8b7",
    "image": "griffin_blake_detroit_pistons"
}, {
    "id": "0170",
    "type": "player",
    "first": "Kenny",
    "last": "Smith",
    "height": "6-3",
    "weight": "170",
    "number": 30,
    "country": "United States",
    "team": "Houston Rockets",
    "conference": "Western Conference",
    "season": "1990-1991",
    "salary": 1,
    "unlockedlevel": 51,
    "tier": 2,
    "rarity": "Rare",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 72,
            "tendency": 28
        },
        "dunk": {
            "value": 72,
            "tendency": 3
        },
        "midrange": {
            "value": 73,
            "tendency": 50
        },
        "outside": {
            "value": 72,
            "tendency": 22
        },
        "drawfoul": 51,
        "freethrow": 87,
        "interior": 60,
        "perimeter": 70,
        "offensiverebound": 58,
        "defensiverebound": 59,
        "speed": 90,
        "vertical": 84,
        "strength": 50,
        "hands": 88,
        "stamina": 87,
        "hustle": 85,
        "passing": 65,
        "steal": 49,
        "block": 40,
        "offensiveconsistency": 80,
        "defensiveconsistency": 70
    },
    "position": "PG",
    "fgaintensity": 1,
    "fgaaverage": 13,
    "color1": "#b01801",
    "color2": "#791102",
    "color3": "#ffffff",
    "image": "smith_kenny_houston_rockets"
}, {
    "id": "0171",
    "type": "player",
    "first": "Roy",
    "last": "Hibbert",
    "height": "7-2",
    "weight": "218",
    "number": 55,
    "country": "United States",
    "team": "Indiana Pacers",
    "conference": "Eastern Conference",
    "season": "2011-2012",
    "salary": 14,
    "unlockedlevel": 49,
    "tier": 2,
    "rarity": "Rare",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 78,
            "tendency": 81
        },
        "dunk": {
            "value": 75,
            "tendency": 3
        },
        "midrange": {
            "value": 66,
            "tendency": 19
        },
        "outside": {
            "value": 67,
            "tendency": 0
        },
        "drawfoul": 62,
        "freethrow": 71,
        "interior": 93,
        "perimeter": 64,
        "offensiverebound": 78,
        "defensiverebound": 77,
        "speed": 39,
        "vertical": 41,
        "strength": 93,
        "hands": 82,
        "stamina": 91,
        "hustle": 68,
        "passing": 61,
        "steal": 50,
        "block": 70,
        "offensiveconsistency": 73,
        "defensiveconsistency": 90
    },
    "position": "C",
    "fgaintensity": 1,
    "fgaaverage": 10,
    "color1": "#413b44",
    "color2": "#1e1b1f",
    "color3": "#ffffff",
    "image": "hibbert_roy_indiana_pacers"
}, {
    "id": "0172",
    "type": "player",
    "first": "Anderson",
    "last": "Varejao",
    "height": "6-10",
    "weight": "208",
    "number": 17,
    "country": "Brazil",
    "team": "Cleveland Cavaliers",
    "conference": "Eastern Conference",
    "season": "2009-2010",
    "salary": 6,
    "unlockedlevel": 39,
    "tier": 3,
    "rarity": "Rare",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 72,
            "tendency": 82
        },
        "dunk": {
            "value": 75,
            "tendency": 3
        },
        "midrange": {
            "value": 66,
            "tendency": 17
        },
        "outside": {
            "value": 67,
            "tendency": 1
        },
        "drawfoul": 56,
        "freethrow": 66,
        "interior": 87,
        "perimeter": 80,
        "offensiverebound": 73,
        "defensiverebound": 75,
        "speed": 75,
        "vertical": 78,
        "strength": 80,
        "hands": 95,
        "stamina": 91,
        "hustle": 98,
        "passing": 58,
        "steal": 58,
        "block": 54,
        "offensiveconsistency": 60,
        "defensiveconsistency": 90
    },
    "position": "PF/C",
    "fgaintensity": 0,
    "fgaaverage": 6,
    "color1": "#fee211",
    "color2": "#f4cf00",
    "color3": "#731d19",
    "image": "varejao_anderson_cleveland_cavaliers"
}, {
    "id": "0173",
    "type": "player",
    "first": "Karl-Anthony",
    "last": "Towns",
    "height": "7-0",
    "weight": "244",
    "number": 32,
    "country": "United States",
    "team": "Minnesota Timberwolves",
    "conference": "Western Conference",
    "season": "2017-2018",
    "salary": 6,
    "unlockedlevel": 42,
    "tier": 2,
    "rarity": "Rare",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 78,
            "tendency": 58
        },
        "dunk": {
            "value": 81,
            "tendency": 3
        },
        "midrange": {
            "value": 72,
            "tendency": 17
        },
        "outside": {
            "value": 75,
            "tendency": 25
        },
        "drawfoul": 66,
        "freethrow": 86,
        "interior": 74,
        "perimeter": 70,
        "offensiverebound": 75,
        "defensiverebound": 91,
        "speed": 79,
        "vertical": 75,
        "strength": 78,
        "hands": 91,
        "stamina": 95,
        "hustle": 75,
        "passing": 63,
        "steal": 56,
        "block": 61,
        "offensiveconsistency": 91,
        "defensiveconsistency": 70
    },
    "position": "C",
    "fgaintensity": 2,
    "fgaaverage": 14,
    "color1": "#225077",
    "color2": "#062944",
    "color3": "#ffffff",
    "image": "towns_karl-anthony_minnesota_timberwolves"
}, {
    "id": "0174",
    "type": "player",
    "first": "Nikola",
    "last": "Pekovic",
    "height": "6-11",
    "weight": "307",
    "number": 14,
    "country": "Montenegro",
    "team": "Minnesota Timberwolves",
    "conference": "Western Conference",
    "season": "2012-2013",
    "salary": 5,
    "unlockedlevel": 26,
    "tier": 3,
    "rarity": "Rare",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 78,
            "tendency": 96
        },
        "dunk": {
            "value": 75,
            "tendency": 3
        },
        "midrange": {
            "value": 65,
            "tendency": 4
        },
        "outside": {
            "value": 67,
            "tendency": 0
        },
        "drawfoul": 68,
        "freethrow": 74,
        "interior": 80,
        "perimeter": 68,
        "offensiverebound": 80,
        "defensiverebound": 75,
        "speed": 43,
        "vertical": 49,
        "strength": 98,
        "hands": 58,
        "stamina": 92,
        "hustle": 83,
        "passing": 57,
        "steal": 54,
        "block": 52,
        "offensiveconsistency": 85,
        "defensiveconsistency": 65
    },
    "position": "C",
    "fgaintensity": 1,
    "fgaaverage": 12,
    "color1": "#2d2d2d",
    "color2": "#050604",
    "color3": "#ffffff",
    "image": "pekovic_nikola_minnesota_timberwolves"
}, {
    "id": "0175",
    "type": "player",
    "first": "Jamal",
    "last": "Murray",
    "height": "6-4",
    "weight": "207",
    "number": 27,
    "country": "Canada",
    "team": "Denver Nuggets",
    "conference": "Western Conference",
    "season": "2017-2018",
    "salary": 3,
    "unlockedlevel": 37,
    "tier": 3,
    "rarity": "Rare",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 73,
            "tendency": 35
        },
        "dunk": {
            "value": 75,
            "tendency": 3
        },
        "midrange": {
            "value": 74,
            "tendency": 25
        },
        "outside": {
            "value": 79,
            "tendency": 40
        },
        "drawfoul": 59,
        "freethrow": 91,
        "interior": 64,
        "perimeter": 75,
        "offensiverebound": 64,
        "defensiverebound": 66,
        "speed": 79,
        "vertical": 78,
        "strength": 64,
        "hands": 74,
        "stamina": 92,
        "hustle": 77,
        "passing": 67,
        "steal": 60,
        "block": 45,
        "offensiveconsistency": 84,
        "defensiveconsistency": 68
    },
    "position": "SG/PG",
    "fgaintensity": 1,
    "fgaaverage": 13,
    "color1": "#374556",
    "color2": "#0b0e0d",
    "color3": "#efbc5f",
    "image": "murray_jamal_denver_nuggets"
}, {
    "id": "0176",
    "type": "player",
    "first": "Hasheem",
    "last": "Thabeet",
    "height": "7-3",
    "weight": "263",
    "number": 34,
    "country": "Tanzania",
    "team": "Memphis Grizzlies",
    "conference": "Western Conference",
    "season": "2009-2010",
    "salary": 4,
    "unlockedlevel": 0,
    "tier": 4,
    "rarity": "Rare",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 68,
            "tendency": 88
        },
        "dunk": {
            "value": 75,
            "tendency": 3
        },
        "midrange": {
            "value": 65,
            "tendency": 12
        },
        "outside": {
            "value": 67,
            "tendency": 0
        },
        "drawfoul": 53,
        "freethrow": 58,
        "interior": 72,
        "perimeter": 65,
        "offensiverebound": 66,
        "defensiverebound": 65,
        "speed": 25,
        "vertical": 30,
        "strength": 52,
        "hands": 32,
        "stamina": 82,
        "hustle": 66,
        "passing": 55,
        "steal": 44,
        "block": 60,
        "offensiveconsistency": 55,
        "defensiveconsistency": 51
    },
    "position": "C",
    "fgaintensity": 0,
    "fgaaverage": 2,
    "color1": "#4b4874",
    "color2": "#2f2a40",
    "color3": "#ffffff",
    "image": "thatbeet_hasheem_memphis_grizzlies"
}, {
    "id": "0177",
    "type": "player",
    "first": "Bojan",
    "last": "Bogdanovic",
    "height": "6-8",
    "weight": "216",
    "number": 44,
    "country": "Bosnia and Herzegovina",
    "team": "Indiana Pacers",
    "conference": "Eastern Conference",
    "season": "2017-2018",
    "salary": 11,
    "unlockedlevel": 0,
    "tier": 4,
    "rarity": "Rare",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 72,
            "tendency": 38
        },
        "dunk": {
            "value": 75,
            "tendency": 3
        },
        "midrange": {
            "value": 72,
            "tendency": 16
        },
        "outside": {
            "value": 78,
            "tendency": 46
        },
        "drawfoul": 57,
        "freethrow": 87,
        "interior": 61,
        "perimeter": 61,
        "offensiverebound": 60,
        "defensiverebound": 67,
        "speed": 63,
        "vertical": 69,
        "strength": 57,
        "hands": 67,
        "stamina": 92,
        "hustle": 82,
        "passing": 60,
        "steal": 54,
        "block": 42,
        "offensiveconsistency": 82,
        "defensiveconsistency": 52
    },
    "position": "SF",
    "fgaintensity": 1,
    "fgaaverage": 11,
    "color1": "#263f68",
    "color2": "#07152a",
    "color3": "#ffffff",
    "image": "bogdanovic_bojan_indiana_pacers"
}, {
    "id": "0178",
    "type": "player",
    "first": "LeBron",
    "last": "James",
    "height": "6-8",
    "weight": "250",
    "number": 23,
    "country": "United States",
    "team": "Cleveland Cavaliers",
    "conference": "Eastern Conference",
    "season": "2014-2015",
    "salary": 20,
    "unlockedlevel": 98,
    "tier": 0,
    "rarity": "Legendary",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 78,
            "tendency": 45
        },
        "dunk": {
            "value": 75,
            "tendency": 3
        },
        "midrange": {
            "value": 76,
            "tendency": 28
        },
        "outside": {
            "value": 77,
            "tendency": 27
        },
        "drawfoul": 78,
        "freethrow": 71,
        "interior": 87,
        "perimeter": 91,
        "offensiverebound": 62,
        "defensiverebound": 76,
        "speed": 88,
        "vertical": 91,
        "strength": 89,
        "hands": 98,
        "stamina": 95,
        "hustle": 88,
        "passing": 82,
        "steal": 73,
        "block": 51,
        "offensiveconsistency": 95,
        "defensiveconsistency": 85
    },
    "position": "SF/PF",
    "fgaintensity": 2,
    "fgaaverage": 19,
    "color1": "#f2cf5f",
    "color2": "#e5aa33",
    "color3": "#8e252d",
    "image": "james_lebron_cleveland_cavaliers"
}, {
    "id": "0179",
    "type": "player",
    "first": "Dwight",
    "last": "Howard",
    "height": "6-11",
    "weight": "265",
    "number": 12,
    "country": "United States",
    "team": "Charlotte Hornets",
    "conference": "Eastern Conference",
    "season": "2017-2018",
    "salary": 24,
    "unlockedlevel": 49,
    "tier": 2,
    "rarity": "Rare",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 77,
            "tendency": 85
        },
        "dunk": {
            "value": 75,
            "tendency": 3
        },
        "midrange": {
            "value": 67,
            "tendency": 14
        },
        "outside": {
            "value": 67,
            "tendency": 1
        },
        "drawfoul": 76,
        "freethrow": 57,
        "interior": 84,
        "perimeter": 78,
        "offensiverebound": 77,
        "defensiverebound": 91,
        "speed": 73,
        "vertical": 78,
        "strength": 90,
        "hands": 83,
        "stamina": 92,
        "hustle": 83,
        "passing": 59,
        "steal": 52,
        "block": 64,
        "offensiveconsistency": 53,
        "defensiveconsistency": 82
    },
    "position": "C",
    "fgaintensity": 1,
    "fgaaverage": 11,
    "color1": "#ffffff",
    "color2": "#d4f2f4",
    "color3": "#282534",
    "image": "howard_dwight_charlotte_hornets"
}, {
    "id": "0180",
    "type": "player",
    "first": "Kristaps",
    "last": "Porzingis",
    "height": "7-2",
    "weight": "240",
    "number": 6,
    "country": "Latvia",
    "team": "New York Knicks",
    "conference": "Eastern Conference",
    "season": "2017-2018",
    "salary": 5,
    "unlockedlevel": 81,
    "tier": 1,
    "rarity": "Epic",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 79,
            "tendency": 31
        },
        "dunk": {
            "value": 75,
            "tendency": 3
        },
        "midrange": {
            "value": 75,
            "tendency": 43
        },
        "outside": {
            "value": 82,
            "tendency": 26
        },
        "drawfoul": 70,
        "freethrow": 79,
        "interior": 74,
        "perimeter": 66,
        "offensiverebound": 66,
        "defensiverebound": 76,
        "speed": 77,
        "vertical": 78,
        "strength": 35,
        "hands": 85,
        "stamina": 93,
        "hustle": 85,
        "passing": 59,
        "steal": 56,
        "block": 76,
        "offensiveconsistency": 90,
        "defensiveconsistency": 87
    },
    "position": "PF",
    "fgaintensity": 2,
    "fgaaverage": 20,
    "color1": "#2f2f60",
    "color2": "#1e1a2a",
    "color3": "#ffffff",
    "image": "porzingis_kristaps_newyork_knicks"
}, {
    "id": "0181",
    "type": "player",
    "first": "Hakeem",
    "last": "Olajuwon",
    "height": "7-0",
    "weight": "255",
    "number": 34,
    "country": "Nigeria",
    "team": "Toronto Raptors",
    "conference": "Eastern Conference",
    "season": "2001-2002",
    "salary": 5,
    "unlockedlevel": 17,
    "tier": 4,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 76,
            "tendency": 43
        },
        "dunk": {
            "value": 75,
            "tendency": 3
        },
        "midrange": {
            "value": 69,
            "tendency": 56
        },
        "outside": {
            "value": 67,
            "tendency": 1
        },
        "drawfoul": 53,
        "freethrow": 56,
        "interior": 78,
        "perimeter": 74,
        "offensiverebound": 68,
        "defensiverebound": 72,
        "speed": 30,
        "vertical": 60,
        "strength": 70,
        "hands": 85,
        "stamina": 87,
        "hustle": 79,
        "passing": 58,
        "steal": 64,
        "block": 63,
        "offensiveconsistency": 80,
        "defensiveconsistency": 75
    },
    "position": "C",
    "fgaintensity": 0,
    "fgaaverage": 7,
    "color1": "#ffffff",
    "color2": "#f4eff0",
    "color3": "#7c4ab0",
    "image": "olajuwon_hakeem_toronto_raptors"
}, {
    "id": "0182",
    "type": "player",
    "first": "Evan",
    "last": "Fournier",
    "height": "6-7",
    "weight": "205",
    "number": 94,
    "country": "France",
    "team": "Denver Nuggets",
    "conference": "Western Conference",
    "season": "2013-2014",
    "salary": 1,
    "unlockedlevel": 15,
    "tier": 4,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 70,
            "tendency": 41
        },
        "dunk": {
            "value": 75,
            "tendency": 3
        },
        "midrange": {
            "value": 70,
            "tendency": 15
        },
        "outside": {
            "value": 73,
            "tendency": 44
        },
        "drawfoul": 53,
        "freethrow": 76,
        "interior": 62,
        "perimeter": 65,
        "offensiverebound": 60,
        "defensiverebound": 64,
        "speed": 69,
        "vertical": 60,
        "strength": 37,
        "hands": 72,
        "stamina": 81,
        "hustle": 76,
        "passing": 60,
        "steal": 48,
        "block": 42,
        "offensiveconsistency": 76,
        "defensiveconsistency": 61
    },
    "position": "SG",
    "fgaintensity": 0,
    "fgaaverage": 7,
    "color1": "#faa842",
    "color2": "#ffd452",
    "color3": "#12161b",
    "image": "fournier_evan_denver_nuggets"
}, {
    "id": "0183",
    "type": "player",
    "first": "Xavier",
    "last": "Henry",
    "height": "6-6",
    "weight": "220",
    "number": 4,
    "country": "Belgium",
    "team": "New Orleans Hornets",
    "conference": "Western Conference",
    "season": "2011-2012",
    "salary": 2,
    "unlockedlevel": 0,
    "tier": 4,
    "rarity": "Rare",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 67,
            "tendency": 44
        },
        "dunk": {
            "value": 75,
            "tendency": 3
        },
        "midrange": {
            "value": 66,
            "tendency": 48
        },
        "outside": {
            "value": 67,
            "tendency": 8
        },
        "drawfoul": 55,
        "freethrow": 61,
        "interior": 60,
        "perimeter": 70,
        "offensiverebound": 61,
        "defensiverebound": 63,
        "speed": 78,
        "vertical": 78,
        "strength": 62,
        "hands": 64,
        "stamina": 84,
        "hustle": 74,
        "passing": 57,
        "steal": 52,
        "block": 43,
        "offensiveconsistency": 51,
        "defensiveconsistency": 55
    },
    "position": "SF/SG",
    "fgaintensity": 0,
    "fgaaverage": 5,
    "color1": "#ffffff",
    "color2": "#f9fcfd",
    "color3": "#5052ac",
    "image": "henry_xavier_neworleans_hornets"
}, {
    "id": "0184",
    "type": "player",
    "first": "Andrea",
    "last": "Bargnani",
    "height": "7-0",
    "weight": "245",
    "number": 7,
    "country": "Italy",
    "team": "Toronto Raptors",
    "conference": "Eastern Conference",
    "season": "2009-2010",
    "salary": 7,
    "unlockedlevel": 57,
    "tier": 3,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 75,
            "tendency": 35
        },
        "dunk": {
            "value": 75,
            "tendency": 3
        },
        "midrange": {
            "value": 77,
            "tendency": 37
        },
        "outside": {
            "value": 76,
            "tendency": 28
        },
        "drawfoul": 59,
        "freethrow": 77,
        "interior": 76,
        "perimeter": 62,
        "offensiverebound": 66,
        "defensiverebound": 74,
        "speed": 52,
        "vertical": 60,
        "strength": 64,
        "hands": 95,
        "stamina": 94,
        "hustle": 70,
        "passing": 59,
        "steal": 46,
        "block": 61,
        "offensiveconsistency": 90,
        "defensiveconsistency": 55
    },
    "position": "PF/C",
    "fgaintensity": 1,
    "fgaaverage": 14,
    "color1": "#121010",
    "color2": "#27292f",
    "color3": "#ffffff",
    "image": "bargnani_andrea_toronto_raptors"
}, {
    "id": "0185",
    "type": "player",
    "first": "Landry",
    "last": "Fields",
    "height": "6-7",
    "weight": "210",
    "number": 2,
    "country": "United States",
    "team": "New York Knicks",
    "conference": "Eastern Conference",
    "season": "2010-2011",
    "salary": 1,
    "unlockedlevel": 0,
    "tier": 4,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 70,
            "tendency": 50
        },
        "dunk": {
            "value": 75,
            "tendency": 3
        },
        "midrange": {
            "value": 72,
            "tendency": 14
        },
        "outside": {
            "value": 70,
            "tendency": 36
        },
        "drawfoul": 54,
        "freethrow": 77,
        "interior": 60,
        "perimeter": 64,
        "offensiverebound": 66,
        "defensiverebound": 75,
        "speed": 79,
        "vertical": 66,
        "strength": 67,
        "hands": 64,
        "stamina": 92,
        "hustle": 86,
        "passing": 61,
        "steal": 60,
        "block": 43,
        "offensiveconsistency": 55,
        "defensiveconsistency": 51
    },
    "position": "SF/SG",
    "fgaintensity": 0,
    "fgaaverage": 7,
    "color1": "#ffffff",
    "color2": "#e8eaea",
    "color3": "#e57f44",
    "image": "fields_landry_newyork_knicks"
}, {
    "id": "0186",
    "type": "player",
    "first": "Matthew",
    "last": "Dellavedova",
    "height": "6-4",
    "weight": "198",
    "number": 8,
    "country": "Australia",
    "team": "Milwaukee Bucks",
    "conference": "Eastern Conference",
    "season": "2017-2018",
    "salary": 10,
    "unlockedlevel": 27,
    "tier": 4,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 68,
            "tendency": 29
        },
        "dunk": {
            "value": 75,
            "tendency": 3
        },
        "midrange": {
            "value": 67,
            "tendency": 20
        },
        "outside": {
            "value": 73,
            "tendency": 51
        },
        "drawfoul": 50,
        "freethrow": 93,
        "interior": 60,
        "perimeter": 82,
        "offensiverebound": 60,
        "defensiverebound": 61,
        "speed": 72,
        "vertical": 67,
        "strength": 35,
        "hands": 73,
        "stamina": 85,
        "hustle": 98,
        "passing": 69,
        "steal": 48,
        "block": 40,
        "offensiveconsistency": 52,
        "defensiveconsistency": 77
    },
    "position": "PG",
    "fgaintensity": 0,
    "fgaaverage": 4,
    "color1": "#224837",
    "color2": "#172013",
    "color3": "#ffffff",
    "image": "dellavedova_matthew_milwaukee_bucks"
}, {
    "id": "0187",
    "type": "player",
    "first": "Corey",
    "last": "Maggette",
    "height": "6-6",
    "weight": "218",
    "number": 50,
    "country": "United States",
    "team": "Los Angeles Clippers",
    "conference": "Western Conference",
    "season": "2003-2004",
    "salary": 7,
    "unlockedlevel": 72,
    "tier": 2,
    "rarity": "Rare",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 73,
            "tendency": 43
        },
        "dunk": {
            "value": 75,
            "tendency": 3
        },
        "midrange": {
            "value": 75,
            "tendency": 34
        },
        "outside": {
            "value": 73,
            "tendency": 23
        },
        "drawfoul": 81,
        "freethrow": 85,
        "interior": 71,
        "perimeter": 74,
        "offensiverebound": 66,
        "defensiverebound": 73,
        "speed": 79,
        "vertical": 80,
        "strength": 81,
        "hands": 89,
        "stamina": 95,
        "hustle": 90,
        "passing": 66,
        "steal": 58,
        "block": 43,
        "offensiveconsistency": 84,
        "defensiveconsistency": 73
    },
    "position": "SF",
    "fgaintensity": 2,
    "fgaaverage": 14,
    "color1": "#ffffff",
    "color2": "#edf1f9",
    "color3": "#31368a",
    "image": "maggette_corey_losangeles_clippers"
}, {
    "id": "0188",
    "type": "player",
    "first": "Dennis",
    "last": "Smith Jr",
    "height": "6-3",
    "weight": "195",
    "number": 1,
    "country": "United States",
    "team": "Dallas Mavericks",
    "conference": "Western Conference",
    "season": "2017-2018",
    "salary": 3,
    "unlockedlevel": 29,
    "tier": 3,
    "rarity": "Rare",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 72,
            "tendency": 43
        },
        "dunk": {
            "value": 75,
            "tendency": 3
        },
        "midrange": {
            "value": 73,
            "tendency": 24
        },
        "outside": {
            "value": 77,
            "tendency": 33
        },
        "drawfoul": 58,
        "freethrow": 69,
        "interior": 61,
        "perimeter": 76,
        "offensiverebound": 62,
        "defensiverebound": 67,
        "speed": 89,
        "vertical": 95,
        "strength": 64,
        "hands": 82,
        "stamina": 91,
        "hustle": 78,
        "passing": 74,
        "steal": 60,
        "block": 45,
        "offensiveconsistency": 81,
        "defensiveconsistency": 74
    },
    "position": "PG",
    "fgaintensity": 1,
    "fgaaverage": 15,
    "color1": "#3a3639",
    "color2": "#0f0d0c",
    "color3": "#a3d286",
    "image": "smithjr_dennis_dallas_mavericks"
}, {
    "id": "0189",
    "type": "player",
    "first": "Kobe",
    "last": "Bryant",
    "height": "6-6",
    "weight": "212",
    "number": 24,
    "country": "United States",
    "team": "Los Angeles Lakers",
    "conference": "Western Conference",
    "season": "2008-2009",
    "salary": 21,
    "unlockedlevel": 98,
    "tier": 0,
    "rarity": "Legendary",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 79,
            "tendency": 32
        },
        "dunk": {
            "value": 75,
            "tendency": 3
        },
        "midrange": {
            "value": 82,
            "tendency": 48
        },
        "outside": {
            "value": 77,
            "tendency": 20
        },
        "drawfoul": 74,
        "freethrow": 86,
        "interior": 72,
        "perimeter": 88,
        "offensiverebound": 65,
        "defensiverebound": 71,
        "speed": 94,
        "vertical": 98,
        "strength": 81,
        "hands": 90,
        "stamina": 95,
        "hustle": 90,
        "passing": 73,
        "steal": 71,
        "block": 48,
        "offensiveconsistency": 95,
        "defensiveconsistency": 85
    },
    "position": "SG",
    "fgaintensity": 2,
    "fgaaverage": 21,
    "color1": "#0f0f0f",
    "color2": "#36355b",
    "color3": "#f9c73d",
    "image": "bryant_kobe_losangeles_lakers"
}, {
    "id": "0190",
    "type": "player",
    "first": "Greg",
    "last": "Oden",
    "height": "7-0",
    "weight": "250",
    "number": 52,
    "country": "United States",
    "team": "Portland Trail Blazers",
    "conference": "Western Conference",
    "season": "2008-2009",
    "salary": 5,
    "unlockedlevel": 55,
    "tier": 3,
    "rarity": "Rare",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 72,
            "tendency": 95
        },
        "dunk": {
            "value": 88,
            "tendency": 3
        },
        "midrange": {
            "value": 65,
            "tendency": 5
        },
        "outside": {
            "value": 67,
            "tendency": 0
        },
        "drawfoul": 62,
        "freethrow": 64,
        "interior": 88,
        "perimeter": 72,
        "offensiverebound": 75,
        "defensiverebound": 72,
        "speed": 64,
        "vertical": 65,
        "strength": 87,
        "hands": 85,
        "stamina": 87,
        "hustle": 72,
        "passing": 56,
        "steal": 48,
        "block": 57,
        "offensiveconsistency": 75,
        "defensiveconsistency": 77
    },
    "position": "C",
    "fgaintensity": 1,
    "fgaaverage": 6,
    "color1": "#dd2638",
    "color2": "#841c1c",
    "color3": "#ffffff",
    "image": "oden_greg_portland_trailblazers"
}, {
    "id": "0191",
    "type": "player",
    "first": "Matt",
    "last": "Barnes",
    "height": "6-7",
    "weight": "226",
    "number": 22,
    "country": "United States",
    "team": "Sacramento Kings",
    "conference": "Western Conference",
    "season": "2016-2017",
    "salary": 6,
    "unlockedlevel": 44,
    "tier": 3,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 68,
            "tendency": 33
        },
        "dunk": {
            "value": 75,
            "tendency": 3
        },
        "midrange": {
            "value": 71,
            "tendency": 11
        },
        "outside": {
            "value": 71,
            "tendency": 56
        },
        "drawfoul": 52,
        "freethrow": 79,
        "interior": 63,
        "perimeter": 72,
        "offensiverebound": 63,
        "defensiverebound": 72,
        "speed": 68,
        "vertical": 85,
        "strength": 59,
        "hands": 77,
        "stamina": 88,
        "hustle": 91,
        "passing": 64,
        "steal": 52,
        "block": 46,
        "offensiveconsistency": 56,
        "defensiveconsistency": 61
    },
    "position": "SF",
    "fgaintensity": 0,
    "fgaaverage": 6,
    "color1": "#5830c2",
    "color2": "#3b156a",
    "color3": "#ffffff",
    "image": "barnes_matt_sacramento_kings"
}, {
    "id": "0192",
    "type": "player",
    "first": "Nicolas",
    "last": "Batum",
    "height": "6-8",
    "weight": "200",
    "number": 88,
    "country": "France",
    "team": "Portland Trail Blazers",
    "conference": "Western Conference",
    "season": "2013-2014",
    "salary": 11,
    "unlockedlevel": 43,
    "tier": 3,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 70,
            "tendency": 27
        },
        "dunk": {
            "value": 75,
            "tendency": 3
        },
        "midrange": {
            "value": 75,
            "tendency": 24
        },
        "outside": {
            "value": 74,
            "tendency": 49
        },
        "drawfoul": 57,
        "freethrow": 80,
        "interior": 66,
        "perimeter": 75,
        "offensiverebound": 66,
        "defensiverebound": 78,
        "speed": 75,
        "vertical": 82,
        "strength": 42,
        "hands": 81,
        "stamina": 95,
        "hustle": 86,
        "passing": 74,
        "steal": 58,
        "block": 51,
        "offensiveconsistency": 80,
        "defensiveconsistency": 80
    },
    "position": "SF",
    "fgaintensity": 1,
    "fgaaverage": 10,
    "color1": "#33343d",
    "color2": "#070707",
    "color3": "#ffffff",
    "image": "batum_nicolas_portland_trailblazers"
}, {
    "id": "0193",
    "type": "player",
    "first": "Charles",
    "last": "Barkley",
    "height": "6-6",
    "weight": "252",
    "number": 34,
    "country": "United States",
    "team": "Phoenix Suns",
    "conference": "Western Conference",
    "season": "1992-1993",
    "salary": 2,
    "unlockedlevel": 89,
    "tier": 0,
    "rarity": "Legendary",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 87,
            "tendency": 50
        },
        "dunk": {
            "value": 75,
            "tendency": 3
        },
        "midrange": {
            "value": 77,
            "tendency": 29
        },
        "outside": {
            "value": 73,
            "tendency": 21
        },
        "drawfoul": 81,
        "freethrow": 77,
        "interior": 86,
        "perimeter": 81,
        "offensiverebound": 87,
        "defensiverebound": 92,
        "speed": 86,
        "vertical": 88,
        "strength": 92,
        "hands": 87,
        "stamina": 97,
        "hustle": 89,
        "passing": 75,
        "steal": 67,
        "block": 51,
        "offensiveconsistency": 85,
        "defensiveconsistency": 85
    },
    "position": "PF",
    "fgaintensity": 2,
    "fgaaverage": 18,
    "color1": "#3b276d",
    "color2": "#16112d",
    "color3": "#ffffff",
    "image": "barkley_charles_phoenix_suns"
}, {
    "id": "0194",
    "type": "player",
    "first": "Josh",
    "last": "Jackson",
    "height": "6-8",
    "weight": "207",
    "number": 20,
    "country": "United States",
    "team": "Phoenix Suns",
    "conference": "Western Conference",
    "season": "2017-2018",
    "salary": 6,
    "unlockedlevel": 29,
    "tier": 3,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 74,
            "tendency": 54
        },
        "dunk": {
            "value": 75,
            "tendency": 3
        },
        "midrange": {
            "value": 70,
            "tendency": 23
        },
        "outside": {
            "value": 71,
            "tendency": 23
        },
        "drawfoul": 61,
        "freethrow": 63,
        "interior": 60,
        "perimeter": 76,
        "offensiverebound": 65,
        "defensiverebound": 68,
        "speed": 81,
        "vertical": 83,
        "strength": 50,
        "hands": 85,
        "stamina": 89,
        "hustle": 81,
        "passing": 60,
        "steal": 60,
        "block": 48,
        "offensiveconsistency": 51,
        "defensiveconsistency": 66
    },
    "position": "SF",
    "fgaintensity": 1,
    "fgaaverage": 12,
    "color1": "#50427c",
    "color2": "#2b1c3b",
    "color3": "#ff9c41",
    "image": "jackson_josh_phoenix_suns"
}, {
    "id": "0195",
    "type": "player",
    "first": "Deron",
    "last": "Williams",
    "height": "6-3",
    "weight": "200",
    "number": 8,
    "country": "United States",
    "team": "Brooklyn Nets",
    "conference": "Eastern Conference",
    "season": "2012-2013",
    "salary": 17,
    "unlockedlevel": 59,
    "tier": 2,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 73,
            "tendency": 31
        },
        "dunk": {
            "value": 75,
            "tendency": 3
        },
        "midrange": {
            "value": 79,
            "tendency": 29
        },
        "outside": {
            "value": 76,
            "tendency": 40
        },
        "drawfoul": 66,
        "freethrow": 86,
        "interior": 60,
        "perimeter": 75,
        "offensiverebound": 60,
        "defensiverebound": 66,
        "speed": 85,
        "vertical": 74,
        "strength": 69,
        "hands": 85,
        "stamina": 95,
        "hustle": 84,
        "passing": 84,
        "steal": 60,
        "block": 46,
        "offensiveconsistency": 80,
        "defensiveconsistency": 70
    },
    "position": "PG",
    "fgaintensity": 1,
    "fgaaverage": 14,
    "color1": "#ffffff",
    "color2": "#e0e0e0",
    "color3": "#1d1311",
    "image": "williams_deron_brooklyn_nets"
}, {
    "id": "0196",
    "type": "player",
    "first": "Kelly",
    "last": "Oubre Jr",
    "height": "6-7",
    "weight": "205",
    "number": 12,
    "country": "United States",
    "team": "Washington Wizards",
    "conference": "Eastern Conference",
    "season": "2017-2018",
    "salary": 3,
    "unlockedlevel": 48,
    "tier": 3,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 70,
            "tendency": 39
        },
        "dunk": {
            "value": 75,
            "tendency": 3
        },
        "midrange": {
            "value": 69,
            "tendency": 14
        },
        "outside": {
            "value": 77,
            "tendency": 47
        },
        "drawfoul": 59,
        "freethrow": 82,
        "interior": 61,
        "perimeter": 71,
        "offensiverebound": 62,
        "defensiverebound": 70,
        "speed": 74,
        "vertical": 92,
        "strength": 55,
        "hands": 77,
        "stamina": 90,
        "hustle": 72,
        "passing": 59,
        "steal": 60,
        "block": 46,
        "offensiveconsistency": 57,
        "defensiveconsistency": 57
    },
    "position": "SF",
    "fgaintensity": 1,
    "fgaaverage": 10,
    "color1": "#ffffff",
    "color2": "#e8e8ef",
    "color3": "#303051",
    "image": "oubre_kelly_washington_wizards"
}, {
    "id": "0197",
    "type": "player",
    "first": "Shaquille",
    "last": "ONeal",
    "height": "7-1",
    "weight": "325",
    "number": 36,
    "country": "United States",
    "team": "Boston Celtics",
    "conference": "Eastern Conference",
    "season": "2010-2011",
    "salary": 1,
    "unlockedlevel": 36,
    "tier": 3,
    "rarity": "Rare",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 72,
            "tendency": 99
        },
        "dunk": {
            "value": 75,
            "tendency": 3
        },
        "midrange": {
            "value": 65,
            "tendency": 1
        },
        "outside": {
            "value": 67,
            "tendency": 0
        },
        "drawfoul": 61,
        "freethrow": 56,
        "interior": 78,
        "perimeter": 62,
        "offensiverebound": 66,
        "defensiverebound": 69,
        "speed": 64,
        "vertical": 70,
        "strength": 85,
        "hands": 81,
        "stamina": 86,
        "hustle": 69,
        "passing": 57,
        "steal": 48,
        "block": 57,
        "offensiveconsistency": 75,
        "defensiveconsistency": 75
    },
    "position": "C",
    "fgaintensity": 0,
    "fgaaverage": 5,
    "color1": "#258e62",
    "color2": "#226b3f",
    "color3": "#ffffff",
    "image": "oneal_shaquille_boston_celtics"
}, {
    "id": "0198",
    "type": "player",
    "first": "Dwyane",
    "last": "Wade",
    "height": "6-4",
    "weight": "220",
    "number": 3,
    "country": "United States",
    "team": "Chicago Bulls",
    "conference": "Eastern Conference",
    "season": "2016-2017",
    "salary": 23,
    "unlockedlevel": 52,
    "tier": 2,
    "rarity": "Rare",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 77,
            "tendency": 41
        },
        "dunk": {
            "value": 77,
            "tendency": 3
        },
        "midrange": {
            "value": 75,
            "tendency": 44
        },
        "outside": {
            "value": 71,
            "tendency": 15
        },
        "drawfoul": 66,
        "freethrow": 79,
        "interior": 68,
        "perimeter": 77,
        "offensiverebound": 65,
        "defensiverebound": 69,
        "speed": 79,
        "vertical": 72,
        "strength": 62,
        "hands": 84,
        "stamina": 91,
        "hustle": 81,
        "passing": 69,
        "steal": 68,
        "block": 51,
        "offensiveconsistency": 71,
        "defensiveconsistency": 76
    },
    "position": "SG",
    "fgaintensity": 1,
    "fgaaverage": 16,
    "color1": "#ffffff",
    "color2": "#f4eaea",
    "color3": "#000000",
    "image": "wade_dwyane_chicago_bulls"
}, {
    "id": "0199",
    "type": "player",
    "first": "Jason",
    "last": "Kidd",
    "height": "6-4",
    "weight": "205",
    "number": 5,
    "country": "United States",
    "team": "New Jersey Nets",
    "conference": "Eastern Conference",
    "season": "2002-2003",
    "salary": 9,
    "unlockedlevel": 67,
    "tier": 1,
    "rarity": "Rare",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 72,
            "tendency": 29
        },
        "dunk": {
            "value": 55,
            "tendency": 0
        },
        "midrange": {
            "value": 81,
            "tendency": 41
        },
        "outside": {
            "value": 72,
            "tendency": 30
        },
        "drawfoul": 67,
        "freethrow": 84,
        "interior": 70,
        "perimeter": 94,
        "offensiverebound": 66,
        "defensiverebound": 75,
        "speed": 94,
        "vertical": 82,
        "strength": 70,
        "hands": 95,
        "stamina": 96,
        "hustle": 90,
        "passing": 88,
        "steal": 85,
        "block": 45,
        "offensiveconsistency": 95,
        "defensiveconsistency": 95
    },
    "position": "PG",
    "fgaintensity": 1,
    "fgaaverage": 16,
    "color1": "#2d3763",
    "color2": "#161015",
    "color3": "#9da6ab",
    "image": "kidd_jason_newjersey_nets"
}, {
    "id": "0200",
    "type": "player",
    "first": "Vince",
    "last": "Carter",
    "height": "6-6",
    "weight": "220",
    "number": 15,
    "country": "United States",
    "team": "New Jersey Nets",
    "conference": "Eastern Conference",
    "season": "2006-2007",
    "salary": 15,
    "unlockedlevel": 79,
    "tier": 1,
    "rarity": "Rare",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 76,
            "tendency": 40
        },
        "dunk": {
            "value": 98,
            "tendency": 4
        },
        "midrange": {
            "value": 80,
            "tendency": 29
        },
        "outside": {
            "value": 77,
            "tendency": 27
        },
        "drawfoul": 75,
        "freethrow": 80,
        "interior": 60,
        "perimeter": 80,
        "offensiverebound": 66,
        "defensiverebound": 73,
        "speed": 89,
        "vertical": 98,
        "strength": 57,
        "hands": 98,
        "stamina": 96,
        "hustle": 90,
        "passing": 72,
        "steal": 60,
        "block": 46,
        "offensiveconsistency": 95,
        "defensiveconsistency": 80
    },
    "position": "SG",
    "fgaintensity": 2,
    "fgaaverage": 20,
    "color1": "#ffffff",
    "color2": "#edf0f4",
    "color3": "#252b38",
    "image": "carter_vince_newjersey_nets"
}, {
    "id": "0201",
    "type": "player",
    "first": "Markelle",
    "last": "Fultz",
    "height": "6-4",
    "weight": "195",
    "number": 20,
    "country": "United States",
    "team": "Philadelphia 76ers",
    "conference": "Eastern Conference",
    "season": "2017-2018",
    "salary": 7,
    "unlockedlevel": 57,
    "tier": 3,
    "rarity": "Rare",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 73,
            "tendency": 69
        },
        "dunk": {
            "value": 56,
            "tendency": 3
        },
        "midrange": {
            "value": 66,
            "tendency": 27
        },
        "outside": {
            "value": 67,
            "tendency": 1
        },
        "drawfoul": 53,
        "freethrow": 48,
        "interior": 61,
        "perimeter": 64,
        "offensiverebound": 63,
        "defensiverebound": 65,
        "speed": 86,
        "vertical": 83,
        "strength": 54,
        "hands": 78,
        "stamina": 85,
        "hustle": 72,
        "passing": 69,
        "steal": 58,
        "block": 45,
        "offensiveconsistency": 79,
        "defensiveconsistency": 67
    },
    "position": "SG",
    "fgaintensity": 0,
    "fgaaverage": 8,
    "color1": "#ffffff",
    "color2": "#f7ecdf",
    "color3": "#293f78",
    "image": "fultz_markelle_philadelphia_sixers"
}, {
    "id": "0202",
    "type": "player",
    "first": "Russell",
    "last": "Westbrook",
    "height": "6-3",
    "weight": "200",
    "number": 0,
    "country": "United States",
    "team": "Oklahoma City Thunder",
    "conference": "Western Conference",
    "season": "2017-2018",
    "salary": 29,
    "unlockedlevel": 89,
    "tier": 1,
    "rarity": "Rare",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 78,
            "tendency": 42
        },
        "dunk": {
            "value": 90,
            "tendency": 3
        },
        "midrange": {
            "value": 77,
            "tendency": 36
        },
        "outside": {
            "value": 75,
            "tendency": 19
        },
        "drawfoul": 75,
        "freethrow": 74,
        "interior": 73,
        "perimeter": 62,
        "offensiverebound": 69,
        "defensiverebound": 87,
        "speed": 96,
        "vertical": 92,
        "strength": 77,
        "hands": 98,
        "stamina": 95,
        "hustle": 98,
        "passing": 94,
        "steal": 77,
        "block": 45,
        "offensiveconsistency": 95,
        "defensiveconsistency": 85
    },
    "position": "PG",
    "fgaintensity": 2,
    "fgaaverage": 21,
    "color1": "#ffffff",
    "color2": "#e4eff4",
    "color3": "#2d3751",
    "image": "westbrook_russell_oklahomacity_thunder"
}, {
    "id": "0203",
    "type": "player",
    "first": "Smush",
    "last": "Parker",
    "height": "6-4",
    "weight": "190",
    "number": 1,
    "country": "United States",
    "team": "Los Angeles Lakers",
    "conference": "Western Conference",
    "season": "2005-2006",
    "salary": 1,
    "unlockedlevel": 9,
    "tier": 3,
    "rarity": "Rare",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 71,
            "tendency": 37
        },
        "dunk": {
            "value": 69,
            "tendency": 4
        },
        "midrange": {
            "value": 71,
            "tendency": 17
        },
        "outside": {
            "value": 75,
            "tendency": 42
        },
        "drawfoul": 56,
        "freethrow": 69,
        "interior": 61,
        "perimeter": 65,
        "offensiverebound": 61,
        "defensiverebound": 67,
        "speed": 80,
        "vertical": 78,
        "strength": 72,
        "hands": 75,
        "stamina": 94,
        "hustle": 82,
        "passing": 68,
        "steal": 75,
        "block": 43,
        "offensiveconsistency": 70,
        "defensiveconsistency": 65
    },
    "position": "PG",
    "fgaintensity": 0,
    "fgaaverage": 10,
    "color1": "#ffffff",
    "color2": "#e6e4ed",
    "color3": "#43276b",
    "image": "parker_smush_losangeles_lakers"
}, {
    "id": "0204",
    "type": "player",
    "first": "Tim",
    "last": "Duncan",
    "height": "6-11",
    "weight": "250",
    "number": 21,
    "country": "United States",
    "team": "San Antonio Spurs",
    "conference": "Western Conference",
    "season": "2014-2015",
    "salary": 10,
    "unlockedlevel": 87,
    "tier": 1,
    "rarity": "Epic",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 77,
            "tendency": 65
        },
        "dunk": {
            "value": 75,
            "tendency": 6
        },
        "midrange": {
            "value": 68,
            "tendency": 28
        },
        "outside": {
            "value": 67,
            "tendency": 1
        },
        "drawfoul": 63,
        "freethrow": 74,
        "interior": 94,
        "perimeter": 88,
        "offensiverebound": 71,
        "defensiverebound": 82,
        "speed": 80,
        "vertical": 78,
        "strength": 96,
        "hands": 92,
        "stamina": 91,
        "hustle": 85,
        "passing": 66,
        "steal": 56,
        "block": 70,
        "offensiveconsistency": 95,
        "defensiveconsistency": 90
    },
    "position": "C/PF",
    "fgaintensity": 1,
    "fgaaverage": 11,
    "color1": "#ffffff",
    "color2": "#dad9e2",
    "color3": "#131112",
    "image": "duncan_tim_sanantonio_spurs"
}, {
    "id": "0205",
    "type": "player",
    "first": "OJ",
    "last": "Mayo",
    "height": "6-5",
    "weight": "210",
    "number": 32,
    "country": "United States",
    "team": "Memphis Grizzlies",
    "conference": "Western Conference",
    "season": "2009-2010",
    "salary": 4,
    "unlockedlevel": 57,
    "tier": 2,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 73,
            "tendency": 34
        },
        "dunk": {
            "value": 55,
            "tendency": 2
        },
        "midrange": {
            "value": 80,
            "tendency": 34
        },
        "outside": {
            "value": 73,
            "tendency": 30
        },
        "drawfoul": 60,
        "freethrow": 81,
        "interior": 61,
        "perimeter": 70,
        "offensiverebound": 62,
        "defensiverebound": 67,
        "speed": 87,
        "vertical": 88,
        "strength": 48,
        "hands": 95,
        "stamina": 96,
        "hustle": 65,
        "passing": 66,
        "steal": 64,
        "block": 43,
        "offensiveconsistency": 90,
        "defensiveconsistency": 55
    },
    "position": "SG",
    "fgaintensity": 1,
    "fgaaverage": 14,
    "color1": "#2b3e5b",
    "color2": "#091021",
    "color3": "#f2d216",
    "image": "mayo_oj_memphis_grizzlies"
}, {
    "id": "0206",
    "type": "player",
    "first": "Allen",
    "last": "Iverson",
    "height": "6-0",
    "weight": "165",
    "number": 3,
    "country": "United States",
    "team": "Memphis Grizzlies",
    "conference": "Western Conference",
    "season": "2009-2010",
    "salary": 1,
    "unlockedlevel": 3,
    "tier": 2,
    "rarity": "Legendary",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 72,
            "tendency": 31
        },
        "dunk": {
            "value": 33,
            "tendency": 0
        },
        "midrange": {
            "value": 77,
            "tendency": 65
        },
        "outside": {
            "value": 69,
            "tendency": 4
        },
        "drawfoul": 66,
        "freethrow": 79,
        "interior": 62,
        "perimeter": 60,
        "offensiverebound": 62,
        "defensiverebound": 65,
        "speed": 88,
        "vertical": 80,
        "strength": 66,
        "hands": 91,
        "stamina": 92,
        "hustle": 69,
        "passing": 69,
        "steal": 54,
        "block": 42,
        "offensiveconsistency": 89,
        "defensiveconsistency": 57
    },
    "position": "PG",
    "fgaintensity": 1,
    "fgaaverage": 11,
    "color1": "#cee3f4",
    "color2": "#768cac",
    "color3": "#202139",
    "image": "iverson_allen_memphis_grizzlies"
}, {
    "id": "0207",
    "type": "player",
    "first": "David",
    "last": "West",
    "height": "6-9",
    "weight": "250",
    "number": 30,
    "country": "United States",
    "team": "New Orleans Hornets",
    "conference": "Western Conference",
    "season": "2007-2008",
    "salary": 11,
    "unlockedlevel": 65,
    "tier": 2,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 79,
            "tendency": 49
        },
        "dunk": {
            "value": 70,
            "tendency": 1
        },
        "midrange": {
            "value": 78,
            "tendency": 48
        },
        "outside": {
            "value": 67,
            "tendency": 2
        },
        "drawfoul": 65,
        "freethrow": 85,
        "interior": 88,
        "perimeter": 78,
        "offensiverebound": 72,
        "defensiverebound": 80,
        "speed": 72,
        "vertical": 70,
        "strength": 95,
        "hands": 78,
        "stamina": 96,
        "hustle": 90,
        "passing": 63,
        "steal": 56,
        "block": 60,
        "offensiveconsistency": 90,
        "defensiveconsistency": 85
    },
    "position": "PF",
    "fgaintensity": 2,
    "fgaaverage": 17,
    "color1": "#f9d562",
    "color2": "#fcc247",
    "color3": "#483e82",
    "image": "west_david_neworleans_hornets"
}, {
    "id": "0208",
    "type": "player",
    "first": "Andre",
    "last": "Drummond",
    "height": "6-11",
    "weight": "279",
    "number": 0,
    "country": "United States",
    "team": "Detroit Pistons",
    "conference": "Eastern Conference",
    "season": "2017-2018",
    "salary": 24,
    "unlockedlevel": 72,
    "tier": 2,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 77,
            "tendency": 76
        },
        "dunk": {
            "value": 70,
            "tendency": 17
        },
        "midrange": {
            "value": 65,
            "tendency": 6
        },
        "outside": {
            "value": 67,
            "tendency": 1
        },
        "drawfoul": 67,
        "freethrow": 61,
        "interior": 85,
        "perimeter": 70,
        "offensiverebound": 89,
        "defensiverebound": 97,
        "speed": 70,
        "vertical": 72,
        "strength": 91,
        "hands": 77,
        "stamina": 94,
        "hustle": 88,
        "passing": 66,
        "steal": 71,
        "block": 64,
        "offensiveconsistency": 80,
        "defensiveconsistency": 85
    },
    "position": "C",
    "fgaintensity": 1,
    "fgaaverage": 11,
    "color1": "#3a4384",
    "color2": "#1d2042",
    "color3": "#ffffff",
    "image": "drummond_andre_detroit_pistons"
}, {
    "id": "0209",
    "type": "player",
    "first": "Ben",
    "last": "Simmons",
    "height": "6-10",
    "weight": "230",
    "number": 25,
    "country": "United States",
    "team": "Philadelphia 76ers",
    "conference": "Eastern Conference",
    "season": "2017-2018",
    "salary": 6,
    "unlockedlevel": 77,
    "tier": 2,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 79,
            "tendency": 63
        },
        "dunk": {
            "value": 88,
            "tendency": 16
        },
        "midrange": {
            "value": 66,
            "tendency": 20
        },
        "outside": {
            "value": 67,
            "tendency": 1
        },
        "drawfoul": 64,
        "freethrow": 56,
        "interior": 80,
        "perimeter": 77,
        "offensiverebound": 69,
        "defensiverebound": 80,
        "speed": 77,
        "vertical": 79,
        "strength": 81,
        "hands": 80,
        "stamina": 94,
        "hustle": 87,
        "passing": 86,
        "steal": 75,
        "block": 54,
        "offensiveconsistency": 82,
        "defensiveconsistency": 80
    },
    "position": "PG",
    "fgaintensity": 1,
    "fgaaverage": 12,
    "color1": "#e25252",
    "color2": "#961e1e",
    "color3": "#ffffff",
    "image": "simmons_ben_philadelphia_sixers"
}, {
    "id": "0210",
    "type": "player",
    "first": "Pau",
    "last": "Gasol",
    "height": "7-0",
    "weight": "250",
    "number": 16,
    "country": "United States",
    "team": "Memphis Grizzlies",
    "conference": "Western Conference",
    "season": "2001-2002",
    "salary": 3,
    "unlockedlevel": 56,
    "tier": 2,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 79,
            "tendency": 63
        },
        "dunk": {
            "value": 81,
            "tendency": 17
        },
        "midrange": {
            "value": 67,
            "tendency": 19
        },
        "outside": {
            "value": 67,
            "tendency": 1
        },
        "drawfoul": 70,
        "freethrow": 71,
        "interior": 84,
        "perimeter": 72,
        "offensiverebound": 75,
        "defensiverebound": 78,
        "speed": 74,
        "vertical": 77,
        "strength": 82,
        "hands": 88,
        "stamina": 95,
        "hustle": 90,
        "passing": 64,
        "steal": 50,
        "block": 72,
        "offensiveconsistency": 86,
        "defensiveconsistency": 77
    },
    "position": "C",
    "fgaintensity": 1,
    "fgaaverage": 13,
    "color1": "#3f77a3",
    "color2": "#1d1a1d",
    "color3": "#ffffff",
    "image": "gasol_pau_memphis_grizzlies"
}, {
    "id": "0211",
    "type": "player",
    "first": "Bruce",
    "last": "Bowen",
    "height": "6-7",
    "weight": "185",
    "number": 12,
    "country": "United States",
    "team": "San Antonio Spurs",
    "conference": "Western Conference",
    "season": "2002-2003",
    "salary": 4,
    "unlockedlevel": 21,
    "tier": 2,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 69,
            "tendency": 28
        },
        "dunk": {
            "value": 64,
            "tendency": 1
        },
        "midrange": {
            "value": 75,
            "tendency": 23
        },
        "outside": {
            "value": 68,
            "tendency": 48
        },
        "drawfoul": 51,
        "freethrow": 40,
        "interior": 87,
        "perimeter": 92,
        "offensiverebound": 62,
        "defensiverebound": 64,
        "speed": 75,
        "vertical": 79,
        "strength": 81,
        "hands": 90,
        "stamina": 92,
        "hustle": 91,
        "passing": 59,
        "steal": 56,
        "block": 48,
        "offensiveconsistency": 59,
        "defensiveconsistency": 90
    },
    "position": "SF",
    "fgaintensity": 0,
    "fgaaverage": 6,
    "color1": "#282828",
    "color2": "#070c08",
    "color3": "#ffffff",
    "image": "bowen_bruce_sanantonio_spurs"
}, {
    "id": "0212",
    "type": "player",
    "first": "Dwyane",
    "last": "Wade",
    "height": "6-4",
    "weight": "220",
    "number": 3,
    "country": "United States",
    "team": "Miami Heat",
    "conference": "Eastern Conference",
    "season": "2017-2018",
    "salary": 1,
    "unlockedlevel": 17,
    "tier": 3,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 73,
            "tendency": 43
        },
        "dunk": {
            "value": 71,
            "tendency": 3
        },
        "midrange": {
            "value": 70,
            "tendency": 37
        },
        "outside": {
            "value": 71,
            "tendency": 17
        },
        "drawfoul": 58,
        "freethrow": 71,
        "interior": 68,
        "perimeter": 73,
        "offensiverebound": 62,
        "defensiverebound": 67,
        "speed": 77,
        "vertical": 80,
        "strength": 77,
        "hands": 86,
        "stamina": 88,
        "hustle": 77,
        "passing": 67,
        "steal": 58,
        "block": 51,
        "offensiveconsistency": 65,
        "defensiveconsistency": 65
    },
    "position": "SG",
    "fgaintensity": 1,
    "fgaaverage": 10,
    "color1": "#ffffff",
    "color2": "#dcebef",
    "color3": "#e7579f",
    "image": "wade_dwyane_miami_heat"
}, {
    "id": "0213",
    "type": "player",
    "first": "Andrew",
    "last": "Wiggins",
    "height": "6-8",
    "weight": "199",
    "number": 22,
    "country": "United States",
    "team": "Minnesota Timberwolves",
    "conference": "Western Conference",
    "season": "2017-2018",
    "salary": 8,
    "unlockedlevel": 61,
    "tier": 2,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 76,
            "tendency": 37
        },
        "dunk": {
            "value": 82,
            "tendency": 4
        },
        "midrange": {
            "value": 74,
            "tendency": 33
        },
        "outside": {
            "value": 75,
            "tendency": 26
        },
        "drawfoul": 62,
        "freethrow": 64,
        "interior": 69,
        "perimeter": 75,
        "offensiverebound": 64,
        "defensiverebound": 69,
        "speed": 79,
        "vertical": 85,
        "strength": 72,
        "hands": 84,
        "stamina": 95,
        "hustle": 80,
        "passing": 62,
        "steal": 62,
        "block": 49,
        "offensiveconsistency": 75,
        "defensiveconsistency": 71
    },
    "position": "SF/SG",
    "fgaintensity": 1,
    "fgaaverage": 16,
    "color1": "#a6e080",
    "color2": "#66af43",
    "color3": "#ffffff",
    "image": "wiggins_andrew_minnesota_timberwolves"
}, {
    "id": "0214",
    "type": "player",
    "first": "Harrison",
    "last": "Barnes",
    "height": "6-8",
    "weight": "210",
    "number": 40,
    "country": "United States",
    "team": "Dallas Mavericks",
    "conference": "Western Conference",
    "season": "2017-2018",
    "salary": 23,
    "unlockedlevel": 63,
    "tier": 2,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 76,
            "tendency": 40
        },
        "dunk": {
            "value": 83,
            "tendency": 2
        },
        "midrange": {
            "value": 76,
            "tendency": 31
        },
        "outside": {
            "value": 75,
            "tendency": 27
        },
        "drawfoul": 63,
        "freethrow": 83,
        "interior": 74,
        "perimeter": 75,
        "offensiverebound": 64,
        "defensiverebound": 75,
        "speed": 80,
        "vertical": 82,
        "strength": 73,
        "hands": 80,
        "stamina": 94,
        "hustle": 84,
        "passing": 62,
        "steal": 52,
        "block": 43,
        "offensiveconsistency": 77,
        "defensiveconsistency": 73
    },
    "position": "SF/PF",
    "fgaintensity": 1,
    "fgaaverage": 16,
    "color1": "#3d3836",
    "color2": "#120d0b",
    "color3": "#ffffff",
    "image": "barnes_harrison_dallas_mavericks"
}, {
    "id": "0215",
    "type": "player",
    "first": "Cory",
    "last": "Joseph",
    "height": "6-3",
    "weight": "193",
    "number": 6,
    "country": "United States",
    "team": "Indiana Pacers",
    "conference": "Eastern Conference",
    "season": "2017-2018",
    "salary": 8,
    "unlockedlevel": 57,
    "tier": 3,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 70,
            "tendency": 28
        },
        "dunk": {
            "value": 42,
            "tendency": 0
        },
        "midrange": {
            "value": 71,
            "tendency": 40
        },
        "outside": {
            "value": 72,
            "tendency": 32
        },
        "drawfoul": 51,
        "freethrow": 75,
        "interior": 69,
        "perimeter": 78,
        "offensiverebound": 61,
        "defensiverebound": 66,
        "speed": 84,
        "vertical": 66,
        "strength": 70,
        "hands": 76,
        "stamina": 90,
        "hustle": 87,
        "passing": 66,
        "steal": 60,
        "block": 43,
        "offensiveconsistency": 70,
        "defensiveconsistency": 73
    },
    "position": "PG/SG",
    "fgaintensity": 1,
    "fgaaverage": 7,
    "color1": "#ffe578",
    "color2": "#f2c819",
    "color3": "#2a2e4b",
    "image": "joseph_cory_indiana_pacers"
}, {
    "id": "0216",
    "type": "player",
    "first": "Mehmet",
    "last": "Okur",
    "height": "6-11",
    "weight": "249",
    "number": 12,
    "country": "Turkey",
    "team": "Utah Jazz",
    "conference": "Western Conference",
    "season": "2006-2007",
    "salary": 8,
    "unlockedlevel": 59,
    "tier": 2,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 73,
            "tendency": 32
        },
        "dunk": {
            "value": 78,
            "tendency": 2
        },
        "midrange": {
            "value": 80,
            "tendency": 34
        },
        "outside": {
            "value": 74,
            "tendency": 32
        },
        "drawfoul": 66,
        "freethrow": 77,
        "interior": 79,
        "perimeter": 67,
        "offensiverebound": 70,
        "defensiverebound": 75,
        "speed": 66,
        "vertical": 64,
        "strength": 78,
        "hands": 79,
        "stamina": 93,
        "hustle": 85,
        "passing": 62,
        "steal": 50,
        "block": 48,
        "offensiveconsistency": 81,
        "defensiveconsistency": 71
    },
    "position": "PF/C",
    "fgaintensity": 1,
    "fgaaverage": 13,
    "color1": "#6ba9ed",
    "color2": "#4785d4",
    "color3": "#ffffff",
    "image": "okur_mehmet_utah_jazz"
}, {
    "id": "0217",
    "type": "player",
    "first": "Dikembe",
    "last": "Mutombo",
    "height": "7-2",
    "weight": "245",
    "number": 55,
    "country": "Congo",
    "team": "Atlanta Hawks",
    "conference": "Eastern Conference",
    "season": "1999-2000",
    "salary": 13,
    "unlockedlevel": 89,
    "tier": 0,
    "rarity": "Legendary",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 74,
            "tendency": 81
        },
        "dunk": {
            "value": 84,
            "tendency": 88
        },
        "midrange": {
            "value": 65,
            "tendency": 77
        },
        "outside": {
            "value": 67,
            "tendency": 0
        },
        "drawfoul": 67,
        "freethrow": 71,
        "interior": 95,
        "perimeter": 81,
        "offensiverebound": 80,
        "defensiverebound": 95,
        "speed": 71,
        "vertical": 77,
        "strength": 88,
        "hands": 82,
        "stamina": 95,
        "hustle": 88,
        "passing": 59,
        "steal": 46,
        "block": 90,
        "offensiveconsistency": 70,
        "defensiveconsistency": 95
    },
    "position": "C",
    "fgaintensity": 0,
    "fgaaverage": 7,
    "color1": "#10060e",
    "color2": "#d1373f",
    "color3": "#ffffff",
    "image": "mutombo_dikembe_atlanta_hawks"
}, {
    "id": "0218",
    "type": "player",
    "first": "Stephen",
    "last": "Curry",
    "height": "6-3",
    "weight": "190",
    "number": 30,
    "country": "United States",
    "team": "Golden State Warriors",
    "conference": "Western Conference",
    "season": "2009-2010",
    "salary": 3,
    "unlockedlevel": 30,
    "tier": 2,
    "rarity": "Rare",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 72,
            "tendency": 27
        },
        "dunk": {
            "value": 64,
            "tendency": 0
        },
        "midrange": {
            "value": 81,
            "tendency": 40
        },
        "outside": {
            "value": 80,
            "tendency": 33
        },
        "drawfoul": 57,
        "freethrow": 89,
        "interior": 61,
        "perimeter": 69,
        "offensiverebound": 62,
        "defensiverebound": 71,
        "speed": 83,
        "vertical": 73,
        "strength": 68,
        "hands": 88,
        "stamina": 95,
        "hustle": 85,
        "passing": 77,
        "steal": 79,
        "block": 43,
        "offensiveconsistency": 89,
        "defensiveconsistency": 64
    },
    "position": "PG",
    "fgaintensity": 1,
    "fgaaverage": 14,
    "color1": "#9b342c",
    "color2": "#ef603f",
    "color3": "#ffffff",
    "image": "curry_stephen_goldenstate_warriors"
}, {
    "id": "0219",
    "type": "player",
    "first": "Danny",
    "last": "Granger",
    "height": "6-9",
    "weight": "222",
    "number": 33,
    "country": "United States",
    "team": "Indiana Pacers",
    "conference": "Eastern Conference",
    "season": "2008-2009",
    "salary": 3,
    "unlockedlevel": 33,
    "tier": 2,
    "rarity": "Rare",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 74,
            "tendency": 29
        },
        "dunk": {
            "value": 77,
            "tendency": 1
        },
        "midrange": {
            "value": 80,
            "tendency": 35
        },
        "outside": {
            "value": 87,
            "tendency": 35
        },
        "drawfoul": 74,
        "freethrow": 88,
        "interior": 71,
        "perimeter": 72,
        "offensiverebound": 62,
        "defensiverebound": 72,
        "speed": 78,
        "vertical": 78,
        "strength": 76,
        "hands": 81,
        "stamina": 95,
        "hustle": 74,
        "passing": 64,
        "steal": 60,
        "block": 61,
        "offensiveconsistency": 81,
        "defensiveconsistency": 74
    },
    "position": "SF/PF",
    "fgaintensity": 2,
    "fgaaverage": 19,
    "color1": "#3b4363",
    "color2": "#0f1720",
    "color3": "#f7c841",
    "image": "granger_danny_indiana_pacers"
}, {
    "id": "0220",
    "type": "player",
    "first": "DeMarcus",
    "last": "Cousins",
    "height": "6-11",
    "weight": "270",
    "number": 15,
    "country": "United States",
    "team": "Sacramento Kings",
    "conference": "Western Conference",
    "season": "2016-2017",
    "salary": 15,
    "unlockedlevel": 77,
    "tier": 1,
    "rarity": "Epic",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 79,
            "tendency": 51
        },
        "dunk": {
            "value": 83,
            "tendency": 4
        },
        "midrange": {
            "value": 74,
            "tendency": 21
        },
        "outside": {
            "value": 73,
            "tendency": 24
        },
        "drawfoul": 84,
        "freethrow": 77,
        "interior": 79,
        "perimeter": 76,
        "offensiverebound": 71,
        "defensiverebound": 90,
        "speed": 78,
        "vertical": 71,
        "strength": 88,
        "hands": 86,
        "stamina": 94,
        "hustle": 70,
        "passing": 72,
        "steal": 68,
        "block": 60,
        "offensiveconsistency": 86,
        "defensiveconsistency": 79
    },
    "position": "C/PF",
    "fgaintensity": 2,
    "fgaaverage": 20,
    "color1": "#4c485b",
    "color2": "#151516",
    "color3": "#ffffff",
    "image": "cousins_demarcus_sacramento_kings"
}, {
    "id": "0221",
    "type": "player",
    "first": "Jusuf",
    "last": "Nurkic",
    "height": "7-0",
    "weight": "280",
    "number": 27,
    "country": "Bosnia and Herzegovina",
    "team": "Portland Trail Blazers",
    "conference": "Western Conference",
    "season": "2017-2018",
    "salary": 3,
    "unlockedlevel": 27,
    "tier": 3,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 77,
            "tendency": 70
        },
        "dunk": {
            "value": 79,
            "tendency": 7
        },
        "midrange": {
            "value": 69,
            "tendency": 22
        },
        "outside": {
            "value": 67,
            "tendency": 1
        },
        "drawfoul": 61,
        "freethrow": 63,
        "interior": 75,
        "perimeter": 71,
        "offensiverebound": 72,
        "defensiverebound": 81,
        "speed": 70,
        "vertical": 74,
        "strength": 82,
        "hands": 84,
        "stamina": 89,
        "hustle": 77,
        "passing": 61,
        "steal": 56,
        "block": 61,
        "offensiveconsistency": 79,
        "defensiveconsistency": 74
    },
    "position": "C",
    "fgaintensity": 1,
    "fgaaverage": 12,
    "color1": "#f93543",
    "color2": "#840615",
    "color3": "#ffffff",
    "image": "nurkic_jusuf_portland_trailblazers"
}, {
    "id": "0222",
    "type": "player",
    "first": "LaMarcus",
    "last": "Aldridge",
    "height": "6-11",
    "weight": "260",
    "number": 12,
    "country": "United States",
    "team": "Portland Trail Blazers",
    "conference": "Western Conference",
    "season": "2013-2014",
    "salary": 14,
    "unlockedlevel": 86,
    "tier": 1,
    "rarity": "Rare",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 79,
            "tendency": 32
        },
        "dunk": {
            "value": 77,
            "tendency": 3
        },
        "midrange": {
            "value": 85,
            "tendency": 64
        },
        "outside": {
            "value": 67,
            "tendency": 1
        },
        "drawfoul": 68,
        "freethrow": 82,
        "interior": 76,
        "perimeter": 72,
        "offensiverebound": 72,
        "defensiverebound": 89,
        "speed": 76,
        "vertical": 74,
        "strength": 84,
        "hands": 88,
        "stamina": 95,
        "hustle": 78,
        "passing": 64,
        "steal": 58,
        "block": 55,
        "offensiveconsistency": 88,
        "defensiveconsistency": 75
    },
    "position": "PF/C",
    "fgaintensity": 2,
    "fgaaverage": 21,
    "color1": "#dbdad9",
    "color2": "#ffffff",
    "color3": "#1e1c1d",
    "image": "aldridge_lamarcus_portland_trailblazers"
}, {
    "id": "0223",
    "type": "player",
    "first": "Brandon",
    "last": "Jennings",
    "height": "6-1",
    "weight": "170",
    "number": 3,
    "country": "United States",
    "team": "Milwaukee Bucks",
    "conference": "Eastern Conference",
    "season": "2009-2010",
    "salary": 2,
    "unlockedlevel": 66,
    "tier": 3,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 72,
            "tendency": 34
        },
        "dunk": {
            "value": 54,
            "tendency": 0
        },
        "midrange": {
            "value": 74,
            "tendency": 34
        },
        "outside": {
            "value": 80,
            "tendency": 32
        },
        "drawfoul": 60,
        "freethrow": 82,
        "interior": 62,
        "perimeter": 70,
        "offensiverebound": 62,
        "defensiverebound": 66,
        "speed": 87,
        "vertical": 75,
        "strength": 66,
        "hands": 87,
        "stamina": 93,
        "hustle": 81,
        "passing": 76,
        "steal": 66,
        "block": 43,
        "offensiveconsistency": 85,
        "defensiveconsistency": 67
    },
    "position": "PG",
    "fgaintensity": 1,
    "fgaaverage": 15,
    "color1": "#4b7756",
    "color2": "#1c301e",
    "color3": "#ffffff",
    "image": "jennings_brandon_milwaukee_bucks"
}, {
    "id": "0224",
    "type": "player",
    "first": "Al",
    "last": "Horford",
    "height": "6-10",
    "weight": "245",
    "number": 15,
    "country": "United States",
    "team": "Atlanta Hawks",
    "conference": "Eastern Conference",
    "season": "2010-2011",
    "salary": 5,
    "unlockedlevel": 78,
    "tier": 2,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 76,
            "tendency": 40
        },
        "dunk": {
            "value": 80,
            "tendency": 7
        },
        "midrange": {
            "value": 77,
            "tendency": 52
        },
        "outside": {
            "value": 67,
            "tendency": 1
        },
        "drawfoul": 56,
        "freethrow": 80,
        "interior": 81,
        "perimeter": 72,
        "offensiverebound": 72,
        "defensiverebound": 82,
        "speed": 83,
        "vertical": 77,
        "strength": 79,
        "hands": 88,
        "stamina": 94,
        "hustle": 88,
        "passing": 67,
        "steal": 56,
        "block": 55,
        "offensiveconsistency": 85,
        "defensiveconsistency": 85
    },
    "position": "C/PF",
    "fgaintensity": 1,
    "fgaaverage": 12,
    "color1": "#121222",
    "color2": "#1e2447",
    "color3": "#ffffff",
    "image": "horford_al_atlanta_hawks"
}, {
    "id": "0225",
    "type": "player",
    "first": "Al",
    "last": "Horford",
    "height": "6-10",
    "weight": "245",
    "number": 42,
    "country": "United States",
    "team": "Boston Celtics",
    "conference": "Eastern Conference",
    "season": "2017-2018",
    "salary": 28,
    "unlockedlevel": 69,
    "tier": 2,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 74,
            "tendency": 41
        },
        "dunk": {
            "value": 80,
            "tendency": 4
        },
        "midrange": {
            "value": 70,
            "tendency": 25
        },
        "outside": {
            "value": 77,
            "tendency": 30
        },
        "drawfoul": 54,
        "freethrow": 78,
        "interior": 79,
        "perimeter": 70,
        "offensiverebound": 66,
        "defensiverebound": 78,
        "speed": 81,
        "vertical": 75,
        "strength": 79,
        "hands": 88,
        "stamina": 92,
        "hustle": 90,
        "passing": 72,
        "steal": 52,
        "block": 57,
        "offensiveconsistency": 80,
        "defensiveconsistency": 80
    },
    "position": "C/PF",
    "fgaintensity": 1,
    "fgaaverage": 11,
    "color1": "#69c471",
    "color2": "#345e3a",
    "color3": "#dadbcc",
    "image": "horford_al_boston_celtics"
}, {
    "id": "0226",
    "type": "player",
    "first": "Delonte",
    "last": "West",
    "height": "6-4",
    "weight": "180",
    "number": 13,
    "country": "United States",
    "team": "Cleveland Cavaliers",
    "conference": "Eastern Conference",
    "season": "2008-2009",
    "salary": 4,
    "unlockedlevel": 17,
    "tier": 3,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 71,
            "tendency": 29
        },
        "dunk": {
            "value": 80,
            "tendency": 1
        },
        "midrange": {
            "value": 77,
            "tendency": 34
        },
        "outside": {
            "value": 71,
            "tendency": 36
        },
        "drawfoul": 54,
        "freethrow": 83,
        "interior": 63,
        "perimeter": 69,
        "offensiverebound": 61,
        "defensiverebound": 66,
        "speed": 83,
        "vertical": 74,
        "strength": 75,
        "hands": 81,
        "stamina": 83,
        "hustle": 88,
        "passing": 67,
        "steal": 71,
        "block": 43,
        "offensiveconsistency": 81,
        "defensiveconsistency": 70
    },
    "position": "SG/PG",
    "fgaintensity": 1,
    "fgaaverage": 10,
    "color1": "#4b0e0f",
    "color2": "#77282c",
    "color3": "#d6ba83",
    "image": "west_delonte_cleveland_cavaliers"
}, {
    "id": "0227",
    "type": "player",
    "first": "Tony",
    "last": "Allen",
    "height": "6-4",
    "weight": "213",
    "number": 9,
    "country": "United States",
    "team": "Memphis Grizzlies",
    "conference": "Western Conference",
    "season": "2010-2011",
    "salary": 3,
    "unlockedlevel": 24,
    "tier": 3,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 72,
            "tendency": 69
        },
        "dunk": {
            "value": 80,
            "tendency": 8
        },
        "midrange": {
            "value": 67,
            "tendency": 18
        },
        "outside": {
            "value": 67,
            "tendency": 5
        },
        "drawfoul": 57,
        "freethrow": 75,
        "interior": 88,
        "perimeter": 92,
        "offensiverebound": 64,
        "defensiverebound": 62,
        "speed": 78,
        "vertical": 81,
        "strength": 87,
        "hands": 85,
        "stamina": 86,
        "hustle": 95,
        "passing": 59,
        "steal": 77,
        "block": 49,
        "offensiveconsistency": 51,
        "defensiveconsistency": 90
    },
    "position": "SG",
    "fgaintensity": 0,
    "fgaaverage": 7,
    "color1": "#c1d8e0",
    "color2": "#a3b6c4",
    "color3": "#2f3247",
    "image": "allen_tony_memphis_grizzlies"
}, {
    "id": "0228",
    "type": "player",
    "first": "Tobias",
    "last": "Harris",
    "height": "6-9",
    "weight": "235",
    "number": 34,
    "country": "United States",
    "team": "Los Angeles Clippers",
    "conference": "Western Conference",
    "season": "2017-2018",
    "salary": 16,
    "unlockedlevel": 68,
    "tier": 2,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 76,
            "tendency": 39
        },
        "dunk": {
            "value": 78,
            "tendency": 3
        },
        "midrange": {
            "value": 73,
            "tendency": 25
        },
        "outside": {
            "value": 82,
            "tendency": 33
        },
        "drawfoul": 58,
        "freethrow": 83,
        "interior": 77,
        "perimeter": 80,
        "offensiverebound": 62,
        "defensiverebound": 74,
        "speed": 79,
        "vertical": 80,
        "strength": 85,
        "hands": 81,
        "stamina": 93,
        "hustle": 88,
        "passing": 63,
        "steal": 58,
        "block": 46,
        "offensiveconsistency": 82,
        "defensiveconsistency": 74
    },
    "position": "PF",
    "fgaintensity": 1,
    "fgaaverage": 15,
    "color1": "#97c9f7",
    "color2": "#609fd8",
    "color3": "#ffffff",
    "image": "harris_tobias_losangeles_clippers"
}, {
    "id": "0229",
    "type": "player",
    "first": "Milos",
    "last": "Teodosic",
    "height": "6-5",
    "weight": "196",
    "number": 4,
    "country": "Serbia",
    "team": "Los Angeles Clippers",
    "conference": "Western Conference",
    "season": "2017-2018",
    "salary": 6,
    "unlockedlevel": 12,
    "tier": 3,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 68,
            "tendency": 10
        },
        "dunk": {
            "value": 50,
            "tendency": 0
        },
        "midrange": {
            "value": 72,
            "tendency": 26
        },
        "outside": {
            "value": 81,
            "tendency": 64
        },
        "drawfoul": 51,
        "freethrow": 85,
        "interior": 64,
        "perimeter": 75,
        "offensiverebound": 60,
        "defensiverebound": 65,
        "speed": 79,
        "vertical": 72,
        "strength": 70,
        "hands": 88,
        "stamina": 89,
        "hustle": 84,
        "passing": 72,
        "steal": 50,
        "block": 42,
        "offensiveconsistency": 72,
        "defensiveconsistency": 70
    },
    "position": "PG",
    "fgaintensity": 0,
    "fgaaverage": 8,
    "color1": "#454649",
    "color2": "#1e1e21",
    "color3": "#ffffff",
    "image": "teodosic_milos_losangeles_clippers"
}, {
    "id": "0230",
    "type": "player",
    "first": "DeAndre",
    "last": "Jordan",
    "height": "6-11",
    "weight": "265",
    "number": 6,
    "country": "United States",
    "team": "Los Angeles Clippers",
    "conference": "Western Conference",
    "season": "2017-2018",
    "salary": 22,
    "unlockedlevel": 78,
    "tier": 2,
    "rarity": "Rare",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 74,
            "tendency": 60
        },
        "dunk": {
            "value": 88,
            "tendency": 39
        },
        "midrange": {
            "value": 65,
            "tendency": 1
        },
        "outside": {
            "value": 67,
            "tendency": 0
        },
        "drawfoul": 63,
        "freethrow": 58,
        "interior": 85,
        "perimeter": 76,
        "offensiverebound": 84,
        "defensiverebound": 97,
        "speed": 75,
        "vertical": 95,
        "strength": 90,
        "hands": 81,
        "stamina": 92,
        "hustle": 82,
        "passing": 60,
        "steal": 50,
        "block": 54,
        "offensiveconsistency": 77,
        "defensiveconsistency": 74
    },
    "position": "C",
    "fgaintensity": 1,
    "fgaaverage": 8,
    "color1": "#5e92c3",
    "color2": "#7fbaf0",
    "color3": "#ffffff",
    "image": "jordan_deandre_losangeles_clippers"
}, {
    "id": "0231",
    "type": "player",
    "first": "Sam",
    "last": "Cassell",
    "height": "6-3",
    "weight": "185",
    "number": 19,
    "country": "United States",
    "team": "Minnesota Timberwolves",
    "conference": "Western Conference",
    "season": "2003-2004",
    "salary": 5,
    "unlockedlevel": 74,
    "tier": 2,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 76,
            "tendency": 19
        },
        "dunk": {
            "value": 65,
            "tendency": 0
        },
        "midrange": {
            "value": 85,
            "tendency": 66
        },
        "outside": {
            "value": 70,
            "tendency": 15
        },
        "drawfoul": 63,
        "freethrow": 87,
        "interior": 67,
        "perimeter": 78,
        "offensiverebound": 61,
        "defensiverebound": 66,
        "speed": 84,
        "vertical": 75,
        "strength": 71,
        "hands": 86,
        "stamina": 94,
        "hustle": 85,
        "passing": 82,
        "steal": 66,
        "block": 43,
        "offensiveconsistency": 83,
        "defensiveconsistency": 71
    },
    "position": "PG",
    "fgaintensity": 1,
    "fgaaverage": 16,
    "color1": "#333d35",
    "color2": "#0a0701",
    "color3": "#628c68",
    "image": "cassell_sam_minnesota_timberwolves"
}, {
    "id": "0232",
    "type": "player",
    "first": "James",
    "last": "Posey",
    "height": "6-8",
    "weight": "215",
    "number": 41,
    "country": "United States",
    "team": "New Orleans Hornets",
    "conference": "Western Conference",
    "season": "2008-2009",
    "salary": 6,
    "unlockedlevel": 21,
    "tier": 4,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 69,
            "tendency": 29
        },
        "dunk": {
            "value": 69,
            "tendency": 1
        },
        "midrange": {
            "value": 72,
            "tendency": 11
        },
        "outside": {
            "value": 72,
            "tendency": 59
        },
        "drawfoul": 55,
        "freethrow": 82,
        "interior": 67,
        "perimeter": 78,
        "offensiverebound": 61,
        "defensiverebound": 72,
        "speed": 77,
        "vertical": 77,
        "strength": 80,
        "hands": 80,
        "stamina": 91,
        "hustle": 85,
        "passing": 58,
        "steal": 56,
        "block": 45,
        "offensiveconsistency": 70,
        "defensiveconsistency": 70
    },
    "position": "SF/SG",
    "fgaintensity": 1,
    "fgaaverage": 7,
    "color1": "#30b7f2",
    "color2": "#116cb7",
    "color3": "#ffffff",
    "image": "posey_james_neworleans_hornets"
}, {
    "id": "0233",
    "type": "player",
    "first": "Tyson",
    "last": "Chandler",
    "height": "7-1",
    "weight": "240",
    "number": 6,
    "country": "United States",
    "team": "New Orleans Hornets",
    "conference": "Western Conference",
    "season": "2007-2008",
    "salary": 10,
    "unlockedlevel": 66,
    "tier": 2,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 75,
            "tendency": 97
        },
        "dunk": {
            "value": 80,
            "tendency": 32
        },
        "midrange": {
            "value": 65,
            "tendency": 3
        },
        "outside": {
            "value": 67,
            "tendency": 0
        },
        "drawfoul": 62,
        "freethrow": 59,
        "interior": 80,
        "perimeter": 75,
        "offensiverebound": 83,
        "defensiverebound": 85,
        "speed": 72,
        "vertical": 80,
        "strength": 88,
        "hands": 81,
        "stamina": 94,
        "hustle": 87,
        "passing": 58,
        "steal": 52,
        "block": 57,
        "offensiveconsistency": 76,
        "defensiveconsistency": 80
    },
    "position": "C",
    "fgaintensity": 1,
    "fgaaverage": 8,
    "color1": "#10acc6",
    "color2": "#017c9d",
    "color3": "#ffffff",
    "image": "chandler_tyson_neworleans_hornets"
}, {
    "id": "0234",
    "type": "player",
    "first": "Vince",
    "last": "Carter",
    "height": "6-6",
    "weight": "220",
    "number": 15,
    "country": "United States",
    "team": "Toronto Raptors",
    "conference": "Eastern Conference",
    "season": "2000-2001",
    "salary": 2,
    "unlockedlevel": 88,
    "tier": 1,
    "rarity": "Rare",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 77,
            "tendency": 33
        },
        "dunk": {
            "value": 95,
            "tendency": 2
        },
        "midrange": {
            "value": 88,
            "tendency": 41
        },
        "outside": {
            "value": 78,
            "tendency": 24
        },
        "drawfoul": 74,
        "freethrow": 77,
        "interior": 79,
        "perimeter": 79,
        "offensiverebound": 72,
        "defensiverebound": 68,
        "speed": 79,
        "vertical": 90,
        "strength": 83,
        "hands": 85,
        "stamina": 97,
        "hustle": 88,
        "passing": 69,
        "steal": 71,
        "block": 57,
        "offensiveconsistency": 84,
        "defensiveconsistency": 76
    },
    "position": "SG/SF",
    "fgaintensity": 2,
    "fgaaverage": 22,
    "color1": "#d6dbfb",
    "color2": "#ffffff",
    "color3": "#2b2933",
    "image": "carter_vince_toronto_raptors"
}, {
    "id": "0235",
    "type": "player",
    "first": "Michael",
    "last": "Jordan",
    "height": "6-6",
    "weight": "195",
    "number": 23,
    "country": "United States",
    "team": "Washington Wizards",
    "conference": "Eastern Conference",
    "season": "2001-2002",
    "salary": 1,
    "unlockedlevel": 69,
    "tier": 1,
    "rarity": "Rare",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 79,
            "tendency": 22
        },
        "dunk": {
            "value": 80,
            "tendency": 1
        },
        "midrange": {
            "value": 85,
            "tendency": 73
        },
        "outside": {
            "value": 68,
            "tendency": 4
        },
        "drawfoul": 69,
        "freethrow": 79,
        "interior": 81,
        "perimeter": 82,
        "offensiverebound": 63,
        "defensiverebound": 74,
        "speed": 78,
        "vertical": 80,
        "strength": 85,
        "hands": 85,
        "stamina": 94,
        "hustle": 88,
        "passing": 74,
        "steal": 68,
        "block": 46,
        "offensiveconsistency": 90,
        "defensiveconsistency": 81
    },
    "position": "SF/SG",
    "fgaintensity": 2,
    "fgaaverage": 22,
    "color1": "#e6effe",
    "color2": "#ffffff",
    "color3": "#2b3b63",
    "image": "jordan_michael_washington_wizards"
}, {
    "id": "0236",
    "type": "player",
    "first": "Vlade",
    "last": "Divac",
    "height": "7-1",
    "weight": "243",
    "number": 21,
    "country": "Serbia",
    "team": "Sacramento Kings",
    "conference": "Western Conference",
    "season": "2001-2002",
    "salary": 10,
    "unlockedlevel": 78,
    "tier": 2,
    "rarity": "Rare",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 74,
            "tendency": 70
        },
        "dunk": {
            "value": 82,
            "tendency": 3
        },
        "midrange": {
            "value": 68,
            "tendency": 25
        },
        "outside": {
            "value": 67,
            "tendency": 2
        },
        "drawfoul": 64,
        "freethrow": 62,
        "interior": 82,
        "perimeter": 75,
        "offensiverebound": 74,
        "defensiverebound": 78,
        "speed": 71,
        "vertical": 70,
        "strength": 88,
        "hands": 88,
        "stamina": 92,
        "hustle": 88,
        "passing": 68,
        "steal": 60,
        "block": 58,
        "offensiveconsistency": 84,
        "defensiveconsistency": 85
    },
    "position": "C",
    "fgaintensity": 1,
    "fgaaverage": 9,
    "color1": "#655184",
    "color2": "#32264c",
    "color3": "#ffffff",
    "image": "divac_vlade_sacramento_kings"
}, {
    "id": "0237",
    "type": "player",
    "first": "Derrick",
    "last": "Rose",
    "height": "6-3",
    "weight": "190",
    "number": 25,
    "country": "United States",
    "team": "Minnesota Timberwolves",
    "conference": "Western Conference",
    "season": "2018-2019",
    "salary": 2,
    "unlockedlevel": 61,
    "tier": 2,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 74,
            "tendency": 43
        },
        "dunk": {
            "value": 71,
            "tendency": 0
        },
        "midrange": {
            "value": 71,
            "tendency": 31
        },
        "outside": {
            "value": 74,
            "tendency": 26
        },
        "drawfoul": 59,
        "freethrow": 85,
        "interior": 72,
        "perimeter": 77,
        "offensiverebound": 62,
        "defensiverebound": 64,
        "speed": 79,
        "vertical": 77,
        "strength": 80,
        "hands": 84,
        "stamina": 91,
        "hustle": 86,
        "passing": 72,
        "steal": 54,
        "block": 44,
        "offensiveconsistency": 86,
        "defensiveconsistency": 76
    },
    "position": "SG/PG",
    "fgaintensity": 1,
    "fgaaverage": 15,
    "color1": "#37383a",
    "color2": "#010000",
    "color3": "#ffffff",
    "image": "rose_derrick_minnesota_timberwolves"
}, {
    "id": "0238",
    "type": "player",
    "first": "Paul",
    "last": "Pierce",
    "height": "6-7",
    "weight": "235",
    "number": 34,
    "country": "United States",
    "team": "Brooklyn Nets",
    "conference": "Eastern Conference",
    "season": "2013-2014",
    "salary": 15,
    "unlockedlevel": 57,
    "tier": 3,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 71,
            "tendency": 31
        },
        "dunk": {
            "value": 72,
            "tendency": 0
        },
        "midrange": {
            "value": 73,
            "tendency": 27
        },
        "outside": {
            "value": 75,
            "tendency": 42
        },
        "drawfoul": 63,
        "freethrow": 83,
        "interior": 75,
        "perimeter": 76,
        "offensiverebound": 60,
        "defensiverebound": 72,
        "speed": 75,
        "vertical": 75,
        "strength": 84,
        "hands": 86,
        "stamina": 90,
        "hustle": 80,
        "passing": 63,
        "steal": 63,
        "block": 46,
        "offensiveconsistency": 81,
        "defensiveconsistency": 75
    },
    "position": "SF/PF",
    "fgaintensity": 1,
    "fgaaverage": 10,
    "color1": "#0c0c0c",
    "color2": "#1e1c1c",
    "color3": "#ffffff",
    "image": "pierce_paul_brooklyn_nets"
}, {
    "id": "0239",
    "type": "player",
    "first": "Andre",
    "last": "Iguodala",
    "height": "6-6",
    "weight": "215",
    "number": 9,
    "country": "United States",
    "team": "Golden State Warriors",
    "conference": "Western Conference",
    "season": "2017-2018",
    "salary": 15,
    "unlockedlevel": 62,
    "tier": 2,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 69,
            "tendency": 25
        },
        "dunk": {
            "value": 80,
            "tendency": 17
        },
        "midrange": {
            "value": 67,
            "tendency": 21
        },
        "outside": {
            "value": 71,
            "tendency": 37
        },
        "drawfoul": 53,
        "freethrow": 63,
        "interior": 82,
        "perimeter": 87,
        "offensiverebound": 63,
        "defensiverebound": 68,
        "speed": 76,
        "vertical": 79,
        "strength": 88,
        "hands": 87,
        "stamina": 89,
        "hustle": 85,
        "passing": 67,
        "steal": 56,
        "block": 49,
        "offensiveconsistency": 72,
        "defensiveconsistency": 86
    },
    "position": "SF",
    "fgaintensity": 0,
    "fgaaverage": 5,
    "color1": "#0b0b0c",
    "color2": "#2d2a33",
    "color3": "#e2e6f6",
    "image": "iguodala_andre_goldenstate_warriors"
}, {
    "id": "0240",
    "type": "player",
    "first": "Marc",
    "last": "Gasol",
    "height": "7-1",
    "weight": "255",
    "number": 33,
    "country": "Spain",
    "team": "Memphis Grizzlies",
    "conference": "Western Conference",
    "season": "2017-2018",
    "salary": 23,
    "unlockedlevel": 81,
    "tier": 1,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 75,
            "tendency": 33
        },
        "dunk": {
            "value": 81,
            "tendency": 4
        },
        "midrange": {
            "value": 72,
            "tendency": 32
        },
        "outside": {
            "value": 80,
            "tendency": 31
        },
        "drawfoul": 65,
        "freethrow": 83,
        "interior": 87,
        "perimeter": 77,
        "offensiverebound": 65,
        "defensiverebound": 82,
        "speed": 72,
        "vertical": 71,
        "strength": 87,
        "hands": 86,
        "stamina": 93,
        "hustle": 84,
        "passing": 70,
        "steal": 54,
        "block": 61,
        "offensiveconsistency": 80,
        "defensiveconsistency": 85
    },
    "position": "C",
    "fgaintensity": 0,
    "fgaaverage": 14,
    "color1": "#1c1e21",
    "color2": "#363c49",
    "color3": "#a8c2d4",
    "image": "gasol_marc_memphis_grizzlies"
}, {
    "id": "0241",
    "type": "player",
    "first": "Kirk",
    "last": "Hinrich",
    "height": "6-4",
    "weight": "190",
    "number": 12,
    "country": "United States",
    "team": "Chicago Bulls",
    "conference": "Eastern Conference",
    "season": "2015-2016",
    "salary": 3,
    "unlockedlevel": 0,
    "tier": 4,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 67,
            "tendency": 30
        },
        "dunk": {
            "value": 57,
            "tendency": 0
        },
        "midrange": {
            "value": 68,
            "tendency": 22
        },
        "outside": {
            "value": 69,
            "tendency": 48
        },
        "drawfoul": 48,
        "freethrow": 94,
        "interior": 70,
        "perimeter": 73,
        "offensiverebound": 59,
        "defensiverebound": 61,
        "speed": 74,
        "vertical": 69,
        "strength": 70,
        "hands": 80,
        "stamina": 83,
        "hustle": 86,
        "passing": 60,
        "steal": 46,
        "block": 40,
        "offensiveconsistency": 71,
        "defensiveconsistency": 73
    },
    "position": "PG/SG",
    "fgaintensity": 0,
    "fgaaverage": 3,
    "color1": "#df4745",
    "color2": "#a3161d",
    "color3": "#ffffff",
    "image": "hinrich_kirk_chicago_bulls"
}, {
    "id": "0242",
    "type": "player",
    "first": "CJ",
    "last": "McCollum",
    "height": "6-3",
    "weight": "190",
    "number": 3,
    "country": "United States",
    "team": "Portland Trail Blazers",
    "conference": "Western Conference",
    "season": "2017-2018",
    "salary": 24,
    "unlockedlevel": 73,
    "tier": 2,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 77,
            "tendency": 32
        },
        "dunk": {
            "value": 67,
            "tendency": 1
        },
        "midrange": {
            "value": 79,
            "tendency": 35
        },
        "outside": {
            "value": 81,
            "tendency": 32
        },
        "drawfoul": 59,
        "freethrow": 84,
        "interior": 72,
        "perimeter": 77,
        "offensiverebound": 62,
        "defensiverebound": 68,
        "speed": 77,
        "vertical": 72,
        "strength": 74,
        "hands": 82,
        "stamina": 95,
        "hustle": 84,
        "passing": 67,
        "steal": 60,
        "block": 46,
        "offensiveconsistency": 75,
        "defensiveconsistency": 74
    },
    "position": "SG",
    "fgaintensity": 2,
    "fgaaverage": 19,
    "color1": "#2c292a",
    "color2": "#1c1817",
    "color3": "#e22b3d",
    "image": "mccollum_cj_portland_trailblazers"
}, {
    "id": "0243",
    "type": "player",
    "first": "Bradley",
    "last": "Beal",
    "height": "6-5",
    "weight": "207",
    "number": 3,
    "country": "United States",
    "team": "Washington Wizards",
    "conference": "Eastern Conference",
    "season": "2017-2018",
    "salary": 24,
    "unlockedlevel": 76,
    "tier": 2,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 75,
            "tendency": 28
        },
        "dunk": {
            "value": 67,
            "tendency": 3
        },
        "midrange": {
            "value": 78,
            "tendency": 33
        },
        "outside": {
            "value": 85,
            "tendency": 36
        },
        "drawfoul": 65,
        "freethrow": 79,
        "interior": 70,
        "perimeter": 75,
        "offensiverebound": 62,
        "defensiverebound": 70,
        "speed": 78,
        "vertical": 75,
        "strength": 76,
        "hands": 83,
        "stamina": 95,
        "hustle": 81,
        "passing": 71,
        "steal": 64,
        "block": 46,
        "offensiveconsistency": 82,
        "defensiveconsistency": 73
    },
    "position": "SG",
    "fgaintensity": 2,
    "fgaaverage": 18,
    "color1": "#dd5e58",
    "color2": "#93322f",
    "color3": "#ffffff",
    "image": "beal_bradley_washington_wizards"
}, {
    "id": "0244",
    "type": "player",
    "first": "Danny",
    "last": "Green",
    "height": "6-5",
    "weight": "215",
    "number": 14,
    "country": "United States",
    "team": "Toronto Raptors",
    "conference": "Eastern Conference",
    "season": "2018-2019",
    "salary": 10,
    "unlockedlevel": 59,
    "tier": 3,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 68,
            "tendency": 22
        },
        "dunk": {
            "value": 70,
            "tendency": 1
        },
        "midrange": {
            "value": 72,
            "tendency": 9
        },
        "outside": {
            "value": 75,
            "tendency": 68
        },
        "drawfoul": 49,
        "freethrow": 91,
        "interior": 77,
        "perimeter": 81,
        "offensiverebound": 64,
        "defensiverebound": 68,
        "speed": 74,
        "vertical": 76,
        "strength": 79,
        "hands": 86,
        "stamina": 91,
        "hustle": 86,
        "passing": 59,
        "steal": 58,
        "block": 54,
        "offensiveconsistency": 70,
        "defensiveconsistency": 79
    },
    "position": "SG/SF",
    "fgaintensity": 1,
    "fgaaverage": 8,
    "color1": "#f25353",
    "color2": "#b21414",
    "color3": "#ffffff",
    "image": "green_danny_toronto_raptors"
}, {
    "id": "0245",
    "type": "player",
    "first": "Raja",
    "last": "Bell",
    "height": "6-5",
    "weight": "204",
    "number": 19,
    "country": "United States",
    "team": "Phoenix Suns",
    "conference": "Western Conference",
    "season": "2005-2006",
    "salary": 4,
    "unlockedlevel": 43,
    "tier": 4,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 69,
            "tendency": 11
        },
        "dunk": {
            "value": 69,
            "tendency": 1
        },
        "midrange": {
            "value": 85,
            "tendency": 40
        },
        "outside": {
            "value": 76,
            "tendency": 48
        },
        "drawfoul": 54,
        "freethrow": 79,
        "interior": 79,
        "perimeter": 82,
        "offensiverebound": 62,
        "defensiverebound": 66,
        "speed": 72,
        "vertical": 77,
        "strength": 80,
        "hands": 85,
        "stamina": 96,
        "hustle": 87,
        "passing": 64,
        "steal": 60,
        "block": 45,
        "offensiveconsistency": 57,
        "defensiveconsistency": 85
    },
    "position": "SG/SF",
    "fgaintensity": 1,
    "fgaaverage": 12,
    "color1": "#4e3c7c",
    "color2": "#2d2051",
    "color3": "#b2abba",
    "image": "bell_raja_phoenix_suns"
}, {
    "id": "0246",
    "type": "player",
    "first": "Chauncey",
    "last": "Billups",
    "height": "6-3",
    "weight": "202",
    "number": 1,
    "country": "United States",
    "team": "Denver Nuggets",
    "conference": "Western Conference",
    "season": "2010-2011",
    "salary": 12,
    "unlockedlevel": 61,
    "tier": 2,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 70,
            "tendency": 22
        },
        "dunk": {
            "value": 50,
            "tendency": 0
        },
        "midrange": {
            "value": 75,
            "tendency": 34
        },
        "outside": {
            "value": 79,
            "tendency": 44
        },
        "drawfoul": 70,
        "freethrow": 92,
        "interior": 71,
        "perimeter": 73,
        "offensiverebound": 60,
        "defensiverebound": 65,
        "speed": 74,
        "vertical": 67,
        "strength": 81,
        "hands": 86,
        "stamina": 93,
        "hustle": 82,
        "passing": 75,
        "steal": 60,
        "block": 43,
        "offensiveconsistency": 81,
        "defensiveconsistency": 79
    },
    "position": "PG/SG",
    "fgaintensity": 1,
    "fgaaverage": 11,
    "color1": "#b5d9f7",
    "color2": "#82bcf4",
    "color3": "#181921",
    "image": "billups_chauncey_denver_nuggets"
}, {
    "id": "0247",
    "type": "player",
    "first": "Julius",
    "last": "Randle",
    "height": "6-9",
    "weight": "250",
    "number": 30,
    "country": "United States",
    "team": "New Orleans Pelicans",
    "conference": "Western Conference",
    "season": "2018-2019",
    "salary": 9,
    "unlockedlevel": 46,
    "tier": 3,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 79,
            "tendency": 69
        },
        "dunk": {
            "value": 83,
            "tendency": 8
        },
        "midrange": {
            "value": 67,
            "tendency": 9
        },
        "outside": {
            "value": 70,
            "tendency": 14
        },
        "drawfoul": 73,
        "freethrow": 73,
        "interior": 71,
        "perimeter": 73,
        "offensiverebound": 72,
        "defensiverebound": 82,
        "speed": 69,
        "vertical": 67,
        "strength": 85,
        "hands": 79,
        "stamina": 91,
        "hustle": 82,
        "passing": 66,
        "steal": 52,
        "block": 49,
        "offensiveconsistency": 72,
        "defensiveconsistency": 71
    },
    "position": "PF/C",
    "fgaintensity": 1,
    "fgaaverage": 15,
    "color1": "#e55d53",
    "color2": "#bc2e3c",
    "color3": "#d8baa3",
    "image": "randle_julius_neworleans_pelicans"
}, {
    "id": "0248",
    "type": "player",
    "first": "Richard",
    "last": "Hamilton",
    "height": "6-6",
    "weight": "185",
    "number": 32,
    "country": "United States",
    "team": "Detroit Pistons",
    "conference": "Eastern Conference",
    "season": "2007-2008",
    "salary": 10,
    "unlockedlevel": 60,
    "tier": 2,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 75,
            "tendency": 26
        },
        "dunk": {
            "value": 50,
            "tendency": 0
        },
        "midrange": {
            "value": 82,
            "tendency": 60
        },
        "outside": {
            "value": 69,
            "tendency": 14
        },
        "drawfoul": 59,
        "freethrow": 83,
        "interior": 62,
        "perimeter": 72,
        "offensiverebound": 64,
        "defensiverebound": 64,
        "speed": 81,
        "vertical": 65,
        "strength": 66,
        "hands": 81,
        "stamina": 94,
        "hustle": 82,
        "passing": 70,
        "steal": 60,
        "block": 42,
        "offensiveconsistency": 80,
        "defensiveconsistency": 72
    },
    "position": "SG",
    "fgaintensity": 1,
    "fgaaverage": 14,
    "color1": "#3d4499",
    "color2": "#1f1f51",
    "color3": "#ffffff",
    "image": "hamilton_richard_detroit_pistons"
}, {
    "id": "0249",
    "type": "player",
    "first": "JR",
    "last": "Smith",
    "height": "6-6",
    "weight": "225",
    "number": 5,
    "country": "United States",
    "team": "Cleveland Cavaliers",
    "conference": "Eastern Conference",
    "season": "2017-2018",
    "salary": 14,
    "unlockedlevel": 42,
    "tier": 2,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 68,
            "tendency": 14
        },
        "dunk": {
            "value": 78,
            "tendency": 2
        },
        "midrange": {
            "value": 74,
            "tendency": 20
        },
        "outside": {
            "value": 73,
            "tendency": 64
        },
        "drawfoul": 50,
        "freethrow": 70,
        "interior": 60,
        "perimeter": 68,
        "offensiverebound": 60,
        "defensiverebound": 66,
        "speed": 79,
        "vertical": 81,
        "strength": 77,
        "hands": 77,
        "stamina": 90,
        "hustle": 80,
        "passing": 61,
        "steal": 58,
        "block": 42,
        "offensiveconsistency": 66,
        "defensiveconsistency": 69
    },
    "position": "SG",
    "fgaintensity": 1,
    "fgaaverage": 7,
    "color1": "#d4d8d7",
    "color2": "#b4b4b4",
    "color3": "#3c4345",
    "image": "smith_jr_cleveland_cavaliers"
}, {
    "id": "0250",
    "type": "player",
    "first": "Luka",
    "last": "Doncic",
    "height": "6-7",
    "weight": "218",
    "number": 77,
    "country": "Slovenia",
    "team": "Dallas Mavericks",
    "conference": "Western Conference",
    "season": "2018-2019",
    "salary": 7,
    "unlockedlevel": 77,
    "tier": 1,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 76,
            "tendency": 38
        },
        "dunk": {
            "value": 77,
            "tendency": 2
        },
        "midrange": {
            "value": 70,
            "tendency": 17
        },
        "outside": {
            "value": 81,
            "tendency": 43
        },
        "drawfoul": 74,
        "freethrow": 71,
        "interior": 65,
        "perimeter": 71,
        "offensiverebound": 65,
        "defensiverebound": 80,
        "speed": 78,
        "vertical": 72,
        "strength": 80,
        "hands": 81,
        "stamina": 93,
        "hustle": 83,
        "passing": 77,
        "steal": 59,
        "block": 45,
        "offensiveconsistency": 85,
        "defensiveconsistency": 70
    },
    "position": "PF/SF",
    "fgaintensity": 2,
    "fgaaverage": 17,
    "color1": "#4c4c59",
    "color2": "#181819",
    "color3": "#069ec9",
    "image": "doncic_luka_dallas_mavericks"
}, {
    "id": "0251",
    "type": "player",
    "first": "Trae",
    "last": "Young",
    "height": "6-2",
    "weight": "180",
    "number": 11,
    "country": "United States",
    "team": "Atlanta Hawks",
    "conference": "Eastern Conference",
    "season": "2018-2019",
    "salary": 5,
    "unlockedlevel": 69,
    "tier": 2,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 74,
            "tendency": 43
        },
        "dunk": {
            "value": 50,
            "tendency": 0
        },
        "midrange": {
            "value": 67,
            "tendency": 20
        },
        "outside": {
            "value": 75,
            "tendency": 37
        },
        "drawfoul": 64,
        "freethrow": 80,
        "interior": 60,
        "perimeter": 67,
        "offensiverebound": 62,
        "defensiverebound": 65,
        "speed": 83,
        "vertical": 64,
        "strength": 69,
        "hands": 82,
        "stamina": 91,
        "hustle": 85,
        "passing": 82,
        "steal": 58,
        "block": 45,
        "offensiveconsistency": 80,
        "defensiveconsistency": 80
    },
    "position": "PG",
    "fgaintensity": 1,
    "fgaaverage": 16,
    "color1": "#777777",
    "color2": "#39383d",
    "color3": "#e8ee35",
    "image": "young_trae_atlanta_hawks"
}, {
    "id": "0252",
    "type": "player",
    "first": "Grant",
    "last": "Hill",
    "height": "6-8",
    "weight": "225",
    "number": 33,
    "country": "United States",
    "team": "Detroit Pistons",
    "conference": "Eastern Conference",
    "season": "1996-1997",
    "salary": 5,
    "unlockedlevel": 71,
    "tier": 2,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 79,
            "tendency": 45
        },
        "dunk": {
            "value": 79,
            "tendency": 5
        },
        "midrange": {
            "value": 78,
            "tendency": 47
        },
        "outside": {
            "value": 67,
            "tendency": 3
        },
        "drawfoul": 78,
        "freethrow": 71,
        "interior": 77,
        "perimeter": 79,
        "offensiverebound": 67,
        "defensiverebound": 84,
        "speed": 80,
        "vertical": 75,
        "strength": 77,
        "hands": 80,
        "stamina": 97,
        "hustle": 88,
        "passing": 82,
        "steal": 77,
        "block": 49,
        "offensiveconsistency": 82,
        "defensiveconsistency": 83
    },
    "position": "SF",
    "fgaintensity": 2,
    "fgaaverage": 16,
    "color1": "#046c91",
    "color2": "#1fc1c9",
    "color3": "#1e181c",
    "image": "hill_grant_detroit_pistons"
}, {
    "id": "0253",
    "type": "player",
    "first": "Tracy",
    "last": "McGrady",
    "height": "6-8",
    "weight": "210",
    "number": 3,
    "country": "United States",
    "team": "New York Knicks",
    "conference": "Eastern Conference",
    "season": "2009-2010",
    "salary": 23,
    "unlockedlevel": 3,
    "tier": 3,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 69,
            "tendency": 30
        },
        "dunk": {
            "value": 70,
            "tendency": 1
        },
        "midrange": {
            "value": 72,
            "tendency": 40
        },
        "outside": {
            "value": 70,
            "tendency": 29
        },
        "drawfoul": 55,
        "freethrow": 75,
        "interior": 70,
        "perimeter": 71,
        "offensiverebound": 62,
        "defensiverebound": 65,
        "speed": 73,
        "vertical": 71,
        "strength": 73,
        "hands": 74,
        "stamina": 87,
        "hustle": 88,
        "passing": 67,
        "steal": 50,
        "block": 48,
        "offensiveconsistency": 76,
        "defensiveconsistency": 71
    },
    "position": "SG/SF",
    "fgaintensity": 0,
    "fgaaverage": 8,
    "color1": "#19438e",
    "color2": "#367cce",
    "color3": "#ffffff",
    "image": "mcgrady_tracy_newyork_knicks"
}, {
    "id": "0254",
    "type": "player",
    "first": "Seth",
    "last": "Curry",
    "height": "6-2",
    "weight": "185",
    "number": 31,
    "country": "United States",
    "team": "Portland Trail Blazers",
    "conference": "Western Conference",
    "season": "2018-2019",
    "salary": 3,
    "unlockedlevel": 11,
    "tier": 3,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 67,
            "tendency": 15
        },
        "dunk": {
            "value": 60,
            "tendency": 0
        },
        "midrange": {
            "value": 72,
            "tendency": 30
        },
        "outside": {
            "value": 71,
            "tendency": 55
        },
        "drawfoul": 48,
        "freethrow": 84,
        "interior": 64,
        "perimeter": 72,
        "offensiverebound": 60,
        "defensiverebound": 60,
        "speed": 76,
        "vertical": 66,
        "strength": 64,
        "hands": 77,
        "stamina": 85,
        "hustle": 88,
        "passing": 57,
        "steal": 48,
        "block": 42,
        "offensiveconsistency": 72,
        "defensiveconsistency": 70
    },
    "position": "SG",
    "fgaintensity": 0,
    "fgaaverage": 6,
    "color1": "#595252",
    "color2": "#111111",
    "color3": "#bfbec2",
    "image": "curry_seth_portland_trailblazers"
}, {
    "id": "0255",
    "type": "player",
    "first": "Nate",
    "last": "Robinson",
    "height": "5-9",
    "weight": "180",
    "number": 2,
    "country": "United States",
    "team": "Chicago Bulls",
    "conference": "Eastern Conference",
    "season": "2012-2013",
    "salary": 1,
    "unlockedlevel": 20,
    "tier": 3,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 71,
            "tendency": 32
        },
        "dunk": {
            "value": 88,
            "tendency": 0
        },
        "midrange": {
            "value": 76,
            "tendency": 30
        },
        "outside": {
            "value": 74,
            "tendency": 38
        },
        "drawfoul": 55,
        "freethrow": 80,
        "interior": 60,
        "perimeter": 68,
        "offensiverebound": 60,
        "defensiverebound": 63,
        "speed": 81,
        "vertical": 90,
        "strength": 84,
        "hands": 81,
        "stamina": 89,
        "hustle": 88,
        "passing": 71,
        "steal": 60,
        "block": 42,
        "offensiveconsistency": 77,
        "defensiveconsistency": 71
    },
    "position": "PG",
    "fgaintensity": 1,
    "fgaaverage": 11,
    "color1": "#af2b3a",
    "color2": "#ea3b3b",
    "color3": "#ffffff",
    "image": "robinson_nate_chicago_bulls"
}, {
    "id": "0256",
    "type": "player",
    "first": "Trevor",
    "last": "Ariza",
    "height": "6-8",
    "weight": "215",
    "number": 3,
    "country": "United States",
    "team": "Phoenix Suns",
    "conference": "Western Conference",
    "season": "2018-2019",
    "salary": 15,
    "unlockedlevel": 26,
    "tier": 3,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 69,
            "tendency": 35
        },
        "dunk": {
            "value": 70,
            "tendency": 0
        },
        "midrange": {
            "value": 73,
            "tendency": 4
        },
        "outside": {
            "value": 76,
            "tendency": 61
        },
        "drawfoul": 56,
        "freethrow": 81,
        "interior": 72,
        "perimeter": 81,
        "offensiverebound": 62,
        "defensiverebound": 75,
        "speed": 77,
        "vertical": 79,
        "strength": 81,
        "hands": 83,
        "stamina": 94,
        "hustle": 85,
        "passing": 68,
        "steal": 71,
        "block": 43,
        "offensiveconsistency": 71,
        "defensiveconsistency": 82
    },
    "position": "SF/PF",
    "fgaintensity": 1,
    "fgaaverage": 11,
    "color1": "#68537f",
    "color2": "#282743",
    "color3": "#e89054",
    "image": "ariza_trevor_phoenix_suns"
}, {
    "id": "0257",
    "type": "player",
    "first": "Nene",
    "last": "Hilario",
    "height": "6-11",
    "weight": "250",
    "number": 42,
    "country": "United States",
    "team": "Houston Rockets",
    "conference": "Western Conference",
    "season": "2016-2017",
    "salary": 3,
    "unlockedlevel": 22,
    "tier": 3,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 72,
            "tendency": 53
        },
        "dunk": {
            "value": 73,
            "tendency": 24
        },
        "midrange": {
            "value": 67,
            "tendency": 21
        },
        "outside": {
            "value": 67,
            "tendency": 2
        },
        "drawfoul": 59,
        "freethrow": 59,
        "interior": 78,
        "perimeter": 69,
        "offensiverebound": 66,
        "defensiverebound": 66,
        "speed": 67,
        "vertical": 77,
        "strength": 88,
        "hands": 71,
        "stamina": 85,
        "hustle": 79,
        "passing": 58,
        "steal": 56,
        "block": 49,
        "offensiveconsistency": 70,
        "defensiveconsistency": 73
    },
    "position": "C",
    "fgaintensity": 0,
    "fgaaverage": 6,
    "color1": "#dd6268",
    "color2": "#c1393b",
    "color3": "#d4d4dc",
    "image": "hilario_nene_houston_rockets"
}, {
    "id": "0258",
    "type": "player",
    "first": "Kawhi",
    "last": "Leonard",
    "height": "6-7",
    "weight": "230",
    "number": 2,
    "country": "United States",
    "team": "Toronto Raptors",
    "conference": "Eastern Conference",
    "season": "2018-2019",
    "salary": 23,
    "unlockedlevel": 96,
    "tier": 1,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 81,
            "tendency": 34
        },
        "dunk": {
            "value": 80,
            "tendency": 5
        },
        "midrange": {
            "value": 75,
            "tendency": 36
        },
        "outside": {
            "value": 77,
            "tendency": 25
        },
        "drawfoul": 78,
        "freethrow": 86,
        "interior": 86,
        "perimeter": 87,
        "offensiverebound": 66,
        "defensiverebound": 81,
        "speed": 80,
        "vertical": 81,
        "strength": 86,
        "hands": 92,
        "stamina": 94,
        "hustle": 81,
        "passing": 66,
        "steal": 79,
        "block": 48,
        "offensiveconsistency": 81,
        "defensiveconsistency": 92
    },
    "position": "SF",
    "fgaintensity": 2,
    "fgaaverage": 19,
    "color1": "#fceed9",
    "color2": "#ffffff",
    "color3": "#ceaf6a",
    "image": "leonard_kawhi_toronto_raptors"
}, {
    "id": "0259",
    "type": "player",
    "first": "Tony",
    "last": "Parker",
    "height": "6-2",
    "weight": "185",
    "number": 9,
    "country": "France",
    "team": "Charlotte Hornets",
    "conference": "Eastern Conference",
    "season": "2018-2019",
    "salary": 5,
    "unlockedlevel": 32,
    "tier": 3,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 73,
            "tendency": 51
        },
        "dunk": {
            "value": 70,
            "tendency": 0
        },
        "midrange": {
            "value": 70,
            "tendency": 39
        },
        "outside": {
            "value": 68,
            "tendency": 10
        },
        "drawfoul": 57,
        "freethrow": 73,
        "interior": 70,
        "perimeter": 72,
        "offensiverebound": 59,
        "defensiverebound": 60,
        "speed": 77,
        "vertical": 72,
        "strength": 73,
        "hands": 84,
        "stamina": 85,
        "hustle": 76,
        "passing": 69,
        "steal": 48,
        "block": 42,
        "offensiveconsistency": 77,
        "defensiveconsistency": 76
    },
    "position": "PG/SG",
    "fgaintensity": 0,
    "fgaaverage": 8,
    "color1": "#82e0e0",
    "color2": "#2ba39d",
    "color3": "#46406b",
    "image": "parker_tony_charlotte_hornets"
}, {
    "id": "0260",
    "type": "player",
    "first": "Dennis",
    "last": "Schroder",
    "height": "6-1",
    "weight": "172",
    "number": 17,
    "country": "Germany",
    "team": "Oklahoma City Thunder",
    "conference": "Western Conference",
    "season": "2018-2019",
    "salary": 16,
    "unlockedlevel": 47,
    "tier": 3,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 74,
            "tendency": 40
        },
        "dunk": {
            "value": 70,
            "tendency": 0
        },
        "midrange": {
            "value": 72,
            "tendency": 30
        },
        "outside": {
            "value": 75,
            "tendency": 30
        },
        "drawfoul": 58,
        "freethrow": 83,
        "interior": 71,
        "perimeter": 74,
        "offensiverebound": 60,
        "defensiverebound": 67,
        "speed": 80,
        "vertical": 73,
        "strength": 75,
        "hands": 81,
        "stamina": 91,
        "hustle": 76,
        "passing": 70,
        "steal": 58,
        "block": 43,
        "offensiveconsistency": 80,
        "defensiveconsistency": 74
    },
    "position": "PG",
    "fgaintensity": 1,
    "fgaaverage": 14,
    "color1": "#44c5e1",
    "color2": "#017ea2",
    "color3": "#ffffff",
    "image": "schroder_dennis_oklahomacity_thunder"
}, {
    "id": "0261",
    "type": "player",
    "first": "Buddy",
    "last": "Hield",
    "height": "6-4",
    "weight": "214",
    "number": 24,
    "country": "Bahamas",
    "team": "Sacramento Kings",
    "conference": "Western Conference",
    "season": "2018-2019",
    "salary": 4,
    "unlockedlevel": 56,
    "tier": 2,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 72,
            "tendency": 24
        },
        "dunk": {
            "value": 77,
            "tendency": 2
        },
        "midrange": {
            "value": 81,
            "tendency": 27
        },
        "outside": {
            "value": 81,
            "tendency": 47
        },
        "drawfoul": 55,
        "freethrow": 86,
        "interior": 74,
        "perimeter": 76,
        "offensiverebound": 70,
        "defensiverebound": 66,
        "speed": 79,
        "vertical": 79,
        "strength": 77,
        "hands": 76,
        "stamina": 91,
        "hustle": 80,
        "passing": 62,
        "steal": 50,
        "block": 45,
        "offensiveconsistency": 86,
        "defensiveconsistency": 71
    },
    "position": "SG",
    "fgaintensity": 2,
    "fgaaverage": 17,
    "color1": "#3d2a7f",
    "color2": "#6246a5",
    "color3": "#ffffff",
    "image": "hield_buddy_sacramento_kings"
}, {
    "id": "0262",
    "type": "player",
    "first": "Jermaine",
    "last": "ONeal",
    "height": "6-11",
    "weight": "226",
    "number": 24,
    "country": "United States",
    "team": "Indiana Pacers",
    "conference": "Eastern Conference",
    "season": "2002-2003",
    "salary": 7,
    "unlockedlevel": 61,
    "tier": 2,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 83,
            "tendency": 56
        },
        "dunk": {
            "value": 83,
            "tendency": 10
        },
        "midrange": {
            "value": 69,
            "tendency": 32
        },
        "outside": {
            "value": 67,
            "tendency": 2
        },
        "drawfoul": 73,
        "freethrow": 73,
        "interior": 78,
        "perimeter": 70,
        "offensiverebound": 74,
        "defensiverebound": 85,
        "speed": 72,
        "vertical": 81,
        "strength": 83,
        "hands": 74,
        "stamina": 95,
        "hustle": 80,
        "passing": 62,
        "steal": 58,
        "block": 75,
        "offensiveconsistency": 87,
        "defensiveconsistency": 70
    },
    "position": "PF/C",
    "fgaintensity": 2,
    "fgaaverage": 16,
    "color1": "#fce895",
    "color2": "#f9d84e",
    "color3": "#1b1a2d",
    "image": "oneal_jermaine_indiana_pacers"
}, {
    "id": "0263",
    "type": "player",
    "first": "Nikola",
    "last": "Vucevic",
    "height": "7-0",
    "weight": "260",
    "number": 9,
    "country": "Switzerland",
    "team": "Orlando Magic",
    "conference": "Eastern Conference",
    "season": "2018-2019",
    "salary": 13,
    "unlockedlevel": 82,
    "tier": 1,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 81,
            "tendency": 50
        },
        "dunk": {
            "value": 79,
            "tendency": 4
        },
        "midrange": {
            "value": 72,
            "tendency": 28
        },
        "outside": {
            "value": 75,
            "tendency": 18
        },
        "drawfoul": 58,
        "freethrow": 78,
        "interior": 79,
        "perimeter": 71,
        "offensiverebound": 74,
        "defensiverebound": 91,
        "speed": 70,
        "vertical": 79,
        "strength": 84,
        "hands": 80,
        "stamina": 92,
        "hustle": 80,
        "passing": 69,
        "steal": 58,
        "block": 57,
        "offensiveconsistency": 85,
        "defensiveconsistency": 73
    },
    "position": "C",
    "fgaintensity": 2,
    "fgaaverage": 17,
    "color1": "#193f77",
    "color2": "#195aba",
    "color3": "#ffffff",
    "image": "vucevic_nikola_orlando_magic"
}, {
    "id": "0264",
    "type": "player",
    "first": "JR",
    "last": "Smith",
    "height": "6-6",
    "weight": "225",
    "number": 5,
    "country": "United States",
    "team": "New York Knicks",
    "conference": "Eastern Conference",
    "season": "2012-2013",
    "salary": 3,
    "unlockedlevel": 69,
    "tier": 2,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 72,
            "tendency": 27
        },
        "dunk": {
            "value": 85,
            "tendency": 2
        },
        "midrange": {
            "value": 81,
            "tendency": 36
        },
        "outside": {
            "value": 75,
            "tendency": 35
        },
        "drawfoul": 62,
        "freethrow": 76,
        "interior": 69,
        "perimeter": 74,
        "offensiverebound": 63,
        "defensiverebound": 73,
        "speed": 80,
        "vertical": 85,
        "strength": 79,
        "hands": 79,
        "stamina": 93,
        "hustle": 82,
        "passing": 64,
        "steal": 66,
        "block": 45,
        "offensiveconsistency": 70,
        "defensiveconsistency": 69
    },
    "position": "SG/SF",
    "fgaintensity": 1,
    "fgaaverage": 16,
    "color1": "#fc965e",
    "color2": "#f75821",
    "color3": "#ffffff",
    "image": "smith_jr_newyork_knicks"
}, {
    "id": "0265",
    "type": "player",
    "first": "Khris",
    "last": "Middleton",
    "height": "6-8",
    "weight": "222",
    "number": 22,
    "country": "United States",
    "team": "Milwaukee Bucks",
    "conference": "Eastern Conference",
    "season": "2018-2019",
    "salary": 13,
    "unlockedlevel": 75,
    "tier": 1,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 73,
            "tendency": 32
        },
        "dunk": {
            "value": 79,
            "tendency": 2
        },
        "midrange": {
            "value": 71,
            "tendency": 23
        },
        "outside": {
            "value": 83,
            "tendency": 43
        },
        "drawfoul": 60,
        "freethrow": 84,
        "interior": 72,
        "perimeter": 77,
        "offensiverebound": 61,
        "defensiverebound": 76,
        "speed": 79,
        "vertical": 82,
        "strength": 81,
        "hands": 84,
        "stamina": 93,
        "hustle": 84,
        "passing": 70,
        "steal": 64,
        "block": 42,
        "offensiveconsistency": 84,
        "defensiveconsistency": 79
    },
    "position": "SF",
    "fgaintensity": 1,
    "fgaaverage": 15,
    "color1": "#f8d12e",
    "color2": "#f8b13f",
    "color3": "#344c3b",
    "image": "middleton_khris_milwaukee_bucks"
}, {
    "id": "0266",
    "type": "player",
    "first": "Zaza",
    "last": "Pachulia",
    "height": "6-11",
    "weight": "270",
    "number": 27,
    "country": "Georgia",
    "team": "Dallas Mavericks",
    "conference": "Western Conference",
    "season": "2015-2016",
    "salary": 5,
    "unlockedlevel": 20,
    "tier": 3,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 71,
            "tendency": 69
        },
        "dunk": {
            "value": 75,
            "tendency": 3
        },
        "midrange": {
            "value": 66,
            "tendency": 27
        },
        "outside": {
            "value": 67,
            "tendency": 1
        },
        "drawfoul": 61,
        "freethrow": 77,
        "interior": 79,
        "perimeter": 72,
        "offensiverebound": 78,
        "defensiverebound": 79,
        "speed": 70,
        "vertical": 71,
        "strength": 84,
        "hands": 77,
        "stamina": 89,
        "hustle": 86,
        "passing": 61,
        "steal": 56,
        "block": 45,
        "offensiveconsistency": 70,
        "defensiveconsistency": 77
    },
    "position": "C",
    "fgaintensity": 0,
    "fgaaverage": 6,
    "color1": "#518466",
    "color2": "#32624a",
    "color3": "#ffffff",
    "image": "pachulia_zaza_dallas_mavericks"
}, {
    "id": "0267",
    "type": "player",
    "first": "Brook",
    "last": "Lopez",
    "height": "7-0",
    "weight": "270",
    "number": 11,
    "country": "United States",
    "team": "Milwaukee Bucks",
    "conference": "Eastern Conference",
    "season": "2018-2019",
    "salary": 3,
    "unlockedlevel": 36,
    "tier": 2,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 70,
            "tendency": 21
        },
        "dunk": {
            "value": 79,
            "tendency": 5
        },
        "midrange": {
            "value": 70,
            "tendency": 7
        },
        "outside": {
            "value": 81,
            "tendency": 67
        },
        "drawfoul": 52,
        "freethrow": 81,
        "interior": 75,
        "perimeter": 69,
        "offensiverebound": 60,
        "defensiverebound": 69,
        "speed": 72,
        "vertical": 79,
        "strength": 82,
        "hands": 81,
        "stamina": 90,
        "hustle": 79,
        "passing": 58,
        "steal": 50,
        "block": 70,
        "offensiveconsistency": 81,
        "defensiveconsistency": 73
    },
    "position": "C",
    "fgaintensity": 1,
    "fgaaverage": 10,
    "color1": "#264037",
    "color2": "#2d5647",
    "color3": "#f4e2d3",
    "image": "lopez_brook_milwaukee_bucks"
}, {
    "id": "0268",
    "type": "player",
    "first": "Patrick",
    "last": "Ewing",
    "height": "7-0",
    "weight": "240",
    "number": 33,
    "country": "Jamaica",
    "team": "New York Knicks",
    "conference": "Eastern Conference",
    "season": "1989-1990",
    "salary": 4,
    "unlockedlevel": 86,
    "tier": 0,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 91,
            "tendency": 60
        },
        "dunk": {
            "value": 88,
            "tendency": 10
        },
        "midrange": {
            "value": 81,
            "tendency": 30
        },
        "outside": {
            "value": 68,
            "tendency": 0
        },
        "drawfoul": 77,
        "freethrow": 75,
        "interior": 86,
        "perimeter": 75,
        "offensiverebound": 86,
        "defensiverebound": 75,
        "speed": 74,
        "vertical": 86,
        "strength": 93,
        "hands": 80,
        "stamina": 94,
        "hustle": 81,
        "passing": 62,
        "steal": 59,
        "block": 94,
        "offensiveconsistency": 84,
        "defensiveconsistency": 88
    },
    "position": "C",
    "fgaintensity": 2,
    "fgaaverage": 20,
    "color1": "#424d8e",
    "color2": "#212b59",
    "color3": "#ffffff",
    "image": "ewing_patrick_newyork_knicks"
}, {
    "id": "0269",
    "type": "player",
    "first": "Collin",
    "last": "Sexton",
    "height": "6-2",
    "weight": "190",
    "number": 2,
    "country": "United States",
    "team": "Cleveland Cavaliers",
    "conference": "Eastern Conference",
    "season": "2018-2019",
    "salary": 4,
    "unlockedlevel": 34,
    "tier": 3,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 73,
            "tendency": 40
        },
        "dunk": {
            "value": 74,
            "tendency": 1
        },
        "midrange": {
            "value": 75,
            "tendency": 35
        },
        "outside": {
            "value": 75,
            "tendency": 24
        },
        "drawfoul": 60,
        "freethrow": 84,
        "interior": 71,
        "perimeter": 72,
        "offensiverebound": 62,
        "defensiverebound": 65,
        "speed": 84,
        "vertical": 76,
        "strength": 70,
        "hands": 76,
        "stamina": 92,
        "hustle": 72,
        "passing": 65,
        "steal": 48,
        "block": 42,
        "offensiveconsistency": 79,
        "defensiveconsistency": 69
    },
    "position": "PG",
    "fgaintensity": 1,
    "fgaaverage": 15,
    "color1": "#f7a65c",
    "color2": "#db6c3b",
    "color3": "#3f4375",
    "image": "sexton_collin_cleveland_cavaliers"
}, {
    "id": "0270",
    "type": "player",
    "first": "Chris",
    "last": "Bosh",
    "height": "6-11",
    "weight": "235",
    "number": 4,
    "country": "United States",
    "team": "Toronto Raptors",
    "conference": "Eastern Conference",
    "season": "2008-2009",
    "salary": 14,
    "unlockedlevel": 74,
    "tier": 1,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 77,
            "tendency": 38
        },
        "dunk": {
            "value": 80,
            "tendency": 7
        },
        "midrange": {
            "value": 79,
            "tendency": 51
        },
        "outside": {
            "value": 68,
            "tendency": 4
        },
        "drawfoul": 79,
        "freethrow": 82,
        "interior": 80,
        "perimeter": 79,
        "offensiverebound": 75,
        "defensiverebound": 83,
        "speed": 73,
        "vertical": 81,
        "strength": 80,
        "hands": 82,
        "stamina": 96,
        "hustle": 81,
        "passing": 64,
        "steal": 55,
        "block": 55,
        "offensiveconsistency": 83,
        "defensiveconsistency": 80
    },
    "position": "C",
    "fgaintensity": 2,
    "fgaaverage": 16,
    "color1": "#efefef",
    "color2": "#ffffff",
    "color3": "#d82f42",
    "image": "bosh_chris_toronto_raptors"
}, {
    "id": "0271",
    "type": "player",
    "first": "Joe",
    "last": "Harris",
    "height": "6-6",
    "weight": "218",
    "number": 12,
    "country": "United States",
    "team": "Brooklyn Nets",
    "conference": "Eastern Conference",
    "season": "2018-2019",
    "salary": 2,
    "unlockedlevel": 22,
    "tier": 3,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 71,
            "tendency": 41
        },
        "dunk": {
            "value": 70,
            "tendency": 0
        },
        "midrange": {
            "value": 70,
            "tendency": 7
        },
        "outside": {
            "value": 81,
            "tendency": 52
        },
        "drawfoul": 54,
        "freethrow": 84,
        "interior": 72,
        "perimeter": 73,
        "offensiverebound": 62,
        "defensiverebound": 68,
        "speed": 74,
        "vertical": 72,
        "strength": 74,
        "hands": 73,
        "stamina": 91,
        "hustle": 70,
        "passing": 63,
        "steal": 48,
        "block": 43,
        "offensiveconsistency": 75,
        "defensiveconsistency": 65
    },
    "position": "SF/SG",
    "fgaintensity": 1,
    "fgaaverage": 10,
    "color1": "#3d3d3d",
    "color2": "#0f0f0f",
    "color3": "#ffffff",
    "image": "harris_joe_brooklyn_nets"
}, {
    "id": "0272",
    "type": "player",
    "first": "Gary",
    "last": "Harris",
    "height": "6-4",
    "weight": "210",
    "number": 14,
    "country": "United States",
    "team": "Denver Nuggets",
    "conference": "Western Conference",
    "season": "2018-2019",
    "salary": 3,
    "unlockedlevel": 33,
    "tier": 2,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 72,
            "tendency": 39
        },
        "dunk": {
            "value": 81,
            "tendency": 5
        },
        "midrange": {
            "value": 72,
            "tendency": 17
        },
        "outside": {
            "value": 73,
            "tendency": 39
        },
        "drawfoul": 57,
        "freethrow": 80,
        "interior": 71,
        "perimeter": 72,
        "offensiverebound": 62,
        "defensiverebound": 64,
        "speed": 73,
        "vertical": 80,
        "strength": 72,
        "hands": 79,
        "stamina": 91,
        "hustle": 80,
        "passing": 63,
        "steal": 55,
        "block": 46,
        "offensiveconsistency": 82,
        "defensiveconsistency": 75
    },
    "position": "SG",
    "fgaintensity": 1,
    "fgaaverage": 11,
    "color1": "#263166",
    "color2": "#07112b",
    "color3": "#f9d04e",
    "image": "harris_gary_denver_nuggets"
}, {
    "id": "0273",
    "type": "player",
    "first": "James",
    "last": "Harden",
    "height": "6-5",
    "weight": "220",
    "number": 13,
    "country": "United States",
    "team": "Oklahoma City Thunder",
    "conference": "Western Conference",
    "season": "2011-2012",
    "salary": 5,
    "unlockedlevel": 45,
    "tier": 2,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 71,
            "tendency": 38
        },
        "dunk": {
            "value": 80,
            "tendency": 6
        },
        "midrange": {
            "value": 75,
            "tendency": 10
        },
        "outside": {
            "value": 71,
            "tendency": 46
        },
        "drawfoul": 71,
        "freethrow": 85,
        "interior": 69,
        "perimeter": 68,
        "offensiverebound": 61,
        "defensiverebound": 69,
        "speed": 77,
        "vertical": 82,
        "strength": 84,
        "hands": 81,
        "stamina": 92,
        "hustle": 80,
        "passing": 68,
        "steal": 57,
        "block": 43,
        "offensiveconsistency": 83,
        "defensiveconsistency": 61
    },
    "position": "SG/SF",
    "fgaintensity": 1,
    "fgaaverage": 10,
    "color1": "#5e8bd1",
    "color2": "#244296",
    "color3": "#ffffff",
    "image": "harden_james_oklahomacity_thunder"
}, {
    "id": "0274",
    "type": "player",
    "first": "Marvin",
    "last": "Bagley",
    "height": "6-11",
    "weight": "234",
    "number": 35,
    "country": "United States",
    "team": "Sacramento Kings",
    "conference": "Western Conference",
    "season": "2018-2019",
    "salary": 7,
    "unlockedlevel": 30,
    "tier": 3,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 76,
            "tendency": 56
        },
        "dunk": {
            "value": 82,
            "tendency": 12
        },
        "midrange": {
            "value": 67,
            "tendency": 19
        },
        "outside": {
            "value": 70,
            "tendency": 13
        },
        "drawfoul": 64,
        "freethrow": 70,
        "interior": 79,
        "perimeter": 70,
        "offensiverebound": 74,
        "defensiverebound": 74,
        "speed": 69,
        "vertical": 81,
        "strength": 79,
        "hands": 79,
        "stamina": 89,
        "hustle": 77,
        "passing": 58,
        "steal": 50,
        "block": 55,
        "offensiveconsistency": 75,
        "defensiveconsistency": 77
    },
    "position": "C/PF",
    "fgaintensity": 1,
    "fgaaverage": 11,
    "color1": "#403f49",
    "color2": "#171314",
    "color3": "#b4b4c3",
    "image": "bagley_marvin_sacramento_kings"
}, {
    "id": "0275",
    "type": "player",
    "first": "Joe",
    "last": "Ingles",
    "height": "6-8",
    "weight": "226",
    "number": 2,
    "country": "Australia",
    "team": "Utah Jazz",
    "conference": "Western Conference",
    "season": "2018-2019",
    "salary": 14,
    "unlockedlevel": 27,
    "tier": 3,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 70,
            "tendency": 33
        },
        "dunk": {
            "value": 71,
            "tendency": 0
        },
        "midrange": {
            "value": 75,
            "tendency": 7
        },
        "outside": {
            "value": 73,
            "tendency": 60
        },
        "drawfoul": 53,
        "freethrow": 72,
        "interior": 74,
        "perimeter": 72,
        "offensiverebound": 60,
        "defensiverebound": 69,
        "speed": 71,
        "vertical": 73,
        "strength": 77,
        "hands": 80,
        "stamina": 92,
        "hustle": 79,
        "passing": 76,
        "steal": 60,
        "block": 45,
        "offensiveconsistency": 79,
        "defensiveconsistency": 75
    },
    "position": "PF/SF",
    "fgaintensity": 1,
    "fgaaverage": 10,
    "color1": "#e0bb20",
    "color2": "#d33516",
    "color3": "#ffffff",
    "image": "ingles_joe_utah_jazz"
}, {
    "id": "0276",
    "type": "player",
    "first": "Tyreke",
    "last": "Evans",
    "height": "6-6",
    "weight": "220",
    "number": 12,
    "country": "United States",
    "team": "Indiana Pacers",
    "conference": "Eastern Conference",
    "season": "2018-2019",
    "salary": 12,
    "unlockedlevel": 23,
    "tier": 3,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 70,
            "tendency": 52
        },
        "dunk": {
            "value": 70,
            "tendency": 0
        },
        "midrange": {
            "value": 68,
            "tendency": 15
        },
        "outside": {
            "value": 75,
            "tendency": 33
        },
        "drawfoul": 56,
        "freethrow": 72,
        "interior": 73,
        "perimeter": 76,
        "offensiverebound": 61,
        "defensiverebound": 65,
        "speed": 73,
        "vertical": 76,
        "strength": 78,
        "hands": 77,
        "stamina": 86,
        "hustle": 75,
        "passing": 63,
        "steal": 56,
        "block": 45,
        "offensiveconsistency": 74,
        "defensiveconsistency": 72
    },
    "position": "SG/SF",
    "fgaintensity": 1,
    "fgaaverage": 10,
    "color1": "#fff366",
    "color2": "#eace2f",
    "color3": "#1e3259",
    "image": "evans_tyreke_indiana_pacers"
}, {
    "id": "0277",
    "type": "player",
    "first": "Tayshaun",
    "last": "Prince",
    "height": "6-9",
    "weight": "212",
    "number": 12,
    "country": "United States",
    "team": "Detroit Pistons",
    "conference": "Eastern Conference",
    "season": "2004-2005",
    "salary": 1,
    "unlockedlevel": 65,
    "tier": 2,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 75,
            "tendency": 42
        },
        "dunk": {
            "value": 77,
            "tendency": 8
        },
        "midrange": {
            "value": 73,
            "tendency": 36
        },
        "outside": {
            "value": 68,
            "tendency": 14
        },
        "drawfoul": 60,
        "freethrow": 81,
        "interior": 79,
        "perimeter": 81,
        "offensiverebound": 68,
        "defensiverebound": 70,
        "speed": 74,
        "vertical": 79,
        "strength": 75,
        "hands": 78,
        "stamina": 95,
        "hustle": 80,
        "passing": 66,
        "steal": 54,
        "block": 54,
        "offensiveconsistency": 77,
        "defensiveconsistency": 80
    },
    "position": "SF",
    "fgaintensity": 1,
    "fgaaverage": 12,
    "color1": "#bb2737",
    "color2": "#dd4e5f",
    "color3": "#ffffff",
    "image": "prince_tayshaun_detroit_pistons"
}, {
    "id": "0278",
    "type": "player",
    "first": "DeMar",
    "last": "DeRozan",
    "height": "6-7",
    "weight": "220",
    "number": 10,
    "country": "United States",
    "team": "San Antonio Spurs",
    "conference": "Western Conference",
    "season": "2018-2019",
    "salary": 28,
    "unlockedlevel": 85,
    "tier": 1,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 82,
            "tendency": 43
        },
        "dunk": {
            "value": 80,
            "tendency": 2
        },
        "midrange": {
            "value": 75,
            "tendency": 51
        },
        "outside": {
            "value": 67,
            "tendency": 4
        },
        "drawfoul": 70,
        "freethrow": 83,
        "interior": 76,
        "perimeter": 75,
        "offensiverebound": 76,
        "defensiverebound": 62,
        "speed": 79,
        "vertical": 81,
        "strength": 79,
        "hands": 81,
        "stamina": 94,
        "hustle": 79,
        "passing": 78,
        "steal": 59,
        "block": 48,
        "offensiveconsistency": 84,
        "defensiveconsistency": 72
    },
    "position": "SF/SG",
    "fgaintensity": 2,
    "fgaaverage": 17,
    "color1": "#ffffff",
    "color2": "#e5e5e5",
    "color3": "#332c31",
    "image": "derozan_demar_sanantonio_spurs"
}, {
    "id": "0279",
    "type": "player",
    "first": "Aaron",
    "last": "Gordon",
    "height": "6-9",
    "weight": "220",
    "number": 0,
    "country": "United States",
    "team": "Orlando Magic",
    "conference": "Eastern Conference",
    "season": "2018-2019",
    "salary": 22,
    "unlockedlevel": 76,
    "tier": 2,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 73,
            "tendency": 34
        },
        "dunk": {
            "value": 95,
            "tendency": 11
        },
        "midrange": {
            "value": 72,
            "tendency": 22
        },
        "outside": {
            "value": 74,
            "tendency": 33
        },
        "drawfoul": 60,
        "freethrow": 73,
        "interior": 79,
        "perimeter": 80,
        "offensiverebound": 68,
        "defensiverebound": 77,
        "speed": 78,
        "vertical": 90,
        "strength": 80,
        "hands": 80,
        "stamina": 94,
        "hustle": 81,
        "passing": 68,
        "steal": 52,
        "block": 51,
        "offensiveconsistency": 76,
        "defensiveconsistency": 79
    },
    "position": "PF/SF",
    "fgaintensity": 1,
    "fgaaverage": 13,
    "color1": "#4061bf",
    "color2": "#182563",
    "color3": "#ffffff",
    "image": "gordon_aaron_orlando_magic"
}, {
    "id": "0280",
    "type": "player",
    "first": "Damian",
    "last": "Lillard",
    "height": "6-3",
    "weight": "195",
    "number": 0,
    "country": "United States",
    "team": "Portland Trail Blazers",
    "conference": "Western Conference",
    "season": "2018-2019",
    "salary": 28,
    "unlockedlevel": 87,
    "tier": 1,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 74,
            "tendency": 34
        },
        "dunk": {
            "value": 71,
            "tendency": 11
        },
        "midrange": {
            "value": 76,
            "tendency": 22
        },
        "outside": {
            "value": 85,
            "tendency": 33
        },
        "drawfoul": 72,
        "freethrow": 91,
        "interior": 74,
        "perimeter": 76,
        "offensiverebound": 63,
        "defensiverebound": 70,
        "speed": 81,
        "vertical": 81,
        "strength": 76,
        "hands": 85,
        "stamina": 94,
        "hustle": 83,
        "passing": 80,
        "steal": 59,
        "block": 46,
        "offensiveconsistency": 88,
        "defensiveconsistency": 76
    },
    "position": "PG",
    "fgaintensity": 2,
    "fgaaverage": 19,
    "color1": "#e84d4d",
    "color2": "#aa2222",
    "color3": "#ffffff",
    "image": "lillard_damian_portland_trailblazers"
}, {
    "id": "0281",
    "type": "player",
    "first": "Chris",
    "last": "Paul",
    "height": "6-0",
    "weight": "175",
    "number": 3,
    "country": "United States",
    "team": "Houston Rockets",
    "conference": "Western Conference",
    "season": "2018-2019",
    "salary": 36,
    "unlockedlevel": 64,
    "tier": 2,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 74,
            "tendency": 21
        },
        "dunk": {
            "value": 60,
            "tendency": 0
        },
        "midrange": {
            "value": 71,
            "tendency": 30
        },
        "outside": {
            "value": 79,
            "tendency": 49
        },
        "drawfoul": 62,
        "freethrow": 86,
        "interior": 70,
        "perimeter": 77,
        "offensiverebound": 62,
        "defensiverebound": 71,
        "speed": 80,
        "vertical": 75,
        "strength": 75,
        "hands": 88,
        "stamina": 93,
        "hustle": 80,
        "passing": 85,
        "steal": 72,
        "block": 45,
        "offensiveconsistency": 80,
        "defensiveconsistency": 80
    },
    "position": "PG",
    "fgaintensity": 2,
    "fgaaverage": 16,
    "color1": "#e64e4e",
    "color2": "#851d1e",
    "color3": "#dfc596",
    "image": "paul_chris_houston_rockets"
}, {
    "id": "0282",
    "type": "player",
    "first": "Russell",
    "last": "Westbrook",
    "height": "6-3",
    "weight": "200",
    "number": 0,
    "country": "United States",
    "team": "Oklahoma City Thunder",
    "conference": "Western Conference",
    "season": "2018-2019",
    "salary": 36,
    "unlockedlevel": 90,
    "tier": 1,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 77,
            "tendency": 42
        },
        "dunk": {
            "value": 86,
            "tendency": 3
        },
        "midrange": {
            "value": 74,
            "tendency": 27
        },
        "outside": {
            "value": 75,
            "tendency": 28
        },
        "drawfoul": 72,
        "freethrow": 66,
        "interior": 77,
        "perimeter": 79,
        "offensiverebound": 67,
        "defensiverebound": 92,
        "speed": 86,
        "vertical": 81,
        "strength": 80,
        "hands": 86,
        "stamina": 95,
        "hustle": 88,
        "passing": 94,
        "steal": 74,
        "block": 48,
        "offensiveconsistency": 74,
        "defensiveconsistency": 71
    },
    "position": "PG/SG",
    "fgaintensity": 2,
    "fgaaverage": 20,
    "color1": "#28376d",
    "color2": "#161a27",
    "color3": "#7ed5fd",
    "image": "westbrook_russell_oklahomacity_thunder"
}, {
    "id": "0283",
    "type": "player",
    "first": "Kevin",
    "last": "Durant",
    "height": "6-9",
    "weight": "240",
    "number": 35,
    "country": "United States",
    "team": "Golden States Warriors",
    "conference": "Western Conference",
    "season": "2018-2019",
    "salary": 30,
    "unlockedlevel": 97,
    "tier": 1,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 79,
            "tendency": 20
        },
        "dunk": {
            "value": 87,
            "tendency": 9
        },
        "midrange": {
            "value": 76,
            "tendency": 43
        },
        "outside": {
            "value": 79,
            "tendency": 28
        },
        "drawfoul": 74,
        "freethrow": 88,
        "interior": 83,
        "perimeter": 79,
        "offensiverebound": 61,
        "defensiverebound": 79,
        "speed": 84,
        "vertical": 80,
        "strength": 79,
        "hands": 85,
        "stamina": 94,
        "hustle": 85,
        "passing": 76,
        "steal": 53,
        "block": 57,
        "offensiveconsistency": 95,
        "defensiveconsistency": 82
    },
    "position": "PF/SF",
    "fgaintensity": 2,
    "fgaaverage": 18,
    "color1": "#f7e67c",
    "color2": "#ffd522",
    "color3": "#38457a",
    "image": "durant_kevin_goldenstate_warriors"
}, {
    "id": "0284",
    "type": "player",
    "first": "Pascal",
    "last": "Siakam",
    "height": "6-9",
    "weight": "230",
    "number": 43,
    "country": "Cameroon",
    "team": "Toronto Raptors",
    "conference": "Eastern Conference",
    "season": "2018-2019",
    "salary": 2,
    "unlockedlevel": 73,
    "tier": 2,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 76,
            "tendency": 64
        },
        "dunk": {
            "value": 81,
            "tendency": 6
        },
        "midrange": {
            "value": 71,
            "tendency": 7
        },
        "outside": {
            "value": 68,
            "tendency": 23
        },
        "drawfoul": 62,
        "freethrow": 78,
        "interior": 83,
        "perimeter": 79,
        "offensiverebound": 68,
        "defensiverebound": 76,
        "speed": 84,
        "vertical": 80,
        "strength": 79,
        "hands": 85,
        "stamina": 93,
        "hustle": 85,
        "passing": 66,
        "steal": 55,
        "block": 51,
        "offensiveconsistency": 95,
        "defensiveconsistency": 82
    },
    "position": "PF",
    "fgaintensity": 1,
    "fgaaverage": 12,
    "color1": "#5e5454",
    "color2": "#111010",
    "color3": "#ffffff",
    "image": "siakam_pascal_toronto_raptors"
}, {
    "id": "0285",
    "type": "player",
    "first": "Deandre",
    "last": "Ayton",
    "height": "7-1",
    "weight": "250",
    "number": 22,
    "country": "Bahamas",
    "team": "Phoenix Suns",
    "conference": "Western Conference",
    "season": "2018-2019",
    "salary": 2,
    "unlockedlevel": 48,
    "tier": 3,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 79,
            "tendency": 53
        },
        "dunk": {
            "value": 86,
            "tendency": 16
        },
        "midrange": {
            "value": 68,
            "tendency": 30
        },
        "outside": {
            "value": 67,
            "tendency": 1
        },
        "drawfoul": 58,
        "freethrow": 75,
        "interior": 74,
        "perimeter": 69,
        "offensiverebound": 77,
        "defensiverebound": 83,
        "speed": 72,
        "vertical": 81,
        "strength": 86,
        "hands": 80,
        "stamina": 92,
        "hustle": 81,
        "passing": 61,
        "steal": 55,
        "block": 54,
        "offensiveconsistency": 77,
        "defensiveconsistency": 71
    },
    "position": "C",
    "fgaintensity": 1,
    "fgaaverage": 12,
    "color1": "#ffffff",
    "color2": "#ede2f7",
    "color3": "#4c3a4f",
    "image": "ayton_deandre_phoenix_suns"
}, {
    "id": "0286",
    "type": "player",
    "first": "Serge",
    "last": "Ibaka",
    "height": "6-10",
    "weight": "235",
    "number": 22,
    "country": "Democratic Republic of the Congo",
    "team": "Toronto Raptors",
    "conference": "Eastern Conference",
    "season": "2018-2019",
    "salary": 22,
    "unlockedlevel": 62,
    "tier": 2,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 76,
            "tendency": 40
        },
        "dunk": {
            "value": 79,
            "tendency": 9
        },
        "midrange": {
            "value": 72,
            "tendency": 32
        },
        "outside": {
            "value": 71,
            "tendency": 19
        },
        "drawfoul": 57,
        "freethrow": 76,
        "interior": 81,
        "perimeter": 79,
        "offensiverebound": 71,
        "defensiverebound": 78,
        "speed": 75,
        "vertical": 77,
        "strength": 87,
        "hands": 77,
        "stamina": 90,
        "hustle": 83,
        "passing": 59,
        "steal": 47,
        "block": 61,
        "offensiveconsistency": 72,
        "defensiveconsistency": 83
    },
    "position": "C",
    "fgaintensity": 1,
    "fgaaverage": 12,
    "color1": "#fb5555",
    "color2": "#af2222",
    "color3": "#dadae5",
    "image": "ibaka_serge_toronto_raptors"
}, {
    "id": "0287",
    "type": "player",
    "first": "Shai",
    "last": "Gilgeous-Alexander",
    "height": "6-6",
    "weight": "181",
    "number": 2,
    "country": "Canada",
    "team": "Los Angeles Clippers",
    "conference": "Western Conference",
    "season": "2018-2019",
    "salary": 3,
    "unlockedlevel": 42,
    "tier": 3,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 73,
            "tendency": 36
        },
        "dunk": {
            "value": 75,
            "tendency": 2
        },
        "midrange": {
            "value": 70,
            "tendency": 32
        },
        "outside": {
            "value": 69,
            "tendency": 30
        },
        "drawfoul": 57,
        "freethrow": 81,
        "interior": 70,
        "perimeter": 73,
        "offensiverebound": 62,
        "defensiverebound": 64,
        "speed": 78,
        "vertical": 79,
        "strength": 73,
        "hands": 76,
        "stamina": 89,
        "hustle": 76,
        "passing": 67,
        "steal": 60,
        "block": 49,
        "offensiveconsistency": 70,
        "defensiveconsistency": 70
    },
    "position": "PG/SG",
    "fgaintensity": 1,
    "fgaaverage": 9,
    "color1": "#20293e",
    "color2": "#0b0b0b",
    "color3": "#eceeff",
    "image": "gilgeous-alexander_shai_losangeles_clippers"
}, {
    "id": "0288",
    "type": "player",
    "first": "Dennis",
    "last": "Smith Jr",
    "height": "6-3",
    "weight": "195",
    "number": 5,
    "country": "United States",
    "team": "New York Knicks",
    "conference": "Eastern Conference",
    "season": "2018-2019",
    "salary": 4,
    "unlockedlevel": 47,
    "tier": 3,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 72,
            "tendency": 46
        },
        "dunk": {
            "value": 88,
            "tendency": 4
        },
        "midrange": {
            "value": 71,
            "tendency": 22
        },
        "outside": {
            "value": 73,
            "tendency": 28
        },
        "drawfoul": 59,
        "freethrow": 64,
        "interior": 69,
        "perimeter": 75,
        "offensiverebound": 62,
        "defensiverebound": 65,
        "speed": 79,
        "vertical": 88,
        "strength": 80,
        "hands": 81,
        "stamina": 91,
        "hustle": 79,
        "passing": 72,
        "steal": 62,
        "block": 46,
        "offensiveconsistency": 79,
        "defensiveconsistency": 76
    },
    "position": "PG",
    "fgaintensity": 1,
    "fgaaverage": 14,
    "color1": "#ffffff",
    "color2": "#f6e8db",
    "color3": "#f97d3e",
    "image": "smithjr_dennis_newyork_knicks"
}, {
    "id": "0289",
    "type": "player",
    "first": "Damyean",
    "last": "Dotson",
    "height": "6-6",
    "weight": "210",
    "number": 21,
    "country": "United States",
    "team": "New York Knicks",
    "conference": "Eastern Conference",
    "season": "2018-2019",
    "salary": 1,
    "unlockedlevel": 5,
    "tier": 4,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 69,
            "tendency": 22
        },
        "dunk": {
            "value": 76,
            "tendency": 1
        },
        "midrange": {
            "value": 75,
            "tendency": 28
        },
        "outside": {
            "value": 75,
            "tendency": 49
        },
        "drawfoul": 53,
        "freethrow": 75,
        "interior": 67,
        "perimeter": 71,
        "offensiverebound": 61,
        "defensiverebound": 68,
        "speed": 77,
        "vertical": 80,
        "strength": 75,
        "hands": 77,
        "stamina": 90,
        "hustle": 80,
        "passing": 61,
        "steal": 55,
        "block": 42,
        "offensiveconsistency": 72,
        "defensiveconsistency": 71
    },
    "position": "SF/SG",
    "fgaintensity": 1,
    "fgaaverage": 10,
    "color1": "#ffffff",
    "color2": "#f4eeea",
    "color3": "#50537f",
    "image": "dotson_damyean_newyork_knicks"
}, {
    "id": "0290",
    "type": "player",
    "first": "Kevin",
    "last": "Knox",
    "height": "6-9",
    "weight": "215",
    "number": 20,
    "country": "United States",
    "team": "New York Knicks",
    "conference": "Eastern Conference",
    "season": "2018-2019",
    "salary": 4,
    "unlockedlevel": 11,
    "tier": 3,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 72,
            "tendency": 34
        },
        "dunk": {
            "value": 81,
            "tendency": 3
        },
        "midrange": {
            "value": 71,
            "tendency": 23
        },
        "outside": {
            "value": 76,
            "tendency": 40
        },
        "drawfoul": 58,
        "freethrow": 73,
        "interior": 70,
        "perimeter": 72,
        "offensiverebound": 63,
        "defensiverebound": 69,
        "speed": 76,
        "vertical": 79,
        "strength": 74,
        "hands": 79,
        "stamina": 91,
        "hustle": 81,
        "passing": 58,
        "steal": 50,
        "block": 45,
        "offensiveconsistency": 76,
        "defensiveconsistency": 71
    },
    "position": "SF/PF",
    "fgaintensity": 1,
    "fgaaverage": 12,
    "color1": "#3e52b5",
    "color2": "#252d66",
    "color3": "#fc8754",
    "image": "knox_kevin_newyork_knicks"
}, {
    "id": "0291",
    "type": "player",
    "first": "Mitchell",
    "last": "Robinson",
    "height": "7-1",
    "weight": "240",
    "number": 26,
    "country": "United States",
    "team": "New York Knicks",
    "conference": "Eastern Conference",
    "season": "2018-2019",
    "salary": 1,
    "unlockedlevel": 7,
    "tier": 3,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 70,
            "tendency": 46
        },
        "dunk": {
            "value": 85,
            "tendency": 53
        },
        "midrange": {
            "value": 65,
            "tendency": 1
        },
        "outside": {
            "value": 67,
            "tendency": 0
        },
        "drawfoul": 55,
        "freethrow": 59,
        "interior": 81,
        "perimeter": 76,
        "offensiverebound": 74,
        "defensiverebound": 69,
        "speed": 72,
        "vertical": 82,
        "strength": 80,
        "hands": 76,
        "stamina": 86,
        "hustle": 82,
        "passing": 56,
        "steal": 54,
        "block": 78,
        "offensiveconsistency": 67,
        "defensiveconsistency": 81
    },
    "position": "C",
    "fgaintensity": 0,
    "fgaaverage": 4,
    "color1": "#39475b",
    "color2": "#222226",
    "color3": "#ff9b64",
    "image": "robinson_mitchell_newyork_knicks"
}, {
    "id": "0292",
    "type": "player",
    "first": "Lance",
    "last": "Thomas",
    "height": "6-8",
    "weight": "240",
    "number": 42,
    "country": "United States",
    "team": "New York Knicks",
    "conference": "Eastern Conference",
    "season": "2018-2019",
    "salary": 7,
    "unlockedlevel": 0,
    "tier": 4,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 68,
            "tendency": 30
        },
        "dunk": {
            "value": 77,
            "tendency": 6
        },
        "midrange": {
            "value": 69,
            "tendency": 24
        },
        "outside": {
            "value": 68,
            "tendency": 40
        },
        "drawfoul": 50,
        "freethrow": 79,
        "interior": 75,
        "perimeter": 76,
        "offensiverebound": 61,
        "defensiverebound": 63,
        "speed": 75,
        "vertical": 79,
        "strength": 80,
        "hands": 79,
        "stamina": 84,
        "hustle": 83,
        "passing": 56,
        "steal": 47,
        "block": 43,
        "offensiveconsistency": 75,
        "defensiveconsistency": 75
    },
    "position": "PF",
    "fgaintensity": 0,
    "fgaaverage": 4,
    "color1": "#405eb5",
    "color2": "#1e2c78",
    "color3": "#ccc4c7",
    "image": "thomas_lance_newyork_knicks"
}, {
    "id": "0293",
    "type": "player",
    "first": "Allonzo",
    "last": "Trier",
    "height": "6-5",
    "weight": "200",
    "number": 14,
    "country": "United States",
    "team": "New York Knicks",
    "conference": "Eastern Conference",
    "season": "2018-2019",
    "salary": 3,
    "unlockedlevel": 4,
    "tier": 4,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 70,
            "tendency": 42
        },
        "dunk": {
            "value": 79,
            "tendency": 2
        },
        "midrange": {
            "value": 69,
            "tendency": 30
        },
        "outside": {
            "value": 72,
            "tendency": 26
        },
        "drawfoul": 61,
        "freethrow": 80,
        "interior": 71,
        "perimeter": 73,
        "offensiverebound": 61,
        "defensiverebound": 66,
        "speed": 76,
        "vertical": 78,
        "strength": 72,
        "hands": 77,
        "stamina": 88,
        "hustle": 77,
        "passing": 61,
        "steal": 47,
        "block": 43,
        "offensiveconsistency": 73,
        "defensiveconsistency": 70
    },
    "position": "SG",
    "fgaintensity": 1,
    "fgaaverage": 8,
    "color1": "#3957aa",
    "color2": "#233375",
    "color3": "#ffffff",
    "image": "trier_allonzo_newyork_knicks"
}, {
    "id": "0294",
    "type": "player",
    "first": "Andrew",
    "last": "Bynum",
    "height": "7-0",
    "weight": "285",
    "number": 17,
    "country": "United States",
    "team": "Los Angeles Lakers",
    "conference": "Western Conference",
    "season": "2008-2009",
    "salary": 3,
    "unlockedlevel": 71,
    "tier": 2,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 77,
            "tendency": 65
        },
        "dunk": {
            "value": 82,
            "tendency": 21
        },
        "midrange": {
            "value": 66,
            "tendency": 14
        },
        "outside": {
            "value": 67,
            "tendency": 0
        },
        "drawfoul": 64,
        "freethrow": 71,
        "interior": 80,
        "perimeter": 71,
        "offensiverebound": 74,
        "defensiverebound": 75,
        "speed": 70,
        "vertical": 80,
        "strength": 85,
        "hands": 80,
        "stamina": 91,
        "hustle": 75,
        "passing": 59,
        "steal": 47,
        "block": 67,
        "offensiveconsistency": 75,
        "defensiveconsistency": 77
    },
    "position": "C",
    "fgaintensity": 1,
    "fgaaverage": 10,
    "color1": "#F9DC62",
    "color2": "#E5AC2E",
    "color3": "#463A55",
    "image": "bynum_andrew_losangeles_lakers"
}, {
    "id": "0295",
    "type": "player",
    "first": "Derek",
    "last": "Fisher",
    "height": "6-1",
    "weight": "200",
    "number": 2,
    "country": "United States",
    "team": "Los Angeles Lakers",
    "conference": "Western Conference",
    "season": "2008-2009",
    "salary": 5,
    "unlockedlevel": 52,
    "tier": 3,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 68,
            "tendency": 21
        },
        "dunk": {
            "value": 65,
            "tendency": 0
        },
        "midrange": {
            "value": 77,
            "tendency": 35
        },
        "outside": {
            "value": 72,
            "tendency": 44
        },
        "drawfoul": 53,
        "freethrow": 85,
        "interior": 71,
        "perimeter": 74,
        "offensiverebound": 60,
        "defensiverebound": 63,
        "speed": 78,
        "vertical": 74,
        "strength": 83,
        "hands": 82,
        "stamina": 91,
        "hustle": 78,
        "passing": 66,
        "steal": 60,
        "block": 42,
        "offensiveconsistency": 80,
        "defensiveconsistency": 72
    },
    "position": "PG",
    "fgaintensity": 1,
    "fgaaverage": 8,
    "color1": "#534D7C",
    "color2": "#291942",
    "color3": "#FCC13D",
    "image": "fisher_derek_losangeles_lakers"
}, {
    "id": "0296",
    "type": "player",
    "first": "Lamar",
    "last": "Odom",
    "height": "6-10",
    "weight": "220",
    "number": 7,
    "country": "United States",
    "team": "Los Angeles Lakers",
    "conference": "Western Conference",
    "season": "2008-2009",
    "salary": 14,
    "unlockedlevel": 62,
    "tier": 2,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 73,
            "tendency": 61
        },
        "dunk": {
            "value": 72,
            "tendency": 6
        },
        "midrange": {
            "value": 69,
            "tendency": 18
        },
        "outside": {
            "value": 68,
            "tendency": 15
        },
        "drawfoul": 60,
        "freethrow": 62,
        "interior": 77,
        "perimeter": 76,
        "offensiverebound": 72,
        "defensiverebound": 78,
        "speed": 79,
        "vertical": 77,
        "strength": 85,
        "hands": 89,
        "stamina": 91,
        "hustle": 80,
        "passing": 64,
        "steal": 57,
        "block": 60,
        "offensiveconsistency": 81,
        "defensiveconsistency": 76
    },
    "position": "PF",
    "fgaintensity": 1,
    "fgaaverage": 9,
    "color1": "#F9C85D",
    "color2": "#EEAC0F",
    "color3": "#524270",
    "image": "odom_lamar_losangeles_lakers"
}, {
    "id": "0297",
    "type": "player",
    "first": "Pau",
    "last": "Gasol",
    "height": "7-0",
    "weight": "250",
    "number": 16,
    "country": "Spain",
    "team": "Los Angeles Lakers",
    "conference": "Western Conference",
    "season": "2008-2009",
    "salary": 15,
    "unlockedlevel": 69,
    "tier": 1,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 81,
            "tendency": 60
        },
        "dunk": {
            "value": 86,
            "tendency": 12
        },
        "midrange": {
            "value": 68,
            "tendency": 28
        },
        "outside": {
            "value": 67,
            "tendency": 0
        },
        "drawfoul": 68,
        "freethrow": 78,
        "interior": 81,
        "perimeter": 72,
        "offensiverebound": 77,
        "defensiverebound": 80,
        "speed": 77,
        "vertical": 78,
        "strength": 84,
        "hands": 87,
        "stamina": 95,
        "hustle": 81,
        "passing": 67,
        "steal": 50,
        "block": 55,
        "offensiveconsistency": 84,
        "defensiveconsistency": 80
    },
    "position": "C/PF",
    "fgaintensity": 1,
    "fgaaverage": 13,
    "color1": "#573CAA",
    "color2": "#2F1D60",
    "color3": "#F7AA5C",
    "image": "gasol_pau_losangeles_lakers"
}, {
    "id": "0298",
    "type": "player",
    "first": "Trevor",
    "last": "Ariza",
    "height": "6-8",
    "weight": "215",
    "number": 3,
    "country": "United States",
    "team": "Los Angeles Lakers",
    "conference": "Western Conference",
    "season": "2008-2009",
    "salary": 3,
    "unlockedlevel": 49,
    "tier": 3,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 70,
            "tendency": 36
        },
        "dunk": {
            "value": 80,
            "tendency": 12
        },
        "midrange": {
            "value": 70,
            "tendency": 20
        },
        "outside": {
            "value": 70,
            "tendency": 32
        },
        "drawfoul": 55,
        "freethrow": 71,
        "interior": 78,
        "perimeter": 79,
        "offensiverebound": 66,
        "defensiverebound": 67,
        "speed": 75,
        "vertical": 81,
        "strength": 77,
        "hands": 80,
        "stamina": 88,
        "hustle": 82,
        "passing": 61,
        "steal": 69,
        "block": 45,
        "offensiveconsistency": 71,
        "defensiveconsistency": 78
    },
    "position": "SF",
    "fgaintensity": 0,
    "fgaaverage": 7,
    "color1": "#F9DB5D",
    "color2": "#EDB015",
    "color3": "#4D2E63",
    "image": "ariza_trevor_losangeles_lakers"
}, {
    "id": "0299",
    "type": "player",
    "first": "Jordan",
    "last": "Farmar",
    "height": "6-2",
    "weight": "180",
    "number": 5,
    "country": "United States",
    "team": "Los Angeles Lakers",
    "conference": "Western Conference",
    "season": "2008-2009",
    "salary": 1,
    "unlockedlevel": 12,
    "tier": 3,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 69,
            "tendency": 37
        },
        "dunk": {
            "value": 77,
            "tendency": 3
        },
        "midrange": {
            "value": 69,
            "tendency": 25
        },
        "outside": {
            "value": 71,
            "tendency": 35
        },
        "drawfoul": 52,
        "freethrow": 58,
        "interior": 72,
        "perimeter": 75,
        "offensiverebound": 60,
        "defensiverebound": 62,
        "speed": 79,
        "vertical": 80,
        "strength": 75,
        "hands": 77,
        "stamina": 85,
        "hustle": 80,
        "passing": 63,
        "steal": 55,
        "block": 43,
        "offensiveconsistency": 73,
        "defensiveconsistency": 70
    },
    "position": "PG",
    "fgaintensity": 0,
    "fgaaverage": 6,
    "color1": "#6253A5",
    "color2": "#463468",
    "color3": "#F2E9E4",
    "image": "farmar_jordan_losangeles_lakers"
}, {
    "id": "0300",
    "type": "player",
    "first": "Luke",
    "last": "Walton",
    "height": "6-8",
    "weight": "235",
    "number": 4,
    "country": "United States",
    "team": "Los Angeles Lakers",
    "conference": "Western Conference",
    "season": "2008-2009",
    "salary": 4,
    "unlockedlevel": 8,
    "tier": 3,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "ratings": {
        "inside": {
            "value": 69,
            "tendency": 45
        },
        "dunk": {
            "value": 75,
            "tendency": 2
        },
        "midrange": {
            "value": 69,
            "tendency": 34
        },
        "outside": {
            "value": 67,
            "tendency": 19
        },
        "drawfoul": 51,
        "freethrow": 72,
        "interior": 77,
        "perimeter": 78,
        "offensiverebound": 63,
        "defensiverebound": 63,
        "speed": 77,
        "vertical": 80,
        "strength": 80,
        "hands": 74,
        "stamina": 85,
        "hustle": 81,
        "passing": 64,
        "steal": 48,
        "block": 43,
        "offensiveconsistency": 70,
        "defensiveconsistency": 72
    },
    "position": "SF",
    "fgaintensity": 0,
    "fgaaverage": 5,
    "color1": "#7B5EAA",
    "color2": "#2E1644",
    "color3": "#F0BC51",
    "image": "walton_luke_losangeles_lakers"
}];

const coaches_json = [{
    "id": "coach-1",
    "type": "coach",
    "name": "Luke Walton",
    "first": "Luke",
    "last": "Walton",
    "number": 999,
    "team": "Los Angeles Lakers",
    "conference": "Western Conference",
    "season": "2017-2018",
    "salary": 6,
    "unlockedlevel": 10,
    "tier": 4,
    "rarity": "Rare",
    "level": 1,
    "count": 1,
    "position": "X",
    "color1": "#552583",
    "color2": "#FDB927",
    "color3": "#FDB927",
    "color3": "#000000",
    "color4": "#FFFFFF",
    "image": "walton_luke"
}, {
    "id": "coach-2",
    "type": "coach",
    "name": "Gregg Popovich",
    "first": "Gregg",
    "last": "Popovich",
    "number": 998,
    "team": "San Antonio Spurs",
    "conference": "Western Conference",
    "season": "1996-2018",
    "salary": 7,
    "unlockedlevel": 95,
    "tier": 0,
    "rarity": "Legendary",
    "level": 1,
    "count": 1,
    "position": "X",
    "color1": "#C4CED4",
    "color2": "#000000",
    "color3": "#000000",
    "color3": "#FFFFFF",
    "color4": "#EC525C",
    "image": "popovich_gregg"
}, {
    "id": "coach-3",
    "type": "coach",
    "name": "Jason Kidd",
    "first": "Jason",
    "last": "Kidd",
    "number": 997,
    "team": "Milwaukee Bucks",
    "conference": "Eastern Conference",
    "season": "2014-2018",
    "salary": 6,
    "unlockedlevel": 50,
    "tier": 2,
    "rarity": "Rare",
    "level": 1,
    "count": 1,
    "position": "X",
    "color1": "#00471B",
    "color2": "#EEE1C6",
    "color3": "#EEE1C6",
    "color3": "#0057B8",
    "color4": "#FFFFFF",
    "image": "kidd_jason"
}, {
    "id": "coach-4",
    "type": "coach",
    "name": "Fred Hoiberg",
    "first": "Fred",
    "last": "Hoiberg",
    "number": 996,
    "team": "Chicago Bulls",
    "conference": "Eastern Conference",
    "season": "2015-2018",
    "salary": 2,
    "unlockedlevel": 5,
    "tier": 4,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "position": "X",
    "color1": "#CE1141",
    "color2": "#000000",
    "color3": "#000000",
    "color3": "#FFFFFF",
    "color4": "#FDB927",
    "image": "hoiberg_fred"
}];

const arenas_json = [{
    "id": "arena-1",
    "type": "arena",
    "name": "Madison Square Garden",
    "number": 9999,
    "team": "New York Knicks",
    "conference": "Eastern Conference",
    "season": "1968-2017",
    "salary": 5,
    "unlockedlevel": 75,
    "tier": 1,
    "rarity": "Legendary",
    "level": 1,
    "count": 1,
    "position": "Z",
    "color1": "#0057B0",
    "color2": "#F58426",
    "color3": "#F58426",
    "color3": "#BEC0C2",
    "color4": "#FFFFFF",
    "image": "NewYorkKnicks_MadisonSquareGarden"
}, {
    "id": "arena-2",
    "type": "arena",
    "name": "TD Garden",
    "number": 9998,
    "team": "Boston Celtics",
    "conference": "Eastern Conference",
    "season": "1995-2017",
    "salary": 4,
    "unlockedlevel": 65,
    "tier": 1,
    "rarity": "Legendary",
    "level": 1,
    "count": 1,
    "position": "Z",
    "color1": "#008248",
    "color2": "#BA9653",
    "color3": "#BA9653",
    "color3": "#C0C0C0",
    "color4": "#FFFFFF",
    "image": "BostonCeltics_TDGarden"
}, {
    "id": "arena-3",
    "type": "arena",
    "name": "Staples Center",
    "number": 9997,
    "team": "Los Angeles Lakers",
    "conference": "Western Conference",
    "season": "1999-2017",
    "salary": 3,
    "unlockedlevel": 70,
    "tier": 1,
    "rarity": "Legendary",
    "level": 1,
    "count": 1,
    "position": "Z",
    "color1": "#552583",
    "color2": "#FDB927",
    "color3": "#FDB927",
    "color3": "#000000",
    "color4": "#FFFFFF",
    "image": "LosAngelesLakers_StaplesCenter"
}, {
    "id": "arena-4",
    "type": "arena",
    "name": "FedExForum",
    "number": 9996,
    "team": "Memphis Grizzlies",
    "conference": "Western Conference",
    "season": "2004-2017",
    "salary": 1,
    "unlockedlevel": 5,
    "tier": 3,
    "rarity": "Common",
    "level": 1,
    "count": 1,
    "position": "Z",
    "color1": "#00285E",
    "color2": "#B8CFE9",
    "color3": "#B8CFE9",
    "color3": "#6189B9",
    "color4": "#FDB927",
    "image": "MemphisGrizzlies_FedExForum"
}, {
    "id": "arena-5",
    "type": "arena",
    "name": "United Center",
    "number": 9995,
    "team": "Chicago Bulls",
    "conference": "Eastern Conference",
    "season": "1994-2017",
    "salary": 3,
    "unlockedlevel": 50,
    "tier": 1,
    "rarity": "Rare",
    "level": 1,
    "count": 1,
    "position": "Z",
    "color1": "#CE1141",
    "color2": "#000000",
    "color3": "#000000",
    "color3": "#FFFFFF",
    "color4": "#FDB927",
    "image": "ChicagoBulls_UnitedCenter"
}];
