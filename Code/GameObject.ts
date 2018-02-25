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
                    Text: "To Rabbit",
                    Options:
                    [
                        {
                            Text: "Good morning lady!",
                            Locked: false,
                            Link: 1
                        },
                        {
                            Text: "Good morning gentleman!",
                            Locked: false,
                            Link: 1
                        }
                    ]
                },
                {
                    Text: "Did you just assume my gender?!",
                    Options:
                    [
                        {
                            Text: "Goodbye.",
                            Locked: false,
                            Link: -1
                        }
                    ]
                }
            ]
        }
    ]
};