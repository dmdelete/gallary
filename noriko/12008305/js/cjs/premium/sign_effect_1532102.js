(function(lib, img, cjs) {

    var p; // shortcut to reference prototypes

    // stage content:
    (lib.sign_effect_1532102 = function() {
        this.initialize();

        // sign
        this.sign_effect = new lib.sign_effect_1532102_1();

        // image_replace
        this.instance = new lib.replace_image_1532102();

        this.addChild(this.instance, this.sign_effect);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 663.2, 800);


    // symbols:
    (lib.replace_image_1532102 = function() {
        this.initialize(img.replace_image_1532102);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 640, 800);


    (lib.reflect_inner = function() {
        this.initialize();

        // standard
        this.shape = new cjs.Shape();
        this.shape.graphics.lf(["rgba(255,255,255,0)", "rgba(255,255,255,0.749)", "rgba(255,255,255,0)"], [0, 0.51, 1], 0, 297.1, 0.1, -296.9).s().p("EgXbAu4MAAAhdvMAu2AAAMAAABdvg");
        this.shape.setTransform(150, 300);

        this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 300, 600);


    (lib.reflect_mask_1532102 = function() {
        this.initialize();

        // 繝ｬ繧､繝､繝ｼ 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,204,255,0.502)").s().p("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");

        this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-146, -112.5, 292.2, 225.2);


    (lib.glitter_inner_sphere = function() {
        this.initialize();

        // 繝ｬ繧､繝､繝ｼ 1
        this.shape = new cjs.Shape();
        this.shape.graphics.rf(["#FFFFFF", "rgba(255,255,255,0.302)", "rgba(255,255,255,0)"], [0, 0.522, 1], 0, 0, 0, 0, 0, 51.3).s().p("AlgFgQiTiRAAjPQAAjPCTiRQCRiTDPAAQDPAACRCTQCUCRAADPQAADPiUCRQiRCUjPAAQjPAAiRiUg");

        this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-49.9, -49.9, 100, 100);


    (lib.reflect = function() {
        this.initialize();

        // main
        this.lighter_tgt = new lib.reflect_inner();
        this.lighter_tgt.setTransform(0, -257.6, 1.036, 1.036, 0, 0, -19.9);
        this.lighter_tgt.compositeOperation = "lighter";

        this.addChild(this.lighter_tgt);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, -364, 292.2, 728.2);


    (lib.reflect_container_cjs_1532102 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {
            flash: 20
        });

        // timeline functions:
        this.frame_0 = function() {
            this.preview.visible = false;
        }
        this.frame_20 = function() {
            this.play();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20).call(this.frame_20).wait(18));

        // preview
        this.preview = new lib.reflect();
        this.preview.setTransform(-0.3, 0, 1, 1, 0, 0, 0, -0.4, 0);
        this.preview.compositeOperation = "lighter";

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.preview
            }]
        }).wait(39));

        // reflect
        this.instance = new lib.reflect();
        this.instance.setTransform(-0.3, 476.8, 1, 1, 0, 0, 0, -0.4, 0.1);
        this.instance.compositeOperation = "lighter";
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({
            _off: false
        }, 0).to({
            regY: 0,
            y: 0
        }, 9, cjs.Ease.get(-0.99)).to({
            regY: 0.1,
            y: -476.3
        }, 9, cjs.Ease.get(1)).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, -364, 292.2, 728.2);


    (lib.glitter_inner = function() {
        this.initialize();

        // 繝ｬ繧､繝､繝ｼ 1
        this.instance = new lib.glitter_inner_sphere();
        this.instance.setTransform(0, 0.1, 1.5, 0.086, -44.9);

        this.instance_1 = new lib.glitter_inner_sphere();
        this.instance_1.setTransform(0, 0, 0.334, 0.334);

        this.instance_2 = new lib.glitter_inner_sphere();
        this.instance_2.setTransform(0, 0, 1.5, 0.086, 45);

        this.instance_3 = new lib.glitter_inner_sphere();

        this.addChild(this.instance_3, this.instance_2, this.instance_1, this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-56, -56.1, 112.2, 112.3);


    (lib.glitter = function() {
        this.initialize();

        // flare
        this.lighter_tgt = new lib.glitter_inner();
        this.lighter_tgt.compositeOperation = "lighter";

        this.addChild(this.lighter_tgt);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-56, -56.1, 112.2, 112.3);


    (lib.reflect_wrapper_1532102 = function() {
        this.initialize();

        // cjs
        this.reflect = new lib.reflect_container_cjs_1532102();
        this.reflect.compositeOperation = "lighter";

        this.addChild(this.reflect);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, -364, 292.2, 728.2);


    (lib.glitter_container_cjs = function(mode, startPosition, loop) {
        if (loop == null) {
            loop = false;
        }
        this.initialize(mode, startPosition, loop, {
            loop: 20
        });

        // timeline functions:
        this.frame_0 = function() {
            this.gotoAndPlay(Math.floor(Math.random() * 20));
        }
        this.frame_20 = function() {

        }
        this.frame_50 = function() {
            this.gotoAndPlay(0);
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20).call(this.frame_20).wait(30).call(this.frame_50));

        // mc
        this.lux = new lib.glitter();

        this.timeline.addTween(cjs.Tween.get(this.lux).to({
            _off: true
        }, 1).wait(19).to({
            alpha: 0,
            _off: false
        }, 0).to({
            scaleX: 0.73,
            scaleY: 0.73,
            alpha: 0.75
        }, 9, cjs.Ease.get(0.5)).to({
            scaleX: 0.7,
            scaleY: 0.7,
            alpha: 0
        }, 9, cjs.Ease.get(-0.49)).to({
            _off: true
        }, 1).wait(12));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-56, -56.1, 112.2, 112.3);


    (lib.glitter_wrapper = function() {
        this.initialize();

        // cjs
        this.instance = new lib.glitter_container_cjs();

        this.addChild(this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-56, -56.1, 112.2, 112.3);


    (lib.sign_effect_1532102_1 = function() {
        this.initialize();

        // glitter
        this.instance = new lib.glitter_wrapper();
        this.instance.setTransform(436.1, 467.7);

        this.instance_1 = new lib.glitter_wrapper();
        this.instance_1.setTransform(531.1, 492.8);

        this.instance_2 = new lib.glitter_wrapper();
        this.instance_2.setTransform(350, 561);

        this.instance_3 = new lib.glitter_wrapper();
        this.instance_3.setTransform(607.1, 535.2);

        this.instance_4 = new lib.glitter_wrapper();
        this.instance_4.setTransform(473.4, 508.2, 0.725, 0.725);

        this.instance_5 = new lib.glitter_wrapper();
        this.instance_5.setTransform(483.6, 570, 0.692, 0.692);

        this.instance_6 = new lib.glitter_wrapper();
        this.instance_6.setTransform(518, 608.3, 0.66, 0.66);

        this.instance_7 = new lib.glitter_wrapper();
        this.instance_7.setTransform(418.9, 580);

        this.instance_8 = new lib.glitter_wrapper();
        this.instance_8.setTransform(355.9, 416.9);

        // mask
        this.reflect_mask = new lib.reflect_mask_1532102();
        this.reflect_mask.setTransform(468.9, 509);
        this.reflect_mask.alpha = 0;

        // mask (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("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");
        mask.setTransform(307.5, 310.8);

        // reflect
        this.reflect_wrapper = new lib.reflect_wrapper_1532102();
        this.reflect_wrapper.setTransform(322.8, 509);

        this.reflect_wrapper.mask = mask;

        this.addChild(this.reflect_wrapper, this.reflect_mask, this.instance_8, this.instance_7, this.instance_6, this.instance_5, this.instance_4, this.instance_3, this.instance_2, this.instance_1, this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(293.9, 144.9, 369.3, 728.2);

})(lib = lib || {}, images = images || {}, createjs = createjs || {});
var lib, images, createjs;