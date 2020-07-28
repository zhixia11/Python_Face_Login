/*
Cache: infield-label, uniform, qtip, jquery-smooth-scroll, jquery-form, iphorm-plugin, dt-type
*/
/* dt-type: (https://5dc5102abbf1a.t74.qifeiye.com/FeiEditor/bitSite/js/typed.min.js) */
!function(t,s,e){"use strict";var i=function(t,s){var i=this;this.el=t,this.options={},Object.keys(r).forEach(function(t){i.options[t]=r[t]}),Object.keys(s).forEach(function(t){i.options[t]=s[t]}),this.isInput="input"===this.el.tagName.toLowerCase(),this.attr=this.options.attr,this.showCursor=!this.isInput&&this.options.showCursor,this.elContent=this.attr?this.el.getAttribute(this.attr):this.el.textContent,this.contentType=this.options.contentType,this.typeSpeed=this.options.typeSpeed,this.startDelay=this.options.startDelay,this.backSpeed=this.options.backSpeed,this.backDelay=this.options.backDelay,this.fadeOut=this.options.fadeOut,this.fadeOutClass=this.options.fadeOutClass,this.fadeOutDelay=this.options.fadeOutDelay,e&&this.options.stringsElement instanceof e?this.stringsElement=this.options.stringsElement[0]:this.stringsElement=this.options.stringsElement,this.strings=this.options.strings,this.strPos=0,this.arrayPos=0,this.stopNum=0,this.loop=this.options.loop,this.loopCount=this.options.loopCount,this.curLoop=0,this.stop=!1,this.cursorChar=this.options.cursorChar,this.shuffle=this.options.shuffle,this.sequence=[],this.build()};i.prototype={constructor:i,init:function(){var t=this;t.timeout=setTimeout(function(){for(var s=0;s<t.strings.length;++s)t.sequence[s]=s;t.shuffle&&(t.sequence=t.shuffleArray(t.sequence)),t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos)},t.startDelay)},build:function(){var t=this;if(this.showCursor===!0&&(this.cursor=s.createElement("span"),this.cursor.className="typed-cursor",this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)),this.stringsElement){this.strings=[],this.stringsElement.style.display="none";var e=Array.prototype.slice.apply(this.stringsElement.children);e.forEach(function(s){t.strings.push(s.innerHTML)})}this.init()},typewrite:function(t,s){if(this.stop!==!0){this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor.classList.remove(this.fadeOutClass));var e=Math.round(70*Math.random())+this.typeSpeed,i=this;i.timeout=setTimeout(function(){var e=0,r=t.substr(s);if("^"===r.charAt(0)){var o=1;/^\^\d+/.test(r)&&(r=/\d+/.exec(r)[0],o+=r.length,e=parseInt(r)),t=t.substring(0,s)+t.substring(s+o)}if("html"===i.contentType){var n=t.substr(s).charAt(0);if("<"===n||"&"===n){var a="",h="";for(h="<"===n?">":";";t.substr(s+1).charAt(0)!==h&&(a+=t.substr(s).charAt(0),s++,!(s+1>t.length)););s++,a+=h}}i.timeout=setTimeout(function(){if(s===t.length){if(i.options.onStringTyped(i.arrayPos),i.arrayPos===i.strings.length-1&&(i.options.callback(),i.curLoop++,i.loop===!1||i.curLoop===i.loopCount))return;i.timeout=setTimeout(function(){i.backspace(t,s)},i.backDelay)}else{0===s&&i.options.preStringTyped(i.arrayPos);var e=t.substr(0,s+1);i.attr?i.el.setAttribute(i.attr,e):i.isInput?i.el.value=e:"html"===i.contentType?i.el.innerHTML=e:i.el.textContent=e,s++,i.typewrite(t,s)}},e)},e)}},backspace:function(t,s){var e=this;if(this.stop!==!0){if(this.fadeOut)return void this.initFadeOut();var i=Math.round(70*Math.random())+this.backSpeed;e.timeout=setTimeout(function(){if("html"===e.contentType&&">"===t.substr(s).charAt(0)){for(var i="";"<"!==t.substr(s-1).charAt(0)&&(i-=t.substr(s).charAt(0),s--,!(s<0)););s--,i+="<"}var r=t.substr(0,s);e.replaceText(r),s>e.stopNum?(s--,e.backspace(t,s)):s<=e.stopNum&&(e.arrayPos++,e.arrayPos===e.strings.length?(e.arrayPos=0,e.shuffle&&(e.sequence=e.shuffleArray(e.sequence)),e.init()):e.typewrite(e.strings[e.sequence[e.arrayPos]],s))},i)}},initFadeOut:function(){return self=this,this.el.className+=" "+this.fadeOutClass,this.cursor.className+=" "+this.fadeOutClass,setTimeout(function(){self.arrayPos++,self.replaceText(""),self.strings.length>self.arrayPos?self.typewrite(self.strings[self.sequence[self.arrayPos]],0):(self.typewrite(self.strings[0],0),self.arrayPos=0)},self.fadeOutDelay)},replaceText:function(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:"html"===this.contentType?this.el.innerHTML=t:this.el.textContent=t},shuffleArray:function(t){var s,e,i=t.length;if(i)for(;--i;)e=Math.floor(Math.random()*(i+1)),s=t[e],t[e]=t[i],t[i]=s;return t},reset:function(){var t=this;clearInterval(t.timeout);this.el.getAttribute("id");this.el.textContent="","undefined"!=typeof this.cursor&&"undefined"!=typeof this.cursor.parentNode&&this.cursor.parentNode.removeChild(this.cursor),this.strPos=0,this.arrayPos=0,this.curLoop=0,this.options.resetCallback()}},i["new"]=function(t,e){var r=Array.prototype.slice.apply(s.querySelectorAll(t));r.forEach(function(t){var s=t._typed,r="object"==typeof e&&e;s&&s.reset(),t._typed=s=new i(t,r),"string"==typeof e&&s[e]()})},e&&(e.fn.typed=function(t){return this.each(function(){var s=e(this),r=s.data("typed"),o="object"==typeof t&&t;r&&r.reset(),s.data("typed",r=new i(this,o)),"string"==typeof t&&r[t]()})}),t.Typed=i;var r={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,shuffle:!1,backDelay:500,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:!1,showCursor:!0,cursorChar:"|",attr:null,contentType:"html",callback:function(){},preStringTyped:function(){},onStringTyped:function(){},resetCallback:function(){}}}(window,document,window.jQuery);

function _typed_event(){
    jQuery(".qfy-simple_header:not(.loaded)").each(function(){
        var $this = jQuery(this);
        $this.addClass("loaded");
        var load = $this.attr("data-load");
        var id =  $this.attr("id");
        var loop = $this.attr("data-loop")=="true"?true:false;
        if($this.attr("data-typeSpeed")){
            var typeSpeed = parseInt($this.attr("data-typeSpeed"));
        }else{
            var typeSpeed = 30;
        }

        if(load=="1"){
            jQuery(this).waypoint({
                handler: function(direction) {
                    Typed.new("#"+id+" .qfy-typed", {
                        stringsElement: $this.find(".inner"),
                        typeSpeed: typeSpeed,
                        backDelay: 500,
                        loop: loop,
                        contentType: 'html', // or text
                        loopCount: null,
                    });
                },
                triggerOnce: true,
                offset: "bottom-in-view",
            })

        }else{
            Typed.new("#"+id+" .qfy-typed", {
                stringsElement: $this.find(".inner"),
                typeSpeed: typeSpeed,
                backDelay: 500,
                loop: loop,
                contentType: 'html', // or text
                loopCount: null,
            });
        }
    })
};

/* iphorm-plugin: (https://5dc5102abbf1a.t74.qifeiye.com/qfy-content/plugins/qfy_form/js/jquery.iphorm.js) */
/*
 * iPhorm BitWebcms jQuery plugin
 */
