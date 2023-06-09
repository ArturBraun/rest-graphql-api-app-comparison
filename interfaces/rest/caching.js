// Cache for REST endpoints
const configureRestCaching = (req, res, next) => {
  // 300 seconds
  const cachingPeriod = 300;

  if (req.method == "GET") {
    res.set("Cache-control", `max-age=${cachingPeriod}`);
  } else {
    res.set("Cache-control", "no-store");
  }

  next();
};

export { configureRestCaching };
