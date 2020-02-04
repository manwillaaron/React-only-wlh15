insert into posts (name, content, title, img)
values ($1,$2,$3,$4)
returning *;