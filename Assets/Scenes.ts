export { Scenes }

let Scenes = {
    "Scenes":
    [
        {
            "Name": "Path1",
            "Type": "Path",
            "Characters":
            [
                {
                    "Name": "Raccoon",
                    "Position": {"X":1000,"Y":650,"Z":0.8},
                    "Size": {"X":300, "Y":350},
                    "Chat": 0,
                    "ShowTooltip": true
                },
                {
                    "Name": "Bob",
                    "Position": {"X":2200,"Y":650,"Z":0.8},
                    "Size": {"X":400, "Y":550},
                    "Chat": 0,
                    "ShowTooltip": true
                },
                {
                    "Name": "Jim",
                    "Position": {"X":3000,"Y":620,"Z":0.8},
                    "Size": {"X":430, "Y":600},
                    "Chat": 0,
                    "ShowTooltip": true
                },
                {
                    "Name": "Wolf",
                    "Position": {"X":2600,"Y":770,"Z":0.8},
                    "Size": {"X":600, "Y":360},
                    "Chat": 0
                },
                {
                    "Name": "Fox",
                    "Position": {"X":4800,"Y":630,"Z":0.8},
                    "Size": {"X":400, "Y":400},
                    "Chat": 0,
                    "ShowTooltip": true
                },
                {
                    "Name": "Rabbit",
                    "Position": {"X":5100,"Y":680,"Z":0.8},
                    "Size": {"X":300, "Y":300},
                    "Chat": 0,
                    "ShowTooltip": true
                },
                {
                    "Name": "Arrow",
                    "Position": {"X":1650,"Y":500,"Z":0.8},
                    "Size": {"X":150, "Y":100},
                    "Chat": 0
                }
            ],
            "Transitions":
            [
                {
                    "Type": "Signpost",
                    "Destination": "Camp1",
                    "Tooltip": "Lower Tournament Camp",
                    "Position":  {"X":5500, "Y":680, "Z":0.7}
                }
            ]
        },
        {
            "Name": "Camp1",
            "Type": "Camp",
            "Characters": 
            [
                {
                    "Name": "Owl",
                    "Position": {"X":1500,"Y":680,"Z":0.8},
                    "Size": {"X":400, "Y":400},
                    "ShowTooltip": true,
                    "Chat": 0
                },
                {
                    "Name": "Tortoise",
                    "Position": {"X":650,"Y":600,"Z":0.9},
                    "Size": {"X":360, "Y":360},
                    "ShowTooltip": true,
                    "Chat": 0
                }
            ],
            "Transitions":
            [
                {
                    "Type": "Signpost",
                    "Flip": true,
                    "Destination": "Path1",
                    "Tooltip": "Forest Path",
                    "Position":  {"X":120, "Y":1000, "Z":1.2}
                },
                {
                    "Type": "Signpost",
                    "Destination": "Arena1",
                    "Tooltip": "Go To Archery Competition",
                    "Position":  {"X":700, "Y":1000, "Z":1.2}
                }
            ]
        },
        {
            "Name": "Arena1",
            "Dialog": "Archery",
            "Type": "Arena",
            "Set": 4,
            "Characters":
            [
                {
                    "Name": "RabbitBow",
                    "Position": {"X":380,"Y":800,"Z":1.1},
                    "Size": {"X":300, "Y":300},
                    "Chat": -1
                },
                {
                    "Name": "Fox",
                    "Position": {"X":300,"Y":850,"Z":1.2},
                    "Size": {"X":400, "Y":400},
                    "Chat": -1
                },
                {
                    "Name": "Target",
                    "Position": {"X":1600,"Y":850,"Z":1.2},
                    "Size": {"X":400, "Y":400},
                    "Chat": -1
                }
            ]
        },
        {
            "Name": "Camp1a",
            "Type": "Camp",
            "Characters": 
            [
                {
                    "Name": "Owl",
                    "Position": {"X":1500,"Y":680,"Z":0.8},
                    "ShowTooltip": true,
                    "Size": {"X":400, "Y":400},
                    "Chat": 10
                },
                {
                    "Name": "Goat",
                    "Position": {"X":200,"Y":900,"Z":1.1},
                    "ShowTooltip": true,
                    "Size": {"X":360, "Y":360},
                    "Chat": 0
                }
            ],
            "Transitions":
            [
                {
                    "Type": "Signpost",
                    "Destination": "Path2",
                    "Tooltip": "Go To Upper Way",
                    "Position":  {"X":500, "Y":1000, "Z":1.2}
                }
            ]
        },
        {
            "Name": "Path2",
            "Type": "Path",
            "Characters":
            [
                {
                    "Name": "Kangaroo",
                    "Position": {"X":1250,"Y":650,"Z":0.8},
                    "Size": {"X":550, "Y":550},
                    "ShowTooltip": true,
                    "Chat": 0
                },
                {
                    "Name": "Raccoon",
                    "Position": {"X":3200,"Y":700,"Z":0.8},
                    "Size": {"X":300, "Y":350},
                    "ShowTooltip": true,
                    "Chat": 4
                },
                {
                    "Name": "Rabbit",
                    "Position": {"X":5000,"Y":650,"Z":0.8},
                    "Size": {"X":300, "Y":300},
                    "ShowTooltip": true,
                    "Chat": 2
                },
                {
                    "Name": "Dagger",
                    "Position": {"X":2470,"Y":740,"Z":0.8},
                    "Size": {"X":150, "Y":100},
                    "Chat": 0
                }
            ],
            "Transitions":
            [
                {
                    "Type": "Signpost",
                    "Destination": "Camp2",
                    "Tooltip": "Middle Tournament Camp",
                    "Position":  {"X":5500, "Y":620, "Z":0.7}
                }
            ]
        },
        {
            "Name": "Camp2",
            "Type": "Camp",
            "Characters":
            [
                {
                    "Name": "Fox",
                    "Position": {"X":150,"Y":750,"Z":1.2},
                    "ShowTooltip": true,
                    "Size": {"X":400,"Y":400},
                    "Chat": 1
                },
                {
                    "Name": "Gator",
                    "Position": {"X":1550,"Y":600,"Z":0.8},
                    "ShowTooltip": true,
                    "Size": {"X":550,"Y":550},
                    "Chat": 0
                },
                {
                    "Name": "Goat",
                    "Position": {"X":1000,"Y":900,"Z":1.5},
                    "ShowTooltip": true,
                    "Size": {"X":360, "Y":360},
                    "Chat": 3
                }
            ],
            "Transitions":
            [
                {
                    "Type": "Signpost",
                    "Destination": "Path3",
                    "Tooltip": "Path3",
                    "Position":  {"X":1500, "Y":1000, "Z":1.2}
                }
            ]
        },
        {
            "Name": "Path3",
            "Type": "Path",
            "Characters":
            [
                {
                    "Name": "TortoiseRun",
                    "Position": {"X":600,"Y":650,"Z":0.8},
                    "ShowTooltip": true,
                    "Size": {"X":360, "Y":360},
                    "Chat": 0
                },
                {
                    "Name": "Bear",
                    "Position": {"X":2300,"Y":600,"Z":0.8},
                    "ShowTooltip": true,
                    "Size": {"X":600,"Y":600},
                    "Chat": 0
                },
                {
                    "Name": "RabbitRun",
                    "Position": {"X":4000,"Y":700,"Z":0.8},
                    "ShowTooltip": true,
                    "Size": {"X":300, "Y":300},
                    "Chat": 0
                },
                {
                    "Name": "Raccoon",
                    "Position": {"X":5300,"Y":600,"Z":0.8},
                    "ShowTooltip": true,
                    "Size": {"X":300, "Y":300},
                    "Chat": 9
                }
            ],
            "Transitions":
            [
                {
                    "Type": "Signpost",
                    "Destination": "Camp3",
                    "Tooltip": "Upper Tournament Camp",
                    "Position":  {"X":5500, "Y":620, "Z":0.7}
                }
            ]
        },
        {
            "Name": "Camp3",
            "Type": "Camp",
            "Characters":
            [
                {
                    "Name": "Kangaroo",
                    "Position": {"X":700,"Y":550,"Z":0.8},
                    "Size": {"X":550, "Y":550},
                    "ShowTooltip": true,
                    "Chat": 0
                },
                {
                    "Name": "Queen",
                    "Position": {"X":1400,"Y":600,"Z":1.1},
                    "Size": {"X":450, "Y":450},
                    "ShowTooltip": true,
                    "Chat": 0
                },
                {
                    "Name": "Fire",
                    "Position": {"X":730,"Y":820,"Z":1.5},
                    "Size": {"X":400, "Y":400},
                    "Chat": 0
                }
            ],
            "Transitions":
            [
                {
                    "Type": "Signpost",
                    "Destination": "Arena2",
                    "Tooltip": "Go To Combat",
                    "Position":  {"X":1500, "Y":1000, "Z":1.2}
                }
            ]
        },
        {
            "Name": "Arena2",
            "Type": "Arena",
            "Set": 5,
            "Characters":
            [
                {
                    "Name": "Gator",
                    "Position": {"X":1500,"Y":750,"Z":0.8},
                    "Size": {"X":550,"Y":550},
                    "Chat": 0
                }
            ],
            "Transitions":
            [
                {
                    "Type": "Signpost",
                    "Destination": "Arena2",
                    "Tooltip": "Go To Combat",
                    "Position":  {"X":1500, "Y":1000, "Z":1.2}
                }
            ]
        }
    ]
}