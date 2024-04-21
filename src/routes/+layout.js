//import { SiFacebook, SiInstagram, SiTwitter, SiPinterest } from "@icons-pack/svelte-simple-icons";

export async function load() {
	return {
		nav: [
			['Home', '/'],
			['Story', '/story'],
			['Gallery', '/gallery'],
			['Family', '/family'],
			['Blog', '/blog'],
			['Test', '/test']
		],
		socials: [
			{slug: 'facebook', href: 'https://www.facebook.com/one.of.a.kind.original.hoyle', name: 'Facebook'},
			{slug: 'instagram', href: 'https://instagram.com/ooako', name: 'Instagram'},
			{slug: 'pinterest', href: 'https://za.pinterest.com/lindaannhoyle/', name: 'Pinterest'},
		]
	};
}
