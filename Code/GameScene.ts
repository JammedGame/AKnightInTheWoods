export { GameScene };

import Engineer from "./Engineer";
import { Player } from "./Player";
import { Movement } from "./Movement";
import { ParticleSystemMaterial } from "three";
import { Dialog } from "./Dialog";

class GameScene extends Engineer.Scene2D
{
    private _Pause:boolean;
    private _Background:Engineer.Tile;
    private _Player:Player;
    private _Movement:Movement;
    private _Dialog:Dialog;
    public get Pause():boolean { return this._Pause; }
    public set Pause(value:boolean) { this._Pause = value; }
    public get Player():Player { return this._Player; }
    public set Player(value:Player) { this._Player = value; }

    public constructor()
    {
        super();
        this.Name = "Game";
        this.Init();
    }
    public Init(): void
    {
        this._Movement = new Movement(this);
        this._Player = new Player(this);
        this._Dialog = new Dialog();
        this.AddSceneObject(this._Player);
        this.BackColor = Engineer.Color.FromRGBA(0, 0, 0, 255);
        this.GenerateBackground();
    }
    private KeyPress(G: any, Args: any): void
    {
        if(this._Pause) return;
        // Key Code here
    }
    private SceneUpdate() : void
    {
        if(this._Pause) return;
        // Update Code here
    }
    private GenerateBackground() : void
    {
        let Backs:Engineer.TileCollection = new Engineer.TileCollection(null, ["Resources/Textures/camp1.png"]);
        let Back:Engineer.Tile = new Engineer.Tile();
        Back.Name = "Back";
        Back.Collection = Backs;
        Back.Index = 0;
        Back.Trans.Scale = new Engineer.Vertex(1920, 1080, 1);
        Back.Trans.Translation = new Engineer.Vertex(960, 540, 0);
        this._Background = Back;
        this.AddSceneObject(this._Background);
    }
}