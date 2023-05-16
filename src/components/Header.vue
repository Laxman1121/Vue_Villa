<template>
  <header>
    <h1><i>The Villas</i></h1>
    <h5><i>@Enjoy every moment</i></h5>
  </header>
  <main>
    
  <div class="container">
    <div class="overflow-hidden welcome">
      <h1 class="header drop-in">Welcome to <b>The Villas</b></h1>
      <p></p>
    </div>
    <div class="overflow-hidden context">
      <div class="drop-in-2">
        <p class="context-1">
          <i>
            Looking for villa....Dont worry here we come to solve your problem
            Choose the villa,throw the party.Don't forget the quote <b>"Enjoy every moment"</b>.....</i
          >
        </p>
        <br />
        <p class="context-2">
          Check out for some cool villas to make sweet memories.Check below for
          some stuff.....
        </p>
        <br />
      </div>
    </div>
  </div>
  </main>
</template>

<script setup lang="ts"></script>

<style scoped>
header {
  background-color: rgba(34, 201, 201, 0.815);
  text-align: center;
  padding: 14px;
}
h1 {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-size: 48px;
  text-shadow: 2px 2px #ffff;
}
h5 {
  position: absolute;
  top: 70px;
  right: 0px;
  left: 220px;
  font-size: 12px;
  font-weight: semi-bold;
}
.container {
  background-color: rgb(244, 241, 241);
  height: 45vh;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.5rem;
  padding-top: 0;
  box-shadow: 2px 6px rgb(244, 241, 241);
}
.welcome{
  margin:auto;


}
.header {
  margin-top: 0px;
  font-size: 2.5rem;
  margin: auto ;
  
  
}
p {
  margin: 0.5rem 0;
  font-size: 22px;
}

.overflow-hidden {
  overflow: hidden;
}
.context {
  margin:auto;
  width: 90%;
}

.drop-in {
  animation: drop-in 1s ease 200ms backwards;
   
}

.drop-in-2 {
  animation: drop-in 1200ms ease 500ms backwards;
    margin-left: 14rem;
}

.context-1 {
  margin-top: 20px;
  font-size: 18px;


}

.context-2 {
  margin-top: 13px;
  font-size: 18px;

 
}

@keyframes drop-in {
  from {
    opacity: 0;
    transform: translateY(-100px);
  }
  to {
    opacity: 1;
    transform: translate(0px);
  }
}
b {
  color: rgb(223, 69, 69);
}
</style>
