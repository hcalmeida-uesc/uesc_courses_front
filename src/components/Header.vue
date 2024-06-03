<template>
   <header>
			<div class="wrapper">
				<div class="wrapperContent">
					<a class="logo" href="./">
						<img src="/src/assets/logo.png" alt="Logo COLCIC" />
					</a>
					<div class="navList">
						<ul>
                     <a href="./" >Início</a>
                     <a href="./" >Documentação</a>
							<a href="./">Contato</a>
						</ul>
					</div>
				</div>
			</div>
			<div id="top"></div>
		</header>
</template>

<style scoped>
   header {
      background-color: #fff;
      position: relative;
      z-index: 999;
   }

   header #top {
      width: 100%;
      height: 80px;
   }

   header .wrapper {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      background-color: #fff;
      box-shadow: 0 10px 10px #0002;
   }

   header .wrapper .wrapperContent {
      z-index: 999;
      top: 0;
      left: 0;
      right: 0;
      max-width: var(--max-width);
      margin: 0 auto;
      padding: 0 30px;
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: #fff;
   }

   header .wrapper .logo {
      height: 50%;
   }

   header .wrapper .logo img {
      width: auto;
      height: 100%;
   }

   header .navList {
      position: fixed;
      z-index: -1;
      width: 80%;
      top: 0;
      left: 50%;
      transform: translateX(-50%) translateY(-100%);
      background: #fff;
      box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
      transition: all 0.3s ease-out;
   }

   header .navList ul {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
   }

   header .navList ul li,
   header .navList ul a {
      flex: 1;
      width: 100%;
      padding: 10px 20px;
      text-align: center;
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      transition: all 300ms ease-out;
   }

   header .navList ul li:hover:not(.dropdown),
   header .navList ul a:hover:not(.dropdown) {
      background: var(--primary-color-hover);
      color: #fff;
   }

   header .navList ul li[active]:not(.dropdown),
   header .navList ul a[active]:not(.dropdown) {
      background: var(--primary-color);
      color: #fff;
   }

   header .navList ul li[active] .title > * {
      color: #fff;
   }

   header .navList ul li:hover:not(.dropdown) > *,
   header .navList ul a:hover:not(.dropdown) > *,
   header .navList ul li[active]:not(.dropdown) > * {
      color: #fff;
   }

   header .navList ul li.dropdown {
      display: flex;
      flex-direction: column;
   }

   header .navList ul li.dropdown[active] .title{
      border-bottom: 2px solid var(--primary-color);
   }

   header .navList ul li.dropdown .title {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      cursor: default;
   }

   header .navList ul li.dropdown .title * {
      color: var(--text-color);
   }

   header .navList ul li.dropdown .title iconify-icon {
      transition: all 0.3s ease-out;
   }

   header .navList ul li.dropdown:hover .title iconify-icon {
      transform: scaleY(-1);
   }

   header .navList ul li.dropdown ul {
      max-height: 0;
      overflow: hidden;
      transition: all 300ms ease-in-out;
      background: #e8e8e8;
   }

   header .navList ul li.dropdown:hover ul {
      max-height: 500px;
   }

   header .navList ul li.dropdown ul a[active] {
      background: var(--primary-color);
      color: #fff;
      font-weight: bold;
   }
   header .wrapper .iconMenu {
      background: none;
      border: none;
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
   }

   header .wrapper .iconMenu div span {
      display: block;
      width: 30px;
      --height: 4px;
      height: var(--height);
      border-radius: 10px;
      background: var(--primary-color);
      transition: all 300ms ease-out;
   }

   header .wrapper .iconMenu div span:nth-child(1) {
      transform: translateY(calc(-1.2 * var(--height)));
   }

   header .wrapper .iconMenu div span:nth-child(3) {
      transform: translateY(calc(1.2 * var(--height)));
   }

   /* Show Nav List */
   @media (max-width: 1110px) {
      header.showNavList .wrapper .iconMenu div span {
         background: var(--cancel-color);
      }

      header.showNavList .wrapper .iconMenu div span:nth-child(1) {
         transform: translateY(var(--height)) rotate(45deg);
      }
      header.showNavList .wrapper .iconMenu div span:nth-child(2) {
         opacity: 0;
         transform: translateX(-100%) scaleX(0);
      }
      header.showNavList .wrapper .iconMenu div span:nth-child(3) {
         transform: translateY(calc(-1 * var(--height))) rotate(-45deg);
      }

      header.showNavList .navList {
         transform: translateX(-50%) translateY(calc(0% + 80px));
      }
   }

   @media (min-width: 1110px) {
      header .wrapper .iconMenu {
         display: none;
      }

      header .navList {
         position: relative;
         z-index: inherit;
         transform: none;
         flex-direction: row;
         width: unset;
         top: unset;
         left: unset;
         background: none;
         box-shadow: none;
      }

      header .navList ul {
         flex-direction: row;
         transform: translateX(20px);
      }

      header .navList ul li {
         width: unset;
         flex: unset;
         padding: 10px;
      }

      header .navList ul li.dropdown ul {
         position: absolute;
         bottom: 0;
         transform: translateY(100%);
         display: flex;
         flex-direction: column;
         cursor: auto;
         width: max-content;
         box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
      }

      header .navList ul li.dropdown ul a {
         padding: 10px 30px;
      }
   }
</style>
