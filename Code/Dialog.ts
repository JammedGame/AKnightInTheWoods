export {Dialog}

class Dialog {
    private _DivDialog:HTMLElement;
    private _Option1:HTMLElement;

    public constructor()
    {
        this._DivDialog = document.getElementById("dialog-overlay");
        this._Option1 = document.getElementById("dialog-info-1");
        this._Option1.innerHTML = "whatever dude";
        this._DivDialog.style.display = "block";
    }
}
