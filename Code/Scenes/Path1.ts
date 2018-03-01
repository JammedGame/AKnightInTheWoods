export { Path1 };

import { Path } from "./Path";
import { Transition } from "./../Transition";

class Path1 extends Path
{
    public constructor()
    {
        super("Path1");
        this.Init();
    }
    public Init(): void
    {
        super.Init();

        this.CreateCharacter("Raccoon", {X:1000,Y:650,Z:0.8}, {X:300, Y:350}, 0);
        this.CreateCharacter("Bob", {X:2200,Y:650,Z:0.8}, {X:400, Y:550}, 0);
        this.CreateCharacter("Jim", {X:3000,Y:620,Z:0.8}, {X:430, Y:600}, 0);
        this.CreateCharacter("Wolf", {X:2600,Y:770,Z:0.8}, {X:600, Y:360}, 0);
        this.CreateCharacter("Fox", {X:4800,Y:630,Z:0.8}, {X:400, Y:400}, 0);
        this.CreateCharacter("Rabbit", {X:5100,Y:680,Z:0.8}, {X:300, Y:300}, 0);

        this.CreateTransition("Signpost", "Camp1", "Lower Tournament Camp", {X:5500, Y:680, Z:0.7});
    }
}