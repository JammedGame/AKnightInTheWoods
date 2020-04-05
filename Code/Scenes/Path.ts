export { Path };

import { Player } from "./../Player";
import { Movement } from "./Movement";
import { GameScene } from "./GameScene";
import { Transition } from "./../Transition";

class Path extends GameScene
{
    public constructor(Name:string)
    {
        super();
        this._XSize = 5760;
        this.Name = Name;
    }
    public Init(): void
    {
        super.Init();
        this.GenerateBackground();
        this._Movement = new Movement(this, "Path");

        this._Player = new Player();
        this._Player.Init({X:200,Y:780,Z:1},{X:279,Y:333});
        this.Attach(this._Player);
    }
}