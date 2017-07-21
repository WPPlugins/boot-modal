=== Boot-Modal ===
Contributors: albedo0, christer_f
Donate link: http://dev.juliencrego.com/boot-modal/
Tags: modal, bootstrap, shortcode
Requires at least: 3.0.1
Tested up to: 4.8
Stable tag: 1.6.1
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

This plugin use a simple shortcode to insert a link anywhere to open any page in a Bootstrap modal window.

== Description ==

This plugin use a simple shortcode to insert a link anywhere to open any page in a Bootstrap modal window.
You can use a button in the editor to generate the shortcode for you or use the default settings.

You can setup several params like :
- Size of the modal,
- Type of the button to open modal (link or button),
- CSS class for buttons,
- etc

== Installation ==

1. Upload the folder `boot-modal` to the `/wp-content/plugins/` directory
1. Activate the plugin through the 'Plugins' menu in WordPress
1. Set up the options

== Frequently Asked Questions ==

* How to use the plugin ?
You just have to had a shortcode with the permalink of the post you want to open in a modal.
Example : [bootmodal post="my-post"]

* Where can i found the permalink ?
You just have to open a post and you'll see the permalink under the title of the post.  

== Screenshots ==

1. A small modal windows. You can also use standard and large modal.
2. The three steps to use the plugin
3. Params of the plugin
4. Options for the shortcode
5. Shortcode generator in the editor

== Changelog ==

= 1.6 = 
* Add a button in editor to generate the shortcode
* New shortcode option : animation, buttoncloseclass and buttonclosetext

= 1.5 =
* Changes by Christer to :
 - take into account multi-lingual pages
 - process shortcodes in the page appearing in the modal
 - make it possible to send a parameter in the URL for the page being opened in the modal
   This makes it possible to customize the content of the page
   The parameter consists of a url_key (parameter name) and url_value
 Thanks to him !!
* New shortcode option : buttontext

= 1.4.1 =
* Add modification from "Christer_f" published in forum 
* Minor corrections

= 1.4 =
* Correct Warning: substr() expects parameter 1 to be string, array given in wp-includes/functions.php on line 1679

= 1.3 =
* Correct issue of position 



