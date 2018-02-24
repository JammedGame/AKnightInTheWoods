export { Player };

import Engineer from "./Engineer";
import { Movement } from "./Movement";
import { GameScene } from "./GameScene";



class Player extends Engineer.Sprite {
    private _GameScene:GameScene;

    public constructor(GameScene:GameScene)
    {
        super();
        this._GameScene = GameScene;
        this.Fixed = true;    
        this.LoadSets();
        this.Trans.Scale = new Engineer.Vertex(279, 333, 1);
        this.Trans.Translation = new Engineer.Vertex(960, 540, 0.5);
        this.SetSpriteSet(0);
        console.log(this);
    }

    private LoadSets(): void 
    {
        let SpriteSetSkin0 = new Engineer.SpriteSet(null, "IdleRight", []);
        SpriteSetSkin0.Seed = 50;
        for (let i = 0; i < 3; i++) SpriteSetSkin0.Sprites.push("Resources/Characters/IdleR" + i + ".png");
        this.SpriteSets.push(SpriteSetSkin0);

        let SpriteSetSkin1 = new Engineer.SpriteSet(null, "WalkRight", []);
        SpriteSetSkin1.Seed = 50;
        for (let i = 0; i < 3; i++) SpriteSetSkin1.Sprites.push("Resources/Characters/walkR" + i + ".png");
        this.SpriteSets.push(SpriteSetSkin1);
    }
}

