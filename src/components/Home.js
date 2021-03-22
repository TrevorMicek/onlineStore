import React from "react"
import { useShopify } from "../hooks"

export default (props) => {
	const { shopDetails } = useShopify()

	return (
		<div>
			<header className="App__header">
				<div className="App__title">
					<h1>Custom Ecommerce Example</h1>
					<h2>An example shop with React/Redux & Shopify's API</h2>
				</div>
			</header>
		</div>
	)
}
