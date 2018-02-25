export { Arena1 };

import Engineer from "./../Engineer";
import { Player } from "./../Player";
import { Movement } from "./../Movement";
import { ParticleSystemMaterial, Vertex } from "three";
import { Curio } from "./../Curio";
import { GameScene } from "./../GameScene";

import { Rabbit } from "./../Characters/Rabbit";
import { Transition } from "./../Transition";

class Arena1 extends GameScene
{
    private _Rabbit:Rabbit;
    private _Signpost:Transition;
    public constructor()
    {
        super();
        this.Name = "Arena1";
        this.Init();
    }
    public Init(): void
    {
        this._Movement = new Movement(this);

        this._Rabbit = new Rabbit();
        this._Rabbit.Flip();
        this._Rabbit.Init(new Engineer.Vertex(300, 680, 0.8), new Engineer.Vertex(300, 300, 1));

        this._Player = new Player(this);
        this._Player.Trans.Scale = new Engineer.Vertex(279, 333, 1);
        this._Player.Trans.Translation = new Engineer.Vertex(500, 700, 1);
        
        this.BackColor = Engineer.Color.FromRGBA(0, 0, 0, 255);
        this.GenerateBackground();
        this.AddSceneObject(this._Player);
        this.AddSceneObject(this._Rabbit);
    }
    private GenerateBackground() : void
    {
        let Backs:Engineer.ImageCollection = new Engineer.ImageCollection(null, ["Resources/Textures/Backgrounds/Arena.png"]);
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