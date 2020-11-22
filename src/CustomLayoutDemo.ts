class CustomLayoutDemo extends eui.Component implements  eui.UIComponent {

	private magnifier: eui.Image;

	public constructor() {
		super();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}

	private myTimer:egret.Timer;

	protected childrenCreated():void
	{
		super.childrenCreated();
		//egret.startTick(this.onTicker, this);
		this.myTimer = new egret.Timer(1);
		this.myTimer.start();
		this.myTimer.addEventListener(egret.TimerEvent.TIMER, this.onTimer, this);
		setTimeout(()=>{console.log("555");},1000);
	}

	$onAddToStage(stage, nest) {
		super.$onAddToStage(stage, nest);
		this.once(egret.Event.REMOVED_FROM_STAGE, this.onRemoveFromStage, this);
	}

	private onRemoveFromStage() {
		
	}

	private degree:number = 0; // 度数
	private hypotenuse: number = 100; // 斜边的长度

    private onTicker(timeStamp:number) {
		this.degree = (this.degree+3) % 360;
		this.magnifier.x = -this.hypotenuse * (Math.sin(this.degree*Math.PI/180)) + 320;
		this.magnifier.y = -this.hypotenuse * (Math.cos(this.degree*Math.PI/180)) + 568;
        return false;
	}
	
	private onTimer(evt:egret.TimerEvent):void {
		this.degree = (this.degree+2) % 360;
		this.magnifier.x = -this.hypotenuse * (Math.sin(this.degree*Math.PI/180)) + 320;
		this.magnifier.y = -this.hypotenuse * (Math.cos(this.degree*Math.PI/180)) + 568;
	}
}