/**
 *
 * @namespace faker.satellites
 */
var satellites = function (faker) {
    var self = this;
    var fake = faker.fake;
/**
   * vehicle
   *
   * @method faker.satellites.satellites
   */
  self.countries = function () {
    return faker.random.arrayElement(faker.definitions.satellites.countries); 
    }

    self.countries.schema = {
        "description": "Generates a random country.",
        "sampleResults": ["India", "US", "Aus"]
      };   
  self.numbersat = function () {
        return faker.random.arrayElement(faker.definitions.satellites.numbersat);
      };
    
      self.numbersat.schema = {
        "description": "Generates a numbersat type.",
        "sampleResults": ["1", "2", "3"]
      };
  self.operationaldate = function () {
        return faker.random.arrayElement(faker.definitions.satellites.operationaldate); 
        }
    
      self.operationaldate.schema = {
            "description": "Generates a random country.",
            "sampleResults": ["1995-1996", "2000-2001", "1999-1998"]
          };   
      
}
module["exports"] = satellites;