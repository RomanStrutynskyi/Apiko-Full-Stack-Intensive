export let Article = {
   init(json){
    let articleWrap = document.createElement('div');
    articleWrap.className = "article card";
    //
    let head = document.createElement('div');
    head.className = "article__head card-header";
    // 
    let title = document.createElement('h4');
    title.className = "article__title js-post card-title";
    title.dataset.post = json.id;
    title.innerHTML = json.title;
    // 
    let user = document.createElement('h5');
    user.className = "article__user js-user card-subtitle text-muted";
    user.dataset.user = json.userId;
    user.innerHTML = `user${json.userId}`;
    //
    let body = document.createElement('div');
    body.className = "article__body card-body";
    body.innerHTML = json.body;     
    //
    head.appendChild(title);
    head.appendChild(user);
    articleWrap.appendChild(head);
    articleWrap.appendChild(body);
    return articleWrap;
  }


}