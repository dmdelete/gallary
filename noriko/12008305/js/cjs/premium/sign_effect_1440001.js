(function(lib, img, cjs) {

    var p; // shortcut to reference prototypes

    // stage content:
    (lib.sign_effect_1440001 = function() {
        this.initialize();

        // sign
        this.sign_effect = new lib.sign_effect_1440001_1();

        // image_replace
        this.instance = new lib.replace_image_1440001();
        this.instance.setTransform(-0.1, -0.1);

        this.addChild(this.instance, this.sign_effect);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-0.1, -0.1, 684, 800);


    // symbols:
    (lib.replace_image_1440001 = function() {
        this.initialize(img.replace_image_1440001);
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


    (lib.reflect_mask_1440001 = function() {
        this.initialize();

        // 繝ｬ繧､繝､繝ｼ 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,204,255,0.502)").s().p("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");
        this.shape.setTransform(0, 0, 1.01, 1.01);

        this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-151.6, -117.2, 303.4, 234.7);


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
        this.lighter_tgt.setTransform(0, -269.4, 1.084, 1.084, 0, 0, -19.9);
        this.lighter_tgt.compositeOperation = "lighter";

        this.addChild(this.lighter_tgt);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, -380.6, 305.5, 761.3);


    (lib.reflect_container_cjs_1440001 = function(mode, startPosition, loop) {
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
        this.instance.setTransform(-0.3, 499.5, 1, 1, 0, 0, 0, -0.4, 0.1);
        this.instance.compositeOperation = "lighter";
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({
            _off: false
        }, 0).to({
            regY: 0,
            y: 0
        }, 9, cjs.Ease.get(-0.99)).to({
            regY: 0.1,
            y: -499.1
        }, 9, cjs.Ease.get(1)).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, -380.6, 305.5, 761.3);


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


    (lib.reflect_wrapper_1440001 = function() {
        this.initialize();

        // cjs
        this.reflect = new lib.reflect_container_cjs_1440001();
        this.reflect.compositeOperation = "lighter";

        this.addChild(this.reflect);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, -380.6, 305.5, 761.3);


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


    (lib.sign_effect_1440001_1 = function() {
        this.initialize();

        // glitter
        this.instance = new lib.glitter_wrapper();
        this.instance.setTransform(549.4, 494);

        this.instance_1 = new lib.glitter_wrapper();
        this.instance_1.setTransform(364.8, 563);

        this.instance_2 = new lib.glitter_wrapper();
        this.instance_2.setTransform(627.8, 530);

        this.instance_3 = new lib.glitter_wrapper();
        this.instance_3.setTransform(473.4, 503.3, 0.725, 0.725);

        this.instance_4 = new lib.glitter_wrapper();
        this.instance_4.setTransform(504.5, 571.6, 0.692, 0.692);

        this.instance_5 = new lib.glitter_wrapper();
        this.instance_5.setTransform(535, 609.9, 0.66, 0.66);

        this.instance_6 = new lib.glitter_wrapper();
        this.instance_6.setTransform(435.9, 576.6);

        this.instance_7 = new lib.glitter_wrapper();
        this.instance_7.setTransform(388.5, 403.7);

        // mask
        this.reflect_mask = new lib.reflect_mask_1440001();
        this.reflect_mask.setTransform(486.7, 508.1);
        this.reflect_mask.alpha = 0;

        // mask (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("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");
        mask.setTransform(319.2, 312.7);

        // reflect
        this.reflect_wrapper = new lib.reflect_wrapper_1440001();
        this.reflect_wrapper.setTransform(334, 508.1);

        this.reflect_wrapper.mask = mask;

        this.addChild(this.reflect_wrapper, this.reflect_mask, this.instance_7, this.instance_6, this.instance_5, this.instance_4, this.instance_3, this.instance_2, this.instance_1, this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(308.7, 127.5, 375.2, 761.3);

})(lib = lib || {}, images = images || {}, createjs = createjs || {});
var lib, images, createjs;