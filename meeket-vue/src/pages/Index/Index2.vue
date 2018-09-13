<template>
	<div class="index">
		<m-header title="">
            <i class="mintui mintui-back ml20" slot="left"></i>
        </m-header>
		<m-contain>
			
		</m-contain>
		<m-footer></m-footer>
	</div>
</template>

<script>
	import mHeader from '../../components/header'
	import mContain from '../../components/container'
	import mFooter from '../../components/footer'
	export default {
		name: 'index',
		data() {
			return {
				
			}
		},
		components: {
			mHeader,
			mContain,
			mFooter
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.s-index-header {
		width: 100%;
		height: 0.94rem!important;
		line-height: 0.94rem !important;
		background: -webkit-linear-gradient(top, #02429b, #297ae8);
		color: #fff;
		font-size: 0.33rem;
		position: fixed;
		top: 0;
		z-index: 999;
		img {
			height: .6rem;
			width: .6rem;
			float: left;
			margin: .16rem;
		}
		h3 {
			line-height: .94rem;
			text-align: center;
			margin-right: .8rem;
			font-weight: normal;
		}
	}

</style>
