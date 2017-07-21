(function() {
    tinymce.PluginManager.add('bootmodal_editor_button', function( editor, url ) {
        editor.addButton( 'bootmodal_editor_button', {
            //text: 'Toggle Shortcode',
            title: editor.getLang('bootmodal_button.button_label'),
            icon: 'icon bootmodal-own-icon',
            onclick: function() {
                editor.windowManager.open( {
                    title: 'Boot-Modal',
                    body: [
                        {
                            type: 'textbox',
                            name: 'post',
                            label: editor.getLang('bootmodal_button.form_label_post_permalink')
                        },
                        {
                            type: 'container',
                            html: '#### '+editor.getLang('bootmodal_button.form_title_link_params')
                        },
                        {
                            type: 'listbox', 
                            name: 'open_button_type', 
                            label: editor.getLang('bootmodal_button.form_label_open_button_type'), 
                            'values': [
                                {text: 'Default', value: false },
                                {text: editor.getLang('bootmodal_button.form_value_button'), value: 'button'},
                                {text: editor.getLang('bootmodal_button.form_value_link'), value: 'link'}
                            ]
                        },
                        {
                            type: 'textbox',
                            name: 'open_button_text',
                            label: editor.getLang('bootmodal_button.form_label_open_button_text')
                        },
                        {
                            type: 'textbox',
                            name: 'open_button_class',
                            label: editor.getLang('bootmodal_button.form_label_open_button_class')
                        },
                        {
                            type: 'container',
                            html: '#### '+editor.getLang('bootmodal_button.form_title_modal_params')
                        },
                        {
                            type: 'textbox',
                            name: 'close_button_text',
                            label: editor.getLang('bootmodal_button.form_label_close_button_text')
                        },
                        {
                            type: 'textbox',
                            name: 'close_button_class',
                            label: editor.getLang('bootmodal_button.form_label_close_button_class')
                        },
                        {
                            type: 'listbox', 
                            name: 'animation', 
                            label: editor.getLang('bootmodal_button.form_label_animation'), 
                            'values': [
                                {text: 'Default', value: false },
                                {text: editor.getLang('bootmodal_button.form_value_yes'), value: 'yes'},
                                {text: editor.getLang('bootmodal_button.form_value_no'), value: 'no'}
                            ]
                        },
                        {
                            type: 'listbox', 
                            name: 'size', 
                            label: editor.getLang('bootmodal_button.form_label_size'), 
                            'values': [
                                {text: 'Default', value: false },
                                {text: editor.getLang('bootmodal_button.form_value_standard'), value: 'modal'},
                                {text: editor.getLang('bootmodal_button.form_value_large'), value: 'modal-lg'},
                                {text: editor.getLang('bootmodal_button.form_value_small'), value: 'modal-sm'}
                            ]
                        },
                        {
                            type: 'container',
                            html: '#### '+editor.getLang('bootmodal_button.form_title_url')
                        },
                        {
                            type: 'textbox',
                            name: 'url_key',
                            label: editor.getLang('bootmodal_button.form_label_url_key')
                        },
                        {
                            type: 'textbox',
                            name: 'url_value',
                            label: editor.getLang('bootmodal_button.form_label_url_value')
                        }
                    ],
                    onsubmit: function( e ) {
                        var shortcode = '[bootmodal';
                        if(e.data.post){
                            shortcode += ' post="'+e.data.post+'"';
                        }
                        if(e.data.open_button_type){
                            shortcode += ' buttontype="'+e.data.open_button_type+'"';
                        }
                        if(e.data.open_button_text){
                            shortcode += ' buttontext="'+e.data.open_button_text+'"';
                        }
                        if(e.data.open_button_class){
                            shortcode += ' buttonclass="'+e.data.open_button_class+'"';
                        }
                        if(e.data.close_button_text){
                            shortcode += ' buttonclosetext="'+e.data.close_button_text+'"';
                        }
                        if(e.data.close_button_class){
                            shortcode += ' buttoncloseclass="'+e.data.close_button_class+'"';
                        }
                        if(e.data.animation){
                            shortcode += ' animation="'+e.data.animation+'"';
                        }
                        if(e.data.size){
                            shortcode += ' size="'+e.data.size+'"';
                        }
                        if(e.data.url_key){
                            shortcode += ' urlkey="'+e.data.url_key+'"';
                        }
                        if(e.data.url_value){
                            shortcode += ' urlvalue="'+e.data.url_value+'"';
                        }
                        shortcode += ']';                       
                        editor.insertContent(shortcode);
                    }
                });
            }
        });
    });
})();