<template>
	<v-app dark>
		<v-navigation-drawer
			v-model="drawer"
			:mini-variant="miniVariant"
			:clipped="clipped"
			fixed
			app
		>
			<v-list>
				<v-list-item
					v-for="(item, i) in items"
					:key="i"
					:to="item.to"
					router
					exact
				>
					<v-list-item-action>
						<v-icon>{{ item.icon }}</v-icon>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title v-text="item.title" />
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>
		<v-app-bar :clipped-left="clipped" fixed app>
			<v-app-bar-nav-icon @click.stop="drawer = !drawer" />
			<v-btn icon @click.stop="miniVariant = !miniVariant">
				<v-icon
					>mdi-{{
						`chevron-${miniVariant ? 'right' : 'left'}`
					}}</v-icon
				>
			</v-btn>
			<v-btn icon @click.stop="clipped = !clipped">
				<v-icon>mdi-application</v-icon>
			</v-btn>
			<v-btn icon @click.stop="fixed = !fixed">
				<v-icon>mdi-minus</v-icon>
			</v-btn>
			<v-toolbar-title v-text="title" />
			<v-spacer />
			<v-btn icon @click.stop="rightDrawer = !rightDrawer">
				<v-icon>mdi-menu</v-icon>
			</v-btn>
		</v-app-bar>
		<v-main>
			<v-container>
				<Nuxt />
			</v-container>
		</v-main>
		<v-navigation-drawer
			v-model="rightDrawer"
			:right="right"
			temporary
			fixed
		>
			<v-list>
				<v-list-item @click.native="right = !right">
					<v-list-item-action>
						<v-icon light> mdi-repeat </v-icon>
					</v-list-item-action>
					<v-list-item-title
						>Switch drawer (click me)</v-list-item-title
					>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>
		<v-footer :absolute="!fixed" app>
			<span>&copy; {{ new Date().getFullYear() }} MOBEIGEGE</span>
		</v-footer>
	</v-app>
</template>

<script>
import particleBac from '@/static/js/particle-bac'
export default {
	name: 'DefaultLayout',
	data() {
		return {
			clipped: false,
			drawer: false,
			fixed: false,
			items: [
				{
					icon: 'mdi-apps',
					title: 'Welcome',
					to: '/',
				},
				{
					icon: 'mdi-chart-bubble',
					title: 'Inspire',
					to: '/inspire',
				},
				{
					icon: 'mdi-dog',
					title: 'Lottie',
					to: '/lottie',
				},
				{
					icon: 'mdi-cat',
					title: 'PointLoader',
					to: '/pointLoader',
				},
				{
					icon: 'mdi-fish',
					title: 'CircleLoader',
					to: '/circleLoader',
				},
				{
					icon: 'mdi-music',
					title: 'SvgDemo',
					to: '/svgDemo',
				},
			],
			miniVariant: false,
			right: true,
			rightDrawer: false,
			title: 'use nuxt+Vuetify',
		}
	},
	mounted() {
		this.initParticle()
	},
	methods: {
		initParticle() {
			particleBac('.container', {
				line: false,
				color: 'rgba(65 ,160, 255 , 1)',
				count: 50,
				rate: 0.5,
				radius: 5,
				bounce: true,
				'z-index': -1,
			})
		},
	},
}
</script>
<style lang="scss" scoped>
.container {
	position: relative;
	height: 100%;
	.row {
		position: relative;
		z-index: 2;
		height: 100%;
	}
}
</style>
