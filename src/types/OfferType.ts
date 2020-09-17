type OfferType = {
    id: string
    slug: string
    tech: string
    offerTitle: string
    companyName: string
    companySize: number
    street: string
    city: string
    empType: string
    expLvl: string
    salaryFrom: number
    salaryTo: number
    image: string
    technology: { tech: string; techLvl: number }[]
    placeId: string
    dateAdd: string
    description: string
}

export default OfferType
