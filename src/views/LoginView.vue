<template>
   <section>
      <div class="MaxWidthWrapper">
         <div class="mainWrapper">
            <div class="mainContentPhoto">
               <img src="/src/assets/contact.png" alt="" />
            </div>
            <div class="mainContent">
               <h1>Autenticar usuário</h1>
               <form action="">
                  <input
                     type="email"
                     placeholder="Login/Email *"
                     required
                  />
                  <input type="password" placeholder="Senha" />
                  <button
                     type="submit"
                     class="PrimaryButton"
                     disabled
                  >
                     Enviar
                  </button>
               </form>
            </div>
         </div>
      </div>
   </section>
</template>

<style scoped>
.mainWrapper {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 100px;
}

.mainWrapper .mainContentPhoto {
	display: none;
	max-width: 20%;
	width: auto;
}

.mainWrapper .mainContentPhoto img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}
.mainContent {
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 20px;
}

.mainContent h1 {
	font-size: 2em;
}

.mainContent form {
	display: flex;
	flex-direction: column;
	gap: 20px;
}

.mainContent form input,
.mainContent form textarea {
	background: none;
	border: 1px solid #232323;
	border-radius: 10px;
	padding: 10px;
}

.mainContent form textarea {
	resize: vertical;
	min-height: 3em;
}

.mainContent form button {
	border: none;
	width: 100%;
}

.mainContent form button:hover ~ .tooltipMouse {
	opacity: 1;
	visibility: visible;
}

.contact {
	display: flex;
	flex-direction: column;
	gap: 20px;
}

.contact .contactWrapper {
	display: flex;
	flex-direction: column;
	gap: 30px;
}

.contact .contactWrapper .contactItem {
	display: flex;
	align-items: center;
	gap: 30px;
}

.contact .contactWrapper .contactItem .contactIcon {
	background: var(--primary-color);
	border-radius: 50%;
	min-width: 50px;
	min-height: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
}

.contact .contactWrapper .contactItem .contactIcon iconify-icon {
	font-size: 2em;
	color: #fff;
}

.contact .contactWrapper .contactItem .contactInfo {
	display: flex;
	flex-direction: column;
	gap: 5px;
}

.contact .contactWrapper .contactItem .contactInfo .title {
	font-weight: bold;
	font-size: 1.2em;
}

.contact .contactWrapper .contactItem .contactInfo .content {
	display: flex;
	flex-direction: column;
	gap: 15px;
}

.contact .contactWrapper .contactItem .contactInfo .content > div {
	display: flex;
	flex-direction: column;
	gap: 5px;
}

.contact .contactWrapper .contactItem .contactInfo .content > div span {
	font-size: 0.8em;
}

.mainWrapper .mainContentPhoto.contactPhoto {
	width: 40%;
	max-width: unset;
}

.noGap {
	gap: 0;
}

@media (min-width: 860px) {
	.mainWrapper .mainContentPhoto {
		display: block;
	}

	.noPadding {
		padding: 0;
	}
}
</style>