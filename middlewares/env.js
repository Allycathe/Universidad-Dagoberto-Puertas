export function loadEnv(req, res, next){
    if(!process.env.DATABASE_URL){
        return res.status(500).json({ error: 'La base de datos no esta configurada'})
    }
    req.DATABASE_URL =process.env.DATABASE_URL;
    next();
}