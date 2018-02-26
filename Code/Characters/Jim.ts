export { Jim }

import { Character } from "./Character";

class Jim extends Character
{
    public constructor(Old?:Jim)
    {
        super(Old);
        if(Old)
        {

        }
        else
        {
            this._IdleLength = 2;
            this._CharacterString = "Jim";
            this.Name = "Jim the Squire";
        }
    }
}