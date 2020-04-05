export { Goat }

import { Character } from "./Character";

class Goat extends Character
{
    public constructor(Old?:Goat)
    {
        super(Old);
        if(Old)
        {

        }
        else
        {
            this._IdleLength = 3;
            this._CharacterString = "Goat";
            this.Name = "Giovanni the Merchant";
            this._CharacterTooltip.Style.Text.Size = 15;
        }
    }
}