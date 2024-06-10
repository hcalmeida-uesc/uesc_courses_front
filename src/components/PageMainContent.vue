<script>
export default {
	data() {
		return {
			pedagogicProjects: []
		}
	},
	methods: {
		async getPedagogicProjects() {
			try
			{
				const res = await fetch(`http://localhost:5142/courses/1/pedagogicProjects`)
				const data = res.json()

				console.log(data)

				this.pedagogicProjects = data
			} catch (error) {
				console.log(error)
			}
		}
	},
	created() {
		this.getPedagogicProjects()
	},
};
</script>

<template> 
   <section>
      <div class="MaxWidthWrapper">
         <div class="objetivo">
            <div class="title">
               <span>
                  <iconify-icon
                     icon="fluent:target-arrow-20-filled"
                  ></iconify-icon>
               </span>
               <h2>Projetos Pedagógicos</h2>
            </div>
            <div>
               <h3 v-for="pedagogicProject in pedagogicProjects" >Ano - {{ pedagogicProject.year }}</h3>
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
}

.mainWrapper .mainContentPhoto {
	display: none;
	max-width: 40%;
	width: auto;
	max-height: 400px;
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

.mainContent h1 {
	font-size: 2em;
	color: #fff;
}

.mainContent p,
.mainContent p b {
	color: #fff;
}

.mainContent h1 b {
	color: var(--secondary-color);
}

.objetivo {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 0 auto;
	text-align: center;
}

.objetivo .title {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 20px;
	padding: 20px 30px;
	font-weight: bold;
}

.objetivo .title span {
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 10px;
	background: var(--secondary-color);
	border-radius: 50%;
	font-size: 5em;
	width: 100px;
	height: 100px;
	z-index: 9;
}

.objetivo .title h3 {
	font-size: 2.5em;
}

.roundedEgresso {
	border-top-right-radius: 200px;
	position: relative;
	margin-bottom: 100px;
}
.roundedEgresso:after {
	content: "";
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	height: 50px;
	transform: translateY(calc(100% - 1px));
	background: linear-gradient(
		90deg,
		var(--variant-background-color),
		var(--variant-background-color-2)
	);
	border-radius: 0 0 100% 100%;
}

.egresso {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 0 auto;
	text-align: center;
	gap: 50px;
}

.egresso .wrapperContent {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 20px;
}

.egresso .wrapperContent .image {
	width: 30%;
	height: 100%;
}

.egresso .wrapperContent .image img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}
.egresso h2,
.egresso p {
	color: #fff;
}

.egresso .content {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: start;
	gap: 20px;
	text-align: left;
}

.egresso .content p b {
	color: #fff;
}

.egresso .content p b.bolder {
	color: var(--secondary-color-hover);
}

.egresso .content ul {
	list-style-type: disc;
	margin-left: 20px;
	display: flex;
	flex-direction: column;
	gap: 10px;
}

.egresso .content ul li {
	color: #fff;
}

.egresso .content ul li b {
	color: #fff;
}

.infraestrutura {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	gap: 30px;
}

.infraestrutura .container {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	gap: 30px;
}

.infraestrutura .container .list {
	display: flex;
	gap: 20px;
	flex-wrap: wrap;
	align-items: stretch;
	justify-content: center;
}

.infraestrutura .container .list .card {
	max-width: 300px;
	padding: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	gap: 20px;
	background-color: #dce7f9;
	box-shadow: 0 0 20px #0001;
}

.infraestrutura .container .list .card img {
	width: 100px;
	height: 100px;
}

.infraestrutura .container .list .card h4 {
	font-size: 1.5em;
}

@media (min-width: 860px) {
	.mainWrapper .mainContentPhoto {
		display: block;
	}
	.mainContent p{
		max-width: 80%;
	}
}

@media (max-width: 1000px) {
	.egresso .wrapperContent .image {
		display: none;
	}
}

</style>