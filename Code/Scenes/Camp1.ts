export { Camp1 };

import { Camp } from "./Camp";

class Camp1 extends Camp
{
    public constructor()
    {
        super("Camp1");
        this.Init();
    }
    public Init(): void
    {
        super.Init();

        this.CreateCharacter("Owl", {X:1500,Y:680,Z:0.8}, {X:400, Y:400}, 0);
        this.CreateCharacter("Tortoise", {X:200,Y:800,Z:1.1}, {X:360, Y:360}, 0, true);

        this.CreateTransition("Signpost", "Arena1", "Go To Archery Competition", {X:500, Y:1000, Z:1.2});
    }
}