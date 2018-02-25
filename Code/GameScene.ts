export { GameScene };

import Engineer from "./Engineer";
import { Player } from "./Player";
import { Movement } from "./Movement";
import { ParticleSystemMaterial, Vertex } from "three";
import { Curio } from "./Curio";

import { Tooltip } from "./Tooltip";

class GameScene extends Engineer.Scene2D
{
    protected _Pause:boolean;
    protected _Background:Engineer.Tile;
    protected _Player:Player;
    protected _Movement:Movement;
    protected _Tooltip:Tooltip;
    protected _Curio:Curio[];
    public get Pause():boolean { return this._Pause; }
    public set Pause(value:boolean) { this._Pause = value; }
    public get Player():Player { return this._Player; }
    public set Player(value:Player) { this._Player = value; }

    public constructor()
    {
        super();
        this._Tooltip = new Tooltip(this);
    }
}