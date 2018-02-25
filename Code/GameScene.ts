export { GameScene };

import Engineer from "./Engineer";
import { Player } from "./Player";
import { Movement } from "./Movement";
import { ParticleSystemMaterial, Vertex } from "three";
import { Dialog } from "./Dialog";
import { Curio } from "./Curio";

class GameScene extends Engineer.Scene2D
{
    protected _Pause:boolean;
    protected _Background:Engineer.Tile;
    protected _Player:Player;
    protected _Movement:Movement;
    protected _Dialog:Dialog;
    protected _Curio:Curio[];
    public get Pause():boolean { return this._Pause; }
    public set Pause(value:boolean) { this._Pause = value; }
    public get Player():Player { return this._Player; }
    public set Player(value:Player) { this._Player = value; }

    public constructor()
    {
        super();
    }
}