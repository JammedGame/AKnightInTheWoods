export { Tortoise }

import { Character } from "./Character";

class Tortoise extends Character
{
    public constructor(Old?:Tortoise)
    {
        super(Old);
        if(Old)
        {

        }
        else
        {
            this._IdleLength = 6;
            this._CharacterString = "Tortoise";
            this.Name = "Sir Aristurtle";
        }
    }
}