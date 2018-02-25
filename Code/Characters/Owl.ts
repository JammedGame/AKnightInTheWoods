export { Owl }

import { Character } from "./Character";

class Owl extends Character
{
    public constructor(Old?:Owl)
    {
        super(Old);
        if(Old)
        {

        }
        else
        {
            this._IdleLength = 3;
            this._CharacterString = "Owl";
            this.Name = "Judge Hoot";
        }
    }
}