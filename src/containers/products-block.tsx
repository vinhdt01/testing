// import React from "react";
// import SectionHeader from "@components/common/section-header";
// import ProductCard from "@components/product/product-card";
// import ProductFeedLoader from "@components/ui/loaders/product-feed-loader";
// import { Product } from "@framework/types";
// import Alert from "@components/ui/alert";

// interface ProductsProps {
// 	sectionHeading: string;
// 	categorySlug?: string;
// 	className?: string;
// 	products?: Product[];
// 	loading: boolean;
// 	error?: string;
// 	uniqueKey?: string;
// }

// const ProductsBlock: React.FC<ProductsProps> = ({
// 	sectionHeading,
// 	categorySlug,
// 	className = "mb-9 md:mb-9 lg:mb-10 xl:mb-12",
// 	products,
// 	loading,
// 	error,
// 	uniqueKey,
// }) => {
// 	return (
// 		<div className={className}>
// 			<SectionHeader
// 				sectionHeading={sectionHeading}
// 				categorySlug={categorySlug}
// 			/>

// 			{error ? (
// 				<Alert message={error} />
// 			) : (
// 				<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-x-3 md:gap-x-5 xl:gap-x-7 gap-y-3 xl:gap-y-5 2xl:gap-y-8">
// 					{loading && !products?.length ? (
// 						<ProductFeedLoader limit={10} uniqueKey={uniqueKey} />
// 					) : (
// 						products?.map((product: Product) => (
// 							<ProductCard
// 								key={`product--key${product.id}`}
// 								product={product}
// 								imgWidth={340}
// 								imgHeight={440}
// 								variant="grid"
// 							/>
// 						))
// 					)}
// 				</div>
// 			)}
// 		</div>
// 	);
// };

// export default ProductsBlock;


// import React from "react";
// import SectionHeader from "@components/common/section-header";
// import ProductCard from "@components/product/product-card";
// import { Product } from "@framework/types";
// import { SwiperSlide } from "swiper/react";
// import Carousel from "@components/ui/carousel/carousel";

// interface ProductsProps {
// 	sectionHeading: string;
// 	categorySlug?: string;
// 	className?: string;
// 	products?: Product[];
// 	loading: boolean;
// 	error?: string;
// 	uniqueKey?: string;
// }

// const ProductsBlock: React.FC<ProductsProps> = ({
// 	sectionHeading,
// 	categorySlug,
// 	className = "mb-9 md:mb-9 lg:mb-10 xl:mb-12",
// 	products,
// 	loading,
// 	error,
// 	uniqueKey,
// }) => {
// 	return (
// 		<div className={className}>
// 			<SectionHeader
// 				sectionHeading={sectionHeading}
// 				categorySlug={categorySlug}
// 			/>

			


// <Carousel
// 					breakpoints={sliderBreakpoints}
// 					buttonClassName="-mt-8 md:-mt-10"
// 				></Carousel>
			
// 				<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-x-3 md:gap-x-5 xl:gap-x-7 gap-y-3 xl:gap-y-5 2xl:gap-y-8">
					
// 				<SwiperSlide key={`card-circle-`}></SwiperSlide>
// 							<ProductCard
// 								key={`product--key`}
// 								product={['gdfgf']}
// 								imgWidth={340}
// 								imgHeight={440}
// 								variant="grid"
// 							/>
// 							<ProductCard
// 								key={`product--key`}
// 								product={['gdfgf']}
// 								imgWidth={340}
// 								imgHeight={440}
// 								variant="grid"
// 							/>
// 					<ProductCard
// 								key={`product--key`}
// 								product={['gdfgf']}
// 								imgWidth={340}
// 								imgHeight={440}
// 								variant="grid"
// 							/>
// 							<ProductCard
// 								key={`product--key`}
// 								product={['gdfgf']}
// 								imgWidth={340}
// 								imgHeight={440}
// 								variant="grid"
// 							/>
// 							<ProductCard
// 								key={`product--key`}
// 								product={['gdfgf']}
// 								imgWidth={340}
// 								imgHeight={440}
// 								variant="grid"
// 							/>
// 							<ProductCard
// 								key={`product--key`}
// 								product={['gdfgf']}
// 								imgWidth={340}
// 								imgHeight={440}
// 								variant="grid"
// 							/>
				
// 				</div>
		
// 		</div>
// 	);
// };

// export default ProductsBlock;


import React from 'react'
import Carousel from "@components/ui/carousel/carousel";
import { Swiper , SwiperSlide } from "swiper/react";
import SwiperCore , { Navigation, Pagination, Scrollbar, A11y ,Autoplay  } from 'swiper/core';
import Items from '@components/items/items'


const breakpointsCircle = {

	"1025": {
		slidesPerView: 4,
		spaceBetween: 10,
	},
	"768": {
		slidesPerView: 3,
		spaceBetween: 10,
	},
	"500 ": {
		slidesPerView: 3,
		spaceBetween: 10,
	},
	"0": {
		slidesPerView: 2,
		spaceBetween: 10,
	},
};

const ProductsBlock:React.FC = ({
	
}) => {
	SwiperCore.use([Autoplay])

	return (
		<div className="max-w-[1200px] m-auto p-2 cursor-pointer">
			<Swiper
			spaceBetween={10}
			slidesPerView={4}
			breakpoints={breakpointsCircle}
			scrollbar={{ draggable: true, dragSize: 24 }}
			autoplay={{ delay: 4000 }}
			>
			   
			   <SwiperSlide><Items/></SwiperSlide>
			   <SwiperSlide><Items/></SwiperSlide>
               <SwiperSlide><Items/></SwiperSlide>
			   <SwiperSlide><Items/></SwiperSlide>
			   <SwiperSlide><Items/></SwiperSlide>
			   <SwiperSlide><Items/></SwiperSlide>
               <SwiperSlide><Items/></SwiperSlide>
			   <SwiperSlide><Items/></SwiperSlide>
			   
			</Swiper>
		</div>
	)
}
export default ProductsBlock

