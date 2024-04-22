// checking whether the user is admin or not by creating adminMiddleware

const adminMiddleware = async (req, res, next) => {
    try {
        // console.log(req.user);
        const adminRole = req.user.isAdmin;
        if (!adminRole) {
            return res.status(403).json({ msg: "Access denied. User is not an admin." })
        }
        // return res.status(200).json({ msg: req.user.isAdmin })
        // if user is an admin, proceed to the next middleware
        next();
    } catch (error) {
        next();
    }
}

module.exports = adminMiddleware;