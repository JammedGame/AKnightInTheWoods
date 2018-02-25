export { Rabbit }

import { Character } from "./Character";

class Rabbit extends Character
{
    public constructor(Old?:Rabbit)
    {
        super(Old);
        if(Old)
        {

        }
        else
        {
            this._IdleLength = 2;
            this._CharacterString = "Rabbit";
            this.Name = "Rabbit";
        }
    }
}