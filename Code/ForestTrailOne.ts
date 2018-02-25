export { ForestTrailOne };

import Engineer from "./Engineer";
import { Player } from "./Player";
import { Movement } from "./Movement";
import { ParticleSystemMaterial, Vertex } from "three";
import { Dialog } from "./Dialog";
import { Curio } from "./Curio";
import { GameScene } from "./GameScene";

class ForestTrailOne extends GameScene
{
    public get Pause():boolean { return this._Pause; }
    public set Pause(value:boolean) { this._Pause = value; }
    public get Player():Player { return this._Player; }
    public set Player(value:Player) { this._Player = value; }

    public constructor()
    {
        super();
        this.Name = "ForestTrailOne";
        this.Init();
    }
    public Init(): void
    {
        this._Curio = [];
        this._Movement = new Movement(this);
        this._Player = new Player(this);
        this._Dialog = new Dialog();
        this._Curio.push(new Curio(this,"signpost1", new Engineer.Vertex(1800,500,0.5)));        
        this._Player.Trans.Scale = new Engineer.Vertex(279, 333, 1);
        this._Player.Trans.Translation = new Engineer.Vertex(200, 780, 1);
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
        let Backs:Engineer.ImageCollection = new Engineer.ImageCollection(null, ["Resources/Textures/ForestTrailOne.png"]);
        let Back:Engineer.Tile = new Engineer.Tile();
        Back.Name = "Back";
        Back.Collection = Backs;
        Back.Index = 0;
        Back.Trans.Scale = new Engineer.Vertex(5760, 1080, 1);
        Back.Trans.Translation = new Engineer.Vertex(2800, 540, 0);
        this._Background = Back;
        this.AddSceneObject(this._Background);
    }
}