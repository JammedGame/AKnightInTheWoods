export { MainMenu };

import * as TBX from "toybox-engine";

import { GameScene } from "./Scenes/GameScene";
import { Sprite } from "three";

class MainMenu extends TBX.Scene2D
{
    private _Game:any;
    private _Runner:any;
    private _Background:TBX.Tile;
    private _Fire:TBX.Sprite;
    private _Player:TBX.Sprite;
    public constructor(Runner:any, Game:any)
    {
        super();
        this._Game = Game;
        this._Runner = Runner;
        this.Init();
    }
    public Init() : void
    {
        this._Fire = new TBX.Sprite();
        this._Player = new TBX.Sprite();
        this.Name = "Menu";
        let Buttons:any = new TBX.ImageCollection(null, ["Resources/Textures/Play.png"]);
        let Play:TBX.Tile = new TBX.Tile();
        Play.Name = "Play";
        Play.Collection = Buttons;
        Play.Index = 0;
        Play.Paint = TBX.Color.FromString("#444444");
        Play.Trans.Scale = new TBX.Vertex(175, 100, 1);
        Play.Trans.Translation = new TBX.Vertex(930, 350, 3);
        Play.Material.Sampling = TBX.TextureSamplingType.Linear;
        Play.Events.MouseDown.push(this.PlayClick.bind(this));
        let Titles:TBX.ImageCollection = new TBX.ImageCollection(null, ["Resources/Textures/Title1.png"]);
        let Title:TBX.Tile = new TBX.Tile();
        Title.Name = "Title";
        Title.Collection = Titles;
        Title.Index = 0;
        Title.Material.Sampling = TBX.TextureSamplingType.Nearest;
        Title.Paint = TBX.Color.FromString("#444444");
        Title.Trans.Scale = new TBX.Vertex(900, 200, 1);
        Title.Trans.Translation = new TBX.Vertex(960, 150, 1);
        this.Attach(Title);
        this.LoadSets();
        this.Attach(Play);
        this.GenerateBackground();
        this.Attach(this._Fire);
        this.Attach(this._Player);
    }
    public PlayClick(G:any, Args:any) : void
    {
        this._Runner.SwitchScene("Path1", false);
    }
    private GenerateBackground() : void
    {
        let Backs:TBX.ImageCollection = new TBX.ImageCollection(null, ["Resources/Textures/Backgrounds/Menu.png"]);
        let Back:TBX.Tile = new TBX.Tile();
        Back.Name = "Back";
        Back.Collection = Backs;
        Back.Index = 0;
        Back.Trans.Scale = new TBX.Vertex(1920, 1080, 1);
        Back.Trans.Translation = new TBX.Vertex(960, 540, 0);
        Back.Material.Sampling = TBX.TextureSamplingType.Nearest;
        this._Background = Back;
        this.Attach(this._Background);
    }
    private LoadSets(): void 
    {
        let SpriteSetSkin0 = new TBX.SpriteSet(null, [], "Fire");
        SpriteSetSkin0.Seed = 20;
        this._Fire.Trans.Scale = new TBX.Vertex(275,275,1);
        this._Fire.Trans.Translation = new TBX.Vertex(580,610,1);
        for (let i = 0; i < 4; i++) SpriteSetSkin0.Images.push("Resources/Textures/Other/FireFrame" + i + ".png");
        this._Fire.SpriteSets.push(SpriteSetSkin0);

        let SpriteSetSkin1 = new TBX.SpriteSet(null, [], "PlayerCamping");
        SpriteSetSkin1.Seed = 20;
        this._Player.Trans.Scale = new TBX.Vertex(280,350,1);
        this._Player.Trans.Translation = new TBX.Vertex(420,560,2);
        for (let i = 0; i < 3; i++) SpriteSetSkin1.Images.push("Resources/Textures/PlayerSprites/Sitting" + i + ".png");
        this._Player.SpriteSets.push(SpriteSetSkin1);
    }
}