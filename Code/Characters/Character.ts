export { Character }

import Engineer from "./../Engineer";

class Character extends Engineer.Sprite
{
    protected _IdleLength:number;
    protected _CharacterSeed:number;
    protected _CharacterString:string;
    public constructor(Old?:Character)
    {
        super(Old);
        if(Old)
        {
            this._IdleLength = Old._IdleLength;
            this._CharacterSeed = Old._CharacterSeed;
            this._CharacterString = Old._CharacterString;
        }
        else
        {
            if(!this._IdleLength) this._IdleLength = 3;
            if(!this._CharacterSeed) this._CharacterSeed = 50;
            if(!this._CharacterString)
            {
                Engineer.Log.Error("CharacterString not set!");
            }
            else this.LoadSpriteSets();
        }
    }
    private LoadSpriteSets() : void
    {
        let Idle = new Engineer.SpriteSet(null, [], "IdleRight");
        Idle.Seed = this._CharacterSeed;
        let ArtPath:string = "Resources/Textures/Characters/" + this._CharacterString + "/" + this._CharacterString;
        for (let i = 0; i < this._IdleLength; i++) Idle.Images.push(ArtPath + i + ".png");
        this.SpriteSets.push(Idle);
        this.UpdateSpriteSet(0);
    }
}