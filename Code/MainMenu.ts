export { MainMenu };

import * as Engineer from "engineer-js";

import { GameScene } from "./Scenes/GameScene";
import { Sprite } from "three";

class MainMenu extends Engineer.Scene2D
{
    private _Game:any;
    private _Runner:any;
    private _Background:Engineer.Tile;
    private _Fire:Engineer.Sprite;
    private _Player:Engineer.Sprite;
    public constructor(Runner:any, Game:any)
    {
        super();
        this._Game = Game;
        this._Runner = Runner;
        this.Init();
    }
    public Init() : void
    {
        this._Fire = new Engineer.Sprite();
        this._Player = new Engineer.Sprite();
        this.Name = "Menu";
        let Buttons:any = new Engineer.ImageCollection(null, ["/Resources/Textures/Play.png"]);
        let Play:any = new Engineer.Tile();
        Play.Name = "Play";
        Play.Collection = Buttons;
        Play.Index = 0;
        Play.Sampling = Engineer.ImageObjectSamplingType.Nearest;
        Play.Paint = Engineer.Color.Aqua;
        Play.Trans.Scale = new Engineer.Vertex(175, 100, 1);
        Play.Trans.Translation = new Engineer.Vertex(1500, 600, 3);
        Play.Events.MouseDown.push(this.PlayClick.bind(this));
        let Titles:any = new Engineer.ImageCollection(null, ["/Resources/Textures/Title.png"]);
        let Title:any = new Engineer.Tile();
        Title.Name = "Title";
        Title.Collection = Titles;
        Title.Index = 0;
        Title.Trans.Scale = new Engineer.Vertex(1800, 300, 1);
        Title.Trans.Translation = new Engineer.Vertex(960, 220, 1);
        this.AddSceneObject(Title);
        this.LoadSets();
        this.AddSceneObject(Play);
        this.GenerateBackground();
        this.AddSceneObject(this._Fire);
        this.AddSceneObject(this._Player);
    }
    public PlayClick(G:any, Args:any) : void
    {
        this._Runner.SwitchScene("Path1", false);
    }
    private GenerateBackground() : void
    {
        let Backs:Engineer.ImageCollection = new Engineer.ImageCollection(null, ["Resources/Textures/Backgrounds/Menu.png"]);
        let Back:Engineer.Tile = new Engineer.Tile();
        Back.Name = "Back";
        Back.Collection = Backs;
        Back.Index = 0;
        Back.Trans.Scale = new Engineer.Vertex(1920, 1080, 1);
        Back.Trans.Translation = new Engineer.Vertex(960, 540, 0);
        this._Background = Back;
        this.AddSceneObject(this._Background);
    }
    private LoadSets(): void 
    {
        let SpriteSetSkin0 = new Engineer.SpriteSet(null, [], "Fire");
        SpriteSetSkin0.Seed = 20;
        this._Fire.Trans.Scale = new Engineer.Vertex(275,275,1);
        this._Fire.Trans.Translation = new Engineer.Vertex(580,610,1);
        for (let i = 0; i < 4; i++) SpriteSetSkin0.Images.push("Resources/Textures/Other/FireFrame" + i + ".png");
        this._Fire.SpriteSets.push(SpriteSetSkin0);

        let SpriteSetSkin1 = new Engineer.SpriteSet(null, [], "PlayerCamping");
        SpriteSetSkin1.Seed = 20;
        this._Player.Trans.Scale = new Engineer.Vertex(300,300,1);
        this._Player.Trans.Translation = new Engineer.Vertex(420,560,2);
        for (let i = 0; i < 3; i++) SpriteSetSkin1.Images.push("Resources/Textures/Player/Sitting" + i + ".png");
        this._Player.SpriteSets.push(SpriteSetSkin1);
    }
}