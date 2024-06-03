<script>
   export default {
      name: "GoToTop",
      created () {
         window.addEventListener("scroll", function (e) {
            let scrollHeight = window.scrollY
            let button = document.querySelector("#goToTop")

            scrollHeight >= 200
               ? button.classList.remove("hide")
               : button.classList.add("hide")
         })
      },
      unmounted() {
         windows.removeEventListener("scroll")
      },
      methods: {
         toggle(display) {
            this.$el.style.display = display
         }
      }
   }
</script>

<template>
   <a id="goToTop" href="#top" class="hide">
      <iconify-icon icon="akar-icons:arrow-up"></iconify-icon>
   </a>
</template>

<style>
   #goToTop {
      position: fixed;
      z-index: 99999;
      bottom: 100px;
      right: 100px;
      width: 50px;
      height: 50px;

      background: var(--primary-color);
      box-shadow: 0 0 10px rgba(0,0,0,0.2);
      
      border-radius: 50%;
      cursor: pointer;

      display: flex;
      align-items: center;
      justify-content: center;

      transition: all 200ms ease-out;
   }

   #goToTop > *{
      color: #fff;
      font-size: 1.2rem;
   }

   #goToTop:hover {
      background: var(--secondary-color);
      transform: scale(1.2);
   }

   #goToTop:hover > *{
      color: #232323;
   }

   #goToTop.hide{
      opacity: 0;
      transform: scale(0);
   }

   @media (max-width: 768px) {
      #goToTop {
         bottom: 50px;
         right: 30px;
      }
   }
</style>