function phone_num_timer(label,label_text){
		var num =label.text();
		if(num*1<2){
			label.html(label_text);
		}
		setTimeout(function(){
			if(label.text()!=label_text){
				num = num*1 -1;
				label.text(num);
				phone_num_timer(label,label_text);
			}
		},1000);
}
function get_iphorm_phone(obj,e){
	var $form = jQuery(obj).closest("form");
	var $element =  jQuery(obj).closest(".iphorm-element-wrap");
	var $pre_element =  jQuery(obj).closest(".iphorm-element-wrap").prev();
	var phone = $pre_element.find("input").val();
	var phoneid = $pre_element.find("input").attr("name");
	$element.find("[name='iphorm_sms_phone_id']").val(phoneid);
	phone = jQuery.trim(phone);
	//if(!phone) return;

	var label = jQuery(obj).closest(".iphorm-input-wrap").find(".iphorm_phone_label");
	var info =  jQuery(obj).closest(".iphorm-input-wrap").find(".iphorm_phone_info").html();
	label.width(label.width());
	var label_text = label.text();
	if(label_text>1) return;
	label.html("30");
	phone_num_timer(label,label_text);
	$('.iphorm-errors-wrap', $element).html("");
	$('.iphorm-errors-wrap', $pre_element).html("");
	jQuery.post("/admin/admin-ajax.php",{"action":"tosendsms","phone":phone},function(response){
		if(response!="success"){
			label.html(label_text);
			if(phone){
				$error = '<div class="iphorm-errors-list iphorm-clearfix"><div class="iphorm-error"><i class="fa fa-exclamation-triangle" aria-hidden="true" style="padding-right:5px;"></i>'+response+'</div></div>';	
				$('.iphorm-errors-wrap', $element).html($error).fadeIn(1000).show();
			}else{
				$error = '<div class="iphorm-errors-list iphorm-clearfix"><div class="iphorm-error"><i class="fa fa-exclamation-triangle" aria-hidden="true" style="padding-right:5px;"></i>'+response+'</div></div>';	
				$('.iphorm-errors-wrap', $pre_element).html($error).fadeIn(1000).show();
			}
		}else{
			top.qfy_popinfo_fun('<div style="text-align:center;" ><div style="padding:20px;">'+info+'</div></div>',3);
		}
	});
	
}
;(function($) {
	$.iPhorm = function ($form, options) {
		var _this = this,
		settings = {},
		extraData = {
			iphorm_ajax: 1
		},
		submitted = false,
		uploaders = [],
		uploadQueue = [],
		swfUploadError = false,
		supportsSwfUpload = typeof swfobject === 'object'  && swfobject.hasFlashPlayerVersion('9.0.28'),
		$successMessage = $('.iphorm-success-message', $form),
		$errorMessage = $('.iphorm-error-message', $form),
		$loadingSpinner = $('.iphorm-loading-wrap', $form);
		
		$pop = $('.popaction', $form);
		// Expose the form to the outside world
		_this.$form = $form;

		// Load in any options
		if (options) {
			$.extend(settings, options);
		}

		/**
		 * Add an SWFUpload element to the form
		 *
		 * @param object element JavaScript object containing the element information
		 */
		_this.addUploader = function (element) {
			if (supportsSwfUpload) {
				// Hide the normal file element
				$('.' + element.name + '-input-wrap', $form).hide();
				$('.' + element.name + '-add-another-upload', $form).hide();

				// Show the SWFUpload element
				$('#' + element.uniqueId + '-swfupload').show();

				var $queue = $('#' + element.uniqueId + '-file-queue'),
                $queueErrors = $('#' + element.uniqueId + '-file-queue-errors'),
                browseButton = getHiddenDimensions($('#' + element.uniqueId + '-browse')), swfu;

				// Define SWFUpload handles
				function fileDialogStart () {
					$queueErrors.hide().empty();
				}

				function fileQueued (file) {
					var $close = $('<div class="iphorm-upload-queue-remove">X</div>').click(function () {
                        swfu.cancelUpload(file.id);
                        for (var i = 0; i < uploadQueue.length; i++) {
                            if (uploadQueue[i].file.id == file.id) {
                                uploadQueue.splice(i, 1);
                            }
                        }
                        $(this).parent().remove();

                        if ($queue.children().length == 0) {
                        	$queue.hide();
                        }
                    });

                    uploadQueue.push({
                        file: file,
                        uploaderId: swfu.movieName
                    });

                    $queue.append($('<div id="' + file.id + '" class="iphorm-upload-queue-file"><div class="iphorm-upload-queue-filename">' + file.name + ' (' + formatFileSize(file.size) + ')</div></div>').append($close)).show();
				}

				function fileQueueError (file, errorCode, message) {
					$queueErrorsList = $('<div class="iphorm-queue-errors-list iphorm-clearfix"></div>');

					switch (errorCode) {
	                    case SWFUpload.QUEUE_ERROR.QUEUE_LIMIT_EXCEEDED:
	                    	$queueErrorsList.append('<div class="iphorm-queue-error">' + iphormL10n.swfupload_too_many + '</div>');
	                        break;
	                    case SWFUpload.QUEUE_ERROR.FILE_EXCEEDS_SIZE_LIMIT:
	                    	$queueErrorsList.append('<div class="iphorm-queue-error">' + file.name + ' - ' + iphormL10n.swfupload_file_too_big + '</div>');
	                        break;
	                    case SWFUpload.QUEUE_ERROR.ZERO_BYTE_FILE:
	                    	$queueErrorsList.append('<div class="iphorm-queue-error">' + file.name + ' - ' + iphormL10n.swfupload_file_empty + '</div>');
	                        break;
	                    case SWFUpload.QUEUE_ERROR.INVALID_FILETYPE:
	                    	$queueErrorsList.append('<div class="iphorm-queue-error">' + file.name + ' - ' + iphormL10n.swfupload_file_type_not_allowed + '</div>');
	                        break;
	                    default:
	                    	$queueErrorsList.append('<div class="iphorm-queue-error">' + iphormL10n.swfupload_unknown_queue_error + '</div>');
	                        break;
	                }

					$queueErrors.append($queueErrorsList).show();
				}

				function uploadStart(file) {
					// Show the upload progress bar
					$('.iphom-upload-progress-wrap').show();
				}

				function uploadProgress(file, bytesLoaded, bytesTotal) {
					var progress = Math.min(100, ((bytesLoaded / file.size) * 100)); // Limit to 100% maximum
					$('.iphorm-upload-progress-bar').css('width', progress + '%');
					$('.iphorm-upload-filename').text(file.name);
				}

				function uploadError(file, errorCode, message) {
					switch (errorCode) {
						case SWFUpload.UPLOAD_ERROR.HTTP_ERROR:
							swfUploadError = true;
							$('.iphorm-upload-error', $form).text(iphormL10n.swfupload_upload_error).show();
							break;
						case SWFUpload.UPLOAD_ERROR.UPLOAD_FAILED:
							swfUploadError = true;
							$('.iphorm-upload-error', $form).text(iphormL10n.swfupload_upload_failed).show();
							break;
						case SWFUpload.UPLOAD_ERROR.IO_ERROR:
							swfUploadError = true;
							$('.iphorm-upload-error', $form).text(iphormL10n.swfupload_server_io).show();
							break;
						case SWFUpload.UPLOAD_ERROR.SECURITY_ERROR:
							swfUploadError = true;
							$('.iphorm-upload-error', $form).text(iphormL10n.swfupload_security_error).show();
							break;
						case SWFUpload.UPLOAD_ERROR.UPLOAD_LIMIT_EXCEEDED:
							swfUploadError = true;
							$('.iphorm-upload-error', $form).text(iphormL10n.swfupload_limit_exceeded).show();
							break;
						case SWFUpload.UPLOAD_ERROR.FILE_VALIDATION_FAILED:
							swfUploadError = true;
							$('.iphorm-upload-error', $form).text(iphormL10n.swfupload_validation_failed).show();
							break;
						case SWFUpload.UPLOAD_ERROR.FILE_CANCELLED:
							break;
						case SWFUpload.UPLOAD_ERROR.UPLOAD_STOPPED:
							swfUploadError = true;
							$('.iphorm-upload-error', $form).text(iphormL10n.swfupload_upload_stopped).show();
							break;
						default:
							swfUploadError = true;
							$('.iphorm-upload-error', $form).text(iphormL10n.swfupload_unknown_upload_error).show();
							break;
					}
				}

				function uploadSuccess(file, response) {
					if (response) {
						var response = $.parseJSON(response);

						if (typeof response == 'object' && response.type == 'error') {
						    swfUploadError = true;
						    $('.iphorm-upload-error', $form).text(file.name + ' - ' + response.data[0]).show();
							$('#' + file.id, $form).remove();
						}
					}
				}

				function uploadComplete(file) {
					if (!swfUploadError) {
						// Show the file as uploaded successfully
						$('#' + file.id, $form).find('.iphorm-upload-queue-remove').removeClass('iphorm-upload-queue-remove').addClass('iphorm-upload-queue-success').unbind('click');

						if (uploadQueue.length > 0) {
							var next = uploadQueue.shift();
							getUploader(next.uploaderId).startUpload(next.file.id);
						} else {
							// Nothing left in the queue so this time we submit the form
							$('.iphom-upload-progress-wrap').hide();
							_this.submit();
						}
					} else {
						// Hide the loading spinner
						$loadingSpinner.hide();
						resetSWFUpload();
						submitted = false;
					}
				}

				swfu = new SWFUpload({
					button_height: browseButton.outerHeight,
                    button_width: browseButton.outerWidth,
                    button_window_mode: SWFUpload.WINDOW_MODE.TRANSPARENT,
                    button_placeholder_id: element.uniqueId + '-object',
                    button_cursor: SWFUpload.CURSOR.HAND,

                    flash_url: iphormL10n.swfupload_flash_url,
                    upload_url: iphormL10n.swfupload_upload_url,
                    file_post_name: element.name,

                    file_dialog_start_handler: fileDialogStart,
                    file_queued_handler: fileQueued,
    				file_queue_error_handler: fileQueueError,
    				upload_start_handler: uploadStart,
    				upload_progress_handler: uploadProgress,
    				upload_error_handler: uploadError,
    				upload_success_handler: uploadSuccess,
    				upload_complete_handler: uploadComplete,

                    post_params: {
                        iphorm_id: settings.id,
                        iphorm_form_uniq_id: settings.uniqueId,
                        iphorm_element_id: element.id,
                        iphorm_element_name: element.name,
                        PHPSESSID: settings.PHPSESSID
                    },

                    prevent_swf_caching: true,

                    file_types : element.fileTypes,
                    file_types_description: element.fileTypesDescription,
                    file_size_limit : element.fileSizeLimit,
                    file_upload_limit : element.fileUploadLimit,

                    debug: false
				});

				uploaders.push(swfu);
			}
		}; // End addUploader

		/**
		 * Bind to the submit event of the form
		 */
		if (settings.useAjax) {
			$form.bind('submit', function(event) {
				// Can't submit during preview
				if (settings.preview === true) {
					jAlert(iphormL10n.preview_no_submit);
					return false;
				}
				// Prevent double submit
				if (submitted) {
					return false;
				} else {
					submitted = true;
				}
				if(typeof custom_iphorm_before_fun =="function"){
					var $rlt = custom_iphorm_before_fun($form);
					if(!$rlt){
						submitted = false;
						return false;
					}
				}
				// Show loading image
				$loadingSpinner.fadeIn('slow');

				// Prevent the browser submitting the form normally
				event.preventDefault();

				// Remove any previous upload error
				$('.iphorm-upload-error', $form).hide().text('');
				var isrequired = false;
				$('.iphorm-errors-wrap', $form).hide().text('');
				var iphorm_str = ".iphorm-required:visible";
				if($form.attr("data-check") == "1"){
					iphorm_str = ".iphorm-required";
				}

				$(iphorm_str,$form).each(function(){
					  var p = $(this).closest(".iphorm-element-wrap");
					 if(p.find(".iphorm-element-radio").length>0 && p.find(".iphorm-element-radio:checked").length==0){
						    $error = '<div class="iphorm-errors-list iphorm-clearfix"><div class="iphorm-error"><i class="fa fa-exclamation-triangle" aria-hidden="true" style="padding-right:5px;"></i>'+iphormL10n.iphorm_required+'</div></div>';	
							$('.iphorm-errors-wrap', p).html($error).fadeIn(1000).show();
							isrequired = true;
					 }else if(p.find(".iphorm-element-checkbox").length>0 && p.find(".iphorm-element-checkbox:checked").length==0){
						    $error = '<div class="iphorm-errors-list iphorm-clearfix"><div class="iphorm-error"><i class="fa fa-exclamation-triangle" aria-hidden="true" style="padding-right:5px;"></i>'+iphormL10n.iphorm_required+'</div></div>';	
							$('.iphorm-errors-wrap', p).html($error).fadeIn(1000).show();
							isrequired = true;
					  }else if(p.find("input,select,textarea").val()==""){
						     $error = '<div class="iphorm-errors-list iphorm-clearfix"><div class="iphorm-error"><i class="fa fa-exclamation-triangle" aria-hidden="true" style="padding-right:5px;"></i>'+iphormL10n.iphorm_required+'</div></div>';	
							$('.iphorm-errors-wrap', p).html($error).fadeIn(1000).show();
							isrequired = true;
					  }else  if(p.find("[data-toggle='distpicker']").length>0 &&  p.find("[data-toggle='distpicker'] select:last").val()==""){
						     $error = '<div class="iphorm-errors-list iphorm-clearfix"><div class="iphorm-error"><i class="fa fa-exclamation-triangle" aria-hidden="true" style="padding-right:5px;"></i>'+iphormL10n.iphorm_required+'</div></div>';	
								$('.iphorm-errors-wrap', p).html($error).fadeIn(1000).show();
								isrequired = true;
					  }
					
				})
				//这里检查下required
				if(isrequired){
					$loadingSpinner.hide();
					submitted = false;
					if($form.attr("data-check") == "1"){
							if($form.find(".iphorm-errors-list:visible").length==0){
								var tostr = "";
								if(iPhorm.logic){
									$.each(iPhorm.logic,function(k,iphorm){
										$.each(iphorm.logic,function(kk,obj){
											var name="iphorm_"+k+"_"+kk;
											if( $("."+name+"-group-wrap").find(".iphorm-errors-list").length>0 ){
												if(obj.rules.length>0){
													if(obj.rules[0].operator=="eq"){
														if(tostr==""){
															tostr = "[name='iphorm_"+k+"_"+obj.rules[0].element_id+"'][value='"+obj.rules[0].value+"']";
														}

													}
												}
											}
										})
									})
								}
								if(tostr!=""){
									//two
									$(tostr).click();
									$(tostr).click();
								}
							}


					}
					return false;
				}
				
				

				// Detect if there are any SWFUpload files in the queue and upload them first
				if (uploadQueue.length > 0) {
					extraData.iphorm_swfu = 1;
					var next = uploadQueue.shift();
					getUploader(next.uploaderId).startUpload(next.file.id);
				} else {
					// There are no uploads in the queue, submit the form normally
					_this.submit();
				}
			}); // End bind
		} // if settings.useAjax

		/**
		 * Submits the form
		 */
		_this.submit = function () {
			 if(typeof jQuery.fn.ajaxSubmit=="undefined"){
				 jQuery.getScript( "/qfy-content/plugins/qfy_form/js/jquery.form.min.js",function(){
					 _this._submit();
				 });
			 }else{
				 _this._submit();
			 }
		};
		_this._submit = function () {
			// Bind the form submit to use the ajax form plugin
			$form.ajaxSubmit({
				async: false,
				type: 'post',
				dataType: 'json',
				data: extraData,
				iframe: true,
				url: '',
				success: function(response) {

					// Reload the recaptcha, we can't use it twice
					if (typeof Recaptcha === 'object') {
					    try { // Catching errors due to conflict with another plugin
					        Recaptcha.reload();
					    } catch (e) {}
					}

					// Prepares the form to be submitted again
					var prepareForm = function () {
						// Hide the loading spinner
						$loadingSpinner.hide();

						// Hide any previous errors or success messages
						$('.iphorm-errors-wrap', $form).hide();
						$('.iphorm-errors-list, .iphorm-error', $form).remove();
						$('.iphorm-queue-errors', $form).hide().empty();
						$successMessage.hide();
						$errorMessage.hide();
						$('.iphorm-element-error', $form).removeClass('iphorm-element-error');

						// Allow the form to be submitted again
						submitted = false;
					};

					// Check if the form submission was successful
					if (response === null || response === undefined) {
						// Hide the loading spinner
						$loadingSpinner.hide();

						// Allow resubmitting
						submitted = false;

						jAlert(iphormL10n.error_submitting_form);
					} else if (typeof response === 'object') {

						if (response.type == 'success') {
							prepareForm();
							// Reset the captcha
							$('.iphorm-captcha-image', $form).trigger('click');

							// Reset the form
							$form.resetForm();

							// Call blur on element to reset inline labels
							$('input[type="text"], textarea', $form).blur();

							// Hide dynamically added file inputs
							$('.iphorm-add-another-file-wrap', $form).remove();

							// Reset conditional logic
							_this.applyAllLogic();

							// Sync uniform with underlying elements
							if (typeof $.uniform === 'object' && typeof $.uniform.update === 'function') {
								$.uniform.update();
							}

							// Reset SWF upload stats
							resetSWFUpload();

							// Hide any tooltips
							$('.qtip').hide();

							if (typeof response.redirect === 'string') {
							    if (response.redirect == '') {
							        window.location.reload();
							    } else {
							        window.location = response.redirect;
							    }
							} else {
								if(typeof custom_iphorm_success_fun =="function"){
									custom_iphorm_success_fun($form,response);
									return;
								}
								// Then fade in the success message
								if($pop.length >0 && $pop.val()==""){
									var success_htm = '<div style="text-align:center;" ><img class="qfy_pop_checkedimg" src="/FeiEditor/images/bitcms/check.png" style="margin-top:20px;margin-bottom:20px;" /><div style="padding-bottom:20px;">'+response.data+'</div></div>';
									top.qfy_popinfo_fun(success_htm,settings.successMessageTimeout*1/3);
								}else{
									$successMessage.html('<i class="fa fa-check-square" aria-hidden="true" style="padding-right:8px;"></i>'+response.data).fadeIn('slow').show(0, function() {
										// Set timeout
										if (settings.successMessageTimeout > 0) {
											setTimeout(function () {
												$successMessage.fadeOut(400);
											}, (settings.successMessageTimeout * 1000));
										}

										// Custom success callback
										if (typeof settings.success === 'function') {
											settings.success();
										}
									});
									if($successMessage.closest(".notice_content").length>0){
										$successMessage.closest(".notice_content").scrollTop(0);
									}
									// Scroll to the success message if it's not in view
									if (!isScrolledIntoView($successMessage) && $.isFunction($.smoothScroll)) {
										$.smoothScroll({
											scrollTarget: $successMessage,
											offset: -50,
											speed: 500
										});
									}
								}
							}
						} else if (response.type == 'error' || response.type == 'adminerror') {
							prepareForm();
							if(response.data && response.type == 'error'){
								var $errors = $();

								// Go through each element containing errors
								$.each(response.data, function(index, info) {
									// If there are errors for this element
									if (info.errors != undefined && info.errors.length > 0) {
										// Save a reference to this element
										var $elementWrap = $("." + index + "-element-wrap", $form),
										$errorsWrap = $elementWrap.find('.iphorm-errors-wrap');

										// If the returned element exists
										if ($elementWrap.length && $errorsWrap.length) {
											// Create a blank error list
											var $errorList = $('<div class="iphorm-errors-list iphorm-clearfix"></div>');

											// Go through each error for this field
											$.each(info.errors, function(i, e) {
												// Append the error to the list as a list item
												$errorList.append('<div class="iphorm-error"><i class="fa fa-exclamation-triangle" aria-hidden="true" style="padding-right:5px;"></i>' + e + '</div>');
												return false; // Just display one error per element
											});

											$errors = $errors.add($elementWrap);

											// Add the error list after the element's wrapper
											$errorsWrap.append($errorList);

											// Add an error class to the element wrapper
											$elementWrap.addClass('iphorm-element-error');
										}
									}
								});

								// Fade all errors in
								$('.iphorm-errors-wrap', $form).fadeIn(1000).show();

								// Scroll to the first error
								if ($errors.size()) {
									var $targetError = $errors.get(0);
									
									if($form.closest(".notice_content").length>0){
										var first_error_top = $('.iphorm-errors-wrap .iphorm-error:first:visible', $form).closest(".iphorm-element-wrap").position().top;
										if(first_error_top)
											$form.closest(".notice_content").scrollTop(first_error_top);
										
									}
									if (!isScrolledIntoView($targetError) && $.isFunction($.smoothScroll)) {
										$.smoothScroll({
											scrollTarget: $targetError,
											offset: -50,
											speed: 700
										});
									}
								}
								// Custom error callback
								if (typeof settings.error === 'function') {
									settings.error();
								}
							}else{
		
								if(top!=self){
									$errorMessage.html("发送失败，网站邮箱配置有异常，无法接受或者发送信息！").fadeIn('slow').show(0, function() {
										// Set timeout
										if (settings.successMessageTimeout > 0) {
											setTimeout(function () {
												$successMessage.fadeOut(400);
											}, (settings.successMessageTimeout * 1000));
										}

										// Custom success callback
										if (typeof settings.success === 'function') {
											settings.success();
										}
									});
								}else{
									prepareForm();
									// Reset the captcha
									$('.iphorm-captcha-image', $form).trigger('click');

									// Reset the form
									$form.resetForm();

									// Call blur on element to reset inline labels
									$('input[type="text"], textarea', $form).blur();

									// Hide dynamically added file inputs
									$('.iphorm-add-another-file-wrap', $form).remove();

									// Reset conditional logic
									_this.applyAllLogic();

									// Sync uniform with underlying elements
									if (typeof $.uniform === 'object' && typeof $.uniform.update === 'function') {
										$.uniform.update();
									}

									// Reset SWF upload stats
									resetSWFUpload();

									// Hide any tooltips
									$('.qtip').hide();

									if (typeof response.redirect === 'string') {
										if (response.redirect == '') {
											window.location.reload();
										} else {
											window.location = response.redirect;
										}
									} else {
										if($pop.length >0 && $pop.val()==""){
											var success_htm = '<div style="text-align:center;" ><img class="qfy_pop_checkedimg" src="/FeiEditor/images/bitcms/check.png" style="margin-top:20px;margin-bottom:20px;" /><div style="padding-bottom:20px;font-family:微软雅黑;">'+response.data+'</div></div>';
											top.qfy_popinfo_fun(success_htm,settings.successMessageTimeout*1/3);
										}else{
											// Then fade in the success message
											
											$successMessage.html('<i class="fa fa-check-square" aria-hidden="true" style="padding-right:8px;"></i>'+response.data).fadeIn('slow').show(0, function() {
												// Set timeout
												if (settings.successMessageTimeout > 0) {
													setTimeout(function () {
														$successMessage.fadeOut(400);
													}, (settings.successMessageTimeout * 1000));
												}

												// Custom success callback
												if (typeof settings.success === 'function') {
													settings.success();
												}
											});
											if($successMessage.closest(".notice_content").length>0){
												$successMessage.closest(".notice_content").scrollTop(0);
											}
											// Scroll to the success message if it's not in view
											if (!isScrolledIntoView($successMessage) && $.isFunction($.smoothScroll)) {

												$.smoothScroll({
													scrollTarget: $successMessage,
													offset: -50,
													speed: 500
												});
											}
										}
									}
								
								
								}
							}
							
						} // End reponse.type == error
					} // End typeof response == object
				}, // End success callback
				error: function () {
					// Hide the loading spinner
					$loadingSpinner.hide();

					// Allow resubmitting
					submitted = false;

					jAlert(iphormL10n.error_submitting_form);
				}
			}); // End ajaxSubmit()
		}; // End submit()

		/**
		 * Adds a datepicker to the element with the given unique ID
		 *
		 * @param string uniqueId
		 */
		_this.addDatepicker = function (uniqueId, options) {
            if ($.isFunction($.fn.datepicker)) {
                var $daySelect = $('#' + uniqueId + '_day'),
                $monthSelect = $('#' + uniqueId + '_month'),
                $yearSelect = $('#' + uniqueId + '_year'),
            	$datePicker = $('.iphorm-datepicker', '#' + uniqueId).datepicker($.extend({}, {
            		onSelect: function (dateText, inst) {
            		   $daySelect.val(inst.selectedDay);
            		   $monthSelect.val(inst.selectedMonth + 1);
            		   $yearSelect.val(inst.selectedYear);
            		   if (typeof $.uniform === 'object' && typeof $.uniform.update === 'function') {
                           $.uniform.update($daySelect.add($monthSelect).add($yearSelect));
                       }
                    },
                    beforeShow: function (input, inst) {
                        var currentTime = new Date(),
                        dayToSet = ($daySelect.val().length > 0) ? $daySelect.val() : currentTime.getDate(),
                        monthToSet = ($monthSelect.val().length > 0) ? $monthSelect.val()-1 : currentTime.getMonth(),
                        yearToSet = ($yearSelect.val().length > 0) ? $yearSelect.val() : currentTime.getFullYear();

                    	$datePicker.datepicker('setDate', new Date(yearToSet, monthToSet, dayToSet));
                    }}, options)
                );

                $('.iphorm-datepicker-icon', '#' + uniqueId).click(function () {
                    $datePicker.datepicker('show');
                }).show();
            }
		};

		/**
		 * Applies the the logic to all elements
		 *
		 * If loading is true, bind the logic triggers and do not animate the logic
		 *
		 * @param boolean loading
		 */
		_this.applyAllLogic = function (loading) {
			_this.applyLogic(settings.clElementIds, loading);

			if (loading) {
				_this.applyDependentLogic(settings.clDependentElementIds);
			}
		};

		/**
		 * Applies logic to show or hide the elements with the given IDs
		 *
		 * @param array elementIds The element IDs to apply the logic to
		 * @param boolean loading True if we are applying initial logic (to skip animating)
		 */
		_this.applyLogic = function (elementIds, loading) {
			for (var i = 0; i < elementIds.length; i++) {
				_this.applyElementLogic(elementIds[i], loading);
			}
		};

		/**
		 * Apply logic to the given element ID
		 *
		 * @param int elementId
		 * @param boolean loading True if we are applying initial logic (to skip animating)
		 */
		_this.applyElementLogic = function (elementId, loading) {
			if (iPhorm.logic[settings.id] && iPhorm.logic[settings.id].logic) {
				var logic = iPhorm.logic[settings.id].logic[elementId];

				if (logic && logic.rules && logic.rules.length) {
					var matchedValues = 0;
					for (var i = 0; i < logic.rules.length; i++) {
						var rule = logic.rules[i];
						if ((rule.operator == 'eq' && _this.elementHasValue(rule.element_id, rule.value)) || (rule.operator == 'neq' && !_this.elementHasValue(rule.element_id, rule.value))) {
							matchedValues++;
						}
					}

					if ((logic.match == 'any' && matchedValues > 0) || (logic.match == 'all' && matchedValues == logic.rules.length)) {
						var action = logic.action;
					} else {
						var action = logic.action == 'show' ? 'hide' : 'show';
					}

					var $element = $('.iphorm_'+settings.id+'_'+elementId+'-element-wrap, .iphorm_'+settings.id+'_'+elementId+'-group-wrap', $form);

					if (!loading && iPhorm.logic[settings.id].animate) {
						if (action == 'show') {
							$element.slideDown(400, function () {
								centerFancybox();
							});
						} else {
							$element.slideUp(400, function () {
								centerFancybox();
							});
						}
					} else {
						if (action == 'show') {
							$element.show();
						} else {
							$element.hide();
						}

						if (!loading) {
							centerFancybox();
						}
					}
				}
			}
		};

		/**
		 * Binds the conditional logic events to the elements
		 *
		 * @param array elementIds
		 */
		_this.applyDependentLogic = function (elementIds) {
			if (iPhorm.logic[settings.id] && iPhorm.logic[settings.id].dependents) {
				for (var i = 0; i < elementIds.length; i++) {
					var dependentElementIds = iPhorm.logic[settings.id].dependents[elementIds[i]],
					$input = $('.iphorm_' + settings.id + '_' + elementIds[i], $form);

					if ($input.length) {
						var bind;
						if ($input.is('select')) {
							bind = 'change.iphorm';
						} else if ($input.is('input[type=checkbox]') || $input.is('input[type=radio]')) {
							bind = 'click.iphorm';
						}

						if (bind) {
							(function (deps) {
								$input.bind(bind, function () {
									_this.applyLogic(deps);
								});
							})(dependentElementIds);
						}
					}
				}
			}
		};

		/**
		 * Does the element of the given ID has the given value?
		 *
		 * @param int elementId
		 * @param string value
		 * @return boolean
		 */
		_this.elementHasValue = function (elementId, value) {
			var $input = $('.iphorm_' + settings.id + '_' + elementId, $form);

			if ($input.length) {
				if ($input.is('select')) {
					if ($input.val() == value) {
						return true;
					}
				} else if ($input.is('input[type=checkbox]') || $input.is('input[type=radio]')) {
					var hasValue = false;
					$.each($input, function () {
						if ($(this).is(':checked') && $(this).val() == value) {
							hasValue = true;
							return false;
						}
					});
					return hasValue;
				}
			}

			return false;
		};

		/**
		 * Clears the default value and saves it and unbind the focus event,
		 * if reset is true a blur event is bound to show the default value
		 * again on blur if left empty.
		 *
		 * @param boolean reset
		 */
		_this.clearDefaultValue = function (reset) {
        	$(this).data('iphorm-default-value', $(this).val()).val('').unbind('focus');

        	if (reset) {
            	$(this).bind('blur', function () {
            		_this.resetDefaultValue.call(this);
                });
        	}
        };

        /**
         * Resets the default value of the element
         */
        _this.resetDefaultValue = function () {
			if ($(this).val() == '') {
				$(this).val($(this).data('iphorm-default-value')).unbind('blur').bind('focus', function () {
					_this.clearDefaultValue.call(this, true);
				});
			}
        };

        /**
         * Center the fancybox inside the viewport
         */
        function centerFancybox()
        {
        	if (settings.centerFancybox && typeof $.fancybox === 'function' && typeof $.fancybox.center === 'function' && $('#fancybox-wrap').length && $('#fancybox-wrap').is(':visible')) {
                $.fancybox.center(settings.centerFancyboxSpeed);
        	}
        }

		/**
		 * Format a file size given in bytes to a human readable value
		 *
		 * @param int File size in bytes
		 * @return string
		 */
		function formatFileSize(size) {
			if (size >= 1073741824) {
				size = (Math.round((size / 1073741824) * 10) / 10) + ' GB';
			} else if (size >= 1048576) {
				size = (Math.round((size / 1048576) * 10) / 10) + ' MB';
			} else if (size >= 1024) {
				size = (Math.round((size / 1024) * 10) / 10) + ' KB';
			} else {
				size = size + ' bytes';
			}

			return size;
		}

		/**
		 * Get the SWFUploader with the given ID
		 *
		 * @param string The uploader movie ID
		 * @return object|null
		 */
		function getUploader(uploaderId)
		{
			for (var i = 0; i < uploaders.length; i++) {
				if (uploaders[i].movieName == uploaderId) {
					return uploaders[i];
				}
			}

			return null;
		}

		/**
		 * Is the element in or scrolled out of the current viewport
		 *
		 * @param DOMElement element
		 * @return boolean
		 */
		function isScrolledIntoView(elem) {
	        var docViewTop = $(window).scrollTop();
	        var docViewBottom = docViewTop + $(window).height();

	        var elemTop = $(elem).offset().top;
	        var elemBottom = elemTop + $(elem).height();

	        return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom)
	          && (elemBottom <= docViewBottom) &&  (elemTop >= docViewTop) );
	    }

		/**
		 * Reset all the SWFUpload fields and stats
		 */
		function resetSWFUpload()
		{
			// Reset the SWFUpload stats and queues
			$('.iphorm-file-queue').hide().empty();
			for (var i = 0; i < uploaders.length; i++) {
				try {
					uploaders[i].setStats({
						in_progress: 0,
						files_queued : 0,
						successful_uploads : 0,
						upload_errors : 0,
						upload_cancelled : 0,
						queue_errors : 0
					});
				} catch (e) {}
			}
		}

		/**
		 * Get the dimensions of the given element even if it is hidden
		 *
		 * @param DOMElement element
		 * @param boolean includeMargin Include margin in outerWidth?
		 * @return object Object with all dimensions
		 */
		function getHiddenDimensions(element, includeMargin) {
		    var $item = $(element),
		        props = { position: 'absolute', visibility: 'hidden', display: 'block' },
		        dim = { width:0, height:0, innerWidth: 0, innerHeight: 0,outerWidth: 0,outerHeight: 0 },
		        $hiddenParents = $item.parents()[!!$.fn.addBack ? 'addBack' : 'andSelf']().not(':visible'),
		        includeMargin = (includeMargin == null)? false : includeMargin;

		    var oldProps = [];
		    $hiddenParents.each(function() {
		        var old = {};

		        for ( var name in props ) {
		            old[ name ] = this.style[ name ];
		            this.style[ name ] = props[ name ];
		        }

		        oldProps.push(old);
		    });

		    dim.width = $item.width();
		    dim.outerWidth = $item.outerWidth(includeMargin);
		    dim.innerWidth = $item.innerWidth();
		    dim.height = $item.height();
		    dim.innerHeight = $item.innerHeight();
		    dim.outerHeight = $item.outerHeight(includeMargin);

		    $hiddenParents.each(function(i) {
		        var old = oldProps[i];
		        for ( var name in props ) {
		            this.style[ name ] = old[ name ];
		        }
		    });

		    return dim;
		};
	}; // End $.iPhorm()

	$.fn.iPhorm = function(options) {
		return this.each(function () {
			iPhorm.instance = new $.iPhorm($(this), options);
		});
	}; // End $.fn.iPhorm

	// Preload the images in the base theme
