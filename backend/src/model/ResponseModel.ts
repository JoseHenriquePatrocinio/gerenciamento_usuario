export default class TResponse {
    msg: string
    data: object

    constructor(data: object, msg: string) {
        this.msg = msg
        this.data = data
    }
}