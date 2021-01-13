<style scoped>
  .background {
    background:  url("./assets/Untitled.png"),
        url("https://media.istockphoto.com/photos/bright-blue-defocused-blurred-motion-abstract-background-picture-id1047234038?k=6&m=1047234038&s=612x612&w=0&h=O1lP8GIn46sboZL5bnMsznd4A1tRNJ7iXm1MMVh5I5c=");
    background-size: contain, cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100%;
    width: 100%;
    position: absolute;
    overflow: hidden;
  }

  .darken{
    background: linear-gradient(
            rgba(0, 0, 0, 0.9),
            rgba(0, 0, 0, 0.8) );
    opacity:0.5;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100vw;
    height: 100vh;
    position: absolute;
    z-index: 100;
    transition: opacity 4s, visibility 0.3s
  }

  #canvas{
    z-index:99;
    position: absolute;
    top:0
  }
</style>
<script src="https://code.createjs.com/1.0.0/createjs.min.js"></script>

<template>
  <v-app>
    <v-main class="background" id="bg">
      <router-view  v-bind:style="{opacity:opacity}" style="color:white; position:absolute; z-index:1000;transition: opacity 4s"/>
      <canvas id= "canvas" onresize="resizeCanvas()">
      </canvas>
    </v-main>
    <div v-bind:style="{opacity:opacity}" class="darken"/>

  </v-app>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      opacity: 0,
      cases: []
    }
  },
  methods: {
    simulateCorona: function(){
      var self = this;
      const debounce = (func, wait, immediate) => {
          var timeout;
          return () => {
              const context = this, args = arguments;
              const later = function() {
                  timeout = null;
                  if (!immediate) func.apply(context, args);
              };
              const callNow = immediate && !timeout;
              clearTimeout(timeout);
              timeout = setTimeout(later, wait);
              if (callNow) func.apply(context, args);
          };
      };
      this.resizeCanvas()
      setTimeout(() => {
        self.opacity = 1
      }, 2000);
    },
    drawCircles: function(){
      var hotspots = [
      {x: 0.275, y: 0.55, n: 5, s: 6, r:2.5},
      {x: 0.25, y: 0.4, n: 5, s: 6, r:1},
      {x: 0.25, y: 0.2, n: 8, s: 10, r:1.2},
      {x: 0.325, y: 0.3, n: 8, s: 10, r:0.7},
      {x: 0.325, y: 0.2, n: 3, s: 10, r:1},
      {x: 0.35, y: 0.5, n: 3, s: 10, r:1},
      {x: 0.4, y: 0.6, n: 15, s: 12.5, r:1}, 
      {x: 0.4, y: 0.3, n: 10, s: 12.5, r:1.5},
      {x: 0.5, y: 0.3, n: 10, s: 12.5, r:1.5},
      {x: 0.55, y: 0.3, n: 12, s: 12.5, r:1.4},
      {x: 0.55, y: 0.55, n: 15, s: 12.5, r:1.45},
      {x: 0.6, y: 0.55, n: 15, s: 12.5, r:1.6},
      {x: 0.725, y: 0.4, n: 8, s: 3.5, r:1.6},
      {x: 0.705, y: 0.525, n: 8, s: 4, r:1.6},
      {x: 0.74, y: 0.3, n: 4, s: 2.5, r:0.8},
      {x: 0.78, y: 0.25, n: 3, s: 2.25, r:0.6},
      {x: 0.72, y: 0.85, n: 5, s: 2, r:1.5}, 
      {x: 0.71, y: 0.78, n: 3, s: 1.25, r:1.2}]
      var x_bounds = [0.15 * window.innerWidth, 0.75 * window.innerWidth];
      var y_bounds = [0.25 * window.innerHeight, 0.75 * window.innerHeight];
      var ctx = document.getElementById('canvas').getContext('2d');
      // ctx.beginPath();
      // ctx.arc(hotspots[1].x * window.innerWidth , hotspots[1].y * window.innerHeight , 50, 0, 2 * Math.PI)
      // ctx.stroke();
      var index = 0

      function random(min, max) {
        return Math.random() * (max - min) + min;
      }
      function randomizeHotspot(hotspot){
        var spread_factor = 15;
        var hotspot_pos = [hotspot.x * window.innerWidth, hotspot.y * window.innerHeight]
        var hotspot_x = random(hotspot_pos[0] - hotspot.r * spread_factor, hotspot_pos[0] + hotspot.s * spread_factor);
        var hotspot_y = random(hotspot_pos[1] - hotspot.r * spread_factor, hotspot_pos[1] + hotspot.s * spread_factor);
        var hotspot_r = random(0, hotspot.r * window.innerWidth / 250);
        return [hotspot_x, hotspot_y, hotspot_r]
      }

      function shuffleArray(array) {
          for (let i = array.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              [array[i], array[j]] = [array[j], array[i]];
          }
      }
      shuffleArray(hotspots)
      for(let item of hotspots){
        var count = 0;
        var self = this
        function createHotspots(){
            let timer = setInterval(() => {
            var randomized_circle = randomizeHotspot(item);
            self.cases.push(randomized_circle);
            ctx.beginPath();
            var x = randomized_circle[0];
            var y = randomized_circle[1];
            var r = randomized_circle[2]
            ctx.arc(x, y, r, 0, 2 * Math.PI)
            ctx.stroke();
            ctx.fillStyle = "red";
            ctx.fill();
            count++;
            if(count > item.n * 50 ){
              console.log("cleared")
              clearInterval(timer)
            }
          }, 50)
        }
        createHotspots()
      }
    },
    resizeCanvas: function() {
            var self = this
            var htmlCanvas = document.getElementById('canvas')
            htmlCanvas.width = window.innerWidth;
            htmlCanvas.height = window.innerHeight;
            this.drawCircles()
    },
  },
  mounted(){
    this.simulateCorona()
  }
}
</script>