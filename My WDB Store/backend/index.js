app.get("/debug-routes", (req, res) => {
  res.json({
    routes: app._router.stack
      .filter(r => r.route)
      .map(r => ({
        path: r.route.path,
        methods: r.route.methods
      }))
  });
});
