export { Raccoon }

import { Character } from "./Character";

class Raccoon extends Character
{
    public constructor(Old?:Raccoon)
    {
        super(Old);
        if(Old)
        {

        }
        else
        {
            this._IdleLength = 2;
            this._CharacterString = "Raccoon";
            this.Name = "Oonie de Racko";
        }
    }
}