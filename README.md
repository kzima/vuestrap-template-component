Vuestrap Template Component
=========

Vuestrap Template Component helps with developing your custom web components using [Vuestrap](https://github.com/kzima/vuestrap#redame).
It includes sample 'Hello World' component with some comments.

DEMO
=========

[Documentation](http://kzima.github.io/vuestrap-icons/#/icons)

QUICK USE
=========

**Bower:**

 - `bower install vuestrap-hello-world`
 - add script in your html document:
 ```js
 <script src="bower_components/vuestrap-hello-world/dist/vuestrapHelloWorld.min.js"></script>
 ```
 - use it within your Vue instance like this:

  ```js
  new Vue({
  	el: '#app',
  	components: { 'hello-world': vuestrapHelloWorld.helloWorld }
  })
  ```


**From source:**

 - `npm install vuestrap-hello-world`
 - import* desired component like so:

  ```js
  import helloWorld from 'vuestrap-hello-world/src/components/hello-world'
  ```

 - load it in your Vue instance:

  ```js
  new Vue({
  	el: '#app',
  	components: { 'hello-world': helloWorld }
  })
  ```

  *Note: You will need <a href="https://github.com/babel/babel-loader">Babel Loader</a> in your Webpack config file to support ES6 syntax.

You can then use icon component in your html, like so:
```html
<hello-world>Hello World</hello-world>
```

TODO
=========
- testing
