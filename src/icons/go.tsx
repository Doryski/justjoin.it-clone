import React from 'react'

export default (
	<svg width='42' height='42' viewBox='0 0 42 42'>
		<defs>
			<linearGradient
				id='go-a'
				x1='0%'
				x2='95.861%'
				y1='50%'
				y2='50%'
			>
				<stop offset='0%' stopColor='#6A90E5' />
				<stop offset='100%' stopColor='#69D4E5' />
			</linearGradient>
			<polygon
				id='go-b'
				points='0 0 6.509 0 6.509 .487 0 .487'
			/>
			<polygon
				id='go-d'
				points='.068 .035 19.936 .035 19.936 10.14 .068 10.14'
			/>
		</defs>
		<g fill='none' fillRule='evenodd'>
			{/* <circle
				cx='21'
				cy='21'
				r='21'
				fill='url(#go-a)'
				opacity='.35'
			/> */}
			<g transform='translate(5 5)'>
				<circle cx='16' cy='16' r='16' fill='url(#go-a)' />
				<g transform='translate(1.778 10.667)'>
					<path
						fill='#FFF'
						d='M7.124293,2.70410535 L2.42305844,2.70410535 C2.37038354,2.70410535 2.30453992,2.7304428 2.27820247,2.76994897 L2.00165926,3.12550453 C1.97532181,3.1650107 1.98849053,3.19134815 2.04116543,3.19134815 L6.80824362,3.20451687 C6.84774979,3.20451687 6.91359342,3.1650107 6.93993086,3.12550453 L7.16379918,2.7831177 C7.19013663,2.74361152 7.1769679,2.70410535 7.124293,2.70410535'
					/>
					<g transform='translate(0 3.916)'>
						<mask id='go-c' fill='#fff'>
							<use href='#go-b' />
						</mask>
						<path
							fill='#FFF'
							d='M6.439493,2.63374486e-05 L0.434554733,2.63374486e-05 C0.381879835,2.63374486e-05 0.316036214,0.026363786 0.289698765,0.0658699588 L0.0131555556,0.421425514 C-0.013181893,0.460931687 -1.31687243e-05,0.487269136 0.0526617284,0.487269136 L6.28146831,0.474100412 C6.33414321,0.474100412 6.38681811,0.447762963 6.39998683,0.395088066 L6.50533663,0.0790386831 C6.51850535,0.0395325103 6.4921679,2.63374486e-05 6.439493,2.63374486e-05'
							mask='url(#go-c)'
						/>
					</g>
					<path
						fill='#FFF'
						d='M6.14982058,5.12713745 L3.51607572,5.12713745 C3.46340082,5.12713745 3.41072593,5.16664362 3.38438848,5.20614979 L3.20002634,5.5353679 C3.17368889,5.57487407 3.18685761,5.61438025 3.23953251,5.61438025 L6.1103144,5.62754897 C6.14982058,5.62754897 6.20249547,5.5880428 6.20249547,5.5353679 L6.22883292,5.21931852 C6.22883292,5.16664362 6.20249547,5.12713745 6.14982058,5.12713745'
					/>
					<g transform='translate(7.111 .097)'>
						<mask id='go-e' fill='#fff'>
							<use href='#go-d' />
						</mask>
						<path
							fill='#FFF'
							d='M15.6180543,7.3350321 C14.9201119,7.69045597 14.1958321,7.73009383 13.4715523,7.41404444 C12.5234041,6.99251358 12.0229926,5.95231605 12.2600296,4.92515556 C12.5497416,3.68729547 13.339865,2.91020905 14.5645564,2.63379753 C15.8155852,2.3440856 17.0140708,3.08153416 17.2509761,4.38523786 C17.2774453,4.5169251 17.2774453,4.64861235 17.2904823,4.81967407 C17.2246387,5.95231605 16.6583835,6.79498272 15.6180543,7.3350321 M19.884721,3.87165761 C19.7136593,2.60746008 19.0682601,1.64614321 18.0280626,0.934900412 C16.8823835,0.158077366 15.6180543,0.0263901235 14.2749761,0.26342716 C12.7077663,0.539838683 11.5490502,1.1982749 10.5877333,2.46260412 C10.1758156,3.0016 9.8685893,3.57167407 9.67830123,4.17453827 L5.43863045,4.17453827 C5.24109959,4.17453827 5.14891852,4.30622551 5.10941235,4.38523786 C4.92505021,4.72762469 4.60900082,5.41226667 4.43793909,5.82062881 C4.34562634,6.04436543 4.41146996,6.21569053 4.68801317,6.21569053 L7.22970864,6.21569053 C7.0980214,6.39992099 6.99253992,6.55807737 6.87415309,6.70280165 C6.28156049,7.37453827 5.53081152,7.69045597 4.63546996,7.57206914 C3.59500905,7.42708148 2.87072922,6.55807737 2.85769218,5.50457942 C2.84439177,4.43791276 3.30529712,3.58194568 4.20077037,3.00252181 C4.95138765,2.51514733 5.75481152,2.39676049 6.58430947,2.80499095 C6.86085267,2.93667819 7.00584033,3.08153416 7.20337119,3.30527078 C7.37443292,3.50280165 7.38760165,3.48976461 7.58513251,3.43695802 C8.40159342,3.22639012 8.96784856,3.06836543 9.79760988,2.85766584 C9.95550288,2.81815967 10.0081778,2.75231605 9.92929712,2.63379753 C9.60007901,1.87001152 9.0995358,1.23791276 8.40159342,0.777007407 C7.33505844,0.052727572 6.14987325,-0.0921283951 4.91188148,0.131739918 C3.39747819,0.40815144 2.15961811,1.18523786 1.22463868,2.40992922 C0.355634568,3.54243951 -0.0658962963,4.83297449 0.105297119,6.26823374 C0.250153086,7.47988807 0.803239506,8.45437366 1.7777251,9.19182222 C2.83122305,9.98194568 4.02957695,10.2321514 5.32011193,10.0608263 C6.88719012,9.85025844 8.12518189,9.07317202 9.07333004,7.82214321 C9.28863868,7.5383572 9.47273745,7.23982222 9.62694321,6.92825021 C9.84857284,7.73075226 10.2944658,8.42026667 10.9431572,8.98112263 C11.8649679,9.77124609 12.9581037,10.1136329 14.1563259,10.1399704 C14.4987128,10.1004642 14.8542683,10.0871638 15.2098239,10.0213202 C16.4345152,9.77124609 17.5013136,9.21815967 18.3703177,8.33585514 C19.5950091,7.09786337 20.108721,5.6493037 19.884721,3.87165761'
							mask='url(#go-e)'
						/>
					</g>
				</g>
			</g>
		</g>
	</svg>
)
