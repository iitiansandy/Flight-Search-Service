const CrudRepository = require('./crudRepository');
const { Flight } = require('../models');
class FlightRepository extends CrudRepository {
    constructor () {
        super(Flight);
    }

    async getAllFlights(filter) {
        // console.log("filter", filter);
        const response = await Flight.findAll({
            where: filter
        });
        
        return response;
    }
}

module.exports = FlightRepository;