//	$(window).load(function () {
//        window.iPhorm.preload([
//            'file-upload-tick.png',
//            'captcha-refresh-icon.png',
//            'default-loading.gif',
//            'error.png',
//            'success.png'
//        ], iphormL10n.plugin_url + '/images/');
//    });
})(jQuery); // End jQuery wrapper








(function (d, w) {
    var c = d.className;
    d.className = c + (c && ' ') + 'iphorm-js';
    w.iPhorm = {
        preloadedImages: [],
        preload: function (images, prefix) {
            for (var i = 0; i < images.length; i++) {
                var elem = document.createElement('img');
                elem.src = prefix ? prefix + images[i] : images[i];
                w.iPhorm.preloadedImages.push(elem);
            }
        },
        instance: null,
        logic: {}
    };
})(document.documentElement, window);;

/* jquery-form: (https://5dc5102abbf1a.t74.qifeiye.com/qfy-includes/js/jquery/jquery.form.min.js) */
/*!
 * jQuery Form Plugin
 * version: 3.37.0-2013.07.11
 * @requires jQuery v1.5 or later
 * Copyright (c) 2013 M. Alsup
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Project repository: https://github.com/malsup/form
 * Dual licensed under the MIT and GPL licenses.
 * https://github.com/malsup/form#copyright-and-license
 */
