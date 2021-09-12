$(() => {
    // let fetch = $('#btn-fetch');
    let list = $('#ul-random');
    let pageNumber = 1;

    $('#btn-fetch').click(() => {
        $.get(`https://reqres.in/api/users?page=${pageNumber}`, (response) => {
            pageNumber++;
            for(let user of response.data){
                list.append($(`<li><img width="100" src="${user.avatar}"> ${user.first_name} ${user.last_name}</li>`));
            }
        })
    })
})