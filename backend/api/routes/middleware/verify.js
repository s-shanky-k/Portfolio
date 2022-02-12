module.exports = (req, res, next) => {
	try {
		const token = req.header.x - api - key.split(" ")[1];
		const decode = jwt.verify(token, process.env.JWT_KEY);
		next();
	} catch (err) {
		res.status(401).json({
			message: "Auth Failed",
		});
	}
};
