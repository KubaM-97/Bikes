<template>
    <div class=" logo mx-auto my-5">
        <img src="../assets/mainPicture.jpg" alt="logo" class="d-block mx-auto" width="100%">
        <div id="ad">
            <p id="ad">
                Here every <br />Friday is Black! <br />Discounts of up <br />to -80%!!!
            </p> 
        </div>
        <div class="logo_text">
            <h2 class="cyan--text text--lighten-4"> 
                <v-icon class="cyan--text text--lighten-4">search</v-icon>  
                Best bicycles of the whole Milky Way!
            </h2>
        </div>
    </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Goldman&display=swap');
div.logo{
    overflow: hidden;
    position: relative;
    width: 400px;
}
div.logo img{
  display: block;
  transition: all 2s ease-out;
  opacity: .85;
  cursor: pointer;
  height: 100%;
}
div.logo:hover img{
  transform: scale(1.2);
  opacity: 1;
}
div.logo:hover div.logo_text{
  opacity: .77
}
div.logo_text{
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 20px;
  background-color: #6f7575;
  font: 700 11px "Goldman";
  text-align: center;
  cursor: default;
  opacity: .5;
  transition: all 2s ease-out;
}
div.logo_text > *{
  display: inline-block;
  vertical-align: top;
}
div#ad{
  border: 3px solid #f21e1b;
  border-radius: 15px;
  position: absolute;
  top: 35px;
  left: 15px;
  transform: rotate(-35deg);
}
p#ad{
  text-transform: uppercase;
  color: #f21e1b;
  font-size: 15px;
  font-weight: 700;
  margin: 2px;
}
</style>