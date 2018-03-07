export { Target }

import { Character } from "./Character";

class Target extends Character
{
    public constructor(Old?:Target)
    {
        super(Old);
        if(Old)
        {

        }
        else
        {
            this._IdleLength = 1;
            this._CharacterString = "Target";
            this.Name = "Shoot The Target";
        }
    }
}