export { DefaultGameObject }

let DefaultGameObject:any =
{
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
                            Locked: false,
                            Link: 1
                        },
                        {
                            Text: "Greetings, m'lady!",
                            Locked: false,
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
                            Locked: false,
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
                            Locked: false,
                            Link: 1
                        },
                        {
                            Text: "Out of my way scoundrel.",
                            Locked: false,
                            Link: 2
                        }
                    ]
                },
                {
                    Text: "A large wager lost i am afraid... and with the sum at lost my chance to purchase my freedom. But Theft! -I'd never. 'Tis mighty refreshing not to be judged upon. I wish you the best of luck, good sir.",
                    Options:
                    [
                        {
                            Text: "Good luck!",
                            Locked: false,
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
                            Locked: false,
                            Link: -1
                        }
                    ]
                }
            ]
        },
        {
            Name:"DeadWolf",
            Chats:
            [
                {
                    Text: "A body of an old canine lies on the grass on its stomach. He is wearing a fancy plate armor, which looks very shiny and festive. His cape looks quite expensive.",
                    Options:
                    [
                        {
                            Text: "Turn him around",
                            Locked: false,
                            Link: 1
                        },
                        {
                            Text: "Leave",
                            Locked: false,
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
                            Locked: false,
                            Link: 3
                        },
                        {
                            Text: "Examine arms",
                            Locked: false,
                            Link: 4
                        },
                        {
                            Text: "Examine torso",
                            Locked: false,
                            Link: 5
                        },
                        {
                            Text: "Leave",
                            Locked: false,
                            Link: -1
                        }
                    ]
                },
                {
                    Text: "He is middle aged wolf with sharp fangs the look in his eyes is surprised. He still reaks of alcohol.",
                    Options:
                    [
                        {
                            Text: "Continue examining",
                            Locked: false,
                            Link: 2
                        }
                    ]
                },
                {
                    Text: "There is mix of blood and skin under his clwas, he wa a string wolf",
                    Options:
                    [
                        {
                            Text: "Continue examining",
                            Locked: false,
                            Link: 2
                        }
                    ]
                },
                {
                    Text: "You see two puncture wounds between plates under his armpit.",
                    Options:
                    [
                        {
                            Text: "Continue examining",
                            Locked: false,
                            Link: 2
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
                            Text: "...",
                            Locked: false,
                            Link: -1
                        }
                    ]
                }
            ]
        }        
    ]
};