import React from 'react'

export default (
	<svg
		width='42'
		height='42'
		viewBox='0 0 42 42'
	>
		<defs>
			<linearGradient
				id='pm-a'
				x1='95.861%'
				x2='.286%'
				y1='50%'
				y2='50%'
			>
				<stop offset='0%' stopColor='#80CBC4' />
				<stop offset='100%' stopColor='#4DB6AC' />
			</linearGradient>
		</defs>
		<g fill='none' fillRule='evenodd'>
			{/* <circle
				cx='21'
				cy='21'
				r='21'
				fill='url(#pm-a)'
				opacity='.35'
			/> */}
			<circle cx='21' cy='21' r='16' fill='url(#pm-a)' />
			<g fill='#FFF' transform='translate(10 11)'>
				<path d='M15.8316359,13.0177947 L15.587657,13.9099005 C15.3869798,14.6399746 14.7188316,15.1498159 13.9617523,15.1498159 L12.979784,15.1498159 C12.2227047,15.1498159 11.5545565,14.6399746 11.3543449,13.9103661 L10.9432126,12.4101757 C10.91062,12.2900487 10.820292,12.1810963 10.6899216,12.1038053 C10.6834031,12.0996148 10.644292,12.0768 10.6377734,12.0726095 C10.5525671,12.020927 10.4478052,11.9897312 10.3495618,11.9897312 C10.3123131,11.9897312 10.2755301,11.9943873 10.2406094,12.0032339 L8.73576287,12.3980698 C8.59608033,12.4348529 8.45220731,12.4530116 8.3087999,12.4530116 C7.70863059,12.4530116 7.14943482,12.130345 6.84911736,11.6107259 L6.35790043,10.7595937 C5.97936075,10.1040169 6.0869163,9.27057778 6.61910678,8.73233439 L7.70444011,7.63442963 C7.8245671,7.51337143 7.84226022,7.32852487 7.84179461,7.22935026 C7.84226022,7.11155132 7.8245671,6.92763598 7.70444011,6.80611217 L6.61910678,5.70867302 C6.0869163,5.17042963 5.97936075,4.33652487 6.35790043,3.68094815 L6.84911736,2.83028148 C7.14943482,2.31066243 7.70863059,1.98799577 8.3087999,1.98799577 C8.45220731,1.98799577 8.59608033,2.0061545 8.73529726,2.04293757 L10.1740274,2.41961481 C10.2271068,2.43358307 10.2820486,2.4405672 10.337456,2.4405672 C10.4538581,2.4405672 10.5683978,2.40937143 10.6685036,2.34977354 C10.8165671,2.26130794 10.9157417,2.13093757 10.9581121,1.97635556 L11.3538793,0.531106878 C11.3585354,0.514344974 11.3664507,0.499445503 11.3715724,0.482683598 C11.0060697,0.385371429 10.6321861,0.310408466 10.2485248,0.268969312 C6.83980519,-0.101189418 3.82964646,1.76496931 2.47379461,4.57817566 L0.401836939,8.97864127 C0.179276093,9.45449312 0.5261544,10.0001862 1.05089514,10.0001862 L1.25622847,10.0001862 C1.50579461,10.0001862 1.70833429,10.2022603 1.70833429,10.4518265 L1.70833429,12.4236783 C1.70833429,14.1711069 3.12471525,15.5874878 4.87214382,15.5874878 L4.8823872,15.5874878 C5.92348773,15.5874878 6.80628138,16.3529481 6.95387927,17.3838053 L7.29563588,19.777964 L17.0734137,19.777964 L15.8418793,13.1286095 C15.8353607,13.0918265 15.836292,13.0545778 15.8316359,13.0177947' />
				<path d='M13.4706285,9.27611852 C12.335475,9.27611852 11.4145015,8.35561058 11.4145015,7.22045714 C11.4145015,6.0848381 12.335475,5.16433016 13.4706285,5.16433016 C14.6062475,5.16433016 15.5267555,6.0848381 15.5267555,7.22045714 C15.5267555,8.35561058 14.6062475,9.27611852 13.4706285,9.27611852 L13.4706285,9.27611852 Z M18.6253798,8.34071111 C18.3320465,8.04411852 18.1676867,7.64369524 18.1686179,7.22651005 L18.1686179,7.22045714 L18.1686179,7.21393862 C18.1676867,6.79721905 18.3320465,6.39633016 18.6253798,6.10020317 L19.6599618,5.05398095 C19.8988189,4.81233016 19.9467766,4.4407746 19.7768295,4.14651005 L19.2856126,3.29584339 C19.1161311,3.00157884 18.770184,2.85770582 18.4419301,2.94337778 L17.0031999,3.32052063 C16.5943957,3.42714497 16.1595174,3.36615026 15.7963428,3.14964233 L15.7860994,3.14358942 C15.4420147,2.93872169 15.1905861,2.60860529 15.084893,2.22261587 L14.6891258,0.776901587 C14.5992634,0.449578836 14.3017396,0.222361905 13.9618454,0.222361905 L12.9794115,0.222361905 C12.639983,0.222361905 12.3419936,0.449578836 12.2521311,0.776901587 L11.8563639,2.22261587 C11.7506708,2.60860529 11.4997078,2.93872169 11.1556232,3.14358942 L11.1449142,3.14964233 C10.7817396,3.36615026 10.3473269,3.42714497 9.93805705,3.32052063 L8.49979249,2.94337778 C8.17107292,2.85770582 7.82559144,3.00157884 7.65564435,3.29584339 L7.16442742,4.14651005 C6.99448033,4.4407746 7.042438,4.81233016 7.28129514,5.05398095 L8.36662847,6.15142011 C8.64506234,6.43311323 8.77450149,6.81817143 8.77310466,7.21393862 L8.77310466,7.22045714 L8.77310466,7.22651005 C8.77450149,7.62274286 8.64506234,8.00780106 8.36662847,8.28949418 L7.28129514,9.38693333 C7.042438,9.62858413 6.99448033,10.0001397 7.16442742,10.2944042 L7.65564435,11.1450709 C7.82559144,11.4393354 8.17107292,11.5832085 8.49979249,11.4975365 L10.0051047,11.1027005 C10.388766,11.0021291 10.7910518,11.0780233 11.1314115,11.282891 C11.1421205,11.2894095 11.1528295,11.295928 11.1640041,11.3024466 C11.4917925,11.4961397 11.7413586,11.7973884 11.8414645,12.1642878 L12.2521311,13.6640127 C12.3419936,13.9913354 12.639983,14.2185524 12.9794115,14.2185524 L13.9618454,14.2185524 C14.3017396,14.2185524 14.5992634,13.9913354 14.6891258,13.6640127 L15.0872211,12.2099175 C15.1915174,11.8295153 15.4387555,11.504055 15.7777184,11.3024466 L15.8550094,11.2563513 C16.1800041,11.0621926 16.5697184,11.0067852 16.9366179,11.1027005 L18.4419301,11.4975365 C18.770184,11.5832085 19.1161311,11.4393354 19.2856126,11.1450709 L19.7768295,10.2944042 C19.9467766,10.0001397 19.8988189,9.62858413 19.6599618,9.38693333 L18.6253798,8.34071111 Z' />
			</g>
		</g>
	</svg>
)