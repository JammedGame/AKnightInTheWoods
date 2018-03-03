export { Gator }

import { Character } from "./Character";

class Gator extends Character
{
    public constructor(Old?:Gator)
    {
        super(Old);
        if(Old)
        {

        }
        else
        {
            this._IdleLength = 2;
            this._CharacterString = "Gator";
            this.Name = "Prince Ali Gator";
        }
    }
}