export { Chars }

let Chars = {
    "Characters":
    [
        {
            "Name":"Rabbit",
            "Chats":
            [
                {
                    "Text": "...",
                    "Options":
                    [
                        {
                            "Text": "How do you do, kind sir",
                            "Link": 1
                        },
                        {
                            "Text": "Greetings, m'lady!",
                            "Link": 1
                        }
                    ]
                },
                {
                    "Text": "Did you just assume my gender?! [Turns its back to you in an offended manner]",
                    "Options":
                    [
                        {
                            "Text": "Uhh... sorry?",
                            "Link": -1,
                            "Action":
                            {
                                "ID": "SetChat",
                                "Params": 
                                {
                                    "CharID": "Rabbit",
                                    "Chat": -1
                                }
                            }
                        }
                    ]
                },
                {
                    "Text": "Well?! Don't just stand there like a commoner looking at a loaf of bread. Out with it.",
                    "Options":
                    [
                        {
                            "Text": "Does this dagger belongs to you?",
                            "Requires": ["DaggerFound"],
                            "RequiresNot": ["RabbitLoses", "DaggerReturned"],
                            "Link": 5
                        },
                        {
                            "Text": "Fine shot, back there. ",
                            "Link": 3
                        },
						{
                            "Text": "Nevermind... [Leave]",
                            "Link": -1
                        }
                    ]
                },
                {
                    "Text": "[Faces you with a sudden look of pride] Of course it was, it was perfect in fact. My great-grandfather invented shooting, you know...",
                    "Options":
                    [
                        {
                            "Text": "Didn't seem to matter much in the face of the Judge though.",
                            "Link": 4
                        }
                    ]
                },
                {
                    "Text": "Ahh, that judge couldn't see a true champion if he popped him on the beak! I just can't wait for the race, that's my domain.",
                    "Options":
                    [
                        {
                            "Text": "...[Shrug and leave]",
                            "Link": -1
                        }
                    ]
                },
                {
                    "Text": "My great-great-great uncle's golden dagger! [Rubs his eyes in disbelief] Why, yes, it has been in our family for generations. Where did you find it? I thought that filthy commoner stole it, I thought I'd never see it again!",
                    "Options":
                    [
                        {
                            "Text": "It was lying in the woods, completely unnoticed.", 
                            "Link": 6
                        }
                    ]
                },
                {
                    "Text": "[Gives you a serious look] Sir, if you have an ounce of honour to your name, I should suggest that you return it to me, its rightful owner. It's been in my family for generations, ever since my grand-grand...-",
                    "Options":
                    [
                        {
                            "Text": "[Interrupt him] Here you go, it's yours.",
                            "Sets": ["DaggerReturned"],
                            "Link": 7
                        },
                        {
                            "Text": "[Interrupt him] It's yours, for a favor..",
                            "Requires": ["StabWounds"],
                            "Sets": ["RabbitLoses", "WonRace"],
                            "Link": 10
                        },
                        {
                            "Text": "[Interrupt him] Finders keepers.[Leave]",
                            "Link": -1
                        }
                    ]
                },
                {
                    "Text": "I knew from the moment I met you that you are not completely worthless. Now, I shall generously repay you for your service with a piece of advice - cease your investigations of Howl's murder at once. Even the jestures know by now that you're in way too deep. This crime is far bigger in scale than you can imagine. ",
                    "Options":
                    [
						{
                            "Text": "What in the world do you mean?",
                            "Link": 8
                        },
                        {
                            "Text": "Nah. [Leave]",
                            "Link": -1
                        }
                    ]
                },
				{
                    "Text": "[Sighs disappointedly] Well... What if the murdered Duke was not in fact 'murdered'? What if he was, in fact, executed prior to trial? [Looks around to make sure that there is no one around and speaks in a low voice] What if it turned out that Howl was plotting treason against the Crown - be the cause just or not? He would still be guilty, nonetheless.",
					"Options":
                    [
						{
                            "Text": "[Continue Listening]",
                            "Sets": ["Rebelion"],
                            "Link": 9
                        }
                    ]
                },
                {
                    "Text": "It seems that JUSTICE came to stab him in the lung a couple of times. You can imagine anyone supporting Howl could be fearing the same swift hand of justice... [He gives you a frightened look] It is in no one's interest for the truth to be known. Now, excuse me, I'm late...",
					"Options":
                    [
						{
                            "Text": "Thanks for the talk. Hmmm... This seems to be getting more complicated by the minute. [Leave]",
                            "Link": -1
                        }
                    ]
                },
                {
                    "Text": "What do you have on mind?",
					"Options":
                    [
						{
                            "Text": "If I'm not wrong, this is the murder weapon...",
                            "Link": 11
                        }
                    ]
                },
                {
                    "Text": "NO! Well... maybe, I had my doubts why was it stolen at all.",
					"Options":
                    [
						{
                            "Text": "And can be used as hard evidence against you.",
                            "Link": 12
                        }
                    ]
                },
                {
                    "Text": "You filthy! I'll never... I know what you want. The only thing I can give you. Victory in upcoming race.",
					"Options":
                    [
						{
                            "Text": "Bravo! You are smarter than you look. So we have a deal.",
                            "Link": 13
                        }
                    ]
                },
                {
                    "Text": "Only if you give me that dagger, or lose it, permanently...",
					"Options":
                    [
						{
                            "Text": "It's yours, after I win that race. [Leave]",
                            "Link": -1
                        }
                    ]
                }
            ]
        },
        {
            "Name":"RabbitRun",
            "Chats":
            [
                {
                    "Text": "Go Away, can't you see I'm running.",
					"Options":
                    [
						{
                            "Text": "Does our deal still stand?",
                            "Requires": ["RabbitLoses"],
                            "Link": 1
                        },
                        {
                            "Text": "Ok, sorry. [Leave]",
                            "Link": -1
                        }
                    ]
                },
                {
                    "Text": "YES! Yes, it does... Damn it.",
					"Options":
                    [
                        {
                            "Text": "Good. [Leave]",
                            "Link": -1
                        }
                    ]
                }
            ]
        },
        {
            "Name":"Raccoon",
            "Chats":
            [
                {
                    "Text": "Mornin' Stranger, what you doin' in this backwash? [Looking left and right nervously].",
                    "Options":
                    [
                        {
                            "Text": "My good man, you do seem concerned. What worries you this fine day, may i ask?.",
                            "Link": 1,
                            "Sets": ["RacconFavor1"],
                            "Action":
                            {
                                "ID":"SetChat",
                                "Params":
                                {
                                    "CharID":"Raccoon",
                                    "Chat":2
                                }
                            }
                        },
                        {
                            "Text": "Out of my way scoundrel.",
                            "Link": 3,
                            "Action":
                            {
                                "ID":"SetChat",
                                "Params":
                                {
                                    "CharID":"Raccoon",
                                    "Chat":-1
                                }
                            }
                        }
                    ]
                },
                {
                    "Text": "What's it to you? Bah, doesn't matter any way, I've lost all my coin on a bet. The others think me for a fool, pox upon them. You seem different, we will see. Best be on your way Stranger!",
                    "Options":
                    [
                        {
                            "Text": "Good luck!",
                            "Link": -1
                        }
                    ]
                },
                {
                    "Text": "Champion they said, can't lose they said. He lost! Where's my gold then...",
                    "Options":
                    [
                        {
                            "Text": "Oookay... [Leave]",
                            "Link": -1
                        }
                    ]
                },
                {
                    "Text": "You'd better watch your tongue, Stranger... not even knights are safe in these woods... [Grins his teeth menacingly]",
                    "Options":
                    [
                        {
                            "Text": "Hmm, scary trash panda... [Leave]",
                            "Link": -1
                        }
                    ]
                },
                {
                    "Text": "Kghhhh! Get your gruby hands off, the shiny is mine!",
                    "Options":
                    [
                        {
                            "Text": "Whooo! Take it easy! It's me sir Acorn.",
                            "Link": 5,
                            "Action":
                            {
                                "ID":"SetChat",
                                "Params":
                                {
                                    "CharID":"Raccoon",
                                    "Chat":7
                                }
                            }
                        }
                    ]
                },
                {
                    "Text": "Ohhh... beg pardon, didn't see it was you Stranger. I tend to lose me temper sometimes...",
                    "Options":
                    [
                        {
                            "Text": "What's happening? What are you doing here?",
                            "Link": 6
                        }
                    ]
                },
                {
                    "Text": "I've got my eye on somethin' shiny 'round here, but pox to it, can't find it now. Reckon you can help a fellar out?",
                    "Options":
                    [
                        {
                            "Text": "Look what I've found, do you know to whom does this dagger belong to?",
                            "Requires": ["DaggerFound"],
                            "Link": 8
                        },
                        {
                            "Text": "I don't have time for this [Leave]",
                            "RequiresNot": ["RacconFavor1"],
                            "Link": -1
                        },
                        {
                            "Text": "Alright, let me take a look. [Leave]",
                            "Requires": ["RacconFavor1"],
                            "Link": -1
                        }
                    ]
                },
                {
                    "Text": "Were in this poxy bog is that damn shiny bollocks?!",
                    "Options":
                    [
                        {
                            "Text": "Look what I've found, do you know to whom does this dagger belong to?",
                            "Requires": ["DaggerFound"],
                            "Link": 8
                        },
                        {
                            "Text": "Search not going well? [Leave]",
                            "Link": -1
                        }
                    ]
                },
                {
                    "Text": "And what if I do?... That shiny there is Carrot's dagger... And how do I know? That stampcrab told them lot that 'i StOle hEr dAgGeR'! They been acting like bushwakers ever since...",
                    "Options":
                    [
                        {
                            "Text": "Shame that they treat you that way. [Leave]",
                            "Sets": ["RacconFavor2"],
                            "Link": -1
                        },
                        {
                            "Text": "Thanks for the info. [Leave]",
                            "Link": -1
                        }
                    ]
                },
                {
                    "Text": "...",
                    "Options":
                    [
                        {
                            "Text": "Hello there, trash panda...",
                            "RequiresNot": ["RacconFavor1", "RacconFavor2"],
                            "Link": 10
                        },
                        {
                            "Text": "You fella, seem to be everywhere?",
                            "Requires": ["RacconFavor1"],
                            "Link": 11
                        },
                        {
                            "Text": "How is day treating you my friend?",
                            "Requires": ["RacconFavor2"],
                            "Link": 11
                        }
                    ]
                },
                {
                    "Text": "Me spit on the grave of e'ery single on o' ya nutjobs!",
                    "Options":
                    [
                        {
                            "Text": "I wish you have nice day as well [Leave]",
                            "Link": -1
                        }
                    ]
                },
                {
                    "Text": "Greetings to you Stranger, me is 'blessed' by your presence. Day is treating me... 'Twill be treating me excelent if you win this squalor!",
                    "Options":
                    [
                        {
                            "Text": "You placed your bet on me?",
                            "Link": 12,
                            "Action":
                            {
                                "ID":"SetChat",
                                "Params":
                                {
                                    "CharID":"Raccoon",
                                    "Chat":13
                                }
                            }
                        }
                    ]
                },
                {
                    "Text": "Aye, who else? And for yous I get most of those coins..",
                    "Options":
                    [
                        {
                            "Text": "Most of the coins? Such faith in me...",
                            "Link": 13
                        }
                    ]
                },
                {
                    "Text": "Worry not, once you win, t'll all be lovelly-jobelly.",
                    "Options":
                    [
                        {
                            "Text": "This question might seem strange, but is there anything out of the ordinary about our Queen. That you know of ofcourse?",
                            "RequiresNot":["AngryQueen"],
                            "RequiresFrom": ["DaggerFound", "UnlikellyPartners", "DaggerStolen", "TortoiseSneaking", "TortoiseLoyalty", "StabWounds"],
                            "RequiresAmount": 3,
                            "Link": 14
                        },
                        {
                            "Text": "Thanks Oonie. [Leave]",
                            "Link": -1
                        }
                    ]
                },
                {
                    "Text": "That question ain't strange, it's straight dangerouse I say...",
                    "Options":
                    [
                        {
                            "Text": "Dogging to answer?",
                            "Link": 15
                        }
                    ]
                },
                {
                    "Text": "You think me for a tailwag? Nah it's not like it matters to this lot...I did hear somethin' strange when going through the treasure around the Quins tent.",
                    "Options":
                    [
                        {
                            "Text": "Treasure? You mean garbage?",
                            "Link": 16
                        }
                    ]
                },
                {
                    "Text": "You plain deaft, that there is 'TREASURE' but i wouldn't expect you to understand, a nutty mind like yours! He he he...",
                    "Options":
                    [
                        {
                            "Text": "About what you heard?",
                            "Link": 17
                        }
                    ]
                },
                {
                    "Text": "Ah yes, well nothin' to it really, Foxy lady stormed out of the tent after speaking to her Highness, notin' unusual about that. I'd storm out too with her temper, musthav' made her blood boil...",
                    "Options":
                    [
                        {
                            "Text": "Thanks Oonie, that helps, I guess... [Leave]",
                            "Sets": ["AngryQueen"],
                            "Link": -1
                        }
                    ]
                }
            ]
        },
        {
            "Name":"Wolf",
            "Chats":
            [
                {
                    "Text": "A body of an old canine lies on the grass on its stomach. He is wearing a fancy plate armor, it looks very shiny and festive. His cape looks as expensive.",
                    "Options":
                    [
                        {
                            "Text": "[Check the body]",
                            "Link": 1
                        },
                        {
                            "Text": "[Leave]",
                            "Link": -1
                        }
                    ]
                },                
                {
                    "Text": "[He probably died of puncture wounds. He still reaks of alcohol.]",
                    "Options":
                    [
                        {
                            "Text": "[Examine face]",
                            "Link": 2
                        },
                        {
                            "Text": "[Examine arms]",
                            "Link": 3
                        },
                        {
                            "Text": "[Examine torso]",
                            "Sets": ["StabWounds"],
                            "Link": 4
                        },
                        {
                            "Text": "[Leave]",
                            "Link": -1
                        }
                    ]
                },
                {
                    "Text": "[The middle aged wolf has sharp fangs. The look in his eyes is surprised. He heavily reaks of alcohol.]",
                    "Options":
                    [
                        {
                            "Text": "[Continue examining]",
                            "Link": 1
                        },
                        {
                            "Text": "[Leave]",
                            "Link": -1
                        }
                    ]
                },
                {
                    "Text": "[There is mix of blood and skin under his claws, he was a strong wolf.]",
                    "Options":
                    [
                        {
                            "Text": "[Continue examining]",
                            "Link": 1
                        },
                        {
                            "Text": "Leave",
                            "Link": -1
                        }
                    ]
                },
                {
                    "Text": "[You see two puncture wounds between the plates under his armpit. The wounds are relatively shallow, definitely not made by a sword. Perchance a knife? ]",
                    "Options":
                    [
                        {
                            "Text": "[Continue examining]",
                            "Link": 1
                        },
                        {
                            "Text": "[Leave]",
                            "Link": -1
                        }
                    ]
                }
            ]
        },
        {
            "Name":"Fox",
            "Chats":
            [
                {
                    "Text": "Excuse me, knight, for I have no time to speak to you right now. Where in the world did that arrow go...",
                    "Options":
                    [
                        {
                            "Text": "Is this your arrow?",
                            "Requires": ["FoundArrow"],
                            "Link": 1
                        },
                        {
                            "Text": "[Leave]",
                            "Link": -1
                        }
                    ]
                },
                {
                    "Text": "My lucky arrow! You found it! Thank you so very much.",
                    "Options":
                    [
                        {
                            "Text": "That was no trouble whatsoever, even I loose an arrow or two from time to time...", 
                            "Link": 2,
                            "Sets": ["ReturnedArrow"],
                            "Action":
                            {
                                "ID":"SetChat",
                                "Params":
                                {
                                    "CharID":"Fox",
                                    "Chat":2
                                }
                            }
                        },
                        {
                            "Text": "It was just around the corner... Whatever, now you can finally shut up.. [Leave]", 
                            "Link": -1,
                            "Sets": ["ReturnedArrow"],
                            "Action":
                            {
                                "ID":"SetChat",
                                "Params":
                                {
                                    "CharID":"Fox",
                                    "Chat":2
                                }
                            }
                        },
                        {
                            "Text": "What makes you think I'm going to give it to you, so you can loose it again? [Keep Arrow]", 
                            "Link": -1,
                            "Sets": ["KeptArrow"],
                            "Action":
                            {
                                "ID":"SetChat",
                                "Params":
                                {
                                    "CharID":"Fox",
                                    "Chat":6
                                }
                            }
                        }
                    ]
                },
                {
                    "Text": "You have my gratitude, perhaps I can repay you a bit with some information that I can share?",
                    "Options":
                    [
                        {
                            "Text": "What can you tell me, foxy lady?", 
                            "Link": 3
                        },
                        {
                            "Text": "I really don't have time for this. [Leave]", 
                            "Link": -1
                        }    
                    ]
                },
				{		 
                    "Text": "Let me tell you, nothing goes on around here that I don't know about. Have you met that sneaky scoundrel, Oonie? Filthy commoner, that one. Rabbit told me that she is certain that he stole her family heirloom, and it was a pretty valuable one of that. Beautiful craftsmanship. I advise you to stay away from Oonie. Or at least, keep your belongings close, and keep your eye on him...",
                    "Options":
                    [
                        {
                            "Text": "[Continue gossiping]", 
                            "Link": 4
                        }
                    ]
                },
                {
                    "Text": "Have you met Judge Hoot? He will be the referee in the Grand Knights' Tournament this year. He acts all just, all high and mighty, but then - he takes bribe by the chestload.",
                    "Options":
                    [
                        {
                            "Text": "[Continue gossiping]",
                            "Link": 5
                        }
                    ]
                },
                {
                    "Text": "Aristurtle is the mascot of the Tournament HAHAH! That geezer had entered ever since I was a lass, never won a single category, let alone the tournament. He is a pain in the ass, but damn, he is persistent. The same with his zealot loyalty to Her Hogness. She has been giving him the most apsurd tasks - Aristurtle, go to the next kingdom and bring me some raspberries - she said. In January. Bet you never met a hundred year old mamma's boy before! [laughs profoundly]",
                    "Options":
                    [
                        {
                            "Sets": ["TortoiseLoyalty", "TortoiseFailing"],
                            "Text": "Thanks for the scoop. Very useful information. Good luck. [Leave]",
                            "Link": -1
                        }
                    ]
                },
				{
                    "Text": "Out of my way, thief!",
                    "Options":
                    [
                        {
                            "Text": "Whatever... [Leave]",
                            "Link": -1
                        }
                    ]
                },
                {
                    "Text": "...",
                    "Options":
                    [
                        {
                            "Text": "Hello there, foxy lady.",
                            "Requires": ["KeptArrow"],
                            "Link": 6
                        },
                        {
                            "Text": "Hello there, foxy lady.",
                            "Requires": ["WonArchery"],
                            "RequiresNot": ["KeptArrow"],
                            "Action":
                            {
                                "ID":"SetChat",
                                "Params":
                                {
                                    "CharID":"Fox",
                                    "Chat":10
                                }
                            },
                            "Link": 8
                        },
                        {
                            "Text": "Congrats on your victory earlier.",
                            "Requires": ["LostArchery"],
                            "RequiresNot": ["KeptArrow"],
                            "Action":
                            {
                                "ID":"SetChat",
                                "Params":
                                {
                                    "CharID":"Fox",
                                    "Chat":10
                                }
                            },
                            "Link": 9
                        }
                    ]
                },
                {
                    "Text": "Congratulations on your victory!",
                    "Options":
                    [
                        {
                            "Text": "Thank you m'lady.",
                            "Link": 10
                        }
                    ]
                },
                {
                    "Text": "Thank you, you were not half bad yourself.",
                    "Options":
                    [
                        {
                            "Text": "Thank you m'lady.",
                            "Link": 10
                        }
                    ]
                },
                {
                    "Text": "Care to stay and chat?",
                    "Options":
                    [
                        {
                            "Text": "Sure, can you tell me, what's with Carrot?",
                            "Link": 11
                        },
                        {
                            "Text": "Just came back from talking to Ali... He says that him and Howl were 'partners', and that I should ask you about it. I was hoping for some clarification.",
                            "Link": 13
                        },
                        {
                            "Text": "Sadly no. Time flies, my lady, and the race isn't waiting for anyone. [Leave]",
                            "Link": -1
                        }
                    ]
                },
                {
                    "Text": "Poor Carrot.. First his family dagger was stolen rending him so frustraited... Couldn't aim at an elephant if it was 5 feet away. Oh, the shame of it all!",
                    "Options":
                    [
                        {
                            "Text": "Bad luck, I guess.",
                            "Sets": ["DaggerStolen"],
                            "Link": 12
                        }
                    ]
                },
                {
                    "Text": "If I know Carrot, and trust, I do, he will give it all in the race. He is fast as lightning, never lost a race in his life!",
                    "Options":
                    [
                        {
                            "Text": "That doesn't suits me well, but there is first time for everything.",
                            "Link": 10
                        }
                    ]
                },
				{
                    "Text": "Yes?",
                    "Options":
                    [
                        {
                            "Text": "Just came back from talking to Ali... He says that him and Howl were 'partners', and that I should ask you about it. I was hoping for some clarification.",
                            "Link": 14
                        }
                    ]
                },
								 {
                    "Text": "What? Partners?? Ermmmm... I have no idea what you're talking about! These stereotypes of the scheeming fox really get to me. You know what, I am sure that he is just trying to get between us because he sees us as his greatest competition! And we've been getting along so nicely! Jealousy is toxic! You shouldn't speak to him anymore if you want to stay good friends with me. Now, excuse me, I must prepare for the next round. [Turns away and starts rummaging through her equipment] ",
                    "Options":
                    [
                        {
                            "Text": "Erm, thanks? [Leave]",
                            "Link": -1
                        }
                    ]
                }
            ]
        },
        {
            "Name":"Bob",
            "Chats":
            [
                {
                    "Text": "Curses! *sobs*",
                    "Options":
                    [
                        {
                            "Text": "What happened here?",
                            "Link": 1
                        }                       
                    ]
                },
                {
                    "Text": "Our dear master here was brutally... murdered during the night.",
                    "Options":
                    [
                        {
                            "Text": "[Continue Listening]",
                            "Link": 2
                        }
                    ]
                },
                {
                    "Text": "He was only eight years old.",
                    "Options":
                    [
                        {
                            "Text": "My condolences, wolves. This must truly be a sad day for you.",
                            "Link": 3
                        }
                    ]
                },
                {
                    "Text": "Thank you for your words of kindness, stranger.",
                    "Options":
                    [
                        {
                            "Text": "[Leave]",
                            "Link": -1,
                            "Action":
                            {
                                "ID": "SetChat",
                                "Params":
                                {
                                    "CharID":"Bob",
                                    "Chat":4
                                }
                            }
                        }
                    ]
                },
                {
                    "Text": "Curses! *sobs*",
                    "Options":
                    [
                        {
                            "Text": "...",
                            "Link": -1
                        }                       
                    ]
                }
            ]
        },
        {
            "Name":"Jim",
            "Chats":
            [
                {
                    "Text": "Why, Animal God, why?",
                    "Options":
                    [
                        {
                            "Text": "What happened here?",
                            "Link": 1
                        }                       
                    ]
                },
                {
                    "Text": "What kind of an animal would do a thing like this? He was a great champion, most beloved and a crowd favourite... *howls*",
                    "Options":
                    [
                        {
                            "Text": "[Continue Listening]",
                            "Link": 2
                        }
                    ]
                },
                {
                    "Text": "We blame ourselves... After a few ales, our master went to mark a tree... we were too drunk to hear something was wrong.",
                    "Options":
                    [
                        {
                            "Text": "Surely, this is not your fault...",
                            "Link": 3
                        }
                    ]
                },                
                {
                    "Text": "Thank you for your words of kindness, stranger.",
                    "Options":
                    [
                        {
                            "Text": "[Continue Listening]",
                            "Link": 4
                        }
                    ]
                },
                {
                    "Text": "One thing - we don't know who did this, but I think I saw something dark and unsightly sneaking around the moment we arrived at the scene. Beware, knight. Evil is surely at work here.",
                    "Options":
                    [
                        {
                            "Text": "Thanks for the head up. Stay strong. [Leave]",
                            "Link": -1,
                            "Action":
                            {
                                "ID": "SetChat",
                                "Params":
                                {
                                    "CharID":"Jim",
                                    "Chat":5
                                }
                            }
                        }
                    ]
                },
                {
                    "Text": "Why, Animal God, why?",
                    "Options":
                    [
                        {
                            "Text": "Hey Jim, I wanted to inform you, Judge Hoot tasked me with finding the culprit of this crime. I will find person responsible and bring him to justice.",
                            "Requires": ["Quest"],
                            "Sets": ["WindTip"],
                            "Link": 6
                        },    
                        {
                            "Text": "[Leave]",
                            "Link": -1
                        }                       
                    ]
                },
                {
                    "Text": "[Howls morosely] Kind knight! News of your investigation over our good Lord Howl is amazing, right, Bob? [Bob woofs] Let me give you a tip. If you stay involved in the tournament, everyone will take you more seriously, so when you're in the archery ring, make sure to test the wind. Make sure your snout and whiskers are wet, wait for the wind to blow, then, as soon as it quiets down, shoot as if the arrow is two paces further in the direction opposite to the winds'. Good luck, Sir Acorn, gallant knight and true!",
                    "Options":
                    [
                        {
                            "Text": "Thanks for the tip. My condolences. [Leave]",
                            "Link": -1
                        }                       
                    ]
                }
            ]
        },
        {
            "Name":"Owl",
            "Chats":
            [
                {
                    "Text": "Fine knight, Sir Acorn of Hazelgrove, we are proud to welcome you to our land. I have heard much about your fighting skills, your brave heart and your quick wit.",
                    "Options":
                    [
                        {
                            "Text": "[Continue Listening]",
                            "Link": 1
                        }                    
                    ]
                },
                {
                    "Text": "Your visit is a joyous occasion for us. However, not all is so full of joy in this land. As you may have heard, our greatest champion deceased last night under mysterious circumstances. Say, on your honor and valor, would you help us solve this mystery? The good Duke Howl was much envied around these parts, and you, who only arrived now, couldn’t have possibly done it.",
                    "Options":
                    [
                        {
                            "Text": "I accept your quest, honorable judge.",
                            "Sets": ["Quest"],
                            "Link": 2,
                            "Action":
                            {
                                "ID": "SetChat",
                                "Params":
                                {
                                    "CharID":"Owl",
                                    "Chat": 2
                                }
                            }
                        }                    
                    ]
                },
                {
                    "Text": "Honor is mine, fair knight. Is there any information I can provide to aid you?",
                    "Options":
                    [
                        {
                            "Text": "What can you tell me about Duke Howl?",
                            "Link": 3
                        },
                        {
                            "Text": "What can you tell me about Oonie de Racko? ",
                            "Link": 4
                        },
                        {
                            "Text": "How about… errrrm… Carrot?",
                            "Link": 6
                        },
                        {
                            "Text": "What can you tell me about Lady Mosilla?",
                            "Link": 8
                        },
                        {
                            "Text": "What can you tell me about Aristurtle?",
                            "Sets": ["TortoiseFailing"],
                            "Link": 9
                        },
                        {
                            "Text": "That is all, thank you for your help. [Leave]",
                            "Link": -1
                        }
                    ]
                },
                {
                    "Text": "He was a brave knight and a true champion. However, as any successful man, false news about him travelled fast and there were many rumours… That no one would testify to. [He gives you a testing look]",
                    "Options":
                    [
                        {
                            "Text": "I want to know about someone else.",
                            "Link": 2
                        },
                        {
                            "Text": "That is all, thank you for your help. [Leave]",
                            "Link": -1
                        }
                    ]
                },
                {
                    "Text": "Petty thief and a rascal! Always sneaking around, always nervous. We’ve put him on probation to give him a chance to purchase his freedom, but he wasted all his belongings betting against Duke Howl. The favourite! Can you imagine all that? These uneducated commoners should really stay away from gambling, as it is an art, far more refined than their little minds can comprehend.",
                    "Options":
                    [
                        {
                            "Text": "[Continue Listening]",
                            "Link": 5
                        }
                    ]
                },
                {
                    "Text": "Now that the Duke was... ummm... removed from the competition, the entire pool went to the house. Bugger has been roaming the area ever since, looking for small valuables to trade before they put him back in the dungeon. ",
                    "Options":
                    [
                        {
                            "Text": "I want to know about someone else.",
                            "Link": 2
                        },
                        {
                            "Text": "That is all, thank you for your help. [Leave]",
                            "Link": -1
                        }
                    ]
                },
                {
                    "Text": "Carrot comes from a rich, highly revered dinasty in these parts. Led a sheltered life, always praised, never repremended. Turned out to become a bit of  an oddball and led to a very fragile ego. To my knowledge, the only one Carrot takes seriously is Lady Mosilla.", 
                    "Options":
                    [
                        {
                            "Text": "[Continue Listening]",
                            "Link": 7
                        }
                    ]
                },
                {
                    "Text": "They are childhood friends, and though they are rivals in the eye of the public and they toss around a lot of banter, everyone knows that their friendship runs deeper than any of that nonsense. As to Carrot's relationship to Duke Howl, they also bantered often, and Howl would say that he would’ve eaten Carrot already, if only he didn’t hate vegetables.", 
                    "Options":
                    [
                        {
                            "Text": "I want to know about someone else.",
                            "Link": 2
                        },
                        {
                            "Text": "That is all, thank you for your help. [Leave]",
                            "Link": -1
                        }
                    ]
                },
                {
                    "Text": "She was very upset this morning. I remember she mentioned some sort of lost lucky charm or some poppycock like that. Not so upset at the news of Howl’s death. Heartless, that lass. ", 
                    "Options":
                    [
                        {
                            "Text": "I want to know about someone else.",
                            "Link": 2
                        },
                        {
                            "Text": "That is all, thank you for your help. [Leave]",
                            "Link": -1
                        }
                    ]
                },
                {
                    "Text": "He is the oldest and wisest man in these lands. Aristurtle has been competing in this tournament since the very beginning, a hundred years ago. Hasn’t won yet, but in his own words – slow and steady wins the race.",
                    "Options":
                    [
                        {
                            "Text": "I want to know about someone else.",
                            "Link": 2
                        },
                        {
                            "Text": "That is all, thank you for your help. [Leave]",
                            "Link": -1
                        }
                    ]
                },
                {
                    "Text": "Great performance today! Your skills are worthy to write songs about!",
                    "Options":
                    [
                        {
                            "Text": "Thank you. Can I ask you further questions about our inquiry?",
                            "RequiresNot": ["TortoiseSneaking"],
                            "Link": 11
                        },
                        {
                            "Text": "Thank you. [Leave]",
                            "Link": -1
                        }
                    ]
                },
                {
                    "Text": "As you wish my friend, how can I be of help?",
                    "Options":
                    [
                        {
                            "Text": "Have you noticed any strange behaviour around here?",
                            "Link": 12
                        }
                    ]
                },
                {
                    "Text": "Well... I believe I did. I could not speak openly earlier with Sir Aristurtle on the premises.",
                    "Options":
                    [
                        {
                            "Text": "So you have seen something?",
                            "Sets": ["TortoiseSneaking"],
                            "Link": 13
                        }
                    ]
                },
                {
                    "Text": "It appeared as if Sir Aristurtle was leaving tent of our very own Knight Carrot a few nights ago. I rubbed my eyes in disbelief, when it occured to me that it is night and I am seeing clearly, no mistake about it. I deemed it mighty suspicious. I would never have pegged him to be involved in MURDER though! And murder of one of Her Hogness' subjects, of that! He is ever so faithful to the Crown. Desparate times call for desparate measures, though, so I say, you can't be too careful. ",
                    "Options":
                    [
                        {
                            "Text": "Hmm... that does seem a little bit off... Thanks for your help. [Leave]",
                            "Link": -1
                        }
                    ]
                }
            ]
        },
        {
            "Name":"Tortoise",
            "Chats":
            [
                {
                    "Text": "...",
                    "Options":
                    [
                        {
                            "Text": "What do you know, friend?",
                            "Link": 1
                        }
                    ]
                },
                {
                    "Text": "I am here to compete in the championship. By the looks of you, I assume you are here for the same reason. [Makes a small bow] I am Aristurtle.",
                    "Options":
                    [
                        {
                            "Text": "I have heard that you've been competing in this championship for a hundred years... literally. With no avail.",
                            "Requires": ["TortoiseFailing"],
                            "Link": 2
                        },
				        {
                            "Text": "I am Sir Accorn of Hazelgrove, nice to meet you. [Leave]",
                            "Link": -1
                        }		
                    ]
                },
                {
                    "Text": "... A grain falls on the ground - it makes no sound. A thousand grains fall - with sound and all!",
                    "Options":
                    [
                        {
                            "Text": "[Continue Listening]",
                            "Link": 3
                        }
                    ]
                },
                {
                    "Text": "So, what is nothing *can* add up to something. Touché!",
                    "Options":
                    [
                        {
                            "Text": "What do you reckon, how will archery competition go?",
                            "Link": 4
                        }
                    ]
                },
                {
                    "Text": "... The arrow is motionless.",
                    "Options":
                    [
                        {
                            "Text": "Oook.. Nevermind that. I am investigating the murder of Duke Howl. Where were you last night?",
                            "Link": 5
                        }
                    ]
                },
                {
                    "Text": "I was at home. ",
                    "Options":
                    [
                        {
                            "Text": "Very precise, indeed. What can you tell me about Oonie?",
                            "Link": 6
                        }
                    ]
                },
                {
                    "Text": "Every criminal is the same to me, and therefore equal.",
                    "Options":
                    [
                        {
                            "Text": "What can you tell me about Duke Howl?",
                            "Link": 7
                        }
                    ]
                },
                {
                    "Text": "He was a worthy opponent and a strong warrior in tournaments.",
                    "Options":
                    [
                        {
                            "Text": "What can you tell me about knight Rabbit?",
                            "Link": 8
                        }
                    ]
                },
                {
                    "Text": "It can never be faster than me.",
                    "Options":
                    [
                        {
                            "Text": "What can you tell me about Lady Mosilla?",
                            "Link": 9
                        }
                    ]
                },
                {
                    "Text": "A fine lady, but a gossip and a deciever. Alas, beauty on the outside can reflect the exact opposite of what is inside. ",
                    "Options":
                    [
                        {
                            "Text": "[Continue Listening]",
                            "Link": 10
                        }
                    ]
                },
                {
                    "Text": "[A phone rings from his shell, He looks at you in a paranoid way]",
                    "Options":
                    [
                        {
                            "Text": "[Continue Listening]",
                            "Link": 11
                        }
                    ]
                },
                {
                    "Text": "I am sorry, I absolutely must take this. [Speaks on the phone] Hello, Mother. Yes, but this year, I'm feeling confident that...",
                    "Options":
                    [
                        {
                            "Text": "[Leave]",
                            "Link": -1
                        }
                    ]
                }
            ]
        },
        {
            "Name":"Arrow",
            "Chats":
            [
                {
                    "Text": "[You found the fine silver arrow]",
                    "Options":
                    [
                        {
                            "Text": "[Take]",
                            "Sets": ["FoundArrow"],
                            "Action":
                            {
                                "ID": "Hide",
                                "Params":
                                {
                                    "CharID": "Arrow"
                                }
                            },
                            "Link": -1
                        }
                    ]
                }
            ]
        },
        {
            "Name":"Dagger",
            "Chats":
            [
                {
                    "Text": "[You found weird dagger, looks like a carrot?!]",
                    "Options":
                    [
                        {
                            "Text": "[Take]",
                            "Sets": ["DaggerFound"],
                            "Action":
                            {
                                "ID": "Hide",
                                "Params":
                                {
                                    "CharID": "Dagger"
                                }
                            },
                            "Link": -1
                        }
                    ]
                }
            ]
        },
        {
            "Name":"Goat",
            "Chats":
            [
                {
                    "Text": "...",
                    "Options":
                    [
                        {
                            "Text": "Good day sir. I see you've brought many bags of goods to sell. May I see your wares? ",
                            "Link": 1
                        }                       
                    ]
                },
                {
                    "Text": "Bongiorno, signore! A fine a-day to a-you. By all-a means, look-a at my a-premium quality a-honey, and here we have a-top-a-quality premium honey, a-perfect fit for a strong-a squirrel such-a as yourself! Now with 20% less led! Would you like to make a purchase? 10% off for the brave knight!",
                    "Options":
                    [
                        {
                            "Text": "Erm, maybe another time.",
                            "Link": 2
                        }
                    ]
                },
                {
                    "Text": "Be sure to a-stop a-by my stand-a in the next round! [Makes sure no one is around and whispers-] I will give you an extra 5% a-discount. [Winks]",
                    "Options":
                    [
                        {
                            "Text": "Alright then, hah... I'll see you there. For sure. [Rolls eyes]",
                            "Link": -1
                        }
                    ]
                },
                {
                    "Text": "A-Blessings of the a-Heavens! You've come back for a taste, haven't you? [Wiggles his eyebrows at you]",
                    "Options":
                    [
                        {
                            "Text": "Maybe later, Giovanni. Did you travel safely?",
                            "Link": 4
                        }
                    ]
                },
                {
                    "Text": "A-yes, a-beautiful morning for a-taking the road-a. [Looks at you seriously all of the sudden] But as a matter of-a-fact-a, I was fearing the Unbearable the entire time.",
                    "Options":
                    [
                        {
                            "Text": "What do you mean, 'unbearable'?",
                            "Link": 5
                        }
                    ]
                },
                {
                    "Text": "Unbearable, I mean! That-a brute-a-bear is always out to take-a my-a premium-a honey!",
                    "Options":
                    [
                        {
                            "Text": "Sounds desperate... To turn outlaw for a little bit of honey, doesn't it?",
                            "Link": 6
                        }
                    ]
                },
                {
                    "Text": "A-yes, he is a-desperate bear, and a bear-a is always a-desparate for honey.",
                    "Options":
                    [
                        {
                            "Text": "Hmm...",
                            "Link": 7
                        },
                        {
                            "Text": "Might be, probably not. [Leave]",
                            "Link": -1
                        }
                    ]
                },
                {
                    "Text": "[He interrupts your very train of thought] A-say, did I mention that I am selling a-my a-premium honey right now? 5% off for the good knight!",
                    "Options":
                    [
                        {
                            "Text": "Would you accept this arrow as payment? I won it in the archery ring. It might even be pure gold.",
                            "Requires": ["GoldenArrow"],
                            "Sets": ["Honey"],
                            "Link": 8
                        },
                        {
                            "Text": "No, I have no use of it. [Leave]",
                            "Link": -1
                        }
                    ]
                },
                {
                    "Text": "[His eyes expand at the sight of gold] You a-drive a hard bargain, my friend! [Grins] But for you, I will make a special deal-a. Take this-a ultra-premium-best-quality a-honey! Produced by a-bee that-a feeds on only a-top quality pollen. [Gives you the honeypot and takes the arrow swiftly from your hand] No refunds!",
                    "Options":
                    [
                        {
                            "Text": "Well, thank you, I guess... [Leave]",
                            "Link": -1
                        }
                    ]
                }
            ]
        },
        {
            "Name":"Kangaroo",
            "Chats":
            [
                {
                    "Text": "Ugh... agh... my arm.",
                    "Options":
                    [
                        {
                            "Text": "What happened, sir?",
                            "Link": 1
                        },  
                        {
                            "Text": "Heh... nice makeup [Leave]",
                            "Link": 2
                        }                     
                    ]
                },
                {
                    "Text": "Damn that lizard... I'll get him next time.",
                    "Options":
                    [
                        {
                            "Text": "...",
                            "Link": -1
                        }
                    ]
                },
                {
                    "Text": "Get out of here you joker!",
                    "Options":
                    [
                        {
                            "Text": "...",
                            "Link": -1
                        }
                    ]
                }
            ]
        },
        {
            "Name":"Gator",
            "Chats":
            [
                {
                    "Text": "[He is huge and speaks slowly, in a raspy voice] Greetings, fellow knight. I am Prince Ali Gator, guest of honour from the far away land of Jeejupt. It seems our journeys have brought us here to compete, and so I take it that it is destiny that I win this tournament. Ha!",
                    "Options":
                    [
                        {
                            "Text": "Why are you so confident, are you goind to smuggle some weapons in the arena too? Have you smuggled some weapons when you killed Duke howl?",
                            "Requires": ["Smuggler"],
                            "RequiresNot": ["Partners"],
                            "Sets": ["Partners"],
                            "Link": 2
                        },
                        {
                            "Text": "Sir Acorn of Hazelgrove. Looking forward to testing your 'destiny' theses in the arena.",
                            "Link": 1
                        },  
                        {
                            "Text": "Jeez...umm... Hi, I am Acorn. Don't mind me, I'll just go on about my business... [Leave]",
                            "Link": -1
                        }                     
                    ]
                },
                {
                    "Text": "You? Fight me?! Khakhakha... What can a puny little fellow like you do to a mountain like me?",
                    "Options":
                    [
						{
                            "Text": "We shall see, maybe by then I'll be bigger than you? [You wonder what you just said yourself, and leave]",
                            "Link": -1
                        },
                        {
                            "Text": "[Make a sad face] You really are cold blooded. [Leave]",
                            "Link": -1
                        }
                    ]
                },
                {
                    "Text": "Hah! You should better get your facts straight before you jump to such misleaded conclusions. Listen to me, little squirrel, and listen well - [He leans over in an intimidating way] - firstly, everyone knows that the Shejiptian Empire could crush these lands with no effort. There is no point in blackmailing me, worm. Secondly, Howl and I were partners and I found in him a worthy foe and drinking companion. If you don't trust, ask Lady Mosilla. [He gives her a look that makes your blood freeze over] She knows all about it. ",
                    "Options":
                    [
                        {
                            "Text": "[Acting all tough] Don't mind if I do. I will see you at the arena. [Turn around and check if you wet yourself, then leave]",
                            "Link": -1
                        }
                    ]
                }
            ]
        },
        {
            "Name":"Bear",
            "Chats":
            [
                {
                    "Text": "Who goes there?!",
                    "Options":
                    [
                        {
                            "Text": "Whooo, take it easy big fella. Indeed this is a honeypot I've got here. But tell me what can you offer me for it?",
                            "Requires": ["Honey"],
                            "RequiresNot": ["GivenHoney"],
                            "Link": 1
                        },
                        {
                            "Text": "Hello mr Bear?",
                            "Link": 5
                        }
                    ]
                },
                {
                    "Text": "MMMrrrrmmm! I smell honey! ",
                    "Options":
                    [
                        {
                            "Text": "Whooo, take it easy big fella. Indeed this is a honeypot I've got here. But tell me what can you offer me for it?",
                            "Link": 1
                        }                   
                    ]
                },
                {
                    "Text": "Honey! I'm home! Oh, give it to me. Give me the delicious HONEY!!! [Roars] Not eating all the honey makes my life UNBEARABLE!!!",
                    "Options":
                    [
                        {
                            "Text": "Listen, you got it. But wouldn't you prefer to not be taken by the guards immediately after killing me? Let me remind you, this is a knights' tournament, and that would make me the second murdered champion here. It would make Her Hogness very sad, don't you think? How about, I give it to you peacefully, and you help me win this race?",
                            "Link": 2
                        }
                    ]
                },
                {
                    "Text": "MMmmrrmm. [He calms down] Squirrly promises sweet HONEY. Come with me, Squirrly. [Points towards a very scary, dark path in the woods] ",
                    "Options":
                    [
                        {
                            "Text": "Great. [Go into the dark woods with the bear]",
                            "Sets": ["GivenHoney", "RoidsInfo"],
                            "Link": 3
                        },
                        {
                            "Text": "No way I'm going with you into this dark forest...[Give him the honey and leave]",
                            "Sets": ["GivenHoney"],
                            "Link": -1
                        }
                    ]
                },
				{
                    "Text": "[The bear gulps on fistfulls of honey at a time] MMMmmrmmm... Delicious honey. I like sweet! SWEET IS STRENGTH, GRAARGH! [Looks at you suddenly] But not all sweet is good, Squirrly. One time, I ate off the Shrivelberry bush, made me very STRONG. But it made me very ANGRY to see my testies shrink [Roars angrily, then eats more honey and calms down] Prince Ali eats off the Shrivelberry bush every day. Dunno how Squirrly can beat Prince Ali. Squirrly is tiny. ", 
                    "Options":
                    [
                        {
                            "Text": "Hmmm... So you're saying the berries make him strong. [Become lost in thought]",
                            "Link": -1,
                            "Sets": ["CheatRace", "WonRace"],
                            "Action":
                            {
                                "ID": "CheatRace",
                                "Params":
                                {
                                    "CharID": "Dagger"
                                }
                            }
                        }
                    ]
                },     
                {
                    "Text": "Move, Squirrly, before I EAT YOUR FACE.",
                    "Options":
                    [
                        {
                            "Text": "Ok, moving riiight along. [Continue Running]",
                            "Link": -1
                        }
                    ]
                }               
            ]
        },
        {
            "Name":"TortoiseRun",
            "Chats":
            [
                {
                    "Text": "We all know how race with rabbit and turtle ends... ",
                    "Options":
                    [
                        {
                            "Text": "But, what about me?",
                            "Link": 1
                        }
                    ]
                },
                {
                    "Text": "Ahhh yes, a squirrel must prove to exist first.",
                    "Options":
                    [
                        {
                            "Text": "[Continue race]",
                            "Link": -1
                        }
                    ]
                }             
            ]
        },
        {
            "Name":"Queen",
            "Chats":
            [
                {
                    "Text": "I'm impressed sir Acorn. I must admit I wasn't expecting to see you make it to the final round.",
                    "Options":
                    [
                        {
                            "Text": "You flatter me my queen.",
                            "Link": 1
                        }
                    ]
                },
                {
                    "Text": "I hope you have finished your investigation, you will be announcing culprit's name after the final round.",
                    "Options":
                    [
                        {
                            "Text": "Of course! ... YES!... The culprits name...",
                            "Link": -1
                        }
                    ]
                }             
            ]
        },
        {
            "Name":"Tournament Narator",
            "Chats":
            [
                {
                    "Text": "I'm impressed sir Acorn. I must admit I wasn't expecting to see you make it to the final round.",
                    "Options":
                    [
                        {
                            "Text": "You flatter me my queen.",
                            "Link": 1
                        }
                    ]
                },
                {
                    "Text": "I hope you have finished your investigation, you will be announcing culprit's name after the final round.",
                    "Options":
                    [
                        {
                            "Text": "Of course! ... YES!... The culprits name...",
                            "Link": -1
                        }
                    ]
                }             
            ]
        }
    ]
}