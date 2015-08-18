# TinyMCE-character-limitation

![Demo gif](http://s8.postimg.org/umeht2s3p/demo.gif)

This TinyMCE plugin will set a limit character with a colored countdown. Submit button is disabled if the limitation is reached.

## How to install
Simply paste the entire directory to the "plugins" directory of your TinyMCE installation, and add it as a plugin in your TinyMCE init script. You can configure the plugin by using "maxCharacters" to set the limit you need, "maxDisplay" to display the countdown somewhere in your HTML code, "subButton" to disable the submit button of your form when the limit is reached. The variables "color1", "color2" and "color3" define the colors of maxDisplay — default values are "black" when more than 1/4 of "maxCharacters" is left, "orange" when only 1/4 of "maxCharacters" is left, "red" when the limit is reached or overreached.

##Install example
###Javascript :
```
tinymce.init({
...
  maxCharacters : 270,
  maxDisplay : "#maxDisplay",
  subButton : "#subButton",
  color1 : "green",
  color2 : "orange",
  color3 : "red",
  plugins: "charlimit"
});
```
###HTML :
```
  <span id="maxDisplay"></span> <!-- Don't write anything in here -->
  <input type="submit" id="subButton">
```
