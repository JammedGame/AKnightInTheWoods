export { Kangaroo }

import { Character } from "./Character";

class Kangaroo extends Character
{
    public constructor(Old?:Kangaroo)
    {
        super(Old);
        if(Old)
        {

        }
        else
        {
            this._IdleLength = 3;
            this._CharacterString = "Kangaroo";
            this.Name = "Sir James of Hats";
        }
    }
}