     update posts 
      set title = ${title}, 
      img  = ${img}, 
      content = ${content}, 
      name = ${name} 
      where id = ${id} ;
      select * from posts;