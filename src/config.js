const config = {
    application: {
        cors: {
            server: [
                {
                    origin: "https://movapitwk.herokuapp.com/api/movies", //servidor que deseas que consuma o (*) en caso que sea acceso libre
                    credentials: true
                }
            ]
        }
    }}