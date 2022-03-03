package eu.donttradewithrussia.database.query.PSQL;

import eu.donttradewithrussia.database.query.SQLQueries;

public class PSQLQueries extends SQLQueries {

    public static final String CREATE_JSON = "SELECT array_to_json(array_agg(row_to_json(row)))";
    public static final String CREATE_JSON_ROW ="SELECT row_to_json(row)";

}
