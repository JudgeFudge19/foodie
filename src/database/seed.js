import db from "./db";
import data from "./data";

db.table("meals").bulkAdd(data.meals);
db.table("admins").add({
  username: "admin",
  password: "$2a$10$wA.Ohr1YdcOjl5PRElue5.YN/c2mR1wwwMGiOqjgveLHgv.dGvD06"
});
