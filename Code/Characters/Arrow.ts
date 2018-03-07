export { Arrow }

import { Character } from "./Character";

class Arrow extends Character
{
    public constructor(Old?:Arrow)
    {
        super(Old);
        if(Old)
        {

        }
        else
        {
            this._IdleLength = 1;
            this._CharacterString = "Arrow";
            this.Name = "";
        }
    }
}