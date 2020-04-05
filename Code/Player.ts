export { Player };

import * as TBX from "toybox-engine";

class Player extends TBX.Sprite
{
    public constructor()
    {
        super();
        this.LoadSets();
        this.SetSpriteSet(0);
    }
    public Init(Position:any, Size:any) : void
    {
        if(!Position.Z) Position.Z = 1;
        this.Trans.Scale = new TBX.Vertex(Size.X, Size.Y, 1);
        this.Trans.Translation = new TBX.Vertex(Position.X, Position.Y, Position.Z);
    }
    private LoadSets(): void 
    {
        let SpriteSetSkin0 = new TBX.SpriteSet(null, [], "IdleRight");
        SpriteSetSkin0.Seed = 10;
        for (let i = 0; i < 3; i++) SpriteSetSkin0.Images.push("Resources/Textures/PlayerSprites/IdleR" + i + ".png");
        this.SpriteSets.push(SpriteSetSkin0);

        let SpriteSetSkin1 = new TBX.SpriteSet(null, [], "IdleLeft");
        SpriteSetSkin1.Seed = 10;
        for (let i = 0; i < 3; i++) SpriteSetSkin1.Images.push("Resources/Textures/PlayerSprites/IdleL" + i + ".png");
        this.SpriteSets.push(SpriteSetSkin1);

        let SpriteSetSkin2 = new TBX.SpriteSet(null, [], "WalkRight");
        SpriteSetSkin2.Seed = 10;
        for (let i = 0; i < 4; i++) SpriteSetSkin2.Images.push("Resources/Textures/PlayerSprites/WalkR" + i + ".png");
        this.SpriteSets.push(SpriteSetSkin2);

        let SpriteSetSkin3 = new TBX.SpriteSet(null, [], "WalkLeft");
        SpriteSetSkin3.Seed = 10;
        for (let i = 0; i < 4; i++) SpriteSetSkin3.Images.push("Resources/Textures/PlayerSprites/WalkL" + i + ".png");
        this.SpriteSets.push(SpriteSetSkin3);

        let SpriteSetSkin4 = new TBX.SpriteSet(null, [], "Bow");
        SpriteSetSkin4.Seed = 10;
        for (let i = 0; i < 3; i++) SpriteSetSkin4.Images.push("Resources/Textures/PlayerSprites/Bow" + i + ".png");
        this.SpriteSets.push(SpriteSetSkin4);

        let SpriteSetSkin5 = new TBX.SpriteSet(null, [], "Sword");
        SpriteSetSkin5.Seed = 10;
        for (let i = 0; i < 3; i++) SpriteSetSkin5.Images.push("Resources/Textures/PlayerSprites/Sword" + i + ".png");
        this.SpriteSets.push(SpriteSetSkin5);
    }
    public CheckProximity(Position:TBX.Vertex, Size:number) : boolean
    {
        let ST = this.Data["ST"];
        let STX = 0;
        if(ST) STX = ST.X;
        let PPX = this.Trans.Translation.X - STX;
        return Math.abs(PPX - Position.X) < Size * 3;
    }
}

