const pg = require("pg");

export const testarConexao = (host, porta, user, senha, base = "postgres", timeout = 600, callback) => {
    try {
        const pool = new pg.Pool({
            host: host,
            port: porta,
            user: user,
            password: senha,
            database: base,
            idleTimeoutMillis: timeout,
            connectionTimeoutMillis: timeout
        });
        
        pool.connect(function(err) {
            if(err) {
                return callback(err)
            } else {
                pool.end()
                return callback(null)
            }
        });
    } catch (error) {
        return callback(error)
    }
}