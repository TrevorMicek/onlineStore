import React from "react"
import { useShopify } from "../hooks"

export default (props) => {
	const { shopDetails } = useShopify()

	return (
		<div>
			<header className="App__header">
				<div className="App__title">
					<h1>Custome Ecommerce</h1>
					<h2>Built with React/Redux & Shopify's API</h2>
				</div>
			</header>
		</div>
	)
}
