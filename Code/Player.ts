export { Player };

import Engineer from "./Engineer";
import { GameScene } from "./GameScene";
import { Movement } from "./Movement";




class Player extends Engineer.Sprite {
    private _GameScene:GameScene;

    public constructor(GameScene:GameScene)
    {
        super();
        this._GameScene = GameScene;
        this.Fixed = true;    
        this.LoadSets();
        this.SetSpriteSet(0);
        this.Events.MouseDown.push(this.ActivateTooltip.bind(this));
    }

    private LoadSets(): void 
    {
        let SpriteSetSkin0 = new Engineer.SpriteSet(null, [], "IdleRight");
        SpriteSetSkin0.Seed = 50;
        for (let i = 0; i < 3; i++) SpriteSetSkin0.Images.push("Resources/Characters/idleR" + i + ".png");
        this.SpriteSets.push(SpriteSetSkin0);

        let SpriteSetSkin1 = new Engineer.SpriteSet(null, [], "IdleLeft");
        SpriteSetSkin1.Seed = 50;
        for (let i = 0; i < 3; i++) SpriteSetSkin1.Images.push("Resources/Characters/idleL" + i + ".png");
        this.SpriteSets.push(SpriteSetSkin1);

        let SpriteSetSkin2 = new Engineer.SpriteSet(null, [], "WalkRight");
        SpriteSetSkin2.Seed = 50;
        for (let i = 0; i < 3; i++) SpriteSetSkin2.Images.push("Resources/Characters/walkR" + i + ".png");
        this.SpriteSets.push(SpriteSetSkin2);

        let SpriteSetSkin3 = new Engineer.SpriteSet(null, [], "WalkLeft");
        SpriteSetSkin3.Seed = 50;
        for (let i = 0; i < 3; i++) SpriteSetSkin3.Images.push("Resources/Characters/walkL" + i + ".png");
        this.SpriteSets.push(SpriteSetSkin3);
    }
    private ActivateTooltip() : void
    {
        console.log("test");
    }
}