!function(a){"use strict";function b(b){var c=b.data;b.isDefaultPrevented()||(b.preventDefault(),a(this).ajaxSubmit(c))}function c(b){var c=b.target,d=a(c);if(!d.is("[type=submit],[type=image]")){var e=d.closest("[type=submit]");if(0===e.length)return;c=e[0]}var f=this;if(f.clk=c,"image"==c.type)if(void 0!==b.offsetX)f.clk_x=b.offsetX,f.clk_y=b.offsetY;else if("function"==typeof a.fn.offset){var g=d.offset();f.clk_x=b.pageX-g.left,f.clk_y=b.pageY-g.top}else f.clk_x=b.pageX-c.offsetLeft,f.clk_y=b.pageY-c.offsetTop;setTimeout(function(){f.clk=f.clk_x=f.clk_y=null},100)}function d(){if(a.fn.ajaxSubmit.debug){var b="[jquery.form] "+Array.prototype.join.call(arguments,"");window.console&&window.console.log?window.console.log(b):window.opera&&window.opera.postError&&window.opera.postError(b)}}var e={};e.fileapi=void 0!==a("<input type='file'/>").get(0).files,e.formdata=void 0!==window.FormData;var f=!!a.fn.prop;a.fn.attr2=function(){if(!f)return this.attr.apply(this,arguments);var a=this.prop.apply(this,arguments);return a&&a.jquery||"string"==typeof a?a:this.attr.apply(this,arguments)},a.fn.ajaxSubmit=function(b){function c(c){var d,e,f=a.param(c,b.traditional).split("&"),g=f.length,h=[];for(d=0;g>d;d++)f[d]=f[d].replace(/\+/g," "),e=f[d].split("="),h.push([decodeURIComponent(e[0]),decodeURIComponent(e[1])]);return h}function g(d){for(var e=new FormData,f=0;f<d.length;f++)e.append(d[f].name,d[f].value);if(b.extraData){var g=c(b.extraData);for(f=0;f<g.length;f++)g[f]&&e.append(g[f][0],g[f][1])}b.data=null;var h=a.extend(!0,{},a.ajaxSettings,b,{contentType:!1,processData:!1,cache:!1,type:i||"POST"});b.uploadProgress&&(h.xhr=function(){var c=a.ajaxSettings.xhr();return c.upload&&c.upload.addEventListener("progress",function(a){var c=0,d=a.loaded||a.position,e=a.total;a.lengthComputable&&(c=Math.ceil(100*(d/e))),b.uploadProgress(a,d,e,c)},!1),c}),h.data=null;var j=h.beforeSend;return h.beforeSend=function(a,b){b.data=e,j&&j.call(this,a,b)},a.ajax(h)}function h(c){function e(a){var b=null;try{a.contentWindow&&(b=a.contentWindow.document)}catch(c){d("cannot get iframe.contentWindow document: "+c)}if(b)return b;try{b=a.contentDocument?a.contentDocument:a.document}catch(c){d("cannot get iframe.contentDocument: "+c),b=a.document}return b}function g(){function b(){try{var a=e(r).readyState;d("state = "+a),a&&"uninitialized"==a.toLowerCase()&&setTimeout(b,50)}catch(c){d("Server abort: ",c," (",c.name,")"),h(A),w&&clearTimeout(w),w=void 0}}var c=l.attr2("target"),f=l.attr2("action");x.setAttribute("target",o),i||x.setAttribute("method","POST"),f!=m.url&&x.setAttribute("action",m.url),m.skipEncodingOverride||i&&!/post/i.test(i)||l.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"}),m.timeout&&(w=setTimeout(function(){v=!0,h(z)},m.timeout));var g=[];try{if(m.extraData)for(var j in m.extraData)m.extraData.hasOwnProperty(j)&&(a.isPlainObject(m.extraData[j])&&m.extraData[j].hasOwnProperty("name")&&m.extraData[j].hasOwnProperty("value")?g.push(a('<input type="hidden" name="'+m.extraData[j].name+'">').val(m.extraData[j].value).appendTo(x)[0]):g.push(a('<input type="hidden" name="'+j+'">').val(m.extraData[j]).appendTo(x)[0]));m.iframeTarget||(q.appendTo("body"),r.attachEvent?r.attachEvent("onload",h):r.addEventListener("load",h,!1)),setTimeout(b,15);try{x.submit()}catch(k){var n=document.createElement("form").submit;n.apply(x)}}finally{x.setAttribute("action",f),c?x.setAttribute("target",c):l.removeAttr("target"),a(g).remove()}}function h(b){if(!s.aborted&&!F){if(E=e(r),E||(d("cannot access response document"),b=A),b===z&&s)return s.abort("timeout"),y.reject(s,"timeout"),void 0;if(b==A&&s)return s.abort("server abort"),y.reject(s,"error","server abort"),void 0;if(E&&E.location.href!=m.iframeSrc||v){r.detachEvent?r.detachEvent("onload",h):r.removeEventListener("load",h,!1);var c,f="success";try{if(v)throw"timeout";var g="xml"==m.dataType||E.XMLDocument||a.isXMLDoc(E);if(d("isXml="+g),!g&&window.opera&&(null===E.body||!E.body.innerHTML)&&--G)return d("requeing onLoad callback, DOM not available"),setTimeout(h,250),void 0;var i=E.body?E.body:E.documentElement;s.responseText=i?i.innerHTML:null,s.responseXML=E.XMLDocument?E.XMLDocument:E,g&&(m.dataType="xml"),s.getResponseHeader=function(a){var b={"content-type":m.dataType};return b[a]},i&&(s.status=Number(i.getAttribute("status"))||s.status,s.statusText=i.getAttribute("statusText")||s.statusText);var j=(m.dataType||"").toLowerCase(),k=/(json|script|text)/.test(j);if(k||m.textarea){var l=E.getElementsByTagName("textarea")[0];if(l)s.responseText=l.value,s.status=Number(l.getAttribute("status"))||s.status,s.statusText=l.getAttribute("statusText")||s.statusText;else if(k){var o=E.getElementsByTagName("pre")[0],p=E.getElementsByTagName("body")[0];o?s.responseText=o.textContent?o.textContent:o.innerText:p&&(s.responseText=p.textContent?p.textContent:p.innerText)}}else"xml"==j&&!s.responseXML&&s.responseText&&(s.responseXML=H(s.responseText));try{D=J(s,j,m)}catch(t){f="parsererror",s.error=c=t||f}}catch(t){d("error caught: ",t),f="error",s.error=c=t||f}s.aborted&&(d("upload aborted"),f=null),s.status&&(f=s.status>=200&&s.status<300||304===s.status?"success":"error"),"success"===f?(m.success&&m.success.call(m.context,D,"success",s),y.resolve(s.responseText,"success",s),n&&a.event.trigger("ajaxSuccess",[s,m])):f&&(void 0===c&&(c=s.statusText),m.error&&m.error.call(m.context,s,f,c),y.reject(s,"error",c),n&&a.event.trigger("ajaxError",[s,m,c])),n&&a.event.trigger("ajaxComplete",[s,m]),n&&!--a.active&&a.event.trigger("ajaxStop"),m.complete&&m.complete.call(m.context,s,f),F=!0,m.timeout&&clearTimeout(w),setTimeout(function(){m.iframeTarget||q.remove(),s.responseXML=null},100)}}}var j,k,m,n,o,q,r,s,t,u,v,w,x=l[0],y=a.Deferred();if(c)for(k=0;k<p.length;k++)j=a(p[k]),f?j.prop("disabled",!1):j.removeAttr("disabled");if(m=a.extend(!0,{},a.ajaxSettings,b),m.context=m.context||m,o="jqFormIO"+(new Date).getTime(),m.iframeTarget?(q=a(m.iframeTarget),u=q.attr2("name"),u?o=u:q.attr2("name",o)):(q=a('<iframe name="'+o+'" src="'+m.iframeSrc+'" />'),q.css({position:"absolute",top:"-1000px",left:"-1000px"})),r=q[0],s={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(b){var c="timeout"===b?"timeout":"aborted";d("aborting upload... "+c),this.aborted=1;try{r.contentWindow.document.execCommand&&r.contentWindow.document.execCommand("Stop")}catch(e){}q.attr("src",m.iframeSrc),s.error=c,m.error&&m.error.call(m.context,s,c,b),n&&a.event.trigger("ajaxError",[s,m,c]),m.complete&&m.complete.call(m.context,s,c)}},n=m.global,n&&0===a.active++&&a.event.trigger("ajaxStart"),n&&a.event.trigger("ajaxSend",[s,m]),m.beforeSend&&m.beforeSend.call(m.context,s,m)===!1)return m.global&&a.active--,y.reject(),y;if(s.aborted)return y.reject(),y;t=x.clk,t&&(u=t.name,u&&!t.disabled&&(m.extraData=m.extraData||{},m.extraData[u]=t.value,"image"==t.type&&(m.extraData[u+".x"]=x.clk_x,m.extraData[u+".y"]=x.clk_y)));var z=1,A=2,B=a("meta[name=csrf-token]").attr("content"),C=a("meta[name=csrf-param]").attr("content");C&&B&&(m.extraData=m.extraData||{},m.extraData[C]=B),m.forceSync?g():setTimeout(g,10);var D,E,F,G=50,H=a.parseXML||function(a,b){return window.ActiveXObject?(b=new ActiveXObject("Microsoft.XMLDOM"),b.async="false",b.loadXML(a)):b=(new DOMParser).parseFromString(a,"text/xml"),b&&b.documentElement&&"parsererror"!=b.documentElement.nodeName?b:null},I=a.parseJSON||function(a){return window.eval("("+a+")")},J=function(b,c,d){var e=b.getResponseHeader("content-type")||"",f="xml"===c||!c&&e.indexOf("xml")>=0,g=f?b.responseXML:b.responseText;return f&&"parsererror"===g.documentElement.nodeName&&a.error&&a.error("parsererror"),d&&d.dataFilter&&(g=d.dataFilter(g,c)),"string"==typeof g&&("json"===c||!c&&e.indexOf("json")>=0?g=I(g):("script"===c||!c&&e.indexOf("javascript")>=0)&&a.globalEval(g)),g};return y}if(!this.length)return d("ajaxSubmit: skipping submit process - no element selected"),this;var i,j,k,l=this;"function"==typeof b?b={success:b}:void 0===b&&(b={}),i=b.type||this.attr2("method"),j=b.url||this.attr2("action"),k="string"==typeof j?a.trim(j):"",k=k||window.location.href||"",k&&(k=(k.match(/^([^#]+)/)||[])[1]),b=a.extend(!0,{url:k,success:a.ajaxSettings.success,type:i||"GET",iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},b);var m={};if(this.trigger("form-pre-serialize",[this,b,m]),m.veto)return d("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),this;if(b.beforeSerialize&&b.beforeSerialize(this,b)===!1)return d("ajaxSubmit: submit aborted via beforeSerialize callback"),this;var n=b.traditional;void 0===n&&(n=a.ajaxSettings.traditional);var o,p=[],q=this.formToArray(b.semantic,p);if(b.data&&(b.extraData=b.data,o=a.param(b.data,n)),b.beforeSubmit&&b.beforeSubmit(q,this,b)===!1)return d("ajaxSubmit: submit aborted via beforeSubmit callback"),this;if(this.trigger("form-submit-validate",[q,this,b,m]),m.veto)return d("ajaxSubmit: submit vetoed via form-submit-validate trigger"),this;var r=a.param(q,n);o&&(r=r?r+"&"+o:o),"GET"==b.type.toUpperCase()?(b.url+=(b.url.indexOf("?")>=0?"&":"?")+r,b.data=null):b.data=r;var s=[];if(b.resetForm&&s.push(function(){l.resetForm()}),b.clearForm&&s.push(function(){l.clearForm(b.includeHidden)}),!b.dataType&&b.target){var t=b.success||function(){};s.push(function(c){var d=b.replaceTarget?"replaceWith":"html";a(b.target)[d](c).each(t,arguments)})}else b.success&&s.push(b.success);if(b.success=function(a,c,d){for(var e=b.context||this,f=0,g=s.length;g>f;f++)s[f].apply(e,[a,c,d||l,l])},b.error){var u=b.error;b.error=function(a,c,d){var e=b.context||this;u.apply(e,[a,c,d,l])}}if(b.complete){var v=b.complete;b.complete=function(a,c){var d=b.context||this;v.apply(d,[a,c,l])}}var w=a('input[type=file]:enabled[value!=""]',this),x=w.length>0,y="multipart/form-data",z=l.attr("enctype")==y||l.attr("encoding")==y,A=e.fileapi&&e.formdata;d("fileAPI :"+A);var B,C=(x||z)&&!A;b.iframe!==!1&&(b.iframe||C)?b.closeKeepAlive?a.get(b.closeKeepAlive,function(){B=h(q)}):B=h(q):B=(x||z)&&A?g(q):a.ajax(b),l.removeData("jqxhr").data("jqxhr",B);for(var D=0;D<p.length;D++)p[D]=null;return this.trigger("form-submit-notify",[this,b]),this},a.fn.ajaxForm=function(e){if(e=e||{},e.delegation=e.delegation&&a.isFunction(a.fn.on),!e.delegation&&0===this.length){var f={s:this.selector,c:this.context};return!a.isReady&&f.s?(d("DOM not ready, queuing ajaxForm"),a(function(){a(f.s,f.c).ajaxForm(e)}),this):(d("terminating; zero elements found by selector"+(a.isReady?"":" (DOM not ready)")),this)}return e.delegation?(a(document).off("submit.form-plugin",this.selector,b).off("click.form-plugin",this.selector,c).on("submit.form-plugin",this.selector,e,b).on("click.form-plugin",this.selector,e,c),this):this.ajaxFormUnbind().bind("submit.form-plugin",e,b).bind("click.form-plugin",e,c)},a.fn.ajaxFormUnbind=function(){return this.unbind("submit.form-plugin click.form-plugin")},a.fn.formToArray=function(b,c){var d=[];if(0===this.length)return d;var f=this[0],g=b?f.getElementsByTagName("*"):f.elements;if(!g)return d;var h,i,j,k,l,m,n;for(h=0,m=g.length;m>h;h++)if(l=g[h],j=l.name,j&&!l.disabled)if(b&&f.clk&&"image"==l.type)f.clk==l&&(d.push({name:j,value:a(l).val(),type:l.type}),d.push({name:j+".x",value:f.clk_x},{name:j+".y",value:f.clk_y}));else if(k=a.fieldValue(l,!0),k&&k.constructor==Array)for(c&&c.push(l),i=0,n=k.length;n>i;i++)d.push({name:j,value:k[i]});else if(e.fileapi&&"file"==l.type){c&&c.push(l);var o=l.files;if(o.length)for(i=0;i<o.length;i++)d.push({name:j,value:o[i],type:l.type});else d.push({name:j,value:"",type:l.type})}else null!==k&&"undefined"!=typeof k&&(c&&c.push(l),d.push({name:j,value:k,type:l.type,required:l.required}));if(!b&&f.clk){var p=a(f.clk),q=p[0];j=q.name,j&&!q.disabled&&"image"==q.type&&(d.push({name:j,value:p.val()}),d.push({name:j+".x",value:f.clk_x},{name:j+".y",value:f.clk_y}))}return d},a.fn.formSerialize=function(b){return a.param(this.formToArray(b))},a.fn.fieldSerialize=function(b){var c=[];return this.each(function(){var d=this.name;if(d){var e=a.fieldValue(this,b);if(e&&e.constructor==Array)for(var f=0,g=e.length;g>f;f++)c.push({name:d,value:e[f]});else null!==e&&"undefined"!=typeof e&&c.push({name:this.name,value:e})}}),a.param(c)},a.fn.fieldValue=function(b){for(var c=[],d=0,e=this.length;e>d;d++){var f=this[d],g=a.fieldValue(f,b);null===g||"undefined"==typeof g||g.constructor==Array&&!g.length||(g.constructor==Array?a.merge(c,g):c.push(g))}return c},a.fieldValue=function(b,c){var d=b.name,e=b.type,f=b.tagName.toLowerCase();if(void 0===c&&(c=!0),c&&(!d||b.disabled||"reset"==e||"button"==e||("checkbox"==e||"radio"==e)&&!b.checked||("submit"==e||"image"==e)&&b.form&&b.form.clk!=b||"select"==f&&-1==b.selectedIndex))return null;if("select"==f){var g=b.selectedIndex;if(0>g)return null;for(var h=[],i=b.options,j="select-one"==e,k=j?g+1:i.length,l=j?g:0;k>l;l++){var m=i[l];if(m.selected){var n=m.value;if(n||(n=m.attributes&&m.attributes.value&&!m.attributes.value.specified?m.text:m.value),j)return n;h.push(n)}}return h}return a(b).val()},a.fn.clearForm=function(b){return this.each(function(){a("input,select,textarea",this).clearFields(b)})},a.fn.clearFields=a.fn.clearInputs=function(b){var c=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;return this.each(function(){var d=this.type,e=this.tagName.toLowerCase();c.test(d)||"textarea"==e?this.value="":"checkbox"==d||"radio"==d?this.checked=!1:"select"==e?this.selectedIndex=-1:"file"==d?/MSIE/.test(navigator.userAgent)?a(this).replaceWith(a(this).clone(!0)):a(this).val(""):b&&(b===!0&&/hidden/.test(d)||"string"==typeof b&&a(this).is(b))&&(this.value="")})},a.fn.resetForm=function(){return this.each(function(){("function"==typeof this.reset||"object"==typeof this.reset&&!this.reset.nodeType)&&this.reset()})},a.fn.enable=function(a){return void 0===a&&(a=!0),this.each(function(){this.disabled=!a})},a.fn.selected=function(b){return void 0===b&&(b=!0),this.each(function(){var c=this.type;if("checkbox"==c||"radio"==c)this.checked=b;else if("option"==this.tagName.toLowerCase()){var d=a(this).parent("select");b&&d[0]&&"select-one"==d[0].type&&d.find("option").selected(!1),this.selected=b}})},a.fn.ajaxSubmit.debug=!1}(jQuery);;

/* jquery-smooth-scroll: (https://5dc5102abbf1a.t74.qifeiye.com/qfy-content/plugins/qfy_form/js/jquery.smooth-scroll.min.js) */
/*! Smooth Scroll - v1.4.9 - 2013-01-21
* https://github.com/kswedberg/jquery-smooth-scroll
* Copyright (c) 2013 Karl Swedberg; Licensed MIT
*
* Modified by to be compatible with jQuery Tools Scrollable
* The following code was removed from the original file:
* 
*   scrollable: function(dir) {
*	    var scrl = getScrollable.call(this, {dir: dir});
*	    return this.pushStack(scrl);
*  	},
* 
*/
(function(b){function m(b){return b.replace(/(:|\.)/g,"\\$1")}b.fn.extend({firstScrollable:function(e){var c=[],a=!1,f=e&&"left"==e?"scrollLeft":"scrollTop";this.each(function(){if(!(this==document||this==window)){var d=b(this);0<d[f]()?c.push(this):(d[f](1),(a=0<d[f]())&&c.push(this),d[f](0))}});c.length||this.each(function(){"BODY"===this.nodeName&&(c=[this])});1<c.length&&(c=[c[0]]);return this.pushStack(c)},smoothScroll:function(e){e=e||{};var c=b.extend({},b.fn.smoothScroll.defaults,e),a=b.smoothScroll.filterPath(location.pathname); this.unbind("click.smoothscroll").bind("click.smoothscroll",function(e){var d=b(this),g=c.exclude,j=c.excludeWithin,h=0,k=0,l=!0,n={},q=location.hostname===this.hostname||!this.hostname,r=c.scrollTarget||(b.smoothScroll.filterPath(this.pathname)||a)===a,p=m(this.hash);if(!c.scrollTarget&&(!q||!r||!p))l=!1;else{for(;l&&h<g.length;)d.is(m(g[h++]))&&(l=!1);for(;l&&k<j.length;)d.closest(j[k++]).length&&(l=!1)}l&&(e.preventDefault(),b.extend(n,c,{scrollTarget:c.scrollTarget||p,link:this}),b.smoothScroll(n))}); return this}});b.smoothScroll=function(e,c){var a,f,d,g;g=0;var j="offset",h="scrollTop",k={};d={};"number"===typeof e?(a=b.fn.smoothScroll.defaults,d=e):(a=b.extend({},b.fn.smoothScroll.defaults,e||{}),a.scrollElement&&(j="position","static"==a.scrollElement.css("position")&&a.scrollElement.css("position","relative")));a=b.extend({link:null},a);h="left"==a.direction?"scrollLeft":h;a.scrollElement?(f=a.scrollElement,g=f[h]()):f=b("html, body").firstScrollable();a.beforeScroll.call(f,a);d="number"=== typeof e?e:c||b(a.scrollTarget)[j]()&&b(a.scrollTarget)[j]()[a.direction]||0;k[h]=d+g+a.offset;g=a.speed;"auto"===g&&(g=k[h]||f.scrollTop(),g/=a.autoCoefficent);d={duration:g,easing:a.easing,complete:function(){a.afterScroll.call(a.link,a)}};a.step&&(d.step=a.step);f.length?f.stop().animate(k,d):a.afterScroll.call(a.link,a)};b.smoothScroll.version="1.4.9";b.smoothScroll.filterPath=function(b){return b.replace(/^\//,"").replace(/(index|default).[a-zA-Z]{3,4}$/,"").replace(/\/$/,"")};b.fn.smoothScroll.defaults= {exclude:[],excludeWithin:[],offset:0,direction:"top",scrollElement:null,scrollTarget:null,beforeScroll:function(){},afterScroll:function(){},easing:"swing",speed:400,autoCoefficent:2}})(jQuery);;

/* qtip: (https://5dc5102abbf1a.t74.qifeiye.com/qfy-content/plugins/qfy_form/js/qtip2/jquery.qtip.min.js) */
/*! qTip2 v2.0.1-36- (includes: tips / basic css3) | qtip2.com | Licensed MIT, GPL | Wed Mar 20 2013 08:57:14 */
(function(e,t,n){(function(e){"use strict";typeof define=="function"&&define.amd?define(["jquery"],e):jQuery&&!jQuery.fn.qtip&&e(jQuery)})(function(r){function P(n){S={pageX:n.pageX,pageY:n.pageY,type:"mousemove",scrollX:e.pageXOffset||t.body.scrollLeft||t.documentElement.scrollLeft,scrollY:e.pageYOffset||t.body.scrollTop||t.documentElement.scrollTop}}function H(e){var t=function(e){return e===o||"object"!=typeof e},n=function(e){return!r.isFunction(e)&&(!e&&!e.attr||e.length<1||"object"==typeof e&&!e.jquery&&!e.then)};if(!e||"object"!=typeof e)return s;t(e.metadata)&&(e.metadata={type:e.metadata});if("content"in e){if(t(e.content)||e.content.jquery)e.content={text:e.content};n(e.content.text||s)&&(e.content.text=s),"title"in e.content&&(t(e.content.title)&&(e.content.title={text:e.content.title}),n(e.content.title.text||s)&&(e.content.title.text=s))}return"position"in e&&t(e.position)&&(e.position={my:e.position,at:e.position}),"show"in e&&t(e.show)&&(e.show=e.show.jquery?{target:e.show}:e.show===i?{ready:i}:{event:e.show}),"hide"in e&&t(e.hide)&&(e.hide=e.hide.jquery?{target:e.hide}:{event:e.hide}),"style"in e&&t(e.style)&&(e.style={classes:e.style}),r.each(E,function(){this.sanitize&&this.sanitize(e)}),e}function B(n,u,a,f){function R(e){var t=0,n,r=u,i=e.split(".");while(r=r[i[t++]])t<i.length&&(n=r);return[n||u,i.pop()]}function U(e){return C.concat("").join(e?"-"+e+" ":" ")}function z(){var e=u.style.widget,t=B.hasClass(F);B.removeClass(F),F=e?"ui-state-disabled":"qtip-disabled",B.toggleClass(F,t),B.toggleClass("ui-helper-reset "+U(),e).toggleClass(L,u.style.def&&!e),I.content&&I.content.toggleClass(U("content"),e),I.titlebar&&I.titlebar.toggleClass(U("header"),e),I.button&&I.button.toggleClass(x+"-icon",!e)}function W(e){I.title&&(I.titlebar.remove(),I.titlebar=I.title=I.button=o,e!==s&&l.reposition())}function X(){var e=u.content.title.button,t=typeof e=="string",n=t?e:"Close tooltip";I.button&&I.button.remove(),e.jquery?I.button=e:I.button=r("<a />",{"class":"qtip-close "+(u.style.widget?"":x+"-icon"),title:n,"aria-label":n}).prepend(r("<span />",{"class":"ui-icon ui-icon-close",html:"&times;"})),I.button.appendTo(I.titlebar||B).attr("role","button").click(function(e){return B.hasClass(F)||l.hide(e),s})}function V(){var e=g+"-title";I.titlebar&&W(),I.titlebar=r("<div />",{"class":x+"-titlebar "+(u.style.widget?U("header"):"")}).append(I.title=r("<div />",{id:e,"class":x+"-title","aria-atomic":i})).insertBefore(I.content).delegate(".qtip-close","mousedown keydown mouseup keyup mouseout",function(e){r(this).toggleClass("ui-state-active ui-state-focus",e.type.substr(-4)==="down")}).delegate(".qtip-close","mouseover mouseout",function(e){r(this).toggleClass("ui-state-hover",e.type==="mouseover")}),u.content.title.button&&X()}function J(e){var t=I.button;if(!l.rendered)return s;e?X():t.remove()}function K(e,t){var i=I.title;if(!l.rendered||!e)return s;r.isFunction(e)&&(e=e.call(n,q.event,l));if(e===s||!e&&e!=="")return W(s);e.jquery&&e.length>0?i.empty().append(e.css({display:"block"})):i.html(e),t!==s&&l.rendered&&B[0].offsetWidth>0&&l.reposition(q.event)}function Q(e){e&&r.isFunction(e.done)&&e.done(function(e){G(e,null,s)})}function G(e,t,i){function a(e){function s(t){if(t.src===b||r.inArray(t,i)!==-1)return;i.push(t),r.data(t,"imagesLoaded",{src:t.src}),n.length===i.length&&(setTimeout(e),n.unbind(".imagesLoaded"))}var t=r(this),n=t.find("img").add(t.filter("img")),i=[];if(!n.length)return e();n.bind("load.imagesLoaded error.imagesLoaded",function(e){s(e.target)}).each(function(e,t){var n=t.src,i=r.data(t,"imagesLoaded");if(i&&i.src===n||t.complete&&t.naturalWidth)s(t);else if(t.readyState||t.complete)t.src=b,t.src=n})}var o=I.content;return!l.rendered||!e?s:(r.isFunction(e)&&(e=e.call(n,q.event,l)||""),i!==s&&Q(u.content.deferred),e.jquery&&e.length>0?o.empty().append(e.css({display:"block"})):o.html(e),l.rendered<0?B.queue("fx",a):(M=0,a.call(B[0],r.noop)),l)}function Y(){function p(e){if(B.hasClass(F))return s;clearTimeout(l.timers.show),clearTimeout(l.timers.hide);var t=function(){l.toggle(i,e)};u.show.delay>0?l.timers.show=setTimeout(t,u.show.delay):t()}function d(e){if(B.hasClass(F)||y||M)return s;var t=r(e.relatedTarget),n=t.closest(k)[0]===B[0],i=t[0]===f.show[0];clearTimeout(l.timers.show),clearTimeout(l.timers.hide);if(this!==t[0]&&o.target==="mouse"&&n||u.hide.fixed&&/mouse(out|leave|move)/.test(e.type)&&(n||i)){try{e.preventDefault(),e.stopImmediatePropagation()}catch(a){}return}u.hide.delay>0?l.timers.hide=setTimeout(function(){l.hide(e)},u.hide.delay):l.hide(e)}function v(e){if(B.hasClass(F))return s;clearTimeout(l.timers.inactive),l.timers.inactive=setTimeout(function(){l.hide(e)},u.hide.inactive)}function m(e){l.rendered&&B[0].offsetWidth>0&&l.reposition(e)}var o=u.position,f={show:u.show.target,hide:u.hide.target,viewport:r(o.viewport),document:r(t),body:r(t.body),window:r(e)},c={show:r.trim(""+u.show.event).split(" "),hide:r.trim(""+u.hide.event).split(" ")},h=E.ie===6;B.bind("mouseenter"+j+" mouseleave"+j,function(e){var t=e.type==="mouseenter";t&&l.focus(e),B.toggleClass(O,t)}),/mouse(out|leave)/i.test(u.hide.event)&&u.hide.leave==="window"&&f.document.bind("mouseout"+j+" blur"+j,function(e){!/select|option/.test(e.target.nodeName)&&!e.relatedTarget&&l.hide(e)}),u.hide.fixed?(f.hide=f.hide.add(B),B.bind("mouseover"+j,function(){B.hasClass(F)||clearTimeout(l.timers.hide)})):/mouse(over|enter)/i.test(u.show.event)&&f.hide.bind("mouseleave"+j,function(e){clearTimeout(l.timers.show)}),(""+u.hide.event).indexOf("unfocus")>-1&&o.container.closest("html").bind("mousedown"+j+" touchstart"+j,function(e){var t=r(e.target),i=l.rendered&&!B.hasClass(F)&&B[0].offsetWidth>0,s=t.parents(k).filter(B[0]).length>0;t[0]!==n[0]&&t[0]!==B[0]&&!s&&!n.has(t[0]).length&&i&&l.hide(e)}),"number"==typeof u.hide.inactive&&(f.show.bind("qtip-"+a+"-inactive",v),r.each(w.inactiveEvents,function(e,t){f.hide.add(I.tooltip).bind(t+j+"-inactive",v)})),r.each(c.hide,function(e,t){var n=r.inArray(t,c.show),i=r(f.hide);n>-1&&i.add(f.show).length===i.length||t==="unfocus"?(f.show.bind(t+j,function(e){B[0].offsetWidth>0?d(e):p(e)}),delete c.show[n]):f.hide.bind(t+j,d)}),r.each(c.show,function(e,t){f.show.bind(t+j,p)}),"number"==typeof u.hide.distance&&f.show.add(B).bind("mousemove"+j,function(e){var t=q.origin||{},n=u.hide.distance,r=Math.abs;(r(e.pageX-t.pageX)>=n||r(e.pageY-t.pageY)>=n)&&l.hide(e)}),o.target==="mouse"&&(f.show.bind("mousemove"+j,P),o.adjust.mouse&&(u.hide.event&&(B.bind("mouseleave"+j,function(e){(e.relatedTarget||e.target)!==f.show[0]&&l.hide(e)}),I.target.bind("mouseenter"+j+" mouseleave"+j,function(e){q.onTarget=e.type==="mouseenter"})),f.document.bind("mousemove"+j,function(e){l.rendered&&q.onTarget&&!B.hasClass(F)&&B[0].offsetWidth>0&&l.reposition(e||S)}))),(o.adjust.resize||f.viewport.length)&&(r.event.special.resize?f.viewport:f.window).bind("resize"+j,m),o.adjust.scroll&&f.window.add(o.container).bind("scroll"+j,m)}function Z(){var n=[u.show.target[0],u.hide.target[0],l.rendered&&I.tooltip[0],u.position.container[0],u.position.viewport[0],u.position.container.closest("html")[0],e,t];l.rendered?r([]).pushStack(r.grep(n,function(e){return typeof e=="object"})).unbind(j):u.show.target.unbind(j+"-create")}var l=this,m=t.body,g=x+"-"+a,y=0,M=0,B=r(),j=".qtip-"+a,F="qtip-disabled",I,q;l.id=a,l.rendered=s,l.destroyed=s,l.elements=I={target:n},l.timers={img:{}},l.options=u,l.checks={},l.plugins={},l.cache=q={event:{},target:r(),disabled:s,attr:f,onTarget:s,lastClass:""},l.checks.builtin={"^id$":function(e,t,n){var o=n===i?w.nextid:n,u=x+"-"+o;o!==s&&o.length>0&&!r("#"+u).length&&(B[0].id=u,I.content[0].id=u+"-content",I.title[0].id=u+"-title")},"^content.text$":function(e,t,n){G(u.content.text)},"^content.deferred$":function(e,t,n){Q(u.content.deferred)},"^content.title.text$":function(e,t,n){if(!n)return W();!I.title&&n&&V(),K(n)},"^content.title.button$":function(e,t,n){J(n)},"^position.(my|at)$":function(e,t,n){"string"==typeof n&&(e[t]=new E.Corner(n))},"^position.container$":function(e,t,n){l.rendered&&B.appendTo(n)},"^show.ready$":function(){l.rendered?l.toggle(i):l.render(1)},"^style.classes$":function(e,t,n){B.attr("class",x+" qtip "+n)},"^style.width|height":function(e,t,n){B.css(t,n)},"^style.widget|content.title":z,"^events.(render|show|move|hide|focus|blur)$":function(e,t,n){B[(r.isFunction(n)?"":"un")+"bind"]("tooltip"+t,n)},"^(show|hide|position).(event|target|fixed|inactive|leave|distance|viewport|adjust)":function(){var e=u.position;B.attr("tracking",e.target==="mouse"&&e.adjust.mouse),Z(),Y()}},r.extend(l,{_triggerEvent:function(e,t,n){var i=r.Event("tooltip"+e);return i.originalEvent=(n?r.extend({},n):o)||q.event||o,B.trigger(i,[l].concat(t||[])),!i.isDefaultPrevented()},render:function(e){if(l.rendered)return l;var t=u.content.text,o=u.content.title,a=u.position;return r.attr(n[0],"aria-describedby",g),B=I.tooltip=r("<div/>",{id:g,"class":[x,L,u.style.classes,x+"-pos-"+u.position.my.abbrev()].join(" "),width:u.style.width||"",height:u.style.height||"",tracking:a.target==="mouse"&&a.adjust.mouse,role:"alert","aria-live":"polite","aria-atomic":s,"aria-describedby":g+"-content","aria-hidden":i}).toggleClass(F,q.disabled).data("qtip",l).appendTo(u.position.container).append(I.content=r("<div />",{"class":x+"-content",id:g+"-content","aria-atomic":i})),l.rendered=-1,y=1,o.text?(V(),r.isFunction(o.text)||K(o.text,s)):o.button&&X(),(!r.isFunction(t)||t.then)&&G(t,s),l.rendered=i,z(),r.each(u.events,function(e,t){r.isFunction(t)&&B.bind(e==="toggle"?"tooltipshow tooltiphide":"tooltip"+e,t)}),r.each(E,function(){this.initialize==="render"&&this(l)}),Y(),B.queue("fx",function(t){l._triggerEvent("render"),y=0,(u.show.ready||e)&&l.toggle(i,q.event,s),t()}),l},get:function(e){var t,n;switch(e.toLowerCase()){case"dimensions":t={height:B.outerHeight(s),width:B.outerWidth(s)};break;case"offset":t=E.offset(B,u.position.container);break;default:n=R(e.toLowerCase()),t=n[0][n[1]],t=t.precedance?t.string():t}return t},set:function(e,t){function p(e,t){var n,r,i;for(n in c)for(r in c[n])if(i=(new RegExp(r,"i")).exec(e))t.push(i),c[n][r].apply(l,t)}var n=/^position\.(my|at|adjust|target|container)|style|content|show\.ready/i,a=/^content\.(title|attr)|style/i,f=s,c=l.checks,h;return"string"==typeof e?(h=e,e={},e[h]=t):e=r.extend(i,{},e),r.each(e,function(t,i){var s=R(t.toLowerCase()),o;o=s[0][s[1]],s[0][s[1]]="object"==typeof i&&i.nodeType?r(i):i,e[t]=[s[0],s[1],i,o],f=n.test(t)||f}),H(u),y=1,r.each(e,p),y=0,l.rendered&&B[0].offsetWidth>0&&f&&l.reposition(u.position.target==="mouse"?o:q.event),l},toggle:function(e,n){function w(){e?(E.ie&&B[0].style.removeAttribute("filter"),B.css("overflow",""),"string"==typeof f.autofocus&&r(f.autofocus,B).focus(),f.target.trigger("qtip-"+a+"-inactive")):B.css({display:"",visibility:"",opacity:"",left:"",top:""}),l._triggerEvent(e?"visible":"hidden")}if(n){if(/over|enter/.test(n.type)&&/out|leave/.test(q.event.type)&&u.show.target.add(n.target).length===u.show.target.length&&B.has(n.relatedTarget).length)return l;q.event=r.extend({},n)}if(!l.rendered)return e?l.render(1):l;var o=e?"show":"hide",f=u[o],c=u[e?"hide":"show"],h=u.position,p=u.content,d=B.css("width"),v=B[0].offsetWidth>0,m=e||f.target.length===1,g=!n||f.target.length<2||q.target[0]===n.target,y,b;return(typeof e).search("boolean|number")&&(e=!v),!B.is(":animated")&&v===e&&g?l:!l._triggerEvent(o,[90])&&!l.destroyed?l:(r.attr(B[0],"aria-hidden",!e),e?(q.origin=r.extend({},S),l.focus(n),r.isFunction(p.text)&&G(p.text,s),r.isFunction(p.title.text)&&K(p.title.text,s),!D&&h.target==="mouse"&&h.adjust.mouse&&(r(t).bind("mousemove.qtip",P),D=i),d||B.css("width",B.outerWidth()),l.reposition(n,arguments[2]),d||B.css("width",""),!f.solo||(typeof f.solo=="string"?r(f.solo):r(k,f.solo)).not(B).not(f.target).qtip("hide",r.Event("tooltipsolo"))):(clearTimeout(l.timers.show),delete q.origin,D&&!r(k+'[tracking="true"]:visible',f.solo).not(B).length&&(r(t).unbind("mousemove.qtip"),D=s),l.blur(n)),f.effect===s||m===s?(B[o](),w.call(B)):r.isFunction(f.effect)?(B.stop(1,1),f.effect.call(B,l),B.queue("fx",function(e){w(),e()})):B.fadeTo(90,e?1:0,w),e&&f.target.trigger("qtip-"+a+"-inactive"),l)},show:function(e){return l.toggle(i,e)},hide:function(e){return l.toggle(s,e)},focus:function(e){if(!l.rendered)return l;var t=r(k),n=parseInt(B[0].style.zIndex,10),i=w.zindex+t.length,s=r.extend({},e),o;return B.hasClass(A)||l._triggerEvent("focus",[i],s)&&(n!==i&&(t.each(function(){this.style.zIndex>n&&(this.style.zIndex=this.style.zIndex-1)}),t.filter("."+A).qtip("blur",s)),B.addClass(A)[0].style.zIndex=i),l},blur:function(e){return B.removeClass(A),l._triggerEvent("blur",[B.css("zIndex")],e),l},reposition:function(n,i){if(!l.rendered||y)return l;y=1;var o=u.position.target,a=u.position,f=a.my,m=a.at,g=a.adjust,b=g.method.split(" "),w=B.outerWidth(s),x=B.outerHeight(s),T=0,N=0,C=B.css("position"),k=a.viewport,L={left:0,top:0},A=a.container,O=B[0].offsetWidth>0,M=n&&n.type==="scroll",_=r(e),D,P;if(r.isArray(o)&&o.length===2)m={x:h,y:c},L={left:o[0],top:o[1]};else if(o==="mouse"&&(n&&n.pageX||q.event.pageX))m={x:h,y:c},n=S&&S.pageX&&(g.mouse||!n||!n.pageX)?{pageX:S.pageX,pageY:S.pageY}:(!n||n.type!=="resize"&&n.type!=="scroll"?n&&n.pageX&&n.type==="mousemove"?n:(!g.mouse||u.show.distance)&&q.origin&&q.origin.pageX?q.origin:n:q.event)||n||q.event||S||{},C!=="static"&&(L=A.offset()),L={left:n.pageX-L.left,top:n.pageY-L.top},g.mouse&&M&&(L.left-=S.scrollX-_.scrollLeft(),L.top-=S.scrollY-_.scrollTop());else{o==="event"&&n&&n.target&&n.type!=="scroll"&&n.type!=="resize"?q.target=r(n.target):o!=="event"&&(q.target=r(o.jquery?o:I.target)),o=q.target,o=r(o).eq(0);if(o.length===0)return l;o[0]===t||o[0]===e?(T=E.iOS?e.innerWidth:o.width(),N=E.iOS?e.innerHeight:o.height(),o[0]===e&&(L={top:(k||o).scrollTop(),left:(k||o).scrollLeft()})):E.imagemap&&o.is("area")?D=E.imagemap(l,o,m,E.viewport?b:s):E.svg&&o[0].ownerSVGElement?D=E.svg(l,o,m,E.viewport?b:s):(T=o.outerWidth(s),N=o.outerHeight(s),L=o.offset()),D&&(T=D.width,N=D.height,P=D.offset,L=D.position),L=E.offset(o,L,A);if(E.iOS>3.1&&E.iOS<4.1||E.iOS>=4.3&&E.iOS<4.33||!E.iOS&&C==="fixed")L.left-=_.scrollLeft(),L.top-=_.scrollTop();L.left+=m.x===d?T:m.x===v?T/2:0,L.top+=m.y===p?N:m.y===v?N/2:0}return L.left+=g.x+(f.x===d?-w:f.x===v?-w/2:0),L.top+=g.y+(f.y===p?-x:f.y===v?-x/2:0),E.viewport?(L.adjusted=E.viewport(l,L,a,T,N,w,x),P&&L.adjusted.left&&(L.left+=P.left),P&&L.adjusted.top&&(L.top+=P.top)):L.adjusted={left:0,top:0},l._triggerEvent("move",[L,k.elem||k],n)?(delete L.adjusted,i===s||!O||isNaN(L.left)||isNaN(L.top)||o==="mouse"||!r.isFunction(a.effect)?B.css(L):r.isFunction(a.effect)&&(a.effect.call(B,l,r.extend({},L)),B.queue(function(e){r(this).css({opacity:"",height:""}),E.ie&&this.style.removeAttribute("filter"),e()})),y=0,l):l},disable:function(e){return"boolean"!=typeof e&&(e=!B.hasClass(F)&&!q.disabled),l.rendered?(B.toggleClass(F,e),r.attr(B[0],"aria-disabled",e)):q.disabled=!!e,l},enable:function(){return l.disable(s)},destroy:function(e){function t(){var e=n[0],t=r.attr(e,_),i=n.data("qtip");l.rendered&&(r.each(l.plugins,function(e){this.destroy&&this.destroy(),delete l.plugins[e]}),B.stop(1,0).find("*").remove().end().remove(),l.rendered=s),clearTimeout(l.timers.show),clearTimeout(l.timers.hide),Z();if(!i||l===i)n.removeData("qtip").removeAttr(T),u.suppress&&t&&(n.attr("title",t),n.removeAttr(_)),n.removeAttr("aria-describedby");n.unbind(".qtip-"+a),delete N[l.id],delete l.options,delete l.elements,delete l.cache,delete l.timers,delete l.checks}if(l.destroyed)return;l.destroyed=i;var o=s;return e!==i&&(B.bind("tooltiphide",function(){o=i,B.bind("tooltiphidden",t)}),l.hide()),o||t(),n}})}function j(e,n,u){var a,f,l,c,h,p=r(t.body),d=e[0]===t?p:e,v=e.metadata?e.metadata(u.metadata):o,m=u.metadata.type==="html5"&&v?v[u.metadata.name]:o,g=e.data(u.metadata.name||"qtipopts");try{g=typeof g=="string"?r.parseJSON(g):g}catch(y){}c=r.extend(i,{},w.defaults,u,typeof g=="object"?H(g):o,H(m||v)),f=c.position,c.id=n;if("boolean"==typeof c.content.text){l=e.attr(c.content.attr);if(c.content.attr===s||!l)return s;c.content.text=l}f.container.length||(f.container=p),f.target===s&&(f.target=d),c.show.target===s&&(c.show.target=d),c.show.solo===i&&(c.show.solo=f.container.closest("body")),c.hide.target===s&&(c.hide.target=d),c.position.viewport===i&&(c.position.viewport=f.container),f.container=f.container.eq(0),f.at=new E.Corner(f.at),f.my=new E.Corner(f.my);if(e.data("qtip"))if(c.overwrite)e.qtip("destroy");else if(c.overwrite===s)return s;return e.attr(T,!0),c.suppress&&(h=e.attr("title"))&&e.removeAttr("title").attr(_,h).attr("title",""),a=new B(e,c,n,!!l),e.data("qtip",a),e.one("remove.qtip-"+n+" removeqtip.qtip-"+n,function(){var e;(e=r(this).data("qtip"))&&e.destroy()}),a}function R(e,t,n){var r=Math.ceil(t/2),i=Math.ceil(n/2),s={bottomright:[[0,0],[t,n],[t,0]],bottomleft:[[0,0],[t,0],[0,n]],topright:[[0,n],[t,0],[t,n]],topleft:[[0,0],[0,n],[t,n]],topcenter:[[0,n],[r,0],[t,n]],bottomcenter:[[0,0],[t,0],[r,n]],rightcenter:[[0,0],[t,i],[0,n]],leftcenter:[[t,0],[t,n],[0,i]]};return s.lefttop=s.bottomright,s.righttop=s.bottomleft,s.leftbottom=s.topright,s.rightbottom=s.topleft,s[e.string()]}function U(e,t){function k(e){var t=w.is(":visible");w.show(),e(),w.toggle(t)}function L(){x.width=g.height,x.height=g.width}function A(){x.width=g.width,x.height=g.height}function O(t,r,o,f){if(!b.tip)return;var l=m.corner.clone(),w=o.adjusted,E=e.options.position.adjust.method.split(" "),x=E[0],T=E[1]||E[0],N={left:s,top:s,x:0,y:0},C,k={},L;m.corner.fixed!==i&&(x===y&&l.precedance===u&&w.left&&l.y!==v?l.precedance=l.precedance===u?a:u:x!==y&&w.left&&(l.x=l.x===v?w.left>0?h:d:l.x===h?d:h),T===y&&l.precedance===a&&w.top&&l.x!==v?l.precedance=l.precedance===a?u:a:T!==y&&w.top&&(l.y=l.y===v?w.top>0?c:p:l.y===c?p:c),l.string()!==S.corner.string()&&(S.top!==w.top||S.left!==w.left)&&m.update(l,s)),C=m.position(l,w),C[l.x]+=_(l,l.x),C[l.y]+=_(l,l.y),C.right!==n&&(C.left=-C.right),C.bottom!==n&&(C.top=-C.bottom),C.user=Math.max(0,g.offset);if(N.left=x===y&&!!w.left)l.x===v?k["margin-left"]=N.x=C["margin-left"]-w.left:(L=C.right!==n?[w.left,-C.left]:[-w.left,C.left],(N.x=Math.max(L[0],L[1]))>L[0]&&(o.left-=w.left,N.left=s),k[C.right!==n?d:h]=N.x);if(N.top=T===y&&!!w.top)l.y===v?k["margin-top"]=N.y=C["margin-top"]-w.top:(L=C.bottom!==n?[w.top,-C.top]:[-w.top,C.top],(N.y=Math.max(L[0],L[1]))>L[0]&&(o.top-=w.top,N.top=s),k[C.bottom!==n?p:c]=N.y);b.tip.css(k).toggle(!(N.x&&N.y||l.x===v&&N.y||l.y===v&&N.x)),o.left-=C.left.charAt?C.user:x!==y||N.top||!N.left&&!N.top?C.left:0,o.top-=C.top.charAt?C.user:T!==y||N.left||!N.left&&!N.top?C.top:0,S.left=w.left,S.top=w.top,S.corner=l.clone()}function M(){var t=g.corner,n=e.options.position,r=n.at,o=n.my.string?n.my.string():n.my;return t===s||o===s&&r===s?s:(t===i?m.corner=new E.Corner(o):t.string||(m.corner=new E.Corner(t),m.corner.fixed=i),S.corner=new E.Corner(m.corner.string()),m.corner.string()!=="centercenter")}function _(e,t,n){t=t?t:e[e.precedance];var r=b.titlebar&&e.y===c,i=r?b.titlebar:w,s="border-"+t+"-width",o=function(e){return parseInt(e.css(s),10)},u;return k(function(){u=(n?o(n):o(b.content)||o(i)||o(w))||0}),u}function D(e){var t=b.titlebar&&e.y===c,n=t?b.titlebar:b.content,r="-moz-",i="-webkit-",s="border-radius-"+e.y+e.x,o="border-"+e.y+"-"+e.x+"-radius",u=function(e){return parseInt(n.css(e),10)||parseInt(w.css(e),10)},a;return k(function(){a=u(o)||u(s)||u(r+o)||u(r+s)||u(i+o)||u(i+s)||0}),a}function P(e){function N(e,t,n){var r=e.css(t)||p;return n&&r===e.css(n)?s:f.test(r)?s:r}var t,n,o,u=b.tip.css("cssText",""),a=e||m.corner,f=/rgba?\(0, 0, 0(, 0)?\)|transparent|#123456/i,l="border-"+a[a.precedance]+"-color",h="background-color",p="transparent",d=" !important",y=b.titlebar,E=y&&(a.y===c||a.y===v&&u.position().top+x.height/2+g.offset<y.outerHeight(i)),S=E?y:b.content;k(function(){T.fill=N(u,h)||N(S,h)||N(b.content,h)||N(w,h)||u.css(h),T.border=N(u,l,"color")||N(S,l,"color")||N(b.content,l,"color")||N(w,l,"color")||w.css(l),r("*",u).add(u).css("cssText",h+":"+p+d+";border:0"+d+";")})}function H(e){var t=e.precedance===a,n=x[t?f:l],r=x[t?l:f],i=e.string().indexOf(v)>-1,s=n*(i?.5:1),o=Math.pow,u=Math.round,c,h,p,d=Math.sqrt(o(s,2)+o(r,2)),m=[N/s*d,N/r*d];return m[2]=Math.sqrt(o(m[0],2)-o(N,2)),m[3]=Math.sqrt(o(m[1],2)-o(N,2)),c=d+m[2]+m[3]+(i?0:m[0]),h=c/d,p=[u(h*r),u(h*n)],{height:p[t?0:1],width:p[t?1:0]}}function B(e,t,n){return"<qvml:"+e+' xmlns="urn:schemas-microsoft.com:vml" class="qtip-vml" '+(t||"")+' style="behavior: url(#default#VML); '+(n||"")+'" />'}var m=this,g=e.options.style.tip,b=e.elements,w=b.tooltip,S={top:0,left:0},x={width:g.width,height:g.height},T={},N=g.border||0,C;m.corner=o,m.mimic=o,m.border=N,m.offset=g.offset,m.size=x,e.checks.tip={"^position.my|style.tip.(corner|mimic|border)$":function(){m.init()||m.destroy(),e.reposition()},"^style.tip.(height|width)$":function(){x={width:g.width,height:g.height},m.create(),m.update(),e.reposition()},"^content.title.text|style.(classes|widget)$":function(){b.tip&&b.tip.length&&m.update()}},r.extend(m,{init:function(){var e=M()&&(q||E.ie);return e&&(m.create(),m.update(),w.unbind(I).bind("tooltipmove"+I,O)),e},create:function(){var e=x.width,t=x.height,n;b.tip&&b.tip.remove(),b.tip=r("<div />",{"class":"qtip-tip"}).css({width:e,height:t}).prependTo(w),q?r("<canvas />").appendTo(b.tip)[0].getContext("2d").save():(n=B("shape",'coordorigin="0,0"',"position:absolute;"),b.tip.html(n+n),r("*",b.tip).bind("click"+I+" mousedown"+I,function(e){e.stopPropagation()}))},update:function(e,t){var n=b.tip,f=n.children(),l=x.width,y=x.height,C=g.mimic,k=Math.round,O,M,D,j,F;e||(e=S.corner||m.corner),C===s?C=e:(C=new E.Corner(C),C.precedance=e.precedance,C.x==="inherit"?C.x=e.x:C.y==="inherit"?C.y=e.y:C.x===C.y&&(C[e.precedance]=e[e.precedance])),O=C.precedance,e.precedance===u?L():A(),b.tip.css({width:l=x.width,height:y=x.height}),P(e),T.border!=="transparent"?(N=_(e,o),g.border===0&&N>0&&(T.fill=T.border),m.border=N=g.border!==i?g.border:N):m.border=N=0,D=R(C,l,y),m.size=F=H(e),n.css(F).css("line-height",F.height+"px"),e.precedance===a?j=[k(C.x===h?N:C.x===d?F.width-l-N:(F.width-l)/2),k(C.y===c?F.height-y:0)]:j=[k(C.x===h?F.width-l:0),k(C.y===c?N:C.y===p?F.height-y-N:(F.height-y)/2)],q?(f.attr(F),M=f[0].getContext("2d"),M.restore(),M.save(),M.clearRect(0,0,3e3,3e3),M.fillStyle=T.fill,M.strokeStyle=T.border,M.lineWidth=N*2,M.lineJoin="miter",M.miterLimit=100,M.translate(j[0],j[1]),M.beginPath(),M.moveTo(D[0][0],D[0][1]),M.lineTo(D[1][0],D[1][1]),M.lineTo(D[2][0],D[2][1]),M.closePath(),N&&(w.css("background-clip")==="border-box"&&(M.strokeStyle=T.fill,M.stroke()),M.strokeStyle=T.border,M.stroke()),M.fill()):(D="m"+D[0][0]+","+D[0][1]+" l"+D[1][0]+","+D[1][1]+" "+D[2][0]+","+D[2][1]+" xe",j[2]=N&&/^(r|b)/i.test(e.string())?E.ie===8?2:1:0,f.css({coordsize:l+N+" "+(y+N),antialias:""+(C.string().indexOf(v)>-1),left:j[0],top:j[1],width:l+N,height:y+N}).each(function(e){var t=r(this);t[t.prop?"prop":"attr"]({coordsize:l+N+" "+(y+N),path:D,fillcolor:T.fill,filled:!!e,stroked:!e}).toggle(!!N||!!e),!e&&t.html()===""&&t.html(B("stroke",'weight="'+N*2+'px" color="'+T.border+'" miterlimit="1000" joinstyle="miter"'))})),setTimeout(function(){b.tip.css({display:"inline-block",visibility:"visible"})},1),t!==s&&m.position(e)},position:function(e){var t=b.tip,n={},i=Math.max(0,g.offset),o,p,d;return g.corner===s||!t?s:(e=e||m.corner,o=e.precedance,p=H(e),d=[e.x,e.y],o===u&&d.reverse(),r.each(d,function(t,r){var s,u,d;r===v?(s=o===a?h:c,n[s]="50%",n["margin-"+s]=-Math.round(p[o===a?f:l]/2)+i):(s=_(e,r),u=_(e,r,b.content),d=D(e),n[r]=t?u:i+(d>s?d:-s))}),n[e[o]]-=p[o===u?f:l],t.css({top:"",bottom:"",left:"",right:"",margin:""}).css(n),n)},destroy:function(){w.unbind(I),b.tip&&b.tip.find("*").remove().end().remove(),delete m.corner,delete m.mimic,delete m.size}}),m.init()}var i=!0,s=!1,o=null,u="x",a="y",f="width",l="height",c="top",h="left",p="bottom",d="right",v="center",m="flip",g="flipinvert",y="shift",b="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",w,E,S,x="qtip",T="data-hasqtip",N={},C=["ui-widget","ui-tooltip"],k="div.qtip."+x,L=x+"-default",A=x+"-focus",O=x+"-hover",M="_replacedByqTip",_="oldtitle",D;w=r.fn.qtip=function(e,t,u){var a=(""+e).toLowerCase(),f=o,l=r.makeArray(arguments).slice(1),c=l[l.length-1],h=this[0]?r.data(this[0],"qtip"):o;if(!arguments.length&&h||a==="api")return h;if("string"==typeof e)return this.each(function(){var e=r.data(this,"qtip");if(!e)return i;c&&c.timeStamp&&(e.cache.event=c);if(a!=="option"&&a!=="options"||!t)e[a]&&e[a].apply(e[a],l);else{if(!r.isPlainObject(t)&&u===n)return f=e.get(t),s;e.set(t,u)}}),f!==o?f:this;if("object"==typeof e||!arguments.length)return h=H(r.extend(i,{},e)),w.bind.call(this,h,c)},w.bind=function(e,t){return this.each(function(o){function p(e){function t(){c.render(typeof e=="object"||u.show.ready),a.show.add(a.hide).unbind(l)}if(c.cache.disabled)return s;c.cache.event=r.extend({},e),c.cache.target=e?r(e.target):[n],u.show.delay>0?(clearTimeout(c.timers.show),c.timers.show=setTimeout(t,u.show.delay),f.show!==f.hide&&a.hide.bind(f.hide,function(){clearTimeout(c.timers.show)})):t()}var u,a,f,l,c,h;h=r.isArray(e.id)?e.id[o]:e.id,h=!h||h===s||h.length<1||N[h]?w.nextid++:N[h]=h,l=".qtip-"+h+"-create",c=j(r(this),h,e);if(c===s)return i;u=c.options,r.each(E,function(){this.initialize==="initialize"&&this(c)}),a={show:u.show.target,hide:u.hide.target},f={show:r.trim(""+u.show.event).replace(/ /g,l+" ")+l,hide:r.trim(""+u.hide.event).replace(/ /g,l+" ")+l},/mouse(over|enter)/i.test(f.show)&&!/mouse(out|leave)/i.test(f.hide)&&(f.hide+=" mouseleave"+l),a.show.bind("mousemove"+l,function(e){P(e),c.cache.onTarget=i}),a.show.bind(f.show,p),(u.show.ready||u.prerender)&&p(t)})},E=w.plugins={Corner:function(e){e=(""+e).replace(/([A-Z])/," $1").replace(/middle/gi,v).toLowerCase(),this.x=(e.match(/left|right/i)||e.match(/center/)||["inherit"])[0].toLowerCase(),this.y=(e.match(/top|bottom|center/i)||["inherit"])[0].toLowerCase();var t=e.charAt(0);this.precedance=t==="t"||t==="b"?a:u,this.string=function(){return this.precedance===a?this.y+this.x:this.x+this.y},this.abbrev=function(){var e=this.x.substr(0,1),t=this.y.substr(0,1);return e===t?e:this.precedance===a?t+e:e+t},this.invertx=function(e){this.x=this.x===h?d:this.x===d?h:e||this.x},this.inverty=function(e){this.y=this.y===c?p:this.y===p?c:e||this.y},this.clone=function(){return{x:this.x,y:this.y,precedance:this.precedance,string:this.string,abbrev:this.abbrev,clone:this.clone,invertx:this.invertx,inverty:this.inverty}}},offset:function(e,n,i){function c(e,t){n.left+=t*e.scrollLeft(),n.top+=t*e.scrollTop()}var s=e.closest("body"),o=E.ie&&t.compatMode!=="CSS1Compat",u=i,a,f,l;if(u){do u.css("position")!=="static"&&(f=u.position(),n.left-=f.left+(parseInt(u.css("borderLeftWidth"),10)||0)+(parseInt(u.css("marginLeft"),10)||0),n.top-=f.top+(parseInt(u.css("borderTopWidth"),10)||0)+(parseInt(u.css("marginTop"),10)||0),!a&&(l=u.css("overflow"))!=="hidden"&&l!=="visible"&&(a=u));while((u=r(u[0].offsetParent)).length);(a&&a[0]!==s[0]||o)&&c(a||s,1)}return n},ie:function(){var e=3,n=t.createElement("div");while(n.innerHTML="<!--[if gt IE "+ ++e+"]><i></i><![endif]-->")if(!n.getElementsByTagName("i")[0])break;return e>4?e:s}(),iOS:parseFloat((""+(/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent)||[0,""])[1]).replace("undefined","3_2").replace("_",".").replace("_",""))||s,fn:{attr:function(e,t){if(this.length){var n=this[0],i="title",s=r.data(n,"qtip");if(e===i&&s&&"object"==typeof s&&s.options.suppress)return arguments.length<2?r.attr(n,_):(s&&s.options.content.attr===i&&s.cache.attr&&s.set("content.text",t),this.attr(_,t))}return r.fn["attr"+M].apply(this,arguments)},clone:function(e){var t=r([]),n="title",i=r.fn["clone"+M].apply(this,arguments);return e||i.filter("["+_+"]").attr("title",function(){return r.attr(this,_)}).removeAttr(_),i}}},r.each(E.fn,function(e,t){if(!t||r.fn[e+M])return i;var n=r.fn[e+M]=r.fn[e];r.fn[e]=function(){return t.apply(this,arguments)||n.apply(this,arguments)}}),r.ui||(r["cleanData"+M]=r.cleanData,r.cleanData=function(e){for(var t=0,n;(n=r(e[t])).length&&n.attr(T);t++)try{n.triggerHandler("removeqtip")}catch(i){}r["cleanData"+M](e)}),w.version="2.0.1-36-",w.nextid=0,w.inactiveEvents="click dblclick mousedown mouseup mousemove mouseleave mouseenter".split(" "),w.zindex=15e3,w.defaults={prerender:s,id:s,overwrite:i,suppress:i,content:{text:i,attr:"title",deferred:s,title:{text:s,button:s}},position:{my:"top left",at:"bottom right",target:s,container:s,viewport:s,adjust:{x:0,y:0,mouse:i,scroll:i,resize:i,method:"flipinvert flipinvert"},effect:function(e,t,n){r(this).animate(t,{duration:200,queue:s})}},show:{target:s,event:"mouseenter",effect:i,delay:90,solo:s,ready:s,autofocus:s},hide:{target:s,event:"mouseleave",effect:i,delay:0,fixed:s,inactive:s,leave:"window",distance:s},style:{classes:"",widget:s,width:s,height:s,def:i},events:{render:o,move:o,show:o,hide:o,toggle:o,visible:o,hidden:o,focus:o,blur:o}};var F,I=".qtip-tip",q=!!t.createElement("canvas").getContext;F=E.tip=function(e){var t=e.plugins.tip;return"object"==typeof t?t:e.plugins.tip=new U(e)},F.initialize="render",F.sanitize=function(e){var t=e.style,n;t&&"tip"in t&&(n=e.style.tip,typeof n!="object"&&(e.style.tip={corner:n}),/string|boolean/i.test(typeof n.corner)||(n.corner=i),typeof n.width!="number"&&delete n.width,typeof n.height!="number"&&delete n.height,typeof n.border!="number"&&n.border!==i&&delete n.border,typeof n.offset!="number"&&delete n.offset)},r.extend(i,w.defaults,{style:{tip:{corner:i,mimic:s,width:6,height:6,border:i,offset:0}}})})})(window,document);;

/* uniform: (https://5dc5102abbf1a.t74.qifeiye.com/qfy-content/plugins/qfy_form/js/uniform/jquery.uniform.min.js) */
/* Uniform v2.1.2 Copyright © 2009 Josh Pyles / Pixelmatrix Design LLC http://pixelmatrixdesign.com https://github.com/uniform */
!function(a,b,c){"use strict";function d(a){var b=Array.prototype.slice.call(arguments,1);return a.prop?a.prop.apply(a,b):a.attr.apply(a,b)}function e(a,b,c){var d,e;for(d in c)c.hasOwnProperty(d)&&(e=d.replace(/ |$/g,b.eventNamespace),a.bind(e,c[d]))}function f(a,b,c){e(a,c,{focus:function(){b.addClass(c.focusClass)},blur:function(){b.removeClass(c.focusClass),b.removeClass(c.activeClass)},mouseenter:function(){b.addClass(c.hoverClass)},mouseleave:function(){b.removeClass(c.hoverClass),b.removeClass(c.activeClass)},"mousedown touchbegin":function(){a.is(":disabled")||b.addClass(c.activeClass)},"mouseup touchend":function(){b.removeClass(c.activeClass)}})}function g(a,b){a.removeClass(b.hoverClass+" "+b.focusClass+" "+b.activeClass)}function h(a,b,c){c?a.addClass(b):a.removeClass(b)}function i(a,b,c){var d="checked",e=b.is(":"+d);b.prop?b.prop(d,e):e?b.attr(d,d):b.removeAttr(d),h(a,c.checkedClass,e)}function j(a,b,c){h(a,c.disabledClass,b.is(":disabled"))}function k(a,b,c){switch(c){case"after":return a.after(b),a.next();case"before":return a.before(b),a.prev();case"wrap":return a.wrap(b),a.parent()}return null}function l(a,c,e){var f,g,h;return e||(e={}),e=b.extend({bind:{},divClass:null,divWrap:"wrap",spanClass:null,spanHtml:null,spanWrap:"wrap"},e),f=b("<div />"),g=b("<span />"),c.autoHide&&a.is(":hidden")&&"none"===a.css("display")&&f.hide(),e.divClass&&f.addClass(e.divClass),c.wrapperClass&&f.addClass(c.wrapperClass),e.spanClass&&g.addClass(e.spanClass),h=d(a,"id"),c.useID&&h&&d(f,"id",c.idPrefix+"-"+h),e.spanHtml&&g.html(e.spanHtml),f=k(a,f,e.divWrap),g=k(a,g,e.spanWrap),j(f,a,c),{div:f,span:g}}function m(a,c){var d;return c.wrapperClass?(d=b("<span />").addClass(c.wrapperClass),d=k(a,d,"wrap")):null}function n(){var c,d,e,f;return f="rgb(120,2,153)",d=b('<div style="width:0;height:0;color:'+f+'">'),b("body").append(d),e=d.get(0),c=a.getComputedStyle?a.getComputedStyle(e,"").color:(e.currentStyle||e.style||{}).color,d.remove(),c.replace(/ /g,"")!==f}function o(a){return a?b("<span />").text(a).html():""}function p(){return navigator.cpuClass&&!navigator.product}function q(){return void 0!==a.XMLHttpRequest?!0:!1}function r(a){var b;return a[0].multiple?!0:(b=d(a,"size"),!b||1>=b?!1:!0)}function s(){return!1}function t(a,b){var c="none";e(a,b,{"selectstart dragstart mousedown":s}),a.css({MozUserSelect:c,msUserSelect:c,webkitUserSelect:c,userSelect:c})}function u(a,b,c){var d=a.val();""===d?d=c.fileDefaultHtml:(d=d.split(/[\/\\]+/),d=d[d.length-1]),b.text(d)}function v(a,b,c){var d,e;for(d=[],a.each(function(){var a;for(a in b)Object.prototype.hasOwnProperty.call(b,a)&&(d.push({el:this,name:a,old:this.style[a]}),this.style[a]=b[a])}),c();d.length;)e=d.pop(),e.el.style[e.name]=e.old}function w(a,b){var c;c=a.parents(),c.push(a[0]),c=c.not(":visible"),v(c,{visibility:"hidden",display:"block",position:"absolute"},b)}function x(a,b){return function(){a.unwrap().unwrap().unbind(b.eventNamespace)}}var y=!0,z=!1,A=[{match:function(a){return a.is("a, button, :submit, :reset, input[type='button']")},apply:function(b,c){var h,i,k,m,n;return i=c.submitDefaultHtml,b.is(":reset")&&(i=c.resetDefaultHtml),m=b.is("a, button")?function(){return b.html()||i}:function(){return o(d(b,"value"))||i},k=l(b,c,{divClass:c.buttonClass,spanHtml:m()}),h=k.div,f(b,h,c),n=!1,e(h,c,{"click touchend":function(){var c,e,f,g;n||b.is(":disabled")||(n=!0,b[0].dispatchEvent?(c=document.createEvent("MouseEvents"),c.initEvent("click",!0,!0),e=b[0].dispatchEvent(c),b.is("a")&&e&&(f=d(b,"target"),g=d(b,"href"),f&&"_self"!==f?a.open(g,f):document.location.href=g)):b.click(),n=!1)}}),t(h,c),{remove:function(){return h.after(b),h.remove(),b.unbind(c.eventNamespace),b},update:function(){g(h,c),j(h,b,c),b.detach(),k.span.html(m()).append(b)}}}},{match:function(a){return a.is(":checkbox")},apply:function(a,b){var c,d,h;return c=l(a,b,{divClass:b.checkboxClass}),d=c.div,h=c.span,f(a,d,b),e(a,b,{"click touchend":function(){i(h,a,b)}}),i(h,a,b),{remove:x(a,b),update:function(){g(d,b),h.removeClass(b.checkedClass),i(h,a,b),j(d,a,b)}}}},{match:function(a){return a.is(":file")},apply:function(a,c){function o(){u(a,m,c)}var h,i,m,n;return h=l(a,c,{divClass:c.fileClass,spanClass:c.fileButtonClass,spanHtml:c.fileButtonHtml,spanWrap:"after"}),i=h.div,n=h.span,m=b("<span />").html(c.fileDefaultHtml),m.addClass(c.filenameClass),m=k(a,m,"after"),d(a,"size")||d(a,"size",i.width()/10),f(a,i,c),o(),p()?e(a,c,{click:function(){a.trigger("change"),setTimeout(o,0)}}):e(a,c,{change:o}),t(m,c),t(n,c),{remove:function(){return m.remove(),n.remove(),a.unwrap().unbind(c.eventNamespace)},update:function(){g(i,c),u(a,m,c),j(i,a,c)}}}},{match:function(a){if(a.is("input")){var b=(" "+d(a,"type")+" ").toLowerCase(),c=" color date datetime datetime-local email month number password search tel text time url week ";return c.indexOf(b)>=0}return!1},apply:function(a,b){var c,e;return c=d(a,"type"),a.addClass(b.inputClass),e=m(a,b),f(a,a,b),b.inputAddTypeAsClass&&a.addClass(c),{remove:function(){a.removeClass(b.inputClass),b.inputAddTypeAsClass&&a.removeClass(c),e&&a.unwrap()},update:s}}},{match:function(a){return a.is(":radio")},apply:function(a,c){var h,k,m;return h=l(a,c,{divClass:c.radioClass}),k=h.div,m=h.span,f(a,k,c),e(a,c,{"click touchend":function(){b.uniform.update(b(':radio[name="'+d(a,"name")+'"]'))}}),i(m,a,c),{remove:x(a,c),update:function(){g(k,c),i(m,a,c),j(k,a,c)}}}},{match:function(a){return a.is("select")&&!r(a)?!0:!1},apply:function(a,c){var d,h,i,k;return c.selectAutoWidth&&w(a,function(){k=a.width()}),d=l(a,c,{divClass:c.selectClass,spanHtml:(a.find(":selected:first")||a.find("option:first")).html(),spanWrap:"before"}),h=d.div,i=d.span,c.selectAutoWidth?w(a,function(){v(b([i[0],h[0]]),{display:"block"},function(){var a;a=i.outerWidth()-i.width(),h.width(k+a),i.width(k)})}):h.addClass("fixedWidth"),f(a,h,c),e(a,c,{change:function(){i.html(a.find(":selected").html()),h.removeClass(c.activeClass)},"click touchend":function(){var b=a.find(":selected").html();i.html()!==b&&a.trigger("change")},keyup:function(){i.html(a.find(":selected").html())}}),t(i,c),{remove:function(){return i.remove(),a.unwrap().unbind(c.eventNamespace),a},update:function(){c.selectAutoWidth?(b.uniform.restore(a),a.uniform(c)):(g(h,c),a[0].selectedIndex=a[0].selectedIndex,i.html(a.find(":selected").html()),j(h,a,c))}}}},{match:function(a){return a.is("select")&&r(a)?!0:!1},apply:function(a,b){var c;return a.addClass(b.selectMultiClass),c=m(a,b),f(a,a,b),{remove:function(){a.removeClass(b.selectMultiClass),c&&a.unwrap()},update:s}}},{match:function(a){return a.is("textarea")},apply:function(a,b){var c;return a.addClass(b.textareaClass),c=m(a,b),f(a,a,b),{remove:function(){a.removeClass(b.textareaClass),c&&a.unwrap()},update:s}}}];p()&&!q()&&(y=!1),b.uniform={defaults:{activeClass:"active",autoHide:!0,buttonClass:"button",checkboxClass:"checker",checkedClass:"checked",disabledClass:"disabled",eventNamespace:".uniform",fileButtonClass:"action",fileButtonHtml:"Choose File",fileClass:"uploader",fileDefaultHtml:"No file selected",filenameClass:"filename",focusClass:"focus",hoverClass:"hover",idPrefix:"uniform",inputAddTypeAsClass:!0,inputClass:"uniform-input",radioClass:"radio",resetDefaultHtml:"Reset",resetSelector:!1,selectAutoWidth:!0,selectClass:"selector",selectMultiClass:"uniform-multiselect",submitDefaultHtml:"Submit",textareaClass:"uniform",useID:!0,wrapperClass:null},elements:[]},b.fn.uniform=function(c){var d=this;return c=b.extend({},b.uniform.defaults,c),z||(z=!0,n()&&(y=!1)),y?(c.resetSelector&&b(c.resetSelector).mouseup(function(){a.setTimeout(function(){b.uniform.update(d)},10)}),this.each(function(){var d,e,f,a=b(this);if(a.data("uniformed"))return b.uniform.update(a),void 0;for(d=0;d<A.length;d+=1)if(e=A[d],e.match(a,c))return f=e.apply(a,c),a.data("uniformed",f),b.uniform.elements.push(a.get(0)),void 0})):this},b.uniform.restore=b.fn.uniform.restore=function(a){a===c&&(a=b.uniform.elements),b(a).each(function(){var c,d,a=b(this);d=a.data("uniformed"),d&&(d.remove(),c=b.inArray(this,b.uniform.elements),c>=0&&b.uniform.elements.splice(c,1),a.removeData("uniformed"))})},b.uniform.update=b.fn.uniform.update=function(a){a===c&&(a=b.uniform.elements),b(a).each(function(){var c,a=b(this);c=a.data("uniformed"),c&&c.update(a,c.options)})}}(this,jQuery);;

/* infield-label: (https://5dc5102abbf1a.t74.qifeiye.com/qfy-content/plugins/qfy_form/js/jquery.infieldlabel.min.js) */
/*
 In-Field Label jQuery Plugin
 http://fuelyourcoding.com/scripts/infield.html

 Copyright (c) 2009 Doug Neiner
 Dual licensed under the MIT and GPL licenses.
 Uses the same license as jQuery, see:
 http://docs.jquery.com/License

*/
(function(d){d.InFieldLabels=function(e,b,f){var a=this;a.$label=d(e);a.label=e;a.$field=d(b);a.field=b;a.$label.data("InFieldLabels",a);a.showing=true;a.init=function(){a.options=d.extend({},d.InFieldLabels.defaultOptions,f);if(a.$field.val()!==""){a.$label.hide();a.showing=false}a.$field.focus(function(){a.fadeOnFocus()}).blur(function(){a.checkForEmpty(true)}).bind("keydown.infieldlabel",function(c){a.hideOnChange(c)}).bind("paste",function(){a.setOpacity(0)}).change(function(){a.checkForEmpty()}).bind("onPropertyChange",
function(){a.checkForEmpty()})};a.fadeOnFocus=function(){a.showing&&a.setOpacity(a.options.fadeOpacity)};a.setOpacity=function(c){a.$label.stop().animate({opacity:c},a.options.fadeDuration);a.showing=c>0};a.checkForEmpty=function(c){if(a.$field.val()===""){a.prepForShow();a.setOpacity(c?1:a.options.fadeOpacity)}else a.setOpacity(0)};a.prepForShow=function(){if(!a.showing){a.$label.css({opacity:0}).show();a.$field.bind("keydown.infieldlabel",function(c){a.hideOnChange(c)})}};a.hideOnChange=function(c){if(!(c.keyCode===
16||c.keyCode===9)){if(a.showing){a.$label.hide();a.showing=false}a.$field.unbind("keydown.infieldlabel")}};a.init()};d.InFieldLabels.defaultOptions={fadeOpacity:0.5,fadeDuration:300};d.fn.inFieldLabels=function(e){return this.each(function(){var b=d(this).attr("for");if(b){b=d("input#"+b+"[type='text'],input#"+b+"[type='search'],input#"+b+"[type='tel'],input#"+b+"[type='url'],input#"+b+"[type='email'],input#"+b+"[type='password'],textarea#"+b);b.length!==0&&new d.InFieldLabels(this,b[0],e)}})}})(jQuery);
;

