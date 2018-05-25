export { Camp };

import { Player } from "./../Player";
import { Movement } from "./Movement";
import { GameScene } from "./GameScene";

class Camp extends GameScene
{
    public constructor(Name:string)
    {
        super();
        this.Name = Name;
    }
    public Init(): void
    {
        this.GenerateBackground();

        this._Movement = new Movement(this, "Camp");

        this._Player = new Player();
        this._Player.Init({X:500,Y:700,Z:1},{X:279,Y:333});
        this.Attach(this._Player);
    }
}