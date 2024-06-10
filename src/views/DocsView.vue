<script setup>
import MainContent from '../components/PageMainContent.vue';
</script>

<template>
   <main>
      <section>
         <div class="MaxWidthWrapper">
            <div class="mainWrapper">
               <div class="mainContent">
                  <h2>Documentação da API do</h2>
                  <h1>
                     Colegiado de <br />
                     <b>Ciência da Computação</b>
                  </h1>
                  <p>
                     A API do Colegiado de Curso de Ciência da Computação é uma iniciativa para publicizar informações sobre o curso de Ciência da Computação da Universidade Estadual de Santa Cruz.
                  </p>
               </div>
               <div class="mainContentPhoto">
                  <img src="/src/assets/main_home.png" alt="" />
               </div>
            </div>
         </div>
      </section>
      <MainContent />
   </main>
</template>

<style>
   .mainWrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
   }

   .mainWrapper .mainContentPhoto {
      display: none;
      max-width: 30%;
      width: auto;
      /* max-height: 400px; */
   }

   .mainWrapper .mainContentPhoto img {
      width: 100%;
      height: 100%;
      object-fit: cover;
   }

   .mainContent {
      display: flex;
      flex-direction: column;
      gap: 20px;
   }

   .mainContent h2 {
      font-weight: 300;
      font-size: 1em;
   }

   .mainContent h1 {
      font-size: 2em;
   }

   .mainContent h1 b {
      color: var(--primary-color);
   }

   .modalRedes {
      position: relative;
      padding: 100px 0;
      margin-top: 120px;
   }

   .redesSociais {
      position: absolute;
      bottom: -70px;
      transform: translateY(calc(-30% - 130px));
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
      filter: drop-shadow(0 0 0.75rem #0003);
   }

   .redesSociais .title {
      position: relative;
      width: max-content;
      padding: 20px 30px;
      font-weight: bold;
      background: var(--secondary-color);
   }

   .redesSociais .title span {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%) translateY(50%);
      padding: 10px;
      background: var(--secondary-color);
      border-radius: 50%;
      font-size: 1.2em;
      width: 20px;
      height: 20px;
      z-index: 9;
   }

   .redesSociais .list {
      background-color: #fff;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 20px 0;
      box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
   }

   .redesSociais .list .item {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      padding: 20px 0;
      gap: 20px;
      font-size: 1.5em;
      font-weight: bold;
      transition: all 200ms ease-out;
   }

   .redesSociais .list .item *{
      transition: all 200ms ease-out;
   }

   .redesSociais .list .item:hover {
      background: var(--primary-color);
      color: white;
   }

   .redesSociais .list .item:hover *{
      color: white;
   }

   .entidades {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
      text-align: center;
      gap: 15px;
   }

   .entidades h1,
   .entidades p {
      color: #fff;
   }

   .entidades .cardList {
      display: flex;
      flex-wrap: wrap;
      align-items: stretch;
      justify-content: center;
      gap: 20px;
      width: 100%;
      padding: 20px 0;
   }

   .entidades .cardList .card {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      max-width: 250px;
      padding: 50px;
      border-radius: 5px;
      gap: 10px;
      background: #fff;
      box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
      transition: background 200ms ease-out;
      text-align: start;
   }

   .entidades .cardList .card img {
      width: 100%;
      max-width: 100px;
   }

   .entidades .cardList .card p {
      color: #000;
   }

   .entidades .cardList .card a {
      display: flex;
      align-items: center;
      font-size: 1.2em;
      font-weight: 600;
      text-decoration: none;
   }

   .entidades .cardList .card a * {
      color: var(--primary-color);
   }

   .entidades .cardList .card a iconify-icon {
      font-size: 1.5em;
      transition: margin 200ms ease-out;
   }
   .entidades .cardList .card a:hover iconify-icon {
      margin-left: 10px;
   }

   .academicos {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
      text-align: center;
      gap: 15px;
   }

   .missao {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 20px;
   }

   @media (min-width: 860px) {
      .mainContent p{
         width: 80%;
      }
      .mainWrapper .mainContentPhoto {
         display: block;
      }

      .modalRedes {
         padding: 20px 0;
         margin-top: 30px;
      }

      .redesSociais {
         bottom: -10px;
         flex-direction: row;
         align-items: stretch;
         transform: translateY(calc(-50% - 20px));
      }
      .redesSociais .list {
         flex-direction: row;
         padding: 0;
      }
      .redesSociais .title {
         padding: 10px 20px;
         display: flex;
         align-items: center;
         min-width: max-content;
      }

      .redesSociais .title span {
         bottom: unset;
         left: unset;
         right: 0;
         top: 50%;
         transform: translateX(50%) translateY(-50%) rotate(-90deg);
      }

      .missao {
         margin-left: 80px;
      }
   }
</style>