<?php
 
if ( ! defined( 'ABSPATH' ) )
    exit;
 
if ( ! class_exists( '_WP_Editors' ) )
    require( ABSPATH . WPINC . '/class-wp-editor.php' );
 
function bootmodal_tinymce_button_translation() {
    $strings = array(
        'button_label' => __('Add a Boot-Modal shortcode', 'bootmodal'),
        'form_label_post_permalink' => __('Post permalink', 'bootmodal'),
        
        'form_title_link_params' => __( "Link params", 'bootmodal'),
        'form_label_open_button_type' => __('Link type', 'bootmodal'),
        'form_label_open_button_text' => __('Link text', 'bootmodal'),
        'form_value_button' => __('Button', 'bootmodal'),
        'form_value_link' => __('Link', 'bootmodal'),
        'form_label_open_button_class' => __('CSS class', 'bootmodal'),
        'form_value_yes' => __('Yes', 'bootmodal'),
        'form_value_no' => __('No', 'bootmodal'),
        
        'form_title_modal_params' => __( "Modal window params", 'bootmodal'),
        'form_label_close_button_text' => __( "Close button text", 'bootmodal'),
        'form_label_close_button_class' => __( "Close button CSS class", 'bootmodal'),
        'form_label_animation' => __( "Animation", 'bootmodal'),
        'form_label_size' => __( "Modal window size", 'bootmodal'),
        'form_value_standard' => __( "standard", 'bootmodal'),
        'form_value_large' => __( "large", 'bootmodal'),
        'form_value_small' => __( "small", 'bootmodal'),
        
        'form_title_url' => __( "Add URL params", 'bootmodal'),
        'form_label_url_key' => __( "Key", 'bootmodal'),
        'form_label_url_value' => __( "Value", 'bootmodal')

    );
 
    $locale = _WP_Editors::$mce_locale;
    $translated = 'tinyMCE.addI18n("' . $locale . '.bootmodal_button", ' . json_encode( $strings ) . ");\n";
 
    return $translated;
}

$strings = bootmodal_tinymce_button_translation();
