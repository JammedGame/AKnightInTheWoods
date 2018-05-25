export { DefaultGameObject }

let DefaultGameObject:any =
{
    Scenes:
    [
        {
            Name: "Path1",
            Type: "Path",
            Characters:
            [
                {
                    Name: "Raccoon",
                    Position: {X:1000,Y:650,Z:0.8},
                    Size: {X:300, Y:350},
                    Chat: 0
                },
                {
                    Name: "Bob",
                    Position: {X:2200,Y:650,Z:0.8},
                    Size: {X:400, Y:550},
                    Chat: 0
                },
                {
                    Name: "Jim",
                    Position: {X:3000,Y:620,Z:0.8},
                    Size: {X:430, Y:600},
                    Chat: 0
                },
                {
                    Name: "Wolf",
                    Position: {X:2600,Y:770,Z:0.8},
                    Size: {X:600, Y:360},
                    Chat: 0
                },
                {
                    Name: "Fox",
                    Position: {X:4800,Y:630,Z:0.8},
                    Size: {X:400, Y:400},
                    Chat: 0
                },
                {
                    Name: "Rabbit",
                    Position: {X:5100,Y:680,Z:0.8},
                    Size: {X:300, Y:300},
                    Chat: 0
                },
                {
                    Name: "Arrow",
                    Position: {X:1650,Y:500,Z:0.8},
                    Size: {X:150, Y:100},
                    Chat: 0
                }
            ],
            Transitions:
            [
                {
                    Type: "Signpost",
                    Destination: "Camp1",
                    Tooltip: "Lower Tournament Camp",
                    Position:  {X:5500, Y:680, Z:0.7}
                }
            ]
        },
        {
            Name: "Camp1",
            Type: "Camp",
            Characters: 
            [
                {
                    Name: "Owl",
                    Position: {X:1500,Y:680,Z:0.8},
                    Size: {X:400, Y:400},
                    Chat: 0
                },
                {
                    Name: "Tortoise",
                    Position: {X:200,Y:800,Z:1.1},
                    Size: {X:360, Y:360},
                    Chat: 0
                }
            ],
            Transitions:
            [
                {
                    Type: "Signpost",
                    Destination: "Path1",
                    Tooltip: "Go To Archery Competition",
                    Position:  {X:500, Y:1000, Z:1.2}
                }
            ]
        },
        {
            Name: "Arena1",
            Type: "Arena",
            Set: 4,
            Characters:
            [
                {
                    Name: "RabbitBow",
                    Position: {X:380,Y:800,Z:1.1},
                    Size: {X:300, Y:300},
                    Chat: -1
                },
                {
                    Name: "Fox",
                    Position: {X:300,Y:850,Z:1.2},
                    Size: {X:400, Y:400},
                    Chat: -1
                },
                {
                    Name: "Target",
                    Position: {X:1600,Y:850,Z:1.2},
                    Size: {X:400, Y:400},
                    Chat: -1
                }
            ],
            Transitions:
            [
                {
                    Type: "Signpost",
                    Destination: "Camp1a",
                    Tooltip: "Camp1a",
                    Position:  {X:1800, Y:1000, Z:1.2}
                }
            ]
        },
        {
            Name: "Camp1a",
            Type: "Camp",
            Characters: 
            [
                {
                    Name: "Owl",
                    Position: {X:1500,Y:680,Z:0.8},
                    Size: {X:400, Y:400},
                    Chat: 12
                },
                {
                    Name: "Goat",
                    Position: {X:200,Y:900,Z:1.1},
                    Size: {X:360, Y:360},
                    Chat: 0
                }
            ],
            Transitions:
            [
                {
                    Type: "Signpost",
                    Destination: "Path2",
                    Tooltip: "Go To Upper Way",
                    Position:  {X:500, Y:1000, Z:1.2}
                }
            ]
        },
        {
            Name: "Path2",
            Type: "Path",
            Characters:
            [
                {
                    Name: "Kangaroo",
                    Position: {X:1250,Y:650,Z:0.8},
                    Size: {X:550, Y:550},
                    Chat: 0
                },
                {
                    Name: "Raccoon",
                    Position: {X:3200,Y:700,Z:0.8},
                    Size: {X:300, Y:350},
                    Chat: 3
                },
                {
                    Name: "Rabbit",
                    Position: {X:5000,Y:650,Z:0.8},
                    Size: {X:300, Y:300},
                    Chat: 2
                },
                {
                    Name: "Dagger",
                    Position: {X:2470,Y:740,Z:0.8},
                    Size: {X:150, Y:100},
                    Chat: 0
                }
            ],
            Transitions:
            [
                {
                    Type: "Signpost",
                    Destination: "Camp2",
                    Tooltip: "Middle Tournament Camp",
                    Position:  {X:5500, Y:620, Z:0.7}
                }
            ]
        },
        {
            Name: "Camp2",
            Type: "Camp",
            Characters:
            [
                {
                    Name: "Fox",
                    Position: {X:150,Y:750,Z:1.2},
                    Size: {X:400,Y:400},
                    Chat: 1
                },
                {
                    Name: "Gator",
                    Position: {X:1550,Y:600,Z:0.8},
                    Size: {X:550,Y:550},
                    Chat: 0
                },
                {
                    Name: "Goat",
                    Position: {X:1000,Y:900,Z:1.5},
                    Size: {X:360, Y:360},
                    Chat: 3
                }
            ],
            Transitions:
            [
                {
                    Type: "Signpost",
                    Destination: "Path3",
                    Tooltip: "Path3",
                    Position:  {X:1500, Y:1000, Z:1.2}
                }
            ]
        },
        {
            Name: "Path3",
            Type: "Path",
            Characters:
            [
                {
                    Name: "TortoiseRun",
                    Position: {X:600,Y:650,Z:0.8},
                    Size: {X:360, Y:360},
                    Chat: 0
                },
                {
                    Name: "Bear",
                    Position: {X:2300,Y:600,Z:0.8},
                    Size: {X:600,Y:600},
                    Chat: 0
                },
                {
                    Name: "RabbitRun",
                    Position: {X:4000,Y:700,Z:0.8},
                    Size: {X:300, Y:300},
                    Chat: 3
                },
                {
                    Name: "Raccoon",
                    Position: {X:5300,Y:600,Z:0.8},
                    Size: {X:300, Y:300},
                    Chat: 11
                }
            ],
            Transitions:
            [
                {
                    Type: "Signpost",
                    Destination: "Camp3",
                    Tooltip: "Upper Tournament Camp",
                    Position:  {X:5500, Y:620, Z:0.7}
                }
            ]
        },
        {
            Name: "Camp3",
            Type: "Camp",
            Characters:
            [
                {
                    Name: "Kangaroo",
                    Position: {X:700,Y:550,Z:0.8},
                    Size: {X:550, Y:550},
                    Chat: 0
                },
                {
                    Name: "Queen",
                    Position: {X:1400,Y:600,Z:1.1},
                    Size: {X:450, Y:450},
                    Chat: 0
                },
                {
                    Name: "Fire",
                    Position: {X:730,Y:820,Z:1.5},
                    Size: {X:400, Y:400},
                    Chat: 0
                }
            ],
            Transitions:
            [
                {
                    Type: "Signpost",
                    Destination: "Arena2",
                    Tooltip: "Go To Combat",
                    Position:  {X:1500, Y:1000, Z:1.2}
                }
            ]
        },
        {
            Name: "Arena2",
            Type: "Arena",
            Set: 5,
            Characters:
            [
                {
                    Name: "Gator",
                    Position: {X:1500,Y:750,Z:0.8},
                    Size: {X:550,Y:550},
                    Chat: 0
                },
            ],
            Transitions:
            [
                {
                    Type: "Signpost",
                    Destination: "Arena2",
                    Tooltip: "Go To Combat",
                    Position:  {X:1500, Y:1000, Z:1.2}
                }
            ]
        },
    ],
    Hints: [],
    Characters:
    [
        {
            Name:"Rabbit",
            Chats:
            [
                {
                    Text: "...",
                    Options:
                    [
                        {
                            Text: "How do you do, kind sir",
                            Link: 1
                        },
                        {
                            Text: "Greetings, m'lady!",
                            Link: 1
                        }
                    ]
                },
                {
                    Text: "Did you just assume my gender?!.",
                    Options:
                    [
                        {
                            Text: "Uhh... sorry.",
                            Link: -1,
                            Action:
                            {
                                ID: "SetChat",
                                Params: 
                                {
                                    CharID: "Rabbit",
                                    Chat: -1
                                }
                            }
                        }
                    ]
                },
                {
                    Text: "...",
                    Options:
                    [
                        {
                            Text: "That was a great shot, back there.",
                            Link: 3
                        }
                    ]
                },
                {
                    Text: "Of course it was, it was perfect in fact.",
                    Options:
                    [
                        {
                            Text: "Well, judge didn't think the same.",
                            Link: 4
                        }
                    ]
                },
                {
                    Text: "Ahh that judge couldn't see further from his beak. I just cant wait for the race, that's my domain.",
                    Options:
                    [
                        {
                            Text: "...",
                            Link: -1
                        }
                    ]
                },
                {
                    Text: "...",
                    Options:
                    [
                        {
                            Text: "Is this yours?",
                            Link: 6
                        }                   
                    ]
                },
                {
                    Text: "Oh, yes! Where did you find it? I looked for it everywhere.",
                    Options:
                    [
                        {
                            Text: "I found it in a hollow tree, some one must have hid it there.",
                            Link: 7
                        }
                    ]
                },
                {
                    Text: "Please sir, give it back. It's been in my family for generations.",
                    Options:
                    [
                        {
                            Text: "Here you go, it's yours. ",
                            Link: 8
                        },
                        {
                            Text: "Finders keepers.[Leave]",
                            Link: -1
                        }
                    ]
                },
                {
                    Text: "Thank you, ill repay you somehow you have my word.",
                    Options:
                    [
                        {
                            Text: "Glad I could help.",
                            Link: -1
                        }
                    ]
                }  
            ]
        },
        {
            Name:"Raccoon",
            Chats:
            [
                {
                    Text: "Top of the morning, good sir![Rubbing his hands nervously].",
                    Options:
                    [
                        {
                            Text: "My good man, you do seem concerned. What worries you this fine day, may i ask?.",
                            Link: 1,
                            Action:
                            {
                                ID:"SetChat",
                                Params:
                                {
                                    CharID:"Raccoon",
                                    Chat:-1
                                }
                            }
                        },
                        {
                            Text: "Out of my way scoundrel.",
                            Link: 2,
                            Action:
                            {
                                ID:"SetChat",
                                Params:
                                {
                                    CharID:"Raccoon",
                                    Chat:-1
                                }
                            }
                        }
                    ]
                },
                {
                    Text: "A large wager lost i am afraid... and with the sum at lost my chance to purchase my freedom. But Theft! -I'd never. 'Tis mighty refreshing not to be judged upon. I wish you the best of luck, good sir.",
                    Options:
                    [
                        {
                            Text: "Good luck!",
                            Link: -1
                        }
                    ]
                },
                {
                    Text: "You'd better watch your tongue, stranger... you may come to find that knights aren't all that safe in these woods...[Turns away]",
                    Options:
                    [
                        {
                            Text: "...",
                            Link: -1
                        }
                    ]
                },
                {
                    Text: "Kghhhh! Get away it's mine!",
                    Options:
                    [
                        {
                            Text: "Whooo! Take it easy! It's me sir Acorn.",
                            Link: 4
                        }
                    ]
                },
                {
                    Text: "Ohhh... sorry, didn't see it was you my friend.",
                    Options:
                    [
                        {
                            Text: "What's happening? What are you doing here?",
                            Link: 5
                        }
                    ]
                },
                {
                    Text: "I've seen something shiny around here, but damn it, can't find it now.",
                    Options:
                    [
                        {
                            Text: "I don't have time for this[Leave]",
                            Link: -1
                        },
                        {
                            Text: "Alright, let me take a look.",
                            Link: -1
                        }
                    ]
                },
                {
                    Text: "...",
                    Options:
                    [
                        {
                            Text: "Look what I've found, do you know to whom does this dagger belong to?",
                            Link: 7
                        }
                    ]
                },
                {
                    Text: "It belongs to Carrot, I believe, but Carrot lost it a while ago, it might have something to do with Duke Howls death.",
                    Options:
                    [
                        {
                            Text: "Perhaps... Do you know if anyone had something against the Duke?",
                            Link: 8
                        }
                    ]
                },
                {
                    Text: "I don't like gossiping, but I overheard some lizard named Ali Gator was blackmailing Duke.",
                    Options:
                    [
                        {
                            Text: "Blackmailing? What with?",
                            Link: 9
                        }
                    ]
                },
                {
                    Text: "The Duke was allegedly planning rebellion against the Queen. And if I'm right that lizard knew about his plan and blackmailed him.",
                    Options:
                    [
                        {
                            Text: "Do you think Gator had something to do with Dukes death?",
                            Link: 10
                        }
                    ]
                },
                {
                    Text: "Not sure, that's your job to find out.",
                    Options:
                    [
                        {
                            Text: "Alright, I'll do my best.",
                            Link: -1
                        }
                    ]
                },
                {
                    Text: "Another victory, my friend, you are doing great. But be careful in the arena, I've heard you are going to fight with that Gator, he's a big lad.",
                    Options:
                    [
                        {
                            Text: "Size doesn't matter if my sword finds it's way.",
                            Link: 12
                        }
                    ]
                },
                {
                    Text: "I suggest you just run.",
                    Options:
                    [
                        {
                            Text: "I appreciate your concern.",
                            Link: -1
                        }
                    ]
                }
            ]
        },
        {
            Name:"Wolf",
            Chats:
            [
                {
                    Text: "A body of an old canine lies on the grass on its stomach. He is wearing a fancy plate armor, which looks very shiny and festive. His cape looks quite expensive.",
                    Options:
                    [
                        {
                            Text: "Check the body",
                            Link: 1
                        },
                        {
                            Text: "Leave",
                            Link: -1
                        }
                    ]
                },                
                {
                    Text: "You can see he probably died of puncture wounds. He still reaks of alcohol.",
                    Options:
                    [
                        {
                            Text: "Examine face",
                            Link: 2
                        },
                        {
                            Text: "Examine arms",
                            Link: 3
                        },
                        {
                            Text: "Examine torso",
                            Link: 4
                        }
                    ]
                },
                {
                    Text: "He is middle aged wolf with sharp fangs the look in his eyes is surprised. He still reaks of alcohol.",
                    Options:
                    [
                        {
                            Text: "Continue examining",
                            Link: 1
                        },
                        {
                            Text: "Leave",
                            Link: -1
                        }
                    ]
                },
                {
                    Text: "There is mix of blood and skin under his claws, he was a strong wolf.",
                    Options:
                    [
                        {
                            Text: "Continue examining",
                            Link: 1
                        },
                        {
                            Text: "Leave",
                            Link: -1
                        }
                    ]
                },
                {
                    Text: "You see two puncture wounds between plates under his armpit.",
                    Options:
                    [
                        {
                            Text: "Continue examining",
                            Link: 1
                        },
                        {
                            Text: "Leave",
                            Link: -1
                        }
                    ]
                }
            ]
        },
        {
            Name:"Fox",
            Chats:
            [
                {
                    Text: "Sorry, can't talk. Now... where is my lucky arrow?",
                    Options:
                    [
                        {
                            Text: "[Leave]",
                            Link: -1
                        },
                        {
                            Text: "Is this your Arrow?",
                            Requires: ["FoundArrow"],
                            Sets: ["ReturnedArrow"],
                            Link: 1
                        },
                    ]
                },
                {
                    Text: "My arrow! You found it! Thank you very much.",
                    Options:
                    [
                        {
                            Text: "No Problem [Leave]",
                            Link: -1,
                            Action:
                            {
                                ID: "SetChat",
                                Params: 
                                {
                                    CharID: "Fox",
                                    Chat: 2
                                }
                            }
                        }
                    ]
                },
                {
                    Text: "Thank you for finding my arrow.",
                    Options:
                    [
                        {
                            Text: "No Problem [Leave]",
                            Link: -1,
                        }
                    ]
                },
                {
                    Text: "Congratulation on your victory!",
                    Options:
                    [
                        {
                            Text: "Thank you m'lady.",
                            Link: 2
                        }
                    ]
                },
                {
                    Text: "I kind of feel bad for Carrot, first it's family dagger was stolen and later on archery contest Carrot was so frustrated, couldn't aim at all.",
                    Options:
                    [
                        {
                            Text: "Bad luck I guess.",
                            Link: 3
                        }
                    ]
                },
                {
                    Text: "It will be fine, Carrot is having high hopes for the race. Carrot is one of the fastest contestants I know, never lost a race before.",
                    Options:
                    [
                        {
                            Text: "That doesn't suits me well, but there is first time for everything.",
                            Link: -1
                        }
                    ]
                }
            ]
        },
        {
            Name:"Bob",
            Chats:
            [
                {
                    Text: "Curses! *sobs*",
                    Options:
                    [
                        {
                            Text: "What happened here?",
                            Link: 1
                        }                       
                    ]
                },
                {
                    Text: "Our dear master here was brutally... murdered during the night.",
                    Options:
                    [
                        {
                            Text: "[continue listening]",
                            Link: 2
                        }
                    ]
                },
                {
                    Text: "We blame ourselves... After a few ales, our master went to mark a tree... we were too drunk to hear something was wrong.",
                    Options:
                    [
                        {
                            Text: "Surely, this is not your fault...",
                            Link: 3
                        }
                    ]
                },
                {
                    Text: "He was only eight years old.",
                    Options:
                    [
                        {
                            Text: "My condolences, wolves. This must truly be a sad day for you.",
                            Link: 4
                        }
                    ]
                },
                {
                    Text: "Thank you for your words of kindness, stranger.",
                    Options:
                    [
                        {
                            Text: "[continue traveling]",
                            Link: -1,
                            Action:
                            {
                                ID: "SetChat",
                                Params:
                                {
                                    CharID:"Bob",
                                    Chat:5
                                }
                            }
                        }
                    ]
                },
                {
                    Text: "Curses! *sobs*",
                    Options:
                    [
                        {
                            Text: "...",
                            Link: -1
                        }                       
                    ]
                },
            ]
        },
        {
            Name:"Jim",
            Chats:
            [
                {
                    Text: "Why, Animal God, why?",
                    Options:
                    [
                        {
                            Text: "What happened here?",
                            Link: 1
                        }                       
                    ]
                },
                {
                    Text: "What kind of an animal would do a thing like this? He was a great champion, most beloved and a crowd favourite... *howls*",
                    Options:
                    [
                        {
                            Text: "[continue listening]",
                            Link: 2
                        }
                    ]
                },
                {
                    Text: "We blame ourselves... After a few ales, our master went to mark a tree... we were too drunk to hear something was wrong.",
                    Options:
                    [
                        {
                            Text: "Surely, this is not your fault...",
                            Link: 3
                        }
                    ]
                },                
                {
                    Text: "Thank you for your words of kindness, stranger.",
                    Options:
                    [
                        {
                            Text: "[continue traveling]",
                            Link: 4
                        }
                    ]
                },
                {
                    Text: "One thing - we don't know who did this, but I think I saw something dark and unsightly sneaking around the moment we arrived at the scene. Beware, knight. Evil is surely at work here.",
                    Options:
                    [
                        {
                            Text: "Thanks for the head up. Stay strong.",
                            Link: -1,
                            Action:
                            {
                                ID: "SetChat",
                                Params:
                                {
                                    CharID:"Jim",
                                    Chat:5
                                }
                            }
                        }
                    ]
                },
                {
                    Text: "Why, Animal God, why?",
                    Options:
                    [
                        {
                            Text: "...",
                            Link: -1
                        }                       
                    ]
                }
            ]
        },
        {
            Name:"Owl",
            Chats:
            [
                {
                    Text: "Fine knight, Sir Acorn of Hazelgrove, we are proud to welcome you to our land. I have heard much about your fighting skills, your brave heart and your quick wit.",
                    Options:
                    [
                        {
                            Text: "<b>[Continue Listening]</b>",
                            Link: 1
                        }                    
                    ]
                },
                {
                    Text: "Your visit is a joyous occasion for us. However, not all is so full of joy in this land. As you may have heard, our greatest champion deceased last night under mysterious circumstances. Say, on your honor and valor, would you help us solve this mystery? The good Duke Howl was much envied around these parts, and you, who only arrived now, couldn’t have possibly done it.",
                    Options:
                    [
                        {
                            Text: "I accept your quest, honorable judge.",
                            Link: 2
                        }                    
                    ]
                },
                {
                    Text: "Honor is mine, fair knight. Is there any information I can provide to aid you?",
                    Options:
                    [
                        {
                            Text: "I want to know more about knights.",
                            Link: 4
                        },
                        {
                            Text: "I want to know more about entourage.",
                            Link: 5
                        },
                        {
                            Text: "That is all, thank you for your help. <b>[Leave]</b>",
                            Link: -1
                        }
                    ]
                },
                {
                    Text: "Is there any information I can provide to aid you?",
                    Options:
                    [
                        {
                            Text: "I want to know more about knights.",
                            Link: 4
                        },
                        {
                            Text: "I want to know more about entourage.",
                            Link: 6
                        },
                        {
                            Text: "That is all, thank you for your help. <b>[Leave]</b>",
                            Link: -1
                        }
                    ]
                },
                {
                    Text: "Which of the knights you want to know about?",
                    Options:
                    [
                        {
                            Text: "What can you tell me about Duke Howl?",
                            Link: 7
                        },
                        {
                            Text: "What can you tell me about Aristurtle?",
                            Link: 8
                        },
                        {
                            Text: "How about… errrrm… Carrot?",
                            Link: 9
                        },
                        {
                            Text: "<b>[Next>]</b>",
                            Link: 5
                        }
                    ]
                },
                {
                    Text: "Which of the knights you want to know about?",
                    Options:
                    [
                        {
                            Text: "<b>[&lt;Previous]</b>",
                            Link: 4
                        },
                        {
                            Text: "What can you tell me about Lady Mosilla?",
                            Link: 10
                        },
                        {
                            Text: "I want to know about someone else.",
                            Link: 3
                        },
                        {
                            Text: "That is all, thank you for your help. <b>[Leave]</b>",
                            Link: -1
                        }
                    ]
                },
                {
                    Text: "Which person you want to know about?",
                    Options:
                    [
                        {
                            Text: "What can you tell me about Oonie de Racko? ",
                            Link: 11
                        },
                        {
                            Text: "I want to know about someone else.",
                            Link: 3
                        },
                        {
                            Text: "That is all, thank you for your help. <b>[Leave]</b>",
                            Link: -1
                        }
                    ]
                },
                {
                    Text: "He was a brave knight and a true champion. However, as any successful man, false news about him travelled fast and there were many rumours… That no one would testify to.",
                    Options:
                    [
                        {
                            Text: "I want to know about someone else.",
                            Link: 3
                        },
                        {
                            Text: "That is all, thank you for your help. <b>[Leave]</b>",
                            Link: -1
                        }
                    ]
                },
                {
                    Text: "He is the oldest and wisest man I know. Aristurtle has been competing in this tournament since the very beginning, a hundred years ago. Hasn’t won a single one yet! But in his own words – slow and steady wins the race.",
                    Options:
                    [
                        {
                            Text: "I want to know about someone else.",
                            Link: 3
                        },
                        {
                            Text: "That is all, thank you for your help. <b>[Leave]</b>",
                            Link: -1
                        }
                    ]
                },
                {
                    Text: "Carrot is a bit of an oddball and very sensitive. Take knight Carrot’s relationship with Lady Mosilla. They are old rivals, always tied in competitions. Even though they pick on each other all the time, it is but squabbling of a pair of real close friends. Duke Howl, however, was not on good terms with Carrot. He would often say that he would’ve eaten Carrot already, if only he didn’t hate vegetables.",
                    Options:
                    [
                        {
                            Text: "I want to know about someone else.",
                            Link: 3
                        },
                        {
                            Text: "That is all, thank you for your help. <b>[Leave]</b>",
                            Link: -1
                        }
                    ]
                },
                {
                    Text: "She was very upset this morning. I remember she mentioned some sort of lost lucky charm or some poppycock like that. Not so upset at the news of Howl’s death. I wouldn’t jump to conclusions though. Mosilla is a bit… slow.",
                    Options:
                    [
                        {
                            Text: "I want to know about someone else.",
                            Link: 3
                        },
                        {
                            Text: "That is all, thank you for your help. <b>[Leave]</b>",
                            Link: -1
                        }
                    ]
                },
                {
                    Text: "He is but a petty thief and a rascal. We’ve put him on probation to give him a chance to purchase his freedom, but he wasted all his belongings betting against Duke Howl. The favourite! Can you imagine all that, just for the quota? Dirty gambler…",
                    Options:
                    [
                        {
                            Text: "I want to know about someone else.",
                            Link: 3
                        },
                        {
                            Text: "That is all, thank you for your help. <b>[Leave]</b>",
                            Link: -1
                        }
                    ]
                },
                {
                    Text: "Great performance today! Your skills are one for the songs.",
                    Options:
                    [
                        {
                            Text: "Thank you. Can I ask you further questions about our inquiry?",
                            Link: 13
                        }
                    ]
                },
                {
                    Text: "As you wish my friend, how can I be of help?",
                    Options:
                    [
                        {
                            Text: "Have you noticed any strange behaviour around here?",
                            Link: 14
                        }
                    ]
                },
                {
                    Text: "Well... I beleive I did. I could not speak openly earlier with Sir Aristurtle on the premises.",
                    Options:
                    [
                        {
                            Text: "So you have seen something?",
                            Link: 15
                        }
                    ]
                },
                {
                    Text: "Might be that my eyes deceived me, but it appeared as if Sir Aristurtle was leaving tent of our very own Knight Carrot.",
                    Options:
                    [
                        {
                            Text: "Yes, you are right, that does seem a little bit odd. Thanks you for your help. <b>[Leave]</b>",
                            Link: -1
                        }
                    ]
                }
            ]
        },
        {
            Name:"Tortoise",
            Chats:
            [
                {
                    Text: "...",
                    Options:
                    [
                        {
                            Text: "What do you know, friend?",
                            Link: 1
                        }
                    ]
                },
                {
                    Text: "I am here to compete in the championship. By the looks of you, I assume you are here for the same reason. *makes a small bow* I am Aristurtle.",
                    Options:
                    [
                        {
                            Text: "I have heard that you've been competing in this championship for a hundred years... literally. With no avail.",
                            Link: 2
                        }
                    ]
                },
                {
                    Text: "... A grain falls on the ground - it makes no sound. A thousand grains fall - with sound and all!",
                    Options:
                    [
                        {
                            Text: "[continue listening]",
                            Link: 3
                        }
                    ]
                },
                {
                    Text: "So, what is nothing *can* add up to something. Touché!",
                    Options:
                    [
                        {
                            Text: "I will enjoy beating you in the tournament today.",
                            Link: 4
                        }
                    ]
                },
                {
                    Text: "... The arrow is motionless.",
                    Options:
                    [
                        {
                            Text: "I am investigating the murder of Duke Howl. Where were you last night?",
                            Link: 5
                        }
                    ]
                },
                {
                    Text: "I was at my house.",
                    Options:
                    [
                        {
                            Text: "What can you tell me about Oonie?",
                            Link: 6
                        }
                    ]
                },
                {
                    Text: "Every criminal is the same to me, and therefore equal.",
                    Options:
                    [
                        {
                            Text: "What can you tell me about Duke Howl?",
                            Link: 7
                        }
                    ]
                },
                {
                    Text: "He was a worthy opponent and a strong warrior in tournaments.",
                    Options:
                    [
                        {
                            Text: "What can you tell me about knight Rabbit?",
                            Link: 8
                        }
                    ]
                },
                {
                    Text: "It can never be faster than me.",
                    Options:
                    [
                        {
                            Text: "What can you tell me about Lady Mosilla?",
                            Link: 9
                        }
                    ]
                },
                {
                    Text: "She is quite foxy.",
                    Options:
                    [
                        {
                            Text: "*A phone rings from his shell*",
                            Link: 10
                        }
                    ]
                },
                {
                    Text: "*Ring ring*",
                    Options:
                    [
                        {
                            Text: "*He looks at you in a paranoid way*",
                            Link: 11
                        }
                    ]
                },
                {
                    Text: "I am sorry, I absolutely must take this.",
                    Options:
                    [
                        {
                            Text: "*speaks on the phone* Hello mother. Yes, but this year, I'm feeling confident that...",
                            Link: -1
                        }
                    ]
                }
            ]
        },
        {
            Name:"Arrow",
            Chats:
            [
                {
                    Text: "[You found the fine silver arrow]",
                    Options:
                    [
                        {
                            Text: "[Take]",
                            Sets: ["FoundArrow"],
                            Action:
                            {
                                ID: "Hide",
                                Params:
                                {
                                    CharID: "Arrow"
                                }
                            },
                            Link: -1
                        }
                    ]
                }
            ]
        },
        {
            Name:"Dagger",
            Chats:
            [
                {
                    Text: "[You found weird dagger]",
                    Options:
                    [
                        {
                            Text: "Take",
                            Action:
                            {
                                ID: "Hide",
                                Params:
                                {
                                    CharID: "Dagger"
                                }
                            },
                            Link: -1
                        }
                    ]
                }
            ]
        },
        {
            Name:"Goat",
            Chats:
            [
                {
                    Text: "...",
                    Options:
                    [
                        {
                            Text: "Good day sir. That is a lot of bags what is it that you do, if I may ask?",
                            Link: 1
                        }                       
                    ]
                },
                {
                    Text: "Good day sir, my name is Giovanni and I am a traveling merchant.",
                    Options:
                    [
                        {
                            Text: "What do you have for sale?",
                            Link: 2
                        },
                        {
                            Text: "Goodbye.",
                            Link: -1
                        }
                    ]
                },
                {
                    Text: "I'm sorry sir but my bags are already packed, I am going to set up my shop in next camp. Must get there fast before the race starts.",
                    Options:
                    [
                        {
                            Text: "Alright, I'll see you there. Safe travel.",
                            Link: -1
                        }
                    ]
                },
                {
                    Text: "Great! You found me!",
                    Options:
                    [
                        {
                            Text: "Hello Giovanni, how was your trip?",
                            Link: 4
                        }
                    ]
                },
                {
                    Text: "I traveled fine, but I heard some commoners were bothered by a bear.",
                    Options:
                    [
                        {
                            Text: "A bear? What does a bear do around here?",
                            Link: 5
                        }
                    ]
                },
                {
                    Text: "A bear do what a bear does... it looks for a honey of course.",
                    Options:
                    [
                        {
                            Text: "He must be desperate to turn outlaw for a little bit of honey.",
                            Link: 6
                        }
                    ]
                },
                {
                    Text: "Yes he is desperate, and desperate ones will do anything to get what they want.",
                    Options:
                    [
                        {
                            Text: "You are right.",
                            Link: 7
                        },
                        {
                            Text: "You are wrong.[Leave]",
                            Link: -1
                        }
                    ]
                },
                {
                    Text: "Oddly enough I happen to sell honey in my store, are you interested perhaps?",
                    Options:
                    [
                        {
                            Text: "I didn't bring any money with me, but I can give you this golden arrow I won on archery tournament.",
                            Link: 8
                        },
                        {
                            Text: "No, I have no use of it.",
                            Link: -1
                        }
                    ]
                },
                {
                    Text: "That will do. Here is your honeypot.",
                    Options:
                    [
                        {
                            Text: "Thank you.",
                            Link: -1
                        }
                    ]
                }
            ]
        },
        {
            Name:"Kangaroo",
            Chats:
            [
                {
                    Text: "Ugh... agh... my arm.",
                    Options:
                    [
                        {
                            Text: "What happened, sir?",
                            Link: 1
                        },  
                        {
                            Text: "Heh... nice makeup [Leave]",
                            Link: 2
                        }                     
                    ]
                },
                {
                    Text: "Damn that lizard... I'll get him next time.",
                    Options:
                    [
                        {
                            Text: "...",
                            Link: -1
                        }
                    ]
                },
                {
                    Text: "Get out of here you joker!",
                    Options:
                    [
                        {
                            Text: "...",
                            Link: -1
                        }
                    ]
                }
            ]
        },
        {
            Name:"Gator",
            Chats:
            [
                {
                    Text: "Greetings fellow knight, I am Ali Gator from a land far away. My journey brought me here to compete and win this tournament.",
                    Options:
                    [
                        {
                            Text: "Greetings, I am sir Acorn of Hazelgrove and I'm looking forward meeting you in the arena.",
                            Link: 1
                        },  
                        {
                            Text: "Greetings, I am sir Acorn of Hazelgrove I hope our paths won't cross in the arena.",
                            Link: 2
                        }                     
                    ]
                },
                {
                    Text: "You? Fight me?! Khakhakha... What can a little fellow like you do to a mountain like me?",
                    Options:
                    [
                        {
                            Text: "We'll see. Farewell.",
                            Link: -1
                        }
                    ]
                },
                {
                    Text: "Yeah, you better hope so... or I'll crush you.",
                    Options:
                    [
                        {
                            Text: "You really are cold blooded.",
                            Link: -1
                        }
                    ]
                }
            ]
        },
        {
            Name:"Bear",
            Chats:
            [
                {
                    Text: "What's that you have? Could it be honey?",
                    Options:
                    [
                        {
                            Text: "Whooo, take it easy big fella. Indeed this is a honeypot I've got here. But tell me what can you offer me for it?",
                            Link: 1
                        }                   
                    ]
                },
                {
                    Text: "Well, seeing you are nobility I can't deal with you I usually deal with those kind of situations.",
                    Options:
                    [
                        {
                            Text: "Yeah, you better keep your claws to yourself and hurry up I have a race to win.",
                            Link: 2
                        }
                    ]
                },
                {
                    Text: "Oh, I got it! I can show you a shortcut to finish in exchange for that honeypot you've got.",
                    Options:
                    [
                        {
                            Text: "Deal![Go with the bear]",
                            Link: -1
                        },
                        {
                            Text: "No way I'm going with you into this dark forest...[Leave]",
                            Link: -1
                        }
                    ]
                },
                {
                    Text: "Move along sir, no shortcuts over here.",
                    Options:
                    [
                        {
                            Text: "Hmm? Ok.",
                            Link: -1
                        }
                    ]
                }               
            ]
        },
        {
            Name:"RabbitRun",
            Chats:
            [
                             
            ]
        },
        {
            Name:"TortoiseRun",
            Chats:
            [
                {
                    Text: "We all know how race with rabbit and turtle ends... ",
                    Options:
                    [
                        {
                            Text: "But, what about me?",
                            Link: 1
                        }
                    ]
                },
                {
                    Text: "Ahhh yes, a squirrel must prove to exist first.",
                    Options:
                    [
                        {
                            Text: "[Continue race]",
                            Link: -1
                        }
                    ]
                }             
            ]
        },
        {
            Name:"Queen",
            Chats:
            [
                {
                    Text: "I'm impressed sir Acorn. I must admit I wasn't expecting to see you make it to the final round.",
                    Options:
                    [
                        {
                            Text: "You flatter me my queen.",
                            Link: 1
                        }
                    ]
                },
                {
                    Text: "I hope you have finished your investigation, you will be announcing culprit's name after the final round.",
                    Options:
                    [
                        {
                            Text: "Of course! ... YES!... The culprits name...",
                            Link: -1
                        }
                    ]
                }             
            ]
        }
    ]
};