export { Fox }

import { Character } from "./Character";

class Fox extends Character
{
    public constructor(Old?:Fox)
    {
        super(Old);
        if(Old)
        {

        }
        else
        {
            this._IdleLength = 2;
            this._CharacterString = "Fox";
            this.Name = "Lady Mosilla";
        }
    }
}