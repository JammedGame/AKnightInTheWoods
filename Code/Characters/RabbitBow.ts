export { RabbitBow }

import { Character } from "./Character";

class RabbitBow extends Character
{
    public constructor(Old?:RabbitBow)
    {
        super(Old);
        if(Old)
        {

        }
        else
        {
            this._IdleLength = 2;
            this._CharacterString = "RabbitBow";
            this.Name = "Knight Carrot";
        }
    }
}