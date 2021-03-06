var D3Base_RigitAnimationSample = (function () {
    function D3Base_RigitAnimationSample() {
        var _this = this;
        Laya3D.init(0, 0, true);
        Laya.stage.scaleMode = Laya.Stage.SCALE_FULL;
        Laya.stage.screenMode = Laya.Stage.SCREEN_NONE;
        Laya.Stat.show();
        this.scene = Laya.stage.addChild(new Laya.Scene());
        var camera = (this.scene.addChild(new Laya.Camera(0, 0.1, 1000)));
        camera.transform.translate(new Laya.Vector3(0, 16.8, 26.0));
        camera.transform.rotate(new Laya.Vector3(-30, 0, 0), true, false);
        camera.clearColor = null;
        this.effectSprite = this.scene.addChild(Laya.Sprite3D.load("../../res/threeDimen/staticModel/effect/WuShen/WuShen.lh"));
        this.effectSprite.once(Laya.Event.HIERARCHY_LOADED, this, function (sprite3D) {
            _this.setMeshParams(_this.effectSprite, Laya.StandardMaterial.RENDERMODE_NONDEPTH_ADDTIVEDOUBLEFACE);
            var rootAnimations = sprite3D.addComponent(Laya.RigidAnimations);
            rootAnimations.url = "../../res/threeDimen/staticModel/effect/WuShen/WuShen.lani";
            rootAnimations.player.play(0);
        });
    }
    D3Base_RigitAnimationSample.prototype.setMeshParams = function (spirit3D, renderMode) {
        if (spirit3D instanceof Laya.MeshSprite3D) {
            var meshSprite = spirit3D;
            for (var i = 0; i < meshSprite.meshRender.sharedMaterials.length; i++) {
                var material = meshSprite.meshRender.sharedMaterials[i];
                material.renderMode = renderMode;
            }
        }
        for (var i = 0; i < spirit3D._childs.length; i++)
            this.setMeshParams(spirit3D._childs[i], renderMode);
    };
    return D3Base_RigitAnimationSample;
}());
new D3Base_RigitAnimationSample();
