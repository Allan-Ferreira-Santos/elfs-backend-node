import jwt from "jsonwebtoken";
import userServices from "../services/userServices.js";

function loginTokenMiddleware(req, res, next) {
    const { authorization } = req.headers;

    try {
        if (!authorization) {
            return res.status(401).send("Authorization header missing");
        }

        const parts = authorization.split(" ");

        if (parts.length !== 2) {
            return res.status(401).send("Invalid authorization format");
        }

        const [schema, token] = parts;

        if (schema !== "Bearer") {
            return res.status(401).send("Invalid authorization schema");
        }

        jwt.verify(token, "4ee0ae6876c1417d2a9e8e374eefddc8", async (error, decoded) => {
            if (error) {
                return res.status(400).send("Invalid token");
            }
            const user = await userServices.findByServices(decoded.id)

            if (!user || !user.id) {
                return res.status(400).send("Invalid token");
            }

            req.userId = user.id;

            return next();
        });


    } catch (error) {
        console.log(error);
        return res.status(500).send("Internal Server Error");
    }
}

export default { loginTokenMiddleware };
