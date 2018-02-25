export { TournamentCampOne };

import Engineer from "./Engineer";
import { Player } from "./Player";
import { Movement } from "./Movement";
import { ParticleSystemMaterial, Vertex } from "three";
import { Curio } from "./Curio";
import { GameScene } from "./GameScene";

import { Owl } from "./Characters/Owl";
import { Tortoise } from "./Characters/Tortoise";
import { Transition } from "./Transition";

class TournamentCampOne extends GameScene
{
    private _Owl:Owl;
    private _Tortoise:Tortoise;
    private _Signpost:Transition;
    public constructor()
    {
        super();
        this.Name = "Camp1";
        this.Init();
    }
    public Init(): void
    {
        this._Movement = new Movement(this);

        this._Owl = new Owl();
        this._Owl.Fixed = true;
        this._Owl.Init(new Engineer.Vertex(1500, 680, 0.8), new Engineer.Vertex(400, 400, 1));

        this._Tortoise = new Tortoise();
        this._Tortoise.Fixed = true;
        this._Tortoise.Flip();
        this._Tortoise.Init(new Engineer.Vertex(200, 800, 1.1), new Engineer.Vertex(360, 360, 1));

        this._Signpost = new Transition(null, "Signpost", "Arena1", "Go To Archery Competition");
        this._Signpost.Init(new Engineer.Vertex(500, 1000, 1.2));
        this._Signpost.Fixed = true;

        this._Player = new Player(this);
        this._Player.Trans.Scale = new Engineer.Vertex(279, 333, 1);
        this._Player.Trans.Translation = new Engineer.Vertex(500, 700, 1);
        
        this.BackColor = Engineer.Color.FromRGBA(0, 0, 0, 255);
        this.GenerateBackground();
        this.AddSceneObject(this._Player);
        this.AddSceneObject(this._Owl);
        this.AddSceneObject(this._Tortoise);
        this.AddSceneObject(this._Signpost);
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
        let Backs:Engineer.ImageCollection = new Engineer.ImageCollection(null, ["Resources/Textures/Backgrounds/PavilionDayF.png"]);
        let Back:Engineer.Tile = new Engineer.Tile();
        Back.Name = "Back";
        Back.Collection = Backs;
        Back.Index = 0;
        Back.Trans.Scale = new Engineer.Vertex(1920, 1080, 1);
        Back.Trans.Translation = new Engineer.Vertex(960, 540, 0);
        Back.Fixed = true;
        this._Background = Back;
        this.AddSceneObject(this._Background);
    }
}