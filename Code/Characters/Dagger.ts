export { Dagger }

import { Character } from "./Character";

class Dagger extends Character
{
    public constructor(Old?:Dagger)
    {
        super(Old);
        if(Old)
        {

        }
        else
        {
            this._IdleLength = 1;
            this._CharacterString = "Dagger";
            this.Name = "";
        }
    }
}