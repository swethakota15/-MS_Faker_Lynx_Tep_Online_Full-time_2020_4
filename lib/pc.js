/* @namespace faker.pc */
var pc = function(faker) {
    var self = this;
    var fake = faker.fake;
    /**
     * vehicle
     *
     * @method faker.pc.pc
     */
    self.pcbrand = function() {
        return faker.random.arrayElement(faker.definitions.pc.pcbrand);
    }

    self.pcbrand.schema = {
        "description": "Generates a random pc brand.",
        "sampleResults": ["dell", "hp", "lenovo"]
    };
}
module["exports"] = pc;