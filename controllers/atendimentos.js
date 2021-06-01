
module.exports = app => {
    app.get("/atendimentos", (req, res) => res.send("Chegou! Tá tranquilo."));
}