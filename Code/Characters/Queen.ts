export { Queen }

import { Character } from "./Character";

class Queen extends Character
{
    public constructor(Old?:Queen)
    {
        super(Old);
        if(Old)
        {

        }
        else
        {
            this._IdleLength = 3;
            this._CharacterString = "Queen";
            this.Name = "Her Hogness";
        }
    }
}