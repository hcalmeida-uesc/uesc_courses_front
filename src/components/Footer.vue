<template>
   <footer>
      <div class="footerWave">
         <div class="left"></div>
         <a class="footerLogo" href="#top">
            <div class="logo">
               <img
                  src="/src/assets/footerLogo.png"
                  alt="Logo do curso de Ciência da Computação"
               />
            </div>
         </a>
         <div class="right"></div>
      </div>
      <div class="MaxWidthWrapper">
         <div class="footerWrapper">
            <div class="footerFloat">
               <div class="footerContent">
                  <h1>Contato</h1>
                  <ul>
                     <a
                        target="_blank"
                        href="https://goo.gl/maps/FKcmwBJ76WYrLQSj8"
                     >
                        <iconify-icon
                           icon="heroicons:map-pin-solid"
                        ></iconify-icon>
                        <span>
                           UESC, Pavilhão do DCET, 1º andar
                        </span>
                     </a>
                     <a target="_blank" href="mailto:colcic@uesc.br">
                        <iconify-icon
                           icon="bi:envelope-fill"
                        ></iconify-icon>
                        <span> colcic@uesc.br </span>
                     </a>
                     <a target="_blank" href="tel:7336805110">
                        <iconify-icon
                           icon="ant-design:phone-filled"
                        ></iconify-icon>
                        <span> (73) 3680-5110 </span>
                     </a>
                     <a
                        target="_blank"
                        href="https://www.facebook.com/groups/colcic/"
                     >
                        <iconify-icon
                           icon="akar-icons:facebook-fill"
                        ></iconify-icon>
                        <span> Facebook </span>
                     </a>
                  </ul>
               </div>
               <div class="footerContent">
                  <h1>Endereço</h1>
                  <a
                     target="_blank"
                     href="https://goo.gl/maps/FKcmwBJ76WYrLQSj8"
                     class="linkEndereco"
                  >
                     <p>
                        UNIVERSIDADE ESTADUAL DE SANTA CRUZ - UESC
                     </p>
                     <p>Campus Soane Nazaré de Andrade</p>
                     <p>Rodovia Jorge Amado, Km 16, Salobrinho</p>
                     <p>CEP 45662-900. Ilhéus-Bahia</p>
                  </a>
               </div>
            </div>

            <div class="footerCopy">
               <p>© 2022 - Todos os direitos reservados | COLCIC</p>
               <p>
                  Desenvolvido por
                  <a
                     target="_blank"
                     href="https://ilrocha.com"
                     id="copyIgor"
                     >Igor Rocha</a
                  >
               </p>
            </div>
         </div>
      </div>
   </footer>
</template>

<style>
   footer {
   position: relative;
   background: var(--variant-background-color-2);
   color: #fff;
   margin-top: 150px;
   padding: 20px 0;
   text-align: center;
   }

   footer .footerWave {
   position: absolute;
   top: 0;
   left: 50%;
   transform: translate(-50%, -100%);
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: 100%;
   height: 100px;
   }

   footer .footerWave .left,
   footer .footerWave .right {
   position: relative;
   background: var(--variant-background-color-2);
   width: 25%;
   height: 100%;
   }

   footer .footerWave .left {
   border-top-right-radius: 100%;
   }

   footer .footerWave .right {
   border-top-left-radius: 100%;
   }

   footer .footerLogo {
   position: absolute;
   top: -20px;
   left: 50%;
   transform: translateX(-50%);
   width: 50%;
   height: 100%;
   border-radius: 50%;
   }

   footer .footerLogo div {
   width: 100%;
   height: 100%;
   }

   footer .footerLogo:after {
   content: "";
   position: absolute;
   top: 0;
   left: 50%;
   width: 110%;
   height: 100%;
   border-radius: 0 0 100% 100%;
   /* background: red; */
   transform: translate(-50%, 20%);
   box-shadow: 0 30px 0 var(--variant-background-color-2);
   }

   footer .footerLogo img {
   width: 100%;
   height: 100%;
   object-fit: contain;
   }

   footer .footerWrapper {
   display: flex;
   flex-direction: column;
   gap: 20px;
   }

   footer .footerFloat{
   display: flex;
   justify-content: space-between;
   flex-wrap: wrap;
   gap: 30px;
   }

   footer .footerContent h1 {
   color: #fff;
   font-size: 1.4em;
   }

   footer .footerContent {
   position: relative;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   gap: 20px;
   }

   footer .footerContent ul {
   list-style: none;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   gap: 10px;
   }

   footer .footerContent ul a {
   text-decoration: none;
   font-size: 1em;
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 10px;
   }

   footer .footerContent ul a iconify-icon {
   color: var(--secondary-color);
   font-size: 1.3em;
   }

   footer .footerContent ul a span {
   color: #fff;
   font-weight: 600;
   transition: all 200ms ease-out;
   }

   footer .footerContent ul a:hover span {
   color: var(--secondary-color);
   }

   footer .footerContent .linkEndereco {
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   gap: 5px;
   text-align: left;
   text-decoration: none;
   }

   footer .footerContent .linkEndereco p {
   color: #fff;
   }

   footer .footerCopy {
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 10px;
   padding-top: 20px;
   margin-top: 20px;
   border-top: #fff3 solid 1px;
   }

   footer .footerCopy p {
   color: #fff;
   }

   #copyIgor {
   position: relative;
   z-index: 1;
   display: inline-block;
   width: fit-content;
   color: rgb(90, 235, 115);
   transition: all 300ms ease-out 0s;
   text-decoration: none;
   font-weight: 600;
   }

   #copyIgor::before {
   content: "";
   position: absolute;
   z-index: -1;
   left: 0px;
   bottom: -1px;
   width: 100%;
   height: 1px;
   background-color: rgb(90, 235, 115);
   opacity: 0;
   transition: all 300ms ease-out 0s;
   }

   #copyIgor::after {
   content: "";
   position: absolute;
   z-index: -1;
   left: 0px;
   bottom: -1px;
   width: 100%;
   height: 1px;
   background: linear-gradient(
         90deg,
         rgb(90, 235, 115),
         rgba(0, 0, 0, 0),
         rgb(90, 235, 115)
      )
      0% 0% / 200% 100%;
   animation: 1s ease-in-out 0s infinite reverse none running copy;
   }

   #copyIgor:hover {
   color: #232323;
   font-weight: bold;
   padding: 0px 5px;
   }

   #copyIgor:hover::before {
   bottom: 0px;
   opacity: 1;
   height: 100%;
   }

   #copyIgor:hover::after {
   animation-play-state: paused;
   }

   @keyframes copy {
   to {
      background-position: -200% 0%;
   }
   }
</style>