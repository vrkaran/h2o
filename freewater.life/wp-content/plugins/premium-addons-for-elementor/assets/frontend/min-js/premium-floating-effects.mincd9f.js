!function(e){if(void 0===window.paCheckSafari){window.paCheckSafari=function(){if(/iP(hone|ad|od)/i.test(navigator.userAgent)&&!window.MSStream){var e=/(Chrome|CriOS|OPiOS|FxiOS)/.test(navigator.userAgent);if(!e){var t=""===navigator.vendor;e=e||t}var r=/WebKit/i.test(navigator.userAgent)&&!e}else r=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);if(r)return!0;return!1}()}e(window).on("elementor/frontend/init",function(){var t=elementorModules.frontend.handlers.Base.extend({settings:{},onInit:function(){if(elementorModules.frontend.handlers.Base.prototype.onInit.apply(this,arguments),this.$element.hasClass("premium-floating-effects-yes")){if(this.$element.hasClass("premium-disable-fe-yes")&&window.paCheckSafari)return;this.run()}},run:function(){var e=this;if(this.getEffectSEttings(),-1===Object.values(this.settings.effectSettings).findIndex(function(e){return void 0!==e}))return!1;elementorFrontend.waypoint(e.$element,function(){e.applyEffects()})},getEffectSEttings:function(){var e=this.getElementSettings(),t="steps"===e.premium_fe_easing?"steps("+e.premium_fe_ease_step+")":e.premium_fe_easing,r="yes"===e.premium_fe_translate_switcher,a="yes"===e.premium_fe_rotate_switcher,i="yes"===e.premium_fe_scale_switcher,s="yes"===e.premium_fe_skew_switcher,_="yes"===e.premium_fe_opacity_switcher,o="yes"===e.premium_fe_bg_color_switcher,m="yes"===e.premium_fe_blur_switcher,n="yes"===e.premium_fe_contrast_switcher,u="yes"===e.premium_fe_gScale_switcher,f="yes"===e.premium_fe_hue_switcher,l="yes"===e.premium_fe_brightness_switcher,d="yes"===e.premium_fe_saturate_switcher,p={direction:e.premium_fe_direction,loop:"default"===e.premium_fe_loop||e.premium_fe_loop_number,easing:t,target:""!==e.premium_fe_target?e.premium_fe_target:""};this.settings.general=p,this.settings.effectSettings={},r&&(this.settings.effectSettings.translate={x_param_from:e.premium_fe_Xtranslate.sizes.from,x_param_to:e.premium_fe_Xtranslate.sizes.to,y_param_from:e.premium_fe_Ytranslate.sizes.from,y_param_to:e.premium_fe_Ytranslate.sizes.to,duration:e.premium_fe_trans_duration.size,delay:e.premium_fe_trans_delay.size}),a&&(this.settings.effectSettings.rotate={x_param_from:e.premium_fe_Xrotate.sizes.from,x_param_to:e.premium_fe_Xrotate.sizes.to,y_param_from:e.premium_fe_Yrotate.sizes.from,y_param_to:e.premium_fe_Yrotate.sizes.to,z_param_from:e.premium_fe_Zrotate.sizes.from,z_param_to:e.premium_fe_Zrotate.sizes.to,duration:e.premium_fe_rotate_duration.size,delay:e.premium_fe_rotate_delay.size}),i&&(this.settings.effectSettings.scale={x_param_from:e.premium_fe_Xscale.sizes.from,x_param_to:e.premium_fe_Xscale.sizes.to,y_param_from:e.premium_fe_Yscale.sizes.from,y_param_to:e.premium_fe_Yscale.sizes.to,duration:e.premium_fe_scale_duration.size,delay:e.premium_fe_scale_delay.size}),s&&(this.settings.effectSettings.skew={x_param_from:e.premium_fe_Xskew.sizes.from,x_param_to:e.premium_fe_Xskew.sizes.to,y_param_from:e.premium_fe_Yskew.sizes.from,y_param_to:e.premium_fe_Yskew.sizes.to,duration:e.premium_fe_skew_duration.size,delay:e.premium_fe_skew_delay.size}),PremiumFESettings.papro_installed&&(_&&(this.settings.effectSettings.opacity={from:e.premium_fe_opacity.sizes.from/100,to:e.premium_fe_opacity.sizes.to/100,duration:e.premium_fe_opacity_duration.size,delay:e.premium_fe_opacity_delay.size}),o&&(this.settings.effectSettings.bgColor={from:e.premium_fe_bg_color_from,to:e.premium_fe_bg_color_to,duration:e.premium_fe_bg_color_duration.size,delay:e.premium_fe_bg_color_delay.size}),m&&(this.settings.effectSettings.blur={from:"blur("+e.premium_fe_blur_val.sizes.from+"px)",to:"blur("+e.premium_fe_blur_val.sizes.to+"px)",duration:e.premium_fe_blur_duration.size,delay:e.premium_fe_blur_delay.size}),n&&(this.settings.effectSettings.contrast={from:"contrast("+e.premium_fe_contrast_val.sizes.from+"%)",to:"contrast("+e.premium_fe_contrast_val.sizes.to+"%)",duration:e.premium_fe_contrast_duration.size,delay:e.premium_fe_contrast_delay.size}),u&&(this.settings.effectSettings.gScale={from:"grayscale("+e.premium_fe_gScale_val.sizes.from+"%)",to:"grayscale("+e.premium_fe_gScale_val.sizes.to+"%)",duration:e.premium_fe_gScale_duration.size,delay:e.premium_fe_gScale_delay.size}),f&&(this.settings.effectSettings.hue={from:"hue-rotate("+e.premium_fe_hue_val.sizes.from+"deg)",to:"hue-rotate("+e.premium_fe_hue_val.sizes.to+"deg)",duration:e.premium_fe_hue_duration.size,delay:e.premium_fe_hue_delay.size}),l&&(this.settings.effectSettings.bright={from:"brightness("+e.premium_fe_brightness_val.sizes.from+"%)",to:"brightness("+e.premium_fe_brightness_val.sizes.to+"%)",duration:e.premium_fe_brightness_duration.size,delay:e.premium_fe_brightness_delay.size}),d&&(this.settings.effectSettings.sat={from:"saturate("+e.premium_fe_saturate_val.sizes.from+"%)",to:"saturate("+e.premium_fe_saturate_val.sizes.to+"%)",duration:e.premium_fe_saturate_duration.size,delay:e.premium_fe_saturate_delay.size}))},applyEffects:function(){var e=this.settings,t=e.effectSettings,r=this.$element.find(".elementor-widget-container")[0],a=[];if(e.general.target){var i=e.general.target;r=0<this.$element.find(i).length?".elementor-element-"+this.$element.data("id")+" "+i:i}var s={targets:r,loop:e.general.loop,direction:e.general.direction,easing:e.general.easing};if(t.translate){var _=t.translate,o={value:[_.x_param_from||0,_.x_param_to||0],duration:_.duration,delay:_.delay||0},m={value:[_.y_param_from||0,_.y_param_to||0],duration:_.duration,delay:_.delay||0};s.translateX=o,s.translateY=m}if(t.rotate){var n=t.rotate,u={duration:n.duration,delay:n.delay||0,value:[n.x_param_from||0,n.x_param_to||0]},f={duration:n.duration,delay:n.delay||0,value:[n.y_param_from||0,n.y_param_to||0]},l={duration:n.duration,delay:n.delay||0,value:[n.z_param_from||0,n.z_param_to||0]};s.rotateX=u,s.rotateY=f,s.rotateZ=l}if(t.scale){var d=t.scale,p={value:[d.x_param_from||0,d.x_param_to||0],duration:d.duration,delay:d.delay||0},y={value:[d.y_param_from||0,d.y_param_to||0],duration:d.duration,delay:d.delay||0};s.scaleX=p,s.scaleY=y}if(t.skew){var g=t.skew,c={value:[g.x_param_from||0,g.x_param_to||0],duration:g.duration,delay:g.delay||0},h={value:[g.y_param_from||0,g.y_param_to||0],duration:g.duration,delay:g.delay||0};s.skewX=c,s.skewY=h}if(t.opacity){var z=t.opacity;s.opacity={value:[z.from||0,z.to||0],duration:z.duration,delay:z.delay||0}}if(t.bgColor){var v=t.bgColor;s.backgroundColor={value:[v.from||0,v.to||0],duration:v.duration,delay:v.delay||0}}if(t.blur){var w=t.blur,S={value:[w.from||0,w.to||0],duration:w.duration,delay:w.delay||0};a.push(S)}if(t.hue){var b=t.hue,x={value:[b.from||0,b.to||0],duration:b.duration,delay:b.delay||0};a.push(x)}if(t.gScale){var k=t.gScale,X={value:[k.from||0,k.to||0],duration:k.duration,delay:k.delay||0};a.push(X)}if(t.contrast){var Y=t.contrast,C={value:[Y.from||0,Y.to||0],duration:Y.duration,delay:Y.delay||0};a.push(C)}if(t.bright){var E=t.bright,$={value:[E.from||0,E.to||0],duration:E.duration,delay:E.delay||0};a.push($)}if(t.sat){var A=t.sat,F={value:[A.from||0,A.to||0],duration:A.duration,delay:A.delay||0};a.push(F)}0!==a.length&&(s.filter=a),anime(s)}});elementorFrontend.hooks.addAction("frontend/element_ready/widget",function(e){elementorFrontend.elementsHandler.addHandler(t,{$element:e})})})}(jQuery);