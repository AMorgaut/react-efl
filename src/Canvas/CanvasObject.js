
export default {

    /**
     * The 2D position of a canvas object.
     * @see https://www.enlightenment.org/develop/api/efl/canvas/object/property/position
     */
    setPosition(x, y) {
        Object.assign(this.props.position, { x, y });
    },

    /**
     * The 2D size of a canvas object.
     * @see https://www.enlightenment.org/develop/api/efl/canvas/object/property/size
     * @param {number} w
     * @param {number} h
     */
    setSize(w, h) {
        Object.assign(this.props.size, { w, h });
    }
}
