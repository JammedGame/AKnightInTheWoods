export { Fire }

import { Character } from "./Character";

class Fire extends Character
{
    public constructor(Old?:Fire)
    {
        super(Old);
        if(Old)
        {

        }
        else
        {
            this._IdleLength = 4;
            this._CharacterString = "Fire";
            this.Name = "Campfire";
        }
    }
}