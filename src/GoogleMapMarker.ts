import stringFormat from './helpers/stringFormat'
import { latlngOptions } from './helpers/options'
import './googleMap.css'
import { baseURL } from './axios'
import { ParamsType } from './store/reducer'
import TechSvg from './helpers/TechSvg'

const createHTMLMapMarker = (history: any) => {
	function CustomMarker(item: any, map: any, initParams: any) {
		this.latlng = new global.google.maps.LatLng(
			item.lat,
			item.lng
		)
		this.offers = item.offers
		this.setMap(map)
		this.initParams = initParams
		this.placeId = item.placeId
	}

	CustomMarker.prototype = new global.google.maps.OverlayView()

	CustomMarker.prototype.urlPush = (slug: any) => {
		history.push(`/offer/${slug}`)
	}

	CustomMarker.prototype.activeMarker = (tech: string) => {
		if (!this.pointer) {
			this.withActiveMarker = true
		} else {
			this.pointer.classList.add('active_marker')
			this.pointer.style.backgroundImage = TechSvg(tech)
		}
		this.map.setCenter(this.latlng)
		this.map.setZoom(12)
	}

	CustomMarker.prototype.deactiveMarker = () => {
		this.pointer.classList.remove('active_marker')
	}

	CustomMarker.prototype.onLabelActiveMapRemove = () => {
		const mapRect = document
			.getElementById('map')
			.getBoundingClientRect()
		const tooltipRect = this.tooltip.getBoundingClientRect()

		const space = 10

		let vertical = 0
		let horizontal = 0

		if (mapRect.left + space - tooltipRect.left > 0) {
			horizontal = mapRect.left + space - tooltipRect.left
		}

		if (mapRect.right - space - tooltipRect.right < 0) {
			horizontal = mapRect.right - space - tooltipRect.right
		}
		if (mapRect.top + space - tooltipRect.top > 0) {
			vertical = mapRect.top + space - tooltipRect.top
		}
		if (vertical + horizontal) {
			let point = new global.google.maps.LatLng(
				this.map.getCenter().lat(),
				this.map.getCenter().lng()
			)
			let pixelpoint = this.projection.fromLatLngToDivPixel(
				point
			)
			pixelpoint.x -= horizontal
			pixelpoint.y -= vertical
			point = this.projection.fromDivPixelToLatLng(pixelpoint)
			this.map.panTo(point)
		}
	}

	CustomMarker.prototype.filterOffers = (
		list: any[],
		params: ParamsType
	) => {
		const { location, tech, expLvl, from, to, sort } = params

		return list
			.filter(
				(item: any) =>
					(location
						? stringFormat(item.city) === location
						: true) &&
					(tech ? item.tech === tech : true) &&
					(expLvl ? item.expLvl === expLvl : true) &&
					(from ? item.salaryFrom >= from : true) &&
					(to ? item.salaryTo <= to : true)
			)
			.sort((a: any, b: any) => {
				switch (sort) {
					case 'sal-down':
						return a.salaryFrom > b.salaryFrom
							? 1
							: a.salaryFrom === b.salaryFrom
							? a.salaryTo > b.salaryTo
								? 1
								: -1
							: -1
					case 'sal-up':
						return a.salaryTo < b.salaryTo
							? 1
							: a.salaryTo === b.salaryTo
							? a.salaryFrom < b.salaryFrom
								? 1
								: -1
							: -1
					default:
						return a.dateAdd < b.dateAdd ? 1 : -1
				}
			})
	}

	CustomMarker.prototype.update = (params: ParamsType) => {
		let arrayLength = 0

		this.tooltip_inner.innerHTML = ''

		this.filterOffers(this.offers, params).forEach(
			(item: any, index: number) => {
				if (!item[index + 1]) {
					this.pointer.style.backgroundImage = `url(${techIcon(
						item.tech
					)})`
				}

				this.singleOfferSlug = item.slug

				this.tooltip_inner.appendChild(item.htmlEl)

				arrayLength++
			}
		)

		if (params.location) {
			this.map.setCenter(
				new global.google.maps.LatLng(
					latlngOptions[params.location][0],
					latlngOptions[params.location][1]
				)
			)
			this.map.setZoom(11)
		} else {
			this.map.setCenter(
				new global.google.maps.LatLng(
					+latlngOptions.poland[0],
					+latlngOptions.poland[1]
				)
			)
			this.map.setZoom(6)
		}

		this.currentLength = arrayLength

		if (!arrayLength) {
			this.pointer.style.display = 'none'
			this.tooltip.style.display = 'none'
		}

		if (arrayLength) {
			this.pointer.innerHTML =
				arrayLength > 1
					? `<span class='marker_span'>${arrayLength}</span>`
					: ''

			this.pointer.style.display = 'block'
			this.tooltip.style.display = 'none'
		}
	}

	CustomMarker.prototype.draw = () => {
		let self = this
		let pointer = this.pointer
		let tooltip = this.tooltip
		let tooltip_inner = this.tooltip_inner

		if (!pointer) {
			//pointer
			pointer = this.pointer = document.createElement('div')
			pointer.className = 'marker'
			pointer.id = this.placeId

			if (this.withActiveMarker) {
				pointer.classList.add('active_marker')
			}

			//tooltip
			tooltip = this.tooltip = document.createElement('div')
			tooltip.className = 'tooltip_container'
			tooltip.style.display = 'none'

			//tooltip_inner
			tooltip_inner = this.tooltip_inner = document.createElement(
				'div'
			)
			tooltip.appendChild(this.tooltip_inner)
			tooltip_inner.className = 'tooltip_inner'

			//creating all offers html elements
			this.offers.forEach((item: any) => {
				const htmlEl = document.createElement('div')
				htmlEl.className = 'tooltip_item_container'
				htmlEl.onclick = () => {
					this.urlPush(item.slug)
				}
				htmlEl.innerHTML = `<div class='logo_wrapper'>
                                  <img class='logo' src=${
										baseURL + item.image
									}/>
                                </div>
                                <div class='item_info_container'>
                                  <span class='item_info_name'>${
										item.offerTitle
									}</span>
                                  <span class='item_info_salary'>${
										item.salaryFrom +
										' - ' +
										item.salaryTo
									} PLN</span>
                                  <span class='item_info_name'>${
										item.companyName
									}</span>
                                </div>`
				item.htmlEl = htmlEl
			})

			this.update(this.initParams)

			//click handler
			const clickHandler = (e: any) => {
				if (!tooltip.contains(e.target)) {
					document
						.getElementById('map')
						.removeEventListener(
							'click',
							clickHandler,
							true
						)

					if (!pointer.contains(e.target)) {
						tooltip.style.display = 'none'
					}
				}
			}

			// event listeners
			global.google.maps.event.addDomListener(
				pointer,
				'click',
				(event: any) => {
					if (this.currentLength > 1) {
						if (tooltip.style.display === 'block') {
							tooltip.style.display = 'none'
						} else {
							tooltip.style.display = 'block'
							this.onLabelActiveMapRemove()
						}

						document
							.getElementById('map')
							.addEventListener(
								'click',
								clickHandler,
								true
							)
					} else if (this.currentLength === 1) {
						this.urlPush(this.singleOfferSlug)
					}

					global.google.maps.event.trigger(self, 'click')
				}
			)

			global.google.maps.event.addDomListener(
				pointer,
				'mouseover',
				(event: any) => {
					if (this.currentLength === 1) {
						tooltip.style.display = 'block'
						this.onLabelActiveMapRemove()
						tooltip.classList.add('zindex_high')
						pointer.classList.add('zindex_high')
					}
					global.google.maps.event.trigger(
						self,
						'mouseover'
					)
				}
			)

			global.google.maps.event.addDomListener(
				pointer,
				'mouseout',
				(event: any) => {
					if (this.currentLength === 1) {
						tooltip.style.display = 'none'
						tooltip.classList.remove('zindex_high')
						pointer.classList.remove('zindex_high')
					}
					global.google.maps.event.trigger(self, 'mouseout')
				}
			)

			//add to map
			var panes = this.getPanes()
			panes.overlayImage.appendChild(pointer)
			panes.overlayImage.appendChild(tooltip)
		}

		var point = this.getProjection().fromLatLngToDivPixel(
			this.latlng
		)

		if (point) {
			pointer.style.left = point.x - 20 + 'px'
			pointer.style.top = point.y - 20 + 'px'

			tooltip.style.left = point.x - 113 + 'px'
			tooltip.style.top = point.y - 17 + 'px'
		}
	}

	CustomMarker.prototype.remove = () => {
		if (this.pointer) {
			this.pointer.parentNode.removeChild(this.pointer)
			this.pointer = null
		}
	}

	CustomMarker.prototype.getPosition = () => this.latlng

	return CustomMarker
}
export default createHTMLMapMarker
