export { Bob }

import { Character } from "./Character";

class Bob extends Character
{
    public constructor(Old?:Bob)
    {
        super(Old);
        if(Old)
        {

        }
        else
        {
            this._IdleLength = 2;
            this._CharacterString = "Bob";
            this.Name = "Bob the Squire";
        }
    }
}