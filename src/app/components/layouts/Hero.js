import Image from "next/image";

const Hero = () => {
	return (
		<section>
			<h1>Explore. Savor. Enjoy.</h1>
			<p>
				Discover a world of culinary wonders right at your fingertips. From
				mouthwatering Italian pastas to fiery Indian curries, and everything in
				between, FlavorDash offers an unparalleled selection that promises to
				tantalize your taste buds and ignite your senses.
			</p>
			<div className="w-full h-max">
				<Image src={"/wings.jpg"} alt="" layout="fill" objectFit="contain"/>
			</div>
		</section>
	);
};

export default Hero;
