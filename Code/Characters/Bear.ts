export { Bear }

import { Character } from "./Character";

class Bear extends Character
{
    public constructor(Old?:Bear)
    {
        super(Old);
        if(Old)
        {

        }
        else
        {
            this._IdleLength = 4;
            this._CharacterString = "Bear";
            this.Name = "Unbearable";
        }
    }
}