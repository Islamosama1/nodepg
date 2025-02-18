const express = require("express");
const { pool } = require("./model/dp");

const app = express();

app.listen(3000, () => {
  console.log("Server running on port 3000 hello");
});

app.get("/dp/users", async (req, res) => {
  const { rows } = await pool.query("SELECT * FROM playing_with_neon");
  res.send(rows);
});
