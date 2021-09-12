$(() => {
    let inText = $('#in-item');
    let pre = $('#btn-prepend');
    let post = $('#btn-append');
    let uList = $('#ul-list')

    pre.click(() => {
        uList.prepend($(`<li>${inText.val()}</li>`));
    });

    post.click(() => {
        uList.append($(`<li>${inText.val()}</li>`))
    });
})