export { Wolf }

import { Character } from "./Character";

class Wolf extends Character
{
    public constructor(Old?:Wolf)
    {
        super(Old);
        if(Old)
        {

        }
        else
        {
            this._IdleLength = 1;
            this._CharacterString = "Wolf";
            this.Name = "Duke Howl";
        }
    }
}