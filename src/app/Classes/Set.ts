import Legality from "./Legality"
import SetImage from "./SetImage"

export default class Set{

    id!: string
    name!: string
    series!: string
    printedTotal!: number
    total!: number
    legalities!: Legality
    ptcgoCode!: string
    releaseDate!: string
    updatedAt!: string
    images!: SetImage
}