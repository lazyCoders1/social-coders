update sc_users
    set name = ${name}, 
        profile_pic = ${profile_pic},
        cover_photo = ${cover_photo}, 
        headline = ${headline}, 
        city = ${city}, 
        state= ${state}, 
        linked_in = ${linked_in}, 
        github = ${github} 
        where id = ${id};    
